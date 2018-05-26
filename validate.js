/**
 * validate.js
 * @author yangwj
 * @Date 2017-10-04
 */

/**
 * ES5实现的校验函数
 * @param { Array } option 需要批量生成校验的数组。
 */
function validateES5(options) {

    options.forEach(function (option, index) {
        option.el.setAttribute("data-validate", (data = new ValidateES5(option)));
    });
}

/**
 * ES5构造函数
 * @param {*} option
 */
var ValidateES5 = function (option) {
    //  全部配置
    this.options = option;
    //  挂载目标
    this.el = document.querySelector(option.el);
    //  校验发生的事件
    this.event = option.event;
    //  校验规则
    this.config = option.config;
    //  回调函数
    this.callBack = option.callBack;

    this.init();
};

ValidateES5.prototype.init = function () {
    var that = this;
    that.el.addEventListener(that.type, function () {
        that.handleValidate();
    });
};


ValidateES5.prototype.handleValidate = function () {
    this.config
};