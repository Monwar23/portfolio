"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#21213B] flex-col items-center justify-center p-24" >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 mt-10">
        <div>
          <h1 className="text-white text-3xl text-center"><span className="font-bold">Monwar Hossain</span></h1>
          
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
                <Link href="https://www.facebook.com/monwarhossain.hossain.5" title="Facebook" target='_blank'>
                  <FaFacebookF className='text-lg' />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/monwar-hossain23/" title="LinkedIn" target='_blank'>
                  <FaLinkedinIn className='text-lg' />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Monwar23" title="GitHub" target='_blank'>
                  <FiGithub className='text-lg' />
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center gap-4">
          <Link href="#contact" >
          <button className="btn btn-outline text-white mt-7 border-2 hover:text-blue-500 border-blue-500 ">Contact Me</button>
          </Link>
          <Link href="https://drive.google.com/file/d/15IbHeXAa18wGsPtMFlf9yV3rlyFJw9fe/view?usp=sharing" target='_blank'>
          <button className="btn btn-outline text-white mt-7 border-2 hover:text-blue-500 border-blue-500 ">Resume</button>
          </Link>
          </div>
        </div>
        <div>
          <Image src="/monwar.jpg" alt="Profile Picture" width={500} height={500} className="rounded-2xl w-80 h-96 border-4 border-blue-500" />
        </div>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="skills">
        <Skills></Skills>
      </div>
      <div id="project">
        <Projects></Projects>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </main>
  );
}
