import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} removeTour={removeTour} />
        ))}
      </div>
    </section>
    // <ul>
    //   {tours.map((tour) => (
    //     <Tour tour={tour} key={tour.id} />
    //   ))}
    // </ul>
  );
};
export default Tours;
