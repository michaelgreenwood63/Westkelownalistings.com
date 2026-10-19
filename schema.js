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
        'description': 'West Kelowna real estate — Glenrosa, Shannon Lake, Smith Creek, Lakeview Heights, Westbank Centre, West Kelowna Estates, and Westside Road, from Mark Jontz & Associates.',
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
      'description': 'West Kelowna real estate — Glenrosa, Shannon Lake, Smith Creek, Lakeview Heights, Westbank Centre, West Kelowna Estates, and Westside Road, from Mark Jontz & Associates.'
    });
  }

  var PAGES = { '/contact': 'Contact', '/team': 'Our Team' };
  if (PAGES[path]) {
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
      ['Is West Kelowna a separate city from Kelowna?', 'Yes — West Kelowna has been its own incorporated city since 2007, across the lake from Kelowna via the William R. Bennett Bridge. It has its own municipal government, schools, and neighbourhoods, including Lakeview Heights, Glenrosa, Shannon Lake, Smith Creek, Westbank Centre, West Kelowna Estates, and Westside Road.'],
      ['What makes Lakeview Heights different from the rest of West Kelowna?', 'Lakeview Heights sits on the vineyard-covered benches above the lake, home to several working wineries. It tends to command a premium for lake-view lots compared to the more inland, family-oriented neighbourhoods like Glenrosa.'],
      ['How do I get current pricing for a specific neighbourhood?', 'Contact us directly — pricing varies meaningfully street-to-street in West Kelowna, especially between lake-view and non-view properties. We track every neighbourhood on this site closely and can give you a straight read.']
    ],
    '/glenrosa': [
      ['What schools serve Glenrosa?', 'Glenrosa Elementary (K–5) and Glenrosa Middle (6–8) are both located directly in the neighbourhood, with Mount Boucherie Senior Secondary (9–12) nearby.'],
      ['Where does Glenrosa sit within West Kelowna?', 'It\'s part of the city\'s southern neighbourhood cluster, alongside Shannon Lake, Smith Creek, and Westbank Centre — bordering the Mount Boucherie area.'],
      ['Is Glenrosa an old or new community?', 'Old by Okanagan standards — the City of West Kelowna identifies it as one of several neighbourhoods with roots dating to the early-to-mid 19th century, well before the municipality itself was incorporated in 2007.']
    ],
    '/shannon-lake': [
      ['Is Shannon Lake the only golf course in West Kelowna?', 'It\'s the only 18-hole golf course within the City of West Kelowna, which makes it a genuine draw for golf-oriented buyers looking in the area.'],
      ['What school serves this neighbourhood?', 'Shannon Lake Elementary (K–5) is located directly in the neighbourhood.'],
      ['Is Shannon Lake on the Okanagan Lake shoreline?', 'No — it\'s an inland community built around its own, smaller namesake lake, in the southern cluster of West Kelowna neighbourhoods.']
    ],
    '/smith-creek': [
      ['Is Smith Creek a bigger or smaller community?', 'Smaller and quieter compared to some of its neighbours — it\'s one of West Kelowna\'s officially named southern-cluster neighbourhoods, but without the higher profile of areas like Glenrosa or Shannon Lake.'],
      ['What\'s nearby if there\'s no major landmark in Smith Creek itself?', 'Everything the rest of southern West Kelowna offers is close by — Westbank Centre\'s shops and services, Glenrosa and Mount Boucherie\'s schools, and Shannon Lake Golf Course, all a short drive away.']
    ],
    '/westside-road': [
      ['What is Bear Creek Provincial Park known for?', 'A beach over 400 metres long, about 5 km of hiking trails looping a creek and canyon, and lakeside camping with 145 campsites at peak season — it\'s one of the more visited regional parks in the Okanagan.'],
      ['Is Westside Road close to Westbank Centre?', 'It\'s further out than the city\'s more central neighbourhoods — Westside Road runs north along the lakeshore toward Fintry, so the drive back to Westbank Centre and Highway 97C is longer than from a more central neighbourhood like Lakeview Heights.'],
      ['Is this officially one neighbourhood or two?', 'The City of West Kelowna names it as a single combined area: "Westside Road/Bear Creek Road," part of the city\'s northern neighbourhood cluster.']
    ],
    '/westbank-centre': [
      ['Is Westbank Centre the same as "Westbank"?', 'Closely related, yes. "Westbank" was the historic name for this whole area, dating to a 1902 post office. Westbank Centre is the modern civic/retail core within that original community, and Westbank itself is still listed separately among the city\'s southern-cluster neighbourhoods.'],
      ['Why did the area stop being called Westbank?', 'When the municipality incorporated in 2007, residents had to choose a permanent name. In a 2008 vote, "West Kelowna" narrowly beat out "Westbank," 3,841 to 3,675, and the city officially became West Kelowna on January 30, 2009.'],
      ['What\'s within walking distance?', 'Memorial Park, Westbank Town Centre Park, the Johnson Bentley Memorial Aquatic Centre, and the main retail/dining strip are all right in the core.']
    ],
    '/west-kelowna-estates': [
      ['Is this neighbourhood on the lake?', 'No — it\'s an inland, elevated residential area in the city\'s northern cluster, a short drive rather than a walk from the Okanagan Lake shoreline.'],
      ['How does it compare to Lakeview Heights or Westside Road?', 'Both of those neighbourhoods sit closer to the water. West Kelowna Estates trades direct lake proximity for a quieter, more inland setting within the same northern cluster.']
    ],
    '/lakeview-heights': [
      ['Why do homes here cost more than other West Kelowna neighbourhoods?', 'Lake views and elevation. Lakeview Heights sits on the benches directly above Okanagan Lake, and lots with an unobstructed view typically trade at a meaningful premium over the more inland, family-oriented neighbourhoods like Glenrosa or Shannon Lake.'],
      ['Are there wineries actually in the neighbourhood?', 'Yes — several working wineries are woven directly into the residential streets of Lakeview Heights, which is part of what gives the area its character and tourist draw.'],
      ['How old is this neighbourhood?', 'Lakeview Heights is one of a small number of West Kelowna neighbourhoods with roots dating to the early-to-mid 19th century, long before the city\'s 2007 incorporation.']
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
