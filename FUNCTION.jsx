function Fun(){
    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn?<h1>welcome user</h1>:<h2>please login</h2>}
        </div>
    )
    // let message;
    // if(isLoggedIn){
    //     message =<h1>welcome user!</h1>
    // }
    // else{
    //     message= <h2>please login</h2>
    // }
    // return <div>{message}</div>
}
export default Fun
