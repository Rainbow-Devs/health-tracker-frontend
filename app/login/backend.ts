export const getBackend = async (sessionId?: string) => {
  const params: {
    redirect: RequestRedirect;
    cache: RequestCache;
    headers: {
      cookie: string;
    };
  } = {
    redirect: "manual",
    cache: "no-store",
    headers: {
      cookie: sessionId ? `sessionid=${sessionId}` : ""
    }
  };
  const backendSession = await fetch(
    "http://local-backend.wellpath.rainbowdevs.io:8000/auth/login/github/",
    params
  ).then(response => {
    const cookieStore = response.headers.get("Set-Cookie");
    const respSessionId = /sessionid=([\w]+)/.exec(cookieStore || "");
    const redirectURL = response.headers.get("Location") ?? "";
    // const clientId = redirectURL.searchParams.get("client_id") || "";
    // const state = redirectURL.searchParams.get("state") || "";
    // const newRedirect = `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${state}&response_type=code&scope=user:email`;
    return {
      sessionId: respSessionId && respSessionId[1],
      redirectURL
    };
  });
  return backendSession;
};

export const createUser = async (
  code: string,
  state: string,
  sessionId?: string
) => {
  const headers = new Headers();
  if (sessionId) {
    headers.set("cookie", `sessionid=${sessionId}`);
  }
  const backendSession = await fetch(
    `http://local-backend.wellpath.rainbowdevs.io:8000/auth/complete/github/?code=${code}&state=${state}`,
    { redirect: "manual", cache: "no-store", headers }
  ).then(response => response.status);

  return backendSession;
};
