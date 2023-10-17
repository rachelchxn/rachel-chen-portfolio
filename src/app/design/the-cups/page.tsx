// import Image from "next/image";
import styles from "./the-cups.module.scss";
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
          <img
            className={styles.cover}
            src="/thecups-image.svg"
            alt="Mockup of The Cups App"
          />
          <div className={styles.overview}>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h5>Timeline</h5>
                <p>June - July 2022</p>
              </div>
              <div className={styles.detail}>
                <h5>Role</h5>
                <p>Sole Designer (Concept Project)</p>
              </div>
              <div className={styles.detail}>
                <h5>Scope</h5>
                <p>UX Design, UI Design</p>
              </div>
              <div className={styles.detail}>
                <h5>Team</h5>
                <p>1 Designer</p>
              </div>
            </div>
            <div className={styles.title}>
              <h2>The World’s First AI-Powered Poker Coach</h2>
              <p>
                The Cups is a cafe that specializes in Korean shaved ice,
                attracting youth and families alike. What if there was a way to
                bring more convenience and accessibility to its customers? A way
                to bring this delicious treat to anyone and everyone?
              </p>
              <Link
                href={
                  "https://www.figma.com/proto/gk5wAsDAEJr9IHUiGVT8c5/Google-UX-Certificate-The-Cups-Wireframe-Prototype?node-id=88%3A3350&scaling=scale-down&starting-point-node-id=97%3A6285&show-proto-sidebar=1"
                }
                target="_blank"
              >
                <button>
                  Visit Prototype{" "}
                  <Image
                    src="/arrow.svg"
                    alt={"->"}
                    width={18}
                    height={18}
                  ></Image>
                </button>
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
