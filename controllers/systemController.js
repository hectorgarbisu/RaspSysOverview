'use strict';
const execSync = require('child_process').execSync;

exports.ls = () => {
    const output = execSync('ls', { encoding: 'utf-8' }); 
    return output.replace(/\n/g,"<br>")
}

exports.services = () => {
    const output = execSync('service --status-all 2>&-', { encoding: 'utf-8' });
    const lines = output.split("\n")
    const words = lines.map((line)=>{
        const tokens = line.split(" ", 6)
        return { 
            service : tokens[5],
            serviceStatus : tokens[2],
        }})
    return words
}

exports.ps_ax = () => {
    const output = execSync('ps -ax', { encoding: 'utf-8' }); 
    return output.replace(/\n/g,"<br>")
}