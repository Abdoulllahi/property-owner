import React, { useRef, useState, useEffect } from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import "../property/css/PropertyUpdate.css";

const PropertyUpdate = () => {
  const { id } = useParams();

  const newProductForm = useRef();

  const navigate = useNavigate();

  const [fullPost, setFullPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/v1/api/property/${id}`
        );

        setFullPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [id]);

  const updatePost = async (e) => {
    e.preventDefault();

    const form = newProductForm.current;

    const data = {
      squareFeetArea: form.elements.squareFeetArea.value,
      detailOverview: form.elements.detailOverview.value,
      price: form.elements.price.value,
      propertyType: form.elements.propertyType.value,
      homeType: form.elements.homeType.value,
      numberOfParking: form.elements.numberOfParking.value,
      views: form.elements.views.value,
      builtDate: form.elements.builtDate.value,
      numberOfBedroom: form.elements.numberOfBedroom.value,
      bathroomCount: form.elements.bathroomCount.value,
      businessType: form.elements.businessType.value,
      pricePerMonth: form.elements.pricePerMonth.value,
    };

    console.log(data);

    try {
      const response = await axios.put(
        `http://localhost:8080/v1/api/property/${id}`,

        data
      );

      console.log(response.data);

      navigate("/propertyList");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFullPost((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };

  return (
    <div className="NewProduct">
      <form ref={newProductForm} onSubmit={updatePost}>
      <div className="Spec">

<button
  onClick={() => {
    navigate(`/propertyList/${id}`);
  }}
>
  Back
</button>
</div>
        <h1>PropertyUpdate</h1>

        <label>SquareFeetArea</label>

        <input
          type="text"
          placeholder="SquareFeetArea"
          name="squareFeetArea"
          value={fullPost.squareFeetArea} // Use value instead of defaultValue
          onChange={handleInputChange} // Update the state when the value changes
        />

        <label>DetailOverview</label>

        <input
          type="text"
          placeholder="DetailOverview"
          name="detailOverview"
          value={fullPost.detailOverview}
          onChange={handleInputChange}
        />

        <label>Price</label>

        <input
          type="text"
          placeholder="Price"
          name="price"
          value={fullPost.price}
          onChange={handleInputChange}
        />
        <label>PropertyType</label>

        <input
          type="text"
          placeholder="PropertyType"
          name="propertyType"
          value={fullPost.propertyType}
          onChange={handleInputChange}
        />
        <label>homeType</label>

        <input
          type="text"
          placeholder="HomeType"
          name="homeType"
          value={fullPost.homeType}
          onChange={handleInputChange}
        />
        <label>NumberOfParking</label>

        <input
          type="text"
          placeholder="NumberOfParking"
          name="numberOfParking"
          value={fullPost.numberOfParking}
          onChange={handleInputChange}
        />
        <label>Views</label>

        <input
          type="text"
          placeholder="Views"
          name="views"
          value={fullPost.views}
          onChange={handleInputChange}
        />
        <label>BuiltDate</label>

        <input
          type="text"
          placeholder="BuiltDate"
          name="builtDate"
          value={fullPost.builtDate}
          onChange={handleInputChange}
        />
        <label>NumberOfBedroom</label>

        <input
          type="text"
          placeholder="NumberOfBedroom"
          name="numberOfBedroom"
          value={fullPost.numberOfBedroom}
          onChange={handleInputChange}
        />
        <label>BathroomCount</label>

        <input
          type="text"
          placeholder="BathroomCount"
          name="bathroomCount"
          value={fullPost.bathroomCount}
          onChange={handleInputChange}
        />
        <label>BusinessType</label>

        <input
          type="text"
          placeholder="BusinessType"
          name="businessType"
          value={fullPost.businessType}
          onChange={handleInputChange}
        />
        <label>PricePerMonth</label>

        <input
          type="text"
          placeholder="PricePerMonth"
          name="pricePerMonth"
          value={fullPost.pricePerMonth}
          onChange={handleInputChange}
        />
      <button>Update Property</button>

      </form>


      
    </div>
  );
};

export default PropertyUpdate;

// import React from "react";
// import axios from "axios";

// const PropertyUpdate = ({ propertyId }) => {
//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     const { title, description } = event.target.elements;
//     const res = await axios.put(
//       `http:localhost:8080/v1/api/property/${propertyId}`,
//       {
//         title: title.value,
//         description: description.value,
//       }
//     );
//     console.log("Property updated:", res.data);
//   };

//   return (
//     <div>
//       <h1>Update Property</h1>
//       <form onSubmit={handleUpdate}>
//         <label htmlFor="title">Title:</label>
//         <input id="title" type="text" required />
//         <label htmlFor="description">Description:</label>
//         <input id="description" type="text" required />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default PropertyUpdate;
