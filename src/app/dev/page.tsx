import Image from "next/image";
import styles from "./dev.module.scss";
import Navigation from "@/components/navigation";
import ProjectBlock from "@/components/project-block";
import Footer from "@/components/footer";
import DevCard from "@/components/devCard";

const projects = [
  {
    title: "ASL Translator",
    description: "Bridging Communication Gaps With Machine Learning and Computer Vision",
    tags: ["AI", "Computer Vision", "Python"],
    imageURL: "dev-work.svg",
    colour: "#E2EDF6"
  },
  {
    title: "ASL Translator",
    description: "Bridging Communication Gaps With Machine Learning and Computer Vision",
    tags: ["AI", "Computer Vision", "Python"],
    imageURL: "dev-work.svg",
    colour: "#E2EDF6"
  },
  {
    title: "ASL Translator",
    description: "Bridging Communication Gaps With Machine Learning and Computer Vision",
    tags: ["AI", "Computer Vision", "Python"],
    imageURL: "dev-work.svg",
    colour: "#E2EDF6"
  }
]

export default function Dev() {
  return (
    <main className={styles.main}>
      <div className={styles.projects}>
        <div className={styles.header}>
          <h2>I develop things that matter.</h2>
          <p>
            From tackling mental illness, solving sustainability issues, and taking on real business problems, I code for the potential technology has to aid and enrich our lives. Also, it’s fun.
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
            />
          ))}
        </div>
      </div>
    </main>
  );
}
