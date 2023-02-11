import React from "react";

import { SiSass } from "@react-icons/all-files/si/SiSass";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiWebgl } from "@react-icons/all-files/si/SiWebgl";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiPostcss } from "@react-icons/all-files/si/SiPostcss";
import { SiAdobecreativecloud } from "@react-icons/all-files/si/SiAdobecreativecloud";
import { SiGreensock } from "@react-icons/all-files/si/SiGreensock";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaVuejs } from "@react-icons/all-files/fa/FaVuejs";
import { FaGulp } from "@react-icons/all-files/fa/FaGulp";
import { FaInvision } from "@react-icons/all-files/fa/FaInvision";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { GrGatsbyjs } from "@react-icons/all-files/gr/GrGatsbyjs";
import { GrWordpress } from "@react-icons/all-files/gr/GrWordpress";
import { SiNpm } from "@react-icons/all-files/si/SiNpm";
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";
import { SiDocker } from "@react-icons/all-files/si/SiDocker";
import { SiPhp } from "@react-icons/all-files/si/SiPhp";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";
import { SiIonic } from "@react-icons/all-files/si/SiIonic";
import { SiSymfony } from "@react-icons/all-files/si/SiSymfony";
import { SiNotion } from "@react-icons/all-files/si/SiNotion";
import { SiShopware } from "@react-icons/all-files/si/SiShopware";

