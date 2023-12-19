import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slideshow from "../../components/Slideshow";
import housings from "../../datas/housings.json";
import HousingDescription from "../../components/HousingDescription";

function Housing() {
  const { housingIndex } = useParams();

  if (housingIndex >= housings.length) {
    return <Error />;
  } else {
    return (
      <>
        <Header />
        <Slideshow housing={housings[housingIndex]} />
        <HousingDescription housing={housings[housingIndex]} />
        <Footer />
      </>
    );
  }
}

export default Housing;
