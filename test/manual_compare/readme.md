# Manual comparison of C++ and JS for debugging purposes

## using divsufsort64

emcc compare_main.cpp libdivsufsort/lib/divsufsort.cpp libdivsufsort/lib/sssort.cpp libdivsufsort/lib/trsort.cpp -Isdsl-lite-install/include/ -Ilibdivsufsort/include/ -include cstdlib --std=c++14 -msse2 -O3 -DPROJECT_VERSION_FULL=\"libdivsufsort_version\" -DINLINE=inline -DBUILD_DIVSUFSORT64 -o compare_main.js --bind --pre-js pre.js -s ALLOW_MEMORY_GROWTH=1 && node ./compare_main.js ./compare_main.cpp
g++ compare_main.cpp libdivsufsort/lib/divsufsort.cpp libdivsufsort/lib/sssort.cpp libdivsufsort/lib/trsort.cpp -Isdsl-lite-install/include/ -Ilibdivsufsort/include/ -include cstdlib --std=c++14 -msse2 -O3 -DPROJECT_VERSION_FULL=\"libdivsufsort_version\" -DINLINE=inline -DBUILD_DIVSUFSORT64 -o compare_main && ./compare_main ./input/bind.js


## using divsufsort

emcc compare_main.cpp libdivsufsort/lib/divsufsort.cpp libdivsufsort/lib/sssort.cpp libdivsufsort/lib/trsort.cpp -Isdsl-lite-install/include/ -Ilibdivsufsort/include/ -include cstdlib --std=c++14 -msse2 -O3 -DPROJECT_VERSION_FULL=\"libdivsufsort_version\" -DINLINE=inline -DBUILD_DIVSUFSORT -o compare_main.js --bind --pre-js pre.js -s ALLOW_MEMORY_GROWTH=1 && node ./compare_main.js ./compare_main.cpp
g++ compare_main.cpp libdivsufsort/lib/divsufsort.cpp libdivsufsort/lib/sssort.cpp libdivsufsort/lib/trsort.cpp -Isdsl-lite-install/include/ -Ilibdivsufsort/include/ -include cstdlib --std=c++14 -msse2 -O3 -DPROJECT_VERSION_FULL=\"libdivsufsort_version\" -DINLINE=inline -DBUILD_DIVSUFSORT -o compare_main && ./compare_main ./input/bind.js

