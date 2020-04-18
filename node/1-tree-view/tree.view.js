'use strict'
let res = ""

const obj = {
    lastChild: "└──",
    branch: "├──",
    thru: "│",
}

const treeView = (jsonFile, newSrting = "", root = "", parent = false) => {

    for (const key in jsonFile) {

        let elem = jsonFile[key]
        if (!(elem instanceof Object)) {
            res += newSrting + root + elem + "\n"
            root = ""
        } else {
            newSrting += parent ? obj.thru : " " 

            for (let item = 0; item < elem.length; item++) {
                parent = false
                if (item === elem.length - 1) root = obj.lastChild
                else {
                    parent = true
                    root = obj.branch
                }

                treeView(elem[item], newSrting, root, parent)
            }
        }

    }

    return res;
}

module.exports.treeView = treeView;
