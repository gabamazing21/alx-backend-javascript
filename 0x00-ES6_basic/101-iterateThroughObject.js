export default function iterateThroughObject(reportWithIterator) {
  const allItem = [...reportWithIterator];
  let result = '';
  for (let i = 0; i < allItem.length; i += 1) {
    if (i === allItem.length - 1) {
      result += allItem[i];
    } else {
      result += `${allItem[i]} | `;
    }
  }
  return result;
}
