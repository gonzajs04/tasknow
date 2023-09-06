export const regex = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(email);
};

export const regexPassword = (pass) =>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pass)

}

export const getPresentDate = ()=>{
    const date = new Date();
    const now = date.getFullYear();
    return now;
}

export const validateDataSpaces = (inputVal)=>{

    const vals = inputVal.split(' ');
    const word = vals.join('');
    return word;
}