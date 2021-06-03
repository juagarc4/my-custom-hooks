export const getGifs = async (category) => {
  const encodedCategory = encodeURI(category)
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodedCategory}&limit=10&api_key=apRdaKcwOzqVBsDIpZE2MzSssnZXNexp`
  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })
  return gifs
}
