import Login from '@/components/signup-login/Login.vue'
import StaticHome from '@/views/StaticHome.vue'
import MedicalTeam from '@/views/MedicalTeam.vue'
import HospitalHome from '@/views/HospitalHome.vue'
import Signup from '@/components/signup-login/Signup.vue'
import Profile from '@/components/user/Profile.vue'
import ContactUs from '@/components/staticPages/ContactUs.vue'
import Messages from '@/views/Messages.vue'
import Chat from '@/components/messages/Chat.vue'
import Reservations from '@/views/Reservations.vue'
import ReservationItem from '@/components/reservations/ReservationItem.vue'
import Appoinetments from '@/views/Appoinetments.vue'
import Confirmation from '@/components/appoinetments/Confirmation.vue'
import SuccessPage from '@/components/appoinetments/SuccessPage.vue'
import AppoinetmentsItem from '@/components/appoinetments/AppoinetmentsItem.vue'
import AppoinetmentsItemEmergency from '@/components/appoinetments/AppoinetmentsItemEmergency.vue'
import Ratings from '@/views/Ratings.vue'
import Sections from '@/views/Sections.vue'
import AddSections from '@/views/AddSections.vue'
import SuggestSections from '@/views/SuggestSections.vue'
import SectionDetails from '@/views/SectionDetails.vue'
import ReservationHistory from '@/views/ReservationHistory.vue'
import ReservationHistoryItem from '@/components/reservationHistory/ReservationHistoryItem.vue'
import Eemergency from '@/views/Emergency.vue'
import EmergencyItem from '@/components/emergency/EmergencyItem.vue'
import EmergencySection from '@/components/emergency/EmergencySection.vue'
import AddEmergencySections from '@/components/emergency/AddEmergencySections.vue'
import EmergencySectionDetails from '@/components/emergency/EmergencySectionDetails.vue'
import FinishAppoinetments from '@/components/appoinetments/FinishAppoinetments.vue'
import StaticPages from '@/views/StaticPages.vue'
const routes = [
    {
        path: '/',
        name: 'StaticHome',
        component: StaticHome
    },
    {
        path: '/home',
        name: 'StaticHome',
        component: StaticHome
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/medical_team',
        name: 'medicalTeam',
        component: MedicalTeam
    },
    {
        path: '/hospital_home',
        name: 'hospitalHome',
        component: HospitalHome
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/contact_us',
        name: 'contact_us',
        component: ContactUs
    },
    {
        path: '/about_us',
        name: 'about_us',
        component: StaticPages
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: StaticPages
    },
    {
        path: '/terms',
        name: 'terms',
        component: StaticPages
    },
    {
        path: '/patient_privacy',
        name: 'patientPrivacy',
        component: StaticPages
    },
    {
        path: '/sections',
        name: 'Sections',
        component: Sections
    },
    {
        path: '/add-section',
        name: 'AddSections',
        component: AddSections
    },
    {
        path: '/suggest-sections',
        name: 'SuggestSections',
        component: SuggestSections
    },
    {
        path: '/section-details/:id',
        name: 'sectionDetails',
        component: SectionDetails
    },
    {
        path: '/emergency-section-details/:id',
        name: 'emergencySectionDetails',
        component: EmergencySectionDetails
    },
    {
        path: '/messages',
        name: 'messages',
        component: Messages,
        children: [
            {
                path: '/messages/:id',
                name: 'messagesChat',
                component: Chat
            },
        ]
    },
    {
        path: '/reservations',
        name: 'reservations',
        component: Reservations,
        children: [
            {
                path: '/reservations/:id',
                name: 'ReservationItem',
                component: ReservationItem
            },
        ]
    },
    {
        path: '/emergency',
        name: 'emergency',
        component: Eemergency,
        children: [
            {
                path: '/emergency/:id',
                name: 'emergencyItem',
                component: EmergencyItem
            },
        ]
    },
    {
        path: '/ratings',
        name: 'ratings',
        component: Ratings
    },
    {
        path: '/emergency-sections',
        name: 'EmergencySection',
        component: EmergencySection
    },
    {
        path: '/reservation-history',
        name: 'reservationHistory',
        component: ReservationHistory,
        children: [
            {
                path: '/reservation-history/:id',
                name: 'ReservationHistoryItem',
                component: ReservationHistoryItem
            },
        ]
    },
    {
        path: '/appoinetments',
        name: 'appoinetments',
        component: Appoinetments,
        children: [
            {
                path: '/confirmation/:id',
                name: 'Confirmation',
                component: Confirmation
            },
            {
                path: '/success_page/:id',
                name: 'SuccessPage',
                component: SuccessPage
            },
            {
                path: '/normal-appoinetment-details/:id',
                name: 'normalDetails',
                component: AppoinetmentsItem
            },
            {
                path: '/emergency-appoinetment-details/:id',
                name: 'emergencyDetails',
                component: AppoinetmentsItemEmergency
            },
            {
                path: '/finish-appoinetments/:id',
                name: 'FinishAppoinetments',
                component: FinishAppoinetments
            },
        ]
    },
    {
        path: '/add-emergency-section',
        name: 'AddEmergencySections',
        component: AddEmergencySections
    },
]

export default routes