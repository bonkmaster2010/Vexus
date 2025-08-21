import { useNavigate } from "react-router";
import Svg from "../../utils/extras/Svgs";






function PageHeading({ title }: { title: string }){

    const navi = useNavigate();

    return (
    <div className="page-heading">
        <button onClick={() => navi('/')}> <Svg type='left-arrow'/> </button>
        
        <p>{title}</p>
    </div>
    )
};

export default PageHeading;