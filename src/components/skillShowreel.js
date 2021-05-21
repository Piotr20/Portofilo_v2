import React from "react";

const SkillsShowreel = () => {
  return (
    <section
      data-scroll-section
      className="pb-16 md:pb-16 container  w-full px-6 xl:px-20 lg:max-w-3xl xl:max-w-5xl flex flex-col md:flex-row md:justify-between"
    >
      <div className="skills-container-1">
        <h2 className="text-4xl skills-item-1 2xl:text-5xl m font-bold">
          Development
        </h2>
        <ul className="text-xl 2xl:text-2xl mt-2">
          <li className="skills-item-1">- Frontend development</li>
          <li className="skills-item-1">- Content menagement systems</li>
          <li className="skills-item-1">- 2D & 3D web animations</li>
          <li className="skills-item-1">- Databases</li>
          <li className="skills-item-1">- SEO</li>
        </ul>
      </div>
      <div className="mt-6 md:mt-0 skillst-container-2">
        <h2 className="text-4xl 2xl:text-5xl contact-item-2 md: font-bold">
          Digital design
        </h2>
        <ul className="text-xl 2xl:text-2xl mt-2">
          <li className="skills-item-1">- UX & UI design</li>
          <li className="skills-item-1">- Motion graphics</li>
          <li className="skills-item-1">- 2D animations</li>
          <li className="skills-item-1">- Graphic design</li>
          <li className="skills-item-1">- Interaction design</li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsShowreel;
