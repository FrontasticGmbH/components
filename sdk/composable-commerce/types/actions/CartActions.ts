import { Cart, Order, ShippingMethod } from "shared/types/cart";
import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";
import {
	AddCartItemPayload,
	RemoveCartItemPayload,
	UpdateCartItemPayload,
	UpdateCartPayload,
	GetCartShippingMethodsPayload,
	SetCartShippingMethodPayload,
	RedeemDiscountCodePayload,
	RemoveDiscountCodePayload,
} from "../payloads/CartPayloads";
import { QueryOrdersQuery } from "../queries/CartQueries";
import { PaginatedResult } from "shared/types/result";

type GetCartAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<Cart>>;

type AddCartItemAction = (
	payload: AddCartItemPayload,
	options?: { serverOptions?: ServerOptions }
) => Promise<SDKResponse<Cart>>;

type RemoveCartItemAction = (
	payload: RemoveCartItemPayload,
	options?: { serverOptions?: ServerOptions }
) => Promise<SDKResponse<Cart>>;

type UpdateCartItemAction = (
	payload: UpdateCartItemPayload,
	options?: { serverOptions?: ServerOptions }
) => Promise<SDKResponse<Cart>>;

type UpdateCartAction = (
	payload: UpdateCartPayload,
	options?: { serverOptions?: ServerOptions }
) => Promise<SDKResponse<Cart>>;

type GetCartShippingMethodsAction = (
	payload: GetCartShippingMethodsPayload,
	options?: { serverOptions?: ServerOptions }
) => Promise<SDKResponse<ShippingMethod[]>>;

type GetAvailableCartShippingMethodsAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<ShippingMethod[]>>;

type SetCartShippingMethodAction = (
	payload: SetCartShippingMethodPayload,
	options?: { serverOptions?: ServerOptions }
) => Promise<SDKResponse<Cart>>;

type RedeemDiscountCodeAction = (
	payload: RedeemDiscountCodePayload,
	options?: { serverOptions?: ServerOptions }
) => Promise<SDKResponse<Cart | string>>;

type RemoveDiscountCodeAction = (
	payload: RemoveDiscountCodePayload,
	options?: { serverOptions?: ServerOptions }
) => Promise<SDKResponse<Cart>>;

type CheckoutCartAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<Cart>>;

type QueryOrdersAction = (
	query?: QueryOrdersQuery,
	options?: {
		serverOptions?: ServerOptions;
	}
) => Promise<SDKResponse<PaginatedResult<Order>>>;

export {
	type GetCartAction,
	type AddCartItemAction,
	type RemoveCartItemAction,
	type UpdateCartItemAction,
	type UpdateCartAction,
	type GetCartShippingMethodsAction,
	type GetAvailableCartShippingMethodsAction,
	type SetCartShippingMethodAction,
	type RedeemDiscountCodeAction,
	type RemoveDiscountCodeAction,
	type CheckoutCartAction,
	type QueryOrdersAction,
};
