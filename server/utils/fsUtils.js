const fs = require('fs');
const util = require('util');
const path = require('path');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function getOnlyDirs(dir) {
  try {
    const allDirs = await readdir(dir);
    const directories = []
    
    await Promise.all(allDirs.map(async (d) => {
      if ((await stat(dir)).isDirectory()) directories.push(d);
    }));
    return directories;
  }
  catch (err) {
    console.log(err);
    return [err]
  }
}

async function getDirectoryContent(dir) {
  try {
    const dirContent = await readdir(dir);
    const stats = await Promise.all(dirContent.map(f => stat(dir + '/' + f)));
    const filesType = stats.map(s => s.isDirectory());
    return filesType.map((ft, index)=> {
        return {
            file: dirContent[index],
            isDirectory: ft
        }
    });
  }
  catch (err) {
    console.log(err);
    return [err]
  }
}

function isDir(arr) {
    const tempArr = [];
    stat(arr[0]).then(d => tempArr.push({file: d, isDirectory: d.isDirectory()}));
    return tempArr;
}


function deleteAllFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(dir, file), err => {
        if (err) throw err;
      });
    }
  });
}

module.exports = { getOnlyDirs, getDirectoryContent, isDir };