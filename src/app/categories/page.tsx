import Categories from "@/widgets/Categories/Categories";
import css from "./page.module.scss";
import withAuth from "@/shared/HOC/withAuth";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";

const CategoriesPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Categories />
      {/* <Footer /> */}
    </>
  );
};

export default withAuth(CategoriesPage);
