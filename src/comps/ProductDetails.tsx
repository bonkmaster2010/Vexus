import Svg from "../utils/extras/Svgs";
import Noti from "./SC/noti";
import ProductReviews from "./SC/Product.reviews";
import { useParams } from "react-router";
import { allProducts } from "../utils/extras/Data";
import { useState } from "react";
import { useMain } from "../states/MainStates";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const params = useParams<{ idx?: string }>();
  const idx = params.idx ? parseInt(params.idx, 10) : -1;

  const product = allProducts[idx];
  const [CWO, setCWO] = useState("1");
  const [src, setSrc] = useState("");
  const [addToCartText, setAddToCartText] = useState("Add To Cart");
  const [quantity, setQuantity] = useState(1);
  const [warranty, setWarranty] = useState(0);
  const addItemToCart = useMain((s) => s.addItemToCart);
  const quantityOptions = [1, 2, 3, 4, 5];
  const { wishlist, addItemToWishlist, removeItemFromWishlist} = useMain();

  function ChangeAddToCartText() {
    setAddToCartText("Added To Cart");
    setTimeout(() => setAddToCartText("Add To Cart"), 3000);
  }

  if (!product) return <Noti text="Product not found" />;

  return (
    <>
      <div className="product-details-cont-main">
        <div className="product-details-cont">
          <div className="pd-image-cont">
            <div className="image-wrapper-pd">
              <img
                className="product-image"
                src={src || product.src[0]}
                alt={product.title}
              />
              <button 
              className="pd-add-to-wishlist-btn"
              onClick={() => wishlist.includes(product) ? 
              removeItemFromWishlist(product) : addItemToWishlist(product)}
              >
              {wishlist.includes(product) ? 
              <Svg type='filled-heart'/> 
              : 
              <Svg type='heart'/>}
              </button>
            </div>
            <div className="product-image-picker">
              {product.src.map((img: string, i: number) => (
                <img key={i} onClick={() => setSrc(img)} src={img} alt="product" />
              ))}
            </div>
          </div>

          <div className="desc-price-wrapper">
            <div className="product-desc-cont">
              <div className="product-desc">
                <h3>{product.title}</h3>
                <p id="sku">SKU: Alpha Male</p>
                <hr className="pdr" />
                <span>{product.desc}</span>
                <hr className="pdr" />
                <p id="warranty">
                  Warranty: <b>{CWO} {CWO === "1" ? "year" : "years"}</b> Effortless
                  warranty claims with global coverage; shipping costs are on us
                </p>
                <hr className="pdr" />
              </div>
            </div>

            <hr className="vertical-divider" />

            <div className="product-price">
              <div id="price">
                <p>USD</p>
                <h3>{product.price}</h3>
              </div>

              <div id="sale-price">
                <p id="sale-percentage">8% OFF</p>
                <p id="before-sale-price">
                  Was USD {(typeof product.price === "number" ? (product.price / 0.92).toFixed(2) : "N/A")}
                </p>
              </div>

              <p id="sold-by">
                Sold By: <b>Vexus</b>
              </p>
              <p className="fulfilled-by">Fulfilled By Vexus</p>
              <hr className="pdr" />

              <div className="select-ur-warranty">
                <p id="select-warranty-header">Select your warranty</p>
                {[1, 2, 3].map((y) => (
                  <p key={y} className="warranty-option">
                    <button
                      onClick={() => { setCWO(y.toString()); setWarranty(y); }}
                      className={CWO === y.toString() ? "option-active" : ""}
                    ></button>
                    {y} Year{y > 1 ? "s" : ""} warranty {y > 1 ? `+ SAR ${128.76*(y-1)}` : "- Free"}
                  </p>
                ))}
              </div>

              <hr className="pdr" />

              <div className="add-to-cart-wrapper">
                <div className="add-to-cart">
                  <p id="inStock">In Stock</p>
                  <div className="add-to-cart-btn-cont">
                    <select className="quantity-select" onChange={(e) => setQuantity(Number(e.target.value))} value={quantity}>
                      {quantityOptions.map((op) => <option key={op}>{op}</option>)}
                    </select>
                    <button onClick={() => { addItemToCart(product, quantity, warranty); ChangeAddToCartText(); }}>
                      <span>{addToCartText}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pdr-long" />

      {product.specs ? (
        <div className="specs-cont">
          <div className="specs">
          <h3>Genral Specifications</h3>
            <div className="spec-table">
                {product.specs.map((spec: any, i: number) => (
                  <div className="spec-cont" key={i}>
                    <th>{spec.name}</th>
                    <td data-label={spec.name}>{spec.value}</td>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : <Noti text="This product doesn't have any specifications listed" />}

      <div className="pdr-long" />

      <ProductReviews
        productTitle={product.title}
        idx={idx}           
      />
    </>
  );
}

export default ProductDetails;
