export interface InputBlockConfig{
    name: string;
    label: string;
    value?: any;
    type: string,
    isVisible : boolean;
    isContinueVisible: boolean;
    inputStatus : boolean[];
}
export enum StatusType {
    SUCCESS = 1,
    ERROR 
  }
export interface Status{
    code: number;
    message: string;
    type: StatusType;
}
export interface CreateUserRequest{
    username: string;
    userpassword: string;
    useremail: string;
}

export interface CreateUserResponse{
    status: Status;
}

export enum BackgroundAction{
    LOGIN = 1,
    SIGNUP ,
    JOURNY_TO_PERSONAL_SPACE,
    PERSONAL_SPACE
}