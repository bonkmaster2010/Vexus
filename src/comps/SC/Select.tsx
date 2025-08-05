import type { SelectIF } from "../../utils/interfaces/components/SC.if";


function Select({arr, name}: SelectIF){

    return (
    <select className="filtering-select" name={name}>
    {arr.map((op: string, i: number) => (
    <option key={`${op} - ${i}`}>{op}</option>
     ))}
    </select>      
    )
}

export default Select;