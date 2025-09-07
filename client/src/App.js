import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
const App = () => {
  return (
<>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/policy" element={<Policy />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
</>
  );
};

export default App;
