import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import BookingForm from "./Components/BookingForm";

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<BookingForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;