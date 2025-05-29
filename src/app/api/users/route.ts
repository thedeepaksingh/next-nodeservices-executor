import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const url = process.env.PROFILE_SERVICE_URL + "/api/users/all";
    console.log("Users url: ", url);
    const user_response = await fetch(
      process.env.PROFILE_SERVICE_URL + "/api/users/all"
    );
    console.log("User Response", user_response);
    if (!user_response.ok) {
      return new Error("Error while fetching user details");
    }

    const data = await user_response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Error inside users route:", err);
    return NextResponse.json(
      { error: "Internal Server Error", message: err.message },
      { status: 500 }
    );
  }
}
