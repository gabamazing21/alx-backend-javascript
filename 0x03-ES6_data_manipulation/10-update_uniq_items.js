export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  for (const [key, value] of map) {
    if (value === 1) {
      try {
        map.set(key, 100);
      } catch (e) {
        throw new Error('Cannot process');
      }
    }
  }
  return map;
}
