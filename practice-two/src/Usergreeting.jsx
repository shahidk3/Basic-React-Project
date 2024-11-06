
function Usergreeting(props) {

    if(props.isLoggedIn) {
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Plz Logon to continue</h2>
    }

}

export default Usergreeting