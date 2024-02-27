import {
    existsSync,
    mkdirSync,
    readdirSync,
    copyFileSync,
    rmSync
} from 'fs';

import {
    join,
    extname
} from 'path';


function deleteFolderRecursive(path) {
    if (existsSync(path)) {
        rmSync(path, {
            force: true,
            recursive: true
        });
    }
};

const paths = ["./posts"];

paths.forEach(path => {
    deleteFolderRecursive(path);
});


const draftsDir = './drafts';
const postsDir = './src/posts';

if (!existsSync(postsDir)) {
    mkdirSync(postsDir);
}

function copyMarkdownFiles(startDir) {
    let queue = [startDir];

    while (queue.length > 0) {
        let currentDir = queue.shift();
        let filesAndDirs = readdirSync(currentDir, {
            withFileTypes: true
        });

        filesAndDirs.forEach(dirent => {
            let fullPath = join(currentDir, dirent.name);
            if (dirent.isDirectory()) {
                queue.push(fullPath);
            } else if (dirent.isFile() && extname(dirent.name) === '.md') {
                let destPath = join(postsDir, dirent.name);
                copyFileSync(fullPath, destPath);
            }
        });
    }
}

copyMarkdownFiles(draftsDir);