import React, { useEffect, useState } from "react";

export default function App() {

  const [show, setShow] = useState(false); // "show" state'i tanımlandı ve başlangıç değeri false olarak ayarlandı.


  return (
    <div className="App" >
      <button onClick={() => setShow(!show)}>  Toggle Butonum </button>
      {show && <MouseMove />}
    </div>
  );
}



function MouseMove() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log("Moveeees");
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove); // add event listener
  }, []);

  return (
    <div className="App">
      <h1>
        MOUSE YERİ :
      </h1>
      <p>  X YERİ :  {mousePosition.x}  </p>
      <p>  Y YERİ :  {mousePosition.y} </p>
    </div>


  );
}


















