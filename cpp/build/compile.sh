#!/bin/bash

emcc bind.cpp libdivsufsort/lib/divsufsort.cpp libdivsufsort/lib/sssort.cpp libdivsufsort/lib/trsort.cpp -Isdsl-lite-install/include/ -Ilibdivsufsort/include/ -include cstdlib --std=c++14 -msse2 -O3 -DPROJECT_VERSION_FULL=\"libdivsufsort_version\" -DINLINE=inline -DBUILD_DIVSUFSORT -o build/bind.js --bind --memory-init-file 0 -s ALLOW_MEMORY_GROWTH=1
# -s DISABLE_EXCEPTION_CATCHING=0
echo "if (ENVIRONMENT_IS_WEB) define([], function () { return Module; });" >> build/bind.js
