<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import myAxios from "../plugins/myAxios.js";

const router = useRouter();
const username = ref('');
const password = ref('');
const onSubmit = async () => {
    const res = await myAxios.post('/user/login', {
        userAccount: username.value,
        userPassword: password.value,
    })
    console.log('用户登录');
    if (res.code == 0 && res.data) {
        console.log('登录成功');
        router.replace('/');
    } else {
        console.log('登录失败');
    }
};
</script>

<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="username" name="userAccount" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="userPassword" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                登录
            </van-button>
        </div>
    </van-form>
</template>

<style scoped></style>