import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="email address"></input>
                    <input type="password" placeholder="password"></input>
                    <button className="primary"> Login</button>
                    <div>
                        <p>Don't Have An Account? Please Register </p>
                        <Link to={"/register"}>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
