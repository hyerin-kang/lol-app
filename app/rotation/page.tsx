"use client";
import { getChampionRotation } from "@/utils/riotApi";
import ChampionsGrid from "../../components/chanpions/ChampionsGrid";
import ChampionsCard from "@/components/chanpions/ChampionsCard";
import PageTitle from "@/components/PageTitle";
import { useQuery } from "@tanstack/react-query";

const RotationPage = () => {
  const fetchData = async () => {
    const response = await getChampionRotation();
    return response;
  };
  const {
    data: rotationList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rotationList"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>조회중 오류가 발생했습니다</div>;
  }

  return (
    <div className="container mx-auto">
      <PageTitle>챔피언로테이션 (이번주 무료로 플레이 할 수 있어요!)</PageTitle>
      <ChampionsGrid>
        {rotationList?.map((item) => {
          return <ChampionsCard key={item.id} champion={item} />;
        })}
      </ChampionsGrid>
    </div>
  );
};

export default RotationPage;
