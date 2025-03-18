"use server";
import { NextResponse } from "next/server";

const RIOT_API_URL =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

export async function GET() {
  const response = await fetch(RIOT_API_URL, {
    headers: {
      //   "Content-Type": "application/json",
      "X-Riot-Token": process.env.RIOT_API_KEY as string,
    },
  });
  const data = await response.json();
  return NextResponse.json({ data });
}
