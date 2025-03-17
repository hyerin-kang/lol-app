import { Item } from "@/app/types/items/Items.type";
import { removeTags } from "@/utils/removeTags";
import Image from "next/image";

const ItemsCard = ({ item }: { item: Item }) => {
  return (
    <div
      key={item.image.full}
      className="flex flex-col gap-3 items-center p-4 border border-solid border-[#ccc] rounded-md"
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
        alt={item.name}
        width={100}
        height={100}
        priority
      />
      <p className="text-primary text-xl font-bold">{removeTags(item.name)}</p>
      <p className="text-gray-400 text-center break-keep">
        {removeTags(item.plaintext)}
      </p>
    </div>
  );
};

export default ItemsCard;
