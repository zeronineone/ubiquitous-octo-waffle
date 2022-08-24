export class ApiConfigs {
   // static localBaseUrl = "http://localhost:8103/blackhole/"
    static localBaseUrl = "https://apis.zeronineone.dev/blackhole/"
    static prodBaseUrl = "https://apis.zeronineone.dev/blackhole/"
   // static prodBaseUrl = "http://65.0.85.153:8103/blackhole/"
    
    static prodHeaders = {
        'application-id': "5be5ed03-247a-4609-967c-4e39279ec729",
        'application-secret': "b0d52976-8ebc-4242-9a10-aeb504b10dc4",
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