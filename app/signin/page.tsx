"use client";

import { useState } from "react";

export default function Page () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = async ()=>{
        // 
    }

    return(
        <div>
            <h1 className="text-2xl font-bold text-center">Sign-In</h1>
            <form
                onSubmit={handleSignin}
                className="p-4 flex flex-col gap-8 mx-auto max-w-[400px] bg-gray-900 rounded-lg"
            >   
                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 px-4 py-2 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 px-4 py-2 rounded-lg"
                />

                <button
                    type="submit"
                    className="px-4 py-2 bg-gray-800 rounded-lg"
                >
                    Sign-In
                </button>

            </form>
        </div>
    )
}