<!-- TABLE OF CONTENTS -->
<h4>Table of Contents</h4>
<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#built-with">Built With</a></li>
      <li><a href="#cicd-environment">CI/CD Environment</a></li>
    </ul>
  </li>
  <li><a href="#getting-started">Getting Started</a></li>
 <li><a href="#documentation">Documentation</a></li>
</ol>
<!-- ABOUT THE PROJECT -->

## About The Project
This project is for the needs of Pre-Screening Test FullStack Developer at PT Nusantara Infrastructure.

**Link Website :** https://asyari-project-one-jg4xtzv62q-et.a.run.app

### Built With
Tech Stack :
- **NextJs**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **axios**

Google Cloud Servies:
- **Cloud Build**
- **Artifact Registry**
- **Cloud Run**

### CI/CD Environment
![CICD Environemnt](https://cdn.discordapp.com/attachments/872706873349001261/1190827901688496189/cicd-environment.png)
For the CI/CD Environment, I'm use Cloud Build with push trigger. When a revision / update to the code is pushed, the diagram as shown above will run the process of revision. Below are the services we use from Google Cloud Platform to develop CI/CD pipeline :
1. Cloud Build : To create a trigger
1. Artifact Registry: For the docker images repository
1. Cloud Run: To run the application

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Documentation
![cloud-build](https://cdn.discordapp.com/attachments/872706873349001261/1190829757655437362/cloud-build.png)
![artifact-registry](https://media.discordapp.net/attachments/872706873349001261/1190829758334914612/artifact-registry.png)
![cloud-run](https://media.discordapp.net/attachments/872706873349001261/1190829757978378320/cloud-run.png)
