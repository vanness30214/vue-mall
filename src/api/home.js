import axios from 'axios';
import {TIME_OUT, SUCC_CODE} from 'api/config';
import jsonp from 'assets/js/jsonp';

// 获取swpier数据
export const getHomeSlider = () => {
  return axios.get('https://www.imooc.com/api/home/slider', {timeout: TIME_OUT}).then(res => {
    // console.log(res.data.slider);
    if (res.data.code === SUCC_CODE) {
      return res.data.slider;
    }
    throw new Error('没有成功获取数据');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
    return [
      {
        linkUrl: 'www.baidu.com',
        picUrl: require('assets/img/404.png')
      }
    ];
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  });
};

export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };
  return jsonp(url, params, {
    params: 'callback'
  }).then(res => {
    console.log(res);
  });
};
