"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col p-6 w-full items-center gap-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-between w-full max-w-[1600px] gap-12 min-h-[calc(100vh-120px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 py-12"
        >
          <h1 className="max-w-4xl">
            I&apos;m a designer, developer, & dancer, making room for all the
            joys of life.
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="flex flex-col gap-2">
              <p className="">
                When I&apos;m not fulfilling by duties as a computer science +
                business student at Western University, I&apos;m:
              </p>
              <ul className="list-disc list-inside pl-3 text-foreground-light">
                <li>leading student clubs in the tech space</li>
                <li>building side projects</li>
                <li>searching for food</li>
                <li>dancing, dancing, & dancing</li>
              </ul>
              <p>
                I love making new friends! Reach out on{" "}
                <span>
                  <a
                    href="https://www.linkedin.com/in/rachel-jiayi-chen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </span>{" "}
                or by{" "}
                <span>
                  <a href="mailto:rachelc0715@gmail.com">email</a>
                </span>
                . I&apos;m trying to become an{" "}
                <span>
                  <a href="https://x.com/racheljychen">X </a>
                </span>
                person, too.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="grid grid-cols-3 lg:grid-cols-6 gap-2"
        >
          {[
            "/about/about1.png",
            "/about/about2.png",
            "/about/about3.png",
            "/about/about4.png",
            // "/about/about5.png",
            "/about/about6.png",
            "/about/about7.png",
          ].map((src, index) => (
            <div
              key={src}
              className="relative w-full aspect-[1/1] border-1 border-foreground/10 overflow-hidden  "
            >
              <Image
                src={src}
                alt={`About image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
