import React from "react";

const Container = ({ children }) => {
  return (
    <section data-scroll-section data-scroll className="container">
      {children}
    </section>
  );
};
export default Container;
