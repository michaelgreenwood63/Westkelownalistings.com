// Proxy to KelownaListings hub — no DDF credentials needed on this site.
// Uses the hub's `cities` param (built for kelownadownsizing.com) to widen
// beyond the hub's Kelowna-only default, since West Kelowna is a separate
// DDF `City` value. Optional `?area=` query param (this site's own URL slugs)
// maps to the hub's wk_* CityRegion filters, verified live against real DDF
// data on 2026-10-20 — see kelownalistings commit c10ecf9.
const AREA_MAP = {
  'lakeview-heights':     'wk_lakeviewheights',
  'glenrosa':             'wk_glenrosa',
  'shannon-lake':         'wk_shannonlake',
  'smith-creek':          'wk_smithcreek',
  'westbank-centre':      'wk_westbankcentre',
  'west-kelowna-estates': 'wk_westkelownaestates',
  'westside-road':        'wk_westsideroad',
};

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { area } = req.query;
  let url = 'https://kelownalistings.com/api/listings?cities=West%20Kelowna';
  if (area && AREA_MAP[area]) url += '&area=' + AREA_MAP[area];

  try {
    const hubRes = await fetch(url);
    const data   = await hubRes.json();
    if (!data.configured || data.error) return res.status(200).json(data);
    return res.status(200).json({ configured: true, listings: data.listings || [], count: (data.listings || []).length });
  } catch (err) {
    return res.status(502).json({ configured: true, error: err.message, listings: [], count: 0 });
  }
};
