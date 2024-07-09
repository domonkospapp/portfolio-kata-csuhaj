"use client";

export const GoUpButton = () => {
  const goUp = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button className="float-end m-2" onClick={goUp}>
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
    </button>
  );
};
