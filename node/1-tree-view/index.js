const fs = require('fs')
const path = require('path');
const {treeView} = require('./tree.view');


fs.readFile(path.join('test_file.json'), (err, content) => {
    if (err) return console.log('Error loading file:', err);
    
   console.log( treeView(JSON.parse(content)));
});
