import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import "../property/css/Property.css";

const PropertyDetail = (props) => {
  const param = useParams();

  const navigate = useNavigate();

  const [fullPost, setFullPost] = useState({});

  const [delet, setDelete] = useState(null);

  useEffect(() => {
    console.log(param.id);

    if (param.id) {
      axios

        .get("http://localhost:8080/v1/api/property/" + param.id)

        .then((response) => {
          setFullPost(response.data);
        })

        .catch((err) => console.log(err));
    }
  }, [param.id]);

  const deletePost = (id) => {
    console.log(id);

    axios

      .delete("http://localhost:8080/v1/api/property/" + param.id)

      .then((response) => {
        setDelete(response.headers);
        console.log("deleted");

        navigate("/");
      })

      .catch((err) => console.log(err));
  };
  const offerPost = (id) => {
    navigate(`/propertyOffers/${id}`); // Navigate to the edit page with the post ID as a parameter
  };

  const editPost = (id) => {
    navigate(`/propertyUpdate/${id}`); // Navigate to the edit page with the post ID as a parameter
  };

  let postDetailsDisplay = null;

  if (param.id) {
    postDetailsDisplay = (
      <span>
        <div className="ProductDetail">
          <h2>PropertyDetail</h2>

          <h4>id: {fullPost.id}</h4>
          <h5>userID: {fullPost.userId}</h5>
          <ul style={{ listStyleType: "none" }}>
            <li>detailOverview: {fullPost.detailOverview}</li>
            <li>squareFeetArea: {fullPost.squareFeetArea}</li>
            <li>unitAreaPrice: {fullPost.unitAreaPrice}</li>
            <li>price: {fullPost.price}</li>
            <li>propertyType: {fullPost.propertyType}</li>
            <li>homeType: {fullPost.homeType}</li>
            <li>numberOfParking: {fullPost.numberOfParking}</li>
            <li>views: {fullPost.views}</li>
            <li>builtDate: {fullPost.builtDate}</li>
            <li>numberOfBedroom: {fullPost.numberOfBedroom}</li>
            <li>bathroomCount: {fullPost.bathroomCount}</li>
            <li>businessType: {fullPost.businessType}</li>
            <li>pricePerMonth: {fullPost.pricePerMonth}</li>
            <li>galleryList: {fullPost.galleryList}</li>
          </ul>

          <input
            type="button"
            value="delete"
            onClick={() => {
              deletePost(param.id);
            }}
          />

          <input
            type="button"
            value="edit"
            onClick={() => {
              editPost(param.id);
            }}
          />

          <input
            type="button"
            value="porpertyOffer"
            onClick={() => {
              offerPost(param.id); // Pass the post ID from the props to the editPost function
            }}
          />
        </div>
      </span>
    );
  }

  return postDetailsDisplay;
};

export default PropertyDetail;
