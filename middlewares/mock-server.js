import { createServer } from "http";
import { parse } from "url";
import { join } from "path";
import { readFileSync, writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";

// Utility function to read JSON data from a file
function readJSONFile(filePath) {
  const data = readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Utility function to write JSON data to a file
function writeJSONFile(filePath, data) {
  writeFileSync(filePath, JSON.stringify(data));
}

// Handle GET request for API endpoints
function handleGetRequest(req, res, pathname) {
  const mockDataPath = join(process.cwd(), "mocks");
  const apiPath = join(mockDataPath, `${pathname}.json`);

  try {
    const json = readJSONFile(apiPath);
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(json));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

// Handle POST request for '/api/users' endpoint
function handlePostUsers(req, res) {
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);

    const mockDataPath = join(process.cwd(), "mocks", "api");
    const apiPath = join(mockDataPath, "users.json");

    try {
      const { users } = readJSONFile(apiPath);

      const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      const newUuid = uuidv4();
      const currentTime = new Date().toISOString();

      const newUserWithFields = {
        id: newUserId,
        uuid: newUuid,
        created_at: currentTime,
        updated_at: currentTime,
        ...newUser
      };

      users.push(newUserWithFields);

      writeJSONFile(apiPath, { users });

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 201;
      res.end(JSON.stringify(newUserWithFields));
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  });
}

// Main server function
export default function mockServer(req, res) {
  const { pathname } = parse(req.url);
  const apiRegex = /^\/api\//;

  switch (req.method) {
    case "GET":
      if (apiRegex.test(pathname)) {
        handleGetRequest(req, res, pathname);
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
      break;

    case "POST":
      if (pathname === "/api/users") {
        handlePostUsers(req, res);
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
      break;

    default:
      res.statusCode = 404;
      res.end("Not Found");
      break;
  }
}

// Run the mock server on a specific port
const port = 8000;
createServer(mockServer).listen(port, () => {
  console.log(`Mock server is running on http://localhost:${port}`);
});
