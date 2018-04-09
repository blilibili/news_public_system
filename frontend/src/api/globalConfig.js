/**
 * Created by Administrator on 2017/5/24.
 */
export const config = {
    //表单正确状态码
    isTrue:1,
    //正式
    website:'http://localhost:3001/',
    //测试服务器环境
    //website:'http://best-project-backend.test.xlcw.com/',
    //测试
    //website:'http://localhost:3001/',
    //best 游戏id
    game_id:20,
    //系统id 1:xlcw.gms.com,2:tw.gms.com.3:best.gms.com
    systemId:3,
    //上传文件地址
    uploadAddress(){
        let address = this.website + 'game/res_upload/upload';
        return address;
    },
    token(methods , param={}){
        let token = localStorage.getItem('token');
        if(token){
            if(methods == 'post'){
                param.session_id = token;
                return param;
            }
            if(methods == 'get'){
                return '/session_id/'+token
            }
        }else{
            return false;
        }
    },
    //新增成功的回调函数 path 新增成功跳转的路径 data 新增成功返回的数据 context 新增的上下文
    submitCallback(path , data , context){
        if(data.status == 1001){
            context.$Notice.error({
                title: '失败',
                desc:data.msg
            });
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('uid');
            context.$router.replace('/best/login');
        }else{
            if(data.status == 1){
                context.$Notice.success({
                    title: '成功',
                    desc:data.msg
                });
                context.$router.replace(path);
            }else{
                context.$Notice.error({
                    title: '失败',
                    desc:data.msg
                });
            }
        }
    },
    //获取列表判断是否有登录状态
    isLogin(data , context){
        if(data.status == 1001){
            context.$Notice.error({
                title: '失败',
                desc:data.msg
            });
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('uid');
            context.$router.replace('/best/login');
        }else{
            return true;
        }
    },
    //判断类型
    typeOf(obj) {
        const toString = Object.prototype.toString;
        const map = {
            '[object Boolean]'  : 'boolean',
            '[object Number]'   : 'number',
            '[object String]'   : 'string',
            '[object Function]' : 'function',
            '[object Array]'    : 'array',
            '[object Date]'     : 'date',
            '[object RegExp]'   : 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]'     : 'null',
            '[object Object]'   : 'object'
        };
        return map[toString.call(obj)];
    },
};
