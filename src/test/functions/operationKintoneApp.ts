import type { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { customizeJs } from "./customize";
import { sleep } from "./utils";

const addApp = async (client: KintoneRestAPIClient) => {
	const { app } = await client.app.addApp({
		name: "Test App",
	});
	return app;
};

const addFields = async (client: KintoneRestAPIClient, app: string) => {
	await client.app.addFormFields({
		app,
		properties: {
			文字列1行: {
				type: "SINGLE_LINE_TEXT",
				code: "文字列1行",
				label: "文字列1行",
				noLabel: false,
				required: false,
				unique: false,
			},
			添付ファイル: {
				type: "FILE",
				code: "添付ファイル",
				label: "添付ファイル",
				noLabel: false,
				required: false,
			},
		},
	});
};

const addCustomizeJs = async (client: KintoneRestAPIClient, app: string) => {
	const { fileKey } = await client.file.uploadFile({
		file: {
			name: "sample.js",
			data: customizeJs.toString(),
		},
	});
	await client.app.updateAppCustomize({
		app,
		scope: "ALL",
		desktop: { js: [{ type: "FILE", file: { fileKey } }] },
	});
};

const deploy = async (client: KintoneRestAPIClient, app: string) => {
	await client.app.deployApp({ apps: [{ app }] });

	for (let i = 0; i < 10; i++) {
		const { apps } = await client.app.getDeployStatus({ apps: [app] });
		const status = apps[0].status;
		if (status === "SUCCESS") break;

		await sleep(2500);
	}
};

export const createApp = async (client: KintoneRestAPIClient) => {
	const app = await addApp(client);
	await addFields(client, app);
	await addCustomizeJs(client, app);
	await deploy(client, app);

	return app;
};

export const addRecord = async (client: KintoneRestAPIClient, app: string) => {
	const { fileKey } = await client.file.uploadFile({
		file: {
			name: "sample.txt",
			data: "sample",
		},
	});

	const { id } = await client.record.addRecord({
		app,
		record: {
			文字列1行: { value: "oooo株式会社" },
			添付ファイル: { value: [{ fileKey }] },
		},
	});

	return id;
};
