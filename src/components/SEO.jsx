import { useEffect } from 'react';

const SITE_URL = typeof window !== 'undefined' && window.location.origin.includes('http') ? window.location.origin : 'https://sharpelevatorkerala.com';
const BRAND_NAME = 'Sharp Elevator & Escalator';
const LOGO_URL = `${SITE_URL}/Sharp_Elevator_and_Escalator_Logo-removebg-preview.png`;
const HERO_IMAGE_URL = `${SITE_URL}/hero_elevator.jpg`;

export const PAGE_SEO_DATA = {
  home: {
    title: 'Sharp Elevator & Escalator | Elevator Installation, Maintenance & AMC in Kerala',
    description: "Sharp Elevator & Escalator is Kerala's trusted elevator company based in Ernakulam, Kochi. Expert elevator installation, preventive maintenance, modernisations, and 24/7 AMC services.",
    keywords: 'Sharp Elevator, Sharp Elevator and Escalator, Sharp Elevators, sharp elevator kerala, elevator company ernakulam, lift maintenance kochi, elevator installation kerala, AMC elevator kochi, passenger lift kerala, home elevator kerala, dumbwaiter, vertical transportation kochi',
    path: '/',
    type: 'website',
  },
  about: {
    title: 'About Us | Sharp Elevator & Escalator - Trusted Lift Company in Kerala',
    description: 'Learn about Sharp Elevator & Escalator, a premier vertical mobility specialist based in Mather Square, Ernakulam, Kerala. Dedicated to safety, engineering integrity, and customer satisfaction.',
    keywords: 'About Sharp Elevator, Sharp Elevator history, elevator manufacturers kerala, lift engineering ernakulam, Sharp Elevator team, elevator safety standards kerala, elevator company kochi',
    path: '/about',
    type: 'article',
  },
  services: {
    title: 'Elevator Services & AMC | Sharp Elevator & Escalator Kerala - Installation & Maintenance',
    description: 'Explore comprehensive elevator solutions from Sharp Elevator: turnkey installation, preventive diagnostics, AMC packages, controller modernisations, and 24/7 breakdown support across Kerala.',
    keywords: 'Sharp Elevator services, elevator maintenance kerala, AMC lift contract ernakulam, elevator modernisation kochi, hospital bed lift kerala, passenger lift installation, dumbwaiter elevator kerala',
    path: '/services',
    type: 'website',
  },
  gallery: {
    title: 'Project Gallery & Lift Installations | Sharp Elevator & Escalator Kerala',
    description: 'Explore verified on-site elevator installations by Sharp Elevator & Escalator across Kerala. Passenger lifts, stainless steel cabins, black glass touch operating panels, and polished granite landing lobbies.',
    keywords: 'Sharp Elevator gallery, lift installation photos kerala, passenger elevator cabin interior, elevator landing doors ernakulam, elevator car operating panel, lift fixtures kochi, granite elevator architrave',
    path: '/gallery',
    type: 'website',
  },
  contact: {
    title: 'Contact Sharp Elevator & Escalator | Ernakulam, Kochi - 24/7 Breakdown Support',
    description: 'Contact Sharp Elevator & Escalator at Mather Square, Ernakulam, Kerala. Call +91 94477 11587 or +91 94964 47558, or email sharpescalator@gmail.com for quotes, inspections, and 24/7 emergency support.',
    keywords: 'Contact Sharp Elevator, Sharp Elevator phone number, sharp elevator ernakulam address, lift emergency breakdown kochi, Sharp Elevator whatsapp, elevator enquiry kerala',
    path: '/contact',
    type: 'website',
  },
};

