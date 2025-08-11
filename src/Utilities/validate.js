export const checkValidate = (email,password) => { // passing 2 input values (arguments) to check the validation
    //need to check if my email and passowrd not valid , I need to generate a error msg

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); // we have test inbuilt function to test
    //similarly we have passowrd regex also
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid" ;
    // if(!isNameValid) return "Name Is Not Valid";

    return null;



}