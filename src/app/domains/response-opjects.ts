import { StatusType } from "./config-objects";

 
export interface StatusResponse{
    errors : string[]
    statusCode : number
    statusMessage : string
    statusType : StatusType
}

export interface ApiResponse{
    statusResponse : StatusResponse;
}

export interface OtpResponse extends ApiResponse{
    coolDownTimeInSec : string
    newUser : string
    noOfDigits : string
    retryRemaining : string
}

export interface TokenResponse extends ApiResponse{
    userId : string
    token : string
    userType : string
    expiresAt : number
}

export interface CredentialsResponse extends ApiResponse{
    credentials : BlackHole[];
}

export interface BlackHole{
    id : string;
    name : string;
    userName : string;
    password : string;
    url : string;
    description : string;
    hint : string;
    createdAt : string;
    modifiedAt : string;
}