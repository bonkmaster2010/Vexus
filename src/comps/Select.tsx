

function Select({arr, name}: any){

    return (
    <select className="filtering-select" name={name}>
    {arr.map((op: string, i: number) => (
    <option key={`${op} - ${i}`}>{op}</option>
     ))}
    </select>      
    )
}

export default Select;