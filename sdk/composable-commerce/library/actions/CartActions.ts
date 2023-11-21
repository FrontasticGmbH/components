import { Event, SDK, ServerOptions } from "@commercetools/frontend-sdk";
import {
	AddCartItemPayload,
	GetCartShippingMethodsPayload,
	RedeemDiscountCodePayload,
	RemoveCartItemPayload,
	RemoveDiscountCodePayload,
	SetCartShippingMethodPayload,
	UpdateCartItemPayload,
	UpdateCartPayload,
} from "../../types/payloads/CartPayloads";
import {
	AddCartItemAction,
	CheckoutCartAction,
	GetAvailableCartShippingMethodsAction,
	GetCartAction,
	GetCartShippingMethodsAction,
	QueryOrdersAction,
	RedeemDiscountCodeAction,
	RemoveCartItemAction,
	RemoveDiscountCodeAction,
	SetCartShippingMethodAction,
	UpdateCartAction,
	UpdateCartItemAction,
} from "../../types/actions/CartActions";
import { Cart, ShippingMethod, Order } from "shared/types/cart";
import { ComposableCommerceEvents } from "../../types/events/ComposableCommerceEvents";
import { QueryOrdersQuery } from "../../types/queries/CartQueries";
import { PaginatedResult } from "shared/types/result";

export type CartActions = {
	getCart: GetCartAction;
	addItem: AddCartItemAction;
	removeItem: RemoveCartItemAction;
	updateItem: UpdateCartItemAction;
	updateCart: UpdateCartAction;
	getShippingMethods: GetCartShippingMethodsAction;
	getAvailableShippingMethods: GetAvailableCartShippingMethodsAction;
	setShippingMethod: SetCartShippingMethodAction;
	redeemDiscountCode: RedeemDiscountCodeAction;
	removeDiscountCode: RemoveDiscountCodeAction;
	checkout: CheckoutCartAction;
	queryOrders: QueryOrdersAction;
};

export const getCartActions = (
	sdk: SDK<ComposableCommerceEvents>
): CartActions => {
	return {
		getCart: async (options: { serverOptions?: ServerOptions } = {}) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/getCart",
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "cartFetched",
						data: {
							cart: response,
						},
					})
				);
			}
			return response;
		},
		addItem: async (
			payload: AddCartItemPayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/addToCart",
				payload,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "productAddedToCart",
						data: {
							product: payload.variant,
							quantity: payload.variant.count,
						},
					})
				);
			}
			return response;
		},
		removeItem: async (
			payload: RemoveCartItemPayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/removeLineItem",
				payload,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "productRemovedFromCart",
						data: {
							product: payload.lineItem,
							quantity: 1,
						},
					})
				);
			}
			return response;
		},
		updateItem: async (
			payload: UpdateCartItemPayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/updateLineItem",
				payload,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "productUpdatedInCart",
						data: {
							product: {
								id: payload.lineItem.id,
							},
							newQuantity: payload.lineItem.count,
						},
					})
				);
			}
			return response;
		},
		updateCart: async (
			payload: UpdateCartPayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/updateCart",
				payload,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "cartUpdated",
						data: payload,
					})
				);
			}
			return response;
		},
		getShippingMethods: async (
			payload?: GetCartShippingMethodsPayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<ShippingMethod[]>({
				actionName: "cart/getShippingMethods",
				query: payload?.query ?? undefined,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "shippingMethodsFetched",
						data: {
							shippingMethods: response.data,
						},
					})
				);
			}
			return response;
		},
		getAvailableShippingMethods: async (
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<ShippingMethod[]>({
				actionName: "cart/getAvailableShippingMethods",
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "availableShippingMethodsFetched",
						data: {
							shippingMethods: response.data,
						},
					})
				);
			}
			return response;
		},
		setShippingMethod: async (
			payload: SetCartShippingMethodPayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/setShippingMethod",
				payload,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "shippingMethodUpdated",
						data: {
							shippingMethod:
								response.data.availableShippingMethods?.find(
									(shippingMethod) =>
										shippingMethod.shippingMethodId ===
										payload.shippingMethod.id
								),
						},
					})
				);
			}
			return response;
		},
		redeemDiscountCode: async (
			payload: RedeemDiscountCodePayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Cart | string>({
				actionName: "cart/redeemDiscount",
				payload,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "discountCodeRedeemed",
						data: {
							discountCode:
								typeof response.data !== "string"
									? payload.code
									: response.data,
							cart:
								typeof response.data !== "string"
									? response.data
									: undefined,
						},
					})
				);
			}
			return response;
		},
		removeDiscountCode: async (
			payload: RemoveDiscountCodePayload,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/removeDiscount",
				payload,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "discountCodeRemoved",
						data: {
							discountCode: payload.discountId,
							cart: response.data,
						},
					})
				);
			}
			return response;
		},
		checkout: async (options: { serverOptions?: ServerOptions } = {}) => {
			const response = await sdk.callAction<Cart>({
				actionName: "cart/checkout",
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "cartCheckedOut",
						data: {},
					})
				);
			}
			return response;
		},
		queryOrders: async (
			query?: QueryOrdersQuery,
			options: {
				serverOptions?: ServerOptions;
			} = {}
		) => {
			const response = await sdk.callAction<PaginatedResult<Order>>({
				actionName: "cart/queryOrders",
				query,
				serverOptions: options.serverOptions,
			});
			return response;
		},
	};
};
