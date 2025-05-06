import Image from "next/image";

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
          <span className="relative text-primary after:absolute after:bottom-[0.05em] after:left-0 after:w-full after:h-[3px] after:bg-[var(--primary)]">
            + code
          </span>
          .
        </h1>
        <div className="flex flex-col md:flex-row  gap-12">
          <div className="flex flex-col gap-2">
            <h4>Soon</h4>
            <p className="">Engineering @Bloomberg</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Previously</h4>
            <p className="">Designed & engineered @1Password and @RBC.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
