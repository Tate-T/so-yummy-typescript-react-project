import RecipeHero from "@/widgets/Recipes/RecipeHero/RecipeHero";
import RecipeList from "@/widgets/Recipes/ListItem/ListItem";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";
import withAuth from "@/shared/HOC/withAuth";

function Recipe() {
  return (
    <>
      <Header />
      <RecipeHero />
      <RecipeList />
      <Footer />
    </>
  );
}

export default withAuth(Recipe);
