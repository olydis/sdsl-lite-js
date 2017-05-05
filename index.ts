import * as lib from "./lib/index";

exports = lib;

// polyfill
declare var define: (req: void[], res: () => any) => void;
declare var exports: any;
if (typeof define !== "undefined") define([], () => exports);