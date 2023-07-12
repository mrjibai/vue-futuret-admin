/**
 * 防抖
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null  
 */
export const Debounce = (func:Function, wait:number, immediate = false) => {
    console.log(1);
    let timer:any;
    return function () {
        const context = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            const callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timer = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
}

/**
 * 节流
 * @param {Function} fn 要执行的回调函数
 * @param {Number} time 多少秒内执行
 * @returns 
 */
export const throttle = (fn:Function, time = 1000) => {
    let lock = true;
    return function () {
        const self = this   //拿到this vue中使用指向vue
        const args = arguments  //获取参数
        if (!lock) {
            return
        }
        fn.apply(self, args) // 回调函数中拿到参数
        lock = false   //关锁
        setTimeout(() => {
            lock = true
        }, time);
    }
}