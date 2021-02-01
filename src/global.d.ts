/*
 * @Description:
 * @Author: shaojia
 * @Date: 2021-01-29 12:44:16
 * @LastEditTime: 2021-01-29 12:48:03
 * @LastEditors: shaojia
 */
interface Window {
  sa: any;
  WeixinJSBridge: any;
  WeixinJSBridgeReady: any;
  stopPagination: Function;
}

interface Document {
  attachEvent: any;
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
