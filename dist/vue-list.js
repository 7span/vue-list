const ar = {
  componentPrefix: "V",
  requestHandler() {
    return new Promise((e, t) => {
      e([]);
    });
  },
  itemProps: {},
  typeAdapters: {}
};
var ir = typeof global == "object" && global && global.Object === Object && global;
const pt = ir;
var or = typeof self == "object" && self && self.Object === Object && self, ur = pt || or || Function("return this")();
const m = ur;
var cr = m.Symbol;
const S = cr;
var ht = Object.prototype, lr = ht.hasOwnProperty, fr = ht.toString, H = S ? S.toStringTag : void 0;
function dr(e) {
  var t = lr.call(e, H), r = e[H];
  try {
    e[H] = void 0;
    var n = !0;
  } catch {
  }
  var a = fr.call(e);
  return n && (t ? e[H] = r : delete e[H]), a;
}
var pr = Object.prototype, hr = pr.toString;
function gr(e) {
  return hr.call(e);
}
var _r = "[object Null]", vr = "[object Undefined]", Se = S ? S.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? vr : _r : Se && Se in Object(e) ? dr(e) : gr(e);
}
function C(e) {
  return e != null && typeof e == "object";
}
var br = "[object Symbol]";
function gt(e) {
  return typeof e == "symbol" || C(e) && z(e) == br;
}
function yr(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var $r = Array.isArray;
const U = $r;
var mr = 1 / 0, Pe = S ? S.prototype : void 0, Te = Pe ? Pe.toString : void 0;
function _t(e) {
  if (typeof e == "string")
    return e;
  if (U(e))
    return yr(e, _t) + "";
  if (gt(e))
    return Te ? Te.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -mr ? "-0" : t;
}
var xr = /\s/;
function Sr(e) {
  for (var t = e.length; t-- && xr.test(e.charAt(t)); )
    ;
  return t;
}
var Pr = /^\s+/;
function Tr(e) {
  return e && e.slice(0, Sr(e) + 1).replace(Pr, "");
}
function w(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ae = 0 / 0, Ar = /^[-+]0x[0-9a-f]+$/i, Or = /^0b[01]+$/i, jr = /^0o[0-7]+$/i, Cr = parseInt;
function Oe(e) {
  if (typeof e == "number")
    return e;
  if (gt(e))
    return Ae;
  if (w(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = w(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Tr(e);
  var r = Or.test(e);
  return r || jr.test(e) ? Cr(e.slice(2), r ? 2 : 8) : Ar.test(e) ? Ae : +e;
}
var wr = "[object AsyncFunction]", Mr = "[object Function]", Er = "[object GeneratorFunction]", Lr = "[object Proxy]";
function vt(e) {
  if (!w(e))
    return !1;
  var t = z(e);
  return t == Mr || t == Er || t == wr || t == Lr;
}
var Rr = m["__core-js_shared__"];
const ne = Rr;
var je = function() {
  var e = /[^.]+$/.exec(ne && ne.keys && ne.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ir(e) {
  return !!je && je in e;
}
var Fr = Function.prototype, Dr = Fr.toString;
function R(e) {
  if (e != null) {
    try {
      return Dr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Nr = /[\\^$.*+?()[\]{}|]/g, Ur = /^\[object .+?Constructor\]$/, Br = Function.prototype, zr = Object.prototype, Gr = Br.toString, Hr = zr.hasOwnProperty, Wr = RegExp(
  "^" + Gr.call(Hr).replace(Nr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qr(e) {
  if (!w(e) || Ir(e))
    return !1;
  var t = vt(e) ? Wr : Ur;
  return t.test(R(e));
}
function Zr(e, t) {
  return e == null ? void 0 : e[t];
}
function I(e, t) {
  var r = Zr(e, t);
  return qr(r) ? r : void 0;
}
var Kr = I(m, "WeakMap");
const oe = Kr;
var Ce = Object.create, kr = function() {
  function e() {
  }
  return function(t) {
    if (!w(t))
      return {};
    if (Ce)
      return Ce(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
const Jr = kr;
function Yr(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Xr = function() {
  try {
    var e = I(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const we = Xr;
function Qr(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Vr = 9007199254740991, en = /^(?:0|[1-9]\d*)$/;
function tn(e, t) {
  var r = typeof e;
  return t = t ?? Vr, !!t && (r == "number" || r != "symbol" && en.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function bt(e, t, r) {
  t == "__proto__" && we ? we(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function he(e, t) {
  return e === t || e !== e && t !== t;
}
var rn = Object.prototype, nn = rn.hasOwnProperty;
function yt(e, t, r) {
  var n = e[t];
  (!(nn.call(e, t) && he(n, r)) || r === void 0 && !(t in e)) && bt(e, t, r);
}
function ee(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var o = t[s], u = n ? n(r[o], e[o], o, r, e) : void 0;
    u === void 0 && (u = e[o]), a ? bt(r, o, u) : yt(r, o, u);
  }
  return r;
}
var sn = 9007199254740991;
function $t(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sn;
}
function mt(e) {
  return e != null && $t(e.length) && !vt(e);
}
var an = Object.prototype;
function ge(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || an;
  return e === r;
}
function on(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var un = "[object Arguments]";
function Me(e) {
  return C(e) && z(e) == un;
}
var xt = Object.prototype, cn = xt.hasOwnProperty, ln = xt.propertyIsEnumerable, fn = Me(function() {
  return arguments;
}()) ? Me : function(e) {
  return C(e) && cn.call(e, "callee") && !ln.call(e, "callee");
};
const dn = fn;
function pn() {
  return !1;
}
var St = typeof exports == "object" && exports && !exports.nodeType && exports, Ee = St && typeof module == "object" && module && !module.nodeType && module, hn = Ee && Ee.exports === St, Le = hn ? m.Buffer : void 0, gn = Le ? Le.isBuffer : void 0, _n = gn || pn;
const X = _n;
var vn = "[object Arguments]", bn = "[object Array]", yn = "[object Boolean]", $n = "[object Date]", mn = "[object Error]", xn = "[object Function]", Sn = "[object Map]", Pn = "[object Number]", Tn = "[object Object]", An = "[object RegExp]", On = "[object Set]", jn = "[object String]", Cn = "[object WeakMap]", wn = "[object ArrayBuffer]", Mn = "[object DataView]", En = "[object Float32Array]", Ln = "[object Float64Array]", Rn = "[object Int8Array]", In = "[object Int16Array]", Fn = "[object Int32Array]", Dn = "[object Uint8Array]", Nn = "[object Uint8ClampedArray]", Un = "[object Uint16Array]", Bn = "[object Uint32Array]", p = {};
p[En] = p[Ln] = p[Rn] = p[In] = p[Fn] = p[Dn] = p[Nn] = p[Un] = p[Bn] = !0;
p[vn] = p[bn] = p[wn] = p[yn] = p[Mn] = p[$n] = p[mn] = p[xn] = p[Sn] = p[Pn] = p[Tn] = p[An] = p[On] = p[jn] = p[Cn] = !1;
function zn(e) {
  return C(e) && $t(e.length) && !!p[z(e)];
}
function _e(e) {
  return function(t) {
    return e(t);
  };
}
var Pt = typeof exports == "object" && exports && !exports.nodeType && exports, W = Pt && typeof module == "object" && module && !module.nodeType && module, Gn = W && W.exports === Pt, se = Gn && pt.process, Hn = function() {
  try {
    var e = W && W.require && W.require("util").types;
    return e || se && se.binding && se.binding("util");
  } catch {
  }
}();
const B = Hn;
var Re = B && B.isTypedArray, Wn = Re ? _e(Re) : zn;
const Tt = Wn;
var qn = Object.prototype, Zn = qn.hasOwnProperty;
function At(e, t) {
  var r = U(e), n = !r && dn(e), a = !r && !n && X(e), s = !r && !n && !a && Tt(e), i = r || n || a || s, o = i ? on(e.length, String) : [], u = o.length;
  for (var c in e)
    (t || Zn.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    tn(c, u))) && o.push(c);
  return o;
}
function Ot(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Kn = Ot(Object.keys, Object);
const kn = Kn;
var Jn = Object.prototype, Yn = Jn.hasOwnProperty;
function Xn(e) {
  if (!ge(e))
    return kn(e);
  var t = [];
  for (var r in Object(e))
    Yn.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ve(e) {
  return mt(e) ? At(e) : Xn(e);
}
function Qn(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Vn = Object.prototype, es = Vn.hasOwnProperty;
function ts(e) {
  if (!w(e))
    return Qn(e);
  var t = ge(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !es.call(e, n)) || r.push(n);
  return r;
}
function be(e) {
  return mt(e) ? At(e, !0) : ts(e);
}
var rs = I(Object, "create");
const q = rs;
function ns() {
  this.__data__ = q ? q(null) : {}, this.size = 0;
}
function ss(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var as = "__lodash_hash_undefined__", is = Object.prototype, os = is.hasOwnProperty;
function us(e) {
  var t = this.__data__;
  if (q) {
    var r = t[e];
    return r === as ? void 0 : r;
  }
  return os.call(t, e) ? t[e] : void 0;
}
var cs = Object.prototype, ls = cs.hasOwnProperty;
function fs(e) {
  var t = this.__data__;
  return q ? t[e] !== void 0 : ls.call(t, e);
}
var ds = "__lodash_hash_undefined__";
function ps(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = q && t === void 0 ? ds : t, this;
}
function L(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
L.prototype.clear = ns;
L.prototype.delete = ss;
L.prototype.get = us;
L.prototype.has = fs;
L.prototype.set = ps;
function hs() {
  this.__data__ = [], this.size = 0;
}
function te(e, t) {
  for (var r = e.length; r--; )
    if (he(e[r][0], t))
      return r;
  return -1;
}
var gs = Array.prototype, _s = gs.splice;
function vs(e) {
  var t = this.__data__, r = te(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : _s.call(t, r, 1), --this.size, !0;
}
function bs(e) {
  var t = this.__data__, r = te(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ys(e) {
  return te(this.__data__, e) > -1;
}
function $s(e, t) {
  var r = this.__data__, n = te(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function T(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = hs;
T.prototype.delete = vs;
T.prototype.get = bs;
T.prototype.has = ys;
T.prototype.set = $s;
var ms = I(m, "Map");
const Z = ms;
function xs() {
  this.size = 0, this.__data__ = {
    hash: new L(),
    map: new (Z || T)(),
    string: new L()
  };
}
function Ss(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function re(e, t) {
  var r = e.__data__;
  return Ss(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ps(e) {
  var t = re(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ts(e) {
  return re(this, e).get(e);
}
function As(e) {
  return re(this, e).has(e);
}
function Os(e, t) {
  var r = re(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function F(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
F.prototype.clear = xs;
F.prototype.delete = Ps;
F.prototype.get = Ts;
F.prototype.has = As;
F.prototype.set = Os;
function ye(e) {
  return e == null ? "" : _t(e);
}
function jt(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var js = Ot(Object.getPrototypeOf, Object);
const Ct = js;
function Cs(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++n < a; )
    s[n] = e[n + t];
  return s;
}
function ws(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : Cs(e, t, r);
}
var Ms = "\\ud800-\\udfff", Es = "\\u0300-\\u036f", Ls = "\\ufe20-\\ufe2f", Rs = "\\u20d0-\\u20ff", Is = Es + Ls + Rs, Fs = "\\ufe0e\\ufe0f", Ds = "\\u200d", Ns = RegExp("[" + Ds + Ms + Is + Fs + "]");
function wt(e) {
  return Ns.test(e);
}
function Us(e) {
  return e.split("");
}
var Mt = "\\ud800-\\udfff", Bs = "\\u0300-\\u036f", zs = "\\ufe20-\\ufe2f", Gs = "\\u20d0-\\u20ff", Hs = Bs + zs + Gs, Ws = "\\ufe0e\\ufe0f", qs = "[" + Mt + "]", ue = "[" + Hs + "]", ce = "\\ud83c[\\udffb-\\udfff]", Zs = "(?:" + ue + "|" + ce + ")", Et = "[^" + Mt + "]", Lt = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rt = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ks = "\\u200d", It = Zs + "?", Ft = "[" + Ws + "]?", ks = "(?:" + Ks + "(?:" + [Et, Lt, Rt].join("|") + ")" + Ft + It + ")*", Js = Ft + It + ks, Ys = "(?:" + [Et + ue + "?", ue, Lt, Rt, qs].join("|") + ")", Xs = RegExp(ce + "(?=" + ce + ")|" + Ys + Js, "g");
function Qs(e) {
  return e.match(Xs) || [];
}
function Vs(e) {
  return wt(e) ? Qs(e) : Us(e);
}
function ea(e) {
  return function(t) {
    t = ye(t);
    var r = wt(t) ? Vs(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? ws(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var ta = ea("toUpperCase");
const ra = ta;
function na(e, t, r, n) {
  var a = -1, s = e == null ? 0 : e.length;
  for (n && s && (r = e[++a]); ++a < s; )
    r = t(r, e[a], a, e);
  return r;
}
function sa(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var aa = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, ia = sa(aa);
const oa = ia;
var ua = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ca = "\\u0300-\\u036f", la = "\\ufe20-\\ufe2f", fa = "\\u20d0-\\u20ff", da = ca + la + fa, pa = "[" + da + "]", ha = RegExp(pa, "g");
function ga(e) {
  return e = ye(e), e && e.replace(ua, oa).replace(ha, "");
}
var _a = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function va(e) {
  return e.match(_a) || [];
}
var ba = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function ya(e) {
  return ba.test(e);
}
var Dt = "\\ud800-\\udfff", $a = "\\u0300-\\u036f", ma = "\\ufe20-\\ufe2f", xa = "\\u20d0-\\u20ff", Sa = $a + ma + xa, Nt = "\\u2700-\\u27bf", Ut = "a-z\\xdf-\\xf6\\xf8-\\xff", Pa = "\\xac\\xb1\\xd7\\xf7", Ta = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Aa = "\\u2000-\\u206f", Oa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bt = "A-Z\\xc0-\\xd6\\xd8-\\xde", ja = "\\ufe0e\\ufe0f", zt = Pa + Ta + Aa + Oa, Gt = "['’]", Ie = "[" + zt + "]", Ca = "[" + Sa + "]", Ht = "\\d+", wa = "[" + Nt + "]", Wt = "[" + Ut + "]", qt = "[^" + Dt + zt + Ht + Nt + Ut + Bt + "]", Ma = "\\ud83c[\\udffb-\\udfff]", Ea = "(?:" + Ca + "|" + Ma + ")", La = "[^" + Dt + "]", Zt = "(?:\\ud83c[\\udde6-\\uddff]){2}", Kt = "[\\ud800-\\udbff][\\udc00-\\udfff]", N = "[" + Bt + "]", Ra = "\\u200d", Fe = "(?:" + Wt + "|" + qt + ")", Ia = "(?:" + N + "|" + qt + ")", De = "(?:" + Gt + "(?:d|ll|m|re|s|t|ve))?", Ne = "(?:" + Gt + "(?:D|LL|M|RE|S|T|VE))?", kt = Ea + "?", Jt = "[" + ja + "]?", Fa = "(?:" + Ra + "(?:" + [La, Zt, Kt].join("|") + ")" + Jt + kt + ")*", Da = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Na = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ua = Jt + kt + Fa, Ba = "(?:" + [wa, Zt, Kt].join("|") + ")" + Ua, za = RegExp([
  N + "?" + Wt + "+" + De + "(?=" + [Ie, N, "$"].join("|") + ")",
  Ia + "+" + Ne + "(?=" + [Ie, N + Fe, "$"].join("|") + ")",
  N + "?" + Fe + "+" + De,
  N + "+" + Ne,
  Na,
  Da,
  Ht,
  Ba
].join("|"), "g");
function Ga(e) {
  return e.match(za) || [];
}
function Ha(e, t, r) {
  return e = ye(e), t = r ? void 0 : t, t === void 0 ? ya(e) ? Ga(e) : va(e) : e.match(t) || [];
}
var Wa = "['’]", qa = RegExp(Wa, "g");
function Za(e) {
  return function(t) {
    return na(Ha(ga(t).replace(qa, "")), e, "");
  };
}
function Ka() {
  this.__data__ = new T(), this.size = 0;
}
function ka(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Ja(e) {
  return this.__data__.get(e);
}
function Ya(e) {
  return this.__data__.has(e);
}
var Xa = 200;
function Qa(e, t) {
  var r = this.__data__;
  if (r instanceof T) {
    var n = r.__data__;
    if (!Z || n.length < Xa - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new F(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function P(e) {
  var t = this.__data__ = new T(e);
  this.size = t.size;
}
P.prototype.clear = Ka;
P.prototype.delete = ka;
P.prototype.get = Ja;
P.prototype.has = Ya;
P.prototype.set = Qa;
function Va(e, t) {
  return e && ee(t, ve(t), e);
}
function ei(e, t) {
  return e && ee(t, be(t), e);
}
var Yt = typeof exports == "object" && exports && !exports.nodeType && exports, Ue = Yt && typeof module == "object" && module && !module.nodeType && module, ti = Ue && Ue.exports === Yt, Be = ti ? m.Buffer : void 0, ze = Be ? Be.allocUnsafe : void 0;
function ri(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = ze ? ze(r) : new e.constructor(r);
  return e.copy(n), n;
}
function ni(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (s[a++] = i);
  }
  return s;
}
function Xt() {
  return [];
}
var si = Object.prototype, ai = si.propertyIsEnumerable, Ge = Object.getOwnPropertySymbols, ii = Ge ? function(e) {
  return e == null ? [] : (e = Object(e), ni(Ge(e), function(t) {
    return ai.call(e, t);
  }));
} : Xt;
const $e = ii;
function oi(e, t) {
  return ee(e, $e(e), t);
}
var ui = Object.getOwnPropertySymbols, ci = ui ? function(e) {
  for (var t = []; e; )
    jt(t, $e(e)), e = Ct(e);
  return t;
} : Xt;
const Qt = ci;
function li(e, t) {
  return ee(e, Qt(e), t);
}
function Vt(e, t, r) {
  var n = t(e);
  return U(e) ? n : jt(n, r(e));
}
function le(e) {
  return Vt(e, ve, $e);
}
function fi(e) {
  return Vt(e, be, Qt);
}
var di = I(m, "DataView");
const fe = di;
var pi = I(m, "Promise");
const de = pi;
var hi = I(m, "Set");
const pe = hi;
var He = "[object Map]", gi = "[object Object]", We = "[object Promise]", qe = "[object Set]", Ze = "[object WeakMap]", Ke = "[object DataView]", _i = R(fe), vi = R(Z), bi = R(de), yi = R(pe), $i = R(oe), E = z;
(fe && E(new fe(new ArrayBuffer(1))) != Ke || Z && E(new Z()) != He || de && E(de.resolve()) != We || pe && E(new pe()) != qe || oe && E(new oe()) != Ze) && (E = function(e) {
  var t = z(e), r = t == gi ? e.constructor : void 0, n = r ? R(r) : "";
  if (n)
    switch (n) {
      case _i:
        return Ke;
      case vi:
        return He;
      case bi:
        return We;
      case yi:
        return qe;
      case $i:
        return Ze;
    }
  return t;
});
const K = E;
var mi = Object.prototype, xi = mi.hasOwnProperty;
function Si(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && xi.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Pi = m.Uint8Array;
const Q = Pi;
function me(e) {
  var t = new e.constructor(e.byteLength);
  return new Q(t).set(new Q(e)), t;
}
function Ti(e, t) {
  var r = t ? me(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Ai = /\w*$/;
function Oi(e) {
  var t = new e.constructor(e.source, Ai.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ke = S ? S.prototype : void 0, Je = ke ? ke.valueOf : void 0;
function ji(e) {
  return Je ? Object(Je.call(e)) : {};
}
function Ci(e, t) {
  var r = t ? me(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var wi = "[object Boolean]", Mi = "[object Date]", Ei = "[object Map]", Li = "[object Number]", Ri = "[object RegExp]", Ii = "[object Set]", Fi = "[object String]", Di = "[object Symbol]", Ni = "[object ArrayBuffer]", Ui = "[object DataView]", Bi = "[object Float32Array]", zi = "[object Float64Array]", Gi = "[object Int8Array]", Hi = "[object Int16Array]", Wi = "[object Int32Array]", qi = "[object Uint8Array]", Zi = "[object Uint8ClampedArray]", Ki = "[object Uint16Array]", ki = "[object Uint32Array]";
function Ji(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Ni:
      return me(e);
    case wi:
    case Mi:
      return new n(+e);
    case Ui:
      return Ti(e, r);
    case Bi:
    case zi:
    case Gi:
    case Hi:
    case Wi:
    case qi:
    case Zi:
    case Ki:
    case ki:
      return Ci(e, r);
    case Ei:
      return new n();
    case Li:
    case Fi:
      return new n(e);
    case Ri:
      return Oi(e);
    case Ii:
      return new n();
    case Di:
      return ji(e);
  }
}
function Yi(e) {
  return typeof e.constructor == "function" && !ge(e) ? Jr(Ct(e)) : {};
}
var Xi = "[object Map]";
function Qi(e) {
  return C(e) && K(e) == Xi;
}
var Ye = B && B.isMap, Vi = Ye ? _e(Ye) : Qi;
const eo = Vi;
var to = "[object Set]";
function ro(e) {
  return C(e) && K(e) == to;
}
var Xe = B && B.isSet, no = Xe ? _e(Xe) : ro;
const so = no;
var ao = 1, io = 2, oo = 4, er = "[object Arguments]", uo = "[object Array]", co = "[object Boolean]", lo = "[object Date]", fo = "[object Error]", tr = "[object Function]", po = "[object GeneratorFunction]", ho = "[object Map]", go = "[object Number]", rr = "[object Object]", _o = "[object RegExp]", vo = "[object Set]", bo = "[object String]", yo = "[object Symbol]", $o = "[object WeakMap]", mo = "[object ArrayBuffer]", xo = "[object DataView]", So = "[object Float32Array]", Po = "[object Float64Array]", To = "[object Int8Array]", Ao = "[object Int16Array]", Oo = "[object Int32Array]", jo = "[object Uint8Array]", Co = "[object Uint8ClampedArray]", wo = "[object Uint16Array]", Mo = "[object Uint32Array]", d = {};
d[er] = d[uo] = d[mo] = d[xo] = d[co] = d[lo] = d[So] = d[Po] = d[To] = d[Ao] = d[Oo] = d[ho] = d[go] = d[rr] = d[_o] = d[vo] = d[bo] = d[yo] = d[jo] = d[Co] = d[wo] = d[Mo] = !0;
d[fo] = d[tr] = d[$o] = !1;
function Y(e, t, r, n, a, s) {
  var i, o = t & ao, u = t & io, c = t & oo;
  if (r && (i = a ? r(e, n, a, s) : r(e)), i !== void 0)
    return i;
  if (!w(e))
    return e;
  var b = U(e);
  if (b) {
    if (i = Si(e), !o)
      return Yr(e, i);
  } else {
    var f = K(e), l = f == tr || f == po;
    if (X(e))
      return ri(e, o);
    if (f == rr || f == er || l && !a) {
      if (i = u || l ? {} : Yi(e), !o)
        return u ? li(e, ei(i, e)) : oi(e, Va(i, e));
    } else {
      if (!d[f])
        return a ? e : {};
      i = Ji(e, f, o);
    }
  }
  s || (s = new P());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, i), so(e) ? e.forEach(function(h) {
    i.add(Y(h, t, r, h, e, s));
  }) : eo(e) && e.forEach(function(h, g) {
    i.set(g, Y(h, t, r, g, e, s));
  });
  var _ = c ? u ? fi : le : u ? be : ve, $ = b ? void 0 : _(e);
  return Qr($ || e, function(h, g) {
    $ && (g = h, h = e[g]), yt(i, g, Y(h, t, r, g, e, s));
  }), i;
}
var Eo = 1, Lo = 4;
function Ro(e) {
  return Y(e, Eo | Lo);
}
var Io = "__lodash_hash_undefined__";
function Fo(e) {
  return this.__data__.set(e, Io), this;
}
function Do(e) {
  return this.__data__.has(e);
}
function V(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new F(); ++t < r; )
    this.add(e[t]);
}
V.prototype.add = V.prototype.push = Fo;
V.prototype.has = Do;
function No(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Uo(e, t) {
  return e.has(t);
}
var Bo = 1, zo = 2;
function nr(e, t, r, n, a, s) {
  var i = r & Bo, o = e.length, u = t.length;
  if (o != u && !(i && u > o))
    return !1;
  var c = s.get(e), b = s.get(t);
  if (c && b)
    return c == t && b == e;
  var f = -1, l = !0, y = r & zo ? new V() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < o; ) {
    var _ = e[f], $ = t[f];
    if (n)
      var h = i ? n($, _, f, t, e, s) : n(_, $, f, e, t, s);
    if (h !== void 0) {
      if (h)
        continue;
      l = !1;
      break;
    }
    if (y) {
      if (!No(t, function(g, x) {
        if (!Uo(y, x) && (_ === g || a(_, g, r, n, s)))
          return y.push(x);
      })) {
        l = !1;
        break;
      }
    } else if (!(_ === $ || a(_, $, r, n, s))) {
      l = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), l;
}
function Go(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function Ho(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Wo = 1, qo = 2, Zo = "[object Boolean]", Ko = "[object Date]", ko = "[object Error]", Jo = "[object Map]", Yo = "[object Number]", Xo = "[object RegExp]", Qo = "[object Set]", Vo = "[object String]", eu = "[object Symbol]", tu = "[object ArrayBuffer]", ru = "[object DataView]", Qe = S ? S.prototype : void 0, ae = Qe ? Qe.valueOf : void 0;
function nu(e, t, r, n, a, s, i) {
  switch (r) {
    case ru:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case tu:
      return !(e.byteLength != t.byteLength || !s(new Q(e), new Q(t)));
    case Zo:
    case Ko:
    case Yo:
      return he(+e, +t);
    case ko:
      return e.name == t.name && e.message == t.message;
    case Xo:
    case Vo:
      return e == t + "";
    case Jo:
      var o = Go;
    case Qo:
      var u = n & Wo;
      if (o || (o = Ho), e.size != t.size && !u)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= qo, i.set(e, t);
      var b = nr(o(e), o(t), n, a, s, i);
      return i.delete(e), b;
    case eu:
      if (ae)
        return ae.call(e) == ae.call(t);
  }
  return !1;
}
var su = 1, au = Object.prototype, iu = au.hasOwnProperty;
function ou(e, t, r, n, a, s) {
  var i = r & su, o = le(e), u = o.length, c = le(t), b = c.length;
  if (u != b && !i)
    return !1;
  for (var f = u; f--; ) {
    var l = o[f];
    if (!(i ? l in t : iu.call(t, l)))
      return !1;
  }
  var y = s.get(e), _ = s.get(t);
  if (y && _)
    return y == t && _ == e;
  var $ = !0;
  s.set(e, t), s.set(t, e);
  for (var h = i; ++f < u; ) {
    l = o[f];
    var g = e[l], x = t[l];
    if (n)
      var k = i ? n(x, g, l, t, e, s) : n(g, x, l, e, t, s);
    if (!(k === void 0 ? g === x || a(g, x, r, n, s) : k)) {
      $ = !1;
      break;
    }
    h || (h = l == "constructor");
  }
  if ($ && !h) {
    var D = e.constructor, O = t.constructor;
    D != O && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof O == "function" && O instanceof O) && ($ = !1);
  }
  return s.delete(e), s.delete(t), $;
}
var uu = 1, Ve = "[object Arguments]", et = "[object Array]", J = "[object Object]", cu = Object.prototype, tt = cu.hasOwnProperty;
function lu(e, t, r, n, a, s) {
  var i = U(e), o = U(t), u = i ? et : K(e), c = o ? et : K(t);
  u = u == Ve ? J : u, c = c == Ve ? J : c;
  var b = u == J, f = c == J, l = u == c;
  if (l && X(e)) {
    if (!X(t))
      return !1;
    i = !0, b = !1;
  }
  if (l && !b)
    return s || (s = new P()), i || Tt(e) ? nr(e, t, r, n, a, s) : nu(e, t, u, r, n, a, s);
  if (!(r & uu)) {
    var y = b && tt.call(e, "__wrapped__"), _ = f && tt.call(t, "__wrapped__");
    if (y || _) {
      var $ = y ? e.value() : e, h = _ ? t.value() : t;
      return s || (s = new P()), a($, h, r, n, s);
    }
  }
  return l ? (s || (s = new P()), ou(e, t, r, n, a, s)) : !1;
}
function sr(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !C(e) && !C(t) ? e !== e && t !== t : lu(e, t, r, n, sr, a);
}
var fu = function() {
  return m.Date.now();
};
const ie = fu;
var du = "Expected a function", pu = Math.max, hu = Math.min;
function rt(e, t, r) {
  var n, a, s, i, o, u, c = 0, b = !1, f = !1, l = !0;
  if (typeof e != "function")
    throw new TypeError(du);
  t = Oe(t) || 0, w(r) && (b = !!r.leading, f = "maxWait" in r, s = f ? pu(Oe(r.maxWait) || 0, t) : s, l = "trailing" in r ? !!r.trailing : l);
  function y(v) {
    var j = n, G = a;
    return n = a = void 0, c = v, i = e.apply(G, j), i;
  }
  function _(v) {
    return c = v, o = setTimeout(g, t), b ? y(v) : i;
  }
  function $(v) {
    var j = v - u, G = v - c, xe = t - j;
    return f ? hu(xe, s - G) : xe;
  }
  function h(v) {
    var j = v - u, G = v - c;
    return u === void 0 || j >= t || j < 0 || f && G >= s;
  }
  function g() {
    var v = ie();
    if (h(v))
      return x(v);
    o = setTimeout(g, $(v));
  }
  function x(v) {
    return o = void 0, l && n ? y(v) : (n = a = void 0, i);
  }
  function k() {
    o !== void 0 && clearTimeout(o), c = 0, n = u = a = o = void 0;
  }
  function D() {
    return o === void 0 ? i : x(ie());
  }
  function O() {
    var v = ie(), j = h(v);
    if (n = arguments, a = this, u = v, j) {
      if (o === void 0)
        return _(u);
      if (f)
        return clearTimeout(o), o = setTimeout(g, t), y(u);
    }
    return o === void 0 && (o = setTimeout(g, t)), i;
  }
  return O.cancel = k, O.flush = D, O;
}
function gu(e, t) {
  return sr(e, t);
}
var _u = Za(function(e, t, r) {
  return e + (r ? " " : "") + ra(t);
});
const nt = _u;
var vu = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("div", {
    staticClass: "v-list"
  }, [e._t("header", null, null, e.scope), e.loading ? e._t("loading", function() {
    return [r("p", [e._v("Loading...")])];
  }, null, e.scope) : [e.loadingPage ? e._t("loading-page", function() {
    return [r("p", [e._v("Loading Page...")])];
  }, null, e.scope) : e._e(), e.error ? e._t("error", function() {
    return [r("div", [r("p", [e._v("There was an error while processing your request.")]), r("p", [e._v(e._s(e.error))])])];
  }, {
    error: e.error
  }, e.scope) : e.isEmpty ? e._t("empty", function() {
    return [r("p", [e._v("No data found!")])];
  }, null, e.scope) : e._t("default", null, null, e.scope)], e._t("footer", null, null, e.scope)], 2);
}, bu = [];
function A(e, t, r, n, a, s, i, o) {
  var u = typeof e == "function" ? e.options : e;
  t && (u.render = t, u.staticRenderFns = r, u._compiled = !0), n && (u.functional = !0), s && (u._scopeId = "data-v-" + s);
  var c;
  if (i ? (c = function(l) {
    l = l || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !l && typeof __VUE_SSR_CONTEXT__ < "u" && (l = __VUE_SSR_CONTEXT__), a && a.call(this, l), l && l._registeredComponents && l._registeredComponents.add(i);
  }, u._ssrRegister = c) : a && (c = o ? function() {
    a.call(
      this,
      (u.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), c)
    if (u.functional) {
      u._injectStyles = c;
      var b = u.render;
      u.render = function(y, _) {
        return c.call(_), b(y, _);
      };
    } else {
      var f = u.beforeCreate;
      u.beforeCreate = f ? [].concat(f, c) : [c];
    }
  return {
    exports: e,
    options: u
  };
}
const yu = {
  name: "VList",
  props: {
    /**
     * An API endpoint to hit for getting data.
     */
    endpoint: String,
    /**
     * Static Config which will be passed to handler
     */
    config: Object,
    /**
     * Default page to load.
     * The prop is just an initial value.
     * Local state is managed by localPage.
     */
    page: {
      type: Number,
      default: 1
    },
    /**
     * Number of results to fetch and display on each page.
     * The prop is just an initial value.
     * Local state is managed by localPerPage.
     */
    perPage: {
      type: Number,
      default: 25
    },
    /**
     * Additional parameters to pass when making an API request.
     * This prop does not have any local copy as it is just a forwarder.
     */
    params: Object,
    /**
     * Just like parameters but specifically to filter data.
     */
    filters: Object,
    /**
     * Uses this attribute when sorting items in listing.
     * The prop is just an initial value.
     * Local state is managed by localSortBy.
     */
    sortBy: String,
    /**
     * Ascending or Descending?
     * The prop is just an initial value.
     * Local state is managed by localSortOrder.
     */
    sortOrder: {
      type: String,
      validator(e) {
        return ["asc", "desc"].includes(e);
      }
    },
    /**
     * Default search query to use
     * The prop is just an initial value.
     * Local state is managed by localSearch.
     */
    search: {
      type: String
    },
    /**
     * List of attributes to display in a list
     */
    attrs: {
      type: Array
    },
    /**
     * An adaptor defines which attributes to be passed to layout
     * This is helpful when you don't know which attributes are sent from API
     * Also useful when you need to show all the columns except few.
     */
    attrsAdaptor: {
      type: Function,
      default: (e) => e
    },
    /**
     * Request Handler handles the API requests
     * Use this prop to handle requests individually.
     * If set, will get higher priority over global handler
     */
    requestHandler: {
      type: Function
    }
  },
  data() {
    const e = this.getState(), {
      page: t,
      perPage: r,
      sortBy: n,
      sortOrder: a,
      search: s,
      attrSettings: i
    } = e;
    return {
      /**
       * These local variables are copy of props.
       * This is required as the values given as props are considered as initial values.
       * The component may change these values as user interacts with interface.
       * Thought of updating the props vial .sync modifier but in that case user will have to
       * create a state in host component to sync values.
       */
      localPage: t,
      localPerPage: r,
      localSortBy: n,
      localSortOrder: a,
      localSearch: s,
      attrSettings: i,
      items: null,
      /**
       * serverPage only gets updated after success full response respected to page.
       * This is added to prevent a flash update of indexes due to "page" variable change.
       */
      serverPage: null,
      selection: [],
      error: !1,
      response: null,
      count: 0,
      paginationMode: null,
      isFirstRequest: !0,
      loading: !1,
      loadingMore: !1,
      loadingPage: !1,
      initializingState: !0
    };
  },
  created() {
  },
  /**
   * Once all the child components are ready and provided a proper state like "paginationMode"
   * call initialization of table.
   */
  mounted() {
    this.setDefaultAttrSettings();
    const { filters: e } = this.getState();
    this.$emit("update:filters", e), this.$nextTick(() => {
      this.init(), this.initializingState = !1;
    });
  },
  provide() {
    return {
      setSearch: this.setSearch,
      setSort: this.setSort,
      setPaginationMode: this.setPaginationMode,
      setSelection: this.setSelection,
      setItems: this.setItems,
      setPage: this.setPage,
      setPerPage: this.setPerPage,
      updateAttr: this.updateAttr,
      loadMore: this.loadMore
    };
  },
  watch: {
    /**
     * Only filters, params, search, sortBy & sortOrder props will react to change
     * All other props are non-reactive once component is initialized.
     * When filters and params are changed, we need to reset the page
     * and resetting a page will use the latest filter and params props.
     */
    watchFilters: {
      deep: !0,
      handler() {
        this.initializingState || this.setPage(1);
      }
    },
    /**
     * params is just a forwarder & it does not have
     * any usage in the component.
     */
    params: {
      deep: !0,
      handler(e, t) {
        gu(e, t) || this.setPage(1);
      }
    },
    search(e) {
      this.setSearch(e);
    },
    sortBy(e) {
      this.setSort({ by: e, order: this.localSortOrder });
    },
    sortOrder(e) {
      this.setSort({ by: this.localSortOrder, order: e });
    },
    selection: {
      deep: !0,
      handler(e, t) {
        this.$emit("selection", e, t);
      }
    },
    "$route.query.page"(e) {
      e ? this.localPage != e && this.setPage(e) : this.setPage(1);
    }
  },
  computed: {
    /**
     * Why these watch-computed required:
     * https://stackoverflow.com/a/74945916/3165956
     */
    watchFilters() {
      return Object.assign({}, this.filters);
    },
    instance() {
      return this;
    },
    /**
     * When attrs is provided in props, the same attr.name is used to find column value from response.
     * If the attrs is not provided, we can get first item of response and get keys from there as fallback.
     */
    serializedAttrs() {
      var r;
      const e = this.attrs || Object.keys(((r = this.items) == null ? void 0 : r[0]) || {}), t = this.attrsAdaptor(e);
      return this.attrSerializer(t);
    },
    isEmpty() {
      var e;
      return ((e = this.items) == null ? void 0 : e.length) == 0;
    },
    scope() {
      return {
        items: this.items,
        response: this.response,
        loading: this.loading,
        isEmpty: this.isEmpty,
        refresh: this.refresh,
        selection: this.selection,
        instance: this.instance,
        loadingPage: this.loadingPage,
        loadingMore: this.loadingMore
      };
    },
    requestPayload() {
      return {
        params: this.params,
        filters: this.filters,
        search: this.localSearch,
        pagination: {
          page: this.localPage,
          perPage: this.localPerPage
        },
        sort: {
          by: this.localSortBy,
          order: this.localSortOrder
        },
        config: this.config,
        attrSettings: this.attrSettings
      };
    }
  },
  methods: {
    init() {
      var t, r;
      if (!this.endpoint)
        return;
      const e = this.localPage || ((r = (t = this.$route) == null ? void 0 : t.query) == null ? void 0 : r.page) || this.page;
      if (e < 1) {
        const n = this.$route.query || {};
        this.$router.replace({
          query: {
            ...n,
            page: void 0
          }
        });
      } else
        this.setPage(e);
    },
    getState() {
      var e, t;
      try {
        const r = this.$vueList.options.stateManager.get(this.endpoint);
        return {
          page: ((e = r == null ? void 0 : r.pagination) == null ? void 0 : e.page) || this.page,
          perPage: ((t = r == null ? void 0 : r.pagination) == null ? void 0 : t.perPage) || this.perPage,
          sortBy: (r == null ? void 0 : r.sort.by) || this.sortBy,
          sortOrder: (r == null ? void 0 : r.sort.order) || this.sortOrder,
          search: (r == null ? void 0 : r.search) || this.search,
          attrSettings: r == null ? void 0 : r.attrSettings,
          filters: r == null ? void 0 : r.filters
        };
      } catch (r) {
        return console.error(r), {};
      }
    },
    /**
     * Attribute serializer builds an array of objects with following keys:
     * label, name.
     *
     * input: ['name','email']
     * output: [{label:'Name',name:'name'},{label:'Email',name:'email'} ]
     */
    attrSerializer(e) {
      return e.map((t) => typeof t == "string" ? {
        label: nt(t),
        name: t
      } : (t.attrs && (t.attrs = this.attrSerializer(t.attrs)), {
        label: nt(t.name),
        ...t
      }));
    },
    setSearch(e) {
      this.localSearch = e, this.setPage(1);
    },
    setSort({ by: e, order: t }) {
      this.localSortBy = e, this.localSortOrder = t, this.setPage(1);
    },
    setPaginationMode(e) {
      this.paginationMode = e;
    },
    setSelection(e) {
      this.selection = e;
    },
    setItems(e) {
      this.items = e;
    },
    refresh() {
      this.getData();
    },
    setPage(e) {
      this.localPage = e, this.getData();
    },
    setPerPage(e) {
      this.localPerPage = e, this.setPage(1);
    },
    loadMore() {
      const e = this.localPage;
      this.localPage++;
      const t = this.localPage;
      this.$emit("beforeLoadMore", {
        oldPage: e,
        newPage: t
      }), this.getData(!0);
    },
    setData(e, t) {
      t ? (this.items = this.items.concat(e.items), this.$emit("afterLoadMore", e)) : (this.items = e.items, this.$emit("afterLoad", e)), this.count = e.count;
    },
    /**
     * Updates the query parameters in the router when pagination is available.
     *
     * Initially when the component is loaded, the default page is 1 and no query param is added.
     * So when navigating back to page=1, we should avoid adding page = 1 in query param to avoid
     * additional history in routing.
     */
    setUrl() {
      if (this.$router && this.paginationMode == "paging" && this.$route.query.page != this.localPage) {
        const e = this.$route.query || {};
        this.$router.push({
          query: {
            ...e,
            page: this.localPage
          }
        });
      }
    },
    getData(e = !1) {
      this.error = !1, this.setLoader(!0), (this.requestHandler || this.$vueList.options.requestHandler)({
        method: "get",
        endpoint: this.endpoint,
        ...this.requestPayload
      }).then((r) => {
        this.response = r, this.setStateOnStateManager(), this.selection = [], this.$emit("res", r), this.setData(r, e), this.setUrl(), this.setLoader(!1), this.serverPage = this.localPage;
      }).catch((r) => {
        throw this.error = r, this.setLoader(!1), new Error(r);
      });
    },
    setLoader(e) {
      e ? this.paginationMode == "infinite" ? this.loadingMore = !0 : this.isFirstRequest ? this.loading = !0 : this.loadingPage = !0 : (this.isFirstRequest = !1, this.loading = !1, this.loadingPage = !1, this.loadingMore = !1);
    },
    sort(e) {
      const t = {
        items: e,
        endpoint: this.endpoint,
        params: this.params
      };
      this.$listeners.sort ? this.$emit("sort", t) : this.$vueList.options.sort && this.$vueList.options.sort(t);
    },
    /**
     * Update the config of an attribute
     *
     * @param {name} string Name of an attribute
     * @param {prop} string A property to update
     * @param {value} string A value to set
     */
    updateAttr(e, t, r) {
      this.$set(this.attrSettings[e], t, r), this.setStateOnStateManager();
    },
    setDefaultAttrSettings() {
      if (this.attrSettings)
        return;
      const e = this.serializedAttrs.reduce((t, r) => (t[r.name] = {
        visible: !0
      }, t), {});
      this.$set(this, "attrSettings", e);
    },
    setStateOnStateManager() {
      this.$vueList.options.stateManager.set(
        this.endpoint,
        this.requestPayload
      );
    },
    clearState() {
      this.$vueList.options.stateManager.set(this.endpoint);
    }
  }
}, st = {};
var $u = /* @__PURE__ */ A(
  yu,
  vu,
  bu,
  !1,
  mu,
  null,
  null,
  null
);
function mu(e) {
  for (let t in st)
    this[t] = st[t];
}
const xu = /* @__PURE__ */ function() {
  return $u.exports;
}(), M = {
  props: {
    parent: Object
  },
  computed: {
    root() {
      return this.parent || this.$parent;
    }
  }
};
var Su = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("div", {
    staticClass: "v-list-pagination"
  }, [e._t("first", function() {
    return [r("button", {
      attrs: {
        disabled: !e.hasPrev
      },
      on: {
        click: e.first
      }
    }, [e._v("First")])];
  }, {
    first: e.first,
    hasPrev: e.hasPrev
  }), e._t("prev", function() {
    return [r("button", {
      attrs: {
        disabled: !e.hasPrev
      },
      on: {
        click: e.prev
      }
    }, [e._v("Prev")])];
  }, {
    prev: e.prev,
    hasPrev: e.hasPrev
  }), e._l(e.pagesToDisplay, function(n) {
    return [e._t("page", function() {
      return [n == e.page ? r("span", {
        key: `page-${n}`
      }, [e._v(e._s(n))]) : r("button", {
        key: `page-${n}`,
        on: {
          click: function(a) {
            return e.setPage(n);
          }
        }
      }, [e._v(" " + e._s(n) + " ")])];
    }, {
      change: e.setPage,
      value: n,
      isActive: n == e.page
    })];
  }), e._t("next", function() {
    return [r("button", {
      attrs: {
        disabled: !e.hasNext
      },
      on: {
        click: e.next
      }
    }, [e._v("Next")])];
  }, {
    next: e.next,
    hasNext: e.hasNext
  }), e._t("last", function() {
    return [r("button", {
      attrs: {
        disabled: !e.hasNext
      },
      on: {
        click: e.last
      }
    }, [e._v("Last")])];
  }, {
    last: e.last,
    hasNext: e.hasNext
  })], 2);
}, Pu = [];
const Tu = {
  mixins: [M],
  props: {
    /**
     * Number of buttons to display in pagination.
     * Current Page will be center and other pages will be added in start and end.
     * Odd number is recommended
     */
    pageLinks: {
      type: Number,
      default: 5
    }
  },
  inject: ["setPaginationMode", "setPage"],
  created() {
    this.setPaginationMode("paging");
  },
  computed: {
    page() {
      return this.root.localPage;
    },
    perPage() {
      return this.root.localPerPage;
    },
    count() {
      return this.root.count;
    },
    total() {
      return Math.ceil(this.count / this.perPage);
    },
    halfWay() {
      return Math.floor(this.pageLinks / 2);
    },
    pagesToDisplay() {
      const e = Array.apply(
        null,
        Array(Math.min(this.pageLinks, this.total))
      );
      return this.page <= this.halfWay ? e.map((t, r) => r + 1) : this.total - this.page < this.halfWay ? e.map((t, r) => this.total - r).reverse() : e.map((t, r) => this.page - this.halfWay + r);
    },
    hasNext() {
      return this.page * this.perPage < this.count;
    },
    hasPrev() {
      return this.page != 1;
    }
  },
  methods: {
    prev() {
      this.setPage(this.page - 1);
    },
    next() {
      this.setPage(this.page + 1);
    },
    first() {
      this.setPage(1);
    },
    last() {
      this.setPage(this.total);
    }
  }
}, at = {};
var Au = /* @__PURE__ */ A(
  Tu,
  Su,
  Pu,
  !1,
  Ou,
  null,
  null,
  null
);
function Ou(e) {
  for (let t in at)
    this[t] = at[t];
}
const ju = /* @__PURE__ */ function() {
  return Au.exports;
}();
var Cu = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("div", {
    staticClass: "v-list-counter"
  }, [e._t("default", function() {
    return [r("span", [e._v(" Showing " + e._s(e.showing) + " items out of " + e._s(e.count) + " ")])];
  }, {
    showing: e.showing,
    count: e.count
  })], 2);
}, wu = [];
const Mu = {
  mixins: [M],
  computed: {
    items() {
      return this.root.items || [];
    },
    showing() {
      return this.items.length;
    },
    count() {
      return this.root.count;
    }
  }
}, it = {};
var Eu = /* @__PURE__ */ A(
  Mu,
  Cu,
  wu,
  !1,
  Lu,
  null,
  null,
  null
);
function Lu(e) {
  for (let t in it)
    this[t] = it[t];
}
const Ru = /* @__PURE__ */ function() {
  return Eu.exports;
}();
var Iu = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("div", {
    staticClass: "v-list-per-page"
  }, [e._t("default", function() {
    return [r("select", {
      domProps: {
        value: e.perPage
      },
      on: {
        input: function(n) {
          return e.setPerPage(n.target.value);
        }
      }
    }, e._l(e.serializedOptions, function(n, a) {
      return r("option", {
        key: `option-${a}`,
        domProps: {
          value: n.value
        }
      }, [e._v(" " + e._s(n.label) + " ")]);
    }), 0)];
  }, {
    value: e.perPage,
    change: e.setPerPage,
    options: e.serializedOptions
  })], 2);
}, Fu = [];
const Du = {
  mixins: [M],
  inject: ["setPerPage"],
  props: {
    /**
     * An array of options which lets user select how many items they want to see in a list at a time.
     * Provide an object with 'label' and 'value' keys to have a label different then a value.
     */
    options: {
      type: Array,
      default: () => [10, 25, 50, 100]
    }
  },
  computed: {
    perPage() {
      return this.root.localPerPage;
    },
    serializedOptions() {
      return this.options.map((e) => typeof e != "object" ? {
        value: e,
        label: e
      } : e);
    }
  }
}, ot = {};
var Nu = /* @__PURE__ */ A(
  Du,
  Iu,
  Fu,
  !1,
  Uu,
  null,
  null,
  null
);
function Uu(e) {
  for (let t in ot)
    this[t] = ot[t];
}
const Bu = /* @__PURE__ */ function() {
  return Nu.exports;
}();
var zu = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("div", {
    staticClass: "v-list-attributes"
  }, [e._l(e.root.serializedAttrs, function(n, a) {
    return [e._t("default", function() {
      var s, i;
      return [r("label", {
        key: `attr-${a}`
      }, [r("span", [e._v(e._s(n.label))]), r("input", {
        attrs: {
          type: "checkbox"
        },
        domProps: {
          checked: (s = e.root.attrSettings) === null || s === void 0 || (i = s[n.name]) === null || i === void 0 ? void 0 : i.visible
        },
        on: {
          input: function(o) {
            return e.updateAttr(n.name, "visible", o.target.checked);
          }
        }
      })])];
    }, {
      update: e.updateAttr,
      attr: n
    })];
  })], 2);
}, Gu = [];
const Hu = {
  mixins: [M],
  inject: ["updateAttr"]
}, ut = {};
var Wu = /* @__PURE__ */ A(
  Hu,
  zu,
  Gu,
  !1,
  qu,
  null,
  null,
  null
);
function qu(e) {
  for (let t in ut)
    this[t] = ut[t];
}
const Zu = /* @__PURE__ */ function() {
  return Wu.exports;
}();
var Ku = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("div", {
    staticClass: "v-list-search"
  }, [e._t("default", function() {
    return [r("input", {
      attrs: {
        type: "text",
        placeholder: "Search"
      },
      domProps: {
        value: e.root.localSearch
      },
      on: {
        input: function(n) {
          return e.set(n.target.value);
        }
      }
    })];
  }, {
    value: e.root.localSearch,
    set: e.set
  })], 2);
}, ku = [];
const Ju = {
  mixins: [M],
  inject: ["setSearch"],
  props: {
    /**
     * Wait till this time to send an API request to avoid multiple requests when user is typing.
     */
    debounceTime: {
      type: Number,
      default: 1e3
    }
  },
  data() {
    return {
      debounce: rt,
      set: null
    };
  },
  created() {
    this.set = rt((e) => {
      this.setSearch(e);
    }, this.debounceTime);
  }
}, ct = {};
var Yu = /* @__PURE__ */ A(
  Ju,
  Ku,
  ku,
  !1,
  Xu,
  null,
  null,
  null
);
function Xu(e) {
  for (let t in ct)
    this[t] = ct[t];
}
const Qu = /* @__PURE__ */ function() {
  return Yu.exports;
}();
var Vu = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("div", {
    staticClass: "v-list-load-more"
  }, [e.count > e.loaded ? e._t("default", function() {
    return [r("button", {
      on: {
        click: e.loadMore
      }
    }, [e._v("Load More")])];
  }, {
    loading: e.loadingMore,
    loadMore: e.loadMore
  }) : e._t("end", function() {
    return [r("p", [e._v("— That's all —")])];
  })], 2);
}, ec = [];
const tc = {
  mixins: [M],
  inject: ["setPaginationMode", "loadMore"],
  created() {
    this.setPaginationMode("infinite");
  },
  computed: {
    loadingMore() {
      return this.root.loadingMore;
    },
    loaded() {
      var e;
      return (e = this.root.items) == null ? void 0 : e.length;
    },
    count() {
      return this.root.count;
    }
  }
}, lt = {};
var rc = /* @__PURE__ */ A(
  tc,
  Vu,
  ec,
  !1,
  nc,
  null,
  null,
  null
);
function nc(e) {
  for (let t in lt)
    this[t] = lt[t];
}
const sc = /* @__PURE__ */ function() {
  return rc.exports;
}();
var ac = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("div", {
    staticClass: "v-list-go-to"
  }, [e._t("select", function() {
    return [r("select", {
      domProps: {
        value: e.page
      },
      on: {
        input: function(n) {
          return e.setPage(n.target.value);
        }
      }
    }, e._l(e.options, function(n, a) {
      return r("option", {
        key: `option-${a}`
      }, [e._v(" " + e._s(n) + " ")]);
    }), 0)];
  }, {
    change: e.setPage,
    value: e.page,
    options: e.options,
    total: e.total
  })], 2);
}, ic = [];
const oc = {
  mixins: [M],
  inject: ["setPage"],
  computed: {
    options() {
      const e = [];
      for (var t = 1; t <= this.total; t++)
        e.push(t);
      return e;
    },
    page() {
      return this.root.localPage;
    },
    perPage() {
      return this.root.localPerPage;
    },
    count() {
      return this.root.count;
    },
    total() {
      return Math.ceil(this.count / this.perPage);
    }
  }
}, ft = {};
var uc = /* @__PURE__ */ A(
  oc,
  ac,
  ic,
  !1,
  cc,
  null,
  null,
  null
);
function cc(e) {
  for (let t in ft)
    this[t] = ft[t];
}
const lc = /* @__PURE__ */ function() {
  return uc.exports;
}(), fc = {
  mixins: [M],
  inject: ["setSort"],
  computed: {
    items() {
      return this.root.items || [];
    },
    attrs() {
      return this.root.serializedAttrs;
    },
    attrSettings() {
      return this.root.attrSettings;
    },
    pagination() {
      return this.root.paginationConfig;
    },
    sortBy() {
      return this.root.localSortBy;
    },
    sortOrder() {
      return this.root.localSortOrder;
    }
  },
  methods: {
    sortItemsBy(e) {
      let t;
      this.sortOrder == "asc" ? t = "desc" : t = "asc", this.setSort({ by: e.name, order: t });
    },
    itemIndex(e) {
      return this.root.localPerPage * (this.root.serverPage - 1) + e + 1;
    }
  }
}, dc = (...e) => e.join("-");
var pc = function() {
  var e = this, t = e.$createElement, r = e._self._c || t;
  return r("table", {
    staticClass: "v-list-table"
  }, [r("thead", e._l(e.headers, function(n, a) {
    return r("tr", {
      key: e.key("head-row", a),
      class: [].concat(e.rowClass(n, a))
    }, [e._l(n, function(s, i) {
      return [r("th", {
        key: e.key("head-col", a, i),
        class: e.thClass(s),
        style: e.thStyle(s),
        attrs: {
          rowspan: e.rowspan(a, s.key),
          colspan: e.colspan(a, s.key)
        },
        on: {
          click: function(o) {
            s.sortable && e.sortItemsBy(s);
          }
        }
      }, [r("div", {
        staticClass: "v-list-table__head"
      }, [e._t("th_before", null, null, e.thScope(s)), e._t(`th_${s.name}`, function() {
        return [r("span", [e._v(e._s(s.label))])];
      }, null, e.thScope(s)), e._t("th_after", function() {
        return [s.name == e.sortBy ? [e.sortOrder == "asc" ? r("span", [e._v("↑")]) : e.sortOrder == "desc" ? r("span", [e._v("↓")]) : e._e()] : e._e()];
      }, null, e.thScope(s))], 2)])];
    })], 2);
  }), 0), r(e.reorder ? "draggable" : "tbody", e._b({
    tag: "component",
    model: {
      value: e.rows,
      callback: function(n) {
        e.rows = n;
      },
      expression: "rows"
    }
  }, "component", e.reorder ? {
    handle: ".v-list-table__drag",
    tag: "tbody"
  } : {}, !1), [e._t("body-start"), e._l(e.rows, function(n, a) {
    return r("tr", {
      key: e.key("body-row", a),
      class: [{
        "v-list-table__selected": e.isSelected(n)
      }].concat(e.rowClass(n, a))
    }, [e._l(e.body, function(s, i) {
      return [r("td", {
        key: e.key("body-col", i),
        class: e.tdClass(s),
        on: {
          click: function(o) {
            return e.tdClick(s, n);
          }
        }
      }, [e.$scopedSlots[s.name] ? e._t(s.name, function() {
        return [e._v(" " + e._s(n[s.name]) + " ")];
      }, null, e.tdScope(s, n, a)) : e.$vueList.options.slots && e.$vueList.options.slots[s.name] ? r(e.$vueList.options.slots[s.name], e._b({
        tag: "component"
      }, "component", e.tdScope(s, n, a), !1)) : s.name == "_index" ? e._t("_index", function() {
        return [e._v(" " + e._s(e.itemIndex(a)) + " ")];
      }, null, e.tdScope(s, n, a)) : s.name == "_drag" ? e._t("_drag", function() {
        return [r("span", {
          staticClass: "v-list-table__drag"
        }, [e._v("Drag")])];
      }, null, e.tdScope(s, n, a)) : e._t(s.name, function() {
        return [e._v(" " + e._s(e.td(s, n)) + " ")];
      }, null, e.tdScope(s, n, a))], 2)];
    })], 2);
  }), e._t("body-end")], 2)], 1);
}, hc = [];
const gc = {
  mixins: [fc],
  props: {
    reorder: {
      type: Boolean,
      default: !1
    },
    rowClass: {
      type: Function
    }
  },
  inject: ["setSelection", "setItems"],
  data() {
    return {
      key: dc,
      headers: [],
      body: []
    };
  },
  watch: {
    attrSettings: {
      deep: !0,
      handler(e) {
        this.$set(this, "headers", []), this.$set(this, "body", []), this.generateHeader(this.attrs, e, 0);
      }
    }
  },
  created() {
    this.generateHeader(this.attrs, this.attrSettings, 0);
  },
  computed: {
    rows: {
      set(e) {
        this.$emit("reorder", e), this.setItems(e);
      },
      get() {
        return Ro(this.items);
      }
    },
    selectionState() {
      return this.root.selection.length === this.rows.length ? "all" : this.root.selection.length === 0 ? "none" : "some";
    }
  },
  methods: {
    rowspan(e, t) {
      let r = 1;
      for (var n = e + 1; n < this.headers.length; n++) {
        if (this.headers[n].some((i) => i.key.startsWith(t)))
          return r;
        r++;
      }
      return r;
    },
    colspan(e, t) {
      let r = 1;
      for (var n = e + 1; n < this.headers.length; n++) {
        const s = this.headers[n].filter((i) => i.key.startsWith(t));
        (s == null ? void 0 : s.length) > 0 && (r = r + s.length - 1);
      }
      return r;
    },
    generateHeader(e, t, r, n = "0") {
      this.headers[r] || this.$set(this.headers, r, []), e.forEach((a, s) => {
        var i;
        if ((i = t == null ? void 0 : t[a.name]) != null && i.visible) {
          const o = n + "" + s;
          if (a.key = o, this.headers[r].push(a), a.attrs) {
            const u = r + 1;
            this.generateHeader(a.attrs, u, o);
          } else
            this.body.push(a);
        }
      });
    },
    columnClass(e) {
      const t = [];
      return e.fix && t.push("v-list-table__fix"), e.type && t.push(`v-list-table__${e.type}`), e.classList && t.push(...e.classList), t;
    },
    thClass(e) {
      const t = [
        ...this.columnClass(e),
        `v-list-table__${e.name}`
      ];
      return e.name == this.sortBy && t.push("v-list-table__sort"), e.sortable && t.push("v-list-table__sortable"), t;
    },
    thStyle(e) {
      const t = {};
      return e.width && (t.width = e.width), t;
    },
    tdClick(e, t) {
      e.onClick ? e.onClick(t) : e.rowClick !== !1 && this.$emit("rowClick", t);
    },
    tdClass(e) {
      const t = [...this.columnClass(e)];
      return this.$listeners.rowClick && e.rowClick !== !1 && t.push("v-list-table__click"), t;
    },
    tdScope(e, t, r) {
      return {
        toggleSelect: () => this.toggleSelect(t),
        isSelected: this.isSelected(t),
        item: t,
        rowIndex: this.itemIndex(r),
        content: this.td(e, t)
      };
    },
    thScope(e) {
      return {
        attr: e,
        toggleSelectAll: () => this.toggleSelectAll(),
        sortBy: this.sortBy,
        sortOrder: this.sortOrder,
        selectionState: this.selectionState
      };
    },
    td(e, t) {
      const r = e.name;
      if (e.valueMap) {
        const n = t[r];
        if (n && e.valueMap[n])
          return e.valueMap[n];
      }
      return e.type && this.$vueList.options.typeAdapters[e.type] ? this.$vueList.options.typeAdapters[e.type](t[r], t) : e.value ? e.value(t) : t[r];
    },
    toggleSelect(e) {
      const t = [...this.root.selection], r = t.findIndex((n) => n.id === e.id);
      r > -1 ? this.$delete(t, r) : t.push({ ...e }), this.setSelection(t);
    },
    isSelected(e) {
      return [...this.root.selection].findIndex((n) => n.id === e.id) > -1;
    },
    toggleSelectAll() {
      switch (this.selectionState) {
        case "all":
          this.setSelection([]);
          break;
        case "some":
        case "none":
          this.setSelection(this.rows);
          break;
      }
    }
  }
}, dt = {};
var _c = /* @__PURE__ */ A(
  gc,
  pc,
  hc,
  !1,
  vc,
  null,
  null,
  null
);
function vc(e) {
  for (let t in dt)
    this[t] = dt[t];
}
const bc = /* @__PURE__ */ function() {
  return _c.exports;
}(), yc = (e, t = {}) => {
  const r = Object.assign({}, ar, t), n = r.componentPrefix;
  e.prototype.$vueList = { options: r }, e.component(`${n}List`, xu), e.component(`${n}ListPagination`, ju), e.component(`${n}ListCounter`, Ru), e.component(`${n}ListPerPage`, Bu), e.component(`${n}ListAttributes`, Zu), e.component(`${n}ListSearch`, Qu), e.component(`${n}ListLoadMore`, sc), e.component(`${n}ListTable`, bc), e.component(`${n}ListGoTo`, lc);
}, $c = {
  install: yc
};
typeof window < "u" && window.Vue && window.Vue.use($c);
export {
  $c as default
};
