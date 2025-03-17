import { fetchChampions } from "@/utils/riotApi";
import ChampionsGrid from "@/components/chanpions/ChampionsGrid";
import ChampionsCard from "@/components/chanpions/ChampionsCard";
import PageTitle from "@/components/PageTitle";
import { Champion } from "../types/champions/champions.type";

const ChampionsPage = async () => {
  const { data } = await fetchChampions();
  const dataArr: Champion[] = Object.values(data);

  return (
    <>
      <PageTitle>챔피언 목록</PageTitle>
      <ChampionsGrid>
        {dataArr.map((item) => (
          <ChampionsCard key={item.name} champion={item} />
        ))}
      </ChampionsGrid>
    </>
  );
};

export default ChampionsPage;
