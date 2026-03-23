import { projects } from "@/data";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Compare } from "@/components/ui/compare";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Projects
            </span>
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group block rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
              >
                {/* Compare Slider - Always in the Card */}
                <div className="relative aspect-video bg-black/40">
                  <Compare
                    firstImage={project.compareBefore || project.img}
                    secondImage={project.compareAfter || project.img}
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-full w-full"
                    slideMode="hover"
                    showHandlebar={true}
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-3 text-left">
                  <h3 className="text-lg font-bold text-white line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                    {project.des}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap gap-2">
                    {project.iconLists.slice(0, 6).map((icon, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center"
                      >
                        <img
                          src={icon}
                          alt="tech"
                          width={16}
                          height={16}
                          className="opacity-90"
                        />
                      </div>
                    ))}
                    {project.iconLists.length > 6 && (
                      <span className="text-[10px] text-gray-400 self-center">
                        +{project.iconLists.length - 6}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 pt-2 text-cyan-400 font-semibold text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Only Text + Tech + Live Link (No Compare Here) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-[60] overflow-hidden p-2 md:p-6"
            >
              <div className="flex h-full items-center justify-center">
                <div className="relative w-full h-full max-w-7xl bg-zinc-900/95 border border-white/20 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden backdrop-blur-2xl">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>

                  {/* Hero Image - Split screen on desktop */}
                  <div className="relative h-48 md:h-full md:w-1/2 flex-shrink-0">
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900" />
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>

                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {selectedProject.des}
                    </p>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.iconLists.map((icon, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center"
                          >
                            <img
                              src={icon}
                              alt="tech"
                              width={20}
                              height={20}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                      >
                        View Live Project
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecentProjects;
