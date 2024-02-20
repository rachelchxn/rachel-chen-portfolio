import Image from "next/image";
import styles from "./design.module.scss";
import Navigation from "@/components/navigation";
import ProjectBlock from "@/components/project-block";
import Footer from "@/components/footer";

export default function Design() {
  return (
    <main className={styles.main}>
      <div className={styles.projects}>
        <div className={styles.header}>
          <h2>I design human-centered digital solutions that scale.</h2>
          <p>
            I’m a product designer with front-end development skills and a
            background in branding design. I have a burning passion for creating
            intuitive experiences in high-impact products.
          </p>
        </div>
        <ProjectBlock
          title="Earth"
          description="A Hackathon Management Platform for Fortune 500 Companies"
          tags={["UX Design", "User Testing", "Front-End Development"]}
          imageURL="/earth-image.svg"
          order={true}
          colour="#E2EAFA"
          disabled={false}
        />
        <ProjectBlock
          title="PokerGPT"
          description="The World’s First AI-Powered Poker Coach"
          tags={["UX Design", "Brand Design", "Front-End Development"]}
          imageURL="/pokergpt-image.svg"
          order={false}
          colour="#E5DEF8"
          disabled={false}
        />
        <ProjectBlock
          title="The Cups"
          description="Frozen Dessert-On-Demand for Everyone"
          tags={["UX Design", "UI Design"]}
          imageURL="/thecups-mockup.png"
          order={true}
          colour="#FCE2E7"
          disabled={false}
        />
        <ProjectBlock
          title="RBC Design Thinking Program"
          description="A Community for New Parents to Support New Parents"
          tags={["UX Research", "UX Design", "UI Design"]}
          imageURL="/coming-soon.svg"
          order={false}
          colour="#E5E4E4"
          disabled={true}
        />
      </div>
    </main>
  );
}
