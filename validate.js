/**
 * validate.js
 * @param { Array } option 需要批量生成校验的数组。
 */
function validateES5(option) {

    var args = Array.prototype.slice.call(arguments);

    args.forEach(function (options, index) {
        new Validate();
    });
}

/**
 * 构造函数
 * @param {*} options 
 */
var ValidateES5 = function (options) {
    this.options = options
    this.el = document.querySelector(options.el);
    this.event = options.event;
    this.type = options.type;
    this.event = options.event;
    this.callBack = options.callBack;

    this.init();
}

ValidateES5.prototype.init = function () {
    var that = this;
    var el = that.el;
    el.setAttribute("data-validate", that.event);
    el.addEventListener(that.type, function () {
        that.handleValidate();
    });
}


ValidateES5.prototype.handleValidate = function () {

}