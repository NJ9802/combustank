import React from "react";

type Props = {};

export default function Skeleton({}: Props) {
  const shadows = Array.from({ length: 3 }, (_, i) => i + 1);
  const fields = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <div className="pt-8 md:pt-0 flex md:h-[calc(100vh-160px)] justify-center items-center">
      <div
        role="status"
        className="max-w-lg animate-pulse flex flex-col justify-center items-center"
      >
        <div className="h-4 bg-base-100 rounded-md dark:bg-gray-300 w-72 mb-10"></div>

        {shadows.map((i) => (
          <div
            key={i}
            className="h-36 bg-base-100 rounded-lg dark:bg-gray-300 w-full md:w-96 mb-2.5 py-5 px-5"
          >
            <div className="flex justify-around items-center">
              <div className="space-y-2">
                <div className="h-6 w-32 bg-base-100 dark:bg-gray-400 rounded-sm"></div>

                {fields.map((i) => (
                  <div
                    key={i}
                    className="h-4 w-20 bg-base-100 dark:bg-gray-400 rounded-sm"
                  ></div>
                ))}
              </div>

              <div
                className="inline-block h-16 w-16 opacity-50 animate-spin rounded-full border-8 border-solid border-current
               border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_5.5s_linear_infinite]"
              ></div>
            </div>
          </div>
        ))}

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
