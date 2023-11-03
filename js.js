async function getWeather(location) {
  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=7dcc585f30c04aaeab9154430233010&q=' + location, {mode: 'cors'})
  const data = await response.json()
  return [data.current.condition.text, data.current.temp_c]
}

async function getGiphy(text) {
  const reponse = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=R3bOn6Qg6iJKatLcEiXo5jgjmb3qVkKa&s=' + text, {mode: 'cors'})
  const data = await response.json()
  return response.data.images.original.url
}