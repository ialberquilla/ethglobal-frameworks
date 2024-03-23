import { VERCEL_TEAM_ID, VERCEL_TOKEN } from "@/config";

export const createVercelProject = async (name: string) => {
  const url = `https://api.vercel.com/v10/projects?teamId=${VERCEL_TEAM_ID}`;

  const body = {
    name,
    gitRepository: {
      type: "github",
      repo: "ethglobal-frameworks",
    },
    buildCommand: "npm install",
    framework: "nextjs",
    installCommand: "npm install",
    outputDirectory: "/build",
    publicSource: true,
  };

  const respose = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${VERCEL_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  return respose.json();
};

export const createDeployment = async (projectId: string) => {
  const url = `https://api.vercel.com/v13/deployments?teamId=${VERCEL_TEAM_ID}`;

  const body = {
    name: projectId,
    files: [],
    projectSettings: {
      buildCommand: "npm install",
      framework: "nextjs",
      installCommand: "npm install",
    },
  };

  const respose = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${VERCEL_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  return respose.json();
};
