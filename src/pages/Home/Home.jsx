import Header from "../../components/Header";
import Banner from "../../components/Banner";
import bannerBackground from "../../assets/banner-background-homepage.png";
import Footer from "../../components/Footer";
import CardsContainer from "../../components/CardsContainer";

function Home() {
  return (
    <>
      <Header />
      <Banner
        bannerBackground={bannerBackground}
        bannerText="Chez vous, partout et ailleurs"
      />
      <CardsContainer />
      <Footer />
    </>
  );
}

export default Home;
