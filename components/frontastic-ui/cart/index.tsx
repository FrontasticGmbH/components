import { useCart } from 'frontastic';
import { useRouter } from 'next/router';
import EmptyCart from './emptyCart';
import ItemList from './itemList';
import OrderSummary from './orderSummary';
import RelatedProducts from './relatedProducts';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

interface Props {

}

const Cart = ({ }: Props) => {
    const { data, removeItem, updateItem, shippingMethods } = useCart();
    const router = useRouter();

    const onCheckout = () => router.push('/checkout');

    const editItemQuantity = (lineItemId: string, newQuantity: number) => updateItem(lineItemId, newQuantity);

    const goToProductPage = (_url: string) => router.push(_url);

    if (!data?.lineItems || data.lineItems.length < 1) {
        return <EmptyCart />
    }

    return <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-xl">Shopping Cart</h1>

        <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <ItemList cart={data} editItemQuantity={editItemQuantity} goToProductPage={goToProductPage} removeItem={(lineItemId: string) => removeItem(lineItemId)} />
            <OrderSummary cart={data} shippingMethod={shippingMethods.data?.[0]} onCheckout={onCheckout} />
        </form>

        <RelatedProducts />
    </main>
}

export default Cart;
