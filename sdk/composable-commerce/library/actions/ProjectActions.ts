import { ProjectSettings } from "shared/types/ProjectSettings";
import { Event, SDK, ServerOptions } from "@commercetools/frontend-sdk";
import { GetProjectSettingsAction } from "../../types/actions/ProjectActions";
import { ComposableCommerceEvents } from "../../types/events/ComposableCommerceEvents";

export type ProjectActions = {
	getSettings: GetProjectSettingsAction;
};

export const getProjectActions = (
	sdk: SDK<ComposableCommerceEvents>
): ProjectActions => {
	return {
		getSettings: async (
			options: { serverOptions?: ServerOptions } = {}
		) => {
			const response = await sdk.callAction<ProjectSettings>({
				actionName: "project/getProjectSettings",
				serverOptions: options.serverOptions,
			});

			if (response.isError === false) {
				sdk.trigger(
					new Event({
						eventName: "projectSettingsFetched",
						data: {
							projectSettings: response.data,
						},
					})
				);
			}
			return response;
		},
	};
};
