export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  let usageCount = weakMap.get(endPoint) || 0;
  usageCount += 1;
  weakMap.set(endPoint, usageCount);
  if (usageCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
