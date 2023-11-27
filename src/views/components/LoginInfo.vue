<template>
    <div class="login-info-section">
        <div class="login-info-section__header">
            {{ applicationName }}
        </div>
        <el-tabs
            v-model="activeLoginMode"
            class="login-info-section__tabs"
            stretch
        >
            <el-tab-pane
                v-for="mode in loginMode"
                :key="mode.type"
                :name="mode.type"
                :label="mode.name"
            >
            </el-tab-pane>
        </el-tabs>
        <account-mode-form v-if="activeLoginMode === 'accountMode'" />
        <el-divider v-if="companyName" class="login-info-section__footer">{{ companyName }}</el-divider>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import AccountModeForm from './AccountModeForm.vue';

const props = defineProps({
    applicationName: {
        type: String,
        default: '',
    },

    loginMode: {
        type: Array,
        default: () => [{
            name: '账号登录',
            type: 'accountMode',
        }],
    },

    companyName: {
        type: String,
        default: '',
    }
});
const activeLoginMode = ref(props.loginMode[0].type);
console.log(props.loginMode[0].type)
</script>

<style scoped lang="scss">
.login-info-section {
    position: absolute;
    top: 50%;
    width: 330px;
    min-height: 490px;
    background-color: var(--el-color-white);
    border-radius: 20px;
    margin: -25% 0;
    margin-left: 25%;
    padding: 30px 50px;

    &__header {
        margin-bottom: 40px;
        color: #323232;
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
    }
    
    &__tabs {
        :deep(.el-tabs__nav-wrap) {
            &::after {
                height: 0 !important;
            } 
        }
    }

    &__footer {
        :deep(.el-divider__text) {
            font-size: 12px;
            font-weight: 400;
            color: #C0C4CC;
            padding: 0 8 px;
            width: max-content;
        }
    }
}
</style>