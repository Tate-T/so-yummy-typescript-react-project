import withAuth from "@/shared/HOC/withAuth";
import AddOwnRecipe from "@/widgets/AddOwnRecipe/AddOwnRecipe";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";

export default withAuth(() => {
    return (<>
        <Header />
        <AddOwnRecipe />
        <Footer />
    </>);
});