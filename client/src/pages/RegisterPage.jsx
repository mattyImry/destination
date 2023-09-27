import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Your name.." />
                    <input type="email" placeholder="email address"></input>
                    <input type="password" placeholder="password"></input>
                    <button className="primary"> Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already Have An Account?
                        <Link to={"/login"} className="underline text-black">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
