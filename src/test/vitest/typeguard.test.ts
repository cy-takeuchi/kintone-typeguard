import fs from "node:fs";
import { describe } from "node:test";
import {
	type KintoneFormFieldProperty,
	type KintoneRecordField,
	KintoneRestAPIClient,
} from "@kintone/rest-api-client";
import { config } from "dotenv";
import { afterAll, beforeAll, expect, expectTypeOf, test } from "vitest";
import { guardFormField, guardRecord } from "../..";
import { addRecord, createApp } from "../functions/operationKintoneApp";

config();
config({ path: "test/params/.env" });

const { baseUrl, username, password } = process.env;
if (!baseUrl || !username || !password) process.exit(1);

const client = new KintoneRestAPIClient({
	baseUrl,
	auth: { username, password },
});

let app = process.env.app;
let id = process.env.id;

beforeAll(async () => {
	if (!app || !id) {
		app = await createApp(client);
		id = await addRecord(client, app);

		const file = "src/test/params/.env";
		const data = `app=${app}\nid=${id}`;
		fs.writeFileSync(file, data, {
			flag: "w",
		});
	}
});

afterAll(async () => {});

describe("REST API", async () => {
	test("RECORD", async () => {
		if (!app || !id) process.exit(1);

		const { record } = await client.record.getRecord({ app, id });

		expect(guardRecord.isSingleLineText(record.文字列1行)).toBe(true);
		expect(guardRecord.isFile(record.添付ファイル)).toBe(true);

		expect(guardRecord.isNumber(record.文字列1行)).toBe(false);
		expect(guardRecord.isNumber(record.添付ファイル)).toBe(false);

		for (const fieldCode of Object.keys(record)) {
			const field = record[fieldCode];

			if (guardRecord.isSingleLineText(field)) {
				expectTypeOf(field).toEqualTypeOf<KintoneRecordField.SingleLineText>();

				// @ts-expect-error
				field.value[0].disabled;

				// @ts-expect-error
				field.value[0].error;
			}

			if (guardRecord.isFile(field)) {
				expectTypeOf(field).toEqualTypeOf<KintoneRecordField.File>();

				// @ts-expect-error
				field.value[0].disabled;

				// @ts-expect-error
				field.value[0].error;
			}
		}
	});

	test("FORM", async () => {
		if (!app || !id) process.exit(1);

		const { properties: fields } = await client.app.getFormFields({ app });

		expect(guardFormField.isSingleLineText(fields.文字列1行)).toBe(true);
		expect(guardFormField.isFile(fields.添付ファイル)).toBe(true);

		expect(guardFormField.isNumber(fields.文字列1行)).toBe(false);
		expect(guardFormField.isNumber(fields.添付ファイル)).toBe(false);

		for (const fieldCode of Object.keys(fields)) {
			const field = fields[fieldCode];

			if (guardFormField.isSingleLineText(field)) {
				expectTypeOf(
					field,
				).toEqualTypeOf<KintoneFormFieldProperty.SingleLineText>();
			}

			if (guardFormField.isFile(field)) {
				expectTypeOf(field).toEqualTypeOf<KintoneFormFieldProperty.File>();
			}
		}
	});
});
