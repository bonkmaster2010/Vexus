function CartImage({ src, alt, navigate }: any) {
    return (
        <div className="cart-image-div">
            <img onClick={navigate} src={src} alt={`${alt} image`} />
        </div>
    );
}

export default CartImage;
