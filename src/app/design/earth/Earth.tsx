import styles from "./earth.module.scss";

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
        <div className={styles.sectionBgrid}>
          <img />
          <h3>From Just an Idea...</h3>
          <h4>
            In the Onova summer cottage sprint of 2022, an idea was born: an
            all-in-one hackathon management platform for onova to use in client
            events.
          </h4>
          <p>
            Onova is an innovation consulting company that organizes global
            hackathons and sprints for fortune 500 companies. throughout the
            years, the team has found trouble with integrating multiple third
            party services for running their events. Feedback from participants
            and judges in post-event surveys has made it clear that it is
            frustrating and confusing to navigate the various different
            platforms used for hosting virtual events, event information, and
            team communication.
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
              <p>Navigating multiple applications and finding specific links</p>
            </div>
            <div className={styles.point}>
              <p>Disorganized communication from organizers</p>
            </div>
            <div className={styles.point}>
              <p>Inconsistency in judging processes</p>
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
            As part of the project, I redefined the flows and created new
            layouts based on the existing designs. Based on internal team
            feedback and my own discretion, I identified pages that needed
            restructured layouts and optimized UI's.
          </p>
          <h4>Here are a few examples:</h4>
          <p>
            {" "}
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
            of our beta launch. During the hackathon, I conducted user
            interviews, alongside the PM, gathering valuable feedback that would
            inform our next steps in Earth’s development process.
          </p>
        </div>
      </div>
    </div>
  );
}
