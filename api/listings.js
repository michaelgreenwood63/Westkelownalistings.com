// Proxy to KelownaListings hub — no DDF credentials needed on this site.
// Uses the hub's `cities` param (built for kelownadownsizing.com) to widen
// beyond the hub's Kelowna-only default, since West Kelowna is a separate
// DDF `City` value. No neighbourhood-level filtering yet — see project notes
// on verifying real DDF `CityRegion` values before splitting per-neighbourhood.
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const hubRes = await fetch('https://kelownalistings.com/api/listings?cities=West%20Kelowna');
    const data   = await hubRes.json();
    if (!data.configured || data.error) return res.status(200).json(data);
    return res.status(200).json({ configured: true, listings: data.listings || [], count: (data.listings || []).length });
  } catch (err) {
    return res.status(502).json({ configured: true, error: err.message, listings: [], count: 0 });
  }
};
