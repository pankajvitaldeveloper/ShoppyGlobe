import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <Header />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
    />
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>
    <Footer />
  </Router>
);

export default App;
