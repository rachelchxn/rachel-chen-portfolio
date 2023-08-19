import Image from "next/image";
import styles from "./page.module.scss";
import Navigation from "@/components/navigation";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className={styles.vFlex}>
          <div>
            <h1>I create meaningful</h1>
            <h1>
              human
              <img
                src="main-arrow.svg"
                alt="<->"
                className={styles.mainArrow}
              />
              tech connections
            </h1>
          </div>
          <div>
            <p className={styles.subheading}>
              I’m a product designer with a burning passion for building
              high-impact experiences with technology. I’m currently scaling
              products for Fortune 500’s at Onova, developing B2B AI solutions,
              and bringing fun ideas to life through code.
            </p>
          </div>
          <div className={styles.hFlex}>
            <Link className={styles.block} href={"/dev"}>
              <img className={styles.image} src="/dev-work.svg" />
              <h4 className={styles.blockLabel}>Dev Work</h4>
              <Image
                className={styles.arrow}
                src="arrow.svg"
                alt="->"
                width={32}
                height={32}
              />
            </Link>
            <Link className={styles.block} href={"/design"}>
              <img className={styles.image} src="/design-work.svg" />
              <h4 className={styles.blockLabel}>Design Work</h4>
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
