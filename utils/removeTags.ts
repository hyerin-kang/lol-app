//문자열 태그,@변수 제거
export const removeTags = (text: string) =>
  text.replace(/<[^>]*>/g, "").replace(/@[^@]+@/g, "");
