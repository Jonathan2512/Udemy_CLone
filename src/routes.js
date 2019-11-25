// home routes
import Home from './pages/Home/Home';
import CourseListPage from './pages/Home/CourseListPage';
import CourseDetail from './pages/Home/CourseDetail';
import UserProfile from './pages/Home/UserInfo';
import RegisterCourse from './pages/Home/RegisterCourse';

// admin routes
import AdminDashboard from './pages/Admin/AdminDashboard'
import UsersManagement from './pages/Admin/UsersManagement';
import CoursesManagement from './pages/Admin/CoursesManagement';
import AdvancedRegisterCourse from './pages/Admin/UserRegister';
import CourseRegister from './pages/Admin/CourseRegister';


// @material-ui icon
import Dashboard from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

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
        path: '/admin/user-register',
        exact: false,
        name: "User Register",
        icon: PersonAddIcon,
        component: AdvancedRegisterCourse
    },
    {
        path: '/admin/course-register',
        exact: false,
        name: "Course Register",
        icon: ShoppingCartIcon,
        component: CourseRegister
    }
]
export { homeRoutes, adminRoutes };