import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(([values1, value2]) => {
    console.log(values1.body, value2.firstName, value2.lastName);
  }).catch(() => console.log('Signup system offline'));
}
