import { ChampionsDetail } from "@/app/types/champions/champions.type";
import DetailInfo from "@/components/chanpions/detail/DetailInfo";
import DetailItems from "@/components/chanpions/detail/DetailItems";
import { fetchChampionsDetail } from "@/utils/riotApi";
import React from "react";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const resolveParams = await params;
  const { data } = await fetchChampionsDetail(resolveParams.id);
  const championInfo: ChampionsDetail = data[resolveParams.id];

  return (
    <>
      <DetailInfo championInfo={championInfo} />
      <h2 className="font-bold text-xl text-primary my-4">
        {championInfo.name}의 스킬
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {championInfo.spells.map((item) => {
          return <DetailItems key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default DetailPage;
