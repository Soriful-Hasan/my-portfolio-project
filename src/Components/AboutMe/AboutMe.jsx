import React from "react";
import { Element } from "react-scroll";
const AboutMe = () => {
  return (
    <Element name="about">
      <div className="mt-20 mb-20">
        <div className=" w-11/12 mx-auto border border-gray-100 rounded-sm mt-20 flex-col xl:flex-row flex justify-between gap-20 p-4">
          <div className=" place-items-center flex-1">
            <div className="">
              <img
                className="rounded-md"
                src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-2xl lg:text-3xl font-bold">
              <h1>About Me</h1>
            </div>
            <h2 className="font-semibold">
              MD SORIFUL HASAN – MERN STACK WEB DEVELOPER
            </h2>
            <div className="border-b border-gray-100"></div>
            <div className="text-sm text-gray-600 letter  leading-8 tracking-wide space-y-4">
              <p>
                I'm a passionate <strong>Full Stack Web Developer</strong> with
                practical experience in the{" "}
                <strong>
                  MERN stack (MongoDB, Express.js, React, Node.js)
                </strong>
                . I specialize in building modern, responsive, and scalable web
                applications that address real-world problems.
              </p>

              <p>
                Beyond coding, I'm an avid traveler who draws inspiration from
                exploring new places. I’m also a cricket enthusiast who enjoys
                both playing and watching the sport. In my free time, I love
                diving into personal projects, solving coding challenges, and
                staying updated with the latest trends in web development.
              </p>

              <p>
                I value clean code, thoughtful design, and seamless user
                experiences. Team collaboration and problem-solving are areas
                where I thrive. I'm committed to lifelong learning and
                passionate about pushing my limits as a developer.
              </p>

              <p>
                My goal is to grow continuously by learning advanced
                technologies and modern frameworks. I aspire to work in a
                forward-thinking tech company where I can contribute
                meaningfully to impactful projects and evolve as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
