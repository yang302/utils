/************ is判断  **********/
export const isArray = obj => {      
    return Object.prototype.toString.call(obj) === '[object Array]';       
}

/**
 * 判断空数组　
 * @param {数组} arr 
 */
export const isEmptyArrar = arr => {
    return Array.isArray(arr) && !arr.length;
};

/**
 * 判断空对象
 * @param {对象} obj 
 */
export const isEmptyObj = obj => {
    return DataType(obj, "object") && !Object.keys(obj).length;
};

/**
 *  检测非空参数
 */
export const isRequired = ()  => {
    thrownewError("param is required");
};



/************ 工具类  **********/
/**
 * 格式化金钱
 * @param {金额} number 
 */
export const ThousandNum = number => {
  let _number = null;
  if (number) {
    _number = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return _number;
};

/**
 * 生成随机ID
 * @param {长度} len 
 */
export const createRandomId = (len = isRequired()) => {
    let _len = 0;

    if (len > 0) {
        _len = Math.random().toString(36).substr(3, len);
    }
    
    return _len;
};

/**
 * 生成随机颜色值
 */
export const createRandomColor = () => {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
};

/**
 * 生成星级评分
 * @param {星星个数} rate 
 */
export const createStarScore = rate => {
    return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
};

/**
 * 判断奇偶
 * @param {数字} num 
 */
export const judgeOddEven = (num  = isRequired()) => {
    num = parseFloat(num);
    return !!(num & 1) ? "odd" : "even";
};

/**
 * 获取数组中最小最大值
 * @param {数组} arr 
 * @param {最小或最大} minOrMax 
 */
export const getMinMax = (arr, minOrMax) => {
    if (!isArray(arr)) {
        return null;
    }

    if (minOrMax === 'min') {
        return Math.min(...arr);
    } else {
        return Math.max(...arr);
    }
};

/**
 * 生成范围随机数
 * @param {最小} min 
 * @param {最大} max 
 */
export const RandomNum = (min = isRequired(), max  = isRequired()) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 判读数据类型
 * @param {判断对象} tgt 
 * @param {判断类型} type 
 */
export const DataType = (tgt = isRequired(), type = isRequired()) => {
    const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();
    return type ? dataType === type : dataType;
};

/**
 * 数组去重
 * @param {数组} arr 
 */
export const uniqArrar = arr => {
    return [...new Set(arr)];
};

/**
 * 数组乱序
 * @param {数组} arr 
 */
export const disruptArray = arr => {
    return arr.slice().sort(() => Math.random() - .5);
};

/**
 * 统计数组成员个数
 * @param {数组} arr 
 */
export const countArrayItem = arr => {
    const count = arr.reduce((t, v) => {
        t[v] = t[v] ? ++t[v] : 1;
        return t;
    }, {});

    return count;
};

/**
 * 获取随机数组成员
 * @param {数组} arr 
 */
export const randomArrarItem = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
};

/**
 * 函数执行一次
 * @param {只执行一次的函数} fn1 
 * @param {执行多次的函数} fn2 
 */
export const onceFn = (fn1, fn2) => {
    fn1 && fn1();
    onceFn = function() {
        fn2 && fn2();
    }
};
