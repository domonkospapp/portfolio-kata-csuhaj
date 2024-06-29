import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home({
  params: { id },
  searchParams: { imageCount },
}: {
  params: { id: string };
  searchParams: { imageCount: string };
}) {
  console.log(imageCount);
  if (!imageCount || Number(imageCount) < 1) {
    return (
      <div>
        <BackButton />
        <p className="text-center text-4xl p-4">404 Not Fount</p>
      </div>
    );
  }

  return (
    <main className="">
      <BackButton />
      {Array(Number(imageCount))
        .fill(0)
        .map((e, i) => (
          <Image
            key={i}
            src={`/works/${id}/${i + 1}.png`}
            alt="Kata Csuhaj"
            width={500}
            height={500}
            className="w-full"
          />
        ))}
      <GoUpButton />
    </main>
  );
}

const BackButton = () => (
  <Link href="/" className="fixed">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-8 m-2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  </Link>
);

const GoUpButton = () => (
  <Link href="#top" className="float-end m-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  </Link>
);
