// import { Item } from "@/app/types/Items.type";

import { Champion } from "@/app/types/champions/champions.type";

export const fetchItemList = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const data = await response.json();
  return data;
};

export const fetchChampions = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    {
      next: { revalidate: 86400 },
    }
  );
  const data = await response.json();
  return data;
};

export const fetchChampionsDetail = async (id: string) => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};

export const getChampionRotation = async () => {
  //여기에서 필터된애들을 리턴시켜주기
  const response = await fetch("/api/rotation");
  const { data } = await response.json();
  const rotationId: number[] = data.freeChampionIds;

  //챔피언목록
  const { data: championsData } = await fetchChampionsForRotation();
  const championsArr: Champion[] = Object.values(championsData);

  //동일목록
  const matchedChampions = championsArr.filter(function (item) {
    if (rotationId.includes(Number(item.key))) {
      return item;
    }
  });
  return matchedChampions;
};

export const fetchChampionsForRotation = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await response.json();
  return data;
};
