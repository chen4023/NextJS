import { favorites } from "@/assets/data/data";
import { NextResponse } from "next/server";

// 특정 동물에 대한 정보

// POST 요청이 들어온 경우 : 찜 목록 배열에 해당 동물 아이디 추가
export async function POST(req, res) {
  const animalId = Number(res.params.id);
  favorites.push(animalId);
  return NextResponse.json({ id: animalId });
}

// DELETE 요청이 들어온 경우 : 찜 목록 배열에 해당 동물 아이디 제거
export async function DELETE(req, res) {
  const animalId = Number(res.params.id);
  const idx = favorites.indexOf(animalId);
  favorites.splice(idx, 1);
  return NextResponse.json({ id: animalId });
}
