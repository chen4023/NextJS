import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>💚 동물 조아 💚</h1>
      <Link href={"/"}>메인</Link>
      <Link href={"/favorite"}>찜 목록</Link>
    </header>
  );
}
