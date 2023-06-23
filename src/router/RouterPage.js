import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../component/auth/LoginPage";
import SignupPage from "../component/auth/SignupPage";
import Property from "../component/property/Property";
import PropertyOffers from "../component/property/PropertyOffers";
import RequireAuth from "../component/RequireAuth";
import PropertyList from "../component/property/PropertyList";
import PropertyCreate from "../component/property/PropertyCreate";
import Offers from "../component/property/Offers";
import PropertyUpdate from "../component/property/PropertyUpdate";
import PropertyDetail from "../component/property/PropertyDetail";
import ParentComponent from "../component/property/ParentComponent";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<RequireAuth />}>
        <Route path="/propertyList" element={<PropertyList />}>
          <Route path=":id" element={<PropertyDetail />} />
        </Route>
        <Route path="/propertyCreate" element={<PropertyCreate />} />
        <Route path="/propertyOffers" element={<PropertyOffers />} />
        <Route path="/propertyUpdate/:id" element={<PropertyUpdate />} />
      </Route>
    </Routes>
  );
};

export default RouterPage;
