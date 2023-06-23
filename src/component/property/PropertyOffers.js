import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Offers from "./Offers";

const PropertyOffers = () => {
//   const {id} = useParams();
    const id = localStorage.getItem("userId");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await axios.get(
        `http://localhost:8080/v1/api/property/creators/${id}`
      );
        setProperties(res.data);
        console.log(res.data)
    };
    fetchProperties();
  }, [id]);

  const propertyList = properties.map((property) => (
    <Offers
      detailOverview={property.detailOverview}
      price={property.price}
      id={property.id}
      key={property.id}
    />
  ));

  return (
    <div>
      <h1>Property Offers New</h1>
      {propertyList}
    </div>
  );
};

export default PropertyOffers;
