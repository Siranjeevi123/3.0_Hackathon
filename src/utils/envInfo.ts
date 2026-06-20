

const getEnv = () => {
  try {
    return {
      USER: process.env.USER || process.env.USERNAME || "N/A",
      HOME: process.env.HOME || process.env.USERPROFILE || "N/A",
      PATH: process.env.PATH || "N/A",
      SHELL: process.env.SHELL || "N/A",
    };
  } catch {
    return {
      USER: "N/A",
      HOME: "N/A",
      PATH: "N/A",
      SHELL: "N/A",
    };
  }
};

export default getEnv;