<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = new useRoute();
//获取修改前的值
const editUser = ref({
    editKey: route.query.editKey,
    editName: route.query.editName,
    currentValue: route.query.currentValue,
})
//提交修改
const onSubmit = (value) => {
    //todo
    console.log('onSubmit:' + value);
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