import { useCreateUser } from "../../states/CreateUserState";


function MMTopRow(){

    const { name } = useCreateUser();

    return (
        <div className="mm-top-row">
        <h3 className="mm-logo">V e x u s</h3>
        {<p>Hello, {name ? name : "User"}!</p>}
        </div>
    )
};

export default MMTopRow;