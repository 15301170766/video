// 定义一个接口-->后台页面-->告警管理-->leftTree
export interface ItreeData {
    id:number;
    label:string;
    children?:Array<ItreeData>;
}