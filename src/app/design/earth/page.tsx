"use client";
import styles from "./earth.module.scss";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState } from "react";
import Link from "next/link";

export default function Earth() {
  const images = ["/earth_redefined_1.png", "/earth_redefined_2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div>
      <div className={styles.navWrap}></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <Link href={"/design"} className={styles.backlink}>
            <p className={styles.backarrow}>{"<- "}</p>
            <p>Back to Projects</p>
          </Link>

          <img src="/earth-image.svg" alt="Mockup of Earth" />
          <div className={styles.overview}>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h5>Timeline</h5>
                <p>Feb 2023 - Present</p>
              </div>
              <div className={styles.detail}>
                <h5>Role</h5>
                <p>Lead Designer, Supporting Developer </p>
              </div>
              <div className={styles.detail}>
                <h5>Scope</h5>
                <p>
                  UX Design, UI Design, User Testing, Site Architecture,
                  Front-End Development
                </p>
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
                Onova is an innovation consultancy that hosts large-scale,
                internal hackathons for some of the world's largest companies.
                After hearing out our past participants talk discuss the
                struggles with navigating multiple platforms for functions for
                team formation, project judging, and attending live events, we
                decided that there was a better way to do things. Hence, Earth
                was born -- an all-in-one innovation management platform.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionBgrid}>
          <img src="/onovafam.jpg" />
          <div className={styles.vFlex}>
            <h3>From Just an Idea...</h3>
            <h4>
              In the Onova summer cottage sprint of 2022, an idea was born: an
              all-in-one hackathon management platform for onova to use in
              client events.
            </h4>
            <p>
              Onova is an innovation consulting company that organizes global
              hackathons and sprints for fortune 500 companies. throughout the
              years, the team has found trouble with integrating multiple third
              party services for running their events. Feedback from
              participants and judges in post-event surveys has made it clear
              that it is frustrating and confusing to navigate the various
              different platforms used for hosting virtual events, event
              information, and team communication.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h3>Our Solution:</h3>
          <h4>
            An all-in-one platform for hosting large scale hybrid hackathons.
          </h4>
          <p>
            We set out to converge existing 3rd-party services into a one-stop
            destination for all innovation needs:
          </p>
          <div className={styles.converge}>
            <h5>Webex</h5>
            <div className={styles.line} />
            <h5>Hopin</h5>
            <div className={styles.line} />

            <h5>Agorize</h5>
          </div>
        </div>
        <div className={styles.sectionB}>
          <h3>Who Are The Users?</h3>
          <div>
            <h4>Event Organizers</h4>
            <p>
              The primary stakeholders of the project, the PM at the time, and
              other employees at my company were the target users for the
              admin-facing side of Earth. As someone who was not experienced
              with running large-scale corporate hackathons, I consulted
              regularly throughout the design process with my colleagues and
              managers to understand their pain points and validate design
              choices.
            </p>
          </div>
          <div>
            <h4>Participants, Judges, and Mentors</h4>
            <p>
              From the past 3 years of post event surveys, we gathered feedback
              on how the events were run and what the participants thought about
              them. Additionally, organizers provided insights from observing
              and interacting with users in previous events.
            </p>
          </div>
          <p></p>
          <p></p>
          <h3>Some Recurring Points of Frustration:</h3>
          <div className={styles.points}>
            <div className={styles.point}>
              <h5>Navigating multiple platforms and finding links</h5>
            </div>
            <div className={styles.point}>
              <h5>Disorganized communication from organizers</h5>
            </div>
            <div className={styles.point}>
              <h5>Inconsistency in judging processes</h5>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h3>Taking over from the previous designer</h3>
          <p>
            When I joined the project, I took over the design and development of
            Earth, which had already undergone several months of iterations.
            Unfortunately, there was a lack of clear scoping and no defined
            process in place, primarily due to the small team size. To address
            this, we worked diligently to adopt a stronger system and workflow.
            This included implementing regular project manager-designer syncs,
            conducting stakeholder design reviews, facilitating smooth developer
            handoffs, and organizing internal user testing sessions.
          </p>
        </div>
        <div className={styles.sectionB}>
          <h3>Redefining Flows</h3>
          <p>
            Taking over as the lead designer, I redefined the flows and created
            new layouts based on the existing designs. Based on internal team
            feedback and my knowledge of UX best practices, I identified pages
            that needed restructured layouts and optimized UI's.
          </p>
          <h4>Here are a few examples:</h4>
          <div className={styles.carousel}>
            <p
              className={currentIndex === 0 ? styles.disabled : ""}
              onClick={prevImage}
            >
              {"<"}
            </p>
            <div className={styles.imageContainer}>
              <div
                className={styles.imageSlider}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img src={src} alt={`Carousel ${index}`} />
                ))}
              </div>
            </div>
            <p
              className={
                currentIndex === images.length - 1 ? styles.disabled : ""
              }
              onClick={nextImage}
            >
              {">"}
            </p>
          </div>
          <p>
            To ensure that the design choices were well-informed, I conducted
            competitive research and noted best practices for specific design
            components. We iterated on our designs based on weekly internal
            design reviews with stakeholders and internal team user testing.
          </p>
        </div>
        <div className={styles.section}>
          <h3>Beta Launch!</h3>
          <p>
            When it came to testing and iterations, we reached a significant
            milestone with our Minimum Viable Product (MVP). We sponsored and
            supplied our platform to a student hackathon, which attracted over
            100 users. Fortunately, we encountered no major technical
            difficulties or complaints during this event, indicating the success
            of our beta launch.
          </p>
          <p>
            During the hackathon, I conducted user interviews, alongside the PM,
            gathering valuable feedback that would inform our next steps in
            Earth’s development process.
          </p>
          <div className={styles.eurekaGrid}>
            <img src="/earth_eureka_1.png" />
            <img src="/earth_eureka_2.png" />
          </div>
          <div></div>
          <h3>What We Learned From Our Users:</h3>
          <div className={styles.chart}>
            <div>
              <h5>Likes</h5>
              <ul>
                <li>
                  Home/Event Info Page are part of the site where all the action
                  happens
                </li>
                <li>Clear and intuitive navigation</li>
                <li>Visually appealing interface</li>
              </ul>
            </div>
            <div>
              <h5>Dislikes</h5>
              <ul>
                <li>No community aspect like Devpost</li>
                <li>
                  Schedule component was confusing and optimized for virtual
                  events
                </li>
              </ul>
            </div>
            <div>
              <h5>Improvements</h5>
              <ul>
                <li>Clearer flow after judging a project</li>
                <li>A built-in timer for judging projects</li>
                <li>Optimize the mobile experience</li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <div className={styles.sectionB}>
          <h3>A peek at Earth...</h3>
          <img
            style={{ width: "100%" }}
            src="/earth-shots.png"
            alt="screenshots of earth"
          />
        </div>
        <div className={styles.section}>
          <h3>Taking Earth to the Moon 🚀</h3>
          <p>
            Our company was approached with the opportunity to organize the 2023
            Google x Capgemini Generative AI Hackathon. This was Earth's first
            client event, taking on 1000+ users from Fortune 500 companies.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/YqDScWHR6Xc?si=wOUqF002SfDTBR8-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h3>Outcomes?</h3>
          <div className={styles.points}>
            <div className={styles.pointB}>
              <h5>Over 1,000 Active Users on the Platform</h5>
            </div>
            <div className={styles.pointB}>
              <h5>96% Satisfaction With the User Experience</h5>
            </div>
            <div className={styles.pointB}>
              <h5>9/10 Would Recommend Earth to a Friend</h5>
            </div>
          </div>
        </div>

        <div className={styles.sectionB}>
          <h3>What's Next?</h3>
          <p>
            While Earth began as a helpful tool to compliment Onova's innovation
            consulting services, we have bigger plans for the platform. As Earth
            transitions from consulting service upsell {"->"} standalone SaaS
            product, we are actively designing and building out features like a
            customizable CMS and restructuring the architecture to optimally
            support a range of customers on the platform. We can't wait to see
            where Earth lands next.
          </p>
        </div>
      </div>
    </div>
  );
}
