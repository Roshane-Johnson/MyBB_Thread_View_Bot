let urls = "https://mybbthread here";
// Turns the string urls to a Specific array amount
let uris = Array.apply(null, Array(amout of views needed)).map(_ => urls);
// Map every url to the promise of the fetch
let requests = uris.map(uri => fetch(uri));
// Pretty text to say begon
console.log("View botting has begon!");
// Promise.all waits until all jobs are resolved
Promise.all(requests).then(responses =>
	responses.forEach(response => console.log(`${response.url}: ${response.status}`))
);
