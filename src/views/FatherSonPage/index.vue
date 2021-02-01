<!--
 * @Description: 父子组件
 * @Author: shaojia
 * @Date: 2021-01-29 09:44:14
 * @LastEditTime: 2021-02-01 09:51:17
 * @LastEditors: shaojia
-->
<template>
  <div>
    <fieldset class="fieldset"><legend class="legend">Father</legend></fieldset>
    <SonCom @setPrice="setFatherPrice" :count="pprice" :visible="visible" />
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
