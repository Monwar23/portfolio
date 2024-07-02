"use client";
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaHome, FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrResume, GrProjects } from "react-icons/gr";
import { MdContactPage } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FiGithub } from "react-icons/fi";

const Navbar = () => {
    const handleResumeClick = (e) => {
        e.preventDefault();
        const resumeLink = 'https://drive.google.com/uc?export=download&id=15IbHeXAa18wGsPtMFlf9yV3rlyFJw9fe';
        const link = document.createElement('a');
        link.href = resumeLink;
        link.target = '_blank';
        link.click();
    };

    return (
        <div className="navbar fixed bg-[#1a1a2e] z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#2B3955] rounded-box z-[1] mt-3 p-2 text-white shadow">
                        <li><Link href="/" title="Home"><FaHome className='text-2xl mt-1 hover:text-blue-500' /></Link></li>
                        <li><Link href="#about" title="About me"><CgProfile className='text-2xl mt-1 hover:text-blue-500' /></Link></li>
                        <li><Link href="#skills" title="Skills"><GiSkills className='text-2xl mt-1 hover:text-blue-500' /></Link></li>
                        <li><Link href="#project" title="Projects"><GrProjects className='text-2xl mt-1 hover:text-blue-500' /></Link></li>
                        <li><a href="https://drive.google.com/file/d/15IbHeXAa18wGsPtMFlf9yV3rlyFJw9fe/view?usp=sharing" title="Resume" target='_blank' onClick={handleResumeClick}><GrResume className='text-2xl mt-1 hover:text-blue-500' /></a></li>
                        <li><Link href="#contact" title="Contact"><MdContactPage className='text-2xl mt-1 hover:text-blue-500' /></Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-white">Monwar Hossain</a>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/" title="Home"><FaHome className='text-2xl hover:text-blue-500' /></Link></li>
                    <li><Link href="#about" title="About me"><CgProfile className='text-2xl hover:text-blue-500' /></Link></li>
                    <li><Link href="#skills" title="Skills"><GiSkills className='text-2xl hover:text-blue-500' /></Link></li>
                    <li><Link href="#project" title="Projects"><GrProjects className='text-2xl hover:text-blue-500' /></Link></li>
                    <li><a href="https://drive.google.com/file/d/15IbHeXAa18wGsPtMFlf9yV3rlyFJw9fe/view?usp=sharing" title="Resume" target='_blank' onClick={handleResumeClick}><GrResume className='text-2xl hover:text-blue-500' /></a></li>
                    <li><Link href="#contact" title="Contact"><MdContactPage className='text-2xl hover:text-blue-500' /></Link></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex text-blue-500">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="https://www.facebook.com/monwarhossain.hossain.5" title="Facebook" target='_blank'><FaFacebookF className='text-lg hover:text-white' /></Link></li>
                    <li><Link href="https://www.linkedin.com/in/monwar-hossain23/" title="LinkedIn" target='_blank'><FaLinkedinIn className='text-lg hover:text-white' /></Link></li>
                    <li><Link href="https://github.com/Monwar23" title="GitHub" target='_blank'><FiGithub className='text-lg hover:text-white' /></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
