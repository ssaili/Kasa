import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slideshow from "../../components/Slideshow";
import housings from "../../datas/housings.json";

function Housing() {
  const { housingIndex } = useParams();

  return (
    <>
      <Header />
      <Slideshow housing={housings[housingIndex]} />
      <Footer />
    </>
  );
}

export default Housing;
