import { removeTags } from "@/utils/removeTags";
import { fetchChampionsDetail } from "@/utils/riotApi";
import Image from "next/image";
import React from "react";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}
// interface Params {
//   id: string;
// }
type ChampionsDetail = {
  id: string;
  name: string;
  title: string;
  lore: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  spells: [
    {
      id: string;
      name: string;
      description: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
    }
  ];
};

const DetailPage = async ({ params }: DetailPageProps) => {
  const resolveParams = await params;
  const { data } = await fetchChampionsDetail(resolveParams.id);
  const championInfo: ChampionsDetail = data[resolveParams.id];
  console.log(data);

  return (
    <>
      챔피언상세페이지
      {/* {JSON.stringify(data)} */}
      {/* <p>{dataArrId}</p> */}
      {/* <p>{championInfo.name}</p> */}
      <p>{championInfo.name}</p>
      <p>{championInfo.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${championInfo.image.full}`}
        alt={championInfo.name}
        width={100}
        height={100}
        priority
      />
      <p>{championInfo.lore}</p>
      <h2>{championInfo.name}의 스킬</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {championInfo.spells.map((item) => {
          return (
            <div
              key={item.id}
              className="border rounded-md p-4 flex flex-col gap-4"
            >
              <div>{item.name}</div>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${item.image.full}`}
                width={50}
                height={50}
                alt={item.name}
              />
              <div>{removeTags(item.description)}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetailPage;
