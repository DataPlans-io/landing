(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        86570: function(n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return e(95118)
            }])
        },
        95118: function(n, t, e) {
            "use strict";
            e.r(t);
            var u = e(70865),
                o = e(52322),
                r = (e(72048), e(85195), e(45606), e(11553), e(45847)),
                c = e.n(r),
                i = e(2784);
            t.default = function(n) {
                var t = n.Component,
                    e = n.pageProps;
                return (0, i.useEffect)((function() {
                    var n, t;
                    !document.documentElement.getAttribute("data-theme") && (null === (n = e.space) || void 0 === n || null === (t = n.customization) || void 0 === t ? void 0 : t.theme) && document.documentElement.setAttribute("data-theme", e.space.customization.theme)
                })), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(c(), {
                        src: "https://cdnjs.cloudflare.com/ajax/libs/quicklink/2.3.0/quicklink.umd.js",
                        strategy: "lazyOnload",
                        onLoad: function() {
                            window.quicklink.listen()
                        }
                    }), (0, o.jsx)(t, (0, u.Z)({}, e))]
                })
            }
        },
        85195: function() {},
        45606: function() {},
        11553: function() {},
        72048: function() {},
        45847: function(n, t, e) {
            n.exports = e(20747)
        },
        47842: function(n, t, e) {
            "use strict";

            function u(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }
            e.d(t, {
                Z: function() {
                    return u
                }
            })
        },
        70865: function(n, t, e) {
            "use strict";
            e.d(t, {
                Z: function() {
                    return o
                }
            });
            var u = e(47842);

            function o(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(e);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })))), o.forEach((function(t) {
                        (0, u.Z)(n, t, e[t])
                    }))
                }
                return n
            }
        }
    },
    function(n) {
        var t = function(t) {
            return n(n.s = t)
        };
        n.O(0, [9774, 179], (function() {
            return t(86570), t(93642)
        }));
        var e = n.O();
        _N_E = e
    }
]);