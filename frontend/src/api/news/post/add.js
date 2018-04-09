/**
 * Created by Administrator on 2017/5/23.
 */
import qs from 'qs';
import {config} from '../../globalConfig'
import axios from 'axios';

export const requestAddNews = (param , context) =>
{
    //添加token
    let form = config.token('post' , param);
    let url = config.website + 'news/post/add';
    return axios.post(url , qs.stringify(param))
};
