/**
 * Site content. Every section renders from this module, so copy edits happen here only.
 *
 * Outcomes are facts that can be checked. Replace them with business numbers
 * (conversion, bookings, load time) whenever you have them.
 */
import type { ExperienceItem, Project, SocialLink } from '~/types/portfolio'

export const PROFILE = {
  name: 'Menard Catayas',
  fullName: 'Mc Nilou Menard Catayas',
  initials: 'MC',
  title: 'Full-stack developer',
  email: 'jemenard082713@gmail.com',
  city: 'Butuan City',
  cityShort: 'Butuan City, PH',
  country: 'Philippines',
  timeZone: 'Asia/Manila',
  utcLabel: 'GMT+8',
  resume: 'https://drive.google.com/file/d/158nC5k_N44aqWzHqF7W7IH4RAF9QTxI0/view?usp=drive_link',
  description:
    'Menard Catayas, full-stack developer in Butuan City, Philippines, building fast, functional web products with Vue, Nuxt and Laravel.'
} as const

/** Empty URLs are hidden. Add https links to show them in the contact section. */
export const SOCIALS: readonly SocialLink[] = [
  { label: 'LinkedIn', url: '' },
  { label: 'GitHub', url: '' },
  { label: 'Resume', url: PROFILE.resume }
]

/** Words wrapped in *asterisks* render in the italic serif. */
export const BIO =
  'I’m a full-stack developer with 5+ years building web and mobile apps. I turn Figma and PSD designs into *fast, responsive products,* connect them to Laravel APIs, and ship them to production, working solo or inside Agile teams.'

export const STACK_A = ['Vue 3', 'Nuxt 4', 'TypeScript', 'React', 'Laravel', 'PHP', 'MySQL', 'REST APIs', 'Sanctum'] as const
export const STACK_B = ['Flutter', 'FlutterFlow', 'Figma', 'Bootstrap', 'Tailwind CSS', 'Vuetify', 'SCSS', 'Git', 'Linux deploys'] as const

export const PROCESS = [
  { title: 'Design', body: 'UI in Figma, or a close read of the Figma and PSD files you already have.' },
  { title: 'Frontend', body: 'Responsive Vue and Nuxt screens from reusable components, matched to the design at every breakpoint.' },
  { title: 'Backend', body: 'Laravel REST APIs with Sanctum auth and MySQL, plus the admin tools the business runs on.' },
  { title: 'Launch', body: 'Linux server deployment, testing on real phones, handover, and fixes after go-live.' }
] as const

