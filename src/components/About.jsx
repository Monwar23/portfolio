import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <div className="lg:flex justify-center items-center lg:min-h-screen lg:px-4">
            <div className="w-full max-w-2xl">
                <Fade direction="left">
                    <h2 className="text-blue-500 text-3xl text-center mt-5 lg:mt-0 font-bold mb-8">About Me</h2>
                </Fade>
                <p className="text-white text-justify">
                    Hi, I am Monwar Hossain, a passionate and dedicated React Front End Developer. I specialize in creating dynamic web experiences using HTML, CSS, Tailwind CSS, JavaScript, and React. My back-end skills include Node.js, Express.js, and MongoDB, complemented by expertise in version control with Git and GitHub.
                    <br />
                    I am proficient in responsive design, RESTful APIs, and Firebase authentication, ensuring that I deliver high-quality, innovative web solutions tailored to project needs. With a keen eye for detail and a deep understanding of design principles, I strive to bring creativity and functionality together in every project I undertake.
                    <br />
                    As a front-end developer, I am committed to crafting seamless user experiences and elegant interfaces. My goal is to build responsive, user-friendly web applications that not only meet but exceed user expectations. Lets connect and create something amazing together!
                </p>
            </div>
        </div>
    );
};

export default About;
