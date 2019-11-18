import Home from './pages/Home/Home';
import CourseListPage from './pages/Home/CourseListPage';
import CourseDetail from './pages/Home/CourseDetail';
import UserProfile from './pages/Home/UserInfo';
import RegisterCourse from './pages/Home/RegisterCourse';
import AdminDashboard from './pages/Admin/AdminDashboard'
import UsersManagement from './pages/Admin/UsersManagement';
import CoursesManagement from './pages/Admin/CoursesManagement';
import AdvancedRegister from './pages/Admin/AdvancedRegister';


import Dashboard from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const homeRoutes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/home",
        exact: false,
        component: Home
    },
    {
        path: "/course-list",
        exact: false,
        component: CourseListPage
    },
    {
        path: "/course-detail/:id",
        exact: false,
        component: CourseDetail
    },
    {
        path: "/user-profile",
        exact: false,
        component: UserProfile
    },
    {
        path: "/register-course",
        exact: false,
        component: RegisterCourse
    }
]

const adminRoutes = [
    {
        path: '/admin/dashboard',
        exact: false,
        name: "Dashboard",
        icon: Dashboard,
        component: AdminDashboard
    },
    {
        path: '/admin/courses-management',
        exact: false,
        name: "Courses Management",
        icon: MenuBookIcon,
        component: CoursesManagement
    },
    {
        path: '/admin/users-management',
        exact: false,
        name: "Users Management",
        icon: SupervisorAccountIcon,
        component: UsersManagement
    },
    {
        path: '/admin/advanced-register',
        exact: false,
        name: "Advanced Register",
        icon: ShoppingCartIcon,
        component: AdvancedRegister
    }
]
export { homeRoutes, adminRoutes };