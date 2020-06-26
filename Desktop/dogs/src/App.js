import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { apiCallRequest } from "./actions/actions";
import { Chart } from "react-google-charts";

const App = () => {
  const dispatch = useDispatch();
  const { dog } = useSelector((state) => state);
  const getBreedsList = () => {
    dispatch(apiCallRequest());
  };

  useEffect(() => {
    getBreedsList();
  }, []);

  const pieChartArr = [["Breed", "Number of images"]];
  dog.map((dog) => {
    for (let [key, value] of Object.entries(dog)) {
      pieChartArr.push([key, value]);
    }
  });

  return (
    <div className="App">
      <h1>Dogs</h1>
      <Chart
        width={"800px"}
        height={"600px"}
        chartType="PieChart"
        loader={<div><i>Loading Chart</i></div>}
        data={pieChartArr}
        options={{
          title: "Top 10 Breeds with highest number of images.",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default App;
