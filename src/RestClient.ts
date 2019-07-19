import axios from 'axios';
import { Pojo } from 'classModel';
import GetEntitiesResponse from './response/GetEntitiesResponse';

export interface RestClientArgs {
    baseUri: string;
    logDebug: (...args: any[]) => void;
}

export default class RestClient {
    public constructor(private args: RestClientArgs) {
    }
    public getEntities(): Promise<GetEntitiesResponse> {
        return axios.get(`${this.args.baseUri}/entity`).then(response => {
            if(response.status >= 400) {
                return new Error();
            }
            return response.data;
        }).then(data => {
            const r = new GetEntitiesResponse(data.success, data.result);
            return r;
        });
    }
    
    public getAll(): Promise<any> {
        return axios.get(this.args.baseUri + '/getAll').then(response => response.data).then(data => {
            if(!data.success) {
                throw new Error(data.error);
            }
            return data.result;
        });
    }
    
    public getProjects(): Promise<Pojo.ProjectPojo[]> {
        return axios.get(this.args.baseUri + '/project').then(response => response.data).then(data => {
            if(!data.success) {
                throw new Error(data.error);
            }
            return data.projects.map((project: any): Pojo.ProjectPojo => {
                const p: Pojo.ProjectPojo = { id: project.id,
                    name: project.name };
                return p;
            });
        });
    }
}
