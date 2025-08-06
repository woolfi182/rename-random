#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
  console.error("Usage: rename-random <folderPath>");
  process.exit(1);
}

const folderPath = process.argv[2];

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    process.exit(1);
  }

  files.forEach((file) => {
    const oldPath = path.join(folderPath, file);
    const ext = path.extname(file);
    const newName = `${Math.random().toString(36).slice(2, 10)}${ext}`;
    const newPath = path.join(folderPath, newName);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming ${file}:`, err);
      } else {
        console.log(`Renamed ${file} -> ${newName}`);
      }
    });
  });
});
