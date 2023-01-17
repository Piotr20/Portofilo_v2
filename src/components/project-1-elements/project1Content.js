import React from "react";
import Container from "../layout-elements/container";
import Project1Image from "./project1Images";
import { graphql, useStaticQuery } from "gatsby";

const Project1Content = () => {
  const data = useStaticQuery(graphql`
    query ImpactConnectVideoQuery {
      allFile(
        filter: { relativeDirectory: { eq: "videos" }, base: { eq: "impact-connect-page-overview.mp4" } }
      ) {
        edges {
          node {
            id
            publicURL
            uid
            relativePath
            base
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
            className="w-full border-4 border-black lg:h-auto"
            autoPlay
            muted
            loop
            src={data.allFile.edges[0].node.publicURL}
          />
        </div>

        <div className="pt-6">
          <h3 className="font-semibold text-3xl 2xl:text-4xl">The problem:</h3>
          <p className="text-lg lg:text-xl 2xl:text-2xl pb-6">
            As it turns out in recent years IMPACT as a organisation grew expenentialy acqyiring new assets
            and locations scatered throughout Europe. This brought as much opportunities as it did challenges,
            one of them being colaboration and introduction of new poeple to the organisation. Only people
            that have been at there for long periods of time knew who to reach out in case of help and that we
            attempted to adderess with this solution.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-x-4 md:pb-6">
          <div className="w-full md:w-1/2">
            <Project1Image type="architecture" />
          </div>
          <div className="py-6 md:w-1/3 flex flex-col items-start">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Architecture:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl md:pb-6 ">
              The implementation needed to take into consideration all clients needs and allow for smooth
              integration. Our solution included all aspects of the full scale product from backend/database
              to frontend. We based our frontend on Next.js meta-framework with Typescript. For the backend
              and security layer we used Azure AD with Next Auth. Our data have been stored in MongoDB and we
              accessed it with Mongoose DRM. From smaller technologies we can mention Zustand state menagment
              and Styled Components.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-x-8 justify-center items-center md:py-6">
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Our goal:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              We wanted to create a solution that would become a behaviour for employees at IMPACT to search
              for people within organisation that can help them and therefore not solve problems that have
              already been solved.
            </p>
          </div>
          <div className="w-full">
            <Project1Image type="home" />
          </div>
        </div>
        <div className="py-6 md:grid grid-cols-2 md:gap-x-8 justify-center items-center">
          <div className="">
            <Project1Image type="searchPage" />
          </div>
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Intuitive search:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              We wanted to much google's searching experience so that the users can get as much precise
              results as possible. For that reason our search indexes also indirect data in the search hits
              not just name but e.g. also the skills and projects within that hit finally giving us multiple
              suggestions for one query.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-x-8 justify-center items-center py-6">
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Projects & People:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 ">
              With houndreds of projects and people in the database it is crucial to provide sufficient
              detailed information about each and every of it. We really wanted to make it feel like an app so
              we decided to make it as a slider which turned out to be a great idea in the opinions of our
              testers.
            </p>
          </div>
          <div className="w-full">
            <Project1Image type="project" />
          </div>
        </div>
        <div className="py-6">
          <Project1Image type="signUp" />
          <div className="pt-6">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Authentication and registration:</h3>
            <p className="text-lg lg:text-xl 2xl:text-2xl pb-6 ">
              It is important to provide a personalize experince for every user as much as it is to be able to
              protect their vulnorable data from any external ingerention. For the authentication process and
              security we used Azure AD B2C which is managed by Microsoft ensuring a great security of the
              data but since we were not able to get all the specific information from Azure we also included
              our own sign up which substitutes insufficient data from the Azure and all of that is then
              safely stored in our database.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project1Content;
