import React, { useEffect } from "react";
import LongTextBlock from "../../components/longText";
import "../styles/styles.scss";
import Header from "../../layout-elements/header";
import Container from "../../layout-elements/container";
import HorizontalShowcase from "../../components/horizontalShowcase";
import HorizontalShowcaseMobile from "../../components/horizontalShowcaseMobile";

import LocomotiveScroll from "locomotive-scroll";
import "../styles/locomotiveScroll.css";

const IndexPage = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    console.log(scroll);
    // scroll.on("call", () => {
    //   console.log("hi");
    //   const target = document.querySelector("#js-target");

    //   scroll.scrollTo(target);
    // });
  }, []);
  return (
    <main data-scroll-container>
      <Header />
      <Container>
        <LongTextBlock />
      </Container>
      <HorizontalShowcase />
      <HorizontalShowcaseMobile />
      <div className=" w-full h-screen bg-green-400"></div>
    </main>
  );
};

export default IndexPage;
