import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorComponent() {
    const navigate = useNavigate();
    useEffect(() => navigate("/"), [])
    return (
        <></>
    )
}