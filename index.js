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