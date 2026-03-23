import type { MetaFunction } from "@remix-run/node";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";

export const meta: MetaFunction = () => {
  return [
    { title: "Ammar's Portfolio" },
    { name: "description", content: "A modern developer portfolio showcase" },
  ];
};

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
