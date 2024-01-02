import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slideshow from "../../components/Slideshow";
import housings from "../../datas/housings.json";
import HousingDescription from "../../components/HousingDescription";

function Housing() {
  const { housingIndex } = useParams();

  let numberRegex = /^(([1-9][0-9]*)|([0]))$/;

  if (numberRegex.test(housingIndex) && housingIndex < housings.length) {
    return (
      <>
        <Header />
        <Slideshow housing={housings[housingIndex]} />
        <HousingDescription housing={housings[housingIndex]} />
        <Footer />
      </>
    );
  } else {
    return <Error />;
  }
}

export default Housing;
