


export interface CreateUserIF{
   name: string;
   setName: (name: string) => void;
  
   email: string;
   setEmail: (email: string) => void;

   password: string;
   setPassword: (password: string) => void;
   
   confirmPassword: string;
   setConfirmPassword: (password: string) => void;

   /* Errors states */
   nameError: string;
   setNameError: (error: string) => void;

   emailError: string;
   setEmailError: (error: string) => void;

   passwordError: string;
   setPasswordError: (error: string) => void;

   confirmPasswordError: string;
   setConfirmPasswordError: (error: string) => void;
};