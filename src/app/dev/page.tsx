import Image from "next/image";
import styles from "./dev.module.scss";
import Navigation from "@/components/navigation";
import ProjectBlock from "@/components/project-block";
import Footer from "@/components/footer";
import DevCard from "@/components/devCard";

const projects = [
  {
    title: "ASL Translator",
    description:
      "Bridging Communication Gaps With Machine Learning and Computer Vision",
    tags: ["AI", "Computer Vision", "Python"],
    imageURL: "asl-translator.svg",
    colour: "#E2EDF6",
    disabled: false,
  },
  {
    title: "RachelAI",
    description:
      "Turning Myself into a Talking AI Avatar Upon a Fortune 500 Client’s Request",
    tags: ["AI", "NLP", "Stable Diffusion", "Google Cloud"],
    imageURL: "rachelai.svg",
    colour: "#D9F0E2",
    disabled: false,
  },
  {
    title: "TL;DW",
    description: "Making Learning Easier with a Video -> Notes Web App",
    tags: ["AI", "NLP", "Python", "JS", "Cohere"],
    imageURL: "tldw.svg",
    colour: "#E0E7E6",
    disabled: false,
  },
  {
    title: "Preventing Booking Cancellations",
    description:
      "Merging Data Science and Business Strategy to Retain Hotel Customers",
    tags: ["AI", "Data Science", "Data Visualization"],
    imageURL: "dataquest.svg",
    colour: "#EAEAF2",
    disabled: false,
  },
  {
    title: "Zensphere",
    description:
      "Relieving Triggers for those with Eating Disorders and Body Dysmorphia",
    tags: ["AI", "NLP", "Chrome Extension", "Cohere"],
    imageURL: "zensphere.svg",
    colour: "#ECDEF2",
    disabled: false,
  },
  {
    title: "Project Greensort",
    description: "Fighting Waste Contamination on Campus",
    tags: ["AI", "Computer Vision", "App Dev"],
    imageURL: "coming-soon.svg",
    colour: "#E5E4E4",
    disabled: true,
  },
];

export default function Dev() {
  return (
    <main className={styles.main}>
      <div className={styles.projects}>
        <div className={styles.header}>
          <h2>I develop things that matter.</h2>
          <p>
            From tackling mental illness, solving sustainability issues, and
            taking on real business problems, I code for the potential
            technology has to aid and enrich our lives. Also, it’s fun.
          </p>
        </div>
        <div className={styles.devGrid}>
          {projects.map((project) => (
            <DevCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageURL={project.imageURL}
              colour={project.colour}
              disabled={project.disabled}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
