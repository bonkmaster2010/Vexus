import { useParams } from "react-router";
import { allProducts } from "../utils/extras/Data";
import { locations } from '../utils/extras/Data';
import { useState } from 'react';
import { useMain } from "../states/MainStates";
import '../styles/ProductDetails.css';

function ProductDetails(){
    const { id } = useParams();
    const product = allProducts.find((_: any, i:number) => i === parseInt(id || ""))
    const [CWO, setCWO] = useState("1");
    const [location, setLocation] = useState(locations[0]);
    const [src, setSrc] = useState('');
    const [addToCartText, setAddToCartText] = useState("Add To Cart");
    const [quantity, setQuantity] = useState(1);
    const [warranty, setWarranty] = useState(0);
    const addItemToCart = useMain(s => s.addItemToCart);
    const quantityOptins = [1, 2, 3, 4, 5];
    function ChangeAddToCartText(){
        setAddToCartText("Added To Cart")
        
        setTimeout(() => {
            setAddToCartText("Add To Cart")
        },5000)
    }
    

    return (
        product && (
            <>
            <div className='product-details-cont-main'>
            <div className="product-details-cont">
                <div className="pd-image-cont">
                    <img className='product-image' src={src !== "" ? src : product?.src[0]} alt={product?.title || 'Product Image'} />

                    <div className='product-image-picker'>
                        {product?.src.map((img: any, i: number) => (
                            <img onClick={() => setSrc(img)} src={img} alt='product image'/>
                        ))}
                    </div>
                </div>
                
                <div className="desc-price-wrapper">
                    <div className='product-desc-cont'>
                        <div className="product-desc">
                             <h3>{product?.title}</h3>
                            <p id="sku">SKU: Alpha Male</p>
                            <hr className='pdr'/>
                            <span>{product?.desc}</span>
                            <hr className='pdr'/>
                            <p id='warranty'>
                                Warranty: <b>{CWO} {CWO === "1" ? "year" : "years"}</b> Effortless warranty claims with global coverage; shipping costs are on us
                            </p>
                            <hr className='pdr'/>
                        </div>
                    </div>

                  <hr className="vertical-divider" />
 
                    <div className='product-price'>
                        <div id='price'>
                            <p>USD</p>
                            <h3>{product?.price}</h3>
                        </div>

                        <div id='sale-price'>
                            <p id='sale-percentage'>8% OFF</p>
                            <p id='before-sale-price'>
                                Was USD {typeof product?.price === 'number' ? (product.price / (1 - 0.08)).toFixed(2) : 'N/A'}
                            </p>
                        </div>
                        
                        <p id='sold-by'>Sold By: <b>Vexus</b></p>
                        <p className='fulfilled-by'>Fulfilled By Vexus</p>
                        <hr className='pdr'/>

                        <div className='select-ur-warranty'>
                            <p id='select-warranty-header'>Select your warranty</p>
                            <p className='warranty-option'>
                                <button onClick={() => {
                                    setCWO("1");
                                    setWarranty(1);
                                    }} className={CWO === "1" ? "option-active" : ""}></button> 
                                1 Year manufacturer warranty - <b>Free</b>
                            </p>
                            <p className='warranty-option'>
                                <button onClick={() => {
                                    setCWO("2");
                                    setWarranty(2);
                                    }} className={CWO === "2" ? "option-active" : ""}></button>  
                                2 Year warranty + SAR 128.76
                            </p>
                            <p className='warranty-option'>
                                <button onClick={() => {
                                    setCWO("3");
                                    setWarranty(3);
                                    }} className={CWO === "3" ? "option-active" : ""}></button>  
                                3 Year warranty + SAR 257.52
                            </p>
                        </div>
                        
                        <hr className='pdr'/>

                         <div className="add-to-cart-wrapper">
                        <div className='add-to-cart'>
                            <p id='inStock'>In Stock</p>

                           <div className="add-to-cart-btn-cont">
                            <select className="quantity-select" onChange={(e) => setQuantity(Number(e.target.value))}>{quantityOptins.map((op: number) => <option key={op}>{op}</option>)}</select>
                           
                            <button onClick={() => {
                                addItemToCart(product, quantity, warranty);
                                ChangeAddToCartText();
                                }}><span>{addToCartText}</span></button>
                              </div>

                            <div className='product-info-card-cont'>
                                <p className='product-info-card'>
                                    <span>💎 Condition: <b>New</b></span>
                                </p>
                                
                                <div className="deliverTo">
                                    <div className="location-line">
                                        <p className="label">Deliver To <span className='bold highlight'>{location}</span></p>
                                        
                                        <select onChange={(e) => setLocation(e.target.value)} className="location-select" value={location}>
                                            {locations.map((area: string, i: number) => (
                                                <option key={area} value={area}>{area}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <hr className='pdr' />
                                    
                                    <p className="delivery-date">
                                        Delivered by <span className="bold highlight">Jul 14</span>
                                    </p>
                                    <p className="delivery-time">
                                        If you order within <span className="bold highlight">12 Hours, 54 Minutes</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className='pdr-long'/>

        <div className='specs-cont'>
            <div className='specs'>
                <h3>Specifications</h3>
                <table className="spec-table">
                    <tbody>
                        {product?.specs?.map((spec: any, i: number) => (
                            <tr key={i}>
                                <th>{spec.name}</th>
                                <td data-label={spec.name}>{spec.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
        ) 
    );
}

export default ProductDetails;
