import Image from "next/image";
import Logo from "../public/logo.png";
import Main01 from "../public/lol-main-01.webp";
import Main02 from "../public/lol-main-02.webp";
import Main03 from "../public/lol-main-03.webp";
import CardLink from "@/components/main/CardLink";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={Logo} width={200} alt="logo" />
      <div className="flex flex-col gap-4 w-96">
        <CardLink href="/champions" src={Main01} alt="챔피언 목록 보기">
          챔피언 목록 보기
        </CardLink>
        <CardLink href="/rotation" src={Main02} alt="금주 로테이션 확인">
          금주 로테이션 확인
        </CardLink>
        <CardLink href="/items" src={Main03} alt="아이템 목록 보기">
          아이템 목록 보기
        </CardLink>
      </div>
    </div>
  );
}
