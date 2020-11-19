import * as axios from "axios"

const instance = axios.create(
    {
        baseURL: 'http://armspb.mooo.com/api/',
    }
);

export const userAPI = {
    getUser(){
        return instance.get(`user`)
    },

    setUserInfo(data) {
        return instance.post(`addUser`, data)
    },

    deleteUser(id){
        return instance.delete(`/deleteUser/${id}` )
    },

    editUserInfo(id, {name, lastName, email}){
        return instance.put(`/putUser/${id}`, {name, lastName, email} )
    }
};