const MyToolkit = () => {
  return (
    <section
      data-scroll-section
      className="toolkit-section bg-black w-full 5 flex flex-col items-center mt-20"
    >
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center py-4 lg:py-8 text-white">
        My toolkit
      </h2>
      <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-3 justify-items-center md:flex md:flex-wrap md:justify-center items-center  pb-12 md:pb-24">
        <div className="self-center">
          <FaReact className="toolkit-item text-white h-16 w-16 2xl:w-24 2xl:h-24" />
        </div>
        <div className=" self-center ">
          <FaVuejs className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <div className="toolkit-item h-16 w-16 2xl:w-20 2xl:h-20">
            <svg
              width="80"
              height="80"
              viewBox="0 0 256 256"
              style={{
                width: "100%",
                height: "100%",
              }}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="self-center">
          <div className="toolkit-item h-16 w-16 2xl:w-20 2xl:h-20">
            <svg
              style={{
                width: "100%",
                height: "100%",
              }}
              width="80"
              height="80"
              viewBox="0 0 256 297"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M141.675 0C218.047 0 256 36.35 256 94.414C256 137.844 229.293 166.167 193.215 170.888C223.67 177.025 241.474 194.492 244.755 228.953L245.229 235.29L245.644 241.214L246.002 246.756L246.251 250.935L246.518 255.865L246.656 258.679L246.854 263.149L247.013 267.371L247.092 269.798L247.199 273.686L247.291 278.132L247.324 280.28L247.384 286.506L247.404 293.002V296.887H168.646L168.65 295.267L168.678 292.12L168.725 289.055L168.861 281.631L168.896 279.142L168.923 275.24L168.919 272.744L168.896 270.127L168.864 268.073L168.8 265.197L168.706 262.147L168.581 258.905L168.421 255.45L168.325 253.637L168.165 250.804L167.979 247.828L167.692 243.624L167.445 240.282C167.376 239.274 167.293 238.268 167.198 237.262L166.996 235.328C164.396 212.501 155.341 203.171 139.833 200.059L138.526 199.814C137.628 199.658 136.726 199.522 135.822 199.406L134.425 199.242C134.189 199.217 133.953 199.192 133.715 199.169L132.273 199.042L130.802 198.939L129.3 198.858L127.786 198.8L126.242 198.761L124.668 198.743L0 198.74V136.9H127.62C129.706 136.9 131.728 136.86 133.686 136.78L135.622 136.685L137.515 136.563L139.365 136.413C139.67 136.385 139.973 136.357 140.274 136.327L142.059 136.134C143.209 135.999 144.357 135.84 145.501 135.659L147.158 135.379C167.867 131.624 178.221 120.63 178.221 99.179C178.221 75.104 161.354 60.513 127.619 60.513H0V0H141.675ZM83.276 250.785C93.609 250.785 97.933 256.523 99.473 262.015L99.676 262.805L99.843 263.587L99.952 264.204L99.998 264.51L100.076 265.113L100.134 265.703L100.157 265.993L100.188 266.562L100.198 266.84L100.206 267.38V296.887H0V250.785H83.276Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
        <div className="self-center">
          <div className="toolkit-item h-16 w-16 2xl:w-20 2xl:h-20">
            <svg
              style={{
                width: "100%",
                height: "100%",
              }}
              width="80"
              height="80"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_52_18)">
                <path
                  d="M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z"
                  fill="#ffffff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M117.919 71.799C112.722 62.863 99.729 62.863 94.533 71.799L37.893 169.185C32.697 178.121 39.193 189.29 49.587 189.29H93.802C89.361 185.409 87.716 178.694 91.077 172.933L133.973 99.403L117.919 71.798V71.799Z"
                  fill="#171717"
                />
                <path
                  d="M153.807 93.16C158.108 85.85 168.86 85.85 173.161 93.16L220.034 172.84C224.335 180.151 218.96 189.29 210.358 189.29H116.61C108.008 189.29 102.632 180.151 106.933 172.84L153.807 93.16Z"
                  fill="#171717"
                />
              </g>
              <defs>
                <clipPath id="clip0_52_18">
                  <rect width="256" height="256" fill="#171717" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="self-center">
          <GrGatsbyjs className=" toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className=" self-center">
          <SiIonic className=" toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>

        <div className="self-center">
          <SiTypescript className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiGraphql className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>

        <div className="self-center">
          <SiSass className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <div className="toolkit-item  h-16 w-16 2xl:w-20 2xl:h-20">
            <svg
              style={{
                width: "100%",
                height: "100%",
              }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="m16.214 6.762-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 0 0 .282.023 3 3 0 0 0 .632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024v-1.928h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122l1.736-1.111v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185l-1.958 1.196v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217s.127-.096.212-.212c.127-.201.02-.286-1.768-1.418-1.703-1.069-1.883-1.217-1.713-1.333.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 0 1 .144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 0 0 -.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 0 0 .138.134.644.644 0 0 0 .24.045 2.18 2.18 0 0 0 .58-.085 3.466 3.466 0 0 0 .291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 0 1 -.114.024c-.166.033-.373.06-.558.045a.708.708 0 0 1 -.252-.063.337.337 0 0 1 -.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217v1.973l4.82-3.797a.41.41 0 0 1 .016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 0 1 -.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 0 1 -.275-.054.344.344 0 0 1 -.184-.18c-.058-.139-.035-.334.092-.611l-4.252 3.349v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 0 1 -.282.093 3.058 3.058 0 0 1 -.65.115 1.035 1.035 0 0 1 -.31-.027.364.364 0 0 1 -.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 0 1 .095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"
              />
            </svg>
          </div>
        </div>

        <div className=" self-center">
          <SiTailwindcss className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <div className="toolkit-item text-white h-16 w-16 2xl:w-20 2xl:h-20">
            <svg
              style={{
                width: "100%",
                height: "100%",
              }}
              height="80"
              viewBox="3.7 3.7 43.6 43.6"
              width="2500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#ffffff" />
              <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#ffffff" />
              <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#ffffff" />
            </svg>
          </div>
        </div>
        <div className=" self-center">
          <SiShopware className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className=" self-center">
          <SiPhp className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className=" self-center">
          <SiSymfony className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className=" self-center">
          <SiMysql className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className=" self-center">
          <SiDocker className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiGreensock className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <GrWordpress className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className=" self-center">
          <SiFirebase className=" toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <FaBootstrap className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiAdobecreativecloud className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <FiFigma className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
        <div className="self-center">
          <SiNotion className="toolkit-item text-white w-16 h-16 2xl:w-20 2xl:h-20" />
        </div>
      </div>
    </section>
  );
};
export default MyToolkit;
