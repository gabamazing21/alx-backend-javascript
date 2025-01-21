export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((item) => startString !== '' && item.includes(startString))
    .map((str) => str.replaceAll(startString, '')
      .trim())
    .join('-');
}
