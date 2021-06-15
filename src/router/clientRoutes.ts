import Login from '@/components/signup-login/Login.vue'
import StaticHome from '@/views/StaticHome.vue'
import MedicalTeam from '@/views/MedicalTeam.vue'
import HospitalHome from '@/views/HospitalHome.vue'
import Signup from '@/components/signup-login/Signup.vue'
import Profile from '@/components/user/Profile.vue'
import ContactUs from '@/components/staticPages/ContactUs.vue'
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
]

export default routes