import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const Form = () => {
  const [searchBar, setsearchBar] = useState(null);
  const [meal, setMeal] = useState(null);
  const [data, setData] = useState([]);

  const APP_ID = "07383237";
  const APP_KEY = "ac7c46b1954c3c3a08fd672c0d9f7b72";
  const getApi = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchBar}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
      )
      .then((res) => {
        console.log(res.data.hits);
        setData(res.data.hits);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center gap-5 mt-5">
        <input
          type="text"
          className="rounded-lg bg-black p-2 text-white"
          placeholder="Search"
          onChange={(e) => {
            setsearchBar(e.target.value);
          }}
        />
        <select
          className="rounded-lg bg-black p-2 text-white"
          onChange={(e) => {
            setMeal(e.target.value);
          }}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch/Dinner</option>
          <option value="snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
        <button
          className="rounded-lg bg-black text-white p-2"
          onClick={() => getApi()}
        >
          Search
        </button>
      </div>
      <div className="flex  flex-wrap justify-center mt-10  items-center gap-5 text-center">
        {data.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Form;
