const Header=()=>{
    return(
        <>
            <div className="header">
                <div className="main-logo-div">
                    <div className="logo-div">
                        <img src="Logo Grp.svg" alt="logo"></img>
                    </div>
                    <div className="logo-div">
                        <h4 className="qa">qa</h4>
                    </div>
                </div>
                <div className="starttest-div">
                    <p className="start-test">Start Test</p>
                </div>
                <div className="score-div">
                    <p className="score">Score</p>
                </div>
            </div>
        </>
    )
}
export default Header;