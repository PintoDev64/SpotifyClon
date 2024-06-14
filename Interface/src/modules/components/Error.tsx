import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorComponent() {
    let error = useRouteError();
    console.error("Error:", error);
    const navigate = useNavigate();
    useEffect(() => navigate("/"), [])
    return (
        <></>
    )
}