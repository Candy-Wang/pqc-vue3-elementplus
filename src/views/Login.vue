<template>
    <div class="login-container">
        <login-info
            :login-mode="loginMode"
            :application-name="applicationName"
            :company-name="companyName"
        />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import LoginInfo from './components/LoginInfo.vue';

const loginMode = reactive([
    {
        name: '账号登录',
        type: 'accountMode',
    },
    {
        name: '手机登录',
        type: 'phoneMode',
    },
]);
const applicationName = ref('后量子SSL VPN网关');
const companyName = ref('杭州后量子密码科技有限公司');
</script>

<style scoped lang="scss">
.login-container {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/login-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>