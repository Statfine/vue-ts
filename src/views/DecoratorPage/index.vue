<!--
 * @Description: 
 * @Author: shaojia
 * @Date: 2021-01-27 19:46:05
 * @LastEditTime: 2021-01-28 10:03:11
 * @LastEditors: shaojia
-->
<template>
  <div class="vant-input">
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-button plain type="primary" @click="btnClick">朴素按钮</van-button>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
