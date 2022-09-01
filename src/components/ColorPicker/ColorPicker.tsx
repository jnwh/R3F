import React from "react";
import * as THREE from "three";

const handleClick = (e: React.MouseEvent) => {
  console.log(e);
  if (window.activeMesh) {
    window.activeMesh.material.color = new THREE.Color(e.target.style.background);
  }
};

const ColorPicker = () => {
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <div style={{ background: "blue", height: 50, width: 50 }} onClick={(e) => handleClick(e)}>
      </div>
      <div style={{ background: "yellow", height: 50, width: 50 }} onClick={(e) => handleClick(e)}>
      </div>
      <div style={{ background: "white", height: 50, width: 50 }} onClick={(e) => handleClick(e)}>
      </div>
    </div>
  )
}

export default ColorPicker;