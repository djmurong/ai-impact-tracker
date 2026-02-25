import React, { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { getTheme, setTheme } from "@/config/theme";
import type { Theme } from "@/config/theme";

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin: string;
    email: string;
  };
};

const DANIEL_IMAGE_URL = `${import.meta.env.BASE_URL}daniel-murong.png`;

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Daniel Murong",
    title: "Co-Founder",
    bio: "Undergraduate at Duke University studying Computer Science and Statistical Science passionate about machine learning and software engineering for the environment and for medical care.",
    imageUrl: DANIEL_IMAGE_URL,
    socials: {
      linkedin: "https://www.linkedin.com/in/djmurong99/",
      email: "mailto:djm99.duke.edu",
    },
  },
  {
    name: "Thomas Patton",
    title: "Co-Founder",
    bio: "Undergraduate at University of Alabama.",
    imageUrl: "https://picsum.photos/seed/thomas-patton/500/700",
    socials: {
      linkedin: "https://linkedin.com/in/thomas-placeholder",
      email: "mailto:thomas@placeholder.com",
    },
  },
];

const AboutPage: React.FC = () => {
  const [theme, setThemeState] = useState<Theme>(getTheme);

  const handleThemeChange = (next: Theme) => {
    setTheme(next);
    setThemeState(next);
  };

  return (
    <div className="h-screen w-full bg-slate-100 dark:bg-slate-950 flex flex-col font-sans overflow-hidden">
      <AppHeader
        currentPage="about"
        theme={theme}
        onThemeChange={handleThemeChange}
      />

      <main className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-8 space-y-6 scroll-smooth custom-scroll">
        <section className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-6 lg:p-8 w-full space-y-4 shadow-sm dark:shadow-none">
          <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Student-Built Team
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            About This Project
          </h1>
          <p className="max-w-4xl text-slate-600 dark:text-slate-300 text-sm lg:text-base leading-relaxed">
            We are a team of two students building this AI impact site together.
            We are focused on making AI outcomes easier to understand and track
            through clear, citation-backed visuals. This site is also devoted to
            synthesizing insights from the metrics tracked here and to directing
            users to sources for more information.
          </p>
        </section>

        <section>
          <label className="text-slate-600 dark:text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">
            Team
          </label>
          <div className="grid grid-cols-2 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} placeholder portrait`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/45" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-slate-900/75 px-4 py-3 text-sm text-slate-100 transition-transform duration-300 group-hover:translate-y-0">
                    {member.bio}
                  </div>
                </div>
                <div className="space-y-2 px-4 py-4">
                  <h2 className="text-xl font-semibold leading-tight text-slate-900 dark:text-white">
                    {member.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {member.title}
                  </p>
                  <div className="flex items-center gap-4 pt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={member.socials.email}
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
