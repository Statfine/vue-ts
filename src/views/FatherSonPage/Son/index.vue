<!--
 * @Description: 
 * @Author: shaojia
 * @Date: 2021-01-29 09:44:35
 * @LastEditTime: 2021-01-29 10:01:09
 * @LastEditors: shaojia
-->
<template>
  <div>
    <fieldset class="fieldset"><legend class="legend">Son</legend></fieldset>
    <van-field v-model="price" label="价格" placeholder="价格" />
    <van-button plain type="primary" @click="setPrice">get</van-button>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
