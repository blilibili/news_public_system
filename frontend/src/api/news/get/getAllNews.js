/**
 * Created by Administrator on 2017/5/23.
 */
import {config} from '../../globalConfig'
import axios from 'axios'
export const requestGetAllNews = (param , context) =>
{
    let url = '';
    let token = config.token('get');
    if(param.page){
        url = config.website + 'news/get/queryAll?page='+param.page;
    }else{
        url = config.website + 'news/get/queryAll';
    }
    return axios.get(url , param)
};
