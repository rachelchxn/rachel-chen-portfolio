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
        <div className={styles.sectionB}>
          <h3>From Just an Idea...</h3>
          <p>
            In the Onova summer cottage sprint of 2022, an idea was born: an
            all-in-one hackathon management platform for onova to use in client
            events.
          </p>
          <p>
            Onova is an innovation consulting company that organizes global
            hackathons and sprints for fortune 500 companies. throughout the
            years, the team has found trouble with integrating multiple third
            party services for running their events. feedback directly from
            participants and judges has made it clear that it is frustrating and
            confusing to navigate the various different platforms used for
            hosting virtual events, event information, and team communication.
          </p>
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
            <h5>Hopin</h5>
            <h5>Agorize</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
