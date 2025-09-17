
// hardcoded ahh component 
function PaymentOptions(){
    return (
        <div className="mm-my-profile-main-cont">
        
        <h3 className="generic-title">Payment Options</h3>

        <div className="mm-info-wrapper">
        <h3 className="mm-info-header">Saved Cards</h3>
        
        <div className="mm-my-profile-user-details-wrapper">
        <p className="small-txt">No Saved Cards</p>
        </div>
        
        </div>

        <div className="mm-info-wrapper">
        <h3 className="mm-info-header">Your Balance</h3>
        
        <div className="mm-my-profile-user-details-wrapper">
        <p className="small-txt">Your Vexus balance is</p>
        <span className="mid-txt">USD 0.00</span> 
        </div>
        
        </div>
        </div>
    )
};

export default PaymentOptions;