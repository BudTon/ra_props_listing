export default function titleSlice(title) {

  if (title.length < 50) return title;
  
  return `${title.slice(0, 50)} ...`;
}