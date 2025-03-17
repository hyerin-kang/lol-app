import { Champion } from "@/app/types/champions/champions.type";
import { removeTags } from "@/utils/removeTags";
import Image from "next/image";
import Link from "next/link";

const ChampionsCard = ({ champion }: { champion: Champion }) => {
  return (
    <div className="border border-solid border-[#ccc] rounded-md">
      <Link
        href={`/champions/${champion.id}`}
        className="flex flex-col gap-1 items-center p-4"
      >
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={100}
          height={100}
          priority
        />
        <p className="text-primary text-xl font-bold">{champion.name}</p>
        <p className="text-gray-400 text-center break-keep">
          {removeTags(champion.title)}
        </p>
      </Link>
    </div>
  );
};

export default ChampionsCard;
