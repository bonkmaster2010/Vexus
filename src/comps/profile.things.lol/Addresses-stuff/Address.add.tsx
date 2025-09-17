import Noti from "../../SC/noti";
import { useState } from "react";
import { useMain } from "../../../states/MainStates";
import type { address } from "../../../utils/interfaces/state-interfaces/MainState.interfaces";

function AddAddress() {
  // Variables
  const [country, setCountry] = useState<string>("")
  const [fullname, setFullname] = useState<string>("")
  const [mobileNumber, setMobileNumber] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [streetName, setStreetName] = useState<string>("")
  const [buildingName, setBuildingName] = useState<string>("")
  const [noti, setNoti] = useState<string>("");

  const states = [
    {label: "Country", state: country, setter: setCountry},
    {label: "Full Name", state: fullname, setter: setFullname, hint: "Please provide your full name to avoid delays"},
    {label: "Mobile Number", state: mobileNumber, setter: setMobileNumber, hint: "The courier may contact you on this number to arrange the delivery"},
    {label: "City", state: city, setter: setCity},
    {label: "Street Name/No.", state: streetName, setter: setStreetName},
    {label: "Building Name/No.", state: buildingName, setter: setBuildingName},
  ]

  const { setAddresses } = useMain();

  function saveAddress() {
    if (!fullname || !mobileNumber || !country || !city || !streetName || !buildingName) {
      alert("Please fill in all fields");
      return;
    }

    const addresObj: address = {
      name: fullname,
      address_arr: [buildingName, streetName, city, country],
      mobile_number: mobileNumber
    };

    setAddresses(addresObj);
    setNoti([buildingName, streetName, city, country].join(', '))
  }

  return (
    <div className="mm-my-profile-main-cont">
      <h3 className="generic-title">New Address</h3>
      
      <div className="mm-my-profile-content-wrapper">
        <div className="mm-info-wrapper">
          <h3 className="mm-info-header small">New Address</h3>

          <div className="mm-my-profile-user-details-wrapper">
            {noti.trim().length > 0 && <Noti text={`New address ${noti} added`}/>}

            {states.map((s, index) => (
              <div className="input-with-label" key={index}>
                <label>{s.label}</label>
                <input
                  value={s.state}
                  onChange={(e) => s.setter(e.target.value)}
                />
                {s.hint && <p className="hint">{s.hint}</p>}
              </div>
            ))}  
          </div>
        </div>
      </div>

      <button 
        className="mm-my-profile-save-details-btn"
        onClick={saveAddress}
      >
        Add New Address
      </button>
    </div>
  );
}

export default AddAddress;
