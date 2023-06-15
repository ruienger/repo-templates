<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
  import { FormInstance } from 'element-plus';
  import useAuthStore from 'src/store/auth';
  import PwdIcon from '~icons/mdi/password';
  import UserIcon from '~icons/mdi/user';

  const formRef = ref<FormInstance>();
  const loading = ref(false);

  const formData = reactive({
    username: '',
    password: '',
  });
  const formRules = reactive({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  });

  const login = (e?: KeyboardEvent | MouseEvent) => {
    if (!formRef.value) return;
    if (e instanceof KeyboardEvent && e.code !== 'Enter') return;

    formRef.value.validate((v) => {
      if (v) {
        loading.value = true;
        useAuthStore()
          .login(formData.username, formData.password)
          .finally(() => {
            loading.value = false;
          });
      }
    });
  };

  onMounted(() => {
    document.addEventListener('keypress', login);
  });

  onUnmounted(() => {
    document.removeEventListener('keyup', login);
  });
</script>

<template>
  <div class="fullscreen">
    <ElForm
      ref="formRef"
      :model="formData"
      :rules="formRules"
      class="login-form"
    >
      <ElFormItem prop="username">
        <ElInput
          v-model="formData.username"
          placeholder="用户名"
          :prefix-icon="PwdIcon"
        />
      </ElFormItem>
      <ElFormItem prop="password">
        <ElInput
          v-model="formData.password"
          type="password"
          placeholder="密码"
          :prefix-icon="UserIcon"
          show-password
          required
        />
      </ElFormItem>
      <ElFormItem>
        <ElButton
          type="primary"
          plain
          :loading="loading"
          style="width: 100%"
          @click="login"
        >
          登录
        </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }

  .fullscreen {
    width: 100%;
    height: 100%;
  }

  .login-form {
    text-align: center;
    position: absolute;
    width: 20%;
    height: 20%;
    top: 40%;
    left: 40%;
  }
</style>
