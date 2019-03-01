import ajax from './ajax.js'
const BASE = '/api'
//param  需要设置路由规则  位置
export const  reqPosition = (long,lati) =>  ajax(`${BASE}/position/${long},${lati}`)
//无参数  食品分类
export const  reqCategary = () => ajax(BASE+'/index_category')
//query  无需设置路由规则   商铺分类
export const  reqShops =  ({long,lati}) => ajax(BASE+'/shops',{long,lati})


// 用户名密码登录
export const reqLogin_pwd = ({name,pwd,captcha}) => ajax(BASE+'/login_pwd',{name,pwd,captcha},'POST')

//发送短信验证
export const reqSendCode = (phone) => ajax(BASE+ '/sendcode',{phone})

//手机号验证码登陆
export const reqLogin_sms = ({phone,code}) => ajax(BASE+'/login_sms',{phone,code},'POST')
//根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE+'/userinfo')
//用户登出
export const reqLogout = () => ajax(BASE+'/logout')


//商家接口  good info Rating
export const reqGoods = () => ajax('/goods')
export const reqRatings = () => ajax('/ratings')
export const reqInfo = () => ajax('/info')
