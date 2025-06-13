import Footer from "@/shared/Footer/Footer";
import withAuth from "@/shared/HOC/withAuth";
import Header from "@/shared/Header/Header";
import Recipes from "@/widgets/Recipes/Recipes";

const RecipesPage = () => {
  return (
    <>
      <Header />
      <Recipes />
      <Footer />
    </>
  );
};

export default withAuth(RecipesPage);
