import React from "react";

function App() {
  const office = {
    Name: "DBS",
    Rent: 70000,
    Address: "Chennai",
    Image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=60"
  };

  const rentStyle = {
    color: office.Rent <= 60000 ? "red" : "green"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space , at Affordable Range</h1>
      <img
        src={office.Image}
        width="300px"
        height="200px"
        alt="Office Space"
        style={{ display: "block", marginBottom: "10px" }}
      />
      <h1>Name: {office.Name}</h1>
      <h3 style={rentStyle}>Rent: Rs. {office.Rent}</h3>
      <h3>Address: {office.Address}</h3>
    </div>
  );
}

export default App;
