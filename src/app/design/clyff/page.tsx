"use client";
import styles from "./clyff.module.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Clyff() {
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
            src="/earth-image.svg"
            alt="Mockup of Earth"
          />
          <div className={styles.overview}>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h5>Timeline</h5>
                <p>June 2021 - March 2022</p>
              </div>
              <div className={styles.detail}>
                <h5>Role</h5>
                <p>Visual & UX Designer, Founder, Lead Developer</p>
              </div>
              <div className={styles.detail}>
                <h5>Scope</h5>
                <p>
                  User Research, Brand Identity, Illustration, UX / UI Design,
                  Project Management
                </p>
              </div>
              <div className={styles.detail}>
                <h5>Team</h5>
                <p>1 Designer/Developer</p>
              </div>
            </div>
            <div className={styles.title}>
              <h2>A Space to Find People Who Love What You Love</h2>
              <p>
                Clyff is a social networking and team collaboration platform
                that encourages youth to meet like-minded people and work
                together on passion projects. <br /> <br />
                In high school, I found that all my peers were caught up in
                school work that is not particularly enjoyable. Most have
                interests and passions outside of school but do not have the
                time, motivation, or suitable people with which to carry out
                their big ideas. Thus, Clyff was born.
              </p>
              <Link
                href={
                  "https://www.figma.com/proto/6pKIwSfdwgjJUDcXI1Av3g/Clyff-Prototype?page-id=0%3A1&type=design&node-id=604-1385&viewport=154%2C112%2C0.03&t=Mg7k15smKocW0g8R-1&scaling=min-zoom&starting-point-node-id=604%3A1385&mode=design"
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
              More than ever, young people are overwhelmingly stressed with
              school and their early careers, rarely finding time for doing what
              they love.
            </p>
          </div>
          <div>
            <h3>The Solution:</h3>
            <p>
              A web application that allows students and young professionals to
              people who share their interests and work together on projects
              using collaboration tools.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <p>
            This page is still a work-in-progress, but please check out my case
            study deck:
          </p>
          <Link
            href={
              "https://docs.google.com/presentation/d/1QiUpbJPX08RuPKUkBN6P046Whne6uRNqXAmUwU4TkbE/edit?usp=sharing"
            }
            target="_blank"
          >
            <button>
              View Deck{" "}
              <Image src="/arrow.svg" alt={"->"} width={18} height={18}></Image>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
