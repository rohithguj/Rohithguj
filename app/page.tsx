import p3 from "./../public/p3.png";
import FlippingText from "./Components/FlippingText";
import { NavBtn } from "./Components/CustomBtn";
import CustomCard from "./Components/CustomCard";
import { CardData } from "./Types/CardData";
import Logos from "./Components/Logos";

export default function Home() {
  return (
    <div id="home">
      <Nav />
      <div className="px-10">
        <HomeData />
        <Work />
        <Projects />
        <Certifications />
        <Education />
        <End />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="inset-x-0 top-0 flex justify-between bg-purple-900/20 z-50 backdrop-filter backdrop-blur-lg sticky">
      <div className="items-center flex pl-2">
        <Logos />
      </div>
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
    <div
      className="flex w-100 flex-wrap items-center "
      style={{ height: "calc(100vh - 10px)" }}
    >
      <div className="w-2/5 mx-10">
        <div>
          <div className="py-5 text-wrap text-purple-800">
            <FlippingText textData={textData1} interval={2500} />
          </div>
          <div className="py-5 text-wrap text-purple-800">
            <FlippingText textData={textData2} interval={2500} />
          </div>
        </div>
      </div>
      <div className="min-w-96">{/* <TechnicalSkills /> */}</div>
    </div>
  );
}

// export function TechnicalSkills() {
//   const images = [
//     {
//       id: 1,
//       src: p3.src,
//       alt: "Image 1",
//     },
//     {
//       id: 2,
//       src: "/path-to-your-image/image2.jpg",
//       alt: "Image 2",
//     },
//   ];
//   return(<div></div>)
//   // return <Carousel images={images} />;
// }

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

function Education() {
  const Educations: CardData[] = [
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
      <div className="text-2xl font-bold">Education</div>{" "}
      <div className="flex flex-wrap justify-center pt-10 gap-x-10 gap-y-24">
        {Educations.map((Education) => (
          <CustomCard key={Education.title as string} cardData={Education} />
        ))}
      </div>
    </div>
  );
}

function End() {
  return (
    <div className="border-t-2 mt-20 border-slate-100 pb-10">
      <div className="pt-10 flex justify-between">
        <div>
          <div className="text-xs text-slate-500">G Sree Rohith Chowdary</div>
          <div className="pt-1 text-xs text-slate-500">
            Email: sreerohit2004@gmail.com
          </div>
          <div className="pt-1 text-xs text-slate-500">
            Conct: +91 9347011103
          </div>
        </div>
        <div className="items-center">
          <Logos />
        </div>
      </div>
    </div>
  );
}
