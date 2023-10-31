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
          <Link href={"/design"} className={styles.backlink}>
            <p className={styles.backarrow}>{"<- "}</p>
            <p>Back to Projects</p>
          </Link>
          <img
            className={styles.cover}
            src="/thecups-mockup.png"
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
              <h2>Frozen Dessert-On-Demand for Everyone</h2>
              <p>
                The Cups, a cafe that specializes in Korean shaved ice, attracts
                youth and families alike. Based in the Greater Toronto Area, the
                business hopes to provide more convenience and accessibility to
                its customers through a mobile ordering app. This is a concept
                project I used to learn and develop UX skills. Although it was a
                learning process, I am proud of the results and outcomes of the
                journey.
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
        <div className={styles.sectionBgrid}>
          <div>
            <h3>The Problem:</h3>
            <p>
              Customers find safety and comfort in their own homes; they need
              the convenience of ordering a sweet treat from anywhere.
            </p>
          </div>
          <div>
            <h3>The Solution:</h3>
            <p>
              A mobile app for The Cups that allows customers to easily order
              customized drinks and desserts.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h3>What Do Our Users Need?</h3>
          <p>
            I began the project by understanding the user and their pain points.
            To do this, I conducted user research, created personas, made user
            journey maps, and conducted a competitor analysis.
          </p>
          <div className={styles.vFlex}>
            <h4>Target User:</h4>
            <p>
              The primary user group is regular food ordering app users, aged
              18-60.
            </p>
          </div>
        </div>
        <div className={styles.sectionB}>
          <h3>User Pain Points</h3>
          <div className={styles.points}>
            <div className={styles.point}>
              <h5>1 - Health & Safety</h5>
              <p>
                With the ongoing pandemic and government restrictions, going out
                for food has become a struggle.
              </p>
            </div>
            <div className={styles.point}>
              <h5>2 - Time Convenience</h5>
              <p>
                Busy students, workers, and parents have difficulty finding time
                to travel to cafes.
              </p>
            </div>
            <div className={styles.point}>
              <h5>3 - Dietary Restrictions</h5>
              <p>
                Those with allergies, intolerances, and specific food
                preferences often struggle to find the information they need
                when ordering food.
              </p>
            </div>
          </div>
          <h3>User Personas</h3>
          <img
            style={{
              width: "100%",
            }}
            src="/thecups-personas.png"
          />
        </div>
        <div className={styles.section}>
          <h3>What Path Will Users Take?</h3>
          <img
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0px 4px 12px 0px rgba(162, 158, 173, 0.15);",
            }}
            src="/thecups-flow.png"
          />
        </div>
        <div className={styles.sectionB}>
          <h3>Wireframes</h3>
          <img
            style={{
              width: "100%",
            }}
            src="/thecups-wireframes.png"
          />
        </div>
        <div className={styles.section}>
          <h3>What do the users think?</h3>
          <p>
            Using the low-fidelity prototype made from wireframes, I conducted
            an unmoderated usability study with 5 participants. The findings
            were used to refine the app design for optimal user experience.
          </p>
          <div className={styles.grid}>
            <div>
              <h5>RESEARCH QUESTIONS</h5>
              <ol>
                <li>Are users able to customize and order what they want?</li>
                <li>What components and features might confuse users?</li>
                <li>What frustrations and endpoints do they come to?</li>
              </ol>
            </div>
            <div>
              <h5>FINDINGS</h5>
              <ol>
                <li>Users appreciate and use dietary tags.</li>
                <li>
                  The order confirmation is not comprehensive enough for most.
                </li>
                <li>
                  The cart can be hard to find and users need verification that
                  they added something to cart.
                </li>
              </ol>
            </div>
          </div>
          <div>
            <h5>CHANGES</h5>
            <p>
              Based on the research findings, I made the necessary adjustments
              to the design. For details on iterations and rationales, please
              view{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://docs.google.com/presentation/d/1IC7Ma666k5TOn4qmR0pRzPBAp8Fa9dvKYho0LasNzxs/edit?usp=sharing"
              >
                my process deck
              </a>
              .
            </p>
          </div>
        </div>
        <div className={styles.sectionB}>
          <h3>The Visual Style</h3>
          <img
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0px 4px 12px 0px rgba(162, 158, 173, 0.15);",
            }}
            src="/thecups-styleguide.png"
          />
          <div></div>
          <div></div>
          <h3>The Prototype</h3>
          <img
            style={{
              width: "80%",
              margin: "auto",
            }}
            src="/thecups-mockups.png"
          />
        </div>
        <div className={styles.sectionGrid}>
          <img
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0px 4px 12px 0px rgba(162, 158, 173, 0.15);",
            }}
            src="/thecups-learn.png"
          />
          <div>
            <h3>What I learned</h3>
            <p>
              Usability above all! When designing the dietary tags, I wanted to
              keep them all black and use initials (i.e. “GF” for gluten-free)
              to keep the UI consistent and clean. However, I found that it was
              hard to distinguish the icons and that they would not be ideal for
              those using the app in a different language. I decided to use
              visual, colored icons to make the design more accessible, which is
              crucial especially for situations where the users’ safety is at
              risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
