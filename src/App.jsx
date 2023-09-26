import loginImage from "./assets/img-page.svg"
import imgGoogle from "./images/search.png"
import imgGit from "./images/code.png"

export function App() {

    return (
        <>
            <img className="img" src={loginImage} />
            <div className="main">
                <div className="main--uno"></div>
                <div className="main--dos">
                    <div className="or">- OR -</div>
                    <div className="name--container">
                        <div className="name--text">Full Name</div>
                        <div className="name--input">
                            <input type="text" className="enter--name--input" placeholder="Enter your Fulll Name here"/>
                        </div>
                    </div>
                    <div className="email--container">
                        <div className="email--text">Email</div>
                        <div className="email--input">
                            <input type="email" className="enter--email--input" placeholder="Enter your Email here"/>
                        </div>
                    </div>
                    <div className="pass--container">
                        <div className="pass--text">Password</div>
                        <div className="pass--input">
                            <input type="password" className="enter--pass--input" placeholder="Enter your Password here"/>
                        </div>
                    </div>
                    <div className="create--account"></div>
                    <button className="create--container">
                        <div className="create--boton"></div>
                        <div className="createAccount">Create Account</div>
                    </button>
                    <div className="have_account"><span className="have--span">Already have a account?</span><span className="span--1"> </span><span class="login--text">Log in</span></div>
                    <a href="https://github.com" target="blank">
                        <button className="git">
                            <img className="git--img" src={imgGit} />
                            <div className="git--text">Sing up with GitHub</div>
                        </button>
                    </a>
                    <a href="https://www.google.com" target="blank">
                        <button className="google">
                            <img className="google--img" src={imgGoogle} />
                            <div className="google--text">Sing up with Google</div>
                        </button>
                    </a>
                </div>
            </div>

        </>
    )
}