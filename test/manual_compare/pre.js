Module = {};
//Module.noInitialRun = true;
Module.preRun = function () {
    FS.mkdir('./input');
    FS.mount(NODEFS, { root: './input' }, './input');
};