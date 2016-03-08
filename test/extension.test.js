"use strict";
var assert = require('assert');
var extension = require('../extension');
suite("vscode-parinfer Tests", function () {
    // vscode-parinfer should support raw Clojure (clj) files.
    test("should run for Clojure file", function () {
        assert.ok(extension.shouldRun("/foo/bar.clj"));
    });
    
    test("should run for ClojureScript file", function () {
        assert.ok(extension.shouldRun("/foo/bar.cljs"));
    });
    
    test("should run for ClojureX file", function () {
        assert.ok(extension.shouldRun("/foo/bar.cljx"));
    });
    
    test("should run for Clojure reader conditional file", function () {
        assert.ok(extension.shouldRun("/foo/bar.cljc"));
    });
    
    test("should run for Boot build script", function () {
        assert.ok(extension.shouldRun("/foo/build.boot"));
    });
});
//# sourceMappingURL=extension.test.js.map