export class ApiConfigs {
    static localBaseUrl = "http://localhost:8103/"
    //static prodBaseUrl = "https://apis.zeronineone.dev/"
    static prodBaseUrl = "https://apis.agastu.com/"
    static prodHeaders = {
        'application-id': "0ff360d7-281c-4cc6-a229-1ec3d43db840",
        'application-secret': "8de09935-6f00-4f76-84ef-3681989dd4e3"
    }
    static localHeaders = {
        'application-id': "e97beb9a-5d17-4449-ad2e-2f0b51d1324b",
        'application-secret': "4c9c1c44-81e3-4839-b089-f16596c1844b"
    }
    static otpUrl = "sagittarius/pythagoras/login/otp/generate/email" ;
    static otpVerifyUrl = "sagittarius/pythagoras/login/otp/verify/email" ;
}