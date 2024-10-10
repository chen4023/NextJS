import { data } from "@/assets/data/data";
import { NextResponse } from "next/server";

// 전체 동물 목록
export async function GET(req, res) {
  return NextResponse.json(data);
}

//default는 절대 붙이면 안됨
//async를 붙여야 부작용이 발생하지 않은
//요청에 대한 응답은 NextResponse로
//return은 필수로!@
