import scc from "./page.module.scss";
import ShopingList from "@/widgets/ShopingList/MyShopingList";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer/Footer";
import withAuth from "@/shared/HOC/withAuth";

function Recipe() {
  return (
    <>
      <Header />
      <ShopingList></ShopingList>
      <Footer />
    </>
  );
}

export default withAuth(Recipe);
