function Svg({ type }: any) {
  if (type === "filter") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="#A084DC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 4h18M7 12h10M10 20h4" />
        <line x1="10" y1="20" x2="10" y2="14" />
        <line x1="14" y1="20" x2="14" y2="8" />
        <line x1="7" y1="12" x2="7" y2="6" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg
        fill="white"
        width="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"
          fill="inherit"
        />
      </svg>
    );
  }

  if(type === 'filled-heart'){
  return <svg width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    fill="#8C5CE8"
  />
  </svg>
    }

  if (type === "burger") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "user") {
    return (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24.00 24.00"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        stroke=""
        transform="matrix(1, 0, 0, 1, 0, 0)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth=""></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
            stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    );
  }

  if (type === "down arrow") {
    return (
      <svg
        fill="#A084DC"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        width="34px"
        height="10px"
        viewBox="0 0 30.727 30.727"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>
          </g>
        </g>
      </svg>
    );
  }

  if (type === "up arrow") {
    return (
      <svg
        width="34px"
        height="18px"
        viewBox="0 0 24 24"
        fill="#A084DC"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"></path>
        </g>
      </svg>
    );
  }

  if (type === "go back arrow") {
    return (
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#f1f1f1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="inherit" fill-rule="evenodd" d="M4.297105,3.29289 L0.59,7 L4.297105,10.7071 C4.687635,11.0976 5.320795,11.0976 5.711315,10.7071 C6.101845,10.3166 6.101845,9.68342 5.711315,9.29289 L4.418425,8 L11.504215,8 C12.332615,8 13.004215,8.67157 13.004215,9.5 C13.004215,10.3284 12.332615,11 11.504215,11 L10.004215,11 C9.451935,11 9.004215,11.4477 9.004215,12 C9.004215,12.5523 9.451935,13 10.004215,13 L11.504215,13 C13.437215,13 15.004215,11.433 15.004215,9.5 C15.004215,7.567 13.437215,6 11.504215,6 L4.418425,6 L5.711315,4.70711 C6.101845,4.31658 6.101845,3.68342 5.711315,3.29289 C5.320795,2.90237 4.687635,2.90237 4.297105,3.29289 Z"></path> </g></svg>
    );
  }

  if(type === 'right-arrow'){
  return <svg width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#f1f1f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  }
  
  if(type === 'left-arrow'){
  return <svg width="34px" height="fit-content" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#f1f1f1"></path> </g></svg>
  }

  if(type === 'cart'){
  return <svg viewBox="0 -2 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Vivid-Icons" transform="translate(-587.000000, -175.000000)"> <g id="Icons" transform="translate(37.000000, 169.000000)"> <g id="cart" transform="translate(546.000000, 0.000000)"> <g transform="translate(4.000000, 6.000000)" id="Shape"> <path d="M10.58,29.043 C12.4949277,29.0694229 14.0284086,30.6385295 14.0108538,32.5535591 C13.993299,34.4685886 12.4313106,36.0093194 10.5162203,36.0006331 C8.60113003,35.9919467 7.05318229,34.43711 7.053,32.522 C7.05854818,31.5926903 7.43345802,30.7037395 8.09507761,30.0511241 C8.75669719,29.3985087 9.65070149,29.0358143 10.58,29.043 Z M22.351,29.043 C24.2638144,29.0776442 25.789741,30.6502507 25.7667487,32.5632407 C25.7437564,34.4762307 24.1804737,36.0117079 22.2673792,36.0003684 C20.3542847,35.9890289 18.8093137,34.4351281 18.809,32.522 C18.8265943,30.5832882 20.4122846,29.0258018 22.351,29.043 Z M40,6 L10,6 L5,0 L0,0 L14,20 L26,20 L24,23 L9,23 L5,27 L26,27 L40,6 Z" fill="#f1f1f1"> </path> <path d="M12,10 L32,10 L30,12 L14,12 L12,10 Z M15,14 L28,14 L26,16 L17,16 L15,14 Z" fill="#0C0058"> </path> </g> </g> </g> </g> </g> </g></svg>
  }

  if(type === 'home'){
  return <svg fill="none" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-49.54 -49.54 594.48 594.48" stroke="#000000" stroke-width="0.00495398"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="square" stroke-linejoin="square"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path> <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path> </g> </g> </g> </g></svg>
  }

  if(type === 'signup'){
  return <svg className="signup-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 8L16 12M16 12L12 16M16 12H3M3.33782 7C5.06687 4.01099 8.29859 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.29859 22 5.06687 19.989 3.33782 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  }

  if(type === 'my-account'){
  return (
    <svg
      fill="#000000"
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="my-acc-icon"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>Account Settings</title>
        <path d="M9.6,3.32a3.86,3.86,0,1,0,3.86,3.85A3.85,3.85,0,0,0,9.6,3.32M16.35,11a.26.26,0,0,0-.25.21l-.18,1.27a4.63,4.63,0,0,0-.82.45l-1.2-.48a.3.3,0,0,0-.3.13l-1,1.66a.24.24,0,0,0,.06.31l1,.79a3.94,3.94,0,0,0,0,1l-1,.79a.23.23,0,0,0-.06.3l1,1.67c.06.13.19.13.3.13l1.2-.49a3.85,3.85,0,0,0,.82.46l.18,1.27a.24.24,0,0,0,.25.2h1.93a.24.24,0,0,0,.23-.2l.18-1.27a5,5,0,0,0,.81-.46l1.19.49c.12,0,.25,0,.32-.13l1-1.67a.23.23,0,0,0-.06-.3l-1-.79a4,4,0,0,0,0-.49,2.67,2.67,0,0,0,0-.48l1-.79a.25.25,0,0,0,.06-.31l-1-1.66c-.06-.13-.19-.13-.31-.13L19.5,13a4.07,4.07,0,0,0-.82-.45l-.18-1.27a.23.23,0,0,0-.22-.21H16.46M9.71,13C5.45,13,2,14.7,2,16.83v1.92h9.33a6.65,6.65,0,0,1,0-5.69A13.56,13.56,0,0,0,9.71,13m7.6,1.43a1.45,1.45,0,1,1,0,2.89,1.45,1.45,0,0,1,0-2.89Z"></path>
      </g>
    </svg>
  );
  }

  if(type === 'poweroff'){
  return <svg fill="#f1f1f1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.043 377.043"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M337.771,103.538c-14.648-22.722-34.645-42.102-57.818-56.046c-4.334-2.607-9.736-2.682-14.141-0.191 c-4.402,2.49-7.127,7.157-7.127,12.216v29.031c0,4.379,2.045,8.508,5.529,11.162c31.094,23.686,49.654,61.019,49.654,99.866 c0,69.115-56.23,125.345-125.346,125.345c-69.116,0-125.346-56.229-125.346-125.345c0-38.848,18.562-76.181,49.654-99.866 c3.483-2.654,5.529-6.783,5.529-11.162V59.517c0-5.059-2.724-9.726-7.126-12.216c-4.405-2.49-9.808-2.416-14.142,0.191 c-23.176,13.944-43.169,33.324-57.819,56.046c-18.46,28.63-28.218,61.838-28.218,96.038c0,47.402,18.46,91.969,51.979,125.488 c33.521,33.52,78.086,51.979,125.488,51.979c47.402,0,91.968-18.459,125.488-51.979c33.518-33.52,51.979-78.086,51.979-125.488 C365.99,165.376,356.232,132.167,337.771,103.538z"></path> <path d="M172.129,215.535h32.789c7.257,0,13.16-5.905,13.16-13.162V13.162c0-7.257-5.903-13.162-13.16-13.162h-32.789 c-7.257,0-13.161,5.904-13.161,13.162v189.211C158.968,209.63,164.873,215.535,172.129,215.535z"></path> </g> </g> </g></svg>
  }

  if(type === 'order-box'){
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z" stroke="" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21 7.5L17 9.5M12 12L3 7.5M12 12V21.5M12 12C12 12 14.7426 10.6287 16.5 9.75C16.6953 9.65237 17 9.5 17 9.5M17 9.5V13M17 9.5L7.5 4.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
  }

  if(type === 'addresses'){
  return <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>contacts</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <g> <path d="M21,24a7,7,0,1,0-7-7A7,7,0,0,0,21,24Zm0-10a3,3,0,1,1-3,3A2.9,2.9,0,0,1,21,14Z"></path> <path d="M12,38H30a2,2,0,0,0,2-2V29.4l-.9-.6a19.6,19.6,0,0,0-20.2,0l-.9.6V36A2,2,0,0,0,12,38Zm2-6.3a15.3,15.3,0,0,1,14,0V34H14Z"></path> <path d="M36,3H6A2,2,0,0,0,4,5V43a2,2,0,0,0,2,2H36a2,2,0,0,0,2-2V5A2,2,0,0,0,36,3ZM34,41H8V7H34Z"></path> <path d="M42,19H40V29h2a2,2,0,0,0,2-2V21A2,2,0,0,0,42,19Z"></path> <path d="M42,31H40V41h2a2,2,0,0,0,2-2V33A2,2,0,0,0,42,31Z"></path> <path d="M42,7H40V17h2a2,2,0,0,0,2-2V9A2,2,0,0,0,42,7Z"></path> </g> </g> </g> </g></svg>
  }

  if(type === 'star'){
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.65 8.93274L12.4852 4.30901C12.2923 3.89699 11.7077 3.897 11.5148 4.30902L9.35002 8.93274L4.45559 9.68243C4.02435 9.74848 3.84827 10.2758 4.15292 10.5888L7.71225 14.2461L6.87774 19.3749C6.80571 19.8176 7.27445 20.1487 7.66601 19.9317L12 17.5299L16.334 19.9317C16.7256 20.1487 17.1943 19.8176 17.1223 19.3749L16.2878 14.2461L19.8471 10.5888C20.1517 10.2758 19.9756 9.74848 19.5444 9.68243L14.65 8.93274Z" stroke="" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  }

  if(type === 'payment-options'){
  return <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M40.228,21.494L30,11.267V8c0-2.2-1.8-4-4-4H10C7.8,4,6,5.8,6,8v23.955c0,2.2,1.8,4,4,4h3.992l0.121,0.799 c0.621,4.105,4.012,7.201,7.888,7.201h20v-17C42,23.483,40.656,21.907,40.228,21.494z M26,9.185c-0.198-0.019-0.398-0.03-0.6-0.03 c-1.605,0-3.112,0.623-4.24,1.751c-1.132,1.125-1.758,2.629-1.76,4.234c-0.003,1.611,0.621,3.123,1.756,4.259L26,24.243v7.712h-7V8 h7V9.185z M10,8h3v23.955h-3V8z M38,39.955H22c-1.915,0-3.605-1.633-3.933-3.799l-0.03-0.201H26c2.2,0,4-1.8,4-4v-3.712l2.12,2.12 l2.829-2.828l-4.663-4.663L25,17.587l-1.016-1.016c-0.378-0.378-0.585-0.884-0.584-1.424c0.001-0.534,0.207-1.033,0.584-1.408 c0.423-0.423,1.024-0.6,1.604-0.548c0.455,0.04,0.897,0.217,1.228,0.548L31,17.923l6.416,6.416l-0.072-0.022l0.109,0.072 C37.584,24.586,38,25.337,38,26.955V39.955z"></path> </g> </g></svg>
  }

  if(type === 'trash'){
  return <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M465.423,48.241h-137.61V23.955C327.813,10.746,317.082,0,303.893,0h-95.785c-13.19,0-23.92,10.746-23.92,23.955V48.24 H46.577c-6.655,0-12.049,5.394-12.049,12.049c0,6.655,5.394,12.049,12.049,12.049h22.332l15.228,396.396 C85.069,492.995,104.818,512,129.099,512h253.804c24.281,0,44.03-19.006,44.96-43.267l15.228-396.396h22.332 c6.653,0,12.049-5.394,12.049-12.049C477.472,53.635,472.078,48.241,465.423,48.241z M208.285,24.097h95.43v24.143h-95.43V24.097z M403.784,467.809c-0.433,11.268-9.605,20.094-20.882,20.094H129.099c-11.276,0-20.448-8.827-20.882-20.095L93.025,72.338h325.952 L403.784,467.809z"></path> </g> </g> <g> <g> <path d="M182.63,181.571c-0.127-6.575-5.494-11.817-12.042-11.817c-0.078,0-0.158,0-0.236,0.002 c-6.652,0.128-11.943,5.626-11.815,12.278l3.781,196.634c0.126,6.575,5.495,11.817,12.042,11.817c0.078,0,0.158,0,0.236-0.002 c6.653-0.128,11.943-5.624,11.815-12.278L182.63,181.571z"></path> </g> </g> <g> <g> <path d="M255.998,169.753c-6.654,0-12.049,5.394-12.049,12.049v196.634c0,6.654,5.394,12.049,12.049,12.049 c6.655,0,12.049-5.394,12.049-12.049V181.802C268.047,175.148,262.653,169.753,255.998,169.753z"></path> </g> </g> <g> <g> <path d="M341.645,169.756c-6.628-0.147-12.151,5.162-12.278,11.815l-3.781,196.634c-0.129,6.653,5.162,12.15,11.815,12.278 c0.078,0.001,0.158,0.002,0.236,0.002c6.546,0,11.916-5.244,12.042-11.817l3.781-196.634 C353.588,175.38,348.299,169.883,341.645,169.756z"></path> </g> </g> </g></svg>
  }

  if(type === 'alert'){
  return <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.8809 16.15C10.8809 16.0021 10.9101 15.8556 10.967 15.7191C11.024 15.5825 11.1073 15.4586 11.2124 15.3545C11.3175 15.2504 11.4422 15.1681 11.5792 15.1124C11.7163 15.0567 11.8629 15.0287 12.0109 15.03C12.2291 15.034 12.4413 15.1021 12.621 15.226C12.8006 15.3499 12.9399 15.5241 13.0211 15.7266C13.1024 15.9292 13.122 16.1512 13.0778 16.3649C13.0335 16.5786 12.9272 16.7745 12.7722 16.9282C12.6172 17.0818 12.4204 17.1863 12.2063 17.2287C11.9922 17.2711 11.7703 17.2494 11.5685 17.1663C11.3666 17.0833 11.1938 16.9426 11.0715 16.7618C10.9492 16.5811 10.8829 16.3683 10.8809 16.15ZM11.2408 13.42L11.1008 8.20001C11.0875 8.07453 11.1008 7.94766 11.1398 7.82764C11.1787 7.70761 11.2424 7.5971 11.3268 7.5033C11.4112 7.40949 11.5144 7.33449 11.6296 7.28314C11.7449 7.2318 11.8697 7.20526 11.9958 7.20526C12.122 7.20526 12.2468 7.2318 12.3621 7.28314C12.4773 7.33449 12.5805 7.40949 12.6649 7.5033C12.7493 7.5971 12.813 7.70761 12.8519 7.82764C12.8909 7.94766 12.9042 8.07453 12.8909 8.20001L12.7609 13.42C12.7609 13.6215 12.6809 13.8149 12.5383 13.9574C12.3958 14.0999 12.2024 14.18 12.0009 14.18C11.7993 14.18 11.606 14.0999 11.4635 13.9574C11.321 13.8149 11.2408 13.6215 11.2408 13.42Z" fill="#f1f1f1"></path> <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  }

  if(type === 'x'){
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#f1f1f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24px" height="24px" fill="white"></rect> </clipPath> </defs> </g></svg>
  }

  if(type === 'search'){
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  }

  if(type === 'right-arrow-2'){
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#f1f1f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  }

  if(type === "left-arrow-2"){
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#f1f1f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  }

  return null;
}

export default Svg;
