import Noti from "../../SC/noti";
import { useState } from "react";
import { useMain } from "../../../states/MainStates";
import { useParams } from "react-router";
import type { address } from "../../../utils/interfaces/state-interfaces/MainState.interfaces";

function EditAddress() {
  // Variables (thats a lot ngl)
  const { editAddress, addresses } = useMain();
  const { i } = useParams();
  const idx = i ? parseInt(i) : -1;
  const addr = addresses[idx];
  const [country, setCountry] = useState(addr?.address_arr[3] || "");
  const [fullname, setFullname] = useState(addr?.name || "");
  const [mobileNumber, setMobileNumber] = useState(addr?.mobile_number || "");
  const [city, setCity] = useState(addr?.address_arr[2] || "");
  const [streetName, setStreetName] = useState(addr?.address_arr[1] || "");
  const [buildingName, setBuildingName] = useState(addr?.address_arr[0] || "");
  const [noti, setNoti] = useState<string>("");

  const states = [
    { label: "Country", state: country, setter: setCountry },
    { label: "Full Name", state: fullname, setter: setFullname, hint: "Please provide your full name to avoid delays" },
    { label: "Mobile Number", state: mobileNumber, setter: setMobileNumber, hint: "The courier may contact you on this number to arrange the delivery" },
    { label: "City", state: city, setter: setCity },
    { label: "Street Name/No.", state: streetName, setter: setStreetName },
    { label: "Building Name/No.", state: buildingName, setter: setBuildingName },
  ];

  // saves the address (crazy ik)
  function saveAddress() {
    if (!fullname || !mobileNumber || !country || !city || !streetName || !buildingName) {
      alert("Please fill in all fields");
      return;
    }

    if (idx === -1) return;

    const updatedAddress: address = {
      name: fullname,
      address_arr: [buildingName, streetName, city, country],
      mobile_number: mobileNumber
    };

    editAddress(updatedAddress, idx);
    setNoti([buildingName, streetName, city, country].join(', '));
  }

  return (
    <div className="mm-my-profile-main-cont">
      <h3 className="generic-title">Edit Address</h3>
      
      <div className="mm-my-profile-content-wrapper">
        <div className="mm-info-wrapper">
          <h3 className="mm-info-header small">Edit Address</h3>

          <div className="mm-my-profile-user-details-wrapper">
            {noti.trim().length > 0 && <Noti text={`Address updated: ${noti}`} />}
            {idx === -1 && <Noti text="This address doesn't seem to exist" />}

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

export default EditAddress;
