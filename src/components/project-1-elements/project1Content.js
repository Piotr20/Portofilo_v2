import React from "react";
import Container from "../layout-elements/container";
import Project1Image from "./project1Images";
import { graphql, useStaticQuery } from "gatsby";

const Project1Content = () => {
  const data = useStaticQuery(graphql`
    query SigunaVideoQuery {
      allFile(filter: { relativeDirectory: { eq: "videos" } }) {
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
        <div className="w-full flex h-auto">
          <video
            className="w-full lg:h-screen-80"
            autoPlay
            muted
            loop
            src={data.allFile.edges[2].node.publicURL}
          />
        </div>

        <div>
          <h3 className="font-semibold text-3xl 2xl:text-4xl">
            Visual identity:
          </h3>
          <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
            Besides website that is performant we wanted to create a website
            that represents the company's identity. The design we decided to go
            with in my opinion works perfectly bringing the attention rather
            then confusing customers.
          </p>
        </div>
        <div className="py-6 flex flex-col">
          <div className="w-full">
            <Project1Image type="desktop-1" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full">
            <Project1Image type="mobile-1" />
          </div>
          <div className="py-6 flex flex-col items-center">
            <div className="md:w-2/3">
              <h3 className="font-semibold text-3xl 2xl:text-4xl">
                RWD is the key:
              </h3>
              <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
                We made sure that the coded solution is working perfectly for
                all users does not matter if you use desktop or mobile you can
                be comfortable with using the solution.
              </p>
            </div>
          </div>
        </div>
        <div className="flex py-6 flex-col md:grid md:grid-cols-3 md:grid-rows-1 md:gap-8">
          <div className="md:col-span-2 md:self-end">
            <Project1Image type="desktop-2" />
          </div>
          <div className="md:col-span-1 ">
            <Project1Image type="mobile-2" />
          </div>
        </div>
        <div className="flex py-6 flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:items-center">
          <div className="col-span-2">
            <Project1Image type="gsap-animation-2" />
          </div>
          <div className="">
            <Project1Image type="gsap-animation-1" />
          </div>

          <div className="md:w-2/3  pt-6">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">
              GSAP animations:
            </h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              Animations and being able to interact with a website is a
              fantastic tool in creating engagement for a user ultimetly making
              them more interested in the product. We decided to use GSAP thanks
              to it's ease of use and being extremly ligtweight library. We used
              it also to progressive on scroll animations like the text
              extending or filter rotating.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 justify-center items-center">
          <div className="w-full">
            <div className="w-full pb-6">
              <Project1Image type="lighthouse-report" />
            </div>
          </div>
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">
              Gatsby & performance:
            </h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              Whole website is built using gatsby which is React based REST API.
              Thanks to that we made sure that the website is as performant as
              it was possible scoring 96 in Lighthouse
            </p>
          </div>
        </div>
        <div className="py-6 md:grid grid-cols-2 md:gap-x-8 justify-center items-center">
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Sanity CMS:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              For CMS we decided to ho with Sanity since it was a clients choice
              and in general is a good CMS. We combimed it with Netlify for fast
              deployment builds.
            </p>
          </div>{" "}
          <div className="">
            <Project1Image type="sanity-logo" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project1Content;
