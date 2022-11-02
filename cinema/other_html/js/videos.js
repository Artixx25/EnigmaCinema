"object" == typeof navigator && function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var n = function(e) {
            return e && e.Math == Math && e
        },
        r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
        i = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        o = !i((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        a = {}.propertyIsEnumerable,
        s = Object.getOwnPropertyDescriptor,
        c = {
            f: s && !a.call({
                1: 2
            }, 1) ? function(e) {
                var t = s(this, e);
                return !!t && t.enumerable
            } : a
        },
        u = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        l = {}.toString,
        f = function(e) {
            return l.call(e).slice(8, -1)
        },
        h = "".split,
        p = i((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == f(e) ? h.call(e, "") : Object(e)
        } : Object,
        d = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        g = function(e) {
            return p(d(e))
        },
        m = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        v = function(e, t) {
            if (!m(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !m(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !m(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !m(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        y = {}.hasOwnProperty,
        b = function(e, t) {
            return y.call(e, t)
        },
        w = r.document,
        _ = m(w) && m(w.createElement),
        E = function(e) {
            return _ ? w.createElement(e) : {}
        },
        S = !o && !i((function() {
            return 7 != Object.defineProperty(E("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        k = Object.getOwnPropertyDescriptor,
        T = {
            f: o ? k : function(e, t) {
                if (e = g(e), t = v(t, !0), S) try {
                    return k(e, t)
                } catch (e) {}
                if (b(e, t)) return u(!c.f.call(e, t), e[t])
            }
        },
        x = function(e) {
            if (!m(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        A = Object.defineProperty,
        O = {
            f: o ? A : function(e, t, n) {
                if (x(e), t = v(t, !0), x(n), S) try {
                    return A(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        I = o ? function(e, t, n) {
            return O.f(e, t, u(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        C = function(e, t) {
            try {
                I(r, e, t)
            } catch (n) {
                r[e] = t
            }
            return t
        },
        P = "__core-js_shared__",
        j = r[P] || C(P, {}),
        R = Function.toString;
    "function" != typeof j.inspectSource && (j.inspectSource = function(e) {
        return R.call(e)
    });
    var L, N, M, U = j.inspectSource,
        D = r.WeakMap,
        F = "function" == typeof D && /native code/.test(U(D)),
        q = t((function(e) {
            (e.exports = function(e, t) {
                return j[e] || (j[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        B = 0,
        H = Math.random(),
        V = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++B + H).toString(36)
        },
        W = q("keys"),
        z = function(e) {
            return W[e] || (W[e] = V(e))
        },
        Y = {},
        $ = r.WeakMap;
    if (F) {
        var G = new $,
            K = G.get,
            X = G.has,
            J = G.set;
        L = function(e, t) {
            return J.call(G, e, t), t
        }, N = function(e) {
            return K.call(G, e) || {}
        }, M = function(e) {
            return X.call(G, e)
        }
    } else {
        var Q = z("state");
        Y[Q] = !0, L = function(e, t) {
            return I(e, Q, t), t
        }, N = function(e) {
            return b(e, Q) ? e[Q] : {}
        }, M = function(e) {
            return b(e, Q)
        }
    }
    var Z = {
            set: L,
            get: N,
            has: M,
            enforce: function(e) {
                return M(e) ? N(e) : L(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!m(t) || (n = N(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        ee = t((function(e) {
            var t = Z.get,
                n = Z.enforce,
                i = String(String).split("String");
            (e.exports = function(e, t, o, a) {
                var s = !!a && !!a.unsafe,
                    c = !!a && !!a.enumerable,
                    u = !!a && !!a.noTargetGet;
                "function" == typeof o && ("string" != typeof t || b(o, "name") || I(o, "name", t), n(o).source = i.join("string" == typeof t ? t : "")), e !== r ? (s ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = o : I(e, t, o)) : c ? e[t] = o : C(t, o)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && t(this).source || U(this)
            }))
        })),
        te = r,
        ne = function(e) {
            return "function" == typeof e ? e : void 0
        },
        re = function(e, t) {
            return arguments.length < 2 ? ne(te[e]) || ne(r[e]) : te[e] && te[e][t] || r[e] && r[e][t]
        },
        ie = Math.ceil,
        oe = Math.floor,
        ae = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? oe : ie)(e)
        },
        se = Math.min,
        ce = function(e) {
            return e > 0 ? se(ae(e), 9007199254740991) : 0
        },
        ue = Math.max,
        le = Math.min,
        fe = function(e, t) {
            var n = ae(e);
            return n < 0 ? ue(n + t, 0) : le(n, t)
        },
        he = function(e) {
            return function(t, n, r) {
                var i, o = g(t),
                    a = ce(o.length),
                    s = fe(r, a);
                if (e && n != n) {
                    for (; a > s;)
                        if ((i = o[s++]) != i) return !0
                } else
                    for (; a > s; s++)
                        if ((e || s in o) && o[s] === n) return e || s || 0; return !e && -1
            }
        },
        pe = {
            includes: he(!0),
            indexOf: he(!1)
        },
        de = pe.indexOf,
        ge = function(e, t) {
            var n, r = g(e),
                i = 0,
                o = [];
            for (n in r) !b(Y, n) && b(r, n) && o.push(n);
            for (; t.length > i;) b(r, n = t[i++]) && (~de(o, n) || o.push(n));
            return o
        },
        me = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ve = me.concat("length", "prototype"),
        ye = {
            f: Object.getOwnPropertyNames || function(e) {
                return ge(e, ve)
            }
        },
        be = {
            f: Object.getOwnPropertySymbols
        },
        we = re("Reflect", "ownKeys") || function(e) {
            var t = ye.f(x(e)),
                n = be.f;
            return n ? t.concat(n(e)) : t
        },
        _e = function(e, t) {
            for (var n = we(t), r = O.f, i = T.f, o = 0; o < n.length; o++) {
                var a = n[o];
                b(e, a) || r(e, a, i(t, a))
            }
        },
        Ee = /#|\.prototype\./,
        Se = function(e, t) {
            var n = Te[ke(e)];
            return n == Ae || n != xe && ("function" == typeof t ? i(t) : !!t)
        },
        ke = Se.normalize = function(e) {
            return String(e).replace(Ee, ".").toLowerCase()
        },
        Te = Se.data = {},
        xe = Se.NATIVE = "N",
        Ae = Se.POLYFILL = "P",
        Oe = Se,
        Ie = T.f,
        Ce = function(e, t) {
            var n, i, o, a, s, c = e.target,
                u = e.global,
                l = e.stat;
            if (n = u ? r : l ? r[c] || C(c, {}) : (r[c] || {}).prototype)
                for (i in t) {
                    if (a = t[i], o = e.noTargetGet ? (s = Ie(n, i)) && s.value : n[i], !Oe(u ? i : c + (l ? "." : "#") + i, e.forced) && void 0 !== o) {
                        if (typeof a == typeof o) continue;
                        _e(a, o)
                    }(e.sham || o && o.sham) && I(a, "sham", !0), ee(n, i, a, e)
                }
        },
        Pe = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        je = function(e, t, n) {
            if (Pe(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        Re = function(e) {
            return Object(d(e))
        },
        Le = Array.isArray || function(e) {
            return "Array" == f(e)
        },
        Ne = !!Object.getOwnPropertySymbols && !i((function() {
            return !String(Symbol())
        })),
        Me = Ne && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ue = q("wks"),
        De = r.Symbol,
        Fe = Me ? De : De && De.withoutSetter || V,
        qe = function(e) {
            return b(Ue, e) || (Ne && b(De, e) ? Ue[e] = De[e] : Ue[e] = Fe("Symbol." + e)), Ue[e]
        },
        Be = qe("species"),
        He = function(e, t) {
            var n;
            return Le(e) && ("function" != typeof(n = e.constructor) || n !== Array && !Le(n.prototype) ? m(n) && null === (n = n[Be]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        Ve = [].push,
        We = function(e) {
            var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                i = 4 == e,
                o = 6 == e,
                a = 5 == e || o;
            return function(s, c, u, l) {
                for (var f, h, d = Re(s), g = p(d), m = je(c, u, 3), v = ce(g.length), y = 0, b = l || He, w = t ? b(s, v) : n ? b(s, 0) : void 0; v > y; y++)
                    if ((a || y in g) && (h = m(f = g[y], y, d), e))
                        if (t) w[y] = h;
                        else if (h) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return y;
                    case 2:
                        Ve.call(w, f)
                } else if (i) return !1;
                return o ? -1 : r || i ? i : w
            }
        },
        ze = {
            forEach: We(0),
            map: We(1),
            filter: We(2),
            some: We(3),
            every: We(4),
            find: We(5),
            findIndex: We(6)
        },
        Ye = function(e, t) {
            var n = [][e];
            return !!n && i((function() {
                n.call(null, t || function() {
                    throw 1
                }, 1)
            }))
        },
        $e = Object.defineProperty,
        Ge = {},
        Ke = function(e) {
            throw e
        },
        Xe = function(e, t) {
            if (b(Ge, e)) return Ge[e];
            t || (t = {});
            var n = [][e],
                r = !!b(t, "ACCESSORS") && t.ACCESSORS,
                a = b(t, 0) ? t[0] : Ke,
                s = b(t, 1) ? t[1] : void 0;
            return Ge[e] = !!n && !i((function() {
                if (r && !o) return !0;
                var e = {
                    length: -1
                };
                r ? $e(e, 1, {
                    enumerable: !0,
                    get: Ke
                }) : e[1] = 1, n.call(e, a, s)
            }))
        },
        Je = ze.forEach,
        Qe = Ye("forEach"),
        Ze = Xe("forEach"),
        et = Qe && Ze ? [].forEach : function(e) {
            return Je(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    Ce({
        target: "Array",
        proto: !0,
        forced: [].forEach != et
    }, {
        forEach: et
    });
    var tt = function(e, t, n, r) {
            try {
                return r ? t(x(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && x(i.call(e)), t
            }
        },
        nt = {},
        rt = qe("iterator"),
        it = Array.prototype,
        ot = function(e) {
            return void 0 !== e && (nt.Array === e || it[rt] === e)
        },
        at = function(e, t, n) {
            var r = v(t);
            r in e ? O.f(e, r, u(0, n)) : e[r] = n
        },
        st = {};
    st[qe("toStringTag")] = "z";
    var ct = "[object z]" === String(st),
        ut = qe("toStringTag"),
        lt = "Arguments" == f(function() {
            return arguments
        }()),
        ft = ct ? f : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), ut)) ? n : lt ? f(t) : "Object" == (r = f(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        ht = qe("iterator"),
        pt = function(e) {
            if (null != e) return e[ht] || e["@@iterator"] || nt[ft(e)]
        },
        dt = function(e) {
            var t, n, r, i, o, a, s = Re(e),
                c = "function" == typeof this ? this : Array,
                u = arguments.length,
                l = u > 1 ? arguments[1] : void 0,
                f = void 0 !== l,
                h = pt(s),
                p = 0;
            if (f && (l = je(l, u > 2 ? arguments[2] : void 0, 2)), null == h || c == Array && ot(h))
                for (n = new c(t = ce(s.length)); t > p; p++) a = f ? l(s[p], p) : s[p], at(n, p, a);
            else
                for (o = (i = h.call(s)).next, n = new c; !(r = o.call(i)).done; p++) a = f ? tt(i, l, [r.value, p], !0) : r.value, at(n, p, a);
            return n.length = p, n
        },
        gt = qe("iterator"),
        mt = !1;
    try {
        var vt = 0,
            yt = {
                next: function() {
                    return {
                        done: !!vt++
                    }
                },
                return: function() {
                    mt = !0
                }
            };
        yt[gt] = function() {
            return this
        }, Array.from(yt, (function() {
            throw 2
        }))
    } catch (e) {}
    var bt = function(e, t) {
            if (!t && !mt) return !1;
            var n = !1;
            try {
                var r = {};
                r[gt] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(r)
            } catch (e) {}
            return n
        },
        wt = !bt((function(e) {
            Array.from(e)
        }));
    Ce({
        target: "Array",
        stat: !0,
        forced: wt
    }, {
        from: dt
    });
    var _t, Et = Object.keys || function(e) {
            return ge(e, me)
        },
        St = o ? Object.defineProperties : function(e, t) {
            x(e);
            for (var n, r = Et(t), i = r.length, o = 0; i > o;) O.f(e, n = r[o++], t[n]);
            return e
        },
        kt = re("document", "documentElement"),
        Tt = z("IE_PROTO"),
        xt = function() {},
        At = function(e) {
            return "<script>" + e + "</" + "script>"
        },
        Ot = function() {
            try {
                _t = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            Ot = _t ? function(e) {
                e.write(At("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(_t) : ((t = E("iframe")).style.display = "none", kt.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(At("document.F=Object")), e.close(), e.F);
            for (var n = me.length; n--;) delete Ot.prototype[me[n]];
            return Ot()
        };
    Y[Tt] = !0;
    var It = Object.create || function(e, t) {
            var n;
            return null !== e ? (xt.prototype = x(e), n = new xt, xt.prototype = null, n[Tt] = e) : n = Ot(), void 0 === t ? n : St(n, t)
        },
        Ct = qe("unscopables"),
        Pt = Array.prototype;
    null == Pt[Ct] && O.f(Pt, Ct, {
        configurable: !0,
        value: It(null)
    });
    var jt = function(e) {
            Pt[Ct][e] = !0
        },
        Rt = pe.includes,
        Lt = Xe("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    Ce({
        target: "Array",
        proto: !0,
        forced: !Lt
    }, {
        includes: function(e) {
            return Rt(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), jt("includes");
    var Nt, Mt, Ut = re("navigator", "userAgent") || "",
        Dt = r.process,
        Ft = Dt && Dt.versions,
        qt = Ft && Ft.v8;
    qt ? Mt = (Nt = qt.split("."))[0] + Nt[1] : Ut && (!(Nt = Ut.match(/Edge\/(\d+)/)) || Nt[1] >= 74) && (Nt = Ut.match(/Chrome\/(\d+)/)) && (Mt = Nt[1]);
    var Bt = Mt && +Mt,
        Ht = qe("species"),
        Vt = function(e) {
            return Bt >= 51 || !i((function() {
                var t = [];
                return (t.constructor = {})[Ht] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            }))
        },
        Wt = ze.map,
        zt = Vt("map"),
        Yt = Xe("map");
    Ce({
        target: "Array",
        proto: !0,
        forced: !zt || !Yt
    }, {
        map: function(e) {
            return Wt(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var $t = i((function() {
        Et(1)
    }));
    Ce({
        target: "Object",
        stat: !0,
        forced: $t
    }, {
        keys: function(e) {
            return Et(Re(e))
        }
    });
    var Gt = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function(n, r) {
                return x(n),
                    function(e) {
                        if (!m(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(r), t ? e.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        Kt = function(e, t, n) {
            var r, i;
            return Gt && "function" == typeof(r = t.constructor) && r !== n && m(i = r.prototype) && i !== n.prototype && Gt(e, i), e
        },
        Xt = qe("match"),
        Jt = function(e) {
            var t;
            return m(e) && (void 0 !== (t = e[Xt]) ? !!t : "RegExp" == f(e))
        },
        Qt = function() {
            var e = x(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        };

    function Zt(e, t) {
        return RegExp(e, t)
    }
    var en = {
            UNSUPPORTED_Y: i((function() {
                var e = Zt("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })),
            BROKEN_CARET: i((function() {
                var e = Zt("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        tn = qe("species"),
        nn = function(e) {
            var t = re(e),
                n = O.f;
            o && t && !t[tn] && n(t, tn, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        rn = O.f,
        on = ye.f,
        an = Z.set,
        sn = qe("match"),
        cn = r.RegExp,
        un = cn.prototype,
        ln = /a/g,
        fn = /a/g,
        hn = new cn(ln) !== ln,
        pn = en.UNSUPPORTED_Y;
    if (o && Oe("RegExp", !hn || pn || i((function() {
            return fn[sn] = !1, cn(ln) != ln || cn(fn) == fn || "/a/i" != cn(ln, "i")
        })))) {
        for (var dn = function(e, t) {
                var n, r = this instanceof dn,
                    i = Jt(e),
                    o = void 0 === t;
                if (!r && i && e.constructor === dn && o) return e;
                hn ? i && !o && (e = e.source) : e instanceof dn && (o && (t = Qt.call(e)), e = e.source), pn && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                var a = Kt(hn ? new cn(e, t) : cn(e, t), r ? this : un, dn);
                return pn && n && an(a, {
                    sticky: n
                }), a
            }, gn = function(e) {
                e in dn || rn(dn, e, {
                    configurable: !0,
                    get: function() {
                        return cn[e]
                    },
                    set: function(t) {
                        cn[e] = t
                    }
                })
            }, mn = on(cn), vn = 0; mn.length > vn;) gn(mn[vn++]);
        un.constructor = dn, dn.prototype = un, ee(r, "RegExp", dn)
    }
    nn("RegExp");
    var yn = RegExp.prototype.exec,
        bn = String.prototype.replace,
        wn = yn,
        _n = function() {
            var e = /a/,
                t = /b*/g;
            return yn.call(e, "a"), yn.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        }(),
        En = en.UNSUPPORTED_Y || en.BROKEN_CARET,
        Sn = void 0 !== /()??/.exec("")[1];
    (_n || Sn || En) && (wn = function(e) {
        var t, n, r, i, o = this,
            a = En && o.sticky,
            s = Qt.call(o),
            c = o.source,
            u = 0,
            l = e;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), l = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (c = "(?: " + c + ")", l = " " + l, u++), n = new RegExp("^(?:" + c + ")", s)), Sn && (n = new RegExp("^" + c + "$(?!\\s)", s)), _n && (t = o.lastIndex), r = yn.call(a ? n : o, l), a ? r ? (r.input = r.input.slice(u), r[0] = r[0].slice(u), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : _n && r && (o.lastIndex = o.global ? r.index + r[0].length : t), Sn && r && r.length > 1 && bn.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    });
    var kn = wn;
    Ce({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== kn
    }, {
        exec: kn
    });
    var Tn = "toString",
        xn = RegExp.prototype,
        An = xn.toString,
        On = i((function() {
            return "/a/b" != An.call({
                source: "a",
                flags: "b"
            })
        })),
        In = An.name != Tn;
    (On || In) && ee(RegExp.prototype, Tn, (function() {
        var e = x(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in xn) ? Qt.call(e) : n)
    }), {
        unsafe: !0
    });
    var Cn = function(e) {
            if (Jt(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        },
        Pn = qe("match");
    Ce({
        target: "String",
        proto: !0,
        forced: ! function(e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[Pn] = !1, "/./" [e](t)
                } catch (e) {}
            }
            return !1
        }("includes")
    }, {
        includes: function(e) {
            return !!~String(d(this)).indexOf(Cn(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var jn, Rn, Ln, Nn = function(e) {
            return function(t, n) {
                var r, i, o = String(d(t)),
                    a = ae(n),
                    s = o.length;
                return a < 0 || a >= s ? e ? "" : void 0 : (r = o.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : i - 56320 + (r - 55296 << 10) + 65536
            }
        },
        Mn = {
            codeAt: Nn(!1),
            charAt: Nn(!0)
        },
        Un = !i((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        Dn = z("IE_PROTO"),
        Fn = Object.prototype,
        qn = Un ? Object.getPrototypeOf : function(e) {
            return e = Re(e), b(e, Dn) ? e[Dn] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Fn : null
        },
        Bn = qe("iterator"),
        Hn = !1;
    [].keys && ("next" in (Ln = [].keys()) ? (Rn = qn(qn(Ln))) !== Object.prototype && (jn = Rn) : Hn = !0), null == jn && (jn = {}), b(jn, Bn) || I(jn, Bn, (function() {
        return this
    }));
    var Vn = {
            IteratorPrototype: jn,
            BUGGY_SAFARI_ITERATORS: Hn
        },
        Wn = O.f,
        zn = qe("toStringTag"),
        Yn = function(e, t, n) {
            e && !b(e = n ? e : e.prototype, zn) && Wn(e, zn, {
                configurable: !0,
                value: t
            })
        },
        $n = Vn.IteratorPrototype,
        Gn = function() {
            return this
        },
        Kn = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = It($n, {
                next: u(1, n)
            }), Yn(e, r, !1), nt[r] = Gn, e
        },
        Xn = Vn.IteratorPrototype,
        Jn = Vn.BUGGY_SAFARI_ITERATORS,
        Qn = qe("iterator"),
        Zn = "keys",
        er = "values",
        tr = "entries",
        nr = function() {
            return this
        },
        rr = function(e, t, n, r, i, o, a) {
            Kn(n, t, r);
            var s, c, u, l = function(e) {
                    if (e === i && g) return g;
                    if (!Jn && e in p) return p[e];
                    switch (e) {
                        case Zn:
                        case er:
                        case tr:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                f = t + " Iterator",
                h = !1,
                p = e.prototype,
                d = p[Qn] || p["@@iterator"] || i && p[i],
                g = !Jn && d || l(i),
                m = "Array" == t && p.entries || d;
            if (m && (s = qn(m.call(new e)), Xn !== Object.prototype && s.next && (qn(s) !== Xn && (Gt ? Gt(s, Xn) : "function" != typeof s[Qn] && I(s, Qn, nr)), Yn(s, f, !0))), i == er && d && d.name !== er && (h = !0, g = function() {
                    return d.call(this)
                }), p[Qn] !== g && I(p, Qn, g), nt[t] = g, i)
                if (c = {
                        values: l(er),
                        keys: o ? g : l(Zn),
                        entries: l(tr)
                    }, a)
                    for (u in c)(Jn || h || !(u in p)) && ee(p, u, c[u]);
                else Ce({
                    target: t,
                    proto: !0,
                    forced: Jn || h
                }, c);
            return c
        },
        ir = Mn.charAt,
        or = "String Iterator",
        ar = Z.set,
        sr = Z.getterFor(or);
    rr(String, "String", (function(e) {
        ar(this, {
            type: or,
            string: String(e),
            index: 0
        })
    }), (function() {
        var e, t = sr(this),
            n = t.string,
            r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = ir(n, r), t.index += e.length, {
            value: e,
            done: !1
        })
    }));
    var cr = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var ur in cr) {
        var lr = r[ur],
            fr = lr && lr.prototype;
        if (fr && fr.forEach !== et) try {
            I(fr, "forEach", et)
        } catch (e) {
            fr.forEach = et
        }
    }
    var hr = document.getElementById("container"),
        pr = "tab-focus";
    document.addEventListener("focusout", (function(e) {
            e.target.classList && !hr.contains(e.target) && e.target.classList.remove(pr)
        })), document.addEventListener("keydown", (function(e) {
            9 === e.keyCode && setTimeout((function() {
                var e = document.activeElement;
                e && e.classList && !hr.contains(e) && e.classList.add(pr)
            }), 10)
        })),
        function() {
            if ("undefined" != typeof window) try {
                var e = new window.CustomEvent("test", {
                    cancelable: !0
                });
                if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default")
            } catch (e) {
                var t = function(e, t) {
                    var n, r;
                    return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r = n.preventDefault, n.preventDefault = function() {
                        r.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }, n
                };
                t.prototype = window.Event.prototype, window.CustomEvent = t
            }
        }();
    var dr = ye.f,
        gr = {}.toString,
        mr = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        vr = {
            f: function(e) {
                return mr && "[object Window]" == gr.call(e) ? function(e) {
                    try {
                        return dr(e)
                    } catch (e) {
                        return mr.slice()
                    }
                }(e) : dr(g(e))
            }
        },
        yr = {
            f: qe
        },
        br = O.f,
        wr = function(e) {
            var t = te.Symbol || (te.Symbol = {});
            b(t, e) || br(t, e, {
                value: yr.f(e)
            })
        },
        _r = ze.forEach,
        Er = z("hidden"),
        Sr = "Symbol",
        kr = qe("toPrimitive"),
        Tr = Z.set,
        xr = Z.getterFor(Sr),
        Ar = Object.prototype,
        Or = r.Symbol,
        Ir = re("JSON", "stringify"),
        Cr = T.f,
        Pr = O.f,
        jr = vr.f,
        Rr = c.f,
        Lr = q("symbols"),
        Nr = q("op-symbols"),
        Mr = q("string-to-symbol-registry"),
        Ur = q("symbol-to-string-registry"),
        Dr = q("wks"),
        Fr = r.QObject,
        qr = !Fr || !Fr.prototype || !Fr.prototype.findChild,
        Br = o && i((function() {
            return 7 != It(Pr({}, "a", {
                get: function() {
                    return Pr(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(e, t, n) {
            var r = Cr(Ar, t);
            r && delete Ar[t], Pr(e, t, n), r && e !== Ar && Pr(Ar, t, r)
        } : Pr,
        Hr = function(e, t) {
            var n = Lr[e] = It(Or.prototype);
            return Tr(n, {
                type: Sr,
                tag: e,
                description: t
            }), o || (n.description = t), n
        },
        Vr = Me ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof Or
        },
        Wr = function(e, t, n) {
            e === Ar && Wr(Nr, t, n), x(e);
            var r = v(t, !0);
            return x(n), b(Lr, r) ? (n.enumerable ? (b(e, Er) && e[Er][r] && (e[Er][r] = !1), n = It(n, {
                enumerable: u(0, !1)
            })) : (b(e, Er) || Pr(e, Er, u(1, {})), e[Er][r] = !0), Br(e, r, n)) : Pr(e, r, n)
        },
        zr = function(e, t) {
            x(e);
            var n = g(t),
                r = Et(n).concat(Kr(n));
            return _r(r, (function(t) {
                o && !Yr.call(n, t) || Wr(e, t, n[t])
            })), e
        },
        Yr = function(e) {
            var t = v(e, !0),
                n = Rr.call(this, t);
            return !(this === Ar && b(Lr, t) && !b(Nr, t)) && (!(n || !b(this, t) || !b(Lr, t) || b(this, Er) && this[Er][t]) || n)
        },
        $r = function(e, t) {
            var n = g(e),
                r = v(t, !0);
            if (n !== Ar || !b(Lr, r) || b(Nr, r)) {
                var i = Cr(n, r);
                return !i || !b(Lr, r) || b(n, Er) && n[Er][r] || (i.enumerable = !0), i
            }
        },
        Gr = function(e) {
            var t = jr(g(e)),
                n = [];
            return _r(t, (function(e) {
                b(Lr, e) || b(Y, e) || n.push(e)
            })), n
        },
        Kr = function(e) {
            var t = e === Ar,
                n = jr(t ? Nr : g(e)),
                r = [];
            return _r(n, (function(e) {
                !b(Lr, e) || t && !b(Ar, e) || r.push(Lr[e])
            })), r
        };
    if (Ne || (ee((Or = function() {
            if (this instanceof Or) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = V(e),
                n = function(e) {
                    this === Ar && n.call(Nr, e), b(this, Er) && b(this[Er], t) && (this[Er][t] = !1), Br(this, t, u(1, e))
                };
            return o && qr && Br(Ar, t, {
                configurable: !0,
                set: n
            }), Hr(t, e)
        }).prototype, "toString", (function() {
            return xr(this).tag
        })), ee(Or, "withoutSetter", (function(e) {
            return Hr(V(e), e)
        })), c.f = Yr, O.f = Wr, T.f = $r, ye.f = vr.f = Gr, be.f = Kr, yr.f = function(e) {
            return Hr(qe(e), e)
        }, o && (Pr(Or.prototype, "description", {
            configurable: !0,
            get: function() {
                return xr(this).description
            }
        }), ee(Ar, "propertyIsEnumerable", Yr, {
            unsafe: !0
        }))), Ce({
            global: !0,
            wrap: !0,
            forced: !Ne,
            sham: !Ne
        }, {
            Symbol: Or
        }), _r(Et(Dr), (function(e) {
            wr(e)
        })), Ce({
            target: Sr,
            stat: !0,
            forced: !Ne
        }, {
            for: function(e) {
                var t = String(e);
                if (b(Mr, t)) return Mr[t];
                var n = Or(t);
                return Mr[t] = n, Ur[n] = t, n
            },
            keyFor: function(e) {
                if (!Vr(e)) throw TypeError(e + " is not a symbol");
                if (b(Ur, e)) return Ur[e]
            },
            useSetter: function() {
                qr = !0
            },
            useSimple: function() {
                qr = !1
            }
        }), Ce({
            target: "Object",
            stat: !0,
            forced: !Ne,
            sham: !o
        }, {
            create: function(e, t) {
                return void 0 === t ? It(e) : zr(It(e), t)
            },
            defineProperty: Wr,
            defineProperties: zr,
            getOwnPropertyDescriptor: $r
        }), Ce({
            target: "Object",
            stat: !0,
            forced: !Ne
        }, {
            getOwnPropertyNames: Gr,
            getOwnPropertySymbols: Kr
        }), Ce({
            target: "Object",
            stat: !0,
            forced: i((function() {
                be.f(1)
            }))
        }, {
            getOwnPropertySymbols: function(e) {
                return be.f(Re(e))
            }
        }), Ir) {
        var Xr = !Ne || i((function() {
            var e = Or();
            return "[null]" != Ir([e]) || "{}" != Ir({
                a: e
            }) || "{}" != Ir(Object(e))
        }));
        Ce({
            target: "JSON",
            stat: !0,
            forced: Xr
        }, {
            stringify: function(e, t, n) {
                for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
                if (r = t, (m(t) || void 0 !== e) && !Vr(e)) return Le(t) || (t = function(e, t) {
                    if ("function" == typeof r && (t = r.call(this, e, t)), !Vr(t)) return t
                }), i[1] = t, Ir.apply(null, i)
            }
        })
    }
    Or.prototype[kr] || I(Or.prototype, kr, Or.prototype.valueOf), Yn(Or, Sr), Y[Er] = !0;
    var Jr = O.f,
        Qr = r.Symbol;
    if (o && "function" == typeof Qr && (!("description" in Qr.prototype) || void 0 !== Qr().description)) {
        var Zr = {},
            ei = function() {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof ei ? new Qr(e) : void 0 === e ? Qr() : Qr(e);
                return "" === e && (Zr[t] = !0), t
            };
        _e(ei, Qr);
        var ti = ei.prototype = Qr.prototype;
        ti.constructor = ei;
        var ni = ti.toString,
            ri = "Symbol(test)" == String(Qr("test")),
            ii = /^Symbol\((.*)\)[^)]+$/;
        Jr(ti, "description", {
            configurable: !0,
            get: function() {
                var e = m(this) ? this.valueOf() : this,
                    t = ni.call(e);
                if (b(Zr, e)) return "";
                var n = ri ? t.slice(7, -1) : t.replace(ii, "$1");
                return "" === n ? void 0 : n
            }
        }), Ce({
            global: !0,
            forced: !0
        }, {
            Symbol: ei
        })
    }
    wr("iterator");
    var oi = pe.indexOf,
        ai = [].indexOf,
        si = !!ai && 1 / [1].indexOf(1, -0) < 0,
        ci = Ye("indexOf"),
        ui = Xe("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    Ce({
        target: "Array",
        proto: !0,
        forced: si || !ci || !ui
    }, {
        indexOf: function(e) {
            return si ? ai.apply(this, arguments) || 0 : oi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var li = "Array Iterator",
        fi = Z.set,
        hi = Z.getterFor(li),
        pi = rr(Array, "Array", (function(e, t) {
            fi(this, {
                type: li,
                target: g(e),
                index: 0,
                kind: t
            })
        }), (function() {
            var e = hi(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }), "values");
    nt.Arguments = nt.Array, jt("keys"), jt("values"), jt("entries");
    var di = [].join,
        gi = p != Object,
        mi = Ye("join", ",");
    Ce({
        target: "Array",
        proto: !0,
        forced: gi || !mi
    }, {
        join: function(e) {
            return di.call(g(this), void 0 === e ? "," : e)
        }
    });
    var vi = Vt("slice"),
        yi = Xe("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        bi = qe("species"),
        wi = [].slice,
        _i = Math.max;
    Ce({
        target: "Array",
        proto: !0,
        forced: !vi || !yi
    }, {
        slice: function(e, t) {
            var n, r, i, o = g(this),
                a = ce(o.length),
                s = fe(e, a),
                c = fe(void 0 === t ? a : t, a);
            if (Le(o) && ("function" != typeof(n = o.constructor) || n !== Array && !Le(n.prototype) ? m(n) && null === (n = n[bi]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return wi.call(o, s, c);
            for (r = new(void 0 === n ? Array : n)(_i(c - s, 0)), i = 0; s < c; s++, i++) s in o && at(r, i, o[s]);
            return r.length = i, r
        }
    });
    var Ei = ct ? {}.toString : function() {
        return "[object " + ft(this) + "]"
    };
    ct || ee(Object.prototype, "toString", Ei, {
        unsafe: !0
    });
    var Si = qe("species"),
        ki = !i((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        Ti = "$0" === "a".replace(/./, "$0"),
        xi = qe("replace"),
        Ai = !!/./ [xi] && "" === /./ [xi]("a", "$0"),
        Oi = !i((function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        Ii = function(e, t, n, r) {
            var o = qe(e),
                a = !i((function() {
                    var t = {};
                    return t[o] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                s = a && !i((function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[Si] = function() {
                        return n
                    }, n.flags = "", n[o] = /./ [o]), n.exec = function() {
                        return t = !0, null
                    }, n[o](""), !t
                }));
            if (!a || !s || "replace" === e && (!ki || !Ti || Ai) || "split" === e && !Oi) {
                var c = /./ [o],
                    u = n(o, "" [e], (function(e, t, n, r, i) {
                        return t.exec === kn ? a && !i ? {
                            done: !0,
                            value: c.call(t, n, r)
                        } : {
                            done: !0,
                            value: e.call(n, t, r)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: Ti,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ai
                    }),
                    l = u[0],
                    f = u[1];
                ee(String.prototype, e, l), ee(RegExp.prototype, o, 2 == t ? function(e, t) {
                    return f.call(e, this, t)
                } : function(e) {
                    return f.call(e, this)
                })
            }
            r && I(RegExp.prototype[o], "sham", !0)
        },
        Ci = Mn.charAt,
        Pi = function(e, t, n) {
            return t + (n ? Ci(e, t).length : 1)
        },
        ji = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var r = n.call(e, t);
                if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
                return r
            }
            if ("RegExp" !== f(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return kn.call(e, t)
        },
        Ri = Math.max,
        Li = Math.min,
        Ni = Math.floor,
        Mi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Ui = /\$([$&'`]|\d\d?)/g;
    Ii("replace", 2, (function(e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = r.REPLACE_KEEPS_$0,
            a = i ? "$" : "$0";
        return [function(n, r) {
            var i = d(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }, function(e, r) {
            if (!i && o || "string" == typeof r && -1 === r.indexOf(a)) {
                var c = n(t, e, this, r);
                if (c.done) return c.value
            }
            var u = x(e),
                l = String(this),
                f = "function" == typeof r;
            f || (r = String(r));
            var h = u.global;
            if (h) {
                var p = u.unicode;
                u.lastIndex = 0
            }
            for (var d = [];;) {
                var g = ji(u, l);
                if (null === g) break;
                if (d.push(g), !h) break;
                "" === String(g[0]) && (u.lastIndex = Pi(l, ce(u.lastIndex), p))
            }
            for (var m, v = "", y = 0, b = 0; b < d.length; b++) {
                g = d[b];
                for (var w = String(g[0]), _ = Ri(Li(ae(g.index), l.length), 0), E = [], S = 1; S < g.length; S++) E.push(void 0 === (m = g[S]) ? m : String(m));
                var k = g.groups;
                if (f) {
                    var T = [w].concat(E, _, l);
                    void 0 !== k && T.push(k);
                    var A = String(r.apply(void 0, T))
                } else A = s(w, l, _, E, k, r);
                _ >= y && (v += l.slice(y, _) + A, y = _ + w.length)
            }
            return v + l.slice(y)
        }];

        function s(e, n, r, i, o, a) {
            var s = r + e.length,
                c = i.length,
                u = Ui;
            return void 0 !== o && (o = Re(o), u = Mi), t.call(a, u, (function(t, a) {
                var u;
                switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, r);
                    case "'":
                        return n.slice(s);
                    case "<":
                        u = o[a.slice(1, -1)];
                        break;
                    default:
                        var l = +a;
                        if (0 === l) return t;
                        if (l > c) {
                            var f = Ni(l / 10);
                            return 0 === f ? t : f <= c ? void 0 === i[f - 1] ? a.charAt(1) : i[f - 1] + a.charAt(1) : t
                        }
                        u = i[l - 1]
                }
                return void 0 === u ? "" : u
            }))
        }
    }));
    var Di = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    Ii("search", 1, (function(e, t, n) {
        return [function(t) {
            var n = d(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = x(e),
                o = String(this),
                a = i.lastIndex;
            Di(a, 0) || (i.lastIndex = 0);
            var s = ji(i, o);
            return Di(i.lastIndex, a) || (i.lastIndex = a), null === s ? -1 : s.index
        }]
    }));
    var Fi = qe("species"),
        qi = function(e, t) {
            var n, r = x(e).constructor;
            return void 0 === r || null == (n = x(r)[Fi]) ? t : Pe(n)
        },
        Bi = [].push,
        Hi = Math.min,
        Vi = 4294967295,
        Wi = !i((function() {
            return !RegExp(Vi, "y")
        }));
    Ii("split", 2, (function(e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var r = String(d(this)),
                i = void 0 === n ? Vi : n >>> 0;
            if (0 === i) return [];
            if (void 0 === e) return [r];
            if (!Jt(e)) return t.call(r, e, i);
            for (var o, a, s, c = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, f = new RegExp(e.source, u + "g");
                (o = kn.call(f, r)) && !((a = f.lastIndex) > l && (c.push(r.slice(l, o.index)), o.length > 1 && o.index < r.length && Bi.apply(c, o.slice(1)), s = o[0].length, l = a, c.length >= i));) f.lastIndex === o.index && f.lastIndex++;
            return l === r.length ? !s && f.test("") || c.push("") : c.push(r.slice(l)), c.length > i ? c.slice(0, i) : c
        } : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function(t, n) {
            var i = d(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }, function(e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done) return o.value;
            var a = x(e),
                s = String(this),
                c = qi(a, RegExp),
                u = a.unicode,
                l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Wi ? "y" : "g"),
                f = new c(Wi ? a : "^(?:" + a.source + ")", l),
                h = void 0 === i ? Vi : i >>> 0;
            if (0 === h) return [];
            if (0 === s.length) return null === ji(f, s) ? [s] : [];
            for (var p = 0, d = 0, g = []; d < s.length;) {
                f.lastIndex = Wi ? d : 0;
                var m, v = ji(f, Wi ? s : s.slice(d));
                if (null === v || (m = Hi(ce(f.lastIndex + (Wi ? 0 : d)), s.length)) === p) d = Pi(s, d, u);
                else {
                    if (g.push(s.slice(p, d)), g.length === h) return g;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]), g.length === h) return g;
                    d = p = m
                }
            }
            return g.push(s.slice(p)), g
        }]
    }), !Wi);
    var zi = qe("iterator"),
        Yi = qe("toStringTag"),
        $i = pi.values;
    for (var Gi in cr) {
        var Ki = r[Gi],
            Xi = Ki && Ki.prototype;
        if (Xi) {
            if (Xi[zi] !== $i) try {
                I(Xi, zi, $i)
            } catch (e) {
                Xi[zi] = $i
            }
            if (Xi[Yi] || I(Xi, Yi, Gi), cr[Gi])
                for (var Ji in pi)
                    if (Xi[Ji] !== pi[Ji]) try {
                        I(Xi, Ji, pi[Ji])
                    } catch (e) {
                        Xi[Ji] = pi[Ji]
                    }
        }
    }
    var Qi = qe("iterator"),
        Zi = !i((function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"),
                t = e.searchParams,
                n = "";
            return e.pathname = "c%20d", t.forEach((function(e, r) {
                t.delete("b"), n += r + e
            })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[Qi] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        })),
        eo = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        },
        to = Object.assign,
        no = Object.defineProperty,
        ro = !to || i((function() {
            if (o && 1 !== to({
                    b: 1
                }, to(no({}, "a", {
                    enumerable: !0,
                    get: function() {
                        no(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach((function(e) {
                t[e] = e
            })), 7 != to({}, e)[n] || Et(to({}, t)).join("") != r
        })) ? function(e, t) {
            for (var n = Re(e), r = arguments.length, i = 1, a = be.f, s = c.f; r > i;)
                for (var u, l = p(arguments[i++]), f = a ? Et(l).concat(a(l)) : Et(l), h = f.length, d = 0; h > d;) u = f[d++], o && !s.call(l, u) || (n[u] = l[u]);
            return n
        } : to,
        io = 2147483647,
        oo = /[^\0-\u007E]/,
        ao = /[.\u3002\uFF0E\uFF61]/g,
        so = "Overflow: input needs wider integers to process",
        co = Math.floor,
        uo = String.fromCharCode,
        lo = function(e) {
            return e + 22 + 75 * (e < 26)
        },
        fo = function(e, t, n) {
            var r = 0;
            for (e = n ? co(e / 700) : e >> 1, e += co(e / t); e > 455; r += 36) e = co(e / 35);
            return co(r + 36 * e / (e + 38))
        },
        ho = function(e) {
            var t, n, r = [],
                i = (e = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var i = e.charCodeAt(n++);
                        if (i >= 55296 && i <= 56319 && n < r) {
                            var o = e.charCodeAt(n++);
                            56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--)
                        } else t.push(i)
                    }
                    return t
                }(e)).length,
                o = 128,
                a = 0,
                s = 72;
            for (t = 0; t < e.length; t++)(n = e[t]) < 128 && r.push(uo(n));
            var c = r.length,
                u = c;
            for (c && r.push("-"); u < i;) {
                var l = io;
                for (t = 0; t < e.length; t++)(n = e[t]) >= o && n < l && (l = n);
                var f = u + 1;
                if (l - o > co((io - a) / f)) throw RangeError(so);
                for (a += (l - o) * f, o = l, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < o && ++a > io) throw RangeError(so);
                    if (n == o) {
                        for (var h = a, p = 36;; p += 36) {
                            var d = p <= s ? 1 : p >= s + 26 ? 26 : p - s;
                            if (h < d) break;
                            var g = h - d,
                                m = 36 - d;
                            r.push(uo(lo(d + g % m))), h = co(g / m)
                        }
                        r.push(uo(lo(h))), s = fo(a, f, u == c), a = 0, ++u
                    }
                }++a, ++o
            }
            return r.join("")
        },
        po = function(e, t, n) {
            for (var r in t) ee(e, r, t[r], n);
            return e
        },
        go = function(e) {
            var t = pt(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return x(t.call(e))
        },
        mo = re("fetch"),
        vo = re("Headers"),
        yo = qe("iterator"),
        bo = "URLSearchParams",
        wo = "URLSearchParamsIterator",
        _o = Z.set,
        Eo = Z.getterFor(bo),
        So = Z.getterFor(wo),
        ko = /\+/g,
        To = Array(4),
        xo = function(e) {
            return To[e - 1] || (To[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        },
        Ao = function(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        },
        Oo = function(e) {
            var t = e.replace(ko, " "),
                n = 4;
            try {
                return decodeURIComponent(t)
            } catch (e) {
                for (; n;) t = t.replace(xo(n--), Ao);
                return t
            }
        },
        Io = /[!'()~]|%20/g,
        Co = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        Po = function(e) {
            return Co[e]
        },
        jo = function(e) {
            return encodeURIComponent(e).replace(Io, Po)
        },
        Ro = function(e, t) {
            if (t)
                for (var n, r, i = t.split("&"), o = 0; o < i.length;)(n = i[o++]).length && (r = n.split("="), e.push({
                    key: Oo(r.shift()),
                    value: Oo(r.join("="))
                }))
        },
        Lo = function(e) {
            this.entries.length = 0, Ro(this.entries, e)
        },
        No = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments")
        },
        Mo = Kn((function(e, t) {
            _o(this, {
                type: wo,
                iterator: go(Eo(e).entries),
                kind: t
            })
        }), "Iterator", (function() {
            var e = So(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
        })),
        Uo = function() {
            eo(this, Uo, bo);
            var e, t, n, r, i, o, a, s, c, u = arguments.length > 0 ? arguments[0] : void 0,
                l = this,
                f = [];
            if (_o(l, {
                    type: bo,
                    entries: f,
                    updateURL: function() {},
                    updateSearchParams: Lo
                }), void 0 !== u)
                if (m(u))
                    if ("function" == typeof(e = pt(u)))
                        for (n = (t = e.call(u)).next; !(r = n.call(t)).done;) {
                            if ((a = (o = (i = go(x(r.value))).next).call(i)).done || (s = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                            f.push({
                                key: a.value + "",
                                value: s.value + ""
                            })
                        } else
                            for (c in u) b(u, c) && f.push({
                                key: c,
                                value: u[c] + ""
                            });
                    else Ro(f, "string" == typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
        },
        Do = Uo.prototype;
    po(Do, {
        append: function(e, t) {
            No(arguments.length, 2);
            var n = Eo(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }), n.updateURL()
        },
        delete: function(e) {
            No(arguments.length, 1);
            for (var t = Eo(this), n = t.entries, r = e + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
            t.updateURL()
        },
        get: function(e) {
            No(arguments.length, 1);
            for (var t = Eo(this).entries, n = e + "", r = 0; r < t.length; r++)
                if (t[r].key === n) return t[r].value;
            return null
        },
        getAll: function(e) {
            No(arguments.length, 1);
            for (var t = Eo(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
            return r
        },
        has: function(e) {
            No(arguments.length, 1);
            for (var t = Eo(this).entries, n = e + "", r = 0; r < t.length;)
                if (t[r++].key === n) return !0;
            return !1
        },
        set: function(e, t) {
            No(arguments.length, 1);
            for (var n, r = Eo(this), i = r.entries, o = !1, a = e + "", s = t + "", c = 0; c < i.length; c++)(n = i[c]).key === a && (o ? i.splice(c--, 1) : (o = !0, n.value = s));
            o || i.push({
                key: a,
                value: s
            }), r.updateURL()
        },
        sort: function() {
            var e, t, n, r = Eo(this),
                i = r.entries,
                o = i.slice();
            for (i.length = 0, n = 0; n < o.length; n++) {
                for (e = o[n], t = 0; t < n; t++)
                    if (i[t].key > e.key) {
                        i.splice(t, 0, e);
                        break
                    }
                t === n && i.push(e)
            }
            r.updateURL()
        },
        forEach: function(e) {
            for (var t, n = Eo(this).entries, r = je(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
        },
        keys: function() {
            return new Mo(this, "keys")
        },
        values: function() {
            return new Mo(this, "values")
        },
        entries: function() {
            return new Mo(this, "entries")
        }
    }, {
        enumerable: !0
    }), ee(Do, yo, Do.entries), ee(Do, "toString", (function() {
        for (var e, t = Eo(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(jo(e.key) + "=" + jo(e.value));
        return n.join("&")
    }), {
        enumerable: !0
    }), Yn(Uo, bo), Ce({
        global: !0,
        forced: !Zi
    }, {
        URLSearchParams: Uo
    }), Zi || "function" != typeof mo || "function" != typeof vo || Ce({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            var t, n, r, i = [e];
            return arguments.length > 1 && (m(t = arguments[1]) && (n = t.body, ft(n) === bo && ((r = t.headers ? new vo(t.headers) : new vo).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = It(t, {
                body: u(0, String(n)),
                headers: u(0, r)
            }))), i.push(t)), mo.apply(this, i)
        }
    });
    var Fo, qo = {
            URLSearchParams: Uo,
            getState: Eo
        },
        Bo = Mn.codeAt,
        Ho = r.URL,
        Vo = qo.URLSearchParams,
        Wo = qo.getState,
        zo = Z.set,
        Yo = Z.getterFor("URL"),
        $o = Math.floor,
        Go = Math.pow,
        Ko = "Invalid scheme",
        Xo = "Invalid host",
        Jo = "Invalid port",
        Qo = /[A-Za-z]/,
        Zo = /[\d+-.A-Za-z]/,
        ea = /\d/,
        ta = /^(0x|0X)/,
        na = /^[0-7]+$/,
        ra = /^\d+$/,
        ia = /^[\dA-Fa-f]+$/,
        oa = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        aa = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        sa = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        ca = /[\u0009\u000A\u000D]/g,
        ua = function(e, t) {
            var n, r, i;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return Xo;
                if (!(n = fa(t.slice(1, -1)))) return Xo;
                e.host = n
            } else if (ba(e)) {
                if (t = function(e) {
                        var t, n, r = [],
                            i = e.toLowerCase().replace(ao, ".").split(".");
                        for (t = 0; t < i.length; t++) n = i[t], r.push(oo.test(n) ? "xn--" + ho(n) : n);
                        return r.join(".")
                    }(t), oa.test(t)) return Xo;
                if (null === (n = la(t))) return Xo;
                e.host = n
            } else {
                if (aa.test(t)) return Xo;
                for (n = "", r = dt(t), i = 0; i < r.length; i++) n += va(r[i], pa);
                e.host = n
            }
        },
        la = function(e) {
            var t, n, r, i, o, a, s, c = e.split(".");
            if (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4) return e;
            for (n = [], r = 0; r < t; r++) {
                if ("" == (i = c[r])) return e;
                if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = ta.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0;
                else {
                    if (!(10 == o ? ra : 8 == o ? na : ia).test(i)) return e;
                    a = parseInt(i, o)
                }
                n.push(a)
            }
            for (r = 0; r < t; r++)
                if (a = n[r], r == t - 1) {
                    if (a >= Go(256, 5 - t)) return null
                } else if (a > 255) return null;
            for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * Go(256, 3 - r);
            return s
        },
        fa = function(e) {
            var t, n, r, i, o, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0],
                u = 0,
                l = null,
                f = 0,
                h = function() {
                    return e.charAt(f)
                };
            if (":" == h()) {
                if (":" != e.charAt(1)) return;
                f += 2, l = ++u
            }
            for (; h();) {
                if (8 == u) return;
                if (":" != h()) {
                    for (t = n = 0; n < 4 && ia.test(h());) t = 16 * t + parseInt(h(), 16), f++, n++;
                    if ("." == h()) {
                        if (0 == n) return;
                        if (f -= n, u > 6) return;
                        for (r = 0; h();) {
                            if (i = null, r > 0) {
                                if (!("." == h() && r < 4)) return;
                                f++
                            }
                            if (!ea.test(h())) return;
                            for (; ea.test(h());) {
                                if (o = parseInt(h(), 10), null === i) i = o;
                                else {
                                    if (0 == i) return;
                                    i = 10 * i + o
                                }
                                if (i > 255) return;
                                f++
                            }
                            c[u] = 256 * c[u] + i, 2 != ++r && 4 != r || u++
                        }
                        if (4 != r) return;
                        break
                    }
                    if (":" == h()) {
                        if (f++, !h()) return
                    } else if (h()) return;
                    c[u++] = t
                } else {
                    if (null !== l) return;
                    f++, l = ++u
                }
            }
            if (null !== l)
                for (a = u - l, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s;
            else if (8 != u) return;
            return c
        },
        ha = function(e) {
            var t, n, r, i;
            if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = $o(e / 256);
                return t.join(".")
            }
            if ("object" == typeof e) {
                for (t = "", r = function(e) {
                        for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                        return i > n && (t = r, n = i), t
                    }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                return "[" + t + "]"
            }
            return e
        },
        pa = {},
        da = ro({}, pa, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        ga = ro({}, da, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        ma = ro({}, ga, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        va = function(e, t) {
            var n = Bo(e, 0);
            return n > 32 && n < 127 && !b(t, e) ? e : encodeURIComponent(e)
        },
        ya = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        ba = function(e) {
            return b(ya, e.scheme)
        },
        wa = function(e) {
            return "" != e.username || "" != e.password
        },
        _a = function(e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
        },
        Ea = function(e, t) {
            var n;
            return 2 == e.length && Qo.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
        },
        Sa = function(e) {
            var t;
            return e.length > 1 && Ea(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
        },
        ka = function(e) {
            var t = e.path,
                n = t.length;
            !n || "file" == e.scheme && 1 == n && Ea(t[0], !0) || t.pop()
        },
        Ta = function(e) {
            return "." === e || "%2e" === e.toLowerCase()
        },
        xa = {},
        Aa = {},
        Oa = {},
        Ia = {},
        Ca = {},
        Pa = {},
        ja = {},
        Ra = {},
        La = {},
        Na = {},
        Ma = {},
        Ua = {},
        Da = {},
        Fa = {},
        qa = {},
        Ba = {},
        Ha = {},
        Va = {},
        Wa = {},
        za = {},
        Ya = {},
        $a = function(e, t, n, r) {
            var i, o, a, s, c, u = n || xa,
                l = 0,
                f = "",
                h = !1,
                p = !1,
                d = !1;
            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(sa, "")), t = t.replace(ca, ""), i = dt(t); l <= i.length;) {
                switch (o = i[l], u) {
                    case xa:
                        if (!o || !Qo.test(o)) {
                            if (n) return Ko;
                            u = Oa;
                            continue
                        }
                        f += o.toLowerCase(), u = Aa;
                        break;
                    case Aa:
                        if (o && (Zo.test(o) || "+" == o || "-" == o || "." == o)) f += o.toLowerCase();
                        else {
                            if (":" != o) {
                                if (n) return Ko;
                                f = "", u = Oa, l = 0;
                                continue
                            }
                            if (n && (ba(e) != b(ya, f) || "file" == f && (wa(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                            if (e.scheme = f, n) return void(ba(e) && ya[e.scheme] == e.port && (e.port = null));
                            f = "", "file" == e.scheme ? u = Fa : ba(e) && r && r.scheme == e.scheme ? u = Ia : ba(e) ? u = Ra : "/" == i[l + 1] ? (u = Ca, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), u = Wa)
                        }
                        break;
                    case Oa:
                        if (!r || r.cannotBeABaseURL && "#" != o) return Ko;
                        if (r.cannotBeABaseURL && "#" == o) {
                            e.scheme = r.scheme, e.path = r.path.slice(), e.query = r.query, e.fragment = "", e.cannotBeABaseURL = !0, u = Ya;
                            break
                        }
                        u = "file" == r.scheme ? Fa : Pa;
                        continue;
                    case Ia:
                        if ("/" != o || "/" != i[l + 1]) {
                            u = Pa;
                            continue
                        }
                        u = La, l++;
                        break;
                    case Ca:
                        if ("/" == o) {
                            u = Na;
                            break
                        }
                        u = Va;
                        continue;
                    case Pa:
                        if (e.scheme = r.scheme, o == Fo) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query;
                        else if ("/" == o || "\\" == o && ba(e)) u = ja;
                        else if ("?" == o) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = "", u = za;
                        else {
                            if ("#" != o) {
                                e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.path.pop(), u = Va;
                                continue
                            }
                            e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query, e.fragment = "", u = Ya
                        }
                        break;
                    case ja:
                        if (!ba(e) || "/" != o && "\\" != o) {
                            if ("/" != o) {
                                e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, u = Va;
                                continue
                            }
                            u = Na
                        } else u = La;
                        break;
                    case Ra:
                        if (u = La, "/" != o || "/" != f.charAt(l + 1)) continue;
                        l++;
                        break;
                    case La:
                        if ("/" != o && "\\" != o) {
                            u = Na;
                            continue
                        }
                        break;
                    case Na:
                        if ("@" == o) {
                            h && (f = "%40" + f), h = !0, a = dt(f);
                            for (var g = 0; g < a.length; g++) {
                                var m = a[g];
                                if (":" != m || d) {
                                    var v = va(m, ma);
                                    d ? e.password += v : e.username += v
                                } else d = !0
                            }
                            f = ""
                        } else if (o == Fo || "/" == o || "?" == o || "#" == o || "\\" == o && ba(e)) {
                            if (h && "" == f) return "Invalid authority";
                            l -= dt(f).length + 1, f = "", u = Ma
                        } else f += o;
                        break;
                    case Ma:
                    case Ua:
                        if (n && "file" == e.scheme) {
                            u = Ba;
                            continue
                        }
                        if (":" != o || p) {
                            if (o == Fo || "/" == o || "?" == o || "#" == o || "\\" == o && ba(e)) {
                                if (ba(e) && "" == f) return Xo;
                                if (n && "" == f && (wa(e) || null !== e.port)) return;
                                if (s = ua(e, f)) return s;
                                if (f = "", u = Ha, n) return;
                                continue
                            }
                            "[" == o ? p = !0 : "]" == o && (p = !1), f += o
                        } else {
                            if ("" == f) return Xo;
                            if (s = ua(e, f)) return s;
                            if (f = "", u = Da, n == Ua) return
                        }
                        break;
                    case Da:
                        if (!ea.test(o)) {
                            if (o == Fo || "/" == o || "?" == o || "#" == o || "\\" == o && ba(e) || n) {
                                if ("" != f) {
                                    var y = parseInt(f, 10);
                                    if (y > 65535) return Jo;
                                    e.port = ba(e) && y === ya[e.scheme] ? null : y, f = ""
                                }
                                if (n) return;
                                u = Ha;
                                continue
                            }
                            return Jo
                        }
                        f += o;
                        break;
                    case Fa:
                        if (e.scheme = "file", "/" == o || "\\" == o) u = qa;
                        else {
                            if (!r || "file" != r.scheme) {
                                u = Va;
                                continue
                            }
                            if (o == Fo) e.host = r.host, e.path = r.path.slice(), e.query = r.query;
                            else if ("?" == o) e.host = r.host, e.path = r.path.slice(), e.query = "", u = za;
                            else {
                                if ("#" != o) {
                                    Sa(i.slice(l).join("")) || (e.host = r.host, e.path = r.path.slice(), ka(e)), u = Va;
                                    continue
                                }
                                e.host = r.host, e.path = r.path.slice(), e.query = r.query, e.fragment = "", u = Ya
                            }
                        }
                        break;
                    case qa:
                        if ("/" == o || "\\" == o) {
                            u = Ba;
                            break
                        }
                        r && "file" == r.scheme && !Sa(i.slice(l).join("")) && (Ea(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host), u = Va;
                        continue;
                    case Ba:
                        if (o == Fo || "/" == o || "\\" == o || "?" == o || "#" == o) {
                            if (!n && Ea(f)) u = Va;
                            else if ("" == f) {
                                if (e.host = "", n) return;
                                u = Ha
                            } else {
                                if (s = ua(e, f)) return s;
                                if ("localhost" == e.host && (e.host = ""), n) return;
                                f = "", u = Ha
                            }
                            continue
                        }
                        f += o;
                        break;
                    case Ha:
                        if (ba(e)) {
                            if (u = Va, "/" != o && "\\" != o) continue
                        } else if (n || "?" != o)
                            if (n || "#" != o) {
                                if (o != Fo && (u = Va, "/" != o)) continue
                            } else e.fragment = "", u = Ya;
                        else e.query = "", u = za;
                        break;
                    case Va:
                        if (o == Fo || "/" == o || "\\" == o && ba(e) || !n && ("?" == o || "#" == o)) {
                            if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (ka(e), "/" == o || "\\" == o && ba(e) || e.path.push("")) : Ta(f) ? "/" == o || "\\" == o && ba(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && Ea(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (o == Fo || "?" == o || "#" == o))
                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                            "?" == o ? (e.query = "", u = za) : "#" == o && (e.fragment = "", u = Ya)
                        } else f += va(o, ga);
                        break;
                    case Wa:
                        "?" == o ? (e.query = "", u = za) : "#" == o ? (e.fragment = "", u = Ya) : o != Fo && (e.path[0] += va(o, pa));
                        break;
                    case za:
                        n || "#" != o ? o != Fo && ("'" == o && ba(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : va(o, pa)) : (e.fragment = "", u = Ya);
                        break;
                    case Ya:
                        o != Fo && (e.fragment += va(o, da))
                }
                l++
            }
        },
        Ga = function(e) {
            var t, n, r = eo(this, Ga, "URL"),
                i = arguments.length > 1 ? arguments[1] : void 0,
                a = String(e),
                s = zo(r, {
                    type: "URL"
                });
            if (void 0 !== i)
                if (i instanceof Ga) t = Yo(i);
                else if (n = $a(t = {}, String(i))) throw TypeError(n);
            if (n = $a(s, a, null, t)) throw TypeError(n);
            var c = s.searchParams = new Vo,
                u = Wo(c);
            u.updateSearchParams(s.query), u.updateURL = function() {
                s.query = String(c) || null
            }, o || (r.href = Xa.call(r), r.origin = Ja.call(r), r.protocol = Qa.call(r), r.username = Za.call(r), r.password = es.call(r), r.host = ts.call(r), r.hostname = ns.call(r), r.port = rs.call(r), r.pathname = is.call(r), r.search = os.call(r), r.searchParams = as.call(r), r.hash = ss.call(r))
        },
        Ka = Ga.prototype,
        Xa = function() {
            var e = Yo(this),
                t = e.scheme,
                n = e.username,
                r = e.password,
                i = e.host,
                o = e.port,
                a = e.path,
                s = e.query,
                c = e.fragment,
                u = t + ":";
            return null !== i ? (u += "//", wa(e) && (u += n + (r ? ":" + r : "") + "@"), u += ha(i), null !== o && (u += ":" + o)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
        },
        Ja = function() {
            var e = Yo(this),
                t = e.scheme,
                n = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
            return "file" != t && ba(e) ? t + "://" + ha(e.host) + (null !== n ? ":" + n : "") : "null"
        },
        Qa = function() {
            return Yo(this).scheme + ":"
        },
        Za = function() {
            return Yo(this).username
        },
        es = function() {
            return Yo(this).password
        },
        ts = function() {
            var e = Yo(this),
                t = e.host,
                n = e.port;
            return null === t ? "" : null === n ? ha(t) : ha(t) + ":" + n
        },
        ns = function() {
            var e = Yo(this).host;
            return null === e ? "" : ha(e)
        },
        rs = function() {
            var e = Yo(this).port;
            return null === e ? "" : String(e)
        },
        is = function() {
            var e = Yo(this),
                t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        },
        os = function() {
            var e = Yo(this).query;
            return e ? "?" + e : ""
        },
        as = function() {
            return Yo(this).searchParams
        },
        ss = function() {
            var e = Yo(this).fragment;
            return e ? "#" + e : ""
        },
        cs = function(e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            }
        };
    if (o && St(Ka, {
            href: cs(Xa, (function(e) {
                var t = Yo(this),
                    n = String(e),
                    r = $a(t, n);
                if (r) throw TypeError(r);
                Wo(t.searchParams).updateSearchParams(t.query)
            })),
            origin: cs(Ja),
            protocol: cs(Qa, (function(e) {
                var t = Yo(this);
                $a(t, String(e) + ":", xa)
            })),
            username: cs(Za, (function(e) {
                var t = Yo(this),
                    n = dt(String(e));
                if (!_a(t)) {
                    t.username = "";
                    for (var r = 0; r < n.length; r++) t.username += va(n[r], ma)
                }
            })),
            password: cs(es, (function(e) {
                var t = Yo(this),
                    n = dt(String(e));
                if (!_a(t)) {
                    t.password = "";
                    for (var r = 0; r < n.length; r++) t.password += va(n[r], ma)
                }
            })),
            host: cs(ts, (function(e) {
                var t = Yo(this);
                t.cannotBeABaseURL || $a(t, String(e), Ma)
            })),
            hostname: cs(ns, (function(e) {
                var t = Yo(this);
                t.cannotBeABaseURL || $a(t, String(e), Ua)
            })),
            port: cs(rs, (function(e) {
                var t = Yo(this);
                _a(t) || ("" == (e = String(e)) ? t.port = null : $a(t, e, Da))
            })),
            pathname: cs(is, (function(e) {
                var t = Yo(this);
                t.cannotBeABaseURL || (t.path = [], $a(t, e + "", Ha))
            })),
            search: cs(os, (function(e) {
                var t = Yo(this);
                "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", $a(t, e, za)), Wo(t.searchParams).updateSearchParams(t.query)
            })),
            searchParams: cs(as),
            hash: cs(ss, (function(e) {
                var t = Yo(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", $a(t, e, Ya)) : t.fragment = null
            }))
        }), ee(Ka, "toJSON", (function() {
            return Xa.call(this)
        }), {
            enumerable: !0
        }), ee(Ka, "toString", (function() {
            return Xa.call(this)
        }), {
            enumerable: !0
        }), Ho) {
        var us = Ho.createObjectURL,
            ls = Ho.revokeObjectURL;
        us && ee(Ga, "createObjectURL", (function(e) {
            return us.apply(Ho, arguments)
        })), ls && ee(Ga, "revokeObjectURL", (function(e) {
            return ls.apply(Ho, arguments)
        }))
    }

    function fs(e) {
        return (fs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function hs(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ps(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ds(e, t, n) {
        return t && ps(e.prototype, t), n && ps(e, n), e
    }

    function gs(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ms(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function vs(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ms(Object(n), !0).forEach((function(t) {
                gs(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ms(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function ys(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function bs(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || _s(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ws(e) {
        return function(e) {
            if (Array.isArray(e)) return Es(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || _s(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function _s(e, t) {
        if (e) {
            if ("string" == typeof e) return Es(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Es(e, t) : void 0
        }
    }

    function Es(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    Yn(Ga, "URL"), Ce({
            global: !0,
            forced: !Zi,
            sham: !o
        }, {
            URL: Ga
        }),
        function(e) {
            var t = function() {
                    try {
                        return !!Symbol.iterator
                    } catch (e) {
                        return !1
                    }
                }(),
                n = function(e) {
                    var n = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t && (n[Symbol.iterator] = function() {
                        return n
                    }), n
                },
                r = function(e) {
                    return encodeURIComponent(e).replace(/%20/g, "+")
                },
                i = function(e) {
                    return decodeURIComponent(String(e).replace(/\+/g, " "))
                };
            (function() {
                try {
                    var t = e.URLSearchParams;
                    return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set && "function" == typeof t.prototype.entries
                } catch (e) {
                    return !1
                }
            })() || function() {
                var i = function e(t) {
                        Object.defineProperty(this, "_entries", {
                            writable: !0,
                            value: {}
                        });
                        var n = fs(t);
                        if ("undefined" === n);
                        else if ("string" === n) "" !== t && this._fromString(t);
                        else if (t instanceof e) {
                            var r = this;
                            t.forEach((function(e, t) {
                                r.append(t, e)
                            }))
                        } else {
                            if (null === t || "object" !== n) throw new TypeError("Unsupported input's type for URLSearchParams");
                            if ("[object Array]" === Object.prototype.toString.call(t))
                                for (var i = 0; i < t.length; i++) {
                                    var o = t[i];
                                    if ("[object Array]" !== Object.prototype.toString.call(o) && 2 === o.length) throw new TypeError("Expected [string, any] as entry at index " + i + " of URLSearchParams's input");
                                    this.append(o[0], o[1])
                                } else
                                    for (var a in t) t.hasOwnProperty(a) && this.append(a, t[a])
                        }
                    },
                    o = i.prototype;
                o.append = function(e, t) {
                    e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
                }, o.delete = function(e) {
                    delete this._entries[e]
                }, o.get = function(e) {
                    return e in this._entries ? this._entries[e][0] : null
                }, o.getAll = function(e) {
                    return e in this._entries ? this._entries[e].slice(0) : []
                }, o.has = function(e) {
                    return e in this._entries
                }, o.set = function(e, t) {
                    this._entries[e] = [String(t)]
                }, o.forEach = function(e, t) {
                    var n;
                    for (var r in this._entries)
                        if (this._entries.hasOwnProperty(r)) {
                            n = this._entries[r];
                            for (var i = 0; i < n.length; i++) e.call(t, n[i], r, this)
                        }
                }, o.keys = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push(n)
                    })), n(e)
                }, o.values = function() {
                    var e = [];
                    return this.forEach((function(t) {
                        e.push(t)
                    })), n(e)
                }, o.entries = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push([n, t])
                    })), n(e)
                }, t && (o[Symbol.iterator] = o.entries), o.toString = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push(r(n) + "=" + r(t))
                    })), e.join("&")
                }, e.URLSearchParams = i
            }();
            var o = e.URLSearchParams.prototype;
            "function" != typeof o.sort && (o.sort = function() {
                var e = this,
                    t = [];
                this.forEach((function(n, r) {
                    t.push([r, n]), e._entries || e.delete(r)
                })), t.sort((function(e, t) {
                    return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
                })), e._entries && (e._entries = {});
                for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1])
            }), "function" != typeof o._fromString && Object.defineProperty(o, "_fromString", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function(e) {
                    if (this._entries) this._entries = {};
                    else {
                        var t = [];
                        this.forEach((function(e, n) {
                            t.push(n)
                        }));
                        for (var n = 0; n < t.length; n++) this.delete(t[n])
                    }
                    var r, o = (e = e.replace(/^\?/, "")).split("&");
                    for (n = 0; n < o.length; n++) r = o[n].split("="), this.append(i(r[0]), r.length > 1 ? i(r[1]) : "")
                }
            })
        }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e),
        function(e) {
            if (function() {
                    try {
                        var t = new e.URL("b", "http://a");
                        return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams
                    } catch (e) {
                        return !1
                    }
                }() || function() {
                    var t = e.URL,
                        n = function(t, n) {
                            "string" != typeof t && (t = String(t));
                            var r, i = document;
                            if (n && (void 0 === e.location || n !== e.location.href)) {
                                (r = (i = document.implementation.createHTMLDocument("")).createElement("base")).href = n, i.head.appendChild(r);
                                try {
                                    if (0 !== r.href.indexOf(n)) throw new Error(r.href)
                                } catch (e) {
                                    throw new Error("URL unable to set base " + n + " due to " + e)
                                }
                            }
                            var o = i.createElement("a");
                            o.href = t, r && (i.body.appendChild(o), o.href = o.href);
                            var a = i.createElement("input");
                            if (a.type = "url", a.value = t, ":" === o.protocol || !/:/.test(o.href) || !a.checkValidity() && !n) throw new TypeError("Invalid URL");
                            Object.defineProperty(this, "_anchorElement", {
                                value: o
                            });
                            var s = new e.URLSearchParams(this.search),
                                c = !0,
                                u = !0,
                                l = this;
                            ["append", "delete", "set"].forEach((function(e) {
                                var t = s[e];
                                s[e] = function() {
                                    t.apply(s, arguments), c && (u = !1, l.search = s.toString(), u = !0)
                                }
                            })), Object.defineProperty(this, "searchParams", {
                                value: s,
                                enumerable: !0
                            });
                            var f = void 0;
                            Object.defineProperty(this, "_updateSearchParams", {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: function() {
                                    this.search !== f && (f = this.search, u && (c = !1, this.searchParams._fromString(this.search), c = !0))
                                }
                            })
                        },
                        r = n.prototype;
                    ["hash", "host", "hostname", "port", "protocol"].forEach((function(e) {
                        ! function(e) {
                            Object.defineProperty(r, e, {
                                get: function() {
                                    return this._anchorElement[e]
                                },
                                set: function(t) {
                                    this._anchorElement[e] = t
                                },
                                enumerable: !0
                            })
                        }(e)
                    })), Object.defineProperty(r, "search", {
                        get: function() {
                            return this._anchorElement.search
                        },
                        set: function(e) {
                            this._anchorElement.search = e, this._updateSearchParams()
                        },
                        enumerable: !0
                    }), Object.defineProperties(r, {
                        toString: {
                            get: function() {
                                var e = this;
                                return function() {
                                    return e.href
                                }
                            }
                        },
                        href: {
                            get: function() {
                                return this._anchorElement.href.replace(/\?$/, "")
                            },
                            set: function(e) {
                                this._anchorElement.href = e, this._updateSearchParams()
                            },
                            enumerable: !0
                        },
                        pathname: {
                            get: function() {
                                return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                            },
                            set: function(e) {
                                this._anchorElement.pathname = e
                            },
                            enumerable: !0
                        },
                        origin: {
                            get: function() {
                                var e = {
                                        "http:": 80,
                                        "https:": 443,
                                        "ftp:": 21
                                    }[this._anchorElement.protocol],
                                    t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                                return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                            },
                            enumerable: !0
                        },
                        password: {
                            get: function() {
                                return ""
                            },
                            set: function(e) {},
                            enumerable: !0
                        },
                        username: {
                            get: function() {
                                return ""
                            },
                            set: function(e) {},
                            enumerable: !0
                        }
                    }), n.createObjectURL = function(e) {
                        return t.createObjectURL.apply(t, arguments)
                    }, n.revokeObjectURL = function(e) {
                        return t.revokeObjectURL.apply(t, arguments)
                    }, e.URL = n
                }(), void 0 !== e.location && !("origin" in e.location)) {
                var t = function() {
                    return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
                };
                try {
                    Object.defineProperty(e.location, "origin", {
                        get: t,
                        enumerable: !0
                    })
                } catch (n) {
                    setInterval((function() {
                        e.location.origin = t()
                    }), 100)
                }
            }
        }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e), wr("asyncIterator");
    var Ss = qe("isConcatSpreadable"),
        ks = 9007199254740991,
        Ts = "Maximum allowed index exceeded",
        xs = Bt >= 51 || !i((function() {
            var e = [];
            return e[Ss] = !1, e.concat()[0] !== e
        })),
        As = Vt("concat"),
        Os = function(e) {
            if (!m(e)) return !1;
            var t = e[Ss];
            return void 0 !== t ? !!t : Le(e)
        };
    Ce({
        target: "Array",
        proto: !0,
        forced: !xs || !As
    }, {
        concat: function(e) {
            var t, n, r, i, o, a = Re(this),
                s = He(a, 0),
                c = 0;
            for (t = -1, r = arguments.length; t < r; t++)
                if (Os(o = -1 === t ? a : arguments[t])) {
                    if (c + (i = ce(o.length)) > ks) throw TypeError(Ts);
                    for (n = 0; n < i; n++, c++) n in o && at(s, c, o[n])
                } else {
                    if (c >= ks) throw TypeError(Ts);
                    at(s, c++, o)
                }
            return s.length = c, s
        }
    }), Ce({
        target: "Object",
        stat: !0,
        forced: Object.assign !== ro
    }, {
        assign: ro
    });
    var Is = T.f,
        Cs = i((function() {
            Is(1)
        }));
    Ce({
        target: "Object",
        stat: !0,
        forced: !o || Cs,
        sham: !o
    }, {
        getOwnPropertyDescriptor: function(e, t) {
            return Is(g(e), t)
        }
    });
    var Ps, js, Rs, Ls = r.Promise,
        Ns = t((function(e) {
            var t = function(e, t) {
                this.stopped = e, this.result = t
            };
            (e.exports = function(e, n, r, i, o) {
                var a, s, c, u, l, f, h, p = je(n, r, i ? 2 : 1);
                if (o) a = e;
                else {
                    if ("function" != typeof(s = pt(e))) throw TypeError("Target is not iterable");
                    if (ot(s)) {
                        for (c = 0, u = ce(e.length); u > c; c++)
                            if ((l = i ? p(x(h = e[c])[0], h[1]) : p(e[c])) && l instanceof t) return l;
                        return new t(!1)
                    }
                    a = s.call(e)
                }
                for (f = a.next; !(h = f.call(a)).done;)
                    if ("object" == typeof(l = tt(a, p, h.value, i)) && l && l instanceof t) return l;
                return new t(!1)
            }).stop = function(e) {
                return new t(!0, e)
            }
        })),
        Ms = /(iphone|ipod|ipad).*applewebkit/i.test(Ut),
        Us = r.location,
        Ds = r.setImmediate,
        Fs = r.clearImmediate,
        qs = r.process,
        Bs = r.MessageChannel,
        Hs = r.Dispatch,
        Vs = 0,
        Ws = {},
        zs = "onreadystatechange",
        Ys = function(e) {
            if (Ws.hasOwnProperty(e)) {
                var t = Ws[e];
                delete Ws[e], t()
            }
        },
        $s = function(e) {
            return function() {
                Ys(e)
            }
        },
        Gs = function(e) {
            Ys(e.data)
        },
        Ks = function(e) {
            r.postMessage(e + "", Us.protocol + "//" + Us.host)
        };
    Ds && Fs || (Ds = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return Ws[++Vs] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, Ps(Vs), Vs
    }, Fs = function(e) {
        delete Ws[e]
    }, "process" == f(qs) ? Ps = function(e) {
        qs.nextTick($s(e))
    } : Hs && Hs.now ? Ps = function(e) {
        Hs.now($s(e))
    } : Bs && !Ms ? (Rs = (js = new Bs).port2, js.port1.onmessage = Gs, Ps = je(Rs.postMessage, Rs, 1)) : !r.addEventListener || "function" != typeof postMessage || r.importScripts || i(Ks) || "file:" === Us.protocol ? Ps = zs in E("script") ? function(e) {
        kt.appendChild(E("script")).onreadystatechange = function() {
            kt.removeChild(this), Ys(e)
        }
    } : function(e) {
        setTimeout($s(e), 0)
    } : (Ps = Ks, r.addEventListener("message", Gs, !1)));
    var Xs, Js, Qs, Zs, ec, tc, nc, rc, ic = {
            set: Ds,
            clear: Fs
        },
        oc = T.f,
        ac = ic.set,
        sc = r.MutationObserver || r.WebKitMutationObserver,
        cc = r.process,
        uc = r.Promise,
        lc = "process" == f(cc),
        fc = oc(r, "queueMicrotask"),
        hc = fc && fc.value;
    hc || (Xs = function() {
        var e, t;
        for (lc && (e = cc.domain) && e.exit(); Js;) {
            t = Js.fn, Js = Js.next;
            try {
                t()
            } catch (e) {
                throw Js ? Zs() : Qs = void 0, e
            }
        }
        Qs = void 0, e && e.enter()
    }, lc ? Zs = function() {
        cc.nextTick(Xs)
    } : sc && !Ms ? (ec = !0, tc = document.createTextNode(""), new sc(Xs).observe(tc, {
        characterData: !0
    }), Zs = function() {
        tc.data = ec = !ec
    }) : uc && uc.resolve ? (nc = uc.resolve(void 0), rc = nc.then, Zs = function() {
        rc.call(nc, Xs)
    }) : Zs = function() {
        ac.call(r, Xs)
    });
    var pc, dc, gc, mc, vc = hc || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            Qs && (Qs.next = t), Js || (Js = t, Zs()), Qs = t
        },
        yc = function(e) {
            var t, n;
            this.promise = new e((function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            })), this.resolve = Pe(t), this.reject = Pe(n)
        },
        bc = {
            f: function(e) {
                return new yc(e)
            }
        },
        wc = function(e, t) {
            if (x(e), m(t) && t.constructor === e) return t;
            var n = bc.f(e);
            return (0, n.resolve)(t), n.promise
        },
        _c = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        },
        Ec = ic.set,
        Sc = qe("species"),
        kc = "Promise",
        Tc = Z.get,
        xc = Z.set,
        Ac = Z.getterFor(kc),
        Oc = Ls,
        Ic = r.TypeError,
        Cc = r.document,
        Pc = r.process,
        jc = re("fetch"),
        Rc = bc.f,
        Lc = Rc,
        Nc = "process" == f(Pc),
        Mc = !!(Cc && Cc.createEvent && r.dispatchEvent),
        Uc = "unhandledrejection",
        Dc = Oe(kc, (function() {
            if (!(U(Oc) !== String(Oc))) {
                if (66 === Bt) return !0;
                if (!Nc && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (Bt >= 51 && /native code/.test(Oc)) return !1;
            var e = Oc.resolve(1),
                t = function(e) {
                    e((function() {}), (function() {}))
                };
            return (e.constructor = {})[Sc] = t, !(e.then((function() {})) instanceof t)
        })),
        Fc = Dc || !bt((function(e) {
            Oc.all(e).catch((function() {}))
        })),
        qc = function(e) {
            var t;
            return !(!m(e) || "function" != typeof(t = e.then)) && t
        },
        Bc = function(e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var r = t.reactions;
                vc((function() {
                    for (var i = t.value, o = 1 == t.state, a = 0; r.length > a;) {
                        var s, c, u, l = r[a++],
                            f = o ? l.ok : l.fail,
                            h = l.resolve,
                            p = l.reject,
                            d = l.domain;
                        try {
                            f ? (o || (2 === t.rejection && zc(e, t), t.rejection = 1), !0 === f ? s = i : (d && d.enter(), s = f(i), d && (d.exit(), u = !0)), s === l.promise ? p(Ic("Promise-chain cycle")) : (c = qc(s)) ? c.call(s, h, p) : h(s)) : p(i)
                        } catch (e) {
                            d && !u && d.exit(), p(e)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && Vc(e, t)
                }))
            }
        },
        Hc = function(e, t, n) {
            var i, o;
            Mc ? ((i = Cc.createEvent("Event")).promise = t, i.reason = n, i.initEvent(e, !1, !0), r.dispatchEvent(i)) : i = {
                promise: t,
                reason: n
            }, (o = r["on" + e]) ? o(i) : e === Uc && function(e, t) {
                var n = r.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }("Unhandled promise rejection", n)
        },
        Vc = function(e, t) {
            Ec.call(r, (function() {
                var n, r = t.value;
                if (Wc(t) && (n = _c((function() {
                        Nc ? Pc.emit("unhandledRejection", r, e) : Hc(Uc, e, r)
                    })), t.rejection = Nc || Wc(t) ? 2 : 1, n.error)) throw n.value
            }))
        },
        Wc = function(e) {
            return 1 !== e.rejection && !e.parent
        },
        zc = function(e, t) {
            Ec.call(r, (function() {
                Nc ? Pc.emit("rejectionHandled", e) : Hc("rejectionhandled", e, t.value)
            }))
        },
        Yc = function(e, t, n, r) {
            return function(i) {
                e(t, n, i, r)
            }
        },
        $c = function(e, t, n, r) {
            t.done || (t.done = !0, r && (t = r), t.value = n, t.state = 2, Bc(e, t, !0))
        },
        Gc = function(e, t, n, r) {
            if (!t.done) {
                t.done = !0, r && (t = r);
                try {
                    if (e === n) throw Ic("Promise can't be resolved itself");
                    var i = qc(n);
                    i ? vc((function() {
                        var r = {
                            done: !1
                        };
                        try {
                            i.call(n, Yc(Gc, e, r, t), Yc($c, e, r, t))
                        } catch (n) {
                            $c(e, r, n, t)
                        }
                    })) : (t.value = n, t.state = 1, Bc(e, t, !1))
                } catch (n) {
                    $c(e, {
                        done: !1
                    }, n, t)
                }
            }
        };
    Dc && (Oc = function(e) {
        eo(this, Oc, kc), Pe(e), pc.call(this);
        var t = Tc(this);
        try {
            e(Yc(Gc, this, t), Yc($c, this, t))
        } catch (e) {
            $c(this, t, e)
        }
    }, (pc = function(e) {
        xc(this, {
            type: kc,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = po(Oc.prototype, {
        then: function(e, t) {
            var n = Ac(this),
                r = Rc(qi(this, Oc));
            return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = Nc ? Pc.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && Bc(this, n, !1), r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), dc = function() {
        var e = new pc,
            t = Tc(e);
        this.promise = e, this.resolve = Yc(Gc, e, t), this.reject = Yc($c, e, t)
    }, bc.f = Rc = function(e) {
        return e === Oc || e === gc ? new dc(e) : Lc(e)
    }, "function" == typeof Ls && (mc = Ls.prototype.then, ee(Ls.prototype, "then", (function(e, t) {
        var n = this;
        return new Oc((function(e, t) {
            mc.call(n, e, t)
        })).then(e, t)
    }), {
        unsafe: !0
    }), "function" == typeof jc && Ce({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return wc(Oc, jc.apply(r, arguments))
        }
    }))), Ce({
        global: !0,
        wrap: !0,
        forced: Dc
    }, {
        Promise: Oc
    }), Yn(Oc, kc, !1), nn(kc), gc = re(kc), Ce({
        target: kc,
        stat: !0,
        forced: Dc
    }, {
        reject: function(e) {
            var t = Rc(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), Ce({
        target: kc,
        stat: !0,
        forced: Dc
    }, {
        resolve: function(e) {
            return wc(this, e)
        }
    }), Ce({
        target: kc,
        stat: !0,
        forced: Fc
    }, {
        all: function(e) {
            var t = this,
                n = Rc(t),
                r = n.resolve,
                i = n.reject,
                o = _c((function() {
                    var n = Pe(t.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    Ns(e, (function(e) {
                        var c = a++,
                            u = !1;
                        o.push(void 0), s++, n.call(t, e).then((function(e) {
                            u || (u = !0, o[c] = e, --s || r(o))
                        }), i)
                    })), --s || r(o)
                }));
            return o.error && i(o.value), n.promise
        },
        race: function(e) {
            var t = this,
                n = Rc(t),
                r = n.reject,
                i = _c((function() {
                    var i = Pe(t.resolve);
                    Ns(e, (function(e) {
                        i.call(t, e).then(n.resolve, r)
                    }))
                }));
            return i.error && r(i.value), n.promise
        }
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var Kc = function(e, t) {
        return (Kc = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };

    function Xc(e, t) {
        function n() {
            this.constructor = e
        }
        Kc(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var Jc, Qc, Zc = function() {
        return (Zc = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function eu(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    }

    function tu() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(eu(arguments[t]));
        return e
    }! function(e) {
        e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e.Critical = "critical"
    }(Jc || (Jc = {})),
    function(e) {
        e.fromString = function(t) {
            switch (t) {
                case "debug":
                    return e.Debug;
                case "info":
                    return e.Info;
                case "warn":
                case "warning":
                    return e.Warning;
                case "error":
                    return e.Error;
                case "fatal":
                    return e.Fatal;
                case "critical":
                    return e.Critical;
                case "log":
                default:
                    return e.Log
            }
        }
    }(Jc || (Jc = {})),
    function(e) {
        e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.Invalid = "invalid", e.Failed = "failed"
    }(Qc || (Qc = {})),
    function(e) {
        e.fromHttpCode = function(t) {
            return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
        }
    }(Qc || (Qc = {}));
    var nu = O.f,
        ru = Function.prototype,
        iu = ru.toString,
        ou = /^\s*function ([^ (]*)/,
        au = "name";
    o && !(au in ru) && nu(ru, au, {
        configurable: !0,
        get: function() {
            try {
                return iu.call(this).match(ou)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var su = Object.setPrototypeOf || ({
            __proto__: []
        }
        instanceof Array ? function(e, t) {
            return e.__proto__ = t, e
        } : function(e, t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            return e
        });
    var cu = function(e) {
        function t(t) {
            var n = this.constructor,
                r = e.call(this, t) || this;
            return r.message = t, r.name = n.prototype.constructor.name, su(r, n.prototype), r
        }
        return Xc(t, e), t
    }(Error);

    function uu(e) {
        switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return yu(e, Error)
        }
    }

    function lu(e) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(e)
    }

    function fu(e) {
        return "[object DOMError]" === Object.prototype.toString.call(e)
    }

    function hu(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }

    function pu(e) {
        return null === e || "object" !== fs(e) && "function" != typeof e
    }

    function du(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function gu(e) {
        return "undefined" != typeof Event && yu(e, Event)
    }

    function mu(e) {
        return "undefined" != typeof Element && yu(e, Element)
    }

    function vu(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }

    function yu(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
    Ii("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = d(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = x(e),
                o = String(this);
            if (!i.global) return ji(i, o);
            var a = i.unicode;
            i.lastIndex = 0;
            for (var s, c = [], u = 0; null !== (s = ji(i, o));) {
                var l = String(s[0]);
                c[u] = l, "" === l && (i.lastIndex = Pi(o, ce(i.lastIndex), a)), u++
            }
            return 0 === u ? null : c
        }]
    }));
    var bu, wu = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
        _u = O.f,
        Eu = r.Int8Array,
        Su = Eu && Eu.prototype,
        ku = r.Uint8ClampedArray,
        Tu = ku && ku.prototype,
        xu = Eu && qn(Eu),
        Au = Su && qn(Su),
        Ou = Object.prototype,
        Iu = Ou.isPrototypeOf,
        Cu = qe("toStringTag"),
        Pu = V("TYPED_ARRAY_TAG"),
        ju = wu && !!Gt && "Opera" !== ft(r.opera),
        Ru = !1,
        Lu = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        },
        Nu = function(e) {
            return m(e) && b(Lu, ft(e))
        };
    for (bu in Lu) r[bu] || (ju = !1);
    if ((!ju || "function" != typeof xu || xu === Function.prototype) && (xu = function() {
            throw TypeError("Incorrect invocation")
        }, ju))
        for (bu in Lu) r[bu] && Gt(r[bu], xu);
    if ((!ju || !Au || Au === Ou) && (Au = xu.prototype, ju))
        for (bu in Lu) r[bu] && Gt(r[bu].prototype, Au);
    if (ju && qn(Tu) !== Au && Gt(Tu, Au), o && !b(Au, Cu))
        for (bu in Ru = !0, _u(Au, Cu, {
                get: function() {
                    return m(this) ? this[Pu] : void 0
                }
            }), Lu) r[bu] && I(r[bu], Pu, bu);
    var Mu = {
            NATIVE_ARRAY_BUFFER_VIEWS: ju,
            TYPED_ARRAY_TAG: Ru && Pu,
            aTypedArray: function(e) {
                if (Nu(e)) return e;
                throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function(e) {
                if (Gt) {
                    if (Iu.call(xu, e)) return e
                } else
                    for (var t in Lu)
                        if (b(Lu, bu)) {
                            var n = r[t];
                            if (n && (e === n || Iu.call(n, e))) return e
                        } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function(e, t, n) {
                if (o) {
                    if (n)
                        for (var i in Lu) {
                            var a = r[i];
                            a && b(a.prototype, e) && delete a.prototype[e]
                        }
                    Au[e] && !n || ee(Au, e, n ? t : ju && Su[e] || t)
                }
            },
            exportTypedArrayStaticMethod: function(e, t, n) {
                var i, a;
                if (o) {
                    if (Gt) {
                        if (n)
                            for (i in Lu)(a = r[i]) && b(a, e) && delete a[e];
                        if (xu[e] && !n) return;
                        try {
                            return ee(xu, e, n ? t : ju && Eu[e] || t)
                        } catch (e) {}
                    }
                    for (i in Lu) !(a = r[i]) || a[e] && !n || ee(a, e, t)
                }
            },
            isView: function(e) {
                var t = ft(e);
                return "DataView" === t || b(Lu, t)
            },
            isTypedArray: Nu,
            TypedArray: xu,
            TypedArrayPrototype: Au
        },
        Uu = Mu.NATIVE_ARRAY_BUFFER_VIEWS,
        Du = r.ArrayBuffer,
        Fu = r.Int8Array,
        qu = !Uu || !i((function() {
            Fu(1)
        })) || !i((function() {
            new Fu(-1)
        })) || !bt((function(e) {
            new Fu, new Fu(null), new Fu(1.5), new Fu(e)
        }), !0) || i((function() {
            return 1 !== new Fu(new Du(2), 1, void 0).length
        })),
        Bu = function(e) {
            if (void 0 === e) return 0;
            var t = ae(e),
                n = ce(t);
            if (t !== n) throw RangeError("Wrong length or index");
            return n
        },
        Hu = 1 / 0,
        Vu = Math.abs,
        Wu = Math.pow,
        zu = Math.floor,
        Yu = Math.log,
        $u = Math.LN2,
        Gu = function(e, t, n) {
            var r, i, o, a = new Array(n),
                s = 8 * n - t - 1,
                c = (1 << s) - 1,
                u = c >> 1,
                l = 23 === t ? Wu(2, -24) - Wu(2, -77) : 0,
                f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                h = 0;
            for ((e = Vu(e)) != e || e === Hu ? (i = e != e ? 1 : 0, r = c) : (r = zu(Yu(e) / $u), e * (o = Wu(2, -r)) < 1 && (r--, o *= 2), (e += r + u >= 1 ? l / o : l * Wu(2, 1 - u)) * o >= 2 && (r++, o /= 2), r + u >= c ? (i = 0, r = c) : r + u >= 1 ? (i = (e * o - 1) * Wu(2, t), r += u) : (i = e * Wu(2, u - 1) * Wu(2, t), r = 0)); t >= 8; a[h++] = 255 & i, i /= 256, t -= 8);
            for (r = r << t | i, s += t; s > 0; a[h++] = 255 & r, r /= 256, s -= 8);
            return a[--h] |= 128 * f, a
        },
        Ku = function(e, t) {
            var n, r = e.length,
                i = 8 * r - t - 1,
                o = (1 << i) - 1,
                a = o >> 1,
                s = i - 7,
                c = r - 1,
                u = e[c--],
                l = 127 & u;
            for (u >>= 7; s > 0; l = 256 * l + e[c], c--, s -= 8);
            for (n = l & (1 << -s) - 1, l >>= -s, s += t; s > 0; n = 256 * n + e[c], c--, s -= 8);
            if (0 === l) l = 1 - a;
            else {
                if (l === o) return n ? NaN : u ? -1 / 0 : Hu;
                n += Wu(2, t), l -= a
            }
            return (u ? -1 : 1) * n * Wu(2, l - t)
        },
        Xu = function(e) {
            for (var t = Re(this), n = ce(t.length), r = arguments.length, i = fe(r > 1 ? arguments[1] : void 0, n), o = r > 2 ? arguments[2] : void 0, a = void 0 === o ? n : fe(o, n); a > i;) t[i++] = e;
            return t
        },
        Ju = ye.f,
        Qu = O.f,
        Zu = Z.get,
        el = Z.set,
        tl = "ArrayBuffer",
        nl = "DataView",
        rl = "Wrong index",
        il = r.ArrayBuffer,
        ol = il,
        al = r.DataView,
        sl = al && al.prototype,
        cl = Object.prototype,
        ul = r.RangeError,
        ll = Gu,
        fl = Ku,
        hl = function(e) {
            return [255 & e]
        },
        pl = function(e) {
            return [255 & e, e >> 8 & 255]
        },
        dl = function(e) {
            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        },
        gl = function(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        },
        ml = function(e) {
            return ll(e, 23, 4)
        },
        vl = function(e) {
            return ll(e, 52, 8)
        },
        yl = function(e, t) {
            Qu(e.prototype, t, {
                get: function() {
                    return Zu(this)[t]
                }
            })
        },
        bl = function(e, t, n, r) {
            var i = Bu(n),
                o = Zu(e);
            if (i + t > o.byteLength) throw ul(rl);
            var a = Zu(o.buffer).bytes,
                s = i + o.byteOffset,
                c = a.slice(s, s + t);
            return r ? c : c.reverse()
        },
        wl = function(e, t, n, r, i, o) {
            var a = Bu(n),
                s = Zu(e);
            if (a + t > s.byteLength) throw ul(rl);
            for (var c = Zu(s.buffer).bytes, u = a + s.byteOffset, l = r(+i), f = 0; f < t; f++) c[u + f] = l[o ? f : t - f - 1]
        };
    if (wu) {
        if (!i((function() {
                il(1)
            })) || !i((function() {
                new il(-1)
            })) || i((function() {
                return new il, new il(1.5), new il(NaN), il.name != tl
            }))) {
            for (var _l, El = (ol = function(e) {
                    return eo(this, ol), new il(Bu(e))
                }).prototype = il.prototype, Sl = Ju(il), kl = 0; Sl.length > kl;)(_l = Sl[kl++]) in ol || I(ol, _l, il[_l]);
            El.constructor = ol
        }
        Gt && qn(sl) !== cl && Gt(sl, cl);
        var Tl = new al(new ol(2)),
            xl = sl.setInt8;
        Tl.setInt8(0, 2147483648), Tl.setInt8(1, 2147483649), !Tl.getInt8(0) && Tl.getInt8(1) || po(sl, {
            setInt8: function(e, t) {
                xl.call(this, e, t << 24 >> 24)
            },
            setUint8: function(e, t) {
                xl.call(this, e, t << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else ol = function(e) {
        eo(this, ol, tl);
        var t = Bu(e);
        el(this, {
            bytes: Xu.call(new Array(t), 0),
            byteLength: t
        }), o || (this.byteLength = t)
    }, al = function(e, t, n) {
        eo(this, al, nl), eo(e, ol, nl);
        var r = Zu(e).byteLength,
            i = ae(t);
        if (i < 0 || i > r) throw ul("Wrong offset");
        if (i + (n = void 0 === n ? r - i : ce(n)) > r) throw ul("Wrong length");
        el(this, {
            buffer: e,
            byteLength: n,
            byteOffset: i
        }), o || (this.buffer = e, this.byteLength = n, this.byteOffset = i)
    }, o && (yl(ol, "byteLength"), yl(al, "buffer"), yl(al, "byteLength"), yl(al, "byteOffset")), po(al.prototype, {
        getInt8: function(e) {
            return bl(this, 1, e)[0] << 24 >> 24
        },
        getUint8: function(e) {
            return bl(this, 1, e)[0]
        },
        getInt16: function(e) {
            var t = bl(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
            return (t[1] << 8 | t[0]) << 16 >> 16
        },
        getUint16: function(e) {
            var t = bl(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
            return t[1] << 8 | t[0]
        },
        getInt32: function(e) {
            return gl(bl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
        },
        getUint32: function(e) {
            return gl(bl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        },
        getFloat32: function(e) {
            return fl(bl(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
        },
        getFloat64: function(e) {
            return fl(bl(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
        },
        setInt8: function(e, t) {
            wl(this, 1, e, hl, t)
        },
        setUint8: function(e, t) {
            wl(this, 1, e, hl, t)
        },
        setInt16: function(e, t) {
            wl(this, 2, e, pl, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint16: function(e, t) {
            wl(this, 2, e, pl, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setInt32: function(e, t) {
            wl(this, 4, e, dl, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint32: function(e, t) {
            wl(this, 4, e, dl, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat32: function(e, t) {
            wl(this, 4, e, ml, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat64: function(e, t) {
            wl(this, 8, e, vl, t, arguments.length > 2 ? arguments[2] : void 0)
        }
    });
    Yn(ol, tl), Yn(al, nl);
    var Al = {
            ArrayBuffer: ol,
            DataView: al
        },
        Ol = function(e, t) {
            var n = function(e) {
                var t = ae(e);
                if (t < 0) throw RangeError("The argument can't be less than 0");
                return t
            }(e);
            if (n % t) throw RangeError("Wrong offset");
            return n
        },
        Il = Mu.aTypedArrayConstructor,
        Cl = function(e) {
            var t, n, r, i, o, a, s = Re(e),
                c = arguments.length,
                u = c > 1 ? arguments[1] : void 0,
                l = void 0 !== u,
                f = pt(s);
            if (null != f && !ot(f))
                for (a = (o = f.call(s)).next, s = []; !(i = a.call(o)).done;) s.push(i.value);
            for (l && c > 2 && (u = je(u, arguments[2], 2)), n = ce(s.length), r = new(Il(this))(n), t = 0; n > t; t++) r[t] = l ? u(s[t], t) : s[t];
            return r
        };
    t((function(e) {
        var t = ye.f,
            n = ze.forEach,
            i = Z.get,
            a = Z.set,
            s = O.f,
            c = T.f,
            l = Math.round,
            f = r.RangeError,
            h = Al.ArrayBuffer,
            p = Al.DataView,
            d = Mu.NATIVE_ARRAY_BUFFER_VIEWS,
            g = Mu.TYPED_ARRAY_TAG,
            y = Mu.TypedArray,
            w = Mu.TypedArrayPrototype,
            _ = Mu.aTypedArrayConstructor,
            E = Mu.isTypedArray,
            S = "BYTES_PER_ELEMENT",
            k = "Wrong length",
            x = function(e, t) {
                for (var n = 0, r = t.length, i = new(_(e))(r); r > n;) i[n] = t[n++];
                return i
            },
            A = function(e, t) {
                s(e, t, {
                    get: function() {
                        return i(this)[t]
                    }
                })
            },
            C = function(e) {
                var t;
                return e instanceof h || "ArrayBuffer" == (t = ft(e)) || "SharedArrayBuffer" == t
            },
            P = function(e, t) {
                return E(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            },
            j = function(e, t) {
                return P(e, t = v(t, !0)) ? u(2, e[t]) : c(e, t)
            },
            R = function(e, t, n) {
                return !(P(e, t = v(t, !0)) && m(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? s(e, t, n) : (e[t] = n.value, e)
            };
        o ? (d || (T.f = j, O.f = R, A(w, "buffer"), A(w, "byteOffset"), A(w, "byteLength"), A(w, "length")), Ce({
            target: "Object",
            stat: !0,
            forced: !d
        }, {
            getOwnPropertyDescriptor: j,
            defineProperty: R
        }), e.exports = function(e, o, c) {
            var u = e.match(/\d+$/)[0] / 8,
                v = e + (c ? "Clamped" : "") + "Array",
                b = "get" + e,
                _ = "set" + e,
                T = r[v],
                A = T,
                O = A && A.prototype,
                P = {},
                j = function(e, t) {
                    s(e, t, {
                        get: function() {
                            return function(e, t) {
                                var n = i(e);
                                return n.view[b](t * u + n.byteOffset, !0)
                            }(this, t)
                        },
                        set: function(e) {
                            return function(e, t, n) {
                                var r = i(e);
                                c && (n = (n = l(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), r.view[_](t * u + r.byteOffset, n, !0)
                            }(this, t, e)
                        },
                        enumerable: !0
                    })
                };
            d ? qu && (A = o((function(e, t, n, r) {
                return eo(e, A, v), Kt(m(t) ? C(t) ? void 0 !== r ? new T(t, Ol(n, u), r) : void 0 !== n ? new T(t, Ol(n, u)) : new T(t) : E(t) ? x(A, t) : Cl.call(A, t) : new T(Bu(t)), e, A)
            })), Gt && Gt(A, y), n(t(T), (function(e) {
                e in A || I(A, e, T[e])
            })), A.prototype = O) : (A = o((function(e, t, n, r) {
                eo(e, A, v);
                var i, o, s, c = 0,
                    l = 0;
                if (m(t)) {
                    if (!C(t)) return E(t) ? x(A, t) : Cl.call(A, t);
                    i = t, l = Ol(n, u);
                    var d = t.byteLength;
                    if (void 0 === r) {
                        if (d % u) throw f(k);
                        if ((o = d - l) < 0) throw f(k)
                    } else if ((o = ce(r) * u) + l > d) throw f(k);
                    s = o / u
                } else s = Bu(t), i = new h(o = s * u);
                for (a(e, {
                        buffer: i,
                        byteOffset: l,
                        byteLength: o,
                        length: s,
                        view: new p(i)
                    }); c < s;) j(e, c++)
            })), Gt && Gt(A, y), O = A.prototype = It(w)), O.constructor !== A && I(O, "constructor", A), g && I(O, g, v), P[v] = A, Ce({
                global: !0,
                forced: A != T,
                sham: !d
            }, P), S in A || I(A, S, u), S in O || I(O, S, u), nn(v)
        }) : e.exports = function() {}
    }))("Uint16", (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }));
    var Pl = Math.min,
        jl = [].copyWithin || function(e, t) {
            var n = Re(this),
                r = ce(n.length),
                i = fe(e, r),
                o = fe(t, r),
                a = arguments.length > 2 ? arguments[2] : void 0,
                s = Pl((void 0 === a ? r : fe(a, r)) - o, r - i),
                c = 1;
            for (o < i && i < o + s && (c = -1, o += s - 1, i += s - 1); s-- > 0;) o in n ? n[i] = n[o] : delete n[i], i += c, o += c;
            return n
        },
        Rl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("copyWithin", (function(e, t) {
        return jl.call(Rl(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
    }));
    var Ll = ze.every,
        Nl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("every", (function(e) {
        return Ll(Nl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Ml = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("fill", (function(e) {
        return Xu.apply(Ml(this), arguments)
    }));
    var Ul = ze.filter,
        Dl = Mu.aTypedArray,
        Fl = Mu.aTypedArrayConstructor;
    (0, Mu.exportTypedArrayMethod)("filter", (function(e) {
        for (var t = Ul(Dl(this), e, arguments.length > 1 ? arguments[1] : void 0), n = qi(this, this.constructor), r = 0, i = t.length, o = new(Fl(n))(i); i > r;) o[r] = t[r++];
        return o
    }));
    var ql = ze.find,
        Bl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("find", (function(e) {
        return ql(Bl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Hl = ze.findIndex,
        Vl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("findIndex", (function(e) {
        return Hl(Vl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Wl = ze.forEach,
        zl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("forEach", (function(e) {
        Wl(zl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Yl = pe.includes,
        $l = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("includes", (function(e) {
        return Yl($l(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Gl = pe.indexOf,
        Kl = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("indexOf", (function(e) {
        return Gl(Kl(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Xl = qe("iterator"),
        Jl = r.Uint8Array,
        Ql = pi.values,
        Zl = pi.keys,
        ef = pi.entries,
        tf = Mu.aTypedArray,
        nf = Mu.exportTypedArrayMethod,
        rf = Jl && Jl.prototype[Xl],
        of = !!rf && ("values" == rf.name || null == rf.name),
        af = function() {
            return Ql.call(tf(this))
        };
    nf("entries", (function() {
        return ef.call(tf(this))
    })), nf("keys", (function() {
        return Zl.call(tf(this))
    })), nf("values", af, !of), nf(Xl, af, !of);
    var sf = Mu.aTypedArray,
        cf = [].join;
    (0, Mu.exportTypedArrayMethod)("join", (function(e) {
        return cf.apply(sf(this), arguments)
    }));
    var uf = Math.min,
        lf = [].lastIndexOf,
        ff = !!lf && 1 / [1].lastIndexOf(1, -0) < 0,
        hf = Ye("lastIndexOf"),
        pf = Xe("indexOf", {
            ACCESSORS: !0,
            1: 0
        }),
        df = ff || !hf || !pf ? function(e) {
            if (ff) return lf.apply(this, arguments) || 0;
            var t = g(this),
                n = ce(t.length),
                r = n - 1;
            for (arguments.length > 1 && (r = uf(r, ae(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in t && t[r] === e) return r || 0;
            return -1
        } : lf,
        gf = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("lastIndexOf", (function(e) {
        return df.apply(gf(this), arguments)
    }));
    var mf = ze.map,
        vf = Mu.aTypedArray,
        yf = Mu.aTypedArrayConstructor;
    (0, Mu.exportTypedArrayMethod)("map", (function(e) {
        return mf(vf(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, t) {
            return new(yf(qi(e, e.constructor)))(t)
        }))
    }));
    var bf = function(e) {
            return function(t, n, r, i) {
                Pe(n);
                var o = Re(t),
                    a = p(o),
                    s = ce(o.length),
                    c = e ? s - 1 : 0,
                    u = e ? -1 : 1;
                if (r < 2)
                    for (;;) {
                        if (c in a) {
                            i = a[c], c += u;
                            break
                        }
                        if (c += u, e ? c < 0 : s <= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? c >= 0 : s > c; c += u) c in a && (i = n(i, a[c], c, o));
                return i
            }
        },
        wf = {
            left: bf(!1),
            right: bf(!0)
        },
        _f = wf.left,
        Ef = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("reduce", (function(e) {
        return _f(Ef(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Sf = wf.right,
        kf = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("reduceRight", (function(e) {
        return Sf(kf(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Tf = Mu.aTypedArray,
        xf = Mu.exportTypedArrayMethod,
        Af = Math.floor;
    xf("reverse", (function() {
        for (var e, t = this, n = Tf(t).length, r = Af(n / 2), i = 0; i < r;) e = t[i], t[i++] = t[--n], t[n] = e;
        return t
    }));
    var Of = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("set", (function(e) {
        Of(this);
        var t = Ol(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = this.length,
            r = Re(e),
            i = ce(r.length),
            o = 0;
        if (i + t > n) throw RangeError("Wrong length");
        for (; o < i;) this[t + o] = r[o++]
    }), i((function() {
        new Int8Array(1).set({})
    })));
    var If = Mu.aTypedArray,
        Cf = Mu.aTypedArrayConstructor,
        Pf = [].slice;
    (0, Mu.exportTypedArrayMethod)("slice", (function(e, t) {
        for (var n = Pf.call(If(this), e, t), r = qi(this, this.constructor), i = 0, o = n.length, a = new(Cf(r))(o); o > i;) a[i] = n[i++];
        return a
    }), i((function() {
        new Int8Array(1).slice()
    })));
    var jf = ze.some,
        Rf = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("some", (function(e) {
        return jf(Rf(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Lf = Mu.aTypedArray,
        Nf = [].sort;
    (0, Mu.exportTypedArrayMethod)("sort", (function(e) {
        return Nf.call(Lf(this), e)
    }));
    var Mf = Mu.aTypedArray;
    (0, Mu.exportTypedArrayMethod)("subarray", (function(e, t) {
        var n = Mf(this),
            r = n.length,
            i = fe(e, r);
        return new(qi(n, n.constructor))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, ce((void 0 === t ? r : fe(t, r)) - i))
    }));
    var Uf = r.Int8Array,
        Df = Mu.aTypedArray,
        Ff = Mu.exportTypedArrayMethod,
        qf = [].toLocaleString,
        Bf = [].slice,
        Hf = !!Uf && i((function() {
            qf.call(new Uf(1))
        }));
    Ff("toLocaleString", (function() {
        return qf.apply(Hf ? Bf.call(Df(this)) : Df(this), arguments)
    }), i((function() {
        return [1, 2].toLocaleString() != new Uf([1, 2]).toLocaleString()
    })) || !i((function() {
        Uf.prototype.toLocaleString.call([1, 2])
    })));
    var Vf = Mu.exportTypedArrayMethod,
        Wf = r.Uint8Array,
        zf = Wf && Wf.prototype || {},
        Yf = [].toString,
        $f = [].join;
    i((function() {
        Yf.call({})
    })) && (Yf = function() {
        return $f.call(this)
    });
    var Gf = zf.toString != Yf;

    function Kf(e, t) {
        return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
    }

    function Xf(e, t) {
        if (!Array.isArray(e)) return "";
        for (var n = [], r = 0; r < e.length; r++) {
            var i = e[r];
            try {
                n.push(String(i))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }

    function Jf(e, t) {
        return !!hu(e) && (n = t, "[object RegExp]" === Object.prototype.toString.call(n) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t));
        var n
    }

    function Qf() {
        return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }
    Vf("toString", Yf, Gf);
    var Zf = {};

    function eh() {
        return Qf() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : Zf
    }

    function th() {
        var e = eh(),
            t = e.crypto || e.msCrypto;
        if (void 0 !== t && t.getRandomValues) {
            var n = new Uint16Array(8);
            t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
            var r = function(e) {
                for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                return t
            };
            return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }))
    }

    function nh(e) {
        if (!e) return {};
        var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        var n = t[6] || "",
            r = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + n + r
        }
    }

    function rh(e) {
        if (e.message) return e.message;
        if (e.exception && e.exception.values && e.exception.values[0]) {
            var t = e.exception.values[0];
            return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
        }
        return e.event_id || "<unknown>"
    }

    function ih(e) {
        var t = eh();
        if (!("console" in t)) return e();
        var n = t.console,
            r = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
            e in t.console && n[e].__sentry_original__ && (r[e] = n[e], n[e] = n[e].__sentry_original__)
        }));
        var i = e();
        return Object.keys(r).forEach((function(e) {
            n[e] = r[e]
        })), i
    }

    function oh(e, t, n) {
        e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].value = e.exception.values[0].value || t || "", e.exception.values[0].type = e.exception.values[0].type || n || "Error"
    }

    function ah(e, t) {
        void 0 === t && (t = {});
        try {
            e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}, Object.keys(t).forEach((function(n) {
                e.exception.values[0].mechanism[n] = t[n]
            }))
        } catch (e) {}
    }

    function sh(e) {
        try {
            for (var t = e, n = [], r = 0, i = 0, o = " > ".length, a = void 0; t && r++ < 5 && !("html" === (a = ch(t)) || r > 1 && i + n.length * o + a.length >= 80);) n.push(a), i += a.length, t = t.parentNode;
            return n.reverse().join(" > ")
        } catch (e) {
            return "<unknown>"
        }
    }

    function ch(e) {
        var t, n, r, i, o, a = e,
            s = [];
        if (!a || !a.tagName) return "";
        if (s.push(a.tagName.toLowerCase()), a.id && s.push("#" + a.id), (t = a.className) && hu(t))
            for (n = t.split(/\s+/), o = 0; o < n.length; o++) s.push("." + n[o]);
        var c = ["type", "name", "title", "alt"];
        for (o = 0; o < c.length; o++) r = c[o], (i = a.getAttribute(r)) && s.push("[" + r + '="' + i + '"]');
        return s.join("")
    }
    var uh = Date.now(),
        lh = 0,
        fh = {
            now: function() {
                var e = Date.now() - uh;
                return e < lh && (e = lh), lh = e, e
            },
            timeOrigin: uh
        },
        hh = function() {
            if (Qf()) try {
                return (e = module, t = "perf_hooks", e.require(t)).performance
            } catch (e) {
                return fh
            }
            var e, t, n = eh().performance;
            return n && n.now ? (void 0 === n.timeOrigin && (n.timeOrigin = n.timing && n.timing.navigationStart || uh), n) : fh
        }();

    function ph() {
        return (hh.timeOrigin + hh.now()) / 1e3
    }

    function dh(e, t) {
        if (!t) return 6e4;
        var n = parseInt("" + t, 10);
        if (!isNaN(n)) return 1e3 * n;
        var r = Date.parse("" + t);
        return isNaN(r) ? 6e4 : r - e
    }
    var gh = "<anonymous>";

    function mh(e) {
        try {
            return e && "function" == typeof e && e.name || gh
        } catch (e) {
            return gh
        }
    }
    var vh = eh(),
        yh = "Sentry Logger ",
        bh = function() {
            function e() {
                this._enabled = !1
            }
            return e.prototype.disable = function() {
                this._enabled = !1
            }, e.prototype.enable = function() {
                this._enabled = !0
            }, e.prototype.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled && ih((function() {
                    vh.console.log(yh + "[Log]: " + e.join(" "))
                }))
            }, e.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled && ih((function() {
                    vh.console.warn(yh + "[Warn]: " + e.join(" "))
                }))
            }, e.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled && ih((function() {
                    vh.console.error(yh + "[Error]: " + e.join(" "))
                }))
            }, e
        }();
    vh.__SENTRY__ = vh.__SENTRY__ || {};
    var wh = vh.__SENTRY__.logger || (vh.__SENTRY__.logger = new bh),
        _h = Vt("splice"),
        Eh = Xe("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        Sh = Math.max,
        kh = Math.min,
        Th = 9007199254740991,
        xh = "Maximum allowed length exceeded";
    Ce({
        target: "Array",
        proto: !0,
        forced: !_h || !Eh
    }, {
        splice: function(e, t) {
            var n, r, i, o, a, s, c = Re(this),
                u = ce(c.length),
                l = fe(e, u),
                f = arguments.length;
            if (0 === f ? n = r = 0 : 1 === f ? (n = 0, r = u - l) : (n = f - 2, r = kh(Sh(ae(t), 0), u - l)), u + n - r > Th) throw TypeError(xh);
            for (i = He(c, r), o = 0; o < r; o++)(a = l + o) in c && at(i, o, c[a]);
            if (i.length = r, n < r) {
                for (o = l; o < u - r; o++) s = o + n, (a = o + r) in c ? c[s] = c[a] : delete c[s];
                for (o = u; o > u - r + n; o--) delete c[o - 1]
            } else if (n > r)
                for (o = u - r; o > l; o--) s = o + n - 1, (a = o + r - 1) in c ? c[s] = c[a] : delete c[s];
            for (o = 0; o < n; o++) c[o + l] = arguments[o + 2];
            return c.length = u - r + n, i
        }
    });
    var Ah = !i((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        Oh = t((function(e) {
            var t = O.f,
                n = V("meta"),
                r = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                o = function(e) {
                    t(e, n, {
                        value: {
                            objectID: "O" + ++r,
                            weakData: {}
                        }
                    })
                },
                a = e.exports = {
                    REQUIRED: !1,
                    fastKey: function(e, t) {
                        if (!m(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!b(e, n)) {
                            if (!i(e)) return "F";
                            if (!t) return "E";
                            o(e)
                        }
                        return e[n].objectID
                    },
                    getWeakData: function(e, t) {
                        if (!b(e, n)) {
                            if (!i(e)) return !0;
                            if (!t) return !1;
                            o(e)
                        }
                        return e[n].weakData
                    },
                    onFreeze: function(e) {
                        return Ah && a.REQUIRED && i(e) && !b(e, n) && o(e), e
                    }
                };
            Y[n] = !0
        })),
        Ih = (Oh.REQUIRED, Oh.fastKey, Oh.getWeakData, Oh.onFreeze, Oh.getWeakData),
        Ch = Z.set,
        Ph = Z.getterFor,
        jh = ze.find,
        Rh = ze.findIndex,
        Lh = 0,
        Nh = function(e) {
            return e.frozen || (e.frozen = new Mh)
        },
        Mh = function() {
            this.entries = []
        },
        Uh = function(e, t) {
            return jh(e.entries, (function(e) {
                return e[0] === t
            }))
        };
    Mh.prototype = {
            get: function(e) {
                var t = Uh(this, e);
                if (t) return t[1]
            },
            has: function(e) {
                return !!Uh(this, e)
            },
            set: function(e, t) {
                var n = Uh(this, e);
                n ? n[1] = t : this.entries.push([e, t])
            },
            delete: function(e) {
                var t = Rh(this.entries, (function(t) {
                    return t[0] === e
                }));
                return ~t && this.entries.splice(t, 1), !!~t
            }
        },
        function(e, t, n) {
            var o = -1 !== e.indexOf("Map"),
                a = -1 !== e.indexOf("Weak"),
                s = o ? "set" : "add",
                c = r[e],
                u = c && c.prototype,
                l = c,
                f = {},
                h = function(e) {
                    var t = u[e];
                    ee(u, e, "add" == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : "delete" == e ? function(e) {
                        return !(a && !m(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function(e) {
                        return a && !m(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function(e) {
                        return !(a && !m(e)) && t.call(this, 0 === e ? 0 : e)
                    } : function(e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if (Oe(e, "function" != typeof c || !(a || u.forEach && !i((function() {
                    (new c).entries().next()
                }))))) l = n.getConstructor(t, e, o, s), Oh.REQUIRED = !0;
            else if (Oe(e, !0)) {
                var p = new l,
                    d = p[s](a ? {} : -0, 1) != p,
                    g = i((function() {
                        p.has(1)
                    })),
                    v = bt((function(e) {
                        new c(e)
                    })),
                    y = !a && i((function() {
                        for (var e = new c, t = 5; t--;) e[s](t, t);
                        return !e.has(-0)
                    }));
                v || ((l = t((function(t, n) {
                    eo(t, l, e);
                    var r = Kt(new c, t, l);
                    return null != n && Ns(n, r[s], r, o), r
                }))).prototype = u, u.constructor = l), (g || y) && (h("delete"), h("has"), o && h("get")), (y || d) && h(s), a && u.clear && delete u.clear
            }
            f[e] = l, Ce({
                global: !0,
                forced: l != c
            }, f), Yn(l, e), a || n.setStrong(l, e, o)
        }("WeakSet", (function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }), {
            getConstructor: function(e, t, n, r) {
                var i = e((function(e, o) {
                        eo(e, i, t), Ch(e, {
                            type: t,
                            id: Lh++,
                            frozen: void 0
                        }), null != o && Ns(o, e[r], e, n)
                    })),
                    o = Ph(t),
                    a = function(e, t, n) {
                        var r = o(e),
                            i = Ih(x(t), !0);
                        return !0 === i ? Nh(r).set(t, n) : i[r.id] = n, e
                    };
                return po(i.prototype, {
                    delete: function(e) {
                        var t = o(this);
                        if (!m(e)) return !1;
                        var n = Ih(e);
                        return !0 === n ? Nh(t).delete(e) : n && b(n, t.id) && delete n[t.id]
                    },
                    has: function(e) {
                        var t = o(this);
                        if (!m(e)) return !1;
                        var n = Ih(e);
                        return !0 === n ? Nh(t).has(e) : n && b(n, t.id)
                    }
                }), po(i.prototype, n ? {
                    get: function(e) {
                        var t = o(this);
                        if (m(e)) {
                            var n = Ih(e);
                            return !0 === n ? Nh(t).get(e) : n ? n[t.id] : void 0
                        }
                    },
                    set: function(e, t) {
                        return a(this, e, t)
                    }
                } : {
                    add: function(e) {
                        return a(this, e, !0)
                    }
                }), i
            }
        });
    var Dh = function() {
        function e() {
            this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
        }
        return e.prototype.memoize = function(e) {
            if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
            for (var t = 0; t < this._inner.length; t++) {
                if (this._inner[t] === e) return !0
            }
            return this._inner.push(e), !1
        }, e.prototype.unmemoize = function(e) {
            if (this._hasWeakSet) this._inner.delete(e);
            else
                for (var t = 0; t < this._inner.length; t++)
                    if (this._inner[t] === e) {
                        this._inner.splice(t, 1);
                        break
                    }
        }, e
    }();

    function Fh(e, t, n) {
        if (t in e) {
            var r = e[t],
                i = n(r);
            if ("function" == typeof i) try {
                i.prototype = i.prototype || {}, Object.defineProperties(i, {
                    __sentry_original__: {
                        enumerable: !1,
                        value: r
                    }
                })
            } catch (e) {}
            e[t] = i
        }
    }

    function qh(e) {
        if (uu(e)) {
            var t = e,
                n = {
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                };
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }
        if (gu(e)) {
            var i = e,
                o = {};
            o.type = i.type;
            try {
                o.target = mu(i.target) ? sh(i.target) : Object.prototype.toString.call(i.target)
            } catch (e) {
                o.target = "<unknown>"
            }
            try {
                o.currentTarget = mu(i.currentTarget) ? sh(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
            } catch (e) {
                o.currentTarget = "<unknown>"
            }
            for (var r in "undefined" != typeof CustomEvent && yu(e, CustomEvent) && (o.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
            return o
        }
        return e
    }

    function Bh(e) {
        return function(e) {
            return ~-encodeURI(e).split(/%..|./).length
        }(JSON.stringify(e))
    }

    function Hh(e, t, n) {
        void 0 === t && (t = 3), void 0 === n && (n = 102400);
        var r = zh(e, t);
        return Bh(r) > n ? Hh(e, t - 1, n) : r
    }

    function Vh(e, t) {
        return "domain" === t && e && "object" === fs(e) && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" != typeof global && e === global ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : du(n = e) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + mh(e) + "]" : e;
        var n
    }

    function Wh(e, t, n, r) {
        if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new Dh), 0 === n) return function(e) {
            var t = Object.prototype.toString.call(e);
            if ("string" == typeof e) return e;
            if ("[object Object]" === t) return "[Object]";
            if ("[object Array]" === t) return "[Array]";
            var n = Vh(e);
            return pu(n) ? n : t
        }(t);
        if (null != t && "function" == typeof t.toJSON) return t.toJSON();
        var i = Vh(t, e);
        if (pu(i)) return i;
        var o = qh(t),
            a = Array.isArray(t) ? [] : {};
        if (r.memoize(t)) return "[Circular ~]";
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (a[s] = Wh(s, o[s], n - 1, r));
        return r.unmemoize(t), a
    }

    function zh(e, t) {
        try {
            return JSON.parse(JSON.stringify(e, (function(e, n) {
                return Wh(e, n, t)
            })))
        } catch (e) {
            return "**non-serializable**"
        }
    }

    function Yh(e, t) {
        void 0 === t && (t = 40);
        var n = Object.keys(qh(e));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= t) return Kf(n[0], t);
        for (var r = n.length; r > 0; r--) {
            var i = n.slice(0, r).join(", ");
            if (!(i.length > t)) return r === n.length ? i : Kf(i, t)
        }
        return ""
    }
    Ce({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function() {
            return URL.prototype.toString.call(this)
        }
    });
    var $h = ze.filter,
        Gh = Vt("filter"),
        Kh = Xe("filter");
    Ce({
        target: "Array",
        proto: !0,
        forced: !Gh || !Kh
    }, {
        filter: function(e) {
            return $h(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Xh, Jh = !!Ls && i((function() {
        Ls.prototype.finally.call({
            then: function() {}
        }, (function() {}))
    }));
    Ce({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: Jh
        }, {
            finally: function(e) {
                var t = qi(this, re("Promise")),
                    n = "function" == typeof e;
                return this.then(n ? function(n) {
                    return wc(t, e()).then((function() {
                        return n
                    }))
                } : e, n ? function(n) {
                    return wc(t, e()).then((function() {
                        throw n
                    }))
                } : e)
            }
        }), "function" != typeof Ls || Ls.prototype.finally || ee(Ls.prototype, "finally", re("Promise").prototype.finally),
        function(e) {
            e.PENDING = "PENDING", e.RESOLVED = "RESOLVED", e.REJECTED = "REJECTED"
        }(Xh || (Xh = {}));
    var Qh = function() {
            function e(e) {
                var t = this;
                this._state = Xh.PENDING, this._handlers = [], this._resolve = function(e) {
                    t._setResult(Xh.RESOLVED, e)
                }, this._reject = function(e) {
                    t._setResult(Xh.REJECTED, e)
                }, this._setResult = function(e, n) {
                    t._state === Xh.PENDING && (vu(n) ? n.then(t._resolve, t._reject) : (t._state = e, t._value = n, t._executeHandlers()))
                }, this._attachHandler = function(e) {
                    t._handlers = t._handlers.concat(e), t._executeHandlers()
                }, this._executeHandlers = function() {
                    if (t._state !== Xh.PENDING) {
                        var e = t._handlers.slice();
                        t._handlers = [], e.forEach((function(e) {
                            e.done || (t._state === Xh.RESOLVED && e.onfulfilled && e.onfulfilled(t._value), t._state === Xh.REJECTED && e.onrejected && e.onrejected(t._value), e.done = !0)
                        }))
                    }
                };
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            return e.resolve = function(t) {
                return new e((function(e) {
                    e(t)
                }))
            }, e.reject = function(t) {
                return new e((function(e, n) {
                    n(t)
                }))
            }, e.all = function(t) {
                return new e((function(n, r) {
                    if (Array.isArray(t))
                        if (0 !== t.length) {
                            var i = t.length,
                                o = [];
                            t.forEach((function(t, a) {
                                e.resolve(t).then((function(e) {
                                    o[a] = e, 0 === (i -= 1) && n(o)
                                })).then(null, r)
                            }))
                        } else n([]);
                    else r(new TypeError("Promise.all requires an array as input."))
                }))
            }, e.prototype.then = function(t, n) {
                var r = this;
                return new e((function(e, i) {
                    r._attachHandler({
                        done: !1,
                        onfulfilled: function(n) {
                            if (t) try {
                                return void e(t(n))
                            } catch (e) {
                                return void i(e)
                            } else e(n)
                        },
                        onrejected: function(t) {
                            if (n) try {
                                return void e(n(t))
                            } catch (e) {
                                return void i(e)
                            } else i(t)
                        }
                    })
                }))
            }, e.prototype.catch = function(e) {
                return this.then((function(e) {
                    return e
                }), e)
            }, e.prototype.finally = function(t) {
                var n = this;
                return new e((function(e, r) {
                    var i, o;
                    return n.then((function(e) {
                        o = !1, i = e, t && t()
                    }), (function(e) {
                        o = !0, i = e, t && t()
                    })).then((function() {
                        o ? r(i) : e(i)
                    }))
                }))
            }, e.prototype.toString = function() {
                return "[object SyncPromise]"
            }, e
        }(),
        Zh = function() {
            function e(e) {
                this._limit = e, this._buffer = []
            }
            return e.prototype.isReady = function() {
                return void 0 === this._limit || this.length() < this._limit
            }, e.prototype.add = function(e) {
                var t = this;
                return this.isReady() ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e), e.then((function() {
                    return t.remove(e)
                })).then(null, (function() {
                    return t.remove(e).then(null, (function() {}))
                })), e) : Qh.reject(new cu("Not adding Promise due to buffer limit reached."))
            }, e.prototype.remove = function(e) {
                return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
            }, e.prototype.length = function() {
                return this._buffer.length
            }, e.prototype.drain = function(e) {
                var t = this;
                return new Qh((function(n) {
                    var r = setTimeout((function() {
                        e && e > 0 && n(!1)
                    }), e);
                    Qh.all(t._buffer).then((function() {
                        clearTimeout(r), n(!0)
                    })).then(null, (function() {
                        n(!0)
                    }))
                }))
            }, e
        }();

    function ep() {
        if (!("fetch" in eh())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (e) {
            return !1
        }
    }

    function tp(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function np() {
        if (!ep()) return !1;
        try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), !0
        } catch (e) {
            return !1
        }
    }
    var rp, ip = eh(),
        op = {},
        ap = {};

    function sp(e) {
        if (!ap[e]) switch (ap[e] = !0, e) {
            case "console":
                ! function() {
                    if (!("console" in ip)) return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
                        e in ip.console && Fh(ip.console, e, (function(t) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                up("console", {
                                    args: n,
                                    level: e
                                }), t && Function.prototype.apply.call(t, ip.console, n)
                            }
                        }))
                    }))
                }();
                break;
            case "dom":
                ! function() {
                    if (!("document" in ip)) return;
                    ip.document.addEventListener("click", gp("click", up.bind(null, "dom")), !1), ip.document.addEventListener("keypress", mp(up.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach((function(e) {
                        var t = ip[e] && ip[e].prototype;
                        t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (Fh(t, "addEventListener", (function(e) {
                            return function(t, n, r) {
                                return n && n.handleEvent ? ("click" === t && Fh(n, "handleEvent", (function(e) {
                                    return function(t) {
                                        return gp("click", up.bind(null, "dom"))(t), e.call(this, t)
                                    }
                                })), "keypress" === t && Fh(n, "handleEvent", (function(e) {
                                    return function(t) {
                                        return mp(up.bind(null, "dom"))(t), e.call(this, t)
                                    }
                                }))) : ("click" === t && gp("click", up.bind(null, "dom"), !0)(this), "keypress" === t && mp(up.bind(null, "dom"))(this)), e.call(this, t, n, r)
                            }
                        })), Fh(t, "removeEventListener", (function(e) {
                            return function(t, n, r) {
                                try {
                                    e.call(this, t, n.__sentry_wrapped__, r)
                                } catch (e) {}
                                return e.call(this, t, n, r)
                            }
                        })))
                    }))
                }();
                break;
            case "xhr":
                ! function() {
                    if (!("XMLHttpRequest" in ip)) return;
                    var e = XMLHttpRequest.prototype;
                    Fh(e, "open", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = this,
                                i = t[1];
                            r.__sentry_xhr__ = {
                                method: hu(t[0]) ? t[0].toUpperCase() : t[0],
                                url: t[1]
                            }, hu(i) && "POST" === r.__sentry_xhr__.method && i.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                            var o = function() {
                                if (4 === r.readyState) {
                                    try {
                                        r.__sentry_xhr__ && (r.__sentry_xhr__.status_code = r.status)
                                    } catch (e) {}
                                    up("xhr", {
                                        args: t,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: r
                                    })
                                }
                            };
                            return "onreadystatechange" in r && "function" == typeof r.onreadystatechange ? Fh(r, "onreadystatechange", (function(e) {
                                return function() {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    return o(), e.apply(r, t)
                                }
                            })) : r.addEventListener("readystatechange", o), e.apply(r, t)
                        }
                    })), Fh(e, "send", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return up("xhr", {
                                args: t,
                                startTimestamp: Date.now(),
                                xhr: this
                            }), e.apply(this, t)
                        }
                    }))
                }();
                break;
            case "fetch":
                ! function() {
                    if (! function() {
                            if (!ep()) return !1;
                            var e = eh();
                            if (tp(e.fetch)) return !0;
                            var t = !1,
                                n = e.document;
                            if (n && "function" == typeof n.createElement) try {
                                var r = n.createElement("iframe");
                                r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = tp(r.contentWindow.fetch)), n.head.removeChild(r)
                            } catch (e) {
                                wh.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                            }
                            return t
                        }()) return;
                    Fh(ip, "fetch", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = {
                                args: t,
                                fetchData: {
                                    method: lp(t),
                                    url: fp(t)
                                },
                                startTimestamp: Date.now()
                            };
                            return up("fetch", Zc({}, r)), e.apply(ip, t).then((function(e) {
                                return up("fetch", Zc(Zc({}, r), {
                                    endTimestamp: Date.now(),
                                    response: e
                                })), e
                            }), (function(e) {
                                throw up("fetch", Zc(Zc({}, r), {
                                    endTimestamp: Date.now(),
                                    error: e
                                })), e
                            }))
                        }
                    }))
                }();
                break;
            case "history":
                ! function() {
                    if (! function() {
                            var e = eh(),
                                t = e.chrome,
                                n = t && t.app && t.app.runtime,
                                r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
                            return !n && r
                        }()) return;
                    var e = ip.onpopstate;

                    function t(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = t.length > 2 ? t[2] : void 0;
                            if (r) {
                                var i = rp,
                                    o = String(r);
                                rp = o, up("history", {
                                    from: i,
                                    to: o
                                })
                            }
                            return e.apply(this, t)
                        }
                    }
                    ip.onpopstate = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = ip.location.href,
                            i = rp;
                        if (rp = r, up("history", {
                                from: i,
                                to: r
                            }), e) return e.apply(this, t)
                    }, Fh(ip.history, "pushState", t), Fh(ip.history, "replaceState", t)
                }();
                break;
            case "error":
                vp = ip.onerror, ip.onerror = function(e, t, n, r, i) {
                    return up("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: e,
                        url: t
                    }), !!vp && vp.apply(this, arguments)
                };
                break;
            case "unhandledrejection":
                yp = ip.onunhandledrejection, ip.onunhandledrejection = function(e) {
                    return up("unhandledrejection", e), !yp || yp.apply(this, arguments)
                };
                break;
            default:
                wh.warn("unknown instrumentation type:", e)
        }
    }

    function cp(e) {
        e && "string" == typeof e.type && "function" == typeof e.callback && (op[e.type] = op[e.type] || [], op[e.type].push(e.callback), sp(e.type))
    }

    function up(e, t) {
        var n, r;
        if (e && op[e]) try {
            for (var i = function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                    if (n) return n.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(op[e] || []), o = i.next(); !o.done; o = i.next()) {
                var a = o.value;
                try {
                    a(t)
                } catch (t) {
                    wh.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + mh(a) + "\nError: " + t)
                }
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (r = i.return) && r.call(i)
            } finally {
                if (n) throw n.error
            }
        }
    }

    function lp(e) {
        return void 0 === e && (e = []), "Request" in ip && yu(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function fp(e) {
        return void 0 === e && (e = []), "string" == typeof e[0] ? e[0] : "Request" in ip && yu(e[0], Request) ? e[0].url : String(e[0])
    }
    var hp, pp, dp = 0;

    function gp(e, t, n) {
        return void 0 === n && (n = !1),
            function(r) {
                hp = void 0, r && pp !== r && (pp = r, dp && clearTimeout(dp), n ? dp = setTimeout((function() {
                    t({
                        event: r,
                        name: e
                    })
                })) : t({
                    event: r,
                    name: e
                }))
            }
    }

    function mp(e) {
        return function(t) {
            var n;
            try {
                n = t.target
            } catch (e) {
                return
            }
            var r = n && n.tagName;
            r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && (hp || gp("input", e)(t), clearTimeout(hp), hp = setTimeout((function() {
                hp = void 0
            }), 1e3))
        }
    }
    var vp = null;
    var yp = null;
    var bp = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
        wp = "Invalid Dsn",
        _p = function() {
            function e(e) {
                "string" == typeof e ? this._fromString(e) : this._fromComponents(e), this._validate()
            }
            return e.prototype.toString = function(e) {
                void 0 === e && (e = !1);
                var t = this,
                    n = t.host,
                    r = t.path,
                    i = t.pass,
                    o = t.port,
                    a = t.projectId;
                return t.protocol + "://" + t.user + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + a
            }, e.prototype._fromString = function(e) {
                var t = bp.exec(e);
                if (!t) throw new cu(wp);
                var n = eu(t.slice(1), 6),
                    r = n[0],
                    i = n[1],
                    o = n[2],
                    a = void 0 === o ? "" : o,
                    s = n[3],
                    c = n[4],
                    u = void 0 === c ? "" : c,
                    l = "",
                    f = n[5],
                    h = f.split("/");
                if (h.length > 1 && (l = h.slice(0, -1).join("/"), f = h.pop()), f) {
                    var p = f.match(/^\d+/);
                    p && (f = p[0])
                }
                this._fromComponents({
                    host: s,
                    pass: a,
                    path: l,
                    projectId: f,
                    port: u,
                    protocol: r,
                    user: i
                })
            }, e.prototype._fromComponents = function(e) {
                this.protocol = e.protocol, this.user = e.user, this.pass = e.pass || "", this.host = e.host, this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId
            }, e.prototype._validate = function() {
                var e = this;
                if (["protocol", "user", "host", "projectId"].forEach((function(t) {
                        if (!e[t]) throw new cu("Invalid Dsn: " + t + " missing")
                    })), !this.projectId.match(/^\d+$/)) throw new cu("Invalid Dsn: Invalid projectId " + this.projectId);
                if ("http" !== this.protocol && "https" !== this.protocol) throw new cu("Invalid Dsn: Invalid protocol " + this.protocol);
                if (this.port && isNaN(parseInt(this.port, 10))) throw new cu("Invalid Dsn: Invalid port " + this.port)
            }, e
        }(),
        Ep = function() {
            function e() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}
            }
            return e.clone = function(t) {
                var n = new e;
                return t && (n._breadcrumbs = tu(t._breadcrumbs), n._tags = Zc({}, t._tags), n._extra = Zc({}, t._extra), n._contexts = Zc({}, t._contexts), n._user = t._user, n._level = t._level, n._span = t._span, n._transactionName = t._transactionName, n._fingerprint = t._fingerprint, n._eventProcessors = tu(t._eventProcessors)), n
            }, e.prototype.addScopeListener = function(e) {
                this._scopeListeners.push(e)
            }, e.prototype.addEventProcessor = function(e) {
                return this._eventProcessors.push(e), this
            }, e.prototype.setUser = function(e) {
                return this._user = e || {}, this._notifyScopeListeners(), this
            }, e.prototype.setTags = function(e) {
                return this._tags = Zc(Zc({}, this._tags), e), this._notifyScopeListeners(), this
            }, e.prototype.setTag = function(e, t) {
                var n;
                return this._tags = Zc(Zc({}, this._tags), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, e.prototype.setExtras = function(e) {
                return this._extra = Zc(Zc({}, this._extra), e), this._notifyScopeListeners(), this
            }, e.prototype.setExtra = function(e, t) {
                var n;
                return this._extra = Zc(Zc({}, this._extra), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, e.prototype.setFingerprint = function(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }, e.prototype.setLevel = function(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }, e.prototype.setTransactionName = function(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this
            }, e.prototype.setTransaction = function(e) {
                return this.setTransactionName(e)
            }, e.prototype.setContext = function(e, t) {
                var n;
                return this._contexts = Zc(Zc({}, this._contexts), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, e.prototype.setSpan = function(e) {
                return this._span = e, this._notifyScopeListeners(), this
            }, e.prototype.getSpan = function() {
                return this._span
            }, e.prototype.getTransaction = function() {
                var e = this.getSpan();
                if (e && e.spanRecorder && e.spanRecorder.spans[0]) return e.spanRecorder.spans[0]
            }, e.prototype.update = function(t) {
                if (!t) return this;
                if ("function" == typeof t) {
                    var n = t(this);
                    return n instanceof e ? n : this
                }
                return t instanceof e ? (this._tags = Zc(Zc({}, this._tags), t._tags), this._extra = Zc(Zc({}, this._extra), t._extra), this._contexts = Zc(Zc({}, this._contexts), t._contexts), t._user && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint)) : du(t) && (t = t, this._tags = Zc(Zc({}, this._tags), t.tags), this._extra = Zc(Zc({}, this._extra), t.extra), this._contexts = Zc(Zc({}, this._contexts), t.contexts), t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint)), this
            }, e.prototype.clear = function() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._span = void 0, this._notifyScopeListeners(), this
            }, e.prototype.addBreadcrumb = function(e, t) {
                var n = Zc({
                    timestamp: ph()
                }, e);
                return this._breadcrumbs = void 0 !== t && t >= 0 ? tu(this._breadcrumbs, [n]).slice(-t) : tu(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
            }, e.prototype.clearBreadcrumbs = function() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }, e.prototype.applyToEvent = function(e, t) {
                return this._extra && Object.keys(this._extra).length && (e.extra = Zc(Zc({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = Zc(Zc({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = Zc(Zc({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = Zc(Zc({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span && (e.contexts = Zc({
                    trace: this._span.getTraceContext()
                }, e.contexts)), this._applyFingerprint(e), e.breadcrumbs = tu(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, this._notifyEventProcessors(tu(Sp(), this._eventProcessors), e, t)
            }, e.prototype._notifyEventProcessors = function(e, t, n, r) {
                var i = this;
                return void 0 === r && (r = 0), new Qh((function(o, a) {
                    var s = e[r];
                    if (null === t || "function" != typeof s) o(t);
                    else {
                        var c = s(Zc({}, t), n);
                        vu(c) ? c.then((function(t) {
                            return i._notifyEventProcessors(e, t, n, r + 1).then(o)
                        })).then(null, a) : i._notifyEventProcessors(e, c, n, r + 1).then(o).then(null, a)
                    }
                }))
            }, e.prototype._notifyScopeListeners = function() {
                var e = this;
                this._notifyingListeners || (this._notifyingListeners = !0, setTimeout((function() {
                    e._scopeListeners.forEach((function(t) {
                        t(e)
                    })), e._notifyingListeners = !1
                })))
            }, e.prototype._applyFingerprint = function(e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            }, e
        }();

    function Sp() {
        var e = eh();
        return e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [], e.__SENTRY__.globalEventProcessors
    }

    function kp(e) {
        Sp().push(e)
    }
    var Tp = function() {
        function e(e, t, n) {
            void 0 === t && (t = new Ep), void 0 === n && (n = 3), this._version = n, this._stack = [], this._stack.push({
                client: e,
                scope: t
            }), this.bindClient(e)
        }
        return e.prototype.isOlderThan = function(e) {
            return this._version < e
        }, e.prototype.bindClient = function(e) {
            this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
        }, e.prototype.pushScope = function() {
            var e = this.getStack(),
                t = e.length > 0 ? e[e.length - 1].scope : void 0,
                n = Ep.clone(t);
            return this.getStack().push({
                client: this.getClient(),
                scope: n
            }), n
        }, e.prototype.popScope = function() {
            return void 0 !== this.getStack().pop()
        }, e.prototype.withScope = function(e) {
            var t = this.pushScope();
            try {
                e(t)
            } finally {
                this.popScope()
            }
        }, e.prototype.getClient = function() {
            return this.getStackTop().client
        }, e.prototype.getScope = function() {
            return this.getStackTop().scope
        }, e.prototype.getStack = function() {
            return this._stack
        }, e.prototype.getStackTop = function() {
            return this._stack[this._stack.length - 1]
        }, e.prototype.captureException = function(e, t) {
            var n = this._lastEventId = th(),
                r = t;
            if (!t) {
                var i = void 0;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (e) {
                    i = e
                }
                r = {
                    originalException: e,
                    syntheticException: i
                }
            }
            return this._invokeClient("captureException", e, Zc(Zc({}, r), {
                event_id: n
            })), n
        }, e.prototype.captureMessage = function(e, t, n) {
            var r = this._lastEventId = th(),
                i = n;
            if (!n) {
                var o = void 0;
                try {
                    throw new Error(e)
                } catch (e) {
                    o = e
                }
                i = {
                    originalException: e,
                    syntheticException: o
                }
            }
            return this._invokeClient("captureMessage", e, t, Zc(Zc({}, i), {
                event_id: r
            })), r
        }, e.prototype.captureEvent = function(e, t) {
            var n = this._lastEventId = th();
            return this._invokeClient("captureEvent", e, Zc(Zc({}, t), {
                event_id: n
            })), n
        }, e.prototype.lastEventId = function() {
            return this._lastEventId
        }, e.prototype.addBreadcrumb = function(e, t) {
            var n = this.getStackTop();
            if (n.scope && n.client) {
                var r = n.client.getOptions && n.client.getOptions() || {},
                    i = r.beforeBreadcrumb,
                    o = void 0 === i ? null : i,
                    a = r.maxBreadcrumbs,
                    s = void 0 === a ? 100 : a;
                if (!(s <= 0)) {
                    var c = ph(),
                        u = Zc({
                            timestamp: c
                        }, e),
                        l = o ? ih((function() {
                            return o(u, t)
                        })) : u;
                    null !== l && n.scope.addBreadcrumb(l, Math.min(s, 100))
                }
            }
        }, e.prototype.setUser = function(e) {
            var t = this.getStackTop();
            t.scope && t.scope.setUser(e)
        }, e.prototype.setTags = function(e) {
            var t = this.getStackTop();
            t.scope && t.scope.setTags(e)
        }, e.prototype.setExtras = function(e) {
            var t = this.getStackTop();
            t.scope && t.scope.setExtras(e)
        }, e.prototype.setTag = function(e, t) {
            var n = this.getStackTop();
            n.scope && n.scope.setTag(e, t)
        }, e.prototype.setExtra = function(e, t) {
            var n = this.getStackTop();
            n.scope && n.scope.setExtra(e, t)
        }, e.prototype.setContext = function(e, t) {
            var n = this.getStackTop();
            n.scope && n.scope.setContext(e, t)
        }, e.prototype.configureScope = function(e) {
            var t = this.getStackTop();
            t.scope && t.client && e(t.scope)
        }, e.prototype.run = function(e) {
            var t = Ap(this);
            try {
                e(this)
            } finally {
                Ap(t)
            }
        }, e.prototype.getIntegration = function(e) {
            var t = this.getClient();
            if (!t) return null;
            try {
                return t.getIntegration(e)
            } catch (t) {
                return wh.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
            }
        }, e.prototype.startSpan = function(e) {
            return this._callExtensionMethod("startSpan", e)
        }, e.prototype.startTransaction = function(e) {
            return this._callExtensionMethod("startTransaction", e)
        }, e.prototype.traceHeaders = function() {
            return this._callExtensionMethod("traceHeaders")
        }, e.prototype._invokeClient = function(e) {
            for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var i = this.getStackTop();
            i && i.client && i.client[e] && (t = i.client)[e].apply(t, tu(n, [i.scope]))
        }, e.prototype._callExtensionMethod = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = xp(),
                i = r.__SENTRY__;
            if (i && i.extensions && "function" == typeof i.extensions[e]) return i.extensions[e].apply(this, t);
            wh.warn("Extension method " + e + " couldn't be found, doing nothing.")
        }, e
    }();

    function xp() {
        var e = eh();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function Ap(e) {
        var t = xp(),
            n = Cp(t);
        return Pp(t, e), n
    }

    function Op() {
        var e = xp();
        return Ip(e) && !Cp(e).isOlderThan(3) || Pp(e, new Tp), Qf() ? function(e) {
            try {
                var t = "domain",
                    n = xp().__SENTRY__;
                if (!n || !n.extensions || !n.extensions[t]) return Cp(e);
                var r = n.extensions[t].active;
                if (!r) return Cp(e);
                if (!Ip(r) || Cp(r).isOlderThan(3)) {
                    var i = Cp(e).getStackTop();
                    Pp(r, new Tp(i.client, Ep.clone(i.scope)))
                }
                return Cp(r)
            } catch (t) {
                return Cp(e)
            }
        }(e) : Cp(e)
    }

    function Ip(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function Cp(e) {
        return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = new Tp), e.__SENTRY__.hub
    }

    function Pp(e, t) {
        return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0)
    }

    function jp(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = Op();
        if (r && r[e]) return r[e].apply(r, tu(t));
        throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
    }

    function Rp(e, t) {
        var n;
        try {
            throw new Error("Sentry syntheticException")
        } catch (e) {
            n = e
        }
        return jp("captureException", e, {
            captureContext: t,
            originalException: e,
            syntheticException: n
        })
    }

    function Lp(e) {
        jp("withScope", e)
    }
    var Np = function() {
            function e(e) {
                this.dsn = e, this._dsnObject = new _p(e)
            }
            return e.prototype.getDsn = function() {
                return this._dsnObject
            }, e.prototype.getBaseApiEndpoint = function() {
                var e = this._dsnObject,
                    t = e.protocol ? e.protocol + ":" : "",
                    n = e.port ? ":" + e.port : "";
                return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
            }, e.prototype.getStoreEndpoint = function() {
                return this._getIngestEndpoint("store")
            }, e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return this.getStoreEndpoint() + "?" + this._encodedAuth()
            }, e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
            }, e.prototype.getStoreEndpointPath = function() {
                var e = this._dsnObject;
                return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
            }, e.prototype.getRequestHeaders = function(e, t) {
                var n = this._dsnObject,
                    r = ["Sentry sentry_version=7"];
                return r.push("sentry_client=" + e + "/" + t), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            }, e.prototype.getReportDialogEndpoint = function(e) {
                void 0 === e && (e = {});
                var t = this._dsnObject,
                    n = this.getBaseApiEndpoint() + "embed/error-page/",
                    r = [];
                for (var i in r.push("dsn=" + t.toString()), e)
                    if ("user" === i) {
                        if (!e.user) continue;
                        e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                    } else r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                return r.length ? n + "?" + r.join("&") : n
            }, e.prototype._getEnvelopeEndpoint = function() {
                return this._getIngestEndpoint("envelope")
            }, e.prototype._getIngestEndpoint = function(e) {
                return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + e + "/"
            }, e.prototype._encodedAuth = function() {
                var e, t = {
                    sentry_key: this._dsnObject.user,
                    sentry_version: "7"
                };
                return e = t, Object.keys(e).map((function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                })).join("&")
            }, e
        }(),
        Mp = [];

    function Up(e) {
        var t = {};
        return function(e) {
            var t = e.defaultIntegrations && tu(e.defaultIntegrations) || [],
                n = e.integrations,
                r = [];
            if (Array.isArray(n)) {
                var i = n.map((function(e) {
                        return e.name
                    })),
                    o = [];
                t.forEach((function(e) {
                    -1 === i.indexOf(e.name) && -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name))
                })), n.forEach((function(e) {
                    -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name))
                }))
            } else "function" == typeof n ? (r = n(t), r = Array.isArray(r) ? r : [r]) : r = tu(t);
            var a = r.map((function(e) {
                    return e.name
                })),
                s = "Debug";
            return -1 !== a.indexOf(s) && r.push.apply(r, tu(r.splice(a.indexOf(s), 1))), r
        }(e).forEach((function(e) {
            t[e.name] = e,
                function(e) {
                    -1 === Mp.indexOf(e.name) && (e.setupOnce(kp, Op), Mp.push(e.name), wh.log("Integration installed: " + e.name))
                }(e)
        })), t
    }
    var Dp, Fp = function() {
            function e(e, t) {
                this._integrations = {}, this._processing = !1, this._backend = new e(t), this._options = t, t.dsn && (this._dsn = new _p(t.dsn))
            }
            return e.prototype.captureException = function(e, t, n) {
                var r = this,
                    i = t && t.event_id;
                return this._processing = !0, this._getBackend().eventFromException(e, t).then((function(e) {
                    i = r.captureEvent(e, t, n)
                })), i
            }, e.prototype.captureMessage = function(e, t, n, r) {
                var i = this,
                    o = n && n.event_id;
                return this._processing = !0, (pu(e) ? this._getBackend().eventFromMessage("" + e, t, n) : this._getBackend().eventFromException(e, n)).then((function(e) {
                    o = i.captureEvent(e, n, r)
                })), o
            }, e.prototype.captureEvent = function(e, t, n) {
                var r = this,
                    i = t && t.event_id;
                return this._processing = !0, this._processEvent(e, t, n).then((function(e) {
                    i = e && e.event_id, r._processing = !1
                })).then(null, (function(e) {
                    wh.error(e), r._processing = !1
                })), i
            }, e.prototype.getDsn = function() {
                return this._dsn
            }, e.prototype.getOptions = function() {
                return this._options
            }, e.prototype.flush = function(e) {
                var t = this;
                return this._isClientProcessing(e).then((function(n) {
                    return clearInterval(n.interval), t._getBackend().getTransport().close(e).then((function(e) {
                        return n.ready && e
                    }))
                }))
            }, e.prototype.close = function(e) {
                var t = this;
                return this.flush(e).then((function(e) {
                    return t.getOptions().enabled = !1, e
                }))
            }, e.prototype.setupIntegrations = function() {
                this._isEnabled() && (this._integrations = Up(this._options))
            }, e.prototype.getIntegration = function(e) {
                try {
                    return this._integrations[e.id] || null
                } catch (t) {
                    return wh.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
                }
            }, e.prototype._isClientProcessing = function(e) {
                var t = this;
                return new Qh((function(n) {
                    var r = 0,
                        i = 0;
                    clearInterval(i), i = setInterval((function() {
                        t._processing ? (r += 1, e && r >= e && n({
                            interval: i,
                            ready: !1
                        })) : n({
                            interval: i,
                            ready: !0
                        })
                    }), 1)
                }))
            }, e.prototype._getBackend = function() {
                return this._backend
            }, e.prototype._isEnabled = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }, e.prototype._prepareEvent = function(e, t, n) {
                var r = this,
                    i = this.getOptions().normalizeDepth,
                    o = void 0 === i ? 3 : i,
                    a = Zc(Zc({}, e), {
                        event_id: e.event_id || (n && n.event_id ? n.event_id : th()),
                        timestamp: e.timestamp || ph()
                    });
                this._applyClientOptions(a), this._applyIntegrationsMetadata(a);
                var s = t;
                n && n.captureContext && (s = Ep.clone(s).update(n.captureContext));
                var c = Qh.resolve(a);
                return s && (c = s.applyToEvent(a, n)), c.then((function(e) {
                    return "number" == typeof o && o > 0 ? r._normalizeEvent(e, o) : e
                }))
            }, e.prototype._normalizeEvent = function(e, t) {
                if (!e) return null;
                var n = Zc(Zc(Zc(Zc(Zc({}, e), e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map((function(e) {
                        return Zc(Zc({}, e), e.data && {
                            data: zh(e.data, t)
                        })
                    }))
                }), e.user && {
                    user: zh(e.user, t)
                }), e.contexts && {
                    contexts: zh(e.contexts, t)
                }), e.extra && {
                    extra: zh(e.extra, t)
                });
                return e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace), n
            }, e.prototype._applyClientOptions = function(e) {
                var t = this.getOptions(),
                    n = t.environment,
                    r = t.release,
                    i = t.dist,
                    o = t.maxValueLength,
                    a = void 0 === o ? 250 : o;
                void 0 === e.environment && void 0 !== n && (e.environment = n), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = Kf(e.message, a));
                var s = e.exception && e.exception.values && e.exception.values[0];
                s && s.value && (s.value = Kf(s.value, a));
                var c = e.request;
                c && c.url && (c.url = Kf(c.url, a))
            }, e.prototype._applyIntegrationsMetadata = function(e) {
                var t = e.sdk,
                    n = Object.keys(this._integrations);
                t && n.length > 0 && (t.integrations = n)
            }, e.prototype._sendEvent = function(e) {
                this._getBackend().sendEvent(e)
            }, e.prototype._processEvent = function(e, t, n) {
                var r = this,
                    i = this.getOptions(),
                    o = i.beforeSend,
                    a = i.sampleRate;
                if (!this._isEnabled()) return Qh.reject("SDK not enabled, will not send event.");
                var s = "transaction" === e.type;
                return !s && "number" == typeof a && Math.random() > a ? Qh.reject("This event has been sampled, will not send event.") : new Qh((function(i, a) {
                    r._prepareEvent(e, n, t).then((function(e) {
                        if (null !== e) {
                            var n = e;
                            if (t && t.data && !0 === t.data.__sentry__ || !o || s) return r._sendEvent(n), void i(n);
                            var c = o(e, t);
                            if (void 0 === c) wh.error("`beforeSend` method has to return `null` or a valid event.");
                            else if (vu(c)) r._handleAsyncBeforeSend(c, i, a);
                            else {
                                if (null === (n = c)) return wh.log("`beforeSend` returned `null`, will not send event."), void i(null);
                                r._sendEvent(n), i(n)
                            }
                        } else a("An event processor returned null, will not send event.")
                    })).then(null, (function(e) {
                        r.captureException(e, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: e
                        }), a("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                    }))
                }))
            }, e.prototype._handleAsyncBeforeSend = function(e, t, n) {
                var r = this;
                e.then((function(e) {
                    null !== e ? (r._sendEvent(e), t(e)) : n("`beforeSend` returned `null`, will not send event.")
                })).then(null, (function(e) {
                    n("beforeSend rejected with " + e)
                }))
            }, e
        }(),
        qp = function() {
            function e() {}
            return e.prototype.sendEvent = function(e) {
                return Qh.resolve({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: Qc.Skipped
                })
            }, e.prototype.close = function(e) {
                return Qh.resolve(!0)
            }, e
        }(),
        Bp = function() {
            function e(e) {
                this._options = e, this._options.dsn || wh.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
            }
            return e.prototype.eventFromException = function(e, t) {
                throw new cu("Backend has to implement `eventFromException` method")
            }, e.prototype.eventFromMessage = function(e, t, n) {
                throw new cu("Backend has to implement `eventFromMessage` method")
            }, e.prototype.sendEvent = function(e) {
                this._transport.sendEvent(e).then(null, (function(e) {
                    wh.error("Error while sending event: " + e)
                }))
            }, e.prototype.getTransport = function() {
                return this._transport
            }, e.prototype._setupTransport = function() {
                return new qp
            }, e
        }();

    function Hp(e, t) {
        var n = "transaction" === e.type,
            r = {
                body: JSON.stringify(e),
                url: n ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
            };
        if (n) {
            var i = JSON.stringify({
                event_id: e.event_id,
                sent_at: new Date(1e3 * ph()).toISOString()
            }) + "\n" + JSON.stringify({
                type: e.type
            }) + "\n" + r.body;
            r.body = i
        }
        return r
    }
    var Vp = function() {
            function e() {
                this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                Dp = Function.prototype.toString, Function.prototype.toString = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.__sentry_original__ || this;
                    return Dp.apply(n, e)
                }
            }, e.id = "FunctionToString", e
        }(),
        Wp = ze.some,
        zp = Ye("some"),
        Yp = Xe("some");
    Ce({
        target: "Array",
        proto: !0,
        forced: !zp || !Yp
    }, {
        some: function(e) {
            return Wp(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var $p = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        Gp = function() {
            function e(t) {
                void 0 === t && (t = {}), this._options = t, this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                kp((function(t) {
                    var n = Op();
                    if (!n) return t;
                    var r = n.getIntegration(e);
                    if (r) {
                        var i = n.getClient(),
                            o = i ? i.getOptions() : {},
                            a = r._mergeOptions(o);
                        if (r._shouldDropEvent(t, a)) return null
                    }
                    return t
                }))
            }, e.prototype._shouldDropEvent = function(e, t) {
                return this._isSentryError(e, t) ? (wh.warn("Event dropped due to being internal Sentry Error.\nEvent: " + rh(e)), !0) : this._isIgnoredError(e, t) ? (wh.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + rh(e)), !0) : this._isDeniedUrl(e, t) ? (wh.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + rh(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0) : !this._isAllowedUrl(e, t) && (wh.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + rh(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0)
            }, e.prototype._isSentryError = function(e, t) {
                if (!t.ignoreInternal) return !1;
                try {
                    return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
                } catch (e) {
                    return !1
                }
            }, e.prototype._isIgnoredError = function(e, t) {
                return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some((function(e) {
                    return t.ignoreErrors.some((function(t) {
                        return Jf(e, t)
                    }))
                }))
            }, e.prototype._isDeniedUrl = function(e, t) {
                if (!t.denyUrls || !t.denyUrls.length) return !1;
                var n = this._getEventFilterUrl(e);
                return !!n && t.denyUrls.some((function(e) {
                    return Jf(n, e)
                }))
            }, e.prototype._isAllowedUrl = function(e, t) {
                if (!t.allowUrls || !t.allowUrls.length) return !0;
                var n = this._getEventFilterUrl(e);
                return !n || t.allowUrls.some((function(e) {
                    return Jf(n, e)
                }))
            }, e.prototype._mergeOptions = function(e) {
                return void 0 === e && (e = {}), {
                    allowUrls: tu(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
                    denyUrls: tu(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
                    ignoreErrors: tu(this._options.ignoreErrors || [], e.ignoreErrors || [], $p),
                    ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
                }
            }, e.prototype._getPossibleEventMessages = function(e) {
                if (e.message) return [e.message];
                if (e.exception) try {
                    var t = e.exception.values && e.exception.values[0] || {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        i = t.value,
                        o = void 0 === i ? "" : i;
                    return ["" + o, r + ": " + o]
                } catch (t) {
                    return wh.error("Cannot extract message for event " + rh(e)), []
                }
                return []
            }, e.prototype._getEventFilterUrl = function(e) {
                try {
                    if (e.stacktrace) {
                        var t = e.stacktrace.frames;
                        return t && t[t.length - 1].filename || null
                    }
                    if (e.exception) {
                        var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                        return n && n[n.length - 1].filename || null
                    }
                    return null
                } catch (t) {
                    return wh.error("Cannot extract url for event " + rh(e)), null
                }
            }, e.id = "InboundFilters", e
        }(),
        Kp = "?",
        Xp = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Jp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
        Qp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Zp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        ed = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        td = /Minified React error #\d+;/i;

    function nd(e) {
        var t = null,
            n = 0;
        e && ("number" == typeof e.framesToPop ? n = e.framesToPop : td.test(e.message) && (n = 1));
        try {
            if (t = function(e) {
                    if (!e || !e.stacktrace) return null;
                    for (var t, n = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = n.split("\n"), a = [], s = 0; s < o.length; s += 2) {
                        var c = null;
                        (t = r.exec(o[s])) ? c = {
                            url: t[2],
                            func: t[3],
                            args: [],
                            line: +t[1],
                            column: null
                        }: (t = i.exec(o[s])) && (c = {
                            url: t[6],
                            func: t[3] || t[4],
                            args: t[5] ? t[5].split(",") : [],
                            line: +t[1],
                            column: +t[2]
                        }), c && (!c.func && c.line && (c.func = Kp), a.push(c))
                    }
                    if (!a.length) return null;
                    return {
                        message: id(e),
                        name: e.name,
                        stack: a
                    }
                }(e)) return rd(t, n)
        } catch (e) {}
        try {
            if (t = function(e) {
                    if (!e || !e.stack) return null;
                    for (var t, n, r, i = [], o = e.stack.split("\n"), a = 0; a < o.length; ++a) {
                        if (n = Xp.exec(o[a])) {
                            var s = n[2] && 0 === n[2].indexOf("native");
                            n[2] && 0 === n[2].indexOf("eval") && (t = ed.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]), r = {
                                url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                func: n[1] || Kp,
                                args: s ? [n[2]] : [],
                                line: n[3] ? +n[3] : null,
                                column: n[4] ? +n[4] : null
                            }
                        } else if (n = Qp.exec(o[a])) r = {
                            url: n[2],
                            func: n[1] || Kp,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                        else {
                            if (!(n = Jp.exec(o[a]))) continue;
                            n[3] && n[3].indexOf(" > eval") > -1 && (t = Zp.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = t[1], n[4] = t[2], n[5] = "") : 0 !== a || n[5] || void 0 === e.columnNumber || (i[0].column = e.columnNumber + 1), r = {
                                url: n[3],
                                func: n[1] || Kp,
                                args: n[2] ? n[2].split(",") : [],
                                line: n[4] ? +n[4] : null,
                                column: n[5] ? +n[5] : null
                            }
                        }!r.func && r.line && (r.func = Kp), i.push(r)
                    }
                    if (!i.length) return null;
                    return {
                        message: id(e),
                        name: e.name,
                        stack: i
                    }
                }(e)) return rd(t, n)
        } catch (e) {}
        return {
            message: id(e),
            name: e && e.name,
            stack: [],
            failed: !0
        }
    }

    function rd(e, t) {
        try {
            return Zc(Zc({}, e), {
                stack: e.stack.slice(t)
            })
        } catch (t) {
            return e
        }
    }

    function id(e) {
        var t = e && e.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
    }

    function od(e) {
        var t = sd(e.stack),
            n = {
                type: e.name,
                value: e.message
            };
        return t && t.length && (n.stacktrace = {
            frames: t
        }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
    }

    function ad(e) {
        return {
            exception: {
                values: [od(e)]
            }
        }
    }

    function sd(e) {
        if (!e || !e.length) return [];
        var t = e,
            n = t[0].func || "",
            r = t[t.length - 1].func || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, 50).map((function(e) {
            return {
                colno: null === e.column ? void 0 : e.column,
                filename: e.url || t[0].url,
                function: e.func || "?",
                in_app: !0,
                lineno: null === e.line ? void 0 : e.line
            }
        })).reverse()
    }

    function cd(e, t, n) {
        var r, i;
        if (void 0 === n && (n = {}), lu(e) && e.error) return r = ad(nd(e = e.error));
        if (fu(e) || (i = e, "[object DOMException]" === Object.prototype.toString.call(i))) {
            var o = e,
                a = o.name || (fu(o) ? "DOMError" : "DOMException"),
                s = o.message ? a + ": " + o.message : a;
            return oh(r = ud(s, t, n), s), r
        }
        return uu(e) ? r = ad(nd(e)) : du(e) || gu(e) ? (ah(r = function(e, t, n) {
            var r = {
                exception: {
                    values: [{
                        type: gu(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Yh(e)
                    }]
                },
                extra: {
                    __serialized__: Hh(e)
                }
            };
            if (t) {
                var i = sd(nd(t).stack);
                r.stacktrace = {
                    frames: i
                }
            }
            return r
        }(e, t, n.rejection), {
            synthetic: !0
        }), r) : (oh(r = ud(e, t, n), "" + e, void 0), ah(r, {
            synthetic: !0
        }), r)
    }

    function ud(e, t, n) {
        void 0 === n && (n = {});
        var r = {
            message: e
        };
        if (n.attachStacktrace && t) {
            var i = sd(nd(t).stack);
            r.stacktrace = {
                frames: i
            }
        }
        return r
    }
    var ld = function() {
            function e(e) {
                this.options = e, this._buffer = new Zh(30), this._api = new Np(this.options.dsn), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
            }
            return e.prototype.sendEvent = function(e) {
                throw new cu("Transport Class has to implement `sendEvent` method")
            }, e.prototype.close = function(e) {
                return this._buffer.drain(e)
            }, e
        }(),
        fd = eh(),
        hd = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._disabledUntil = new Date(Date.now()), t
            }
            return Xc(t, e), t.prototype.sendEvent = function(e) {
                var t = this;
                if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                    event: e,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                });
                var n = Hp(e, this._api),
                    r = {
                        body: n.body,
                        method: "POST",
                        referrerPolicy: np() ? "origin" : ""
                    };
                return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add(new Qh((function(e, i) {
                    fd.fetch(n.url, r).then((function(n) {
                        var r = Qc.fromHttpCode(n.status);
                        if (r !== Qc.Success) {
                            if (r === Qc.RateLimit) {
                                var o = Date.now(),
                                    a = n.headers.get("Retry-After");
                                t._disabledUntil = new Date(o + dh(o, a)), wh.warn("Too many requests, backing off till: " + t._disabledUntil)
                            }
                            i(n)
                        } else e({
                            status: r
                        })
                    })).catch(i)
                })))
            }, t
        }(ld),
        pd = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._disabledUntil = new Date(Date.now()), t
            }
            return Xc(t, e), t.prototype.sendEvent = function(e) {
                var t = this;
                if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                    event: e,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                });
                var n = Hp(e, this._api);
                return this._buffer.add(new Qh((function(e, r) {
                    var i = new XMLHttpRequest;
                    for (var o in i.onreadystatechange = function() {
                            if (4 === i.readyState) {
                                var n = Qc.fromHttpCode(i.status);
                                if (n !== Qc.Success) {
                                    if (n === Qc.RateLimit) {
                                        var o = Date.now(),
                                            a = i.getResponseHeader("Retry-After");
                                        t._disabledUntil = new Date(o + dh(o, a)), wh.warn("Too many requests, backing off till: " + t._disabledUntil)
                                    }
                                    r(i)
                                } else e({
                                    status: n
                                })
                            }
                        }, i.open("POST", n.url), t.options.headers) t.options.headers.hasOwnProperty(o) && i.setRequestHeader(o, t.options.headers[o]);
                    i.send(n.body)
                })))
            }, t
        }(ld),
        dd = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Xc(t, e), t.prototype.eventFromException = function(e, t) {
                return function(e, t, n) {
                    var r = cd(t, n && n.syntheticException || void 0, {
                        attachStacktrace: e.attachStacktrace
                    });
                    return ah(r, {
                        handled: !0,
                        type: "generic"
                    }), r.level = Jc.Error, n && n.event_id && (r.event_id = n.event_id), Qh.resolve(r)
                }(this._options, e, t)
            }, t.prototype.eventFromMessage = function(e, t, n) {
                return void 0 === t && (t = Jc.Info),
                    function(e, t, n, r) {
                        void 0 === n && (n = Jc.Info);
                        var i = ud(t, r && r.syntheticException || void 0, {
                            attachStacktrace: e.attachStacktrace
                        });
                        return i.level = n, r && r.event_id && (i.event_id = r.event_id), Qh.resolve(i)
                    }(this._options, e, t, n)
            }, t.prototype._setupTransport = function() {
                if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                var t = Zc(Zc({}, this._options.transportOptions), {
                    dsn: this._options.dsn
                });
                return this._options.transport ? new this._options.transport(t) : ep() ? new hd(t) : new pd(t)
            }, t
        }(Bp),
        gd = 0;

    function md() {
        return gd > 0
    }

    function vd() {
        gd += 1, setTimeout((function() {
            gd -= 1
        }))
    }

    function yd(e, t, n) {
        if (void 0 === t && (t = {}), "function" != typeof e) return e;
        try {
            if (e.__sentry__) return e;
            if (e.__sentry_wrapped__) return e.__sentry_wrapped__
        } catch (t) {
            return e
        }
        var r = function() {
            var r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                var i = r.map((function(e) {
                    return yd(e, t)
                }));
                return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
            } catch (e) {
                throw vd(), Lp((function(n) {
                    n.addEventProcessor((function(e) {
                        var n = Zc({}, e);
                        return t.mechanism && (oh(n, void 0, void 0), ah(n, t.mechanism)), n.extra = Zc(Zc({}, n.extra), {
                            arguments: r
                        }), n
                    })), Rp(e)
                })), e
            }
        };
        try {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
        } catch (e) {}
        e.prototype = e.prototype || {}, r.prototype = e.prototype, Object.defineProperty(e, "__sentry_wrapped__", {
            enumerable: !1,
            value: r
        }), Object.defineProperties(r, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: e
            }
        });
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get: function() {
                    return e.name
                }
            })
        } catch (e) {}
        return r
    }

    function bd(e) {
        if (void 0 === e && (e = {}), e.eventId)
            if (e.dsn) {
                var t = document.createElement("script");
                t.async = !0, t.src = new Np(e.dsn).getReportDialogEndpoint(e), e.onLoad && (t.onload = e.onLoad), (document.head || document.body).appendChild(t)
            } else wh.error("Missing dsn option in showReportDialog call");
        else wh.error("Missing eventId option in showReportDialog call")
    }
    var wd = function() {
            function e(t) {
                this.name = e.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = Zc({
                    onerror: !0,
                    onunhandledrejection: !0
                }, t)
            }
            return e.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50, this._options.onerror && (wh.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (wh.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
            }, e.prototype._installGlobalOnErrorHandler = function() {
                var t = this;
                this._onErrorHandlerInstalled || (cp({
                    callback: function(n) {
                        var r = n.error,
                            i = Op(),
                            o = i.getIntegration(e),
                            a = r && !0 === r.__sentry_own_request__;
                        if (o && !md() && !a) {
                            var s = i.getClient(),
                                c = pu(r) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(cd(r, void 0, {
                                    attachStacktrace: s && s.getOptions().attachStacktrace,
                                    rejection: !1
                                }), n.url, n.line, n.column);
                            ah(c, {
                                handled: !1,
                                type: "onerror"
                            }), i.captureEvent(c, {
                                originalException: r
                            })
                        }
                    },
                    type: "error"
                }), this._onErrorHandlerInstalled = !0)
            }, e.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                var t = this;
                this._onUnhandledRejectionHandlerInstalled || (cp({
                    callback: function(n) {
                        var r = n;
                        try {
                            "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                        } catch (e) {}
                        var i = Op(),
                            o = i.getIntegration(e),
                            a = r && !0 === r.__sentry_own_request__;
                        if (!o || md() || a) return !0;
                        var s = i.getClient(),
                            c = pu(r) ? t._eventFromIncompleteRejection(r) : cd(r, void 0, {
                                attachStacktrace: s && s.getOptions().attachStacktrace,
                                rejection: !0
                            });
                        c.level = Jc.Error, ah(c, {
                            handled: !1,
                            type: "onunhandledrejection"
                        }), i.captureEvent(c, {
                            originalException: r
                        })
                    },
                    type: "unhandledrejection"
                }), this._onUnhandledRejectionHandlerInstalled = !0)
            }, e.prototype._eventFromIncompleteOnError = function(e, t, n, r) {
                var i, o = lu(e) ? e.message : e;
                if (hu(o)) {
                    var a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                    a && (i = a[1], o = a[2])
                }
                var s = {
                    exception: {
                        values: [{
                            type: i || "Error",
                            value: o
                        }]
                    }
                };
                return this._enhanceEventWithInitialFrame(s, t, n, r)
            }, e.prototype._eventFromIncompleteRejection = function(e) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + e
                        }]
                    }
                }
            }, e.prototype._enhanceEventWithInitialFrame = function(e, t, n, r) {
                e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}, e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
                var i = isNaN(parseInt(r, 10)) ? void 0 : r,
                    o = isNaN(parseInt(n, 10)) ? void 0 : n,
                    a = hu(t) && t.length > 0 ? t : function() {
                        try {
                            return document.location.href
                        } catch (e) {
                            return ""
                        }
                    }();
                return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                    colno: i,
                    filename: a,
                    function: "?",
                    in_app: !0,
                    lineno: o
                }), e
            }, e.id = "GlobalHandlers", e
        }(),
        _d = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        Ed = function() {
            function e(t) {
                this.name = e.id, this._options = Zc({
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0
                }, t)
            }
            return e.prototype.setupOnce = function() {
                var e = eh();
                (this._options.setTimeout && Fh(e, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Fh(e, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Fh(e, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in e && Fh(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : _d).forEach(this._wrapEventTarget.bind(this))
            }, e.prototype._wrapTimeFunction = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = t[0];
                    return t[0] = yd(r, {
                        mechanism: {
                            data: {
                                function: mh(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), e.apply(this, t)
                }
            }, e.prototype._wrapRAF = function(e) {
                return function(t) {
                    return e.call(this, yd(t, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: mh(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, e.prototype._wrapEventTarget = function(e) {
                var t = eh(),
                    n = t[e] && t[e].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Fh(n, "addEventListener", (function(t) {
                    return function(n, r, i) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = yd(r.handleEvent.bind(r), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: mh(r),
                                        target: e
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (e) {}
                        return t.call(this, n, yd(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: mh(r),
                                    target: e
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), i)
                    }
                })), Fh(n, "removeEventListener", (function(e) {
                    return function(t, n, r) {
                        try {
                            e.call(this, t, n.__sentry_wrapped__, r)
                        } catch (e) {}
                        return e.call(this, t, n, r)
                    }
                })))
            }, e.prototype._wrapXHR = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = this,
                        i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    return i.forEach((function(e) {
                        e in r && "function" == typeof r[e] && Fh(r, e, (function(t) {
                            var n = {
                                mechanism: {
                                    data: {
                                        function: e,
                                        handler: mh(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            };
                            return t.__sentry_original__ && (n.mechanism.data.handler = mh(t.__sentry_original__)), yd(t, n)
                        }))
                    })), e.apply(this, t)
                }
            }, e.id = "TryCatch", e
        }(),
        Sd = function() {
            function e(t) {
                this.name = e.id, this._options = Zc({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, t)
            }
            return e.prototype.addSentryBreadcrumb = function(e) {
                this._options.sentry && Op().addBreadcrumb({
                    category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                    event_id: e.event_id,
                    level: e.level,
                    message: rh(e)
                }, {
                    event: e
                })
            }, e.prototype.setupOnce = function() {
                var e = this;
                this._options.console && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._consoleBreadcrumb.apply(e, tu(t))
                    },
                    type: "console"
                }), this._options.dom && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._domBreadcrumb.apply(e, tu(t))
                    },
                    type: "dom"
                }), this._options.xhr && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._xhrBreadcrumb.apply(e, tu(t))
                    },
                    type: "xhr"
                }), this._options.fetch && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._fetchBreadcrumb.apply(e, tu(t))
                    },
                    type: "fetch"
                }), this._options.history && cp({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._historyBreadcrumb.apply(e, tu(t))
                    },
                    type: "history"
                })
            }, e.prototype._consoleBreadcrumb = function(e) {
                var t = {
                    category: "console",
                    data: {
                        arguments: e.args,
                        logger: "console"
                    },
                    level: Jc.fromString(e.level),
                    message: Xf(e.args, " ")
                };
                if ("assert" === e.level) {
                    if (!1 !== e.args[0]) return;
                    t.message = "Assertion failed: " + (Xf(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
                }
                Op().addBreadcrumb(t, {
                    input: e.args,
                    level: e.level
                })
            }, e.prototype._domBreadcrumb = function(e) {
                var t;
                try {
                    t = e.event.target ? sh(e.event.target) : sh(e.event)
                } catch (e) {
                    t = "<unknown>"
                }
                0 !== t.length && Op().addBreadcrumb({
                    category: "ui." + e.name,
                    message: t
                }, {
                    event: e.event,
                    name: e.name
                })
            }, e.prototype._xhrBreadcrumb = function(e) {
                if (e.endTimestamp) {
                    if (e.xhr.__sentry_own_request__) return;
                    Op().addBreadcrumb({
                        category: "xhr",
                        data: e.xhr.__sentry_xhr__,
                        type: "http"
                    }, {
                        xhr: e.xhr
                    })
                } else;
            }, e.prototype._fetchBreadcrumb = function(e) {
                e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? Op().addBreadcrumb({
                    category: "fetch",
                    data: e.fetchData,
                    level: Jc.Error,
                    type: "http"
                }, {
                    data: e.error,
                    input: e.args
                }) : Op().addBreadcrumb({
                    category: "fetch",
                    data: Zc(Zc({}, e.fetchData), {
                        status_code: e.response.status
                    }),
                    type: "http"
                }, {
                    input: e.args,
                    response: e.response
                })))
            }, e.prototype._historyBreadcrumb = function(e) {
                var t = eh(),
                    n = e.from,
                    r = e.to,
                    i = nh(t.location.href),
                    o = nh(n),
                    a = nh(r);
                o.path || (o = i), i.protocol === a.protocol && i.host === a.host && (r = a.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), Op().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: n,
                        to: r
                    }
                })
            }, e.id = "Breadcrumbs", e
        }(),
        kd = function() {
            function e(t) {
                void 0 === t && (t = {}), this.name = e.id, this._key = t.key || "cause", this._limit = t.limit || 5
            }
            return e.prototype.setupOnce = function() {
                kp((function(t, n) {
                    var r = Op().getIntegration(e);
                    return r ? r._handler(t, n) : t
                }))
            }, e.prototype._handler = function(e, t) {
                if (!(e.exception && e.exception.values && t && yu(t.originalException, Error))) return e;
                var n = this._walkErrorTree(t.originalException, this._key);
                return e.exception.values = tu(n, e.exception.values), e
            }, e.prototype._walkErrorTree = function(e, t, n) {
                if (void 0 === n && (n = []), !yu(e[t], Error) || n.length + 1 >= this._limit) return n;
                var r = od(nd(e[t]));
                return this._walkErrorTree(e[t], t, tu([r], n))
            }, e.id = "LinkedErrors", e
        }(),
        Td = eh(),
        xd = function() {
            function e() {
                this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                kp((function(t) {
                    if (Op().getIntegration(e)) {
                        if (!Td.navigator || !Td.location) return t;
                        var n = t.request || {};
                        return n.url = n.url || Td.location.href, n.headers = n.headers || {}, n.headers["User-Agent"] = Td.navigator.userAgent, Zc(Zc({}, t), {
                            request: n
                        })
                    }
                    return t
                }))
            }, e.id = "UserAgent", e
        }(),
        Ad = "5.22.3",
        Od = function(e) {
            function t(t) {
                return void 0 === t && (t = {}), e.call(this, dd, t) || this
            }
            return Xc(t, e), t.prototype.showReportDialog = function(e) {
                void 0 === e && (e = {}), eh().document && (this._isEnabled() ? bd(Zc(Zc({}, e), {
                    dsn: e.dsn || this.getDsn()
                })) : wh.error("Trying to call showReportDialog with Sentry Client disabled"))
            }, t.prototype._prepareEvent = function(t, n, r) {
                return t.platform = t.platform || "javascript", t.sdk = Zc(Zc({}, t.sdk), {
                    name: "sentry.javascript.browser",
                    packages: tu(t.sdk && t.sdk.packages || [], [{
                        name: "npm:@sentry/browser",
                        version: Ad
                    }]),
                    version: Ad
                }), e.prototype._prepareEvent.call(this, t, n, r)
            }, t.prototype._sendEvent = function(t) {
                var n = this.getIntegration(Sd);
                n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
            }, t
        }(Fp),
        Id = [new Gp, new Vp, new Ed, new Sd, new wd, new kd, new xd];

    function Cd(e) {
        if (void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = Id), void 0 === e.release) {
            var t = eh();
            t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
        }! function(e, t) {
            !0 === t.debug && wh.enable();
            var n = Op(),
                r = new e(t);
            n.bindClient(r)
        }(Od, e)
    }
    var Pd = ze.find,
        jd = "find",
        Rd = !0,
        Ld = Xe(jd);
    jd in [] && Array(1).find((function() {
        Rd = !1
    })), Ce({
        target: "Array",
        proto: !0,
        forced: Rd || !Ld
    }, {
        find: function(e) {
            return Pd(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), jt(jd);
    var Nd = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
        Md = RegExp("^" + Nd + Nd + "*"),
        Ud = RegExp(Nd + Nd + "*$"),
        Dd = function(e) {
            return function(t) {
                var n = String(d(t));
                return 1 & e && (n = n.replace(Md, "")), 2 & e && (n = n.replace(Ud, "")), n
            }
        },
        Fd = {
            start: Dd(1),
            end: Dd(2),
            trim: Dd(3)
        },
        qd = ye.f,
        Bd = T.f,
        Hd = O.f,
        Vd = Fd.trim,
        Wd = "Number",
        zd = r.Number,
        Yd = zd.prototype,
        $d = f(It(Yd)) == Wd,
        Gd = function(e) {
            var t, n, r, i, o, a, s, c, u = v(e, !1);
            if ("string" == typeof u && u.length > 2)
                if (43 === (t = (u = Vd(u)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                switch (u.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, i = 55;
                        break;
                    default:
                        return +u
                }
                for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
                    if ((c = o.charCodeAt(s)) < 48 || c > i) return NaN;
                return parseInt(o, r)
            }
            return +u
        };
    if (Oe(Wd, !zd(" 0o1") || !zd("0b1") || zd("+0x1"))) {
        for (var Kd, Xd = function(e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof Xd && ($d ? i((function() {
                    Yd.valueOf.call(n)
                })) : f(n) != Wd) ? Kt(new zd(Gd(t)), n, Xd) : Gd(t)
            }, Jd = o ? qd(zd) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Qd = 0; Jd.length > Qd; Qd++) b(zd, Kd = Jd[Qd]) && !b(Xd, Kd) && Hd(Xd, Kd, Bd(zd, Kd));
        Xd.prototype = Yd, Yd.constructor = Xd, ee(r, Wd, Xd)
    }
    Ce({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(e) {
            return e != e
        }
    });
    var Zd = c.f,
        eg = function(e) {
            return function(t) {
                for (var n, r = g(t), i = Et(r), a = i.length, s = 0, c = []; a > s;) n = i[s++], o && !Zd.call(r, n) || c.push(e ? [n, r[n]] : r[n]);
                return c
            }
        },
        tg = {
            entries: eg(!0),
            values: eg(!1)
        }.entries;

    function ng(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function rg(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ig(e, t, n) {
        return t && rg(e.prototype, t), n && rg(e, n), e
    }

    function og(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ag(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    Ce({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return tg(e)
        }
    });
    var sg = function(e) {
            return null != e ? e.constructor : null
        },
        cg = function(e, t) {
            return !!(e && t && e instanceof t)
        },
        ug = function(e) {
            return null == e
        },
        lg = function(e) {
            return sg(e) === Object
        },
        fg = function(e) {
            return sg(e) === String
        },
        hg = function(e) {
            return Array.isArray(e)
        },
        pg = function(e) {
            return cg(e, NodeList)
        },
        dg = ug,
        gg = lg,
        mg = function(e) {
            return sg(e) === Number && !Number.isNaN(e)
        },
        vg = fg,
        yg = function(e) {
            return sg(e) === Boolean
        },
        bg = hg,
        wg = pg,
        _g = function(e) {
            return cg(e, Element)
        },
        Eg = function(e) {
            return cg(e, Event)
        },
        Sg = function(e) {
            return ug(e) || (fg(e) || hg(e) || pg(e)) && !e.length || lg(e) && !Object.keys(e).length
        },
        kg = {
            facebook: {
                domain: "facebook.com",
                url: function(e) {
                    return "https://graph.facebook.com/?id=".concat(e, "&fields=og_object{engagement}")
                },
                shareCount: function(e) {
                    return e.og_object.engagement.count
                },
                popup: {
                    width: 640,
                    height: 360
                }
            },
            twitter: {
                domain: "twitter.com",
                url: function() {
                    return null
                },
                shareCount: function() {
                    return null
                },
                popup: {
                    width: 640,
                    height: 240
                }
            },
            pinterest: {
                domain: "pinterest.com",
                url: function(e) {
                    return "https://widgets.pinterest.com/v1/urls/count.json?url=".concat(e)
                },
                shareCount: function(e) {
                    return e.count
                },
                popup: {
                    width: 830,
                    height: 700
                }
            },
            github: {
                domain: "github.com",
                url: function(e, t) {
                    return "https://api.github.com/repos/".concat(e).concat(vg(t) ? "?access_token=".concat(t) : "")
                },
                shareCount: function(e) {
                    return e.data.stargazers_count
                }
            },
            youtube: {
                domain: "youtube.com",
                url: function(e, t) {
                    return "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=".concat(e, "&key=").concat(t)
                },
                shareCount: function(e) {
                    if (!Sg(e.error)) return null;
                    var t = ag(e.items, 1)[0];
                    return Sg(t) ? null : t.statistics.subscriberCount
                }
            }
        },
        Tg = {
            debug: !1,
            wrapper: {
                className: "shr"
            },
            count: {
                className: "shr__count",
                displayZero: !1,
                format: !0,
                position: "after",
                increment: !0
            },
            tokens: {
                github: "",
                youtube: ""
            },
            storage: {
                enabled: !0,
                key: "shr",
                ttl: 3e5
            }
        };

    function xg(e) {
        return new Promise((function(t, n) {
            var r = "jsonp_callback_".concat(Math.round(1e5 * Math.random())),
                i = document.createElement("script");
            i.addEventListener("error", (function(e) {
                return n(e)
            })), window[r] = function(e) {
                delete window[r], document.body.removeChild(i), t(e)
            };
            var o = new URL(e);
            o.searchParams.set("callback", r), i.setAttribute("src", o.toString()), document.body.appendChild(i)
        }))
    }
    var Ag = function() {},
        Og = function() {
            function e() {
                var t = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
                ng(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
            }
            return ig(e, [{
                key: "log",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : Ag
                }
            }, {
                key: "warn",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : Ag
                }
            }, {
                key: "error",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : Ag
                }
            }]), e
        }();

    function Ig(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }.call(e, t)
    }

    function Cg(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach((function(e, n) {
            var r = 0 < n ? t.cloneNode(!0) : t,
                i = e.parentNode,
                o = e.nextSibling;
            r.appendChild(e), o ? i.insertBefore(r, o) : i.appendChild(r)
        }))
    }

    function Pg(e, t, n) {
        var r = document.createElement(e);
        return gg(t) && function(e, t) {
            !_g(e) || Sg(t) || Object.entries(t).filter((function(e) {
                var t = ag(e, 2)[1];
                return !dg(t)
            })).forEach((function(t) {
                var n = ag(t, 2),
                    r = n[0],
                    i = n[1];
                return e.setAttribute(r, i)
            }))
        }(r, t), vg(n) && (r.innerText = n), r
    }

    function jg(e) {
        var t = /\./.test(1.1.toLocaleString()) ? "." : ",",
            n = new RegExp("\\".concat(t, "\\d+$"));
        return Math.round(e).toLocaleString().replace(n, "")
    }

    function Rg() {
        for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!n.length) return e;
        var i = n.shift();
        return gg(i) ? (Object.keys(i).forEach((function(t) {
            gg(i[t]) ? (!Object.keys(e).includes(t) && Object.assign(e, og({}, t, {})), Rg(e[t], i[t])) : Object.assign(e, og({}, t, i[t]))
        })), Rg.apply(void 0, [e].concat(n))) : e
    }
    var Lg = function() {
        function e(t, n) {
            var r = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            ng(this, e), this.enabled = r && e.supported, this.key = t, this.ttl = n
        }
        return ig(e, [{
            key: "get",
            value: function(t) {
                if (!e.supported || !this.enabled) return null;
                var n = window.localStorage.getItem(this.key);
                if (Sg(n)) return null;
                var r = window.localStorage.getItem("".concat(this.key, "_ttl"));
                if (Sg(r) || r < Date.now()) return null;
                var i = JSON.parse(n);
                return vg(t) && t.length ? i[t] : i
            }
        }, {
            key: "set",
            value: function(t) {
                if (e.supported && this.enabled && gg(t)) {
                    var n = this.get();
                    Sg(n) && (n = {}), Rg(n, t), window.localStorage.setItem(this.key, JSON.stringify(n)), window.localStorage.setItem("".concat(this.key, "_ttl"), Date.now() + this.ttl)
                }
            }
        }], [{
            key: "supported",
            get: function() {
                try {
                    return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
                } catch (e) {
                    return !1
                }
            }
        }]), e
    }();
    var Ng = function() {
            function e(t, n) {
                var r = this;
                ng(this, e), this.elements = {
                    count: null,
                    trigger: null,
                    popup: null
                }, _g(t) ? this.elements.trigger = t : vg(t) && (this.elements.trigger = document.querySelector(t)), _g(this.elements.trigger) && Sg(this.elements.trigger.shr) && (this.config = Rg({}, Tg, n, {
                    networks: kg
                }), this.console = new Og(this.config.debug), this.storage = new Lg(this.config.storage.key, this.config.storage.ttl, this.config.storage.enabled), this.getCount().then((function(e) {
                    return r.updateDisplay(e)
                })).catch((function() {})), this.listeners(!0), this.elements.trigger.shr = this)
            }
            return ig(e, [{
                key: "destroy",
                value: function() {
                    this.listeners(!1)
                }
            }, {
                key: "listeners",
                value: function() {
                    var e = this,
                        t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? "addEventListener" : "removeEventListener";
                    this.elements.trigger[t]("click", (function(t) {
                        return e.share(t)
                    }), !1)
                }
            }, {
                key: "share",
                value: function(e) {
                    var t = this;
                    this.openPopup(e);
                    var n = this.config.count.increment;
                    this.getCount().then((function(e) {
                        return t.updateDisplay(e, n)
                    })).catch((function() {}))
                }
            }, {
                key: "openPopup",
                value: function(e) {
                    if (!Sg(this.network) && this.networkConfig.popup) {
                        Eg(e) && e.preventDefault();
                        var t = this.networkConfig.popup,
                            n = t.width,
                            r = t.height,
                            i = "shr-popup--".concat(this.network);
                        if (this.popup && !this.popup.closed) this.popup.focus(), this.console.log("Popup re-focused.");
                        else {
                            var o = void 0 === window.screenLeft ? window.screen.left : window.screenLeft,
                                a = void 0 === window.screenTop ? window.screen.top : window.screenTop,
                                s = window.screen.width / 2 - n / 2 + o,
                                c = window.screen.height / 2 - r / 2 + a;
                            this.popup = window.open(this.href, i, "top=".concat(c, ",left=").concat(s, ",width=").concat(n, ",height=").concat(r)), this.popup && !this.popup.closed && yg(this.popup.closed) ? (this.popup.focus(), this.console.log("Popup opened.")) : this.console.error("Popup blocked.")
                        }
                    }
                }
            }, {
                key: "getCount",
                value: function() {
                    var e = this,
                        t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return new Promise((function(n, r) {
                        var i = e.apiUrl;
                        if (Sg(i)) r(new Error("No URL available for ".concat(e.network, ".")));
                        else {
                            if (t) {
                                var o = e.storage.get(e.target);
                                if (!Sg(o) && Object.keys(o).includes(e.network)) {
                                    var a = o[e.network];
                                    return n(mg(a) ? a : 0), void e.console.log("getCount for '".concat(e.target, "' for '").concat(e.network, "' resolved from cache."))
                                }
                            }
                            xg(i).then((function(t) {
                                var r = 0,
                                    i = e.elements.trigger.getAttribute("data-shr-display");
                                r = Sg(i) ? e.networkConfig.shareCount(t) : t[i], Sg(r) ? r = 0 : (r = parseInt(r, 10), !mg(r) && (r = 0)), e.storage.set(og({}, e.target, og({}, e.network, r))), n(r)
                            })).catch(r)
                        }
                    }))
                }
            }, {
                key: "updateDisplay",
                value: function(e) {
                    var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                        n = this.config,
                        r = n.count,
                        i = n.wrapper,
                        o = t ? e + 1 : e,
                        a = r.position.toLowerCase();
                    if (0 < o || r.displayZero) {
                        var s = function(e) {
                                return Math.round(o / e * 10) / 10
                            },
                            c = jg(o);
                        r.format && (1e6 < o ? c = "".concat(s(1e6), "M") : 1e3 < o && (c = "".concat(s(1e3), "K"))), _g(this.elements.count) ? this.elements.count.textContent = c : (Cg(this.elements.trigger, Pg("span", {
                            class: i.className
                        })), this.elements.count = Pg("span", {
                            class: "".concat(r.className, " ").concat(r.className, "--").concat(a)
                        }, c), this.elements.trigger.insertAdjacentElement("after" === a ? "afterend" : "beforebegin", this.elements.count))
                    }
                }
            }, {
                key: "href",
                get: function() {
                    return _g(this.elements.trigger) ? this.elements.trigger.href : null
                }
            }, {
                key: "network",
                get: function() {
                    var e = this;
                    if (!_g(this.elements.trigger)) return null;
                    var t = this.config.networks;
                    return Object.keys(t).find((function(n) {
                        return function(e) {
                            var t = new URL(e).hostname,
                                n = t.split("."),
                                r = n.length;
                            return 2 < r && (t = "".concat(n[r - 2], ".").concat(n[r - 1]), 2 === n[r - 2].length && 2 === n[r - 1].length && (t = "".concat(n[r - 3], ".").concat(t))), t
                        }(e.href) === t[n].domain
                    }))
                }
            }, {
                key: "networkConfig",
                get: function() {
                    return Sg(this.network) ? null : this.config.networks[this.network]
                }
            }, {
                key: "target",
                get: function() {
                    if (Sg(this.network)) return null;
                    var e = new URL(this.href);
                    switch (this.network) {
                        case "facebook":
                            return e.searchParams.get("u");
                        case "github":
                            return e.pathname.substring(1);
                        case "youtube":
                            return e.pathname.split("/").pop();
                        default:
                            return e.searchParams.get("url")
                    }
                }
            }, {
                key: "apiUrl",
                get: function() {
                    if (Sg(this.network)) return null;
                    var e = this.config.tokens;
                    switch (this.network) {
                        case "github":
                            return this.networkConfig.url(this.target, e.github);
                        case "youtube":
                            return this.networkConfig.url(this.target, e.youtube);
                        default:
                            return this.networkConfig.url(encodeURIComponent(this.target))
                    }
                }
            }], [{
                key: "setup",
                value: function(t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        r = null;
                    if (vg(t) ? r = Array.from(document.querySelectorAll(t)) : _g(t) ? r = [t] : wg(t) ? r = Array.from(t) : bg(t) && (r = t.filter(_g)), Sg(r)) return null;
                    var i = Object.assign({}, Tg, n);
                    return vg(t) && i.watch && new MutationObserver((function(n) {
                        Array.from(n).forEach((function(n) {
                            Array.from(n.addedNodes).forEach((function(n) {
                                _g(n) && Ig(n, t) && new e(n, i)
                            }))
                        }))
                    })).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    }), r.map((function(t) {
                        return new e(t, n)
                    }))
                }
            }]), e
        }(),
        Mg = function(e) {
            return e && e.Math == Math && e
        },
        Ug = Mg("object" == typeof globalThis && globalThis) || Mg("object" == typeof window && window) || Mg("object" == typeof self && self) || Mg("object" == typeof e && e) || function() {
            return this
        }() || Function("return this")(),
        Dg = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        Fg = !Dg((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        qg = {}.propertyIsEnumerable,
        Bg = Object.getOwnPropertyDescriptor,
        Hg = {
            f: Bg && !qg.call({
                1: 2
            }, 1) ? function(e) {
                var t = Bg(this, e);
                return !!t && t.enumerable
            } : qg
        },
        Vg = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        Wg = {}.toString,
        zg = function(e) {
            return Wg.call(e).slice(8, -1)
        },
        Yg = "".split,
        $g = Dg((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == zg(e) ? Yg.call(e, "") : Object(e)
        } : Object,
        Gg = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        Kg = function(e) {
            return $g(Gg(e))
        },
        Xg = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        Jg = function(e, t) {
            if (!Xg(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !Xg(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !Xg(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !Xg(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        Qg = {}.hasOwnProperty,
        Zg = function(e, t) {
            return Qg.call(e, t)
        },
        em = Ug.document,
        tm = Xg(em) && Xg(em.createElement),
        nm = function(e) {
            return tm ? em.createElement(e) : {}
        },
        rm = !Fg && !Dg((function() {
            return 7 != Object.defineProperty(nm("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        im = Object.getOwnPropertyDescriptor,
        om = {
            f: Fg ? im : function(e, t) {
                if (e = Kg(e), t = Jg(t, !0), rm) try {
                    return im(e, t)
                } catch (e) {}
                if (Zg(e, t)) return Vg(!Hg.f.call(e, t), e[t])
            }
        },
        am = function(e) {
            if (!Xg(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        sm = Object.defineProperty,
        cm = {
            f: Fg ? sm : function(e, t, n) {
                if (am(e), t = Jg(t, !0), am(n), rm) try {
                    return sm(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        um = Fg ? function(e, t, n) {
            return cm.f(e, t, Vg(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        lm = function(e, t) {
            try {
                um(Ug, e, t)
            } catch (n) {
                Ug[e] = t
            }
            return t
        },
        fm = "__core-js_shared__",
        hm = Ug[fm] || lm(fm, {}),
        pm = Function.toString;
    "function" != typeof hm.inspectSource && (hm.inspectSource = function(e) {
        return pm.call(e)
    });
    var dm, gm, mm, vm = hm.inspectSource,
        ym = Ug.WeakMap,
        bm = "function" == typeof ym && /native code/.test(vm(ym)),
        wm = t((function(e) {
            (e.exports = function(e, t) {
                return hm[e] || (hm[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.7.0",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        _m = 0,
        Em = Math.random(),
        Sm = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++_m + Em).toString(36)
        },
        km = wm("keys"),
        Tm = function(e) {
            return km[e] || (km[e] = Sm(e))
        },
        xm = {},
        Am = Ug.WeakMap;
    if (bm) {
        var Om = hm.state || (hm.state = new Am),
            Im = Om.get,
            Cm = Om.has,
            Pm = Om.set;
        dm = function(e, t) {
            return t.facade = e, Pm.call(Om, e, t), t
        }, gm = function(e) {
            return Im.call(Om, e) || {}
        }, mm = function(e) {
            return Cm.call(Om, e)
        }
    } else {
        var jm = Tm("state");
        xm[jm] = !0, dm = function(e, t) {
            return t.facade = e, um(e, jm, t), t
        }, gm = function(e) {
            return Zg(e, jm) ? e[jm] : {}
        }, mm = function(e) {
            return Zg(e, jm)
        }
    }
    var Rm, Lm, Nm = {
            set: dm,
            get: gm,
            has: mm,
            enforce: function(e) {
                return mm(e) ? gm(e) : dm(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!Xg(t) || (n = gm(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        Mm = t((function(e) {
            var t = Nm.get,
                n = Nm.enforce,
                r = String(String).split("String");
            (e.exports = function(e, t, i, o) {
                var a, s = !!o && !!o.unsafe,
                    c = !!o && !!o.enumerable,
                    u = !!o && !!o.noTargetGet;
                "function" == typeof i && ("string" != typeof t || Zg(i, "name") || um(i, "name", t), (a = n(i)).source || (a.source = r.join("string" == typeof t ? t : ""))), e !== Ug ? (s ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = i : um(e, t, i)) : c ? e[t] = i : lm(t, i)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && t(this).source || vm(this)
            }))
        })),
        Um = Ug,
        Dm = function(e) {
            return "function" == typeof e ? e : void 0
        },
        Fm = function(e, t) {
            return arguments.length < 2 ? Dm(Um[e]) || Dm(Ug[e]) : Um[e] && Um[e][t] || Ug[e] && Ug[e][t]
        },
        qm = Math.ceil,
        Bm = Math.floor,
        Hm = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? Bm : qm)(e)
        },
        Vm = Math.min,
        Wm = function(e) {
            return e > 0 ? Vm(Hm(e), 9007199254740991) : 0
        },
        zm = Math.max,
        Ym = Math.min,
        $m = function(e, t) {
            var n = Hm(e);
            return n < 0 ? zm(n + t, 0) : Ym(n, t)
        },
        Gm = function(e) {
            return function(t, n, r) {
                var i, o = Kg(t),
                    a = Wm(o.length),
                    s = $m(r, a);
                if (e && n != n) {
                    for (; a > s;)
                        if ((i = o[s++]) != i) return !0
                } else
                    for (; a > s; s++)
                        if ((e || s in o) && o[s] === n) return e || s || 0; return !e && -1
            }
        },
        Km = {
            includes: Gm(!0),
            indexOf: Gm(!1)
        },
        Xm = Km.indexOf,
        Jm = function(e, t) {
            var n, r = Kg(e),
                i = 0,
                o = [];
            for (n in r) !Zg(xm, n) && Zg(r, n) && o.push(n);
            for (; t.length > i;) Zg(r, n = t[i++]) && (~Xm(o, n) || o.push(n));
            return o
        },
        Qm = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Zm = Qm.concat("length", "prototype"),
        ev = {
            f: Object.getOwnPropertyNames || function(e) {
                return Jm(e, Zm)
            }
        },
        tv = {
            f: Object.getOwnPropertySymbols
        },
        nv = Fm("Reflect", "ownKeys") || function(e) {
            var t = ev.f(am(e)),
                n = tv.f;
            return n ? t.concat(n(e)) : t
        },
        rv = function(e, t) {
            for (var n = nv(t), r = cm.f, i = om.f, o = 0; o < n.length; o++) {
                var a = n[o];
                Zg(e, a) || r(e, a, i(t, a))
            }
        },
        iv = /#|\.prototype\./,
        ov = function(e, t) {
            var n = sv[av(e)];
            return n == uv || n != cv && ("function" == typeof t ? Dg(t) : !!t)
        },
        av = ov.normalize = function(e) {
            return String(e).replace(iv, ".").toLowerCase()
        },
        sv = ov.data = {},
        cv = ov.NATIVE = "N",
        uv = ov.POLYFILL = "P",
        lv = ov,
        fv = om.f,
        hv = function(e, t) {
            var n, r, i, o, a, s = e.target,
                c = e.global,
                u = e.stat;
            if (n = c ? Ug : u ? Ug[s] || lm(s, {}) : (Ug[s] || {}).prototype)
                for (r in t) {
                    if (o = t[r], i = e.noTargetGet ? (a = fv(n, r)) && a.value : n[r], !lv(c ? r : s + (u ? "." : "#") + r, e.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        rv(o, i)
                    }(e.sham || i && i.sham) && um(o, "sham", !0), Mm(n, r, o, e)
                }
        },
        pv = Array.isArray || function(e) {
            return "Array" == zg(e)
        },
        dv = function(e) {
            return Object(Gg(e))
        },
        gv = function(e, t, n) {
            var r = Jg(t);
            r in e ? cm.f(e, r, Vg(0, n)) : e[r] = n
        },
        mv = !!Object.getOwnPropertySymbols && !Dg((function() {
            return !String(Symbol())
        })),
        vv = mv && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        yv = wm("wks"),
        bv = Ug.Symbol,
        wv = vv ? bv : bv && bv.withoutSetter || Sm,
        _v = function(e) {
            return Zg(yv, e) || (mv && Zg(bv, e) ? yv[e] = bv[e] : yv[e] = wv("Symbol." + e)), yv[e]
        },
        Ev = _v("species"),
        Sv = function(e, t) {
            var n;
            return pv(e) && ("function" != typeof(n = e.constructor) || n !== Array && !pv(n.prototype) ? Xg(n) && null === (n = n[Ev]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        kv = Fm("navigator", "userAgent") || "",
        Tv = Ug.process,
        xv = Tv && Tv.versions,
        Av = xv && xv.v8;
    Av ? Lm = (Rm = Av.split("."))[0] + Rm[1] : kv && (!(Rm = kv.match(/Edge\/(\d+)/)) || Rm[1] >= 74) && (Rm = kv.match(/Chrome\/(\d+)/)) && (Lm = Rm[1]);
    var Ov = Lm && +Lm,
        Iv = _v("species"),
        Cv = function(e) {
            return Ov >= 51 || !Dg((function() {
                var t = [];
                return (t.constructor = {})[Iv] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            }))
        },
        Pv = _v("isConcatSpreadable"),
        jv = 9007199254740991,
        Rv = "Maximum allowed index exceeded",
        Lv = Ov >= 51 || !Dg((function() {
            var e = [];
            return e[Pv] = !1, e.concat()[0] !== e
        })),
        Nv = Cv("concat"),
        Mv = function(e) {
            if (!Xg(e)) return !1;
            var t = e[Pv];
            return void 0 !== t ? !!t : pv(e)
        };
    hv({
        target: "Array",
        proto: !0,
        forced: !Lv || !Nv
    }, {
        concat: function(e) {
            var t, n, r, i, o, a = dv(this),
                s = Sv(a, 0),
                c = 0;
            for (t = -1, r = arguments.length; t < r; t++)
                if (Mv(o = -1 === t ? a : arguments[t])) {
                    if (c + (i = Wm(o.length)) > jv) throw TypeError(Rv);
                    for (n = 0; n < i; n++, c++) n in o && gv(s, c, o[n])
                } else {
                    if (c >= jv) throw TypeError(Rv);
                    gv(s, c++, o)
                }
            return s.length = c, s
        }
    });
    var Uv = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        Dv = function(e, t, n) {
            if (Uv(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        Fv = [].push,
        qv = function(e) {
            var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                i = 4 == e,
                o = 6 == e,
                a = 5 == e || o;
            return function(s, c, u, l) {
                for (var f, h, p = dv(s), d = $g(p), g = Dv(c, u, 3), m = Wm(d.length), v = 0, y = l || Sv, b = t ? y(s, m) : n ? y(s, 0) : void 0; m > v; v++)
                    if ((a || v in d) && (h = g(f = d[v], v, p), e))
                        if (t) b[v] = h;
                        else if (h) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return v;
                    case 2:
                        Fv.call(b, f)
                } else if (i) return !1;
                return o ? -1 : r || i ? i : b
            }
        },
        Bv = {
            forEach: qv(0),
            map: qv(1),
            filter: qv(2),
            some: qv(3),
            every: qv(4),
            find: qv(5),
            findIndex: qv(6)
        },
        Hv = Object.defineProperty,
        Vv = {},
        Wv = function(e) {
            throw e
        },
        zv = function(e, t) {
            if (Zg(Vv, e)) return Vv[e];
            t || (t = {});
            var n = [][e],
                r = !!Zg(t, "ACCESSORS") && t.ACCESSORS,
                i = Zg(t, 0) ? t[0] : Wv,
                o = Zg(t, 1) ? t[1] : void 0;
            return Vv[e] = !!n && !Dg((function() {
                if (r && !Fg) return !0;
                var e = {
                    length: -1
                };
                r ? Hv(e, 1, {
                    enumerable: !0,
                    get: Wv
                }) : e[1] = 1, n.call(e, i, o)
            }))
        },
        Yv = Bv.filter,
        $v = Cv("filter"),
        Gv = zv("filter");
    hv({
        target: "Array",
        proto: !0,
        forced: !$v || !Gv
    }, {
        filter: function(e) {
            return Yv(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Kv, Xv = Object.keys || function(e) {
            return Jm(e, Qm)
        },
        Jv = Fg ? Object.defineProperties : function(e, t) {
            am(e);
            for (var n, r = Xv(t), i = r.length, o = 0; i > o;) cm.f(e, n = r[o++], t[n]);
            return e
        },
        Qv = Fm("document", "documentElement"),
        Zv = Tm("IE_PROTO"),
        ey = function() {},
        ty = function(e) {
            return "<script>" + e + "</" + "script>"
        },
        ny = function() {
            try {
                Kv = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            ny = Kv ? function(e) {
                e.write(ty("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(Kv) : ((t = nm("iframe")).style.display = "none", Qv.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(ty("document.F=Object")), e.close(), e.F);
            for (var n = Qm.length; n--;) delete ny.prototype[Qm[n]];
            return ny()
        };
    xm[Zv] = !0;
    var ry = Object.create || function(e, t) {
            var n;
            return null !== e ? (ey.prototype = am(e), n = new ey, ey.prototype = null, n[Zv] = e) : n = ny(), void 0 === t ? n : Jv(n, t)
        },
        iy = _v("unscopables"),
        oy = Array.prototype;
    null == oy[iy] && cm.f(oy, iy, {
        configurable: !0,
        value: ry(null)
    });
    var ay = function(e) {
            oy[iy][e] = !0
        },
        sy = Bv.find,
        cy = "find",
        uy = !0,
        ly = zv(cy);
    cy in [] && Array(1).find((function() {
        uy = !1
    })), hv({
        target: "Array",
        proto: !0,
        forced: uy || !ly
    }, {
        find: function(e) {
            return sy(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), ay(cy);
    var fy = function(e) {
            var t = e.return;
            if (void 0 !== t) return am(t.call(e)).value
        },
        hy = function(e, t, n, r) {
            try {
                return r ? t(am(n)[0], n[1]) : t(n)
            } catch (t) {
                throw fy(e), t
            }
        },
        py = {},
        dy = _v("iterator"),
        gy = Array.prototype,
        my = function(e) {
            return void 0 !== e && (py.Array === e || gy[dy] === e)
        },
        vy = {};
    vy[_v("toStringTag")] = "z";
    var yy = "[object z]" === String(vy),
        by = _v("toStringTag"),
        wy = "Arguments" == zg(function() {
            return arguments
        }()),
        _y = yy ? zg : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), by)) ? n : wy ? zg(t) : "Object" == (r = zg(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        Ey = _v("iterator"),
        Sy = function(e) {
            if (null != e) return e[Ey] || e["@@iterator"] || py[_y(e)]
        },
        ky = function(e) {
            var t, n, r, i, o, a, s = dv(e),
                c = "function" == typeof this ? this : Array,
                u = arguments.length,
                l = u > 1 ? arguments[1] : void 0,
                f = void 0 !== l,
                h = Sy(s),
                p = 0;
            if (f && (l = Dv(l, u > 2 ? arguments[2] : void 0, 2)), null == h || c == Array && my(h))
                for (n = new c(t = Wm(s.length)); t > p; p++) a = f ? l(s[p], p) : s[p], gv(n, p, a);
            else
                for (o = (i = h.call(s)).next, n = new c; !(r = o.call(i)).done; p++) a = f ? hy(i, l, [r.value, p], !0) : r.value, gv(n, p, a);
            return n.length = p, n
        },
        Ty = _v("iterator"),
        xy = !1;
    try {
        var Ay = 0,
            Oy = {
                next: function() {
                    return {
                        done: !!Ay++
                    }
                },
                return: function() {
                    xy = !0
                }
            };
        Oy[Ty] = function() {
            return this
        }, Array.from(Oy, (function() {
            throw 2
        }))
    } catch (e) {}
    var Iy = function(e, t) {
            if (!t && !xy) return !1;
            var n = !1;
            try {
                var r = {};
                r[Ty] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(r)
            } catch (e) {}
            return n
        },
        Cy = !Iy((function(e) {
            Array.from(e)
        }));
    hv({
        target: "Array",
        stat: !0,
        forced: Cy
    }, {
        from: ky
    });
    var Py = Km.includes,
        jy = zv("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    hv({
        target: "Array",
        proto: !0,
        forced: !jy
    }, {
        includes: function(e) {
            return Py(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), ay("includes");
    var Ry, Ly, Ny, My = !Dg((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        Uy = Tm("IE_PROTO"),
        Dy = Object.prototype,
        Fy = My ? Object.getPrototypeOf : function(e) {
            return e = dv(e), Zg(e, Uy) ? e[Uy] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Dy : null
        },
        qy = _v("iterator"),
        By = !1;
    [].keys && ("next" in (Ny = [].keys()) ? (Ly = Fy(Fy(Ny))) !== Object.prototype && (Ry = Ly) : By = !0), null == Ry && (Ry = {}), Zg(Ry, qy) || um(Ry, qy, (function() {
        return this
    }));
    var Hy = {
            IteratorPrototype: Ry,
            BUGGY_SAFARI_ITERATORS: By
        },
        Vy = cm.f,
        Wy = _v("toStringTag"),
        zy = function(e, t, n) {
            e && !Zg(e = n ? e : e.prototype, Wy) && Vy(e, Wy, {
                configurable: !0,
                value: t
            })
        },
        Yy = Hy.IteratorPrototype,
        $y = function() {
            return this
        },
        Gy = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = ry(Yy, {
                next: Vg(1, n)
            }), zy(e, r, !1), py[r] = $y, e
        },
        Ky = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function(n, r) {
                return am(n),
                    function(e) {
                        if (!Xg(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(r), t ? e.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        Xy = Hy.IteratorPrototype,
        Jy = Hy.BUGGY_SAFARI_ITERATORS,
        Qy = _v("iterator"),
        Zy = "keys",
        eb = "values",
        tb = "entries",
        nb = function() {
            return this
        },
        rb = function(e, t, n, r, i, o, a) {
            Gy(n, t, r);
            var s, c, u, l = function(e) {
                    if (e === i && g) return g;
                    if (!Jy && e in p) return p[e];
                    switch (e) {
                        case Zy:
                        case eb:
                        case tb:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                f = t + " Iterator",
                h = !1,
                p = e.prototype,
                d = p[Qy] || p["@@iterator"] || i && p[i],
                g = !Jy && d || l(i),
                m = "Array" == t && p.entries || d;
            if (m && (s = Fy(m.call(new e)), Xy !== Object.prototype && s.next && (Fy(s) !== Xy && (Ky ? Ky(s, Xy) : "function" != typeof s[Qy] && um(s, Qy, nb)), zy(s, f, !0))), i == eb && d && d.name !== eb && (h = !0, g = function() {
                    return d.call(this)
                }), p[Qy] !== g && um(p, Qy, g), py[t] = g, i)
                if (c = {
                        values: l(eb),
                        keys: o ? g : l(Zy),
                        entries: l(tb)
                    }, a)
                    for (u in c)(Jy || h || !(u in p)) && Mm(p, u, c[u]);
                else hv({
                    target: t,
                    proto: !0,
                    forced: Jy || h
                }, c);
            return c
        },
        ib = "Array Iterator",
        ob = Nm.set,
        ab = Nm.getterFor(ib),
        sb = rb(Array, "Array", (function(e, t) {
            ob(this, {
                type: ib,
                target: Kg(e),
                index: 0,
                kind: t
            })
        }), (function() {
            var e = ab(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }), "values");
    py.Arguments = py.Array, ay("keys"), ay("values"), ay("entries");
    var cb = function(e, t) {
            var n = [][e];
            return !!n && Dg((function() {
                n.call(null, t || function() {
                    throw 1
                }, 1)
            }))
        },
        ub = [].join,
        lb = $g != Object,
        fb = cb("join", ",");
    hv({
        target: "Array",
        proto: !0,
        forced: lb || !fb
    }, {
        join: function(e) {
            return ub.call(Kg(this), void 0 === e ? "," : e)
        }
    });
    var hb = Bv.map,
        pb = Cv("map"),
        db = zv("map");
    hv({
        target: "Array",
        proto: !0,
        forced: !pb || !db
    }, {
        map: function(e) {
            return hb(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var gb = function(e, t, n) {
            var r, i;
            return Ky && "function" == typeof(r = t.constructor) && r !== n && Xg(i = r.prototype) && i !== n.prototype && Ky(e, i), e
        },
        mb = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        vb = "[" + mb + "]",
        yb = RegExp("^" + vb + vb + "*"),
        bb = RegExp(vb + vb + "*$"),
        wb = function(e) {
            return function(t) {
                var n = String(Gg(t));
                return 1 & e && (n = n.replace(yb, "")), 2 & e && (n = n.replace(bb, "")), n
            }
        },
        _b = {
            start: wb(1),
            end: wb(2),
            trim: wb(3)
        },
        Eb = ev.f,
        Sb = om.f,
        kb = cm.f,
        Tb = _b.trim,
        xb = "Number",
        Ab = Ug.Number,
        Ob = Ab.prototype,
        Ib = zg(ry(Ob)) == xb,
        Cb = function(e) {
            var t, n, r, i, o, a, s, c, u = Jg(e, !1);
            if ("string" == typeof u && u.length > 2)
                if (43 === (t = (u = Tb(u)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                switch (u.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, i = 55;
                        break;
                    default:
                        return +u
                }
                for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
                    if ((c = o.charCodeAt(s)) < 48 || c > i) return NaN;
                return parseInt(o, r)
            }
            return +u
        };
    if (lv(xb, !Ab(" 0o1") || !Ab("0b1") || Ab("+0x1"))) {
        for (var Pb, jb = function(e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof jb && (Ib ? Dg((function() {
                    Ob.valueOf.call(n)
                })) : zg(n) != xb) ? gb(new Ab(Cb(t)), n, jb) : Cb(t)
            }, Rb = Fg ? Eb(Ab) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Lb = 0; Rb.length > Lb; Lb++) Zg(Ab, Pb = Rb[Lb]) && !Zg(jb, Pb) && kb(jb, Pb, Sb(Ab, Pb));
        jb.prototype = Ob, Ob.constructor = jb, Mm(Ug, xb, jb)
    }
    var Nb = Dg((function() {
        Xv(1)
    }));
    hv({
        target: "Object",
        stat: !0,
        forced: Nb
    }, {
        keys: function(e) {
            return Xv(dv(e))
        }
    });
    var Mb = yy ? {}.toString : function() {
        return "[object " + _y(this) + "]"
    };
    yy || Mm(Object.prototype, "toString", Mb, {
        unsafe: !0
    });
    var Ub = Hg.f,
        Db = function(e) {
            return function(t) {
                for (var n, r = Kg(t), i = Xv(r), o = i.length, a = 0, s = []; o > a;) n = i[a++], Fg && !Ub.call(r, n) || s.push(e ? [n, r[n]] : r[n]);
                return s
            }
        },
        Fb = {
            entries: Db(!0),
            values: Db(!1)
        },
        qb = Fb.values;
    hv({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return qb(e)
        }
    });
    var Bb = function() {
        var e = am(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    };

    function Hb(e, t) {
        return RegExp(e, t)
    }
    var Vb = {
            UNSUPPORTED_Y: Dg((function() {
                var e = Hb("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })),
            BROKEN_CARET: Dg((function() {
                var e = Hb("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        Wb = RegExp.prototype.exec,
        zb = String.prototype.replace,
        Yb = Wb,
        $b = function() {
            var e = /a/,
                t = /b*/g;
            return Wb.call(e, "a"), Wb.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        }(),
        Gb = Vb.UNSUPPORTED_Y || Vb.BROKEN_CARET,
        Kb = void 0 !== /()??/.exec("")[1];
    ($b || Kb || Gb) && (Yb = function(e) {
        var t, n, r, i, o = this,
            a = Gb && o.sticky,
            s = Bb.call(o),
            c = o.source,
            u = 0,
            l = e;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), l = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (c = "(?: " + c + ")", l = " " + l, u++), n = new RegExp("^(?:" + c + ")", s)), Kb && (n = new RegExp("^" + c + "$(?!\\s)", s)), $b && (t = o.lastIndex), r = Wb.call(a ? n : o, l), a ? r ? (r.input = r.input.slice(u), r[0] = r[0].slice(u), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : $b && r && (o.lastIndex = o.global ? r.index + r[0].length : t), Kb && r && r.length > 1 && zb.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    });
    var Xb = Yb;
    hv({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Xb
    }, {
        exec: Xb
    });
    var Jb = "toString",
        Qb = RegExp.prototype,
        Zb = Qb.toString,
        ew = Dg((function() {
            return "/a/b" != Zb.call({
                source: "a",
                flags: "b"
            })
        })),
        tw = Zb.name != Jb;
    (ew || tw) && Mm(RegExp.prototype, Jb, (function() {
        var e = am(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in Qb) ? Bb.call(e) : n)
    }), {
        unsafe: !0
    });
    var nw = _v("match"),
        rw = function(e) {
            var t;
            return Xg(e) && (void 0 !== (t = e[nw]) ? !!t : "RegExp" == zg(e))
        },
        iw = function(e) {
            if (rw(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        },
        ow = _v("match"),
        aw = function(e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[ow] = !1, "/./" [e](t)
                } catch (e) {}
            }
            return !1
        };
    hv({
        target: "String",
        proto: !0,
        forced: !aw("includes")
    }, {
        includes: function(e) {
            return !!~String(Gg(this)).indexOf(iw(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var sw = function(e) {
            return function(t, n) {
                var r, i, o = String(Gg(t)),
                    a = Hm(n),
                    s = o.length;
                return a < 0 || a >= s ? e ? "" : void 0 : (r = o.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : i - 56320 + (r - 55296 << 10) + 65536
            }
        },
        cw = {
            codeAt: sw(!1),
            charAt: sw(!0)
        },
        uw = cw.charAt,
        lw = "String Iterator",
        fw = Nm.set,
        hw = Nm.getterFor(lw);
    rb(String, "String", (function(e) {
        fw(this, {
            type: lw,
            string: String(e),
            index: 0
        })
    }), (function() {
        var e, t = hw(this),
            n = t.string,
            r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = uw(n, r), t.index += e.length, {
            value: e,
            done: !1
        })
    }));
    var pw = _v("species"),
        dw = !Dg((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        gw = "$0" === "a".replace(/./, "$0"),
        mw = _v("replace"),
        vw = !!/./ [mw] && "" === /./ [mw]("a", "$0"),
        yw = !Dg((function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        bw = function(e, t, n, r) {
            var i = _v(e),
                o = !Dg((function() {
                    var t = {};
                    return t[i] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                a = o && !Dg((function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[pw] = function() {
                        return n
                    }, n.flags = "", n[i] = /./ [i]), n.exec = function() {
                        return t = !0, null
                    }, n[i](""), !t
                }));
            if (!o || !a || "replace" === e && (!dw || !gw || vw) || "split" === e && !yw) {
                var s = /./ [i],
                    c = n(i, "" [e], (function(e, t, n, r, i) {
                        return t.exec === Xb ? o && !i ? {
                            done: !0,
                            value: s.call(t, n, r)
                        } : {
                            done: !0,
                            value: e.call(n, t, r)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: gw,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: vw
                    }),
                    u = c[0],
                    l = c[1];
                Mm(String.prototype, e, u), Mm(RegExp.prototype, i, 2 == t ? function(e, t) {
                    return l.call(e, this, t)
                } : function(e) {
                    return l.call(e, this)
                })
            }
            r && um(RegExp.prototype[i], "sham", !0)
        },
        ww = Object.is || function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        },
        _w = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var r = n.call(e, t);
                if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
                return r
            }
            if ("RegExp" !== zg(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Xb.call(e, t)
        };
    bw("search", 1, (function(e, t, n) {
        return [function(t) {
            var n = Gg(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = am(e),
                o = String(this),
                a = i.lastIndex;
            ww(a, 0) || (i.lastIndex = 0);
            var s = _w(i, o);
            return ww(i.lastIndex, a) || (i.lastIndex = a), null === s ? -1 : s.index
        }]
    }));
    var Ew = function(e, t, n) {
            for (var r in t) Mm(e, r, t[r], n);
            return e
        },
        Sw = !Dg((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        kw = t((function(e) {
            var t = cm.f,
                n = Sm("meta"),
                r = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                o = function(e) {
                    t(e, n, {
                        value: {
                            objectID: "O" + ++r,
                            weakData: {}
                        }
                    })
                },
                a = e.exports = {
                    REQUIRED: !1,
                    fastKey: function(e, t) {
                        if (!Xg(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!Zg(e, n)) {
                            if (!i(e)) return "F";
                            if (!t) return "E";
                            o(e)
                        }
                        return e[n].objectID
                    },
                    getWeakData: function(e, t) {
                        if (!Zg(e, n)) {
                            if (!i(e)) return !0;
                            if (!t) return !1;
                            o(e)
                        }
                        return e[n].weakData
                    },
                    onFreeze: function(e) {
                        return Sw && a.REQUIRED && i(e) && !Zg(e, n) && o(e), e
                    }
                };
            xm[n] = !0
        })),
        Tw = (kw.REQUIRED, kw.fastKey, kw.getWeakData, kw.onFreeze, function(e, t) {
            this.stopped = e, this.result = t
        }),
        xw = function(e, t, n) {
            var r, i, o, a, s, c, u, l = n && n.that,
                f = !(!n || !n.AS_ENTRIES),
                h = !(!n || !n.IS_ITERATOR),
                p = !(!n || !n.INTERRUPTED),
                d = Dv(t, l, 1 + f + p),
                g = function(e) {
                    return r && fy(r), new Tw(!0, e)
                },
                m = function(e) {
                    return f ? (am(e), p ? d(e[0], e[1], g) : d(e[0], e[1])) : p ? d(e, g) : d(e)
                };
            if (h) r = e;
            else {
                if ("function" != typeof(i = Sy(e))) throw TypeError("Target is not iterable");
                if (my(i)) {
                    for (o = 0, a = Wm(e.length); a > o; o++)
                        if ((s = m(e[o])) && s instanceof Tw) return s;
                    return new Tw(!1)
                }
                r = i.call(e)
            }
            for (c = r.next; !(u = c.call(r)).done;) {
                try {
                    s = m(u.value)
                } catch (e) {
                    throw fy(r), e
                }
                if ("object" == typeof s && s && s instanceof Tw) return s
            }
            return new Tw(!1)
        },
        Aw = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        },
        Ow = kw.getWeakData,
        Iw = Nm.set,
        Cw = Nm.getterFor,
        Pw = Bv.find,
        jw = Bv.findIndex,
        Rw = 0,
        Lw = function(e) {
            return e.frozen || (e.frozen = new Nw)
        },
        Nw = function() {
            this.entries = []
        },
        Mw = function(e, t) {
            return Pw(e.entries, (function(e) {
                return e[0] === t
            }))
        };
    Nw.prototype = {
        get: function(e) {
            var t = Mw(this, e);
            if (t) return t[1]
        },
        has: function(e) {
            return !!Mw(this, e)
        },
        set: function(e, t) {
            var n = Mw(this, e);
            n ? n[1] = t : this.entries.push([e, t])
        },
        delete: function(e) {
            var t = jw(this.entries, (function(t) {
                return t[0] === e
            }));
            return ~t && this.entries.splice(t, 1), !!~t
        }
    };
    var Uw = {
            getConstructor: function(e, t, n, r) {
                var i = e((function(e, o) {
                        Aw(e, i, t), Iw(e, {
                            type: t,
                            id: Rw++,
                            frozen: void 0
                        }), null != o && xw(o, e[r], {
                            that: e,
                            AS_ENTRIES: n
                        })
                    })),
                    o = Cw(t),
                    a = function(e, t, n) {
                        var r = o(e),
                            i = Ow(am(t), !0);
                        return !0 === i ? Lw(r).set(t, n) : i[r.id] = n, e
                    };
                return Ew(i.prototype, {
                    delete: function(e) {
                        var t = o(this);
                        if (!Xg(e)) return !1;
                        var n = Ow(e);
                        return !0 === n ? Lw(t).delete(e) : n && Zg(n, t.id) && delete n[t.id]
                    },
                    has: function(e) {
                        var t = o(this);
                        if (!Xg(e)) return !1;
                        var n = Ow(e);
                        return !0 === n ? Lw(t).has(e) : n && Zg(n, t.id)
                    }
                }), Ew(i.prototype, n ? {
                    get: function(e) {
                        var t = o(this);
                        if (Xg(e)) {
                            var n = Ow(e);
                            return !0 === n ? Lw(t).get(e) : n ? n[t.id] : void 0
                        }
                    },
                    set: function(e, t) {
                        return a(this, e, t)
                    }
                } : {
                    add: function(e) {
                        return a(this, e, !0)
                    }
                }), i
            }
        },
        Dw = (t((function(e) {
            var t, n = Nm.enforce,
                r = !Ug.ActiveXObject && "ActiveXObject" in Ug,
                i = Object.isExtensible,
                o = function(e) {
                    return function() {
                        return e(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                a = e.exports = function(e, t, n) {
                    var r = -1 !== e.indexOf("Map"),
                        i = -1 !== e.indexOf("Weak"),
                        o = r ? "set" : "add",
                        a = Ug[e],
                        s = a && a.prototype,
                        c = a,
                        u = {},
                        l = function(e) {
                            var t = s[e];
                            Mm(s, e, "add" == e ? function(e) {
                                return t.call(this, 0 === e ? 0 : e), this
                            } : "delete" == e ? function(e) {
                                return !(i && !Xg(e)) && t.call(this, 0 === e ? 0 : e)
                            } : "get" == e ? function(e) {
                                return i && !Xg(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                            } : "has" == e ? function(e) {
                                return !(i && !Xg(e)) && t.call(this, 0 === e ? 0 : e)
                            } : function(e, n) {
                                return t.call(this, 0 === e ? 0 : e, n), this
                            })
                        };
                    if (lv(e, "function" != typeof a || !(i || s.forEach && !Dg((function() {
                            (new a).entries().next()
                        }))))) c = n.getConstructor(t, e, r, o), kw.REQUIRED = !0;
                    else if (lv(e, !0)) {
                        var f = new c,
                            h = f[o](i ? {} : -0, 1) != f,
                            p = Dg((function() {
                                f.has(1)
                            })),
                            d = Iy((function(e) {
                                new a(e)
                            })),
                            g = !i && Dg((function() {
                                for (var e = new a, t = 5; t--;) e[o](t, t);
                                return !e.has(-0)
                            }));
                        d || ((c = t((function(t, n) {
                            Aw(t, c, e);
                            var i = gb(new a, t, c);
                            return null != n && xw(n, i[o], {
                                that: i,
                                AS_ENTRIES: r
                            }), i
                        }))).prototype = s, s.constructor = c), (p || g) && (l("delete"), l("has"), r && l("get")), (g || h) && l(o), i && s.clear && delete s.clear
                    }
                    return u[e] = c, hv({
                        global: !0,
                        forced: c != a
                    }, u), zy(c, e), i || n.setStrong(c, e, r), c
                }("WeakMap", o, Uw);
            if (bm && r) {
                t = Uw.getConstructor(o, "WeakMap", !0), kw.REQUIRED = !0;
                var s = a.prototype,
                    c = s.delete,
                    u = s.has,
                    l = s.get,
                    f = s.set;
                Ew(s, {
                    delete: function(e) {
                        if (Xg(e) && !i(e)) {
                            var r = n(this);
                            return r.frozen || (r.frozen = new t), c.call(this, e) || r.frozen.delete(e)
                        }
                        return c.call(this, e)
                    },
                    has: function(e) {
                        if (Xg(e) && !i(e)) {
                            var r = n(this);
                            return r.frozen || (r.frozen = new t), u.call(this, e) || r.frozen.has(e)
                        }
                        return u.call(this, e)
                    },
                    get: function(e) {
                        if (Xg(e) && !i(e)) {
                            var r = n(this);
                            return r.frozen || (r.frozen = new t), u.call(this, e) ? l.call(this, e) : r.frozen.get(e)
                        }
                        return l.call(this, e)
                    },
                    set: function(e, r) {
                        if (Xg(e) && !i(e)) {
                            var o = n(this);
                            o.frozen || (o.frozen = new t), u.call(this, e) ? f.call(this, e, r) : o.frozen.set(e, r)
                        } else f.call(this, e, r);
                        return this
                    }
                })
            }
        })), {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }),
        Fw = _v("iterator"),
        qw = _v("toStringTag"),
        Bw = sb.values;
    for (var Hw in Dw) {
        var Vw = Ug[Hw],
            Ww = Vw && Vw.prototype;
        if (Ww) {
            if (Ww[Fw] !== Bw) try {
                um(Ww, Fw, Bw)
            } catch (e) {
                Ww[Fw] = Bw
            }
            if (Ww[qw] || um(Ww, qw, Hw), Dw[Hw])
                for (var zw in sb)
                    if (Ww[zw] !== sb[zw]) try {
                        um(Ww, zw, sb[zw])
                    } catch (e) {
                        Ww[zw] = sb[zw]
                    }
        }
    }
    var Yw = Bv.every,
        $w = cb("every"),
        Gw = zv("every");
    hv({
        target: "Array",
        proto: !0,
        forced: !$w || !Gw
    }, {
        every: function(e) {
            return Yw(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Kw = Bv.forEach,
        Xw = cb("forEach"),
        Jw = zv("forEach"),
        Qw = Xw && Jw ? [].forEach : function(e) {
            return Kw(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    hv({
        target: "Array",
        proto: !0,
        forced: [].forEach != Qw
    }, {
        forEach: Qw
    });
    var Zw = Km.indexOf,
        e_ = [].indexOf,
        t_ = !!e_ && 1 / [1].indexOf(1, -0) < 0,
        n_ = cb("indexOf"),
        r_ = zv("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    hv({
        target: "Array",
        proto: !0,
        forced: t_ || !n_ || !r_
    }, {
        indexOf: function(e) {
            return t_ ? e_.apply(this, arguments) || 0 : Zw(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var i_ = Object.assign,
        o_ = Object.defineProperty,
        a_ = !i_ || Dg((function() {
            if (Fg && 1 !== i_({
                    b: 1
                }, i_(o_({}, "a", {
                    enumerable: !0,
                    get: function() {
                        o_(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach((function(e) {
                t[e] = e
            })), 7 != i_({}, e)[n] || Xv(i_({}, t)).join("") != r
        })) ? function(e, t) {
            for (var n = dv(e), r = arguments.length, i = 1, o = tv.f, a = Hg.f; r > i;)
                for (var s, c = $g(arguments[i++]), u = o ? Xv(c).concat(o(c)) : Xv(c), l = u.length, f = 0; l > f;) s = u[f++], Fg && !a.call(c, s) || (n[s] = c[s]);
            return n
        } : i_;
    hv({
        target: "Object",
        stat: !0,
        forced: Object.assign !== a_
    }, {
        assign: a_
    });
    var s_ = _v("species"),
        c_ = function(e, t) {
            var n, r = am(e).constructor;
            return void 0 === r || null == (n = am(r)[s_]) ? t : Uv(n)
        },
        u_ = cw.charAt,
        l_ = function(e, t, n) {
            return t + (n ? u_(e, t).length : 1)
        },
        f_ = [].push,
        h_ = Math.min,
        p_ = 4294967295,
        d_ = !Dg((function() {
            return !RegExp(p_, "y")
        }));
    bw("split", 2, (function(e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var r = String(Gg(this)),
                i = void 0 === n ? p_ : n >>> 0;
            if (0 === i) return [];
            if (void 0 === e) return [r];
            if (!rw(e)) return t.call(r, e, i);
            for (var o, a, s, c = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, f = new RegExp(e.source, u + "g");
                (o = Xb.call(f, r)) && !((a = f.lastIndex) > l && (c.push(r.slice(l, o.index)), o.length > 1 && o.index < r.length && f_.apply(c, o.slice(1)), s = o[0].length, l = a, c.length >= i));) f.lastIndex === o.index && f.lastIndex++;
            return l === r.length ? !s && f.test("") || c.push("") : c.push(r.slice(l)), c.length > i ? c.slice(0, i) : c
        } : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function(t, n) {
            var i = Gg(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }, function(e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done) return o.value;
            var a = am(e),
                s = String(this),
                c = c_(a, RegExp),
                u = a.unicode,
                l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (d_ ? "y" : "g"),
                f = new c(d_ ? a : "^(?:" + a.source + ")", l),
                h = void 0 === i ? p_ : i >>> 0;
            if (0 === h) return [];
            if (0 === s.length) return null === _w(f, s) ? [s] : [];
            for (var p = 0, d = 0, g = []; d < s.length;) {
                f.lastIndex = d_ ? d : 0;
                var m, v = _w(f, d_ ? s : s.slice(d));
                if (null === v || (m = h_(Wm(f.lastIndex + (d_ ? 0 : d)), s.length)) === p) d = l_(s, d, u);
                else {
                    if (g.push(s.slice(p, d)), g.length === h) return g;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]), g.length === h) return g;
                    d = p = m
                }
            }
            return g.push(s.slice(p)), g
        }]
    }), !d_);
    var g_ = _b.trim;
    for (var m_ in hv({
            target: "String",
            proto: !0,
            forced: function(e) {
                return Dg((function() {
                    return !!mb[e]() || "​᠎" != "​᠎" [e]() || mb[e].name !== e
                }))
            }("trim")
        }, {
            trim: function() {
                return g_(this)
            }
        }), Dw) {
        var v_ = Ug[m_],
            y_ = v_ && v_.prototype;
        if (y_ && y_.forEach !== Qw) try {
            um(y_, "forEach", Qw)
        } catch (e) {
            y_.forEach = Qw
        }
    }
    var b_ = _v("iterator"),
        w_ = !Dg((function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"),
                t = e.searchParams,
                n = "";
            return e.pathname = "c%20d", t.forEach((function(e, r) {
                t.delete("b"), n += r + e
            })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[b_] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        })),
        __ = 2147483647,
        E_ = /[^\0-\u007E]/,
        S_ = /[.\u3002\uFF0E\uFF61]/g,
        k_ = "Overflow: input needs wider integers to process",
        T_ = Math.floor,
        x_ = String.fromCharCode,
        A_ = function(e) {
            return e + 22 + 75 * (e < 26)
        },
        O_ = function(e, t, n) {
            var r = 0;
            for (e = n ? T_(e / 700) : e >> 1, e += T_(e / t); e > 455; r += 36) e = T_(e / 35);
            return T_(r + 36 * e / (e + 38))
        },
        I_ = function(e) {
            var t, n, r = [],
                i = (e = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var i = e.charCodeAt(n++);
                        if (i >= 55296 && i <= 56319 && n < r) {
                            var o = e.charCodeAt(n++);
                            56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--)
                        } else t.push(i)
                    }
                    return t
                }(e)).length,
                o = 128,
                a = 0,
                s = 72;
            for (t = 0; t < e.length; t++)(n = e[t]) < 128 && r.push(x_(n));
            var c = r.length,
                u = c;
            for (c && r.push("-"); u < i;) {
                var l = __;
                for (t = 0; t < e.length; t++)(n = e[t]) >= o && n < l && (l = n);
                var f = u + 1;
                if (l - o > T_((__ - a) / f)) throw RangeError(k_);
                for (a += (l - o) * f, o = l, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < o && ++a > __) throw RangeError(k_);
                    if (n == o) {
                        for (var h = a, p = 36;; p += 36) {
                            var d = p <= s ? 1 : p >= s + 26 ? 26 : p - s;
                            if (h < d) break;
                            var g = h - d,
                                m = 36 - d;
                            r.push(x_(A_(d + g % m))), h = T_(g / m)
                        }
                        r.push(x_(A_(h))), s = O_(a, f, u == c), a = 0, ++u
                    }
                }++a, ++o
            }
            return r.join("")
        },
        C_ = function(e) {
            var t = Sy(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return am(t.call(e))
        },
        P_ = Fm("fetch"),
        j_ = Fm("Headers"),
        R_ = _v("iterator"),
        L_ = "URLSearchParams",
        N_ = "URLSearchParamsIterator",
        M_ = Nm.set,
        U_ = Nm.getterFor(L_),
        D_ = Nm.getterFor(N_),
        F_ = /\+/g,
        q_ = Array(4),
        B_ = function(e) {
            return q_[e - 1] || (q_[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        },
        H_ = function(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        },
        V_ = function(e) {
            var t = e.replace(F_, " "),
                n = 4;
            try {
                return decodeURIComponent(t)
            } catch (e) {
                for (; n;) t = t.replace(B_(n--), H_);
                return t
            }
        },
        W_ = /[!'()~]|%20/g,
        z_ = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        Y_ = function(e) {
            return z_[e]
        },
        $_ = function(e) {
            return encodeURIComponent(e).replace(W_, Y_)
        },
        G_ = function(e, t) {
            if (t)
                for (var n, r, i = t.split("&"), o = 0; o < i.length;)(n = i[o++]).length && (r = n.split("="), e.push({
                    key: V_(r.shift()),
                    value: V_(r.join("="))
                }))
        },
        K_ = function(e) {
            this.entries.length = 0, G_(this.entries, e)
        },
        X_ = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments")
        },
        J_ = Gy((function(e, t) {
            M_(this, {
                type: N_,
                iterator: C_(U_(e).entries),
                kind: t
            })
        }), "Iterator", (function() {
            var e = D_(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
        })),
        Q_ = function() {
            Aw(this, Q_, L_);
            var e, t, n, r, i, o, a, s, c, u = arguments.length > 0 ? arguments[0] : void 0,
                l = this,
                f = [];
            if (M_(l, {
                    type: L_,
                    entries: f,
                    updateURL: function() {},
                    updateSearchParams: K_
                }), void 0 !== u)
                if (Xg(u))
                    if ("function" == typeof(e = Sy(u)))
                        for (n = (t = e.call(u)).next; !(r = n.call(t)).done;) {
                            if ((a = (o = (i = C_(am(r.value))).next).call(i)).done || (s = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                            f.push({
                                key: a.value + "",
                                value: s.value + ""
                            })
                        } else
                            for (c in u) Zg(u, c) && f.push({
                                key: c,
                                value: u[c] + ""
                            });
                    else G_(f, "string" == typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
        },
        Z_ = Q_.prototype;
    Ew(Z_, {
        append: function(e, t) {
            X_(arguments.length, 2);
            var n = U_(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }), n.updateURL()
        },
        delete: function(e) {
            X_(arguments.length, 1);
            for (var t = U_(this), n = t.entries, r = e + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
            t.updateURL()
        },
        get: function(e) {
            X_(arguments.length, 1);
            for (var t = U_(this).entries, n = e + "", r = 0; r < t.length; r++)
                if (t[r].key === n) return t[r].value;
            return null
        },
        getAll: function(e) {
            X_(arguments.length, 1);
            for (var t = U_(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
            return r
        },
        has: function(e) {
            X_(arguments.length, 1);
            for (var t = U_(this).entries, n = e + "", r = 0; r < t.length;)
                if (t[r++].key === n) return !0;
            return !1
        },
        set: function(e, t) {
            X_(arguments.length, 1);
            for (var n, r = U_(this), i = r.entries, o = !1, a = e + "", s = t + "", c = 0; c < i.length; c++)(n = i[c]).key === a && (o ? i.splice(c--, 1) : (o = !0, n.value = s));
            o || i.push({
                key: a,
                value: s
            }), r.updateURL()
        },
        sort: function() {
            var e, t, n, r = U_(this),
                i = r.entries,
                o = i.slice();
            for (i.length = 0, n = 0; n < o.length; n++) {
                for (e = o[n], t = 0; t < n; t++)
                    if (i[t].key > e.key) {
                        i.splice(t, 0, e);
                        break
                    }
                t === n && i.push(e)
            }
            r.updateURL()
        },
        forEach: function(e) {
            for (var t, n = U_(this).entries, r = Dv(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
        },
        keys: function() {
            return new J_(this, "keys")
        },
        values: function() {
            return new J_(this, "values")
        },
        entries: function() {
            return new J_(this, "entries")
        }
    }, {
        enumerable: !0
    }), Mm(Z_, R_, Z_.entries), Mm(Z_, "toString", (function() {
        for (var e, t = U_(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push($_(e.key) + "=" + $_(e.value));
        return n.join("&")
    }), {
        enumerable: !0
    }), zy(Q_, L_), hv({
        global: !0,
        forced: !w_
    }, {
        URLSearchParams: Q_
    }), w_ || "function" != typeof P_ || "function" != typeof j_ || hv({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            var t, n, r, i = [e];
            return arguments.length > 1 && (Xg(t = arguments[1]) && (n = t.body, _y(n) === L_ && ((r = t.headers ? new j_(t.headers) : new j_).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = ry(t, {
                body: Vg(0, String(n)),
                headers: Vg(0, r)
            }))), i.push(t)), P_.apply(this, i)
        }
    });
    var eE, tE = {
            URLSearchParams: Q_,
            getState: U_
        },
        nE = cw.codeAt,
        rE = Ug.URL,
        iE = tE.URLSearchParams,
        oE = tE.getState,
        aE = Nm.set,
        sE = Nm.getterFor("URL"),
        cE = Math.floor,
        uE = Math.pow,
        lE = "Invalid scheme",
        fE = "Invalid host",
        hE = "Invalid port",
        pE = /[A-Za-z]/,
        dE = /[\d+-.A-Za-z]/,
        gE = /\d/,
        mE = /^(0x|0X)/,
        vE = /^[0-7]+$/,
        yE = /^\d+$/,
        bE = /^[\dA-Fa-f]+$/,
        wE = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        _E = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        EE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        SE = /[\u0009\u000A\u000D]/g,
        kE = function(e, t) {
            var n, r, i;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return fE;
                if (!(n = xE(t.slice(1, -1)))) return fE;
                e.host = n
            } else if (LE(e)) {
                if (t = function(e) {
                        var t, n, r = [],
                            i = e.toLowerCase().replace(S_, ".").split(".");
                        for (t = 0; t < i.length; t++) n = i[t], r.push(E_.test(n) ? "xn--" + I_(n) : n);
                        return r.join(".")
                    }(t), wE.test(t)) return fE;
                if (null === (n = TE(t))) return fE;
                e.host = n
            } else {
                if (_E.test(t)) return fE;
                for (n = "", r = ky(t), i = 0; i < r.length; i++) n += jE(r[i], OE);
                e.host = n
            }
        },
        TE = function(e) {
            var t, n, r, i, o, a, s, c = e.split(".");
            if (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4) return e;
            for (n = [], r = 0; r < t; r++) {
                if ("" == (i = c[r])) return e;
                if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = mE.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0;
                else {
                    if (!(10 == o ? yE : 8 == o ? vE : bE).test(i)) return e;
                    a = parseInt(i, o)
                }
                n.push(a)
            }
            for (r = 0; r < t; r++)
                if (a = n[r], r == t - 1) {
                    if (a >= uE(256, 5 - t)) return null
                } else if (a > 255) return null;
            for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * uE(256, 3 - r);
            return s
        },
        xE = function(e) {
            var t, n, r, i, o, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0],
                u = 0,
                l = null,
                f = 0,
                h = function() {
                    return e.charAt(f)
                };
            if (":" == h()) {
                if (":" != e.charAt(1)) return;
                f += 2, l = ++u
            }
            for (; h();) {
                if (8 == u) return;
                if (":" != h()) {
                    for (t = n = 0; n < 4 && bE.test(h());) t = 16 * t + parseInt(h(), 16), f++, n++;
                    if ("." == h()) {
                        if (0 == n) return;
                        if (f -= n, u > 6) return;
                        for (r = 0; h();) {
                            if (i = null, r > 0) {
                                if (!("." == h() && r < 4)) return;
                                f++
                            }
                            if (!gE.test(h())) return;
                            for (; gE.test(h());) {
                                if (o = parseInt(h(), 10), null === i) i = o;
                                else {
                                    if (0 == i) return;
                                    i = 10 * i + o
                                }
                                if (i > 255) return;
                                f++
                            }
                            c[u] = 256 * c[u] + i, 2 != ++r && 4 != r || u++
                        }
                        if (4 != r) return;
                        break
                    }
                    if (":" == h()) {
                        if (f++, !h()) return
                    } else if (h()) return;
                    c[u++] = t
                } else {
                    if (null !== l) return;
                    f++, l = ++u
                }
            }
            if (null !== l)
                for (a = u - l, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s;
            else if (8 != u) return;
            return c
        },
        AE = function(e) {
            var t, n, r, i;
            if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = cE(e / 256);
                return t.join(".")
            }
            if ("object" == typeof e) {
                for (t = "", r = function(e) {
                        for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                        return i > n && (t = r, n = i), t
                    }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                return "[" + t + "]"
            }
            return e
        },
        OE = {},
        IE = a_({}, OE, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        CE = a_({}, IE, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        PE = a_({}, CE, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        jE = function(e, t) {
            var n = nE(e, 0);
            return n > 32 && n < 127 && !Zg(t, e) ? e : encodeURIComponent(e)
        },
        RE = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        LE = function(e) {
            return Zg(RE, e.scheme)
        },
        NE = function(e) {
            return "" != e.username || "" != e.password
        },
        ME = function(e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
        },
        UE = function(e, t) {
            var n;
            return 2 == e.length && pE.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
        },
        DE = function(e) {
            var t;
            return e.length > 1 && UE(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
        },
        FE = function(e) {
            var t = e.path,
                n = t.length;
            !n || "file" == e.scheme && 1 == n && UE(t[0], !0) || t.pop()
        },
        qE = function(e) {
            return "." === e || "%2e" === e.toLowerCase()
        },
        BE = {},
        HE = {},
        VE = {},
        WE = {},
        zE = {},
        YE = {},
        $E = {},
        GE = {},
        KE = {},
        XE = {},
        JE = {},
        QE = {},
        ZE = {},
        eS = {},
        tS = {},
        nS = {},
        rS = {},
        iS = {},
        oS = {},
        aS = {},
        sS = {},
        cS = function(e, t, n, r) {
            var i, o, a, s, c, u = n || BE,
                l = 0,
                f = "",
                h = !1,
                p = !1,
                d = !1;
            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(EE, "")), t = t.replace(SE, ""), i = ky(t); l <= i.length;) {
                switch (o = i[l], u) {
                    case BE:
                        if (!o || !pE.test(o)) {
                            if (n) return lE;
                            u = VE;
                            continue
                        }
                        f += o.toLowerCase(), u = HE;
                        break;
                    case HE:
                        if (o && (dE.test(o) || "+" == o || "-" == o || "." == o)) f += o.toLowerCase();
                        else {
                            if (":" != o) {
                                if (n) return lE;
                                f = "", u = VE, l = 0;
                                continue
                            }
                            if (n && (LE(e) != Zg(RE, f) || "file" == f && (NE(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                            if (e.scheme = f, n) return void(LE(e) && RE[e.scheme] == e.port && (e.port = null));
                            f = "", "file" == e.scheme ? u = eS : LE(e) && r && r.scheme == e.scheme ? u = WE : LE(e) ? u = GE : "/" == i[l + 1] ? (u = zE, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), u = oS)
                        }
                        break;
                    case VE:
                        if (!r || r.cannotBeABaseURL && "#" != o) return lE;
                        if (r.cannotBeABaseURL && "#" == o) {
                            e.scheme = r.scheme, e.path = r.path.slice(), e.query = r.query, e.fragment = "", e.cannotBeABaseURL = !0, u = sS;
                            break
                        }
                        u = "file" == r.scheme ? eS : YE;
                        continue;
                    case WE:
                        if ("/" != o || "/" != i[l + 1]) {
                            u = YE;
                            continue
                        }
                        u = KE, l++;
                        break;
                    case zE:
                        if ("/" == o) {
                            u = XE;
                            break
                        }
                        u = iS;
                        continue;
                    case YE:
                        if (e.scheme = r.scheme, o == eE) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query;
                        else if ("/" == o || "\\" == o && LE(e)) u = $E;
                        else if ("?" == o) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = "", u = aS;
                        else {
                            if ("#" != o) {
                                e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.path.pop(), u = iS;
                                continue
                            }
                            e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query, e.fragment = "", u = sS
                        }
                        break;
                    case $E:
                        if (!LE(e) || "/" != o && "\\" != o) {
                            if ("/" != o) {
                                e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, u = iS;
                                continue
                            }
                            u = XE
                        } else u = KE;
                        break;
                    case GE:
                        if (u = KE, "/" != o || "/" != f.charAt(l + 1)) continue;
                        l++;
                        break;
                    case KE:
                        if ("/" != o && "\\" != o) {
                            u = XE;
                            continue
                        }
                        break;
                    case XE:
                        if ("@" == o) {
                            h && (f = "%40" + f), h = !0, a = ky(f);
                            for (var g = 0; g < a.length; g++) {
                                var m = a[g];
                                if (":" != m || d) {
                                    var v = jE(m, PE);
                                    d ? e.password += v : e.username += v
                                } else d = !0
                            }
                            f = ""
                        } else if (o == eE || "/" == o || "?" == o || "#" == o || "\\" == o && LE(e)) {
                            if (h && "" == f) return "Invalid authority";
                            l -= ky(f).length + 1, f = "", u = JE
                        } else f += o;
                        break;
                    case JE:
                    case QE:
                        if (n && "file" == e.scheme) {
                            u = nS;
                            continue
                        }
                        if (":" != o || p) {
                            if (o == eE || "/" == o || "?" == o || "#" == o || "\\" == o && LE(e)) {
                                if (LE(e) && "" == f) return fE;
                                if (n && "" == f && (NE(e) || null !== e.port)) return;
                                if (s = kE(e, f)) return s;
                                if (f = "", u = rS, n) return;
                                continue
                            }
                            "[" == o ? p = !0 : "]" == o && (p = !1), f += o
                        } else {
                            if ("" == f) return fE;
                            if (s = kE(e, f)) return s;
                            if (f = "", u = ZE, n == QE) return
                        }
                        break;
                    case ZE:
                        if (!gE.test(o)) {
                            if (o == eE || "/" == o || "?" == o || "#" == o || "\\" == o && LE(e) || n) {
                                if ("" != f) {
                                    var y = parseInt(f, 10);
                                    if (y > 65535) return hE;
                                    e.port = LE(e) && y === RE[e.scheme] ? null : y, f = ""
                                }
                                if (n) return;
                                u = rS;
                                continue
                            }
                            return hE
                        }
                        f += o;
                        break;
                    case eS:
                        if (e.scheme = "file", "/" == o || "\\" == o) u = tS;
                        else {
                            if (!r || "file" != r.scheme) {
                                u = iS;
                                continue
                            }
                            if (o == eE) e.host = r.host, e.path = r.path.slice(), e.query = r.query;
                            else if ("?" == o) e.host = r.host, e.path = r.path.slice(), e.query = "", u = aS;
                            else {
                                if ("#" != o) {
                                    DE(i.slice(l).join("")) || (e.host = r.host, e.path = r.path.slice(), FE(e)), u = iS;
                                    continue
                                }
                                e.host = r.host, e.path = r.path.slice(), e.query = r.query, e.fragment = "", u = sS
                            }
                        }
                        break;
                    case tS:
                        if ("/" == o || "\\" == o) {
                            u = nS;
                            break
                        }
                        r && "file" == r.scheme && !DE(i.slice(l).join("")) && (UE(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host), u = iS;
                        continue;
                    case nS:
                        if (o == eE || "/" == o || "\\" == o || "?" == o || "#" == o) {
                            if (!n && UE(f)) u = iS;
                            else if ("" == f) {
                                if (e.host = "", n) return;
                                u = rS
                            } else {
                                if (s = kE(e, f)) return s;
                                if ("localhost" == e.host && (e.host = ""), n) return;
                                f = "", u = rS
                            }
                            continue
                        }
                        f += o;
                        break;
                    case rS:
                        if (LE(e)) {
                            if (u = iS, "/" != o && "\\" != o) continue
                        } else if (n || "?" != o)
                            if (n || "#" != o) {
                                if (o != eE && (u = iS, "/" != o)) continue
                            } else e.fragment = "", u = sS;
                        else e.query = "", u = aS;
                        break;
                    case iS:
                        if (o == eE || "/" == o || "\\" == o && LE(e) || !n && ("?" == o || "#" == o)) {
                            if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (FE(e), "/" == o || "\\" == o && LE(e) || e.path.push("")) : qE(f) ? "/" == o || "\\" == o && LE(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && UE(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (o == eE || "?" == o || "#" == o))
                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                            "?" == o ? (e.query = "", u = aS) : "#" == o && (e.fragment = "", u = sS)
                        } else f += jE(o, CE);
                        break;
                    case oS:
                        "?" == o ? (e.query = "", u = aS) : "#" == o ? (e.fragment = "", u = sS) : o != eE && (e.path[0] += jE(o, OE));
                        break;
                    case aS:
                        n || "#" != o ? o != eE && ("'" == o && LE(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : jE(o, OE)) : (e.fragment = "", u = sS);
                        break;
                    case sS:
                        o != eE && (e.fragment += jE(o, IE))
                }
                l++
            }
        },
        uS = function(e) {
            var t, n, r = Aw(this, uS, "URL"),
                i = arguments.length > 1 ? arguments[1] : void 0,
                o = String(e),
                a = aE(r, {
                    type: "URL"
                });
            if (void 0 !== i)
                if (i instanceof uS) t = sE(i);
                else if (n = cS(t = {}, String(i))) throw TypeError(n);
            if (n = cS(a, o, null, t)) throw TypeError(n);
            var s = a.searchParams = new iE,
                c = oE(s);
            c.updateSearchParams(a.query), c.updateURL = function() {
                a.query = String(s) || null
            }, Fg || (r.href = fS.call(r), r.origin = hS.call(r), r.protocol = pS.call(r), r.username = dS.call(r), r.password = gS.call(r), r.host = mS.call(r), r.hostname = vS.call(r), r.port = yS.call(r), r.pathname = bS.call(r), r.search = wS.call(r), r.searchParams = _S.call(r), r.hash = ES.call(r))
        },
        lS = uS.prototype,
        fS = function() {
            var e = sE(this),
                t = e.scheme,
                n = e.username,
                r = e.password,
                i = e.host,
                o = e.port,
                a = e.path,
                s = e.query,
                c = e.fragment,
                u = t + ":";
            return null !== i ? (u += "//", NE(e) && (u += n + (r ? ":" + r : "") + "@"), u += AE(i), null !== o && (u += ":" + o)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
        },
        hS = function() {
            var e = sE(this),
                t = e.scheme,
                n = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
            return "file" != t && LE(e) ? t + "://" + AE(e.host) + (null !== n ? ":" + n : "") : "null"
        },
        pS = function() {
            return sE(this).scheme + ":"
        },
        dS = function() {
            return sE(this).username
        },
        gS = function() {
            return sE(this).password
        },
        mS = function() {
            var e = sE(this),
                t = e.host,
                n = e.port;
            return null === t ? "" : null === n ? AE(t) : AE(t) + ":" + n
        },
        vS = function() {
            var e = sE(this).host;
            return null === e ? "" : AE(e)
        },
        yS = function() {
            var e = sE(this).port;
            return null === e ? "" : String(e)
        },
        bS = function() {
            var e = sE(this),
                t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        },
        wS = function() {
            var e = sE(this).query;
            return e ? "?" + e : ""
        },
        _S = function() {
            return sE(this).searchParams
        },
        ES = function() {
            var e = sE(this).fragment;
            return e ? "#" + e : ""
        },
        SS = function(e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            }
        };
    if (Fg && Jv(lS, {
            href: SS(fS, (function(e) {
                var t = sE(this),
                    n = String(e),
                    r = cS(t, n);
                if (r) throw TypeError(r);
                oE(t.searchParams).updateSearchParams(t.query)
            })),
            origin: SS(hS),
            protocol: SS(pS, (function(e) {
                var t = sE(this);
                cS(t, String(e) + ":", BE)
            })),
            username: SS(dS, (function(e) {
                var t = sE(this),
                    n = ky(String(e));
                if (!ME(t)) {
                    t.username = "";
                    for (var r = 0; r < n.length; r++) t.username += jE(n[r], PE)
                }
            })),
            password: SS(gS, (function(e) {
                var t = sE(this),
                    n = ky(String(e));
                if (!ME(t)) {
                    t.password = "";
                    for (var r = 0; r < n.length; r++) t.password += jE(n[r], PE)
                }
            })),
            host: SS(mS, (function(e) {
                var t = sE(this);
                t.cannotBeABaseURL || cS(t, String(e), JE)
            })),
            hostname: SS(vS, (function(e) {
                var t = sE(this);
                t.cannotBeABaseURL || cS(t, String(e), QE)
            })),
            port: SS(yS, (function(e) {
                var t = sE(this);
                ME(t) || ("" == (e = String(e)) ? t.port = null : cS(t, e, ZE))
            })),
            pathname: SS(bS, (function(e) {
                var t = sE(this);
                t.cannotBeABaseURL || (t.path = [], cS(t, e + "", rS))
            })),
            search: SS(wS, (function(e) {
                var t = sE(this);
                "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", cS(t, e, aS)), oE(t.searchParams).updateSearchParams(t.query)
            })),
            searchParams: SS(_S),
            hash: SS(ES, (function(e) {
                var t = sE(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", cS(t, e, sS)) : t.fragment = null
            }))
        }), Mm(lS, "toJSON", (function() {
            return fS.call(this)
        }), {
            enumerable: !0
        }), Mm(lS, "toString", (function() {
            return fS.call(this)
        }), {
            enumerable: !0
        }), rE) {
        var kS = rE.createObjectURL,
            TS = rE.revokeObjectURL;
        kS && Mm(uS, "createObjectURL", (function(e) {
            return kS.apply(rE, arguments)
        })), TS && Mm(uS, "revokeObjectURL", (function(e) {
            return TS.apply(rE, arguments)
        }))
    }
    zy(uS, "URL"), hv({
        global: !0,
        forced: !w_,
        sham: !Fg
    }, {
        URL: uS
    });
    var xS = Bv.some,
        AS = cb("some"),
        OS = zv("some");
    hv({
        target: "Array",
        proto: !0,
        forced: !AS || !OS
    }, {
        some: function(e) {
            return xS(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var IS = "".repeat || function(e) {
            var t = String(Gg(this)),
                n = "",
                r = Hm(e);
            if (r < 0 || r == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; r > 0;
                (r >>>= 1) && (t += t)) 1 & r && (n += t);
            return n
        },
        CS = 1..toFixed,
        PS = Math.floor,
        jS = function(e, t, n) {
            return 0 === t ? n : t % 2 == 1 ? jS(e, t - 1, n * e) : jS(e * e, t / 2, n)
        },
        RS = CS && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !Dg((function() {
            CS.call({})
        }));
    hv({
        target: "Number",
        proto: !0,
        forced: RS
    }, {
        toFixed: function(e) {
            var t, n, r, i, o = function(e) {
                    if ("number" != typeof e && "Number" != zg(e)) throw TypeError("Incorrect invocation");
                    return +e
                }(this),
                a = Hm(e),
                s = [0, 0, 0, 0, 0, 0],
                c = "",
                u = "0",
                l = function(e, t) {
                    for (var n = -1, r = t; ++n < 6;) r += e * s[n], s[n] = r % 1e7, r = PS(r / 1e7)
                },
                f = function(e) {
                    for (var t = 6, n = 0; --t >= 0;) n += s[t], s[t] = PS(n / e), n = n % e * 1e7
                },
                h = function() {
                    for (var e = 6, t = ""; --e >= 0;)
                        if ("" !== t || 0 === e || 0 !== s[e]) {
                            var n = String(s[e]);
                            t = "" === t ? n : t + IS.call("0", 7 - n.length) + n
                        }
                    return t
                };
            if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits");
            if (o != o) return "NaN";
            if (o <= -1e21 || o >= 1e21) return String(o);
            if (o < 0 && (c = "-", o = -o), o > 1e-21)
                if (n = (t = function(e) {
                        for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                        for (; n >= 2;) t += 1, n /= 2;
                        return t
                    }(o * jS(2, 69, 1)) - 69) < 0 ? o * jS(2, -t, 1) : o / jS(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
                    for (l(0, n), r = a; r >= 7;) l(1e7, 0), r -= 7;
                    for (l(jS(10, r, 1), 0), r = t - 1; r >= 23;) f(1 << 23), r -= 23;
                    f(1 << r), l(1, 1), f(2), u = h()
                } else l(0, n), l(1 << -t, 0), u = h() + IS.call("0", a);
            return u = a > 0 ? c + ((i = u.length) <= a ? "0." + IS.call("0", a - i) + u : u.slice(0, i - a) + "." + u.slice(i - a)) : c + u
        }
    });
    var LS = Fb.entries;
    hv({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return LS(e)
        }
    });
    var NS = Math.max,
        MS = Math.min,
        US = Math.floor,
        DS = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        FS = /\$([$&'`]|\d\d?)/g;
    bw("replace", 2, (function(e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = r.REPLACE_KEEPS_$0,
            a = i ? "$" : "$0";
        return [function(n, r) {
            var i = Gg(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }, function(e, r) {
            if (!i && o || "string" == typeof r && -1 === r.indexOf(a)) {
                var c = n(t, e, this, r);
                if (c.done) return c.value
            }
            var u = am(e),
                l = String(this),
                f = "function" == typeof r;
            f || (r = String(r));
            var h = u.global;
            if (h) {
                var p = u.unicode;
                u.lastIndex = 0
            }
            for (var d = [];;) {
                var g = _w(u, l);
                if (null === g) break;
                if (d.push(g), !h) break;
                "" === String(g[0]) && (u.lastIndex = l_(l, Wm(u.lastIndex), p))
            }
            for (var m, v = "", y = 0, b = 0; b < d.length; b++) {
                g = d[b];
                for (var w = String(g[0]), _ = NS(MS(Hm(g.index), l.length), 0), E = [], S = 1; S < g.length; S++) E.push(void 0 === (m = g[S]) ? m : String(m));
                var k = g.groups;
                if (f) {
                    var T = [w].concat(E, _, l);
                    void 0 !== k && T.push(k);
                    var x = String(r.apply(void 0, T))
                } else x = s(w, l, _, E, k, r);
                _ >= y && (v += l.slice(y, _) + x, y = _ + w.length)
            }
            return v + l.slice(y)
        }];

        function s(e, n, r, i, o, a) {
            var s = r + e.length,
                c = i.length,
                u = FS;
            return void 0 !== o && (o = dv(o), u = DS), t.call(a, u, (function(t, a) {
                var u;
                switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, r);
                    case "'":
                        return n.slice(s);
                    case "<":
                        u = o[a.slice(1, -1)];
                        break;
                    default:
                        var l = +a;
                        if (0 === l) return t;
                        if (l > c) {
                            var f = US(l / 10);
                            return 0 === f ? t : f <= c ? void 0 === i[f - 1] ? a.charAt(1) : i[f - 1] + a.charAt(1) : t
                        }
                        u = i[l - 1]
                }
                return void 0 === u ? "" : u
            }))
        }
    }));
    var qS = ev.f,
        BS = {}.toString,
        HS = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        VS = {
            f: function(e) {
                return HS && "[object Window]" == BS.call(e) ? function(e) {
                    try {
                        return qS(e)
                    } catch (e) {
                        return HS.slice()
                    }
                }(e) : qS(Kg(e))
            }
        },
        WS = {
            f: _v
        },
        zS = cm.f,
        YS = Bv.forEach,
        $S = Tm("hidden"),
        GS = "Symbol",
        KS = _v("toPrimitive"),
        XS = Nm.set,
        JS = Nm.getterFor(GS),
        QS = Object.prototype,
        ZS = Ug.Symbol,
        ek = Fm("JSON", "stringify"),
        tk = om.f,
        nk = cm.f,
        rk = VS.f,
        ik = Hg.f,
        ok = wm("symbols"),
        ak = wm("op-symbols"),
        sk = wm("string-to-symbol-registry"),
        ck = wm("symbol-to-string-registry"),
        uk = wm("wks"),
        lk = Ug.QObject,
        fk = !lk || !lk.prototype || !lk.prototype.findChild,
        hk = Fg && Dg((function() {
            return 7 != ry(nk({}, "a", {
                get: function() {
                    return nk(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(e, t, n) {
            var r = tk(QS, t);
            r && delete QS[t], nk(e, t, n), r && e !== QS && nk(QS, t, r)
        } : nk,
        pk = function(e, t) {
            var n = ok[e] = ry(ZS.prototype);
            return XS(n, {
                type: GS,
                tag: e,
                description: t
            }), Fg || (n.description = t), n
        },
        dk = vv ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof ZS
        },
        gk = function(e, t, n) {
            e === QS && gk(ak, t, n), am(e);
            var r = Jg(t, !0);
            return am(n), Zg(ok, r) ? (n.enumerable ? (Zg(e, $S) && e[$S][r] && (e[$S][r] = !1), n = ry(n, {
                enumerable: Vg(0, !1)
            })) : (Zg(e, $S) || nk(e, $S, Vg(1, {})), e[$S][r] = !0), hk(e, r, n)) : nk(e, r, n)
        },
        mk = function(e, t) {
            am(e);
            var n = Kg(t),
                r = Xv(n).concat(wk(n));
            return YS(r, (function(t) {
                Fg && !vk.call(n, t) || gk(e, t, n[t])
            })), e
        },
        vk = function(e) {
            var t = Jg(e, !0),
                n = ik.call(this, t);
            return !(this === QS && Zg(ok, t) && !Zg(ak, t)) && (!(n || !Zg(this, t) || !Zg(ok, t) || Zg(this, $S) && this[$S][t]) || n)
        },
        yk = function(e, t) {
            var n = Kg(e),
                r = Jg(t, !0);
            if (n !== QS || !Zg(ok, r) || Zg(ak, r)) {
                var i = tk(n, r);
                return !i || !Zg(ok, r) || Zg(n, $S) && n[$S][r] || (i.enumerable = !0), i
            }
        },
        bk = function(e) {
            var t = rk(Kg(e)),
                n = [];
            return YS(t, (function(e) {
                Zg(ok, e) || Zg(xm, e) || n.push(e)
            })), n
        },
        wk = function(e) {
            var t = e === QS,
                n = rk(t ? ak : Kg(e)),
                r = [];
            return YS(n, (function(e) {
                !Zg(ok, e) || t && !Zg(QS, e) || r.push(ok[e])
            })), r
        };
    if (mv || (Mm((ZS = function() {
            if (this instanceof ZS) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = Sm(e),
                n = function(e) {
                    this === QS && n.call(ak, e), Zg(this, $S) && Zg(this[$S], t) && (this[$S][t] = !1), hk(this, t, Vg(1, e))
                };
            return Fg && fk && hk(QS, t, {
                configurable: !0,
                set: n
            }), pk(t, e)
        }).prototype, "toString", (function() {
            return JS(this).tag
        })), Mm(ZS, "withoutSetter", (function(e) {
            return pk(Sm(e), e)
        })), Hg.f = vk, cm.f = gk, om.f = yk, ev.f = VS.f = bk, tv.f = wk, WS.f = function(e) {
            return pk(_v(e), e)
        }, Fg && (nk(ZS.prototype, "description", {
            configurable: !0,
            get: function() {
                return JS(this).description
            }
        }), Mm(QS, "propertyIsEnumerable", vk, {
            unsafe: !0
        }))), hv({
            global: !0,
            wrap: !0,
            forced: !mv,
            sham: !mv
        }, {
            Symbol: ZS
        }), YS(Xv(uk), (function(e) {
            ! function(e) {
                var t = Um.Symbol || (Um.Symbol = {});
                Zg(t, e) || zS(t, e, {
                    value: WS.f(e)
                })
            }(e)
        })), hv({
            target: GS,
            stat: !0,
            forced: !mv
        }, {
            for: function(e) {
                var t = String(e);
                if (Zg(sk, t)) return sk[t];
                var n = ZS(t);
                return sk[t] = n, ck[n] = t, n
            },
            keyFor: function(e) {
                if (!dk(e)) throw TypeError(e + " is not a symbol");
                if (Zg(ck, e)) return ck[e]
            },
            useSetter: function() {
                fk = !0
            },
            useSimple: function() {
                fk = !1
            }
        }), hv({
            target: "Object",
            stat: !0,
            forced: !mv,
            sham: !Fg
        }, {
            create: function(e, t) {
                return void 0 === t ? ry(e) : mk(ry(e), t)
            },
            defineProperty: gk,
            defineProperties: mk,
            getOwnPropertyDescriptor: yk
        }), hv({
            target: "Object",
            stat: !0,
            forced: !mv
        }, {
            getOwnPropertyNames: bk,
            getOwnPropertySymbols: wk
        }), hv({
            target: "Object",
            stat: !0,
            forced: Dg((function() {
                tv.f(1)
            }))
        }, {
            getOwnPropertySymbols: function(e) {
                return tv.f(dv(e))
            }
        }), ek) {
        var _k = !mv || Dg((function() {
            var e = ZS();
            return "[null]" != ek([e]) || "{}" != ek({
                a: e
            }) || "{}" != ek(Object(e))
        }));
        hv({
            target: "JSON",
            stat: !0,
            forced: _k
        }, {
            stringify: function(e, t, n) {
                for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
                if (r = t, (Xg(t) || void 0 !== e) && !dk(e)) return pv(t) || (t = function(e, t) {
                    if ("function" == typeof r && (t = r.call(this, e, t)), !dk(t)) return t
                }), i[1] = t, ek.apply(null, i)
            }
        })
    }
    ZS.prototype[KS] || um(ZS.prototype, KS, ZS.prototype.valueOf), zy(ZS, GS), xm[$S] = !0, hv({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(e) {
            return e != e
        }
    });
    var Ek = om.f,
        Sk = Dg((function() {
            Ek(1)
        }));

    function kk(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Tk(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function xk(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ak(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? xk(Object(n), !0).forEach((function(t) {
                Tk(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xk(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    hv({
        target: "Object",
        stat: !0,
        forced: !Fg || Sk,
        sham: !Fg
    }, {
        getOwnPropertyDescriptor: function(e, t) {
            return Ek(Kg(e), t)
        }
    }), hv({
        target: "Object",
        stat: !0,
        sham: !Fg
    }, {
        getOwnPropertyDescriptors: function(e) {
            for (var t, n, r = Kg(e), i = om.f, o = nv(r), a = {}, s = 0; o.length > s;) void 0 !== (n = i(r, t = o[s++])) && gv(a, t, n);
            return a
        }
    }), bw("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = Gg(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = am(e),
                o = String(this);
            if (!i.global) return _w(i, o);
            var a = i.unicode;
            i.lastIndex = 0;
            for (var s, c = [], u = 0; null !== (s = _w(i, o));) {
                var l = String(s[0]);
                c[u] = l, "" === l && (i.lastIndex = l_(o, Wm(i.lastIndex), a)), u++
            }
            return 0 === u ? null : c
        }]
    }));
    var Ok = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };

    function Ik(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }.call(e, t)
    }
    var Ck = function(e) {
            return null != e ? e.constructor : null
        },
        Pk = function(e, t) {
            return !!(e && t && e instanceof t)
        },
        jk = function(e) {
            return null == e
        },
        Rk = function(e) {
            return Ck(e) === Object
        },
        Lk = function(e) {
            return Ck(e) === String
        },
        Nk = function(e) {
            return Array.isArray(e)
        },
        Mk = function(e) {
            return Pk(e, NodeList)
        },
        Uk = Lk,
        Dk = Nk,
        Fk = Mk,
        qk = function(e) {
            return Pk(e, Element)
        },
        Bk = function(e) {
            return Pk(e, Event)
        },
        Hk = function(e) {
            return jk(e) || (Lk(e) || Nk(e) || Mk(e)) && !e.length || Rk(e) && !Object.keys(e).length
        };

    function Vk(e, t) {
        if (1 > t) {
            var n = function(e) {
                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
            }(t);
            return parseFloat(e.toFixed(n))
        }
        return Math.round(e / t) * t
    }
    var Wk, zk, Yk, $k = function() {
            function e(t, n) {
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), qk(t) ? this.element = t : Uk(t) && (this.element = document.querySelector(t)), qk(this.element) && Hk(this.element.rangeTouch) && (this.config = Ak({}, Ok, {}, n), this.init())
            }
            return function(e, t, n) {
                t && kk(e.prototype, t), n && kk(e, n)
            }(e, [{
                key: "init",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                }
            }, {
                key: "destroy",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                }
            }, {
                key: "listeners",
                value: function(e) {
                    var t = this,
                        n = e ? "addEventListener" : "removeEventListener";
                    ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                        t.element[n](e, (function(e) {
                            return t.set(e)
                        }), !1)
                    }))
                }
            }, {
                key: "get",
                value: function(t) {
                    if (!e.enabled || !Bk(t)) return null;
                    var n, r = t.target,
                        i = t.changedTouches[0],
                        o = parseFloat(r.getAttribute("min")) || 0,
                        a = parseFloat(r.getAttribute("max")) || 100,
                        s = parseFloat(r.getAttribute("step")) || 1,
                        c = r.getBoundingClientRect(),
                        u = 100 / c.width * (this.config.thumbWidth / 2) / 100;
                    return 0 > (n = 100 / c.width * (i.clientX - c.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * u : 50 < n && (n += 2 * (n - 50) * u), o + Vk(n / 100 * (a - o), s)
                }
            }, {
                key: "set",
                value: function(t) {
                    e.enabled && Bk(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                        if (e && t) {
                            var n = new Event(t, {
                                bubbles: !0
                            });
                            e.dispatchEvent(n)
                        }
                    }(t.target, "touchend" === t.type ? "change" : "input"))
                }
            }], [{
                key: "setup",
                value: function(t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        r = null;
                    if (Hk(t) || Uk(t) ? r = Array.from(document.querySelectorAll(Uk(t) ? t : 'input[type="range"]')) : qk(t) ? r = [t] : Fk(t) ? r = Array.from(t) : Dk(t) && (r = t.filter(qk)), Hk(r)) return null;
                    var i = Ak({}, Ok, {}, n);
                    if (Uk(t) && i.watch) {
                        var o = new MutationObserver((function(n) {
                            Array.from(n).forEach((function(n) {
                                Array.from(n.addedNodes).forEach((function(n) {
                                    qk(n) && Ik(n, t) && new e(n, i)
                                }))
                            }))
                        }));
                        o.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                    return r.map((function(t) {
                        return new e(t, n)
                    }))
                }
            }, {
                key: "enabled",
                get: function() {
                    return "ontouchstart" in document.documentElement
                }
            }]), e
        }(),
        Gk = Ug.Promise,
        Kk = _v("species"),
        Xk = function(e) {
            var t = Fm(e),
                n = cm.f;
            Fg && t && !t[Kk] && n(t, Kk, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        Jk = /(iphone|ipod|ipad).*applewebkit/i.test(kv),
        Qk = "process" == zg(Ug.process),
        Zk = Ug.location,
        eT = Ug.setImmediate,
        tT = Ug.clearImmediate,
        nT = Ug.process,
        rT = Ug.MessageChannel,
        iT = Ug.Dispatch,
        oT = 0,
        aT = {},
        sT = "onreadystatechange",
        cT = function(e) {
            if (aT.hasOwnProperty(e)) {
                var t = aT[e];
                delete aT[e], t()
            }
        },
        uT = function(e) {
            return function() {
                cT(e)
            }
        },
        lT = function(e) {
            cT(e.data)
        },
        fT = function(e) {
            Ug.postMessage(e + "", Zk.protocol + "//" + Zk.host)
        };
    eT && tT || (eT = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return aT[++oT] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, Wk(oT), oT
    }, tT = function(e) {
        delete aT[e]
    }, Qk ? Wk = function(e) {
        nT.nextTick(uT(e))
    } : iT && iT.now ? Wk = function(e) {
        iT.now(uT(e))
    } : rT && !Jk ? (Yk = (zk = new rT).port2, zk.port1.onmessage = lT, Wk = Dv(Yk.postMessage, Yk, 1)) : Ug.addEventListener && "function" == typeof postMessage && !Ug.importScripts && Zk && "file:" !== Zk.protocol && !Dg(fT) ? (Wk = fT, Ug.addEventListener("message", lT, !1)) : Wk = sT in nm("script") ? function(e) {
        Qv.appendChild(nm("script")).onreadystatechange = function() {
            Qv.removeChild(this), cT(e)
        }
    } : function(e) {
        setTimeout(uT(e), 0)
    });
    var hT, pT, dT, gT, mT, vT, yT, bT, wT = {
            set: eT,
            clear: tT
        },
        _T = om.f,
        ET = wT.set,
        ST = Ug.MutationObserver || Ug.WebKitMutationObserver,
        kT = Ug.document,
        TT = Ug.process,
        xT = Ug.Promise,
        AT = _T(Ug, "queueMicrotask"),
        OT = AT && AT.value;
    OT || (hT = function() {
        var e, t;
        for (Qk && (e = TT.domain) && e.exit(); pT;) {
            t = pT.fn, pT = pT.next;
            try {
                t()
            } catch (e) {
                throw pT ? gT() : dT = void 0, e
            }
        }
        dT = void 0, e && e.enter()
    }, !Jk && !Qk && ST && kT ? (mT = !0, vT = kT.createTextNode(""), new ST(hT).observe(vT, {
        characterData: !0
    }), gT = function() {
        vT.data = mT = !mT
    }) : xT && xT.resolve ? (yT = xT.resolve(void 0), bT = yT.then, gT = function() {
        bT.call(yT, hT)
    }) : gT = Qk ? function() {
        TT.nextTick(hT)
    } : function() {
        ET.call(Ug, hT)
    });
    var IT, CT, PT, jT, RT = OT || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            dT && (dT.next = t), pT || (pT = t, gT()), dT = t
        },
        LT = function(e) {
            var t, n;
            this.promise = new e((function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            })), this.resolve = Uv(t), this.reject = Uv(n)
        },
        NT = {
            f: function(e) {
                return new LT(e)
            }
        },
        MT = function(e, t) {
            if (am(e), Xg(t) && t.constructor === e) return t;
            var n = NT.f(e);
            return (0, n.resolve)(t), n.promise
        },
        UT = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        },
        DT = wT.set,
        FT = _v("species"),
        qT = "Promise",
        BT = Nm.get,
        HT = Nm.set,
        VT = Nm.getterFor(qT),
        WT = Gk,
        zT = Ug.TypeError,
        YT = Ug.document,
        $T = Ug.process,
        GT = Fm("fetch"),
        KT = NT.f,
        XT = KT,
        JT = !!(YT && YT.createEvent && Ug.dispatchEvent),
        QT = "function" == typeof PromiseRejectionEvent,
        ZT = "unhandledrejection",
        ex = lv(qT, (function() {
            if (!(vm(WT) !== String(WT))) {
                if (66 === Ov) return !0;
                if (!Qk && !QT) return !0
            }
            if (Ov >= 51 && /native code/.test(WT)) return !1;
            var e = WT.resolve(1),
                t = function(e) {
                    e((function() {}), (function() {}))
                };
            return (e.constructor = {})[FT] = t, !(e.then((function() {})) instanceof t)
        })),
        tx = ex || !Iy((function(e) {
            WT.all(e).catch((function() {}))
        })),
        nx = function(e) {
            var t;
            return !(!Xg(e) || "function" != typeof(t = e.then)) && t
        },
        rx = function(e, t) {
            if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                RT((function() {
                    for (var r = e.value, i = 1 == e.state, o = 0; n.length > o;) {
                        var a, s, c, u = n[o++],
                            l = i ? u.ok : u.fail,
                            f = u.resolve,
                            h = u.reject,
                            p = u.domain;
                        try {
                            l ? (i || (2 === e.rejection && sx(e), e.rejection = 1), !0 === l ? a = r : (p && p.enter(), a = l(r), p && (p.exit(), c = !0)), a === u.promise ? h(zT("Promise-chain cycle")) : (s = nx(a)) ? s.call(a, f, h) : f(a)) : h(r)
                        } catch (e) {
                            p && !c && p.exit(), h(e)
                        }
                    }
                    e.reactions = [], e.notified = !1, t && !e.rejection && ox(e)
                }))
            }
        },
        ix = function(e, t, n) {
            var r, i;
            JT ? ((r = YT.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), Ug.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
            }, !QT && (i = Ug["on" + e]) ? i(r) : e === ZT && function(e, t) {
                var n = Ug.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }("Unhandled promise rejection", n)
        },
        ox = function(e) {
            DT.call(Ug, (function() {
                var t, n = e.facade,
                    r = e.value;
                if (ax(e) && (t = UT((function() {
                        Qk ? $T.emit("unhandledRejection", r, n) : ix(ZT, n, r)
                    })), e.rejection = Qk || ax(e) ? 2 : 1, t.error)) throw t.value
            }))
        },
        ax = function(e) {
            return 1 !== e.rejection && !e.parent
        },
        sx = function(e) {
            DT.call(Ug, (function() {
                var t = e.facade;
                Qk ? $T.emit("rejectionHandled", t) : ix("rejectionhandled", t, e.value)
            }))
        },
        cx = function(e, t, n) {
            return function(r) {
                e(t, r, n)
            }
        },
        ux = function(e, t, n) {
            e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, rx(e, !0))
        },
        lx = function(e, t, n) {
            if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                    if (e.facade === t) throw zT("Promise can't be resolved itself");
                    var r = nx(t);
                    r ? RT((function() {
                        var n = {
                            done: !1
                        };
                        try {
                            r.call(t, cx(lx, n, e), cx(ux, n, e))
                        } catch (t) {
                            ux(n, t, e)
                        }
                    })) : (e.value = t, e.state = 1, rx(e, !1))
                } catch (t) {
                    ux({
                        done: !1
                    }, t, e)
                }
            }
        };
    ex && (WT = function(e) {
        Aw(this, WT, qT), Uv(e), IT.call(this);
        var t = BT(this);
        try {
            e(cx(lx, t), cx(ux, t))
        } catch (e) {
            ux(t, e)
        }
    }, (IT = function(e) {
        HT(this, {
            type: qT,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = Ew(WT.prototype, {
        then: function(e, t) {
            var n = VT(this),
                r = KT(c_(this, WT));
            return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = Qk ? $T.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && rx(n, !1), r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), CT = function() {
        var e = new IT,
            t = BT(e);
        this.promise = e, this.resolve = cx(lx, t), this.reject = cx(ux, t)
    }, NT.f = KT = function(e) {
        return e === WT || e === PT ? new CT(e) : XT(e)
    }, "function" == typeof Gk && (jT = Gk.prototype.then, Mm(Gk.prototype, "then", (function(e, t) {
        var n = this;
        return new WT((function(e, t) {
            jT.call(n, e, t)
        })).then(e, t)
    }), {
        unsafe: !0
    }), "function" == typeof GT && hv({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return MT(WT, GT.apply(Ug, arguments))
        }
    }))), hv({
        global: !0,
        wrap: !0,
        forced: ex
    }, {
        Promise: WT
    }), zy(WT, qT, !1), Xk(qT), PT = Fm(qT), hv({
        target: qT,
        stat: !0,
        forced: ex
    }, {
        reject: function(e) {
            var t = KT(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), hv({
        target: qT,
        stat: !0,
        forced: ex
    }, {
        resolve: function(e) {
            return MT(this, e)
        }
    }), hv({
        target: qT,
        stat: !0,
        forced: tx
    }, {
        all: function(e) {
            var t = this,
                n = KT(t),
                r = n.resolve,
                i = n.reject,
                o = UT((function() {
                    var n = Uv(t.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    xw(e, (function(e) {
                        var c = a++,
                            u = !1;
                        o.push(void 0), s++, n.call(t, e).then((function(e) {
                            u || (u = !0, o[c] = e, --s || r(o))
                        }), i)
                    })), --s || r(o)
                }));
            return o.error && i(o.value), n.promise
        },
        race: function(e) {
            var t = this,
                n = KT(t),
                r = n.reject,
                i = UT((function() {
                    var i = Uv(t.resolve);
                    xw(e, (function(e) {
                        i.call(t, e).then(n.resolve, r)
                    }))
                }));
            return i.error && r(i.value), n.promise
        }
    });
    var fx, hx = om.f,
        px = "".startsWith,
        dx = Math.min,
        gx = aw("startsWith"),
        mx = !(gx || (fx = hx(String.prototype, "startsWith"), !fx || fx.writable));
    hv({
        target: "String",
        proto: !0,
        forced: !mx && !gx
    }, {
        startsWith: function(e) {
            var t = String(Gg(this));
            iw(e);
            var n = Wm(dx(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                r = String(e);
            return px ? px.call(t, r, n) : t.slice(n, n + r.length) === r
        }
    });
    var vx, yx, bx, wx = function(e) {
            return null != e ? e.constructor : null
        },
        _x = function(e, t) {
            return Boolean(e && t && e instanceof t)
        },
        Ex = function(e) {
            return null == e
        },
        Sx = function(e) {
            return wx(e) === Object
        },
        kx = function(e) {
            return wx(e) === String
        },
        Tx = function(e) {
            return wx(e) === Function
        },
        xx = function(e) {
            return Array.isArray(e)
        },
        Ax = function(e) {
            return _x(e, NodeList)
        },
        Ox = function(e) {
            return Ex(e) || (kx(e) || xx(e) || Ax(e)) && !e.length || Sx(e) && !Object.keys(e).length
        },
        Ix = Ex,
        Cx = Sx,
        Px = function(e) {
            return wx(e) === Number && !Number.isNaN(e)
        },
        jx = kx,
        Rx = function(e) {
            return wx(e) === Boolean
        },
        Lx = Tx,
        Nx = xx,
        Mx = Ax,
        Ux = function(e) {
            return null !== e && "object" === fs(e) && 1 === e.nodeType && "object" === fs(e.style) && "object" === fs(e.ownerDocument)
        },
        Dx = function(e) {
            return _x(e, Event)
        },
        Fx = function(e) {
            return _x(e, KeyboardEvent)
        },
        qx = function(e) {
            return _x(e, TextTrack) || !Ex(e) && kx(e.kind)
        },
        Bx = function(e) {
            return _x(e, Promise) && Tx(e.then)
        },
        Hx = function(e) {
            if (_x(e, window.URL)) return !0;
            if (!kx(e)) return !1;
            var t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
            try {
                return !Ox(new URL(t).hostname)
            } catch (e) {
                return !1
            }
        },
        Vx = Ox,
        Wx = (vx = document.createElement("span"), yx = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, bx = Object.keys(yx).find((function(e) {
            return void 0 !== vx.style[e]
        })), !!jx(bx) && yx[bx]);

    function zx(e, t) {
        setTimeout((function() {
            try {
                e.hidden = !0, e.offsetHeight, e.hidden = !1
            } catch (e) {}
        }), t)
    }
    var Yx = {
            isIE: !!document.documentMode,
            isEdge: window.navigator.userAgent.includes("Edge"),
            isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
            isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        },
        $x = function(e) {
            return function(t, n, r, i) {
                Uv(n);
                var o = dv(t),
                    a = $g(o),
                    s = Wm(o.length),
                    c = e ? s - 1 : 0,
                    u = e ? -1 : 1;
                if (r < 2)
                    for (;;) {
                        if (c in a) {
                            i = a[c], c += u;
                            break
                        }
                        if (c += u, e ? c < 0 : s <= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? c >= 0 : s > c; c += u) c in a && (i = n(i, a[c], c, o));
                return i
            }
        },
        Gx = {
            left: $x(!1),
            right: $x(!0)
        }.left,
        Kx = cb("reduce"),
        Xx = zv("reduce", {
            1: 0
        });

    function Jx(e, t) {
        return t.split(".").reduce((function(e, t) {
            return e && e[t]
        }), e)
    }

    function Qx() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!n.length) return e;
        var i = n.shift();
        return Cx(i) ? (Object.keys(i).forEach((function(t) {
            Cx(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, gs({}, t, {})), Qx(e[t], i[t])) : Object.assign(e, gs({}, t, i[t]))
        })), Qx.apply(void 0, [e].concat(n))) : e
    }

    function Zx(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach((function(e, n) {
            var r = n > 0 ? t.cloneNode(!0) : t,
                i = e.parentNode,
                o = e.nextSibling;
            r.appendChild(e), o ? i.insertBefore(r, o) : i.appendChild(r)
        }))
    }

    function eA(e, t) {
        Ux(e) && !Vx(t) && Object.entries(t).filter((function(e) {
            var t = bs(e, 2)[1];
            return !Ix(t)
        })).forEach((function(t) {
            var n = bs(t, 2),
                r = n[0],
                i = n[1];
            return e.setAttribute(r, i)
        }))
    }

    function tA(e, t, n) {
        var r = document.createElement(e);
        return Cx(t) && eA(r, t), jx(n) && (r.innerText = n), r
    }

    function nA(e, t, n, r) {
        Ux(t) && t.appendChild(tA(e, n, r))
    }

    function rA(e) {
        Mx(e) || Nx(e) ? Array.from(e).forEach(rA) : Ux(e) && Ux(e.parentNode) && e.parentNode.removeChild(e)
    }

    function iA(e) {
        if (Ux(e))
            for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
    }

    function oA(e, t) {
        return Ux(t) && Ux(t.parentNode) && Ux(e) ? (t.parentNode.replaceChild(e, t), e) : null
    }

    function aA(e, t) {
        if (!jx(e) || Vx(e)) return {};
        var n = {},
            r = Qx({}, t);
        return e.split(",").forEach((function(e) {
            var t = e.trim(),
                i = t.replace(".", ""),
                o = t.replace(/[[\]]/g, "").split("="),
                a = bs(o, 1)[0],
                s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
                case ".":
                    jx(r.class) ? n.class = "".concat(r.class, " ").concat(i) : n.class = i;
                    break;
                case "#":
                    n.id = t.replace("#", "");
                    break;
                case "[":
                    n[a] = s
            }
        })), Qx(r, n)
    }

    function sA(e, t) {
        if (Ux(e)) {
            var n = t;
            Rx(n) || (n = !e.hidden), e.hidden = n
        }
    }

    function cA(e, t, n) {
        if (Mx(e)) return Array.from(e).map((function(e) {
            return cA(e, t, n)
        }));
        if (Ux(e)) {
            var r = "toggle";
            return void 0 !== n && (r = n ? "add" : "remove"), e.classList[r](t), e.classList.contains(t)
        }
        return !1
    }

    function uA(e, t) {
        return Ux(e) && e.classList.contains(t)
    }

    function lA(e, t) {
        var n = Element.prototype;
        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
    }

    function fA(e) {
        return this.elements.container.querySelectorAll(e)
    }

    function hA(e) {
        return this.elements.container.querySelector(e)
    }

    function pA() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        Ux(e) && (e.focus({
            preventScroll: !0
        }), t && cA(e, this.config.classNames.tabFocus))
    }
    hv({
        target: "Array",
        proto: !0,
        forced: !Kx || !Xx || !Qk && Ov > 79 && Ov < 83
    }, {
        reduce: function(e) {
            return Gx(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var dA, gA = {
            "audio/ogg": "vorbis",
            "audio/wav": "1",
            "video/webm": "vp8, vorbis",
            "video/mp4": "avc1.42E01E, mp4a.40.2",
            "video/ogg": "theora"
        },
        mA = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function(e, t, n) {
                var r = Yx.isIPhone && n && mA.playsinline,
                    i = mA[e] || "html5" !== t;
                return {
                    api: i,
                    ui: i && mA.rangeInput && ("video" !== e || !Yx.isIPhone || r)
                }
            },
            pip: !(Yx.isIPhone || !Lx(tA("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || tA("video").disablePictureInPicture)),
            airplay: Lx(window.WebKitPlaybackTargetAvailabilityEvent),
            playsinline: "playsInline" in document.createElement("video"),
            mime: function(e) {
                if (Vx(e)) return !1;
                var t = bs(e.split("/"), 1)[0],
                    n = e;
                if (!this.isHTML5 || t !== this.type) return !1;
                Object.keys(gA).includes(n) && (n += '; codecs="'.concat(gA[e], '"'));
                try {
                    return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                } catch (e) {
                    return !1
                }
            },
            textTracks: "textTracks" in document.createElement("video"),
            rangeInput: (dA = document.createElement("input"), dA.type = "range", "range" === dA.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== Wx,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        vA = function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        return e = !0, null
                    }
                });
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
            } catch (e) {}
            return e
        }();

    function yA(e, t, n) {
        var r = this,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e && "addEventListener" in e && !Vx(t) && Lx(n)) {
            var s = t.split(" "),
                c = a;
            vA && (c = {
                passive: o,
                capture: a
            }), s.forEach((function(t) {
                r && r.eventListeners && i && r.eventListeners.push({
                    element: e,
                    type: t,
                    callback: n,
                    options: c
                }), e[i ? "addEventListener" : "removeEventListener"](t, n, c)
            }))
        }
    }

    function bA(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        yA.call(this, e, t, n, !0, r, i)
    }

    function wA(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        yA.call(this, e, t, n, !1, r, i)
    }

    function _A(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            a = function a() {
                wA(e, n, a, i, o);
                for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                r.apply(t, c)
            };
        yA.call(this, e, n, a, !0, i, o)
    }

    function EA(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (Ux(e) && !Vx(t)) {
            var i = new CustomEvent(t, {
                bubbles: n,
                detail: vs(vs({}, r), {}, {
                    plyr: this
                })
            });
            e.dispatchEvent(i)
        }
    }

    function SA() {
        this && this.eventListeners && (this.eventListeners.forEach((function(e) {
            var t = e.element,
                n = e.type,
                r = e.callback,
                i = e.options;
            t.removeEventListener(n, r, i)
        })), this.eventListeners = [])
    }

    function kA() {
        var e = this;
        return new Promise((function(t) {
            return e.ready ? setTimeout(t, 0) : bA.call(e, e.elements.container, "ready", t)
        })).then((function() {}))
    }

    function TA(e) {
        Bx(e) && e.then(null, (function() {}))
    }

    function xA(e) {
        return !!(Nx(e) || jx(e) && e.includes(":")) && (Nx(e) ? e : e.split(":")).map(Number).every(Px)
    }

    function AA(e) {
        if (!Nx(e) || !e.every(Px)) return null;
        var t = bs(e, 2),
            n = t[0],
            r = t[1],
            i = function e(t, n) {
                return 0 === n ? t : e(n, t % n)
            }(n, r);
        return [n / i, r / i]
    }

    function OA(e) {
        var t = function(e) {
                return xA(e) ? e.split(":").map(Number) : null
            },
            n = t(e);
        if (null === n && (n = t(this.config.ratio)), null === n && !Vx(this.embed) && Nx(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
            var r = this.media;
            n = AA([r.videoWidth, r.videoHeight])
        }
        return n
    }

    function IA(e) {
        if (!this.isVideo) return {};
        var t = this.elements.wrapper,
            n = OA.call(this, e),
            r = bs(Nx(n) ? n : [0, 0], 2),
            i = 100 / r[0] * r[1];
        if (t.style.paddingBottom = "".concat(i, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            var o = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                a = (o - i) / (o / 50);
            this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(a, "%)")
        } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
        return {
            padding: i,
            ratio: n
        }
    }
    var CA = {
        getSources: function() {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) {
                var n = t.getAttribute("type");
                return !!Vx(n) || mA.mime.call(e, n)
            })) : []
        },
        getQualityOptions: function() {
            return this.config.quality.forced ? this.config.quality.options : CA.getSources.call(this).map((function(e) {
                return Number(e.getAttribute("size"))
            })).filter(Boolean)
        },
        setup: function() {
            if (this.isHTML5) {
                var e = this;
                e.options.speed = e.config.speed.options, Vx(this.config.ratio) || IA.call(e), Object.defineProperty(e.media, "quality", {
                    get: function() {
                        var t = CA.getSources.call(e).find((function(t) {
                            return t.getAttribute("src") === e.source
                        }));
                        return t && Number(t.getAttribute("size"))
                    },
                    set: function(t) {
                        if (e.quality !== t) {
                            if (e.config.quality.forced && Lx(e.config.quality.onChange)) e.config.quality.onChange(t);
                            else {
                                var n = CA.getSources.call(e).find((function(e) {
                                    return Number(e.getAttribute("size")) === t
                                }));
                                if (!n) return;
                                var r = e.media,
                                    i = r.currentTime,
                                    o = r.paused,
                                    a = r.preload,
                                    s = r.readyState,
                                    c = r.playbackRate;
                                e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", (function() {
                                    e.speed = c, e.currentTime = i, o || TA(e.play())
                                })), e.media.load())
                            }
                            EA.call(e, e.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            }
        },
        cancelRequests: function() {
            this.isHTML5 && (rA(CA.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
        }
    };

    function PA(e) {
        return Nx(e) ? e.filter((function(t, n) {
            return e.indexOf(t) === n
        })) : e
    }
    var jA = Cv("slice"),
        RA = zv("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        LA = _v("species"),
        NA = [].slice,
        MA = Math.max;
    hv({
        target: "Array",
        proto: !0,
        forced: !jA || !RA
    }, {
        slice: function(e, t) {
            var n, r, i, o = Kg(this),
                a = Wm(o.length),
                s = $m(e, a),
                c = $m(void 0 === t ? a : t, a);
            if (pv(o) && ("function" != typeof(n = o.constructor) || n !== Array && !pv(n.prototype) ? Xg(n) && null === (n = n[LA]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return NA.call(o, s, c);
            for (r = new(void 0 === n ? Array : n)(MA(c - s, 0)), i = 0; s < c; s++, i++) s in o && gv(r, i, o[s]);
            return r.length = i, r
        }
    });
    var UA = cm.f,
        DA = ev.f,
        FA = Nm.set,
        qA = _v("match"),
        BA = Ug.RegExp,
        HA = BA.prototype,
        VA = /a/g,
        WA = /a/g,
        zA = new BA(VA) !== VA,
        YA = Vb.UNSUPPORTED_Y;
    if (Fg && lv("RegExp", !zA || YA || Dg((function() {
            return WA[qA] = !1, BA(VA) != VA || BA(WA) == WA || "/a/i" != BA(VA, "i")
        })))) {
        for (var $A = function(e, t) {
                var n, r = this instanceof $A,
                    i = rw(e),
                    o = void 0 === t;
                if (!r && i && e.constructor === $A && o) return e;
                zA ? i && !o && (e = e.source) : e instanceof $A && (o && (t = Bb.call(e)), e = e.source), YA && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                var a = gb(zA ? new BA(e, t) : BA(e, t), r ? this : HA, $A);
                return YA && n && FA(a, {
                    sticky: n
                }), a
            }, GA = function(e) {
                e in $A || UA($A, e, {
                    configurable: !0,
                    get: function() {
                        return BA[e]
                    },
                    set: function(t) {
                        BA[e] = t
                    }
                })
            }, KA = DA(BA), XA = 0; KA.length > XA;) GA(KA[XA++]);
        HA.constructor = $A, $A.prototype = HA, Mm(Ug, "RegExp", $A)
    }

    function JA(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return Vx(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) {
            return n[t].toString()
        }))
    }
    Xk("RegExp");
    var QA = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
        },
        ZA = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.toString().replace(/\w\S*/g, (function(e) {
                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            }))
        };

    function eO() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.toString();
        return t = QA(t, "-", " "), t = QA(t, "_", " "), t = ZA(t), QA(t, " ", "")
    }

    function tO(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
    }
    var nO = {
            pip: "PIP",
            airplay: "AirPlay",
            html5: "HTML5",
            vimeo: "Vimeo",
            youtube: "YouTube"
        },
        rO = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (Vx(e) || Vx(t)) return "";
            var n = Jx(t.i18n, e);
            if (Vx(n)) return Object.keys(nO).includes(e) ? nO[e] : "";
            var r = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(r).forEach((function(e) {
                var t = bs(e, 2),
                    r = t[0],
                    i = t[1];
                n = QA(n, r, i)
            })), n
        },
        iO = function() {
            function e(t) {
                var n = this;
                hs(this, e), gs(this, "get", (function(t) {
                    if (!e.supported || !n.enabled) return null;
                    var r = window.localStorage.getItem(n.key);
                    if (Vx(r)) return null;
                    var i = JSON.parse(r);
                    return jx(t) && t.length ? i[t] : i
                })), gs(this, "set", (function(t) {
                    if (e.supported && n.enabled && Cx(t)) {
                        var r = n.get();
                        Vx(r) && (r = {}), Qx(r, t), window.localStorage.setItem(n.key, JSON.stringify(r))
                    }
                })), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
            }
            return ds(e, null, [{
                key: "supported",
                get: function() {
                    try {
                        if (!("localStorage" in window)) return !1;
                        var e = "___test";
                        return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }();

    function oO(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise((function(n, r) {
            try {
                var i = new XMLHttpRequest;
                if (!("withCredentials" in i)) return;
                i.addEventListener("load", (function() {
                    if ("text" === t) try {
                        n(JSON.parse(i.responseText))
                    } catch (e) {
                        n(i.responseText)
                    } else n(i.response)
                })), i.addEventListener("error", (function() {
                    throw new Error(i.status)
                })), i.open("GET", e, !0), i.responseType = t, i.send()
            } catch (e) {
                r(e)
            }
        }))
    }

    function aO(e, t) {
        if (jx(e)) {
            var n = "cache",
                r = jx(t),
                i = function() {
                    return null !== document.getElementById(t)
                },
                o = function(e, t) {
                    e.innerHTML = t, r && i() || document.body.insertAdjacentElement("afterbegin", e)
                };
            if (!r || !i()) {
                var a = iO.supported,
                    s = document.createElement("div");
                if (s.setAttribute("hidden", ""), r && s.setAttribute("id", t), a) {
                    var c = window.localStorage.getItem("".concat(n, "-").concat(t));
                    if (null !== c) {
                        var u = JSON.parse(c);
                        o(s, u.content)
                    }
                }
                oO(e).then((function(e) {
                    Vx(e) || (a && window.localStorage.setItem("".concat(n, "-").concat(t), JSON.stringify({
                        content: e
                    })), o(s, e))
                })).catch((function() {}))
            }
        }
    }
    var sO = Math.ceil,
        cO = Math.floor;
    hv({
        target: "Math",
        stat: !0
    }, {
        trunc: function(e) {
            return (e > 0 ? cO : sO)(e)
        }
    });
    var uO = function(e) {
            return Math.trunc(e / 60 / 60 % 60, 10)
        },
        lO = function(e) {
            return Math.trunc(e / 60 % 60, 10)
        },
        fO = function(e) {
            return Math.trunc(e % 60, 10)
        };

    function hO() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!Px(e)) return hO(void 0, t, n);
        var r = function(e) {
                return "0".concat(e).slice(-2)
            },
            i = uO(e),
            o = lO(e),
            a = fO(e);
        return i = t || i > 0 ? "".concat(i, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(i).concat(r(o), ":").concat(r(a))
    }
    var pO = {
        getIconUrl: function() {
            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || Yx.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements: function() {
            try {
                return this.elements.controls = hA.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: fA.call(this, this.config.selectors.buttons.play),
                    pause: hA.call(this, this.config.selectors.buttons.pause),
                    restart: hA.call(this, this.config.selectors.buttons.restart),
                    rewind: hA.call(this, this.config.selectors.buttons.rewind),
                    fastForward: hA.call(this, this.config.selectors.buttons.fastForward),
                    mute: hA.call(this, this.config.selectors.buttons.mute),
                    pip: hA.call(this, this.config.selectors.buttons.pip),
                    airplay: hA.call(this, this.config.selectors.buttons.airplay),
                    settings: hA.call(this, this.config.selectors.buttons.settings),
                    captions: hA.call(this, this.config.selectors.buttons.captions),
                    fullscreen: hA.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = hA.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: hA.call(this, this.config.selectors.inputs.seek),
                    volume: hA.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: hA.call(this, this.config.selectors.display.buffer),
                    currentTime: hA.call(this, this.config.selectors.display.currentTime),
                    duration: hA.call(this, this.config.selectors.display.duration)
                }, Ux(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
            }
        },
        createIcon: function(e, t) {
            var n = "http://www.w3.org/2000/svg",
                r = pO.getIconUrl.call(this),
                i = "".concat(r.cors ? "" : r.url, "#").concat(this.config.iconPrefix),
                o = document.createElementNS(n, "svg");
            eA(o, Qx(t, {
                "aria-hidden": "true",
                focusable: "false"
            }));
            var a = document.createElementNS(n, "use"),
                s = "".concat(i, "-").concat(e);
            return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), o.appendChild(a), o
        },
        createLabel: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = rO(e, this.config),
                r = vs(vs({}, t), {}, {
                    class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                });
            return tA("span", r, n)
        },
        createBadge: function(e) {
            if (Vx(e)) return null;
            var t = tA("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(tA("span", {
                class: this.config.classNames.menu.badge
            }, e)), t
        },
        createButton: function(e, t) {
            var n = this,
                r = Qx({}, t),
                i = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                    return (e = eO(e)).charAt(0).toLowerCase() + e.slice(1)
                }(e),
                o = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    labelPressed: null,
                    iconPressed: null
                };
            switch (["element", "icon", "label"].forEach((function(e) {
                Object.keys(r).includes(e) && (o[e] = r[e], delete r[e])
            })), "button" !== o.element || Object.keys(r).includes("type") || (r.type = "button"), Object.keys(r).includes("class") ? r.class.split(" ").some((function(e) {
                return e === n.config.classNames.control
            })) || Qx(r, {
                class: "".concat(r.class, " ").concat(this.config.classNames.control)
            }) : r.class = this.config.classNames.control, e) {
                case "play":
                    o.toggle = !0, o.label = "play", o.labelPressed = "pause", o.icon = "play", o.iconPressed = "pause";
                    break;
                case "mute":
                    o.toggle = !0, o.label = "mute", o.labelPressed = "unmute", o.icon = "volume", o.iconPressed = "muted";
                    break;
                case "captions":
                    o.toggle = !0, o.label = "enableCaptions", o.labelPressed = "disableCaptions", o.icon = "captions-off", o.iconPressed = "captions-on";
                    break;
                case "fullscreen":
                    o.toggle = !0, o.label = "enterFullscreen", o.labelPressed = "exitFullscreen", o.icon = "enter-fullscreen", o.iconPressed = "exit-fullscreen";
                    break;
                case "play-large":
                    r.class += " ".concat(this.config.classNames.control, "--overlaid"), i = "play", o.label = "play", o.icon = "play";
                    break;
                default:
                    Vx(o.label) && (o.label = i), Vx(o.icon) && (o.icon = e)
            }
            var a = tA(o.element);
            return o.toggle ? (a.appendChild(pO.createIcon.call(this, o.iconPressed, {
                class: "icon--pressed"
            })), a.appendChild(pO.createIcon.call(this, o.icon, {
                class: "icon--not-pressed"
            })), a.appendChild(pO.createLabel.call(this, o.labelPressed, {
                class: "label--pressed"
            })), a.appendChild(pO.createLabel.call(this, o.label, {
                class: "label--not-pressed"
            }))) : (a.appendChild(pO.createIcon.call(this, o.icon)), a.appendChild(pO.createLabel.call(this, o.label))), Qx(r, aA(this.config.selectors.buttons[i], r)), eA(a, r), "play" === i ? (Nx(this.elements.buttons[i]) || (this.elements.buttons[i] = []), this.elements.buttons[i].push(a)) : this.elements.buttons[i] = a, a
        },
        createRange: function(e, t) {
            var n = tA("input", Qx(aA(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": rO(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = n, pO.updateRangeFill.call(this, n), $k.setup(n), n
        },
        createProgress: function(e, t) {
            var n = tA("progress", Qx(aA(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                n.appendChild(tA("span", null, "0"));
                var r = {
                        played: "played",
                        buffer: "buffered"
                    }[e],
                    i = r ? rO(r, this.config) : "";
                n.innerText = "% ".concat(i.toLowerCase())
            }
            return this.elements.display[e] = n, n
        },
        createTime: function(e, t) {
            var n = aA(this.config.selectors.display[e], t),
                r = tA("div", Qx(n, {
                    class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                    "aria-label": rO(e, this.config)
                }), "00:00");
            return this.elements.display[e] = r, r
        },
        bindMenuItemShortcuts: function(e, t) {
            var n = this;
            bA.call(this, e, "keydown keyup", (function(r) {
                if ([32, 38, 39, 40].includes(r.which) && (r.preventDefault(), r.stopPropagation(), "keydown" !== r.type)) {
                    var i, o = lA(e, '[role="menuitemradio"]');
                    if (!o && [32, 39].includes(r.which)) pO.showMenuPanel.call(n, t, !0);
                    else 32 !== r.which && (40 === r.which || o && 39 === r.which ? (i = e.nextElementSibling, Ux(i) || (i = e.parentNode.firstElementChild)) : (i = e.previousElementSibling, Ux(i) || (i = e.parentNode.lastElementChild)), pA.call(n, i, !0))
                }
            }), !1), bA.call(this, e, "keyup", (function(e) {
                13 === e.which && pO.focusFirstMenuItem.call(n, null, !0)
            }))
        },
        createMenuItem: function(e) {
            var t = this,
                n = e.value,
                r = e.list,
                i = e.type,
                o = e.title,
                a = e.badge,
                s = void 0 === a ? null : a,
                c = e.checked,
                u = void 0 !== c && c,
                l = aA(this.config.selectors.inputs[i]),
                f = tA("button", Qx(l, {
                    type: "button",
                    role: "menuitemradio",
                    class: "".concat(this.config.classNames.control, " ").concat(l.class ? l.class : "").trim(),
                    "aria-checked": u,
                    value: n
                })),
                h = tA("span");
            h.innerHTML = o, Ux(s) && h.appendChild(s), f.appendChild(h), Object.defineProperty(f, "checked", {
                enumerable: !0,
                get: function() {
                    return "true" === f.getAttribute("aria-checked")
                },
                set: function(e) {
                    e && Array.from(f.parentNode.children).filter((function(e) {
                        return lA(e, '[role="menuitemradio"]')
                    })).forEach((function(e) {
                        return e.setAttribute("aria-checked", "false")
                    })), f.setAttribute("aria-checked", e ? "true" : "false")
                }
            }), this.listeners.bind(f, "click keyup", (function(e) {
                if (!Fx(e) || 32 === e.which) {
                    switch (e.preventDefault(), e.stopPropagation(), f.checked = !0, i) {
                        case "language":
                            t.currentTrack = Number(n);
                            break;
                        case "quality":
                            t.quality = n;
                            break;
                        case "speed":
                            t.speed = parseFloat(n)
                    }
                    pO.showMenuPanel.call(t, "home", Fx(e))
                }
            }), i, !1), pO.bindMenuItemShortcuts.call(this, f, i), r.appendChild(f)
        },
        formatTime: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!Px(e)) return e;
            var n = uO(this.duration) > 0;
            return hO(e, n, t)
        },
        updateTimeDisplay: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            Ux(e) && Px(t) && (e.innerText = pO.formatTime(t, n))
        },
        updateVolume: function() {
            this.supported.ui && (Ux(this.elements.inputs.volume) && pO.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Ux(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            Ux(e) && (e.value = t, pO.updateRangeFill.call(this, e))
        },
        updateProgress: function(e) {
            var t = this;
            if (this.supported.ui && Dx(e)) {
                var n = 0;
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        n = function(e, t) {
                            return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
                        }(this.currentTime, this.duration), "timeupdate" === e.type && pO.setRange.call(this, this.elements.inputs.seek, n);
                        break;
                    case "playing":
                    case "progress":
                        ! function(e, n) {
                            var r = Px(n) ? n : 0,
                                i = Ux(e) ? e : t.elements.display.buffer;
                            if (Ux(i)) {
                                i.value = r;
                                var o = i.getElementsByTagName("span")[0];
                                Ux(o) && (o.childNodes[0].nodeValue = r)
                            }
                        }(this.elements.display.buffer, 100 * this.buffered)
                }
            }
        },
        updateRangeFill: function(e) {
            var t = Dx(e) ? e.target : e;
            if (Ux(t) && "range" === t.getAttribute("type")) {
                if (lA(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    var n = pO.formatTime(this.currentTime),
                        r = pO.formatTime(this.duration),
                        i = rO("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", i.replace("{currentTime}", n).replace("{duration}", r))
                } else if (lA(t, this.config.selectors.inputs.volume)) {
                    var o = 100 * t.value;
                    t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
                } else t.setAttribute("aria-valuenow", t.value);
                Yx.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
            }
        },
        updateSeekTooltip: function(e) {
            var t = this;
            if (this.config.tooltips.seek && Ux(this.elements.inputs.seek) && Ux(this.elements.display.seekTooltip) && 0 !== this.duration) {
                var n = "".concat(this.config.classNames.tooltip, "--visible"),
                    r = function(e) {
                        return cA(t.elements.display.seekTooltip, n, e)
                    };
                if (this.touch) r(!1);
                else {
                    var i = 0,
                        o = this.elements.progress.getBoundingClientRect();
                    if (Dx(e)) i = 100 / o.width * (e.pageX - o.left);
                    else {
                        if (!uA(this.elements.display.seekTooltip, n)) return;
                        i = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    i < 0 ? i = 0 : i > 100 && (i = 100), pO.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i), this.elements.display.seekTooltip.style.left = "".concat(i, "%"), Dx(e) && ["mouseenter", "mouseleave"].includes(e.type) && r("mouseenter" === e.type)
                }
            }
        },
        timeUpdate: function(e) {
            var t = !Ux(this.elements.display.duration) && this.config.invertTime;
            pO.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || pO.updateProgress.call(this, e)
        },
        durationUpdate: function() {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if (this.duration >= Math.pow(2, 32)) return sA(this.elements.display.currentTime, !0), void sA(this.elements.progress, !0);
                Ux(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = Ux(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && pO.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && pO.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), pO.updateSeekTooltip.call(this)
            }
        },
        toggleMenuButton: function(e, t) {
            sA(this.elements.settings.buttons[e], !t)
        },
        updateSetting: function(e, t, n) {
            var r = this.elements.settings.panels[e],
                i = null,
                o = t;
            if ("captions" === e) i = this.currentTrack;
            else {
                if (i = Vx(n) ? this[e] : n, Vx(i) && (i = this.config[e].default), !Vx(this.options[e]) && !this.options[e].includes(i)) return void this.debug.warn("Unsupported value of '".concat(i, "' for ").concat(e));
                if (!this.config[e].options.includes(i)) return void this.debug.warn("Disabled value of '".concat(i, "' for ").concat(e))
            }
            if (Ux(o) || (o = r && r.querySelector('[role="menu"]')), Ux(o)) {
                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = pO.getLabel.call(this, e, i);
                var a = o && o.querySelector('[value="'.concat(i, '"]'));
                Ux(a) && (a.checked = !0)
            }
        },
        getLabel: function(e, t) {
            switch (e) {
                case "speed":
                    return 1 === t ? rO("normal", this.config) : "".concat(t, "&times;");
                case "quality":
                    if (Px(t)) {
                        var n = rO("qualityLabel.".concat(t), this.config);
                        return n.length ? n : "".concat(t, "p")
                    }
                    return ZA(t);
                case "captions":
                    return mO.getLabel.call(this);
                default:
                    return null
            }
        },
        setQualityMenu: function(e) {
            var t = this;
            if (Ux(this.elements.settings.panels.quality)) {
                var n = "quality",
                    r = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                Nx(e) && (this.options.quality = PA(e).filter((function(e) {
                    return t.config.quality.options.includes(e)
                })));
                var i = !Vx(this.options.quality) && this.options.quality.length > 1;
                if (pO.toggleMenuButton.call(this, n, i), iA(r), pO.checkMenu.call(this), i) {
                    var o = function(e) {
                        var n = rO("qualityBadge.".concat(e), t.config);
                        return n.length ? pO.createBadge.call(t, n) : null
                    };
                    this.options.quality.sort((function(e, n) {
                        var r = t.config.quality.options;
                        return r.indexOf(e) > r.indexOf(n) ? 1 : -1
                    })).forEach((function(e) {
                        pO.createMenuItem.call(t, {
                            value: e,
                            list: r,
                            type: n,
                            title: pO.getLabel.call(t, "quality", e),
                            badge: o(e)
                        })
                    })), pO.updateSetting.call(this, n, r)
                }
            }
        },
        setCaptionsMenu: function() {
            var e = this;
            if (Ux(this.elements.settings.panels.captions)) {
                var t = "captions",
                    n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                    r = mO.getTracks.call(this),
                    i = Boolean(r.length);
                if (pO.toggleMenuButton.call(this, t, i), iA(n), pO.checkMenu.call(this), i) {
                    var o = r.map((function(t, r) {
                        return {
                            value: r,
                            checked: e.captions.toggled && e.currentTrack === r,
                            title: mO.getLabel.call(e, t),
                            badge: t.language && pO.createBadge.call(e, t.language.toUpperCase()),
                            list: n,
                            type: "language"
                        }
                    }));
                    o.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: rO("disabled", this.config),
                        list: n,
                        type: "language"
                    }), o.forEach(pO.createMenuItem.bind(this)), pO.updateSetting.call(this, t, n)
                }
            }
        },
        setSpeedMenu: function() {
            var e = this;
            if (Ux(this.elements.settings.panels.speed)) {
                var t = "speed",
                    n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                this.options.speed = this.options.speed.filter((function(t) {
                    return t >= e.minimumSpeed && t <= e.maximumSpeed
                }));
                var r = !Vx(this.options.speed) && this.options.speed.length > 1;
                pO.toggleMenuButton.call(this, t, r), iA(n), pO.checkMenu.call(this), r && (this.options.speed.forEach((function(r) {
                    pO.createMenuItem.call(e, {
                        value: r,
                        list: n,
                        type: t,
                        title: pO.getLabel.call(e, "speed", r)
                    })
                })), pO.updateSetting.call(this, t, n))
            }
        },
        checkMenu: function() {
            var e = this.elements.settings.buttons,
                t = !Vx(e) && Object.values(e).some((function(e) {
                    return !e.hidden
                }));
            sA(this.elements.settings.menu, !t)
        },
        focusFirstMenuItem: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.elements.settings.popup.hidden) {
                var n = e;
                Ux(n) || (n = Object.values(this.elements.settings.panels).find((function(e) {
                    return !e.hidden
                })));
                var r = n.querySelector('[role^="menuitem"]');
                pA.call(this, r, t)
            }
        },
        toggleMenu: function(e) {
            var t = this.elements.settings.popup,
                n = this.elements.buttons.settings;
            if (Ux(t) && Ux(n)) {
                var r = t.hidden,
                    i = r;
                if (Rx(e)) i = e;
                else if (Fx(e) && 27 === e.which) i = !1;
                else if (Dx(e)) {
                    var o = Lx(e.composedPath) ? e.composedPath()[0] : e.target,
                        a = t.contains(o);
                    if (a || !a && e.target !== n && i) return
                }
                n.setAttribute("aria-expanded", i), sA(t, !i), cA(this.elements.container, this.config.classNames.menu.open, i), i && Fx(e) ? pO.focusFirstMenuItem.call(this, null, !0) : i || r || pA.call(this, n, Fx(e))
            }
        },
        getMenuSize: function(e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            var n = t.scrollWidth,
                r = t.scrollHeight;
            return rA(t), {
                width: n,
                height: r
            }
        },
        showMenuPanel: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
            if (Ux(r)) {
                var i = r.parentNode,
                    o = Array.from(i.children).find((function(e) {
                        return !e.hidden
                    }));
                if (mA.transitions && !mA.reducedMotion) {
                    i.style.width = "".concat(o.scrollWidth, "px"), i.style.height = "".concat(o.scrollHeight, "px");
                    var a = pO.getMenuSize.call(this, r),
                        s = function t(n) {
                            n.target === i && ["width", "height"].includes(n.propertyName) && (i.style.width = "", i.style.height = "", wA.call(e, i, Wx, t))
                        };
                    bA.call(this, i, Wx, s), i.style.width = "".concat(a.width, "px"), i.style.height = "".concat(a.height, "px")
                }
                sA(o, !0), sA(r, !1), pO.focusFirstMenuItem.call(this, r, n)
            }
        },
        setDownloadUrl: function() {
            var e = this.elements.buttons.download;
            Ux(e) && e.setAttribute("href", this.download)
        },
        create: function(e) {
            var t = this,
                n = pO.bindMenuItemShortcuts,
                r = pO.createButton,
                i = pO.createProgress,
                o = pO.createRange,
                a = pO.createTime,
                s = pO.setQualityMenu,
                c = pO.setSpeedMenu,
                u = pO.showMenuPanel;
            this.elements.controls = null, Nx(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(r.call(this, "play-large"));
            var l = tA("div", aA(this.config.selectors.controls.wrapper));
            this.elements.controls = l;
            var f = {
                class: "plyr__controls__item"
            };
            return PA(Nx(this.config.controls) ? this.config.controls : []).forEach((function(s) {
                if ("restart" === s && l.appendChild(r.call(t, "restart", f)), "rewind" === s && l.appendChild(r.call(t, "rewind", f)), "play" === s && l.appendChild(r.call(t, "play", f)), "fast-forward" === s && l.appendChild(r.call(t, "fast-forward", f)), "progress" === s) {
                    var c = tA("div", {
                            class: "".concat(f.class, " plyr__progress__container")
                        }),
                        h = tA("div", aA(t.config.selectors.progress));
                    if (h.appendChild(o.call(t, "seek", {
                            id: "plyr-seek-".concat(e.id)
                        })), h.appendChild(i.call(t, "buffer")), t.config.tooltips.seek) {
                        var p = tA("span", {
                            class: t.config.classNames.tooltip
                        }, "00:00");
                        h.appendChild(p), t.elements.display.seekTooltip = p
                    }
                    t.elements.progress = h, c.appendChild(t.elements.progress), l.appendChild(c)
                }
                if ("current-time" === s && l.appendChild(a.call(t, "currentTime", f)), "duration" === s && l.appendChild(a.call(t, "duration", f)), "mute" === s || "volume" === s) {
                    var d = t.elements.volume;
                    if (Ux(d) && l.contains(d) || (d = tA("div", Qx({}, f, {
                            class: "".concat(f.class, " plyr__volume").trim()
                        })), t.elements.volume = d, l.appendChild(d)), "mute" === s && d.appendChild(r.call(t, "mute")), "volume" === s && !Yx.isIos) {
                        var g = {
                            max: 1,
                            step: .05,
                            value: t.config.volume
                        };
                        d.appendChild(o.call(t, "volume", Qx(g, {
                            id: "plyr-volume-".concat(e.id)
                        })))
                    }
                }
                if ("captions" === s && l.appendChild(r.call(t, "captions", f)), "settings" === s && !Vx(t.config.settings)) {
                    var m = tA("div", Qx({}, f, {
                        class: "".concat(f.class, " plyr__menu").trim(),
                        hidden: ""
                    }));
                    m.appendChild(r.call(t, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-".concat(e.id),
                        "aria-expanded": !1
                    }));
                    var v = tA("div", {
                            class: "plyr__menu__container",
                            id: "plyr-settings-".concat(e.id),
                            hidden: ""
                        }),
                        y = tA("div"),
                        b = tA("div", {
                            id: "plyr-settings-".concat(e.id, "-home")
                        }),
                        w = tA("div", {
                            role: "menu"
                        });
                    b.appendChild(w), y.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function(r) {
                        var i = tA("button", Qx(aA(t.config.selectors.buttons.settings), {
                            type: "button",
                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        n.call(t, i, r), bA.call(t, i, "click", (function() {
                            u.call(t, r, !1)
                        }));
                        var o = tA("span", null, rO(r, t.config)),
                            a = tA("span", {
                                class: t.config.classNames.menu.value
                            });
                        a.innerHTML = e[r], o.appendChild(a), i.appendChild(o), w.appendChild(i);
                        var s = tA("div", {
                                id: "plyr-settings-".concat(e.id, "-").concat(r),
                                hidden: ""
                            }),
                            c = tA("button", {
                                type: "button",
                                class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                            });
                        c.appendChild(tA("span", {
                            "aria-hidden": !0
                        }, rO(r, t.config))), c.appendChild(tA("span", {
                            class: t.config.classNames.hidden
                        }, rO("menuBack", t.config))), bA.call(t, s, "keydown", (function(e) {
                            37 === e.which && (e.preventDefault(), e.stopPropagation(), u.call(t, "home", !0))
                        }), !1), bA.call(t, c, "click", (function() {
                            u.call(t, "home", !1)
                        })), s.appendChild(c), s.appendChild(tA("div", {
                            role: "menu"
                        })), y.appendChild(s), t.elements.settings.buttons[r] = i, t.elements.settings.panels[r] = s
                    })), v.appendChild(y), m.appendChild(v), l.appendChild(m), t.elements.settings.popup = v, t.elements.settings.menu = m
                }
                if ("pip" === s && mA.pip && l.appendChild(r.call(t, "pip", f)), "airplay" === s && mA.airplay && l.appendChild(r.call(t, "airplay", f)), "download" === s) {
                    var _ = Qx({}, f, {
                        element: "a",
                        href: t.download,
                        target: "_blank"
                    });
                    t.isHTML5 && (_.download = "");
                    var E = t.config.urls.download;
                    !Hx(E) && t.isEmbed && Qx(_, {
                        icon: "logo-".concat(t.provider),
                        label: t.provider
                    }), l.appendChild(r.call(t, "download", _))
                }
                "fullscreen" === s && l.appendChild(r.call(t, "fullscreen", f))
            })), this.isHTML5 && s.call(this, CA.getQualityOptions.call(this)), c.call(this), l
        },
        inject: function() {
            var e = this;
            if (this.config.loadSprite) {
                var t = pO.getIconUrl.call(this);
                t.cors && aO(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            var n = null;
            this.elements.controls = null;
            var r = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                },
                i = !0;
            Lx(this.config.controls) && (this.config.controls = this.config.controls.call(this, r)), this.config.controls || (this.config.controls = []), Ux(this.config.controls) || jx(this.config.controls) ? n = this.config.controls : (n = pO.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: mO.getLabel.call(this)
            }), i = !1);
            var o, a;
            if (i && jx(this.config.controls) && (o = n, Object.entries(r).forEach((function(e) {
                    var t = bs(e, 2),
                        n = t[0],
                        r = t[1];
                    o = QA(o, "{".concat(n, "}"), r)
                })), n = o), jx(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), Ux(a) || (a = this.elements.container), a[Ux(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), Ux(this.elements.controls) || pO.findElements.call(this), !Vx(this.elements.buttons)) {
                var s = function(t) {
                    var n = e.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: function() {
                            return uA(t, n)
                        },
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            cA(t, n, e)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) {
                    Nx(e) || Mx(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e)
                }))
            }
            if (Yx.isEdge && zx(a), this.config.tooltips.controls) {
                var c = this.config,
                    u = c.classNames,
                    l = c.selectors,
                    f = "".concat(l.controls.wrapper, " ").concat(l.labels, " .").concat(u.hidden),
                    h = fA.call(this, f);
                Array.from(h).forEach((function(t) {
                    cA(t, e.config.classNames.hidden, !1), cA(t, e.config.classNames.tooltip, !0)
                }))
            }
        }
    };

    function dO(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = e;
        if (t) {
            var r = document.createElement("a");
            r.href = n, n = r.href
        }
        try {
            return new URL(n)
        } catch (e) {
            return null
        }
    }

    function gO(e) {
        var t = new URLSearchParams;
        return Cx(e) && Object.entries(e).forEach((function(e) {
            var n = bs(e, 2),
                r = n[0],
                i = n[1];
            t.set(r, i)
        })), t
    }
    var mO = {
            setup: function() {
                if (this.supported.ui)
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !mA.textTracks) Nx(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && pO.setCaptionsMenu.call(this);
                    else {
                        if (Ux(this.elements.captions) || (this.elements.captions = tA("div", aA(this.config.selectors.captions)), function(e, t) {
                                Ux(e) && Ux(t) && t.parentNode.insertBefore(e, t.nextSibling)
                            }(this.elements.captions, this.elements.wrapper)), Yx.isIE && window.URL) {
                            var e = this.media.querySelectorAll("track");
                            Array.from(e).forEach((function(e) {
                                var t = e.getAttribute("src"),
                                    n = dO(t);
                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && oO(t, "blob").then((function(t) {
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                })).catch((function() {
                                    rA(e)
                                }))
                            }))
                        }
                        var t = PA((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) {
                                return e.split("-")[0]
                            }))),
                            n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        if ("auto" === n) n = bs(t, 1)[0];
                        var r = this.storage.get("captions");
                        if (Rx(r) || (r = this.config.captions.active), Object.assign(this.captions, {
                                toggled: !1,
                                active: r,
                                language: n,
                                languages: t
                            }), this.isHTML5) {
                            var i = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            bA.call(this, this.media.textTracks, i, mO.update.bind(this))
                        }
                        setTimeout(mO.update.bind(this), 0)
                    }
            },
            update: function() {
                var e = this,
                    t = mO.getTracks.call(this, !0),
                    n = this.captions,
                    r = n.active,
                    i = n.language,
                    o = n.meta,
                    a = n.currentTrackNode,
                    s = Boolean(t.find((function(e) {
                        return e.language === i
                    })));
                this.isHTML5 && this.isVideo && t.filter((function(e) {
                    return !o.get(e)
                })).forEach((function(t) {
                    e.debug.log("Track added", t), o.set(t, {
                        default: "showing" === t.mode
                    }), "showing" === t.mode && (t.mode = "hidden"), bA.call(e, t, "cuechange", (function() {
                        return mO.updateCues.call(e)
                    }))
                })), (s && this.language !== i || !t.includes(a)) && (mO.setLanguage.call(this, i), mO.toggle.call(this, r && s)), cA(this.elements.container, this.config.classNames.captions.enabled, !Vx(t)), Nx(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && pO.setCaptionsMenu.call(this)
            },
            toggle: function(e) {
                var t = this,
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (this.supported.ui) {
                    var r = this.captions.toggled,
                        i = this.config.classNames.captions.active,
                        o = Ix(e) ? !r : e;
                    if (o !== r) {
                        if (n || (this.captions.active = o, this.storage.set({
                                captions: o
                            })), !this.language && o && !n) {
                            var a = mO.getTracks.call(this),
                                s = mO.findTrack.call(this, [this.captions.language].concat(ws(this.captions.languages)), !0);
                            return this.captions.language = s.language, void mO.set.call(this, a.indexOf(s))
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), cA(this.elements.container, i, o), this.captions.toggled = o, pO.updateSetting.call(this, "captions"), EA.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
                    }
                    setTimeout((function() {
                        o && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden")
                    }))
                }
            },
            set: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = mO.getTracks.call(this);
                if (-1 !== e)
                    if (Px(e))
                        if (e in n) {
                            if (this.captions.currentTrack !== e) {
                                this.captions.currentTrack = e;
                                var r = n[e],
                                    i = r || {},
                                    o = i.language;
                                this.captions.currentTrackNode = r, pO.updateSetting.call(this, "captions"), t || (this.captions.language = o, this.storage.set({
                                    language: o
                                })), this.isVimeo && this.embed.enableTextTrack(o), EA.call(this, this.media, "languagechange")
                            }
                            mO.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && mO.updateCues.call(this)
                        } else this.debug.warn("Track not found", e);
                else this.debug.warn("Invalid caption argument", e);
                else mO.toggle.call(this, !1, t)
            },
            setLanguage: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (jx(e)) {
                    var n = e.toLowerCase();
                    this.captions.language = n;
                    var r = mO.getTracks.call(this),
                        i = mO.findTrack.call(this, [n]);
                    mO.set.call(this, r.indexOf(i), t)
                } else this.debug.warn("Invalid language argument", e)
            },
            getTracks: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = Array.from((this.media || {}).textTracks || []);
                return n.filter((function(n) {
                    return !e.isHTML5 || t || e.captions.meta.has(n)
                })).filter((function(e) {
                    return ["captions", "subtitles"].includes(e.kind)
                }))
            },
            findTrack: function(e) {
                var t, n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = mO.getTracks.call(this),
                    o = function(e) {
                        return Number((n.captions.meta.get(e) || {}).default)
                    },
                    a = Array.from(i).sort((function(e, t) {
                        return o(t) - o(e)
                    }));
                return e.every((function(e) {
                    return !(t = a.find((function(t) {
                        return t.language === e
                    })))
                })), t || (r ? a[0] : void 0)
            },
            getCurrentTrack: function() {
                return mO.getTracks.call(this)[this.currentTrack]
            },
            getLabel: function(e) {
                var t = e;
                return !qx(t) && mA.textTracks && this.captions.toggled && (t = mO.getCurrentTrack.call(this)), qx(t) ? Vx(t.label) ? Vx(t.language) ? rO("enabled", this.config) : e.language.toUpperCase() : t.label : rO("disabled", this.config)
            },
            updateCues: function(e) {
                if (this.supported.ui)
                    if (Ux(this.elements.captions))
                        if (Ix(e) || Array.isArray(e)) {
                            var t = e;
                            if (!t) {
                                var n = mO.getCurrentTrack.call(this);
                                t = Array.from((n || {}).activeCues || []).map((function(e) {
                                    return e.getCueAsHTML()
                                })).map(tO)
                            }
                            var r = t.map((function(e) {
                                return e.trim()
                            })).join("\n");
                            if (r !== this.elements.captions.innerHTML) {
                                iA(this.elements.captions);
                                var i = tA("span", aA(this.config.selectors.caption));
                                i.innerHTML = r, this.elements.captions.appendChild(i), EA.call(this, this.media, "cuechange")
                            }
                        } else this.debug.warn("updateCues: Invalid input", e);
                else this.debug.warn("No captions element to render to")
            }
        },
        vO = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            playsinline: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: null,
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.6.4/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                forced: !1,
                onChange: null
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            captions: {
                active: !1,
                language: "auto",
                update: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                pip: "PIP",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD"
                }
            },
            urls: {
                download: null,
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/oembed.json?url={0}"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                },
                googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption"
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: {
                    time: "plyr__time"
                },
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                tabFocus: "plyr__tab-focus",
                previewThumbnails: {
                    thumbContainer: "plyr__preview-thumb",
                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                    imageContainer: "plyr__preview-thumb__image-container",
                    timeContainer: "plyr__preview-thumb__time-container",
                    scrubbingContainer: "plyr__preview-scrubbing",
                    scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                }
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            ads: {
                enabled: !1,
                publisherId: "",
                tagUrl: ""
            },
            previewThumbnails: {
                enabled: !1,
                src: ""
            },
            vimeo: {
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: !1,
                customControls: !0,
                referrerPolicy: null,
                premium: !1
            },
            youtube: {
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                customControls: !0,
                noCookie: !1
            }
        },
        yO = "picture-in-picture",
        bO = "inline",
        wO = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        _O = "audio",
        EO = "video";
    var SO = function() {},
        kO = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                hs(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
            }
            return ds(e, [{
                key: "log",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : SO
                }
            }, {
                key: "warn",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : SO
                }
            }, {
                key: "error",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : SO
                }
            }]), e
        }(),
        TO = function() {
            function e(t) {
                var n = this;
                hs(this, e), gs(this, "onChange", (function() {
                    if (n.enabled) {
                        var e = n.player.elements.buttons.fullscreen;
                        Ux(e) && (e.pressed = n.active);
                        var t = n.target === n.player.media ? n.target : n.player.elements.container;
                        EA.call(n.player, t, n.active ? "enterfullscreen" : "exitfullscreen", !0)
                    }
                })), gs(this, "toggleFallback", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e ? n.scrollPosition = {
                            x: window.scrollX || 0,
                            y: window.scrollY || 0
                        } : window.scrollTo(n.scrollPosition.x, n.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", cA(n.target, n.player.config.classNames.fullscreen.fallback, e), Yx.isIos) {
                        var t = document.head.querySelector('meta[name="viewport"]'),
                            r = "viewport-fit=cover";
                        t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                        var i = jx(t.content) && t.content.includes(r);
                        e ? (n.cleanupViewport = !i, i || (t.content += ",".concat(r))) : n.cleanupViewport && (t.content = t.content.split(",").filter((function(e) {
                            return e.trim() !== r
                        })).join(","))
                    }
                    n.onChange()
                })), gs(this, "trapFocus", (function(e) {
                    if (!Yx.isIos && n.active && "Tab" === e.key && 9 === e.keyCode) {
                        var t = document.activeElement,
                            r = fA.call(n.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                            i = bs(r, 1)[0],
                            o = r[r.length - 1];
                        t !== o || e.shiftKey ? t === i && e.shiftKey && (o.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                    }
                })), gs(this, "update", (function() {
                    var t;
                    n.enabled ? (t = n.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", n.player.debug.log("".concat(t, " fullscreen enabled"))) : n.player.debug.log("Fullscreen not supported and fallback disabled");
                    cA(n.player.elements.container, n.player.config.classNames.fullscreen.enabled, n.enabled)
                })), gs(this, "enter", (function() {
                    n.enabled && (Yx.isIos && n.player.config.fullscreen.iosNative ? n.player.isVimeo ? n.player.embed.requestFullscreen() : n.target.webkitEnterFullscreen() : !e.native || n.forceFallback ? n.toggleFallback(!0) : n.prefix ? Vx(n.prefix) || n.target["".concat(n.prefix, "Request").concat(n.property)]() : n.target.requestFullscreen({
                        navigationUI: "hide"
                    }))
                })), gs(this, "exit", (function() {
                    if (n.enabled)
                        if (Yx.isIos && n.player.config.fullscreen.iosNative) n.target.webkitExitFullscreen(), TA(n.player.play());
                        else if (!e.native || n.forceFallback) n.toggleFallback(!1);
                    else if (n.prefix) {
                        if (!Vx(n.prefix)) {
                            var t = "moz" === n.prefix ? "Cancel" : "Exit";
                            document["".concat(n.prefix).concat(t).concat(n.property)]()
                        }
                    } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                })), gs(this, "toggle", (function() {
                    n.active ? n.exit() : n.enter()
                })), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                    x: 0,
                    y: 0
                }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                    return (Element.prototype.closest || function() {
                        var e = this;
                        do {
                            if (lA.matches(e, t)) return e;
                            e = e.parentElement || e.parentNode
                        } while (null !== e && 1 === e.nodeType);
                        return null
                    }).call(e, t)
                }(this.player.elements.container, t.config.fullscreen.container), bA.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
                    n.onChange()
                })), bA.call(this.player, this.player.elements.container, "dblclick", (function(e) {
                    Ux(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.player.listeners.proxy(e, n.toggle, "fullscreen")
                })), bA.call(this, this.player.elements.container, "keydown", (function(e) {
                    return n.trapFocus(e)
                })), this.update()
            }
            return ds(e, [{
                key: "usingNative",
                get: function() {
                    return e.native && !this.forceFallback
                }
            }, {
                key: "enabled",
                get: function() {
                    return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                }
            }, {
                key: "active",
                get: function() {
                    if (!this.enabled) return !1;
                    if (!e.native || this.forceFallback) return uA(this.target, this.player.config.classNames.fullscreen.fallback);
                    var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
                    return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
                }
            }, {
                key: "target",
                get: function() {
                    return Yx.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                }
            }], [{
                key: "native",
                get: function() {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                }
            }, {
                key: "prefix",
                get: function() {
                    if (Lx(document.exitFullscreen)) return "";
                    var e = "";
                    return ["webkit", "moz", "ms"].some((function(t) {
                        return !(!Lx(document["".concat(t, "ExitFullscreen")]) && !Lx(document["".concat(t, "CancelFullScreen")])) && (e = t, !0)
                    })), e
                }
            }, {
                key: "property",
                get: function() {
                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                }
            }]), e
        }(),
        xO = Math.sign || function(e) {
            return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
        };

    function AO(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise((function(n, r) {
            var i = new Image,
                o = function() {
                    delete i.onload, delete i.onerror, (i.naturalWidth >= t ? n : r)(i)
                };
            Object.assign(i, {
                onload: o,
                onerror: o,
                src: e
            })
        }))
    }
    hv({
        target: "Math",
        stat: !0
    }, {
        sign: xO
    });
    var OO = {
            addStyleHook: function() {
                cA(this.elements.container, this.config.selectors.container.replace(".", ""), !0), cA(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function() {
                var e = this;
                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void OO.toggleNativeControls.call(this, !0);
                Ux(this.elements.controls) || (pO.inject.call(this), this.listeners.controls()), OO.toggleNativeControls.call(this), this.isHTML5 && mO.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, pO.updateVolume.call(this), pO.timeUpdate.call(this), OO.checkPlaying.call(this), cA(this.elements.container, this.config.classNames.pip.supported, mA.pip && this.isHTML5 && this.isVideo), cA(this.elements.container, this.config.classNames.airplay.supported, mA.airplay && this.isHTML5), cA(this.elements.container, this.config.classNames.isIos, Yx.isIos), cA(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() {
                    EA.call(e, e.media, "ready")
                }), 0), OO.setTitle.call(this), this.poster && OO.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && pO.durationUpdate.call(this)
            },
            setTitle: function() {
                var e = rO("play", this.config);
                if (jx(this.config.title) && !Vx(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) {
                        t.setAttribute("aria-label", e)
                    })), this.isEmbed) {
                    var t = hA.call(this, "iframe");
                    if (!Ux(t)) return;
                    var n = Vx(this.config.title) ? "video" : this.config.title,
                        r = rO("frameTitle", this.config);
                    t.setAttribute("title", r.replace("{title}", n))
                }
            },
            togglePoster: function(e) {
                cA(this.elements.container, this.config.classNames.posterEnabled, e)
            },
            setPoster: function(e) {
                var t = this,
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), kA.call(this).then((function() {
                    return AO(e)
                })).catch((function(n) {
                    throw e === t.poster && OO.togglePoster.call(t, !1), n
                })).then((function() {
                    if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                })).then((function() {
                    return Object.assign(t.elements.poster.style, {
                        backgroundImage: "url('".concat(e, "')"),
                        backgroundSize: ""
                    }), OO.togglePoster.call(t, !0), e
                })))
            },
            checkPlaying: function(e) {
                var t = this;
                cA(this.elements.container, this.config.classNames.playing, this.playing), cA(this.elements.container, this.config.classNames.paused, this.paused), cA(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) {
                    Object.assign(e, {
                        pressed: t.playing
                    }), e.setAttribute("aria-label", rO(t.playing ? "pause" : "play", t.config))
                })), Dx(e) && "timeupdate" === e.type || OO.toggleControls.call(this)
            },
            checkLoading: function(e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() {
                    cA(t.elements.container, t.config.classNames.loading, t.loading), OO.toggleControls.call(t)
                }), this.loading ? 250 : 0)
            },
            toggleControls: function(e) {
                var t = this.elements.controls;
                if (t && this.config.hideControls) {
                    var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                    this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                }
            },
            migrateStyles: function() {
                var e = this;
                Object.values(vs({}, this.media.style)).filter((function(e) {
                    return !Vx(e) && jx(e) && e.startsWith("--plyr")
                })).forEach((function(t) {
                    e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t)
                })), Vx(this.media.style) && this.media.removeAttribute("style")
            }
        },
        IO = function() {
            function e(t) {
                var n = this;
                hs(this, e), gs(this, "firstTouch", (function() {
                    var e = n.player,
                        t = e.elements;
                    e.touch = !0, cA(t.container, e.config.classNames.isTouch, !0)
                })), gs(this, "setTabFocus", (function(e) {
                    var t = n.player,
                        r = t.elements;
                    if (clearTimeout(n.focusTimer), "keydown" !== e.type || 9 === e.which) {
                        "keydown" === e.type && (n.lastKeyDown = e.timeStamp);
                        var i, o = e.timeStamp - n.lastKeyDown <= 20;
                        if ("focus" !== e.type || o) i = t.config.classNames.tabFocus, cA(fA.call(t, ".".concat(i)), i, !1), "focusout" !== e.type && (n.focusTimer = setTimeout((function() {
                            var e = document.activeElement;
                            r.container.contains(e) && cA(document.activeElement, t.config.classNames.tabFocus, !0)
                        }), 10))
                    }
                })), gs(this, "global", (function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = n.player;
                    t.config.keyboard.global && yA.call(t, window, "keydown keyup", n.handleKey, e, !1), yA.call(t, document.body, "click", n.toggleMenu, e), _A.call(t, document.body, "touchstart", n.firstTouch), yA.call(t, document.body, "keydown focus blur focusout", n.setTabFocus, e, !1, !0)
                })), gs(this, "container", (function() {
                    var e = n.player,
                        t = e.config,
                        r = e.elements,
                        i = e.timers;
                    !t.keyboard.global && t.keyboard.focused && bA.call(e, r.container, "keydown keyup", n.handleKey, !1), bA.call(e, r.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                        var n = r.controls;
                        n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                        var o = 0;
                        ["touchstart", "touchmove", "mousemove"].includes(t.type) && (OO.toggleControls.call(e, !0), o = e.touch ? 3e3 : 2e3), clearTimeout(i.controls), i.controls = setTimeout((function() {
                            return OO.toggleControls.call(e, !1)
                        }), o)
                    }));
                    var o = function(t) {
                            if (!t) return IA.call(e);
                            var n = r.container.getBoundingClientRect(),
                                i = n.width,
                                o = n.height;
                            return IA.call(e, "".concat(i, ":").concat(o))
                        },
                        a = function() {
                            clearTimeout(i.resized), i.resized = setTimeout(o, 50)
                        };
                    bA.call(e, r.container, "enterfullscreen exitfullscreen", (function(t) {
                        var n = e.fullscreen,
                            i = n.target,
                            s = n.usingNative;
                        if (i === r.container && (e.isEmbed || !Vx(e.config.ratio))) {
                            var c = "enterfullscreen" === t.type,
                                u = o(c);
                            u.padding;
                            ! function(t, n, r) {
                                if (e.isVimeo && !e.config.vimeo.premium) {
                                    var i = e.elements.wrapper.firstChild,
                                        o = bs(t, 2)[1],
                                        a = bs(OA.call(e), 2),
                                        s = a[0],
                                        c = a[1];
                                    i.style.maxWidth = r ? "".concat(o / c * s, "px") : null, i.style.margin = r ? "0 auto" : null
                                }
                            }(u.ratio, 0, c), c && setTimeout((function() {
                                return zx(r.container)
                            }), 100), s || (c ? bA.call(e, window, "resize", a) : wA.call(e, window, "resize", a))
                        }
                    }))
                })), gs(this, "media", (function() {
                    var e = n.player,
                        t = e.elements;
                    if (bA.call(e, e.media, "timeupdate seeking seeked", (function(t) {
                            return pO.timeUpdate.call(e, t)
                        })), bA.call(e, e.media, "durationchange loadeddata loadedmetadata", (function(t) {
                            return pO.durationUpdate.call(e, t)
                        })), bA.call(e, e.media, "ended", (function() {
                            e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                        })), bA.call(e, e.media, "progress playing seeking seeked", (function(t) {
                            return pO.updateProgress.call(e, t)
                        })), bA.call(e, e.media, "volumechange", (function(t) {
                            return pO.updateVolume.call(e, t)
                        })), bA.call(e, e.media, "playing play pause ended emptied timeupdate", (function(t) {
                            return OO.checkPlaying.call(e, t)
                        })), bA.call(e, e.media, "waiting canplay seeked playing", (function(t) {
                            return OO.checkLoading.call(e, t)
                        })), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                        var r = hA.call(e, ".".concat(e.config.classNames.video));
                        if (!Ux(r)) return;
                        bA.call(e, t.container, "click", (function(i) {
                            ([t.container, r].includes(i.target) || r.contains(i.target)) && (e.touch && e.config.hideControls || (e.ended ? (n.proxy(i, e.restart, "restart"), n.proxy(i, (function() {
                                TA(e.play())
                            }), "play")) : n.proxy(i, (function() {
                                TA(e.togglePlay())
                            }), "play")))
                        }))
                    }
                    e.supported.ui && e.config.disableContextMenu && bA.call(e, t.wrapper, "contextmenu", (function(e) {
                        e.preventDefault()
                    }), !1), bA.call(e, e.media, "volumechange", (function() {
                        e.storage.set({
                            volume: e.volume,
                            muted: e.muted
                        })
                    })), bA.call(e, e.media, "ratechange", (function() {
                        pO.updateSetting.call(e, "speed"), e.storage.set({
                            speed: e.speed
                        })
                    })), bA.call(e, e.media, "qualitychange", (function(t) {
                        pO.updateSetting.call(e, "quality", null, t.detail.quality)
                    })), bA.call(e, e.media, "ready qualitychange", (function() {
                        pO.setDownloadUrl.call(e)
                    }));
                    var i = e.config.events.concat(["keyup", "keydown"]).join(" ");
                    bA.call(e, e.media, i, (function(n) {
                        var r = n.detail,
                            i = void 0 === r ? {} : r;
                        "error" === n.type && (i = e.media.error), EA.call(e, t.container, n.type, !0, i)
                    }))
                })), gs(this, "proxy", (function(e, t, r) {
                    var i = n.player,
                        o = i.config.listeners[r],
                        a = !0;
                    Lx(o) && (a = o.call(i, e)), !1 !== a && Lx(t) && t.call(i, e)
                })), gs(this, "bind", (function(e, t, r, i) {
                    var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        a = n.player,
                        s = a.config.listeners[i],
                        c = Lx(s);
                    bA.call(a, e, t, (function(e) {
                        return n.proxy(e, r, i)
                    }), o && !c)
                })), gs(this, "controls", (function() {
                    var e = n.player,
                        t = e.elements,
                        r = Yx.isIE ? "change" : "input";
                    if (t.buttons.play && Array.from(t.buttons.play).forEach((function(t) {
                            n.bind(t, "click", (function() {
                                TA(e.togglePlay())
                            }), "play")
                        })), n.bind(t.buttons.restart, "click", e.restart, "restart"), n.bind(t.buttons.rewind, "click", (function() {
                            e.lastSeekTime = Date.now(), e.rewind()
                        }), "rewind"), n.bind(t.buttons.fastForward, "click", (function() {
                            e.lastSeekTime = Date.now(), e.forward()
                        }), "fastForward"), n.bind(t.buttons.mute, "click", (function() {
                            e.muted = !e.muted
                        }), "mute"), n.bind(t.buttons.captions, "click", (function() {
                            return e.toggleCaptions()
                        })), n.bind(t.buttons.download, "click", (function() {
                            EA.call(e, e.media, "download")
                        }), "download"), n.bind(t.buttons.fullscreen, "click", (function() {
                            e.fullscreen.toggle()
                        }), "fullscreen"), n.bind(t.buttons.pip, "click", (function() {
                            e.pip = "toggle"
                        }), "pip"), n.bind(t.buttons.airplay, "click", e.airplay, "airplay"), n.bind(t.buttons.settings, "click", (function(t) {
                            t.stopPropagation(), t.preventDefault(), pO.toggleMenu.call(e, t)
                        }), null, !1), n.bind(t.buttons.settings, "keyup", (function(t) {
                            var n = t.which;
                            [13, 32].includes(n) && (13 !== n ? (t.preventDefault(), t.stopPropagation(), pO.toggleMenu.call(e, t)) : pO.focusFirstMenuItem.call(e, null, !0))
                        }), null, !1), n.bind(t.settings.menu, "keydown", (function(t) {
                            27 === t.which && pO.toggleMenu.call(e, t)
                        })), n.bind(t.inputs.seek, "mousedown mousemove", (function(e) {
                            var n = t.progress.getBoundingClientRect(),
                                r = 100 / n.width * (e.pageX - n.left);
                            e.currentTarget.setAttribute("seek-value", r)
                        })), n.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(t) {
                            var n = t.currentTarget,
                                r = t.keyCode ? t.keyCode : t.which,
                                i = "play-on-seeked";
                            if (!Fx(t) || 39 === r || 37 === r) {
                                e.lastSeekTime = Date.now();
                                var o = n.hasAttribute(i),
                                    a = ["mouseup", "touchend", "keyup"].includes(t.type);
                                o && a ? (n.removeAttribute(i), TA(e.play())) : !a && e.playing && (n.setAttribute(i, ""), e.pause())
                            }
                        })), Yx.isIos) {
                        var i = fA.call(e, 'input[type="range"]');
                        Array.from(i).forEach((function(e) {
                            return n.bind(e, r, (function(e) {
                                return zx(e.target)
                            }))
                        }))
                    }
                    n.bind(t.inputs.seek, r, (function(t) {
                        var n = t.currentTarget,
                            r = n.getAttribute("seek-value");
                        Vx(r) && (r = n.value), n.removeAttribute("seek-value"), e.currentTime = r / n.max * e.duration
                    }), "seek"), n.bind(t.progress, "mouseenter mouseleave mousemove", (function(t) {
                        return pO.updateSeekTooltip.call(e, t)
                    })), n.bind(t.progress, "mousemove touchmove", (function(t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.startMove(t)
                    })), n.bind(t.progress, "mouseleave touchend click", (function() {
                        var t = e.previewThumbnails;
                        t && t.loaded && t.endMove(!1, !0)
                    })), n.bind(t.progress, "mousedown touchstart", (function(t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.startScrubbing(t)
                    })), n.bind(t.progress, "mouseup touchend", (function(t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.endScrubbing(t)
                    })), Yx.isWebkit && Array.from(fA.call(e, 'input[type="range"]')).forEach((function(t) {
                        n.bind(t, "input", (function(t) {
                            return pO.updateRangeFill.call(e, t.target)
                        }))
                    })), e.config.toggleInvert && !Ux(t.display.duration) && n.bind(t.display.currentTime, "click", (function() {
                        0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, pO.timeUpdate.call(e))
                    })), n.bind(t.inputs.volume, r, (function(t) {
                        e.volume = t.target.value
                    }), "volume"), n.bind(t.controls, "mouseenter mouseleave", (function(n) {
                        t.controls.hover = !e.touch && "mouseenter" === n.type
                    })), t.fullscreen && Array.from(t.fullscreen.children).filter((function(e) {
                        return !e.contains(t.container)
                    })).forEach((function(r) {
                        n.bind(r, "mouseenter mouseleave", (function(n) {
                            t.controls.hover = !e.touch && "mouseenter" === n.type
                        }))
                    })), n.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) {
                        t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                    })), n.bind(t.controls, "focusin", (function() {
                        var r = e.config,
                            i = e.timers;
                        cA(t.controls, r.classNames.noTransition, !0), OO.toggleControls.call(e, !0), setTimeout((function() {
                            cA(t.controls, r.classNames.noTransition, !1)
                        }), 0);
                        var o = n.touch ? 3e3 : 4e3;
                        clearTimeout(i.controls), i.controls = setTimeout((function() {
                            return OO.toggleControls.call(e, !1)
                        }), o)
                    })), n.bind(t.inputs.volume, "wheel", (function(t) {
                        var n = t.webkitDirectionInvertedFromDevice,
                            r = bs([t.deltaX, -t.deltaY].map((function(e) {
                                return n ? -e : e
                            })), 2),
                            i = r[0],
                            o = r[1],
                            a = Math.sign(Math.abs(i) > Math.abs(o) ? i : o);
                        e.increaseVolume(a / 50);
                        var s = e.media.volume;
                        (1 === a && s < 1 || -1 === a && s > 0) && t.preventDefault()
                    }), "volume", !1)
                })), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
            }
            return ds(e, [{
                key: "handleKey",
                value: function(e) {
                    var t = this.player,
                        n = t.elements,
                        r = e.keyCode ? e.keyCode : e.which,
                        i = "keydown" === e.type,
                        o = i && r === this.lastKey;
                    if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && Px(r)) {
                        if (i) {
                            var a = document.activeElement;
                            if (Ux(a)) {
                                var s = t.config.selectors.editable;
                                if (a !== n.inputs.seek && lA(a, s)) return;
                                if (32 === e.which && lA(a, 'button, [role^="menuitem"]')) return
                            }
                            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(r) && (e.preventDefault(), e.stopPropagation()), r) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    o || (t.currentTime = t.duration / 10 * (r - 48));
                                    break;
                                case 32:
                                case 75:
                                    o || TA(t.togglePlay());
                                    break;
                                case 38:
                                    t.increaseVolume(.1);
                                    break;
                                case 40:
                                    t.decreaseVolume(.1);
                                    break;
                                case 77:
                                    o || (t.muted = !t.muted);
                                    break;
                                case 39:
                                    t.forward();
                                    break;
                                case 37:
                                    t.rewind();
                                    break;
                                case 70:
                                    t.fullscreen.toggle();
                                    break;
                                case 67:
                                    o || t.toggleCaptions();
                                    break;
                                case 76:
                                    t.loop = !t.loop
                            }
                            27 === r && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = r
                        } else this.lastKey = null
                    }
                }
            }, {
                key: "toggleMenu",
                value: function(e) {
                    pO.toggleMenu.call(this.player, e)
                }
            }]), e
        }(),
        CO = Cv("splice"),
        PO = zv("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        jO = Math.max,
        RO = Math.min,
        LO = 9007199254740991,
        NO = "Maximum allowed length exceeded";
    hv({
        target: "Array",
        proto: !0,
        forced: !CO || !PO
    }, {
        splice: function(e, t) {
            var n, r, i, o, a, s, c = dv(this),
                u = Wm(c.length),
                l = $m(e, u),
                f = arguments.length;
            if (0 === f ? n = r = 0 : 1 === f ? (n = 0, r = u - l) : (n = f - 2, r = RO(jO(Hm(t), 0), u - l)), u + n - r > LO) throw TypeError(NO);
            for (i = Sv(c, r), o = 0; o < r; o++)(a = l + o) in c && gv(i, o, c[a]);
            if (i.length = r, n < r) {
                for (o = l; o < u - r; o++) s = o + n, (a = o + r) in c ? c[s] = c[a] : delete c[s];
                for (o = u; o > u - r + n; o--) delete c[o - 1]
            } else if (n > r)
                for (o = u - r; o > l; o--) s = o + n - 1, (a = o + r - 1) in c ? c[s] = c[a] : delete c[s];
            for (o = 0; o < n; o++) c[o + l] = arguments[o + 2];
            return c.length = u - r + n, i
        }
    });
    var MO = t((function(e, t) {
        e.exports = function() {
            var e = function() {},
                t = {},
                n = {},
                r = {};

            function i(e, t) {
                e = e.push ? e : [e];
                var i, o, a, s = [],
                    c = e.length,
                    u = c;
                for (i = function(e, n) {
                        n.length && s.push(e), --u || t(s)
                    }; c--;) o = e[c], (a = n[o]) ? i(o, a) : (r[o] = r[o] || []).push(i)
            }

            function o(e, t) {
                if (e) {
                    var i = r[e];
                    if (n[e] = t, i)
                        for (; i.length;) i[0](e, t), i.splice(0, 1)
                }
            }

            function a(t, n) {
                t.call && (t = {
                    success: t
                }), n.length ? (t.error || e)(n) : (t.success || e)(t)
            }

            function s(t, n, r, i) {
                var o, a, c = document,
                    u = r.async,
                    l = (r.numRetries || 0) + 1,
                    f = r.before || e,
                    h = t.replace(/[\?|#].*$/, ""),
                    p = t.replace(/^(css|img)!/, "");
                i = i || 0, /(^css!|\.css$)/.test(h) ? ((a = c.createElement("link")).rel = "stylesheet", a.href = p, (o = "hideFocus" in a) && a.relList && (o = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (a = c.createElement("img")).src = p : ((a = c.createElement("script")).src = t, a.async = void 0 === u || u), a.onload = a.onerror = a.onbeforeload = function(e) {
                    var c = e.type[0];
                    if (o) try {
                        a.sheet.cssText.length || (c = "e")
                    } catch (e) {
                        18 != e.code && (c = "e")
                    }
                    if ("e" == c) {
                        if ((i += 1) < l) return s(t, n, r, i)
                    } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
                    n(t, c, e.defaultPrevented)
                }, !1 !== f(t, a) && c.head.appendChild(a)
            }

            function c(e, t, n) {
                var r, i, o = (e = e.push ? e : [e]).length,
                    a = o,
                    c = [];
                for (r = function(e, n, r) {
                        if ("e" == n && c.push(e), "b" == n) {
                            if (!r) return;
                            c.push(e)
                        }--o || t(c)
                    }, i = 0; i < a; i++) s(e[i], r, n)
            }

            function u(e, n, r) {
                var i, s;
                if (n && n.trim && (i = n), s = (i ? r : n) || {}, i) {
                    if (i in t) throw "LoadJS";
                    t[i] = !0
                }

                function u(t, n) {
                    c(e, (function(e) {
                        a(s, e), t && a({
                            success: t,
                            error: n
                        }, e), o(i, e)
                    }), s)
                }
                if (s.returnPromise) return new Promise(u);
                u()
            }
            return u.ready = function(e, t) {
                return i(e, (function(e) {
                    a(t, e)
                })), u
            }, u.done = function(e) {
                o(e, [])
            }, u.reset = function() {
                t = {}, n = {}, r = {}
            }, u.isDefined = function(e) {
                return e in t
            }, u
        }()
    }));

    function UO(e) {
        return new Promise((function(t, n) {
            MO(e, {
                success: t,
                error: n
            })
        }))
    }

    function DO(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, EA.call(this, this.media, e ? "play" : "pause"))
    }
    var FO = {
        setup: function() {
            var e = this;
            cA(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, IA.call(e), Cx(window.Vimeo) ? FO.ready.call(e) : UO(e.config.urls.vimeo.sdk).then((function() {
                FO.ready.call(e)
            })).catch((function(t) {
                e.debug.warn("Vimeo SDK (player.js) failed to load", t)
            }))
        },
        ready: function() {
            var e = this,
                t = this,
                n = t.config.vimeo,
                r = n.premium,
                i = n.referrerPolicy,
                o = ys(n, ["premium", "referrerPolicy"]);
            r && Object.assign(o, {
                controls: !1,
                sidedock: !1
            });
            var a = gO(vs({
                    loop: t.config.loop.active,
                    autoplay: t.autoplay,
                    muted: t.muted,
                    gesture: "media",
                    playsinline: !this.config.fullscreen.iosNative
                }, o)),
                s = t.media.getAttribute("src");
            Vx(s) && (s = t.media.getAttribute(t.config.attributes.embed.id));
            var c, u = Vx(c = s) ? null : Px(Number(c)) ? c : c.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : c,
                l = tA("iframe"),
                f = JA(t.config.urls.vimeo.iframe, u, a);
            if (l.setAttribute("src", f), l.setAttribute("allowfullscreen", ""), l.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture"].join("; ")), Vx(i) || l.setAttribute("referrerPolicy", i), r || !n.customControls) l.setAttribute("data-poster", t.poster), t.media = oA(l, t.media);
            else {
                var h = tA("div", {
                    class: t.config.classNames.embedContainer,
                    "data-poster": t.poster
                });
                h.appendChild(l), t.media = oA(h, t.media)
            }
            n.customControls || oO(JA(t.config.urls.vimeo.api, f)).then((function(e) {
                !Vx(e) && e.thumbnail_url && OO.setPoster.call(t, e.thumbnail_url).catch((function() {}))
            })), t.embed = new window.Vimeo.Player(l, {
                autopause: t.config.autopause,
                muted: t.muted
            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                return DO.call(t, !0), t.embed.play()
            }, t.media.pause = function() {
                return DO.call(t, !1), t.embed.pause()
            }, t.media.stop = function() {
                t.pause(), t.currentTime = 0
            };
            var p = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
                get: function() {
                    return p
                },
                set: function(e) {
                    var n = t.embed,
                        r = t.media,
                        i = t.paused,
                        o = t.volume,
                        a = i && !n.hasPlayed;
                    r.seeking = !0, EA.call(t, r, "seeking"), Promise.resolve(a && n.setVolume(0)).then((function() {
                        return n.setCurrentTime(e)
                    })).then((function() {
                        return a && n.pause()
                    })).then((function() {
                        return a && n.setVolume(o)
                    })).catch((function() {}))
                }
            });
            var d = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
                get: function() {
                    return d
                },
                set: function(e) {
                    t.embed.setPlaybackRate(e).then((function() {
                        d = e, EA.call(t, t.media, "ratechange")
                    })).catch((function() {
                        t.options.speed = [1]
                    }))
                }
            });
            var g = t.config.volume;
            Object.defineProperty(t.media, "volume", {
                get: function() {
                    return g
                },
                set: function(e) {
                    t.embed.setVolume(e).then((function() {
                        g = e, EA.call(t, t.media, "volumechange")
                    }))
                }
            });
            var m = t.config.muted;
            Object.defineProperty(t.media, "muted", {
                get: function() {
                    return m
                },
                set: function(e) {
                    var n = !!Rx(e) && e;
                    t.embed.setVolume(n ? 0 : t.config.volume).then((function() {
                        m = n, EA.call(t, t.media, "volumechange")
                    }))
                }
            });
            var v, y = t.config.loop;
            Object.defineProperty(t.media, "loop", {
                get: function() {
                    return y
                },
                set: function(e) {
                    var n = Rx(e) ? e : t.config.loop.active;
                    t.embed.setLoop(n).then((function() {
                        y = n
                    }))
                }
            }), t.embed.getVideoUrl().then((function(e) {
                v = e, pO.setDownloadUrl.call(t)
            })).catch((function(t) {
                e.debug.warn(t)
            })), Object.defineProperty(t.media, "currentSrc", {
                get: function() {
                    return v
                }
            }), Object.defineProperty(t.media, "ended", {
                get: function() {
                    return t.currentTime === t.duration
                }
            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(n) {
                var r = bs(n, 2),
                    i = r[0],
                    o = r[1];
                t.embed.ratio = [i, o], IA.call(e)
            })), t.embed.setAutopause(t.config.autopause).then((function(e) {
                t.config.autopause = e
            })), t.embed.getVideoTitle().then((function(n) {
                t.config.title = n, OO.setTitle.call(e)
            })), t.embed.getCurrentTime().then((function(e) {
                p = e, EA.call(t, t.media, "timeupdate")
            })), t.embed.getDuration().then((function(e) {
                t.media.duration = e, EA.call(t, t.media, "durationchange")
            })), t.embed.getTextTracks().then((function(e) {
                t.media.textTracks = e, mO.setup.call(t)
            })), t.embed.on("cuechange", (function(e) {
                var n = e.cues,
                    r = (void 0 === n ? [] : n).map((function(e) {
                        return function(e) {
                            var t = document.createDocumentFragment(),
                                n = document.createElement("div");
                            return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                        }(e.text)
                    }));
                mO.updateCues.call(t, r)
            })), t.embed.on("loaded", (function() {
                (t.embed.getPaused().then((function(e) {
                    DO.call(t, !e), e || EA.call(t, t.media, "playing")
                })), Ux(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
            })), t.embed.on("bufferstart", (function() {
                EA.call(t, t.media, "waiting")
            })), t.embed.on("bufferend", (function() {
                EA.call(t, t.media, "playing")
            })), t.embed.on("play", (function() {
                DO.call(t, !0), EA.call(t, t.media, "playing")
            })), t.embed.on("pause", (function() {
                DO.call(t, !1)
            })), t.embed.on("timeupdate", (function(e) {
                t.media.seeking = !1, p = e.seconds, EA.call(t, t.media, "timeupdate")
            })), t.embed.on("progress", (function(e) {
                t.media.buffered = e.percent, EA.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && EA.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) {
                    e !== t.media.duration && (t.media.duration = e, EA.call(t, t.media, "durationchange"))
                }))
            })), t.embed.on("seeked", (function() {
                t.media.seeking = !1, EA.call(t, t.media, "seeked")
            })), t.embed.on("ended", (function() {
                t.media.paused = !0, EA.call(t, t.media, "ended")
            })), t.embed.on("error", (function(e) {
                t.media.error = e, EA.call(t, t.media, "error")
            })), n.customControls && setTimeout((function() {
                return OO.build.call(t)
            }), 0)
        }
    };

    function qO(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, EA.call(this, this.media, e ? "play" : "pause"))
    }

    function BO(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
    }
    var HO = {
            setup: function() {
                var e = this;
                if (cA(this.elements.wrapper, this.config.classNames.embed, !0), Cx(window.YT) && Lx(window.YT.Player)) HO.ready.call(this);
                else {
                    var t = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function() {
                        Lx(t) && t(), HO.ready.call(e)
                    }, UO(this.config.urls.youtube.sdk).catch((function(t) {
                        e.debug.warn("YouTube API failed to load", t)
                    }))
                }
            },
            getTitle: function(e) {
                var t = this;
                oO(JA(this.config.urls.youtube.api, e)).then((function(e) {
                    if (Cx(e)) {
                        var n = e.title,
                            r = e.height,
                            i = e.width;
                        t.config.title = n, OO.setTitle.call(t), t.embed.ratio = [i, r]
                    }
                    IA.call(t)
                })).catch((function() {
                    IA.call(t)
                }))
            },
            ready: function() {
                var e = this,
                    t = e.config.youtube,
                    n = e.media && e.media.getAttribute("id");
                if (Vx(n) || !n.startsWith("youtube-")) {
                    var r = e.media.getAttribute("src");
                    Vx(r) && (r = e.media.getAttribute(this.config.attributes.embed.id));
                    var i, o, a = Vx(i = r) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i,
                        s = tA("div", {
                            id: (o = e.provider, "".concat(o, "-").concat(Math.floor(1e4 * Math.random()))),
                            "data-poster": t.customControls ? e.poster : void 0
                        });
                    if (e.media = oA(s, e.media), t.customControls) {
                        var c = function(e) {
                            return "https://i.ytimg.com/vi/".concat(a, "/").concat(e, "default.jpg")
                        };
                        AO(c("maxres"), 121).catch((function() {
                            return AO(c("sd"), 121)
                        })).catch((function() {
                            return AO(c("hq"))
                        })).then((function(t) {
                            return OO.setPoster.call(e, t.src)
                        })).then((function(t) {
                            t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                        })).catch((function() {}))
                    }
                    e.embed = new window.YT.Player(e.media, {
                        videoId: a,
                        host: BO(t),
                        playerVars: Qx({}, {
                            autoplay: e.config.autoplay ? 1 : 0,
                            hl: e.config.hl,
                            controls: e.supported.ui && t.customControls ? 0 : 1,
                            disablekb: 1,
                            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language,
                            widget_referrer: window ? window.location.href : null
                        }, t),
                        events: {
                            onError: function(t) {
                                if (!e.media.error) {
                                    var n = t.data,
                                        r = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        }[n] || "An unknown error occured";
                                    e.media.error = {
                                        code: n,
                                        message: r
                                    }, EA.call(e, e.media, "error")
                                }
                            },
                            onPlaybackRateChange: function(t) {
                                var n = t.target;
                                e.media.playbackRate = n.getPlaybackRate(), EA.call(e, e.media, "ratechange")
                            },
                            onReady: function(n) {
                                if (!Lx(e.media.play)) {
                                    var r = n.target;
                                    HO.getTitle.call(e, a), e.media.play = function() {
                                        qO.call(e, !0), r.playVideo()
                                    }, e.media.pause = function() {
                                        qO.call(e, !1), r.pauseVideo()
                                    }, e.media.stop = function() {
                                        r.stopVideo()
                                    }, e.media.duration = r.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                        get: function() {
                                            return Number(r.getCurrentTime())
                                        },
                                        set: function(t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, EA.call(e, e.media, "seeking"), r.seekTo(t)
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: function() {
                                            return r.getPlaybackRate()
                                        },
                                        set: function(e) {
                                            r.setPlaybackRate(e)
                                        }
                                    });
                                    var i = e.config.volume;
                                    Object.defineProperty(e.media, "volume", {
                                        get: function() {
                                            return i
                                        },
                                        set: function(t) {
                                            i = t, r.setVolume(100 * i), EA.call(e, e.media, "volumechange")
                                        }
                                    });
                                    var o = e.config.muted;
                                    Object.defineProperty(e.media, "muted", {
                                        get: function() {
                                            return o
                                        },
                                        set: function(t) {
                                            var n = Rx(t) ? t : o;
                                            o = n, r[n ? "mute" : "unMute"](), r.setVolume(100 * i), EA.call(e, e.media, "volumechange")
                                        }
                                    }), Object.defineProperty(e.media, "currentSrc", {
                                        get: function() {
                                            return r.getVideoUrl()
                                        }
                                    }), Object.defineProperty(e.media, "ended", {
                                        get: function() {
                                            return e.currentTime === e.duration
                                        }
                                    });
                                    var s = r.getAvailablePlaybackRates();
                                    e.options.speed = s.filter((function(t) {
                                        return e.config.speed.options.includes(t)
                                    })), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), EA.call(e, e.media, "timeupdate"), EA.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() {
                                        e.media.buffered = r.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && EA.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), EA.call(e, e.media, "canplaythrough"))
                                    }), 200), t.customControls && setTimeout((function() {
                                        return OO.build.call(e)
                                    }), 50)
                                }
                            },
                            onStateChange: function(n) {
                                var r = n.target;
                                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(n.data) && (e.media.seeking = !1, EA.call(e, e.media, "seeked")), n.data) {
                                    case -1:
                                        EA.call(e, e.media, "timeupdate"), e.media.buffered = r.getVideoLoadedFraction(), EA.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        qO.call(e, !1), e.media.loop ? (r.stopVideo(), r.playVideo()) : EA.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (qO.call(e, !0), EA.call(e, e.media, "playing"), e.timers.playing = setInterval((function() {
                                            EA.call(e, e.media, "timeupdate")
                                        }), 50), e.media.duration !== r.getDuration() && (e.media.duration = r.getDuration(), EA.call(e, e.media, "durationchange")));
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(), qO.call(e, !1);
                                        break;
                                    case 3:
                                        EA.call(e, e.media, "waiting")
                                }
                                EA.call(e, e.elements.container, "statechange", !1, {
                                    code: n.data
                                })
                            }
                        }
                    })
                }
            }
        },
        VO = {
            setup: function() {
                this.media ? (cA(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), cA(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && cA(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = tA("div", {
                    class: this.config.classNames.video
                }), Zx(this.media, this.elements.wrapper), this.elements.poster = tA("div", {
                    class: this.config.classNames.poster,
                    hidden: ""
                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? CA.setup.call(this) : this.isYouTube ? HO.setup.call(this) : this.isVimeo && FO.setup.call(this)) : this.debug.warn("No media element found!")
            }
        },
        WO = function() {
            function e(t) {
                var n = this;
                hs(this, e), gs(this, "load", (function() {
                    n.enabled && (Cx(window.google) && Cx(window.google.ima) ? n.ready() : UO(n.player.config.urls.googleIMA.sdk).then((function() {
                        n.ready()
                    })).catch((function() {
                        n.trigger("error", new Error("Google IMA SDK failed to load"))
                    })))
                })), gs(this, "ready", (function() {
                    var e;
                    n.enabled || ((e = n).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), n.startSafetyTimer(12e3, "ready()"), n.managerPromise.then((function() {
                        n.clearSafetyTimer("onAdsManagerLoaded()")
                    })), n.listeners(), n.setupIMA()
                })), gs(this, "setupIMA", (function() {
                    n.elements.container = tA("div", {
                        class: n.player.config.classNames.ads
                    }), n.player.elements.container.appendChild(n.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(n.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(n.player.config.playsinline), n.elements.displayContainer = new google.ima.AdDisplayContainer(n.elements.container, n.player.media), n.loader = new google.ima.AdsLoader(n.elements.displayContainer), n.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(e) {
                        return n.onAdsManagerLoaded(e)
                    }), !1), n.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                        return n.onAdError(e)
                    }), !1), n.requestAds()
                })), gs(this, "requestAds", (function() {
                    var e = n.player.elements.container;
                    try {
                        var t = new google.ima.AdsRequest;
                        t.adTagUrl = n.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!n.player.muted), n.loader.requestAds(t)
                    } catch (e) {
                        n.onAdError(e)
                    }
                })), gs(this, "pollCountdown", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!e) return clearInterval(n.countdownTimer), void n.elements.container.removeAttribute("data-badge-text");
                    var t = function() {
                        var e = hO(Math.max(n.manager.getRemainingTime(), 0)),
                            t = "".concat(rO("advertisement", n.player.config), " - ").concat(e);
                        n.elements.container.setAttribute("data-badge-text", t)
                    };
                    n.countdownTimer = setInterval(t, 100)
                })), gs(this, "onAdsManagerLoaded", (function(e) {
                    if (n.enabled) {
                        var t = new google.ima.AdsRenderingSettings;
                        t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, n.manager = e.getAdsManager(n.player, t), n.cuePoints = n.manager.getCuePoints(), n.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                            return n.onAdError(e)
                        })), Object.keys(google.ima.AdEvent.Type).forEach((function(e) {
                            n.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) {
                                return n.onAdEvent(e)
                            }))
                        })), n.trigger("loaded")
                    }
                })), gs(this, "addCuePoints", (function() {
                    Vx(n.cuePoints) || n.cuePoints.forEach((function(e) {
                        if (0 !== e && -1 !== e && e < n.player.duration) {
                            var t = n.player.elements.progress;
                            if (Ux(t)) {
                                var r = 100 / n.player.duration * e,
                                    i = tA("span", {
                                        class: n.player.config.classNames.cues
                                    });
                                i.style.left = "".concat(r.toString(), "%"), t.appendChild(i)
                            }
                        }
                    }))
                })), gs(this, "onAdEvent", (function(e) {
                    var t = n.player.elements.container,
                        r = e.getAd(),
                        i = e.getAdData();
                    switch (function(e) {
                        EA.call(n.player, n.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                    }(e.type), e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            n.trigger("loaded"), n.pollCountdown(!0), r.isLinear() || (r.width = t.offsetWidth, r.height = t.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                            n.manager.setVolume(n.player.volume);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            n.player.ended ? n.loadAds() : n.loader.contentComplete();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            n.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            n.pollCountdown(), n.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.LOG:
                            i.adError && n.player.debug.warn("Non-fatal ad error: ".concat(i.adError.getMessage()))
                    }
                })), gs(this, "onAdError", (function(e) {
                    n.cancel(), n.player.debug.warn("Ads error", e)
                })), gs(this, "listeners", (function() {
                    var e, t = n.player.elements.container;
                    n.player.on("canplay", (function() {
                        n.addCuePoints()
                    })), n.player.on("ended", (function() {
                        n.loader.contentComplete()
                    })), n.player.on("timeupdate", (function() {
                        e = n.player.currentTime
                    })), n.player.on("seeked", (function() {
                        var t = n.player.currentTime;
                        Vx(n.cuePoints) || n.cuePoints.forEach((function(r, i) {
                            e < r && r < t && (n.manager.discardAdBreak(), n.cuePoints.splice(i, 1))
                        }))
                    })), window.addEventListener("resize", (function() {
                        n.manager && n.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                    }))
                })), gs(this, "play", (function() {
                    var e = n.player.elements.container;
                    n.managerPromise || n.resumeContent(), n.managerPromise.then((function() {
                        n.manager.setVolume(n.player.volume), n.elements.displayContainer.initialize();
                        try {
                            n.initialized || (n.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), n.manager.start()), n.initialized = !0
                        } catch (e) {
                            n.onAdError(e)
                        }
                    })).catch((function() {}))
                })), gs(this, "resumeContent", (function() {
                    n.elements.container.style.zIndex = "", n.playing = !1, TA(n.player.media.play())
                })), gs(this, "pauseContent", (function() {
                    n.elements.container.style.zIndex = 3, n.playing = !0, n.player.media.pause()
                })), gs(this, "cancel", (function() {
                    n.initialized && n.resumeContent(), n.trigger("error"), n.loadAds()
                })), gs(this, "loadAds", (function() {
                    n.managerPromise.then((function() {
                        n.manager && n.manager.destroy(), n.managerPromise = new Promise((function(e) {
                            n.on("loaded", e), n.player.debug.log(n.manager)
                        })), n.initialized = !1, n.requestAds()
                    })).catch((function() {}))
                })), gs(this, "trigger", (function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                    var o = n.events[e];
                    Nx(o) && o.forEach((function(e) {
                        Lx(e) && e.apply(n, r)
                    }))
                })), gs(this, "on", (function(e, t) {
                    return Nx(n.events[e]) || (n.events[e] = []), n.events[e].push(t), n
                })), gs(this, "startSafetyTimer", (function(e, t) {
                    n.player.debug.log("Safety timer invoked from: ".concat(t)), n.safetyTimer = setTimeout((function() {
                        n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                    }), e)
                })), gs(this, "clearSafetyTimer", (function(e) {
                    Ix(n.safetyTimer) || (n.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(n.safetyTimer), n.safetyTimer = null)
                })), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                    container: null,
                    displayContainer: null
                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) {
                    n.on("loaded", e), n.on("error", t)
                })), this.load()
            }
            return ds(e, [{
                key: "enabled",
                get: function() {
                    var e = this.config;
                    return this.player.isHTML5 && this.player.isVideo && e.enabled && (!Vx(e.publisherId) || Hx(e.tagUrl))
                }
            }, {
                key: "tagUrl",
                get: function() {
                    var e = this.config;
                    if (Hx(e.tagUrl)) return e.tagUrl;
                    var t = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: e.publisherId
                    };
                    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(gO(t))
                }
            }]), e
        }(),
        zO = Bv.findIndex,
        YO = "findIndex",
        $O = !0,
        GO = zv(YO);
    YO in [] && Array(1).findIndex((function() {
        $O = !1
    })), hv({
        target: "Array",
        proto: !0,
        forced: $O || !GO
    }, {
        findIndex: function(e) {
            return zO(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), ay(YO);
    var KO = Math.min,
        XO = [].lastIndexOf,
        JO = !!XO && 1 / [1].lastIndexOf(1, -0) < 0,
        QO = cb("lastIndexOf"),
        ZO = zv("indexOf", {
            ACCESSORS: !0,
            1: 0
        }),
        eI = JO || !QO || !ZO ? function(e) {
            if (JO) return XO.apply(this, arguments) || 0;
            var t = Kg(this),
                n = Wm(t.length),
                r = n - 1;
            for (arguments.length > 1 && (r = KO(r, Hm(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in t && t[r] === e) return r || 0;
            return -1
        } : XO;
    hv({
        target: "Array",
        proto: !0,
        forced: eI !== [].lastIndexOf
    }, {
        lastIndexOf: eI
    });
    var tI = function(e, t) {
            var n = {};
            return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n
        },
        nI = function() {
            function e(t) {
                var n = this;
                hs(this, e), gs(this, "load", (function() {
                    n.player.elements.display.seekTooltip && (n.player.elements.display.seekTooltip.hidden = n.enabled), n.enabled && n.getThumbnails().then((function() {
                        n.enabled && (n.render(), n.determineContainerAutoSizing(), n.loaded = !0)
                    }))
                })), gs(this, "getThumbnails", (function() {
                    return new Promise((function(e) {
                        var t = n.player.config.previewThumbnails.src;
                        if (Vx(t)) throw new Error("Missing previewThumbnails.src config attribute");
                        var r = function() {
                            n.thumbnails.sort((function(e, t) {
                                return e.height - t.height
                            })), n.player.debug.log("Preview thumbnails", n.thumbnails), e()
                        };
                        if (Lx(t)) t((function(e) {
                            n.thumbnails = e, r()
                        }));
                        else {
                            var i = (jx(t) ? [t] : t).map((function(e) {
                                return n.getThumbnail(e)
                            }));
                            Promise.all(i).then(r)
                        }
                    }))
                })), gs(this, "getThumbnail", (function(e) {
                    return new Promise((function(t) {
                        oO(e).then((function(r) {
                            var i, o, a = {
                                frames: (i = r, o = [], i.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                                    var t = {};
                                    e.split(/\r\n|\n|\r/).forEach((function(e) {
                                        if (Px(t.startTime)) {
                                            if (!Vx(e.trim()) && Vx(t.text)) {
                                                var n = e.trim().split("#xywh="),
                                                    r = bs(n, 1);
                                                if (t.text = r[0], n[1]) {
                                                    var i = bs(n[1].split(","), 4);
                                                    t.x = i[0], t.y = i[1], t.w = i[2], t.h = i[3]
                                                }
                                            }
                                        } else {
                                            var o = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                            o && (t.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])), t.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
                                        }
                                    })), t.text && o.push(t)
                                })), o),
                                height: null,
                                urlPrefix: ""
                            };
                            a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                            var s = new Image;
                            s.onload = function() {
                                a.height = s.naturalHeight, a.width = s.naturalWidth, n.thumbnails.push(a), t()
                            }, s.src = a.urlPrefix + a.frames[0].text
                        }))
                    }))
                })), gs(this, "startMove", (function(e) {
                    if (n.loaded && Dx(e) && ["touchmove", "mousemove"].includes(e.type) && n.player.media.duration) {
                        if ("touchmove" === e.type) n.seekTime = n.player.media.duration * (n.player.elements.inputs.seek.value / 100);
                        else {
                            var t = n.player.elements.progress.getBoundingClientRect(),
                                r = 100 / t.width * (e.pageX - t.left);
                            n.seekTime = n.player.media.duration * (r / 100), n.seekTime < 0 && (n.seekTime = 0), n.seekTime > n.player.media.duration - 1 && (n.seekTime = n.player.media.duration - 1), n.mousePosX = e.pageX, n.elements.thumb.time.innerText = hO(n.seekTime)
                        }
                        n.showImageAtCurrentTime()
                    }
                })), gs(this, "endMove", (function() {
                    n.toggleThumbContainer(!1, !0)
                })), gs(this, "startScrubbing", (function(e) {
                    (Ix(e.button) || !1 === e.button || 0 === e.button) && (n.mouseDown = !0, n.player.media.duration && (n.toggleScrubbingContainer(!0), n.toggleThumbContainer(!1, !0), n.showImageAtCurrentTime()))
                })), gs(this, "endScrubbing", (function() {
                    n.mouseDown = !1, Math.ceil(n.lastTime) === Math.ceil(n.player.media.currentTime) ? n.toggleScrubbingContainer(!1) : _A.call(n.player, n.player.media, "timeupdate", (function() {
                        n.mouseDown || n.toggleScrubbingContainer(!1)
                    }))
                })), gs(this, "listeners", (function() {
                    n.player.on("play", (function() {
                        n.toggleThumbContainer(!1, !0)
                    })), n.player.on("seeked", (function() {
                        n.toggleThumbContainer(!1)
                    })), n.player.on("timeupdate", (function() {
                        n.lastTime = n.player.media.currentTime
                    }))
                })), gs(this, "render", (function() {
                    n.elements.thumb.container = tA("div", {
                        class: n.player.config.classNames.previewThumbnails.thumbContainer
                    }), n.elements.thumb.imageContainer = tA("div", {
                        class: n.player.config.classNames.previewThumbnails.imageContainer
                    }), n.elements.thumb.container.appendChild(n.elements.thumb.imageContainer);
                    var e = tA("div", {
                        class: n.player.config.classNames.previewThumbnails.timeContainer
                    });
                    n.elements.thumb.time = tA("span", {}, "00:00"), e.appendChild(n.elements.thumb.time), n.elements.thumb.container.appendChild(e), Ux(n.player.elements.progress) && n.player.elements.progress.appendChild(n.elements.thumb.container), n.elements.scrubbing.container = tA("div", {
                        class: n.player.config.classNames.previewThumbnails.scrubbingContainer
                    }), n.player.elements.wrapper.appendChild(n.elements.scrubbing.container)
                })), gs(this, "destroy", (function() {
                    n.elements.thumb.container && n.elements.thumb.container.remove(), n.elements.scrubbing.container && n.elements.scrubbing.container.remove()
                })), gs(this, "showImageAtCurrentTime", (function() {
                    n.mouseDown ? n.setScrubbingContainerSize() : n.setThumbContainerSizeAndPos();
                    var e = n.thumbnails[0].frames.findIndex((function(e) {
                            return n.seekTime >= e.startTime && n.seekTime <= e.endTime
                        })),
                        t = e >= 0,
                        r = 0;
                    n.mouseDown || n.toggleThumbContainer(t), t && (n.thumbnails.forEach((function(t, i) {
                        n.loadedImages.includes(t.frames[e].text) && (r = i)
                    })), e !== n.showingThumb && (n.showingThumb = e, n.loadImage(r)))
                })), gs(this, "loadImage", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = n.showingThumb,
                        r = n.thumbnails[e],
                        i = r.urlPrefix,
                        o = r.frames[t],
                        a = r.frames[t].text,
                        s = i + a;
                    if (n.currentImageElement && n.currentImageElement.dataset.filename === a) n.showImage(n.currentImageElement, o, e, t, a, !1), n.currentImageElement.dataset.index = t, n.removeOldImages(n.currentImageElement);
                    else {
                        n.loadingImage && n.usingSprites && (n.loadingImage.onload = null);
                        var c = new Image;
                        c.src = s, c.dataset.index = t, c.dataset.filename = a, n.showingThumbFilename = a, n.player.debug.log("Loading image: ".concat(s)), c.onload = function() {
                            return n.showImage(c, o, e, t, a, !0)
                        }, n.loadingImage = c, n.removeOldImages(c)
                    }
                })), gs(this, "showImage", (function(e, t, r, i, o) {
                    var a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    n.player.debug.log("Showing thumb: ".concat(o, ". num: ").concat(i, ". qual: ").concat(r, ". newimg: ").concat(a)), n.setImageSizeAndOffset(e, t), a && (n.currentImageContainer.appendChild(e), n.currentImageElement = e, n.loadedImages.includes(o) || n.loadedImages.push(o)), n.preloadNearby(i, !0).then(n.preloadNearby(i, !1)).then(n.getHigherQuality(r, e, t, o))
                })), gs(this, "removeOldImages", (function(e) {
                    Array.from(n.currentImageContainer.children).forEach((function(t) {
                        if ("img" === t.tagName.toLowerCase()) {
                            var r = n.usingSprites ? 500 : 1e3;
                            if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                t.dataset.deleting = !0;
                                var i = n.currentImageContainer;
                                setTimeout((function() {
                                    i.removeChild(t), n.player.debug.log("Removing thumb: ".concat(t.dataset.filename))
                                }), r)
                            }
                        }
                    }))
                })), gs(this, "preloadNearby", (function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return new Promise((function(r) {
                        setTimeout((function() {
                            var i = n.thumbnails[0].frames[e].text;
                            if (n.showingThumbFilename === i) {
                                var o;
                                o = t ? n.thumbnails[0].frames.slice(e) : n.thumbnails[0].frames.slice(0, e).reverse();
                                var a = !1;
                                o.forEach((function(e) {
                                    var t = e.text;
                                    if (t !== i && !n.loadedImages.includes(t)) {
                                        a = !0, n.player.debug.log("Preloading thumb filename: ".concat(t));
                                        var o = n.thumbnails[0].urlPrefix + t,
                                            s = new Image;
                                        s.src = o, s.onload = function() {
                                            n.player.debug.log("Preloaded thumb filename: ".concat(t)), n.loadedImages.includes(t) || n.loadedImages.push(t), r()
                                        }
                                    }
                                })), a || r()
                            }
                        }), 300)
                    }))
                })), gs(this, "getHigherQuality", (function(e, t, r, i) {
                    if (e < n.thumbnails.length - 1) {
                        var o = t.naturalHeight;
                        n.usingSprites && (o = r.h), o < n.thumbContainerHeight && setTimeout((function() {
                            n.showingThumbFilename === i && (n.player.debug.log("Showing higher quality thumb for: ".concat(i)), n.loadImage(e + 1))
                        }), 300)
                    }
                })), gs(this, "toggleThumbContainer", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = n.player.config.classNames.previewThumbnails.thumbContainerShown;
                    n.elements.thumb.container.classList.toggle(r, e), !e && t && (n.showingThumb = null, n.showingThumbFilename = null)
                })), gs(this, "toggleScrubbingContainer", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = n.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                    n.elements.scrubbing.container.classList.toggle(t, e), e || (n.showingThumb = null, n.showingThumbFilename = null)
                })), gs(this, "determineContainerAutoSizing", (function() {
                    (n.elements.thumb.imageContainer.clientHeight > 20 || n.elements.thumb.imageContainer.clientWidth > 20) && (n.sizeSpecifiedInCSS = !0)
                })), gs(this, "setThumbContainerSizeAndPos", (function() {
                    if (n.sizeSpecifiedInCSS) {
                        if (n.elements.thumb.imageContainer.clientHeight > 20 && n.elements.thumb.imageContainer.clientWidth < 20) {
                            var e = Math.floor(n.elements.thumb.imageContainer.clientHeight * n.thumbAspectRatio);
                            n.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                        } else if (n.elements.thumb.imageContainer.clientHeight < 20 && n.elements.thumb.imageContainer.clientWidth > 20) {
                            var t = Math.floor(n.elements.thumb.imageContainer.clientWidth / n.thumbAspectRatio);
                            n.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                        }
                    } else {
                        var r = Math.floor(n.thumbContainerHeight * n.thumbAspectRatio);
                        n.elements.thumb.imageContainer.style.height = "".concat(n.thumbContainerHeight, "px"), n.elements.thumb.imageContainer.style.width = "".concat(r, "px")
                    }
                    n.setThumbContainerPos()
                })), gs(this, "setThumbContainerPos", (function() {
                    var e = n.player.elements.progress.getBoundingClientRect(),
                        t = n.player.elements.container.getBoundingClientRect(),
                        r = n.elements.thumb.container,
                        i = t.left - e.left + 10,
                        o = t.right - e.left - r.clientWidth - 10,
                        a = n.mousePosX - e.left - r.clientWidth / 2;
                    a < i && (a = i), a > o && (a = o), r.style.left = "".concat(a, "px")
                })), gs(this, "setScrubbingContainerSize", (function() {
                    var e = tI(n.thumbAspectRatio, {
                            width: n.player.media.clientWidth,
                            height: n.player.media.clientHeight
                        }),
                        t = e.width,
                        r = e.height;
                    n.elements.scrubbing.container.style.width = "".concat(t, "px"), n.elements.scrubbing.container.style.height = "".concat(r, "px")
                })), gs(this, "setImageSizeAndOffset", (function(e, t) {
                    if (n.usingSprites) {
                        var r = n.thumbContainerHeight / t.h;
                        e.style.height = "".concat(e.naturalHeight * r, "px"), e.style.width = "".concat(e.naturalWidth * r, "px"), e.style.left = "-".concat(t.x * r, "px"), e.style.top = "-".concat(t.y * r, "px")
                    }
                })), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                    thumb: {},
                    scrubbing: {}
                }, this.load()
            }
            return ds(e, [{
                key: "enabled",
                get: function() {
                    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                }
            }, {
                key: "currentImageContainer",
                get: function() {
                    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                }
            }, {
                key: "usingSprites",
                get: function() {
                    return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                }
            }, {
                key: "thumbAspectRatio",
                get: function() {
                    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                }
            }, {
                key: "thumbContainerHeight",
                get: function() {
                    return this.mouseDown ? tI(this.thumbAspectRatio, {
                        width: this.player.media.clientWidth,
                        height: this.player.media.clientHeight
                    }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                }
            }, {
                key: "currentImageElement",
                get: function() {
                    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                },
                set: function(e) {
                    this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                }
            }]), e
        }(),
        rI = {
            insertElements: function(e, t) {
                var n = this;
                jx(t) ? nA(e, this.media, {
                    src: t
                }) : Nx(t) && t.forEach((function(t) {
                    nA(e, n.media, t)
                }))
            },
            change: function(e) {
                var t = this;
                Jx(e, "sources.length") ? (CA.cancelRequests.call(this), this.destroy.call(this, (function() {
                    t.options.quality = [], rA(t.media), t.media = null, Ux(t.elements.container) && t.elements.container.removeAttribute("class");
                    var n = e.sources,
                        r = e.type,
                        i = bs(n, 1)[0],
                        o = i.provider,
                        a = void 0 === o ? wO.html5 : o,
                        s = i.src,
                        c = "html5" === a ? r : "div",
                        u = "html5" === a ? {} : {
                            src: s
                        };
                    Object.assign(t, {
                        provider: a,
                        type: r,
                        supported: mA.check(r, a, t.config.playsinline),
                        media: tA(c, u)
                    }), t.elements.container.appendChild(t.media), Rx(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), Vx(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), OO.addStyleHook.call(t), t.isHTML5 && rI.insertElements.call(t, "source", n), t.config.title = e.title, VO.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && rI.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && OO.build.call(t), t.isHTML5 && t.media.load(), Vx(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new nI(t))), t.fullscreen.update()
                }), !0)) : this.debug.warn("Invalid source format")
            }
        };
    var iI, oI = function() {
        function e(t, n) {
            var r = this;
            if (hs(this, e), gs(this, "play", (function() {
                    return Lx(r.media.play) ? (r.ads && r.ads.enabled && r.ads.managerPromise.then((function() {
                        return r.ads.play()
                    })).catch((function() {
                        return TA(r.media.play())
                    })), r.media.play()) : null
                })), gs(this, "pause", (function() {
                    return r.playing && Lx(r.media.pause) ? r.media.pause() : null
                })), gs(this, "togglePlay", (function(e) {
                    return (Rx(e) ? e : !r.playing) ? r.play() : r.pause()
                })), gs(this, "stop", (function() {
                    r.isHTML5 ? (r.pause(), r.restart()) : Lx(r.media.stop) && r.media.stop()
                })), gs(this, "restart", (function() {
                    r.currentTime = 0
                })), gs(this, "rewind", (function(e) {
                    r.currentTime -= Px(e) ? e : r.config.seekTime
                })), gs(this, "forward", (function(e) {
                    r.currentTime += Px(e) ? e : r.config.seekTime
                })), gs(this, "increaseVolume", (function(e) {
                    var t = r.media.muted ? 0 : r.volume;
                    r.volume = t + (Px(e) ? e : 0)
                })), gs(this, "decreaseVolume", (function(e) {
                    r.increaseVolume(-e)
                })), gs(this, "airplay", (function() {
                    mA.airplay && r.media.webkitShowPlaybackTargetPicker()
                })), gs(this, "toggleControls", (function(e) {
                    if (r.supported.ui && !r.isAudio) {
                        var t = uA(r.elements.container, r.config.classNames.hideControls),
                            n = void 0 === e ? void 0 : !e,
                            i = cA(r.elements.container, r.config.classNames.hideControls, n);
                        if (i && Nx(r.config.controls) && r.config.controls.includes("settings") && !Vx(r.config.settings) && pO.toggleMenu.call(r, !1), i !== t) {
                            var o = i ? "controlshidden" : "controlsshown";
                            EA.call(r, r.media, o)
                        }
                        return !i
                    }
                    return !1
                })), gs(this, "on", (function(e, t) {
                    bA.call(r, r.elements.container, e, t)
                })), gs(this, "once", (function(e, t) {
                    _A.call(r, r.elements.container, e, t)
                })), gs(this, "off", (function(e, t) {
                    wA(r.elements.container, e, t)
                })), gs(this, "destroy", (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (r.ready) {
                        var n = function() {
                            document.body.style.overflow = "", r.embed = null, t ? (Object.keys(r.elements).length && (rA(r.elements.buttons.play), rA(r.elements.captions), rA(r.elements.controls), rA(r.elements.wrapper), r.elements.buttons.play = null, r.elements.captions = null, r.elements.controls = null, r.elements.wrapper = null), Lx(e) && e()) : (SA.call(r), CA.cancelRequests.call(r), oA(r.elements.original, r.elements.container), EA.call(r, r.elements.original, "destroyed", !0), Lx(e) && e.call(r.elements.original), r.ready = !1, setTimeout((function() {
                                r.elements = null, r.media = null
                            }), 200))
                        };
                        r.stop(), clearTimeout(r.timers.loading), clearTimeout(r.timers.controls), clearTimeout(r.timers.resized), r.isHTML5 ? (OO.toggleNativeControls.call(r, !0), n()) : r.isYouTube ? (clearInterval(r.timers.buffering), clearInterval(r.timers.playing), null !== r.embed && Lx(r.embed.destroy) && r.embed.destroy(), n()) : r.isVimeo && (null !== r.embed && r.embed.unload().then(n), setTimeout(n, 200))
                    }
                })), gs(this, "supports", (function(e) {
                    return mA.mime.call(r, e)
                })), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = mA.touch, this.media = t, jx(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Mx(this.media) || Nx(this.media)) && (this.media = this.media[0]), this.config = Qx({}, vO, e.defaults, n || {}, function() {
                    try {
                        return JSON.parse(r.media.getAttribute("data-plyr-config"))
                    } catch (e) {
                        return {}
                    }
                }()), this.elements = {
                    container: null,
                    fullscreen: null,
                    captions: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                        popup: null,
                        menu: null,
                        panels: {},
                        buttons: {}
                    }
                }, this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap
                }, this.fullscreen = {
                    active: !1
                }, this.options = {
                    speed: [],
                    quality: []
                }, this.debug = new kO(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", mA), !Ix(this.media) && Ux(this.media))
                if (this.media.plyr) this.debug.warn("Target already setup");
                else if (this.config.enabled)
                if (mA.check().api) {
                    var i = this.media.cloneNode(!0);
                    i.autoplay = !1, this.elements.original = i;
                    var o = this.media.tagName.toLowerCase(),
                        a = null,
                        s = null;
                    switch (o) {
                        case "div":
                            if (a = this.media.querySelector("iframe"), Ux(a)) {
                                if (s = dO(a.getAttribute("src")), this.provider = function(e) {
                                        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? wO.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? wO.vimeo : null
                                    }(s.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", s.search.length) {
                                    var c = ["1", "true"];
                                    c.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(s.searchParams.get("playsinline")), this.config.youtube.hl = s.searchParams.get("hl")) : this.config.playsinline = !0
                                }
                            } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (Vx(this.provider) || !Object.values(wO).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                            this.type = EO;
                            break;
                        case "video":
                        case "audio":
                            this.type = o, this.provider = wO.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                    }
                    this.supported = mA.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new IO(this), this.storage = new iO(this), this.media.plyr = this, Ux(this.elements.container) || (this.elements.container = tA("div", {
                        tabindex: 0
                    }), Zx(this.media, this.elements.container)), OO.migrateStyles.call(this), OO.addStyleHook.call(this), VO.setup.call(this), this.config.debug && bA.call(this, this.elements.container, this.config.events.join(" "), (function(e) {
                        r.debug.log("event: ".concat(e.type))
                    })), this.fullscreen = new TO(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && OO.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new WO(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (function() {
                        return TA(r.play())
                    })), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new nI(this))) : this.debug.error("Setup failed: no support")
                } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
            else this.debug.error("Setup failed: no suitable element passed")
        }
        return ds(e, [{
            key: "toggleCaptions",
            value: function(e) {
                mO.toggle.call(this, e, !1)
            }
        }, {
            key: "isHTML5",
            get: function() {
                return this.provider === wO.html5
            }
        }, {
            key: "isEmbed",
            get: function() {
                return this.isYouTube || this.isVimeo
            }
        }, {
            key: "isYouTube",
            get: function() {
                return this.provider === wO.youtube
            }
        }, {
            key: "isVimeo",
            get: function() {
                return this.provider === wO.vimeo
            }
        }, {
            key: "isVideo",
            get: function() {
                return this.type === EO
            }
        }, {
            key: "isAudio",
            get: function() {
                return this.type === _O
            }
        }, {
            key: "playing",
            get: function() {
                return Boolean(this.ready && !this.paused && !this.ended)
            }
        }, {
            key: "paused",
            get: function() {
                return Boolean(this.media.paused)
            }
        }, {
            key: "stopped",
            get: function() {
                return Boolean(this.paused && 0 === this.currentTime)
            }
        }, {
            key: "ended",
            get: function() {
                return Boolean(this.media.ended)
            }
        }, {
            key: "currentTime",
            set: function(e) {
                if (this.duration) {
                    var t = Px(e) && e > 0;
                    this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                }
            },
            get: function() {
                return Number(this.media.currentTime)
            }
        }, {
            key: "buffered",
            get: function() {
                var e = this.media.buffered;
                return Px(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
            }
        }, {
            key: "seeking",
            get: function() {
                return Boolean(this.media.seeking)
            }
        }, {
            key: "duration",
            get: function() {
                var e = parseFloat(this.config.duration),
                    t = (this.media || {}).duration,
                    n = Px(t) && t !== 1 / 0 ? t : 0;
                return e || n
            }
        }, {
            key: "volume",
            set: function(e) {
                var t = e;
                jx(t) && (t = Number(t)), Px(t) || (t = this.storage.get("volume")), Px(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !Vx(e) && this.muted && t > 0 && (this.muted = !1)
            },
            get: function() {
                return Number(this.media.volume)
            }
        }, {
            key: "muted",
            set: function(e) {
                var t = e;
                Rx(t) || (t = this.storage.get("muted")), Rx(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            },
            get: function() {
                return Boolean(this.media.muted)
            }
        }, {
            key: "hasAudio",
            get: function() {
                return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
            }
        }, {
            key: "speed",
            set: function(e) {
                var t = this,
                    n = null;
                Px(e) && (n = e), Px(n) || (n = this.storage.get("speed")), Px(n) || (n = this.config.speed.selected);
                var r = this.minimumSpeed,
                    i = this.maximumSpeed;
                n = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                    return Math.min(Math.max(e, t), n)
                }(n, r, i), this.config.speed.selected = n, setTimeout((function() {
                    t.media.playbackRate = n
                }), 0)
            },
            get: function() {
                return Number(this.media.playbackRate)
            }
        }, {
            key: "minimumSpeed",
            get: function() {
                return this.isYouTube ? Math.min.apply(Math, ws(this.options.speed)) : this.isVimeo ? .5 : .0625
            }
        }, {
            key: "maximumSpeed",
            get: function() {
                return this.isYouTube ? Math.max.apply(Math, ws(this.options.speed)) : this.isVimeo ? 2 : 16
            }
        }, {
            key: "quality",
            set: function(e) {
                var t = this.config.quality,
                    n = this.options.quality;
                if (n.length) {
                    var r = [!Vx(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(Px),
                        i = !0;
                    if (!n.includes(r)) {
                        var o = function(e, t) {
                            return Nx(e) && e.length ? e.reduce((function(e, n) {
                                return Math.abs(n - t) < Math.abs(e - t) ? n : e
                            })) : null
                        }(n, r);
                        this.debug.warn("Unsupported quality option: ".concat(r, ", using ").concat(o, " instead")), r = o, i = !1
                    }
                    t.selected = r, this.media.quality = r, i && this.storage.set({
                        quality: r
                    })
                }
            },
            get: function() {
                return this.media.quality
            }
        }, {
            key: "loop",
            set: function(e) {
                var t = Rx(e) ? e : this.config.loop.active;
                this.config.loop.active = t, this.media.loop = t
            },
            get: function() {
                return Boolean(this.media.loop)
            }
        }, {
            key: "source",
            set: function(e) {
                rI.change.call(this, e)
            },
            get: function() {
                return this.media.currentSrc
            }
        }, {
            key: "download",
            get: function() {
                var e = this.config.urls.download;
                return Hx(e) ? e : this.source
            },
            set: function(e) {
                Hx(e) && (this.config.urls.download = e, pO.setDownloadUrl.call(this))
            }
        }, {
            key: "poster",
            set: function(e) {
                this.isVideo ? OO.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video")
            },
            get: function() {
                return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
            }
        }, {
            key: "ratio",
            get: function() {
                if (!this.isVideo) return null;
                var e = AA(OA.call(this));
                return Nx(e) ? e.join(":") : e
            },
            set: function(e) {
                this.isVideo ? jx(e) && xA(e) ? (this.config.ratio = e, IA.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
            }
        }, {
            key: "autoplay",
            set: function(e) {
                var t = Rx(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            },
            get: function() {
                return Boolean(this.config.autoplay)
            }
        }, {
            key: "currentTrack",
            set: function(e) {
                mO.set.call(this, e, !1)
            },
            get: function() {
                var e = this.captions,
                    t = e.toggled,
                    n = e.currentTrack;
                return t ? n : -1
            }
        }, {
            key: "language",
            set: function(e) {
                mO.setLanguage.call(this, e, !1)
            },
            get: function() {
                return (mO.getCurrentTrack.call(this) || {}).language
            }
        }, {
            key: "pip",
            set: function(e) {
                if (mA.pip) {
                    var t = Rx(e) ? e : !this.pip;
                    Lx(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? yO : bO), Lx(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                }
            },
            get: function() {
                return mA.pip ? Vx(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === yO : null
            }
        }], [{
            key: "supported",
            value: function(e, t, n) {
                return mA.check(e, t, n)
            }
        }, {
            key: "loadSprite",
            value: function(e, t) {
                return aO(e, t)
            }
        }, {
            key: "setup",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = null;
                return jx(t) ? r = Array.from(document.querySelectorAll(t)) : Mx(t) ? r = Array.from(t) : Nx(t) && (r = t.filter(Ux)), Vx(r) ? null : r.map((function(t) {
                    return new e(t, n)
                }))
            }
        }]), e
    }();
    oI.defaults = (iI = vO, JSON.parse(JSON.stringify(iI)));
    var aI, sI = {
            video: {
                type: "video",
                title: "View From A Blue Moon",
                sources: [{
                    src: "../videos/Warning_2021_720p.mp4",
                    type: "video/mp4",
                    size: 576
                }, {
                    src: "../videos/Warning_2021_720p.mp4",
                    type: "video/mp4",
                    size: 720
                }, {
                    src: "../videos/Warning_2021_1080p.mp4",
                    type: "video/mp4",
                    size: 1080
                }],

                poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",

                previewThumbnails: {
                    src: ["https://cdn.plyr.io/static/demo/thumbs/100p.vtt", "https://cdn.plyr.io/static/demo/thumbs/240p.vtt"]
                }
            },
        },
        cI = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return e && e.classList[n ? "add" : "remove"](t)
        };
    aI = "plyr.io", window.location.host === aI && Cd({
        dsn: "https://d4ad9866ad834437a4754e23937071e4@sentry.io/305555",
        whitelistUrls: [aI].map((function(e) {
            return new RegExp("https://(([a-z0-9])+(.))*".concat(e))
        }))
    }), document.addEventListener("DOMContentLoaded", (function() {
        Ng.setup(".js-shr", {
            count: {
                className: "button__count"
            },
            wrapper: {
                className: "button--with-count"
            }
        });
        var e = new oI("#player", {
            debug: !0,
            title: "View From A Blue Moon",
            iconUrl: "https://cdn.plyr.io/3.6.4/demo.svg",
            keyboard: {
                global: !0
            },
            tooltips: {
                controls: !0
            },
            captions: {
                active: !0
            },
            ads: {
                enabled: window.location.host.includes(aI),
                publisherId: "918848828995742"
            },
            previewThumbnails: {
                enabled: !0,
                src: ["https://cdn.plyr.io/static/demo/thumbs/100p.vtt", "https://cdn.plyr.io/static/demo/thumbs/240p.vtt"]
            },
            vimeo: {
                referrerPolicy: "no-referrer"
            }
        });
        window.player = e;
        var t = document.querySelectorAll("[data-source]"),
            n = Object.keys(sI),
            r = Boolean(window.history && window.history.pushState),
            i = window.location.hash.substring(1),
            o = i.length;

        function a(e) {
            Array.from(t).forEach((function(e) {
                return cI(e.parentElement, "active", !1)
            })), cI(document.querySelector('[data-source="'.concat(e, '"]')), "active", !0), Array.from(document.querySelectorAll(".plyr__cite")).forEach((function(e) {
                e.hidden = !0
            })), document.querySelector(".plyr__cite--".concat(e)).hidden = !1
        }

        function s(t, r) {
            !n.includes(t) || !r && t === i || !i.length && "video" === t || (e.source = sI[t], i = t, a(t))
        }
        Array.from(t).forEach((function(e) {
            e.addEventListener("click", (function() {
                var t = e.getAttribute("data-source");
                s(t), r && window.history.pushState({
                    type: t
                }, "", "#".concat(t))
            }))
        })), window.addEventListener("popstate", (function(e) {
            e.state && Object.keys(e.state).includes("type") && s(e.state.type)
        })), o || (i = "video"), r && n.includes(i) && window.history.replaceState({
            type: i
        }, "", o ? "#".concat(i) : ""), "video" !== i && s(i, !0), a(i)
    }))
}();