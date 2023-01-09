(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7903], {
        82018: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return Z
                }
            });
            var t = r(66383),
                o = r(52322),
                s = r(2784),
                a = r(96577),
                i = r.n(a),
                c = r(97729),
                d = r.n(c),
                u = r(72779),
                l = r.n(u),
                f = r(25237),
                p = r.n(f),
                v = r(77882),
                _ = r.n(v),
                w = r(98788),
                m = r(94776),
                h = r.n(m),
                x = r(39161),
                b = r(79826),
                k = "TD_JWT_LOCK_ACCESS_TOKEN",
                g = x.Us(new URL("".concat(b.bG || "https://api.typedream.com/v0", "/token/jwks")));

            function y(e) {
                null === window || void 0 === window || window.localStorage.removeItem("".concat(k, ":").concat(e.id))
            }

            function j(e, n) {
                x.t5(n), null === window || void 0 === window || window.localStorage.setItem("".concat(k, ":").concat(e.id), n)
            }

            function S(e) {
                return (null === window || void 0 === window ? void 0 : window.localStorage.getItem("".concat(k, ":").concat(e.id))) || ""
            }

            function I(e, n) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = (0, w.Z)(h().mark((function e(n, r) {
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, x._f(n, g, {
                                    subject: r.id
                                });
                            case 3:
                                e.next = 9;
                                break;
                            case 5:
                                return e.prev = 5, e.t0 = e.catch(0), y(r), e.abrupt("return", !1);
                            case 9:
                                return e.abrupt("return", !!n && "invalid" !== n);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 5]
                    ])
                })))).apply(this, arguments)
            }
            var C = r(17311),
                F = ["event Approval(address indexed _owner, address indexed _spender, uint256 _value)", "event Transfer(address indexed _from, address indexed _to, uint256 _value)", "function allowance(address _owner, address _spender) public view returns (uint256 remaining)", "function approve(address _spender, uint256 _value) public returns (bool success)", "function balanceOf(address _owner) public view returns (uint256 balance)", "function decimals() public view returns (uint8)", "function name() public view returns (string)", "function symbol() public view returns (string)", "function totalSupply() public view returns (uint256)", "function transfer(address _to, uint256 _value) public returns (bool success)", "function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)"],
                T = ["event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId)", "event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved)", "event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId)", "function approve(address _approved, uint256 _tokenId) external payable", "function balanceOf(address _owner) external view returns (uint256)", "function getApproved(uint256 _tokenId) external view returns (address)", "function isApprovedForAll(address _owner, address _operator) external view returns (bool)", "function name() view returns (string memory)", "function ownerOf(uint256 _tokenId) external view returns (address)", "function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable", "function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable", "function setApprovalForAll(address _operator, bool _approved) external", "function symbol() view returns (string memory)", "function tokenByIndex(uint256 _index) view returns (uint256)", "function tokenOfOwnerByIndex(address _owner, uint256 _index) view returns (uint256 tokenId)", "function tokenURI(uint256 _tokenId) view returns (string memory)", "function totalSupply() view returns (uint256)", "function transferFrom(address _from, address _to, uint256 _tokenId) external payable"];

            function G(e, n) {
                switch (e) {
                    case "80001":
                        return "https://mumbai.polygonscan.com/address/".concat(n);
                    case "137":
                        return "https://polygonscan.com/address/".concat(n);
                    case "3":
                        return "https://ropsten.etherscan.io/address".concat(n);
                    default:
                        return "https://etherscan.io/address/".concat(n)
                }
            }
            var N = function(e) {
                    var n = e.lock || {},
                        r = n.type,
                        t = n.metadata,
                        s = function(e) {
                            switch (e) {
                                case "erc721":
                                case "erc1155":
                                    return T;
                                case "erc20":
                                    return F;
                                default:
                                    return null
                            }
                        }(r),
                        a = "erc20" !== r && "erc721" !== r,
                        i = (0, C.do)({
                            addressOrName: null === t || void 0 === t ? void 0 : t.contractAddress,
                            contractInterface: s || []
                        }, a ? "" : "name"),
                        c = i.data,
                        d = i.isError,
                        u = i.isLoading;
                    return !c || u || d ? (0, o.jsx)("div", {
                        className: "mb-4",
                        children: (0, o.jsx)("span", {
                            children: "This page is locked. To unlock this page, please login."
                        })
                    }) : (0, o.jsx)("div", {
                        className: "with-sharp-text-color mb-4",
                        children: (0, o.jsxs)("span", {
                            children: ["Accessing this page requires holding", " ", null === t || void 0 === t ? void 0 : t.minimumAmount, " ", (0, o.jsx)("a", {
                                href: G(t.chainId, t.contractAddress) || "#",
                                target: "_blank",
                                rel: "noreferrer",
                                children: c
                            }), " ", "token", (null === t || void 0 === t ? void 0 : t.minimumAmount) > 1 ? "s" : ""]
                        })
                    })
                },
                O = p()((function() {
                    return Promise.all([r.e(47), r.e(3387), r.e(4257)]).then(r.bind(r, 34257))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [34257]
                        }
                    }
                }),
                E = p()((function() {
                    return Promise.all([r.e(47), r.e(4090)]).then(r.bind(r, 84090))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [84090]
                        }
                    }
                }),
                L = p()((function() {
                    return Promise.all([r.e(47), r.e(3387), r.e(8832)]).then(r.bind(r, 88832)).then((function(e) {
                        return e.PasswordGateDescription
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [88832]
                        }
                    }
                }),
                P = p()((function() {
                    return Promise.all([r.e(47), r.e(3387), r.e(8832)]).then(r.bind(r, 88832)).then((function(e) {
                        return e.PasswordGateInput
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [88832]
                        }
                    }
                });

            function Z(e) {
                var n, r = e.children,
                    a = e.locks,
                    c = e.space,
                    u = (0, t.Z)(function(e) {
                        var n = (0, t.Z)(s.useState(!1), 2),
                            r = n[0],
                            o = n[1],
                            a = s.useCallback((0, w.Z)(h().mark((function n() {
                                return h().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (e && 0 !== e.length) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            e.forEach(function() {
                                                var e = (0, w.Z)(h().mark((function e(n) {
                                                    var r, t;
                                                    return h().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return r = S(n), e.next = 3, I(r, n);
                                                            case 3:
                                                                t = e.sent, o(t);
                                                            case 6:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), [e]);
                        return s.useEffect((function() {
                            a()
                        }), [a]), [r, a]
                    }(a), 2),
                    f = u[0],
                    p = u[1];
                return !a || 0 === a.length || f ? (0, o.jsx)(o.Fragment, {
                    children: r
                }) : (0, o.jsxs)("div", {
                    className: _().fullscreen,
                    children: [(0, o.jsx)(d(), {
                        children: (0, o.jsx)("link", {
                            rel: "icon",
                            href: null !== (n = c.icon) && void 0 !== n ? n : "/favicon.ico"
                        })
                    }), (0, o.jsxs)("div", {
                        className: l()(_().fullScreenCentered, _().ScreenContent),
                        children: [(0, o.jsx)(i(), {
                            src: (null === c || void 0 === c ? void 0 : c.icon) || "/typedream-logo.svg",
                            width: 130,
                            height: 130,
                            unoptimized: !0
                        }), a.slice(0, 1).map((function(e) {
                            return "password" === e.type ? (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(L, {}), (0, o.jsx)(P, {
                                    lock: e,
                                    onSuccess: function(n) {
                                        j(e, n), p()
                                    }
                                })]
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(N, {
                                    lock: e
                                }, e.id), (0, o.jsx)(O, {
                                    lock: e,
                                    onSuccess: function(n) {
                                        j(e, n), p()
                                    },
                                    onFailure: console.error
                                }, e.id)]
                            })
                        }))]
                    }), (0, o.jsx)(E, {})]
                })
            }
        },
        77882: function(e) {
            e.exports = {
                fullscreen: "LockScreen_fullscreen__SvirG",
                fullScreenCentered: "LockScreen_fullScreenCentered__0jhuQ",
                ScreenContent: "LockScreen_ScreenContent__pMeg_"
            }
        },
        33196: function() {}
    }
]);