export const PROJECTS: readonly Project[] = [
  {
    slug: 'negosyo-works',
    name: 'NegosyoWork Studio',
    year: 2026,
    client: 'NegosyoWork Studio',
    span: 's-12',
    latest: true,
    kicker: 'Live selling studio',
    platform: 'Browser-based studio app',
    live: '',
    video: { src: 'img/negosyo-works/v/walkthrough.mp4', poster: 'img/negosyo-works/f/walkthrough_poster.webp', length: '1:46' },
    short: 'A browser studio that dresses up live-selling streams with branded scenes, price popups and sound effects.',
    summary:
      'A browser-based studio for online sellers: build a branded scene, fire price popups and sound effects mid-stream, then send a clean feed to TikTok LIVE Studio, OBS, Facebook or YouTube.',
    context:
      'Live selling is one of the main ways small businesses in the Philippines sell online, but a polished stream usually means learning OBS, buying overlays and juggling a separate soundboard. NegosyoWork Studio puts the scene, the popups and the sounds in one browser tab, organized as reusable setups and ready-made templates for sales like 11.11 and Payday.',
    roles: [
      ['Sellers', [
        'Start from templates such as Boutique rack, Brand wall, Kitchen set or Studio loft',
        'Use a webcam, HDMI capture card, streaming box or phone as the camera',
        'Appear in front of a store set or their own photo',
        'Fire price popups and sound effects while live'
      ]],
      ['Teams', ['Save setups and reopen them exactly as they were left', 'Team and plan management', 'Guided tour for first-time sellers']]
    ],
    constraints: [
      ['Fit the tools sellers already use', 'The output had to plug into TikTok LIVE Studio, OBS, Facebook and YouTube rather than replace them.'],
      ['Any camera', 'Webcams, HDMI capture cards, streaming boxes and phone cameras all had to work as sources.'],
      ['Portrait and landscape', 'Setups run in 9:16 for TikTok-style streams and 16:9 for Facebook and YouTube.'],
      ['Live, not edited', 'Popups and sounds fire while the seller is talking, so every control has to be one tap or one key away.']
    ],
    approach: [
      ['Five-step setup', 'Camera, Foreground, Background, Popups and Go live, in the order a seller prepares a stream.'],
      ['Clean screen output', 'A separate clean screen carries only the composed scene, ready to capture in TikTok LIVE Studio or OBS, or to stream straight to Facebook or YouTube.'],
      ['Scene compositing', 'The seller is cut out from their room and placed in front of a store set or their own photo, with foreground layers on top.'],
      ['Sound pads with shortcuts', 'Laugh, applause, drumroll, ka-ching and more, each on a numbered pad with a keyboard shortcut, plus separate send-to-live and hear-it-myself switches.'],
      ['Templates and saved setups', 'Ready-made scenes for common sales and saved setups that open exactly as they were left, with autosave.']
    ],
    outcomes: [
      ['5', 'Setup steps from camera to go live'],
      ['6', 'Ready-made scene templates'],
      ['4', 'Output targets: TikTok LIVE Studio, OBS, Facebook and YouTube'],
      ['9:16 + 16:9', 'Portrait and landscape scenes']
    ],
    shots: [
      ['setup_page', 'My setups and ready-made templates'],
      ['setup_details_page_camera_view', 'Live setup: camera step'],
      ['popups_live', 'Popups and sound pads during a live session'],
      ['go_live_clean_screen', 'Go live: clean screen output']
    ]
  },
  {
    slug: 'valencia-grace',
    name: 'Valencia Grace',
    year: 2025,
    client: 'Valencia Grace',
    span: 's-7',
    kicker: 'Music artist website',
    platform: 'Nuxt.js and Laravel',
    live: 'https://www.valenciagrace.com',
    short: 'Official website for a London-based artist with a theatrical pop aesthetic.',
    summary:
      'The official home for Valencia Grace’s music: new releases, music videos, tour dates and exclusive content, built to match her dark, theatrical style.',
    context:
      'Valencia Grace is a London-based artist whose visual identity is dark and theatrical. Fans needed one place to find new music, watch videos and check tour dates, and the design already existed as Figma and PSD files. My job was to turn those files into a fast, responsive site without losing the drama of the artwork.',
    roles: [
      ['Fans', [
        'Listen to the latest release on every major streaming platform',
        'Watch music videos and the visualiser',
        'Check upcoming tour dates',
        'Unlock exclusive content'
      ]],
      ['Artist team', ['Content served from a Laravel back end', 'One build for desktop, tablet and phone']]
    ],
    constraints: [
      ['Design fidelity', 'Full-bleed photography, smoke and type set in PSD had to survive the move to HTML at every breakpoint.'],
      ['Heavy media', 'Large hero imagery and video had to load without holding up the first screen.'],
      ['Links that change', 'Every release points to several streaming services, so links had to be easy to update.']
    ],
    approach: [
      ['Nuxt for the front end', 'Server-rendered pages give fans a fast first paint and give search engines real content for release and tour pages.'],
      ['Laravel for content', 'Releases, videos and tour dates come from a Laravel back end instead of being hard-coded into pages.'],
      ['Section components', 'Hero, releases, videos and tour are reusable Vue components, so each new release follows the same layout.']
    ],
    outcomes: [
      ['Live', 'valenciagrace.com is in production'],
      ['Figma + PSD', 'Both design sources matched in one responsive build'],
      ['4', 'Content areas: releases, videos, tour and exclusive']
    ],
    shots: [['valenciagrace', 'Home page featuring the new single, Guillotine']]
  },
  {
    slug: 'sips-and-sparks',
    name: 'Sips & Sparks',
    year: 2025,
    client: 'Sips and Sparks LLC',
    span: 's-5',
    kicker: 'Speed dating platform',
    platform: 'Responsive web app',
    live: 'https://www.sipsandsparks.com',
    short: 'Speed dating and singles mixers in Connecticut and southern Massachusetts.',
    summary:
      'A speed dating and singles mixer platform for Connecticut and southern Massachusetts that makes meeting people in person easy to book.',
    context:
      'Sips & Sparks runs in-person events for singles who are tired of dating apps. The client had UI/UX designs and needed a responsive, dynamic web application to promote events and take sign-ups. I built it as the only developer, from design handoff to production.',
    roles: [
      ['Singles', ['Browse speed dating, singles mixer and activity-based events', 'Sign up and book from any device']],
      ['Organizers', ['Promote upcoming events', 'Manage attendee sign-ups']]
    ],
    constraints: [
      ['Solo delivery', 'One developer covering front end, back end and deployment.'],
      ['Any device', 'Booking had to be as easy on a phone as on a desktop.'],
      ['Design to code', 'The build had to match the provided UI/UX designs closely.']
    ],
    approach: [
      ['Events at the center', 'Each format, from speed dating to activity nights, is presented the same way so people can compare and choose quickly.'],
      ['Short booking path', 'From an event card to a reserved seat in as few steps as possible.'],
      ['Mobile-up components', 'Layouts built from small screens up with reusable components matched to the designs.']
    ],
    outcomes: [
      ['Live', 'sipsandsparks.com is in production'],
      ['Solo', 'Built end to end by one developer'],
      ['3', 'Event formats on one platform']
    ],
    shots: [['sipsandsparks', 'Home page']]
  },
  {
    slug: 'birakol',
    name: 'Birakol',
    year: 2026,
    client: 'Birakol',
    span: 's-5',
    kicker: 'Running event management',
    platform: 'Web platform with admin dashboard',
    live: '',
    short: 'Race management for organizers; registration, payments and results for runners.',
    summary: 'A running event platform where organizers run races end to end and runners register, pay and see their results.',
    context:
      'Race organizers juggle registrations, payments, bib numbers and results across many events and distances. Birakol brings all of it into one system, with a public site for runners and a dashboard for organizers.',
    roles: [
      ['Runners', ['Browse upcoming races and register by category', 'Track registration and payment status', 'View results after the race', 'Manage a runner profile']],
      ['Organizers', ['Create and manage events and organizers', 'Verify payments, including manual ones', 'Assign bibs to verified runners', 'Manage runners and registrations']]
    ],
    constraints: [
      ['Many races, many distances', 'Each event offers several categories, such as 5K, 10K and 21K, each with its own price.'],
      ['Mixed payment methods', 'Organizers record manual payments alongside online ones and verify each before a runner is confirmed.'],
      ['Bibs after verification', 'Bib numbers can only go to runners whose registration and payment are verified.']
    ],
    approach: [
      ['Two dashboards, one model', 'Runner and admin dashboards share one data model but show only what each role needs.'],
      ['Status at every step', 'Runners see registration and payment status at each stage, so they don’t have to ask organizers whether a payment went through.'],
      ['Bib management view', 'Organizers assign bibs from a list of verified runners, filtered by event.']
    ],
    outcomes: [
      ['18', 'Screens designed and built'],
      ['2', 'Role-based dashboards'],
      ['3', 'Race categories per event, from 5K to 21K']
    ],
    shots: [
      ['homepage_banner', 'Home'], ['homepage_upcoming_events', 'Upcoming events'], ['event_details_page', 'Event page'],
      ['event_details_page_2', 'Race categories and registration'], ['login_page', 'Sign in'], ['runner_dashboard_page', 'Runner dashboard'],
      ['runner_registration_page', 'My registrations'], ['runner_event_registration_status', 'Registration status'],
      ['runner_payment_status_page', 'Payment status'], ['runner_result_page', 'Race results'], ['profile_page', 'Runner profile'],
      ['admin_dashboard', 'Admin dashboard'], ['admin_event_page', 'Events'], ['admin_registration_list', 'Registrations'],
      ['admin_payment', 'Payments'], ['admin_bib_page', 'Bib management'], ['admin_runner_page', 'Users'], ['admin_organizer_page', 'Organizers']
    ]
  },
  {
    slug: 'pikolz',
    name: 'PIKOLZ',
    year: 2026,
    client: 'PIKOLZ',
    span: 's-7',
    kicker: 'Pickleball management system',
    platform: 'Booking platform, AI-assisted workflow',
    live: '',
    short: 'Courts, bookings, open play and tournaments for pickleball venues.',
    summary: 'A pickleball management system for players, venue owners and organizers: courts, bookings, open play, tournaments and reports.',
    context:
      'Pickleball venues handle court bookings, open play sessions, equipment rentals and payments every day. PIKOLZ gives players one place to book and join games, and gives owners one dashboard to run the venue.',
    roles: [
      ['Players', ['Find courts and check availability', 'Book a court and add rental equipment', 'Upload proof of payment', 'Join open play sessions and tournaments']],
      ['Venue owners', ['Bookings, check-in and check-out', 'Courts, equipment and inventory', 'Members, players and promotions', 'Operating hours, settings and reports']],
      ['Organizers', ['Run open play sessions', 'Track games and players in each session']]
    ],
    constraints: [
      ['Proof-of-payment flow', 'Bookings are paid outside the app, so players upload proof and owners confirm it before the slot is locked.'],
      ['Hourly court slots', 'Availability is shown per court in time slots, and a slot can never be booked twice.'],
      ['Check-in at the counter', 'Staff need a fast way to confirm a booking when the player arrives.']
    ],
    approach: [
      ['QR check-in', 'Each confirmed booking carries a QR code that staff scan at the venue.'],
      ['Live court viewer', 'A full-screen view shows every court as in use, available, reserved or offline.'],
      ['Three role-based views', 'Players, owners and organizers each get their own navigation on one platform.'],
      ['AI-assisted workflow', 'Built with AI coding tools across the workflow to cover a large scope quickly.']
    ],
    outcomes: [
      ['23', 'Screens designed and built'],
      ['3', 'User roles on one platform'],
      ['4', 'Live court states: in use, available, reserved, offline']
    ],
    shots: [
      ['public_court_view', 'Live court viewer'], ['public_page', 'Find a court'], ['public_reservation', 'Court details and availability'],
      ['public_book_court', 'Book a court'], ['public_rent_equiptments', 'Add equipment'], ['public_review_and_pay', 'Review and pay'],
      ['customer_proof_payment_sending_and_booking_details', 'Proof of payment and check-in QR'], ['public_open_play_list', 'Open play sessions'],
      ['public_open_play_details', 'Open play details'], ['organizer_open_play_details_page', 'Organizer view of an open play session'],
      ['login_page', 'Sign in'], ['admin_dashboard', 'Venue overview'], ['owner_bookings', 'Bookings'],
      ['owner_checkin_checkout', 'Check-in and check-out scanner'], ['owner_court_list', 'Courts'], ['owner_equiptment', 'Equipment catalog'],
      ['owner_equiptment_inventory', 'Equipment inventory'], ['owner_players', 'Players'], ['owner_member', 'Team'],
      ['owner_promotions', 'Promotions'], ['owner_operating_time_settings', 'Operating hours'], ['owner_venue_settings', 'Venue settings'],
      ['owner_report', 'Reports']
    ]
  },
  {
    slug: 'crp',
    name: 'Charming Red Packages',
    year: 2026,
    client: 'Charming Red Packages',
    span: 's-8',
    kicker: 'Personalized gift shop',
    platform: 'E-commerce with admin dashboard, AI-assisted workflow',
    live: '',
    short: 'Online souvenir store with quotes, custom orders and a fulfillment calendar.',
    summary: 'An online souvenir store for personalized gifts, with quotes, custom orders and a fulfillment calendar behind it.',
    context:
      'Charming Red Packages makes personalized magnets, keychains, mugs, party favors and keepsakes. Every order is custom, so a standard cart was not enough: customers need a quote, and the shop needs to see what has to be made each day.',
    roles: [
      ['Customers', ['Browse products by category', 'Customize an order with names, photos and an event date', 'Accept a quote and track the order']],
      ['Shop admin', ['Products, orders, quotes and payments', 'Fulfillment calendar', 'Sales reports by day, week or month']]
    ],
    constraints: [
      ['Custom pricing', 'Prices depend on quantity and personalization, so orders start with a quote instead of a fixed price.'],
      ['Event deadlines', 'Most orders are tied to an event date, so production has to be planned around it.'],
      ['Payment checks', 'The shop verifies each payment before an order moves into production.']
    ],
    approach: [
      ['Quote-first checkout', 'Customers submit their details, the shop sends a quote, and the customer accepts it from their account.'],
      ['Fulfillment calendar', 'Orders appear on a calendar by due date, so the shop can see each day’s workload.'],
      ['Built-in sales report', 'Daily, weekly, monthly or custom ranges without exporting to a spreadsheet.'],
      ['AI-assisted workflow', 'Built with AI coding tools across the workflow.']
    ],
    outcomes: [
      ['12', 'Screens designed and built'],
      ['6', 'Product categories in the store'],
      ['Quote-first', 'Checkout built around custom pricing']
    ],
    shots: [
      ['public_page', 'Storefront'], ['public_order', 'Customize an order'], ['order_details', 'Customer quote'],
      ['admin_dashboard', 'Admin dashboard'], ['admin_products', 'Products'], ['admin_quotes', 'Quotes'], ['admin_orders', 'Orders'],
      ['admin_order_details', 'Order details'], ['admin_order_details_2', 'Order fulfillment'], ['admin_payments', 'Payments'],
      ['admin_calendar', 'Fulfillment calendar'], ['admin_sales', 'Sales report']
    ]
  }
]

