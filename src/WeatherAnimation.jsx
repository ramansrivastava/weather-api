import React from "react";
import Lottie from "lottie-react";
import rainAnimation from "./animations/rain.json"; // Ensure this path is correct

const WeatherAnimation = () => {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        zIndex: 1,  // Change this from -1 to 1
      }}>
        <Lottie 
          animationData={rainAnimation} 
          loop={true} 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>
    );
  };
  

export default WeatherAnimation;
