import { defineStore } from 'pinia';
import useAccessToken from './token';

export default defineStore('auth', () => {
  const t = useAccessToken();

  function login(username: string, password: string) {
    return Promise.resolve(username + password).then((result) => {
      t.setAccessToken(result);
      window.location.href = '/';
    });
  }

  function logout() {
    t.removeAccessToken();
    window.location.href = 'login.html';
  }

  return {
    ...t,
    login,
    logout,
  };
});
