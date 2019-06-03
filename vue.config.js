const Path = require("path")
module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://baidu.com",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{//配置项
        resolve:{//别名配置
            alias:{
                "@":Path.resolve(__dirname,"./src"),
                "@common":Path.resolve(__dirname,"./src/common"),
                "@api":Path.resolve(__dirname,"./src/api"),
                "@components":Path.resolve(__dirname,"./src/components"),
                "@utils":Path.resolve(__dirname,"./src/utils"),
                "@views":Path.resolve(__dirname,"./src/views") //__dirname  是一个绝对路径
            }
        }
    }
}