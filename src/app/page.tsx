import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:py-16 pb-8 sm:px-8 px-4">
      <p className="font-cairo text-[5rem] md:text-[10.5rem] md:-ml-4 -z-10 fixed -top-1 md:top-[2rem] text-gray-400">
        KATA
      </p>
      <h1 className="text-6xl md:text-9xl text-center font-bold mt-8 mb-4">
        <span className="text-3xl font-machina font-normal sm:inline hidden">
          {" "}
          graphic
        </span>
        <span className="font-polonium">KATA</span>
        <span className="text-3xl font-machina font-normal sm:inline hidden">
          {" "}
          designer
        </span>
        <br />
        <span className="font-polonium">CSUHAJ</span>
      </h1>
      <div className="flex justify-between w-full sm:hidden">
        <span className="text-3xl font-machina font-normal"> graphic</span>
        <span className="text-3xl text-right font-machina font-normal">
          designer
        </span>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)]">
        <div className="col-span-1" />
        <div className="">
          <Image
            src="/thedesigner.png"
            alt="Kata Csuhaj"
            width={500}
            height={500}
            priority={true}
            className="-mt-20 max-h-[50vh] md:max-h-[75vh] w-auto mx-auto hover:scale-110 transition-transform hover:rotate-3"
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
          className="col-span-1 items-center hidden md:flex text-5xl uppercase"
          style={{ direction: "rtl" }}
        >
          <div>
            <p className="text-left">I&apos;m Kata a communication designer</p>
            <p className="text-center">based in</p>
            <p>
              <b>Bischofshofen</b>, Austria.🇦🇹
            </p>
          </div>
        </div>
        <div className="col-span-1 text-4xl uppercase items-center md:hidden">
          <p className="">I&apos;m Kata a communication designer</p>
          <p className="text-center">based in</p>
          <p className="text-right">
            <b>Bischofshofen</b>, Austria.🇦🇹
          </p>
        </div>
      </div>
      <p className="text-3xl md:text-4xl md:max-w-screen-md my-8 text-left self-start md:ml-12 ml-0">
        With main focus on <b>web</b> and <b>communication</b> design,
        <br />I also have a passion for crafting illustrations, and designing
        layouts.
      </p>
      <Title>WORK</Title>
      <div className="grid md:gap-10 md:grid-cols-2 grid-cols-1 w-full md:p-10">
        <WorkItem
          id="ai11"
          title="AI11 LANDING"
          src="/thumbnails/ai11.png"
          actions={["UI/UX"]}
        />
        <WorkItem
          id="mindshift"
          title="BACHELOR THESIS"
          src="/thumbnails/mindshift.gif"
          actions={["BRANDING", "UI/UX", "EDITORIAL"]}
        />
        <WorkItem
          id="reemo"
          title="REEMO VISUALS"
          src="/thumbnails/reemo.png"
          actions={["BRANDING", "UI/UX"]}
        />
        <WorkItem
          id="surreal"
          title="SURREALISM"
          src="/thumbnails/surreal.png"
          actions={["EDITORIAL"]}
        />
        <WorkItem
          id="illustrations?margin=true"
          title="ILLUSTRATIONS"
          src="/thumbnails/illustrations.png"
          actions={["ILLUSTRATION", "POSTER"]}
        />
        <WorkItem
          id="flux"
          title="FLUX"
          src="/thumbnails/flux.png"
          actions={["BRANDING", "PACKAGING"]}
        />
      </div>
      <Title>
        CON
        <br className="sm:hidden" />
        TACT
      </Title>
      <p className="text-xl">
        <b>Email:</b>
        <br />
        <a href="mailto:csuhajkata@gmail.com" className="hover:underline">
          csuhajkata@gmail.com
        </a>
        {/* <br />
        <b>Phone:</b>
        <br />
        <a href="tel:+436641234567" className="hover:underline">
          +43 664 123 4567
        </a> */}
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
  actions,
}: {
  title: string;
  src: string;
  id: string;
  actions?: string[];
}) => {
  return (
    <div className="border-b-2 border-black group">
      <Link
        href={`/works/${id}`}
        className="flex p-4 justify-between w-full col-span-1 md:hover:scale-110 transition-transform"
      >
        <Image
          src={src}
          alt={title}
          width={200}
          height={150}
          className=""
          priority={true}
        />
        <div className="flex justify-between w-full mx-2">
          <div className="w-full flex flex-col justify-between">
            <p className="sm:text-2xl text-base w-full">{title}</p>
            <div className="flex flex-row mt-auto flex-wrap">
              {actions?.map((a) => (
                <Pill key={a}>{a}</Pill>
              ))}
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-6 transition-transform md:group-hover:-rotate-[135deg] ml-2 sm:block hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black rounded-[50%] p-[1px] md:mx-1 my-[1px]">
      <p className="text-sm text-center bg-white rounded-[50%] pt-[2px] px-2">
        {children}
      </p>
    </div>
  );
};
