import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div>
            <div>
                <h2>his is Monwar Hossain</h2>
                <div>
            <h1 className="text-[#0FBB80] bg-[#12191B] text-center">
              <TypeAnimation
                sequence={[
                  "I am Front End Developer",
                  1000,
                  "I am React Developer",
                  1000,
                  "I am Junior Web Developer",
                  1000,
                  "I am Junior MERN Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "18px", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
          </div>
            </div>
        </div>
    );
};

export default Home;