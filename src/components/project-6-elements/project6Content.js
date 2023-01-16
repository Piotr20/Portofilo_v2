import React from "react";
import Container from "../layout-elements/container";
import Project6Image from "./project6Images";
import { graphql, useStaticQuery } from "gatsby";

const Project6Content = () => {
  const data = useStaticQuery(graphql`
    query BilligAnimationVideoQuery {
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
            src={data.allFile.edges[1].node.publicURL}
          />
        </div>
        <div className="py-6">
          <Project6Image type="styletile" />
        </div>
        <div>
          <h3 className="font-semibold text-3xl 2xl:text-4xl">Visual identity:</h3>
          <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
            What we wanted to really put a great emphasis on with the design is slightly lean towards more
            professionalism instead of focusing just on being cheap, we also wanted to establish some unique
            identity for Billig animation to set the apart from the competitors.
          </p>
        </div>
        <div className="py-6 flex flex-col">
          <div className="w-full">
            <Project6Image type="contact" />
          </div>
          <div className="w-full">
            <Project6Image type="footer" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full ">
            <Project6Image type="burger" />
          </div>
          <div className="py-6 flex flex-col items-center">
            <div className="md:w-2/3">
              <h3 className="font-semibold text-3xl 2xl:text-4xl">Shapes & colors:</h3>
              <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
                We decided to go with 3 basic shapes (square, circle, and triangle) and combine them with 3
                basic colours (red, yellow, and blue). <br /> <br /> That combination accrues on our website
                in different situations. Shapes and colours are forming nice non-aggressive theme for billig
                animation and can be use wherever on the graphics, ads, and so on
              </p>
            </div>
          </div>
        </div>
        <div className="flex py-6 flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
          <div>
            <Project6Image type="logos-1" />
          </div>
          <div>
            <Project6Image type="logos-2" />
          </div>
          <div className="self-end md:w-2/3 justify-self-center">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Logo:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              One of the biggest decisions we made was to redesign the logo. The old logo was difficult to
              read with all the yellow and did not fulfil the biggest objective for the logo design it was not
              memorable at all.
              <br />
              <br /> The logo we made is modern approach to Billig animation’s identity, minimalistic logo is
              easier to read and memorize therefor bring more recognition to the brand. Moreover, it works
              perfectly with the shapes. <br /> <br /> We had many iterations of more or less clean designs
              but the one we chose seems to be working the best.
            </p>
          </div>
          <div className="md:self-center ">
            <Project6Image type="logos-3" />
          </div>
        </div>
        <div className="flex py-6 flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8">
          <div className="col-span-2">
            <Project6Image type="interactive-video" />
          </div>
          <div className="md:w-2/3 pt-6">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Interactive video:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              From our extensive research we knew that some of the clients are just straight up confused about
              how the process and different animation movies look like that is when interactive styletile
              video comes in handy.
              <br />
              <br /> The idea is that user can go through one story line and now desired change the style or
              some of the features that are usually a part of the offer prepared for each client at Billig
              animation.
            </p>
          </div>
          <div className="md:w-2/3  pt-6">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Animations:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              To achieve more professional atmosphere and still preserve the playfulness of the animation
              industry we decided to include some animation. It is important to not overdo the animation
              because of the noise and distraction form the topic that it might introduce, and we did not want
              that.
              <br />
              <br /> We decided to go with some subtle like hover or scroll based animations. To preserve
              performance, we used GSAP since it ensures that the animations are going to look the same and
              are going to be as fast as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 justify-center items-center">
          <div className="w-full">
            <div className="w-full pb-6">
              <Project6Image type="seo-1" />
            </div>
            <div className="w-full pt-6">
              <Project6Image type="seo-2" />
            </div>
          </div>
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">Gatsby & SEO:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              The website itself is built on Gatsby and uses WordPress as a CMS for the convenience of the
              administrators of the website. We also used Tailwind and Sass for styling the content. The
              website is deployed using Vercel.
              <br /> All of it makes the website static and as a consequence very performant, we also took
              care of other aspects of the SEO so final score in the Lighthouse is almost 100 .
            </p>
          </div>
        </div>
        <div className="py-6 md:grid grid-cols-2 md:gap-x-8 justify-center items-center">
          <div className="pt-6 md:w-2/3">
            <h3 className="font-semibold text-3xl 2xl:text-4xl">WordPress as CMS:</h3>
            <p className="pt-4 2xl:pt-8 text-lg lg:text-xl 2xl:text-2xl pb-8 2xl:pb-16">
              Our client’s current website was fully built on WordPress so from every CMS we proposed they
              decided to stick with it. Using the plugins from the image we managed to turn WordPress into
              nice CMS.
              <br />
              <br />
              The way data was structured works basically like that: Firstly some of the data for desired
              section I put into a post with certain category then it is transformed by the plugins and sent
              to Frontend in Gatsby where we fetch the data with Graphql and from here it works exactly like
              any other CMS.
              <br />
              <br /> Although it is not my personal preferred way of handling CMS it is definitely possible
              and easy to manage by the owner of the website and with a use of Advance Custom Fields it works
              even better.
            </p>
          </div>{" "}
          <div className="">
            <Project6Image type="wp-plugins" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project6Content;
