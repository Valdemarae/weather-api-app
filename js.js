async function getWeatherPromise(location) {
  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=7dcc585f30c04aaeab9154430233010&q=' + location, {mode: 'cors'})
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
  getWeatherPromise(location).then(a => {console.log(a)})
})