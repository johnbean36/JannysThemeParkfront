function Signup({handleChange, handleSubmit}){
    return (
        <div class="signup">
            <form onSubmit={(e)=>handleSubmit(e, "signup")}>
                <div>
                    <div class="username"><label for="username">Username:</label></div>
                    <div><input type="text" id="username" name="username" onChange={(e)=>handleChange(e, "username")} /></div>
                </div>
                <div>
                    <div class="password"><label for="password">Password:</label></div>
                    <div><input type="text" id="password" name="password" onChange={(e)=>handleChange(e, "password")}/></div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}