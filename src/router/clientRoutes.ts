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
                path: '/messages/:id',
                name: 'messagesChat',
                component: Chat
            },
        ]
    },
]

export default routes