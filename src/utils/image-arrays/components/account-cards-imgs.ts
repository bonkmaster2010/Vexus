import order_historyImg from '../../../images/components/account-cards-imgs.ts/icon-dashboard-button-order-history.webp';
import addressesImg from '../../../images/components/account-cards-imgs.ts/icon-dashboard-button-your-address.webp';
import wishlistImg from '../../../images/components/account-cards-imgs.ts/icon-dashboard-button-wishlist.png';
import reviewsImg from '../../../images/components/account-cards-imgs.ts/icon-dashboard-button-reviews.webp';
import profile_detailsImg  from '../../../images/components/account-cards-imgs.ts/icon-dashboard-button-profile.png';
import payment_methodImg from '../../../images/components/account-cards-imgs.ts/icon-dashboard-button-login-secure.webp';

const AccountCardsImgs = [
    {src: order_historyImg, title: 'Order History', overview: "Track your order, check order status, return your product or buy the product again.", route: 'order-history'},
    {src: addressesImg, title: 'Addresses', overview: "Modify your addresses or add the new address for orders and gifts.", route: 'addresses'},
    {src: wishlistImg, title: 'Wishlist', overview: "See the items saved to your wishlist. Move them to cart or remove from wishlist.", route: '/wishlist'},
    {src: reviewsImg, title: 'Reviews', overview: "View the previous reviews you have submitted.", route: 'reviews'},
    {src: profile_detailsImg, title: 'Profile Details', overview: "View, update account information. Change account password.", route: 'user-details'},
    {src: payment_methodImg, title: 'Payment Options', overview: "Manage your saved cards. View your Microless balance.", route: 'payment-options'},
];

export { AccountCardsImgs };