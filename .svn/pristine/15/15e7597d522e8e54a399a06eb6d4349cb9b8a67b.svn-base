import { Jsons } from "../typings/global"
import http from '/@/units/requerst'

/**
 * 登录操作
 * @param username 
 * @param password 
 */
export const getLogin = (username: string, password: string): Promise<any> => {
    return new Promise<Jsons<userInfo>>((resolve, reject) => {
        http({
            url: 'http://#',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username,
                password
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
