import Image from "next/image";
import styles from "./design.module.scss";
import Navigation from "@/components/navigation";
import ProjectBlock from "@/components/project-block";
import Footer from "@/components/footer";

export default function Dev() {
  return (
    <main className={styles.main}>
      <div className={styles.projects}>
        <div className={styles.header}>
          <h2>I code.</h2>
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
        />
        <ProjectBlock
          title="PokerGPT"
          description="The World’s First AI-Powered Poker Coach"
          tags={["UX Design", "Brand Design", "Front-End Development"]}
          imageURL="/pokergpt-image.svg"
          order={false}
          colour="#E5DEF8"
        />
        <ProjectBlock
          title="The Cups"
          description="Frozen Dessert-On-Demand for Everyone"
          tags={["UX Design", "UI Design"]}
          imageURL="/thecups-image.svg"
          order={true}
          colour="#FCE2E7"
        />
      </div>
    </main>
  );
}
