const elem = name => { return document.getElementById(name) }
var services = elem("services")
var processes = elem("processes")


API_GET = (endPoint, apipath = "http://localhost:3000/api/") => {
    let promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = `${apipath}${endPoint}`;
        xhr.onreadystatechange = _ => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.statusText)
                }
            }
        }
        xhr.open('GET', url);
        xhr.send();
    });
    return promise
}

API_POST = (endPoint, args, apipath = "http://localhost:3000/api/") => {
    let promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = `${apipath}${endPoint}`
        xhr.onreadystatechange = _ => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.statusText)
                }
            }
        }
        paramString = ""
        for (ii = 0; ii < args.length; ii++) {
            console.log(args[ii])
            for (key in args[ii]) {
                paramString += `${key}=${args[ii][key]}`
            }
        }
        console.log(paramString)
        console.log(url)
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(paramString);
    });
    return promise
}


API_GET("ps_ax").then(processesString => {
    table = document.createElement("table");
    table.className += "pure-table pure-table-striped";
    table.innerHTML = "<thead><tr><th>PID</th><th>COMMAND</th><th>KILL</th></tr></thead>";
    processesList = JSON.parse(processesString);
    /* Adds a column of <td> for PID, command, and an optional button to kill the process*/
    processesList.map(({ pid, processName }) => {
        tr = document.createElement("tr")
        tr.innerHTML = `<td>${pid}</td><td>${processName}</td>`
        if (pid > 10) {
            /* If killable proccess add button to kill it*/
            killButton = document.createElement("button")
            killButton.innerText = "KILL"
            killButton.addEventListener("click", (_ => API_POST("kill", [{ "pid": pid }])))
            killButtonTd = document.createElement("td")
            killButtonTd.appendChild(killButton)
            tr.appendChild(killButtonTd)
        }
        table.appendChild(tr)
    });

    processes.appendChild(table)
})
    .catch(x => console.log(`error: ${x}`))

API_GET("services").then(servicesString => {
    servicesList = JSON.parse(servicesString)
    ul = document.createElement("ul")
    servicesList.map(({ service, serviceStatus }) => {
        li = document.createElement("li")
        li.innerText = service
        if (serviceStatus == "-") {
            li.className += "redText"
        } else {
            li.className += "greenText"
        }
        ul.appendChild(li)
    })
    services.appendChild(ul)
})
    .catch(x => console.log(`error: ${x}`))





