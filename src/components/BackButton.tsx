"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className="h-16 w-20 fixed rounded-full m-2 z-40 hover:-translate-x-4 transition-transform duration-500 rotate-180"
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "30%",
          width: "20%",
          height: "40%",
          transform: "skew(45deg)",
          backdropFilter: "invert(1)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "30%",
          width: "20%",
          height: "40%",
          transform: "skew(-45deg)",
          backdropFilter: "invert(1)",
        }}
      />
    </button>
  );
}
