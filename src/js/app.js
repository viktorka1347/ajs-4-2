export default function sortByHealt(heroes) {
  heroes.sort((prev, next) => next.health - prev.health);
  return heroes;
}
