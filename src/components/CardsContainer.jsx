import housings from "../datas/housings.json";
import Card from "./Card";

function CardsContainer() {
  return (
    <div className="cards-container">
      {housings.map((housing, housingIndex) => (
        <Card
          key={housing.id}
          cardIndex={housingIndex}
          cardBackground={housing.cover}
          cardTitle={housing.title}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
