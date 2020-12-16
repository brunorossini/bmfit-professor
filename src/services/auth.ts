import api from './api';

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn({ email, password }): Promise<Response> {
  return api.post('/auth', { email, password });
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
  //       user: { name: 'Thiago', email: 'thiagomarinho@rockeseat.com.br' },
  //     });
  //   }, 2000);
  // });
}
