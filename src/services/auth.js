import { useMutation } from "react-query"
import { request } from "./http-client"

const loginFn = async (data, table_slug)=> await request.post(`/object/${table_slug}`, data)

const useAuth = ({table_slug, loginQueryProps})=>{
    const objectMutation = useMutation((data) => loginFn(data, table_slug), loginQueryProps)
    return {
        objectMutation
    }
}

export default useAuth
