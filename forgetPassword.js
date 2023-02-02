export const findMyAcc = (usr)=>{
    let allUser = JSON.parse(localStorage.getItem("users"));
    let findUser = allUser.find(e=> e.username === usr)
    
    return findUser.password
}