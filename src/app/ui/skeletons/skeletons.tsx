const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-2 mt-6 rounded-lg">
        <div className="p-4 shadow-md border-none bg-gray-50 rounded-lg">
          <div className="flex gap-6 items-center p-0 ">
            <div className="w-24 h-16 shadow-sm bg-gray-200 rounded-full" />

            <div className="flex flex-col gap-1 w-full">
              <div className="w-full h-4 bg-gray-200 shadow-sm rounded-sm" />
              <div className="w-full" />
              <div className=" h-4 w-1/2 shadow-sm bg-gray-200 rounded-sm" />
              <div className=" h-4 w-1/2 shadow-sm bg-gray-200 rounded-sm" />

              <div className="bg-gray-200 mt-4 h-8 rounded-sm w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function LatestAnimalsCardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative overflow-hidden mt-10 w-full h-4 bg-gray-200 shadow-sm rounded-sm`}
      />

      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}
