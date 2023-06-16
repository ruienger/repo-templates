import { defineStore } from 'pinia';
import useAccessToken from './token';
import http from 'src/api/http';

export default defineStore('auth', () => {
  const t = useAccessToken();

  function login(username: string, password: string) {
    password = btoa(password);
    return http
      .post('login', {
        username,
        password,
      })
      .finally(() => {
        t.setAccessToken('test');
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
