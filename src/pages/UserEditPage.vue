<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import myAxios from "../plugins/myAxios.js";

const route = useRoute();
//获取修改前的值
const editUser = ref({
    editKey: route.query.editKey,
    editName: route.query.editName,
    currentValue: route.query.currentValue,
})
//提交修改
const onSubmit = async () => {
    const res = await myAxios.post('/user/update', {
        'id': 1,
        [editUser.value.editKey]: editUser.value.currentValue
    })
    console.log(res, '更新请求')
    if (res.code === 0 && res.data > 0) {
        route.back();
        console.log('更新成功')
    } else {
        console.log('更新失败')
    }
}
</script>

<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="editUser.currentValue" :name="editUser.editKey" :label="editUser.editName"
                :placeholder="`请输入${editUser.editName}`" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>

<style scoped></style>