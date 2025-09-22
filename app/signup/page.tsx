"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Page() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        // better-auth signup:
        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            callbackURL: "/dashboard",
        }, {
            onRequest: (ctx) => {
                //show loading
                console.log("in progress...")
            },
            onSuccess: (ctx) => {
                //redirect to the dashboard or sign in page
                redirect("/dashboard")
            },
            onError: (ctx) => {
                // display the error message
                console.log("error: ", ctx.error.message)
                alert(ctx.error.message);
            },
        }
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Signup</h1>
            <form
                onSubmit={handleSignup}
                className="p-4 flex flex-col gap-8 mx-auto max-w-[400px] bg-gray-900 rounded-lg"
            >
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-400 px-4 py-2 rounded-lg"
                />
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
                    Sign-Up
                </button>

            </form>
        </div>
    )
}