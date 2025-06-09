import Categories from "@/widgets/Categories/Categories";
import css from "./page.module.scss";
import withAuth from "@/shared/HOC/withAuth";
import Header from "@/shared/Header/Header";

const CategoriesPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Categories />
    </>
  );
};

export default withAuth(CategoriesPage);
