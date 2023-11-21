"use client";

import AdminLoginForm from "@/components/forms/adminAuth/loginForm";
import RegisterForm from "@/components/forms/adminAuth/registerForm";
import { useSearchParams } from "next/navigation";

export default function AdminAuth() {
    if (
        useSearchParams().has("register", "true") &&
        process.env.NODE_ENV != "production"
    ) {
        return (
            <div className="margin">
                <RegisterForm />
            </div>
        );
    }
    return (
        <div className="margin">
            <AdminLoginForm />
        </div>
    );
}
