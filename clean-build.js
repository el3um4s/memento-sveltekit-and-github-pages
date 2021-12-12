import {
    existsSync,
    rmSync
} from 'fs';

function deleteFolderRecursive(path) {
    console.log(`Deleting old documents "${path}"...`);
    if (existsSync(path)) {
        rmSync(path, {
            force: true,
            recursive: true
        });
    }
};


const paths = ["./build"];

paths.forEach(path => {
    deleteFolderRecursive(path);
});

console.log("Successfully deleted!");