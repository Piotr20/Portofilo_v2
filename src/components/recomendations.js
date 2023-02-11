import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
gsap.registerPlugin(ScrollTrigger);

const Recomendations = () => {
  const sectionRef = useRef(null);

  useEffect(() => {}, []);
  return (
    <section data-scroll-section className="text-trigger">
      <h1 className="self-start text-4xl md:text-5xl xl:text-6xl xl:leading-snug font-bold mb-4">
        My references
      </h1>
      <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} renderIndicator={false}>
        <div className="h-full w-full relative cursor-pointer">
          <h3 className="text-lg lg:text-2xl italic text-left">
            <span className="">"</span>
            Piotr has worked as an intern for 10 weeks at Impact, continuing to work on his bachelor thesis
            with us as partners afterwards. Piotr has shown great commitment and interest throughout, acting
            in a professional and ambitious manner. Working on internal projects, he has demonstrated good
            understanding of technologies like React, Next.js, TypeScript while here, and added to this
            knowledge by being eager to learn and ask questions. In addition, Piotr was helpful to our other
            interns, ready to assist if needed. Overall, we were very pleased with having Piotr with us and
            are happy to recommend him, both as a developer and as a colleague, since he is just a very nice
            guy.
            <span>"</span>
          </h3>
          <h4 className="text-lg lg:text-2xl mt-4 lg:mt-6 font-bold text-left">
            Rasmus Hjorth
            <br /> Lead Frontend Engineer, IMPACT A/S
          </h4>
        </div>
        <div className="h-full w-full relative cursor-pointer">
          <h3 className="text-lg lg:text-2xl italic text-left">
            <span className="">"</span>I have had the pleasure of being Piotr’s manager at Geni - the tech arm
            of Firtal which is a subsidiary of Matas A/S. Piotr worked for us as Student Developer whilst
            completing his education. He joined in September, 2021, until February, 2023. Piotr did splendid
            work at Geni. He started out evaluating Bubble.io and a built-from-scratch app as alternatives to
            Retool.com. Next task was building the initial prototype of an RMA system to handle refunds and
            resends of orders hosted at Vercel.com. This system is now in production as a Retool app, but it
            started with Piotr’s prototype. The crown jewel of Piotr’s contributions came as he joined our
            Shopware project. We launched Made4men.dk in 2022. Among other things, Piotr completed the “Tjek
            min ordre”-page and styled our Clerk-based product feeds. He was instrumental in providing
            technical feedback to the external bureau who - at the time - developed our frontend/storefront.
            Later Piotr took over as our sole frontend developer for a period of two months while we looked
            for a fulltime in-house frontender. A gap he bridged well.
            <span>"</span>
          </h3>
          <h4 className="text-lg lg:text-2xl mt-4 lg:mt-6 font-bold text-left">
            Dan Kristensen Hørlyck
            <br /> Product Manager, Commerce and Storefronts, Firtal Web A/S
          </h4>
        </div>
      </Carousel>
    </section>
  );
};
export default Recomendations;
