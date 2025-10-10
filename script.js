const ifr = document.querySelector("#principalIframe");

ifr.addEventListener("load", () => {
ifr.contentDocument.querySelector("#username").value = "test1"
ifr.contentDocument.querySelector("#status").checked = true

ifr.contentDocument.forms[0].submit()
  
})




