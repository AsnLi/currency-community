
import fetch from '../fetch';
const pathPrefix = "api/";

/**
 * 获取用户信息
 *
 * @param {any} userId 用户id
 * @returns 用户信息
 */

const sentimentNewsList = (parm) => {
    return fetch({
        url: pathPrefix + 'getallclass',
        method: 'get',
        data: parm
    });
}

const userApiList = {
    sentimentNewsList  //登录
};

export default userApiList;