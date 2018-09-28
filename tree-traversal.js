const traverseDom = (node, depth = 0) => {
    console.log(`${"| ".repeat(depth)}<${node.nodeName.toLowerCase()}>`);
    Array.from(node.children).forEach(child =>
        traverseDom2(child, depth + 1)
    );
};

const fs = require("fs");

const recursiveDir = path => {
    console.log(path);
    fs.readdirSync(path).forEach(entry => {
        if (entry.startsWith(".")) {
            console.log("H ", full);
        } else {
            const full = path + "/" + entry;
            const stats = fs.lstatSync(full);
            if (stats.isSymbolicLink()) {
                console.log("L ", full); // symlink, don't follow
            } else if (stats.isDirectory()) {
                console.log("D ", full);
                recursiveDir(full);
            } else {
                console.log(" ", full);
            }
        }
    });
};

module.exports = { traverseDom, recursiveDir };
