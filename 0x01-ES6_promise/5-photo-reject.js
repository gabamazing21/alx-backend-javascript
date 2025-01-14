export default function uploadPhoto(filename) {
  return new Promise((_, reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
}
