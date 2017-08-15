/**
 * @file:      工具
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-08-15 19:39:42
 */
const chalk = require('chalk');
var request = require('request');
module.exports = {
    getContributions: function(name) {
        if (!name) {
            console.log(chalk.red('请输入用户名!'));
            return;
        }
        var url = 'https://github.com/users/' + name + '/contributions'
        request.get(url,function(err, res, body){
            if (err) {
                console.err('用户名不存在或者网络错误');
            }
            console.log(body);
        })
    }
};