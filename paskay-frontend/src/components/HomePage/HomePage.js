import React, { Component } from 'react'  
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <div className = "container homepage page">
    </div>
  );
}

export default HomePage



