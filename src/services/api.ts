
import axios from "services/axios.customize"

export const registerAPI = (fullName: string, email: string, password: string, phone: string) => {
    const urlBackend = "/api/v1/user/register"
    return axios.post<IBackendRes<IRegister>>(urlBackend, { fullName, email, password, phone })
}

export const loginAPI = (username: string, password: string) => {
    const urlBackend = "/api/v1/auth/login"
    return axios.post<IBackendRes<ILogin>>(urlBackend, { username, password, }, {
        headers: {
            delay: 3000
        }
    })
}

export const fetchAccountAPI = () => {
    const urlBackend = "/api/v1/auth/account"
    return axios.get<IBackendRes<IFetchAccount>>(urlBackend, {
        headers: {
            delay: 3000
        }
    })
}

export const logoutAPI = () => {
    const urlBackend = "/api/v1/auth/logout"
    return axios.post<IBackendRes<IFetchAccount>>(urlBackend, {
        headers: {
            delay: 3000
        }
    })
}

export const getUsersTableAPI = (query: string) => {
    const urlBackend = `/api/v1/user?${query}`;
    return axios.get<IBackendRes<IModelPaginate<IUserTable>>>(urlBackend)
}

export const createUserAPI = (fullName: string, email: string, password: string, phone: string) => {
    const urlBackend = "/api/v1/user/"
    return axios.post<IBackendRes<IRegister>>(urlBackend, { fullName, email, password, phone })
}
export const ImportUsersAPI = (dataImport: {
    fullName: string,
    email: string,
    phone: string,
    password: string
}[]) => {
    const urlBackend = "/api/v1/user/bulk-create"
    return axios.post<IBackendRes<IImportUser>>(urlBackend, dataImport);
}

export const putUpdateUserAPI = (_id: string, fullName: string, phone: string) => {
    const urlBackend = "/api/v1/user/"
    return axios.put<IBackendRes<IRegister>>(urlBackend, { _id, fullName, phone })
}

export const DeleteUserAPI = (_id: string) => {
    const urlBackend = `api/v1/user/${_id}`
    return axios.delete<IBackendRes<IRegister>>(urlBackend)
}

export const getBooksTableAPI = (query: string) => {
    const urlBackend = `/api/v1/book?${query}`;
    return axios.get<IBackendRes<IModelPaginate<IBookTable>>>(urlBackend, {
        headers: {
            delay: 3000
        }
    })
}

export const getCategoryBook = () => {
    const urlBackend = `/api/v1/database/category`;
    return axios.get<IBackendRes<string[]>>(urlBackend)
}

export const UploadBookImgAPI = (fileImg: any) => {
    const bodyFormData = new FormData();
    bodyFormData.append('fileImg', fileImg)
    return axios({
        method: 'post',
        url: '/api/v1/file/upload',
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            "upload-type": "book"
        }
    })
}

export const createBookAPI = (
    mainText: string,
    author: string,
    category: string,
    price: number,
    quantity: number,
    slider: string[],
    thumbnail: string,
    sold: number
) => {
    const urlBackend = "/api/v1/book/"
    return axios.post<IBackendRes<IBookTable>>(urlBackend, { thumbnail, slider, mainText, author, price, sold, quantity, category })
}

export const putUpdateBookAPI = (
    _id: string,
    mainText: string,
    author: string,
    category: string,
    price: number,
    quantity: number,
    slider: string[],
    thumbnail: string,
    sold: number
) => {
    const urlBackend = `/api/v1/book/${_id}`
    return axios.put<IBackendRes<IBookTable>>(urlBackend, { thumbnail, slider, mainText, author, price, sold, quantity, category })
}

export const DeleteBookAPI = (_id: string) => {
    const urlBackend = `api/v1/book/${_id}`
    return axios.delete<IBackendRes<IRegister>>(urlBackend)
}