export interface UserToRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserToLogIn {
  email: string;
  password: string;
}