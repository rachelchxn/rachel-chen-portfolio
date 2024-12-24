import styles from "../app/page.module.scss";
import Link from "next/link";
import Image from "next/image";
import IconList from "./icon-list";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.homeBody}>
        <div className={styles.heroTitle}>
          <div className={styles.profileCard}>
            <Image
              className={styles.pfp}
              src="/pfp.png"
              width={128}
              height={128}
              alt={"rachel-chen"}
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <h2 style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Rachel Chen
              </h2>
              <p className="sm-p" style={{ marginBottom: "0" }}>
                Product Designer & Developer
              </p>
            </div>
          </div>
        </div>

        <p>
          I’m a 0 to 1 product designer who codes and builds products that
          empower ✨
        </p>

        <div className={styles.currently} style={{ maxWidth: "560px" }}>
          <h3>Currently...</h3>
          <div className={styles.list}>
            <div className={styles.bullet}>
              <img
                src="/shake.png"
                width={20}
                height={20}
                style={{ marginBottom: "-2px" }}
              />{" "}
              <p>
                {" "}
                Making networking casual with{" "}
                <span className={styles.url}>
                  <Link
                    href={"https://startchattin.vercel.app"}
                    target="_blank"
                  >
                    chattin
                    <img src="/arrow-dark.svg" width={20} height={20} />
                  </Link>
                </span>
              </p>
            </div>

            {/* <div className={styles.bullet}>
            <img
              src="/brain.png"
              width={20}
              height={20}
              style={{ marginTop: "-2px" }}
            />{" "}
            <p>
              making{" "}
              <span className={styles.url}>
                <Link href={"https://numeracyscreener.com/"} target="_blank">
                  {" "}
                  educational screening accessible
                  <img src="/arrow-dark.svg" width={20} height={20} />
                </Link>{" "}
              </span>
            </p>
          </div> */}

            <div className={styles.bullet}>
              <img
                src="/bio.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
              <p>
                Building the face of
                <span className={styles.url}>
                  <Link href={"https://www.mybiogenesis.com/"} target="_blank">
                    {" "}
                    Biogenesis
                    <img src="/arrow-dark.svg" width={20} height={20} />
                  </Link>
                </span>
              </p>
            </div>

            <div className={styles.bullet}>
              <img
                src="/plane.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
              <p>
                Designing hacker experiences at
                <span className={styles.url}>
                  <Link href={"https://hackwestern.com/"} target="_blank">
                    {" "}
                    Hack Western
                    <img src="/arrow-dark.svg" width={20} height={20} />
                  </Link>
                </span>
              </p>
            </div>
            <div className={styles.bullet}>
              <img
                src="/dance.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
              <p>Dancing on weeknights and hacking on weekends</p>
            </div>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <Link
            href={"https://www.linkedin.com/in/rachel-jiayi-chen/"}
            target="_blank"
          >
            <button>
              Let's Connect
              <Image
                src="./arrow.svg"
                alt={"->"}
                width={20}
                height={20}
                style={{ marginBottom: "-1px" }}
              />
            </button>
          </Link>
          <Link href={"/RachelChen_Resume.pdf"} target="_blank">
            <button className="btnSecondary">See My Resume</button>
          </Link>
        </div>
        <IconList />
        <div className={styles.footer}>
          {/* <p>
            Designed and built with <span>♥</span> by Rachel
          </p> */}
        </div>
      </div>
    </div>
  );
}
