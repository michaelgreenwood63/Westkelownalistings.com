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
    '/contact': 'Contact', '/team': 'Our Team', '/wfn-leasehold': 'WFN Leasehold',
    '/glenrosa': 'Glenrosa', '/shannon-lake': 'Shannon Lake', '/smith-creek': 'Smith Creek',
    '/lakeview-heights': 'Lakeview Heights', '/westbank-centre': 'Westbank Centre',
    '/west-kelowna-estates': 'West Kelowna Estates', '/westside-road': 'Westside Road',
    '/history': 'History', '/blog': 'Blog'
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
