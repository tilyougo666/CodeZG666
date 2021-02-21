let baseURL;
switch(process.env.NODE_ENV){
    case 'development':
        baseURL = "http://dev-mall-pre.sprintboot.cn/api";
        break;
    case 'production':
        baseURL ="http://mall-pre.sprintboot.cn/api";
        break;
    default:
        baseURL ="http://mall-pre.sprintboot.cn/api";
        break;
}


export default {
    baseURL
}