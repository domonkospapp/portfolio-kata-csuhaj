import Image from "next/image";
import fs from "fs";
import path from "path";
import BackButton from "@/components/BackButton";
import { GoUpButton } from "@/components/GoUpButton";

export default function Home({
  params: { id },
  searchParams: { margin },
}: {
  params: { id: string };
  searchParams: { margin: string };
}) {
  const images = loadImages(id);

  return (
    <main>
      <BackButton />
      <div className="fixed h-full w-full text-4xl flex justify-center items-center -z-20">
        LOADING...
      </div>
      <div className={margin && "max-w-screen-md mx-auto"}>
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt="Kata Csuhaj"
            width={1200}
            height={1200}
            priority={index === 0}
            className={`w-full ${margin && "py-4 md:py-18"}`}
            placeholder="blur"
            blurDataURL={"public/img-placeholder.gif"}
          />
        ))}
      </div>
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
