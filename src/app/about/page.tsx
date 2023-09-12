import styles from "./about.module.scss";

export default function Dev() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headshot}>
          <img src="/pfp.svg" />
        </div>
        <div className={styles.vFlex}>
          <h3>Hey, I'm Rachel.</h3>
          <p>
            From tackling mental illness, solving sustainability issues, and
            taking on real business problems, I code for the potential
            technology has to aid and enrich our lives. Also, it’s fun.
          </p>
        </div>
      </div>
    </main>
  );
}
