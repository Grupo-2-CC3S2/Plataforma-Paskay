import React, { Component } from 'react'  
import { useState } from 'react';

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



