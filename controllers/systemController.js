'use strict';
const { execSync } = require('child_process');

exports.ls = () => {
    const commandOutput = execSync('ls', { encoding: 'utf-8' }); 
    return commandOutput.replace(/\n/g,"<br>")
}

exports.services = () => {
    const commandOutput = execSync('service --status-all 2>&-', { encoding: 'utf-8' });
    const lines = commandOutput.split("\n")
    const json = lines.map( line => {
        const tokens = line.split(" ", 6)
        return { 
            service : tokens[5],
            serviceStatus : tokens[2],
        };
    });
    return json;
}

exports.ps_ax = () => {
    const commandOutput = execSync('ps -ax | tail -n+2 | awk \'{ $2=$3=$4="";  print $0} \' ', { encoding: 'utf-8' }); 
    const lines = commandOutput.split("\n");
    lines.pop() //avoids last empty line
    const json  = lines.map( line => {
        const [pid, ...process] = line.split(" ");
        return { 
            "pid" : pid,
            "processName" : process.join(" ").trim(),
        };
    });
    return json
}


exports.kill = (pids = []) => {
    pids.map( pid => execSync(`kill -2 ${pid}`) )
}