import Image from "next/image";
import p3 from "./../public/p3.png";
import FlippingText from "./Components/FlippingText";
import { NavBtn } from "./Components/CustomBtn";
import CustomCard from "./Components/CustomCard";
import { CardData } from "./Types/CardData";
import { TechnicalSkills } from "./Components/TexhnicalSkills";

export default function Home() {
  return (
    <div id="home">
      <Nav />
      <div className="px-10">
        <HomeData />
        <Work />
        <Projects />
        <Certifications />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute inset-x-0 top-0 bg-purple-900/20 z-50 backdrop-filter backdrop-blur-lg sticky">
      <div className="h-full flex justify-end items-center px-4 ">
        <NavBtn
          color="text-purple-800 font-semibold"
          buttonText="Home"
          href="home"
        />
        <NavBtn
          color="text-purple-800 font-semibold"
          buttonText="Work"
          href="work"
        />
        <NavBtn
          color="text-purple-800 font-semibold"
          buttonText="Projects"
          href="projects"
        />
        <NavBtn
          color="text-purple-800 font-semibold"
          buttonText="Certification"
          href="certifications"
        />
        <NavBtn color="text-purple-800 font-semibold" buttonText="Education" />
      </div>
    </div>
  );
}

function HomeData() {
  const textData1 = [
    "Computer Science Engineer",
    "Full Stack",
    "Business & Startup",
  ];
  const textData2 = ["With Minors In AI & ML", "Web Developer", "Enthusiast"];
  return (
    <div className="flex w-100 flex-row items-center justify-center pt-10">
      <div className="w-1/2 mx-10">
        <div style={{ height: "calc(100vh - 200px)" }}>
          <div className="py-5 text-wrap text-purple-800">
            <FlippingText textData={textData1} interval={2500} />
          </div>
          <div className="py-5 text-wrap text-purple-800">
            <FlippingText textData={textData2} interval={2500} />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        pikachu
        <TechnicalSkills />
      </div>
    </div>
  );
}

function Work() {
  const workExperiences: CardData[] = [
    {
      imageUrl: p3.src,
      title: "Project 1",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: false,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: true,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: true,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: false,
    },
  ];
  return (
    <div className="flex flex-col pt-20 pb-20 px-10" id="work">
      <div className="text-2xl font-bold">Work Experience</div>{" "}
      <div className="flex flex-wrap justify-center pt-10 gap-x-10 gap-y-24">
        {workExperiences.map((workExperience) => (
          <CustomCard
            key={workExperience.title as string}
            cardData={workExperience}
          />
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const projects: CardData[] = [
    {
      // imageUrl: p3.src,
      title: "Project 1",
      primaryText: "primary text",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: true,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      primaryText: "primary text",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: true,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      primaryText: "primary text",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: true,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      primaryText: "primary text",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: true,
    },
  ];

  return (
    <div className="flex flex-col pt-20 pb-20 px-10" id="projects">
      <div className="text-2xl font-bold">Projects</div>{" "}
      <div className="flex flex-wrap justify-center pt-10 gap-x-10 gap-y-24">
        {projects.map((project) => (
          <CustomCard key={project.title as string} cardData={project} />
        ))}
      </div>
    </div>
  );
}

function Certifications() {
  const certifications: CardData[] = [
    {
      imageUrl: p3.src,
      title: "Project 1",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: false,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: true,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: true,
    },
    {
      imageUrl: p3.src,
      title: "Project 1",
      description: "Detailed description...",
      redirectUrl: "https://your-project-url.com",
      detailed: false,
    },
  ];

  return (
    <div className="flex flex-col pt-10 px-10" id="certifications">
      <div className="text-2xl font-bold">certifications</div>{" "}
      <div className="flex flex-wrap justify-center pt-10 gap-x-10 gap-y-24">
        {certifications.map((certification) => (
          <CustomCard
            key={certification.title as string}
            cardData={certification}
          />
        ))}
      </div>
    </div>
  );
}
