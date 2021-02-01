import { Component, Vue } from "vue-property-decorator";

import SonCom from "./Son/index.vue";

@Component({
  components: {
    SonCom
  }
})
export default class Father extends Vue {
  private price = 0;
  private visible = false;

  public setFatherPrice(value: number) {
    alert(value);
  }
}
