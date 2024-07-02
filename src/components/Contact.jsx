"use client";
import Link from 'next/link';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Fade } from 'react-awesome-reveal';
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    const position = [25.7439, 89.2752];

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9tgizvz', 'template_moznleh', form.current, 'HWHiVmWlGd0InUfYI')
            .then((result) => {
                console.log(result.text);
                toast('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                toast('Failed to send message. Please try again later.');
            });

        e.target.reset();
    };

    return (
        <div className='mt-10 px-6'>
            <Fade direction='left'>
                <h2 className='text-blue-500 text-3xl text-center font-bold mt-5 lg:mt-0 mb-8'>Contact</h2>
            </Fade>
            <div className='flex justify-center'>
                <div className='text-center text-white border border-blue-500 max w-[350px] p-5 mb-8'>
                    <h2 className='text-lg mb-2'><FaPhoneAlt className='inline mr-2' />01717459473</h2>
                    <h2 className='text-lg mb-2'><FaMapMarkerAlt className='inline mr-2' />Rangpur, Bangladesh</h2>
                    <h2 className='text-lg mb-2'><FaEnvelope className='inline mr-2' />monwar2345@gmail.com</h2>
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <Link href="https://www.facebook.com/monwarhossain.hossain.5" title="Facebook" target='_blank'>
                                <FaFacebookF className='text-lg hover:text-blue-500' />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/monwar-hossain23/" title="LinkedIn" target='_blank'>
                                <FaLinkedinIn className='text-lg hover:text-blue-500' />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/Monwar23" title="GitHub" target='_blank'>
                                <FiGithub className='text-lg hover:text-blue-500' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-[#1a1a2e]">
                    <h1 className="text-2xl font-bold text-blue-500 mb-5">Message me</h1>
                    <form ref={form} onSubmit={sendEmail} className="self-stretch space-y-3">
                        <div>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name *"
                                required
                                className="w-full px-2 py-1 rounded-md border-2 border-blue-500 h-8 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Email *"
                                required
                                className="w-full px-2 py-1 rounded-md border-2 border-blue-500 h-8 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                className="w-full px-2 py-1 rounded-md border-2 border-blue-500 h-16 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full py-2 font-semibold rounded bg-gradient-to-r from-green-400 to-blue-500 text-white">
                            Send
                        </button>
                    </form>
                </div>
                <div className="w-full relative z-10 px-2 py-2 lg:py-16 rounded-md xl:col-span-3 bg-[#1a1a2e]">
                    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>
                                Rangpur, Bangladesh. <br /> Feel free to visit us.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
