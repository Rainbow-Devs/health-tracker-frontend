import { NextResponse } from "next/server";
import { getBackend, createUser } from "./backend";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const loginCode = searchParams.get("code");
  const loginState = searchParams.get("state");

  const cookieJar = cookies();
  const sessionIdObj = cookieJar.get("sessionid");
  const sessionId = sessionIdObj ? sessionIdObj.value : undefined;

  if (loginCode && loginState) {
    await createUser(loginCode, loginState, sessionId);
    return NextResponse.redirect(
      "http://local-frontend.wellpath.rainbowdevs.io:3000/"
    );
  } else {
    const backend = await getBackend(sessionId);
    const response = NextResponse.redirect(backend.redirectURL, {
      status: 302
    });
    const sessionIdBE: string = backend.sessionId ?? "";
    response.cookies.set("sessionid", sessionIdBE, {
      httpOnly: true,
      domain: "wellpath.rainbowdevs.io"
    });
    return response;
  }
}
