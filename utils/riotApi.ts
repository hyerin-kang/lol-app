// import { Item } from "@/app/types/Items.type";

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
      next: { revalidate: 60 },
    }
  );
  const data = await response.json();
  console.log(data);
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
  const response = await fetch("/api/rotation");
  const data = await response.json();
  return data;
};

export const fetchChampionsForRotation = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await response.json();
  return data;
};
