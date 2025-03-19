import PageTitle from "@/components/PageTitle";
import RotationClient from "./RotationClient";

const RotationPage = () => {
  return (
    <div className="container mx-auto">
      <PageTitle>챔피언로테이션 (이번주 무료로 플레이 할 수 있어요!)</PageTitle>
      <RotationClient />
    </div>
  );
};

export default RotationPage;
