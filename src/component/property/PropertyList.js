import React, { useEffect, useState } from "react";
import axios from "axios";
import Property from "./Property";
import PropertyDetail from "./PropertyDetail";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/v1/api/property"
        );
        setProperties(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProperties();
  }, []);
  const propertyList = properties.map((property) => (
    <Link  to={`${property.id}`} key={property.id}>
      <Property
        detailOverview={property.detailOverview}
        price={property.price}
        id={property.id}
        key={property.id}
      />
    </Link>
  ));

  return (
    <div>
      <h1>PropertyList</h1>
      {propertyList}
      <PropertyDetail />
    </div>
  );
};

export default PropertyList;
