import { useQuery } from "react-query";
import { request } from "./http-client";

const getProjectsFn = async (data) => await request.post('/v1/object/get-list/website_projects', {
    data
})

const getProjectFn = async (id) => await request.get(`/v1/object/website_projects/${id}`)

const useProjects = ({
    projectParams,
    projectId
}) => {
    const projects = useQuery(['GET_PROJECTS', projectParams], ()=>getProjectsFn(projectParams), {
        enabled: !!(projectParams)
    })
    const project = useQuery(['GET_PROJECT',projectId], ()=>getProjectFn(projectId), {
        enabled: !!(projectId)
    })
   
    return {
        projects: projects?.data,
        project: project?.data
    }
}


export default useProjects
