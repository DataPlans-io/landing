"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4953], {
        14953: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return ce
                }
            });
            var i, r, o, a, l, u, s, d, c, v, p, _, f = n(52322),
                m = n(96577),
                h = n.n(m),
                g = n(2784),
                y = n(65498),
                R = n(92646),
                E = n(98788),
                b = n(70865),
                I = n(96670),
                x = n(66383),
                D = n(94776),
                C = n.n(D),
                T = n(6804);
            Object.defineProperty;
            (r = i || (i = {})).FREE = "free", r.LAUNCH = "launch", r.PRO = "pro",
                function(e) {
                    e.ACTIVE = "active", e.INACTIVE = "inactive"
                }(o || (o = {})),
                function(e) {
                    e.InviteMember = "InviteMember", e.RemoveMember = "RemoveMember", e.ViewMembers = "ViewMembers", e.TransferOwnership = "TransferOwnership", e.UpdatePermissions = "UpdatePermissions", e.UpdateSettings = "UpdateSettings", e.UpdateCustomDomain = "UpdateCustomDomain", e.UpdateSubdomain = "UpdateSubdomain", e.ReadSettings = "ReadSettings", e.ReadBilling = "ReadBilling", e.UpdateBilling = "UpdateBilling", e.DeleteSpace = "DeleteSpace", e.CreatePage = "CreatePage", e.EditContent = "EditContent", e.ReadDraft = "ReadDraft", e.ReadPublishedContent = "ReadPublishedContent", e.ReadPageInfo = "ReadPageInfo", e.CreateLock = "CreateLock", e.PromoteToOwner = "PromoteToOwner", e.UpdateMetadata = "UpdateMetadata", e.UpdateCustomization = "UpdateCustomization", e.UpdateAffiliate = "UpdateAffiliate", e.ReadBasicAnalytics = "ReadBasicAnalytics", e.ReadAdvancedAnalytics = "ReadAdvancedAnalytics", e.Collection = "Collection"
                }(a || (a = {})),
                function(e) {
                    e.OWNER = "owner", e.ADMIN = "admin", e.WRITER = "writer", e.READER = "reader"
                }(l || (l = {})),
                function(e) {
                    e.PAGE = "page", e.SECTION = "section", e.MOBILE_SECTION = "mobile_section"
                }(u || (u = {})),
                function(e) {
                    e.AIRTABLE = "airtable", e.NOTION = "notion", e.STRIPE = "stripe"
                }(s || (s = {})),
                function(e) {
                    e.MAX_ITEMS = "max_items", e.FILTER_COLUMN = "filter_column", e.FILTER_COLUMN_TYPE = "filter_column_type", e.FILTER_CONDITION = "filter_condition", e.FILTER_VALUE = "filter_value", e.SORT_COLUMN = "sort_column", e.SORT_DIRECTION = "sort_direction", e.SEARCH_COLUMNS = "search_columns", e.SHOW_SEARCH_BAR = "show_search_bar", e.VISITOR_FILTER_COLUMN = "visitor_filter_column", e.VISITOR_FILTER_STYLE = "visitor_filter_style", e.VISITOR_FILTER_COLOR = "visitor_filter_color", e.VISITOR_FILTER_COLUMN_TYPE = "visitor_filter_column_type"
                }(d || (d = {})),
                function(e) {
                    e.FILES = "files"
                }(c || (c = {}));
            ! function(e) {
                e.DIGITAL_DOWNLOAD = "digital_download"
            }(v || (v = {})),
            function(e) {
                e.HERO = "hero", e.CLIENTS = "clients", e.EVENTS = "events", e.FEATURES = "features", e.PRICING = "pricing", e.CALL_TO_ACTION = "call_to_action", e.FOOTER = "footer", e.SHOP = "shop", e.COLLECTION = "collection"
            }(p || (p = {})),
            function(e) {
                e.HERO = "hero", e.HIGHLIGHTS = "highlights", e.LINKS = "links"
            }(_ || (_ = {}));
            a.InviteMember, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.RemoveMember, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.ViewMembers, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.TransferOwnership, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.UpdatePermissions, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.UpdateSettings, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.UpdateCustomDomain, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.UpdateSubdomain, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.ReadSettings, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.ReadBilling, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.UpdateBilling, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.DeleteSpace, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.CreatePage, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.EditContent, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.ReadDraft, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.ReadPublishedContent, l.OWNER, l.ADMIN, l.WRITER, l.READER, a.ReadPageInfo, l.OWNER, l.ADMIN, l.WRITER, l.READER;
            const Z = "_CURRENT_ITEM_";
            var N = n(50930);
            var w = (0, n(77068).Z)((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = {};
                return (null === e || void 0 === e ? void 0 : e.page_id) ? (n[e.page_id] = t, (null === e || void 0 === e ? void 0 : e.children_template_page_id) && (n[e.children_template_page_id] = t), e.children ? (Object.keys(e.children).forEach((function(i) {
                    Object.assign(n, w(e.children[i], (0, N.Z)(t).concat([i])))
                })), n) : n) : n
            }));
            var A = n(47842),
                O = n(76559),
                S = n(9669),
                k = n.n(S),
                M = n(31691),
                L = n(79826);

            function W(e) {
                return e.split(" ").map((function(e) {
                    return e[0].toUpperCase() + e.substring(1)
                })).join(" ")
            }
            var q, P = n(90581),
                U = n(2578),
                F = function() {
                    function e() {
                        (0, P.Z)(this, e)
                    }
                    return e.getDataQuery = function(e, t, n, i, r, o) {
                        return {
                            path: "/app/proxy_public/".concat(e, "/notion"),
                            data: {
                                url: "https://api.notion.com/v1/databases/".concat(t, "/query"),
                                method: "POST",
                                header: {
                                    "Content-Type": "application/json",
                                    "Notion-Version": "2021-08-16"
                                },
                                body: {
                                    filter: n,
                                    sorts: i,
                                    start_cursor: r,
                                    page_size: o || void 0
                                }
                            },
                            app: "notion"
                        }
                    }, e.callQuery = function(e, t) {
                        return (0, E.Z)(C().mark((function n() {
                            var i, r;
                            return C().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i = new U.Z, n.next = 3, i.post(e, t);
                                    case 3:
                                        return r = n.sent, n.abrupt("return", r);
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e.getTable = function(e, t) {
                        return (0, E.Z)(C().mark((function n() {
                            var i, r, o, a;
                            return C().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i = {
                                            url: "https://api.notion.com/v1/databases/".concat(t),
                                            method: "GET",
                                            header: {
                                                "Content-Type": "application/json",
                                                "Notion-Version": "2021-08-16"
                                            }
                                        }, r = "/app/proxy_public/".concat(e, "/notion"), o = new U.Z, n.next = 5, o.post(r, i);
                                    case 5:
                                        return a = n.sent, n.abrupt("return", a);
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e
                }(),
                V = F;
            ! function(e) {
                e.TABLE_ID = "tableID"
            }(q || (q = {}));
            var B = {
                    title: {
                        key: "contains",
                        type: "string"
                    },
                    text: {
                        key: "contains",
                        type: "string"
                    },
                    rich_text: {
                        key: "contains",
                        type: "string"
                    },
                    number: {
                        key: "equals",
                        type: "number"
                    },
                    checkbox: {
                        key: "equals",
                        type: "boolean"
                    },
                    select: {
                        key: "equals",
                        type: "string"
                    },
                    multi_select: {
                        key: "contains",
                        type: "string"
                    },
                    date: {
                        key: "equals",
                        type: "true"
                    },
                    url: {
                        key: "contains",
                        type: "string"
                    },
                    email: {
                        key: "contains",
                        type: "string"
                    },
                    phone: {
                        key: "contains",
                        type: "string"
                    },
                    phone_number: {
                        key: "contains",
                        type: "string"
                    },
                    created_time: {
                        key: "equals",
                        type: "true"
                    },
                    last_edited_time: {
                        key: "equals",
                        type: "true"
                    }
                },
                j = {
                    title: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    text: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    rich_text: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    number: {
                        equals: "number",
                        does_not_equal: "number",
                        greater_than: "number",
                        less_than: "number",
                        greater_than_or_equal_to: "number",
                        less_than_or_equal_to: "number",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    checkbox: {
                        equals: "boolean",
                        does_not_equal: "boolean"
                    },
                    select: {
                        equals: "string",
                        does_not_equal: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    multi_select: {
                        contains: "string",
                        does_not_contain: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    date: {
                        equals: "string",
                        before: "string",
                        after: "string",
                        on_or_before: "string",
                        on_or_after: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    files: {
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    url: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    email: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    phone: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    phone_number: {
                        equals: "string",
                        does_not_equal: "string",
                        contains: "string",
                        does_not_contain: "string",
                        starts_with: "string",
                        ends_with: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    created_time: {
                        equals: "string",
                        before: "string",
                        after: "string",
                        on_or_before: "string",
                        on_or_after: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    },
                    last_edited_time: {
                        equals: "string",
                        before: "string",
                        after: "string",
                        on_or_before: "string",
                        on_or_after: "string",
                        is_empty: "true",
                        is_not_empty: "true"
                    }
                },
                Q = function(e) {
                    try {
                        var t = new Date(Date.parse(e)).toISOString().split("Z")[0],
                            n = (0, x.Z)(t.split("T"), 2),
                            i = n[0],
                            o = n[1].split(":").slice(0, 2).join(":");
                        return "".concat(i).concat("00:00" !== o ? " ".concat(o) : "")
                    } catch (r) {
                        return e
                    }
                },
                G = function(e) {
                    var t = e.type,
                        n = null,
                        i = null;
                    switch (t) {
                        case "title":
                        case "rich_text":
                            var r, o;
                            i = null === (o = null === e || void 0 === e || null === (r = e[t]) || void 0 === r ? void 0 : r.map((function(e) {
                                return e.plain_text
                            }))) || void 0 === o ? void 0 : o.join("");
                            break;
                        case "string":
                        case "checkbox":
                        case "url":
                        case "email":
                        case "phone_number":
                        case "number":
                            i = null === e || void 0 === e ? void 0 : e[t];
                            break;
                        case "multi_select":
                            var a;
                            i = null === e || void 0 === e || null === (a = e[t]) || void 0 === a ? void 0 : a.map((function(e) {
                                return e.name
                            })).join(", ");
                            break;
                        case "date":
                            var l, u, s;
                            if (i = Q(null === e || void 0 === e || null === (l = e[t]) || void 0 === l ? void 0 : l.start), null === e || void 0 === e || null === (u = e[t]) || void 0 === u ? void 0 : u.end) i = "".concat(i, " - ").concat(Q(null === e || void 0 === e || null === (s = e[t]) || void 0 === s ? void 0 : s.end));
                            break;
                        case "people":
                            var d;
                            i = null === e || void 0 === e || null === (d = e[t]) || void 0 === d ? void 0 : d.map((function(e) {
                                return e.name
                            })).join(", ");
                            break;
                        case "files":
                            var c, v, p, _, f, m, h, g, y, R, E;
                            if ("file" === (null === e || void 0 === e || null === (c = e[t]) || void 0 === c || null === (v = c[0]) || void 0 === v ? void 0 : v.type)) i = null === e || void 0 === e || null === (p = e[t]) || void 0 === p || null === (_ = p[0]) || void 0 === _ || null === (f = _.file) || void 0 === f ? void 0 : f.url, n = null === e || void 0 === e || null === (m = e[t]) || void 0 === m || null === (h = m[0]) || void 0 === h || null === (g = h.file) || void 0 === g ? void 0 : g.expiry_time;
                            else i = null === e || void 0 === e || null === (y = e[t]) || void 0 === y || null === (R = y[0]) || void 0 === R || null === (E = R.external) || void 0 === E ? void 0 : E.url;
                            break;
                        case "formula":
                            return G(null === e || void 0 === e ? void 0 : e[t]);
                        case "created_time":
                        case "last_edited_time":
                            i = Q(null === e || void 0 === e ? void 0 : e[t]);
                            break;
                        case "select":
                        case "created_by":
                        case "last_edited_by":
                            var b;
                            i = null === e || void 0 === e || null === (b = e[t]) || void 0 === b ? void 0 : b.name;
                            break;
                        case "rollup":
                            var I = null === e || void 0 === e ? void 0 : e[t].type;
                            if ("array" === I) {
                                var x, D = null === (x = null === e || void 0 === e ? void 0 : e[t][I]) || void 0 === x ? void 0 : x.map((function(e) {
                                    var t, i, r = G(e),
                                        o = r.propValue,
                                        a = r.expiresAt;
                                    return (!n || a && (null === (t = new Date(a)) || void 0 === t ? void 0 : t.getTime()) < (null === (i = new Date(n)) || void 0 === i ? void 0 : i.getTime())) && (n = a), o
                                }));
                                i = D.join(",") || "";
                                break
                            }
                            i = G(null === e || void 0 === e ? void 0 : e[t]), (null === e || void 0 === e ? void 0 : e[t].function.includes("percent")) && (i = "".concat(Math.round(1e3 * Number(i.propValue)) / 10, "%"));
                            break;
                        default:
                            i = ""
                    }
                    return {
                        propValue: i,
                        expiresAt: n
                    }
                };

            function z(e, t) {
                if ("undefined" === typeof t) return t;
                switch (e) {
                    case "string":
                        return "".concat(t);
                    case "number":
                        if (!t || Number.isNaN(t) || Number.isNaN(parseFloat(String(t))) || Number.isNaN(Number(t))) return;
                        return parseFloat(String(t));
                    case "date":
                        if (!(0, M.Z)(t)) return;
                        return function(e) {
                            var t = new Date(Date.parse("".concat(e, " GMT+0000"))).toISOString().split("Z")[0],
                                n = (0, x.Z)(t.split("T"), 2),
                                i = n[0],
                                r = n[1].split(":").slice(0, 2).join(":");
                            return "".concat(i).concat("00:00" !== r ? " ".concat(r) : "")
                        }(String(t));
                    case "boolean":
                        if ("string" !== typeof t) return t;
                        if ("true" !== (null === t || void 0 === t ? void 0 : t.toLowerCase()) && "false" !== (null === t || void 0 === t ? void 0 : t.toLowerCase())) return;
                        return "true" === (null === t || void 0 === t ? void 0 : t.toLowerCase());
                    case "true":
                        if ("string" !== typeof t) return t;
                        if ("true" !== (null === t || void 0 === t ? void 0 : t.toLowerCase())) return;
                        return "true" === (null === t || void 0 === t ? void 0 : t.toLowerCase());
                    default:
                        return t
                }
            }
            var H = {
                    getColumnNames: function() {
                        var e = (0, E.Z)(C().mark((function e(t, n) {
                            var i, r, o, a, l;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = null === n || void 0 === n ? void 0 : n[q.TABLE_ID], e.next = 4, V.getTable(t, r);
                                    case 4:
                                        if (o = e.sent, a = null === o || void 0 === o || null === (i = o.data) || void 0 === i ? void 0 : i.properties) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", {});
                                    case 8:
                                        return l = {}, Object.keys(a).forEach((function(e) {
                                            l[e] = {
                                                id: a[e].id,
                                                type: a[e].type,
                                                name: e
                                            }
                                        })), e.abrupt("return", l);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getColumnSelectOptions: function() {
                        var e = (0, E.Z)(C().mark((function e(t, n, i) {
                            var r, o, a, l, u;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = null === i || void 0 === i ? void 0 : i[q.TABLE_ID], e.next = 4, V.getTable(t, a);
                                    case 4:
                                        if (l = e.sent, u = null === l || void 0 === l || null === (r = l.data) || void 0 === r || null === (o = r.properties) || void 0 === o ? void 0 : o[n]) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", []);
                                    case 8:
                                        return e.abrupt("return", u[u.type].options.map((function(e) {
                                            return e.name
                                        })));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, i) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getDataQuery: function(e, t, n, i) {
                        var r, o, a = null === t || void 0 === t ? void 0 : t[q.TABLE_ID],
                            l = null === t || void 0 === t ? void 0 : t.metadata,
                            u = (null === l || void 0 === l ? void 0 : l.filter_column) ? (0, A.Z)({
                                property: l.filter_column
                            }, l.filter_column_type, (0, A.Z)({}, l.filter_condition, z(null === (r = j[l.filter_column_type]) || void 0 === r ? void 0 : r[l.filter_condition], l.filter_value))) : void 0,
                            s = (null === l || void 0 === l ? void 0 : l.visitor_filter_column) && i && i !== O.k ? (0, A.Z)({
                                property: l.visitor_filter_column
                            }, l.visitor_filter_column_type, (0, A.Z)({}, "select" === l.visitor_filter_column_type ? "equals" : "contains", z(null === (o = j[l.visitor_filter_column_type]) || void 0 === o ? void 0 : o["select" === l.visitor_filter_column_type ? "equals" : "contains"], i))) : void 0,
                            d = u && s ? {
                                and: [u, s]
                            } : u || s,
                            c = (null === l || void 0 === l ? void 0 : l.sort_column) ? [{
                                property: l.sort_column,
                                direction: l.sort_direction
                            }] : void 0;
                        return V.getDataQuery(e, a, d, c, n, null === l || void 0 === l ? void 0 : l.max_items)
                    },
                    constructGetDataResult: function(e) {
                        var t = null === e || void 0 === e ? void 0 : e.results;
                        if (!t) return {
                            data: [],
                            has_more: null === e || void 0 === e ? void 0 : e.has_more,
                            next_cursor: null === e || void 0 === e ? void 0 : e.next_cursor,
                            expires_at: null
                        };
                        var n = null,
                            i = [];
                        return t.forEach((function(e) {
                            if (null === e || void 0 === e ? void 0 : e.properties) {
                                var t = {},
                                    r = null === e || void 0 === e ? void 0 : e.properties;
                                Object.entries(r).forEach((function(e) {
                                    var i, r, o = (0, x.Z)(e, 2),
                                        a = o[0],
                                        l = o[1],
                                        u = G(l),
                                        s = u.propValue,
                                        d = u.expiresAt;
                                    d && (n = n && (null === (i = new Date(n)) || void 0 === i ? void 0 : i.getTime()) < (null === (r = new Date(d)) || void 0 === r ? void 0 : r.getTime()) ? n : d);
                                    s && (t[a] = s)
                                })), t[L.it] = null === e || void 0 === e ? void 0 : e.id, i.push(t)
                            }
                        })), {
                            data: i,
                            has_more: null === e || void 0 === e ? void 0 : e.has_more,
                            next_cursor: null === e || void 0 === e ? void 0 : e.next_cursor,
                            expires_at: n
                        }
                    },
                    getData: function() {
                        var e = (0, E.Z)(C().mark((function e(t, n, i, r) {
                            var o, a;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = H.getDataQuery(t, n, i, r), e.next = 3, V.callQuery(o.path, o.data);
                                    case 3:
                                        return a = e.sent, e.abrupt("return", H.constructGetDataResult(null === a || void 0 === a ? void 0 : a.data));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, i, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getDataBySlug: function() {
                        var e = (0, E.Z)(C().mark((function e(t, n, i) {
                            var r, o, a, l, u, s, d, c, v, p, _, f;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return u = null === n || void 0 === n ? void 0 : n[q.TABLE_ID], s = (0, A.Z)({
                                            property: L.OH.SLUG.fieldName
                                        }, L.OH.SLUG.type, {
                                            equals: i
                                        }), d = V.getDataQuery(t, u, s, void 0, void 0, 1), e.next = 6, V.callQuery(d.path, d.data);
                                    case 6:
                                        if (c = e.sent, !((null === (v = H.constructGetDataResult(null === c || void 0 === c ? void 0 : c.data)) || void 0 === v || null === (r = v.data) || void 0 === r ? void 0 : r.length) <= 0)) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new Error("item page not found");
                                    case 10:
                                        return p = null === v || void 0 === v || null === (o = v.data) || void 0 === o ? void 0 : o[0], e.next = 13, H.JSONFileToContent(p, n);
                                    case 13:
                                        return _ = e.sent, f = null === (a = n) || void 0 === a || null === (l = a.pageSchema) || void 0 === l ? void 0 : l.metadata, _[f] = _[f] ? JSON.parse(_[f]) : _[f], v.data[0] = _, e.abrupt("return", v);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, i) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getDataWithSearchQueryAndFilter: function() {
                        var e = (0, E.Z)(C().mark((function e(t, n, i, r, o, a) {
                            var l, u, s, d, c, v, p, _, f, m, h, g, y;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = null === n || void 0 === n ? void 0 : n[q.TABLE_ID], d = null === n || void 0 === n ? void 0 : n.metadata, c = (null === d || void 0 === d ? void 0 : d.filter_column) ? (0, A.Z)({
                                            property: d.filter_column
                                        }, d.filter_column_type, (0, A.Z)({}, d.filter_condition, z(null === (l = j[d.filter_column_type]) || void 0 === l ? void 0 : l[d.filter_condition], d.filter_value))) : void 0, v = (null === d || void 0 === d ? void 0 : d.visitor_filter_column) && a && a !== O.k ? (0, A.Z)({
                                            property: d.visitor_filter_column
                                        }, d.visitor_filter_column_type, (0, A.Z)({}, "select" === d.visitor_filter_column_type ? "equals" : "contains", z(null === (u = j[d.visitor_filter_column_type]) || void 0 === u ? void 0 : u["select" === d.visitor_filter_column_type ? "equals" : "contains"], a))) : void 0, p = c && v ? {
                                            and: [c, v]
                                        } : c || v, _ = null === d || void 0 === d ? void 0 : d.search_columns, _ = Array.isArray(_) && (null === _ || void 0 === _ ? void 0 : _.length) > 0 ? _ : Object.keys(r), f = [], i && _.forEach((function(e) {
                                            var t, n = r[e];
                                            if (B[n.type]) {
                                                var o = B[n.type],
                                                    a = o.key,
                                                    l = o.type,
                                                    u = z(l, i);
                                                if (null !== u && void 0 !== u && "" !== u) {
                                                    if ("string" === l) return void(f = f.concat([(0, A.Z)({
                                                        property: n.name
                                                    }, n.type, (0, A.Z)({}, a, u)), (0, A.Z)({
                                                        property: n.name
                                                    }, n.type, (0, A.Z)({}, a, u.toLowerCase())), (0, A.Z)({
                                                        property: n.name
                                                    }, n.type, (0, A.Z)({}, a, u.toUpperCase())), (0, A.Z)({
                                                        property: n.name
                                                    }, n.type, (0, A.Z)({}, a, (t = u, t.charAt(0).toUpperCase() + t.slice(1)))), (0, A.Z)({
                                                        property: n.name
                                                    }, n.type, (0, A.Z)({}, a, W(u)))]));
                                                    f.push((0, A.Z)({
                                                        property: n.name
                                                    }, n.type, (0, A.Z)({}, a, u)))
                                                }
                                            }
                                        })), m = p, (null === f || void 0 === f ? void 0 : f.length) > 0 && p && (m = {
                                            and: [p, {
                                                or: f
                                            }]
                                        }), (null === f || void 0 === f ? void 0 : f.length) > 0 && !p && (m = {
                                            or: f
                                        }), h = (null === d || void 0 === d ? void 0 : d.sort_column) ? [{
                                            property: null === d || void 0 === d ? void 0 : d.sort_column,
                                            direction: null === d || void 0 === d ? void 0 : d.sort_direction
                                        }] : void 0, g = V.getDataQuery(t, s, m, h, o, null === d || void 0 === d ? void 0 : d.max_items), e.next = 17, V.callQuery(g.path, g.data);
                                    case 17:
                                        return y = e.sent, e.abrupt("return", H.constructGetDataResult(null === y || void 0 === y ? void 0 : y.data));
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, i, r, o, a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getItemPageDataID: function(e) {
                        var t = null === e || void 0 === e ? void 0 : e.integration,
                            n = null === e || void 0 === e ? void 0 : e[q.TABLE_ID];
                        return "".concat(t, "_").concat(n)
                    },
                    tableConnected: function(e) {
                        return e && (null === e || void 0 === e ? void 0 : e[q.TABLE_ID])
                    },
                    JSONFileToContent: function() {
                        var e = (0, E.Z)(C().mark((function e(t, n) {
                            var i, r, o, a, l, u;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t, o = null === n || void 0 === n || null === (i = n.pageSchema) || void 0 === i ? void 0 : i.content, !t || !t[o]) {
                                            e.next = 10;
                                            break
                                        }
                                        return a = t[o], e.next = 7, k().get(a, {
                                            headers: {
                                                "Cache-Control": "no-cache",
                                                Pragma: "no-cache",
                                                Expires: "0"
                                            }
                                        });
                                    case 7:
                                        l = e.sent, u = (null === l || void 0 === l ? void 0 : l.data) ? JSON.parse(null === l || void 0 === l ? void 0 : l.data) : null, r[o] = u;
                                    case 10:
                                        return e.abrupt("return", r);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                J = H,
                K = function(e) {
                    if ("notion" === e) return J;
                    throw new Error("Unknown integration ".concat(e))
                },
                Y = n(203),
                X = function(e, t, n, i, r) {
                    var o = r.collection_connect_data,
                        a = r.collection_connect_data_keys,
                        l = (0, b.Z)({}, r);
                    return o && a.forEach((function(r) {
                        var o = r.schemaKey,
                            a = r.blockElementKey,
                            u = t[o],
                            s = e[u];
                        if (s) l[a] = String(s);
                        else if (u !== L.Si || !Y.W_.isElement(l) || "a" !== l.type && "button" !== l.type && "container" !== l.type && "img" !== l.type) l[a] = "";
                        else {
                            l.page_id = n, l.internal_link = !0;
                            var d = "".concat("/".concat(i.join("/")), "/").concat(e[L.OH.SLUG.fieldName]);
                            "img" === l.type ? l.href = d : l.url = d
                        }
                    })), Y.W_.isElement(l) && (l.children = l.children.map((function(r) {
                        return X(e, t, n, i, r)
                    }))), l
                },
                $ = X,
                ee = function(e, t, n, i, r, o) {
                    var a = (0, I.Z)((0, b.Z)({}, r), {
                        id: r.id || i()
                    });
                    if (Y.W_.isElement(a) && "collection" === a.type && (!o || a.collection_data_id === o)) {
                        var l = a.collection_data_id,
                            u = l && e[l];
                        if (u) {
                            var s, d, c = K(u.integration).getItemPageDataID(u),
                                v = t[c],
                                p = null === u || void 0 === u ? void 0 : u.data,
                                _ = null === (s = a.collection_template) || void 0 === s ? void 0 : s.template,
                                f = null === (d = a.collection_template) || void 0 === d ? void 0 : d.schema;
                            p && (a.children = (null === p || void 0 === p ? void 0 : p.length) > 0 ? p.map((function(e) {
                                return {
                                    id: i(),
                                    type: "collection_item",
                                    children: [$(e, f, null === v || void 0 === v ? void 0 : v.childrenTemplatePageID, n[null === v || void 0 === v ? void 0 : v.childrenTemplatePageID], _)]
                                }
                            })) : [{
                                id: i(),
                                text: ""
                            }])
                        }
                    }
                    return (0, b.Z)({}, a, Y.W_.isElement(a) ? {
                        children: a.children.map((function(r) {
                            return Y.W_.isElement(r) ? ee(e, t, n, i, r, o) : r
                        }))
                    } : {})
                },
                te = ee,
                ne = (function() {
                    var e = (0, E.Z)(C().mark((function e(t) {
                        var n, i, r, o, a, l, u, s, d;
                        return C().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.content, i = t.spaceID, r = t.spaceRoutes, o = t.collectionData, a = t.collectionItemData, l = t.itemPageData, u = w(r), s = (0, b.Z)({}, o), e.next = 5, Promise.all(Object.entries(o).map(function() {
                                        var e = (0, E.Z)(C().mark((function e(t) {
                                            var n, r, o, a, u, d, c, v, p;
                                            return C().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (n = (0, x.Z)(t, 2), r = n[0], !(null === (o = n[1]) || void 0 === o ? void 0 : o.queryResp)) {
                                                            e.next = 20;
                                                            break
                                                        }
                                                        if (e.prev = 2, u = JSON.parse(o.queryResp), d = K(o.integration).constructGetDataResult(u), s[r] = (0, I.Z)((0, b.Z)({}, s[r]), {
                                                                data: d.data,
                                                                hasMore: d.has_more,
                                                                nextCursor: d.next_cursor,
                                                                expiresAt: d.expires_at
                                                            }), c = null === (a = o.metadata) || void 0 === a ? void 0 : a.filter_value, !(l && c && "string" === typeof c && c.includes(Z))) {
                                                            e.next = 16;
                                                            break
                                                        }
                                                        return c = null === l || void 0 === l || null === (p = l.data) || void 0 === p ? void 0 : p[c.replace(Z, "")], e.next = 14, K(o.integration).getData(i, (0, I.Z)((0, b.Z)({}, s[r]), {
                                                            metadata: (0, I.Z)((0, b.Z)({}, s[r].metadata), {
                                                                filter_value: c
                                                            })
                                                        }));
                                                    case 14:
                                                        v = e.sent, s[r] = (0, I.Z)((0, b.Z)({}, s[r]), {
                                                            data: null === v || void 0 === v ? void 0 : v.data,
                                                            hasMore: null === v || void 0 === v ? void 0 : v.has_more,
                                                            nextCursor: null === v || void 0 === v ? void 0 : v.next_cursor,
                                                            expiresAt: null === v || void 0 === v ? void 0 : v.expires_at,
                                                            metadata: (0, I.Z)((0, b.Z)({}, s[r].metadata), {
                                                                filter_value: c
                                                            })
                                                        });
                                                    case 16:
                                                        e.next = 20;
                                                        break;
                                                    case 18:
                                                        e.prev = 18, e.t0 = e.catch(2);
                                                    case 20:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [2, 18]
                                            ])
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 5:
                                    return d = te(s, a, u, T.Z, n), e.abrupt("return", [d, s]);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function(e, t, n) {
                    var i = (0, b.Z)({}, n);
                    if (Y.W_.isElement(i))
                        if ("rich_text_content" === i.type) {
                            var o = t.content,
                                a = e[o];
                            try {
                                var l, u = null === a || void 0 === a || null === (l = a[0]) || void 0 === l ? void 0 : l.children;
                                u && (i.children = u)
                            } catch (r) {}
                        } else i.children = i.children.map((function(n) {
                            return ne(e, t, n)
                        }));
                    return i
                }),
                ie = function(e, t, n, i, r, o) {
                    var a = (0, I.Z)((0, b.Z)({}, o), {
                        id: o.id || r()
                    });
                    return e && t.contentSchema && (a = $(e, t.contentSchema, n, i, o), a = ne(e, t.pageSchema, a)), a
                },
                re = (function() {
                    var e = (0, E.Z)(C().mark((function e(t) {
                        var n, i, r, o, a, l, u, s, d, c, v, p;
                        return C().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.content, i = t.spaceID, r = t.pageID, o = t.spaceRoutes, a = t.itemPageData, l = t.childTemplateSlug, c = w(o), e.next = 5, null === (u = K(a.integration)) || void 0 === u ? void 0 : u.getDataBySlug(i, a, l);
                                case 5:
                                    return v = e.sent, p = ie(null === v || void 0 === v || null === (s = v.data) || void 0 === s ? void 0 : s[0], a, r, c[r], T.Z, n), e.abrupt("return", [p, (0, I.Z)((0, b.Z)({}, a), {
                                        data: null === v || void 0 === v || null === (d = v.data) || void 0 === d ? void 0 : d[0],
                                        expiresAt: v.expires_at
                                    })]);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), n(49597)),
                oe = n(40093),
                ae = n(17357);

            function le(e) {
                var t, n, i, r, o, a, l = e.collectionID,
                    u = e.children,
                    s = (0, g.useContext)(R.z),
                    d = (0, g.useContext)(ae.u),
                    c = null === s || void 0 === s || null === (t = s.customization) || void 0 === t || null === (n = t.collection_data) || void 0 === n ? void 0 : n[l],
                    v = null === c || void 0 === c || null === (i = c.metadata) || void 0 === i ? void 0 : i.visitor_filter_column,
                    p = (0, g.useState)([]),
                    _ = p[0],
                    m = p[1],
                    h = (0, g.useState)(""),
                    y = h[0],
                    x = h[1],
                    D = (0, g.useState)(O.k),
                    Z = D[0],
                    S = D[1],
                    k = {
                        hasMore: null === c || void 0 === c ? void 0 : c.hasMore,
                        nextCursor: null === c || void 0 === c ? void 0 : c.nextCursor,
                        fetchedCursor: null === c || void 0 === c ? void 0 : c.fetchedCursor,
                        data: null === c || void 0 === c ? void 0 : c.data,
                        searchQuery: "",
                        selectedVisitorFilter: O.k,
                        initiated: !1
                    },
                    M = (0, g.useState)(k),
                    L = M[0],
                    W = M[1],
                    q = (0, g.useState)(!1),
                    P = q[0],
                    U = q[1],
                    F = (0, g.useCallback)((function(e) {
                        var t, n, i;
                        W(e);
                        var r = null === (t = d.customization) || void 0 === t ? void 0 : t.collection_item_data,
                            o = (0, I.Z)((0, b.Z)({}, null === (n = s.customization) || void 0 === n ? void 0 : n.collection_data), (0, A.Z)({}, l, (0, b.Z)({}, c, e)));
                        if (o && r && (null === (i = s.published_content[0]) || void 0 === i ? void 0 : i.children)) {
                            var a = w(d.routes),
                                u = te(o, r, a, T.Z, s.published_content[0], l);
                            s.setPublishedContent([u])
                        }
                    }), [c, l, s, null === (r = d.customization) || void 0 === r ? void 0 : r.collection_item_data, d.routes]),
                    V = (0, g.useCallback)(function() {
                        var e = (0, E.Z)(C().mark((function e(t) {
                            var n, i;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = K(c.integration), e.next = 3, n.getColumnSelectOptions(d.id, t, c);
                                    case 3:
                                        i = e.sent, m(i);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [c, d.id]),
                    B = (0, g.useCallback)(function() {
                        var e = (0, E.Z)(C().mark((function e(t) {
                            var n, i, r, o, a, l, u;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (c) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (n = K(c.integration), i = t ? void 0 : L.nextCursor, r = t ? [] : L.data || [], !n.tableConnected(c)) {
                                            e.next = 17;
                                            break
                                        }
                                        return U(!0), e.next = 9, n.getColumnNames(d.id, c);
                                    case 9:
                                        return o = e.sent, a = JSON.parse(JSON.stringify(c)), e.next = 13, n.getDataWithSearchQueryAndFilter(d.id, y && "" !== y ? (0, re.Z)(a, "metadata.max_items") : a, y, o, i || void 0, v && Z !== O.k ? Z : void 0);
                                    case 13:
                                        l = e.sent, u = {
                                            hasMore: null === l || void 0 === l ? void 0 : l.has_more,
                                            nextCursor: null === l || void 0 === l ? void 0 : l.next_cursor,
                                            fetchedCursor: i,
                                            data: (0, N.Z)(r).concat((0, N.Z)((null === l || void 0 === l ? void 0 : l.data) || [])),
                                            searchQuery: y,
                                            selectedVisitorFilter: Z,
                                            initiated: !0
                                        }, F(u), U(!1);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [L, c, d.id, F, Z, v, y]);
                L.initiated || ((null === c || void 0 === c || null === (o = c.metadata) || void 0 === o ? void 0 : o.visitor_filter_column) && V(c.metadata.visitor_filter_column), (null === c || void 0 === c ? void 0 : c.expiresAt) && (new Date).getTime() > ((null === (a = new Date(null === c || void 0 === c ? void 0 : c.expiresAt)) || void 0 === a ? void 0 : a.getTime()) || 0) - 1e4 ? W({
                    hasMore: void 0,
                    nextCursor: void 0,
                    fetchedCursor: "-1",
                    data: null === c || void 0 === c ? void 0 : c.data,
                    searchQuery: "",
                    selectedVisitorFilter: O.k,
                    initiated: !0
                }) : W({
                    hasMore: null === c || void 0 === c ? void 0 : c.hasMore,
                    nextCursor: null === c || void 0 === c ? void 0 : c.nextCursor,
                    fetchedCursor: null === c || void 0 === c ? void 0 : c.fetchedCursor,
                    data: null === c || void 0 === c ? void 0 : c.data,
                    searchQuery: "",
                    selectedVisitorFilter: O.k,
                    initiated: !0
                }));
                (0, g.useEffect)((function() {
                    "-1" === (null === L || void 0 === L ? void 0 : L.fetchedCursor) && B(!0)
                }), [null === L || void 0 === L ? void 0 : L.fetchedCursor, B]), (0, g.useEffect)((function() {
                    "-1" === (null === L || void 0 === L ? void 0 : L.fetchedCursor) || L.searchQuery === y && L.selectedVisitorFilter === Z || B(!0)
                }), [L, B, Z, y]);
                var j = (0, g.useMemo)((function() {
                    return {
                        collectionData: (0, b.Z)({
                            integration: null === c || void 0 === c ? void 0 : c.integration,
                            metadata: null === c || void 0 === c ? void 0 : c.metadata
                        }, L),
                        fetchMore: B,
                        loading: P,
                        visitorFilterList: _,
                        selectedVisitorFilter: Z,
                        setSelectedVisitorFilter: S,
                        searchQuery: y,
                        setSearchQuery: x
                    }
                }), [null === c || void 0 === c ? void 0 : c.integration, null === c || void 0 === c ? void 0 : c.metadata, L, B, P, _, Z, S, y, x]);
                return (0, f.jsx)(oe.W.Provider, {
                    value: j,
                    children: u
                })
            }
            var ue = n(32839),
                se = function() {
                    function e() {
                        (0, P.Z)(this, e)
                    }
                    return e.submit = function(e, t) {
                        return (0, E.Z)(C().mark((function n() {
                            var i, r, o;
                            return C().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i = "/form/submission/".concat(e), r = new U.Z, n.next = 4, r.post(i, t);
                                    case 4:
                                        return o = n.sent, n.abrupt("return", o);
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, e
                }(),
                de = se;

            function ce(e) {
                var t = e.isChildTemplate,
                    n = e.childTemplateSlug,
                    i = (0, g.useContext)(R.z);
                return function(e) {
                    var t, n = e.isChildTemplate,
                        i = e.childTemplateSlug,
                        r = (0, g.useContext)(ae.u),
                        o = (0, g.useContext)(R.z),
                        a = null === o || void 0 === o || null === (t = o.customization) || void 0 === t ? void 0 : t.item_page_data,
                        l = (0, g.useCallback)((0, E.Z)(C().mark((function e() {
                            var t, n, l, u, s;
                            return C().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(a && o && (null === r || void 0 === r ? void 0 : r.routes) && i)) {
                                            e.next = 8;
                                            break
                                        }
                                        return l = w(r.routes), e.next = 5, null === (t = K(null === a || void 0 === a ? void 0 : a.integration)) || void 0 === t ? void 0 : t.getDataBySlug(null === r || void 0 === r ? void 0 : r.id, a, i);
                                    case 5:
                                        u = e.sent, s = ie(null === u || void 0 === u || null === (n = u.data) || void 0 === n ? void 0 : n[0], a, o.id, l[o.id], T.Z, o.published_content[0]), o.setPublishedContent([s]);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [a, o, null === r || void 0 === r ? void 0 : r.routes, null === r || void 0 === r ? void 0 : r.id, i]);
                    (0, g.useEffect)((function() {
                        var e;
                        n && i && (null === a || void 0 === a ? void 0 : a.expiresAt) && (new Date).getTime() > (null === (e = new Date(null === a || void 0 === a ? void 0 : a.expiresAt)) || void 0 === e ? void 0 : e.getTime()) - 1e4 && l()
                    }), [null === a || void 0 === a ? void 0 : a.expiresAt, i, n])
                }({
                    isChildTemplate: t,
                    childTemplateSlug: n
                }), (0, f.jsx)(y.e, {
                    node: i.published_content[0],
                    optimizedImageComponent: h(),
                    collectionProviderComponent: le,
                    isImageOptimizable: ue.q,
                    handleFormSubmission: de.submit,
                    rootClassName: "typedream content"
                })
            }
            ce.defaultProps = {
                childTemplateSlug: void 0
            }
        },
        92646: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return s
                },
                z: function() {
                    return u
                }
            });
            var i = n(70865),
                r = n(96670),
                o = n(52322),
                a = n(32957),
                l = n(2784),
                u = (0, l.createContext)(null);

            function s(e) {
                var t = e.page,
                    n = e.children,
                    s = (0, l.useState)(t),
                    d = s[0],
                    c = s[1];
                (0, l.useEffect)((function() {
                    t.id === d.id && ((0, a.Z)(t, d) || d.modified) || c(t)
                }), [t]);
                var v = (0, l.useMemo)((function() {
                    return (0, r.Z)((0, i.Z)({}, d), {
                        setPublishedContent: function(e) {
                            c((0, r.Z)((0, i.Z)({}, d), {
                                published_content: e,
                                modified: !0
                            }))
                        }
                    })
                }), [d]);
                return (0, o.jsx)(u.Provider, {
                    value: v,
                    children: n
                })
            }
        },
        17357: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return o
                },
                u: function() {
                    return r
                }
            });
            var i = n(52322),
                r = (0, n(2784).createContext)(null);

            function o(e) {
                var t = e.space,
                    n = e.children;
                return (0, i.jsx)(r.Provider, {
                    value: t,
                    children: n
                })
            }
        }
    }
]);