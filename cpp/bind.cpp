#include <sdsl/suffix_trees.hpp>
#include <sdsl/suffix_arrays.hpp>
#include <iostream>
#include <emscripten/bind.h>

using namespace std;
using namespace sdsl;

typedef cst_sct3<> cst_t;
typedef cst_t::char_type char_type;

void func()
{
    cst_t cst;
    construct_im(cst, "Hello KIT", 1);

    long double runs = 1;
    long double avg_lcp = 0;
    if (cst.csa.size()) {
        std::cout << cst.csa.size() << std::endl;
        char_type prev_bwt = cst.csa.bwt[0];
        for (uint64_t i=1; i<cst.csa.size(); ++i) {
            char_type bwt = cst.csa.bwt[i];
            if (prev_bwt != bwt) {
                runs += 1.0;
            }
            prev_bwt = bwt;
            avg_lcp += cst.lcp[i];
        }
        avg_lcp /= cst.csa.size();
        std::cout << avg_lcp << std::endl;
        for (size_t k=0; k<=5; k++) {
            cout << "H_" << k << ": " << Hk(cst,k).first << endl;
        }
        cout << "avg LCP: " << avg_lcp << endl;
        cout << "runs in BWT: " << runs << endl;

    }
}

void csa()
{
    csa_sada<> csa;
    construct_im(csa, "Hello KIT", 1);
    for (int i = 0; i < csa.size(); ++i)
        cout << "sa[" << i << "] = " << csa[i] << endl;
}

EMSCRIPTEN_BINDINGS()
{
    emscripten::function("func", &func);
    emscripten::function("csa", &csa);
}