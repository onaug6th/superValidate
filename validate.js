/**
 * validate.js
 * @author yangwj
 * @Date 2017-10-04
 */

/**
 * ES5实现的校验函数
 * [
 *      {
 *          el : "#userName",
 *          event : "change",
 *          config : {
 *              defaultValue:"",
 *              ...
 *          },
 *          callBack : function(){
 *              console.info([].slice.call(arguments));
 *          }
 *      }
 * ]
 * @param { Array } option 需要批量生成校验的数组。
 */
function validateES5(options) {

    if (options.length === 1) {
        document.querySelector(options[0].el).setAttribute("data-validate", JSON.stringify(data = new ValidateES5(options[0])));
    } else {
        options.forEach(function (option, index) {
            document.querySelector(option.el).setAttribute("data-validate", JSON.stringify(data = new ValidateES5(option)));
        });
    }

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

/**
 * 参考配置
 */
ValidateES5.prototype.EXAMPLE_CONFIG = {

    //  默认值
    defaultValue: "",

    //  范围设置
    rules: {
        //  必填
        required: {
            value: true,
            msg: "",
            callBack: function () {

            }
        },
        type: {
            /**
             * 校验类型
             * text     ：文本
             * number   ：数字
             * integer   ：整数
             * email    ：电子邮件
             * date     ：日期（默认为YYYY-MM-DD）
             */
            value: "text",
            msg: "",
            callBack: function () {

            }
        },
        max: {
            //  输入值不得大于max (只有type为number,integer时会触发校验)
            value: Number.MAX_VALUE,
            msg: "",
            callBack: function () {

            }
        },
        min: {
            //  输入值不得小于max (只有type为number,integer时会触发校验)
            value: Number.MIN_VALUE,
            msg: "",
            callBack: function () {

            }
        },
        maxLength: {
            //  输入值长度最大为
            value: Number.MAX_VALUE,
            msg: "",
            callBack: function () {

            }
        },
        minLength: {
            //  输入值长度最小为
            value: Number.MIN_VALUE,
            msg: "",
            callBack: function () {

            }
        },
        rangeLength: {
            //  输入值介于 ... 的长度
            value: [Number.MIN_VALUE, Number.MAX_VALUE],
            msg: "",
            callBack: function () {

            }
        },
        range: {
            //  输入值必须介于 ... 之间 (只有type为number,integer时会触发校验)
            value: [Number.MIN_VALUE, Number.MAX_VALUE],
            msg: "",
            callBack: function () {

            }
        }
    }

}

/**
 * 开始生成校验过程
 */
ValidateES5.prototype.init = function () {
    var that = this;
    that.el.addEventListener(that.event, function () {
        that.handleValidate(arguments);
    });
};

/**
 * 处理校验过程
 */
ValidateES5.prototype.handleValidate = function (args) {
    var params = {
        callee: args.callee
    };
    var that = this;
    var rules = this.config.rules;
    var value = this.el.value;

    for (var method in rules) {
        if (!that.methods[method].call(that, value)) {
            break;
        }
    }

};

/**
 * 方法集
 */
ValidateES5.prototype.methods = {
    required: function (value) {
        var defaultValue = this.config.defaultValue;
        var msg = this.config.rules["required"].msg;
        var callBack = this.config.rules["required"].callBack;
        var answer = true;
        if (!value) {
            if (msg) {
                alert(msg);
            }
            if (defaultValue) {
                this.el.value = defaultValue;
            }
            answer = false;
        }
        if (typeof callBack === "function") {
            callBack({
                value: value,
                that: this
            });
        }
        return answer;
    }
}

ValidateES5.prototype.deepCopy = function (obj, target) {
    obj = obj || {};
    var that = this;
    for (var i in target) {
        var value = target[i];
        if (typeof value === "object") {
            Object.prototype.toString.call(value) === "[object Array]" ? obj[i] = [] : "";
            obj[i] = that.deepCopy(obj[i], value);
        } else {
            obj[i] = value;
        }
    }
    return obj;
}