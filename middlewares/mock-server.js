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

function handleDeleteRequest(req, res, pathname) {
  const mockDataPath = join(process.cwd(), "mocks");
  const apiPath = join(mockDataPath, `${pathname}.json`);

  try {
    const { [pathname.slice(5)]: items } = readJSONFile(apiPath);

    const id = parseInt(pathname.split("/")[3], 10);
    const dataIndex = items.findIndex(item => item.id === id);

    if (dataIndex !== -1) {
      items.splice(dataIndex, 1);
      writeJSONFile(apiPath, { [pathname.slice(5)]: items });

      res.statusCode = 200;
      res.end("Data deleted successfully");
    } else {
      res.statusCode = 404;
      res.end("Data not found");
    }
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

// Handle POST request for API endpoints
function handlePostRequest(req, res, pathname, dataKey) {
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newData = JSON.parse(body);

    const mockDataPath = join(process.cwd(), "mocks", "api");
    const apiPath = join(mockDataPath, `${pathname}.json`);

    try {
      const { [dataKey]: items } = readJSONFile(apiPath);

      const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
      const currentTime = new Date().toISOString();

      const newDataWithFields = {
        id: newId,
        created_at: currentTime,
        updated_at: currentTime,
        ...newData
      };

      items.push(newDataWithFields);

      writeJSONFile(apiPath, { [dataKey]: items });

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 201;
      res.end(JSON.stringify(newDataWithFields));
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  });
}

// Handle PUT request for API endpoints
function handlePutRequest(req, res, pathname, dataKey) {
  let body = "";
  req.on("data", chunk => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const editedData = JSON.parse(body);

    const mockDataPath = join(process.cwd(), "mocks", "api");
    const apiPath = join(mockDataPath, `${pathname}.json`);

    try {
      const { [dataKey]: items } = readJSONFile(apiPath);

      const editedId = editedData.id;
      const currentTime = new Date().toISOString();

      const editedDataWithFields = {
        id: editedId,
        created_at: currentTime,
        updated_at: currentTime,
        ...editedData
      };

      const dataIndex = items.findIndex(item => item.id === editedId);
      items[dataIndex] = editedDataWithFields;

      writeJSONFile(apiPath, { [dataKey]: items });

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 201;
      res.end(JSON.stringify(editedDataWithFields));
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
        handlePostRequest(req, res, "users", "users");
      } else if (pathname === "/api/goals") {
        handlePostRequest(req, res, "goals", "goals");
      } else if (pathname === "/api/goal_types") {
        handlePostRequest(req, res, "goal_types", "goal_types");
      } else if (pathname === "/api/reminders") {
        handlePostRequest(req, res, "reminders", "reminders");
      } else if (pathname === "/api/activities"){
        handlePostRequest(req, res, "activities", "activities");
      }
      else {
        res.statusCode = 404;
        res.end("Not Found");
      }
      break;

    case "PUT":
      if (pathname === "/api/goals") {
        handlePutRequest(req, res, "goals", "goals");
      } else if (pathname === "/api/reminders") {
        handlePutRequest(req, res, "reminders", "reminders");
      } else if (pathname === "/api/users") {
        handlePutRequest(req, res, "users", "users");
      }
      break;

    case "DELETE":
      if (apiRegex.test(pathname)) {
        handleDeleteRequest(req, res, pathname);
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
