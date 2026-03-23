"use client";

import React from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Code2,
  Sparkles,
} from "lucide-react";

import { FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSanity,
  SiWordpress,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiClerk,
  SiGit,
  SiGithub,
  SiExpo,
  SiRemix,
  SiGraphql,
  SiPostman
} from "react-icons/si";

const RemixIcon = (props: any) => (
  <img src="/remix-icon.svg" alt="Remix" {...props} />
);

export default function Hero() {
  const frontendTech = [
    {
      subCategory: "Basics",
      items: [
        { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
        { name: "CSS", icon: SiCss, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      ],
    },
    {
      subCategory: "Frameworks",
      items: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Remix", icon: RemixIcon, color: "" },
        { name: "React Native Expo", icon: SiExpo, color: "text-blue-400" },
      ],
    },
    {
      subCategory: "Styling",
      items: [
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
  ];

  const backendTech = [
    {
      subCategory: "Technology",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "WordPress", icon: SiWordpress, color: "text-blue-600" },
      ],
    },
    {
      subCategory: "Version control",
      items: [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
      ],
    },
    {
      subCategory: "API & Services",
      items: [
        { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
        { name: "RESTful APIs", icon: SiPostman, color: "text-orange-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
        { name: "Clerk", icon: SiClerk, color: "text-purple-600" },
        { name: "Sanity CMS", icon: SiSanity, color: "text-red-600" },
      ],
    },
  ];

  const databaseTech = [
    {
      subCategory: "Relational (RDBMS)",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      ],
    },
    {
      subCategory: "NoSQL",
      items: [{ name: "MongoDB", icon: SiMongodb, color: "text-green-600" }],
    },
  ];

  const devopsTech = [
    {
      subCategory: "Infrastructure",
      items: [
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "Nginx", icon: SiNginx, color: "text-green-500" },
      ],
    },
    {
      subCategory: "Automation",
      items: [
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-orange-600" },
      ],
    },
    {
      subCategory: "Visualizations",
      items: [{ name: "Docker", icon: SiDocker, color: "text-blue-500" }],
    },
  ];

  const allCategories = [
    { title: "Frontend", items: frontendTech },
    { title: "Backend", items: backendTech },
    { title: "Database", items: databaseTech },
    { title: "DevOps", items: devopsTech },
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />

      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 mx-auto max-w-6xl pt-16 lg:pt-20 pb-8 lg:pb-12 flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              Full-Stack Developer · Jordan
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-violet-200 leading-tight">
              Ammar Odeh
            </h1>

            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-violet-500" />
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-slate-300">
              Building{" "}
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Scalable & Beautiful
              </span>{" "}
              Web Applications
            </h2>

            <p className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
              Full-stack developer delivering production-grade solutions using
              modern tools like Next.js, Node.js, Docker, and AWS — with a focus
              on performance and user experience.
            </p>
          </div>

          {/* RIGHT COLUMN – Skills + Stats */}
          <div className="space-y-8">
            {/* Skill Bars */}
            <div className="p-6 bg-white/1 border border-white/10 backdrop-blur-sm rounded-2xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                Skill Proficiency
              </h3>
              {[
                { name: "Frontend", level: 70 },
                { name: "Backend", level: 75 },
                { name: "Cloud & DevOps", level: 50 },
                // { name: "Full-Stack", level: 92 },
              ].map((skill) => (
                <div key={skill.name} className="mb-5 last:mb-0">
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Years & Projects */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">3+</div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-400">3</div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Availability + CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-5 pb-10">
        <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl backdrop-blur-sm hover:bg-green-500/15 transition-all duration-300">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75"></div>
            <div className="relative w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm font-semibold text-green-400 tracking-wide">
            Available for Hire
          </span>
        </div>

        {/* <div className="flex gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3.5 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:border-white/30"
          >
            Download Resume
          </a>
        </div> */}
      </div>

      {/* TECH STACK WITH ICONS */}
      <div className="w-full py-14 border-t border-b border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium text-slate-400 mb-8">
            Technologies I work with
          </p>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {allCategories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col space-y-6 bg-zinc-900/40 p-5 rounded-2xl border border-white/5 h-full"
              >
                <h4 className="text-xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 pb-2 border-b border-white/10">
                  {category.title}
                </h4>

                <div className="flex flex-col space-y-6">
                  {category.items.map((sub) => (
                    <div key={sub.subCategory} className="flex flex-col space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-80" />
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {sub.subCategory}
                        </h5>
                      </div>
                      <div className="grid gap-2">
                        {sub.items.map((tech) => (
                          <div
                            key={tech.name}
                            className="group flex items-center gap-3 px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            <tech.icon
                              className={`w-4 h-4 ${tech.color} group-hover:scale-110 transition-transform`}
                            />
                            <span className="text-xs font-semibold text-slate-300">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
