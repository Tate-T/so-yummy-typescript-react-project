import withAuth from "@/shared/HOC/withAuth";
import MyRecipesPage from "@/widgets/MyRecipesPage/MyRecipesPage";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";

export default withAuth(() => {
    return (<>
        <Header />
        <MyRecipesPage />
        <Footer />
    </>);
});