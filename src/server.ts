
import getSystemInfo from "./utils/systemInfo";
import getEnv from "./utils/envInfo";
import fileManager from "./utils/fileManager";

console.log("========== SYSTEM INFORMATION ==========");
console.log(JSON.stringify(getSystemInfo(), null, 2));

console.log("\n========== ENVIRONMENT VARIABLES ==========");
console.log(JSON.stringify(getEnv(), null, 2));

console.log("\n========== FILE CRUD DEMO ==========");

const fileName = "demo.js";

try {
  fileManager.createFile(
    fileName,
    "console.log('Hello from Thunder Hackathon');"
  );
  console.log("File created successfully.");

  console.log("\nFile Content:");
  console.log(fileManager.readFile(fileName));


  fileManager.updateFile(
    fileName,
    "console.log('File updated successfully');"
  );
  console.log("\nFile updated.");


  console.log("\nUpdated Content:");
  console.log(fileManager.readFile(fileName));

  // Delete (Uncomment if you want to test deletion)
  // fileManager.deleteFile(fileName);
  // console.log("\nFile deleted.");

} catch (err) {
  console.log(err instanceof Error ? err.message : err);
}

