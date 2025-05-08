"use client";
import { useRouter } from "next/navigation";

export default function Tab({
  href,
  active = false,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div>
      {href.startsWith("https://") ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-pointer"
        >
          <h4
            className={`${
              active
                ? "text-[var(--primary)] !opacity-100 cursor-default"
                : "hover:!opacity-100"
            } cursor-pointer`}
          >
            {children}
          </h4>
        </a>
      ) : (
        <h4
          onClick={() => router.push(href)}
          className={`${
            active
              ? "text-[var(--primary)] !opacity-100 cursor-default"
              : "hover:!opacity-100"
          } cursor-pointer`}
        >
          {children}
        </h4>
      )}
    </div>
  );
}
