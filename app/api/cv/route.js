import connectMongoDB from '@/libs/mongoDb';
import { NextResponse } from "next/server";

import Cv from '@/Models/cvModel';


export async function GET() {
  await connectMongoDB();
  const cvs = await Cv.find();
    return NextResponse.json({ cvs });
    
}

export async function POST(request) {
  const { name, id, email, phone, linkedinUrl, file, rawData } = await request.json();
  await connectMongoDB();
  await Cv.create({ name, id, email, phone, linkedinUrl, file, rawData});
  return NextResponse.json({ message: "Cv Created" }, { status: 201 });
}



export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Cv.findByIdAndDelete(id);
  return NextResponse.json({ message: "Cv deleted" }, { status: 200 });
}