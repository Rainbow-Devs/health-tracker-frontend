import { cookies } from "next/headers";
import { Suspense } from "react";

const userDetailsQuery = `  user {
    id
    dateJoined
    firstName
    lastName
    lastLogin
  }
  displayName
  shortTermGoal
  longTermGoal\n`;

const getUserDetails = () => {
  const sessionId = cookies().get("sessionid")?.value || "";
  const queryBody = `query { \n  userProfileBySid(sid: "${sessionId}") {\n${userDetailsQuery} }\n}`;
  return fetch("http://local-backend.wellpath.rainbowdevs.io:8000/graphql", {
    method: "POST",
    body: queryBody,
    cache: "no-cache",
    headers: {
      cookies: `sessionid=${sessionId}`,
      "Content-Type": "application/graphql"
    }
  }).then(response => response.json());
};

export const ProfilePage = async () => {
  const userDetailsView = getUserDetails().then(userDetails => (
    <pre>{JSON.stringify(userDetails, null, 2)}</pre>
  ));
  return (
    <main className="flex flex-col justify-between">
      <div className="container min-h-screen max-w-screen-lg p-4">
        <p>
          This will be the profile page where users can set their goals. For
          now, have some user data:
        </p>

        <Suspense fallback={<p>Loading from backend...</p>}>
          {userDetailsView}
        </Suspense>
      </div>
    </main>
  );
};

export default ProfilePage;
