import React from "react";
import Container from "../layout-elements/container";
import Project5Image from "./project5Images";
import { graphql, useStaticQuery } from "gatsby";

const Project5Content = () => {
  const data = useStaticQuery(graphql`
    query LeftOverVideoQuery {
      allFile(
        filter: {
          relativeDirectory: { eq: "videos" }
          relativePath: { eq: "videos/LeftOverVideoFramed.mp4" }
        }
      ) {
        edges {
          node {
            id
            publicURL
            uid
            relativePath
          }
        }
      }
    }
  `);
  return (
    <section data-scroll-section>
      <Container>
        <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
          <div className=" md:w-2/5 md:h-screen-80">
            <video
              className="block px-3 md:px-4 py-2 rounded-5xl h-full md:rounded-6xl 2xl:rounded-8xl"
              autoPlay
              muted
              loop
              src={data.allFile.edges[0].node.publicURL}
            />
          </div>
          <div className="md:w-3/5 mt-4 md:mt-0">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Live demo</h3>
            <p className="2xl:pt-2 text-lg lg:text-xl 2xl:text-2xl pb-4 2xl:pb-8 md:w-4/5 ">
              The video shows live demo of the website, you are also welcome to click link above to experince
              the website yourself.
            </p>
            <h3 className="font-semibold text-xl 2xl:text-2xl">Presented features:</h3>
            <ul className=" list-disc list-inside">
              <li>Feed, filtering and search</li>
              <li>Blog and knowledge section</li>
              <li>Create post</li>
              <li>Buy product</li>
              <li>Shopping list </li>
              <li>Profile </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row md:grid md:grid-cols-3 md:gap-12 xl:gap-20 py-6 ">
          <div className="py-6 ">
            <Project5Image type="splashscreen" />
          </div>
          <div className="py-6">
            <Project5Image type="login" />
          </div>
          <div className="py-6">
            <Project5Image type="onboarding" />
          </div>
        </div>
        <div className="w-full">
          <div className=" py-6 md:flex md:justify-center">
            <div>
              <h3 className="font-semibold text-3xl 2xl:text-4xl">Unique design</h3>
              <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
                In terms of design and iconography we decided to lean more towards softer shades of colors
                putting more emphasis on the enviromental aspect of our solution therefore unifying the
                message we want to convey.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row md:items-center gap-6 w-full">
          <div className="flex flex-col md:flex-row gap-6 w-full items-center md:w-2/3">
            <Project5Image type="login" />
            <Project5Image type="signup" />
          </div>
          <div className=" w-full md:w-1/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Login & Sign up functionality</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              Account functionality is one of the basic functionalites of almost any app. With JavaScript, PHP
              and a bit of mySQL we also equiped our app with it.
            </p>
          </div>
        </div>

        <div className=" py-6 flex flex-col md:justify-center w-full gap-6">
          <div className="flex flex-col md:flex-row w-full gap-6">
            <Project5Image type="feed" />
            <Project5Image type="product" />
            <Project5Image type="mobilePay" />
          </div>
          <div>
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Transaction system</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              We have managed to implement payment and transaction feature in our app with only exception
              being absence of the payment provider. User can easily find product, check it, book a time and
              quantity, and make a purchase that if authorised by payment provider will add the product tp the
              transactions Json that we are then storing in our database.
            </p>
          </div>
        </div>
        <div className=" py-6 flex flex-col-reverse md:flex-row md:items-center w-full gap-6">
          <div className=" w-full md:w-1/2">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Dev stack & explaination</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16 md:w-4/5">
              The purpose of the project was to combine our konwledge and implement full stack solution with
              backend using mySQL and PHP and SPA functionality in JS. We wanted to do more and try something
              mew and maybe learn some new technology. We decided to extend our basic dev stack with Sass,
              Tailwind and Gulp since it would prepare us for component based UI frameworks like React.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-6">
            <Project5Image type="devstack" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project5Content;
