import { useNavigate } from "react-router";
import type { GC } from "../../utils/interfaces/components/SC.if";

function GenreCard({src, route}: GC){
    const navi = useNavigate();

    return(
    <div className="genre-card" onClick={() => navi(`/${route}`)}>
        <img src={src} alt="genre card image"/>
    </div>
    )

}

export default GenreCard;