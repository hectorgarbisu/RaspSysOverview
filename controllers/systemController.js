'use strict';
const execSync = require('child_process').execSync;

exports.ls = () => {
    const output = execSync('ls', { encoding: 'utf-8' }); 
    return output
}

exports.status_all = () => {
    const output = execSync('service --status-all', { encoding: 'utf-8' }); 
    return output
}

exports.ps_ax = () => {
    const output = execSync('ps -ax', { encoding: 'utf-8' }); 
    return output
}