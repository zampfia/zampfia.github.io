"use client";

import LoginForm from "@/components/forms/auth/loginForm";
import { useSearchParams } from "next/navigation";

export default function AdminAuth() {
    const redirect = useSearchParams().get("redirect");
    const name = useSearchParams().get("name");

    return (
        <div className="margin">
            <LoginForm redirect={redirect} name={name} />
        </div>
    );
}
