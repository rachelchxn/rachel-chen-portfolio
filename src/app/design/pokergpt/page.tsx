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
          <Link href={"/design"} className={styles.backlink}>
            <p className={styles.backarrow}>{"<- "}</p>
            <p>Back to Projects</p>
          </Link>
          <img
            className={styles.cover}
            src="/pokergpt-image.svg"
            alt="Mockup of Earth"
          />
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
                <button>
                  Visit Site{" "}
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
          <h3>The Opportunity</h3>
          <p>
            Intermediate to advanced poker players often seek the guidance of a
            coach to enhance their skills. However, such coaches are not always
            readily available.
          </p>
          <p>
            Our team embarked on a mission to create an AI poker coach,
            recognizing the potential of generative AI, particularly ChatGPT, as
            a inflection for our business. During development, we found that the
            evolving advancements in prompt chaining played a crucial role in
            shaping this project.
          </p>
          <p>
            It's important to note that our company was facing challenges due to
            the economic recession at the time, necessitating a rapid source of
            revenue. This posed a significant challenge: we needed to launch
            within a few days and create the Minimum Viable Product (MVP) in
            just a few weeks.
          </p>
        </div>
        <div className={styles.section}>
          <h3>Pain Points</h3>
          <div className={styles.points}>
            <div className={styles.point}>
              <p>
                Poker solvers are hard to interpret and usually require pros,
                like coachs, to comprehend
              </p>
            </div>
            <div className={styles.point}>
              <p>
                Poker coaching is expensive and not always readily accessible or
                convenient
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionB}>
          <h3>Exising Solutions</h3>
          <p>
            To kick-off, we conducted research on current solutions for poker
            learning and assistance.
          </p>
          <div className={styles.points}>
            <div className={styles.pointB}>
              <h5>Poker Solvers</h5>
              Like Ruse AI and Deepsolver
            </div>
            <div className={styles.pointB}>
              <h5>Online Courses</h5>
              Mostly Beginner and Intermediate Players
            </div>
            <div className={styles.pointB}>
              <h5>Poker Boot Camp</h5>
              Intensive Training Over a Few Days to Weeks
            </div>
          </div>
        </div>
        <div className={styles.sectionGrid}>
          <img src="/poker.png" />
          <div className={styles.vFlex}>
            <h3>Empathizing with Users</h3>
            <p>
              Starting this project, one glaring hurdle stood out: I barely knew
              anything about poker. To design a tool genuinely useful for our
              target users, I had to walk a mile in their shoes. So, I embarked
              on a crash course, learning the basics of poker and engaging in
              games with my team. Additionally, I maintained regular
              consultations with our product owner, tapping into his insights as
              a semi-professional player, ensuring that our AI coach would be
              both intuitive and impactful for users.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sectionBgrid}>
        <div className={styles.vFlex}>
          <h3>Gathering Requirements and Defining the Scope</h3>
          <p>
            Given our tight deadline, it became imperative to define a clear-cut
            MVP. Our CEO, a key stakeholder who happens to be both an AI
            enthusiast and a semi-professional poker player, had already
            validated the technical feasibility and market demand for our idea.
            As the developers dived deep into the AI model's intricacies, I took
            on the task of designing the overall user flow and sketching out
            wireframes.
          </p>
          <p>
            The wireframes went through a few iterations as we really had to
            boil it down to just the necessary elements, adhering to strictly
            what was needed for the mvp
          </p>
        </div>
        <div></div>
        <img src="/pokergpt_wireframes.png" />
      </div>
      <div className={styles.section}>
        <h3>Visual Branding</h3>
        <p>
          We needed something that screamed modern, exciting, yet professional.
          I opted for a minimalist branding with light and vibrant colours,
          differentiating PokerGPT from existing poker solutions and offering a
          friendly and welcoming interface.
        </p>
        <img
          style={{
            width: "100%",
            borderRadius: "32px",
            boxShadow: "0px 4px 12px 0px rgba(162, 158, 173, 0.15);",
          }}
          src="/pokergpt-design-system.png"
        />
      </div>
      <div className={styles.sectionB}>
        <h3>A look at the app...</h3>
        <img
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0px 4px 12px 0px rgba(162, 158, 173, 0.15);",
          }}
          src="/pokergpt-shot.png"
        />
        <div className={styles.grid}>
          <img
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
            src="/pokergpt-card.png"
          />
          <div>
            <p>Easy user authentication with magic links. No passwords.</p>
          </div>
        </div>
        <div className={styles.grid}>
          <div>
            <p>
              Quick and convenient inputs through the hand history template
              feature.
            </p>
          </div>
          <img
            style={{
              width: "100%",
              borderRadius: "16px",
              border: "1px solid lightgrey",
            }}
            src="/pokergpt-gif.gif"
          />
        </div>
      </div>
      <div className={styles.section}>
        <h3>What's Next</h3>
        <p>
          PokerGPT is heading to market by the end of the year! We're currently
          running beta tests with selected waitlist members. Stay Tuned!
        </p>
      </div>
    </div>
  );
}
