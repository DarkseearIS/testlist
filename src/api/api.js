import * as axios from "axios"

const instance = axios.create(
    {
        baseURL: 'http://armspb.mooo.com:3300/api/',


    }
);

export const userAPI = {
    getUser(){
        return instance.get(`user`)
    },

    setUserInfo(data) {
        debugger
        return instance.post(`addUser`, data)
    }
}