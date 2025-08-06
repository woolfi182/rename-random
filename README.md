# rename-random

A simple CLI tool to rename all files in a folder to random names while preserving their file extensions.

> No dependencies, just pure Node.js!

## Installation

Install globally via npm:

```bash
npm install -g @whalelaunch/rename-random
```

## Usage

```bash
rr <folderPath>
# or long name
rename-random <folderPath>
```

### Parameters

- `folderPath` - Path to the folder containing files you want to rename

### Example

```bash
# Rename all files in the current directory
rr .

# Rename all files in a specific folder
rr /path/to/your/folder

# Rename all files in a relative folder
rr ./documents
```

## What it does

The tool will:

1. Read all files in the specified folder
2. Generate a random 8-character name for each file
3. Preserve the original file extension
4. Rename each file to the new random name
5. Display the renaming progress in the console

### Example Output

```
Renamed document.pdf -> k3m9x7q2.pdf
Renamed image.jpg -> p8n4r1w5.jpg
Renamed notes.txt -> z6v2c9h4.txt
```

## Random Name Generation

- Random names are generated using alphanumeric characters (a-z, 0-9)
- Each name is 8 characters long
- Original file extensions are preserved
- Names are generated using `Math.random().toString(36).slice(2, 10)`

## Error Handling

The tool includes error handling for:

- Missing folder path argument
- Directory reading errors
- File renaming errors

## Requirements

- Node.js (any recent version)
- Read/write permissions for the target folder

## License

MIT

## Author

@woolfi182

## Version

1.0.1

---

**⚠️ Warning**: This tool will permanently rename files. Make sure to backup important files before using this tool, as the original filenames will be lost.
