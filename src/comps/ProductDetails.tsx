import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Svg from "../utils/extras/Svgs";
import Noti from "./SC/noti";
import ProductReviews from "./SC/Product.reviews";
import { fetchAllProducts, type Product } from "../utils/extras/Data.ts";
import { useMain } from "../states/MainStates";
import { classifySpec, slugify } from "../utils/fns/extra.fns";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const params = useParams<{ productLink?: string }>();
  const productLink = params.productLink ?? "";

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [addToCartText, setAddToCartText] = useState("Add To Cart");
  const [CWO, setCWO] = useState("1");
  const [quantity, setQuantity] = useState(1);
  const [warranty, setWarranty] = useState(0);

  const addItemToCart = useMain(s => s.addItemToCart);
  const { wishlist, addItemToWishlist, removeItemFromWishlist } = useMain();
  const quantityOptions = [1, 2, 3, 4, 5];

  // Load product asynchronously
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const allProducts = await fetchAllProducts();
      const foundProduct = allProducts.find(p => slugify(p.name) === productLink) || null;
      setProduct(foundProduct);
      setLoading(false);
    };

    loadProduct();
  }, [productLink]);

  if (loading) return <div>Loading product… ⏳</div>;
  if (!product) return <Noti text="Product not found" />;

  const ChangeAddToCartText = () => {
    setAddToCartText("Added To Cart");
    setTimeout(() => setAddToCartText("Add To Cart"), 3000);
  };

  const extractProductSpecs = (title: string) => {
    const matches = [...title.matchAll(/\(([^)]+)\)/g)];
    if (!matches.length) return [];
    const insideParentheses = matches[0][1].trim();
    return insideParentheses.split(/\s*[|,]\s*/).map(spec => classifySpec(spec.trim()));
  };

  const specs = extractProductSpecs(product.name);

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <>
      <div className="product-details-cont-main">
        <div className="product-details-cont">
          {/* IMAGE + WISHLIST */}
          <div className="pd-image-cont">
            <div className="image-wrapper-pd">
              <img className="product-image" src={product.image} alt={product.name} />
              <button
                className="pd-add-to-wishlist-btn"
                onClick={() =>
                  wishlist.includes(product)
                    ? removeItemFromWishlist(product)
                    : addItemToWishlist(product)
                }
              >
                {wishlist.includes(product) ? <Svg type="filled-heart" /> : <Svg type="heart" />}
              </button>
            </div>
          </div>

          {/* DESCRIPTION + PRICE */}
          <div className="desc-price-wrapper">
            <div className="product-desc-cont">
              <div className="product-desc">
                <h3>{product.name}</h3>
                <p id="sku">SKU: Alpha Male</p>
                <hr className="pdr" />
                <span>
                  description here (dataset does NOT provide descriptions, i could simply do
                  product.description if it existed)
                </span>
                <hr className="pdr" />
                <p id="warranty">
                  Warranty: <b>{CWO} {CWO === "1" ? "year" : "years"}</b> Effortless warranty claims with global coverage; shipping costs are on us
                </p>
                <hr className="pdr" />
              </div>
            </div>

            <hr className="vertical-divider" />

            <div className="product-price">
              <div id="price">
                <p>USD</p>
                <h3>{product.discount_price ?? product.actual_price}</h3>
              </div>

              <div id="sale-price">
                <p id="sale-percentage">8% OFF</p>
                <p id="before-sale-price">
                  Was USD {product.discount_price
                    ? product.actual_price
                    : typeof product.actual_price === "number"
                    ? (product.actual_price / 0.92).toFixed(2)
                    : "N/A"}
                </p>
              </div>

              <p id="sold-by">
                Sold By: <b>Vexus</b>
              </p>
              <p className="fulfilled-by">Fulfilled By Vexus</p>
              <hr className="pdr" />

              <div className="select-ur-warranty">
                <p id="select-warranty-header">Select your warranty</p>
                {[1, 2, 3].map(y => (
                  <p key={y} className="warranty-option">
                    <button
                      onClick={() => {
                        setCWO(y.toString());
                        setWarranty(y);
                      }}
                      className={CWO === y.toString() ? "option-active" : ""}
                    ></button>
                    {y} Year{y > 1 ? "s" : ""} warranty {y > 1 ? `+ SAR ${128.76 * (y - 1)}` : "- Free"}
                  </p>
                ))}
              </div>

              <hr className="pdr" />

              <div className="add-to-cart-wrapper">
                <div className="add-to-cart">
                  <p id="inStock">In Stock</p>
                  <div className="add-to-cart-btn-cont">
                    <select className="quantity-select" onChange={e => setQuantity(Number(e.target.value))} value={quantity}>
                      {quantityOptions.map(op => (
                        <option key={op}>{op}</option>
                      ))}
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

        <div className="specs-cont">
        {(!specs || specs.length === 0) && <Noti text="No specifications listed" />}
        {specs && specs.length > 0 && (
          <div className="specs">
            <h3>General Specifications</h3>
            <div className="spec-table">
              {chunkArray(specs, 2).map((row, rowIndex) => (
                <div className="spec-row" key={rowIndex} style={{ display: 'flex', gap: '10px' }}>
                  {row.map((s, idx) => (
                    <div className="spec-cont" key={idx} style={{ flex: 1 }}>
                      <div className="spec-type"><strong>{s.type}:</strong></div>
                      <div className="spec-value">{s.value}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>)}
        </div>

      <div className="pdr-long" />

      <ProductReviews productTitle={product.name} idx={0} />
    </>
  );
}

export default ProductDetails;
