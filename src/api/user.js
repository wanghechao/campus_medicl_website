import request from "@/utils/request"

// 病人注册请求接口
export const user_regist = (regist_data) => {
    const params = new URLSearchParams();
    for(let key in regist_data) {
        params.append(key , regist_data[key]);
    }
    return request.post('/patient/RegistPatient' , params)
}
// 病人登录请求接口
export const user_login = (login_data) => {
    const params = new URLSearchParams();
    for(let key in login_data) {
        params.append(key , login_data[key]);
    }
    return request.post('/patient/LoginPatient' , params)
}

// 获取用户信息
export const user_edit_message = () => {
    return request.get('/patient/UserInfo')
}

// 修改用户基本信息
export const change_user_info = (new_user_info) => {
    
    return request.post('/patient/ChangeUserInfo' , new_user_info )
}

// 用户头像上传
export const upload_avatar = (user_avatar) => {
    const formData = new FormData();
    formData.append("file" , user_avatar);

    return request.post("/patient/UploadAvatar" , formData )
}