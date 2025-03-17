import Image from "next/image";
import Logo from "../public/logo.png";
import Main01 from "../public/lol-main-01.webp";
import Main02 from "../public/lol-main-02.webp";
import Main03 from "../public/lol-main-03.webp";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={Logo} width={200} alt="logo" />
      <div className="flex flex-col gap-4 w-96">
        <Link
          href="/champions"
          className="border rounded-md overflow-hidden relative"
        >
          <Image
            src={Main01}
            alt="챔피언 목록 보기"
            className="opacity-50 hover:scale-110 transition-transform duration-300 "
          />
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl">
            챔피언 목록 보기
          </p>
        </Link>
        <Link
          href="/rotation"
          className="border rounded-md overflow-hidden relative"
        >
          <Image
            src={Main02}
            alt="금주 로테이션 확인"
            className="opacity-50 hover:scale-110 transition-transform duration-300 "
          />
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl">
            금주 로테이션 확인
          </p>
        </Link>
        <Link
          href="/items"
          className="border rounded-md overflow-hidden relative"
        >
          <Image
            src={Main03}
            alt="아이템 목록 보기"
            className="opacity-50 hover:scale-110 transition-transform duration-300 "
          />
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl">
            아이템 목록 보기
          </p>
        </Link>
      </div>
    </div>
  );
}
