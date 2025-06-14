import withAuth from "@/shared/HOC/withAuth";
import Hero from "@/widgets/Hero/Hero";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";
import CategoriesMain from "@/widgets/CategoriesMain/CategoriesMain";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CategoriesMain />
      <Footer />
    </>
  );
}

export default withAuth(Home);
