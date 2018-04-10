/**
 * Created by Administrator on 2017/5/23.
 */
import {config} from '../../globalConfig'
import axios from 'axios'
export const requestGetOneNews = (param , context) =>
{
    let url = '';
    let token = config.token('get');
    if(param.id){
        url = config.website + 'news/get/queryOneById?id='+param.id;
    }else{
        url = config.website + 'news/get/queryOneById';
    }
    return axios.get(url , param)
};
