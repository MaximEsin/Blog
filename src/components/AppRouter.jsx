import React from "react";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import About from "../pages/About";
import { Route, Routes, Navigate } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate replace to="/error" />} />
    </Routes>
  );
};

export default AppRouter;
