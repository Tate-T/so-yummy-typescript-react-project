import Categories from "@/widgets/Categories/Categories";
import css from "./page.module.scss";
import withAuth from "@/shared/HOC/withAuth";

const CategoriesPage = () => {
  return <Categories />;
};

export default withAuth(CategoriesPage);
