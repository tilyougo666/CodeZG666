module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:"https://mall-pre.stringboot.cn",
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}