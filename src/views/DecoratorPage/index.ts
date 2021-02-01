/*
 * @Description:
 * @Author: shaojia
 * @Date: 2021-01-27 19:46:21
 * @LastEditTime: 2021-01-28 13:51:43
 * @LastEditors: shaojia
 */
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Dec extends Vue {
  private value = "";

  created() {
    console.log("this", this);
  }

  public btnClick() {
    alert(this.value);
  }
}
