 
export interface StatusResponse{
    errors : string[]
    statusCode : number
    statusMessage : string
    statusType : string
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