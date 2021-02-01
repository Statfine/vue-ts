/*
 * @Description: 自组件
 * @Author: shaojia
 * @Date: 2021-01-29 09:44:38
 * @LastEditTime: 2021-01-29 11:53:51
 * @LastEditors: shaojia
 */
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";

@Component({ components: {} })
export default class SonCom extends Vue {
  @Prop({ default: false }) private visible!: boolean;
  @Prop({ default: 0 }) private count!: number;

  // 自定义价格
  public price = "";

  private created() {
    console.log("son created");
  }

  @Watch("count")
  private change(val: string): void {
    console.log(val, "获取细腻些");
    this.price = val;
  }

  // 对于出发父元素事件
  @Emit("setPrice")
  private setPrice() {
    return this.price;
  }
}
