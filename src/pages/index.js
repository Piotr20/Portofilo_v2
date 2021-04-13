import * as React from "react";
import LongTextBlock from "../../components/longText";
import "../styles/styles.scss";
import Header from "../../layout-elements/header";
import Container from "../../layout-elements/container";
import HorizontalShowcase from "../../components/horizontalShowcase";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Container>
        <LongTextBlock />
      </Container>
      <HorizontalShowcase />
    </main>
  );
};

export default IndexPage;
