// funzione per salvare un cookie
function saveCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));//impostata la data di scadenza
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";// salvare il cookie
    console.log(`Cookie "${name}" salvato con valore: ${value}`);
}

//funzione per recuperare un cookie
function getCookie(name) {
    const nameEq = name + "=";
    const cookies = document.cookie.split(";");//divide i cookie in un array
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEq) == 0) {
            const value = c.substring(nameEq.length, c.length);
            console.log(`Cookie "${name}" recuperato con valore: ${value}`);
            return value;
        }
    }
    console.log(`Cookie "${name}" non trovato`);
}

//funzione per rimuovere un cookie
function deleteCookie(name) {
    document.cookie = name + "=; expires=thu, 01 Jan 1970 00:00:00 UTC; path=/";
    console.log(`Cookie "${name}" rimosso`);
}
//utilizzo
saveCookie("username", "Giovanni", 10);
getCookie("username");
deleteCookie("uesername");

//localstorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(`valore salvato nel localStorage con la chiave "${key}": ${value}`);
}

//funzione per recuperare un valore nel localstorage
function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    if (value !== null) {
        console.log(`valore recuperato dal localstorage con la chiave "${key}": ${value}`)
    }else {
        console.log(`nessun valore trovato nel localstorage per la chiave "${key}"`);
    }
    return value;
}

//funzione per rimuovere un valore del localStorage
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
    console.log(`valore rimosso dal localstorage con la chiave "${key}"`);
}

//sessionstorage
function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`valore salvato nel sessionstorage con la chiave "${key}": ${value}`);
}

//funzione per recuperare un valore nel sessionstorage
function getFromSessionStorage(key) {
    const value = sessionStorage.getItem(key);
    if (value !== null) {
        console.log(`valore recuperato dal sessionstorage con la chiave "${key}": ${value}`)
    }else {
        console.log(`nessun valore trovato nel sessionstorage per la chiave "${key}"`);
    }
    return value;
}

//funzione per rimuovere un valore del sessionstorage
function removeFromSessionStorage(key) {
    sessionStorage.removeItem(key);
    console.log(`valore rimosso dal sessionstorage con la chiave "${key}"`);
}

//sessionstorage e localstorage
function saveToStorages(key, value) {
    //salvo nel localstorage
    localStorage.setItem(key, value);
    console.log(`valore salvato nel localstorage con la chiave "${key}": ${value}`);
    //salvo nel sessionstorage
    sessionStorage.setItem(key, value);
    console.log(`valore salvato nel sessionstorage con la chiave "${key}": ${value}`);
}
//funzione per recuperare un valore da session e local storage
function getFromStorages(key) {
    const localStorageValue = localStorage.getItem(key);
    if (localStorageValue !== null) {
        console.log(`valore recuperato dal localstorage con la chiave "${key}": ${localStorageValue}`);
    }else {
        console.log(`nessun valore trovato nel localstorage per la chiave "${key}"`);
    }

    const sessionStorageValue = sessionStorage.getItem(key);
    if (sessionStorageValue !== null) {
        console.log(`valore recuperato dal sessionstorage con la chiave "${key}": ${sessionStorageValue}`);
    }else {
        console.log(`nessun valore trovato nel sessionstorage per la chiave "${key}"`);
    }
}
//funzione per rimuovere un valore dal session e local storage 
function removeFromStorages(key) {
    localStorage.removeItem(key);
    console.log(`valore rimosso dal localstorage con chiave "${key}"`);

    sessionStorage.removeItem(key);
    console.log(`valore rimosso dal sessionstorage con chiave "${key}"`);

}



