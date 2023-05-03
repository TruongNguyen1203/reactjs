const { redirect } = require("react-router-dom");


export function action(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    return redirect('/')
}

