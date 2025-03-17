"use client";
import {
  fetchChampionsForRotation,
  getChampionRotation,
} from "@/utils/riotApi";
import { useEffect, useState } from "react";
import ChampionsGrid from "../../components/chanpions/ChampionsGrid";
import ChampionsCard from "@/components/chanpions/ChampionsCard";
import PageTitle from "@/components/PageTitle";
import { Champion } from "../types/champions/champions.type";

const RotationPage = () => {
  const [rotationList, setRotationList] = useState<Champion[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      //로테이션 아이디
      const { data: rotationData } = await getChampionRotation();
      const rotationId: number[] = rotationData.freeChampionIds;

      //챔피언목록
      const { data: championsData } = await fetchChampionsForRotation();
      const championsArr: Champion[] = Object.values(championsData);

      //동일목록 가져오기
      const matchedChampions = championsArr.filter(function (item) {
        if (rotationId.includes(Number(item.key))) {
          return item;
        }
      });
      setRotationList(matchedChampions);
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      <PageTitle>챔피언로테이션 (이번주 무료로 플레이 할 수 있어요!)</PageTitle>
      <ChampionsGrid>
        {rotationList.map((item) => {
          return <ChampionsCard key={item.id} champion={item} />;
        })}
      </ChampionsGrid>
    </div>
  );
};

export default RotationPage;
