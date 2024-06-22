import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		dir: "test/vitest",
		include: ["**/*.test.ts"],
		typecheck: { enabled: true },
	},
});
