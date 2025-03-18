import { ChampionsDetail } from "@/app/types/champions/champions.type";
import Image from "next/image";

const DetailInfo = ({ championInfo }: { championInfo: ChampionsDetail }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4">
      <Image
        className=""
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${championInfo.image.full}`}
        alt={championInfo.name}
        width={200}
        height={200}
        priority
      />
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-primary font-bold text-xl">{championInfo.name}</p>
        <p className="text-primary">{championInfo.title}</p>
        <p className="text-gray-400">{championInfo.lore}</p>
      </div>
    </div>
  );
};

export default DetailInfo;
