import Favorites from "@/widgets/Favorites/Favorites";
import withAuth from "@/shared/HOC/withAuth";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";

export default withAuth(() => {
    return (<>
        <Header />
        <Favorites />
        <Footer />
    </>);
});