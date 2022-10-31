import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
function InitThreeScene() {
  const threeRef = useRef<HTMLDivElement>(null);
  function init() {
    console.log(threeRef.current);
    const width = 500;
    const height = 500;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGL1Renderer();
    threeRef.current.appendChild(renderer.domElement);
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div ref={threeRef}>案例一</div>;
    </>
  );
}

export default InitThreeScene;
