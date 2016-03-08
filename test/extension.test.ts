import * as assert from 'assert';
import * as vscode from 'vscode';
import * as extension from '../extension';

suite("vscode-parinfer Tests", () => {

	// vscode-parinfer should support raw Clojure (clj) files.
	test("should run for Clojure file", () => {
		assert.ok(extension.shouldRun("foo.clj"));
	});
});