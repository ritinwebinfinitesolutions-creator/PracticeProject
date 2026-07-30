
export const useValidation=()=>{
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
    
   const validatePassword = (password: string) => {
    return password.length >= 8;
  };

 return{
      validateEmail
      ,validatePassword
 }
}