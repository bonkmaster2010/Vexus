import { useNavigate } from "react-router"
import '../styles/NotFound.css';


function NotFound(){

    const navi = useNavigate();

    return (
        <div className="not-found-alt">
        <div className="terminal-card">
            <h1>404</h1>
            <p className="glitch-text">Page Not Found</p>
            <p className="error-msg">Error: The page you're trying to reach does not exist.</p>
            <button onClick={() => navi("/")}>Return Home</button>
        </div>
        </div>

    )
}

export default NotFound;