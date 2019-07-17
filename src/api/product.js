// import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {jsonpOptions} from './config';

export const getProductDetail = id => {
  // https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/?jsv=2.4.8&appKey=12574478&t=1563035525549&sign=35f0d188e0fa3deb19a99780c14c1fe6&api=mtop.taobao.detail.getdetail&v=6.0&dataType=jsonp&ttid=2017%40taobao_h5_6.6.0&AntiCreep=true&type=jsonp&callback=mtopjsonp2&data=%7B%22itemNumId%22%3A%22593172618839%22%7D
  const url = 'https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
  const params = {
    appKey: 12574478,
    api: 'mtop.taobao.detail.getdetail',
    v: '6.0',
    dataType: 'jsonp',
    ttid: '2017@taobao_h5_6.6.0',
    type: 'jsonp',
    data: `{"itemNumId":"${id}"}`
  };
  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.data) {
      return res.data;
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
