"use client";
import ChampionsCard from "@/components/chanpions/ChampionsCard";
import ChampionsGrid from "@/components/chanpions/ChampionsGrid";
import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

const RotationClient = () => {
  const {
    data: rotationList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rotationList"],
    queryFn: getChampionRotation,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>조회중 오류가 발생했습니다</div>;
  }
  return (
    <ChampionsGrid>
      {rotationList?.map((item) => {
        return <ChampionsCard key={item.id} champion={item} />;
      })}
    </ChampionsGrid>
  );
};

export default RotationClient;
