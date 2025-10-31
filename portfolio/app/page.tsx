import Image from "next/image";
import Header from "./components/header";
import HomeSection from "./components/home";
import Skills from "./components/skills";
import WorksRow from "./components/workrow";
import Video from "./components/video";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <HomeSection/>
      <WorksRow />
      <Skills />
      <Video />
      <Contact />
    </>
  );
}