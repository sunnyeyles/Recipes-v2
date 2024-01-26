import { NextRequest, NextResponse } from "next/server";
export const PUT = async (request: Request, response: NextResponse) => {
  try {
    const data = request.body;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
