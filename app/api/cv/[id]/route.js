import { NextResponse } from "next/server";

import Cv from "@/Models/cvModel";
import connectMongoDB from "@/libs/mongoDb";

export async function GET(request, {params}) {
  const {id} = params;
  await connectMongoDB();
  const cv = await Cv.findOne({_id: id});
  return NextResponse.json({cv }, { status: 200 });
}