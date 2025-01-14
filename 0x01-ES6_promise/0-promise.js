export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucess = true;
      if (sucess) {
        resolve('task successful');
      } else {
        reject.error('something went wrong');
      }
    }, 1000);
  });
}
