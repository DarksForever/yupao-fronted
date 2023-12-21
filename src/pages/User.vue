<script setup lang="ts">
import { useRouter } from "vue-router";

const user = {
    id: 9527,
    username: 'dark',
    userAccount: 'forever',
    avaterUrl: 'https://cn.bing.com/images/search?q=%E9%A3%8E%E6%99%AF%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=B73DE60E39282A043F93D63353E74A3A45061381',
    gender: '男',
    phone: '123456',
    email: '123456@321',
    planetCode: '221',
    createTime: new Date()
}

const router = new useRouter();
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
    <van-cell-group>
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
    </van-cell-group>
</template>

<style scoped></style>