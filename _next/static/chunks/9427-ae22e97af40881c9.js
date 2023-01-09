(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9427], {
        71606: function(e, t, n) {
            "use strict";
            var i = n(52322),
                r = n(97729),
                a = n.n(r),
                l = n(86741);

            function o(e) {
                var t = e.code,
                    n = e.head;
                return t ? n ? (0, i.jsx)(a(), {
                    children: (0, l.ZP)(t)
                }) : (0, i.jsx)(i.Fragment, {
                    children: (0, l.ZP)(t)
                }) : null
            }
            o.defaultProps = {
                head: !1
            }, t.Z = o
        },
        99659: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return R
                }
            });
            var i = n(70865),
                r = n(96670),
                a = n(50930),
                l = n(52322),
                o = n(72779),
                s = n.n(o),
                c = n(2784),
                d = n(10869),
                u = n(50834),
                m = n(58673),
                h = n(52899),
                v = n(65498),
                f = n(61317),
                p = n(25237),
                g = n.n(p),
                x = n(96577),
                b = n.n(x),
                w = n(5632),
                j = JSON.parse('{"path":"https://renderer-v2.vercel.app/_next/image","imageSizes":[16,32,48,64,96,128,256,384],"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"domains":["staging-api.typedream.com","api.typedream.com","typedream.sfo3.digitaloceanspaces.com","typedream-assets.sfo3.digitaloceanspaces.com"],"formats":["image/avif","image/webp"],"minimumCacheTTL":31536000}'),
                y = null === j || void 0 === j ? void 0 : j.domains,
                _ = !!(null === j || void 0 === j ? void 0 : j.dangerouslyAllowSVG),
                N = null === j || void 0 === j ? void 0 : j.deviceSizes,
                k = null === j || void 0 === j ? void 0 : j.imageSizes,
                C = (0, a.Z)(N || []).concat((0, a.Z)(k || []));
            C.sort((function(e, t) {
                return e - t
            }));
            var I = (null === j || void 0 === j ? void 0 : j.path) || "/_next/image",
                F = function(e) {
                    var t = e.src,
                        n = e.width,
                        i = e.quality;
                    if (t) {
                        if (t.startsWith("//") || t.endsWith(".svg") && !_) return t;
                        if (!t.startsWith("/") && y) try {
                            var r = new URL(t);
                            if (!(null === y || void 0 === y ? void 0 : y.includes(r.hostname)) || r.pathname.endsWith(".svg") && !_) return t
                        } catch (l) {
                            return t
                        }
                        var a = n && C.find((function(e) {
                            return e >= n
                        })) || C[C.length - 1];
                        return "".concat(I, "?url=").concat(encodeURIComponent(t), "&w=").concat(a, "&q=").concat(i || 75)
                    }
                },
                B = n(32839),
                T = g()((function() {
                    return Promise.all([n.e(47), n.e(3387), n.e(7311), n.e(5383), n.e(6475)]).then(n.bind(n, 21041))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [21041]
                        }
                    }
                }),
                q = (0, c.createContext)({
                    isBurgerOpen: !1,
                    setIsBurgerOpen: function() {
                        throw Error("Please wrap component around NavbarContext.Provider")
                    }
                });

            function z(e) {
                var t = (0, c.useContext)(q).setIsBurgerOpen,
                    n = e.color,
                    i = e.url,
                    r = e.internalLink,
                    a = e.openInNewTab,
                    o = e.className,
                    u = e.children,
                    m = s()(o, {
                        "td-navbar-item-color-gradient": !!n && (0, d.W3)(n)
                    });
                if (i) {
                    var h = a ? "_blank" : "_self";
                    return (0, l.jsx)("a", {
                        href: i,
                        target: h,
                        className: m,
                        onClick: function() {
                            return t(!1)
                        },
                        rel: r ? void 0 : "noreferrer",
                        children: u
                    })
                }
                return (0, l.jsx)("div", {
                    className: m,
                    children: u
                })
            }

            function E(e) {
                var t = e.title,
                    n = e.fontFamily,
                    i = e.type,
                    r = e.color,
                    a = e.url,
                    o = e.internalLink,
                    s = e.openInNewTab,
                    c = e.children,
                    m = "button" === i ? e.background : void 0,
                    h = r && (0, d.W3)(r),
                    v = (0, l.jsx)("div", {
                        className: "button" === i ? "td-navbar-item-button" : "td-navbar-item-link",
                        role: "none",
                        style: {
                            color: (0, d.Tj)(r, u.lq),
                            background: "button" === i ? (0, d.Tj)(m, u.z7) : void 0,
                            fontFamily: n,
                            boxShadow: "button" === i ? "0 10px 20px -10px ".concat((0, d.Tj)(m, u.My)) : void 0
                        },
                        children: (0, l.jsx)("span", {
                            style: {
                                backgroundImage: r && h ? (0, d.Tj)(r, u.eR) : void 0
                            },
                            children: t
                        })
                    });
                return (0, l.jsxs)(z, {
                    url: a,
                    internalLink: o,
                    openInNewTab: s,
                    color: r,
                    className: "td-navbar-item",
                    children: [c, v]
                })
            }

            function S(e) {
                var t = e.title,
                    n = e.fontFamily,
                    i = e.color,
                    r = e.menu,
                    a = e.url,
                    o = e.internalLink,
                    s = e.openInNewTab,
                    m = (0, c.useRef)(null),
                    f = (0, c.useState)(!1),
                    p = f[0],
                    g = f[1];
                return (0, l.jsxs)("div", {
                    ref: m,
                    role: "none",
                    className: "td-navbar-item",
                    onClick: function() {
                        return g((function(e) {
                            return !e
                        }))
                    },
                    "data-state": p ? "open" : void 0,
                    children: [(0, l.jsx)(z, {
                        url: a,
                        internalLink: o,
                        openInNewTab: s,
                        color: i,
                        className: "td-navbar-item-dropdown",
                        children: (0, l.jsx)("div", {
                            style: {
                                color: (0, d.Tj)(i, u.lq),
                                fontFamily: n
                            },
                            children: (0, l.jsx)("span", {
                                style: {
                                    backgroundImage: i && (0, d.W3)(i) ? (0, d.Tj)(i, u.eR) : void 0
                                },
                                children: t
                            })
                        })
                    }), (0, l.jsx)("svg", {
                        viewBox: "0 0 16 16",
                        height: "15",
                        width: "15",
                        "aria-hidden": "true",
                        focusable: "false",
                        fill: "currentColor",
                        className: "icon-chevron-down",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        })
                    }), (0, l.jsx)(h.N.Provider, {
                        value: (0, c.useMemo)((function() {
                            return {
                                navbarItemRef: m
                            }
                        }), []),
                        children: (0, l.jsx)(v.e, {
                            node: r,
                            optimizedImageComponent: b(),
                            isImageOptimizable: B.q,
                            rootClassName: "typedream content td-navbar-item-dropdown-menu",
                            rootStyle: {
                                width: "card" === (null === r || void 0 === r ? void 0 : r.style) ? void 0 : "100%"
                            }
                        })
                    })]
                })
            }
            z.defaultProps = {
                className: void 0
            };

            function $(e) {
                var t, n = e.title,
                    i = e.fontFamily,
                    r = e.type,
                    a = e.color,
                    o = e.url,
                    s = e.internalLink,
                    c = e.openInNewTab,
                    d = e.children;
                return "web3_button" === r ? (0, l.jsx)(z, {
                    color: a,
                    className: "td-navbar-item",
                    children: (0, l.jsx)(T, {
                        title: n,
                        fontFamily: i,
                        color: a,
                        background: e.background,
                        children: d
                    })
                }) : "dropdown" !== r || (0 === (t = e.menu).children.length || 1 === t.children.length && 0 === t.children[0].children.length || "navbar_dropdown_menu_column" === t.children[0].type && 1 === t.children[0].children.length && "text" in t.children[0].children[0] && "" === t.children[0].children[0].text) ? (0, l.jsx)(E, {
                    type: "button" === r ? "button" : "link",
                    title: n,
                    fontFamily: i,
                    color: a,
                    background: "button" === r ? e.background : void 0,
                    url: o,
                    internalLink: s,
                    openInNewTab: c,
                    children: d
                }) : (0, l.jsx)(S, {
                    title: n,
                    fontFamily: i,
                    color: a,
                    url: o,
                    internalLink: s,
                    openInNewTab: c,
                    menu: e.menu
                })
            }
            var A = {
                regular: "bx",
                solid: "bxs",
                logo: "bxl"
            };

            function W(e) {
                var t = (0, c.useState)(!1),
                    n = t[0],
                    i = t[1];
                switch (e.logoType) {
                    case "image":
                        var r = e.logoImage,
                            a = e.logoScale,
                            o = n ? r : F({
                                src: r,
                                width: 384
                            });
                        return (0, l.jsx)("div", {
                            className: "td-navbar-brand-logo",
                            children: (0, l.jsx)("img", {
                                src: o,
                                style: {
                                    height: 28 * (a || 1),
                                    maxHeight: "3rem"
                                },
                                alt: "website logo",
                                onError: function() {
                                    return i(!0)
                                }
                            })
                        });
                    case "emoji":
                        var s = e.logoImage,
                            d = e.logoScale;
                        return (0, l.jsx)("div", {
                            className: "td-navbar-brand-logo td-navbar-brand-emoji",
                            style: {
                                fontSize: "".concat(30 * (d || 1), "px")
                            },
                            children: s
                        });
                    case "icon":
                        var m = e.logoImage,
                            h = e.logoScale,
                            v = m,
                            p = A[v.type],
                            g = v.name;
                        return (0, l.jsx)("div", {
                            className: "td-navbar-brand-logo",
                            style: {
                                color: u.eR[v.color],
                                fontSize: "".concat(30 * (h || 1), "px")
                            },
                            children: (0, l.jsx)(f.J, {
                                type: p,
                                name: g
                            })
                        });
                    default:
                        return (0, l.jsx)("div", {})
                }
            }

            function R(e) {
                var t = e.logoType,
                    n = e.logoColor,
                    o = e.logoFontFamily,
                    d = e.logoURL,
                    u = e.position,
                    h = e.style,
                    v = e.logoTitle,
                    f = e.logoOpenInNewTab,
                    p = e.logoURLInternalLink,
                    g = e.alignment,
                    x = e.menu,
                    b = e.endMenu,
                    j = e.isBlur,
                    y = "" !== t ? e.logoImage : void 0,
                    _ = (0, w.useRouter)(),
                    N = (0, c.useState)(!1),
                    k = N[0],
                    C = N[1];
                (0, c.useEffect)((function() {
                    var e = function() {
                        return C(!1)
                    };
                    return _.events.on("routeChangeComplete", e),
                        function() {
                            _.events.off("routeChangeComplete", e)
                        }
                }), [_]);
                var I = (x || []).map((function(e) {
                        return (0, l.jsx)($, (0, r.Z)((0, i.Z)({}, e), {
                            fontFamily: m.R[e.fontFamily]
                        }), "".concat(e.title, "-").concat(e.type))
                    })),
                    F = (b || []).map((function(e) {
                        return (0, l.jsx)($, (0, r.Z)((0, i.Z)({}, e), {
                            fontFamily: m.R[e.fontFamily]
                        }), "".concat(e.title, "-").concat(e.type))
                    })),
                    B = F.length > 0 || I.length > 0;
                return (0, l.jsxs)(q.Provider, {
                    value: (0, c.useMemo)((function() {
                        return {
                            isBurgerOpen: k,
                            setIsBurgerOpen: C
                        }
                    }), [k, C]),
                    children: [(0, l.jsxs)("nav", {
                        id: "td-navbar",
                        className: s()("td-navbar", {
                            "td-navbar-container-shadow": "shadow" === h,
                            "td-navbar-container-border": "border" === h,
                            "td-navbar-container-blur": j && !k,
                            "align-start": "start" === g,
                            "align-center": "center" === g,
                            "align-end": "end" === g
                        }),
                        role: "navigation",
                        "aria-label": "main navigation",
                        style: {
                            position: u,
                            height: 60,
                            maxWidth: "100vw",
                            width: "100%"
                        },
                        children: [(0, l.jsxs)("div", {
                            className: "td-navbar-brand",
                            children: [(v || y) && (0, l.jsx)($, {
                                title: v || "",
                                color: n || "",
                                fontFamily: m.R[o],
                                type: "link",
                                url: d,
                                internalLink: p,
                                openInNewTab: f,
                                children: (0, l.jsx)(W, (0, i.Z)({}, e))
                            }, "".concat(v, "-").concat(t)), B && (0, l.jsxs)("a", {
                                role: "button",
                                className: s()("td-navbar-burger", {
                                    "is-active": k
                                }),
                                onKeyDown: function() {},
                                tabIndex: 0,
                                onClick: function() {
                                    return C((function(e) {
                                        return !e
                                    }))
                                },
                                "aria-label": "menu",
                                "aria-expanded": k,
                                children: [(0, l.jsx)("span", {
                                    "aria-hidden": "true"
                                }), (0, l.jsx)("span", {
                                    "aria-hidden": "true"
                                }), (0, l.jsx)("span", {
                                    "aria-hidden": "true"
                                })]
                            })]
                        }), k && (0, l.jsx)("div", {
                            className: "td-navbar-mobile",
                            style: {
                                top: 60,
                                maxHeight: "fixed" === u ? "calc(100vh - ".concat(60, "px)") : void 0
                            },
                            children: (0, a.Z)(I).concat((0, a.Z)(F))
                        }), (0, l.jsx)("div", {
                            className: "td-navbar-middle",
                            children: I.length > 0 && I
                        }), (0, l.jsx)("div", {
                            className: "td-navbar-end",
                            children: F.length > 0 && F
                        })]
                    }), "fixed" === u && (0, l.jsx)("div", {
                        style: {
                            height: 60
                        }
                    })]
                })
            }
        },
        30553: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var i, r, a = n(52322),
                l = n(39097),
                o = n.n(l),
                s = n(79826);
            ! function(e) {
                e.OWNER = "owner", e.ADMIN = "admin", e.WRITER = "writer", e.READER = "reader"
            }(i || (i = {})),
            function(e) {
                e.ACTIVE = "active", e.INACTIVE = "inactive"
            }(r || (r = {}));
            var c = n(62886),
                d = n.n(c);
            var u = function(e) {
                var t, n = e.subscription,
                    i = e.spaceID;
                return (null === n || void 0 === n ? void 0 : n.product_id) === s.Uw || (null === n || void 0 === n ? void 0 : n.status) !== r.ACTIVE || (null === n || void 0 === n || null === (t = n.metadata) || void 0 === t ? void 0 : t.affiliate) ? (0, a.jsx)(o(), {
                    href: "".concat(s.og, "?utm_source=watermark:").concat(i),
                    children: (0, a.jsxs)("a", {
                        target: "_new",
                        className: d().watermark,
                        children: ["Made in", " ", s.i5]
                    })
                }) : null
            }
        },
        79826: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fh: function() {
                    return x
                },
                L0: function() {
                    return l
                },
                OH: function() {
                    return g
                },
                PJ: function() {
                    return a
                },
                Si: function() {
                    return p
                },
                Tl: function() {
                    return m
                },
                Uw: function() {
                    return v
                },
                Yu: function() {
                    return h
                },
                Yw: function() {
                    return o
                },
                bG: function() {
                    return r
                },
                gE: function() {
                    return c
                },
                i5: function() {
                    return s
                },
                it: function() {
                    return f
                },
                oQ: function() {
                    return d
                },
                og: function() {
                    return u
                }
            });
            var i = n(34406),
                r = "https://api.typedream.com/v0",
                a = "https://analytics.typedream.com",
                l = (i.env.NEXT_PUBLIC_EDITOR_DOMAIN, "SUBDOMAIN"),
                o = i.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
                s = "Typedream",
                c = "@typedreamHQ",
                d = "/images/logo@100.png",
                u = "https://typedream.com",
                m = "/favicon.ico",
                h = "A website made with Typedream.",
                v = "FREE",
                f = "id",
                p = "ITEM_PAGE_URL",
                g = {
                    METADATA: {
                        fieldName: "".concat("TD", ":metadata"),
                        label: "Metadata",
                        description: "For SEO Settings, Twitter cards, etc.",
                        type: "rich_text"
                    },
                    SLUG: {
                        fieldName: "".concat("TD", ":slug"),
                        label: "Slug",
                        description: "To specify the URL for each item",
                        type: "rich_text"
                    },
                    PUBLISHED_CONTENT: {
                        fieldName: "TD:page_content_published",
                        label: "Page Content",
                        description: "To store your page's published rich text content",
                        type: "rich_text"
                    },
                    CONTENT: {
                        fieldName: "TD:page_content",
                        label: "Page Content Draft",
                        description: "To store your page's draft rich text content",
                        type: "rich_text"
                    }
                },
                x = "typedream_theme"
        },
        2578: function(e, t, n) {
            "use strict";
            var i = n(98788),
                r = n(90581),
                a = n(70865),
                l = n(96670),
                o = n(94776),
                s = n.n(o),
                c = n(9669),
                d = n.n(c),
                u = n(79826),
                m = function() {
                    function e() {
                        (0, r.Z)(this, e), this.api = u.bG, this.config = {}
                    }
                    var t = e.prototype;
                    return t.mergeHeaders = function(e, t) {
                        return (0, l.Z)((0, a.Z)({}, e, t), {
                            headers: (0, a.Z)({}, null === e || void 0 === e ? void 0 : e.headers, (null === t || void 0 === t ? void 0 : t.headers) || {})
                        })
                    }, t.get = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                headers: {}
                            },
                            n = this;
                        return (0, i.Z)(s().mark((function i() {
                            var r;
                            return s().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return r = {
                                            headers: {}
                                        }, i.abrupt("return", d().get("".concat(n.api).concat(e), n.mergeHeaders(r, t)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, t.post = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            r = this;
                        return (0, i.Z)(s().mark((function i() {
                            var a;
                            return s().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return a = {
                                            headers: {}
                                        }, i.abrupt("return", d().post("".concat(r.api).concat(e), t, r.mergeHeaders(a, n)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, t.put = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            r = this;
                        return (0, i.Z)(s().mark((function i() {
                            var a;
                            return s().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return a = {
                                            headers: {}
                                        }, i.abrupt("return", d().put("".concat(r.api).concat(e), t, r.mergeHeaders(a, n)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, t.patch = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                headers: {}
                            },
                            r = this;
                        return (0, i.Z)(s().mark((function i() {
                            var a;
                            return s().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return a = {
                                            headers: {}
                                        }, i.abrupt("return", d().patch("".concat(r.api).concat(e), t, r.mergeHeaders(a, n)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, t.delete = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                headers: {}
                            },
                            n = this;
                        return (0, i.Z)(s().mark((function i() {
                            var r;
                            return s().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return r = {
                                            headers: {}
                                        }, i.abrupt("return", d().delete("".concat(n.api).concat(e), n.mergeHeaders(r, t)));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }, e
                }();
            t.Z = m
        },
        14374: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return m
                }
            });
            var i = n(52322),
                r = n(2784),
                a = n(79826),
                l = function() {
                    var e = document.querySelector("html"),
                        t = "light" === ((null === e || void 0 === e ? void 0 : e.getAttribute("data-theme")) || "light") ? "dark" : "light";
                    null === e || void 0 === e || e.setAttribute("data-theme", t), localStorage.setItem(a.Fh, t)
                },
                o = function() {
                    var e = document.querySelector("html"),
                        t = localStorage.getItem(a.Fh) || "light";
                    null === e || void 0 === e || e.setAttribute("data-theme", t)
                },
                s = n(30854),
                c = n.n(s);

            function d() {
                return (0, i.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    height: "32",
                    width: "32",
                    fill: "currentColor",
                    className: c().moon,
                    children: (0, i.jsx)("path", {
                        d: "M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"
                    })
                })
            }

            function u() {
                return (0, i.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    height: "32",
                    width: "32",
                    fill: "currentColor",
                    className: c().sun,
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z",
                        clipRule: "evenodd"
                    })
                })
            }
            var m = function() {
                return (0, r.useEffect)(o, []), (0, i.jsxs)("button", {
                    type: "button",
                    className: c().switch,
                    onClick: l,
                    tabIndex: -1,
                    children: [(0, i.jsx)(u, {}), (0, i.jsx)(d, {})]
                })
            }
        },
        32839: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return r
                }
            });
            var i = JSON.parse('{"path":"https://renderer-v2.vercel.app/_next/image","imageSizes":[16,32,48,64,96,128,256,384],"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"domains":["staging-api.typedream.com","api.typedream.com","typedream.sfo3.digitaloceanspaces.com","typedream-assets.sfo3.digitaloceanspaces.com"],"formats":["image/avif","image/webp"],"minimumCacheTTL":31536000}'),
                r = function(e) {
                    if (!e) return !1;
                    var t = !1;
                    try {
                        var n;
                        t = !!(null === i || void 0 === i || null === (n = i.domains) || void 0 === n ? void 0 : n.some((function(t) {
                            return t === new URL(e).hostname
                        })))
                    } catch (r) {}
                    return t
                }
        },
        62886: function(e) {
            e.exports = {
                watermark: "Watermark_watermark__1QliA"
            }
        },
        30854: function(e) {
            e.exports = {
                switch: "ThemeToggler_switch__UxZcW",
                icon: "ThemeToggler_icon__mrbco",
                sun: "ThemeToggler_sun__m2ZO4 ThemeToggler_icon__mrbco",
                moon: "ThemeToggler_moon__0QYFn ThemeToggler_icon__mrbco"
            }
        },
        40093: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return r
                }
            });
            const i = () => {
                    throw new Error("You forgot to wrap your component in <CollectionContext.Provider>.")
                },
                r = (0, n(2784).createContext)({
                    collectionData: void 0,
                    fetchMore: i,
                    loading: !1,
                    visitorFilterList: [],
                    selectedVisitorFilter: void 0,
                    setSelectedVisitorFilter: i,
                    searchQuery: "",
                    setSearchQuery: i
                })
        },
        98635: function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, {
                P: function() {
                    return i
                }
            }), (r = i || (i = {})).PILL = "pill", r.PILL_BG = "pillWithBackground", r.TAB = "tab", r.SQUARE_BG = "squareWithBackground", r.LEFT_COLUMN = "leftColumn"
        },
        76559: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return P
                },
                k: function() {
                    return D
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                filterContainer_leftColumn: function() {
                    return m
                },
                filterContainer_pill: function() {
                    return h
                },
                filterContainer_pillWithBackground: function() {
                    return v
                },
                filterContainer_squareWithBackground: function() {
                    return f
                },
                filterContainer_tab: function() {
                    return p
                },
                filterItemActive_leftColumn: function() {
                    return g
                },
                filterItemActive_pill: function() {
                    return x
                },
                filterItemActive_pillWithBackground: function() {
                    return b
                },
                filterItemActive_squareWithBackground: function() {
                    return w
                },
                filterItemActive_tab: function() {
                    return j
                },
                filterItemWrapper_leftColumn: function() {
                    return y
                },
                filterItemWrapper_pill: function() {
                    return _
                },
                filterItemWrapper_pillWithBackground: function() {
                    return N
                },
                filterItemWrapper_squareWithBackground: function() {
                    return k
                },
                filterItemWrapper_tab: function() {
                    return C
                },
                filterItem_leftColumn: function() {
                    return I
                },
                filterItem_pill: function() {
                    return F
                },
                filterItem_pillWithBackground: function() {
                    return B
                },
                filterItem_squareWithBackground: function() {
                    return T
                },
                filterItem_tab: function() {
                    return q
                },
                filterNavNext: function() {
                    return z
                },
                filterNavPrev: function() {
                    return E
                },
                filterWrapper_leftColumn: function() {
                    return S
                },
                filterWrapper_pill: function() {
                    return $
                },
                filterWrapper_pillWithBackground: function() {
                    return A
                },
                filterWrapper_squareWithBackground: function() {
                    return W
                },
                filterWrapper_tab: function() {
                    return R
                }
            });
            var r = n(24228),
                a = n(93765),
                l = n(10869),
                o = n(50834),
                s = n(72779),
                c = n.n(s),
                d = n(2784),
                u = n(98635),
                m = "vvqwo72",
                h = "vvqwo73 vvqwo70",
                v = "vvqwo74 vvqwo71 vvqwo70",
                f = "vvqwo75 vvqwo71 vvqwo70",
                p = "vvqwo76 vvqwo70",
                g = "vvqwo7d",
                x = "vvqwo79 vvqwo78",
                b = "vvqwo7a vvqwo78",
                w = "vvqwo7b vvqwo78",
                j = "vvqwo7c",
                y = "vvqwo7o",
                _ = "vvqwo7k vvqwo7j",
                N = "vvqwo7l vvqwo7j",
                k = "vvqwo7m vvqwo7j",
                C = "vvqwo7n vvqwo7j",
                I = "vvqwo7i",
                F = "vvqwo7f vvqwo77",
                B = "vvqwo7g vvqwo77",
                T = "vvqwo7h vvqwo77",
                q = "vvqwo7e vvqwo77",
                z = "vvqwo7w vvqwo7v",
                E = "vvqwo7x vvqwo7v",
                S = "vvqwo7p",
                $ = "vvqwo7r vvqwo7q",
                A = "vvqwo7s vvqwo7q",
                W = "vvqwo7t vvqwo7q",
                R = "vvqwo7u vvqwo7q",
                L = n(52322);
            const D = "All";

            function P(e) {
                const {
                    filters: t,
                    filterStyle: n = u.P.PILL,
                    filterColor: s,
                    selectedFilter: m,
                    setSelectedFilter: h
                } = e, v = (0, d.useRef)(null), [f, p] = (0, d.useState)(0), [g, x] = (0, d.useState)(!1), b = v.current && n !== u.P.LEFT_COLUMN && v.current.scrollWidth > v.current.offsetWidth, w = e => e ? n === u.P.TAB ? "white" === s || "gray" === s ? "var(--text)" : "var(--accent)" : "gray" === s ? "var(--text)" : "white" === s ? "var(--text-light-theme)" : "var(--text-on-accent)" : "var(--text-lighter)", j = e => e && n === u.P.TAB ? "white" === s || "gray" === s ? "var(--text-light)" : "var(--accent)" : "transparent";
                (0, d.useEffect)((() => {
                    v.current && b && (f >= v.current.scrollWidth - v.current.offsetWidth - 1 ? x(!0) : x(!1))
                }), [f, b]);
                const y = e => {
                    v.current && (v.current.scrollLeft += e, p(f + e))
                };
                return (0, L.jsxs)("div", {
                    className: c()(i[`filterWrapper_${n}`]),
                    style: {
                        "--accent": (0, l.Tj)(s, o.z7)
                    },
                    children: [(0, L.jsx)("div", {
                        className: i[`filterContainer_${n}`],
                        children: (0, L.jsxs)("div", {
                            className: i[`filterItemWrapper_${n}`],
                            ref: v,
                            onScroll: b ? () => {
                                v.current && p(v.current.scrollLeft)
                            } : () => {},
                            children: [(0, L.jsx)("button", {
                                type: "button",
                                onClick: () => h(D),
                                className: c()(i[`filterItem_${n}`], {
                                    [i[`filterItemActive_${n}`]]: m === D
                                }),
                                style: {
                                    color: w(m === D),
                                    borderColor: j(m === D),
                                    boxShadow: m === D && n !== u.P.TAB ? `0 10px 20px -10px ${(0,l.Tj)(s,o.My)}` : "none"
                                },
                                children: D
                            }), t.map((e => (0, L.jsx)("button", {
                                type: "button",
                                onClick: () => h(e),
                                className: c()(i[`filterItem_${n}`], {
                                    [i[`filterItemActive_${n}`]]: m === e
                                }),
                                style: {
                                    color: w(m === e),
                                    borderColor: j(m === e),
                                    boxShadow: m === e && n !== u.P.TAB ? `0 10px 20px -10px ${(0,l.Tj)(s,o.My)}` : "none"
                                },
                                children: e
                            }, e)))]
                        })
                    }), b && 0 !== f && (0, L.jsx)("div", {
                        className: E,
                        children: (0, L.jsx)("button", {
                            type: "button",
                            onClick: () => y(-300),
                            children: (0, L.jsx)(r.s, {
                                size: 28
                            })
                        })
                    }), b && !g && (0, L.jsx)("div", {
                        className: z,
                        children: (0, L.jsx)("button", {
                            type: "button",
                            onClick: () => y(300),
                            children: (0, L.jsx)(a._, {
                                size: 28
                            })
                        })
                    })]
                })
            }
            P.defaultProps = {
                selectedFilter: D,
                filterStyle: u.P.PILL,
                filterColor: "accent"
            }
        },
        19335: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return c
                }
            });
            var i = n(5602),
                r = n(72779),
                a = n.n(r),
                l = n(2784),
                o = n(81024),
                s = n(52322);

            function c(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    className: c,
                    backgroundImageElement: d
                } = e, {
                    width: u,
                    width_max: m,
                    height: h,
                    align: v,
                    vertical_align: f,
                    mobile_direction: p,
                    mobile_reverse_columns: g,
                    mobile_horizontal_overflow: x,
                    background: b,
                    backgroundDarken: w,
                    mobile_hide: j,
                    desktop_hide: y,
                    customAttributes: _
                } = t, N = d || t.backgroundImage;
                return (0, s.jsxs)("div", { ..._,
                    className: a()(c, "_1j76um0"),
                    style: { ...(0, o.oB)(u, m),
                        ...(0, i.O)(b),
                        ..."string" == typeof N && {
                            backgroundImage: `url("${N}")`,
                            ...(0, i.f)(N, w)
                        }
                    },
                    ...r,
                    children: [(0, l.isValidElement)(N) && (0, s.jsx)("div", {
                        contentEditable: !1,
                        className: "_1j76ume",
                        children: N
                    }), (0, s.jsx)("div", {
                        className: a()("_1j76um4", "direction_horizontal" === p ? "_1j76um3" : "_1j76um1", {
                            _1j76um2: !!g
                        }),
                        children: (0, s.jsx)("div", {
                            className: a()("_1j76umd", {
                                "mobile:hidden": j,
                                "desktop:hidden": y,
                                _1j76um7: "align_left" === v,
                                _1j76um8: "align_center" === v,
                                _1j76um9: "align_right" === v,
                                _1j76uma: "align_start" === f,
                                _1j76umb: "align_center" === f,
                                _1j76umc: "align_end" === f,
                                _1j76um5: "squeeze" === x,
                                _1j76um6: "scroll" === x
                            }),
                            style: {
                                "--min-height": (0, o.nu)(h).height,
                                "--width": (0, o.oB)(u, m).width,
                                "--column-width": (0, o.oB)(u, m, "scroll" === x).width
                            },
                            children: n
                        })
                    })]
                })
            }
        },
        69502: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return l
                }
            });
            var i = n(72779),
                r = n.n(i),
                a = n(52322);

            function l(e) {
                const {
                    element: t,
                    children: n,
                    className: i,
                    attributes: l
                } = e, {
                    width: o,
                    customAttributes: s
                } = t;
                return (0, a.jsx)("div", { ...s,
                    className: r()(i, "_122mapi0", null == s ? void 0 : s.className),
                    style: {
                        "--width": 100 * o + "%",
                        "--width-float": o
                    },
                    ...l,
                    children: n
                })
            }
        },
        46007: function(e, t, n) {
            "use strict";
            n.d(t, {
                L0: function() {
                    return s
                },
                R6: function() {
                    return l
                },
                d: function() {
                    return i
                },
                jq: function() {
                    return r
                },
                nx: function() {
                    return a
                },
                w: function() {
                    return o
                }
            });
            const i = 700,
                r = 70,
                a = 17,
                l = .6,
                o = .8,
                s = "SUBDOMAIN"
        },
        38929: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return u
                }
            });
            var i = n(5602),
                r = n(72779),
                a = n.n(r),
                l = n(2784),
                o = n(81024),
                s = n(89009),
                c = n(52322),
                d = n(78921);

            function u(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    className: u,
                    backgroundImageElement: m
                } = e, {
                    width: h,
                    width_max: v,
                    height: f,
                    keep_aspect_ratio: p,
                    align: g,
                    vertical_align: x,
                    background: b,
                    backgroundDarken: w,
                    backgroundVideo: j,
                    mobile_hide: y,
                    desktop_hide: _,
                    style: N,
                    url: k,
                    open_in_new_tab: C,
                    internal_link: I,
                    animation: F,
                    customAttributes: B
                } = t, T = m || t.backgroundImage, [q, z] = (0, s.b)(F), E = !!k, S = (0, c.jsxs)("div", {
                    ref: q,
                    role: "none",
                    ...B,
                    className: a()(E ? void 0 : u, {
                        "mobile:hidden": y,
                        "desktop:hidden": _,
                        _1bgwy4x1: "align_left" === g,
                        _1bgwy4x2: "align_center" === g,
                        _1bgwy4x3: "align_right" === g,
                        _1bgwy4x4: "align_start" === x,
                        _1bgwy4x5: "align_center" === x,
                        _1bgwy4x6: "align_end" === x,
                        card: "card" === N
                    }, z, "_1bgwy4x9 _1bgwy4x0", null == B ? void 0 : B.className),
                    style: {
                        "--min-height": (0, o.nu)(f).height,
                        "--width": (0, o.oB)(h, v).width,
                        "--max-width": (0, o.oB)(h, v).maxWidth,
                        ...(0, i.O)(b),
                        ..."string" == typeof T && {
                            backgroundImage: `url("${T}")`,
                            ...(0, i.f)(T, w)
                        },
                        ...p && h && f && {
                            "--aspect-ratio": `${h} / ${f}`
                        }
                    },
                    ...E ? {} : r,
                    children: [(0, l.isValidElement)(T) && (0, c.jsx)("div", {
                        contentEditable: !1,
                        className: "_1bgwy4xb",
                        children: T
                    }), j && (0, c.jsx)("video", {
                        contentEditable: !1,
                        className: a()("_1bgwy4xa", {
                            card: "card" === N,
                            darken: w
                        }),
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        children: (0, c.jsx)("source", {
                            src: j
                        })
                    }), n]
                });
                return k ? (0, c.jsx)("div", {
                    className: a()(u, "_1bgwy4x7 _1bgwy4x0"),
                    style: {
                        "--width": (0, o.oB)(h, v).width,
                        "--max-width": (0, o.oB)(h, v).maxWidth
                    },
                    ...r,
                    children: (0, c.jsx)(d.r, {
                        href: k,
                        internal_link: I,
                        open_in_new_tab: C,
                        className: "_1bgwy4x8 _1bgwy4x0",
                        children: S
                    })
                }) : S
            }
        },
        40238: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return o
                }
            });
            var i = n(72779),
                r = n.n(i),
                a = n(46007),
                l = n(52322);

            function o(e) {
                const {
                    element: t,
                    children: n,
                    className: i,
                    attributes: o
                } = e, {
                    width: s,
                    mobile_hide: c,
                    desktop_hide: d,
                    customAttributes: u
                } = t;
                return (0, l.jsxs)("div", { ...u,
                    className: r()(i, {
                        "mobile:hidden": c,
                        "desktop:hidden": d
                    }, "c7sewk0", null == u ? void 0 : u.className),
                    style: {
                        maxWidth: "100%",
                        width: `${s||a.d}px`
                    },
                    ...o,
                    children: [(0, l.jsx)("hr", {
                        contentEditable: !1,
                        className: "c7sewk1"
                    }), n]
                })
            }
        },
        9707: function(e, t, n) {
            "use strict";
            n.d(t, {
                II: function() {
                    return c
                },
                iT: function() {
                    return d
                },
                Jz: function() {
                    return u
                }
            });
            var i = n(72779),
                r = n.n(i),
                a = n(81024),
                l = n(70595),
                o = n(89009),
                s = n(52322);

            function c(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: c
                } = e, {
                    width: d,
                    width_max: u,
                    align: m,
                    mobile_hide: h,
                    desktop_hide: v,
                    animation: f,
                    customAttributes: p
                } = t, [g, x] = (0, o.b)(f);
                return (0, s.jsx)("h1", {
                    ref: g,
                    ...p,
                    className: r()(c, {
                        "mobile:hidden": h,
                        "desktop:hidden": v
                    }, x, "ohgk4r1 ohgk4r0", null == p ? void 0 : p.className),
                    style: {
                        "--width": (0, a.oB)(d, u).width,
                        "--max-width": (0, a.oB)(d, u).maxWidth,
                        ...(0, l.o)(m)
                    },
                    ...i,
                    children: n
                })
            }

            function d(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: c
                } = e, {
                    width: d,
                    width_max: u,
                    align: m,
                    mobile_hide: h,
                    desktop_hide: v,
                    animation: f,
                    customAttributes: p
                } = t, [g, x] = (0, o.b)(f);
                return (0, s.jsx)("h2", {
                    ref: g,
                    ...p,
                    className: r()(c, {
                        "mobile:hidden": h,
                        "desktop:hidden": v
                    }, x, "ohgk4r2 ohgk4r0", null == p ? void 0 : p.className),
                    style: {
                        "--width": (0, a.oB)(d, u).width,
                        "--max-width": (0, a.oB)(d, u).maxWidth,
                        ...(0, l.o)(m)
                    },
                    ...i,
                    children: n
                })
            }

            function u(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: c
                } = e, {
                    width: d,
                    width_max: u,
                    align: m,
                    mobile_hide: h,
                    desktop_hide: v,
                    animation: f,
                    customAttributes: p
                } = t, [g, x] = (0, o.b)(f);
                return (0, s.jsx)("h3", {
                    ref: g,
                    ...p,
                    className: r()(c, {
                        "mobile:hidden": h,
                        "desktop:hidden": v
                    }, x, "ohgk4r3 ohgk4r0", null == p ? void 0 : p.className),
                    style: {
                        "--width": (0, a.oB)(d, u).width,
                        "--max-width": (0, a.oB)(d, u).maxWidth,
                        ...(0, l.o)(m)
                    },
                    ...i,
                    children: n
                })
            }
        },
        61317: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return o
                }
            });
            var i = n(2784),
                r = n(72779),
                a = n.n(r);
            var l = n(52322);

            function o({
                type: e,
                name: t,
                className: n
            }) {
                return (0, i.useEffect)((() => {
                    (e => {
                        if (document.head.querySelector(`link[href="${e}"][rel="stylesheet"]`)) return;
                        const t = document.createElement("link");
                        t.rel = "stylesheet", t.href = e;
                        const n = document.head.querySelector(`link[href="${e}"][rel="preload"]`);
                        n ? n.insertAdjacentElement("afterend", t) : document.head.appendChild(t)
                    })("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css")
                }), []), (0, l.jsx)("i", {
                    className: a()(`bx ${e}-${t}`, n),
                    contentEditable: !1
                })
            }
        },
        79552: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return m
                }
            });
            var i = n(72779),
                r = n.n(i),
                a = n(2784),
                l = "_10w3u1b2",
                o = n(78075),
                s = n(81024),
                c = n(89009),
                d = n(52322),
                u = n(78921);

            function m(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: m,
                    optimizable: h,
                    optimizedImageComponent: v
                } = e, {
                    url: f,
                    alt_text: p = "",
                    width: g,
                    height: x,
                    aspect_ratio: b,
                    align: w,
                    href: j,
                    internal_link: y,
                    open_in_new_tab: _,
                    mobile_hide: N,
                    desktop_hide: k,
                    animation: C,
                    border_radius: I,
                    crop: F,
                    customAttributes: B
                } = t, [T, q] = (0, a.useState)(!1), [z, E] = (0, c.b)(C), S = F ? F.originalDimensions.height * (F.scale || 1) : x, $ = F ? F.originalDimensions.width * (F.scale || 1) : g, A = F ? {
                    width: "100%",
                    maxWidth: "unset",
                    height: "100%"
                } : {};
                let W = v && f && $ && S ? (0, d.jsx)(v, {
                        className: l,
                        src: f,
                        alt: p,
                        height: Math.round(S),
                        width: Math.round($),
                        unoptimized: !(h && !T) || void 0,
                        onError: () => q(!0),
                        quality: 100
                    }) : (0, d.jsx)("img", {
                        className: l,
                        src: f || "/image-placeholder.svg",
                        alt: p,
                        style: { ...(0, s.oB)(g),
                            ...A,
                            ...(0, s.UO)(g, x, b),
                            ...f ? {} : {
                                objectFit: "cover",
                                objectPosition: "center"
                            }
                        }
                    }),
                    R = {};
                if (F) {
                    R = {
                        width: `${F.originalDimensions.width*(F.scale||1)/(g||1)*100}%`,
                        height: `${F.originalDimensions.height*(F.scale||1)/(x||1)*100}%`,
                        transform: `translate(${-F.cropParameters.x}%, ${-F.cropParameters.y}%)`
                    }
                }
                return W = (0, d.jsxs)("div", {
                    className: "_10w3u1b1",
                    style: {
                        "--width": `${g}px`,
                        "--height": `${x}px`,
                        "--aspect-ratio": `${g} / ${x}`,
                        overflow: "hidden",
                        borderRadius: I,
                        position: "relative"
                    },
                    ...i,
                    children: [(0, d.jsx)("div", {
                        contentEditable: !1,
                        style: R,
                        children: W
                    }), n]
                }), (0, d.jsx)("div", { ...B,
                    ref: z,
                    className: r()(m, {
                        "mobile:hidden": N,
                        "desktop:hidden": k
                    }, E, "_10w3u1b0", null == B ? void 0 : B.className),
                    style: {
                        justifyContent: (0, o.L)(w) || "center",
                        "--max-width": (0, s.oB)(g).maxWidth
                    },
                    children: j ? (0, d.jsx)(u.r, {
                        href: j,
                        internal_link: y,
                        open_in_new_tab: _,
                        className: "_10w3u1b3",
                        children: W
                    }) : W
                })
            }
        },
        78921: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return a
                }
            });
            var i = n(2784),
                r = n(52322);
            const a = (0, i.forwardRef)(((e, t) => {
                const {
                    href: n,
                    internal_link: i,
                    open_in_new_tab: a,
                    children: l,
                    style: o,
                    className: s
                } = e;
                return (0, r.jsx)("a", {
                    ref: t,
                    href: n,
                    rel: i ? void 0 : "noreferrer",
                    target: a ? "_blank" : void 0,
                    style: o,
                    className: s,
                    children: l
                })
            }))
        },
        91956: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return i
                }
            });
            var i = "_1h3aayo0"
        },
        52899: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return i
                }
            });
            const i = (0, n(2784).createContext)({
                navbarItemRef: {
                    current: null
                }
            })
        },
        28125: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return c
                }
            });
            var i = n(72779),
                r = n.n(i),
                a = n(81024),
                l = n(70595),
                o = n(89009),
                s = n(52322);

            function c(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: c
                } = e, {
                    width: d,
                    width_max: u,
                    align: m,
                    mobile_hide: h,
                    desktop_hide: v,
                    animation: f,
                    customAttributes: p
                } = t, [g, x] = (0, o.b)(f);
                return (0, s.jsx)("p", {
                    ref: g,
                    ...p,
                    className: r()(c, {
                        "mobile:hidden": h,
                        "desktop:hidden": v
                    }, x, "_1vo7q450", null == p ? void 0 : p.className),
                    style: {
                        "--width": (0, a.oB)(d, u).width,
                        "--max-width": (0, a.oB)(d, u).maxWidth,
                        ...(0, l.o)(m)
                    },
                    ...i,
                    children: n
                })
            }
        },
        33790: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return c
                }
            });
            var i = n(5602),
                r = n(72779),
                a = n.n(r),
                l = n(2784),
                o = "_1buablx7",
                s = n(52322);

            function c(e) {
                const {
                    element: t,
                    children: n,
                    className: r,
                    style: c,
                    attributes: d,
                    backgroundImageElement: u
                } = e, {
                    align: m,
                    vertical_align: h,
                    background: v,
                    backgroundDarken: f,
                    backgroundVideo: p,
                    customAttributes: g
                } = t, x = u || t.backgroundImage, b = (0, l.useRef)(null);
                return (0, l.useEffect)((() => {
                    var e;
                    null == (e = b.current) || e.load()
                }), [p]), (0, s.jsxs)("div", { ...g,
                    className: a()(r, "_1buablx0", {
                        _1buablx1: "align_left" === m,
                        _1buablx2: "align_center" === m,
                        _1buablx3: "align_right" === m,
                        _1buablx4: "align_start" === h,
                        _1buablx5: "align_center" === h,
                        _1buablx6: "align_end" === h
                    }, null == g ? void 0 : g.className),
                    style: { ...(0, i.O)(v),
                        ..."string" == typeof x && {
                            backgroundImage: `url("${x}")`,
                            ...(0, i.f)(x, f)
                        },
                        minHeight: h ? "100vh" : void 0,
                        ...c
                    },
                    ...d,
                    children: [(0, l.isValidElement)(x) && (0, s.jsx)("div", {
                        className: o,
                        children: x
                    }), p && (0, s.jsx)("div", {
                        className: o,
                        children: (0, s.jsx)("video", {
                            ref: b,
                            className: a()("_1buablx8", {
                                darken: f
                            }),
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            children: (0, s.jsx)("source", {
                                src: p
                            })
                        })
                    }), n]
                })
            }
        },
        65498: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return Ke
                }
            });
            var i = n(203),
                r = n(72779),
                a = n.n(r),
                l = n(5632),
                o = n(25237),
                s = n.n(o),
                c = n(2784),
                d = n(46007),
                u = n(52322);

            function m({
                src: e,
                darken: t,
                optimizable: n,
                optimizedImageComponent: i
            }) {
                const [r, l] = (0, c.useState)(!1);
                return e ? (0, u.jsx)(i, {
                    src: e,
                    alt: "background",
                    layout: "fill",
                    objectFit: "cover",
                    objectPosition: "center",
                    className: a()({
                        darken: t
                    }),
                    onError: () => l(!0),
                    unoptimized: !(n && !r) || void 0,
                    quality: 100
                }) : null
            }
            var h = n(33790),
                v = n(7114),
                f = n(18171),
                p = n(58813),
                g = "gbm3cz6",
                x = "gbm3cz0",
                b = "gbm3cz2",
                w = "gbm3cz4",
                j = "gbm3cz3",
                y = "gbm3cz5",
                _ = "gbm3cz1",
                N = n(67555);

            function k({
                element: e,
                children: t,
                attributes: n
            }) {
                var i;
                const r = `input-${e.id}`,
                    l = !(null != n && n["data-slate-void"]);
                return (0, u.jsxs)("div", { ...e.customAttributes,
                    className: a()(x, null == (i = e.customAttributes) ? void 0 : i.className),
                    ...n,
                    contentEditable: l,
                    children: [!e.is_label_hidden && (0, u.jsx)("label", {
                        htmlFor: r,
                        className: y,
                        contentEditable: !1,
                        children: e.label
                    }), (e.options || []).map((t => (0, u.jsx)(v.gN, {
                        id: `${r}-${t.value}`,
                        type: "checkbox",
                        value: t.value,
                        name: e.name,
                        children: ({
                            field: n,
                            form: i
                        }) => (0, u.jsx)("div", {
                            role: "none",
                            className: "_16lmqj12",
                            onClick: r => {
                                if (r.preventDefault(), e.disabled) return;
                                let a = -1;
                                const l = [...i.values[e.name]];
                                a = l.findIndex((e => e === t.value)), -1 !== a ? (l.splice(a, 1), i.setFieldValue(n.name, l)) : i.setFieldValue(n.name, [...l, t.value])
                            },
                            children: (0, u.jsxs)("label", {
                                htmlFor: `${r}-${t.value}`,
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                contentEditable: !1,
                                children: [(0, u.jsx)("input", {
                                    type: "checkbox",
                                    checked: n.checked,
                                    ...n
                                }), (0, u.jsx)("div", {
                                    className: a()("_16lmqj10", {
                                        _16lmqj13: n.checked
                                    }),
                                    children: n.checked && (0, u.jsx)(N.J, {
                                        className: "_16lmqj11"
                                    })
                                }), t.label]
                            })
                        })
                    }, t.value))), t]
                })
            }
            var C = n(14920),
                I = n(26503);
            const F = (e, t) => n => t && !n ? "Please fill in a value" : "email" === e && n && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n) ? "Please enter a valid email" : void 0;
            var B = n(61317);

            function T({
                element: e,
                children: t,
                attributes: n
            }) {
                const i = `input-${e.id}`,
                    [r, l] = c.useState(void 0);
                c.useEffect((() => {
                    !r && typeof document < "u" && l(document.getElementsByClassName("typedream content slate-root")[0])
                }), []);
                const o = !(null != n && n["data-slate-void"]);
                return (0, u.jsxs)("div", { ...e.customAttributes,
                    ...n,
                    className: x,
                    contentEditable: o,
                    children: [!e.is_label_hidden && (0, u.jsx)("label", {
                        htmlFor: i,
                        className: y,
                        contentEditable: !1,
                        children: e.label
                    }), (0, u.jsx)(v.gN, {
                        name: e.name,
                        validate: F(e.inputType, e.required),
                        children: ({
                            field: t,
                            form: i,
                            meta: l
                        }) => (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsxs)(C.fC, {
                                onValueChange: t => i.setFieldValue(e.name, t),
                                disabled: e.disabled,
                                dir: null == n ? void 0 : n.ref,
                                ...t,
                                children: [(0, u.jsxs)(C.xz, {
                                    className: a()("bm0wyz4", {
                                        bm0wyz5: i.touched[t.name] && !!l.error,
                                        bm0wyz7: !t.value
                                    }),
                                    children: [(0, u.jsx)(C.B4, {
                                        placeholder: e.placeholder
                                    }), (0, u.jsx)(C.JO, {
                                        children: (0, u.jsx)(B.J, {
                                            type: "bx",
                                            name: "chevron-down"
                                        })
                                    }), e.required && (0, u.jsx)("div", {
                                        className: g,
                                        children: (0, u.jsx)("span", {
                                            children: "*"
                                        })
                                    })]
                                }), (0, u.jsx)(C.h_, {
                                    container: r,
                                    children: (0, u.jsxs)(C.VY, {
                                        className: "bm0wyz0",
                                        children: [(0, u.jsx)(C.u_, {}), (0, u.jsx)(C.l_, {
                                            className: "bm0wyz1",
                                            children: (e.options || []).map((e => (0, u.jsxs)(C.ck, {
                                                value: e.value.toString(),
                                                className: "bm0wyz2",
                                                children: [(0, u.jsx)(C.eT, {
                                                    children: e.label
                                                }), (0, u.jsx)(C.wU, {
                                                    className: "bm0wyz3",
                                                    children: (0, u.jsx)(B.J, {
                                                        type: "bx",
                                                        name: "check"
                                                    })
                                                })]
                                            }, e.value)))
                                        }), (0, u.jsx)(C.$G, {
                                            className: "bm0wyz8",
                                            children: (0, u.jsx)(I._, {
                                                size: 16
                                            })
                                        })]
                                    })
                                })]
                            }), (0, u.jsx)(v.Bc, {
                                name: t.name,
                                children: e => (0, u.jsx)("div", {
                                    className: w,
                                    children: e
                                })
                            })]
                        })
                    }), t]
                })
            }

            function q() {
                return (0, u.jsx)(f.J, {
                    size: 24
                })
            }

            function z({
                element: e,
                attributes: t,
                children: n
            }) {
                var i, r;
                const l = `input-${e.id}`,
                    o = !(null != t && t["data-slate-void"]);
                switch (e.inputType) {
                    case "email":
                    case "text":
                        return (0, u.jsxs)("div", { ...e.customAttributes,
                            ...t,
                            contentEditable: o,
                            className: a()(x, null == (i = e.customAttributes) ? void 0 : i.className),
                            children: [!e.is_label_hidden && (0, u.jsx)("label", {
                                htmlFor: l,
                                className: y,
                                contentEditable: !1,
                                children: e.label
                            }), (0, u.jsx)(v.gN, {
                                name: e.name,
                                validate: F(e.inputType, e.required),
                                children: ({
                                    field: t,
                                    form: n,
                                    meta: i
                                }) => (0, u.jsxs)("div", {
                                    children: [(0, u.jsxs)("div", {
                                        className: a()(b, {
                                            [j]: n.touched[t.name] && !!i.error
                                        }),
                                        children: [(0, u.jsx)("input", {
                                            type: "text",
                                            className: _,
                                            disabled: e.disabled,
                                            placeholder: e.placeholder,
                                            ...t
                                        }), t.value && !i.error && (0, u.jsx)(p.X, {
                                            onClick: () => {
                                                n.setFieldValue(t.name, "")
                                            },
                                            size: 24
                                        }), e.required && (0, u.jsx)("div", {
                                            className: g,
                                            children: (0, u.jsx)("span", {
                                                children: "*"
                                            })
                                        }), (0, u.jsx)(v.Bc, {
                                            name: t.name,
                                            component: q
                                        })]
                                    }), (0, u.jsx)(v.Bc, {
                                        name: t.name,
                                        children: e => (0, u.jsx)("div", {
                                            className: w,
                                            children: e
                                        })
                                    })]
                                })
                            }), n]
                        });
                    case "number":
                        return (0, u.jsxs)("div", { ...e.customAttributes,
                            ...t,
                            contentEditable: o,
                            className: a()(x, null == (r = e.customAttributes) ? void 0 : r.className),
                            children: [!e.is_label_hidden && (0, u.jsx)("label", {
                                htmlFor: l,
                                className: y,
                                contentEditable: !1,
                                children: e.label
                            }), (0, u.jsx)(v.gN, {
                                name: e.name,
                                validate: F(e.inputType, e.required),
                                children: ({
                                    field: t,
                                    form: n,
                                    meta: i
                                }) => (0, u.jsxs)("div", {
                                    children: [(0, u.jsxs)("div", {
                                        className: a()(b, {
                                            [j]: n.touched[t.name] && !!i.error
                                        }),
                                        children: [(0, u.jsx)("input", {
                                            type: "number",
                                            className: _,
                                            disabled: e.disabled,
                                            placeholder: e.placeholder,
                                            ...t
                                        }), e.required && (0, u.jsx)("div", {
                                            className: g,
                                            children: (0, u.jsx)("span", {
                                                children: "*"
                                            })
                                        }), (0, u.jsx)(v.Bc, {
                                            name: t.name,
                                            component: q
                                        })]
                                    }), (0, u.jsx)(v.Bc, {
                                        name: t.name,
                                        children: e => (0, u.jsx)("div", {
                                            className: w,
                                            children: e
                                        })
                                    })]
                                })
                            }), n]
                        });
                    case "multiselection":
                        return (0, u.jsx)(k, {
                            element: e,
                            attributes: t,
                            children: n
                        });
                    case "selection":
                        return (0, u.jsx)(T, {
                            element: e,
                            attributes: t,
                            children: n
                        });
                    default:
                        return (0, u.jsx)("div", {})
                }
            }
            var E = n(5602),
                S = n(81024),
                $ = "kpid2t0";
            const A = e => {
                    switch (e) {
                        case "number":
                        case "selection":
                            return;
                        case "multiselection":
                            return [];
                        default:
                            return ""
                    }
                },
                W = e => e && 0 !== e.length ? e.reduce(((e, t) => "type" in t ? "form_input" === t.type ? { ...e,
                    [t.name]: A(t.inputType)
                } : { ...e,
                    ...W(t.children)
                } : e), {}) : {};

            function R({
                element: e,
                className: t,
                attributes: n,
                backgroundImage: i,
                handleFormSubmission: r,
                children: l
            }) {
                const {
                    form_id: o,
                    width: s,
                    height: d,
                    align: m,
                    vertical_align: h,
                    width_max: f,
                    background: p,
                    backgroundDarken: g,
                    mobile_hide: x,
                    desktop_hide: b,
                    customAttributes: w
                } = e, j = W(e.children), [y, _] = c.useState(""), [N, k] = c.useState(!1);
                return N ? (0, u.jsxs)("div", {
                    className: a()(t, $, {
                        "mobile:hidden": x,
                        "desktop:hidden": b
                    }),
                    style: {
                        "--min-height": (0, S.nu)(d).height,
                        "--width": (0, S.oB)(s, f).width,
                        "--max-width": (0, S.oB)(s, f).maxWidth,
                        ...(0, E.O)(p),
                        ..."string" == typeof i && (0, E.f)(i, g)
                    },
                    children: [(0, u.jsx)("img", {
                        src: "https://typedream-assets.sfo3.digitaloceanspaces.com/thankyou-checkmark.webp",
                        alt: "checkmark",
                        className: "kpid2t8"
                    }), (0, u.jsx)("h2", {
                        children: "Thank You"
                    }), (0, u.jsx)("p", {
                        children: "Your submission has been submitted"
                    }), (0, u.jsxs)("button", {
                        type: "button",
                        onClick: () => {
                            window.open("https://typedream.com/forms", "_blank")
                        },
                        className: "kpid2t7",
                        children: [(0, u.jsx)("img", {
                            src: "https://api.typedream.com/v0/document/public/46d710fd-ec90-498a-901c-d6acd853f5fa/2JIDiGTIEFdguQtUR4WxBAJnqFg_blockcloud-svg.svg?bucket=document",
                            alt: "logo",
                            className: "kpid2t9"
                        }), "Create your own form!"]
                    })]
                }) : (0, u.jsx)(v.J9, {
                    initialValues: j,
                    onSubmit: async e => {
                        try {
                            await r(o, e)
                        } catch (t) {
                            _((e => {
                                var t, n, i, r, a, l, o, s;
                                return "string" == typeof(null == (n = null == (t = null == e ? void 0 : e.response) ? void 0 : t.data) ? void 0 : n.msg) ? null == (r = null == (i = null == e ? void 0 : e.response) ? void 0 : i.data) ? void 0 : r.msg : "string" == typeof(null == (a = null == e ? void 0 : e.error) ? void 0 : a.message) ? null == (l = null == e ? void 0 : e.error) ? void 0 : l.message : "string" == typeof(null == e ? void 0 : e.message) ? null == e ? void 0 : e.message : JSON.stringify(null == (s = null == (o = null == e ? void 0 : e.response) ? void 0 : o.data) ? void 0 : s.msg) || (null == e ? void 0 : e.toString()) || JSON.stringify(e) || e || "Something went wrong"
                            })(t))
                        } finally {
                            k(!0)
                        }
                    },
                    children: (0, u.jsxs)(v.l0, { ...w,
                        id: e.id,
                        className: a()(t, $, {
                            "mobile:hidden": x,
                            "desktop:hidden": b,
                            kpid2t3: "align_left" === m,
                            kpid2t2: "align_center" === m,
                            kpid2t5: "align_right" === m,
                            kpid2t6: "align_start" === h,
                            kpid2t4: "align_center" === h,
                            kpid2t1: "align_end" === h
                        }, null == w ? void 0 : w.className),
                        style: {
                            "--min-height": (0, S.nu)(d).height,
                            "--width": (0, S.oB)(s, f).width,
                            "--max-width": (0, S.oB)(s, f).maxWidth,
                            ...(0, E.O)(p),
                            ..."string" == typeof i && (0, E.f)(i, g)
                        },
                        ...n,
                        children: [l, y]
                    })
                })
            }
            var L = n(50193);

            function D({
                className: e,
                attributes: t,
                children: n,
                element: i
            }) {
                var r;
                return (0, u.jsx)(L.VY, { ...i.customAttributes,
                    className: a()(e, "num1mw2", null == (r = i.customAttributes) ? void 0 : r.className),
                    ...t,
                    children: (0, u.jsx)("div", {
                        className: "num1mw3",
                        children: n
                    })
                })
            }
            var P = "l4d89p2";

            function M({
                className: e,
                attributes: t,
                children: n,
                element: i
            }) {
                var r;
                return (0, u.jsx)(L.h4, {
                    asChild: !0,
                    children: (0, u.jsx)("div", { ...i.customAttributes,
                        className: a()(e, "l4d89p0", null == (r = i.customAttributes) ? void 0 : r.className),
                        ...t,
                        children: (0, u.jsxs)(L.xz, {
                            className: "l4d89p5",
                            children: [n, (0, u.jsx)(B.J, {
                                type: "bx",
                                name: "plus",
                                className: a()(P, "l4d89p4")
                            }), (0, u.jsx)(B.J, {
                                type: "bx",
                                name: "minus",
                                className: a()(P, "l4d89p3")
                            }), (0, u.jsx)(B.J, {
                                type: "bxs",
                                name: "chevron-down",
                                className: a()(P, "l4d89p1")
                            })]
                        })
                    })
                })
            }

            function O(e) {
                const {
                    element: t,
                    className: n,
                    children: i,
                    attributes: r,
                    backgroundImageElement: l
                } = e, {
                    background: o,
                    mobile_hide: s,
                    desktop_hide: d,
                    customAttributes: m
                } = t;
                return (0, u.jsxs)(L.ck, { ...m,
                    value: t.id,
                    className: a()(n, "_11cr6ec0", null == m ? void 0 : m.className, {
                        "mobile:hidden": s,
                        "desktop:hidden": d
                    }),
                    style: { ...(0, E.O)(o)
                    },
                    ...r,
                    children: [(0, c.isValidElement)(l) && (0, u.jsx)("span", {
                        contentEditable: !1,
                        className: "_11cr6ec1",
                        children: l
                    }), i]
                })
            }

            function Z({
                element: e,
                className: t,
                attributes: n,
                expandAll: i,
                children: r
            }) {
                const {
                    width: l,
                    width_max: o,
                    mobile_hide: s,
                    desktop_hide: c,
                    customAttributes: d
                } = e, m = (0, S.oB)(l, o);
                return (0, u.jsx)(L.fC, { ...d,
                    type: "multiple",
                    value: i ? e.children.map((e => e.id)) : void 0,
                    onChange: i ? () => {} : void 0,
                    style: {
                        "--width": m.width,
                        "--max-width": m.maxWidth
                    },
                    className: a()(t, "_13oolbf0", null == d ? void 0 : d.className, {
                        "mobile:hidden": s,
                        "desktop:hidden": c
                    }),
                    "data-accordion-style": e.style || "plain",
                    ...n,
                    children: r
                })
            }
            var U = n(10869),
                J = n(50834),
                V = "vdg96m4",
                H = "vdg96m2",
                Q = "vdg96m3",
                G = n(6998),
                Y = n(78921);
            const K = (0, c.forwardRef)((({
                    element: e,
                    children: t,
                    attributes: n,
                    className: i
                }, r) => {
                    const {
                        itemType: l = "short",
                        icon: o,
                        title: s,
                        description: c,
                        fontFamily: d,
                        titleColor: m,
                        titleGradient: h,
                        descriptionColor: v,
                        descriptionGradient: f,
                        url: p,
                        internalLink: g,
                        openInNewTab: x
                    } = e, b = o ? void 0 : "#616161", w = (0, u.jsxs)("div", {
                        ref: r,
                        className: a()(i, "vdg96m1", {
                            vdg96m0: "featured" === l
                        }),
                        contentEditable: !1,
                        ...n,
                        children: ["title_only" === l && (0, u.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                height: 27
                            },
                            children: (0, u.jsx)("div", {
                                className: Q,
                                style: {
                                    width: 182,
                                    color: m ? (0, U.Tj)(m, J.lq) : void 0
                                },
                                children: (0, u.jsx)(G.vc, {
                                    leaf: {
                                        text: s,
                                        styled: !0,
                                        fontSize: 15,
                                        fontFamily: d,
                                        fontWeight: 400,
                                        color: m,
                                        gradient: !!h
                                    }
                                })
                            })
                        }), "title_desc" === l && (0, u.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: 64
                            },
                            children: [(0, u.jsx)("div", {
                                className: Q,
                                style: {
                                    width: 166,
                                    color: m ? (0, U.Tj)(m, J.lq) : void 0
                                },
                                children: (0, u.jsx)(G.vc, {
                                    leaf: {
                                        text: s,
                                        styled: !0,
                                        fontSize: 15,
                                        fontFamily: d,
                                        fontWeight: 600,
                                        color: m,
                                        gradient: !!h
                                    }
                                })
                            }), (0, u.jsx)("div", {
                                className: V,
                                style: {
                                    color: v ? (0, U.Tj)(v, J.lq) : "#B0B5C6"
                                },
                                children: (0, u.jsx)(G.vc, {
                                    leaf: {
                                        text: c || "",
                                        styled: !0,
                                        fontSize: 13,
                                        fontFamily: d,
                                        fontWeight: 500,
                                        color: v || "#B0B5C6",
                                        gradient: !!f
                                    }
                                })
                            })]
                        }), "simple" === l && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)("div", {
                                className: H,
                                style: {
                                    width: 27,
                                    height: 27,
                                    backgroundColor: b
                                },
                                children: o && (0, u.jsx)("img", {
                                    src: o,
                                    alt: "Menu icon"
                                })
                            }), (0, u.jsx)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: (0, u.jsx)("div", {
                                    className: Q,
                                    style: {
                                        width: 182,
                                        color: m ? (0, U.Tj)(m, J.lq) : void 0
                                    },
                                    children: (0, u.jsx)(G.vc, {
                                        leaf: {
                                            text: s,
                                            styled: !0,
                                            fontSize: 15,
                                            fontFamily: d,
                                            fontWeight: 600,
                                            color: m,
                                            gradient: !!h
                                        }
                                    })
                                })
                            })]
                        }), "short" === l && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)("div", {
                                className: H,
                                style: {
                                    width: 64,
                                    height: 64,
                                    backgroundColor: b
                                },
                                children: o && (0, u.jsx)("img", {
                                    src: o,
                                    alt: "Menu icon"
                                })
                            }), (0, u.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                },
                                children: [(0, u.jsx)("div", {
                                    className: Q,
                                    style: {
                                        width: 166,
                                        color: m ? (0, U.Tj)(m, J.lq) : void 0
                                    },
                                    children: (0, u.jsx)(G.vc, {
                                        leaf: {
                                            text: s,
                                            styled: !0,
                                            fontSize: 15,
                                            fontFamily: d,
                                            fontWeight: 600,
                                            color: m,
                                            gradient: !!h
                                        }
                                    })
                                }), (0, u.jsx)("div", {
                                    className: V,
                                    style: {
                                        color: v ? (0, U.Tj)(v, J.lq) : "#B0B5C6"
                                    },
                                    children: (0, u.jsx)(G.vc, {
                                        leaf: {
                                            text: c || "",
                                            styled: !0,
                                            fontSize: 13,
                                            fontFamily: d,
                                            fontWeight: 500,
                                            color: v || "#B0B5C6",
                                            gradient: !!f
                                        }
                                    })
                                })]
                            })]
                        }), "long" === l && (0, u.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                gap: "0.5rem"
                            },
                            children: [(0, u.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "1.5rem",
                                    alignItems: "center"
                                },
                                children: [(0, u.jsx)("div", {
                                    className: H,
                                    style: {
                                        width: 48,
                                        height: 48,
                                        backgroundColor: b
                                    },
                                    children: o && (0, u.jsx)("img", {
                                        src: o,
                                        alt: "Menu icon"
                                    })
                                }), (0, u.jsx)("div", {
                                    className: Q,
                                    style: {
                                        width: 182,
                                        color: m ? (0, U.Tj)(m, J.lq) : void 0
                                    },
                                    children: (0, u.jsx)(G.vc, {
                                        leaf: {
                                            text: s,
                                            styled: !0,
                                            fontSize: 15,
                                            fontFamily: d,
                                            fontWeight: 600,
                                            color: m,
                                            gradient: !!h
                                        }
                                    })
                                })]
                            }), (0, u.jsx)("div", {
                                className: V,
                                style: {
                                    color: v ? (0, U.Tj)(v, J.lq) : "#B0B5C6"
                                },
                                children: (0, u.jsx)(G.vc, {
                                    leaf: {
                                        text: c || "",
                                        styled: !0,
                                        fontSize: 13,
                                        fontFamily: d,
                                        fontWeight: 500,
                                        color: v || "#B0B5C6",
                                        gradient: !!f
                                    }
                                })
                            })]
                        }), "featured" === l && (0, u.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                width: "100%"
                            },
                            children: [(0, u.jsx)("div", {
                                className: H,
                                style: {
                                    width: 64,
                                    height: 64,
                                    backgroundColor: b,
                                    marginBottom: "16px"
                                },
                                children: o && (0, u.jsx)("img", {
                                    src: o,
                                    alt: "Menu icon"
                                })
                            }), (0, u.jsx)("div", {
                                className: Q,
                                style: {
                                    width: 254,
                                    marginBottom: "6px",
                                    color: m ? (0, U.Tj)(m, J.lq) : "#FFFFFF"
                                },
                                children: (0, u.jsx)(G.vc, {
                                    leaf: {
                                        text: s,
                                        styled: !0,
                                        fontSize: 15,
                                        fontFamily: d,
                                        fontWeight: 600,
                                        color: m || "#FFFFFF",
                                        gradient: !!h
                                    }
                                })
                            }), (0, u.jsx)("div", {
                                className: V,
                                style: {
                                    color: v ? (0, U.Tj)(v, J.lq) : "#BFBFBF"
                                },
                                children: (0, u.jsx)(G.vc, {
                                    leaf: {
                                        text: c || "",
                                        styled: !0,
                                        fontSize: 12,
                                        fontFamily: d,
                                        fontWeight: 500,
                                        color: v || "#BFBFBF",
                                        gradient: !!f
                                    }
                                })
                            })]
                        }), t]
                    });
                    return p ? (0, u.jsx)(Y.r, {
                        href: p,
                        internal_link: g,
                        open_in_new_tab: x,
                        children: w
                    }) : w
                })),
                X = e => 0 === e.children.length || 1 === e.children.length && "text" in e.children[0] && "" === e.children[0].text;
            const ee = (0, c.forwardRef)((({
                element: e,
                children: t,
                attributes: n,
                className: i
            }, r) => X(e) ? null : (0, u.jsx)("div", {
                ref: r,
                className: a()(i, "k5xziq0"),
                ...n,
                children: t
            })));
            ee.displayName = "NavbarDropdownMenuColumnElement";
            var te = n(66379),
                ne = n(20189),
                ie = n(40771),
                re = n(28519),
                ae = n(52899),
                le = "fti94b4",
                oe = "fti94b2";
            const se = e => e.children.filter((e => "navbar_dropdown_menu_column" === e.type)).length || 1,
                ce = e => {
                    for (const t of e.children)
                        if (!X(t))
                            for (const e of t.children)
                                if ("type" in e && "navbar_dropdown_menu_item" === e.type && e.itemType && "featured" !== e.itemType) return e.itemType;
                    return "short"
                };

            function de({
                children: e,
                element: t,
                attributes: n,
                className: i,
                forwardedRef: r
            }) {
                var l, o;
                const {
                    navbarItemRef: s
                } = (0, c.useContext)(ae.N), d = (0, c.useRef)(null), m = (0, c.useMemo)((() => se(t)), [t]), {
                    x: h,
                    refs: v,
                    reference: f,
                    floating: p,
                    update: g,
                    middlewareData: x,
                    strategy: b
                } = (0, te.YF)({
                    placement: "bottom",
                    middleware: [(0, ne.uY)({
                        padding: 16,
                        boundary: typeof window < "u" && document.querySelector(".editor") || void 0
                    }), (0, te.x7)({
                        element: d
                    })]
                }), w = (0, re.Z)(r, p);
                return (0, c.useEffect)((() => {
                    f(s.current)
                }), [s.current]), (0, c.useEffect)((() => {
                    if (v.reference.current && v.floating.current) return (0, ie.Me)(v.reference.current, v.floating.current, g)
                }), [v.reference, v.floating, g]), (0, u.jsxs)("div", {
                    ref: w,
                    className: a()(i, oe, "fti94b0"),
                    style: h ? {
                        "--position": b,
                        "--left": `${h}px`
                    } : void 0,
                    ...n,
                    children: [(0, u.jsx)("div", {
                        ref: d,
                        className: "fti94b3",
                        style: null != (l = x.arrow) && l.x ? {
                            left: null == (o = x.arrow) ? void 0 : o.x
                        } : {
                            left: "50%",
                            transform: "translateX(-50%)"
                        }
                    }), (0, u.jsx)("div", {
                        className: le,
                        style: {
                            "--columns": m
                        },
                        "data-navbar-dropdown-item-type": ce(t),
                        children: e
                    })]
                })
            }

            function ue({
                children: e,
                element: t,
                className: n,
                forwardedRef: i,
                attributes: r
            }) {
                const l = (0, c.useMemo)((() => se(t)), [t]);
                return (0, u.jsx)("div", {
                    ref: i,
                    className: a()(n, oe, "fti94b1"),
                    style: {
                        "--left": "0px"
                    },
                    ...r,
                    children: (0, u.jsx)("div", {
                        className: le,
                        style: {
                            "--columns": l
                        },
                        "data-navbar-dropdown-item-type": ce(t),
                        children: e
                    })
                })
            }
            const me = (0, c.forwardRef)(((e, t) => "card" === e.element.style ? (0, u.jsx)(de, {
                forwardedRef: t,
                ...e
            }) : (0, u.jsx)(ue, {
                forwardedRef: t,
                ...e
            })));
            me.displayName = "NavbarDropdownMenuElement";

            function he(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: r
                } = e, {
                    width: l,
                    width_max: o,
                    mobile_hide: s,
                    desktop_hide: c,
                    customAttributes: d
                } = t;
                return (0, u.jsx)("div", { ...d,
                    className: a()(r, {
                        "mobile:hidden": s,
                        "desktop:hidden": c
                    }, "x1sja70", null == d ? void 0 : d.className),
                    style: (0, S.oB)(l, o),
                    ...i,
                    children: n
                })
            }

            function ve(e) {
                var t;
                const {
                    children: n,
                    attributes: i,
                    className: r,
                    element: l
                } = e;
                return (0, u.jsx)("div", { ...l.customAttributes,
                    className: a()(r, "_1iqelwt0", null == (t = l.customAttributes) ? void 0 : t.className),
                    ...i,
                    children: n
                })
            }
            var fe = n(40093),
                pe = n(98635),
                ge = n(76559),
                xe = n(76635);

            function be({
                search: e,
                searchQuery: t,
                setSearchQuery: n
            }) {
                const [i, r] = (0, c.useState)(""), a = (0, c.useRef)(null), l = (0, c.useCallback)((0, xe.debounce)((e => {
                    n(e)
                }), 500), []);
                return (0, u.jsxs)("div", {
                    className: "_1wmk2028",
                    children: [(0, u.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        height: "20",
                        width: "20",
                        "aria-hidden": "true",
                        focusable: "false",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "_1wmk2024",
                        children: (0, u.jsx)("path", {
                            d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                        })
                    }), (0, u.jsx)("input", {
                        ref: a,
                        type: "text",
                        value: i,
                        placeholder: "Search...",
                        onChange: e => {
                            r(e.target.value), l(e.target.value)
                        },
                        onKeyDown: t => {
                            "Enter" === t.key && e(!0)
                        }
                    }), t && (0, u.jsx)("svg", {
                        viewBox: "0 0 16 16",
                        height: "17",
                        width: "17",
                        "aria-hidden": "true",
                        focusable: "false",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "_1wmk2023",
                        onClick: () => {
                            r(""), n(""), a.current && a.current.focus()
                        },
                        children: (0, u.jsx)("path", {
                            d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                        })
                    })]
                })
            }

            function we(e) {
                var t, n, i, r, l, o;
                const {
                    element: s,
                    children: d,
                    className: m,
                    attributes: h
                } = e, {
                    width: v,
                    width_max: f,
                    collection_template: p,
                    mobile_hide: g,
                    desktop_hide: x,
                    customAttributes: b
                } = s, {
                    collectionData: w,
                    fetchMore: j,
                    loading: y,
                    visitorFilterList: _,
                    setSelectedVisitorFilter: N,
                    selectedVisitorFilter: k,
                    searchQuery: C,
                    setSearchQuery: I
                } = (0, c.useContext)(fe.W), F = null == (t = null == p ? void 0 : p.settings) ? void 0 : t.numCol, B = null == (n = null == w ? void 0 : w.metadata) ? void 0 : n.show_search_bar, T = null == (i = null == w ? void 0 : w.metadata) ? void 0 : i.visitor_filter_column, q = T ? null == (r = null == w ? void 0 : w.metadata) ? void 0 : r.visitor_filter_style : void 0, z = T ? null == (l = null == w ? void 0 : w.metadata) ? void 0 : l.visitor_filter_color : void 0;
                return (0, u.jsxs)("div", { ...b,
                    className: a()(m, {
                        "mobile:hidden": g,
                        "desktop:hidden": x,
                        _1wmk2021: q === pe.P.LEFT_COLUMN
                    }, "_1wmk2020", null == b ? void 0 : b.className),
                    style: (0, S.oB)(v, f),
                    ...h,
                    children: [T && _.length > 0 && (0, u.jsx)("div", {
                        style: {
                            width: "100%",
                            marginBottom: 16
                        },
                        children: (0, u.jsx)(ge.L, {
                            filters: _,
                            filterColor: z,
                            filterStyle: q,
                            selectedFilter: k,
                            setSelectedFilter: N
                        })
                    }), (0, u.jsxs)("div", {
                        children: [B && (0, u.jsx)(be, {
                            search: j,
                            searchQuery: C,
                            setSearchQuery: I
                        }), 0 === (null == (o = null == w ? void 0 : w.data) ? void 0 : o.length) && (0, u.jsxs)("div", {
                            className: "_1wmk2025",
                            children: ["No results found", B && ", try adjusting your search keyword", "."]
                        }), (0, u.jsx)("div", {
                            className: "_1wmk2027",
                            style: {
                                "--grid-repeat": F || "auto-fit"
                            },
                            children: d
                        }), y && (0, u.jsx)("div", {
                            className: "is-flex is-justify-content-center",
                            children: (0, u.jsx)("span", {
                                className: "loader is-loading"
                            })
                        }), (null == w ? void 0 : w.hasMore) && (0, u.jsxs)("div", {
                            className: "_1wmk2026",
                            role: "none",
                            onClick: () => j(),
                            children: ["Show more", (0, u.jsx)("svg", {
                                viewBox: "0 0 16 16",
                                height: "18",
                                width: "18",
                                "aria-hidden": "true",
                                focusable: "false",
                                fill: "currentColor",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "_1wmk2022",
                                children: (0, u.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                })
                            })]
                        })]
                    })]
                })
            }
            var je = n(70595);

            function ye(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: r
                } = e, {
                    width: l,
                    width_max: o,
                    align: s,
                    mobile_hide: c,
                    desktop_hide: d,
                    customAttributes: m
                } = t;
                return (0, u.jsx)("div", { ...m,
                    className: a()(r, {
                        "mobile:hidden": c,
                        "desktop:hidden": d
                    }, "_56g1z10", null == m ? void 0 : m.className),
                    style: {
                        "--width": (0, S.oB)(l, o).width,
                        "--max-width": (0, S.oB)(l, o).maxWidth
                    },
                    ...i,
                    children: (0, u.jsx)("blockquote", {
                        className: "_56g1z11",
                        style: { ...(0, je.o)(s)
                        },
                        children: n
                    })
                })
            }

            function _e({
                children: e,
                className: t
            }) {
                return (0, u.jsx)("span", {
                    className: a()(t, "_107wm5h0"),
                    children: e
                })
            }

            function Ne(e) {
                const {
                    element: t,
                    children: n,
                    className: i,
                    attributes: r
                } = e, {
                    width: l,
                    width_max: o,
                    mobile_hide: s,
                    desktop_hide: c,
                    customAttributes: d
                } = t;
                return (0, u.jsx)("div", { ...d,
                    className: a()(i, {
                        "mobile:hidden": s,
                        "desktop:hidden": c
                    }, "_2w3c4y0", null == d ? void 0 : d.className),
                    style: {
                        "--width": (0, S.oB)(l, o).width,
                        "--max-width": (0, S.oB)(l, o).maxWidth
                    },
                    ...r,
                    children: (0, u.jsx)("pre", {
                        className: "_2w3c4y2",
                        children: (0, u.jsx)("code", {
                            className: "_2w3c4y1",
                            children: n
                        })
                    })
                })
            }

            function ke(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: r
                } = e, {
                    checked: l,
                    width: o,
                    width_max: s,
                    mobile_hide: d,
                    desktop_hide: m,
                    customAttributes: h
                } = t, [v, f] = (0, c.useState)(l);
                return (0, u.jsxs)("div", { ...h,
                    className: a()(r, {
                        "mobile:hidden": d,
                        "desktop:hidden": m
                    }, "_154h9rv0", null == h ? void 0 : h.className),
                    style: {
                        "--width": (0, S.oB)(o, s).width,
                        "--max-width": (0, S.oB)(o, s).maxWidth
                    },
                    ...i,
                    children: [(0, u.jsx)("div", {
                        children: (0, u.jsx)("input", {
                            type: "checkbox",
                            checked: v,
                            onChange: e => f(e.target.checked)
                        })
                    }), (0, u.jsx)("span", {
                        style: v ? {
                            textDecoration: "line-through",
                            opacity: .666
                        } : void 0,
                        children: n
                    })]
                })
            }

            function Ce(e) {
                const {
                    element: t,
                    children: n,
                    attributes: r,
                    className: l
                } = e, {
                    mobile_hide: o,
                    desktop_hide: s,
                    customAttributes: d
                } = t, m = (0, c.useMemo)((() => {
                    var e, n;
                    return null == (n = null == (e = i.NB.texts(t).next().value) ? void 0 : e[0]) ? void 0 : n.color
                }), [t]);
                return (0, u.jsx)("li", { ...d,
                    className: a()(l, {
                        "mobile:hidden": o,
                        "desktop:hidden": s
                    }, "mt1x150", null == d ? void 0 : d.className),
                    style: {
                        "--marker-color": m ? (0, U.Tj)(m, J.lq) : void 0
                    },
                    ...r,
                    children: n
                })
            }
            var Ie = "uay4480";

            function Fe(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: r
                } = e, {
                    width: l,
                    width_max: o,
                    mobile_hide: s,
                    desktop_hide: c,
                    customAttributes: d
                } = t;
                return (0, u.jsx)("ul", { ...d,
                    className: a()(r, {
                        "mobile:hidden": s,
                        "desktop:hidden": c
                    }, Ie, null == d ? void 0 : d.className),
                    style: {
                        "--width": (0, S.oB)(l, o).width,
                        "--max-width": (0, S.oB)(l, o).maxWidth
                    },
                    ...i,
                    children: n
                })
            }

            function Be(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: r
                } = e, {
                    width: l,
                    width_max: o,
                    mobile_hide: s,
                    desktop_hide: c,
                    customAttributes: d
                } = t;
                return (0, u.jsx)("ol", { ...d,
                    className: a()(r, {
                        "mobile:hidden": s,
                        "desktop:hidden": c
                    }, Ie, null == d ? void 0 : d.className),
                    style: {
                        "--width": (0, S.oB)(l, o).width,
                        "--max-width": (0, S.oB)(l, o).maxWidth
                    },
                    ...i,
                    children: n
                })
            }
            var Te = n(79552);

            function qe({
                html: e,
                ...t
            }) {
                return (0, c.createElement)("div", { ...t,
                    key: e,
                    dangerouslySetInnerHTML: {
                        __html: e
                    },
                    suppressHydrationWarning: !0
                })
            }
            var ze = n(91956);

            function Ee(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: r,
                    containerClassName: l
                } = e, {
                    url: o,
                    html: s,
                    width: c,
                    height: d,
                    keep_aspect_ratio: m,
                    width_max: h,
                    mobile_hide: v,
                    desktop_hide: f,
                    customAttributes: p
                } = t;
                return (0, u.jsxs)("div", { ...p,
                    className: a()(r, {
                        "mobile:hidden": v,
                        "desktop:hidden": f
                    }, l, ze.N, null == p ? void 0 : p.className),
                    style: { ...(0, S.oB)(c, h),
                        ...m && c && d ? {
                            aspectRatio: `${c} / ${d}`
                        } : {
                            minHeight: (0, S.nu)(d).height
                        }
                    },
                    ...i,
                    children: [o ? (0, u.jsx)("iframe", {
                        title: "embed",
                        src: o,
                        loading: "lazy"
                    }) : s ? (0, u.jsx)(qe, {
                        contentEditable: !1,
                        html: s
                    }) : null, n]
                })
            }
            var Se = n(78075),
                $e = n(89009);
            const Ae = {
                regular: "bx",
                solid: "bxs",
                logo: "bxl"
            };

            function We({
                icon: e,
                className: t,
                onClick: n
            }) {
                if (!e) return (0, u.jsx)("div", {});
                switch (e.type) {
                    case "icon":
                        return (0, u.jsx)("div", {
                            contentEditable: !1,
                            className: t,
                            style: {
                                color: (0, U.Tj)(e.content.color, J.eR)
                            },
                            role: "none",
                            onClick: n,
                            children: (0, u.jsx)(B.J, {
                                type: Ae[e.content.type],
                                name: e.content.name
                            })
                        });
                    case "emoji":
                        return (0, u.jsx)("div", {
                            contentEditable: !1,
                            className: t,
                            role: "none",
                            onClick: n,
                            children: e.content
                        });
                    case "image":
                        return (0, u.jsx)("div", {
                            contentEditable: !1,
                            className: t,
                            role: "none",
                            onClick: n,
                            children: (0, u.jsx)("img", {
                                src: e.content,
                                alt: "button icon"
                            })
                        });
                    default:
                        return (0, u.jsx)("div", {})
                }
            }

            function Re(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: r
                } = e, {
                    mobile_hide: l,
                    desktop_hide: o,
                    width: s,
                    width_max: c,
                    align: d,
                    animation: m,
                    customAttributes: h
                } = t, [v, f] = (0, $e.b)(m);
                return (0, u.jsx)("div", {
                    ref: v,
                    ...h,
                    className: a()(r, {
                        "mobile:hidden": l,
                        "desktop:hidden": o
                    }, f, "_1paom1l0", null == h ? void 0 : h.className),
                    style: {
                        "--width": (0, S.oB)(s, c).width,
                        "--max-width": (0, S.oB)(s, c).maxWidth,
                        "--horizontal-alignment": d && (0, Se.L)(d)
                    },
                    ...i,
                    children: n
                })
            }

            function Le(e) {
                const {
                    element: t,
                    children: n,
                    onClickIcon: i
                } = e, {
                    buttonType: r,
                    background: a,
                    color: l,
                    icon: o
                } = t, s = (0, U.Tj)(a, J.My);
                return (0, u.jsxs)("button", {
                    className: "_1paom1l1",
                    style: {
                        background: (0, U.Tj)(a, J.z7),
                        color: (0, U.Tj)(l, J.lq),
                        boxShadow: !!s && `0 10px 20px -10px ${s}`,
                        pointerEvents: !t.url && "submit" !== r && "none"
                    },
                    type: r || "button",
                    children: [(0, u.jsx)(We, {
                        icon: o,
                        className: "_1paom1l2",
                        onClick: i
                    }), n]
                })
            }

            function De(e) {
                const {
                    element: t,
                    children: n
                } = e, {
                    url: i,
                    open_in_new_tab: r,
                    internal_link: a
                } = t;
                return i ? (0, u.jsx)(Re, { ...e,
                    children: (0, u.jsx)(Y.r, {
                        href: i,
                        internal_link: a,
                        open_in_new_tab: r,
                        children: (0, u.jsx)(Le, { ...e,
                            children: n
                        })
                    })
                }) : (0, u.jsx)(Re, { ...e,
                    children: (0, u.jsx)(Le, { ...e,
                        children: n
                    })
                })
            }
            We.defaultProps = {
                className: void 0,
                onClick: void 0
            }, Re.defaultProps = {
                width_max: void 0,
                align: void 0,
                animation: void 0
            }, Le.defaultProps = {
                background: void 0,
                color: void 0,
                shadowColor: void 0
            };

            function Pe(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: r
                } = e, {
                    url: l,
                    internal_link: o,
                    open_in_new_tab: s,
                    customAttributes: c
                } = t;
                return (0, u.jsx)(Y.r, { ...c,
                    href: l,
                    internal_link: o,
                    open_in_new_tab: s,
                    className: a()(r, "yk4y7v0", null == c ? void 0 : c.className),
                    ...i,
                    children: n
                })
            }
            var Me = n(38929),
                Oe = n(40238),
                Ze = n(95956),
                Ue = n(69502),
                Je = n(19335),
                Ve = n(9707),
                He = n(28125);
            const Qe = s()((async () => (await Promise.all([n.e(9905), n.e(7302)]).then(n.bind(n, 67302))).MediaEmbedFileElement));

            function Ge({
                node: e,
                rootClassName: t,
                rootStyle: n,
                optimizedImageComponent: r,
                collectionProviderComponent: o,
                isImageOptimizable: s,
                handleFormSubmission: v,
                children: f,
                key: p
            }) {
                if (i.xv.isText(e)) return (0, u.jsx)(G.vc, {
                    leaf: e
                }, p);
                const g = (0, l.useRouter)(),
                    x = e.type;
                if (("a" === x || "button" === x || "container" === x) && e.internal_link && g.pathname.includes("__preview__")) {
                    const {
                        slugOrDomain: t,
                        token: n,
                        theme: i
                    } = g.query, r = `${("SLUG"===d.L0?`/${t}`:"")+"/__preview__"}?path=${e.url}&token=${n}&theme=${i}`;
                    e.url = r
                }
                switch (e.type) {
                    case "p":
                        return (0, u.jsx)(He.b, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "h1":
                        return (0, u.jsx)(Ve.II, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "h2":
                        return (0, u.jsx)(Ve.iT, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "h3":
                        return (0, u.jsx)(Ve.Jz, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "column":
                        {
                            const t = e.backgroundImage && r ? (0, u.jsx)(m, {
                                src: e.backgroundImage,
                                darken: e.backgroundDarken,
                                optimizable: !(null == s || !s(e.backgroundImage)),
                                optimizedImageComponent: r
                            }) : void 0;
                            return (0, u.jsx)(Je.c, {
                                element: e,
                                className: `slate-${e.type}`,
                                backgroundImageElement: t,
                                children: f
                            }, p)
                        }
                    case "column_item":
                        return (0, u.jsx)(Ue.H, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "spacer":
                        return (0, u.jsx)(Ze.s, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: null
                        }, p);
                    case "divider":
                        return (0, u.jsx)(Oe.J, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: null
                        }, p);
                    case "container":
                        {
                            const t = e.backgroundImage && r ? (0, u.jsx)(m, {
                                src: e.backgroundImage,
                                darken: e.backgroundDarken,
                                optimizable: !(null == s || !s(e.backgroundImage)),
                                optimizedImageComponent: r
                            }) : void 0;
                            return (0, u.jsx)(Me.i, {
                                element: e,
                                className: `slate-${e.type}`,
                                backgroundImageElement: t,
                                children: f
                            }, p)
                        }
                    case "a":
                        return (0, u.jsx)(Pe, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "button":
                        return (0, u.jsx)(De, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "media_embed":
                        return e.url || e.html ? (0, u.jsx)(Ee, {
                            element: e,
                            className: `slate-${e.type}`,
                            containerClassName: e.containerClassName,
                            children: null
                        }, p) : (0, u.jsx)(Qe, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: null
                        }, p);
                    case "img":
                        {
                            const t = !(null == s || !s(e.url));
                            return (0, u.jsx)(Te.K, {
                                element: e,
                                className: `slate-${e.type}`,
                                optimizable: t,
                                optimizedImageComponent: r,
                                children: null
                            }, p)
                        }
                    case "ul":
                        return (0, u.jsx)(Fe, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "ol":
                        return (0, u.jsx)(Be, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "li":
                        return (0, u.jsx)(Ce, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "action_item":
                        return (0, u.jsx)(ke, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "code_block":
                        return (0, u.jsx)(Ne, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "code_line":
                        return (0, u.jsx)(_e, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "blockquote":
                        return (0, u.jsx)(ye, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "collection":
                        return (0, u.jsx)(o || (e => e.children), {
                            collectionID: e.collection_data_id,
                            children: (0, u.jsx)(we, {
                                element: e,
                                className: `slate-${e.type}`,
                                children: f
                            })
                        }, p);
                    case "collection_item":
                        return (0, u.jsx)(ve, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "rich_text_content":
                        return (0, u.jsx)(he, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "navbar_dropdown_menu":
                        return (0, u.jsx)(me, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "navbar_dropdown_menu_column":
                        return (0, u.jsx)(ee, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "navbar_dropdown_menu_item":
                        return (0, u.jsx)(K, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "accordion":
                        return (0, u.jsx)(Z, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "accordion_item":
                        {
                            const t = e.backgroundImage && r ? (0, u.jsx)(m, {
                                src: e.backgroundImage,
                                darken: e.backgroundDarken,
                                optimizable: !(null == s || !s(e.backgroundImage)),
                                optimizedImageComponent: r
                            }) : void 0;
                            return (0, u.jsx)(O, {
                                element: e,
                                className: `slate-${e.type}`,
                                backgroundImageElement: t,
                                children: f
                            }, p)
                        }
                    case "accordion_item_header":
                        return (0, u.jsx)(M, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "accordion_item_content":
                        return (0, u.jsx)(D, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "form":
                        {
                            const t = e.backgroundImage && r ? (0, u.jsx)(m, {
                                src: e.backgroundImage,
                                darken: e.backgroundDarken,
                                optimizable: !(null == s || !s(e.backgroundImage)),
                                optimizedImageComponent: r
                            }) : e.backgroundImage;
                            return (0, u.jsx)(R, {
                                element: e,
                                backgroundImage: t,
                                handleFormSubmission: v || (() => new Promise((e => {
                                    e(void 0)
                                }))),
                                className: `slate-${e.type}`,
                                children: f
                            }, p)
                        }
                    case "form_input":
                        return (0, u.jsx)(z, {
                            element: e,
                            className: `slate-${e.type}`,
                            children: f
                        }, p);
                    case "root":
                        {
                            const i = e.backgroundImage && r ? (0, u.jsx)(m, {
                                src: e.backgroundImage,
                                darken: e.backgroundDarken,
                                optimizedImageComponent: r,
                                optimizable: !(null == s || !s(e.backgroundImage))
                            }) : void 0;
                            return (0, u.jsx)(h.b, {
                                element: e,
                                className: a()(t, `slate-${e.type}`),
                                style: n,
                                backgroundImageElement: i,
                                children: f
                            })
                        }
                    default:
                        return (0, u.jsx)(c.Fragment, {
                            children: f
                        }, p)
                }
            }
            const Ye = ({
                node: e,
                rootClassName: t,
                rootStyle: n,
                optimizedImageComponent: r,
                collectionProviderComponent: a,
                isImageOptimizable: l,
                handleFormSubmission: o,
                createKey: s = (e => e[1].join(","))
            }, c = [0]) => {
                const d = s([e, c]);
                if (i.xv.isText(e)) return (0, u.jsx)(G.vc, {
                    leaf: e
                }, d);
                const m = e.children.map(((e, t) => Ye({
                    node: e,
                    optimizedImageComponent: r,
                    collectionProviderComponent: a,
                    createKey: s,
                    isImageOptimizable: l,
                    handleFormSubmission: o
                }, [...c, t])));
                return Ge({
                    node: e,
                    rootClassName: t,
                    rootStyle: n,
                    optimizedImageComponent: r,
                    collectionProviderComponent: a,
                    isImageOptimizable: l,
                    handleFormSubmission: o,
                    key: d,
                    children: m
                })
            };

            function Ke(e) {
                const {
                    rootClassName: t,
                    rootStyle: n,
                    node: r
                } = e;
                return i.xv.isText(r) || "root" !== r.type ? (0, u.jsx)(h.b, {
                    element: {
                        id: "",
                        type: "root",
                        children: []
                    },
                    className: t,
                    style: n,
                    children: Ye(e)
                }) : (0, u.jsx)(u.Fragment, {
                    children: Ye(e)
                })
            }
        },
        95956: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return o
                }
            });
            var i = n(72779),
                r = n.n(i),
                a = n(81024),
                l = n(52322);

            function o(e) {
                const {
                    element: t,
                    children: n,
                    attributes: i,
                    className: o
                } = e, {
                    height: s,
                    width: c,
                    mobile_hide: d,
                    desktop_hide: u,
                    customAttributes: m
                } = t;
                return (0, l.jsx)("div", { ...m,
                    className: r()(o, {
                        "mobile:hidden": d,
                        "desktop:hidden": u
                    }, "r2ud8k0", null == m ? void 0 : m.className),
                    style: {
                        height: `${s}px`,
                        ...(0, a.oB)(c)
                    },
                    ...i,
                    children: n
                })
            }
        },
        6998: function(e, t, n) {
            "use strict";
            n.d(t, {
                vc: function() {
                    return p
                }
            });
            var i = n(10869),
                r = n(50834),
                a = n(5602),
                l = n(58673),
                o = n(72779),
                s = n.n(o),
                c = n(46007),
                d = n(52322),
                u = n(2784);

            function m({
                words: e,
                currIdx: t,
                style: n
            }) {
                const i = (null == e ? void 0 : e.length) || 1,
                    r = (t - 1) % i,
                    a = r >= 0 ? r : i + r,
                    l = (0, u.useRef)(null),
                    [o, c] = (0, u.useState)(),
                    [m, h] = (0, u.useState)(),
                    [v, f] = (0, u.useState)(!1);
                return (0, u.useEffect)((() => {
                    const e = new ResizeObserver((e => {
                        var t, n;
                        let i = 0;
                        for (const r of e)(null == (t = r.contentRect) ? void 0 : t.width) > i && (i = null == (n = r.contentRect) ? void 0 : n.width);
                        h(i)
                    }));
                    return Array.from(l.current.children).forEach((t => {
                        e.observe(t)
                    })), c(1.1 * parseFloat(getComputedStyle(l.current).lineHeight)), () => e.disconnect()
                }), []), (0, u.useEffect)((() => {
                    const t = l.current.closest('[class^="slate-"]');
                    t && t.textContent === e.join("") && f(!0)
                }), []), (0, d.jsx)("span", {
                    ref: l,
                    className: "_161hv3m0",
                    style: {
                        minHeight: o || "auto",
                        minWidth: m
                    },
                    children: e.map(((e, i) => (0, d.jsx)("span", {
                        className: s()("_161hv3m3", {
                            _161hv3m1: t === i,
                            _161hv3m2: a === i
                        }),
                        style: { ...n,
                            minWidth: v ? "100%" : void 0
                        },
                        children: e
                    }, `text-animated-${e}`)))
                })
            }

            function h({
                animation: e,
                style: t
            }) {
                if (!e) return null;
                const {
                    type: n,
                    words: i
                } = e, [r, a] = (0, u.useState)(0);
                return function(e, t) {
                    const n = (0, u.useRef)();
                    (0, u.useEffect)((() => {
                        n.current = e
                    }), [e]), (0, u.useEffect)((() => {
                        if (null !== t) {
                            const e = setInterval((function() {
                                let e = n.current;
                                e || (e = () => {}), e()
                            }), t);
                            return () => clearInterval(e)
                        }
                        return () => {}
                    }), [t])
                }((() => {
                    a((r + 1) % ((null == i ? void 0 : i.length) || 0))
                }), 2500), 0 === (null == i ? void 0 : i.length) ? null : "scroll_words" === n && i.length > 1 ? (0, d.jsx)(m, {
                    words: i,
                    currIdx: r,
                    style: t
                }) : (0, d.jsx)(d.Fragment, {
                    children: null == i ? void 0 : i[0]
                })
            }
            const v = {
                underline: function(e) {
                    const {
                        leaf: t,
                        attributes: n,
                        children: a
                    } = e, l = (0, i.Tj)(t.color, r.lq);
                    return (0, d.jsx)("u", {
                        style: {
                            textDecoration: "underline",
                            textDecorationColor: l
                        },
                        ...n,
                        children: a
                    })
                },
                strikethrough: function(e) {
                    const {
                        attributes: t,
                        children: n
                    } = e;
                    return (0, d.jsx)("s", { ...t,
                        children: n
                    })
                },
                italic: function(e) {
                    const {
                        attributes: t,
                        children: n
                    } = e;
                    return (0, d.jsx)("em", { ...t,
                        children: n
                    })
                },
                code: function(e) {
                    const {
                        attributes: t,
                        children: n
                    } = e;
                    return (0, d.jsx)("code", { ...t,
                        children: n
                    })
                },
                bold: function(e) {
                    const {
                        attributes: t,
                        children: n
                    } = e;
                    return (0, d.jsx)("strong", { ...t,
                        children: n
                    })
                },
                styled: function(e) {
                    const {
                        leaf: t,
                        attributes: n,
                        children: o
                    } = e, s = t.lineHeight || void 0;
                    let u = {};
                    const m = t.fontSize || void 0;
                    let h = m,
                        v = s;
                    h && (h = h > c.jq ? c.R6 * h : h, h = h > c.nx ? c.w * h : h, v = t.fontSize > c.jq ? `${h+10}px` : v, v = t.fontSize > c.nx ? `${h+5}px` : v), u = { ...(0, a.O)(t.background),
                        color: (0, i.Tj)(null == t ? void 0 : t.color, r.lq),
                        fontFamily: t.fontFamily ? l.R[t.fontFamily] : void 0,
                        fontWeight: t.fontWeight || void 0,
                        letterSpacing: t.letterSpacing || void 0,
                        "--font-size": m ? `${m}px` : void 0,
                        "--mobile-font-size": h ? `${h}px` : void 0,
                        "--line-height": s,
                        "--mobile-line-height": v
                    };
                    const f = t.gradient && t.color ? {
                        backgroundImage: (0, i.Tj)(null == t ? void 0 : t.color, r.eR),
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitBoxDecorationBreak: "clone",
                        backgroundRepeat: "no-repeat"
                    } : void 0;
                    return (0, d.jsx)("span", {
                        style: u,
                        ...n,
                        children: t.gradient && t.color ? (0, d.jsx)("span", {
                            style: f,
                            children: o
                        }) : o
                    })
                }
            };

            function f(e) {
                const {
                    className: t,
                    attributes: n,
                    children: i
                } = e;
                return (0, d.jsx)("span", {
                    className: s()(t, "_1untytp0"),
                    ...n,
                    children: i
                })
            }

            function p(e) {
                const {
                    leaf: t
                } = e, n = t.animation ? (0, d.jsx)(h, {
                    animation: t.animation ? { ...t.animation,
                        words: [t.text, ...t.animation.words]
                    } : void 0,
                    style: t.gradient && t.color ? {
                        backgroundImage: r.eR[t.color],
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitBoxDecorationBreak: "clone",
                        backgroundRepeat: "no-repeat"
                    } : void 0
                }) : t.text, i = e => {
                    if (0 === e.length) return (0, d.jsx)(d.Fragment, {
                        children: n
                    });
                    const r = v[e[0]];
                    return (0, d.jsx)(r, {
                        leaf: t,
                        children: i(e.slice(1))
                    })
                }, a = Object.keys(v).filter((e => !0 === t[e]));
                return (0, d.jsx)(f, { ...e,
                    children: i(a)
                })
            }
        },
        78075: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return i
                }
            });
            const i = e => {
                switch (e) {
                    case "align_center":
                        return "center";
                    case "align_left":
                        return "flex-start";
                    case "align_right":
                        return "flex-end";
                    default:
                        return
                }
            }
        },
        81024: function(e, t, n) {
            "use strict";
            n.d(t, {
                UO: function() {
                    return l
                },
                nu: function() {
                    return a
                },
                oB: function() {
                    return r
                }
            });
            var i = n(46007);
            const r = (e, t, n) => {
                    let r = "100%" === t ? t : `${e||i.d}px`;
                    return "100%" === t && n && (r = `${i.d}px`), {
                        width: r,
                        maxWidth: "100%" === t ? t : `min(100%, ${Math.max(i.d,e||0)}px)`
                    }
                },
                a = e => ({
                    height: e ? `${e}px` : "auto"
                }),
                l = (e, t, n) => {
                    let i;
                    return e && t ? i = `${e} / ${t}` : n && (i = `${n} / 1`), {
                        aspectRatio: i
                    }
                }
        },
        70595: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return i
                }
            });
            const i = e => e ? {
                textAlign: {
                    align_left: "left",
                    align_center: "center",
                    align_right: "right",
                    column_dynamic: void 0
                }[e]
            } : {}
        },
        89009: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return l
                }
            });
            var i = n(72779),
                r = n.n(i),
                a = n(22030);

            function l(e) {
                const [t, n] = (0, a.useIntersection)({});
                if (!e) return [t, ""];
                const i = function(e) {
                    switch (e.type) {
                        case "fade_in":
                            return "fade-in";
                        case "slide_in":
                            switch (e.direction) {
                                case "down":
                                    return "slide-in-down";
                                case "up":
                                default:
                                    return "slide-in-up";
                                case "left":
                                    return "slide-in-left";
                                case "right":
                                    return "slide-in-right"
                            }
                        case "scale_in":
                            switch (e.scaleTo) {
                                case "grow":
                                default:
                                    return "scale-in-grow";
                                case "shrink":
                                    return "scale-in-shrink"
                            }
                        default:
                            return
                    }
                }(e);
                return [t, r()(i, {
                    "animated-block-initial": !n,
                    "animated-block-visible": n
                })]
            }
        },
        50834: function(e, t, n) {
            "use strict";
            n.d(t, {
                My: function() {
                    return l
                },
                XI: function() {
                    return r
                },
                eR: function() {
                    return s
                },
                lq: function() {
                    return c
                },
                z7: function() {
                    return a
                }
            });
            const i = {
                    accent: "#5E5DF0",
                    text_on_accent: "#ffffff"
                },
                r = {
                    unicorn: "linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)",
                    nebula: "linear-gradient(135deg, #6699FF 0%, #FF3366 100%)",
                    water: "linear-gradient(135deg, #2F80ED 0%, #B2FFDA 100%)",
                    candy: "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
                    melon: "linear-gradient(135deg, #D6FF7F 0%, #00B3CC 100%)"
                },
                a = { ...i,
                    default: "var(--background)",
                    gray: "var(--background-highlight)",
                    orange: "#FA9E34",
                    yellow: "#F7CC5C",
                    green: "#23CFA4",
                    blue: "#06C1FF",
                    indigo: "#6968F7",
                    purple: "#8A24FF",
                    pink: "#F54B94",
                    red: "#F32E60",
                    black: "#000000",
                    white: "#ffffff",
                    ...r
                },
                l = {
                    accent: "var(--shadow-color-accent)",
                    text_on_accent: "#ffffff",
                    default: "var(--shadow-modal-color)",
                    gray: "var(--background-highlight)",
                    orange: "var(--shadow-color-orange)",
                    yellow: "var(--shadow-color-yellow)",
                    green: "var(--shadow-color-green)",
                    blue: "var(--shadow-color-blue)",
                    indigo: "var(--shadow-color-indigo)",
                    purple: "var(--shadow-color-purple)",
                    pink: "var(--shadow-color-pink)",
                    red: "var(--shadow-color-red)",
                    black: "var(--shadow-color-black)",
                    white: "var(--shadow-color-white)",
                    unicorn: "var(--shadow-color-unicorn)",
                    nebula: "var(--shadow-color-nebula)",
                    water: "var(--shadow-color-water)",
                    candy: "var(--shadow-color-candy)",
                    melon: "var(--shadow-color-melon)"
                },
                o = {
                    default: "var(--text-sharp)",
                    gray: "var(--text-light)",
                    orange: "#FA9E34",
                    yellow: "#F7CC5C",
                    green: "#23CFA4",
                    blue: "#06C1FF",
                    indigo: "#6968F7",
                    purple: "#8A24FF",
                    pink: "#F54B94",
                    red: "#F32E60",
                    black: "#000000",
                    white: "#ffffff"
                },
                s = { ...i,
                    ...o,
                    ...r
                },
                c = { ...i,
                    ...o,
                    unicorn: "#F18099",
                    nebula: "#B664B0",
                    water: "#67B7E5",
                    candy: "#9D8EEE",
                    melon: "#5CD4AC"
                }
        },
        58673: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return i
                }
            });
            const i = {
                default: "Inter",
                inter: "Inter",
                libre_caslon_text: "Libre Caslon Text",
                space_mono: "Space Mono",
                quicksand: "Quicksand"
            }
        },
        5602: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return a
                },
                f: function() {
                    return l
                }
            });
            var i = n(50834),
                r = n(10869);
            const a = e => e ? {
                    background: (0, r.Tj)(e, i.z7)
                } : {},
                l = (e, t) => e ? {
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    ...t ? {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        backgroundBlendMode: "darken"
                    } : {}
                } : {}
        },
        10869: function(e, t, n) {
            "use strict";
            n.d(t, {
                Tj: function() {
                    return r
                },
                W3: function() {
                    return a
                }
            });
            var i = n(50834);
            const r = (e, t, n) => e ? (null == t ? void 0 : t[e]) || ((e => {
                    if (typeof window < "u") {
                        const t = (new Option).style;
                        return null != e && e.includes("-gradient") ? (t.backgroundImage = e, "" !== t.backgroundImage) : (t.color = e, "" !== t.color)
                    }
                    return (e => /^#(?:[0-9a-fA-F]{3,})$/g.test(e))(e) || (e => /rgba?\(\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01\.]\.?\d?)?\s*\)/.test(e))(e) || (null == e ? void 0 : e.includes("-gradient"))
                })(e) ? e : void 0) : n,
                a = e => Object.keys(i.XI).includes(e) || (null == e ? void 0 : e.includes("-gradient"))
        }
    }
]);