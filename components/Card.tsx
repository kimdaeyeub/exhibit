import React from "react";

const Card = () => {
  return (
    <div className="w-full h-full border rounded-lg p-3 flex flex-col justify-center items-start">
      <div className="bg-slate-500 w-full h-full min-h-[250px] rounded-lg" />
      <div className="w-full flex justify-between items-start mt-5">
        <div className="flex flex-col justify-center items-start">
          <span className="text-2xl">title</span>
          <span className="text-slate-400 line-clamp-2">
            You can also use variant modifiers to target media queries like
            responsive breakpoints, dark mode, prefers-reduced-motion, and more.
            For example, use md:flex-wrap-reverse to apply the flex-wrap-reverse
            utility at only medium screen sizes and above.
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <svg
            className="text-yellow-400"
            width={20}
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            ></path>
          </svg>
          <span>4.3K</span>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-start items-center mt-4 gap-2">
        <div className="px-2 py-0.5 rounded-full bg-slate-300">
          <span>#website</span>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-slate-300">
          <span>#website</span>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-slate-300">
          <span>#website</span>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-slate-300">
          <span>#website</span>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-slate-300">
          <span>#website</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
