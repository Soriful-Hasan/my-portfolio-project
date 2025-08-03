import React, { useState } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Element } from "react-scroll";
import Modal from "./Modal";
const Projects = () => {
  const projectsData = [
    {
      name: "Medi Ease",
      repo_link: "https://github.com/Soriful-Hasan/pix-apps-project",
      category: "Medical Camp Management System",
      liveLink: "https://mediease-f28e1.web.app/",
      challenge_face:
        "Building MediEase involved multiple challenges. Implementing role-based access and JWT authentication with Firebase Admin SDK required careful security planning. Integrating Stripe for secure payments was complex, especially with real-time validation and handling payment webhooks. Ensuring dashboard analytics were accurate and responsive across different user roles (organizer, participant) demanded robust backend logic and frontend state management. Coordinating frontend and backend deployment separately (Vercel) also introduced CORS and environment variable management complexities.",
      technology_stack:
        "MediEase is built with the MERN stack: MongoDB for data storage, Express.js and Node.js for the backend API and business logic, and React.js for the interactive frontend UI. Firebase Authentication is integrated for secure user login, alongside the Firebase Admin SDK on the backend for token verification and role management. Stripe handles secure payments, while JWT ensures protected routes. Tailwind CSS and DaisyUI power the responsive design, with Framer Motion providing smooth animations. Axios is used for frontend-backend communication, and the app is deployed on Vercel (frontend) and Render (backend).",

      improvements_future:
        "In the future, I plan to implement email notifications for registration and payment confirmations. Enhancing the dashboard with more detailed filters and time-based analytics will improve usability. Real-time updates for camp registration status, and integrating admin moderation for feedback will add value. I also aim to support multi-language UI, add a medical document upload system for participants, and improve mobile performance. Turning MediEase into a PWA and adding SEO optimizations will help reach more users and provide a more professional experience.",

      technology: [
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
      description:
        "MediEase is a full-stack web application designed to streamline the organization and participation of medical camps. Inspired by real-world healthcare management needs, the platform allows organizers to create and manage camps while participants can register, make secure payments, and submit feedback. With role-based dashboards, analytics, and a clean, responsive interface, MediEase enhances communication, efficiency, and transparency in organizing health events. Built with the MERN stack, Firebase Authentication, and Stripe, the app provides a complete end-to-end solution for medical camp administration and participation.",

      image: "https://i.ibb.co/vCcLJm7Y/image.png",
    },
    {
      name: "Find It",
      repo_link: "https://github.com/Soriful-Hasan/find-it-client-project",
      category: "Lost and Found Item Tracker",
      liveLink: "https://assignment-eleven-8c528.web.app/",
      technology: [
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
      improvements_future:
        "Add admin dashboard to manage reported posts and users.Enable OTP-based or phone number verification for more secure interactions.Implement notification system (email/SMS) when a matching item is found.Add real-time chat between finder and owner for faster communication.Improve search with filters by category, location, or date,",
      description:
        "Find It is a full-stack web application designed to help users report and recover lost or found items. Users can create detailed posts about items they've lost or found, including descriptions, contact numbers, and email information. The platform features individual item detail pages for better clarity and communication. Firebase Authentication is used for secure login and user identity management. The frontend is developed with React.js, Tailwind CSS, and DaisyUI, ensuring a clean and responsive UI. On the backend, Express.js, MongoDB, and JWT tokens are used to manage and protect user data and API routes.",
      challenge_face:
        "Implementing role-based route protection to secure certain user actions.Handling image uploads and managing links through ImgBB.Structuring proper relationships between lost and found posts in the database.Managing asynchronous operations and form validations smoothly with React Hook Form.Ensuring responsive and consistent UI across different device sizes.",
      technology_stack:
        "This project uses React.js with Tailwind CSS for a fast, responsive frontend. The backend is powered by Express.js on Node.js, with data stored in MongoDB. Authentication is managed securely via Firebase Authentication, while forms use React Hook Form and DaisyUI for smooth validation and styling. Images are hosted externally using ImgBB for efficient delivery.",
      image: "https://i.ibb.co/8LGZFCdY/image.png",
    },
    {
      name: "Find Mate",
      repo_link: "https://github.com/Soriful-Hasan/find-mate-client",
      technology: [
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
      description:
        "Find Mate is a full-stack web application designed to help users find suitable roommates easily and efficiently. Users can create posts with room details including location, rent, and contact information. The platform supports secure authentication via Firebase, ensuring only registered users can create or respond to posts. On the frontend, the UI is built using React.js, Tailwind CSS, and DaisyUI for a modern and responsive design. The backend is powered by Express.js and MongoDB for efficient data handling and storage. It's an ideal solution for students, job holders, or anyone looking to share accommodation.",
      technology_stack:
        "Find Mate features a responsive and interactive frontend built with React.js, styled using Tailwind CSS and DaisyUI to create a clean and modern user interface. User authentication and secure access are managed through Firebase Authentication, ensuring only registered users can post or respond. The backend is developed with Express.js, handling API requests and server-side logic. MongoDB is used as the database for flexible and scalable storage of user and roommate listing data. This technology stack ensures a seamless, efficient, and secure platform for finding and sharing accommodation.",
      challenge_face:
        "During the Find Mate project, managing secure user authentication and integrating it smoothly with the frontend was challenging. Handling real-time data updates and ensuring efficient communication between Express.js and MongoDB required careful planning. Designing a responsive UI with Tailwind CSS and DaisyUI to work seamlessly across devices took extra effort. Also, organizing and validating user input to maintain data integrity was a key hurdle",
      category: "Roommate Find Platform",
      improvements_future:
        "In the future, adding real-time chat between roommates could enhance user interaction. Implementing advanced search filters and map integration would improve usability. Enhancing security with role-based access control and multi-factor authentication can strengthen protection. Also, optimizing performance for large data sets and adding mobile app support would make the platform more robust and accessible.",
      liveLink: "https://roommate-finder-45a3b.web.app/",
      image: "https://i.ibb.co/p6kxD3kt/Screenshot-5.png",
    },
  ];

  const handleButtonClick = (type, link) => {
    if (type === "gitHub") {
      window.open(link);
    } else if (type === "liveLink") {
      window.open(link);
    } else {
      alert("link not found");
    }
  };
  return (
    <Element name="projects">
      <div className="w-11/12 mx-auto px-4 mt-30 mb-30">
        <div className="text-center pt-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-12">
            Recent Projects
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {projectsData.map((data, i) => (
            <div
              key={i}
              className="flex flex-col xl:flex-row-reverse items-center gap-6 border bg-gray-50 border-gray-200 rounded-md overflow-hidden"
            >
              {/* Image Section */}
              <div className="w-full xl:w-1/2 h-full">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover rounded-t-md xl:rounded-none"
                />
              </div>

              {/* Content Section */}
              <div className="w-full xl:w-1/2 p-6 xl:ml-6">
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  {data.name}
                </h1>
                <p className="text-[#e65309]  mt-2">{data.category}</p>
                <div className="border-b mt-2 border-gray-200"></div>
                <p className="line-clamp-4 mt-4 text-sm leading-6 text-gray-600 text-justify">
                  {data.description}
                </p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-3 mt-10">
                  {data?.technology?.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm border border-gray-300 bg-gray-100 px-4 py-2 rounded"
                      >
                        <Icon size={20} color={tech.color} />
                        {tech.name}
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <button
                    onClick={() => handleButtonClick("liveLink", data.liveLink)}
                    className="btn btn-outline flex gap-2 justify-center hover:bg-[#e65309] hover:text-white"
                  >
                    Live Site <BsBoxArrowInUpRight />
                  </button>
                  <button
                    onClick={() => handleButtonClick("gitHub", data.repo_link)}
                    className="btn btn-outline flex gap-2 justify-center hover:bg-[#e65309] hover:text-white"
                  >
                    Github <AiFillGithub />
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById(`modal_${i}`).showModal()
                    }
                    className="btn btn-outline flex gap-2 justify-center hover:bg-[#e65309] hover:text-white"
                  >
                    Details <IoEyeSharp />
                  </button>
                  <div className="w-full">
                    <dialog id={`modal_${i}`} className="modal">
                      <div className="bg-gray-100 modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-xl ">
                          {data.name} project
                        </h3>
                        <div className="border-b mt-2 border-gray-300"></div>
                        <div className="">
                          <div className="flex items-center gap-2">
                            <FaLayerGroup color="#2563EB" />
                            <p className="py-4 font-semibold">
                              Main technology
                            </p>
                          </div>
                          <p className="text-gray-800 text-[15px]">
                            {data.technology_stack}
                          </p>
                        </div>
                        <div className="border border-b border-gray-100 mt-4"></div>
                        <div className="">
                          <div className="flex items-center gap-2">
                            <FaSmileBeam color="F59E0B " />
                            <p className="py-4 font-semibold">Challange Face</p>
                          </div>
                          <p className="text-gray-800 text-[15px]">
                            {data.challenge_face}
                          </p>
                        </div>
                        <div className="border border-b border-gray-100 mt-4"></div>
                        <div className="">
                          <div className="flex items-center gap-2">
                            <FaChartLine color="#2563EB" />
                            <p className="py-4 font-semibold">
                              improvements_future
                            </p>
                          </div>
                          <p className="text-gray-800 text-[15px]">
                            {data.improvements_future}
                          </p>
                        </div>
                        <div className="border border-b border-gray-100 mt-4"></div>
                        <div className="">
                          <div className="flex items-center gap-2">
                            <FaFileAlt color="6B7280 " />
                            <p className="py-4 font-semibold">Description</p>
                          </div>
                          <p className="text-gray-800 text-[15px]">
                            {data.description}
                          </p>
                        </div>
                        <div className="border border-b border-gray-100 mt-4"></div>

                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn  bg-black text-white flex gap-2 justify-center hover:bg-[#e65309] hover:text-white">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
