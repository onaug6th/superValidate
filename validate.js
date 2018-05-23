/**
 * validate.js
 * @author yangwj
 * @Date 2017-10-04
 */

/**
 * ES5实现的校验函数
 * @param { Array } option 需要批量生成校验的数组。
 */
function validateES5(option) {

    var args = Array.prototype.slice.call(arguments);

    args.forEach(function (options, index) {
        el.setAttribute("data-validate", (data = new ValidateES5()));
    });
}

/**
 * ES5构造函数
 * @param {*} options 
 */
var ValidateES5 = function (options) {
    //  全部配置
    this.options = options;
    //  挂载目标
    this.el = document.querySelector(options.el);
    //  校验事件
    this.event = options.event;
    //  校验规则
    this.config = options.config;
    //  回调函数
    this.callBack = options.callBack;

    this.init();
};

ValidateES5.prototype.init = function () {
    var that = this;
    that.el.addEventListener(that.type, function () {
        that.handleValidate();
    });
};


ValidateES5.prototype.handleValidate = function () {

};