'use client';
import { Bio, Skill, Project } from "./data";

import React from "react";
import Timeline from "./components/Timeline";

export default function Home({ ...props }) {
  return (
    <main className="flex max-w-[1920px] w-full relative mx-auto gap-5 flex-wrap ">
      <div className="left w-full lg:w-1/4 ml-10 mt-10 relative lg:fixed">
        <div>
          <div className="flex gap-5 flex-col w-full lg:w-[400px]">
            <div className="w-full flex justify-center">
              <img
                src="../nose-cheek-mouth-life-hack-jaw-nose-thumbnail.jpg"
                alt="avatar"
                className="rounded-full w-40"
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
                    className="text-xl font-semibold hover:text-[#33FFF0] duration-200 ease-in-out"
                  >
                    {" "}
                    {item.title}
                  </a>
                </div>
              );
            })}
            <div className="flex flex-row gap-5 ml-5 ">
              {Bio?.social?.map((item, index) => {
                console.log(item.img)
                return (
                  <a key={index} href={item?.url}>
                    <div className="bg-white rounded-full hover:bg-[#33FFF0] duration-200 ease-in-out">{item.img}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="right lg:w-3/4 ml-0 lg:ml-[440px]">
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
                  className="border border-[#33FFF0] w-full lg:w-[45%] shadow-[0_0_12px_4px_rgba(51,_255,_240,_0.2)] px-8 pb-8 pt-4 rounded-3xl hover:translate-y-[-15px] hover:shadow-[0_12px_24px_12px_rgba(51,_255,_240,_0.2)] ease-in-out duration-300"
                >
                  <h2 className="text-xl text-center font-semibold">
                    {item.title}
                  </h2>
                  <div className="flex gap-3 flex-wrap justify-center mt-5">
                    {item?.data.map((childItem, indexChild) => {
                      return (
                        <div
                          key={indexChild}
                          className="flex flex-row gap-2 border p-4 items-center rounded-xl hover:bg-white ease-in-out duration-300 group "
                        >
                          <img src={childItem?.url} alt="img" className="w-4" />
                          <p className="group-hover:text-slate-950 duration-300 ease-in-out">
                            {childItem?.title}
                          </p>
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
            <h2 className="text-3xl font-bold text-left">Experience</h2>
            <p className="text-lg font-semibold text-left pt-4 pb-8">
              My work experience as a software engineer and working on different
              companies and projects.
            </p>
          </div>
          <Timeline></Timeline>
        </div>
        <div id="project">
          <div className="right-top-title w-full px-5 py-5">
            <h2 className="text-6xl font-bold text-center lg:text-right">
              Projects
            </h2>
            <p className="text-xl font-semibold pt-4 pb-8 text-center lg:text-right">
              My work experience as a software engineer and working on different
              companies and projects.
            </p>
            <div className="flex flex-wrap 2xl:gap-10 xl:gap-5 gap-5 justify-center mt-6 mb-10">
              {Project?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-5 border border-[#33FFF0] flex-wrap w-[100%] sm:w-[48%] lg:w-[48%] xl:w-[30%] shadow-[0_0_12px_4px_rgba(51,_255,_240,_0.2)] px-8 pb-8 pt-4 rounded-xl hover:translate-y-[-15px] hover:shadow-[0_12px_24px_12px_rgba(51,_255,_240,_0.2)] ease-in-out duration-300 group cursor-pointer"
                  >
                    <img
                      className="rounded-lg w-full h-40 object-cover"
                      src={item?.image}
                      alt="anh"
                    />
                    <div className="flex flex-row gap-4 justify-center flex-wrap mt-4">
                      {item?.skill.map((itemSkill, index) => {
                        return (
                          <p
                            key={index}
                            className="border border-slate-800 bg-slate-800 rounded-lg py-1 px-2 text-xs"
                          >
                            {itemSkill?.titleSkill}
                          </p>
                        );
                      })}
                    </div>
                    <h2 className="text-xl text-center font-semibold mt-4 uppercase">
                      {item?.titleProject}
                    </h2>
                    <p className="font-normal text-sm text-slate-500 text-center">
                      {item?.description}
                    </p>
                    <div className="mt-10">
                      <a
                        href={item?.url}
                        className="text-slate-400 group-hover:text-white ease-in-out duration-200"
                      >
                        View Website
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
