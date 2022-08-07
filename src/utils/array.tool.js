
/**
 * 将首页的节点数据分组
 * @param  {Array} data  数据列表     [{section_id:1, section_name:'ruby', id:1, name:'新手问题'}, ...]
 * @return {Array}       分组后的数据  [[section_id:1, section_name:'ruby', node_list:[] ], ...]
 */
export function nodeGroup(data){
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let node = data[i];
        let group = arrayGetItemByKey(result, 'section_id', node.section_id);
        if (!group) {
            group = {section_id:node.section_id,section_name:node.section_name,node_list:[]}
            result.push(group);
        }
        group.node_list.push(node)
    }
    return result;
}

/**
 * 取得数组最小值
 * @param array
 * @returns
 */
var arrayMin = function(array) {
    return array.sort(function(a, b) {
        return a - b;
    })[0];
};

/**
 * 取得数组最大值
 * @param array
 * @returns
 */
var arrayMax = function(array) {
    return array.sort(function(a, b) {
        return b - a;
    })[0];
};

/**
 * 根据给定的值 删除数组的某项
 * @param array
 * @param item 给定的值
 * @return 删除某项后的数组
 */
var arrayRemoveItem = function(array, item) {
    var i = array.indexOf(item);
    if (i >= 0) {
        array.splice(i, 1);
    }
    return array;
};

/**
 * 添加数组项目，如果已存在则不在添加
 */
var arrayAddItem = function(array, item) {
    var i = array.indexOf(item);
    if (i < 0) {
        array.push(item);
    }
    return array;
};

/**
 * 通过key获取数组的项目 数组例如[{},{}]
 * @param array 所查询的数组
 * @param key 某个key值，通过此字段获取数组项目
 * @param val 与key所对应的值
 */
var arrayGetItemByKey = function(array, key, val) {
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item[key] == val) {
            return item;
        }
    };
};

/**
 * 通过key删除商品
 * @param array
 * @param key
 * @param val
 * @private
 */
var arrayDeleteItemByKey = function(array, key, val) {
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item[key] == val) {
            array.splice(i, 1);
        }
    };
};

/**
 * 数组排序
 * @param  {Array} array 需要排序的数组
 * @param  {String} attr  排序的字段
 * @param  {String} sort  排序方式 'asc'|'desc'
 * @return {Array}       排序后的字段
 * @example
 * arraySort([{id:1,sort:100},{id:2,sort:99}],'sort','desc')
 */
var arraySort = function(array, attr, sort) {
    return array.sort(function(a, b) {
        switch (sort) {
            case 'asc':
                return a[attr] - b[attr];
                break;
            case 'desc':
                return b[attr] - a[attr];
                break;
            default:
                return a[attr] - b[attr];
        }
    });
};
