export interface Authstate {
  isAuth: boolean;
  userName: string;
  uuid: string;
  isAdmin: boolean;
}

export interface InitialAuthState {
  value: Authstate;
}
