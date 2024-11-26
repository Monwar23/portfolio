"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mine = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 mt-10">
      <div>
        <h1 className="text-white text-3xl text-center">
          <span className="font-bold">Monwar Hossain</span>
        </h1>

        <div className="mb-4">
          <h1 className="text-blue-500 text-center py-1 rounded-lg px-1">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "React Developer",
                1000,
                "MERN Developer",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "18px", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="text-center text-blue-500 mt-4">
          <ul className="flex justify-center gap-4">
            <li>
              <Link
                href="https://www.facebook.com/monwarhossain.hossain.5"
                title="Facebook"
                target="_blank"
              >
                <FaFacebookF className="text-lg" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/monwar-hossain23/"
                title="LinkedIn"
                target="_blank"
              >
                <FaLinkedinIn className="text-lg" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Monwar23"
                title="GitHub"
                target="_blank"
              >
                <FiGithub className="text-lg" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="#contact">
            <button className="btn btn-outline text-white mt-7 border-2 hover:text-blue-500 border-blue-500 ">
              Contact Me
            </button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/15IbHeXAa18wGsPtMFlf9yV3rlyFJw9fe/view?usp=sharing"
            target="_blank"
          >
            <button className="btn btn-outline text-white mt-7 border-2 hover:text-blue-500 border-blue-500 ">
              View Resume
            </button>
          </Link>
        </div>
      </div>
      <div className="w-80 h-96">
        <Slider {...sliderSettings}>
          <div>
            <Image
              src="/monwar.jpg"
              alt="Profile Picture 1"
              width={500}
              height={500}
              className="rounded-full w-80 h-96 border-4 border-blue-500"
            />
          </div>
          <div>
            <Image
              src="/1.jpg"
              alt="Profile Picture 2"
              width={500}
              height={500}
              className="rounded-full w-80 h-96 border-4 border-blue-500"
            />
          </div>
          <div>
            <Image
              src="/2.jpg"
              alt="Profile Picture 3"
              width={500}
              height={500}
              className="rounded-full w-80 h-96 border-4 border-blue-500"
            />
          </div>
          <div>
            <Image
              src="/3.jpg"
              alt="Profile Picture 3"
              width={500}
              height={500}
              className="rounded-full w-80 h-96 border-4 border-blue-500"
            />
          </div>
          <div>
            <Image
              src="/4.jpg"
              alt="Profile Picture 3"
              width={500}
              height={500}
              className="rounded-full w-80 h-96 border-4 border-blue-500"
            />
          </div>
          <div>
            <Image
              src="/5.jpg"
              alt="Profile Picture 3"
              width={500}
              height={500}
              className="rounded-full w-80 h-96 border-4 border-blue-500"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Mine;
