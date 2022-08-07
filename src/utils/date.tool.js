/**
 * 时间戳函数
 * @param  {String} timeStr 时间字符串
 * @return {Timestamp}      时间戳
 */
export function parseTime(timeStr) {
    if(!timeStr){
        return Date.now();
    }
    return (new Date(timeStr)).getTime();
}

/**
 * 时间比较函数
 * @param  {Timestamp} timeEnd   大的时间
 * @param  {Timestamp} timeStart 小的时间
 * @return {String}              时间差值 2天|4小时|6分钟|34秒
 */
export function timeDiffCounter(timeEnd, timeStart) {
    var diff = timeEnd - timeStart;
    if (diff <= 0) {
        return '0秒';
    }

    //计算出相差天数
    var days = Math.floor(diff / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);

    if (days > 0) {
        return days + '天';
    }
    if (hours > 0) {
        return hours + '小时';
    }
    if (minutes > 0) {
        return minutes + '分钟';
    }
    return seconds + '秒';
};
