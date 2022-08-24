import { UserType } from "./config-objects";


export interface CreateCredentialsRequest {
    name : string;
    userName : string;
    password : string;
    url : string;
    description : string;
    hint : string;
}

export interface GetCredentialsRequest {
    ids : string[];
}