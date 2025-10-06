const body1 = document.querySelector("body")

const ifr = document.createElement("iframe")
ifr.src = "http://challenge01.root-me.org/web-client/ch23/index.php?action=profile"
body1.appendChild(ifr)

const token = document.querySelector("iframe body #token")
console.log(ifr)

