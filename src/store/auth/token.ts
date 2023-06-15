import { ref, computed } from 'vue';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export default function useAccessToken() {
  const accessToken = ref(sessionStorage.getItem(ACCESS_TOKEN_KEY) || '');

  const hasAccess = computed(() => {
    return Boolean(accessToken.value);
  });

  function setAccessToken(token: string) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
    accessToken.value = token;
  }

  function removeAccessToken() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    accessToken.value = '';
  }

  return { accessToken, hasAccess, setAccessToken, removeAccessToken };
}
