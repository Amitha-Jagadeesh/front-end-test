const user = {}

const userReducer = (state = user,action)=>{
    switch (action.type) {
        case "ADD_LOGIN_USER":
                return Object.assign(state,action.user);
        default:
            //prefill the login details.localstorage acts as a backend service
            if(localStorage.getItem('user')) {
                const checkboxChecked = localStorage.getItem('checkbox');
                if(JSON.parse(checkboxChecked).checked) {
                    const userData = localStorage.getItem('user');
                    return Object.assign(state,JSON.parse(userData));
                }else {
                    return state
                }
            }else {
                return state
            }
    }
}

export default userReducer;