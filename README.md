# WellPath Frontend

This is the frontend webapp for WellPath, the Rainbow Devs Health Tracker
application. For the backend app, that can be found at
[Rainbow-Devs/health-tracker-backend](https://github.com/Rainbow-Devs/health-tracker-backend).

## Prerequisites

Please follow the guides in Notion for setting up your computer for web
development. There are separate guides for macOS and Windows. Once your
environment is set up, follow these steps to start work on this repository:

## Installation

To get started, we need to install the dependent packages for running the
frontend. This should only need to be done once.

```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
```

## Developing the Application

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Running with Docker

There are two ways to create and run the Docker container image: building and
running manually with Docker or by creating a `docker-compose.yml` file and
using Docker Compose to start the webapp.

For Docker Compose, this is a minimal configuration that will get you started:

```yaml
services:
  ht-frontend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: ht-frontend
    image: rainbow-devs/ht-frontend
    ports:
      - "3000:3000"
```

From there, you can follow these steps to build and run the container image:

```bash
docker compose build --pull
docker compose up -d
```

Finally, when you're done, use this command to stop the container and remove the
container image:

```bash
docker compose down
```

## Testing

To run tests run `pnpm test`.

Please write unit tests for components where applicable. Make the components as testable as possible by structuring them as presentational vs container components.

Testing will ensure that our code is maintainable in the future.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Mock Server Documentation

The mock server provides a simulated backend for various API endpoints in your Next.js project. It allows you to develop and test different functionality without the need for a real backend server.

### API Endpoints

#### Retrieve User Data

- **Method**: `GET`
- **Endpoint**: `/api/users`
- **Response**: Returns an array of user objects in JSON format.

#### Register a New User

- **Method**: `POST`
- **Endpoint**: `/api/users`
- **Request Body**: JSON object representing the new user.
- **Response**: Returns the newly created user object, including a unique ID, UUID, and timestamps.

#### Update User Data

- **Method**: `PUT`
- **Endpoint**: `/api/users/:id`
- **Request Body**: JSON object representing the updated user data.
- **Response**: Returns the updated user object.

#### Retrieve Activity Data

- **Method**: `GET`
- **Endpoint**: `/api/activities`
- **Response**: Returns an array of activity objects in JSON format.

#### Add a New Activity

- **Method**: `POST`
- **Endpoint**: `/api/activities`
- **Request Body**: JSON object representing the new activity.
- **Response**: Returns the newly created activity object.

#### Update Activity Data

- **Method**: `PUT`
- **Endpoint**: `/api/activities/:id`
- **Request Body**: JSON object representing the updated activity data.
- **Response**: Returns the updated activity object.

#### Retrieve Goal Data

- **Method**: `GET`
- **Endpoint**: `/api/goals`
- **Response**: Returns an array of goal objects in JSON format.

#### Add a New Goal

- **Method**: `POST`
- **Endpoint**: `/api/goals`
- **Request Body**: JSON object representing the new goal.
- **Response**: Returns the newly created goal object.

#### Update Goal Data

- **Method**: `PUT`
- **Endpoint**: `/api/goals/:id`
- **Request Body**: JSON object representing the updated goal data.
- **Response**: Returns the updated goal object.

#### Retrieve Reminder Data

- **Method**: `GET`
- **Endpoint**: `/api/reminders`
- **Response**: Returns an array of reminder objects in JSON format.

#### Add a New Reminder

- **Method**: `POST`
- **Endpoint**: `/api/reminders`
- **Request Body**: JSON object representing the new reminder.
- **Response**: Returns the newly created reminder object.

#### Update Reminder Data

- **Method**: `PUT`
- **Endpoint**: `/api/reminders/:id`
- **Request Body**: JSON object representing the updated reminder data.
- **Response**: Returns the updated reminder object.

### Usage

To interact with the mock server, make HTTP requests to the appropriate endpoints using your preferred method (e.g., fetch, axios, etc.). Pass any required request parameters or data in the request body and handle the response accordingly.

Please refer to the specific endpoint details mentioned above for the expected request method, endpoint URL, request body format, and response format.

### Mock Server Setup

1. Ensure that the `mockServer.js` file is included in your project's root directory.
2. Install the required dependencies by running `npm install`.
3. Start the mock server by running `npm run mock`.
4. The mock server will be running on `http://localhost:8000`.

