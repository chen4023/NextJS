import { favorites } from "@/assets/data/data";
import { NextResponse } from "next/server";

// 전체 동물 목록
export async function GET(req, res) {
  return NextResponse.json(favorites);
}
