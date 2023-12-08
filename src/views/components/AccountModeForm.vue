<template>
    <el-form
        :model="accountForm"
        ref="accountFormRef"
        class="account-mode-section"
    >
        <el-form-item prop="account" class="account-mode-section__item">
            <el-input
                v-model="accountForm.account"
                placeholder="请输入账号">
                <template #prepend>
                    <el-button :icon="User" />
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="password" class="account-mode-section__item">
            <el-input
                v-model="accountForm.password"
                type="password"
                placeholder="请输入密码"
                show-password
            >
                <template #prepend>
                    <el-button :icon="Lock" />
                </template>
            </el-input>
        </el-form-item>
        <!-- <el-form-item prop="captcha" class="account-mode-section__item account-mode-section__captcha">
            <el-input
                v-model="accountForm.captcha"
                placeholder="请输入验证码"
                class="account-mode-section__captcha-input"
            ></el-input>
            <div src="" alt="" class="account-mode-section__captcha-img"></div>
        </el-form-item> -->
        <slot />
        <el-form-item class="account-mode-section__item">
            <el-button type="primary" class="login-button" @click="onLogin(accountFormRef)">登录</el-button>
        </el-form-item>
    </el-form>
    
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus'
import { AccountFormType } from '../types/loginTypes'

// const props = defineProps({

// });

const emits = defineEmits(['login']);
const accountForm = reactive<AccountFormType>({} as AccountFormType);
const accountFormRef = ref<FormInstance>();

const rules = reactive<FormRules>({
    
})
function onLogin(formEl: FormInstance) {
    if (!formEl) return;
    emits('login', formEl, accountForm)
}
</script>

<style scoped lang="scss">
.account-mode-section {
    &__item {
        margin-bottom: 24px;
        .el-input {
            height: 40px;
        }

        .login-button {
            width: 100%;
            height: 40px;
        }
    }
    &__captcha {
        // height: 40px;
        &-input {
            width: 210px;
        }

        &-img {
            width: 100px;
            height: 40px;
            margin-left: 15px;
            background-color: aqua;
        }
    }
}
</style>