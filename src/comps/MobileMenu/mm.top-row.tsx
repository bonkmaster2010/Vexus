import { useCreateUser } from "../../states/CreateUserState";
import { useMain } from "../../states/MainStates";


function MMTopRow(){

    const { name } = useCreateUser();

    return (
        <div className="mm-top-row">
        <h3 className="mm-logo">V e x u s</h3>
        {<p>Hello, {name}!</p>}
        </div>
    )
};

export default MMTopRow;