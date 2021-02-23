document.write("I am quanzhanjiajia666<br>")
//在入口文件中导入module模块
document.write(require('./module.js'))
//导入css模块
//require('!style-loader!css-loader!./site.css')
//导入css模块的另一种方式
require('./site.css')