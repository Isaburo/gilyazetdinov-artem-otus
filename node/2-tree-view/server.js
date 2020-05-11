#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();

const { treeView } = require('./app/tree.view');


program
    .command('show <dir>', { isDefault: true })
    .option('-d, --depth <depthNumber>', 'depth show',0)
    .action((dir,opts)=>{
        console.log(`server on port ${opts.depth}`);
        console.log(`server on port ${dir}`);
        treeView(dir,opts.depth)
              .then(res => console.log(res))
              .catch(err => console.log(err.message, err.stack))

    })

program.parse(process.argv);