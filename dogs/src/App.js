import React, { useEffect } from "react";
import "./App.css";
import { connect, useDispatch, useSelector } from "react-redux";
import {apiCallRequest} from "./actions/actions";
import BreedsList from "./components/BreedsList";

const App = () => {

  const dispatch = useDispatch();
  const { fetching, dog, error } = useSelector((state) => state);
  const getBreedsList = () => {
    dispatch(apiCallRequest());
  };

  useEffect(function () {
    getBreedsList();
}, []);
    
    return (
      <div className="App">


     {BreedsList.map((dog, index) => (
        <div key={index} dog={dog} fetching={true}>
        {dog}
        </div>
     )
       
       )}


    </div>
  );
}


export default App;