import { data } from "@/assets/data/data";
import { NextResponse } from "next/server";

// 특정 동물 정보 조회

export async function GET(req, res) {
  const animalId = Number(res.params.id);
  const animal = data.find((el) => el.id === animalId);
  if (animal) {
    return NextResponse.json(animal);
  } else {
    return NextResponse.json({ message: "no data" });
  }
}

// 12 version: req.query.id
// 13 version: res.params.id
