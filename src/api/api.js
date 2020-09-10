import * as axios from "axios"

const instance = axios.create(
    {
        baseURL: 'https://armspb.mooo.com:3200/api/',
    }
);

export const userAPI = {
    getUser(){
        return instance.get(`user`)
    },

    setUserInfo(data) {
        debugger
        return instance.post(`addUser`, data)
    },

    deleteUser(id){
        return instance.delete(`/deleteUser/${id}` )
    },

    editUserInfo(id, {name, lastName, email}){
        return instance.put(`/putUser/${id}`, {name, lastName, email} )
    }
};