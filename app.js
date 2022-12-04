async function getGif(input) {
  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=DGvJKKsMu8S8zgNcVwBzEArwDyHaXdC6&q=${input}&limit=50rating=g&lang=en`
  )
  const gifContainer = document.querySelector('#gif-container')
  const gif = document.createElement('IMG')
  const randomIndex = Math.floor(Math.random() * 50)
  gifUrl = response.data.data[randomIndex].images.fixed_height.url
  gif.setAttribute('src', gifUrl)
  gifContainer.appendChild(gif)
}

function getInput(e) {
  e.preventDefault()
  const searchInput = document.querySelector('#search')
  const input = searchInput.value
  searchInput.value = ''
  getGif(input)
}

function deleteGifs() {
  const gifs = document.querySelectorAll('img')
  for (let gif of gifs) {
    gif.remove()
  }
}

document.querySelector('#search-btn').addEventListener('click', getInput)
document.querySelector('#delete-btn').addEventListener('click', deleteGifs)
