/**
 * 将 js 对象转化为URL参数
 * @param  {Object} obj 对象数据
 * @return {String}     'k1=v1& ...'
 */
export function parseParam (obj) {
    // console.log('====>',obj);
    var query = '',
        name, value, fullSubName, subName, subValue, innerObj, i;

    for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
            for (i = 0; i < value.length; ++i) {
                subValue = value[i];
                fullSubName = name + '[' + i + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += parseParam(innerObj) + '&';
            }
        } else if (value instanceof Object) {
            for (subName in value) {
                subValue = value[subName];
                fullSubName = name + '[' + subName + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += parseParam(innerObj) + '&';
            }
        } else if (value !== undefined && value !== null)
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
    var result = query.length ? query.substr(0, query.length - 1) : query;
    // console.log('++++++>',result);
    return result;
};

export function translateHtml(str){
    return str.replace(/\r\n/g, "<br />");
}
