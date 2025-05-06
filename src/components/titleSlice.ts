import Item from "./Item";

export default function titleSlice({ title }: Item) {

  if (title.length < 50) return title;
  
  return `${title.slice(0, 50)} ...`;
}
