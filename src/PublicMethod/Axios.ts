// 引入http
import qs from "qs";
import { Message } from "element-ui";
import axios from "axios";

// tslint:disable-next-line:typedef
let Axios:any = axios;


export  class ClassTree {
    getTreedata(Url:string):any {
        return     Axios({
            method: "GET",
            ContentType: "application/json",
            url: Url,
            data:{}
          });
    }
}
