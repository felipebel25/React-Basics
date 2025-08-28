import { useState } from "react";

import ImageSlider from "./ImageSlider";

const MemoSlider = () => {
  const [counter, setCounter] = useState(0);
  const slides = [
    { url: "/image-1.jpeg", title: "beach" },
    { url: "/image-2.jpeg", title: "boat" },
    { url: "/image-3.jpeg", title: "forest" },
    { url: "/image-4.jpeg", title: "city" },
    { url: "/image-5.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>
  );
};

export default MemoSlider;
