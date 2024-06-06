import { useNavigate } from "react-router-dom";

export function useNavigationPanel() {
    const navigatorHnadler = useNavigate();
    const backward = () => navigatorHnadler(-1);
    return {
        backward
    }
}