export const EXPERIENCE: readonly ExperienceItem[] = [
  { years: '2025 – 26', company: 'ZOK Inc.', role: 'Full-Stack Developer', note: 'Laravel REST APIs and responsive front ends built from Figma and PSD designs.', location: 'San Diego, US' },
  { years: '2025', company: 'Valencia Grace', role: 'Full-Stack Developer', note: 'Official artist website with Nuxt.js and Laravel.', location: 'London, UK' },
  { years: '2025', company: 'Sips and Sparks', role: 'Full-Stack Developer, solo', note: 'Speed dating and event booking web application.', location: 'Connecticut, US' },
  { years: '2023 – 25', company: 'Peiso Pty Ltd', role: 'Frontend Developer', note: 'Vue and Nuxt apps, Spring Boot support, and Flutter and FlutterFlow mobile apps with an Australian Agile team.', location: 'Remote, AU team' },
  { years: '2021 – 25', company: 'AUTOSOLVE', role: 'Full-Stack Developer, solo', note: 'Tirecloud, a tire and rim inventory management system built with Laravel and MySQL.', location: 'Ontario, Canada' },
  { years: '2017 – 20', company: 'DOH – Caraga Region', role: 'Computer Programmer I', note: 'Trainer for the iHOMIS hospital system; built the ePABS planning and budget system.', location: 'Butuan City, PH' },
  { years: '2015 – 16', company: 'Rohm Electronics Philippines', role: 'Production Engineer', note: 'Machine programming for integrated circuit production.', location: 'Philippines' }
]
