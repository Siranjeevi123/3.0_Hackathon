import fs from "fs";

function createFile(path: string, content: string) {
  try {
    fs.writeFileSync(path, content);
    console.log("File created successfully.");
  } catch (err) {
    console.error("Error creating file:", err);
  }
}

function readFile(path: string) {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}

function updateFile(path: string, content: string) {
  try {
    fs.writeFileSync(path, content);
    console.log("File updated successfully.");
  } catch (err) {
    console.error("Error updating file:", err);
  }
}

function deleteFile(path: string) {
  try {
    fs.unlinkSync(path);
    console.log("File deleted successfully.");
  } catch (err) {
    console.error("Error deleting file:", err);
  }
}

export default {createFile,readFile,updateFile,deleteFile};