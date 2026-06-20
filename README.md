# 🚀 Thunder Hackathon 3.0 – JavaScript System Information & File Manager


## RUN THE PROJECT
// bun dev 
## 📌 Project Overview

This project is a JavaScript/TypeScript-based utility built using **Node.js/Bun** that collects important system information, displays selected environment variables, and demonstrates **CRUD (Create, Read, Update, Delete)** operations on code files.

The project is designed for educational purposes and showcases how JavaScript can interact with the operating system and local file system using built-in modules.

---

# 📂 Project Structure

```
src/
│── utils/
│   ├── systemInfo.ts
│   ├── envInfo.ts
│   └── fileManager.ts
│
└── server.ts
```

---

# 🛠 Features

## ✅ System Information

The application collects:

* Operating System Type
* Operating System Release
* Operating System Version
* CPU Architecture
* Hostname
* Node.js Runtime Version
* Platform Information
* User Home Directory

---

## ✅ Environment Variables

The application displays selected environment variables such as:

* USER / USERNAME
* HOME / USERPROFILE
* PATH
* SHELL (if available)

If any variable is unavailable, the application gracefully returns `"N/A"` instead of crashing.

---

## ✅ CRUD Operations

The project supports file manipulation through the built-in `fs` module.

### Create

Creates a new file with provided content.

### Read

Reads and displays file contents.

### Update

Updates or overwrites an existing file.

### Delete

Deletes the selected file.

---

# 🔄 Code Flow

## Step 1

Execution starts from:

```
server.ts
```

---

## Step 2

`systemInfo.ts`

* Imports Node's `os` module.
* Collects operating system information.
* Retrieves CPU architecture.
* Retrieves hostname.
* Retrieves platform details.
* Retrieves Node.js version.
* Retrieves user home directory.

Returns all information as a structured object.

---

## Step 3

`envInfo.ts`

* Reads selected environment variables from `process.env`.
* Checks whether values exist.
* Returns `"N/A"` when variables are missing.

---

## Step 4

`fileManager.ts`

Uses the built-in `fs` module to perform:

* Create
* Read
* Update
* Delete

operations on files.

---

## Step 5

`server.ts`

* Calls `getSystemInfo()`
* Calls `getEnvironmentInfo()`
* Displays formatted JSON output
* Demonstrates CRUD operations using `fileManager.ts`

---

# 🧠 Strategy

The project follows a modular architecture.

Instead of writing all logic in a single file, responsibilities are separated into independent modules:

* `systemInfo.ts` → System information
* `envInfo.ts` → Environment variables
* `fileManager.ts` → File CRUD operations
* `server.ts` → Entry point

This improves:

* Readability
* Maintainability
* Reusability
* Scalability

---

# ⚠ Error Handling

The project handles errors gracefully by:

* Returning fallback values (`"N/A"`) for missing environment variables.
* Using `try...catch` blocks around file operations.
* Preventing unexpected application crashes due to missing files or permission issues.

---

# 📦 Technologies Used

* TypeScript
* Node.js APIs
* Bun Runtime
* `os` module
* `fs` module
* `process` API

---

# ▶️ Running the Project

Install dependencies:

```bash
bun install
```

Run:

```bash
bun run src/server.ts
```

or

```bash
bun src/server.ts
```

---

# 📋 Sample Output

```json
{
  "operatingSystem": {
    "type": "Darwin",
    "release": "24.5.0",
    "version": "Darwin Kernel Version"
  },
  "cpuArchitecture": "arm64",
  "hostname": "My-MacBook",
  "nodeVersion": "v22.15.0",
  "platform": "darwin",
  "homeDirectory": "/Users/example"
}
```

---

# 🎯 Evaluation Criteria Addressed

* ✅ Correct system information gathering
* ✅ Clean and modular code organization
* ✅ Graceful error handling
* ✅ Well-documented implementation
* ✅ Structured and readable output formatting

---

# 👨‍💻 C Venket Siranjeevi

Developed for **Thunder Hackathon 3.0** using JavaScript/TypeScript and Bun.
