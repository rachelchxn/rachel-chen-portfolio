// import Image from "next/image";
import styles from "./earth.module.scss";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Earth() {
  return (
    <div>
      <div className={styles.navWrap}></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <img src="/earth-image.svg" alt="Mockup of Earth" />
          <div className={styles.overview}>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h5>Timeline</h5>
                <p>Mar - Aug 2023</p>
              </div>
              <div className={styles.detail}>
                <h5>Role</h5>
                <p>Lead Designer, Supporting Developer </p>
              </div>
              <div className={styles.detail}>
                <h5>Scope</h5>
                <p>UX Design</p>
              </div>
              <div className={styles.detail}>
                <h5>Team</h5>
                <p>1 Designer</p>
                <p>2 Developers</p>
                <p>1 PM</p>
              </div>
            </div>
            <div className={styles.title}>
              <h2>A Hackathon Management Platform for Fortune 500 Companies</h2>
              <p>
                I’m a product designer with front-end development skills and a
                background in branding design. I have a burning passion for
                creating intuitive experiences in high-impact products.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionB}>
          <h3>From Just an Idea...</h3>
        </div>
      </div>
    </div>
  );
}
