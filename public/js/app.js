const elem = name => { return document.getElementById(name) }
var services = elem("services")
var processes = elem("processes")


API_GET = (endPoint, apipath="http://localhost:3000/api/") => {
    let promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = `${apipath}${endPoint}`;
        console.log({ url });
        xhr.onreadystatechange = _ => {
            if (xhr.readyState == 4) {
                if ( xhr.status == 200){
                    resolve(xhr.responseText)
                }else{
                    reject(xhr.statusText)
                }
            }
        }
        xhr.open('GET', url);
        xhr.send();
    });
    return promise
}


API_GET("ps_ax").then(processesString => {
    table = document.createElement("table");
    table.className += "pure-table";
    table.innerHTML = "<thead><tr><th>PID</th><th>COMMAND</th></tr></thead>";
    processesList = JSON.parse(processesString);
    processesList.map( processObject => {
        console.table(processObject)
        const { pid, processName } = processObject
        tr = document.createElement("tr")
        tr.innerHTML = `<td>${pid}</td><td>${processName}</td>`
        table.appendChild(tr)
    });

    processes.appendChild(table) 
})
.catch(x => console.log(`error: ${x}`))

API_GET("services").then(x => services.innerHTML = x).catch(x => console.log(`error: ${x}`))





