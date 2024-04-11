import { Bio } from "./data";
import { Skill } from "./data";

import React from "react";
import Timeline from "./components/Timeline";

const events = [
  {
    date: "January 2020",
    title: "Event 1",
    description: "Description of event 1.",
    image: "/event1.jpg",
  },
  // Add more events...
];

export default function Home({ ...props }) {
  return (
    <main className="flex max-w-[1920px] w-full relative mx-auto gap-5">
      <div className="left w-1/4 ml-10 mt-10 fixed">
        <div>
          <div className="flex gap-5 flex-col w-[400px]">
            <div className="w-full flex justify-center">
              <img
                src="../nose-cheek-mouth-life-hack-jaw-nose-thumbnail.jpg"
                alt="avatar"
                className="rounded-full w-60"
              />
            </div>
            <h1 className="text-4xl font-bold">{Bio.title}</h1>
            <h2 className="text-2xl font-semibold">I am a {Bio.roles}</h2>
            <p className="pr-8">{Bio.description}</p>
            {Bio?.menu?.map((item, index) => {
              return (
                <div key={index}>
                  <a
                    href={item.url}
                    className="text-xl font-semibold hover:text-amber-300 duration-200 ease-in-out"
                  >
                    {" "}
                    {item.title}
                  </a>
                </div>
              );
            })}
            <div className="flex flex-row gap-5 ml-5">
              {Bio?.social?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="bg-white rounded-full">{item.img}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="right w-3/4 ml-[440px]">
        <div id="skills" className="px-5 py-10">
          <div className="right-top-title w-full">
            <h2 className="text-3xl font-bold uppercase text-center">Skills</h2>
            <p className="text-lg font-semibold text-center pt-4 pb-8">
              Here are some of my skills on which I have been working on for the
              past 3 years.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            {Skill?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border border-[#844ce696] w-full lg:w-[45%] shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] px-8 pb-8 pt-4 rounded-3xl hover:translate-y-[-15px] hover:shadow-[0_12px_24px_12px_rgba(133,_76,_230,_0.2)] ease-in-out duration-300"
                >
                  <h2 className="text-xl text-center font-semibold">
                    {item.title}
                  </h2>
                  <div className="flex gap-3 flex-wrap justify-center mt-5">
                    {item?.data.map((childItem, indexChild) => {
                      return (
                        <div
                          key={indexChild}
                          className="flex flex-row gap-2 border p-4 items-center rounded-xl"
                        >
                          <img src={childItem?.url} alt="img" className="w-4" />
                          <p>{childItem?.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="experience" className="px-5 py-10">
          <div className="right-top-title w-full">
            <h2 className="text-3xl font-bold text-left">
              Experience
            </h2>
            <p className="text-lg font-semibold text-left pt-4 pb-8">
              My work experience as a software engineer and working on different
              companies and projects.
            </p>
          </div>
          <Timeline events={events}></Timeline>
        </div>
        <div id="project">
        <div className="right-top-title w-full">
            <h2 className="text-6xl font-bold text-right">
              Projects
            </h2>
            <p className="text-xl font-semibold pt-4 pb-8 text-right">
              My work experience as a software engineer and working on different
              companies and projects.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
