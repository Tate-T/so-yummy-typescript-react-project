import withAuth from "@/shared/HOC/withAuth";
import Hero from "@/widgets/Hero/Hero";
import Header from "@/shared/Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default withAuth(Home);
