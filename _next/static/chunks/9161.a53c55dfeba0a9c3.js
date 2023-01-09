"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9161], {
        39161: function(e, t, r) {
            r.d(t, {
                Us: function() {
                    return Y
                },
                t5: function() {
                    return X
                },
                _f: function() {
                    return L
                }
            });
            var a = crypto;
            const n = e => e instanceof CryptoKey;
            const o = new TextEncoder,
                s = new TextDecoder;

            function i(...e) {
                const t = e.reduce(((e, {
                        length: t
                    }) => e + t), 0),
                    r = new Uint8Array(t);
                let a = 0;
                return e.forEach((e => {
                    r.set(e, a), a += e.length
                })), r
            }
            const c = e => {
                let t = e;
                t instanceof Uint8Array && (t = s.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                try {
                    return (e => {
                        const t = atob(e),
                            r = new Uint8Array(t.length);
                        for (let a = 0; a < t.length; a++) r[a] = t.charCodeAt(a);
                        return r
                    })(t)
                } catch (r) {
                    throw new TypeError("The input to be decoded is not correctly encoded.")
                }
            };
            class d extends Error {
                constructor(e) {
                    var t;
                    super(e), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, null === (t = Error.captureStackTrace) || void 0 === t || t.call(Error, this, this.constructor)
                }
                static get code() {
                    return "ERR_JOSE_GENERIC"
                }
            }
            class u extends d {
                constructor(e, t = "unspecified", r = "unspecified") {
                    super(e), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = t, this.reason = r
                }
                static get code() {
                    return "ERR_JWT_CLAIM_VALIDATION_FAILED"
                }
            }
            class h extends d {
                constructor(e, t = "unspecified", r = "unspecified") {
                    super(e), this.code = "ERR_JWT_EXPIRED", this.claim = t, this.reason = r
                }
                static get code() {
                    return "ERR_JWT_EXPIRED"
                }
            }
            class l extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
                }
                static get code() {
                    return "ERR_JOSE_ALG_NOT_ALLOWED"
                }
            }
            class p extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
                }
                static get code() {
                    return "ERR_JOSE_NOT_SUPPORTED"
                }
            }
            class f extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JWS_INVALID"
                }
                static get code() {
                    return "ERR_JWS_INVALID"
                }
            }
            class y extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JWT_INVALID"
                }
                static get code() {
                    return "ERR_JWT_INVALID"
                }
            }
            class w extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_INVALID"
                }
                static get code() {
                    return "ERR_JWKS_INVALID"
                }
            }
            class m extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_NO_MATCHING_KEY", this.message = "no applicable key found in the JSON Web Key Set"
                }
                static get code() {
                    return "ERR_JWKS_NO_MATCHING_KEY"
                }
            }
            class S extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS", this.message = "multiple matching keys found in the JSON Web Key Set"
                }
                static get code() {
                    return "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
                }
            }
            class g extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_TIMEOUT", this.message = "request timed out"
                }
                static get code() {
                    return "ERR_JWKS_TIMEOUT"
                }
            }
            class E extends d {
                constructor() {
                    super(...arguments), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED", this.message = "signature verification failed"
                }
                static get code() {
                    return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
                }
            }
            a.getRandomValues.bind(a);
            var v = e => n(e);
            const b = ["CryptoKey"];

            function A() {
                return "function" === typeof WebSocketPair
            }
            var _ = async e => {
                var t, r;
                const {
                    algorithm: n,
                    keyUsages: o
                } = function(e) {
                    let t, r;
                    switch (e.kty) {
                        case "oct":
                            switch (e.alg) {
                                case "HS256":
                                case "HS384":
                                case "HS512":
                                    t = {
                                        name: "HMAC",
                                        hash: `SHA-${e.alg.slice(-3)}`
                                    }, r = ["sign", "verify"];
                                    break;
                                case "A128CBC-HS256":
                                case "A192CBC-HS384":
                                case "A256CBC-HS512":
                                    throw new p(`${e.alg} keys cannot be imported as CryptoKey instances`);
                                case "A128GCM":
                                case "A192GCM":
                                case "A256GCM":
                                case "A128GCMKW":
                                case "A192GCMKW":
                                case "A256GCMKW":
                                    t = {
                                        name: "AES-GCM"
                                    }, r = ["encrypt", "decrypt"];
                                    break;
                                case "A128KW":
                                case "A192KW":
                                case "A256KW":
                                    t = {
                                        name: "AES-KW"
                                    }, r = ["wrapKey", "unwrapKey"];
                                    break;
                                case "PBES2-HS256+A128KW":
                                case "PBES2-HS384+A192KW":
                                case "PBES2-HS512+A256KW":
                                    t = {
                                        name: "PBKDF2"
                                    }, r = ["deriveBits"];
                                    break;
                                default:
                                    throw new p('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                            }
                            break;
                        case "RSA":
                            switch (e.alg) {
                                case "PS256":
                                case "PS384":
                                case "PS512":
                                    t = {
                                        name: "RSA-PSS",
                                        hash: `SHA-${e.alg.slice(-3)}`
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "RS256":
                                case "RS384":
                                case "RS512":
                                    t = {
                                        name: "RSASSA-PKCS1-v1_5",
                                        hash: `SHA-${e.alg.slice(-3)}`
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "RSA-OAEP":
                                case "RSA-OAEP-256":
                                case "RSA-OAEP-384":
                                case "RSA-OAEP-512":
                                    t = {
                                        name: "RSA-OAEP",
                                        hash: `SHA-${parseInt(e.alg.slice(-3),10)||1}`
                                    }, r = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                                    break;
                                default:
                                    throw new p('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                            }
                            break;
                        case "EC":
                            switch (e.alg) {
                                case "ES256":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-256"
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ES384":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-384"
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ES512":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-521"
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ECDH-ES":
                                case "ECDH-ES+A128KW":
                                case "ECDH-ES+A192KW":
                                case "ECDH-ES+A256KW":
                                    t = {
                                        name: "ECDH",
                                        namedCurve: e.crv
                                    }, r = e.d ? ["deriveBits"] : [];
                                    break;
                                default:
                                    throw new p('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                            }
                            break;
                        case A() && "OKP":
                            if ("EdDSA" !== e.alg) throw new p('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                            if ("Ed25519" !== e.crv) throw new p('Invalid or unsupported JWK "crv" (Subtype of Key Pair) Parameter value');
                            t = {
                                name: "NODE-ED25519",
                                namedCurve: "NODE-ED25519"
                            }, r = e.d ? ["sign"] : ["verify"];
                            break;
                        default:
                            throw new p('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
                    }
                    return {
                        algorithm: t,
                        keyUsages: r
                    }
                }(e), s = [n, null !== (t = e.ext) && void 0 !== t && t, null !== (r = e.key_ops) && void 0 !== r ? r : o];
                if ("PBKDF2" === n.name) return a.subtle.importKey("raw", c(e.k), ...s);
                const i = { ...e
                };
                return delete i.alg, a.subtle.importKey("jwk", i, ...s)
            };

            function k(e) {
                if ("object" !== typeof(t = e) || null === t || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                var t;
                if (null === Object.getPrototypeOf(e)) return !0;
                let r = e;
                for (; null !== Object.getPrototypeOf(r);) r = Object.getPrototypeOf(r);
                return Object.getPrototypeOf(e) === r
            }
            var R = (e, ...t) => {
                let r = "Key must be ";
                if (t.length > 2) {
                    const e = t.pop();
                    r += `one of type ${t.join(", ")}, or ${e}.`
                } else 2 === t.length ? r += `one of type ${t[0]} or ${t[1]}.` : r += `of type ${t[0]}.`;
                return null == e ? r += ` Received ${e}` : "function" === typeof e && e.name ? r += ` Received function ${e.name}` : "object" === typeof e && null != e && e.constructor && e.constructor.name && (r += ` Received an instance of ${e.constructor.name}`), r
            };
            var T = (e, t, r) => {
                e.startsWith("HS") || "dir" === e || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e) ? (e => {
                    if (!(e instanceof Uint8Array)) {
                        if (!v(e)) throw new TypeError(R(e, ...b, "Uint8Array"));
                        if ("secret" !== e.type) throw new TypeError(`${b.join(" or ")} instances for symmetric algorithms must be of type "secret"`)
                    }
                })(t) : ((e, t) => {
                    if (!v(e)) throw new TypeError(R(e, ...b));
                    if ("secret" === e.type) throw new TypeError(`${b.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
                    if ("sign" === t && "public" === e.type) throw new TypeError(`${b.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
                    if ("decrypt" === t && "public" === e.type) throw new TypeError(`${b.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
                    if (e.algorithm && "verify" === t && "private" === e.type) throw new TypeError(`${b.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
                    if (e.algorithm && "encrypt" === t && "private" === e.type) throw new TypeError(`${b.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`)
                })(t, r)
            };
            var P = function(e, t, r, a, n) {
                if (void 0 !== n.crit && void 0 === a.crit) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
                if (!a || void 0 === a.crit) return new Set;
                if (!Array.isArray(a.crit) || 0 === a.crit.length || a.crit.some((e => "string" !== typeof e || 0 === e.length))) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
                let o;
                o = void 0 !== r ? new Map([...Object.entries(r), ...t.entries()]) : t;
                for (const s of a.crit) {
                    if (!o.has(s)) throw new p(`Extension Header Parameter "${s}" is not recognized`);
                    if (void 0 === n[s]) throw new e(`Extension Header Parameter "${s}" is missing`);
                    if (o.get(s) && void 0 === a[s]) throw new e(`Extension Header Parameter "${s}" MUST be integrity protected`)
                }
                return new Set(a.crit)
            };
            Symbol();

            function W(e, t = "algorithm.name") {
                return new TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)
            }

            function C(e, t) {
                return e.name === t
            }

            function K(e) {
                return parseInt(e.name.slice(4), 10)
            }

            function J(e, t) {
                if (t.length && !t.some((t => e.usages.includes(t)))) {
                    let e = "CryptoKey does not support this operation, its usages must include ";
                    if (t.length > 2) {
                        const r = t.pop();
                        e += `one of ${t.join(", ")}, or ${r}.`
                    } else 2 === t.length ? e += `one of ${t[0]} or ${t[1]}.` : e += `${t[0]}.`;
                    throw new TypeError(e)
                }
            }

            function O(e, t, ...r) {
                switch (t) {
                    case "HS256":
                    case "HS384":
                    case "HS512":
                        {
                            if (!C(e.algorithm, "HMAC")) throw W("HMAC");
                            const r = parseInt(t.slice(2), 10);
                            if (K(e.algorithm.hash) !== r) throw W(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        {
                            if (!C(e.algorithm, "RSASSA-PKCS1-v1_5")) throw W("RSASSA-PKCS1-v1_5");
                            const r = parseInt(t.slice(2), 10);
                            if (K(e.algorithm.hash) !== r) throw W(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        {
                            if (!C(e.algorithm, "RSA-PSS")) throw W("RSA-PSS");
                            const r = parseInt(t.slice(2), 10);
                            if (K(e.algorithm.hash) !== r) throw W(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                    case A() && "EdDSA":
                        if (!C(e.algorithm, "NODE-ED25519")) throw W("NODE-ED25519");
                        break;
                    case "ES256":
                    case "ES384":
                    case "ES512":
                        {
                            if (!C(e.algorithm, "ECDSA")) throw W("ECDSA");
                            const r = function(e) {
                                switch (e) {
                                    case "ES256":
                                        return "P-256";
                                    case "ES384":
                                        return "P-384";
                                    case "ES512":
                                        return "P-521";
                                    default:
                                        throw new Error("unreachable")
                                }
                            }(t);
                            if (e.algorithm.namedCurve !== r) throw W(r, "algorithm.namedCurve");
                            break
                        }
                    default:
                        throw new TypeError("CryptoKey does not support this operation")
                }
                J(e, r)
            }
            var H = async (e, t, r, o) => {
                const s = await
                function(e, t, r) {
                    if (n(t)) return O(t, e, r), t;
                    if (t instanceof Uint8Array) {
                        if (!e.startsWith("HS")) throw new TypeError(R(t, ...b));
                        return a.subtle.importKey("raw", t, {
                            hash: `SHA-${e.slice(-3)}`,
                            name: "HMAC"
                        }, !1, [r])
                    }
                    throw new TypeError(R(t, ...b, "Uint8Array"))
                }(e, t, "verify");
                ((e, t) => {
                    if (e.startsWith("RS") || e.startsWith("PS")) {
                        const {
                            modulusLength: r
                        } = t.algorithm;
                        if ("number" !== typeof r || r < 2048) throw new TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)
                    }
                })(e, s);
                const i = function(e, t) {
                    const r = `SHA-${e.slice(-3)}`;
                    switch (e) {
                        case "HS256":
                        case "HS384":
                        case "HS512":
                            return {
                                hash: r,
                                name: "HMAC"
                            };
                        case "PS256":
                        case "PS384":
                        case "PS512":
                            return {
                                hash: r,
                                name: "RSA-PSS",
                                saltLength: e.slice(-3) >> 3
                            };
                        case "RS256":
                        case "RS384":
                        case "RS512":
                            return {
                                hash: r,
                                name: "RSASSA-PKCS1-v1_5"
                            };
                        case "ES256":
                        case "ES384":
                        case "ES512":
                            return {
                                hash: r,
                                name: "ECDSA",
                                namedCurve: t.namedCurve
                            };
                        case A() && "EdDSA":
                            const {
                                namedCurve: a
                            } = t;
                            return {
                                name: a,
                                namedCurve: a
                            };
                        default:
                            throw new p(`alg ${e} is not supported either by JOSE or your javascript runtime`)
                    }
                }(e, s.algorithm);
                try {
                    return await a.subtle.verify(i, s, r, o)
                } catch (c) {
                    return !1
                }
            };
            var D = (...e) => {
                const t = e.filter(Boolean);
                if (0 === t.length || 1 === t.length) return !0;
                let r;
                for (const a of t) {
                    const e = Object.keys(a);
                    if (r && 0 !== r.size)
                        for (const t of e) {
                            if (r.has(t)) return !1;
                            r.add(t)
                        } else r = new Set(e)
                }
                return !0
            };
            var I = (e, t) => {
                if (void 0 !== t && (!Array.isArray(t) || t.some((e => "string" !== typeof e)))) throw new TypeError(`"${e}" option must be an array of strings`);
                if (t) return new Set(t)
            };
            async function N(e, t, r) {
                if (e instanceof Uint8Array && (e = s.decode(e)), "string" !== typeof e) throw new f("Compact JWS must be a string or Uint8Array");
                const {
                    0: a,
                    1: n,
                    2: d,
                    length: u
                } = e.split(".");
                if (3 !== u) throw new f("Invalid Compact JWS");
                const h = await async function(e, t, r) {
                        var a;
                        if (!k(e)) throw new f("Flattened JWS must be an object");
                        if (void 0 === e.protected && void 0 === e.header) throw new f('Flattened JWS must have either of the "protected" or "header" members');
                        if (void 0 !== e.protected && "string" !== typeof e.protected) throw new f("JWS Protected Header incorrect type");
                        if (void 0 === e.payload) throw new f("JWS Payload missing");
                        if ("string" !== typeof e.signature) throw new f("JWS Signature missing or incorrect type");
                        if (void 0 !== e.header && !k(e.header)) throw new f("JWS Unprotected Header incorrect type");
                        let n = {};
                        if (e.protected) try {
                            const t = c(e.protected);
                            n = JSON.parse(s.decode(t))
                        } catch (v) {
                            throw new f("JWS Protected Header is invalid")
                        }
                        if (!D(n, e.header)) throw new f("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                        const d = { ...n,
                            ...e.header
                        };
                        let u = !0;
                        if (P(f, new Map([
                                ["b64", !0]
                            ]), null === r || void 0 === r ? void 0 : r.crit, n, d).has("b64") && (u = n.b64, "boolean" !== typeof u)) throw new f('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                        const {
                            alg: h
                        } = d;
                        if ("string" !== typeof h || !h) throw new f('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                        const p = r && I("algorithms", r.algorithms);
                        if (p && !p.has(h)) throw new l('"alg" (Algorithm) Header Parameter not allowed');
                        if (u) {
                            if ("string" !== typeof e.payload) throw new f("JWS Payload must be a string")
                        } else if ("string" !== typeof e.payload && !(e.payload instanceof Uint8Array)) throw new f("JWS Payload must be a string or an Uint8Array instance");
                        let y = !1;
                        "function" === typeof t && (t = await t(n, e), y = !0), T(h, t, "verify");
                        const w = i(o.encode(null !== (a = e.protected) && void 0 !== a ? a : ""), o.encode("."), "string" === typeof e.payload ? o.encode(e.payload) : e.payload),
                            m = c(e.signature);
                        if (!(await H(h, t, m, w))) throw new E;
                        let S;
                        S = u ? c(e.payload) : "string" === typeof e.payload ? o.encode(e.payload) : e.payload;
                        const g = {
                            payload: S
                        };
                        return void 0 !== e.protected && (g.protectedHeader = n), void 0 !== e.header && (g.unprotectedHeader = e.header), y ? { ...g,
                            key: t
                        } : g
                    }({
                        payload: n,
                        protected: a,
                        signature: d
                    }, t, r),
                    p = {
                        payload: h.payload,
                        protectedHeader: h.protectedHeader
                    };
                return "function" === typeof t ? { ...p,
                    key: h.key
                } : p
            }
            const x = 86400,
                M = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
            var j = e => {
                const t = M.exec(e);
                if (!t) throw new TypeError("Invalid time period format");
                const r = parseFloat(t[1]);
                switch (t[2].toLowerCase()) {
                    case "sec":
                    case "secs":
                    case "second":
                    case "seconds":
                    case "s":
                        return Math.round(r);
                    case "minute":
                    case "minutes":
                    case "min":
                    case "mins":
                    case "m":
                        return Math.round(60 * r);
                    case "hour":
                    case "hours":
                    case "hr":
                    case "hrs":
                    case "h":
                        return Math.round(3600 * r);
                    case "day":
                    case "days":
                    case "d":
                        return Math.round(r * x);
                    case "week":
                    case "weeks":
                    case "w":
                        return Math.round(604800 * r);
                    default:
                        return Math.round(31557600 * r)
                }
            };
            const $ = e => e.toLowerCase().replace(/^application\//, "");
            var U = (e, t, r = {}) => {
                const {
                    typ: a
                } = r;
                if (a && ("string" !== typeof e.typ || $(e.typ) !== $(a))) throw new u('unexpected "typ" JWT header value', "typ", "check_failed");
                let n;
                try {
                    n = JSON.parse(s.decode(t))
                } catch (S) {}
                if (!k(n)) throw new y("JWT Claims Set must be a top-level JSON object");
                const {
                    issuer: o
                } = r;
                if (o && !(Array.isArray(o) ? o : [o]).includes(n.iss)) throw new u('unexpected "iss" claim value', "iss", "check_failed");
                const {
                    subject: i
                } = r;
                if (i && n.sub !== i) throw new u('unexpected "sub" claim value', "sub", "check_failed");
                const {
                    audience: c
                } = r;
                if (c && (d = n.aud, l = "string" === typeof c ? [c] : c, !("string" === typeof d ? l.includes(d) : Array.isArray(d) && l.some(Set.prototype.has.bind(new Set(d)))))) throw new u('unexpected "aud" claim value', "aud", "check_failed");
                var d, l;
                let p;
                switch (typeof r.clockTolerance) {
                    case "string":
                        p = j(r.clockTolerance);
                        break;
                    case "number":
                        p = r.clockTolerance;
                        break;
                    case "undefined":
                        p = 0;
                        break;
                    default:
                        throw new TypeError("Invalid clockTolerance option type")
                }
                const {
                    currentDate: f
                } = r, w = (m = f || new Date, Math.floor(m.getTime() / 1e3));
                var m;
                if ((void 0 !== n.iat || r.maxTokenAge) && "number" !== typeof n.iat) throw new u('"iat" claim must be a number', "iat", "invalid");
                if (void 0 !== n.nbf) {
                    if ("number" !== typeof n.nbf) throw new u('"nbf" claim must be a number', "nbf", "invalid");
                    if (n.nbf > w + p) throw new u('"nbf" claim timestamp check failed', "nbf", "check_failed")
                }
                if (void 0 !== n.exp) {
                    if ("number" !== typeof n.exp) throw new u('"exp" claim must be a number', "exp", "invalid");
                    if (n.exp <= w - p) throw new h('"exp" claim timestamp check failed', "exp", "check_failed")
                }
                if (r.maxTokenAge) {
                    const e = w - n.iat;
                    if (e - p > ("number" === typeof r.maxTokenAge ? r.maxTokenAge : j(r.maxTokenAge))) throw new h('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
                    if (e < 0 - p) throw new u('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed")
                }
                return n
            };
            async function L(e, t, r) {
                var a;
                const n = await N(e, t, r);
                if ((null === (a = n.protectedHeader.crit) || void 0 === a ? void 0 : a.includes("b64")) && !1 === n.protectedHeader.b64) throw new y("JWTs MUST NOT use unencoded payload");
                const o = {
                    payload: U(n.protectedHeader, n.payload, r),
                    protectedHeader: n.protectedHeader
                };
                return "function" === typeof t ? { ...o,
                    key: n.key
                } : o
            }

            function F(e) {
                return e && "object" === typeof e && Array.isArray(e.keys) && e.keys.every(G)
            }

            function G(e) {
                return k(e)
            }
            class B {
                constructor(e) {
                    if (this._cached = new WeakMap, !F(e)) throw new w("JSON Web Key Set malformed");
                    var t;
                    this._jwks = (t = e, "function" === typeof structuredClone ? structuredClone(t) : JSON.parse(JSON.stringify(t)))
                }
                async getKey(e, t) {
                    const {
                        alg: r,
                        kid: a
                    } = { ...e,
                        ...t.header
                    }, n = function(e) {
                        switch ("string" === typeof e && e.slice(0, 2)) {
                            case "RS":
                            case "PS":
                                return "RSA";
                            case "ES":
                                return "EC";
                            case "Ed":
                                return "OKP";
                            default:
                                throw new p('Unsupported "alg" value for a JSON Web Key Set')
                        }
                    }(r), o = this._jwks.keys.filter((e => {
                        let t = n === e.kty;
                        if (t && "string" === typeof a && (t = a === e.kid), t && "string" === typeof e.alg && (t = r === e.alg), t && "string" === typeof e.use && (t = "sig" === e.use), t && Array.isArray(e.key_ops) && (t = e.key_ops.includes("verify")), t && "EdDSA" === r && (t = "Ed25519" === e.crv || "Ed448" === e.crv), t) switch (r) {
                            case "ES256":
                                t = "P-256" === e.crv;
                                break;
                            case "ES256K":
                                t = "secp256k1" === e.crv;
                                break;
                            case "ES384":
                                t = "P-384" === e.crv;
                                break;
                            case "ES512":
                                t = "P-521" === e.crv
                        }
                        return t
                    })), {
                        0: s,
                        length: i
                    } = o;
                    if (0 === i) throw new m;
                    if (1 !== i) throw new S;
                    const d = this._cached.get(s) || this._cached.set(s, {}).get(s);
                    if (void 0 === d[r]) {
                        const e = await async function(e, t, r) {
                            if (!k(e)) throw new TypeError("JWK must be an object");
                            if (t || (t = e.alg), "string" !== typeof t || !t) throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
                            switch (e.kty) {
                                case "oct":
                                    if ("string" !== typeof e.k || !e.k) throw new TypeError('missing "k" (Key Value) Parameter value');
                                    return null !== r && void 0 !== r || (r = !0 !== e.ext), r ? _({ ...e,
                                        alg: t,
                                        ext: !1
                                    }) : c(e.k);
                                case "RSA":
                                    if (void 0 !== e.oth) throw new p('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
                                case "EC":
                                case "OKP":
                                    return _({ ...e,
                                        alg: t
                                    });
                                default:
                                    throw new p('Unsupported "kty" (Key Type) Parameter value')
                            }
                        }({ ...s,
                            ext: !0
                        }, r);
                        if (e instanceof Uint8Array || "public" !== e.type) throw new w("JSON Web Key Set members must be public keys");
                        d[r] = e
                    }
                    return d[r]
                }
            }
            var V = async (e, t, r) => {
                let a, n, o = !1;
                "function" === typeof AbortController && (a = new AbortController, n = setTimeout((() => {
                    o = !0, a.abort()
                }), t));
                const s = await fetch(e.href, {
                    signal: a ? a.signal : void 0,
                    redirect: "manual",
                    headers: r.headers
                }).catch((e => {
                    if (o) throw new g;
                    throw e
                }));
                if (void 0 !== n && clearTimeout(n), 200 !== s.status) throw new d("Expected 200 OK from the JSON Web Key Set HTTP response");
                try {
                    return await s.json()
                } catch (i) {
                    throw new d("Failed to parse the JSON Web Key Set HTTP response as JSON")
                }
            };
            class z extends B {
                constructor(e, t) {
                    if (super({
                            keys: []
                        }), this._jwks = void 0, !(e instanceof URL)) throw new TypeError("url must be an instance of URL");
                    this._url = new URL(e.href), this._options = {
                        agent: null === t || void 0 === t ? void 0 : t.agent,
                        headers: null === t || void 0 === t ? void 0 : t.headers
                    }, this._timeoutDuration = "number" === typeof(null === t || void 0 === t ? void 0 : t.timeoutDuration) ? null === t || void 0 === t ? void 0 : t.timeoutDuration : 5e3, this._cooldownDuration = "number" === typeof(null === t || void 0 === t ? void 0 : t.cooldownDuration) ? null === t || void 0 === t ? void 0 : t.cooldownDuration : 3e4, this._cacheMaxAge = "number" === typeof(null === t || void 0 === t ? void 0 : t.cacheMaxAge) ? null === t || void 0 === t ? void 0 : t.cacheMaxAge : 6e5
                }
                coolingDown() {
                    return "number" === typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cooldownDuration
                }
                fresh() {
                    return "number" === typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cacheMaxAge
                }
                async getKey(e, t) {
                    this._jwks && this.fresh() || await this.reload();
                    try {
                        return await super.getKey(e, t)
                    } catch (r) {
                        if (r instanceof m && !1 === this.coolingDown()) return await this.reload(), super.getKey(e, t);
                        throw r
                    }
                }
                async reload() {
                    if (this._pendingFetch && A()) return new Promise((e => {
                        const t = () => {
                            void 0 === this._pendingFetch ? e() : setTimeout(t, 5)
                        };
                        t()
                    }));
                    this._pendingFetch || (this._pendingFetch = V(this._url, this._timeoutDuration, this._options).then((e => {
                        if (!F(e)) throw new w("JSON Web Key Set malformed");
                        this._jwks = {
                            keys: e.keys
                        }, this._jwksTimestamp = Date.now(), this._pendingFetch = void 0
                    })).catch((e => {
                        throw this._pendingFetch = void 0, e
                    }))), await this._pendingFetch
                }
            }

            function Y(e, t) {
                return z.prototype.getKey.bind(new z(e, t))
            }
            const q = c;

            function X(e) {
                if ("string" !== typeof e) throw new y("JWTs must use Compact JWS serialization, JWT must be a string");
                const {
                    1: t,
                    length: r
                } = e.split(".");
                if (5 === r) throw new y("Only JWTs using Compact JWS serialization can be decoded");
                if (3 !== r) throw new y("Invalid JWT");
                if (!t) throw new y("JWTs must contain a payload");
                let a, n;
                try {
                    a = q(t)
                } catch (o) {
                    throw new y("Failed to parse the base64url encoded payload")
                }
                try {
                    n = JSON.parse(s.decode(a))
                } catch (i) {
                    throw new y("Failed to parse the decoded payload as JSON")
                }
                if (!k(n)) throw new y("Invalid JWT Claims Set");
                return n
            }
        }
    }
]);