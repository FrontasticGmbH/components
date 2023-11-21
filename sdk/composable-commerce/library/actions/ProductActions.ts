import { Event, SDK, ServerOptions } from "@commercetools/frontend-sdk";
import {
	GetProductQuery,
	ProductQueryQuery,
	QueryProductCategoriesQuery,
} from "../../types/queries/ProductQueries";
import {
	GetProductAction,
	GetSearchableProductAttributesAction,
	ProductQueryAction,
	QueryProductCategoriesAction,
} from "../../types/actions/ProductActions";
import { Product, Result, FilterField } from "shared/types/product";
import { ComposableCommerceEvents } from "../../types/events/ComposableCommerceEvents";

export type ProductActions = {
	getProduct: GetProductAction;
	query: ProductQueryAction;
	queryCategories: QueryProductCategoriesAction;
	getSearchableAttributes: GetSearchableProductAttributesAction;
};

export const getProductActions = (
	sdk: SDK<ComposableCommerceEvents>
): ProductActions => {
	return {
		getProduct: async (
			query: GetProductQuery,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Product>({
				actionName: "product/getProduct",
				query,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false && response.data) {
				sdk.trigger(
					new Event({
						eventName: "productFetched",
						data: {
							product: response.data,
						},
					})
				);
			}
			return response;
		},
		query: async (
			query: ProductQueryQuery,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Result>({
				actionName: "product/query",
				query,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "productsQueried",
						data: {
							query: query,
							result: response.data,
						},
					})
				);
			}
			return response;
		},
		queryCategories: async (
			query: QueryProductCategoriesQuery,
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<Result>({
				actionName: "product/queryCategories",
				query,
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "productCategoriesQueried",
						data: {
							query: query,
							result: response.data,
						},
					})
				);
			}
			return response;
		},
		getSearchableAttributes: async (
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<FilterField[]>({
				actionName: "product/searchableAttributes",
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "searchableProductAttributesFetched",
						data: {
							filterFields: response.data,
						},
					})
				);
			}
			return response;
		},
	};
};
