import { parseParam } from '../utils/object.tool';


const host = 'https://ruby-china.org';
// const port = 80;
const api = '/api/v3/';

/**
 * 接口：帖子列表
 * @return {String} /api/v3/topics.json
 */
export function topicList(opt){
    var param = parseParam(opt);
    param = !param ? '' : '?' + param;
    return host + api + 'topics.json' + param;
}

/**
 * 接口：节点列表
 * @return {String} /api/v3/nodes.json
 */
export function nodeList(){
    return host + api + 'nodes.json';
}

/**
 * 接口：节点详情
 * @param  {Number} id 节点ID
 * @return {String}    /api/v3/nodes/:id.json
 */
export function nodeDetails(id){
    return host + api + 'nodes/'+id+'.json';
}
