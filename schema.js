(function () {
  var BASE = 'https://westkelownalistings.com';
  var path = window.location.pathname.replace(/\/$/, '') || '/';

  function inject(data) {
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(data);
    (document.head || document.body).appendChild(s);
  }

  inject({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['RealEstateAgent', 'LocalBusiness'],
        '@id': BASE + '#business',
        'name': 'Mark Jontz & Associates | West Kelowna Listings',
        'url': BASE,
        'telephone': '+12508616002',
        'email': 'info@markjontz.com',
        'description': 'West Kelowna real estate covering Glenrosa, Shannon Lake, Smith Creek, Lakeview Heights, Westbank Centre, West Kelowna Estates, and Westside Road, from Mark Jontz & Associates.',
        'areaServed': [
          { '@type': 'City', 'name': 'West Kelowna', 'addressRegion': 'BC', 'addressCountry': 'CA' }
        ],
        'knowsAbout': [
          'West Kelowna real estate',
          'West Kelowna homes for sale',
          'Glenrosa real estate',
          'Shannon Lake real estate',
          'Lakeview Heights real estate',
          'Westbank Centre real estate',
          'Mark Jontz & Associates'
        ],
        'employee': [
          { '@type': 'Person', 'name': 'Mark Jontz', 'jobTitle': 'Team Lead, REALTOR®' },
          { '@type': 'Person', 'name': 'Michael Greenwood', 'jobTitle': 'REALTOR®' }
        ]
      }
    ]
  });

  if (path === '/' || path === '') {
    inject({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'url': BASE,
      'name': 'West Kelowna Listings',
      'description': 'West Kelowna real estate covering Glenrosa, Shannon Lake, Smith Creek, Lakeview Heights, Westbank Centre, West Kelowna Estates, and Westside Road, from Mark Jontz & Associates.'
    });
  }

  var PAGES = {
    '/contact': 'Contact', '/team': 'Our Team', '/wfn-leasehold': 'WFN Leasehold', '/zoning': 'Zoning Guide',
    '/strata-complexes': 'Strata Complexes', '/investors': 'Investors',
    '/glenrosa': 'Glenrosa', '/shannon-lake': 'Shannon Lake', '/smith-creek': 'Smith Creek',
    '/lakeview-heights': 'Lakeview Heights', '/westbank-centre': 'Westbank Centre',
    '/west-kelowna-estates': 'West Kelowna Estates', '/westside-road': 'Westside Road',
    '/history': 'History', '/blog': 'Blog',
    '/calculators': 'Calculators', '/calculators/mortgage': 'Mortgage Calculator',
    '/calculators/affordability': 'Affordability Calculator', '/calculators/land-transfer-tax': 'Property Transfer Tax Calculator',
    '/calculators/rent-vs-buy': 'Rent vs. Buy Calculator', '/calculators/net-proceeds': 'Net Proceeds Calculator',
    '/quiz': 'Neighbourhood Quiz',
    '/westlake-gardens-louie-drive': 'Westlake Gardens',
    '/centro-carrington-road': 'Centro',
    '/miravista-brown-road': 'Miravista',
    '/the-cove-gellatly-road': 'The Cove',
    '/aria-carrington-road': 'Aria',
    '/abode-butt-road': 'ABODE',
    '/carbury-gellatly-road': 'Carbury',
    '/tesoro-arca-cougar-road': 'Tesoro Arca',
    '/3645-gosset-road': '3645 Gosset Road',
    '/creekside-park-broadview-road': 'Creekside Park',
    '/shannon-woods': 'Shannon Woods',
    '/ariva': 'Ariva',
    '/lakeview-terraces-peak-point-court': 'Lakeview Terraces',
    '/kara-vista-rosealee-lane': 'Kara Vista',
    '/grandview-terrace-louie-drive': 'Grandview Terrace',
    '/bay-vista-boucherie-road': 'Bay Vista',
    '/sun-village-butt-road': 'Sun Village',
    '/2754-cameron-road': '2754 Cameron Road',
    '/2749-shannon-lake-road': '2749 Shannon Lake Road',
    '/2161-upper-sundance-drive': '2161 Upper Sundance Drive',
    '/2175-shannon-ridge-drive': '2175 Shannon Ridge Drive',
    '/2283-shannon-heights-court': '2283 Shannon Heights Court',
    '/2218-golf-course-drive': '2218 Golf Course Drive',
    '/2226-golf-course-drive': '2226 Golf Course Drive',
    '/2210-upper-sundance-drive': '2210 Upper Sundance Drive',
    '/2523-shannon-view-drive': '2523 Shannon View Drive',
    '/1451-rose-meadow-drive': '1451 Rose Meadow Drive',
    '/3825-glen-canyon-drive': '3825 Glen Canyon Drive',
    '/residences-at-lakeview-village': 'The Residences at Lakeview Village',
    '/west-61': 'West 61',
    '/2120-shannon-ridge-drive': '2120 Shannon Ridge Drive',
    '/eagle-terrace-tuscany-drive': 'Eagle Terrace',
    '/terravita-auburn-road': 'Terravita',
    '/tuscany-villas-boucherie-road': 'Tuscany Villas',
    '/copper-sky-skyview-lane': 'Copper Sky',
    '/2433-ingram-road': '2433 Ingram Road',
    '/monticello-brown-road': 'Monticello',
    '/lakewind-carrington-road': 'Lakewind',
    '/paramount-peak': 'Paramount Peak',
    '/era-shannon-lake': 'ERA',
    '/casa-loma-lakeshore-resort': 'Casa Loma Lakeshore Resort',
    '/neo-majoros-road': 'NEO',
    '/2477-ingram-road': '2477 Ingram Road',
    '/lakeview-place-brown-road': 'Lakeview Place',
    '/leisure-terrace-brown-road': 'Leisure Terrace',
    '/hawks-landing-boulevard': 'Hawks Landing',
    '/mira-vista-old-okanagan-highway': 'Mira Vista',
    '/sonoma-pines': 'Sonoma Pines',
    '/shelter-bay': 'Shelter Bay',
    '/barona-beach': 'Barona Beach',
    '/sundance-ridge': 'Sundance Ridge'
  };
  var BLOG_POSTS = {
    '/blog/west-kelowna-seven-neighbourhoods-compared': "West Kelowna's Seven Neighbourhoods, Compared",
    '/blog/bear-creek-provincial-park-westside-road-guide': 'Bear Creek Provincial Park: What Westside Road Buyers Should Know'
  };
  var BLOG_IMAGES = {
    '/blog/west-kelowna-seven-neighbourhoods-compared': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&h=630&fit=crop&auto=format',
    '/blog/bear-creek-provincial-park-westside-road-guide': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&h=630&fit=crop&auto=format'
  };
  if (BLOG_POSTS[path]) {
    inject({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': BLOG_POSTS[path],
      'url': BASE + path,
      'image': BLOG_IMAGES[path],
      'datePublished': '2026-10-19',
      'dateModified': '2026-10-19',
      'author': { '@type': 'Organization', 'name': 'Mark Jontz & Associates' },
      'publisher': { '@type': 'Organization', 'name': 'Mark Jontz & Associates', 'url': BASE }
    });
    inject({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'West Kelowna Real Estate', 'item': BASE + '/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': BASE + '/blog' },
        { '@type': 'ListItem', 'position': 3, 'name': BLOG_POSTS[path], 'item': BASE + path }
      ]
    });
  } else if (PAGES[path]) {
    inject({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'West Kelowna Real Estate', 'item': BASE + '/' },
        { '@type': 'ListItem', 'position': 2, 'name': PAGES[path], 'item': BASE + path }
      ]
    });
  }

  var FAQS = {
    '/': [
      ['Is West Kelowna a separate city from Kelowna?', 'Yes. West Kelowna has been its own incorporated city since 2007, across the lake from Kelowna via the William R. Bennett Bridge. It has its own municipal government, schools, and neighbourhoods, including Lakeview Heights, Glenrosa, Shannon Lake, Smith Creek, Westbank Centre, West Kelowna Estates, and Westside Road.'],
      ['What makes Lakeview Heights different from the rest of West Kelowna?', 'Lakeview Heights sits on the vineyard-covered benches above the lake, home to several working wineries. It tends to command a premium for lake-view lots compared to the more inland, family-oriented neighbourhoods like Glenrosa.'],
      ['How do I get current pricing for a specific neighbourhood?', 'Contact us directly. Pricing varies meaningfully street-to-street in West Kelowna, especially between lake-view and non-view properties. We track every neighbourhood on this site closely and can give you a straight read.']
    ],
    '/glenrosa': [
      ['What schools serve Glenrosa?', 'École Glenrosa Elementary and Helen Gorman Elementary (both K–5), Glenrosa Middle (6–8), and Mount Boucherie Secondary (9–12) for high school, though Mount Boucherie Secondary is down on Cameron Road elsewhere in the city, so high schoolers commute by bus or transit rather than walking.'],
      ['Where does Glenrosa sit within West Kelowna?', 'It\'s the southernmost of West Kelowna\'s seven neighbourhoods, west of Highway 97, not actually near Mount Boucherie itself, though it does have panoramic views of the mountain and Okanagan Lake from its hillside streets.'],
      ['Is Glenrosa an old or new community?', 'Old by Okanagan standards. The City of West Kelowna identifies it as one of several neighbourhoods with roots dating to the early-to-mid 19th century, well before the municipality itself was incorporated in 2007.']
    ],
    '/shannon-lake': [
      ['Is Shannon Lake the only golf course in West Kelowna?', 'It\'s the only 18-hole golf course within the City of West Kelowna, which makes it a genuine draw for golf-oriented buyers looking in the area.'],
      ['What school serves this neighbourhood?', 'Shannon Lake Elementary (K–5) sits right in the heart of the neighbourhood on Shannon Lake Road, with Rose Valley Elementary serving the northern border and Constable Neil Bruce Middle at the bottom of the neighbourhood.'],
      ['Is Shannon Lake on the Okanagan Lake shoreline?', 'No. It\'s an inland community built around its own, smaller namesake lake, west of Highway 97 between Smith Creek and West Kelowna Estates.']
    ],
    '/smith-creek': [
      ['Is Smith Creek a bigger or smaller community?', 'Smaller and quieter compared to some of its neighbours. It\'s one of West Kelowna\'s officially named neighbourhoods on the west side of Highway 97, but without the higher profile of areas like Glenrosa or Shannon Lake.'],
      ['What\'s nearby if there\'s no major landmark in Smith Creek itself?', 'Everything the rest of this side of West Kelowna offers is close by: Westbank Centre\'s shops and services, Glenrosa\'s schools, and Shannon Lake Golf Course, all a short drive away.']
    ],
    '/westside-road': [
      ['What is Bear Creek Provincial Park known for?', 'A beach over 400 metres long, about 5 km of hiking trails looping a creek and canyon, and lakeside camping with 145 campsites at peak season. It\'s one of the more visited regional parks in the Okanagan.'],
      ['Is Westside Road close to Westbank Centre?', 'It\'s further out than the city\'s more central neighbourhoods. Westside Road runs north along the lakeshore toward Fintry, so the drive back to Westbank Centre and Highway 97C is longer than from a more central neighbourhood like Lakeview Heights.'],
      ['Is this officially one neighbourhood or two?', 'The City of West Kelowna names it as a single combined area: "Westside Road/Bear Creek Road," the northernmost of the city\'s seven neighbourhoods, west of Highway 97.']
    ],
    '/westbank-centre': [
      ['Is Westbank Centre the same as "Westbank"?', 'Closely related, yes. "Westbank" was the historic name for this whole area, dating to a 1902 post office. Westbank Centre is the modern civic/retail core within that original community, and the name is still in everyday use for this stretch west of Highway 97.'],
      ['Why did the area stop being called Westbank?', 'When the municipality incorporated in 2007, residents had to choose a permanent name. In a 2008 vote, "West Kelowna" narrowly beat out "Westbank," 3,841 to 3,675, and the city officially became West Kelowna on January 30, 2009.'],
      ['What\'s within walking distance?', 'Julia\'s Junction inclusive playground, the Johnson Bentley Memorial Aquatic Centre, Glen Canyon Regional Park\'s trails, and the main retail/dining strip along Main Street and Dobbin Road are all right in the core.']
    ],
    '/west-kelowna-estates': [
      ['Is this neighbourhood on the lake?', 'It\'s elevated above the lake rather than right on the shoreline, but it\'s genuinely lake-facing. Many properties have sweeping views of Okanagan Lake, Knox Mountain, and the Kelowna skyline across the water.'],
      ['How does it compare to Lakeview Heights or Westside Road?', 'Lakeview Heights sits closer to the water, on the east side of Highway 97, a different side of the highway entirely. Westside Road also sits directly on the lakeshore, just further north. West Kelowna Estates trades that direct lake proximity for a quieter, more inland setting on the west side.']
    ],
    '/lakeview-heights': [
      ['Why do homes here cost more than other West Kelowna neighbourhoods?', 'Lake views and elevation. Lakeview Heights sits on the benches directly above Okanagan Lake, and lots with an unobstructed view typically trade at a meaningful premium over the more inland, family-oriented neighbourhoods like Glenrosa or Shannon Lake.'],
      ['Are there wineries actually in the neighbourhood?', 'Yes. Several working wineries are woven directly into the residential streets of Lakeview Heights, which is part of what gives the area its character and tourist draw.'],
      ['How old is this neighbourhood?', 'Lakeview Heights is one of a small number of West Kelowna neighbourhoods with roots dating to the early-to-mid 19th century, long before the city\'s 2007 incorporation.']
    ],
    '/wfn-leasehold': [
      ['Do I pay BC Property Transfer Tax on a WFN leasehold purchase?', 'No. Because the transfer is registered through the WFN Land Registry rather than the BC Land Title Office, almost all WFN land lease transfers are exempt from BC Property Transfer Tax, saving buyers thousands upfront.'],
      ['Can I get a regular mortgage on a WFN leasehold home?', 'Usually yes, if the lease has a long term remaining. Major Canadian banks routinely finance pre-paid 99-year WFN leases with standard rates and down payment rules. Financing gets more restrictive once the remaining term drops below roughly 35-50 years.'],
      ['What happens when the 99-year lease runs out?', 'In theory, head leases can be renegotiated and extended back toward 99 years between the WFN landholder and the homeowner association, with a fair financial agreement for the remaining valuation. This isn\'t automatic, though, and should be confirmed for any specific property rather than assumed.'],
      ['Is a WFN strata the same as a regular BC strata?', 'No. WFN multi-family developments typically operate under a Society or Homeowners Corporation rather than a BC Strata Corporation under the Strata Property Act. The day-to-day function (fees, common area management, bylaws) is similar, but the legal structure is different.']
    ],
    '/zoning': [
      ['Can I add a secondary suite to any house in West Kelowna?', 'In most residential zones (R1, R1L, RP1, RC1, RC2, RC3), yes, as a secondary suite inside a single detached dwelling, subject to the size, entrance, and servicing rules in Section 3.17. It\'s not permitted if the parcel already has a carriage house or a registered short-term rental. Always confirm the exact zoning of a specific parcel before assuming.'],
      ['Can I build both a secondary suite and a carriage house on the same lot?', 'Generally no on their own, but the density tables for R1, R1L, RP1, RC1, RC2, and RC3 do permit a configuration of up to 4 dwelling units per parcel (on lots larger than 280 m²) combining a principal dwelling, a secondary suite, and a carriage house. The exact permitted combination depends on the zone and parcel specifics, confirm with the City or a qualified professional before planning a project around it.'],
      ['Do I need a rezoning application to add a suite or carriage house?', 'Generally no, when the use is already listed as a principal or secondary use in your zone and meets the regulations table (minimum parcel size, setbacks, height, servicing). A building permit is still required. Confirm specifics with the City\'s Building and Planning Department before starting work.'],
      ['Can I legally run an Airbnb in West Kelowna?', 'Only under the conditions in Section 3.19: you must be an owner who is also a principal resident, present overnight during the stay, with a maximum of one short-term rental use per parcel, up to four bedrooms, and no more than two adults per bedroom. This is separate from, and in addition to, BC\'s provincial short-term rental legislation.']
    ],
    '/investors': [
      ['Can I buy a condo in West Kelowna and run it as an Airbnb without living there?', 'Generally no, under the City\'s own zoning bylaw, which requires the operator to be an owner-occupier present overnight during the stay. A small number of specifically-zoned complexes, like Barona Beach, are a genuine exception. Always confirm a specific parcel\'s zoning and the building\'s own strata bylaws before assuming.'],
      ['Is leasehold property a good investment?', 'It depends on what you\'re underwriting. Leasehold typically means a lower entry price, but financing, resale pool, and long-term value all depend on how much lease term remains and the specific terms of that community\'s ground lease. See the full WFN Leasehold Guide for the details that actually matter.'],
      ['Does the foreign buyer tax apply in West Kelowna?', 'Yes. West Kelowna falls within the Central Okanagan Regional District, a designated Additional Property Transfer Tax area, meaning a 20% surtax applies on top of standard Property Transfer Tax for foreign nationals, foreign corporations, and taxable trustees.'],
      ['Where can I see what\'s currently for sale or in presale?', 'Browse every strata complex we\'ve researched, each with its own page and live MLS® listings, or talk to our team directly for off-market and pre-construction opportunities before they hit MLS®.']
    ]
  };

  if (FAQS[path]) {
    inject({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS[path].map(function (qa) {
        return { '@type': 'Question', 'name': qa[0], 'acceptedAnswer': { '@type': 'Answer', 'text': qa[1] } };
      })
    });
  }
})();
