import React from "react";
import Container from "../layout-elements/container";
import Project7Image from "./project7Images";
import { graphql, useStaticQuery } from "gatsby";

const Project7Content = () => {
  const data = useStaticQuery(graphql`
    query ArlaVideoQuery {
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
            className="w-full border-4 border-black lg:h-auto"
            autoPlay
            muted
            loop
            src={data.allFile.edges[0].node.publicURL}
          />
        </div>
        <div className="flex  flex-col md:flex-row md:grid md:grid-cols-3 md:gap-12 xl:gap-20 py-6 ">
          <div className="py-6">
            <Project7Image type="dashboard-mobile-1" />
          </div>
          <div className="py-6">
            <Project7Image type="dashboard-mobile-2" />
          </div>
          <div className="py-6">
            <Project7Image type="dashboard-mobile-3" />
          </div>
        </div>
        <div className="w-full">
          <div className=" py-6 md:flex md:justify-center">
            <div>
              <h6 className="font-semibold text-6xl 2xl:text-4xl">Available everywhere from every device:</h6>
              <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
                During the creative process we tried to make our solution as good as it is possible, taking
                the final user into focus all the time. We thought it would be a great idea to make the
                process of putting data availiable for farmers when they are on them. tractors, on the field
                or wherever they wish.
                <br /> That is why we created designs for the mobile as well as for the bigger screens.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6">
          <Project7Image type="dashboard" />
        </div>
        <div className=" py-6 md:flex md:justify-center">
          <div>
            <h6 className="font-semibold text-6xl 2xl:text-4xl">Dashboard:</h6>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              Easiest way to present complex data is by the dashboard, where users can easily see the data
              that interests them and rearange the dashboard how they feel like, moving the segments around.
              It gives. the user all the freedom she/he needs adjusting the whole solution. to their
              preferences. Moreover, it is very important to make sure, that the data is shown clearly and
              does not introduce any uncertainty.
            </p>
          </div>
        </div>
        <div className="md:flex md:justify-between w-full">
          <div className=" py-6 md:w-3/7">
            <div>
              <h6 className="font-semibold text-6xl 2xl:text-4xl">Clear onboarding:</h6>
              <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
                We understood that not everybody is tech savvy to understand all. of the data at once, that is
                why it is essential to onboard the users. We tried to introduce only the fundamental aspects
                of us. solution to them. We did not want to stretch this step too long, so the hypothetical
                user could enjoy the solution as fast as possible without any unnecessary obstacles.
              </p>
            </div>
          </div>
          <div className="py-6 md:w-5/7">
            <Project7Image type="onboarding" />
          </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row md:justify-between flex-wrap">
          <div className="py-6 md:w-1/2 md:pr-6 xl:pr-10">
            <Project7Image type="survey-1" />
          </div>
          <div className="py-6 md:w-1/2 md:pl-6 xl:pl-10">
            <Project7Image type="survey-2" />
          </div>
          <div>
            <h6 className="font-semibold text-6xl 2xl:text-4xl">Smart survey:</h6>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              It is a human thing to get use to something and, therefore do some stuff repeatly, but when it
              comes to boring stuff we want it to be done ASAP. Farmers are obligated to do the survey every
              quarter which means lots of data to put every 6 months.
              <br /> The solution that we came up with is to incorporate pre-filled input fields with the data
              that does not change so often so if nothing. changed in that category you can just aprove it and
              go to the next questions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project7Content;
