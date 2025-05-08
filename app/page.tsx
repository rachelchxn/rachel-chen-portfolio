import Image from "next/image";
import projects from "@/public/data/projects.json";

export default function Home() {
  return (
    <div className="flex flex-col p-6 py-12 gap-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12">
        <h1 className="max-w-4xl">
          I’m Rachel, a product builder who loves bringing ideas to life with
          {` `}
          <span className="whitespace-nowrap">
            <span
              className={
                " italic relative text-primary after:absolute after:bottom-[0.05em] after:left-[1px] after:right-[7px] after:h-[3px] after:bg-[var(--primary)]"
              }
            >
              desi
            </span>
            <span className={"italic "}>g</span>
            <span
              className={
                "italic relative text-primary after:absolute after:bottom-[0.05em] after:left-0 after:w-full after:h-[3px] after:bg-[var(--primary)]"
              }
            >
              n {``}
            </span>
          </span>
          <span className="whitespace-nowrap italic relative text-primary after:absolute after:bottom-[0.05em] after:left-0 after:w-full after:h-[3px] after:bg-[var(--primary)]">
            + code
          </span>
          .
        </h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col gap-2">
            <h4>Soon</h4>
            <p className="">
              Engineering{" "}
              <span>
                <a
                  href="https://bloomberg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Bloomberg
                </a>
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Previously</h4>
            <p className="">
              Designed & engineered{" "}
              <span>
                <a
                  href="https://1password.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @1Password
                </a>
              </span>
              ,{" "}
              <span>
                <a
                  href="https://rbc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @RBC
                </a>
              </span>
              , and{" "}
              <span>
                <a
                  href="https://onova.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Onova
                </a>
              </span>
              .
            </p>
          </div>
        </div>

        <div className="h-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-6">
          {projects.projects.map((project) => (
            <div key={project.title} className="flex flex-col gap-2">
              <img src={project.image} alt={project.title} className="w-full" />
              <div className="flex flex-col gap-1">
                <h3>{project.heading}</h3>
                <h4>
                  {project.title} • {project.tag}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
