<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import myAxios from "../plugins/myAxios.js";

const user = ref();
const router = new useRouter();

onMounted(async () => {
    console.log('onMounted /user/current');
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        user.value = res.data;
        console.log('获取当前用户信息成功');
    } else {
        console.log('获取当前用户信息失败');
    }
})

const toEdit = (editKey: string, editName: string, currentValue: string) => {
    router.push({
        path: '/user/edit',
        query: {
            editKey,
            editName,
            currentValue,
        }
    })
}

</script>

<template>
    <template v-if="user">
        <van-cell title="昵称" is-link to="/user/edit" :value="user.username"
            @click="toEdit('username', '昵称', user.username)" />
        <van-cell title="账户" :value="user.userAccount" />
        <van-cell title="头像" is-link to="/user/edit">
            <img :src="user.avaterUrl" style="height: 48px;">
        </van-cell>
        <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender', '性别', user.gender)" />
        <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)" />
        <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email', '邮箱', user.email)" />
        <van-cell title="星球编号" :value="user.planetCode" />
        <van-cell title="注册时间" :value="user.createTime.toLocaleString()" />
    </template>
</template>

<style scoped></style>