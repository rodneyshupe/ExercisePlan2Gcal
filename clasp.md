# Clasp
To develop and manage Apps Script projects from your terminal rather than the Apps Script editor, you can use an open-source tool called `clasp`.

## Requirements
clasp is written in Node.js and distributed via the `npm` tool. Prior to using `clasp`, you must have Node.js version 4.7.4 or later installed.

## Installation
```sh
npm install @google/clasp -g
```

## Using `clasp`

```sh
clasp login
```

## Create a new apps script project
```sh
clasp create [scriptTitle]
```

This command also creates two files in the current directory:

* A .clasp.json file storing the script ID.
* An appsscript.json project manifest file containing project metadata.

## Clone an existing project
This command clones an existing project in the current directory. The script must be created or shared with your Google account. You specify the script project to clone by providing its script ID.

To find the Script ID of the project, follow the below steps:

1. Open Apps Script project.
2. At the left, click Project Settings settings.
3. Under IDs, copy the Script ID.

```sh
 clasp clone <scriptId>
 ```

 ## Download a script project
 This command downloads the Apps Script project from Google Drive to your computer's file system.

 ```sh
 clasp pull
 ```

## Upload a script project
This command uploads all of a script project's files from your computer to Google Drive.

```sh
clasp push
```

## List project versions
This command downloads the Apps Script project from Google Drive to your computer's file system.

```sh
clasp versions
```

