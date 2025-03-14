import { fetchChampions } from "@/utils/serverApi";
import Image from "next/image";
import { Champion } from "../types/Items.type";
import Link from "next/link";
import { removeTags } from "@/utils/removeTags";

const ChampionsPage = async () => {
  const { data } = await fetchChampions();
  const dataArr: Champion[] = Object.values(data);

  return (
    <div className="container mx-auto">
      <h2 className="mb-4">챔피언 목록</h2>
      <div className="grid grid-cols-4 gap-4">
        {dataArr.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-3 items-center p-4 border border-solid border-[#ccc] rounded-md"
          >
            <Link href={`/champions/${item.id}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
                priority
              />
              <p>{item.name}</p>
              <p>{removeTags(item.title)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
