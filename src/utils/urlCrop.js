export const cropURL = (url) => {
  let newUrl = url.replace(/^https?:\/\//, '');
  newUrl = newUrl.replace(/^www./, '')
  if (newUrl.length < 20) {
    return newUrl
  }
  return `${newUrl.slice(0, 20)}...`
}