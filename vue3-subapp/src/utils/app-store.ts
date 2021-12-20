/*
 * @Description  :应用通信
 * @Author       : lihui
 * @Date         : 2021-05-25 13:33:31
 * @LastEditTime : 2021-05-27 17:33:19
 * @LastEditors  : lihui
 * @FilePath     : d:\workspace\lee\vue3-demo\vue3-subapp\src\utils\app-store.ts
 */
import { propsITF } from "@/types";
export const appStore = (props:propsITF) => {
  if (props) {
    props.onGlobalStateChange = (value: any, prev: any) => {
      console.log(value, prev);
    };
    props.setGlobalState = {
      ignore: props.name,
      msg: `来自${props.name}的消息`
    };
  }
};
