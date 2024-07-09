import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import BackButton from "@/components/BackButton";

export default function Home({ params: { id } }: { params: { id: string } }) {
  const images = loadImages(id);
  return (
    <main>
      <BackButton />
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt="Kata Csuhaj"
          width={1200}
          height={1200}
          priority={index === 0}
          className="w-full"
          placeholder="blur"
          blurDataURL={"public/img-placeholder.gif"}
        />
      ))}
      <GoUpButton />
    </main>
  );
}

const loadImages = (id: string) => {
  const dirRelativeToPublicFolder = `/works/${id}`;

  const dir = path.resolve(`./public/works/${id}/`);

  const filenames = fs.readdirSync(dir);

  return filenames
    .map((name) => path.join("/", dirRelativeToPublicFolder, name))
    .sort();
};

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
