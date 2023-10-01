// import Image from "next/image";
import styles from "./pokergpt.module.scss";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function PokerGPT() {
  return (
    <div>
      <div className={styles.navWrap}></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <img src="/pokergpt-image.svg" alt="Mockup of Earth" />
          <div className={styles.overview}>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h5>Timeline</h5>
                <p>May 2023 - Present</p>
              </div>
              <div className={styles.detail}>
                <h5>Role</h5>
                <p>Founding Designer, Front-End Developer </p>
              </div>
              <div className={styles.detail}>
                <h5>Scope</h5>
                <p>UX Design, Brand Design, Front-End Development</p>
              </div>
              <div className={styles.detail}>
                <h5>Team</h5>
                <p>1 Designer</p>
                <p>2 Developers</p>
                <p>1 PM</p>
              </div>
            </div>
            <div className={styles.title}>
              <h2>The World’s First AI-Powered Poker Coach</h2>
              <p>
                To take poker seriously means needing a professional poker
                coach. But getting a coach is expensive and inaccessible to
                many. What if there was a way to solve this problem with the
                emerging opportunity of generative AI?
              </p>
              <Link href={"https://www.pokergpt.app"} target="_blank">
                <button>Visit Site</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sectionB}>
          <h5 style={{ textAlign: "center", width: "100%" }}>
            Full case study coming soon!
          </h5>
        </div>
      </div>
    </div>
  );
}
