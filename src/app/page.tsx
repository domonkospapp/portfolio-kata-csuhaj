import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-4">
      <p className="font-cairo text-7xl md:text-[9rem] -z-10 fixed top-20 md:top-20 text-orange-400">
        KATA
      </p>
      <Title>
        KATA
        <br />
        CSUHAJ
      </Title>
      <div className="grid sm:grid-cols-1 md:grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)]">
        <div className="col-span-1" />
        <div className="">
          <Image
            src="/thedesigner.png"
            alt="Kata Csuhaj"
            width={500}
            height={500}
            className="-mt-20 max-h-[50vh] md:max-h-[80vh] w-auto mx-auto"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 -mt-12 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className="flex col-span-1 items-center"
          style={{ direction: "rtl" }}
        >
          <p className="text-4xl uppercase text-wrap">
            I&apos;m Kata
            <br /> a communication designer
            <br /> based in
            <br /> <b>Bischofshofen</b>, Austria.🇦🇹
          </p>
        </div>
      </div>
      <p className="text-2xl md:max-w-screen-md my-8">
        With main focus on Web and communication design, I also have a passion
        for crafting illustrations, and designing layouts.
      </p>
      <h2 className="text-4xl my-12 text-center">Check out my work!</h2>
      <Title>WORK</Title>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <WorkItem
          id="ai11"
          title="Landing page redesi for a digital agency"
          src="/thumbnails/ai11.png"
        />
        {/* <WorkItem title="BOLD PERIOD PACKAGING" src="/thumbnails/flux.png" /> */}
        {/* <WorkItem title="ILLUSTRATIONS" src="/thumbnails/illustrations.png" /> */}
        <WorkItem
          id="mindshift"
          title="BACHELOR THESIS"
          src="/thumbnails/mindshift.gif"
        />
        <WorkItem
          id="reemo"
          title="REEMO VISUALS"
          src="/thumbnails/reemo.png"
        />
        <WorkItem
          id="surreal"
          title="SURREALISM"
          src="/thumbnails/surreal.png"
        />
      </div>
      <Title>
        CON
        <br />
        TACT
      </Title>
      <p className="text-2x">
        <b>Email:</b>
        <br />
        <a href="mailto:csuhajkata@gmail.com">csuhajkata@gmail.com</a>
        <br />
        <b>Phone:</b>
        <br />
        <a href="tel:+436641234567">+43 664 123 4567</a>
      </p>
    </main>
  );
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-6xl md:text-9xl text-center font-bold font-polonium mt-8 mb-4">
      {children}
    </h1>
  );
};

const WorkItem = ({
  title,
  src,
  id,
}: {
  title: string;
  src: string;
  id: string;
}) => {
  return (
    <Link
      href={`/works/${id}`}
      className="border-b-2 border-black flex p-2 gap-2 justify-between w-full col-span-1"
    >
      <Image
        src={src}
        alt="Landing page redesign for a digital agency"
        width={200}
        height={150}
      />
      <p>{title}</p>
    </Link>
  );
};
