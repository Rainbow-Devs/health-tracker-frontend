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

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!
