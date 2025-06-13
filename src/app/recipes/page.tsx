import withAuth from "@/shared/HOC/withAuth";
import Header from "@/shared/Header/Header";
import Recipes from "@/widgets/Recipes/Recipes";

const RecipesPage = () => {
  return (
    <>
      <Header />
      <Recipes />
    </>
  );
};

export default withAuth(RecipesPage);
