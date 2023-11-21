import { cookies } from "next/headers";

export default function Layout({ dashboard, auth }) {
    const token = cookies().has("token");
    return token ? dashboard : auth;
}
