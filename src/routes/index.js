
import Project from "../pages/Project/Project";
import HomePage from "../pages/HomePage/HomePage";
// import InterViewCT from "../pages/Interview/InterViewCT";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import NewsPage from "../pages/News/NewsPage";
import ProductSer from "../pages/Service/ProductSer";
import ContactPage from "../pages/ContactCT/ContactPage";

export const routes = [
    {
        path:'/',
        element:HomePage,
        title: "Đông Sơn Event",
        isShowHeader: true
    },
    // {
    //     path:'/gioi-thieu',
    //     element:InterViewCT,
    //     title: "Giới Thiệu",
    //     isShowHeader: true
    // },
    {
        path:'/du-an',
        element:Project,
        title: "Dự Án",
        isShowHeader: true
    },
    {
        path:'/san-pham',
        element:ProductSer,
        title: "Sản Phẩm",
        isShowHeader: true
    },
    {
        path:'/tin-tuc',
        element:NewsPage,
        title: "Tin Tức",
        isShowHeader: true
    },
    {
        path:'/lien-he',
        element:ContactPage,
        title: "Liên Hệ",
        isShowHeader: true
    },
    {
        path:'*',
        title: "404",
        element:NotFoundPage
    },
]