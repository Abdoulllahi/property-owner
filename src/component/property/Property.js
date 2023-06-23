import React from "react";
import "../property/css/Property.css";
import { useNavigate } from "react-router-dom";
import { useEffect, param } from "react";

const Property = (props) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(param.id);

  //   if (param.id) {

  //     const editPost = (id) => {
  //       navigate(`/propertyOffer/${id}`); // Navigate to the edit page with the post ID as a parameter
  //     };
  //   }
  // }, [param.id]);

  return (
    <div className="container">
      <div className="flexContainer">
        <span className="Content">
          <h5>{props.id}</h5>
          <h5>{props.detailOverview}</h5>
          <h5>{props.price}</h5>
 
        </span>
      </div>
    </div>
  );
};

export default Property;
