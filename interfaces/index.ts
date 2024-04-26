export interface Authstate {
  isAuth: boolean;
  userName: string;
  uuid: string;
  isAdmin: boolean;
  email:string;
}

export interface InitialAuthState {
  value: Authstate;
}
