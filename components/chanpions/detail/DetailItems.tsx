import { ChampionsDetail } from "@/app/types/champions/champions.type";
import { removeTags } from "@/utils/removeTags";
import Image from "next/image";
import React from "react";

type DetailItemsProps = {
  item: ChampionsDetail["spells"][number];
};

const DetailItems = ({ item }: DetailItemsProps) => {
  return (
    <div
      key={item.id}
      className="border border-primary rounded-md p-4 flex flex-col gap-4 items-center text-center"
    >
      <div className="text-primary text-lg font-semibold">{item.name}</div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${item.image.full}`}
        width={100}
        height={100}
        alt={item.name}
        priority
        className="rounded-full"
      />
      <div className="text-gray-400">{removeTags(item.description)}</div>
    </div>
  );
};

export default DetailItems;
