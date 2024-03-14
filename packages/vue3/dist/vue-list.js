import { openBlock as c, createElementBlock as f, renderSlot as d, normalizeProps as S, guardReactiveProps as ee, mergeProps as C, Fragment as A, createCommentVNode as Q, createElementVNode as y, toDisplayString as O, renderList as D, getCurrentInstance as dr, normalizeClass as oe, normalizeStyle as hr, createBlock as Ne, resolveDynamicComponent as De, withCtx as gr, createTextVNode as pe } from "vue";
const pr = {
  componentPrefix: "V",
  requestHandler() {
    return new Promise((e, t) => {
      e([]);
    });
  },
  itemProps: {},
  typeAdapters: {}
};
var br = typeof global == "object" && global && global.Object === Object && global;
const _t = br;
var yr = typeof self == "object" && self && self.Object === Object && self, vr = _t || yr || Function("return this")();
const w = vr;
var mr = w.Symbol;
const I = mr;
var $t = Object.prototype, _r = $t.hasOwnProperty, $r = $t.toString, X = I ? I.toStringTag : void 0;
function Tr(e) {
  var t = _r.call(e, X), r = e[X];
  try {
    e[X] = void 0;
    var s = !0;
  } catch {
  }
  var o = $r.call(e);
  return s && (t ? e[X] = r : delete e[X]), o;
}
var xr = Object.prototype, Pr = xr.toString;
function Sr(e) {
  return Pr.call(e);
}
var Ar = "[object Null]", Or = "[object Undefined]", Ue = I ? I.toStringTag : void 0;
function V(e) {
  return e == null ? e === void 0 ? Or : Ar : Ue && Ue in Object(e) ? Tr(e) : Sr(e);
}
function U(e) {
  return e != null && typeof e == "object";
}
var Cr = "[object Symbol]";
function Tt(e) {
  return typeof e == "symbol" || U(e) && V(e) == Cr;
}
function wr(e, t) {
  for (var r = -1, s = e == null ? 0 : e.length, o = Array(s); ++r < s; )
    o[r] = t(e[r], r, e);
  return o;
}
var jr = Array.isArray;
const K = jr;
var Ir = 1 / 0, Be = I ? I.prototype : void 0, Fe = Be ? Be.toString : void 0;
function xt(e) {
  if (typeof e == "string")
    return e;
  if (K(e))
    return wr(e, xt) + "";
  if (Tt(e))
    return Fe ? Fe.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ir ? "-0" : t;
}
var Er = /\s/;
function Mr(e) {
  for (var t = e.length; t-- && Er.test(e.charAt(t)); )
    ;
  return t;
}
var Lr = /^\s+/;
function Rr(e) {
  return e && e.slice(0, Mr(e) + 1).replace(Lr, "");
}
function B(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ke = 0 / 0, Nr = /^[-+]0x[0-9a-f]+$/i, Dr = /^0b[01]+$/i, Ur = /^0o[0-7]+$/i, Br = parseInt;
function Ge(e) {
  if (typeof e == "number")
    return e;
  if (Tt(e))
    return ke;
  if (B(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = B(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rr(e);
  var r = Dr.test(e);
  return r || Ur.test(e) ? Br(e.slice(2), r ? 2 : 8) : Nr.test(e) ? ke : +e;
}
var Fr = "[object AsyncFunction]", kr = "[object Function]", Gr = "[object GeneratorFunction]", Hr = "[object Proxy]";
function Pt(e) {
  if (!B(e))
    return !1;
  var t = V(e);
  return t == kr || t == Gr || t == Fr || t == Hr;
}
var zr = w["__core-js_shared__"];
const be = zr;
var He = function() {
  var e = /[^.]+$/.exec(be && be.keys && be.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wr(e) {
  return !!He && He in e;
}
var qr = Function.prototype, Zr = qr.toString;
function H(e) {
  if (e != null) {
    try {
      return Zr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Kr = /[\\^$.*+?()[\]{}|]/g, Jr = /^\[object .+?Constructor\]$/, Vr = Function.prototype, Yr = Object.prototype, Xr = Vr.toString, Qr = Yr.hasOwnProperty, en = RegExp(
  "^" + Xr.call(Qr).replace(Kr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function tn(e) {
  if (!B(e) || Wr(e))
    return !1;
  var t = Pt(e) ? en : Jr;
  return t.test(H(e));
}
function rn(e, t) {
  return e == null ? void 0 : e[t];
}
function z(e, t) {
  var r = rn(e, t);
  return tn(r) ? r : void 0;
}
var nn = z(w, "WeakMap");
const _e = nn;
var ze = Object.create, sn = function() {
  function e() {
  }
  return function(t) {
    if (!B(t))
      return {};
    if (ze)
      return ze(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
const an = sn;
function on(e, t) {
  var r = -1, s = e.length;
  for (t || (t = Array(s)); ++r < s; )
    t[r] = e[r];
  return t;
}
var un = function() {
  try {
    var e = z(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const We = un;
function ln(e, t) {
  for (var r = -1, s = e == null ? 0 : e.length; ++r < s && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var cn = 9007199254740991, fn = /^(?:0|[1-9]\d*)$/;
function dn(e, t) {
  var r = typeof e;
  return t = t ?? cn, !!t && (r == "number" || r != "symbol" && fn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function St(e, t, r) {
  t == "__proto__" && We ? We(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Oe(e, t) {
  return e === t || e !== e && t !== t;
}
var hn = Object.prototype, gn = hn.hasOwnProperty;
function At(e, t, r) {
  var s = e[t];
  (!(gn.call(e, t) && Oe(s, r)) || r === void 0 && !(t in e)) && St(e, t, r);
}
function de(e, t, r, s) {
  var o = !r;
  r || (r = {});
  for (var n = -1, a = t.length; ++n < a; ) {
    var u = t[n], i = s ? s(r[u], e[u], u, r, e) : void 0;
    i === void 0 && (i = e[u]), o ? St(r, u, i) : At(r, u, i);
  }
  return r;
}
var pn = 9007199254740991;
function Ot(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pn;
}
function Ct(e) {
  return e != null && Ot(e.length) && !Pt(e);
}
var bn = Object.prototype;
function Ce(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || bn;
  return e === r;
}
function yn(e, t) {
  for (var r = -1, s = Array(e); ++r < e; )
    s[r] = t(r);
  return s;
}
var vn = "[object Arguments]";
function qe(e) {
  return U(e) && V(e) == vn;
}
var wt = Object.prototype, mn = wt.hasOwnProperty, _n = wt.propertyIsEnumerable, $n = qe(function() {
  return arguments;
}()) ? qe : function(e) {
  return U(e) && mn.call(e, "callee") && !_n.call(e, "callee");
};
const Tn = $n;
function xn() {
  return !1;
}
var jt = typeof exports == "object" && exports && !exports.nodeType && exports, Ze = jt && typeof module == "object" && module && !module.nodeType && module, Pn = Ze && Ze.exports === jt, Ke = Pn ? w.Buffer : void 0, Sn = Ke ? Ke.isBuffer : void 0, An = Sn || xn;
const le = An;
var On = "[object Arguments]", Cn = "[object Array]", wn = "[object Boolean]", jn = "[object Date]", In = "[object Error]", En = "[object Function]", Mn = "[object Map]", Ln = "[object Number]", Rn = "[object Object]", Nn = "[object RegExp]", Dn = "[object Set]", Un = "[object String]", Bn = "[object WeakMap]", Fn = "[object ArrayBuffer]", kn = "[object DataView]", Gn = "[object Float32Array]", Hn = "[object Float64Array]", zn = "[object Int8Array]", Wn = "[object Int16Array]", qn = "[object Int32Array]", Zn = "[object Uint8Array]", Kn = "[object Uint8ClampedArray]", Jn = "[object Uint16Array]", Vn = "[object Uint32Array]", p = {};
p[Gn] = p[Hn] = p[zn] = p[Wn] = p[qn] = p[Zn] = p[Kn] = p[Jn] = p[Vn] = !0;
p[On] = p[Cn] = p[Fn] = p[wn] = p[kn] = p[jn] = p[In] = p[En] = p[Mn] = p[Ln] = p[Rn] = p[Nn] = p[Dn] = p[Un] = p[Bn] = !1;
function Yn(e) {
  return U(e) && Ot(e.length) && !!p[V(e)];
}
function we(e) {
  return function(t) {
    return e(t);
  };
}
var It = typeof exports == "object" && exports && !exports.nodeType && exports, te = It && typeof module == "object" && module && !module.nodeType && module, Xn = te && te.exports === It, ye = Xn && _t.process, Qn = function() {
  try {
    var e = te && te.require && te.require("util").types;
    return e || ye && ye.binding && ye.binding("util");
  } catch {
  }
}();
const J = Qn;
var Je = J && J.isTypedArray, es = Je ? we(Je) : Yn;
const Et = es;
var ts = Object.prototype, rs = ts.hasOwnProperty;
function Mt(e, t) {
  var r = K(e), s = !r && Tn(e), o = !r && !s && le(e), n = !r && !s && !o && Et(e), a = r || s || o || n, u = a ? yn(e.length, String) : [], i = u.length;
  for (var l in e)
    (t || rs.call(e, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    dn(l, i))) && u.push(l);
  return u;
}
function Lt(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ns = Lt(Object.keys, Object);
const ss = ns;
var as = Object.prototype, os = as.hasOwnProperty;
function is(e) {
  if (!Ce(e))
    return ss(e);
  var t = [];
  for (var r in Object(e))
    os.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function je(e) {
  return Ct(e) ? Mt(e) : is(e);
}
function us(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var ls = Object.prototype, cs = ls.hasOwnProperty;
function fs(e) {
  if (!B(e))
    return us(e);
  var t = Ce(e), r = [];
  for (var s in e)
    s == "constructor" && (t || !cs.call(e, s)) || r.push(s);
  return r;
}
function Ie(e) {
  return Ct(e) ? Mt(e, !0) : fs(e);
}
var ds = z(Object, "create");
const re = ds;
function hs() {
  this.__data__ = re ? re(null) : {}, this.size = 0;
}
function gs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ps = "__lodash_hash_undefined__", bs = Object.prototype, ys = bs.hasOwnProperty;
function vs(e) {
  var t = this.__data__;
  if (re) {
    var r = t[e];
    return r === ps ? void 0 : r;
  }
  return ys.call(t, e) ? t[e] : void 0;
}
var ms = Object.prototype, _s = ms.hasOwnProperty;
function $s(e) {
  var t = this.__data__;
  return re ? t[e] !== void 0 : _s.call(t, e);
}
var Ts = "__lodash_hash_undefined__";
function xs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = re && t === void 0 ? Ts : t, this;
}
function G(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
G.prototype.clear = hs;
G.prototype.delete = gs;
G.prototype.get = vs;
G.prototype.has = $s;
G.prototype.set = xs;
function Ps() {
  this.__data__ = [], this.size = 0;
}
function he(e, t) {
  for (var r = e.length; r--; )
    if (Oe(e[r][0], t))
      return r;
  return -1;
}
var Ss = Array.prototype, As = Ss.splice;
function Os(e) {
  var t = this.__data__, r = he(t, e);
  if (r < 0)
    return !1;
  var s = t.length - 1;
  return r == s ? t.pop() : As.call(t, r, 1), --this.size, !0;
}
function Cs(e) {
  var t = this.__data__, r = he(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ws(e) {
  return he(this.__data__, e) > -1;
}
function js(e, t) {
  var r = this.__data__, s = he(r, e);
  return s < 0 ? (++this.size, r.push([e, t])) : r[s][1] = t, this;
}
function M(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
M.prototype.clear = Ps;
M.prototype.delete = Os;
M.prototype.get = Cs;
M.prototype.has = ws;
M.prototype.set = js;
var Is = z(w, "Map");
const ne = Is;
function Es() {
  this.size = 0, this.__data__ = {
    hash: new G(),
    map: new (ne || M)(),
    string: new G()
  };
}
function Ms(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ge(e, t) {
  var r = e.__data__;
  return Ms(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ls(e) {
  var t = ge(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Rs(e) {
  return ge(this, e).get(e);
}
function Ns(e) {
  return ge(this, e).has(e);
}
function Ds(e, t) {
  var r = ge(this, e), s = r.size;
  return r.set(e, t), this.size += r.size == s ? 0 : 1, this;
}
function W(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
W.prototype.clear = Es;
W.prototype.delete = Ls;
W.prototype.get = Rs;
W.prototype.has = Ns;
W.prototype.set = Ds;
function Ee(e) {
  return e == null ? "" : xt(e);
}
function Rt(e, t) {
  for (var r = -1, s = t.length, o = e.length; ++r < s; )
    e[o + r] = t[r];
  return e;
}
var Us = Lt(Object.getPrototypeOf, Object);
const Nt = Us;
function Bs(e, t, r) {
  var s = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var n = Array(o); ++s < o; )
    n[s] = e[s + t];
  return n;
}
function Fs(e, t, r) {
  var s = e.length;
  return r = r === void 0 ? s : r, !t && r >= s ? e : Bs(e, t, r);
}
var ks = "\\ud800-\\udfff", Gs = "\\u0300-\\u036f", Hs = "\\ufe20-\\ufe2f", zs = "\\u20d0-\\u20ff", Ws = Gs + Hs + zs, qs = "\\ufe0e\\ufe0f", Zs = "\\u200d", Ks = RegExp("[" + Zs + ks + Ws + qs + "]");
function Dt(e) {
  return Ks.test(e);
}
function Js(e) {
  return e.split("");
}
var Ut = "\\ud800-\\udfff", Vs = "\\u0300-\\u036f", Ys = "\\ufe20-\\ufe2f", Xs = "\\u20d0-\\u20ff", Qs = Vs + Ys + Xs, ea = "\\ufe0e\\ufe0f", ta = "[" + Ut + "]", $e = "[" + Qs + "]", Te = "\\ud83c[\\udffb-\\udfff]", ra = "(?:" + $e + "|" + Te + ")", Bt = "[^" + Ut + "]", Ft = "(?:\\ud83c[\\udde6-\\uddff]){2}", kt = "[\\ud800-\\udbff][\\udc00-\\udfff]", na = "\\u200d", Gt = ra + "?", Ht = "[" + ea + "]?", sa = "(?:" + na + "(?:" + [Bt, Ft, kt].join("|") + ")" + Ht + Gt + ")*", aa = Ht + Gt + sa, oa = "(?:" + [Bt + $e + "?", $e, Ft, kt, ta].join("|") + ")", ia = RegExp(Te + "(?=" + Te + ")|" + oa + aa, "g");
function ua(e) {
  return e.match(ia) || [];
}
function la(e) {
  return Dt(e) ? ua(e) : Js(e);
}
function ca(e) {
  return function(t) {
    t = Ee(t);
    var r = Dt(t) ? la(t) : void 0, s = r ? r[0] : t.charAt(0), o = r ? Fs(r, 1).join("") : t.slice(1);
    return s[e]() + o;
  };
}
var fa = ca("toUpperCase");
const da = fa;
function ha(e, t, r, s) {
  var o = -1, n = e == null ? 0 : e.length;
  for (s && n && (r = e[++o]); ++o < n; )
    r = t(r, e[o], o, e);
  return r;
}
function ga(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var pa = {
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
}, ba = ga(pa);
const ya = ba;
var va = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ma = "\\u0300-\\u036f", _a = "\\ufe20-\\ufe2f", $a = "\\u20d0-\\u20ff", Ta = ma + _a + $a, xa = "[" + Ta + "]", Pa = RegExp(xa, "g");
function Sa(e) {
  return e = Ee(e), e && e.replace(va, ya).replace(Pa, "");
}
var Aa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Oa(e) {
  return e.match(Aa) || [];
}
var Ca = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function wa(e) {
  return Ca.test(e);
}
var zt = "\\ud800-\\udfff", ja = "\\u0300-\\u036f", Ia = "\\ufe20-\\ufe2f", Ea = "\\u20d0-\\u20ff", Ma = ja + Ia + Ea, Wt = "\\u2700-\\u27bf", qt = "a-z\\xdf-\\xf6\\xf8-\\xff", La = "\\xac\\xb1\\xd7\\xf7", Ra = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Na = "\\u2000-\\u206f", Da = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Zt = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ua = "\\ufe0e\\ufe0f", Kt = La + Ra + Na + Da, Jt = "['’]", Ve = "[" + Kt + "]", Ba = "[" + Ma + "]", Vt = "\\d+", Fa = "[" + Wt + "]", Yt = "[" + qt + "]", Xt = "[^" + zt + Kt + Vt + Wt + qt + Zt + "]", ka = "\\ud83c[\\udffb-\\udfff]", Ga = "(?:" + Ba + "|" + ka + ")", Ha = "[^" + zt + "]", Qt = "(?:\\ud83c[\\udde6-\\uddff]){2}", er = "[\\ud800-\\udbff][\\udc00-\\udfff]", Z = "[" + Zt + "]", za = "\\u200d", Ye = "(?:" + Yt + "|" + Xt + ")", Wa = "(?:" + Z + "|" + Xt + ")", Xe = "(?:" + Jt + "(?:d|ll|m|re|s|t|ve))?", Qe = "(?:" + Jt + "(?:D|LL|M|RE|S|T|VE))?", tr = Ga + "?", rr = "[" + Ua + "]?", qa = "(?:" + za + "(?:" + [Ha, Qt, er].join("|") + ")" + rr + tr + ")*", Za = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ka = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ja = rr + tr + qa, Va = "(?:" + [Fa, Qt, er].join("|") + ")" + Ja, Ya = RegExp([
  Z + "?" + Yt + "+" + Xe + "(?=" + [Ve, Z, "$"].join("|") + ")",
  Wa + "+" + Qe + "(?=" + [Ve, Z + Ye, "$"].join("|") + ")",
  Z + "?" + Ye + "+" + Xe,
  Z + "+" + Qe,
  Ka,
  Za,
  Vt,
  Va
].join("|"), "g");
function Xa(e) {
  return e.match(Ya) || [];
}
function Qa(e, t, r) {
  return e = Ee(e), t = r ? void 0 : t, t === void 0 ? wa(e) ? Xa(e) : Oa(e) : e.match(t) || [];
}
var eo = "['’]", to = RegExp(eo, "g");
function ro(e) {
  return function(t) {
    return ha(Qa(Sa(t).replace(to, "")), e, "");
  };
}
function no() {
  this.__data__ = new M(), this.size = 0;
}
function so(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function ao(e) {
  return this.__data__.get(e);
}
function oo(e) {
  return this.__data__.has(e);
}
var io = 200;
function uo(e, t) {
  var r = this.__data__;
  if (r instanceof M) {
    var s = r.__data__;
    if (!ne || s.length < io - 1)
      return s.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new W(s);
  }
  return r.set(e, t), this.size = r.size, this;
}
function E(e) {
  var t = this.__data__ = new M(e);
  this.size = t.size;
}
E.prototype.clear = no;
E.prototype.delete = so;
E.prototype.get = ao;
E.prototype.has = oo;
E.prototype.set = uo;
function lo(e, t) {
  return e && de(t, je(t), e);
}
function co(e, t) {
  return e && de(t, Ie(t), e);
}
var nr = typeof exports == "object" && exports && !exports.nodeType && exports, et = nr && typeof module == "object" && module && !module.nodeType && module, fo = et && et.exports === nr, tt = fo ? w.Buffer : void 0, rt = tt ? tt.allocUnsafe : void 0;
function ho(e, t) {
  if (t)
    return e.slice();
  var r = e.length, s = rt ? rt(r) : new e.constructor(r);
  return e.copy(s), s;
}
function go(e, t) {
  for (var r = -1, s = e == null ? 0 : e.length, o = 0, n = []; ++r < s; ) {
    var a = e[r];
    t(a, r, e) && (n[o++] = a);
  }
  return n;
}
function sr() {
  return [];
}
var po = Object.prototype, bo = po.propertyIsEnumerable, nt = Object.getOwnPropertySymbols, yo = nt ? function(e) {
  return e == null ? [] : (e = Object(e), go(nt(e), function(t) {
    return bo.call(e, t);
  }));
} : sr;
const Me = yo;
function vo(e, t) {
  return de(e, Me(e), t);
}
var mo = Object.getOwnPropertySymbols, _o = mo ? function(e) {
  for (var t = []; e; )
    Rt(t, Me(e)), e = Nt(e);
  return t;
} : sr;
const ar = _o;
function $o(e, t) {
  return de(e, ar(e), t);
}
function or(e, t, r) {
  var s = t(e);
  return K(e) ? s : Rt(s, r(e));
}
function xe(e) {
  return or(e, je, Me);
}
function To(e) {
  return or(e, Ie, ar);
}
var xo = z(w, "DataView");
const Pe = xo;
var Po = z(w, "Promise");
const Se = Po;
var So = z(w, "Set");
const Ae = So;
var st = "[object Map]", Ao = "[object Object]", at = "[object Promise]", ot = "[object Set]", it = "[object WeakMap]", ut = "[object DataView]", Oo = H(Pe), Co = H(ne), wo = H(Se), jo = H(Ae), Io = H(_e), k = V;
(Pe && k(new Pe(new ArrayBuffer(1))) != ut || ne && k(new ne()) != st || Se && k(Se.resolve()) != at || Ae && k(new Ae()) != ot || _e && k(new _e()) != it) && (k = function(e) {
  var t = V(e), r = t == Ao ? e.constructor : void 0, s = r ? H(r) : "";
  if (s)
    switch (s) {
      case Oo:
        return ut;
      case Co:
        return st;
      case wo:
        return at;
      case jo:
        return ot;
      case Io:
        return it;
    }
  return t;
});
const se = k;
var Eo = Object.prototype, Mo = Eo.hasOwnProperty;
function Lo(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Mo.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Ro = w.Uint8Array;
const ce = Ro;
function Le(e) {
  var t = new e.constructor(e.byteLength);
  return new ce(t).set(new ce(e)), t;
}
function No(e, t) {
  var r = t ? Le(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Do = /\w*$/;
function Uo(e) {
  var t = new e.constructor(e.source, Do.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var lt = I ? I.prototype : void 0, ct = lt ? lt.valueOf : void 0;
function Bo(e) {
  return ct ? Object(ct.call(e)) : {};
}
function Fo(e, t) {
  var r = t ? Le(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var ko = "[object Boolean]", Go = "[object Date]", Ho = "[object Map]", zo = "[object Number]", Wo = "[object RegExp]", qo = "[object Set]", Zo = "[object String]", Ko = "[object Symbol]", Jo = "[object ArrayBuffer]", Vo = "[object DataView]", Yo = "[object Float32Array]", Xo = "[object Float64Array]", Qo = "[object Int8Array]", ei = "[object Int16Array]", ti = "[object Int32Array]", ri = "[object Uint8Array]", ni = "[object Uint8ClampedArray]", si = "[object Uint16Array]", ai = "[object Uint32Array]";
function oi(e, t, r) {
  var s = e.constructor;
  switch (t) {
    case Jo:
      return Le(e);
    case ko:
    case Go:
      return new s(+e);
    case Vo:
      return No(e, r);
    case Yo:
    case Xo:
    case Qo:
    case ei:
    case ti:
    case ri:
    case ni:
    case si:
    case ai:
      return Fo(e, r);
    case Ho:
      return new s();
    case zo:
    case Zo:
      return new s(e);
    case Wo:
      return Uo(e);
    case qo:
      return new s();
    case Ko:
      return Bo(e);
  }
}
function ii(e) {
  return typeof e.constructor == "function" && !Ce(e) ? an(Nt(e)) : {};
}
var ui = "[object Map]";
function li(e) {
  return U(e) && se(e) == ui;
}
var ft = J && J.isMap, ci = ft ? we(ft) : li;
const fi = ci;
var di = "[object Set]";
function hi(e) {
  return U(e) && se(e) == di;
}
var dt = J && J.isSet, gi = dt ? we(dt) : hi;
const pi = gi;
var bi = 1, yi = 2, vi = 4, ir = "[object Arguments]", mi = "[object Array]", _i = "[object Boolean]", $i = "[object Date]", Ti = "[object Error]", ur = "[object Function]", xi = "[object GeneratorFunction]", Pi = "[object Map]", Si = "[object Number]", lr = "[object Object]", Ai = "[object RegExp]", Oi = "[object Set]", Ci = "[object String]", wi = "[object Symbol]", ji = "[object WeakMap]", Ii = "[object ArrayBuffer]", Ei = "[object DataView]", Mi = "[object Float32Array]", Li = "[object Float64Array]", Ri = "[object Int8Array]", Ni = "[object Int16Array]", Di = "[object Int32Array]", Ui = "[object Uint8Array]", Bi = "[object Uint8ClampedArray]", Fi = "[object Uint16Array]", ki = "[object Uint32Array]", h = {};
h[ir] = h[mi] = h[Ii] = h[Ei] = h[_i] = h[$i] = h[Mi] = h[Li] = h[Ri] = h[Ni] = h[Di] = h[Pi] = h[Si] = h[lr] = h[Ai] = h[Oi] = h[Ci] = h[wi] = h[Ui] = h[Bi] = h[Fi] = h[ki] = !0;
h[Ti] = h[ur] = h[ji] = !1;
function ue(e, t, r, s, o, n) {
  var a, u = t & bi, i = t & yi, l = t & vi;
  if (r && (a = o ? r(e, s, o, n) : r(e)), a !== void 0)
    return a;
  if (!B(e))
    return e;
  var $ = K(e);
  if ($) {
    if (a = Lo(e), !u)
      return on(e, a);
  } else {
    var g = se(e), b = g == ur || g == xi;
    if (le(e))
      return ho(e, u);
    if (g == lr || g == ir || b && !o) {
      if (a = i || b ? {} : ii(e), !u)
        return i ? $o(e, co(a, e)) : vo(e, lo(a, e));
    } else {
      if (!h[g])
        return o ? e : {};
      a = oi(e, g, u);
    }
  }
  n || (n = new E());
  var T = n.get(e);
  if (T)
    return T;
  n.set(e, a), pi(e) ? e.forEach(function(v) {
    a.add(ue(v, t, r, v, e, n));
  }) : fi(e) && e.forEach(function(v, m) {
    a.set(m, ue(v, t, r, m, e, n));
  });
  var x = l ? i ? To : xe : i ? Ie : je, P = $ ? void 0 : x(e);
  return ln(P || e, function(v, m) {
    P && (m = v, v = e[m]), At(a, m, ue(v, t, r, m, e, n));
  }), a;
}
var Gi = 1, Hi = 4;
function zi(e) {
  return ue(e, Gi | Hi);
}
var Wi = "__lodash_hash_undefined__";
function qi(e) {
  return this.__data__.set(e, Wi), this;
}
function Zi(e) {
  return this.__data__.has(e);
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new W(); ++t < r; )
    this.add(e[t]);
}
fe.prototype.add = fe.prototype.push = qi;
fe.prototype.has = Zi;
function Ki(e, t) {
  for (var r = -1, s = e == null ? 0 : e.length; ++r < s; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Ji(e, t) {
  return e.has(t);
}
var Vi = 1, Yi = 2;
function cr(e, t, r, s, o, n) {
  var a = r & Vi, u = e.length, i = t.length;
  if (u != i && !(a && i > u))
    return !1;
  var l = n.get(e), $ = n.get(t);
  if (l && $)
    return l == t && $ == e;
  var g = -1, b = !0, T = r & Yi ? new fe() : void 0;
  for (n.set(e, t), n.set(t, e); ++g < u; ) {
    var x = e[g], P = t[g];
    if (s)
      var v = a ? s(P, x, g, t, e, n) : s(x, P, g, e, t, n);
    if (v !== void 0) {
      if (v)
        continue;
      b = !1;
      break;
    }
    if (T) {
      if (!Ki(t, function(m, j) {
        if (!Ji(T, j) && (x === m || o(x, m, r, s, n)))
          return T.push(j);
      })) {
        b = !1;
        break;
      }
    } else if (!(x === P || o(x, P, r, s, n))) {
      b = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), b;
}
function Xi(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(s, o) {
    r[++t] = [o, s];
  }), r;
}
function Qi(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(s) {
    r[++t] = s;
  }), r;
}
var eu = 1, tu = 2, ru = "[object Boolean]", nu = "[object Date]", su = "[object Error]", au = "[object Map]", ou = "[object Number]", iu = "[object RegExp]", uu = "[object Set]", lu = "[object String]", cu = "[object Symbol]", fu = "[object ArrayBuffer]", du = "[object DataView]", ht = I ? I.prototype : void 0, ve = ht ? ht.valueOf : void 0;
function hu(e, t, r, s, o, n, a) {
  switch (r) {
    case du:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fu:
      return !(e.byteLength != t.byteLength || !n(new ce(e), new ce(t)));
    case ru:
    case nu:
    case ou:
      return Oe(+e, +t);
    case su:
      return e.name == t.name && e.message == t.message;
    case iu:
    case lu:
      return e == t + "";
    case au:
      var u = Xi;
    case uu:
      var i = s & eu;
      if (u || (u = Qi), e.size != t.size && !i)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      s |= tu, a.set(e, t);
      var $ = cr(u(e), u(t), s, o, n, a);
      return a.delete(e), $;
    case cu:
      if (ve)
        return ve.call(e) == ve.call(t);
  }
  return !1;
}
var gu = 1, pu = Object.prototype, bu = pu.hasOwnProperty;
function yu(e, t, r, s, o, n) {
  var a = r & gu, u = xe(e), i = u.length, l = xe(t), $ = l.length;
  if (i != $ && !a)
    return !1;
  for (var g = i; g--; ) {
    var b = u[g];
    if (!(a ? b in t : bu.call(t, b)))
      return !1;
  }
  var T = n.get(e), x = n.get(t);
  if (T && x)
    return T == t && x == e;
  var P = !0;
  n.set(e, t), n.set(t, e);
  for (var v = a; ++g < i; ) {
    b = u[g];
    var m = e[b], j = t[b];
    if (s)
      var ae = a ? s(j, m, b, t, e, n) : s(m, j, b, e, t, n);
    if (!(ae === void 0 ? m === j || o(m, j, r, s, n) : ae)) {
      P = !1;
      break;
    }
    v || (v = b == "constructor");
  }
  if (P && !v) {
    var q = e.constructor, R = t.constructor;
    q != R && "constructor" in e && "constructor" in t && !(typeof q == "function" && q instanceof q && typeof R == "function" && R instanceof R) && (P = !1);
  }
  return n.delete(e), n.delete(t), P;
}
var vu = 1, gt = "[object Arguments]", pt = "[object Array]", ie = "[object Object]", mu = Object.prototype, bt = mu.hasOwnProperty;
function _u(e, t, r, s, o, n) {
  var a = K(e), u = K(t), i = a ? pt : se(e), l = u ? pt : se(t);
  i = i == gt ? ie : i, l = l == gt ? ie : l;
  var $ = i == ie, g = l == ie, b = i == l;
  if (b && le(e)) {
    if (!le(t))
      return !1;
    a = !0, $ = !1;
  }
  if (b && !$)
    return n || (n = new E()), a || Et(e) ? cr(e, t, r, s, o, n) : hu(e, t, i, r, s, o, n);
  if (!(r & vu)) {
    var T = $ && bt.call(e, "__wrapped__"), x = g && bt.call(t, "__wrapped__");
    if (T || x) {
      var P = T ? e.value() : e, v = x ? t.value() : t;
      return n || (n = new E()), o(P, v, r, s, n);
    }
  }
  return b ? (n || (n = new E()), yu(e, t, r, s, o, n)) : !1;
}
function fr(e, t, r, s, o) {
  return e === t ? !0 : e == null || t == null || !U(e) && !U(t) ? e !== e && t !== t : _u(e, t, r, s, fr, o);
}
var $u = function() {
  return w.Date.now();
};
const me = $u;
var Tu = "Expected a function", xu = Math.max, Pu = Math.min;
function yt(e, t, r) {
  var s, o, n, a, u, i, l = 0, $ = !1, g = !1, b = !0;
  if (typeof e != "function")
    throw new TypeError(Tu);
  t = Ge(t) || 0, B(r) && ($ = !!r.leading, g = "maxWait" in r, n = g ? xu(Ge(r.maxWait) || 0, t) : n, b = "trailing" in r ? !!r.trailing : b);
  function T(_) {
    var N = s, Y = o;
    return s = o = void 0, l = _, a = e.apply(Y, N), a;
  }
  function x(_) {
    return l = _, u = setTimeout(m, t), $ ? T(_) : a;
  }
  function P(_) {
    var N = _ - i, Y = _ - l, Re = t - N;
    return g ? Pu(Re, n - Y) : Re;
  }
  function v(_) {
    var N = _ - i, Y = _ - l;
    return i === void 0 || N >= t || N < 0 || g && Y >= n;
  }
  function m() {
    var _ = me();
    if (v(_))
      return j(_);
    u = setTimeout(m, P(_));
  }
  function j(_) {
    return u = void 0, b && s ? T(_) : (s = o = void 0, a);
  }
  function ae() {
    u !== void 0 && clearTimeout(u), l = 0, s = i = o = u = void 0;
  }
  function q() {
    return u === void 0 ? a : j(me());
  }
  function R() {
    var _ = me(), N = v(_);
    if (s = arguments, o = this, i = _, N) {
      if (u === void 0)
        return x(i);
      if (g)
        return clearTimeout(u), u = setTimeout(m, t), T(i);
    }
    return u === void 0 && (u = setTimeout(m, t)), a;
  }
  return R.cancel = ae, R.flush = q, R;
}
function vt(e, t) {
  return fr(e, t);
}
var Su = ro(function(e, t, r) {
  return e + (r ? " " : "") + da(t);
});
const mt = Su, L = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
}, Au = {
  name: "VList",
  props: {
    /**
     * An API endpoint to hit for getting data. This will be appended to baseUrl
     */
    endpoint: String,
    /**
     * Static Config which will be passed to handler
     */
    config: Object,
    /**
     * Default page to load.
     */
    page: {
      type: Number,
      default: 1
    },
    /**
     * Number of results to fetch and display on each page.
     */
    perPage: {
      type: Number,
      default: 25
    },
    /**
     * Additional parameters to pass when making an API request.
     */
    params: Object,
    /**
     * Just like parameters but specifically to filter data.
     */
    filters: Object,
    /**
     * Uses this attribute when sorting items in listing.
     */
    sortBy: String,
    /**
     * Ascending or Descending?
     */
    sortOrder: {
      type: String,
      validator(e) {
        return ["asc", "desc"].includes(e);
      }
    },
    /**
     * Default search query to use
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
    return {
      localPage: this.page,
      serverPage: null,
      localPerPage: this.perPage,
      localSortBy: this.sortBy,
      localSortOrder: this.sortOrder,
      localSearch: this.search,
      localItems: null,
      localAttrs: null,
      paginationMode: null,
      selection: [],
      error: !1,
      response: null,
      count: 0,
      initial: !0,
      loading: !1,
      loadingMore: !1,
      loadingPage: !1
    };
  },
  watch: {
    /**
     * Only filters, params, localSearch, sortBy & sortOrder props will react to change
     * All other props are non-reactive once component is initialized.
     * When filters and params are changed, we need to reset the page
     * and resetting a page will use the latest filter and params props.
     */
    filters: {
      deep: !0,
      handler(e, t) {
        vt(e, t) || this.changePage(1);
      }
    },
    params: {
      deep: !0,
      handler(e, t) {
        vt(e, t) || this.changePage(1);
      }
    },
    search(e, t) {
      e != t && (this.localSearch = e, this.changePage(1));
    },
    localSearch(e, t) {
      e != t && this.changePage(1);
    },
    sortBy(e, t) {
      e != t && (this.localSortBy = e, this.changePage(1));
    },
    sortOrder(e, t) {
      e != t && (this.localSortOrder = e, this.changePage(1));
    },
    selection: {
      deep: !0,
      handler(e, t) {
        this.$emit("selection", e, t);
      }
    },
    "$route.query.page"(e) {
      e ? this.localPage != e && this.changePage(e) : this.changePage(1);
    }
  },
  /**
   * localAttrs data is required for child components and hence generating on created.
   */
  created() {
    this.localAttrs = this.attrSerializer(this.attrsToUse);
  },
  /**
   * Once all the child components are ready and provided a proper state like "paginationMode"
   * call initialization of table.
   */
  mounted() {
    this.init();
  },
  computed: {
    instance() {
      return this;
    },
    attrsToUse() {
      var t;
      const e = this.attrs || Object.keys(((t = this.localItems) == null ? void 0 : t[0]) || {});
      return this.attrsAdaptor(e);
    },
    isEmpty() {
      var e;
      return ((e = this.localItems) == null ? void 0 : e.length) == 0;
    },
    scope() {
      return {
        items: this.localItems,
        response: this.response,
        loading: this.loading,
        isEmpty: this.isEmpty,
        refresh: this.refresh,
        selection: this.selection,
        instance: this.instance,
        loadingPage: this.loadingPage,
        loadingMore: this.loadingMore
      };
    }
  },
  methods: {
    init() {
      var t, r;
      if (!this.endpoint)
        return;
      const e = Number((r = (t = this.$route) == null ? void 0 : t.query) == null ? void 0 : r.page) || this.page;
      if (e < 1) {
        const s = this.$route.query || {};
        this.$router.replace({
          query: {
            ...s,
            page: void 0
          }
        });
      } else
        this.changePage(e);
    },
    attrSerializer(e) {
      return e.map((t) => typeof t == "string" ? {
        label: mt(t),
        name: t,
        visible: !0
      } : (t.attrs && (t.attrs = this.attrSerializer(t.attrs)), {
        visible: !0,
        label: mt(t.name),
        ...t
      }));
    },
    set(e, t) {
      this[e] = t;
    },
    refresh() {
      this.getData();
    },
    changePage(e) {
      this.localPage = e, this.getData();
    },
    changePerPage(e) {
      this.localPerPage = e, this.changePage(1);
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
      t ? (this.localItems = this.localItems.concat(e.items), this.$emit("afterLoadMore", e)) : (this.localItems = e.items, this.$emit("afterLoad", e)), this.count = e.count;
    },
    /**
     * Updates the query parameters in the router when pagination is available.
     *
     * Initially when the component is loaded, the default page is 1 and no query param is added.
     * So when navigaing back to page=1, we should avoid adding page = 1 in query param to avoid
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
      this.error = !1, this.setLoader(!0), (this.requestHandler || this.options.requestHandler)({
        method: "get",
        endpoint: this.endpoint,
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
        config: this.config
      }).then((r) => {
        this.response = r, this.selection = [], this.$emit("res", r), this.setData(r, e), this.setUrl(), this.setLoader(!1), this.serverPage = this.localPage;
      }).catch((r) => {
        throw this.error = r, this.setLoader(!1), new Error(r);
      });
    },
    setLoader(e) {
      e ? this.paginationMode == "infinite" ? this.loadingMore = !0 : this.initial ? this.loading = !0 : this.loadingPage = !0 : (this.initial = !1, this.loading = !1, this.loadingPage = !1, this.loadingMore = !1);
    },
    sort(e) {
      const t = {
        items: e,
        endpoint: this.endpoint,
        params: this.params
      };
      this.$attrs.sort ? this.$emit("sort", t) : this.$options.sort && this.$options.sort(t);
    },
    updateAttr(e, t, r) {
      const s = this.localAttrs.find((o) => o.name == e);
      s[t] = r;
    }
  }
}, Ou = { class: "v-list" }, Cu = /* @__PURE__ */ y("p", null, "Loading...", -1), wu = /* @__PURE__ */ y("p", null, "Loading Page...", -1), ju = /* @__PURE__ */ y("p", null, "There was an error while processing your request.", -1), Iu = /* @__PURE__ */ y("p", null, "No data found!", -1);
function Eu(e, t, r, s, o, n) {
  return c(), f("div", Ou, [
    d(e.$slots, "header", S(ee(n.scope))),
    o.loading ? d(e.$slots, "loading", S(C({ key: 0 }, n.scope)), () => [
      Cu
    ]) : (c(), f(A, { key: 1 }, [
      o.loadingPage ? d(e.$slots, "loading-page", S(C({ key: 0 }, n.scope)), () => [
        wu
      ]) : Q("", !0),
      o.error ? d(e.$slots, "error", C({
        key: 1,
        error: o.error
      }, n.scope), () => [
        y("div", null, [
          ju,
          y("p", null, O(o.error), 1)
        ])
      ]) : n.isEmpty ? d(e.$slots, "empty", S(C({ key: 2 }, n.scope)), () => [
        Iu
      ]) : d(e.$slots, "default", S(C({ key: 3 }, n.scope)))
    ], 64)),
    d(e.$slots, "footer", S(ee(n.scope)))
  ]);
}
const Mu = /* @__PURE__ */ L(Au, [["render", Eu]]), F = {
  props: {
    parent: Object
  },
  computed: {
    root() {
      return this.parent || this.$parent;
    }
  }
}, Lu = {
  mixins: [F],
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
  created() {
    this.root.set("paginationMode", "paging");
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
      this.change(this.page - 1);
    },
    next() {
      this.change(this.page + 1);
    },
    first() {
      this.change(1);
    },
    last() {
      this.change(this.total);
    },
    change(e) {
      this.root.changePage(e);
    }
  }
}, Ru = { class: "v-list-pagination" }, Nu = ["disabled"], Du = ["disabled"], Uu = ["onClick"], Bu = ["disabled"], Fu = ["disabled"];
function ku(e, t, r, s, o, n) {
  return c(), f("div", Ru, [
    d(e.$slots, "first", {
      first: n.first,
      hasPrev: n.hasPrev
    }, () => [
      y("button", {
        disabled: !n.hasPrev,
        onClick: t[0] || (t[0] = (...a) => n.first && n.first(...a))
      }, "First", 8, Nu)
    ]),
    d(e.$slots, "prev", {
      prev: n.prev,
      hasPrev: n.hasPrev
    }, () => [
      y("button", {
        disabled: !n.hasPrev,
        onClick: t[1] || (t[1] = (...a) => n.prev && n.prev(...a))
      }, "Prev", 8, Du)
    ]),
    (c(!0), f(A, null, D(n.pagesToDisplay, (a) => d(e.$slots, "page", {
      change: n.change,
      value: a,
      isActive: a == n.page
    }, () => [
      a == n.page ? (c(), f("span", {
        key: `page-${a}`
      }, O(a), 1)) : (c(), f("button", {
        key: `page-${a}`,
        onClick: (u) => n.change(a)
      }, O(a), 9, Uu))
    ])), 256)),
    d(e.$slots, "next", {
      next: n.next,
      hasNext: n.hasNext
    }, () => [
      y("button", {
        disabled: !n.hasNext,
        onClick: t[2] || (t[2] = (...a) => n.next && n.next(...a))
      }, "Next", 8, Bu)
    ]),
    d(e.$slots, "last", {
      last: n.last,
      hasNext: n.hasNext
    }, () => [
      y("button", {
        disabled: !n.hasNext,
        onClick: t[3] || (t[3] = (...a) => n.last && n.last(...a))
      }, "Last", 8, Fu)
    ])
  ]);
}
const Gu = /* @__PURE__ */ L(Lu, [["render", ku]]), Hu = {
  mixins: [F],
  computed: {
    items() {
      return this.root.localItems || [];
    },
    showing() {
      return this.items.length;
    },
    count() {
      return this.root.count;
    }
  }
}, zu = { class: "v-list-counter" };
function Wu(e, t, r, s, o, n) {
  return c(), f("div", zu, [
    d(e.$slots, "default", {
      showing: n.showing,
      count: n.count
    }, () => [
      y("span", null, " Showing " + O(n.showing) + " items out of " + O(n.count), 1)
    ])
  ]);
}
const qu = /* @__PURE__ */ L(Hu, [["render", Wu]]), Zu = {
  mixins: [F],
  props: {
    /**
     * An array of options which lets user select how many items they want to see in a list at a time.
     * Provide an object with 'label' and 'value' keys to have a label diffrent then a value.
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
  },
  methods: {
    change(e) {
      this.root.changePerPage(e);
    }
  }
}, Ku = { class: "v-list-per-page" }, Ju = ["value"], Vu = ["value"];
function Yu(e, t, r, s, o, n) {
  return c(), f("div", Ku, [
    d(e.$slots, "default", {
      value: n.perPage,
      change: n.change,
      options: n.serializedOptions
    }, () => [
      y("select", {
        value: n.perPage,
        onInput: t[0] || (t[0] = (a) => n.change(a.target.value))
      }, [
        (c(!0), f(A, null, D(n.serializedOptions, (a, u) => (c(), f("option", {
          key: `option-${u}`,
          value: a.value
        }, O(a.label), 9, Vu))), 128))
      ], 40, Ju)
    ])
  ]);
}
const Xu = /* @__PURE__ */ L(Zu, [["render", Yu]]), Qu = {
  mixins: [F],
  methods: {
    /**
     * Update the config of an attribute
     *
     * @param {name} string Name of an attribute
     * @param {prop} string A property to update
     * @param {value} string A value to set
     */
    update(e, t, r) {
      this.root.updateAttr(e, t, r);
    }
  }
}, el = { class: "v-list-attributes" }, tl = ["checked", "onInput"];
function rl(e, t, r, s, o, n) {
  return c(), f("div", el, [
    (c(!0), f(A, null, D(e.root.localAttrs, (a, u) => d(e.$slots, "default", {
      update: n.update,
      attr: a
    }, () => [
      (c(), f("label", {
        key: `attr-${u}`
      }, [
        y("span", null, O(a.label), 1),
        y("input", {
          type: "checkbox",
          checked: a.visible,
          onInput: (i) => n.update(a.name, "visible", i.target.checked)
        }, null, 40, tl)
      ]))
    ])), 256))
  ]);
}
const nl = /* @__PURE__ */ L(Qu, [["render", rl]]), sl = {
  mixins: [F],
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
      debounce: yt,
      set: null
    };
  },
  created() {
    this.set = yt((e) => {
      this.root.localSearch = e;
    }, this.debounceTime);
  }
}, al = { class: "v-list-search" }, ol = ["value"];
function il(e, t, r, s, o, n) {
  return c(), f("div", al, [
    d(e.$slots, "default", {
      value: e.root.localSearch,
      set: o.set
    }, () => [
      y("input", {
        type: "text",
        value: e.root.localSearch,
        onInput: t[0] || (t[0] = (a) => o.set(a.target.value)),
        placeholder: "Search"
      }, null, 40, ol)
    ])
  ]);
}
const ul = /* @__PURE__ */ L(sl, [["render", il]]), ll = {
  mixins: [F],
  created() {
    this.root.set("paginationMode", "infinite");
  },
  computed: {
    loadingMore() {
      return this.root.loadingMore;
    },
    loaded() {
      var e;
      return (e = this.root.localItems) == null ? void 0 : e.length;
    },
    count() {
      return this.root.count;
    }
  },
  methods: {
    loadMore() {
      this.root.loadMore();
    }
  }
}, cl = { class: "v-list-load-more" }, fl = /* @__PURE__ */ y("p", null, "— That's all —", -1);
function dl(e, t, r, s, o, n) {
  return c(), f("div", cl, [
    n.count > n.loaded ? d(e.$slots, "default", {
      key: 0,
      loading: n.loadingMore,
      loadMore: n.loadMore
    }, () => [
      y("button", {
        onClick: t[0] || (t[0] = (...a) => n.loadMore && n.loadMore(...a))
      }, "Load More")
    ]) : d(e.$slots, "end", { key: 1 }, () => [
      fl
    ])
  ]);
}
const hl = /* @__PURE__ */ L(ll, [["render", dl]]), gl = {
  mixins: [F],
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
  },
  methods: {
    change(e) {
      this.root.changePage(e);
    }
  }
}, pl = { class: "v-list-go-to" }, bl = ["value"];
function yl(e, t, r, s, o, n) {
  return c(), f("div", pl, [
    d(e.$slots, "select", {
      change: n.change,
      value: n.page,
      options: n.options,
      total: n.total
    }, () => [
      y("select", {
        onInput: t[0] || (t[0] = (a) => n.change(a.target.value)),
        value: n.page
      }, [
        (c(!0), f(A, null, D(n.options, (a, u) => (c(), f("option", {
          key: `option-${u}`
        }, O(a), 1))), 128))
      ], 40, bl)
    ])
  ]);
}
const vl = /* @__PURE__ */ L(gl, [["render", yl]]), ml = {
  mixins: [F],
  inject: ["OPTIONS"],
  computed: {
    items() {
      return this.root.localItems || [];
    },
    attrs() {
      return this.root.localAttrs;
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
      this.root.set("localSortBy", e.name), this.sortOrder == "asc" ? this.root.set("localSortOrder", "desc") : this.root.set("localSortOrder", "asc"), this.root.refresh();
    },
    itemIndex(e) {
      return this.root.localPerPage * (this.root.serverPage - 1) + e + 1;
    }
  }
}, _l = (...e) => e.join("-"), $l = {
  mixins: [ml],
  props: {
    reorder: {
      type: Boolean,
      default: !1
    },
    rowClass: {
      type: Function
    }
  },
  inject: ["OPTIONS"],
  data() {
    return {
      key: _l,
      headers: [],
      body: []
    };
  },
  watch: {
    attrs: {
      deep: !0,
      handler(e) {
        this.headers = [], this.body = [], this.generateHeader(e, 0);
      }
    }
  },
  created() {
    this.generateHeader(this.attrs, 0);
  },
  computed: {
    rows: {
      set(e) {
        this.$emit("reorder", e), this.root.set("localItems", e);
      },
      get() {
        return zi(this.items);
      }
    },
    selectionState() {
      return this.root.selection.length === this.rows.length ? "all" : this.root.selection.length === 0 ? "none" : "some";
    }
  },
  methods: {
    rowspan(e, t) {
      let r = 1;
      for (var s = e + 1; s < this.headers.length; s++) {
        if (this.headers[s].some((a) => a.key.startsWith(t)))
          return r;
        r++;
      }
      return r;
    },
    colspan(e, t) {
      let r = 1;
      for (var s = e + 1; s < this.headers.length; s++) {
        const n = this.headers[s].filter((a) => a.key.startsWith(t));
        (n == null ? void 0 : n.length) > 0 && (r = r + n.length - 1);
      }
      return r;
    },
    generateHeader(e, t, r = "0") {
      this.headers[t] || (this.headers[t] = []), e.forEach((s, o) => {
        if (s.visible) {
          const n = r + "" + o;
          if (s.key = n, this.headers[t].push(s), s.attrs) {
            const a = t + 1;
            this.generateHeader(s.attrs, a, n);
          } else
            this.body.push(s);
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
      const t = [...this.columnClass(e)], { emit: r } = dr();
      return r && r("rowClick") && e.rowClick !== !1 && t.push("v-list-table__click"), t;
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
        const s = t[r];
        if (s && e.valueMap[s])
          return e.valueMap[s];
      }
      return e.type && this.OPTIONS.typeAdapters[e.type] ? this.OPTIONS.typeAdapters[e.type](t[r], t) : e.value ? e.value(t) : t[r];
    },
    toggleSelect(e) {
      const t = [...this.root.selection], r = t.findIndex((s) => s.id === e.id);
      r > -1 ? t.splice(r, 1) : t.push({ ...e }), this.root.set("selection", t);
    },
    isSelected(e) {
      return [...this.root.selection].findIndex((s) => s.id === e.id) > -1;
    },
    toggleSelectAll() {
      switch (this.selectionState) {
        case "all":
          this.root.set("selection", []);
          break;
        case "some":
        case "none":
          this.root.set("selection", this.rows);
          break;
      }
    }
  }
}, Tl = { class: "v-list-table" }, xl = ["rowspan", "colspan", "onClick"], Pl = { class: "v-list-table__head" }, Sl = { key: 0 }, Al = { key: 1 }, Ol = ["onClick"], Cl = /* @__PURE__ */ y("span", { class: "v-list-table__drag" }, "Drag", -1);
function wl(e, t, r, s, o, n) {
  return c(), f("table", Tl, [
    y("thead", null, [
      (c(!0), f(A, null, D(o.headers, (a, u) => (c(), f("tr", {
        key: o.key("head-row", u),
        class: oe([...r.rowClass(a, u)])
      }, [
        (c(!0), f(A, null, D(a, (i, l) => (c(), f(A, null, [
          i.visible ? (c(), f("th", {
            key: o.key("head-col", u, l),
            class: oe(n.thClass(i)),
            style: hr(n.thStyle(i)),
            rowspan: n.rowspan(u, i.key),
            colspan: n.colspan(u, i.key),
            onClick: ($) => i.sortable ? e.sortItemsBy(i) : null
          }, [
            y("div", Pl, [
              d(e.$slots, "th_before", S(ee(n.thScope(i)))),
              d(e.$slots, `th_${i.name}`, S(ee(n.thScope(i))), () => [
                y("span", null, O(i.label), 1)
              ]),
              d(e.$slots, "th_after", S(ee(n.thScope(i))), () => [
                i.name == e.sortBy ? (c(), f(A, { key: 0 }, [
                  e.sortOrder == "asc" ? (c(), f("span", Sl, "↑")) : e.sortOrder == "desc" ? (c(), f("span", Al, "↓")) : Q("", !0)
                ], 64)) : Q("", !0)
              ])
            ])
          ], 14, xl)) : Q("", !0)
        ], 64))), 256))
      ], 2))), 128))
    ]),
    (c(), Ne(De(r.reorder ? "draggable" : "tbody"), C(r.reorder ? { handle: ".v-list-table__drag", tag: "tbody" } : {}, {
      modelValue: n.rows,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => n.rows = a)
    }), {
      default: gr(() => [
        d(e.$slots, "body-start"),
        (c(!0), f(A, null, D(n.rows, (a, u) => (c(), f("tr", {
          key: o.key("body-row", u),
          class: oe([
            { "v-list-table__selected": n.isSelected(a) },
            ...r.rowClass(a, u)
          ])
        }, [
          (c(!0), f(A, null, D(o.body, (i, l) => (c(), f(A, null, [
            i.visible ? (c(), f("td", {
              key: o.key("body-col", l),
              class: oe(n.tdClass(i)),
              onClick: ($) => n.tdClick(i, a)
            }, [
              e.$slots[i.name] ? d(e.$slots, i.name, S(C({ key: 0 }, n.tdScope(i, a, u))), () => [
                pe(O(a[i.name]), 1)
              ]) : n.OPTIONS.slots && n.OPTIONS.slots[i.name] ? (c(), Ne(De(n.OPTIONS.slots[i.name]), S(C({ key: 1 }, n.tdScope(i, a, u))), null, 16)) : i.name == "_index" ? d(e.$slots, "_index", S(C({ key: 2 }, n.tdScope(i, a, u))), () => [
                pe(O(e.itemIndex(u)), 1)
              ]) : i.name == "_drag" ? d(e.$slots, "_drag", S(C({ key: 3 }, n.tdScope(i, a, u))), () => [
                Cl
              ]) : d(e.$slots, i.name, S(C({ key: 4 }, n.tdScope(i, a, u))), () => [
                pe(O(n.td(i, a)), 1)
              ])
            ], 10, Ol)) : Q("", !0)
          ], 64))), 256))
        ], 2))), 128)),
        d(e.$slots, "body-end")
      ]),
      _: 3
    }, 16, ["modelValue"]))
  ]);
}
const jl = /* @__PURE__ */ L($l, [["render", wl]]), Il = (e, t = {}) => {
  const r = Object.assign({}, pr, t), s = r.componentPrefix;
  e.component(`${s}List`, {
    data() {
      return {
        options: r
      };
    },
    provide: {
      OPTIONS: r
    },
    extends: Mu
  }), e.component(`${s}ListPagination`, Gu), e.component(`${s}ListCounter`, qu), e.component(`${s}ListPerPage`, Xu), e.component(`${s}ListAttributes`, nl), e.component(`${s}ListSearch`, ul), e.component(`${s}ListLoadMore`, hl), e.component(`${s}ListTable`, jl), e.component(`${s}ListGoTo`, vl);
}, El = {
  install: Il
};
typeof window < "u" && window.Vue && window.Vue.use(El);
export {
  El as default
};
