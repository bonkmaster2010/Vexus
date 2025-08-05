




function Svg({ type }: any){
    if(type === "filter"){
        return <svg
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
    }

    if(type === "heart"){
        return <svg 
        fill="#000000" 
        width="20px"  
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg">
        <path 
        d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"
        fill="white"/>
        </svg>
    }

    if(type === "burger"){
        return <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                fill="currentColor" 
                viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" />
                </svg>
    }
}

export default Svg;