import React from "react";
import { fetchItemList } from "@/utils/riotApi";
import { Item } from "../types/items/Items.type";
import PageTitle from "@/components/PageTitle";
import ItemsGrid from "@/components/items/ItemsGrid";
import ItemsCard from "@/components/items/ItemsCard";

const ItemPage = async () => {
  const { data } = await fetchItemList();
  const dataArr: Item[] = Object.values(data);

  return (
    <>
      <PageTitle>아이템 목록</PageTitle>
      <ItemsGrid>
        {dataArr.map((item) => (
          <ItemsCard key={item.name} item={item} />
        ))}
      </ItemsGrid>
    </>
  );
};
export default ItemPage;
