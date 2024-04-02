"use client";

import Footer from "@/lib/components/Footer";
import Navbar from "@/lib/components/Navbar";
import { useTheme } from "@/lib/hooks/useTheme";
import Image from "next/image";

export default function Home() {
  const { isDark } = useTheme();

  const lightTheme = "bg-light-bg text-dark-body";
  const darkTheme = "bg-dark-bg text-light-body";

  const skill = [
    { name: "HTML", image: "/html.svg" },
    { name: "Javascript", image: "/javascript.svg" },
    { name: "Typescript", image: "/typescript.svg" },
    { name: "CSS", image: "/css.svg" },
    { name: "Tailwind", image: "/tailwind.svg" },
    { name: "Material UI", image: "/material-ui.svg" },
    { name: "React JS", image: "/react.svg" },
    { name: "Next JS", image: "/next.svg" },
    { name: "Vercel", image: "/vercel.svg" },
    { name: "Git", image: "/git.svg" },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? darkTheme : lightTheme
      } overflow-x-hidden`}
    >
      <Navbar />
      <div className="flex justify-center items-center flex-col font-montserrat px-5 h-1/2-screen bg-[url('/prau.jpg')] bg-cover relative ">
        <h1 className="text-4xl lg:text-7xl text-dark-primary opacity-75 hover:opacity-100 z-40">Dhaifan Dito Adrian</h1>
        <p className="text-2xl lg:text-3xl text-dark-secondary">Front-End Developer</p>
        <div className="w-3/4 h-1/2 border-dark-primary border-8 border-solid absolute left-0 right-0 mx-auto opacity-75"></div>
      </div>

      <div className="text-dark-accenttext flex justify-center items-center px-36 pt-24 flex-col">
        <q className="text-4xl">You can fail at what you do not want, so you might as well take a change on doing what you love</q>
        <div className="flex justify-end w-full">
        <p className="mt-6 text-3xl">- Jim Carrey</p>
        </div>
      </div>
      {/* About Section */}
      <div className="font-roboto min-h-screen px-36 lg:grid grid-cols-5 mb-24 lg:mb-0 ">
        <div className="grid-subsets-col col-span-2 text-4xl py-36 flex items-center flex-col w-full ">
          <div className="text-dark-primary">
            <h1 className="my-6">About Dito.</h1>
            <div className="bg-dark-primary relative">
              <Image
                src="/dto-bw.jpg"
                alt="portrait"
                width={350}
                height={350}
                className="opacity-90"
              />
              <div className="w-full h-full border-dark-primary border-8 border-solid absolute top-6 left-6"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-sceen relative rid-subsets-col col-span-3">
          <div className="lg:lg:rotate-270 w-fit lg:absolute ">
            <div className="w-100 transition-height duration-500 bg-dark-primary px-2 h-20 lg:hover:h-100 hover:h-110 flex-col items-center  m-3 relative group">
              <p className="font-bold text-2xl pt-6 flex justify-center items-center pb-6">
                General
              </p>
              <div className="lg:rotate-90 mx-20 transition-opacity duration-500 opacity-0 group-hover:opacity-100 hidden group-hover:block">
                <p className="pb-2">
                  My name is{" "}
                  <span className="font-bold">Dhaifan Dito Adrian</span>,
                  commonly known as Dito, is a man born on December 12, 1997.{" "}
                </p>
                <p className="pb-2">
                  I was born and raised in the city of Bandung, Indonesia.{" "}
                </p>
                <p className="pb-2">
                  I has a keen interest in pop culture, evident through my
                  hobbies of watching movies, reading books, and traveling in my
                  leisure time.{" "}
                </p>
                <p className="pb-2">
                  I am a graduate of Agriculture Engineering at ITB, and
                  currently pursuing my passion to become a front-end developer.
                </p>
              </div>
            </div>
            <div className="w-100 transition-height duration-500 bg-dark-primary px-2 h-20 lg:hover:h-100 hover:h-110   flex-col items-center  m-3 relative group">
              <p className="font-bold text-2xl py-6 flex justify-center items-center ">
                Education
              </p>
              <div className="lg:rotate-90 mx-24 transition-opacity duration-500 opacity-0 group-hover:opacity-100 text-sm hidden group-hover:block">
                <p className="font-bold text-sm">
                  Agriculture Engineering at Institut Teknologi Bandung
                </p>
                <p className="text-xs font-light pb-3">2016 - 2020</p>
                <p className="pb-5">
                  Graduate as a Bachelor of Science with Highly Satisfactory
                  status.
                </p>
                <p className="font-bold text-sm ">
                  Front End at SIRCLO Tech Academy
                </p>
                <p className="text-xs font-light pb-3">
                  December 2021 - March 2022
                </p>
                <ul className="list-disc">
                  <li className="pb-2">
                    A scholarship bootcamp program held by SIRCLO x Alterra
                    Academy.
                  </li>
                  <li className="pb-2">
                    Chosen as the best 10 front end to start a career at SIRCLO.
                  </li>
                  <li className="pb-2">
                    3 months IT career preparation as a software engineer (front
                    end).
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-100 transition-height duration-500 bg-dark-primary px-2 h-20 lg:hover:h-100 hover:h-110 shadow-xl flex-col items-center  m-3 relative group">
              <p className="font-bold text-2xl py-6 flex justify-center items-center ">
                Experience
              </p>
              <div className="lg:rotate-90 mx-16 transition-opacity duration-500 opacity-0 group-hover:opacity-100 text-sm font-montserrat hidden group-hover:block">
                <p className="font-bold text-sm py-3 ">
                  Junior Software Engineering at Icube By SIRCLO.
                  <span className="text-xs font-light">
                    ( April 2022 - June 2023 )
                  </span>
                </p>
                <ul className="list-disc">
                  <li className="pb-2">
                    Develop custom PWA interface of Order Management System
                    based on client requests.
                  </li>
                  <li className="pb-2">Working on Scrum method.</li>
                  <li className="pb-2">
                    Develop functional and responsive PWA with Next JS
                    framework.
                  </li>
                  <li className="pb-2">
                    Styling the site based on the design from UI/UX Team with
                    CSS and Material UI.
                  </li>
                  <li className="pb-2">
                    Retrieve, display, and send data based on GraphQL from
                    Backend Team with Apollo.
                  </li>
                  <li className="pb-2">
                    Assist and coordinate with QA team to find and fix bugs.
                  </li>
                  <li className="pb-2">
                    Write the documentation about the utility of the feature on
                    the site.
                  </li>
                </ul>
                <p className="pb-2">
                  Project: Medbiz biofarma, Hush Puppies, Guardian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skill Section */}
      <div className="lg:grid grid-cols-5">
      <div className="grid-subsets-col col-span-2 text-4xl  flex  justify-center w-full mb-12  text-dark-primary ">
                      <div>
      <h2 >Front End </h2>
      <p>Skill Set</p>
      </div>
      </div>
      <div className="grid-subsets-col col-span-2">
      
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 lg:grid-cols-5  lg:gap-y-10 lg:gap-x-36">
          {skill.map((i, index) => {
            return (
              <div className="group h-32 w-32 font-roboto" key={index}>
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 border-4 border-dark-primary border-solid rounded-xl m-1 flex justify-center items-center ">
                    <div className=" w-3/4">
                      <Image
                        src={i.image}
                        alt={i.name}
                        width={500}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-dark-primary px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center font-bold">
                      {i.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      </div>
      </div>
      {/* Contact */}
      <div>
        
      </div>
      <Footer/>
    </div>
  );
}
