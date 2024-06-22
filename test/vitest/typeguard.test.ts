import { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { afterAll, beforeAll, expect, expectTypeOf, test } from "vitest";
import { isFile, isSingleLineText } from "../../src/functions/record";
import { addRecord, createApp } from "../functions/operationKintoneApp";

import "dotenv/config";

const { baseUrl, username, password } = process.env;
if (!baseUrl || !username || !password) process.exit(1);

const client = new KintoneRestAPIClient({
	baseUrl,
	auth: { username, password },
});

let app = "0";
let id = "0";

beforeAll(async () => {
	app = await createApp(client);
	id = await addRecord(client, app);
});

afterAll(async () => {});

test("REST API", async () => {
	const { record } = await client.record.getRecord({ app, id });
	for (const fieldCode of Object.keys(record)) {
		const field = record[fieldCode];

		if (isSingleLineText(field)) {
			expect(isSingleLineText(field)).toBe(true);
			expect(Object.keys(field).length).toBe(2);

			expect(field.type).toEqual("SINGLE_LINE_TEXT");
			expect(field.value).toEqual("oooo株式会社");

			expectTypeOf(field.type).toEqualTypeOf<"SINGLE_LINE_TEXT">();
			expectTypeOf(field.value).toEqualTypeOf<string>();

			// @ts-expect-error
			field.value[0].disabled;

			// @ts-expect-error
			field.value[0].error;
		}

		if (isFile(field)) {
			expect(isFile(field)).toBe(true);
			expect(Object.keys(field).length).toBe(2);
			expect(Object.keys(field.value[0]).length).toBe(4);

			expect(field.type).toEqual("FILE");
			expect(field.value[0].name).toEqual("sample.txt");
			expect(field.value[0].contentType).toEqual("text/plain");
			expect(field.value[0].size).toEqual("6");

			expectTypeOf(field.type).toEqualTypeOf<"FILE">();
			expectTypeOf(field.value[0].fileKey).toEqualTypeOf<string>();
			expectTypeOf(field.value[0].name).toEqualTypeOf<string>();
			expectTypeOf(field.value[0].contentType).toEqualTypeOf<string>();
			expectTypeOf(field.value[0].size).toEqualTypeOf<string>();

			// @ts-expect-error
			field.value[0].disabled;

			// @ts-expect-error
			field.value[0].error;
		}
	}
});
