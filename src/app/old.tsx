import Image from "next/image";
import styles from "./page.module.scss";
import Navigation from "@/components/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <div className={styles.body}>
        <div className={styles.mainLeft}>
          <div className={styles.vFlexMain}>
            <div>
              <h1>I create</h1>
              <h1>meaningful</h1>
              <h1>
                human{" "}
                <img
                  src="main-arrow.svg"
                  alt="->"
                  className={styles.mainArrow}
                />
                tech
              </h1>
              <h1>connections</h1>
            </div>
            <div>
              <p className={styles.subheading}>
                I’m a product designer with a burning passion for building
                high-impact experiences with technology. I’m currently scaling
                products for Fortune 500’s at Onova, developing B2B AI
                solutions, and bringing fun ideas to life through code.
              </p>
            </div>
          </div>
          <div className={styles.vFlex}>
            <div className={styles.mainLink}>
              <h4>Learn more about me</h4>
              <Image src="arrow.svg" alt="->" width={32} height={32} />
            </div>
            <div className={styles.mainLink}>
              <h4>Find me elsewhere</h4>
              <div className={styles.iconList}>
                <Image
                  src="linkedin-icon.svg"
                  alt="->"
                  width={24}
                  height={24}
                />
                <Image src="devpost-icon.svg" alt="->" width={24} height={24} />
                <Image src="github-icon.svg" alt="->" width={24} height={24} />
                <Image src="email-icon.svg" alt="->" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainRight}>
          <div className={styles.hFlex}>
            <Link className={styles.block} href={"/design"}>
              <img className={styles.image} src="/earth-image.svg" />
              <h4 className={styles.blockLabel}>Design Work</h4>
              <Image
                className={styles.arrow}
                src="arrow.svg"
                alt="->"
                width={32}
                height={32}
              />
            </Link>
            <div className={styles.fillerBlock}></div>
          </div>
          <div className={styles.hFlex}>
            <div className={styles.fillerBlock}></div>
            <Link className={styles.block} href={"/dev"}>
              <img className={styles.image} src="/earth-image.svg" />
              <h4 className={styles.blockLabel}>Dev Work</h4>
              <Image
                className={styles.arrow}
                src="arrow.svg"
                alt="->"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
