import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {jsonpOptions, TIMEOUT} from './config';

// 获取热门搜索数据--ajax
export const getSearchHotKeyword = () => {
  return axios.get('https://www.imooc.com/api/search/hot', {
    // timeout: 10
    timeout: TIMEOUT
  }).then(res => {
    // console.log(res);
    res = res.data.hotKeyWord;
    if (res && res.owner) { // succeed
      return res.owner;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};

// 获取搜索结果数据--jsonp
export const getSearchResult = keyword => {
  const url = 'https://suggest.taobao.com/sug';
  const params = {
    q: keyword,
    code: 'utf-8',
    area: 'c2c',
    nick: '',
    sid: null
  };

  // jsonpOptions.timeout = 100;

  return jsonp(url, params, jsonpOptions).then(res => {
    // console.log(res);
    if (res.result) {
      // console.log(res);
      return res.result;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};
