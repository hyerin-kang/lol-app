import React from "react";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import { Item } from "../types/Items.type";

const ItemPage = async () => {
  const { data } = await fetchItemList();
  const dataArr: [string, Item][] = Object.entries(data);
  const removeTags = (text: string) =>
    text.replace(/<[^>]*>/g, "").replace(/@[^@]+@/g, "");

  return (
    <div className="container mx-auto">
      <h2 className="mb-4">아이템 목록</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {dataArr.map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col gap-3 items-center p-4 border border-solid border-[#ccc] rounded-md"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${value.image.full}`}
              alt={value.name}
              width={100}
              height={100}
            />
            <p>{removeTags(value.name)}</p>

            <p className="text-center break-keep">
              {removeTags(value.plaintext)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemPage;
