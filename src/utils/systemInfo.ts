import os from 'os';

const getSystemInfo = () => {
  try {
    return {
      operatingSystem: {
        type: os.type(),
        release: os.release(),
        version: os.version(),
      },
      cpuArchitecture: process.arch,
      hostname: os.hostname(),
      nodeVersion: process.version,
      platform: process.platform,
      homeDirectory: os.homedir(),
    };
  } catch (err) {
    console.error("Failed to collect system information:", err);
    return {};
  }
};

export default getSystemInfo;