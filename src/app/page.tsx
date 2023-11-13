import { Suspense } from "react";
import LatestAnimalsCard from "./ui/latest-animals-card";
import LatestAnimalsCardSkeleton from "./ui/skeletons/skeletons";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LatestAnimalsCardSkeleton />}>
        <LatestAnimalsCard />
      </Suspense>
    </>
  );
}
