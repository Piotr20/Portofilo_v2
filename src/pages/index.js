import * as React from "react";
import LongTextBlock from "../../components/longText";
import "../styles/styles.scss";
import Header from "../../layout-elements/header";
import Container from "../../layout-elements/container";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Container>
        <LongTextBlock />
      </Container>
    </main>
  );
};

export default IndexPage;
