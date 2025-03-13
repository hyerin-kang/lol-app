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
  return data;
};
