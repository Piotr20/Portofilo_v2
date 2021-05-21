import React from "react";

const ContactInfo = () => {
  return (
    <section
      data-scroll-section
      className="pb-16 md:py-16 container  w-full px-6 xl:px-20 lg:max-w-3xl xl:max-w-5xl flex flex-col md:flex-row md:justify-between"
    >
      <div className="contact-container-1">
        <h2 className="text-4xl contact-item-1 2xl:text-5xl m font-semibold">
          Get in touch
        </h2>
        <h3 className="text-2xl contact-item-1  2xl:text-3xl mt-4  md:mt-2">
          Email address:
        </h3>
        <ul className="text-lg 2xl:text-xl">
          <a href="mailto:piotrpospiech00@gamil.com">
            <li className="contact-item-1">piotrpospiech00@gamil.com</li>
          </a>
        </ul>
        <h3 className="text-2xl contact-item-1 mt-4  md:mt-2 2xl:text-3xl">
          Phone number:
        </h3>
        <ul className="text-lg 2xl:text-xl">
          <li className="contact-item-1">
            <a href="tel:+45 91 95 31 33">+45 91 95 31 33 </a>
          </li>

          <li className="contact-item-1">
            <a href="tel:+48 782 206 065">+48 782 206 065 </a>
          </li>
        </ul>
      </div>
      <div className="mt-6 md:mt-0 contact-container-2">
        <h2 className="text-4xl 2xl:text-5xl contact-item-2 md: font-semibold">
          Follow me
        </h2>
        <ul className="text-xl mt-4 md:mt-2 md:text-2xl ">
          <li className="contact-item-2">
            <a
              className="pb-1 underline-custom"
              href="https://www.linkedin.com/in/piotr-pospiech/"
            >
              Linkedin
            </a>
          </li>

          <li className="contact-item-2 pt-1">
            <a
              className="pb-1 underline-custom"
              href="https://www.instagram.com/pjooter.p/"
            >
              Instagram
            </a>
          </li>

          <li className="contact-item-2 pt-1">
            <a
              className="pb-1 underline-custom"
              href="https://www.facebook.com/piotr.pospiech.52/"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactInfo;
