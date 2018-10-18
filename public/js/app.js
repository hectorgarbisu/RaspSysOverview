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

API_GET("services").then(x => services.innerHTML = x).catch(x => console.log(`error: ${x}`))

API_GET("ps_ax").then(x => processes.innerHTML = x).catch(x => console.log(`error: ${x}`))




