import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PropertyCreate = (props) => {
  const newProductForm = useRef();
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    const form = newProductForm.current;

    const data = {
      propertyType: form.elements.propertyType.value,
      homeType: form.elements.homeType.value,
      builtDate: form.elements.builtDate.value,
      bathroomCount: form.elements.bathroomCount.value,
      squareFeetArea: form.elements.squareFeetArea.value,
      detailOverview: form.elements.detailOverview.value,
      unitAreaPrice: form.elements.unitAreaPrice.value,
      numberOfParking: form.elements.numberOfParking.value,
      numberOfBedroom: form.elements.numberOfBedroom.value,
      userId: form.elements.userId.value,
      businessType: form.elements.businessType.value,
      pricePerMonth: form.elements.pricePerMonth.value,
      address: {
        city: form.elements.city.value,
        state: form.elements.state.value,
        zipcode: form.elements.zipcode.value,
        country: form.elements.country.value,
        street: form.elements.street.value,
      },
    };

    axios
      .post("http://localhost:8080/v1/api/property", data)
      .then((data) => {
        navigate("propertyList");
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log("Property created:", data);
  };

  return (
    <div>
      <h1>Create Property</h1>

      <form ref={newProductForm} onSubmit={handleCreate}>
        <label>Property Type:</label>
        <input
          type="text"
          placeholder={"propertyType"}
          name={"propertyType"}
          defaultValue="appartment"
        />
        <label>Home Type:</label>
        <input
          type="text"
          placeholder={"homeType"}
          name={"homeType"}
          defaultValue="single family"
        />

        <label>BuiltDate:</label>
        <input
          id="builtDate"
          type="date"
          placeholder={"builtDate"}
          name={"builtDate"}
        />

        <label>BathroomCount:</label>
        <input
          id="bathroomCount"
          type="double"
          placeholder="BathroomCount"
          name="bathroomCount"
          required
        />

        <label>Square Feet Area:</label>
        <input
          id="squareFeetArea"
          type="number"
          placeholder="Square Feet Area"
          name="squareFeetArea"
          required
        />

        <label>Detail Overview:</label>
        <input
          id="detailOverview"
          type="text"
          placeholder="Detail Overview"
          name="detailOverview"
          required
        />

        <label>Unit Area Price:</label>
        <input
          id="unitAreaPrice"
          type="number"
          placeholder="Unit Area Price"
          name="unitAreaPrice"
          required
        />

        <label>NumberOfParking:</label>
        <input
          id="numberOfParking"
          type="number"
          placeholder="NumberOfParking"
          name="numberOfParking"
          required
        />

        <label>NumberOfBedroom:</label>
        <input
          id="numberOfBedroom"
          type="number"
          placeholder="NumberOfBedroom"
          name="numberOfBedroom"
          required
        />

        <label>UserId:</label>
        <input
          id="userId"
          type="number"
          placeholder="UserId"
          name="userId"
          required
        />

        <label>BusinessType:</label>
        <input
          id="businessType"
          type="text"
          placeholder="BusinessType"
          name="businessType"
          required
        />

        <label>PricePerMonth:</label>
        <input
          id="pricePerMonth"
          type="number"
          placeholder="PricePerMonth"
          name="pricePerMonth"
          required
        />

        <label>City:</label>
        <input id="city" type="text" placeholder="City" name="city" required />

        <label>State:</label>
        <input
          id="state"
          type="text"
          placeholder="State"
          name="state"
          required
        />

        <label>Zip Code:</label>
        <input
          id="zipcode"
          type="text"
          placeholder="Zip Code"
          name="zipcode"
          required
        />

        <label>Country:</label>
        <input
          id="country"
          type="text"
          placeholder="Country"
          name="country"
          required
        />

        <label>Street:</label>
        <input
          id="street"
          type="text"
          placeholder="Street"
          name="street"
          required
        />

        <button className="but" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default PropertyCreate;
