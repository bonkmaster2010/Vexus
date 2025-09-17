import Noti from "../../SC/noti";
import { useMain } from "../../../states/MainStates";
import '../../../styles/Addresses.css';
import { useNavigate } from "react-router";

function Addresses() {
  // Variables
  const navi = useNavigate();
  const { addresses, deleteAddress } = useMain();

  // deletes the address (not a very useful comment i know)
  function handleDelete(i: number) {
    if (window.confirm("Are you sure you want to delete this address?")) {
      deleteAddress(i);
    }
  }

  return (
    <div className="mm-my-profile-main-cont">

      {addresses.length === 0 && (
        <Noti text="You don't have any addresses saved. Click the 'Add New' button below to add an address." />
      )}

      {addresses.length > 0 && (
        <>
          <h3 className="generic-title">Addresses</h3>

          <div className="mm-info-wrapper">
            <h3 className="mm-info-header">My Address List</h3>

            {addresses.map((a, i) => (
              <div className="address-card" key={`${a.address_arr} - ${i}`}>
                <div className="col">
                  <p>Full Name</p>
                  <p>{a.name}</p>
                </div>

                <div className="col">
                  <p>Address</p>
                  <div className="txt-cont">
                  {a.address_arr.map((p, idx) => <p key={idx}>{p}</p>)}
                  </div>
                </div>

                <div className="col">
                  <p>Mobile Number</p>
                  <p>{a.mobile_number}</p>
                </div>

                <div className="col-btn-cont">
                  <button className="address-btn" onClick={() => navi(`edit/${i}`)}>Edit</button>
                  <button className="address-btn" onClick={() => handleDelete(i)}>Delete</button>
                </div>

                {a !== addresses[addresses.length - 1] && <div className="address-hr" />}
              </div>
            ))}
          </div>
        </>
      )}

      <button
        className="mm-my-profile-save-details-btn"
        onClick={() => navi('add')}
      >
        Add New Address
      </button>
    </div>
  )
}

export default Addresses;
