import { useNavigate } from "react-router";
import Svg from "../../utils/extras/Svgs";

// shows a page header (when have i ever used this?)
function PageHeading({ title }: { title: string }){
  // Variables
    const navi = useNavigate();

    return (
    <div className="page-heading">
        <button onClick={() => navi('/')}> <Svg type='left-arrow'/> </button>
        
        <p>{title}</p>
    </div>
    )
};

export default PageHeading;