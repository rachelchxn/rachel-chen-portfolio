"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { fun } from "../../public/data/fun.json";
import Image from "next/image";

export default function FunPage() {
  return (
    <div className="flex flex-col p-6 w-full items-center gap-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full max-w-[1600px] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 py-12"
        >
          <h1 className="max-w-4xl">
            I lose sleep doing hackathons, design sprints, & silly little side
            quests.
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="flex flex-col gap-2">
              <h4>Currently</h4>
              <p className="">
                Leading design{" "}
                <span>
                  <a
                    href="https://hackwestern.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Hack Western
                  </a>
                </span>
                , learning{" "}
                <span>
                  <a
                    href="https://svsd.school"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @SVSD
                  </a>
                </span>
                , and perfecting my matcha lattes.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {fun.map((fun) => (
            <Link
              key={fun.title}
              href={fun.link}
              className="group block transition-all duration-300 ease-in-out !opacity-100"
              data-cursor={fun.data}
            >
              <div className="flex flex-col gap-2">
                <div className="relative w-full aspect-[16/9] border-1 border-foreground/10 overflow-hidden transition-all duration-300 ease-in-out group-hover:border-primary box-border">
                  <Image
                    src={fun.image}
                    alt={fun.title}
                    className="object-cover w-full h-full"
                    fill
                  />
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-300 ease-in-out group-hover:bg-background/20" />
                </div>
                <div className="flex flex-col gap-0.5 mt-1 transition-colors duration-300 ease-in-out">
                  <h3 className="transition-colors duration-300 ease-in-out group-hover:text-primary">
                    {fun.description}
                  </h3>
                  <h4 className="transition-colors duration-300 ease-in-out group-hover:!text-primary/70">
                    {fun.title} • {fun.tag}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