function getStructuredData(page, _currentUrl) {
  const baseBusiness = {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Sharp Elevator & Escalator',
    alternateName: ['Sharp Elevator', 'Sharp Elevators', 'Sharp Elevator and Escalator Kerala', 'Sharp Lifts'],
    legalName: 'Sharp Elevator & Escalator',
    description: 'Premier elevator and escalator engineering company in Kerala offering precision installation, regular maintenance, modernisation, and 24/7 AMC services.',
    url: SITE_URL,
    logo: LOGO_URL,
    image: [LOGO_URL, HERO_IMAGE_URL, `${SITE_URL}/station2.jpg`],
    telephone: '+919447711587',
    email: 'sharpescalator@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mather Square, C Block, 4th Floor, Xavier Arakkal Road, Near North Railway Station, Kacheripady',
      addressLocality: 'Ernakulam',
      addressRegion: 'Kerala',
      postalCode: '682018',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9912,
      longitude: 76.2847,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 Emergency Breakdown Dispatch',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Ernakulam' },
      { '@type': 'AdministrativeArea', name: 'Kochi' },
      { '@type': 'AdministrativeArea', name: 'Thrissur' },
      { '@type': 'AdministrativeArea', name: 'Kottayam' },
      { '@type': 'AdministrativeArea', name: 'Alappuzha' },
      { '@type': 'AdministrativeArea', name: 'Kozhikode' },
      { '@type': 'AdministrativeArea', name: 'Palakkad' },
      { '@type': 'AdministrativeArea', name: 'Malappuram' },
      { '@type': 'AdministrativeArea', name: 'Kollam' },
      { '@type': 'AdministrativeArea', name: 'Thiruvananthapuram' },
      { '@type': 'State', name: 'Kerala' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Elevator & Escalator Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elevator Installation',
            description: 'Turnkey passenger, home, hospital, and goods elevator installation compliant with IS safety standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elevator Maintenance & Safety Vetting',
            description: 'Regular preventive diagnostics, OEM component checks, lubrication, and calibration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elevator Modernisation & Retrofit',
            description: 'Microprocessor V3F control upgrades, energy-efficient gearless traction conversion, and cabin aesthetics.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Annual Maintenance Contracts (AMC)',
            description: 'Comprehensive and non-comprehensive AMC agreements with 24/7 emergency response across Kerala.',
          },
        },
      ],
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+919447711587',
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Malayalam', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+919496447558',
        contactType: 'technical support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Malayalam', 'Hindi'],
      },
    ],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND_NAME,
    alternateName: 'Sharp Elevator',
    description: 'Official website of Sharp Elevator & Escalator in Kerala, India.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const breadcrumbsMap = {
    home: [{ name: 'Home', item: SITE_URL }],
    about: [
      { name: 'Home', item: SITE_URL },
      { name: 'About Us', item: `${SITE_URL}/about` },
    ],
    services: [
      { name: 'Home', item: SITE_URL },
      { name: 'Services', item: `${SITE_URL}/services` },
    ],
    gallery: [
      { name: 'Home', item: SITE_URL },
      { name: 'Gallery', item: `${SITE_URL}/gallery` },
    ],
    contact: [
      { name: 'Home', item: SITE_URL },
      { name: 'Contact Us', item: `${SITE_URL}/contact` },
    ],
  };

  const breadcrumbList = {
    '@type': 'BreadcrumbList',
    itemListElement: (breadcrumbsMap[page] || breadcrumbsMap.home).map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  const graph = [baseBusiness, website, breadcrumbList];

  if (page === 'gallery') {
    graph.push({
      '@type': 'ImageGallery',
      name: 'Sharp Elevator Real Installations Kerala',
      description: 'Verified photographic gallery of passenger elevator installations, stainless steel cabin interiors, touch operating panels, and granite portal cladding by Sharp Elevator & Escalator.',
      image: [
        `${SITE_URL}/lift1.jpeg`,
        `${SITE_URL}/lift2.jpeg`,
        `${SITE_URL}/lift3.jpeg`,
        `${SITE_URL}/lift4.jpeg`,
        `${SITE_URL}/lift5.jpeg`,
        `${SITE_URL}/lift6.jpeg`,
      ],
    });
  }

  if (page === 'services') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Sharp Elevator provide in Kerala?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sharp Elevator & Escalator provides turnkey elevator installation, routine preventive maintenance, elevator modernisation, 24/7 AMC contracts, and specialised lifts for residential, commercial, and healthcare facilities across Kerala.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sharp Elevator offer 24/7 breakdown emergency services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Sharp Elevator maintains mobile emergency response teams available 24/7 for swift breakdown dispatch and passenger rescue across Ernakulam, Kochi, and all Kerala districts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Sharp Elevator located in Kochi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The head office of Sharp Elevator & Escalator is at Mather Square, C Block, 4th Floor, Xavier Arakkal Road, Near North Railway Station, Kacheripady, Ernakulam, Kerala 682018.',
          },
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export default function SEO({ page = 'home' }) {
  useEffect(() => {
    const data = PAGE_SEO_DATA[page] || PAGE_SEO_DATA.home;
    const currentOrigin = window.location.origin;
    const currentUrl = `${currentOrigin}${data.path === '/' ? '' : data.path}`;

    // Update Title
    document.title = data.title;

    // Helper to update or create meta tags
    const setMetaTag = (nameAttr, nameVal, content) => {
      let tag = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(nameAttr, nameVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard Meta
    setMetaTag('name', 'description', data.description);
    setMetaTag('name', 'keywords', data.keywords);
    setMetaTag('name', 'author', BRAND_NAME);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Geo Meta (Ernakulam, Kochi, Kerala)
    setMetaTag('name', 'geo.region', 'IN-KL');
    setMetaTag('name', 'geo.placename', 'Ernakulam, Kochi, Kerala');
    setMetaTag('name', 'geo.position', '9.9912;76.2847');
    setMetaTag('name', 'ICBM', '9.9912, 76.2847');

    // Open Graph
    setMetaTag('property', 'og:title', data.title);
    setMetaTag('property', 'og:description', data.description);
    setMetaTag('property', 'og:type', data.type);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:site_name', BRAND_NAME);
    setMetaTag('property', 'og:locale', 'en_IN');
    setMetaTag('property', 'og:image', `${currentOrigin}/hero_elevator.jpg`);
    setMetaTag('property', 'og:image:alt', `${BRAND_NAME} - Vertical Mobility Solutions`);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', data.title);
    setMetaTag('name', 'twitter:description', data.description);
    setMetaTag('name', 'twitter:image', `${currentOrigin}/hero_elevator.jpg`);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // JSON-LD Structured Data
    const schemaData = getStructuredData(page, currentUrl);
    let jsonLdScript = document.getElementById('sharp-elevator-schema');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'sharp-elevator-schema';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(schemaData, null, 2);
  }, [page]);

  return null;
}
