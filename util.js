/**
 * description: 工具类
 */
function Util() {
    this.name = 'util-kit';

    this.isString = function (str) {
        return typeof str === 'string';
    }
    this.isObject = function (obj) { 
        return typeof obj === 'object';
    }
    this.isFunction = function (fn) {
        return typeof fn === 'function';
    }
    this.isArray = function (arr) {
        return Array.isArray(arr);
    }
    this.isNumber = function (num) {
        return typeof num === 'number';
    }
    this.isBoolean = function (bool) {
        return typeof bool === 'boolean';
    }
    this.isNul = function (val) {
        return val === null || val === undefined;
    }
}