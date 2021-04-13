import React, { useEffect } from "react";
import { ReactSmartScroller } from "react-smart-scroller";

const HorizontalShowcase = () => {
  useEffect(() => {
    document.querySelector(".iDvKRT").style.display = "none";
    const sliderContainer = document.querySelectorAll(".sc-fzpans");
    console.log(sliderContainer);
    for (let slider of sliderContainer) {
      slider.style.flexBasis = "40vw";
      slider.style.marginLeft = "37.5vw";
    }
  });
  return (
    <section className="w-full h-screen bg-black  flex items-center">
      <div className="overflow-hidden cursor-pointer flex justify-between">
        <ReactSmartScroller
          pagination
          paginationConfig={{
            draggable: true,
            minOffsetToChangeSlide: window.innerWidth / 3,
            transitionTime: 1,
          }}
        >
          <div className="box bg-red-600"></div>
          <div className="box bg-red-600 "></div>
          <div className="box bg-red-600 "></div>
          <div className="box bg-red-600 "></div>
          <div className="box bg-red-600 "></div>
          <div className="box bg-red-600 "></div>
        </ReactSmartScroller>
      </div>
    </section>
  );
};
export default HorizontalShowcase;
