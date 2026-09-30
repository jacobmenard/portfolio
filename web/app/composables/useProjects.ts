import valenciagrace from '@/assets/img/projects/valenciagrace.png'
import sipsandsparks from '@/assets/img/projects/sipsandsparks.png'

import birakolHomepageBanner from '@/assets/img/projects/birakol/homepage_banner.png'
import birakolHomepageUpcomingEvents from '@/assets/img/projects/birakol/homepage_upcoming_events.png'
import birakolEventDetails from '@/assets/img/projects/birakol/event_details_page.png'
import birakolEventDetails2 from '@/assets/img/projects/birakol/event_details_page_2.png'
import birakolLogin from '@/assets/img/projects/birakol/login_page.png'
import birakolProfile from '@/assets/img/projects/birakol/profile_page.png'
import birakolRunnerRegistration from '@/assets/img/projects/birakol/runner_registration_page.png'
import birakolRunnerRegistrationStatus from '@/assets/img/projects/birakol/runner_event_registration_status.png'
import birakolRunnerPaymentStatus from '@/assets/img/projects/birakol/runner_payment_status_page.png'
import birakolRunnerDashboard from '@/assets/img/projects/birakol/runner_dashboard_page.png'
import birakolRunnerResult from '@/assets/img/projects/birakol/runner_result_page.png'
import birakolAdminDashboard from '@/assets/img/projects/birakol/admin_dashboard.png'
import birakolAdminEvent from '@/assets/img/projects/birakol/admin_event_page.png'
import birakolAdminOrganizer from '@/assets/img/projects/birakol/admin_organizer_page.png'
import birakolAdminBib from '@/assets/img/projects/birakol/admin_bib_page.png'
import birakolAdminRegistrationList from '@/assets/img/projects/birakol/admin_registration_list.png'
import birakolAdminPayment from '@/assets/img/projects/birakol/admin_payment.png'
import birakolAdminRunner from '@/assets/img/projects/birakol/admin_runner_page.png'

import pikolzPublicPage from '@/assets/img/projects/pikolz/public_page.png'
import pikolzPublicCourtView from '@/assets/img/projects/pikolz/public_court_view.png'
import pikolzPublicCourtViewer from '@/assets/img/projects/pikolz/public_court_viewer.png'
import pikolzPublicBookCourt from '@/assets/img/projects/pikolz/public_book_court.png'
import pikolzPublicReservation from '@/assets/img/projects/pikolz/public_reservation.png'
import pikolzPublicReviewAndPay from '@/assets/img/projects/pikolz/public_review_and_pay.png'
import pikolzPublicRentEquipment from '@/assets/img/projects/pikolz/public_rent_equiptments.png'
import pikolzPublicOpenPlayList from '@/assets/img/projects/pikolz/public_open_play_list.png'
import pikolzPublicOpenPlayDetails from '@/assets/img/projects/pikolz/public_open_play_details.png'
import pikolzLogin from '@/assets/img/projects/pikolz/login_page.png'
import pikolzCustomerProofPayment from '@/assets/img/projects/pikolz/customer_proof_payment_sending_and_booking_details.png'
import pikolzOrganizerOpenPlayDetails from '@/assets/img/projects/pikolz/organizer_open_play_details_page.png'
import pikolzOwnerBookings from '@/assets/img/projects/pikolz/owner_bookings.png'
import pikolzOwnerCheckinCheckout from '@/assets/img/projects/pikolz/owner_checkin_checkout.png'
import pikolzOwnerCourtList from '@/assets/img/projects/pikolz/owner_court_list.png'
import pikolzOwnerPlayers from '@/assets/img/projects/pikolz/owner_players.png'
import pikolzOwnerMember from '@/assets/img/projects/pikolz/owner_member.png'
import pikolzOwnerEquipment from '@/assets/img/projects/pikolz/owner_equiptment.png'
import pikolzOwnerEquipmentInventory from '@/assets/img/projects/pikolz/owner_equiptment_inventory.png'
import pikolzOwnerPromotions from '@/assets/img/projects/pikolz/owner_promotions.png'
import pikolzOwnerReport from '@/assets/img/projects/pikolz/owner_report.png'
import pikolzOwnerOperatingTimeSettings from '@/assets/img/projects/pikolz/owner_operating_time_settings.png'
import pikolzOwnerVenueSettings from '@/assets/img/projects/pikolz/owner_venue_settings.png'
import pikolzAdminDashboard from '@/assets/img/projects/pikolz/admin_dashboard.png'

