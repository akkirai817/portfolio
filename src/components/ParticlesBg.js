import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import particlesani from "../config/particlesani";
import { loadFull } from "tsparticles";

export const ParticlesBg = () => {

  async function loadPraticles(main) {
    await loadFull(main);
  }
  
  return (
    <>
      <Particles
        id="tsparticles"
        init={loadPraticles}
        options={particlesani}
      ></Particles>
    </>
  );
};
