async function getWeatherPromise(location) {
  let response = null
  response = await fetch('https://api.weatherapi.com/v1/current.json?key=7dcc585f30c04aaeab9154430233010&q=' + location, {mode: 'cors'})
  if (response.status != 200)
    return null
  const data = await response.json()
  return {text: data.current.condition.text, temp_c: data.current.temp_c}
}

async function getGiphyPromise(text) {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=R3bOn6Qg6iJKatLcEiXo5jgjmb3qVkKa&s=' + text, {mode: 'cors'})
  const data = await response.json()
  return data.data.images.original.url
}

const button = document.querySelector("button")
button.addEventListener("click", () => {
  const location = document.querySelector('#location').value
  if (location != '') {
    const div = document.querySelector("div")
    getWeatherPromise(location).then(data => {
    if (div.firstChild) {
      const h2 = document.querySelector("h2")
      const img = document.querySelector("img")
      if (data) {
        h2.textContent = 'Temparature in celsius ' + data.temp_c
        getGiphyPromise(data.text).then(url => {img.src = url})
      } else {
        h2.textContent = 'Location not found'
        img.src = "https://www.publicdomainpictures.net/pictures/250000/nahled/erorr.jpg"
      }
    } else {
      const h2 = document.createElement("h2")
      const img = document.createElement("img")
      if (data) {
        h2.textContent = 'Temparature in celsius ' + data.temp_c
        getGiphyPromise(data.text).then(url => {img.src = url})
      } else {
        h2.textContent = 'Location not found'
        img.src = 'https://www.publicdomainpictures.net/pictures/250000/nahled/erorr.jpg'
      }
      div.appendChild(h2)
      div.appendChild(img)
    }
  })
}
})