import crpPublicPage from '@/assets/img/projects/crp/public_page.png'
import crpPublicOrder from '@/assets/img/projects/crp/public_order.png'
import crpOrderDetails from '@/assets/img/projects/crp/order_details.png'
import crpAdminDashboard from '@/assets/img/projects/crp/admin_dashboard.png'
import crpAdminProducts from '@/assets/img/projects/crp/admin_products.png'
import crpAdminOrders from '@/assets/img/projects/crp/admin_orders.png'
import crpAdminOrderDetails from '@/assets/img/projects/crp/admin_order_details.png'
import crpAdminOrderDetails2 from '@/assets/img/projects/crp/admin_order_details_2.png'
import crpAdminQuotes from '@/assets/img/projects/crp/admin_quotes.png'
import crpAdminPayments from '@/assets/img/projects/crp/admin_payments.png'
import crpAdminSales from '@/assets/img/projects/crp/admin_sales.png'
import crpAdminCalendar from '@/assets/img/projects/crp/admin_calendar.png'

export interface Project {
    slug: string
    title: string
    client: string
    year: string
    role: string
    /** Omit when the project has no public live demo. */
    link?: string
    description: string
    fullDescription: string
    coverImage: string
    /** Screenshots/snapshots shown on the project details page. Add more images to `assets/img/projects/<slug>/` and list them here as the project grows. */
    gallery: string[]
}

