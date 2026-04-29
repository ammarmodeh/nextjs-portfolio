import { projects } from "@/data";
import { ArrowRight, X, ExternalLink, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Compare } from "./ui/compare";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <>
      <section className="py-24 relative overflow-hidden" id="projects">
        <div className="w-full px-6 lg:px-12 relative z-10">
          {/* Simple Heading */}
          <div className="flex flex-col items-center mb-24 space-y-4">
            <div className="h-1 w-12 bg-white/20 rounded-full" />
            <h2 className="text-5xl md:text-6xl font-bold text-center text-white tracking-tighter">
              Featured Projects
            </h2>
            <p className="text-slate-500 font-medium">Selected works and case studies</p>
          </div>
 
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {projects.map((project) => (
              <CardContainer key={project.id} className="inter-var w-full">
                <CardBody className="bg-zinc-950 relative group/card border border-white/5 w-full h-auto rounded-[32px] p-8 transition-all hover:border-white/10">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-white mb-4 line-clamp-1"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed mb-8"
                  >
                    {project.des}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="w-full mt-4"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-zinc-900">
                      <img
                        src={project.img}
                        className="h-full w-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700"
                        alt="thumbnail"
                      />
                    </div>
                  </CardItem>
                  
                  <div className="flex justify-between items-center mt-12">
                    <div className="flex items-center gap-1">
                      {project.iconLists.slice(0, 3).map((Icon, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border border-white/10 bg-black flex items-center justify-center">
                          {typeof Icon === "string" ? (
                            <img src={Icon} className="p-2" />
                          ) : (
                            <Icon className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                      ))}
                    </div>
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-slate-200 transition-all"
                    >
                      View Details
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>
 
      {/* Modal - Immersive Project Experience (Simplified) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-[100]"
            />
 
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8"
            >
              <div className="relative w-full max-w-7xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl pointer-events-auto">
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-[120] p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white backdrop-blur-md transition-all active:scale-95"
                >
                  <X className="w-5 h-5" />
                </button>
 
                {/* Media Section - Left Side */}
                <div className="relative w-full lg:w-1/2 min-h-[300px] md:min-h-[400px] lg:min-h-[600px] bg-zinc-900 flex-shrink-0">
                  {selectedProject.compareBefore ? (
                    <Compare
                      firstImage={selectedProject.compareBefore}
                      secondImage={selectedProject.compareAfter || selectedProject.img}
                      firstImageClassName="object-cover object-top w-full h-full"
                      secondImageClassname="object-cover object-top w-full h-full"
                      className="h-full w-full"
                      slideMode="hover"
                      showHandlebar={true}
                    />
                  ) : (
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  )}
                </div>
 
                {/* Content Section - Right Side */}
                <div className="flex-1 flex flex-col overflow-y-auto bg-zinc-950">
                   <div className="p-8 md:p-12 lg:p-16 space-y-12">
                      <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight">
                          {selectedProject.title}
                        </h2>
                        <div className="h-1 w-20 bg-white/10 rounded-full" />
                      </div>
 
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                        {selectedProject.des}
                      </p>
 
                      <div className="space-y-6">
                        <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.iconLists.map((Icon, i) => (
                            <div
                              key={i}
                              className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-all"
                            >
                              {typeof Icon === "string" ? (
                                <img src={Icon} alt="tech" width={24} height={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                              ) : (
                                <Icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
 
                      <div className="pt-8">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm rounded-2xl hover:bg-slate-200 transition-all"
                        >
                          Visit Live Project
                          <ExternalLink className="w-4 h-4" />
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
