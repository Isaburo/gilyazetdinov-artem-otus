'use strict'
const fs = require('fs')

const obj = {
    lastChild: "└──",
    branch: "├──",
    thru: "│",
}

let result = '',
    root,
    pathFile,
    arr,
    emptyStr,
    inside = '';

const treeView = async (base,depthCalc, newSrting = "", childOf = true, depth = 0) => {

    if (newSrting === undefined) newSrting = "";

    arr = fs.readdirSync(base)

    arr.forEach((files, i, array) => {
        childOf = true
        if (i !== array.length - 1) {
            root = obj.branch
        } else {
            root = obj.lastChild
            childOf = false
        }


        if (depth >= depthCalc) {
            if (fs.lstatSync(base + '/' + files).isDirectory()) inside = ' ../'
            else inside = ''
            result += newSrting + root + files + inside + "\n";
        } else if (fs.lstatSync(base + '/' + files).isFile()) {
            result += newSrting + root + files + "\n"
        } else {
            pathFile = base + '/' + files

            result += newSrting + root + files + "\n"
            emptyStr = childOf ? obj.thru : ' ';
            treeView(pathFile,depthCalc, newSrting + emptyStr, childOf, depth + 1)
        }
    })

    return result;
}

module.exports.treeView = treeView;
