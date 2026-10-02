const url = window.location.href;

const searchParams = new URL(url).searchParams;

const entries = new URLSearchParams(searchParams).entries();

const entriesArray = Array.from(entries);

const realEntriesArray = entriesArray[0];

const query = realEntriesArray[1];

console.log(query);

const keys = [
    "google", "https://www.google.com"
];

const locks = keys.indexOf(query) + 1;

window.location.href = keys[locks];