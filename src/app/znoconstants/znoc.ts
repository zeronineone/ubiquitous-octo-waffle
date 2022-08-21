export class ApiConfigs {
    static localBaseUrl = "http://localhost:8103/blackhole/"
    static prodBaseUrl = "https://apis.zeronineone.dev/blackhole/"
    
    static prodHeaders = {
        'application-id': "0ff360d7-281c-4cc6-a229-1ec3d43db840",
        'application-secret': "8de09935-6f00-4f76-84ef-3681989dd4e3",
        'user-id': "",
        'token': "",
        'user-type': ""
    }
 
    static localHeaders = {
        'application-id': "a8e9cda4-c957-44be-98b6-538a57ed2539",
        'application-secret': "4b5ab7d6-0e24-4327-a59f-0f9aae5ed216",
        'user-id': "",
        'token': "",
        'user-type': ""
    }
    static otpUrl =  "bifrost/login/otp/generate/email" ;
    static otpVerifyUrl = "bifrost/login/otp/verify/email" ;
    static createCredentials = "saveit/credentials" ;
    static getCredentials = "saveit/credentials/information" ;
    static updateCredentials = "saveit/credentials/information" ;
}