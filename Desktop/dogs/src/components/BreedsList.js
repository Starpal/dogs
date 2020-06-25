import React from "react";
import { useDispatch } from "react-redux";
import { apiCallRequest, apiCallSuccess, apiCallFailed } from "../actions/actions";
import * as api from "../fetchAPI/API";

export default function BreedsList({ dog }) {
  const dispatch = useDispatch();
  const apiCallRequest = () => dispatch(apiCallRequest(dog));


  return (
    <div className="breedsImgPie">
{dog}
    </div>
  );
}
