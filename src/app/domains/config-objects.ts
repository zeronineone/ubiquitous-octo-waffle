import { MoveDirection } from "tsparticles-engine";

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
    SUCCESS = "SUCCESS",
    ERROR = "ERROR" 
  }
  export enum CountryCode {
    IN = "IN"
  }
  export enum UserType {
    ZNO_USER = "ZNO_USER",
    ZNO_ADMIN = "ZNO_ADMIN",
    ZNO_SUPPORT = "ZNO_SUPPORT",
    ZNO_DEVELOPER = "ZNO_DEVELOPER"
  }
export interface Status{
    code: number;
    message: string;
    type: StatusType;
}

export interface CreateUserResponse{
    status: Status;
}
export interface CreateUserRequest{    
    useremail: string;
}
export enum BackgroundAction{
    LOGIN = 1,
    SIGNUP ,
    JOURNY_TO_PERSONAL_SPACE,
    PERSONAL_SPACE
}

export interface UserAuth{
  userId: string;
  token: string;
  userType: UserType;
  expiresAt: Number;
}
export interface BgUpdateEvent{
  moveDirection : MoveDirection;
  isMoving:boolean
}