const projects: Project[] = [
    {
        slug: 'valencia-grace',
        title: 'Valencia Grace Website',
        client: 'Valencia Grace',
        year: '2025',
        role: 'Full Stack Developer',
        link: 'https://www.valenciagrace.com',
        description: `Valencia Grace is the official website of music artist Valencia Grace, designed to showcase her latest releases, music videos, tour dates, and exclusive content.`,
        fullDescription: `Valencia Grace is the official website of music artist Valencia Grace, designed to showcase her latest releases, music videos, tour dates, and exclusive content. The website delivers an immersive, responsive experience that reflects the artist's unique theatrical pop aesthetic while making it easy for fans to discover and stream her music across major platforms. Built with Nuxt.js on the frontend and Laravel on the backend, the site was developed from Figma and PSD designs into a fully responsive, production-ready application.`,
        coverImage: valenciagrace,
        gallery: [valenciagrace],
    },
    {
        slug: 'sips-and-sparks',
        title: 'Speed Dating Web Application',
        client: 'Sips and Sparks LLC',
        year: '2025',
        role: 'Full Stack Developer',
        link: 'https://www.sipsandsparks.com',
        description: `A speed dating and singles mixer platform for Connecticut and southern Massachusetts, built to make meeting new people feel natural, fun, and worth showing up for.`,
        fullDescription: `Sips & Sparks was made for people who are short on time but still want real connection. The platform hosts speed dating, singles mixers, and activity-based events, and needed a fully responsive, dynamic web application to promote events and manage attendee sign-ups. I converted the UI/UX designs into a production-ready responsive web application, ensuring a seamless experience for users browsing and booking events across devices.`,
        coverImage: sipsandsparks,
        gallery: [sipsandsparks],
    },
    {
        slug: 'birakol',
        title: 'Birakol',
        client: 'Birakol',
        year: '2026',
        role: 'Full Stack Developer',
        description: `Birakol — A complete running event management system for organizing races, managing participants, tracking results, and delivering better race experiences.`,
        fullDescription: `Birakol is a complete running event management system built to help organizers run races end-to-end. Runners can browse upcoming events, register, track their registration and payment status, and view their results once the race is complete. Organizers manage everything through a dedicated admin dashboard covering events, organizers, bib assignment, registrations, payments, and runner records, giving them full control over the race day experience from setup to results.`,
        coverImage: birakolHomepageBanner,
        gallery: [
            birakolHomepageBanner,
            birakolHomepageUpcomingEvents,
            birakolEventDetails,
            birakolEventDetails2,
            birakolLogin,
            birakolProfile,
            birakolRunnerRegistration,
            birakolRunnerRegistrationStatus,
            birakolRunnerPaymentStatus,
            birakolRunnerDashboard,
            birakolRunnerResult,
            birakolAdminDashboard,
            birakolAdminEvent,
            birakolAdminOrganizer,
            birakolAdminBib,
            birakolAdminRegistrationList,
            birakolAdminPayment,
            birakolAdminRunner,
        ],
    },
    {
        slug: 'pikolz',
        title: 'PIKOLZ',
        client: 'PIKOLZ',
        year: '2026',
        role: 'Full Stack Developer',
        description: `PIKOLZ is a modern pickleball management system for organizing players, courts, schedules, open play sessions, tournaments, registrations, and match results in one platform.`,
        fullDescription: `PIKOLZ is a modern pickleball management system built to run a facility end-to-end. Players can browse court availability, book and reserve courts, join open play sessions and tournaments, rent equipment, and submit proof of payment for their bookings. Venue owners manage everything through a dedicated dashboard covering bookings, check-in/check-out, court and equipment inventory, members and players, promotions, operating hours, venue settings, and reporting, while organizers coordinate open play sessions and event details. This project was built with AI-assisted development, using AI coding tools throughout the workflow to accelerate full-stack delivery.`,
        coverImage: pikolzOrganizerOpenPlayDetails,
        gallery: [
            pikolzPublicPage,
            pikolzPublicCourtView,
            pikolzPublicCourtViewer,
            pikolzPublicBookCourt,
            pikolzPublicReservation,
            pikolzPublicReviewAndPay,
            pikolzPublicRentEquipment,
            pikolzPublicOpenPlayList,
            pikolzPublicOpenPlayDetails,
            pikolzLogin,
            pikolzCustomerProofPayment,
            pikolzOrganizerOpenPlayDetails,
            pikolzOwnerBookings,
            pikolzOwnerCheckinCheckout,
            pikolzOwnerCourtList,
            pikolzOwnerPlayers,
            pikolzOwnerMember,
            pikolzOwnerEquipment,
            pikolzOwnerEquipmentInventory,
            pikolzOwnerPromotions,
            pikolzOwnerReport,
            pikolzOwnerOperatingTimeSettings,
            pikolzOwnerVenueSettings,
            pikolzAdminDashboard,
        ],
    },
    {
        slug: 'charming-red-packages',
        title: 'Charming Red Packages',
        client: 'Charming Red Packages',
        year: '2026',
        role: 'Full Stack Developer',
        description: `Charming Red Packages is an online souvenir store specializing in personalized and customized gifts made for every special occasion. From ref magnets, keychains, mugs, party favors, and invitations to unique keepsakes, we create thoughtful pieces designed to celebrate your memories and tell your story.`,
        fullDescription: `Charming Red Packages is an online souvenir store specializing in personalized and customized gifts made for every special occasion. From ref magnets, keychains, mugs, party favors, and invitations to unique keepsakes, the platform lets customers browse the catalog, place custom orders, and track their order details from checkout to fulfillment. On the back end, a dedicated admin dashboard manages products, orders and order details, quotes, payments, sales reporting, and a fulfillment calendar, giving the store owner full visibility over the business in one place. This project was built with AI-assisted development, using AI coding tools throughout the workflow to accelerate full-stack delivery.`,
        coverImage: crpAdminCalendar,
        gallery: [
            crpPublicPage,
            crpPublicOrder,
            crpOrderDetails,
            crpAdminDashboard,
            crpAdminProducts,
            crpAdminOrders,
            crpAdminOrderDetails,
            crpAdminOrderDetails2,
            crpAdminQuotes,
            crpAdminPayments,
            crpAdminSales,
            crpAdminCalendar,
        ],
    },
]

export function useProjects() {
    function getProjectBySlug(slug: string) {
        return projects.find((project) => project.slug === slug)
    }

    return { projects, getProjectBySlug }
}
