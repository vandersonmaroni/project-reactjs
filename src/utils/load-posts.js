export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

  const [posts, photos] = await Promise.all([postsResponse, photosResponse])

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  return postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url }
  })
}