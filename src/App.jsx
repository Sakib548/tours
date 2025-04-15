const url = "https://www.course-api.com/react-tours-project";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
//import Loading from "./components/Loading";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTours(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    // setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("tours", tours);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => fetchData()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
};
export default App;
