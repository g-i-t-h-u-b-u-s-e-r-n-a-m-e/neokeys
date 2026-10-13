var bob = "about:blank?";

function funky() {
    if (document.getElementById("search").value === "Google") {
        bob = "www.google.com/search?q="
        document.getElementById("other").innerHTML = "";
    } else if (document.getElementById("search").value === "Brave Search") {
        bob = "search.brave.com/search?q="
        document.getElementById("other").innerHTML = "";
    } else if (document.getElementById("search").value === "DuckDuckGo") {
        bob = "duckduckgo.com/?q="
        document.getElementById("other").innerHTML = "";
    } else if (document.getElementById("search").value === "Bing") {
        bob = "www.bing.com/search?q="
        document.getElementById("other").innerHTML = "";
    } else if (document.getElementById("search").value === "Wikipedia") {
        bob = "en.wikipedia.org/wiki/"
        document.getElementById("other").innerHTML = "";
    } else if (document.getElementById("search").value === "Yahoo") {
        bob = "search.yahoo.com/search?p="
        document.getElementById("other").innerHTML = "";
    } else if (document.getElementById("search").value === "No Search") {
        bob = "about:blank?p="
        document.getElementById("other").innerHTML = "";
    } else if (document.getElementById("search").value === "Other") {
        bob = "h"
        document.getElementById("other").innerHTML = "<input id='jamews' placeholder='URL for the search engine you want to use, no https://, ending with the part immediately before the query (typically /q=)'></input>"; 
    }
}

function linkgen() {
    if (bob === "h"){
        bob = document.getElementById("jamews").value;
    }
    document.getElementById("linkout").innerHTML = "https://27-27.com/neokeys/query.html?key=%s&backup=" + bob;
}