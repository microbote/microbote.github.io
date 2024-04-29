;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const r of o.addedNodes) r.tagName === 'LINK' && r.rel === 'modulepreload' && s(r)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
/**
 * @vue/shared v3.4.23
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function si(e, t) {
  const n = new Set(e.split(','))
  return (s) => n.has(s)
}
const re = {},
  zt = [],
  Me = () => {},
  Ca = () => !1,
  Gn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ii = (e) => e.startsWith('onUpdate:'),
  ge = Object.assign,
  oi = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Ra = Object.prototype.hasOwnProperty,
  Y = (e, t) => Ra.call(e, t),
  z = Array.isArray,
  Bt = (e) => Qn(e) === '[object Map]',
  Bo = (e) => Qn(e) === '[object Set]',
  V = (e) => typeof e == 'function',
  fe = (e) => typeof e == 'string',
  Tt = (e) => typeof e == 'symbol',
  ae = (e) => e !== null && typeof e == 'object',
  Fo = (e) => (ae(e) || V(e)) && V(e.then) && V(e.catch),
  Uo = Object.prototype.toString,
  Qn = (e) => Uo.call(e),
  ka = (e) => Qn(e).slice(8, -1),
  Vo = (e) => Qn(e) === '[object Object]',
  ri = (e) => fe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  an = si(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Yn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Ta = /-(\w)/g,
  Xe = Yn((e) => e.replace(Ta, (t, n) => (n ? n.toUpperCase() : ''))),
  $a = /\B([A-Z])/g,
  Qt = Yn((e) => e.replace($a, '-$1').toLowerCase()),
  Xn = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  vs = Yn((e) => (e ? `on${Xn(e)}` : '')),
  vt = (e, t) => !Object.is(e, t),
  gs = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Wo = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Aa = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Ii
const Ko = () =>
  Ii ||
  (Ii =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function ai(e) {
  if (z(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = fe(s) ? Ma(s) : ai(s)
      if (i) for (const o in i) t[o] = i[o]
    }
    return t
  } else if (fe(e) || ae(e)) return e
}
const Oa = /;(?![^(]*\))/g,
  Pa = /:([^]+)/,
  La = /\/\*[^]*?\*\//g
function Ma(e) {
  const t = {}
  return (
    e
      .replace(La, '')
      .split(Oa)
      .forEach((n) => {
        if (n) {
          const s = n.split(Pa)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Zn(e) {
  let t = ''
  if (fe(e)) t = e
  else if (z(e))
    for (let n = 0; n < e.length; n++) {
      const s = Zn(e[n])
      s && (t += s + ' ')
    }
  else if (ae(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Ia = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  qa = si(Ia)
function Jo(e) {
  return !!e || e === ''
}
const St = (e) =>
    fe(e)
      ? e
      : e == null
        ? ''
        : z(e) || (ae(e) && (e.toString === Uo || !V(e.toString)))
          ? JSON.stringify(e, Go, 2)
          : String(e),
  Go = (e, t) =>
    t && t.__v_isRef
      ? Go(e, t.value)
      : Bt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, i], o) => ((n[_s(s, o) + ' =>'] = i), n),
              {}
            )
          }
        : Bo(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => _s(n)) }
          : Tt(t)
            ? _s(t)
            : ae(t) && !z(t) && !Vo(t)
              ? String(t)
              : t,
  _s = (e, t = '') => {
    var n
    return Tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.23
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let He
class ja {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = He),
      !t && He && (this.index = (He.scopes || (He.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = He
      try {
        return (He = this), t()
      } finally {
        He = n
      }
    }
  }
  on() {
    He = this
  }
  off() {
    He = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Na(e, t = He) {
  t && t.active && t.effects.push(e)
}
function Ha() {
  return He
}
let Ct
class li {
  constructor(t, n, s, i) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Na(this, i)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), gt()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (Da(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), _t()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = mt,
      n = Ct
    try {
      return (mt = !0), (Ct = this), this._runnings++, qi(this), this.fn()
    } finally {
      ji(this), this._runnings--, (Ct = n), (mt = t)
    }
  }
  stop() {
    var t
    this.active &&
      (qi(this), ji(this), (t = this.onStop) == null || t.call(this), (this.active = !1))
  }
}
function Da(e) {
  return e.value
}
function qi(e) {
  e._trackId++, (e._depsLength = 0)
}
function ji(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Qo(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Qo(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let mt = !0,
  Ls = 0
const Yo = []
function gt() {
  Yo.push(mt), (mt = !1)
}
function _t() {
  const e = Yo.pop()
  mt = e === void 0 ? !0 : e
}
function ci() {
  Ls++
}
function ui() {
  for (Ls--; !Ls && Ms.length; ) Ms.shift()()
}
function Xo(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && Qo(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const Ms = []
function Zo(e, t, n) {
  ci()
  for (const s of e.keys()) {
    let i
    s._dirtyLevel < t &&
      (i ?? (i = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (i ?? (i = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && Ms.push(s.scheduler)))
  }
  ui()
}
const er = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  Is = new WeakMap(),
  Rt = Symbol(''),
  qs = Symbol('')
function Te(e, t, n) {
  if (mt && Ct) {
    let s = Is.get(e)
    s || Is.set(e, (s = new Map()))
    let i = s.get(n)
    i || s.set(n, (i = er(() => s.delete(n)))), Xo(Ct, i)
  }
}
function st(e, t, n, s, i, o) {
  const r = Is.get(e)
  if (!r) return
  let a = []
  if (t === 'clear') a = [...r.values()]
  else if (n === 'length' && z(e)) {
    const l = Number(s)
    r.forEach((u, c) => {
      ;(c === 'length' || (!Tt(c) && c >= l)) && a.push(u)
    })
  } else
    switch ((n !== void 0 && a.push(r.get(n)), t)) {
      case 'add':
        z(e) ? ri(n) && a.push(r.get('length')) : (a.push(r.get(Rt)), Bt(e) && a.push(r.get(qs)))
        break
      case 'delete':
        z(e) || (a.push(r.get(Rt)), Bt(e) && a.push(r.get(qs)))
        break
      case 'set':
        Bt(e) && a.push(r.get(Rt))
        break
    }
  ci()
  for (const l of a) l && Zo(l, 4)
  ui()
}
const za = si('__proto__,__v_isRef,__isVue'),
  tr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Tt)
  ),
  Ni = Ba()
function Ba() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = X(this)
        for (let o = 0, r = this.length; o < r; o++) Te(s, 'get', o + '')
        const i = s[t](...n)
        return i === -1 || i === !1 ? s[t](...n.map(X)) : i
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        gt(), ci()
        const s = X(this)[t].apply(this, n)
        return ui(), _t(), s
      }
    }),
    e
  )
}
function Fa(e) {
  Tt(e) || (e = String(e))
  const t = X(this)
  return Te(t, 'has', e), t.hasOwnProperty(e)
}
class nr {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const i = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !i
    if (n === '__v_isReadonly') return i
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return s === (i ? (o ? nl : rr) : o ? or : ir).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const r = z(t)
    if (!i) {
      if (r && Y(Ni, n)) return Reflect.get(Ni, n, s)
      if (n === 'hasOwnProperty') return Fa
    }
    const a = Reflect.get(t, n, s)
    return (Tt(n) ? tr.has(n) : za(n)) || (i || Te(t, 'get', n), o)
      ? a
      : $e(a)
        ? r && ri(n)
          ? a
          : a.value
        : ae(a)
          ? i
            ? lr(a)
            : ts(a)
          : a
  }
}
class sr extends nr {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, i) {
    let o = t[n]
    if (!this._isShallow) {
      const l = vn(o)
      if ((!Un(s) && !vn(s) && ((o = X(o)), (s = X(s))), !z(t) && $e(o) && !$e(s)))
        return l ? !1 : ((o.value = s), !0)
    }
    const r = z(t) && ri(n) ? Number(n) < t.length : Y(t, n),
      a = Reflect.set(t, n, s, i)
    return t === X(i) && (r ? vt(s, o) && st(t, 'set', n, s) : st(t, 'add', n, s)), a
  }
  deleteProperty(t, n) {
    const s = Y(t, n)
    t[n]
    const i = Reflect.deleteProperty(t, n)
    return i && s && st(t, 'delete', n, void 0), i
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Tt(n) || !tr.has(n)) && Te(t, 'has', n), s
  }
  ownKeys(t) {
    return Te(t, 'iterate', z(t) ? 'length' : Rt), Reflect.ownKeys(t)
  }
}
class Ua extends nr {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Va = new sr(),
  Wa = new Ua(),
  Ka = new sr(!0),
  di = (e) => e,
  es = (e) => Reflect.getPrototypeOf(e)
function On(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const i = X(e),
    o = X(t)
  n || (vt(t, o) && Te(i, 'get', t), Te(i, 'get', o))
  const { has: r } = es(i),
    a = s ? di : n ? hi : gn
  if (r.call(i, t)) return a(e.get(t))
  if (r.call(i, o)) return a(e.get(o))
  e !== i && e.get(t)
}
function Pn(e, t = !1) {
  const n = this.__v_raw,
    s = X(n),
    i = X(e)
  return (
    t || (vt(e, i) && Te(s, 'has', e), Te(s, 'has', i)), e === i ? n.has(e) : n.has(e) || n.has(i)
  )
}
function Ln(e, t = !1) {
  return (e = e.__v_raw), !t && Te(X(e), 'iterate', Rt), Reflect.get(e, 'size', e)
}
function Hi(e) {
  e = X(e)
  const t = X(this)
  return es(t).has.call(t, e) || (t.add(e), st(t, 'add', e, e)), this
}
function Di(e, t) {
  t = X(t)
  const n = X(this),
    { has: s, get: i } = es(n)
  let o = s.call(n, e)
  o || ((e = X(e)), (o = s.call(n, e)))
  const r = i.call(n, e)
  return n.set(e, t), o ? vt(t, r) && st(n, 'set', e, t) : st(n, 'add', e, t), this
}
function zi(e) {
  const t = X(this),
    { has: n, get: s } = es(t)
  let i = n.call(t, e)
  i || ((e = X(e)), (i = n.call(t, e))), s && s.call(t, e)
  const o = t.delete(e)
  return i && st(t, 'delete', e, void 0), o
}
function Bi() {
  const e = X(this),
    t = e.size !== 0,
    n = e.clear()
  return t && st(e, 'clear', void 0, void 0), n
}
function Mn(e, t) {
  return function (s, i) {
    const o = this,
      r = o.__v_raw,
      a = X(r),
      l = t ? di : e ? hi : gn
    return !e && Te(a, 'iterate', Rt), r.forEach((u, c) => s.call(i, l(u), l(c), o))
  }
}
function In(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      o = X(i),
      r = Bt(o),
      a = e === 'entries' || (e === Symbol.iterator && r),
      l = e === 'keys' && r,
      u = i[e](...s),
      c = n ? di : t ? hi : gn
    return (
      !t && Te(o, 'iterate', l ? qs : Rt),
      {
        next() {
          const { value: d, done: h } = u.next()
          return h ? { value: d, done: h } : { value: a ? [c(d[0]), c(d[1])] : c(d), done: h }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function lt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Ja() {
  const e = {
      get(o) {
        return On(this, o)
      },
      get size() {
        return Ln(this)
      },
      has: Pn,
      add: Hi,
      set: Di,
      delete: zi,
      clear: Bi,
      forEach: Mn(!1, !1)
    },
    t = {
      get(o) {
        return On(this, o, !1, !0)
      },
      get size() {
        return Ln(this)
      },
      has: Pn,
      add: Hi,
      set: Di,
      delete: zi,
      clear: Bi,
      forEach: Mn(!1, !0)
    },
    n = {
      get(o) {
        return On(this, o, !0)
      },
      get size() {
        return Ln(this, !0)
      },
      has(o) {
        return Pn.call(this, o, !0)
      },
      add: lt('add'),
      set: lt('set'),
      delete: lt('delete'),
      clear: lt('clear'),
      forEach: Mn(!0, !1)
    },
    s = {
      get(o) {
        return On(this, o, !0, !0)
      },
      get size() {
        return Ln(this, !0)
      },
      has(o) {
        return Pn.call(this, o, !0)
      },
      add: lt('add'),
      set: lt('set'),
      delete: lt('delete'),
      clear: lt('clear'),
      forEach: Mn(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = In(o, !1, !1)),
        (n[o] = In(o, !0, !1)),
        (t[o] = In(o, !1, !0)),
        (s[o] = In(o, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [Ga, Qa, Ya, Xa] = Ja()
function fi(e, t) {
  const n = t ? (e ? Xa : Ya) : e ? Qa : Ga
  return (s, i, o) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
        ? e
        : i === '__v_raw'
          ? s
          : Reflect.get(Y(n, i) && i in s ? n : s, i, o)
}
const Za = { get: fi(!1, !1) },
  el = { get: fi(!1, !0) },
  tl = { get: fi(!0, !1) },
  ir = new WeakMap(),
  or = new WeakMap(),
  rr = new WeakMap(),
  nl = new WeakMap()
function sl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function il(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : sl(ka(e))
}
function ts(e) {
  return vn(e) ? e : pi(e, !1, Va, Za, ir)
}
function ar(e) {
  return pi(e, !1, Ka, el, or)
}
function lr(e) {
  return pi(e, !0, Wa, tl, rr)
}
function pi(e, t, n, s, i) {
  if (!ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = i.get(e)
  if (o) return o
  const r = il(e)
  if (r === 0) return e
  const a = new Proxy(e, r === 2 ? s : n)
  return i.set(e, a), a
}
function ln(e) {
  return vn(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive)
}
function vn(e) {
  return !!(e && e.__v_isReadonly)
}
function Un(e) {
  return !!(e && e.__v_isShallow)
}
function cr(e) {
  return e ? !!e.__v_raw : !1
}
function X(e) {
  const t = e && e.__v_raw
  return t ? X(t) : e
}
function ol(e) {
  return Object.isExtensible(e) && Wo(e, '__v_skip', !0), e
}
const gn = (e) => (ae(e) ? ts(e) : e),
  hi = (e) => (ae(e) ? lr(e) : e)
class ur {
  constructor(t, n, s, i) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new li(
        () => t(this._value),
        () => jn(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = X(this)
    return (
      (!t._cacheable || t.effect.dirty) && vt(t._value, (t._value = t.effect.run())) && jn(t, 4),
      dr(t),
      t.effect._dirtyLevel >= 2 && jn(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function rl(e, t, n = !1) {
  let s, i
  const o = V(e)
  return o ? ((s = e), (i = Me)) : ((s = e.get), (i = e.set)), new ur(s, i, o || !i, n)
}
function dr(e) {
  var t
  mt &&
    Ct &&
    ((e = X(e)),
    Xo(
      Ct,
      (t = e.dep) != null ? t : (e.dep = er(() => (e.dep = void 0), e instanceof ur ? e : void 0))
    ))
}
function jn(e, t = 4, n) {
  e = X(e)
  const s = e.dep
  s && Zo(s, t)
}
function $e(e) {
  return !!(e && e.__v_isRef === !0)
}
function P(e) {
  return fr(e, !1)
}
function I(e) {
  return fr(e, !0)
}
function fr(e, t) {
  return $e(e) ? e : new al(e, t)
}
class al {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : X(t)),
      (this._value = n ? t : gn(t))
  }
  get value() {
    return dr(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Un(t) || vn(t)
    ;(t = n ? t : X(t)),
      vt(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : gn(t)), jn(this, 4))
  }
}
function ze(e) {
  return $e(e) ? e.value : e
}
const ll = {
  get: (e, t, n) => ze(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t]
    return $e(i) && !$e(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function pr(e) {
  return ln(e) ? e : new Proxy(e, ll)
}
/**
 * @vue/runtime-core v3.4.23
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function bt(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (i) {
    ns(i, t, n)
  }
}
function Be(e, t, n, s) {
  if (V(e)) {
    const i = bt(e, t, n, s)
    return (
      i &&
        Fo(i) &&
        i.catch((o) => {
          ns(o, t, n)
        }),
      i
    )
  }
  if (z(e)) {
    const i = []
    for (let o = 0; o < e.length; o++) i.push(Be(e[o], t, n, s))
    return i
  }
}
function ns(e, t, n, s = !0) {
  const i = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const r = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; o; ) {
      const u = o.ec
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, r, a) === !1) return
      }
      o = o.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      gt(), bt(l, null, 10, [e, r, a]), _t()
      return
    }
  }
  cl(e, n, i, s)
}
function cl(e, t, n, s = !0) {
  console.error(e)
}
let _n = !1,
  js = !1
const ye = []
let Qe = 0
const Ft = []
let dt = null,
  Et = 0
const hr = Promise.resolve()
let mi = null
function mr(e) {
  const t = mi || hr
  return e ? t.then(this ? e.bind(this) : e) : t
}
function ul(e) {
  let t = Qe + 1,
    n = ye.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = ye[s],
      o = yn(i)
    o < e || (o === e && i.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function bi(e) {
  ;(!ye.length || !ye.includes(e, _n && e.allowRecurse ? Qe + 1 : Qe)) &&
    (e.id == null ? ye.push(e) : ye.splice(ul(e.id), 0, e), br())
}
function br() {
  !_n && !js && ((js = !0), (mi = hr.then(gr)))
}
function dl(e) {
  const t = ye.indexOf(e)
  t > Qe && ye.splice(t, 1)
}
function fl(e) {
  z(e) ? Ft.push(...e) : (!dt || !dt.includes(e, e.allowRecurse ? Et + 1 : Et)) && Ft.push(e), br()
}
function Fi(e, t, n = _n ? Qe + 1 : 0) {
  for (; n < ye.length; n++) {
    const s = ye[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      ye.splice(n, 1), n--, s()
    }
  }
}
function vr(e) {
  if (Ft.length) {
    const t = [...new Set(Ft)].sort((n, s) => yn(n) - yn(s))
    if (((Ft.length = 0), dt)) {
      dt.push(...t)
      return
    }
    for (dt = t, Et = 0; Et < dt.length; Et++) dt[Et]()
    ;(dt = null), (Et = 0)
  }
}
const yn = (e) => (e.id == null ? 1 / 0 : e.id),
  pl = (e, t) => {
    const n = yn(e) - yn(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function gr(e) {
  ;(js = !1), (_n = !0), ye.sort(pl)
  try {
    for (Qe = 0; Qe < ye.length; Qe++) {
      const t = ye[Qe]
      t && t.active !== !1 && bt(t, null, 14)
    }
  } finally {
    ;(Qe = 0), (ye.length = 0), vr(), (_n = !1), (mi = null), (ye.length || Ft.length) && gr()
  }
}
function hl(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || re
  let i = n
  const o = t.startsWith('update:'),
    r = o && t.slice(7)
  if (r && r in s) {
    const c = `${r === 'modelValue' ? 'model' : r}Modifiers`,
      { number: d, trim: h } = s[c] || re
    h && (i = n.map((b) => (fe(b) ? b.trim() : b))), d && (i = n.map(Aa))
  }
  let a,
    l = s[(a = vs(t))] || s[(a = vs(Xe(t)))]
  !l && o && (l = s[(a = vs(Qt(t)))]), l && Be(l, e, 6, i)
  const u = s[a + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), Be(u, e, 6, i)
  }
}
function _r(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e)
  if (i !== void 0) return i
  const o = e.emits
  let r = {},
    a = !1
  if (!V(e)) {
    const l = (u) => {
      const c = _r(u, t, !0)
      c && ((a = !0), ge(r, c))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !o && !a
    ? (ae(e) && s.set(e, null), null)
    : (z(o) ? o.forEach((l) => (r[l] = null)) : ge(r, o), ae(e) && s.set(e, r), r)
}
function ss(e, t) {
  return !e || !Gn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Qt(t)) || Y(e, t))
}
let we = null,
  is = null
function Vn(e) {
  const t = we
  return (we = e), (is = (e && e.type.__scopeId) || null), t
}
function Ae(e) {
  is = e
}
function Oe() {
  is = null
}
function cn(e, t = we, n) {
  if (!t || e._n) return e
  const s = (...i) => {
    s._d && eo(-1)
    const o = Vn(t)
    let r
    try {
      r = e(...i)
    } finally {
      Vn(o), s._d && eo(1)
    }
    return r
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function ys(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: o,
    propsOptions: [r],
    slots: a,
    attrs: l,
    emit: u,
    render: c,
    renderCache: d,
    data: h,
    setupState: b,
    ctx: g,
    inheritAttrs: E
  } = e
  let $, C
  const q = Vn(e)
  try {
    if (n.shapeFlag & 4) {
      const K = i || s,
        ie = K
      ;($ = Ge(c.call(ie, K, d, o, b, h, g))), (C = l)
    } else {
      const K = t
      ;($ = Ge(K.length > 1 ? K(o, { attrs: l, slots: a, emit: u }) : K(o, null))),
        (C = t.props ? l : ml(l))
    }
  } catch (K) {
    ;(hn.length = 0), ns(K, e, 1), ($ = de(Ut))
  }
  let N = $
  if (C && E !== !1) {
    const K = Object.keys(C),
      { shapeFlag: ie } = N
    K.length && ie & 7 && (r && K.some(ii) && (C = bl(C, r)), (N = Vt(N, C)))
  }
  return (
    n.dirs && ((N = Vt(N)), (N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (N.transition = n.transition),
    ($ = N),
    Vn(q),
    $
  )
}
const ml = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Gn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  bl = (e, t) => {
    const n = {}
    for (const s in e) (!ii(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function vl(e, t, n) {
  const { props: s, children: i, component: o } = e,
    { props: r, children: a, patchFlag: l } = t,
    u = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? Ui(s, r, u) : !!r
    if (l & 8) {
      const c = t.dynamicProps
      for (let d = 0; d < c.length; d++) {
        const h = c[d]
        if (r[h] !== s[h] && !ss(u, h)) return !0
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : s === r ? !1 : s ? (r ? Ui(s, r, u) : !0) : !!r
  return !1
}
function Ui(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let i = 0; i < s.length; i++) {
    const o = s[i]
    if (t[o] !== e[o] && !ss(n, o)) return !0
  }
  return !1
}
function gl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const _l = 'components'
function yr(e, t) {
  return wl(_l, e, !0, t) || e
}
const yl = Symbol.for('v-ndc')
function wl(e, t, n = !0, s = !1) {
  const i = we || ve
  if (i) {
    const o = i.type
    {
      const a = mc(o, !1)
      if (a && (a === t || a === Xe(t) || a === Xn(Xe(t)))) return o
    }
    const r = Vi(i[e] || o[e], t) || Vi(i.appContext[e], t)
    return !r && s ? o : r
  }
}
function Vi(e, t) {
  return e && (e[t] || e[Xe(t)] || e[Xn(Xe(t))])
}
const xl = (e) => e.__isSuspense
function El(e, t) {
  t && t.pendingBranch ? (z(e) ? t.effects.push(...e) : t.effects.push(e)) : fl(e)
}
const Sl = Symbol.for('v-scx'),
  Cl = () => it(Sl)
function Rl(e, t) {
  return vi(e, null, { flush: 'post' })
}
const qn = {}
function Nn(e, t, n) {
  return vi(e, t, n)
}
function vi(e, t, { immediate: n, deep: s, flush: i, once: o, onTrack: r, onTrigger: a } = re) {
  if (t && o) {
    const B = t
    t = (...pe) => {
      B(...pe), ie()
    }
  }
  const l = ve,
    u = (B) => (s === !0 ? B : Ht(B, s === !1 ? 1 : void 0))
  let c,
    d = !1,
    h = !1
  if (
    ($e(e)
      ? ((c = () => e.value), (d = Un(e)))
      : ln(e)
        ? ((c = () => u(e)), (d = !0))
        : z(e)
          ? ((h = !0),
            (d = e.some((B) => ln(B) || Un(B))),
            (c = () =>
              e.map((B) => {
                if ($e(B)) return B.value
                if (ln(B)) return u(B)
                if (V(B)) return bt(B, l, 2)
              })))
          : V(e)
            ? t
              ? (c = () => bt(e, l, 2))
              : (c = () => (b && b(), Be(e, l, 3, [g])))
            : (c = Me),
    t && s)
  ) {
    const B = c
    c = () => Ht(B())
  }
  let b,
    g = (B) => {
      b = N.onStop = () => {
        bt(B, l, 4), (b = N.onStop = void 0)
      }
    },
    E
  if (as)
    if (((g = Me), t ? n && Be(t, l, 3, [c(), h ? [] : void 0, g]) : c(), i === 'sync')) {
      const B = Cl()
      E = B.__watcherHandles || (B.__watcherHandles = [])
    } else return Me
  let $ = h ? new Array(e.length).fill(qn) : qn
  const C = () => {
    if (!(!N.active || !N.dirty))
      if (t) {
        const B = N.run()
        ;(s || d || (h ? B.some((pe, Ce) => vt(pe, $[Ce])) : vt(B, $))) &&
          (b && b(), Be(t, l, 3, [B, $ === qn ? void 0 : h && $[0] === qn ? [] : $, g]), ($ = B))
      } else N.run()
  }
  C.allowRecurse = !!t
  let q
  i === 'sync'
    ? (q = C)
    : i === 'post'
      ? (q = () => ke(C, l && l.suspense))
      : ((C.pre = !0), l && (C.id = l.uid), (q = () => bi(C)))
  const N = new li(c, Me, q),
    K = Ha(),
    ie = () => {
      N.stop(), K && oi(K.effects, N)
    }
  return (
    t ? (n ? C() : ($ = N.run())) : i === 'post' ? ke(N.run.bind(N), l && l.suspense) : N.run(),
    E && E.push(ie),
    ie
  )
}
function kl(e, t, n) {
  const s = this.proxy,
    i = fe(e) ? (e.includes('.') ? wr(s, e) : () => s[e]) : e.bind(s, s)
  let o
  V(t) ? (o = t) : ((o = t.handler), (n = t))
  const r = Rn(this),
    a = vi(i, o.bind(s), n)
  return r(), a
}
function wr(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let i = 0; i < n.length && s; i++) s = s[n[i]]
    return s
  }
}
function Ht(e, t, n = 0, s) {
  if (!ae(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), $e(e))) Ht(e.value, t, n, s)
  else if (z(e)) for (let i = 0; i < e.length; i++) Ht(e[i], t, n, s)
  else if (Bo(e) || Bt(e))
    e.forEach((i) => {
      Ht(i, t, n, s)
    })
  else if (Vo(e)) for (const i in e) Ht(e[i], t, n, s)
  return e
}
function yt(e, t, n, s) {
  const i = e.dirs,
    o = t && t.dirs
  for (let r = 0; r < i.length; r++) {
    const a = i[r]
    o && (a.oldValue = o[r].value)
    let l = a.dir[s]
    l && (gt(), Be(l, n, 8, [e.el, a, e, t]), _t())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Cn(e, t) {
  return V(e) ? ge({ name: e.name }, t, { setup: e }) : e
}
const un = (e) => !!e.type.__asyncLoader,
  xr = (e) => e.type.__isKeepAlive
function Tl(e, t) {
  Er(e, 'a', t)
}
function $l(e, t) {
  Er(e, 'da', t)
}
function Er(e, t, n = ve) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((os(t, s, n), n)) {
    let i = n.parent
    for (; i && i.parent; ) xr(i.parent.vnode) && Al(s, t, n, i), (i = i.parent)
  }
}
function Al(e, t, n, s) {
  const i = os(t, e, s, !0)
  gi(() => {
    oi(s[t], i)
  }, n)
}
function os(e, t, n = ve, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return
          gt()
          const a = Rn(n),
            l = Be(t, n, e, r)
          return a(), _t(), l
        })
    return s ? i.unshift(o) : i.push(o), o
  }
}
const ot =
    (e) =>
    (t, n = ve) =>
      (!as || e === 'sp') && os(e, (...s) => t(...s), n),
  Ol = ot('bm'),
  ue = ot('m'),
  Pl = ot('bu'),
  Ll = ot('u'),
  Ml = ot('bum'),
  gi = ot('um'),
  Il = ot('sp'),
  ql = ot('rtg'),
  jl = ot('rtc')
function Nl(e, t = ve) {
  os('ec', e, t)
}
function Ns(e, t, n, s) {
  let i
  const o = n
  if (z(e) || fe(e)) {
    i = new Array(e.length)
    for (let r = 0, a = e.length; r < a; r++) i[r] = t(e[r], r, void 0, o)
  } else if (typeof e == 'number') {
    i = new Array(e)
    for (let r = 0; r < e; r++) i[r] = t(r + 1, r, void 0, o)
  } else if (ae(e))
    if (e[Symbol.iterator]) i = Array.from(e, (r, a) => t(r, a, void 0, o))
    else {
      const r = Object.keys(e)
      i = new Array(r.length)
      for (let a = 0, l = r.length; a < l; a++) {
        const u = r[a]
        i[a] = t(e[u], u, a, o)
      }
    }
  else i = []
  return i
}
function ws(e, t, n = {}, s, i) {
  if (we.isCE || (we.parent && un(we.parent) && we.parent.isCE))
    return t !== 'default' && (n.name = t), de('slot', n, s)
  let o = e[t]
  o && o._c && (o._d = !1), U()
  const r = o && Sr(o(n)),
    a = jr(be, { key: n.key || (r && r.key) || `_${t}` }, r || [], r && e._ === 1 ? 64 : -2)
  return o && o._c && (o._d = !0), a
}
function Sr(e) {
  return e.some((t) => (Kn(t) ? !(t.type === Ut || (t.type === be && !Sr(t.children))) : !0))
    ? e
    : null
}
const Hs = (e) => (e ? (Hr(e) ? xi(e) || e.proxy : Hs(e.parent)) : null),
  dn = ge(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hs(e.parent),
    $root: (e) => Hs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => _i(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), bi(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = mr.bind(e.proxy)),
    $watch: (e) => kl.bind(e)
  }),
  xs = (e, t) => e !== re && !e.__isScriptSetup && Y(e, t),
  Hl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: a, appContext: l } = e
      let u
      if (t[0] !== '$') {
        const b = r[t]
        if (b !== void 0)
          switch (b) {
            case 1:
              return s[t]
            case 2:
              return i[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (xs(s, t)) return (r[t] = 1), s[t]
          if (i !== re && Y(i, t)) return (r[t] = 2), i[t]
          if ((u = e.propsOptions[0]) && Y(u, t)) return (r[t] = 3), o[t]
          if (n !== re && Y(n, t)) return (r[t] = 4), n[t]
          Ds && (r[t] = 0)
        }
      }
      const c = dn[t]
      let d, h
      if (c) return t === '$attrs' && Te(e.attrs, 'get', ''), c(e)
      if ((d = a.__cssModules) && (d = d[t])) return d
      if (n !== re && Y(n, t)) return (r[t] = 4), n[t]
      if (((h = l.config.globalProperties), Y(h, t))) return h[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: o } = e
      return xs(i, t)
        ? ((i[t] = n), !0)
        : s !== re && Y(s, t)
          ? ((s[t] = n), !0)
          : Y(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: o } },
      r
    ) {
      let a
      return (
        !!n[r] ||
        (e !== re && Y(e, r)) ||
        xs(t, r) ||
        ((a = o[0]) && Y(a, r)) ||
        Y(s, r) ||
        Y(dn, r) ||
        Y(i.config.globalProperties, r)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Y(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function Wi(e) {
  return z(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Ds = !0
function Dl(e) {
  const t = _i(e),
    n = e.proxy,
    s = e.ctx
  ;(Ds = !1), t.beforeCreate && Ki(t.beforeCreate, e, 'bc')
  const {
    data: i,
    computed: o,
    methods: r,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: d,
    mounted: h,
    beforeUpdate: b,
    updated: g,
    activated: E,
    deactivated: $,
    beforeDestroy: C,
    beforeUnmount: q,
    destroyed: N,
    unmounted: K,
    render: ie,
    renderTracked: B,
    renderTriggered: pe,
    errorCaptured: Ce,
    serverPrefetch: rt,
    expose: Ee,
    inheritAttrs: Ue,
    components: et,
    directives: Ve,
    filters: Zt
  } = t
  if ((u && zl(u, s, null), r))
    for (const ne in r) {
      const Z = r[ne]
      V(Z) && (s[ne] = Z.bind(n))
    }
  if (i) {
    const ne = i.call(n, n)
    ae(ne) && (e.data = ts(ne))
  }
  if (((Ds = !0), o))
    for (const ne in o) {
      const Z = o[ne],
        tt = V(Z) ? Z.bind(n, n) : V(Z.get) ? Z.get.bind(n, n) : Me,
        at = !V(Z) && V(Z.set) ? Z.set.bind(n) : Me,
        We = Le({ get: tt, set: at })
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (Re) => (We.value = Re)
      })
    }
  if (a) for (const ne in a) Cr(a[ne], s, n, ne)
  if (l) {
    const ne = V(l) ? l.call(n) : l
    Reflect.ownKeys(ne).forEach((Z) => {
      Hn(Z, ne[Z])
    })
  }
  c && Ki(c, e, 'c')
  function he(ne, Z) {
    z(Z) ? Z.forEach((tt) => ne(tt.bind(n))) : Z && ne(Z.bind(n))
  }
  if (
    (he(Ol, d),
    he(ue, h),
    he(Pl, b),
    he(Ll, g),
    he(Tl, E),
    he($l, $),
    he(Nl, Ce),
    he(jl, B),
    he(ql, pe),
    he(Ml, q),
    he(gi, K),
    he(Il, rt),
    z(Ee))
  )
    if (Ee.length) {
      const ne = e.exposed || (e.exposed = {})
      Ee.forEach((Z) => {
        Object.defineProperty(ne, Z, { get: () => n[Z], set: (tt) => (n[Z] = tt) })
      })
    } else e.exposed || (e.exposed = {})
  ie && e.render === Me && (e.render = ie),
    Ue != null && (e.inheritAttrs = Ue),
    et && (e.components = et),
    Ve && (e.directives = Ve)
}
function zl(e, t, n = Me) {
  z(e) && (e = zs(e))
  for (const s in e) {
    const i = e[s]
    let o
    ae(i)
      ? 'default' in i
        ? (o = it(i.from || s, i.default, !0))
        : (o = it(i.from || s))
      : (o = it(i)),
      $e(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (r) => (o.value = r)
          })
        : (t[s] = o)
  }
}
function Ki(e, t, n) {
  Be(z(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Cr(e, t, n, s) {
  const i = s.includes('.') ? wr(n, s) : () => n[s]
  if (fe(e)) {
    const o = t[e]
    V(o) && Nn(i, o)
  } else if (V(e)) Nn(i, e.bind(n))
  else if (ae(e))
    if (z(e)) e.forEach((o) => Cr(o, t, n, s))
    else {
      const o = V(e.handler) ? e.handler.bind(n) : t[e.handler]
      V(o) && Nn(i, o, e)
    }
}
function _i(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: r }
    } = e.appContext,
    a = o.get(t)
  let l
  return (
    a
      ? (l = a)
      : !i.length && !n && !s
        ? (l = t)
        : ((l = {}), i.length && i.forEach((u) => Wn(l, u, r, !0)), Wn(l, t, r)),
    ae(t) && o.set(t, l),
    l
  )
}
function Wn(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t
  o && Wn(e, o, n, !0), i && i.forEach((r) => Wn(e, r, n, !0))
  for (const r in t)
    if (!(s && r === 'expose')) {
      const a = Bl[r] || (n && n[r])
      e[r] = a ? a(e[r], t[r]) : t[r]
    }
  return e
}
const Bl = {
  data: Ji,
  props: Gi,
  emits: Gi,
  methods: rn,
  computed: rn,
  beforeCreate: Se,
  created: Se,
  beforeMount: Se,
  mounted: Se,
  beforeUpdate: Se,
  updated: Se,
  beforeDestroy: Se,
  beforeUnmount: Se,
  destroyed: Se,
  unmounted: Se,
  activated: Se,
  deactivated: Se,
  errorCaptured: Se,
  serverPrefetch: Se,
  components: rn,
  directives: rn,
  watch: Ul,
  provide: Ji,
  inject: Fl
}
function Ji(e, t) {
  return t
    ? e
      ? function () {
          return ge(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Fl(e, t) {
  return rn(zs(e), zs(t))
}
function zs(e) {
  if (z(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function rn(e, t) {
  return e ? ge(Object.create(null), e, t) : t
}
function Gi(e, t) {
  return e
    ? z(e) && z(t)
      ? [...new Set([...e, ...t])]
      : ge(Object.create(null), Wi(e), Wi(t ?? {}))
    : t
}
function Ul(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ge(Object.create(null), e)
  for (const s in t) n[s] = Se(e[s], t[s])
  return n
}
function Rr() {
  return {
    app: null,
    config: {
      isNativeTag: Ca,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Vl = 0
function Wl(e, t) {
  return function (s, i = null) {
    V(s) || (s = ge({}, s)), i != null && !ae(i) && (i = null)
    const o = Rr(),
      r = new WeakSet()
    let a = !1
    const l = (o.app = {
      _uid: Vl++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: vc,
      get config() {
        return o.config
      },
      set config(u) {},
      use(u, ...c) {
        return (
          r.has(u) ||
            (u && V(u.install) ? (r.add(u), u.install(l, ...c)) : V(u) && (r.add(u), u(l, ...c))),
          l
        )
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), l
      },
      component(u, c) {
        return c ? ((o.components[u] = c), l) : o.components[u]
      },
      directive(u, c) {
        return c ? ((o.directives[u] = c), l) : o.directives[u]
      },
      mount(u, c, d) {
        if (!a) {
          const h = de(s, i)
          return (
            (h.appContext = o),
            d === !0 ? (d = 'svg') : d === !1 && (d = void 0),
            c && t ? t(h, u) : e(h, u, d),
            (a = !0),
            (l._container = u),
            (u.__vue_app__ = l),
            xi(h.component) || h.component.proxy
          )
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(u, c) {
        return (o.provides[u] = c), l
      },
      runWithContext(u) {
        const c = fn
        fn = l
        try {
          return u()
        } finally {
          fn = c
        }
      }
    })
    return l
  }
}
let fn = null
function Hn(e, t) {
  if (ve) {
    let n = ve.provides
    const s = ve.parent && ve.parent.provides
    s === n && (n = ve.provides = Object.create(s)), (n[e] = t)
  }
}
function it(e, t, n = !1) {
  const s = ve || we
  if (s || fn) {
    const i = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : fn._context.provides
    if (i && e in i) return i[e]
    if (arguments.length > 1) return n && V(t) ? t.call(s && s.proxy) : t
  }
}
const kr = Object.create(null),
  Bs = () => Object.create(kr),
  Tr = (e) => Object.getPrototypeOf(e) === kr
function Kl(e, t, n, s = !1) {
  const i = {},
    o = Bs()
  ;(e.propsDefaults = Object.create(null)), $r(e, t, i, o)
  for (const r in e.propsOptions[0]) r in i || (i[r] = void 0)
  n ? (e.props = s ? i : ar(i)) : e.type.props ? (e.props = i) : (e.props = o), (e.attrs = o)
}
function Jl(e, t, n, s) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: r }
    } = e,
    a = X(i),
    [l] = e.propsOptions
  let u = !1
  if ((s || r > 0) && !(r & 16)) {
    if (r & 8) {
      const c = e.vnode.dynamicProps
      for (let d = 0; d < c.length; d++) {
        let h = c[d]
        if (ss(e.emitsOptions, h)) continue
        const b = t[h]
        if (l)
          if (Y(o, h)) b !== o[h] && ((o[h] = b), (u = !0))
          else {
            const g = Xe(h)
            i[g] = Fs(l, a, g, b, e, !1)
          }
        else b !== o[h] && ((o[h] = b), (u = !0))
      }
    }
  } else {
    $r(e, t, i, o) && (u = !0)
    let c
    for (const d in a)
      (!t || (!Y(t, d) && ((c = Qt(d)) === d || !Y(t, c)))) &&
        (l
          ? n && (n[d] !== void 0 || n[c] !== void 0) && (i[d] = Fs(l, a, d, void 0, e, !0))
          : delete i[d])
    if (o !== a) for (const d in o) (!t || !Y(t, d)) && (delete o[d], (u = !0))
  }
  u && st(e.attrs, 'set', '')
}
function $r(e, t, n, s) {
  const [i, o] = e.propsOptions
  let r = !1,
    a
  if (t)
    for (let l in t) {
      if (an(l)) continue
      const u = t[l]
      let c
      i && Y(i, (c = Xe(l)))
        ? !o || !o.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : ss(e.emitsOptions, l) || ((!(l in s) || u !== s[l]) && ((s[l] = u), (r = !0)))
    }
  if (o) {
    const l = X(n),
      u = a || re
    for (let c = 0; c < o.length; c++) {
      const d = o[c]
      n[d] = Fs(i, l, d, u[d], e, !Y(u, d))
    }
  }
  return r
}
function Fs(e, t, n, s, i, o) {
  const r = e[n]
  if (r != null) {
    const a = Y(r, 'default')
    if (a && s === void 0) {
      const l = r.default
      if (r.type !== Function && !r.skipFactory && V(l)) {
        const { propsDefaults: u } = i
        if (n in u) s = u[n]
        else {
          const c = Rn(i)
          ;(s = u[n] = l.call(null, t)), c()
        }
      } else s = l
    }
    r[0] && (o && !a ? (s = !1) : r[1] && (s === '' || s === Qt(n)) && (s = !0))
  }
  return s
}
function Ar(e, t, n = !1) {
  const s = t.propsCache,
    i = s.get(e)
  if (i) return i
  const o = e.props,
    r = {},
    a = []
  let l = !1
  if (!V(e)) {
    const c = (d) => {
      l = !0
      const [h, b] = Ar(d, t, !0)
      ge(r, h), b && a.push(...b)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!o && !l) return ae(e) && s.set(e, zt), zt
  if (z(o))
    for (let c = 0; c < o.length; c++) {
      const d = Xe(o[c])
      Qi(d) && (r[d] = re)
    }
  else if (o)
    for (const c in o) {
      const d = Xe(c)
      if (Qi(d)) {
        const h = o[c],
          b = (r[d] = z(h) || V(h) ? { type: h } : ge({}, h))
        if (b) {
          const g = Zi(Boolean, b.type),
            E = Zi(String, b.type)
          ;(b[0] = g > -1), (b[1] = E < 0 || g < E), (g > -1 || Y(b, 'default')) && a.push(d)
        }
      }
    }
  const u = [r, a]
  return ae(e) && s.set(e, u), u
}
function Qi(e) {
  return e[0] !== '$' && !an(e)
}
function Yi(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function Xi(e, t) {
  return Yi(e) === Yi(t)
}
function Zi(e, t) {
  return z(t) ? t.findIndex((n) => Xi(n, e)) : V(t) && Xi(t, e) ? 0 : -1
}
const Or = (e) => e[0] === '_' || e === '$stable',
  yi = (e) => (z(e) ? e.map(Ge) : [Ge(e)]),
  Gl = (e, t, n) => {
    if (t._n) return t
    const s = cn((...i) => yi(t(...i)), n)
    return (s._c = !1), s
  },
  Pr = (e, t, n) => {
    const s = e._ctx
    for (const i in e) {
      if (Or(i)) continue
      const o = e[i]
      if (V(o)) t[i] = Gl(i, o, s)
      else if (o != null) {
        const r = yi(o)
        t[i] = () => r
      }
    }
  },
  Lr = (e, t) => {
    const n = yi(t)
    e.slots.default = () => n
  },
  Ql = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = X(t)), Wo(e.slots, '_', n)) : Pr(t, (e.slots = Bs()))
    } else (e.slots = Bs()), t && Lr(e, t)
  },
  Yl = (e, t, n) => {
    const { vnode: s, slots: i } = e
    let o = !0,
      r = re
    if (s.shapeFlag & 32) {
      const a = t._
      a
        ? n && a === 1
          ? (o = !1)
          : (ge(i, t), !n && a === 1 && delete i._)
        : ((o = !t.$stable), Pr(t, i)),
        (r = t)
    } else t && (Lr(e, t), (r = { default: 1 }))
    if (o) for (const a in i) !Or(a) && r[a] == null && delete i[a]
  }
function Us(e, t, n, s, i = !1) {
  if (z(e)) {
    e.forEach((h, b) => Us(h, t && (z(t) ? t[b] : t), n, s, i))
    return
  }
  if (un(s) && !i) return
  const o = s.shapeFlag & 4 ? xi(s.component) || s.component.proxy : s.el,
    r = i ? null : o,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === re ? (a.refs = {}) : a.refs,
    d = a.setupState
  if (
    (u != null &&
      u !== l &&
      (fe(u) ? ((c[u] = null), Y(d, u) && (d[u] = null)) : $e(u) && (u.value = null)),
    V(l))
  )
    bt(l, a, 12, [r, c])
  else {
    const h = fe(l),
      b = $e(l)
    if (h || b) {
      const g = () => {
        if (e.f) {
          const E = h ? (Y(d, l) ? d[l] : c[l]) : l.value
          i
            ? z(E) && oi(E, o)
            : z(E)
              ? E.includes(o) || E.push(o)
              : h
                ? ((c[l] = [o]), Y(d, l) && (d[l] = c[l]))
                : ((l.value = [o]), e.k && (c[e.k] = l.value))
        } else h ? ((c[l] = r), Y(d, l) && (d[l] = r)) : b && ((l.value = r), e.k && (c[e.k] = r))
      }
      r ? ((g.id = -1), ke(g, n)) : g()
    }
  }
}
const ke = El
function Xl(e) {
  return Zl(e)
}
function Zl(e, t) {
  const n = Ko()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: i,
      patchProp: o,
      createElement: r,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: d,
      nextSibling: h,
      setScopeId: b = Me,
      insertStaticContent: g
    } = e,
    E = (f, p, v, x = null, _ = null, k = null, O = void 0, R = null, T = !!p.dynamicChildren) => {
      if (f === p) return
      f && !tn(f, p) && ((x = w(f)), Re(f, _, k, !0), (f = null)),
        p.patchFlag === -2 && ((T = !1), (p.dynamicChildren = null))
      const { type: S, ref: M, shapeFlag: D } = p
      switch (S) {
        case rs:
          $(f, p, v, x)
          break
        case Ut:
          C(f, p, v, x)
          break
        case pn:
          f == null && q(p, v, x, O)
          break
        case be:
          et(f, p, v, x, _, k, O, R, T)
          break
        default:
          D & 1
            ? ie(f, p, v, x, _, k, O, R, T)
            : D & 6
              ? Ve(f, p, v, x, _, k, O, R, T)
              : (D & 64 || D & 128) && S.process(f, p, v, x, _, k, O, R, T, j)
      }
      M != null && _ && Us(M, f && f.ref, k, p || f, !p)
    },
    $ = (f, p, v, x) => {
      if (f == null) s((p.el = a(p.children)), v, x)
      else {
        const _ = (p.el = f.el)
        p.children !== f.children && u(_, p.children)
      }
    },
    C = (f, p, v, x) => {
      f == null ? s((p.el = l(p.children || '')), v, x) : (p.el = f.el)
    },
    q = (f, p, v, x) => {
      ;[f.el, f.anchor] = g(f.children, p, v, x, f.el, f.anchor)
    },
    N = ({ el: f, anchor: p }, v, x) => {
      let _
      for (; f && f !== p; ) (_ = h(f)), s(f, v, x), (f = _)
      s(p, v, x)
    },
    K = ({ el: f, anchor: p }) => {
      let v
      for (; f && f !== p; ) (v = h(f)), i(f), (f = v)
      i(p)
    },
    ie = (f, p, v, x, _, k, O, R, T) => {
      p.type === 'svg' ? (O = 'svg') : p.type === 'math' && (O = 'mathml'),
        f == null ? B(p, v, x, _, k, O, R, T) : rt(f, p, _, k, O, R, T)
    },
    B = (f, p, v, x, _, k, O, R) => {
      let T, S
      const { props: M, shapeFlag: D, transition: H, dirs: F } = f
      if (
        ((T = f.el = r(f.type, k, M && M.is, M)),
        D & 8 ? c(T, f.children) : D & 16 && Ce(f.children, T, null, x, _, Es(f, k), O, R),
        F && yt(f, null, x, 'created'),
        pe(T, f, f.scopeId, O, x),
        M)
      ) {
        for (const se in M)
          se !== 'value' && !an(se) && o(T, se, null, M[se], k, f.children, x, _, _e)
        'value' in M && o(T, 'value', null, M.value, k), (S = M.onVnodeBeforeMount) && Je(S, x, f)
      }
      F && yt(f, null, x, 'beforeMount')
      const G = ec(_, H)
      G && H.beforeEnter(T),
        s(T, p, v),
        ((S = M && M.onVnodeMounted) || G || F) &&
          ke(() => {
            S && Je(S, x, f), G && H.enter(T), F && yt(f, null, x, 'mounted')
          }, _)
    },
    pe = (f, p, v, x, _) => {
      if ((v && b(f, v), x)) for (let k = 0; k < x.length; k++) b(f, x[k])
      if (_) {
        let k = _.subTree
        if (p === k) {
          const O = _.vnode
          pe(f, O, O.scopeId, O.slotScopeIds, _.parent)
        }
      }
    },
    Ce = (f, p, v, x, _, k, O, R, T = 0) => {
      for (let S = T; S < f.length; S++) {
        const M = (f[S] = R ? ft(f[S]) : Ge(f[S]))
        E(null, M, p, v, x, _, k, O, R)
      }
    },
    rt = (f, p, v, x, _, k, O) => {
      const R = (p.el = f.el)
      let { patchFlag: T, dynamicChildren: S, dirs: M } = p
      T |= f.patchFlag & 16
      const D = f.props || re,
        H = p.props || re
      let F
      if (
        (v && wt(v, !1),
        (F = H.onVnodeBeforeUpdate) && Je(F, v, p, f),
        M && yt(p, f, v, 'beforeUpdate'),
        v && wt(v, !0),
        S
          ? Ee(f.dynamicChildren, S, R, v, x, Es(p, _), k)
          : O || Z(f, p, R, null, v, x, Es(p, _), k, !1),
        T > 0)
      ) {
        if (T & 16) Ue(R, p, D, H, v, x, _)
        else if (
          (T & 2 && D.class !== H.class && o(R, 'class', null, H.class, _),
          T & 4 && o(R, 'style', D.style, H.style, _),
          T & 8)
        ) {
          const G = p.dynamicProps
          for (let se = 0; se < G.length; se++) {
            const oe = G[se],
              me = D[oe],
              Ne = H[oe]
            ;(Ne !== me || oe === 'value') && o(R, oe, me, Ne, _, f.children, v, x, _e)
          }
        }
        T & 1 && f.children !== p.children && c(R, p.children)
      } else !O && S == null && Ue(R, p, D, H, v, x, _)
      ;((F = H.onVnodeUpdated) || M) &&
        ke(() => {
          F && Je(F, v, p, f), M && yt(p, f, v, 'updated')
        }, x)
    },
    Ee = (f, p, v, x, _, k, O) => {
      for (let R = 0; R < p.length; R++) {
        const T = f[R],
          S = p[R],
          M = T.el && (T.type === be || !tn(T, S) || T.shapeFlag & 70) ? d(T.el) : v
        E(T, S, M, null, x, _, k, O, !0)
      }
    },
    Ue = (f, p, v, x, _, k, O) => {
      if (v !== x) {
        if (v !== re)
          for (const R in v) !an(R) && !(R in x) && o(f, R, v[R], null, O, p.children, _, k, _e)
        for (const R in x) {
          if (an(R)) continue
          const T = x[R],
            S = v[R]
          T !== S && R !== 'value' && o(f, R, S, T, O, p.children, _, k, _e)
        }
        'value' in x && o(f, 'value', v.value, x.value, O)
      }
    },
    et = (f, p, v, x, _, k, O, R, T) => {
      const S = (p.el = f ? f.el : a('')),
        M = (p.anchor = f ? f.anchor : a(''))
      let { patchFlag: D, dynamicChildren: H, slotScopeIds: F } = p
      F && (R = R ? R.concat(F) : F),
        f == null
          ? (s(S, v, x), s(M, v, x), Ce(p.children || [], v, M, _, k, O, R, T))
          : D > 0 && D & 64 && H && f.dynamicChildren
            ? (Ee(f.dynamicChildren, H, v, _, k, O, R),
              (p.key != null || (_ && p === _.subTree)) && Mr(f, p, !0))
            : Z(f, p, v, M, _, k, O, R, T)
    },
    Ve = (f, p, v, x, _, k, O, R, T) => {
      ;(p.slotScopeIds = R),
        f == null
          ? p.shapeFlag & 512
            ? _.ctx.activate(p, v, x, O, T)
            : Zt(p, v, x, _, k, O, T)
          : At(f, p, T)
    },
    Zt = (f, p, v, x, _, k, O) => {
      const R = (f.component = cc(f, x, _))
      if ((xr(f) && (R.ctx.renderer = j), dc(R), R.asyncDep)) {
        if ((_ && _.registerDep(R, he), !f.el)) {
          const T = (R.subTree = de(Ut))
          C(null, T, p, v)
        }
      } else he(R, f, p, v, _, k, O)
    },
    At = (f, p, v) => {
      const x = (p.component = f.component)
      if (vl(f, p, v))
        if (x.asyncDep && !x.asyncResolved) {
          ne(x, p, v)
          return
        } else (x.next = p), dl(x.update), (x.effect.dirty = !0), x.update()
      else (p.el = f.el), (x.vnode = p)
    },
    he = (f, p, v, x, _, k, O) => {
      const R = () => {
          if (f.isMounted) {
            let { next: M, bu: D, u: H, parent: F, vnode: G } = f
            {
              const Lt = Ir(f)
              if (Lt) {
                M && ((M.el = G.el), ne(f, M, O)),
                  Lt.asyncDep.then(() => {
                    f.isUnmounted || R()
                  })
                return
              }
            }
            let se = M,
              oe
            wt(f, !1),
              M ? ((M.el = G.el), ne(f, M, O)) : (M = G),
              D && gs(D),
              (oe = M.props && M.props.onVnodeBeforeUpdate) && Je(oe, F, M, G),
              wt(f, !0)
            const me = ys(f),
              Ne = f.subTree
            ;(f.subTree = me),
              E(Ne, me, d(Ne.el), w(Ne), f, _, k),
              (M.el = me.el),
              se === null && gl(f, me.el),
              H && ke(H, _),
              (oe = M.props && M.props.onVnodeUpdated) && ke(() => Je(oe, F, M, G), _)
          } else {
            let M
            const { el: D, props: H } = p,
              { bm: F, m: G, parent: se } = f,
              oe = un(p)
            if (
              (wt(f, !1),
              F && gs(F),
              !oe && (M = H && H.onVnodeBeforeMount) && Je(M, se, p),
              wt(f, !0),
              D && le)
            ) {
              const me = () => {
                ;(f.subTree = ys(f)), le(D, f.subTree, f, _, null)
              }
              oe ? p.type.__asyncLoader().then(() => !f.isUnmounted && me()) : me()
            } else {
              const me = (f.subTree = ys(f))
              E(null, me, v, x, f, _, k), (p.el = me.el)
            }
            if ((G && ke(G, _), !oe && (M = H && H.onVnodeMounted))) {
              const me = p
              ke(() => Je(M, se, me), _)
            }
            ;(p.shapeFlag & 256 || (se && un(se.vnode) && se.vnode.shapeFlag & 256)) &&
              f.a &&
              ke(f.a, _),
              (f.isMounted = !0),
              (p = v = x = null)
          }
        },
        T = (f.effect = new li(R, Me, () => bi(S), f.scope)),
        S = (f.update = () => {
          T.dirty && T.run()
        })
      ;(S.id = f.uid), wt(f, !0), S()
    },
    ne = (f, p, v) => {
      p.component = f
      const x = f.vnode.props
      ;(f.vnode = p), (f.next = null), Jl(f, p.props, x, v), Yl(f, p.children, v), gt(), Fi(f), _t()
    },
    Z = (f, p, v, x, _, k, O, R, T = !1) => {
      const S = f && f.children,
        M = f ? f.shapeFlag : 0,
        D = p.children,
        { patchFlag: H, shapeFlag: F } = p
      if (H > 0) {
        if (H & 128) {
          at(S, D, v, x, _, k, O, R, T)
          return
        } else if (H & 256) {
          tt(S, D, v, x, _, k, O, R, T)
          return
        }
      }
      F & 8
        ? (M & 16 && _e(S, _, k), D !== S && c(v, D))
        : M & 16
          ? F & 16
            ? at(S, D, v, x, _, k, O, R, T)
            : _e(S, _, k, !0)
          : (M & 8 && c(v, ''), F & 16 && Ce(D, v, x, _, k, O, R, T))
    },
    tt = (f, p, v, x, _, k, O, R, T) => {
      ;(f = f || zt), (p = p || zt)
      const S = f.length,
        M = p.length,
        D = Math.min(S, M)
      let H
      for (H = 0; H < D; H++) {
        const F = (p[H] = T ? ft(p[H]) : Ge(p[H]))
        E(f[H], F, v, null, _, k, O, R, T)
      }
      S > M ? _e(f, _, k, !0, !1, D) : Ce(p, v, x, _, k, O, R, T, D)
    },
    at = (f, p, v, x, _, k, O, R, T) => {
      let S = 0
      const M = p.length
      let D = f.length - 1,
        H = M - 1
      for (; S <= D && S <= H; ) {
        const F = f[S],
          G = (p[S] = T ? ft(p[S]) : Ge(p[S]))
        if (tn(F, G)) E(F, G, v, null, _, k, O, R, T)
        else break
        S++
      }
      for (; S <= D && S <= H; ) {
        const F = f[D],
          G = (p[H] = T ? ft(p[H]) : Ge(p[H]))
        if (tn(F, G)) E(F, G, v, null, _, k, O, R, T)
        else break
        D--, H--
      }
      if (S > D) {
        if (S <= H) {
          const F = H + 1,
            G = F < M ? p[F].el : x
          for (; S <= H; ) E(null, (p[S] = T ? ft(p[S]) : Ge(p[S])), v, G, _, k, O, R, T), S++
        }
      } else if (S > H) for (; S <= D; ) Re(f[S], _, k, !0), S++
      else {
        const F = S,
          G = S,
          se = new Map()
        for (S = G; S <= H; S++) {
          const Pe = (p[S] = T ? ft(p[S]) : Ge(p[S]))
          Pe.key != null && se.set(Pe.key, S)
        }
        let oe,
          me = 0
        const Ne = H - G + 1
        let Lt = !1,
          Pi = 0
        const en = new Array(Ne)
        for (S = 0; S < Ne; S++) en[S] = 0
        for (S = F; S <= D; S++) {
          const Pe = f[S]
          if (me >= Ne) {
            Re(Pe, _, k, !0)
            continue
          }
          let Ke
          if (Pe.key != null) Ke = se.get(Pe.key)
          else
            for (oe = G; oe <= H; oe++)
              if (en[oe - G] === 0 && tn(Pe, p[oe])) {
                Ke = oe
                break
              }
          Ke === void 0
            ? Re(Pe, _, k, !0)
            : ((en[Ke - G] = S + 1),
              Ke >= Pi ? (Pi = Ke) : (Lt = !0),
              E(Pe, p[Ke], v, null, _, k, O, R, T),
              me++)
        }
        const Li = Lt ? tc(en) : zt
        for (oe = Li.length - 1, S = Ne - 1; S >= 0; S--) {
          const Pe = G + S,
            Ke = p[Pe],
            Mi = Pe + 1 < M ? p[Pe + 1].el : x
          en[S] === 0
            ? E(null, Ke, v, Mi, _, k, O, R, T)
            : Lt && (oe < 0 || S !== Li[oe] ? We(Ke, v, Mi, 2) : oe--)
        }
      }
    },
    We = (f, p, v, x, _ = null) => {
      const { el: k, type: O, transition: R, children: T, shapeFlag: S } = f
      if (S & 6) {
        We(f.component.subTree, p, v, x)
        return
      }
      if (S & 128) {
        f.suspense.move(p, v, x)
        return
      }
      if (S & 64) {
        O.move(f, p, v, j)
        return
      }
      if (O === be) {
        s(k, p, v)
        for (let D = 0; D < T.length; D++) We(T[D], p, v, x)
        s(f.anchor, p, v)
        return
      }
      if (O === pn) {
        N(f, p, v)
        return
      }
      if (x !== 2 && S & 1 && R)
        if (x === 0) R.beforeEnter(k), s(k, p, v), ke(() => R.enter(k), _)
        else {
          const { leave: D, delayLeave: H, afterLeave: F } = R,
            G = () => s(k, p, v),
            se = () => {
              D(k, () => {
                G(), F && F()
              })
            }
          H ? H(k, G, se) : se()
        }
      else s(k, p, v)
    },
    Re = (f, p, v, x = !1, _ = !1) => {
      const {
        type: k,
        props: O,
        ref: R,
        children: T,
        dynamicChildren: S,
        shapeFlag: M,
        patchFlag: D,
        dirs: H
      } = f
      if ((R != null && Us(R, null, v, f, !0), M & 256)) {
        p.ctx.deactivate(f)
        return
      }
      const F = M & 1 && H,
        G = !un(f)
      let se
      if ((G && (se = O && O.onVnodeBeforeUnmount) && Je(se, p, f), M & 6)) An(f.component, v, x)
      else {
        if (M & 128) {
          f.suspense.unmount(v, x)
          return
        }
        F && yt(f, null, p, 'beforeUnmount'),
          M & 64
            ? f.type.remove(f, p, v, _, j, x)
            : S && (k !== be || (D > 0 && D & 64))
              ? _e(S, p, v, !1, !0)
              : ((k === be && D & 384) || (!_ && M & 16)) && _e(T, p, v),
          x && Ot(f)
      }
      ;((G && (se = O && O.onVnodeUnmounted)) || F) &&
        ke(() => {
          se && Je(se, p, f), F && yt(f, null, p, 'unmounted')
        }, v)
    },
    Ot = (f) => {
      const { type: p, el: v, anchor: x, transition: _ } = f
      if (p === be) {
        Pt(v, x)
        return
      }
      if (p === pn) {
        K(f)
        return
      }
      const k = () => {
        i(v), _ && !_.persisted && _.afterLeave && _.afterLeave()
      }
      if (f.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: O, delayLeave: R } = _,
          T = () => O(v, k)
        R ? R(f.el, k, T) : T()
      } else k()
    },
    Pt = (f, p) => {
      let v
      for (; f !== p; ) (v = h(f)), i(f), (f = v)
      i(p)
    },
    An = (f, p, v) => {
      const { bum: x, scope: _, update: k, subTree: O, um: R } = f
      x && gs(x),
        _.stop(),
        k && ((k.active = !1), Re(O, f, p, v)),
        R && ke(R, p),
        ke(() => {
          f.isUnmounted = !0
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve())
    },
    _e = (f, p, v, x = !1, _ = !1, k = 0) => {
      for (let O = k; O < f.length; O++) Re(f[O], p, v, x, _)
    },
    w = (f) =>
      f.shapeFlag & 6
        ? w(f.component.subTree)
        : f.shapeFlag & 128
          ? f.suspense.next()
          : h(f.anchor || f.el)
  let L = !1
  const A = (f, p, v) => {
      f == null
        ? p._vnode && Re(p._vnode, null, null, !0)
        : E(p._vnode || null, f, p, null, null, null, v),
        L || ((L = !0), Fi(), vr(), (L = !1)),
        (p._vnode = f)
    },
    j = { p: E, um: Re, m: We, r: Ot, mt: Zt, mc: Ce, pc: Z, pbc: Ee, n: w, o: e }
  let ee, le
  return { render: A, hydrate: ee, createApp: Wl(A, ee) }
}
function Es({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function wt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function ec(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Mr(e, t, n = !1) {
  const s = e.children,
    i = t.children
  if (z(s) && z(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o]
      let a = i[o]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = i[o] = ft(i[o])), (a.el = r.el)),
        n || Mr(r, a)),
        a.type === rs && (a.el = r.el)
    }
}
function tc(e) {
  const t = e.slice(),
    n = [0]
  let s, i, o, r, a
  const l = e.length
  for (s = 0; s < l; s++) {
    const u = e[s]
    if (u !== 0) {
      if (((i = n[n.length - 1]), e[i] < u)) {
        ;(t[s] = i), n.push(s)
        continue
      }
      for (o = 0, r = n.length - 1; o < r; ) (a = (o + r) >> 1), e[n[a]] < u ? (o = a + 1) : (r = a)
      u < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; ) (n[o] = r), (r = t[r])
  return n
}
function Ir(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ir(t)
}
const nc = (e) => e.__isTeleport,
  be = Symbol.for('v-fgt'),
  rs = Symbol.for('v-txt'),
  Ut = Symbol.for('v-cmt'),
  pn = Symbol.for('v-stc'),
  hn = []
let De = null
function U(e = !1) {
  hn.push((De = e ? null : []))
}
function sc() {
  hn.pop(), (De = hn[hn.length - 1] || null)
}
let wn = 1
function eo(e) {
  wn += e
}
function qr(e) {
  return (e.dynamicChildren = wn > 0 ? De || zt : null), sc(), wn > 0 && De && De.push(e), e
}
function W(e, t, n, s, i, o) {
  return qr(m(e, t, n, s, i, o, !0))
}
function jr(e, t, n, s, i) {
  return qr(de(e, t, n, s, i, !0))
}
function Kn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function tn(e, t) {
  return e.type === t.type && e.key === t.key
}
const Nr = ({ key: e }) => e ?? null,
  Dn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (fe(e) || $e(e) || V(e) ? { i: we, r: e, k: t, f: !!n } : e) : null
  )
function m(e, t = null, n = null, s = 0, i = null, o = e === be ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nr(t),
    ref: t && Dn(t),
    scopeId: is,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: we
  }
  return (
    a ? (wi(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= fe(n) ? 8 : 16),
    wn > 0 && !r && De && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && De.push(l),
    l
  )
}
const de = ic
function ic(e, t = null, n = null, s = 0, i = null, o = !1) {
  if (((!e || e === yl) && (e = Ut), Kn(e))) {
    const a = Vt(e, t, !0)
    return (
      n && wi(a, n),
      wn > 0 && !o && De && (a.shapeFlag & 6 ? (De[De.indexOf(e)] = a) : De.push(a)),
      (a.patchFlag |= -2),
      a
    )
  }
  if ((bc(e) && (e = e.__vccOpts), t)) {
    t = oc(t)
    let { class: a, style: l } = t
    a && !fe(a) && (t.class = Zn(a)),
      ae(l) && (cr(l) && !z(l) && (l = ge({}, l)), (t.style = ai(l)))
  }
  const r = fe(e) ? 1 : xl(e) ? 128 : nc(e) ? 64 : ae(e) ? 4 : V(e) ? 2 : 0
  return m(e, t, n, s, i, r, o, !0)
}
function oc(e) {
  return e ? (cr(e) || Tr(e) ? ge({}, e) : e) : null
}
function Vt(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: o, children: r } = e,
    a = t ? rc(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Nr(a),
    ref: t && t.ref ? (n && i ? (z(i) ? i.concat(Dn(t)) : [i, Dn(t)]) : Dn(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== be ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Vt(e.ssContent),
    ssFallback: e.ssFallback && Vt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function je(e = ' ', t = 0) {
  return de(rs, null, e, t)
}
function xe(e, t) {
  const n = de(pn, null, e)
  return (n.staticCount = t), n
}
function Ge(e) {
  return e == null || typeof e == 'boolean'
    ? de(Ut)
    : z(e)
      ? de(be, null, e.slice())
      : typeof e == 'object'
        ? ft(e)
        : de(rs, null, String(e))
}
function ft(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Vt(e)
}
function wi(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (z(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), wi(e, i()), i._c && (i._d = !0))
      return
    } else {
      n = 32
      const i = t._
      !i && !Tr(t)
        ? (t._ctx = we)
        : i === 3 && we && (we.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    V(t)
      ? ((t = { default: t, _ctx: we }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [je(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function rc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const i in s)
      if (i === 'class') t.class !== s.class && (t.class = Zn([t.class, s.class]))
      else if (i === 'style') t.style = ai([t.style, s.style])
      else if (Gn(i)) {
        const o = t[i],
          r = s[i]
        r && o !== r && !(z(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r)
      } else i !== '' && (t[i] = s[i])
  }
  return t
}
function Je(e, t, n, s = null) {
  Be(e, t, 7, [n, s])
}
const ac = Rr()
let lc = 0
function cc(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || ac,
    o = {
      uid: lc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ja(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ar(s, i),
      emitsOptions: _r(s, i),
      emit: null,
      emitted: null,
      propsDefaults: re,
      inheritAttrs: s.inheritAttrs,
      ctx: re,
      data: re,
      props: re,
      attrs: re,
      slots: re,
      refs: re,
      setupState: re,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = hl.bind(null, o)), e.ce && e.ce(o), o
  )
}
let ve = null
const uc = () => ve || we
let Jn, Vs
{
  const e = Ko(),
    t = (n, s) => {
      let i
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (o) => {
          i.length > 1 ? i.forEach((r) => r(o)) : i[0](o)
        }
      )
    }
  ;(Jn = t('__VUE_INSTANCE_SETTERS__', (n) => (ve = n))),
    (Vs = t('__VUE_SSR_SETTERS__', (n) => (as = n)))
}
const Rn = (e) => {
    const t = ve
    return (
      Jn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Jn(t)
      }
    )
  },
  to = () => {
    ve && ve.scope.off(), Jn(null)
  }
function Hr(e) {
  return e.vnode.shapeFlag & 4
}
let as = !1
function dc(e, t = !1) {
  t && Vs(t)
  const { props: n, children: s } = e.vnode,
    i = Hr(e)
  Kl(e, n, i, t), Ql(e, s)
  const o = i ? fc(e, t) : void 0
  return t && Vs(!1), o
}
function fc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Hl))
  const { setup: s } = n
  if (s) {
    const i = (e.setupContext = s.length > 1 ? hc(e) : null),
      o = Rn(e)
    gt()
    const r = bt(s, e, 0, [e.props, i])
    if ((_t(), o(), Fo(r))) {
      if ((r.then(to, to), t))
        return r
          .then((a) => {
            no(e, a, t)
          })
          .catch((a) => {
            ns(a, e, 0)
          })
      e.asyncDep = r
    } else no(e, r, t)
  } else Dr(e, t)
}
function no(e, t, n) {
  V(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ae(t) && (e.setupState = pr(t)),
    Dr(e, n)
}
let so
function Dr(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && so && !s.render) {
      const i = s.template || _i(e).template
      if (i) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = s,
          u = ge(ge({ isCustomElement: o, delimiters: a }, r), l)
        s.render = so(i, u)
      }
    }
    e.render = s.render || Me
  }
  {
    const i = Rn(e)
    gt()
    try {
      Dl(e)
    } finally {
      _t(), i()
    }
  }
}
const pc = {
  get(e, t) {
    return Te(e, 'get', ''), e[t]
  }
}
function hc(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, pc), slots: e.slots, emit: e.emit, expose: t }
}
function xi(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(pr(ol(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in dn) return dn[n](e)
        },
        has(t, n) {
          return n in t || n in dn
        }
      }))
    )
}
function mc(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function bc(e) {
  return V(e) && '__vccOpts' in e
}
const Le = (e, t) => rl(e, t, as)
function Wt(e, t, n) {
  const s = arguments.length
  return s === 2
    ? ae(t) && !z(t)
      ? Kn(t)
        ? de(e, null, [t])
        : de(e, t)
      : de(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && Kn(n) && (n = [n]),
      de(e, t, n))
}
const vc = '3.4.23'
/**
 * @vue/runtime-dom v3.4.23
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const gc = 'http://www.w3.org/2000/svg',
  _c = 'http://www.w3.org/1998/Math/MathML',
  pt = typeof document < 'u' ? document : null,
  io = pt && pt.createElement('template'),
  yc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const i =
        t === 'svg'
          ? pt.createElementNS(gc, e)
          : t === 'mathml'
            ? pt.createElementNS(_c, e)
            : pt.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && s && s.multiple != null && i.setAttribute('multiple', s.multiple), i
    },
    createText: (e) => pt.createTextNode(e),
    createComment: (e) => pt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => pt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, i, o) {
      const r = n ? n.previousSibling : t.lastChild
      if (i && (i === o || i.nextSibling))
        for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); );
      else {
        io.innerHTML = s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        const a = io.content
        if (s === 'svg' || s === 'mathml') {
          const l = a.firstChild
          for (; l.firstChild; ) a.appendChild(l.firstChild)
          a.removeChild(l)
        }
        t.insertBefore(a, n)
      }
      return [r ? r.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  wc = Symbol('_vtc')
function xc(e, t, n) {
  const s = e[wc]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const oo = Symbol('_vod'),
  Ec = Symbol('_vsh'),
  zr = Symbol('')
function Br(e) {
  const t = uc()
  if (!t) return
  const n = (t.ut = (i = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((o) => Ks(o, i))
    }),
    s = () => {
      const i = e(t.proxy)
      Ws(t.subTree, i), n(i)
    }
  ue(() => {
    Rl(s)
    const i = new MutationObserver(s)
    i.observe(t.subTree.el.parentNode, { childList: !0 }), gi(() => i.disconnect())
  })
}
function Ws(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense
    ;(e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Ws(n.activeBranch, t)
        })
  }
  for (; e.component; ) e = e.component.subTree
  if (e.shapeFlag & 1 && e.el) Ks(e.el, t)
  else if (e.type === be) e.children.forEach((n) => Ws(n, t))
  else if (e.type === pn) {
    let { el: n, anchor: s } = e
    for (; n && (Ks(n, t), n !== s); ) n = n.nextSibling
  }
}
function Ks(e, t) {
  if (e.nodeType === 1) {
    const n = e.style
    let s = ''
    for (const i in t) n.setProperty(`--${i}`, t[i]), (s += `--${i}: ${t[i]};`)
    n[zr] = s
  }
}
const Sc = /(^|;)\s*display\s*:/
function Cc(e, t, n) {
  const s = e.style,
    i = fe(n)
  let o = !1
  if (n && !i) {
    if (t)
      if (fe(t))
        for (const r of t.split(';')) {
          const a = r.slice(0, r.indexOf(':')).trim()
          n[a] == null && zn(s, a, '')
        }
      else for (const r in t) n[r] == null && zn(s, r, '')
    for (const r in n) r === 'display' && (o = !0), zn(s, r, n[r])
  } else if (i) {
    if (t !== n) {
      const r = s[zr]
      r && (n += ';' + r), (s.cssText = n), (o = Sc.test(n))
    }
  } else t && e.removeAttribute('style')
  oo in e && ((e[oo] = o ? s.display : ''), e[Ec] && (s.display = 'none'))
}
const ro = /\s*!important$/
function zn(e, t, n) {
  if (z(n)) n.forEach((s) => zn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Rc(e, t)
    ro.test(n) ? e.setProperty(Qt(s), n.replace(ro, ''), 'important') : (e[s] = n)
  }
}
const ao = ['Webkit', 'Moz', 'ms'],
  Ss = {}
function Rc(e, t) {
  const n = Ss[t]
  if (n) return n
  let s = Xe(t)
  if (s !== 'filter' && s in e) return (Ss[t] = s)
  s = Xn(s)
  for (let i = 0; i < ao.length; i++) {
    const o = ao[i] + s
    if (o in e) return (Ss[t] = o)
  }
  return t
}
const lo = 'http://www.w3.org/1999/xlink'
function kc(e, t, n, s, i) {
  if (s && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(lo, t.slice(6, t.length)) : e.setAttributeNS(lo, t, n)
  else {
    const o = qa(t)
    n == null || (o && !Jo(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? '' : n)
  }
}
function Tc(e, t, n, s, i, o, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && r(s, i, o), (e[t] = n ?? '')
    return
  }
  const a = e.tagName
  if (t === 'value' && a !== 'PROGRESS' && !a.includes('-')) {
    const u = a === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n ?? ''
    ;(u !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let l = !1
  if (n === '' || n == null) {
    const u = typeof e[t]
    u === 'boolean'
      ? (n = Jo(n))
      : n == null && u === 'string'
        ? ((n = ''), (l = !0))
        : u === 'number' && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(t)
}
function $c(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Ac(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const co = Symbol('_vei')
function Oc(e, t, n, s, i = null) {
  const o = e[co] || (e[co] = {}),
    r = o[t]
  if (s && r) r.value = s
  else {
    const [a, l] = Pc(t)
    if (s) {
      const u = (o[t] = Ic(s, i))
      $c(e, a, u, l)
    } else r && (Ac(e, a, r, l), (o[t] = void 0))
  }
}
const uo = /(?:Once|Passive|Capture)$/
function Pc(e) {
  let t
  if (uo.test(e)) {
    t = {}
    let s
    for (; (s = e.match(uo)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Qt(e.slice(2)), t]
}
let Cs = 0
const Lc = Promise.resolve(),
  Mc = () => Cs || (Lc.then(() => (Cs = 0)), (Cs = Date.now()))
function Ic(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Be(qc(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Mc()), n
}
function qc(e, t) {
  if (z(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    )
  } else return t
}
const fo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  jc = (e, t, n, s, i, o, r, a, l) => {
    const u = i === 'svg'
    t === 'class'
      ? xc(e, s, u)
      : t === 'style'
        ? Cc(e, n, s)
        : Gn(t)
          ? ii(t) || Oc(e, t, n, s, r)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Nc(e, t, s, u)
              )
            ? Tc(e, t, s, o, r, a, l)
            : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s),
              kc(e, t, s, u))
  }
function Nc(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && fo(t) && V(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const i = e.tagName
    if (i === 'IMG' || i === 'VIDEO' || i === 'CANVAS' || i === 'SOURCE') return !1
  }
  return fo(t) && fe(n) ? !1 : t in e
}
const Hc = ge({ patchProp: jc }, yc)
let po
function Fr() {
  return po || (po = Xl(Hc))
}
const Js = (...e) => {
    Fr().render(...e)
  },
  Dc = (...e) => {
    const t = Fr().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const i = Bc(s)
        if (!i) return
        const o = t._component
        !V(o) && !o.render && !o.template && (o.template = i.innerHTML), (i.innerHTML = '')
        const r = n(i, !1, zc(i))
        return (
          i instanceof Element && (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')),
          r
        )
      }),
      t
    )
  }
function zc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Bc(e) {
  return fe(e) ? document.querySelector(e) : e
}
const J = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, i] of t) n[s] = i
    return n
  },
  Fc = {},
  Uc = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '17', fill: 'currentColor' },
  Vc = m(
    'path',
    {
      d: 'M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z'
    },
    null,
    -1
  ),
  Wc = [Vc]
function Kc(e, t) {
  return U(), W('svg', Uc, Wc)
}
const xt = J(Fc, [['render', Kc]]),
  Jc = {},
  Gc = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': 'true',
    role: 'img',
    class: 'iconify iconify--mdi',
    width: '24',
    height: '24',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 24 24'
  },
  Qc = m(
    'path',
    {
      d: 'M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  Yc = [Qc]
function Xc(e, t) {
  return U(), W('svg', Gc, Yc)
}
const Mt = J(Jc, [['render', Xc]]),
  Zc = {},
  eu = { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '20', fill: 'currentColor' },
  tu = m(
    'path',
    {
      d: 'M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z'
    },
    null,
    -1
  ),
  nu = [tu]
function su(e, t) {
  return U(), W('svg', eu, nu)
}
const It = J(Zc, [['render', su]]),
  iu = {},
  ou = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'currentColor' },
  ru = m(
    'path',
    {
      d: 'M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z'
    },
    null,
    -1
  ),
  au = [ru]
function lu(e, t) {
  return U(), W('svg', ou, au)
}
const qt = J(iu, [['render', lu]]),
  cu = {},
  uu = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'currentColor' },
  du = m(
    'path',
    {
      d: 'M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z'
    },
    null,
    -1
  ),
  fu = [du]
function pu(e, t) {
  return U(), W('svg', uu, fu)
}
const jt = J(cu, [['render', pu]]),
  hu = {},
  mu = { class: 'slides' },
  bu = xe(
    '<input type="radio" name="radio-btn" id="img-1" checked data-v-91b1d49b><li class="slide-container" data-v-91b1d49b><div class="slide" data-v-91b1d49b><img src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg" data-v-91b1d49b></div><div class="nav" data-v-91b1d49b><label for="img-6" class="prev" data-v-91b1d49b>‹</label><label for="img-2" class="next" data-v-91b1d49b>›</label></div></li><input type="radio" name="radio-btn" id="img-2" data-v-91b1d49b><li class="slide-container" data-v-91b1d49b><div class="slide" data-v-91b1d49b><img src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg" data-v-91b1d49b></div><div class="nav" data-v-91b1d49b><label for="img-1" class="prev" data-v-91b1d49b>‹</label><label for="img-3" class="next" data-v-91b1d49b>›</label></div></li><input type="radio" name="radio-btn" id="img-3" data-v-91b1d49b><li class="slide-container" data-v-91b1d49b><div class="slide" data-v-91b1d49b><img src="http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg" data-v-91b1d49b></div><div class="nav" data-v-91b1d49b><label for="img-2" class="prev" data-v-91b1d49b>‹</label><label for="img-4" class="next" data-v-91b1d49b>›</label></div></li><input type="radio" name="radio-btn" id="img-4" data-v-91b1d49b><li class="slide-container" data-v-91b1d49b><div class="slide" data-v-91b1d49b><img src="http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg" data-v-91b1d49b></div><div class="nav" data-v-91b1d49b><label for="img-3" class="prev" data-v-91b1d49b>‹</label><label for="img-5" class="next" data-v-91b1d49b>›</label></div></li><input type="radio" name="radio-btn" id="img-5" data-v-91b1d49b><li class="slide-container" data-v-91b1d49b><div class="slide" data-v-91b1d49b><img src="http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg" data-v-91b1d49b></div><div class="nav" data-v-91b1d49b><label for="img-4" class="prev" data-v-91b1d49b>‹</label><label for="img-6" class="next" data-v-91b1d49b>›</label></div></li><input type="radio" name="radio-btn" id="img-6" data-v-91b1d49b><li class="slide-container" data-v-91b1d49b><div class="slide" data-v-91b1d49b><img src="http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg" data-v-91b1d49b></div><div class="nav" data-v-91b1d49b><label for="img-5" class="prev" data-v-91b1d49b>‹</label><label for="img-1" class="next" data-v-91b1d49b>›</label></div></li><li class="nav-dots" data-v-91b1d49b><label for="img-1" class="nav-dot" id="img-dot-1" data-v-91b1d49b></label><label for="img-2" class="nav-dot" id="img-dot-2" data-v-91b1d49b></label><label for="img-3" class="nav-dot" id="img-dot-3" data-v-91b1d49b></label><label for="img-4" class="nav-dot" id="img-dot-4" data-v-91b1d49b></label><label for="img-5" class="nav-dot" id="img-dot-5" data-v-91b1d49b></label><label for="img-6" class="nav-dot" id="img-dot-6" data-v-91b1d49b></label></li>',
    13
  ),
  vu = [bu]
function gu(e, t) {
  return U(), W('ul', mu, vu)
}
const _u = J(hu, [
    ['render', gu],
    ['__scopeId', 'data-v-91b1d49b']
  ]),
  yu = {},
  wu = { id: 'container' },
  xu = xe(
    '<nav data-v-a5fe5caf><ul data-v-a5fe5caf><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Home</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>WordPress</a><ul data-v-a5fe5caf><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Themes</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Plugins</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Tutorials</a></li></ul></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Web Design</a><ul data-v-a5fe5caf><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Resources</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Links</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Tutorials</a><ul data-v-a5fe5caf><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>HTML/CSS</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>jQuery</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Other</a><ul data-v-a5fe5caf><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Stuff</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Things</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Other Stuff</a></li></ul></li></ul></li></ul></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Graphic Design</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Inspiration</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>Contact</a></li><li data-v-a5fe5caf><a href="#" data-v-a5fe5caf>About</a></li></ul></nav><h1 data-v-a5fe5caf>Pure CSS Drop Down Menu</h1><p data-v-a5fe5caf> A simple dropdown navigation menu made with CSS Only. Dropdowns are marked with a plus sign ( + ) </p>',
    3
  ),
  Eu = [xu]
function Su(e, t) {
  return U(), W('div', wu, Eu)
}
const Cu = J(yu, [
    ['render', Su],
    ['__scopeId', 'data-v-a5fe5caf']
  ]),
  Ru = {},
  ku = { class: 'likebody' },
  Tu = xe(
    '<h1 data-v-1b0c692f>Drop Menu Pure CSS</h1><nav data-v-1b0c692f><ul class="main" data-v-1b0c692f><li data-v-1b0c692f><a href="#" data-v-1b0c692f>Home</a><ul class="drop menu1" data-v-1b0c692f><li data-v-1b0c692f><a href="#" data-v-1b0c692f>Home</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>news</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>contact</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>about</a></li></ul></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>news</a><ul class="drop menu2" data-v-1b0c692f><li data-v-1b0c692f><a href="#" data-v-1b0c692f>Home</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>news</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>contact</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>about</a></li></ul></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>contact</a><ul class="drop menu3" data-v-1b0c692f><li data-v-1b0c692f><a href="#" data-v-1b0c692f>Home</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>news</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>contact</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>about</a></li></ul></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>works</a><ul class="drop menu4" data-v-1b0c692f><li data-v-1b0c692f><a href="#" data-v-1b0c692f>Home</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>news</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>contact</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>about</a></li></ul></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>team</a><ul class="drop menu5" data-v-1b0c692f><li data-v-1b0c692f><a href="#" data-v-1b0c692f>Home</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>news</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>contact</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>about</a></li></ul></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>about</a><ul class="drop menu6" data-v-1b0c692f><li data-v-1b0c692f><a href="#" data-v-1b0c692f>Home</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>news</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>contact</a></li><li data-v-1b0c692f><a href="#" data-v-1b0c692f>about</a></li></ul></li></ul></nav>',
    2
  ),
  $u = [Tu]
function Au(e, t) {
  return U(), W('div', ku, $u)
}
const Ou = J(Ru, [
    ['render', Au],
    ['__scopeId', 'data-v-1b0c692f']
  ]),
  Pu = {},
  Lu = xe(
    '<h1 data-v-ed199d89>Responsive CSS Tabs</h1><div class="tab_container" data-v-ed199d89><input id="tab1" type="radio" name="tabs" checked data-v-ed199d89><label for="tab1" data-v-ed199d89><i class="fa fa-code" data-v-ed199d89></i><span data-v-ed199d89>Code</span></label><input id="tab2" type="radio" name="tabs" data-v-ed199d89><label for="tab2" data-v-ed199d89><i class="fa fa-pencil-square-o" data-v-ed199d89></i><span data-v-ed199d89>About</span></label><input id="tab3" type="radio" name="tabs" data-v-ed199d89><label for="tab3" data-v-ed199d89><i class="fa fa-bar-chart-o" data-v-ed199d89></i><span data-v-ed199d89>Services</span></label><input id="tab4" type="radio" name="tabs" data-v-ed199d89><label for="tab4" data-v-ed199d89><i class="fa fa-folder-open-o" data-v-ed199d89></i><span data-v-ed199d89>Portfolio</span></label><input id="tab5" type="radio" name="tabs" data-v-ed199d89><label for="tab5" data-v-ed199d89><i class="fa fa-envelope-o" data-v-ed199d89></i><span data-v-ed199d89>Contact</span></label><section id="content1" class="tab-content" data-v-ed199d89><h3 data-v-ed199d89>Headline 1</h3><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></section><section id="content2" class="tab-content" data-v-ed199d89><h3 data-v-ed199d89>Headline 2</h3><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. </p><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></section><section id="content3" class="tab-content" data-v-ed199d89><h3 data-v-ed199d89>Headline 3</h3><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></section><section id="content4" class="tab-content" data-v-ed199d89><h3 data-v-ed199d89>Headline 4</h3><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></section><section id="content5" class="tab-content" data-v-ed199d89><h3 data-v-ed199d89>Headline 5</h3><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. </p><p data-v-ed199d89> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></section></div><p class="no_wrap" data-v-ed199d89>And Of-course this paragrapgh with not wrap Tab</p><p class="link" data-v-ed199d89> Just in case you want to go through the tutorial follow this link: <a href="http://www.sevensignature.com/blog/code/responsive-pure-css-tabs/" data-v-ed199d89>Responsive Pure CSS Tabs</a></p>',
    4
  )
function Mu(e, t) {
  return Lu
}
const Iu = J(Pu, [
    ['render', Mu],
    ['__scopeId', 'data-v-ed199d89']
  ]),
  qu = {},
  ju = { class: 'abody' },
  Nu = xe(
    '<div class="header" data-v-a7b311a0></div><input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" data-v-a7b311a0><label for="openSidebarMenu" class="sidebarIconToggle" data-v-a7b311a0><div class="spinner diagonal part-1" data-v-a7b311a0></div><div class="spinner horizontal" data-v-a7b311a0></div><div class="spinner diagonal part-2" data-v-a7b311a0></div></label><div id="sidebarMenu" data-v-a7b311a0><ul class="sidebarMenuInner" data-v-a7b311a0><li data-v-a7b311a0>Jelena Jovanovic <span data-v-a7b311a0>Web Developer</span></li><li data-v-a7b311a0><a href="https://vanila.io" target="_blank" data-v-a7b311a0>Company</a></li><li data-v-a7b311a0><a href="https://instagram.com/plavookac" target="_blank" data-v-a7b311a0>Instagram</a></li><li data-v-a7b311a0><a href="https://twitter.com/plavookac" target="_blank" data-v-a7b311a0>Twitter</a></li><li data-v-a7b311a0><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank" data-v-a7b311a0>YouTube</a></li><li data-v-a7b311a0><a href="https://www.linkedin.com/in/plavookac/" target="_blank" data-v-a7b311a0>Linkedin</a></li></ul></div><div id="center" class="main center" data-v-a7b311a0><div class="mainInner" data-v-a7b311a0><div data-v-a7b311a0>PURE CSS SIDEBAR TOGGLE MENU</div></div><div class="mainInner" data-v-a7b311a0><div data-v-a7b311a0>PURE CSS SIDEBAR TOGGLE MENU</div></div><div class="mainInner" data-v-a7b311a0><div data-v-a7b311a0>PURE CSS SIDEBAR TOGGLE MENU</div></div></div>',
    5
  ),
  Hu = [Nu]
function Du(e, t) {
  return U(), W('div', ju, Hu)
}
const zu = J(qu, [
    ['render', Du],
    ['__scopeId', 'data-v-a7b311a0']
  ]),
  Bu = {},
  ls = (e) => (Ae('data-v-2c7786c9'), (e = e()), Oe(), e),
  Fu = ls(() => m('h1', null, [je('Pure CSS Tabs '), m('span', null, 'Just CSS, No JS!')], -1)),
  Uu = ls(() =>
    m(
      'ul',
      { class: 'tabs', role: 'tablist' },
      [
        m('li', null, [
          m('input', { type: 'radio', name: 'tabs', id: 'tab1', checked: '' }),
          m(
            'label',
            {
              for: 'tab1',
              role: 'tab',
              'aria-selected': 'true',
              'aria-controls': 'panel1',
              tabindex: '0'
            },
            'Description'
          ),
          m(
            'div',
            {
              id: 'tab-content1',
              class: 'tab-content',
              role: 'tabpanel',
              'aria-labelledby': 'description',
              'aria-hidden': 'false'
            },
            [
              m(
                'p',
                null,
                ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." '
              )
            ]
          )
        ]),
        m('li', null, [
          m('input', { type: 'radio', name: 'tabs', id: 'tab2' }),
          m(
            'label',
            {
              for: 'tab2',
              role: 'tab',
              'aria-selected': 'false',
              'aria-controls': 'panel2',
              tabindex: '0'
            },
            'Specification'
          ),
          m(
            'div',
            {
              id: 'tab-content2',
              class: 'tab-content',
              role: 'tabpanel',
              'aria-labelledby': 'specification',
              'aria-hidden': 'true'
            },
            [
              m(
                'p',
                null,
                ' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla? '
              )
            ]
          )
        ])
      ],
      -1
    )
  ),
  Vu = ls(() => m('br', { style: { clear: 'both' } }, null, -1)),
  Wu = ls(() =>
    m(
      'p',
      { class: 'link' },
      [
        je('See the '),
        m('a', { href: 'https://codepen.io/wallaceerick/pen/IGxim' }, '3D Box'),
        je(' demo!')
      ],
      -1
    )
  )
function Ku(e, t) {
  return U(), W(be, null, [Fu, Uu, Vu, Wu], 64)
}
const Ju = J(Bu, [
    ['render', Ku],
    ['__scopeId', 'data-v-2c7786c9']
  ]),
  Gu = {},
  Qu = { class: 'container' },
  Yu = xe(
    '<h3 class="text-center">Vertical Responsive Timeline</h3><div class="experience"><div class="item"><h5 class="company-name">AIV Dubai</h5><div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>Dubai</div><div class="job-info"><div class="title">Sales Engineer</div><div>2014 - Present</div></div><div><ul class="fa-ul"><li><i class="fa-li fa fa-hand-o-right"></i>Achieved 35% &amp; 50% increase in sales from previous year in first two years </li><li><i class="fa-li fa fa-hand-o-right"></i>Identified &amp; followed up on potential inquiries after analysing the market. Handled orders from quote to cash stage </li><li><i class="fa-li fa fa-hand-o-right"></i>Played an important role in moving from sales-only office to setting up the warehouse &amp; training sales assistant </li></ul></div></div><div class="item"><h5 class="company-name">Pentair Middle East</h5><div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>Dubai</div><div class="job-info"><div class="title">Project Engineer</div><div>2011 - 2014</div></div><div><ul class="fa-ul"><li><i class="fa-li fa fa-hand-o-right"></i>Single point of contact for the customer &amp; successfully managed many multi-million dollar oil &amp; gas, process &amp; power projects from leading EPCs for the supply of different types of products like valves, actuators, interlocks etc. </li><li><i class="fa-li fa fa-hand-o-right"></i>Developed proper documentation procedure, project managing tools &amp; commercial tasks tracking lists for the project management team </li><li><i class="fa-li fa fa-hand-o-right"></i>Prepared, analysed &amp; presented monthly &amp; quarterly revenue forecast &amp; financial reports for the team </li></ul></div></div></div>',
    2
  ),
  Xu = [Yu]
function Zu(e, t) {
  return U(), W('div', Qu, Xu)
}
const ed = J(Gu, [['render', Zu]]),
  td = {},
  nd = { class: 'abody' },
  sd = xe(
    '<h2 data-v-c7b24f38>CSS3 Timeline</h2><p data-v-c7b24f38>Please set the $vertical variable to false to see the horizontal version.</p><ul id="timeline" data-v-c7b24f38><li class="work" data-v-c7b24f38><input class="radio" id="work5" name="works" type="radio" checked data-v-c7b24f38><div class="relative" data-v-c7b24f38><label for="work5" data-v-c7b24f38>Lorem ipsum dolor sit amet</label><span class="date" data-v-c7b24f38>12 May 2013</span><span class="circle" data-v-c7b24f38></span></div><div class="content" data-v-c7b24f38><p data-v-c7b24f38> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum. </p></div></li><li class="work" data-v-c7b24f38><input class="radio" id="work4" name="works" type="radio" data-v-c7b24f38><div class="relative" data-v-c7b24f38><label for="work4" data-v-c7b24f38>Lorem ipsum dolor sit amet</label><span class="date" data-v-c7b24f38>11 May 2013</span><span class="circle" data-v-c7b24f38></span></div><div class="content" data-v-c7b24f38><p data-v-c7b24f38> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum. </p></div></li><li class="work" data-v-c7b24f38><input class="radio" id="work3" name="works" type="radio" data-v-c7b24f38><div class="relative" data-v-c7b24f38><label for="work3" data-v-c7b24f38>Lorem ipsum dolor sit amet</label><span class="date" data-v-c7b24f38>10 May 2013</span><span class="circle" data-v-c7b24f38></span></div><div class="content" data-v-c7b24f38><p data-v-c7b24f38> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum. </p></div></li><li class="work" data-v-c7b24f38><input class="radio" id="work2" name="works" type="radio" data-v-c7b24f38><div class="relative" data-v-c7b24f38><label for="work2" data-v-c7b24f38>Lorem ipsum dolor sit amet</label><span class="date" data-v-c7b24f38>09 May 2013</span><span class="circle" data-v-c7b24f38></span></div><div class="content" data-v-c7b24f38><p data-v-c7b24f38> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum. </p></div></li><li class="work" data-v-c7b24f38><input class="radio" id="work1" name="works" type="radio" data-v-c7b24f38><div class="relative" data-v-c7b24f38><label for="work1" data-v-c7b24f38>Lorem ipsum dolor sit amet</label><span class="date" data-v-c7b24f38>08 May 2013</span><span class="circle" data-v-c7b24f38></span></div><div class="content" data-v-c7b24f38><p data-v-c7b24f38> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum. </p></div></li></ul>',
    3
  ),
  id = [sd]
function od(e, t) {
  return U(), W('div', nd, id)
}
const rd = J(td, [
    ['render', od],
    ['__scopeId', 'data-v-c7b24f38']
  ]),
  ad = {},
  ld = { class: 'abody' },
  cd = xe(
    '<section class="container"><h1>CSS Accordions</h1><h3>Because we can.</h3><div class="ac"><input class="ac-input" id="ac-1" name="ac-1" type="checkbox"><label class="ac-label" for="ac-1">Item 1</label><article class="ac-text"><div class="ac-sub"><input class="ac-input" id="ac-2" name="ac-2" type="checkbox"><label class="ac-label" for="ac-2">I love jelly donuts</label><article class="ac-sub-text"><p> But not only is the sea such a foe to man who is an alien to it, but it is also a fiend to its own off-spring; worse than the Persian host who murdered his own guests; sparing not the creatures which itself hath spawned. Like a savage tigress that tossing in the jungle overlays her own cubs, so the sea dashes even the mightiest whales against the rocks, and leaves them there side by side with the split wrecks of ships. No mercy, no power but its own controls it. Panting and snorting like a mad battle steed that has lost its rider, the masterless ocean overruns the globe. </p><p> Consider the subtleness of the sea; how its most dreaded creatures glide under water, unapparent for the most part, and treacherously hidden beneath the loveliest tints of azure. Consider also the devilish brilliance and beauty of many of its most remorseless tribes, as the dainty embellished shape of many species of sharks. Consider, once more, the universal cannibalism of the sea; all whose creatures prey upon each other, carrying on eternal war since the world began. </p></article></div><div class="ac-sub"><input class="ac-input" id="ac-3" name="ac-3" type="checkbox"><label class="ac-label" for="ac-3">They are so delicious</label><article class="ac-sub-text"><p> My younger brother was in London when the Martians fell at Woking. He was a medical student working for an imminent examination, and he heard nothing of the arrival until Saturday morning. The morning papers on Saturday contained, in addition to lengthy special articles on the planet Mars, on life in the planets, and so forth, a brief and vaguely worded telegram, all the more striking for its brevity. </p><p> The Martians, alarmed by the approach of a crowd, had killed a number of people with a quick-firing gun, so the story ran. The telegram concluded with the words: &quot;Formidable as they seem to be, the Martians have not moved from the pit into which they have fallen, and, indeed, seem incapable of doing so. Probably this is due to the relative strength of the earth&#39;s gravitational energy.&quot; On that last text their leader-writer expanded very comfortingly. </p></article></div></article></div><div class="ac"><input class="ac-input" id="ac-4" name="ac-4" type="checkbox"><label class="ac-label" for="ac-4">Item 2</label><article class="ac-text"><div class="ac-sub"><input class="ac-input" id="ac-5" name="ac-5" type="checkbox"><label class="ac-label" for="ac-5">I also love regular donuts</label><article class="ac-sub-text"><p> But not only is the sea such a foe to man who is an alien to it, but it is also a fiend to its own off-spring; worse than the Persian host who murdered his own guests; sparing not the creatures which itself hath spawned. Like a savage tigress that tossing in the jungle overlays her own cubs, so the sea dashes even the mightiest whales against the rocks, and leaves them there side by side with the split wrecks of ships. No mercy, no power but its own controls it. Panting and snorting like a mad battle steed that has lost its rider, the masterless ocean overruns the globe. </p><p> Consider the subtleness of the sea; how its most dreaded creatures glide under water, unapparent for the most part, and treacherously hidden beneath the loveliest tints of azure. Consider also the devilish brilliance and beauty of many of its most remorseless tribes, as the dainty embellished shape of many species of sharks. Consider, once more, the universal cannibalism of the sea; all whose creatures prey upon each other, carrying on eternal war since the world began. </p></article></div><div class="ac-sub"><input class="ac-input" id="ac-6" name="ac-6" type="checkbox"><label class="ac-label" for="ac-6">They are also delicious</label><article class="ac-sub-text"><p> My younger brother was in London when the Martians fell at Woking. He was a medical student working for an imminent examination, and he heard nothing of the arrival until Saturday morning. The morning papers on Saturday contained, in addition to lengthy special articles on the planet Mars, on life in the planets, and so forth, a brief and vaguely worded telegram, all the more striking for its brevity. </p><p> The Martians, alarmed by the approach of a crowd, had killed a number of people with a quick-firing gun, so the story ran. The telegram concluded with the words: &quot;Formidable as they seem to be, the Martians have not moved from the pit into which they have fallen, and, indeed, seem incapable of doing so. Probably this is due to the relative strength of the earth&#39;s gravitational energy.&quot; On that last text their leader-writer expanded very comfortingly. </p></article></div></article></div></section>',
    1
  ),
  ud = [cd]
function dd(e, t) {
  return U(), W('div', ld, ud)
}
const fd = J(ad, [['render', dd]]),
  pd = { class: 'abody' },
  hd = ['id'],
  md = { id: 'buttons' },
  bd = {
    __name: 'SubSoundBoard',
    setup(e) {
      const t = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
      P(null), P(null), P(null), P(null), P(null), P(null)
      let n
      return (
        ue(() => {
          ;(() => {
            t.forEach((o) => {
              var r = 'sounds/' + o + '.mp3',
                a = new URL(r, import.meta.url).href
              const l = document.getElementById(o)
              ;(l.src = a), console.log(l.src)
            })
          })(),
            (n = (o) => {
              if ((console.log('event', o), o)) {
                var r = o.target.textContent
                const a = document.getElementById(r)
                i(), a.play()
              }
            })
          function i() {
            t.forEach((o) => {
              const r = document.getElementById(o)
              r.pause(), (r.currentTime = 0)
            })
          }
        }),
        (s, i) => (
          U(),
          W('div', pd, [
            (U(),
            W(
              be,
              null,
              Ns(t, (o) => m('audio', { key: o, ref_for: !0, ref: 'item', id: o }, null, 8, hd)),
              64
            )),
            m('div', md, [
              (U(),
              W(
                be,
                null,
                Ns(t, (o) =>
                  m(
                    'button',
                    {
                      key: o,
                      class: 'btn',
                      onClick: i[0] || (i[0] = (...r) => ze(n) && ze(n)(...r))
                    },
                    St(o),
                    1
                  )
                ),
                64
              ))
            ])
          ])
        )
      )
    }
  },
  vd = J(bd, [['__scopeId', 'data-v-5dc87f26']]),
  gd = (e) => (Ae('data-v-727e363d'), (e = e()), Oe(), e),
  _d = { class: 'abody' },
  yd = { class: 'container' },
  wd = gd(() => m('h3', null, "Don't Laugh Challenge", -1)),
  xd = {
    __name: 'SubDadJokes',
    setup(e) {
      const t = P(null),
        n = P(null)
      ue(() => {
        console.log('dadjokes loaded'), s()
      })
      async function s() {
        const r = await (
          await fetch('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
        ).json()
        t.value.innerHTML = r.joke
      }
      return (i, o) => (
        U(),
        W('div', _d, [
          m('div', yd, [
            wd,
            m('div', { ref_key: 'jokeEl', ref: t, class: 'joke' }, '// Joke goes here', 512),
            m(
              'button',
              { ref_key: 'jokeBtn', ref: n, class: 'btn', onClick: s },
              'Get Another Joke',
              512
            )
          ])
        ])
      )
    }
  },
  Ed = J(xd, [['__scopeId', 'data-v-727e363d']]),
  Ei = (e) => (Ae('data-v-41d0adb9'), (e = e()), Oe(), e),
  Sd = { class: 'abody' },
  Cd = Ei(() => m('h1', null, 'Drink Water', -1)),
  Rd = Ei(() => m('h3', null, 'Goal: 2 Liters', -1)),
  kd = { class: 'cup' },
  Td = Ei(() => m('small', null, 'Remained', -1)),
  $d = xe(
    '<p class="text" data-v-41d0adb9>Select how many glasses of water that you have drank</p><div class="cups" data-v-41d0adb9><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div><div class="cup cup-small" data-v-41d0adb9>250 ml</div></div>',
    2
  ),
  Ad = {
    __name: 'SubDrinkWater',
    setup(e) {
      const t = P(null),
        n = P(null),
        s = P(null),
        i = P(null)
      return (
        ue(() => {
          ;(i.value = document.querySelectorAll('.cup-small')),
            r(),
            i.value.forEach((a, l) => {
              a.addEventListener('click', () => o(l))
            })
          function o(a) {
            ;((a === 7 && i.value[a].classList.contains('full')) ||
              (i.value[a].classList.contains('full') &&
                !i.value[a].nextElementSibling.classList.contains('full'))) &&
              a--,
              i.value.forEach((l, u) => {
                u <= a ? l.classList.add('full') : l.classList.remove('full')
              }),
              r()
          }
          function r() {
            const a = document.querySelectorAll('.cup-small.full').length,
              l = i.value.length
            a === 0
              ? ((n.value.style.visibility = 'hidden'), (n.value.style.height = 0))
              : ((n.value.style.visibility = 'visible'),
                (n.value.style.height = `${(a / l) * 330}px`),
                (n.value.innerText = `${(a / l) * 100}%`)),
              a === l
                ? ((s.value.style.visibility = 'hidden'), (s.value.style.height = 0))
                : ((s.value.style.visibility = 'visible'),
                  (t.value.innerText = `${2 - (250 * a) / 1e3}L`))
          }
        }),
        (o, r) => (
          U(),
          W('div', Sd, [
            Cd,
            Rd,
            m('div', kd, [
              m(
                'div',
                { class: 'remained', id: 'remained', ref_key: 'remained', ref: s },
                [m('span', { id: 'liters', ref_key: 'liters', ref: t }, null, 512), Td],
                512
              ),
              m(
                'div',
                { class: 'percentage', id: 'percentage', ref_key: 'percentage', ref: n },
                null,
                512
              )
            ]),
            $d
          ])
        )
      )
    }
  },
  Od = J(Ad, [['__scopeId', 'data-v-41d0adb9']]),
  Si = (e) => (Ae('data-v-207c1f34'), (e = e()), Oe(), e),
  Pd = { class: 'abody' },
  Ld = { class: 'card' },
  Md = { class: 'card-content' },
  Id = Si(() => m('span', { class: 'animated-bg animated-bg-text' }, ' ', -1)),
  qd = Si(() => m('span', { class: 'animated-bg animated-bg-text' }, ' ', -1)),
  jd = Si(() => m('span', { class: 'animated-bg animated-bg-text' }, ' ', -1)),
  Nd = [Id, qd, jd],
  Hd = { class: 'author' },
  Dd = { class: 'author-info' },
  zd = {
    __name: 'SubContentPlaceHolder',
    setup(e) {
      const t = P(),
        n = P(),
        s = P(),
        i = P(),
        o = P(),
        r = P(),
        a = P(''),
        l = P(''),
        u = document.querySelectorAll('.animated-bg'),
        c = document.querySelectorAll('.animated-bg-text')
      function d() {
        ;(a.value =
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'),
          (l.value = 'https://randomuser.me/api/portraits/men/45.jpg')
        const h = Wt('img', { src: a.value, alt: '' })
        ;(t.value.innerHTML = ''), Js(h, t.value)
        const b = Wt('img', { src: l.value })
        ;(i.value.innerHTML = ''),
          Js(b, i.value),
          (n.value.innerHTML = 'Lorem ipsum dolor sit amet'),
          (s.value.innerHTML =
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'),
          (o.value.innerHTML = 'John Doe'),
          (r.value.innerHTML = 'Oct 08, 2020'),
          u.forEach((g) => g.classList.remove('animated-bg')),
          c.forEach((g) => g.classList.remove('animated-bg-text'))
      }
      return (
        ue(() => {
          setTimeout(d, 2500)
        }),
        (h, b) => (
          U(),
          W('div', Pd, [
            m('div', Ld, [
              m(
                'div',
                { class: 'card-header animated-bg', id: 'header', ref_key: 'header', ref: t },
                ' ',
                512
              ),
              m('div', Md, [
                m(
                  'h3',
                  {
                    class: 'card-title animated-bg animated-bg-text',
                    id: 'title',
                    ref_key: 'title',
                    ref: n
                  },
                  ' ',
                  512
                ),
                m(
                  'p',
                  { class: 'card-excerpt', id: 'excerpt', ref_key: 'excerpt', ref: s },
                  Nd,
                  512
                ),
                m('div', Hd, [
                  m(
                    'div',
                    {
                      class: 'profile-img animated-bg',
                      id: 'profile_img',
                      ref_key: 'profile_img',
                      ref: i
                    },
                    ' ',
                    512
                  ),
                  m('div', Dd, [
                    m(
                      'strong',
                      {
                        class: 'animated-bg animated-bg-text',
                        id: 'name',
                        ref_key: 'name',
                        ref: o
                      },
                      ' ',
                      512
                    ),
                    m(
                      'small',
                      {
                        class: 'animated-bg animated-bg-text',
                        id: 'date',
                        ref_key: 'date',
                        ref: r
                      },
                      ' ',
                      512
                    )
                  ])
                ])
              ])
            ])
          ])
        )
      )
    }
  },
  Bd = J(zd, [['__scopeId', 'data-v-207c1f34']]),
  Ur = (e) => (Ae('data-v-cc0d615f'), (e = e()), Oe(), e),
  Fd = { class: 'abody' },
  Ud = xe(
    '<div class="container" data-v-cc0d615f><h1 class="logo" data-v-cc0d615f><a href="/index.html" data-v-cc0d615f>My Website</a></h1><ul data-v-cc0d615f><li data-v-cc0d615f><a href="#" class="current" data-v-cc0d615f>Home</a></li><li data-v-cc0d615f><a href="#" data-v-cc0d615f>About</a></li><li data-v-cc0d615f><a href="#" data-v-cc0d615f>Services</a></li><li data-v-cc0d615f><a href="#" data-v-cc0d615f>Contact</a></li></ul></div>',
    1
  ),
  Vd = [Ud],
  Wd = Ur(() =>
    m(
      'div',
      { class: 'hero' },
      [
        m('div', { class: 'container' }, [
          m('h1', null, 'Welcome To My Website'),
          m(
            'p',
            null,
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?'
          )
        ])
      ],
      -1
    )
  ),
  Kd = Ur(() =>
    m(
      'section',
      { class: 'container content' },
      [
        m('h2', null, 'Content One'),
        m(
          'p',
          null,
          ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi! '
        ),
        m('h3', null, 'Content Two'),
        m(
          'p',
          null,
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat? '
        )
      ],
      -1
    )
  ),
  Jd = {
    __name: 'SubStickyNavigation',
    setup(e) {
      const t = P()
      ue(() => {
        window.addEventListener('scroll', n)
      })
      function n() {
        window.scrollY > t.value.offsetHeight + 150
          ? t.value.classList.add('active')
          : t.value.classList.remove('active')
      }
      return (s, i) => (
        U(), W('div', Fd, [m('nav', { class: 'nav', ref_key: 'nav', ref: t }, Vd, 512), Wd, Kd])
      )
    }
  },
  Gd = J(Jd, [['__scopeId', 'data-v-cc0d615f']]),
  Qd = (e) => (Ae('data-v-58d88501'), (e = e()), Oe(), e),
  Yd = { class: 'abody' },
  Xd = Qd(() =>
    m(
      'h3',
      null,
      [je('Double click on the image to '), m('i', { class: 'fas fa-heart' }), je(' it')],
      -1
    )
  ),
  Zd = {
    __name: 'SubDoubleClickHeart',
    setup(e) {
      const t = P(),
        n = P()
      let s = 0,
        i = 0
      const o = (a) => {
          s === 0
            ? (s = new Date().getTime())
            : new Date().getTime() - s < 800
              ? (r(a), (s = 0))
              : (s = new Date().getTime())
        },
        r = (a) => {
          const l = document.createElement('i')
          l.classList.add('fas'), l.classList.add('fa-heart')
          const u = a.clientX,
            c = a.clientY,
            d = a.target.offsetLeft,
            h = a.target.offsetTop,
            b = u - d,
            g = c - h
          ;(l.style.top = `${g}px`),
            (l.style.left = `${b}px`),
            t.value.appendChild(l),
            (n.value.innerHTML = ++i),
            setTimeout(() => l.remove(), 1e3)
        }
      return (a, l) => (
        U(),
        W('div', Yd, [
          Xd,
          m('small', null, [
            je('You liked it '),
            m('span', { id: 'times', ref_key: 'times', ref: n }, '0', 512),
            je(' times')
          ]),
          m('div', { class: 'loveMe', ref_key: 'loveMe', ref: t, onClick: o }, null, 512)
        ])
      )
    }
  },
  ef = J(Zd, [['__scopeId', 'data-v-58d88501']]),
  tf = (e) => (Ae('data-v-2815067c'), (e = e()), Oe(), e),
  nf = { class: 'abody' },
  sf = tf(() =>
    m(
      'strong',
      null,
      [je('How satisfied are you with our '), m('br'), je(' customer support performance?')],
      -1
    )
  ),
  of = xe(
    '<div class="rating" data-v-2815067c><img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png" alt="" data-v-2815067c><small data-v-2815067c>Unhappy</small></div><div class="rating" data-v-2815067c><img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png" alt="" data-v-2815067c><small data-v-2815067c>Neutral</small></div><div class="rating active" data-v-2815067c><img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png" alt="" data-v-2815067c><small data-v-2815067c>Satisfied</small></div>',
    3
  ),
  rf = [of],
  af = {
    __name: 'SubFeedBackUIDesign',
    setup(e) {
      let t = 'Satisfied'
      const n = P(null),
        s = P(null)
      ue(() => {
        ;(n.value = document.querySelectorAll('.rating')),
          (s.value = document.querySelector('#panel'))
      })
      const i = (a) => {
          a.target.parentNode.classList.contains('rating') && a.target.nextElementSibling
            ? (r(),
              a.target.parentNode.classList.add('active'),
              (t = a.target.nextElementSibling.innerHTML),
              console.log('select: ', t))
            : a.target.parentNode.classList.contains('rating') &&
              a.target.previousSibling &&
              a.target.previousElementSibling.nodeName === 'IMG' &&
              (r(),
              a.target.parentNode.classList.add('active'),
              (t = a.target.innerHTML),
              console.log('select2: ', t))
        },
        o = (a) => {
          s.value.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${t}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
        }
      function r() {
        console.log('len', n.value.length)
        for (let a = 0; a < n.value.length; a++) n.value[a].classList.remove('active')
      }
      return (a, l) => (
        U(),
        W('div', nf, [
          m('div', { id: 'panel', class: 'panel-container' }, [
            sf,
            m('div', { class: 'ratings-container', onClick: i }, rf),
            m('button', { class: 'btn', id: 'send', onClick: o }, 'Send Review')
          ])
        ])
      )
    }
  },
  lf = J(af, [['__scopeId', 'data-v-2815067c']]),
  cf = { class: 'abody' },
  uf = xe(
    '<div class="container" data-v-46061eef><h1 data-v-46061eef>Please Login</h1><form data-v-46061eef><div class="form-control" data-v-46061eef><input type="text" required data-v-46061eef><label data-v-46061eef>Email</label></div><div class="form-control" data-v-46061eef><input type="password" required data-v-46061eef><label data-v-46061eef>Password</label></div><button class="btn" data-v-46061eef>Login</button><p class="text" data-v-46061eef>Don&#39;t have an account? <a href="#" data-v-46061eef>Register</a></p></form></div>',
    1
  ),
  df = [uf],
  ff = {
    __name: 'SubFormInputWave',
    setup(e) {
      return (
        ue(() => {
          document.querySelectorAll('.form-control label').forEach((n) => {
            n.innerHTML = n.innerText
              .split('')
              .map((s, i) => `<span style="transition-delay:${i * 50}ms">${s}</span>`)
              .join('')
          })
        }),
        (t, n) => (U(), W('div', cf, df))
      )
    }
  },
  pf = J(ff, [['__scopeId', 'data-v-46061eef']])
function Vr(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: hf } = Object.prototype,
  { getPrototypeOf: Ci } = Object,
  cs = ((e) => (t) => {
    const n = hf.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  Ze = (e) => ((e = e.toLowerCase()), (t) => cs(t) === e),
  us = (e) => (t) => typeof t === e,
  { isArray: Yt } = Array,
  xn = us('undefined')
function mf(e) {
  return (
    e !== null &&
    !xn(e) &&
    e.constructor !== null &&
    !xn(e.constructor) &&
    Ie(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const Wr = Ze('ArrayBuffer')
function bf(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Wr(e.buffer)),
    t
  )
}
const vf = us('string'),
  Ie = us('function'),
  Kr = us('number'),
  ds = (e) => e !== null && typeof e == 'object',
  gf = (e) => e === !0 || e === !1,
  Bn = (e) => {
    if (cs(e) !== 'object') return !1
    const t = Ci(e)
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  _f = Ze('Date'),
  yf = Ze('File'),
  wf = Ze('Blob'),
  xf = Ze('FileList'),
  Ef = (e) => ds(e) && Ie(e.pipe),
  Sf = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Ie(e.append) &&
          ((t = cs(e)) === 'formdata' ||
            (t === 'object' && Ie(e.toString) && e.toString() === '[object FormData]'))))
    )
  },
  Cf = Ze('URLSearchParams'),
  Rf = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function kn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let s, i
  if ((typeof e != 'object' && (e = [e]), Yt(e)))
    for (s = 0, i = e.length; s < i; s++) t.call(null, e[s], s, e)
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      r = o.length
    let a
    for (s = 0; s < r; s++) (a = o[s]), t.call(null, e[a], a, e)
  }
}
function Jr(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let s = n.length,
    i
  for (; s-- > 0; ) if (((i = n[s]), t === i.toLowerCase())) return i
  return null
}
const Gr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Qr = (e) => !xn(e) && e !== Gr
function Gs() {
  const { caseless: e } = (Qr(this) && this) || {},
    t = {},
    n = (s, i) => {
      const o = (e && Jr(t, i)) || i
      Bn(t[o]) && Bn(s)
        ? (t[o] = Gs(t[o], s))
        : Bn(s)
          ? (t[o] = Gs({}, s))
          : Yt(s)
            ? (t[o] = s.slice())
            : (t[o] = s)
    }
  for (let s = 0, i = arguments.length; s < i; s++) arguments[s] && kn(arguments[s], n)
  return t
}
const kf = (e, t, n, { allOwnKeys: s } = {}) => (
    kn(
      t,
      (i, o) => {
        n && Ie(i) ? (e[o] = Vr(i, n)) : (e[o] = i)
      },
      { allOwnKeys: s }
    ),
    e
  ),
  Tf = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  $f = (e, t, n, s) => {
    ;(e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  Af = (e, t, n, s) => {
    let i, o, r
    const a = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (r = i[o]), (!s || s(r, e, t)) && !a[r] && ((t[r] = e[r]), (a[r] = !0))
      e = n !== !1 && Ci(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  Of = (e, t, n) => {
    ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
    const s = e.indexOf(t, n)
    return s !== -1 && s === n
  },
  Pf = (e) => {
    if (!e) return null
    if (Yt(e)) return e
    let t = e.length
    if (!Kr(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  Lf = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Ci(Uint8Array)),
  Mf = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e)
    let i
    for (; (i = s.next()) && !i.done; ) {
      const o = i.value
      t.call(e, o[0], o[1])
    }
  },
  If = (e, t) => {
    let n
    const s = []
    for (; (n = e.exec(t)) !== null; ) s.push(n)
    return s
  },
  qf = Ze('HTMLFormElement'),
  jf = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, i) {
      return s.toUpperCase() + i
    }),
  ho = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Nf = Ze('RegExp'),
  Yr = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {}
    kn(n, (i, o) => {
      let r
      ;(r = t(i, o, e)) !== !1 && (s[o] = r || i)
    }),
      Object.defineProperties(e, s)
  },
  Hf = (e) => {
    Yr(e, (t, n) => {
      if (Ie(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const s = e[n]
      if (Ie(s)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  Df = (e, t) => {
    const n = {},
      s = (i) => {
        i.forEach((o) => {
          n[o] = !0
        })
      }
    return Yt(e) ? s(e) : s(String(e).split(t)), n
  },
  zf = () => {},
  Bf = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Rs = 'abcdefghijklmnopqrstuvwxyz',
  mo = '0123456789',
  Xr = { DIGIT: mo, ALPHA: Rs, ALPHA_DIGIT: Rs + Rs.toUpperCase() + mo },
  Ff = (e = 16, t = Xr.ALPHA_DIGIT) => {
    let n = ''
    const { length: s } = t
    for (; e--; ) n += t[(Math.random() * s) | 0]
    return n
  }
function Uf(e) {
  return !!(e && Ie(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator])
}
const Vf = (e) => {
    const t = new Array(10),
      n = (s, i) => {
        if (ds(s)) {
          if (t.indexOf(s) >= 0) return
          if (!('toJSON' in s)) {
            t[i] = s
            const o = Yt(s) ? [] : {}
            return (
              kn(s, (r, a) => {
                const l = n(r, i + 1)
                !xn(l) && (o[a] = l)
              }),
              (t[i] = void 0),
              o
            )
          }
        }
        return s
      }
    return n(e, 0)
  },
  Wf = Ze('AsyncFunction'),
  Kf = (e) => e && (ds(e) || Ie(e)) && Ie(e.then) && Ie(e.catch),
  y = {
    isArray: Yt,
    isArrayBuffer: Wr,
    isBuffer: mf,
    isFormData: Sf,
    isArrayBufferView: bf,
    isString: vf,
    isNumber: Kr,
    isBoolean: gf,
    isObject: ds,
    isPlainObject: Bn,
    isUndefined: xn,
    isDate: _f,
    isFile: yf,
    isBlob: wf,
    isRegExp: Nf,
    isFunction: Ie,
    isStream: Ef,
    isURLSearchParams: Cf,
    isTypedArray: Lf,
    isFileList: xf,
    forEach: kn,
    merge: Gs,
    extend: kf,
    trim: Rf,
    stripBOM: Tf,
    inherits: $f,
    toFlatObject: Af,
    kindOf: cs,
    kindOfTest: Ze,
    endsWith: Of,
    toArray: Pf,
    forEachEntry: Mf,
    matchAll: If,
    isHTMLForm: qf,
    hasOwnProperty: ho,
    hasOwnProp: ho,
    reduceDescriptors: Yr,
    freezeMethods: Hf,
    toObjectSet: Df,
    toCamelCase: jf,
    noop: zf,
    toFiniteNumber: Bf,
    findKey: Jr,
    global: Gr,
    isContextDefined: Qr,
    ALPHABET: Xr,
    generateString: Ff,
    isSpecCompliantForm: Uf,
    toJSONObject: Vf,
    isAsyncFn: Wf,
    isThenable: Kf
  }
function Q(e, t, n, s, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    i && (this.response = i)
}
y.inherits(Q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    }
  }
})
const Zr = Q.prototype,
  ea = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach((e) => {
  ea[e] = { value: e }
})
Object.defineProperties(Q, ea)
Object.defineProperty(Zr, 'isAxiosError', { value: !0 })
Q.from = (e, t, n, s, i, o) => {
  const r = Object.create(Zr)
  return (
    y.toFlatObject(
      e,
      r,
      function (l) {
        return l !== Error.prototype
      },
      (a) => a !== 'isAxiosError'
    ),
    Q.call(r, e.message, t, n, s, i),
    (r.cause = e),
    (r.name = e.name),
    o && Object.assign(r, o),
    r
  )
}
const Jf = null
function Qs(e) {
  return y.isPlainObject(e) || y.isArray(e)
}
function ta(e) {
  return y.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function bo(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = ta(i)), !n && o ? '[' + i + ']' : i
        })
        .join(n ? '.' : '')
    : t
}
function Gf(e) {
  return y.isArray(e) && !e.some(Qs)
}
const Qf = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function fs(e, t, n) {
  if (!y.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = y.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (E, $) {
      return !y.isUndefined($[E])
    }))
  const s = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    r = n.indexes,
    l = (n.Blob || (typeof Blob < 'u' && Blob)) && y.isSpecCompliantForm(t)
  if (!y.isFunction(i)) throw new TypeError('visitor must be a function')
  function u(g) {
    if (g === null) return ''
    if (y.isDate(g)) return g.toISOString()
    if (!l && y.isBlob(g)) throw new Q('Blob is not supported. Use a Buffer instead.')
    return y.isArrayBuffer(g) || y.isTypedArray(g)
      ? l && typeof Blob == 'function'
        ? new Blob([g])
        : Buffer.from(g)
      : g
  }
  function c(g, E, $) {
    let C = g
    if (g && !$ && typeof g == 'object') {
      if (y.endsWith(E, '{}')) (E = s ? E : E.slice(0, -2)), (g = JSON.stringify(g))
      else if (
        (y.isArray(g) && Gf(g)) ||
        ((y.isFileList(g) || y.endsWith(E, '[]')) && (C = y.toArray(g)))
      )
        return (
          (E = ta(E)),
          C.forEach(function (N, K) {
            !(y.isUndefined(N) || N === null) &&
              t.append(r === !0 ? bo([E], K, o) : r === null ? E : E + '[]', u(N))
          }),
          !1
        )
    }
    return Qs(g) ? !0 : (t.append(bo($, E, o), u(g)), !1)
  }
  const d = [],
    h = Object.assign(Qf, { defaultVisitor: c, convertValue: u, isVisitable: Qs })
  function b(g, E) {
    if (!y.isUndefined(g)) {
      if (d.indexOf(g) !== -1) throw Error('Circular reference detected in ' + E.join('.'))
      d.push(g),
        y.forEach(g, function (C, q) {
          ;(!(y.isUndefined(C) || C === null) &&
            i.call(t, C, y.isString(q) ? q.trim() : q, E, h)) === !0 && b(C, E ? E.concat(q) : [q])
        }),
        d.pop()
    }
  }
  if (!y.isObject(e)) throw new TypeError('data must be an object')
  return b(e), t
}
function vo(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s]
  })
}
function Ri(e, t) {
  ;(this._pairs = []), e && fs(e, this, t)
}
const na = Ri.prototype
na.append = function (t, n) {
  this._pairs.push([t, n])
}
na.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, vo)
      }
    : vo
  return this._pairs
    .map(function (i) {
      return n(i[0]) + '=' + n(i[1])
    }, '')
    .join('&')
}
function Yf(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function sa(e, t, n) {
  if (!t) return e
  const s = (n && n.encode) || Yf,
    i = n && n.serialize
  let o
  if (
    (i ? (o = i(t, n)) : (o = y.isURLSearchParams(t) ? t.toString() : new Ri(t, n).toString(s)), o)
  ) {
    const r = e.indexOf('#')
    r !== -1 && (e = e.slice(0, r)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
  }
  return e
}
class go {
  constructor() {
    this.handlers = []
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    y.forEach(this.handlers, function (s) {
      s !== null && t(s)
    })
  }
}
const ia = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Xf = typeof URLSearchParams < 'u' ? URLSearchParams : Ri,
  Zf = typeof FormData < 'u' ? FormData : null,
  ep = typeof Blob < 'u' ? Blob : null,
  tp = {
    isBrowser: !0,
    classes: { URLSearchParams: Xf, FormData: Zf, Blob: ep },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  oa = typeof window < 'u' && typeof document < 'u',
  np = ((e) => oa && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  sp =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ip = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: oa,
        hasStandardBrowserEnv: np,
        hasStandardBrowserWebWorkerEnv: sp
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ye = { ...ip, ...tp }
function op(e, t) {
  return fs(
    e,
    new Ye.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, i, o) {
          return Ye.isNode && y.isBuffer(n)
            ? (this.append(s, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments)
        }
      },
      t
    )
  )
}
function rp(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function ap(e) {
  const t = {},
    n = Object.keys(e)
  let s
  const i = n.length
  let o
  for (s = 0; s < i; s++) (o = n[s]), (t[o] = e[o])
  return t
}
function ra(e) {
  function t(n, s, i, o) {
    let r = n[o++]
    if (r === '__proto__') return !0
    const a = Number.isFinite(+r),
      l = o >= n.length
    return (
      (r = !r && y.isArray(i) ? i.length : r),
      l
        ? (y.hasOwnProp(i, r) ? (i[r] = [i[r], s]) : (i[r] = s), !a)
        : ((!i[r] || !y.isObject(i[r])) && (i[r] = []),
          t(n, s, i[r], o) && y.isArray(i[r]) && (i[r] = ap(i[r])),
          !a)
    )
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {}
    return (
      y.forEachEntry(e, (s, i) => {
        t(rp(s), i, n, 0)
      }),
      n
    )
  }
  return null
}
function lp(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e)
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s
    }
  return (0, JSON.stringify)(e)
}
const Tn = {
  transitional: ia,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || '',
        i = s.indexOf('application/json') > -1,
        o = y.isObject(t)
      if ((o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return i ? JSON.stringify(ra(t)) : t
      if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t))
        return t
      if (y.isArrayBufferView(t)) return t.buffer
      if (y.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
      let a
      if (o) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return op(t, this.formSerializer).toString()
        if ((a = y.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData
          return fs(a ? { 'files[]': t } : t, l && new l(), this.formSerializer)
        }
      }
      return o || i ? (n.setContentType('application/json', !1), lp(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Tn.transitional,
        s = n && n.forcedJSONParsing,
        i = this.responseType === 'json'
      if (t && y.isString(t) && ((s && !this.responseType) || i)) {
        const r = !(n && n.silentJSONParsing) && i
        try {
          return JSON.parse(t)
        } catch (a) {
          if (r)
            throw a.name === 'SyntaxError'
              ? Q.from(a, Q.ERR_BAD_RESPONSE, this, null, this.response)
              : a
        }
      }
      return t
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ye.classes.FormData, Blob: Ye.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } }
}
y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Tn.headers[e] = {}
})
const cp = y.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  up = (e) => {
    const t = {}
    let n, s, i
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (r) {
            ;(i = r.indexOf(':')),
              (n = r.substring(0, i).trim().toLowerCase()),
              (s = r.substring(i + 1).trim()),
              !(!n || (t[n] && cp[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ', ' + s : s))
          }),
      t
    )
  },
  _o = Symbol('internals')
function nn(e) {
  return e && String(e).trim().toLowerCase()
}
function Fn(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Fn) : String(e)
}
function dp(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let s
  for (; (s = n.exec(e)); ) t[s[1]] = s[2]
  return t
}
const fp = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function ks(e, t, n, s, i) {
  if (y.isFunction(s)) return s.call(this, t, n)
  if ((i && (t = n), !!y.isString(t))) {
    if (y.isString(s)) return t.indexOf(s) !== -1
    if (y.isRegExp(s)) return s.test(t)
  }
}
function pp(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}
function hp(e, t) {
  const n = y.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (i, o, r) {
        return this[s].call(this, t, i, o, r)
      },
      configurable: !0
    })
  })
}
class qe {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, s) {
    const i = this
    function o(a, l, u) {
      const c = nn(l)
      if (!c) throw new Error('header name must be a non-empty string')
      const d = y.findKey(i, c)
      ;(!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) && (i[d || l] = Fn(a))
    }
    const r = (a, l) => y.forEach(a, (u, c) => o(u, c, l))
    return (
      y.isPlainObject(t) || t instanceof this.constructor
        ? r(t, n)
        : y.isString(t) && (t = t.trim()) && !fp(t)
          ? r(up(t), n)
          : t != null && o(n, t, s),
      this
    )
  }
  get(t, n) {
    if (((t = nn(t)), t)) {
      const s = y.findKey(this, t)
      if (s) {
        const i = this[s]
        if (!n) return i
        if (n === !0) return dp(i)
        if (y.isFunction(n)) return n.call(this, i, s)
        if (y.isRegExp(n)) return n.exec(i)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = nn(t)), t)) {
      const s = y.findKey(this, t)
      return !!(s && this[s] !== void 0 && (!n || ks(this, this[s], s, n)))
    }
    return !1
  }
  delete(t, n) {
    const s = this
    let i = !1
    function o(r) {
      if (((r = nn(r)), r)) {
        const a = y.findKey(s, r)
        a && (!n || ks(s, s[a], a, n)) && (delete s[a], (i = !0))
      }
    }
    return y.isArray(t) ? t.forEach(o) : o(t), i
  }
  clear(t) {
    const n = Object.keys(this)
    let s = n.length,
      i = !1
    for (; s--; ) {
      const o = n[s]
      ;(!t || ks(this, this[o], o, t, !0)) && (delete this[o], (i = !0))
    }
    return i
  }
  normalize(t) {
    const n = this,
      s = {}
    return (
      y.forEach(this, (i, o) => {
        const r = y.findKey(s, o)
        if (r) {
          ;(n[r] = Fn(i)), delete n[o]
          return
        }
        const a = t ? pp(o) : String(o).trim()
        a !== o && delete n[o], (n[a] = Fn(i)), (s[a] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      y.forEach(this, (s, i) => {
        s != null && s !== !1 && (n[i] = t && y.isArray(s) ? s.join(', ') : s)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const s = new this(t)
    return n.forEach((i) => s.set(i)), s
  }
  static accessor(t) {
    const s = (this[_o] = this[_o] = { accessors: {} }).accessors,
      i = this.prototype
    function o(r) {
      const a = nn(r)
      s[a] || (hp(i, r), (s[a] = !0))
    }
    return y.isArray(t) ? t.forEach(o) : o(t), this
  }
}
qe.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
])
y.reduceDescriptors(qe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(s) {
      this[n] = s
    }
  }
})
y.freezeMethods(qe)
function Ts(e, t) {
  const n = this || Tn,
    s = t || n,
    i = qe.from(s.headers)
  let o = s.data
  return (
    y.forEach(e, function (a) {
      o = a.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
  )
}
function aa(e) {
  return !!(e && e.__CANCEL__)
}
function $n(e, t, n) {
  Q.call(this, e ?? 'canceled', Q.ERR_CANCELED, t, n), (this.name = 'CanceledError')
}
y.inherits($n, Q, { __CANCEL__: !0 })
function mp(e, t, n) {
  const s = n.config.validateStatus
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new Q(
          'Request failed with status code ' + n.status,
          [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      )
}
const bp = Ye.hasStandardBrowserEnv
  ? {
      write(e, t, n, s, i, o) {
        const r = [e + '=' + encodeURIComponent(t)]
        y.isNumber(n) && r.push('expires=' + new Date(n).toGMTString()),
          y.isString(s) && r.push('path=' + s),
          y.isString(i) && r.push('domain=' + i),
          o === !0 && r.push('secure'),
          (document.cookie = r.join('; '))
      },
      read(e) {
        const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
        return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5)
      }
    }
  : {
      write() {},
      read() {
        return null
      },
      remove() {}
    }
function vp(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function gp(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function la(e, t) {
  return e && !vp(t) ? gp(e, t) : t
}
const _p = Ye.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let s
      function i(o) {
        let r = o
        return (
          t && (n.setAttribute('href', r), (r = n.href)),
          n.setAttribute('href', r),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname
          }
        )
      }
      return (
        (s = i(window.location.href)),
        function (r) {
          const a = y.isString(r) ? i(r) : r
          return a.protocol === s.protocol && a.host === s.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function yp(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function wp(e, t) {
  e = e || 10
  const n = new Array(e),
    s = new Array(e)
  let i = 0,
    o = 0,
    r
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = s[o]
      r || (r = u), (n[i] = l), (s[i] = u)
      let d = o,
        h = 0
      for (; d !== i; ) (h += n[d++]), (d = d % e)
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - r < t)) return
      const b = c && u - c
      return b ? Math.round((h * 1e3) / b) : void 0
    }
  )
}
function yo(e, t) {
  let n = 0
  const s = wp(50, 250)
  return (i) => {
    const o = i.loaded,
      r = i.lengthComputable ? i.total : void 0,
      a = o - n,
      l = s(a),
      u = o <= r
    n = o
    const c = {
      loaded: o,
      total: r,
      progress: r ? o / r : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && r && u ? (r - o) / l : void 0,
      event: i
    }
    ;(c[t ? 'download' : 'upload'] = !0), e(c)
  }
}
const xp = typeof XMLHttpRequest < 'u',
  Ep =
    xp &&
    function (e) {
      return new Promise(function (n, s) {
        let i = e.data
        const o = qe.from(e.headers).normalize()
        let { responseType: r, withXSRFToken: a } = e,
          l
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener('abort', l)
        }
        let c
        if (y.isFormData(i)) {
          if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv) o.setContentType(!1)
          else if ((c = o.getContentType()) !== !1) {
            const [E, ...$] = c
              ? c
                  .split(';')
                  .map((C) => C.trim())
                  .filter(Boolean)
              : []
            o.setContentType([E || 'multipart/form-data', ...$].join('; '))
          }
        }
        let d = new XMLHttpRequest()
        if (e.auth) {
          const E = e.auth.username || '',
            $ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
          o.set('Authorization', 'Basic ' + btoa(E + ':' + $))
        }
        const h = la(e.baseURL, e.url)
        d.open(e.method.toUpperCase(), sa(h, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout)
        function b() {
          if (!d) return
          const E = qe.from('getAllResponseHeaders' in d && d.getAllResponseHeaders()),
            C = {
              data: !r || r === 'text' || r === 'json' ? d.responseText : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: E,
              config: e,
              request: d
            }
          mp(
            function (N) {
              n(N), u()
            },
            function (N) {
              s(N), u()
            },
            C
          ),
            (d = null)
        }
        if (
          ('onloadend' in d
            ? (d.onloadend = b)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 && !(d.responseURL && d.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(b)
              }),
          (d.onabort = function () {
            d && (s(new Q('Request aborted', Q.ECONNABORTED, e, d)), (d = null))
          }),
          (d.onerror = function () {
            s(new Q('Network Error', Q.ERR_NETWORK, e, d)), (d = null)
          }),
          (d.ontimeout = function () {
            let $ = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded'
            const C = e.transitional || ia
            e.timeoutErrorMessage && ($ = e.timeoutErrorMessage),
              s(new Q($, C.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED, e, d)),
              (d = null)
          }),
          Ye.hasStandardBrowserEnv &&
            (a && y.isFunction(a) && (a = a(e)), a || (a !== !1 && _p(h))))
        ) {
          const E = e.xsrfHeaderName && e.xsrfCookieName && bp.read(e.xsrfCookieName)
          E && o.set(e.xsrfHeaderName, E)
        }
        i === void 0 && o.setContentType(null),
          'setRequestHeader' in d &&
            y.forEach(o.toJSON(), function ($, C) {
              d.setRequestHeader(C, $)
            }),
          y.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
          r && r !== 'json' && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            d.addEventListener('progress', yo(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            d.upload &&
            d.upload.addEventListener('progress', yo(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (E) => {
              d && (s(!E || E.type ? new $n(null, e, d) : E), d.abort(), (d = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal && (e.signal.aborted ? l() : e.signal.addEventListener('abort', l)))
        const g = yp(h)
        if (g && Ye.protocols.indexOf(g) === -1) {
          s(new Q('Unsupported protocol ' + g + ':', Q.ERR_BAD_REQUEST, e))
          return
        }
        d.send(i || null)
      })
    },
  Ys = { http: Jf, xhr: Ep }
y.forEach(Ys, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const wo = (e) => `- ${e}`,
  Sp = (e) => y.isFunction(e) || e === null || e === !1,
  ca = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e]
      const { length: t } = e
      let n, s
      const i = {}
      for (let o = 0; o < t; o++) {
        n = e[o]
        let r
        if (((s = n), !Sp(n) && ((s = Ys[(r = String(n)).toLowerCase()]), s === void 0)))
          throw new Q(`Unknown adapter '${r}'`)
        if (s) break
        i[r || '#' + o] = s
      }
      if (!s) {
        const o = Object.entries(i).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1 ? 'is not supported by the environment' : 'is not available in the build')
        )
        let r = t
          ? o.length > 1
            ? `since :
` +
              o.map(wo).join(`
`)
            : ' ' + wo(o[0])
          : 'as no adapter specified'
        throw new Q('There is no suitable adapter to dispatch the request ' + r, 'ERR_NOT_SUPPORT')
      }
      return s
    },
    adapters: Ys
  }
function $s(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new $n(null, e)
}
function xo(e) {
  return (
    $s(e),
    (e.headers = qe.from(e.headers)),
    (e.data = Ts.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    ca
      .getAdapter(e.adapter || Tn.adapter)(e)
      .then(
        function (s) {
          return (
            $s(e),
            (s.data = Ts.call(e, e.transformResponse, s)),
            (s.headers = qe.from(s.headers)),
            s
          )
        },
        function (s) {
          return (
            aa(s) ||
              ($s(e),
              s &&
                s.response &&
                ((s.response.data = Ts.call(e, e.transformResponse, s.response)),
                (s.response.headers = qe.from(s.response.headers)))),
            Promise.reject(s)
          )
        }
      )
  )
}
const Eo = (e) => (e instanceof qe ? { ...e } : e)
function Kt(e, t) {
  t = t || {}
  const n = {}
  function s(u, c, d) {
    return y.isPlainObject(u) && y.isPlainObject(c)
      ? y.merge.call({ caseless: d }, u, c)
      : y.isPlainObject(c)
        ? y.merge({}, c)
        : y.isArray(c)
          ? c.slice()
          : c
  }
  function i(u, c, d) {
    if (y.isUndefined(c)) {
      if (!y.isUndefined(u)) return s(void 0, u, d)
    } else return s(u, c, d)
  }
  function o(u, c) {
    if (!y.isUndefined(c)) return s(void 0, c)
  }
  function r(u, c) {
    if (y.isUndefined(c)) {
      if (!y.isUndefined(u)) return s(void 0, u)
    } else return s(void 0, c)
  }
  function a(u, c, d) {
    if (d in t) return s(u, c)
    if (d in e) return s(void 0, u)
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: r,
    transformRequest: r,
    transformResponse: r,
    paramsSerializer: r,
    timeout: r,
    timeoutMessage: r,
    withCredentials: r,
    withXSRFToken: r,
    adapter: r,
    responseType: r,
    xsrfCookieName: r,
    xsrfHeaderName: r,
    onUploadProgress: r,
    onDownloadProgress: r,
    decompress: r,
    maxContentLength: r,
    maxBodyLength: r,
    beforeRedirect: r,
    transport: r,
    httpAgent: r,
    httpsAgent: r,
    cancelToken: r,
    socketPath: r,
    responseEncoding: r,
    validateStatus: a,
    headers: (u, c) => i(Eo(u), Eo(c), !0)
  }
  return (
    y.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || i,
        h = d(e[c], t[c], c)
      ;(y.isUndefined(h) && d !== a) || (n[c] = h)
    }),
    n
  )
}
const ua = '1.6.8',
  ki = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  ki[e] = function (s) {
    return typeof s === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  }
})
const So = {}
ki.transitional = function (t, n, s) {
  function i(o, r) {
    return '[Axios v' + ua + "] Transitional option '" + o + "'" + r + (s ? '. ' + s : '')
  }
  return (o, r, a) => {
    if (t === !1) throw new Q(i(r, ' has been removed' + (n ? ' in ' + n : '')), Q.ERR_DEPRECATED)
    return (
      n &&
        !So[r] &&
        ((So[r] = !0),
        console.warn(
          i(r, ' has been deprecated since v' + n + ' and will be removed in the near future')
        )),
      t ? t(o, r, a) : !0
    )
  }
}
function Cp(e, t, n) {
  if (typeof e != 'object') throw new Q('options must be an object', Q.ERR_BAD_OPTION_VALUE)
  const s = Object.keys(e)
  let i = s.length
  for (; i-- > 0; ) {
    const o = s[i],
      r = t[o]
    if (r) {
      const a = e[o],
        l = a === void 0 || r(a, o, e)
      if (l !== !0) throw new Q('option ' + o + ' must be ' + l, Q.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new Q('Unknown option ' + o, Q.ERR_BAD_OPTION)
  }
}
const Xs = { assertOptions: Cp, validators: ki },
  ct = Xs.validators
class kt {
  constructor(t) {
    ;(this.defaults = t), (this.interceptors = { request: new go(), response: new go() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (s) {
      if (s instanceof Error) {
        let i
        Error.captureStackTrace ? Error.captureStackTrace((i = {})) : (i = new Error())
        const o = i.stack ? i.stack.replace(/^.+\n/, '') : ''
        s.stack
          ? o &&
            !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
            (s.stack +=
              `
` + o)
          : (s.stack = o)
      }
      throw s
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = Kt(this.defaults, n))
    const { transitional: s, paramsSerializer: i, headers: o } = n
    s !== void 0 &&
      Xs.assertOptions(
        s,
        {
          silentJSONParsing: ct.transitional(ct.boolean),
          forcedJSONParsing: ct.transitional(ct.boolean),
          clarifyTimeoutError: ct.transitional(ct.boolean)
        },
        !1
      ),
      i != null &&
        (y.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Xs.assertOptions(i, { encode: ct.function, serialize: ct.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let r = o && y.merge(o.common, o[n.method])
    o &&
      y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (g) => {
        delete o[g]
      }),
      (n.headers = qe.concat(r, o))
    const a = []
    let l = !0
    this.interceptors.request.forEach(function (E) {
      ;(typeof E.runWhen == 'function' && E.runWhen(n) === !1) ||
        ((l = l && E.synchronous), a.unshift(E.fulfilled, E.rejected))
    })
    const u = []
    this.interceptors.response.forEach(function (E) {
      u.push(E.fulfilled, E.rejected)
    })
    let c,
      d = 0,
      h
    if (!l) {
      const g = [xo.bind(this), void 0]
      for (g.unshift.apply(g, a), g.push.apply(g, u), h = g.length, c = Promise.resolve(n); d < h; )
        c = c.then(g[d++], g[d++])
      return c
    }
    h = a.length
    let b = n
    for (d = 0; d < h; ) {
      const g = a[d++],
        E = a[d++]
      try {
        b = g(b)
      } catch ($) {
        E.call(this, $)
        break
      }
    }
    try {
      c = xo.call(this, b)
    } catch (g) {
      return Promise.reject(g)
    }
    for (d = 0, h = u.length; d < h; ) c = c.then(u[d++], u[d++])
    return c
  }
  getUri(t) {
    t = Kt(this.defaults, t)
    const n = la(t.baseURL, t.url)
    return sa(n, t.params, t.paramsSerializer)
  }
}
y.forEach(['delete', 'get', 'head', 'options'], function (t) {
  kt.prototype[t] = function (n, s) {
    return this.request(Kt(s || {}, { method: t, url: n, data: (s || {}).data }))
  }
})
y.forEach(['post', 'put', 'patch'], function (t) {
  function n(s) {
    return function (o, r, a) {
      return this.request(
        Kt(a || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: r
        })
      )
    }
  }
  ;(kt.prototype[t] = n()), (kt.prototype[t + 'Form'] = n(!0))
})
class Ti {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (o) {
      n = o
    })
    const s = this
    this.promise.then((i) => {
      if (!s._listeners) return
      let o = s._listeners.length
      for (; o-- > 0; ) s._listeners[o](i)
      s._listeners = null
    }),
      (this.promise.then = (i) => {
        let o
        const r = new Promise((a) => {
          s.subscribe(a), (o = a)
        }).then(i)
        return (
          (r.cancel = function () {
            s.unsubscribe(o)
          }),
          r
        )
      }),
      t(function (o, r, a) {
        s.reason || ((s.reason = new $n(o, r, a)), n(s.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new Ti(function (i) {
        t = i
      }),
      cancel: t
    }
  }
}
function Rp(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function kp(e) {
  return y.isObject(e) && e.isAxiosError === !0
}
const Zs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
}
Object.entries(Zs).forEach(([e, t]) => {
  Zs[t] = e
})
function da(e) {
  const t = new kt(e),
    n = Vr(kt.prototype.request, t)
  return (
    y.extend(n, kt.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return da(Kt(e, i))
    }),
    n
  )
}
const ce = da(Tn)
ce.Axios = kt
ce.CanceledError = $n
ce.CancelToken = Ti
ce.isCancel = aa
ce.VERSION = ua
ce.toFormData = fs
ce.AxiosError = Q
ce.Cancel = ce.CanceledError
ce.all = function (t) {
  return Promise.all(t)
}
ce.spread = Rp
ce.isAxiosError = kp
ce.mergeConfig = Kt
ce.AxiosHeaders = qe
ce.formToJSON = (e) => ra(y.isHTMLForm(e) ? new FormData(e) : e)
ce.getAdapter = ca.getAdapter
ce.HttpStatusCode = Zs
ce.default = ce
const Tp = { class: 'abody' },
  Co = 'https://api.github.com/users/',
  $p = {
    __name: 'SubGithubProfiles',
    setup(e) {
      const t = P(),
        n = P(),
        s = P()
      async function i(c) {
        try {
          const { data: d } = await ce(Co + c)
          r(d), o(c)
        } catch (d) {
          d.response.status == 404 && a('No profile with this username')
        }
      }
      async function o(c) {
        try {
          const { data: d } = await ce(Co + c + '/repos?sort=created')
          l(d)
        } catch {
          a('Problem fetching repos')
        }
      }
      function r(c) {
        const d = c.name || c.login,
          h = c.bio ? `<p>${c.bio}</p>` : '',
          b = `
    <div class="card">
    <div>
      <img src="${c.avatar_url}" alt="${c.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${d}</h2>
      ${h}
      <ul>
        <li>${c.followers} <strong>Followers</strong></li>
        <li>${c.following} <strong>Following</strong></li>
        <li>${c.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
        t.value.innerHTML = b
      }
      function a(c) {
        const d = `
        <div class="card">
            <h1>${c}</h1>
        </div>
    `
        t.value.innerHTML = d
      }
      function l(c) {
        const d = document.getElementById('repos')
        c.slice(0, 5).forEach((h) => {
          const b = document.createElement('a')
          b.classList.add('repo'),
            (b.href = h.html_url),
            (b.target = '_blank'),
            (b.innerText = h.name),
            d.appendChild(b)
        })
      }
      const u = (c) => {
        c.preventDefault()
        const d = s.value.value
        console.log(d), d && (i(d), (s.value.value = ''))
      }
      return (c, d) => (
        U(),
        W('div', Tp, [
          m(
            'form',
            { class: 'user-form', id: 'form', ref_key: 'form', ref: n, onSubmit: u },
            [
              m(
                'input',
                {
                  type: 'text',
                  id: 'search',
                  ref_key: 'search',
                  ref: s,
                  placeholder: 'Search a Github User'
                },
                null,
                512
              )
            ],
            544
          ),
          m('main', { id: 'main', ref_key: 'main', ref: t }, null, 512)
        ])
      )
    }
  },
  Ap = J($p, [['__scopeId', 'data-v-a2baf82e']]),
  Op = { class: 'abody' },
  Pp = 500,
  Lp = {
    __name: 'SubHoverBoard',
    setup(e) {
      const t = P(),
        n = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
      ue(() => {
        Js(
          Wt(
            'div',
            { class: 'container' },
            Array.from({ length: Pp }).map((a, l) => Wt('div', { class: 'square', id: l }))
          ),
          t.value
        )
        const r = document.querySelectorAll('.square')
        console.log('square size:', r.length),
          r.forEach((a) => {
            a.addEventListener('mouseover', () => s(a)), a.addEventListener('mouseout', () => i(a))
          })
      })
      function s(r) {
        const a = o()
        ;(r.style.background = a), (r.style.boxShadow = `0 0 2px ${a}, 0 0 10px ${a}`)
      }
      function i(r) {
        ;(r.style.background = '#1d1d1d'), (r.style.boxShadow = '0 0 2px #000')
      }
      function o() {
        return n[Math.floor(Math.random() * n.length)]
      }
      return (r, a) => (
        U(),
        W('div', Op, [
          m('div', { class: 'container', id: 'container', ref_key: 'container', ref: t }, null, 512)
        ])
      )
    }
  },
  Mp = J(Lp, [['__scopeId', 'data-v-f2839444']]),
  ps = (e) => (Ae('data-v-c6b9674c'), (e = e()), Oe(), e),
  Ip = { class: 'abody' },
  qp = { class: 'carousel' },
  jp = ps(() =>
    m(
      'img',
      {
        src: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
        alt: 'first-image'
      },
      null,
      -1
    )
  ),
  Np = ps(() =>
    m(
      'img',
      {
        src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        alt: 'second-image'
      },
      null,
      -1
    )
  ),
  Hp = ps(() =>
    m(
      'img',
      {
        src: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        alt: 'third-image'
      },
      null,
      -1
    )
  ),
  Dp = ps(() =>
    m(
      'img',
      {
        src: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
        alt: 'fourth-image'
      },
      null,
      -1
    )
  ),
  zp = [jp, Np, Hp, Dp],
  Bp = { class: 'buttons-container' },
  Fp = {
    __name: 'SubImageCarousel',
    setup(e) {
      const t = P(),
        n = P(),
        s = P(),
        i = P()
      let o = 0,
        r = 0
      ue(() => {
        ;(i.value = document.querySelectorAll('#imgs img')),
          setInterval(a, 2e3),
          s.value.addEventListener('click', () => {
            o++, l(), u()
          }),
          n.value.addEventListener('click', () => {
            o--, l(), u()
          })
      })
      function a() {
        o++, l()
      }
      function l() {
        o > i.value.length - 1 ? (o = 0) : o < 0 && (o = i.value.length - 1),
          (t.value.style.transform = `translateX(${-o * 500}px)`)
      }
      function u() {
        clearInterval(r), (r = setInterval(a, 2e3))
      }
      return (c, d) => (
        U(),
        W('div', Ip, [
          m('div', qp, [
            m('div', { class: 'image-container', id: 'imgs', ref_key: 'imgs', ref: t }, zp, 512),
            m('div', Bp, [
              m('button', { id: 'left', class: 'btn', ref_key: 'leftBtn', ref: n }, 'Prev', 512),
              m('button', { id: 'right', class: 'btn', ref_key: 'rightBtn', ref: s }, 'Next', 512)
            ])
          ])
        ])
      )
    }
  },
  Up = J(Fp, [['__scopeId', 'data-v-c6b9674c']]),
  Vp = { class: 'abody' },
  Wp = xe(
    '<div class="counter-container" data-v-302443d3><i class="fab fa-twitter fa-3x" data-v-302443d3></i><div class="counter" data-target="12000" data-v-302443d3></div><span data-v-302443d3>Twitter Followers</span></div><div class="counter-container" data-v-302443d3><i class="fab fa-youtube fa-3x" data-v-302443d3></i><div class="counter" data-target="5000" data-v-302443d3></div><span data-v-302443d3>YouTube Subscribers</span></div><div class="counter-container" data-v-302443d3><i class="fab fa-facebook fa-3x" data-v-302443d3></i><div class="counter" data-target="7500" data-v-302443d3></div><span data-v-302443d3>Facebook Fans</span></div>',
    3
  ),
  Kp = [Wp],
  Jp = {
    __name: 'SubIncrementingCounter',
    setup(e) {
      return (
        ue(() => {
          document.querySelectorAll('.counter').forEach((n) => {
            n.innerText = '0'
            const s = () => {
              const i = +n.getAttribute('data-target'),
                o = +n.innerText,
                r = i / 1e3
              o < i
                ? ((n.innerText = `${Math.ceil(o + r)}`), setTimeout(s, 100))
                : (n.innerText = i)
            }
            s()
          })
        }),
        (t, n) => (U(), W('div', Vp, Kp))
      )
    }
  },
  Gp = J(Jp, [['__scopeId', 'data-v-302443d3']]),
  Qp = { class: 'abody' },
  Yp = xe(
    '<div class="phone" data-v-cc52a92d><img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80" alt="home" class="content show" data-v-cc52a92d><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="work" class="content" data-v-cc52a92d><img src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1266&amp;q=80" alt="blog" class="content" data-v-cc52a92d><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="about" class="content" data-v-cc52a92d><nav class="mobile-tab-nav" data-v-cc52a92d><ul data-v-cc52a92d><li class="active" data-v-cc52a92d><i class="fas fa-home" data-v-cc52a92d></i><p data-v-cc52a92d>Home</p></li><li data-v-cc52a92d><i class="fas fa-box" data-v-cc52a92d></i><p data-v-cc52a92d>Work</p></li><li data-v-cc52a92d><i class="fas fa-book-open" data-v-cc52a92d></i><p data-v-cc52a92d>Blog</p></li><li data-v-cc52a92d><i class="fas fa-users" data-v-cc52a92d></i><p data-v-cc52a92d>About Us</p></li></ul></nav></div>',
    1
  ),
  Xp = [Yp],
  Zp = {
    __name: 'SubMobileTabNavigation',
    setup(e) {
      return (
        ue(() => {
          const t = document.querySelectorAll('.content'),
            n = document.querySelectorAll('.phone nav ul li')
          console.log('listItem len:', n.length),
            n.forEach((o, r) => {
              o.addEventListener('click', () => {
                s(),
                  i(),
                  o.classList.add('active'),
                  console.log('idx', r),
                  t[r].classList.add('show')
              })
            })
          function s() {
            t.forEach((o) => o.classList.remove('show'))
          }
          function i() {
            n.forEach((o) => o.classList.remove('active'))
          }
        }),
        (t, n) => (U(), W('div', Qp, Xp))
      )
    }
  },
  eh = J(Zp, [['__scopeId', 'data-v-cc52a92d']]),
  $t = (e) => (Ae('data-v-41a207af'), (e = e()), Oe(), e),
  th = { class: 'abody' },
  nh = { class: 'container' },
  sh = $t(() => m('h2', null, 'Password Generator', -1)),
  ih = { class: 'result-container' },
  oh = $t(() => m('i', { class: 'far fa-clipboard' }, null, -1)),
  rh = [oh],
  ah = { class: 'settings' },
  lh = { class: 'setting' },
  ch = $t(() => m('label', null, 'Password Length', -1)),
  uh = { class: 'setting' },
  dh = $t(() => m('label', null, 'Include uppercase letters', -1)),
  fh = { class: 'setting' },
  ph = $t(() => m('label', null, 'Include lowercase letters', -1)),
  hh = { class: 'setting' },
  mh = $t(() => m('label', null, 'Include numbers', -1)),
  bh = { class: 'setting' },
  vh = $t(() => m('label', null, 'Include symbols', -1)),
  gh = {
    __name: 'SubPasswordGenerator',
    setup(e) {
      const t = P(),
        n = P(),
        s = P(),
        i = P(),
        o = P(),
        r = P(),
        a = P(),
        l = P(),
        u = { lower: b, upper: g, number: E, symbol: $ }
      ue(() => {})
      const c = () => {
          const C = t == null ? void 0 : t.value.innerText
          C && (navigator.clipboard.writeText(C), alert('Password copied to clipboard!'))
        },
        d = () => {
          const C = +n.value.value,
            q = i.value.checked,
            N = s.value.checked,
            K = o.value.checked,
            ie = r.value.checked
          t.value.innerText = h(q, N, K, ie, C)
        }
      function h(C, q, N, K, ie) {
        let B = ''
        const pe = C + q + N + K,
          Ce = [{ lower: C }, { upper: q }, { number: N }, { symbol: K }].filter(
            (Ee) => Object.values(Ee)[0]
          )
        if (pe === 0) return ''
        for (let Ee = 0; Ee < ie; Ee += pe)
          Ce.forEach((Ue) => {
            const et = Object.keys(Ue)[0]
            B += u[et]()
          })
        return B.slice(0, ie)
      }
      function b() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      }
      function g() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      }
      function E() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
      }
      function $() {
        const C = '!@#$%^&*(){}[]=<>/,.'
        return C[Math.floor(Math.random() * C.length)]
      }
      return (C, q) => (
        U(),
        W('div', th, [
          m('div', nh, [
            sh,
            m('div', ih, [
              m('span', { id: 'result', ref_key: 'resultEl', ref: t }, null, 512),
              m(
                'button',
                { class: 'btn', id: 'clipboard', ref_key: 'clipboardEl', ref: l, onClick: c },
                rh,
                512
              )
            ]),
            m('div', ah, [
              m('div', lh, [
                ch,
                m(
                  'input',
                  {
                    type: 'number',
                    id: 'length',
                    ref_key: 'lengthEl',
                    ref: n,
                    min: '4',
                    max: '20',
                    value: '20'
                  },
                  null,
                  512
                )
              ]),
              m('div', uh, [
                dh,
                m(
                  'input',
                  {
                    type: 'checkbox',
                    id: 'uppercase',
                    ref_key: 'uppercaseEl',
                    ref: s,
                    checked: ''
                  },
                  null,
                  512
                )
              ]),
              m('div', fh, [
                ph,
                m(
                  'input',
                  {
                    type: 'checkbox',
                    id: 'lowercase',
                    ref_key: 'lowercaseEl',
                    ref: i,
                    checked: ''
                  },
                  null,
                  512
                )
              ]),
              m('div', hh, [
                mh,
                m(
                  'input',
                  { type: 'checkbox', id: 'numbers', ref_key: 'numbersEl', ref: o, checked: '' },
                  null,
                  512
                )
              ]),
              m('div', bh, [
                vh,
                m(
                  'input',
                  { type: 'checkbox', id: 'symbols', ref_key: 'symbolsEl', ref: r, checked: '' },
                  null,
                  512
                )
              ])
            ]),
            m(
              'button',
              { class: 'btn btn-large', id: 'generate', ref_key: 'generateEl', ref: a, onClick: d },
              ' Generate Password ',
              512
            )
          ])
        ])
      )
    }
  },
  _h = J(gh, [['__scopeId', 'data-v-41a207af']]),
  hs = (e) => (Ae('data-v-dd6420fa'), (e = e()), Oe(), e),
  yh = { class: 'abody' },
  wh = { class: 'container' },
  xh = { class: 'progress-container' },
  Eh = hs(() => m('div', { class: 'circle active' }, '1', -1)),
  Sh = hs(() => m('div', { class: 'circle' }, '2', -1)),
  Ch = hs(() => m('div', { class: 'circle' }, '3', -1)),
  Rh = hs(() => m('div', { class: 'circle' }, '4', -1)),
  kh = {
    __name: 'SubProgressSteps',
    setup(e) {
      Br((c) => ({ '86c3c38a': u.lineBorderEmpty, '482686d5': u.lineBorderFill }))
      const t = P(),
        n = P(),
        s = P(),
        i = P()
      let o = 1
      ue(() => {
        i.value = document.querySelectorAll('.circle')
      })
      const r = () => {
          o++, o > i.value.length && (o = i.value.length), l()
        },
        a = () => {
          o--, o < 1 && (o = 1), l()
        }
      function l() {
        i.value.forEach((d, h) => {
          h < o ? d.classList.add('active') : d.classList.remove('active')
        })
        const c = document.querySelectorAll('.active')
        ;(t.value.style.width = ((c.length - 1) / (i.value.length - 1)) * 100 + '%'),
          o === 1
            ? (n.value.disabled = !0)
            : o === i.value.length
              ? (s.value.disabled = !0)
              : ((n.value.disabled = !1), (s.value.disabled = !1))
      }
      const u = { lineBorderFill: '#3498db', lineBorderEmpty: '#383838' }
      return (c, d) => (
        U(),
        W('div', yh, [
          m('div', wh, [
            m('div', xh, [
              m(
                'div',
                { class: 'progress', id: 'progress', ref_key: 'progress', ref: t },
                null,
                512
              ),
              Eh,
              Sh,
              Ch,
              Rh
            ]),
            m(
              'button',
              { class: 'btn', id: 'prev', ref_key: 'prev', ref: n, onClick: a, disabled: '' },
              'Prev',
              512
            ),
            m(
              'button',
              { class: 'btn', id: 'next', ref_key: 'next', ref: s, onClick: r },
              'Next',
              512
            )
          ])
        ])
      )
    }
  },
  Th = J(kh, [['__scopeId', 'data-v-dd6420fa']]),
  ms = (e) => (Ae('data-v-e6bbcadb'), (e = e()), Oe(), e),
  $h = { class: 'abody' },
  Ah = { class: 'quiz-header' },
  Oh = ms(() => m('input', { type: 'radio', name: 'answer', id: 'a', class: 'answer' }, null, -1)),
  Ph = ms(() => m('input', { type: 'radio', name: 'answer', id: 'b', class: 'answer' }, null, -1)),
  Lh = ms(() => m('input', { type: 'radio', name: 'answer', id: 'c', class: 'answer' }, null, -1)),
  Mh = ms(() => m('input', { type: 'radio', name: 'answer', id: 'd', class: 'answer' }, null, -1)),
  Ih = {
    __name: 'SubQuizApp',
    setup(e) {
      const t = [
          {
            question: 'Which language runs in a web browser?',
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'JavaScript',
            correct: 'd'
          },
          {
            question: 'What does CSS stand for?',
            a: 'Central Style Sheets',
            b: 'Cascading Style Sheets',
            c: 'Cascading Simple Sheets',
            d: 'Cars SUVs Sailboats',
            correct: 'b'
          },
          {
            question: 'What does HTML stand for?',
            a: 'Hypertext Markup Language',
            b: 'Hypertext Markdown Language',
            c: 'Hyperloop Machine Language',
            d: 'Helicopters Terminals Motorboats Lamborginis',
            correct: 'a'
          },
          {
            question: 'What year was JavaScript launched?',
            a: '1996',
            b: '1995',
            c: '1994',
            d: 'none of the above',
            correct: 'b'
          }
        ],
        n = P(),
        s = P(),
        i = P(),
        o = P(),
        r = P(),
        a = P(),
        l = P(),
        u = P()
      let c = 0,
        d = 0
      ue(() => {
        ;(s.value = document.querySelectorAll('.answer')), h()
      })
      function h() {
        b()
        const $ = t[c]
        ;(i.value.innerText = $.question),
          (o.value.innerText = $.a),
          (r.value.innerText = $.b),
          (a.value.innerText = $.c),
          (l.value.innerText = $.d)
      }
      function b() {
        s.value.forEach(($) => ($.checked = !1))
      }
      function g() {
        let $
        return (
          s.value.forEach((C) => {
            C.checked && ($ = C.id)
          }),
          $
        )
      }
      const E = () => {
        const $ = g()
        $ &&
          ($ === t[c].correct && d++,
          c++,
          c < t.length
            ? h()
            : (n.value.innerHTML = `
                <h2>You answered ${d}/${t.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `))
      }
      return ($, C) => (
        U(),
        W('div', $h, [
          m(
            'div',
            { class: 'quiz-container', id: 'quiz', ref_key: 'quiz', ref: n },
            [
              m('div', Ah, [
                m('h2', { id: 'question', ref_key: 'question', ref: i }, 'Question text', 512),
                m('ul', null, [
                  m('li', null, [
                    Oh,
                    m(
                      'label',
                      { for: 'a', id: 'a_text', ref_key: 'a_text', ref: o },
                      'Question',
                      512
                    )
                  ]),
                  m('li', null, [
                    Ph,
                    m(
                      'label',
                      { for: 'b', id: 'b_text', ref_key: 'b_text', ref: r },
                      'Question',
                      512
                    )
                  ]),
                  m('li', null, [
                    Lh,
                    m(
                      'label',
                      { for: 'c', id: 'c_text', ref_key: 'c_text', ref: a },
                      'Question',
                      512
                    )
                  ]),
                  m('li', null, [
                    Mh,
                    m(
                      'label',
                      { for: 'd', id: 'd_text', ref_key: 'd_text', ref: l },
                      'Question',
                      512
                    )
                  ])
                ])
              ]),
              m('button', { id: 'submit', ref_key: 'submitBtn', ref: u, onClick: E }, 'Submit', 512)
            ],
            512
          )
        ])
      )
    }
  },
  qh = J(Ih, [['__scopeId', 'data-v-e6bbcadb']]),
  jh = { class: 'abody' },
  Nh = {
    __name: 'SubToastNotification',
    setup(e) {
      const t = P(),
        n = P(),
        s = ['Message One', 'Message Two', 'Message Three', 'Message Four'],
        i = ['info', 'success', 'error']
      function o(l = null, u = null) {
        const c = document.createElement('div')
        c.classList.add('toast'),
          c.classList.add(u || a()),
          (c.innerText = l || r()),
          n.value.appendChild(c),
          setTimeout(() => {
            c.remove()
          }, 3e3)
      }
      function r() {
        return s[Math.floor(Math.random() * s.length)]
      }
      function a() {
        return i[Math.floor(Math.random() * i.length)]
      }
      return (l, u) => (
        U(),
        W('div', jh, [
          m('div', { id: 'toasts', ref_key: 'toasts', ref: n }, null, 512),
          m(
            'button',
            {
              class: 'btn',
              id: 'button',
              ref_key: 'button',
              ref: t,
              onClick: u[0] || (u[0] = () => o())
            },
            ' Show Notification ',
            512
          )
        ])
      )
    }
  },
  Hh = J(Nh, [['__scopeId', 'data-v-8cb0afb1']]),
  fa = (e) => (Ae('data-v-b54aa8c3'), (e = e()), Oe(), e),
  Dh = { class: 'abody' },
  zh = fa(() => m('h1', null, 'todos', -1)),
  Bh = fa(() =>
    m(
      'small',
      null,
      [je('Left click to toggle completed. '), m('br'), je(' Right click to delete todo')],
      -1
    )
  ),
  Fh = {
    __name: 'SubTodoList',
    setup(e) {
      const t = P(),
        n = P(),
        s = P()
      ue(() => {
        const a = JSON.parse(localStorage.getItem('todos'))
        a && a.forEach((l) => o(l))
      })
      const i = (a) => {
        a.preventDefault(), o()
      }
      function o(a) {
        let l = n.value.value
        if ((a && (l = a.text), l)) {
          const u = document.createElement('li')
          a && a.completed && u.classList.add('completed'),
            (u.innerText = l),
            u.addEventListener('click', () => {
              u.classList.toggle('completed'), r()
            }),
            u.addEventListener('contextmenu', (c) => {
              c.preventDefault(), u.remove(), r()
            }),
            s.value.appendChild(u),
            (n.value.value = ''),
            r()
        }
      }
      function r() {
        const a = document.querySelectorAll('.todos li'),
          l = []
        a.forEach((u) => {
          l.push({ text: u.innerText, completed: u.classList.contains('completed') })
        }),
          localStorage.setItem('todos', JSON.stringify(l))
      }
      return (a, l) => (
        U(),
        W('div', Dh, [
          zh,
          m(
            'form',
            { id: 'form', ref_key: 'form', ref: t, onSubmit: i },
            [
              m(
                'input',
                {
                  type: 'text',
                  class: 'input',
                  id: 'input',
                  ref_key: 'input',
                  ref: n,
                  placeholder: 'Enter your todo',
                  autocomplete: 'off'
                },
                null,
                512
              ),
              m('ul', { class: 'todos', id: 'todos', ref_key: 'todosUL', ref: s }, null, 512)
            ],
            544
          ),
          Bh
        ])
      )
    }
  },
  Uh = J(Fh, [['__scopeId', 'data-v-b54aa8c3']]),
  Vh = { class: 'abody' },
  Wh = xe(
    '<div class="container" data-v-ab2b4684><h2 data-v-ab2b4684>Verify Your Account</h2><p data-v-ab2b4684> We emailed you the six digit code to cool_guy@email.com <br data-v-ab2b4684> Enter the code below to confirm your email address. </p><div class="code-container" data-v-ab2b4684><input type="number" class="code" placeholder="0" min="0" max="9" required data-v-ab2b4684><input type="number" class="code" placeholder="0" min="0" max="9" required data-v-ab2b4684><input type="number" class="code" placeholder="0" min="0" max="9" required data-v-ab2b4684><input type="number" class="code" placeholder="0" min="0" max="9" required data-v-ab2b4684><input type="number" class="code" placeholder="0" min="0" max="9" required data-v-ab2b4684><input type="number" class="code" placeholder="0" min="0" max="9" required data-v-ab2b4684></div><small class="info" data-v-ab2b4684> This is design only. We didn&#39;t actually send you an email as we don&#39;t have your email, right? </small></div>',
    1
  ),
  Kh = [Wh],
  Jh = {
    __name: 'SubVerifyAccountUI',
    setup(e) {
      return (
        ue(() => {
          const t = document.querySelectorAll('.code')
          t[0].focus()
          const n = t.length
          t.forEach((s, i) => {
            s.addEventListener('keydown', (o) => {
              o.key >= 0 && o.key <= 9
                ? ((t[i].value = ''), i + 1 < n && setTimeout(() => t[i + 1].focus(), 10))
                : o.key === 'Backspace' && i - 1 >= 0 && setTimeout(() => t[i - 1].focus(), 10)
            })
          })
        }),
        (t, n) => (U(), W('div', Vh, Kh))
      )
    }
  },
  Gh = J(Jh, [['__scopeId', 'data-v-ab2b4684']]),
  Xt = (e) => (Ae('data-v-d88a3cf7'), (e = e()), Oe(), e),
  Qh = { class: 'abody' },
  Yh = xe(
    '<div style="background-color:#fd3555;" data-v-d88a3cf7><h1 data-v-d88a3cf7>Nature flower</h1><p data-v-d88a3cf7>all in pink</p></div><div style="background-color:#2a86ba;" data-v-d88a3cf7><h1 data-v-d88a3cf7>Bluuue Sky</h1><p data-v-d88a3cf7>with it&#39;s mountains</p></div><div style="background-color:#252e33;" data-v-d88a3cf7><h1 data-v-d88a3cf7>Lonely castle</h1><p data-v-d88a3cf7>in the wilderness</p></div><div style="background-color:#ffb866;" data-v-d88a3cf7><h1 data-v-d88a3cf7>Flying eagle</h1><p data-v-d88a3cf7>in the sunset</p></div>',
    4
  ),
  Xh = [Yh],
  Zh = Xt(() =>
    m(
      'div',
      {
        style: {
          'background-image':
            "url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')"
        }
      },
      null,
      -1
    )
  ),
  em = Xt(() =>
    m(
      'div',
      {
        style: {
          'background-image':
            "url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')"
        }
      },
      null,
      -1
    )
  ),
  tm = Xt(() =>
    m(
      'div',
      {
        style: {
          'background-image':
            "url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')"
        }
      },
      null,
      -1
    )
  ),
  nm = Xt(() =>
    m(
      'div',
      {
        style: {
          'background-image':
            "url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')"
        }
      },
      null,
      -1
    )
  ),
  sm = [Zh, em, tm, nm],
  im = { class: 'action-buttons' },
  om = Xt(() => m('i', { class: 'fas fa-arrow-down' }, null, -1)),
  rm = [om],
  am = Xt(() => m('i', { class: 'fas fa-arrow-up' }, null, -1)),
  lm = [am],
  cm = {
    __name: 'SubDoubleVerticalSlider',
    setup(e) {
      const t = P(),
        n = P(),
        s = P(),
        i = P(),
        o = P()
      let r = 0,
        a = 0
      ue(() => {
        ;(r = n.value.querySelectorAll('div').length), (s.value.style.top = `-${(r - 1) * 100}vh`)
      })
      const l = (u) => {
        const c = t.value.clientHeight
        u === 'up' ? (a++, a > r - 1 && (a = 0)) : u === 'down' && (a--, a < 0 && (a = r - 1)),
          (n.value.style.transform = `translateY(-${a * c}px)`),
          (s.value.style.transform = `translateY(${a * c}px)`)
      }
      return (u, c) => (
        U(),
        W('div', Qh, [
          m(
            'div',
            { class: 'slider-container', ref_key: 'sliderContainer', ref: t },
            [
              m('div', { class: 'left-slide', ref_key: 'slideLeft', ref: s }, Xh, 512),
              m('div', { class: 'right-slide', ref_key: 'slideRight', ref: n }, sm, 512),
              m('div', im, [
                m(
                  'button',
                  {
                    class: 'down-button',
                    ref_key: 'downButton',
                    ref: o,
                    onClick: c[0] || (c[0] = () => l('down'))
                  },
                  rm,
                  512
                ),
                m(
                  'button',
                  {
                    class: 'up-button',
                    ref_key: 'upButton',
                    ref: i,
                    onClick: c[1] || (c[1] = () => l('up'))
                  },
                  lm,
                  512
                )
              ])
            ],
            512
          )
        ])
      )
    }
  },
  um = J(cm, [['__scopeId', 'data-v-d88a3cf7']]),
  dm = { class: 'abody, bg-gray-700 flex justify-center items-center min-h-screen' },
  fm = { class: 'bg-gray-900 p-16 rounded-2xl shadow w-full max-w-sm' },
  pm = m('h1', { class: 'text-4xl text-center text-white' }, 'Timer', -1),
  hm = {
    id: 'conic',
    class: 'bg-conic flex items-center justify-center w-60 h-60 mx-auto my-10 rounded-full relative'
  },
  mm = m(
    'div',
    { class: 'w-[calc(100%-4px)] aspect-square bg-gray-800 rounded-full absolute inset-[2px]' },
    null,
    -1
  ),
  bm = m(
    'div',
    { class: 'hand h-1/2 absolute top-0' },
    [m('span', { class: 'w-2 h-2 bg-white rounded-full absolute -top-1 -left-1' })],
    -1
  ),
  vm = { class: 'flex justify-center gap-6' },
  gm = m('i', { class: 'fas fa-refresh' }, null, -1),
  _m = [gm],
  ym = m('i', { class: 'fas fa-play' }, null, -1),
  wm = [ym],
  sn = 60,
  xm = {
    __name: 'SubSimpleTimer',
    setup(e) {
      Br((b) => ({ '4eac10c9': a.value.degrees }))
      const t = P(),
        n = P(),
        s = P()
      let i = !1,
        o = sn,
        r = 1e3
      const a = P({ degrees: '0deg' })
      ue(() => {
        const b = document.createElement('script')
        b.setAttribute('src', 'https://cdn.tailwindcss.com'),
          document.head.appendChild(b),
          (s.value.innerText = c(sn)),
          (r = setInterval(u, r))
      })
      const l = () => {
        ;(i = !i), n.value.classList.toggle('play'), n.value.classList.toggle('bg-green-500')
        const b = n.value.querySelector('i')
        b.classList.toggle('fa-play'), b.classList.toggle('fa-pause')
      }
      function u() {
        i &&
          ((o -= 1),
          o <= 0 && (clearInterval(r), h()),
          (s.value.innerText = c(o)),
          (a.value.degrees = d()))
      }
      function c(b) {
        const g = Math.floor(b / 60),
          E = b % 60
        return `${g.toString().padStart(2, '0')}:${E.toString().padStart(2, '0')}`
      }
      function d() {
        return `${360 - (o / sn) * 360}deg`
      }
      function h() {
        ;(i = !1), n.value.classList.remove('play'), n.value.classList.remove('bg-green-500')
        const b = n.value.querySelector('i')
        b.classList.remove('fa-pause'),
          b.classList.add('fa-play'),
          (o = sn),
          (s.value.innerText = c(sn)),
          (a.value.degrees = '0deg')
      }
      return (b, g) => (
        U(),
        W('div', dm, [
          m('div', fm, [
            pm,
            m('div', hm, [
              m(
                'p',
                {
                  id: 'timer',
                  ref_key: 'timerEl',
                  ref: s,
                  class: 'text-blue-200 relative text-5xl z-10'
                },
                '00:00',
                512
              ),
              mm,
              bm
            ]),
            m('div', vm, [
              m(
                'button',
                {
                  id: 'reset',
                  ref_key: 'resetBtn',
                  ref: t,
                  onClick: h,
                  class: 'flex justify-center items-center w-10 h-10 bg-blue-300 rounded-full'
                },
                _m,
                512
              ),
              m(
                'button',
                {
                  id: 'play',
                  ref_key: 'playBtn',
                  ref: n,
                  onClick: l,
                  class: 'flex justify-center items-center w-10 h-10 bg-blue-300 rounded-full group'
                },
                wm,
                512
              )
            ])
          ])
        ])
      )
    }
  },
  Dt = P([
    {
      icon: I(xt),
      url: 'https://codepen.io/AMKohn/pen/DZYKEV',
      titleCn: '轮播图',
      titleEn: 'Image Slider',
      component: I(_u),
      category: '首页'
    },
    {
      icon: I(Mt),
      url: 'https://codepen.io/andornagy/pen/ALbdbJ',
      titleCn: '下拉菜单条',
      titleEn: 'DropDown Menu',
      component: I(Cu),
      category: '首页'
    },
    {
      icon: I(It),
      url: 'https://codepen.io/hkmDesigner/pen/gmzvQj',
      titleCn: '动画下拉菜单条',
      titleEn: 'Animated DropDown Menu',
      component: I(Ou),
      category: '首页'
    },
    {
      icon: I(qt),
      url: 'https://codepen.io/imprakash/pen/epZvbQ',
      titleCn: '响应式选项卡',
      titleEn: 'Responsive Tab',
      component: I(Iu),
      category: '首页'
    },
    {
      icon: I(jt),
      url: 'https://codepen.io/plavookac/pen/qomrMw',
      titleCn: '可收放侧边菜单',
      titleEn: 'Sidebar toggle menu',
      component: I(zu),
      category: '首页'
    },
    {
      icon: I(xt),
      url: 'https://codepen.io/wallaceerick/pen/nRyxPz',
      titleCn: '选项卡片',
      titleEn: 'tab card',
      component: I(Ju),
      category: '首页'
    },
    {
      icon: I(Mt),
      url: 'https://codepen.io/nsom/pen/Vbopjw',
      titleCn: '响应式时间轴',
      titleEn: 'Responsive Timeline',
      component: I(ed),
      category: '详情页'
    },
    {
      icon: I(It),
      url: 'https://codepen.io/P233/pen/nbgRXw',
      titleCn: '绿色时间轴',
      titleEn: 'Green Timeline',
      component: I(rd),
      category: '详情页'
    },
    {
      icon: I(qt),
      url: 'https://codepen.io/nathanlong/pen/kVyONE',
      titleCn: '多级手风琴',
      titleEn: 'Multi-level Accordion',
      component: I(fd),
      category: '首页'
    },
    {
      icon: I(jt),
      url: 'https://50projects50days.com/projects/sound-board/',
      titleCn: '发声按钮',
      titleEn: 'Sound Board',
      component: I(vd),
      category: '单词app'
    },
    {
      icon: I(xt),
      url: 'https://50projects50days.com/projects/dad-jokes/',
      titleCn: '爹爹讲笑话',
      titleEn: 'DadJokes',
      component: I(Ed),
      category: '小程序'
    },
    {
      icon: I(Mt),
      url: 'https://50projects50days.com/projects/drink-water/',
      titleCn: '水瓶特效',
      titleEn: 'DrinkWater',
      component: I(Od),
      category: '游戏效果'
    },
    {
      icon: I(It),
      url: 'https://50projects50days.com/projects/content-placeholder/',
      titleCn: '加载占位特效',
      titleEn: 'ContentPlaceHolder',
      component: I(Bd),
      category: '效果'
    },
    {
      icon: I(qt),
      url: 'https://50projects50days.com/projects/sticky-navigation/',
      titleCn: '顶栏固定特效',
      titleEn: 'StickyNavigation',
      component: I(Gd),
      category: '效果'
    },
    {
      icon: I(jt),
      url: 'https://50projects50days.com/projects/double-click-heart/',
      titleCn: '喜欢按钮特效',
      titleEn: 'DoubleClickHeart',
      component: I(ef),
      category: '效果'
    },
    {
      icon: I(xt),
      url: 'https://50projects50days.com/projects/feedback-ui-design/',
      titleCn: '问卷调查',
      titleEn: 'FeedBack-UI-Design',
      component: I(lf),
      category: '小程序'
    },
    {
      icon: I(Mt),
      url: 'https://50projects50days.com/projects/form-input-wave/',
      titleCn: '登录框效果',
      titleEn: 'Form Input Wave',
      component: I(pf),
      category: '小程序'
    },
    {
      icon: I(It),
      url: 'https://50projects50days.com/projects/github-profiles/',
      titleCn: 'github简介',
      titleEn: 'Github Profiles',
      component: I(Ap),
      category: '小程序'
    },
    {
      icon: I(qt),
      url: 'https://50projects50days.com/projects/hover-board/',
      titleCn: '动态格子',
      titleEn: 'Hover board',
      component: I(Mp),
      category: '小程序'
    },
    {
      icon: I(jt),
      url: 'https://50projects50days.com/projects/image-carousel/',
      titleCn: '图片换页',
      titleEn: 'Image Carousel',
      component: I(Up),
      category: '小程序'
    },
    {
      icon: I(xt),
      url: 'https://50projects50days.com/projects/incrementing-counter/',
      titleCn: '跳动计数效果',
      titleEn: 'Incrementing Counter',
      component: I(Gp),
      category: '小程序'
    },
    {
      icon: I(Mt),
      url: 'https://50projects50days.com/projects/mobile-tab-navigation/',
      titleCn: '移动tab导航',
      titleEn: 'Mobile Tab Navigation',
      component: I(eh),
      category: '小程序'
    },
    {
      icon: I(It),
      url: 'https://50projects50days.com/projects/password-generator/',
      titleCn: '密码生成器',
      titleEn: 'Password Generator',
      component: I(_h),
      category: '小程序'
    },
    {
      icon: I(qt),
      url: 'https://50projects50days.com/projects/progress-steps/',
      titleCn: '步进动画',
      titleEn: 'Password Generator',
      component: I(Th),
      category: '小程序'
    },
    {
      icon: I(jt),
      url: 'https://50projects50days.com/projects/quiz-app/',
      titleCn: '测验问卷',
      titleEn: 'Quiz App',
      component: I(qh),
      category: '小程序'
    },
    {
      icon: I(xt),
      url: 'https://50projects50days.com/projects/toast-notification/',
      titleCn: '气泡通知',
      titleEn: 'Toast Notification',
      component: I(Hh),
      category: '小程序'
    },
    {
      icon: I(Mt),
      url: 'https://50projects50days.com/projects/todo-list/',
      titleCn: 'todo应用',
      titleEn: 'Todo List',
      component: I(Uh),
      category: '小程序'
    },
    {
      icon: I(It),
      url: 'https://50projects50days.com/projects/verify-account-ui/',
      titleCn: '验证码',
      titleEn: 'VerifyAccountUI',
      component: I(Gh),
      category: '小程序'
    },
    {
      icon: I(qt),
      url: 'https://50projects50days.com/projects/double-vertical-slider/',
      titleCn: '双向垂直滑动图',
      titleEn: 'Double Vertical Slider',
      component: I(um),
      category: '小程序'
    },
    {
      icon: I(jt),
      url: 'https://50projects50days.com/projects/simple-timer/',
      titleCn: '简单计数器',
      titleEn: 'Simple Timer',
      component: I(xm),
      category: '小程序'
    }
  ]),
  $i = (e) => (Ae('data-v-aac0cd23'), (e = e()), Oe(), e),
  Em = { role: 'navigation' },
  Sm = { id: 'menuToggle' },
  Cm = { class: 'menuShow' },
  Rm = $i(() => m('span', { class: 's1' }, null, -1)),
  km = $i(() => m('span', { class: 's2' }, null, -1)),
  Tm = $i(() => m('span', { class: 's3' }, null, -1)),
  $m = Cn({
    __name: 'SidePopMenu',
    setup(e) {
      const t = P(!1)
      return (
        console.log('items size:', Dt.value.length),
        (n, s) => {
          const i = yr('router-link')
          return (
            U(),
            W('nav', Em, [
              m('div', Sm, [
                m('div', Cm, [
                  m('input', {
                    type: 'checkbox',
                    onClick:
                      s[0] ||
                      (s[0] = () => {
                        t.value = !t.value
                      })
                  }),
                  Rm,
                  km,
                  Tm
                ]),
                m(
                  'ul',
                  { id: 'menu', class: Zn({ show: t.value, noshow: !t.value }) },
                  [
                    (U(!0),
                    W(
                      be,
                      null,
                      Ns(
                        ze(Dt),
                        (o, r) => (
                          U(),
                          jr(
                            i,
                            { key: r, index: r, to: `/${r}` },
                            {
                              default: cn(() => [m('li', null, St(r) + ' ' + St(o.titleCn), 1)]),
                              _: 2
                            },
                            1032,
                            ['index', 'to']
                          )
                        )
                      ),
                      128
                    ))
                  ],
                  2
                )
              ])
            ])
          )
        }
      )
    }
  }),
  Am = J($m, [['__scopeId', 'data-v-aac0cd23']]),
  Om = Cn({
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const s = yr('RouterView')
        return U(), W(be, null, [de(Am), de(s)], 64)
      }
    }
  }),
  Pm = {},
  Lm = { class: 'contentTab' },
  Mm = { class: 'tabHeader' },
  Im = { class: 'tabContent' }
function qm(e, t) {
  return (
    U(),
    W('div', Lm, [
      m('div', Mm, [
        m('i', null, [ws(e.$slots, 'icon', {}, void 0)]),
        m('h3', null, [ws(e.$slots, 'heading', {}, void 0)])
      ]),
      m('div', Im, [ws(e.$slots, 'content', {}, void 0)])
    ])
  )
}
const jm = J(Pm, [
    ['render', qm],
    ['__scopeId', 'data-v-64a7452f']
  ]),
  Nm = { class: 'content-wrapper' },
  Hm = ['href'],
  Dm = Cn({
    __name: 'Content',
    props: ['tabId'],
    setup(e) {
      const t = e,
        n = Le(() => {
          if (typeof t.tabId > 'u' || isNaN(t.tabId) || t.tabId == '') return Dt.value.length
          var o = parseInt(t.tabId)
          return o
        })
      console.log('id:', n.value)
      const s = { template: '' },
        i = Le(() =>
          n.value == -1 || n.value == Dt.value.length
            ? {
                icon: xt,
                url: '',
                titleCn: '共有' + Dt.value.length + '个Demo',
                titleEn: 'Demos',
                component: I(s),
                category: ''
              }
            : Dt.value[n.value]
        )
      return (o, r) => (
        U(),
        W('div', Nm, [
          de(jm, null, {
            icon: cn(() => [de(ze(i).icon)]),
            heading: cn(() => [
              m(
                'a',
                { href: i.value.url },
                St(n.value) +
                  '.' +
                  St(i.value.category) +
                  '/' +
                  St(i.value.titleCn) +
                  '(' +
                  St(i.value.titleEn) +
                  ')',
                9,
                Hm
              )
            ]),
            content: cn(() => [de(ze(i).component)]),
            _: 1
          })
        ])
      )
    }
  }),
  zm = J(Dm, [['__scopeId', 'data-v-7992e096']])
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Nt = typeof document < 'u'
function Bm(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const te = Object.assign
function As(e, t) {
  const n = {}
  for (const s in t) {
    const i = t[s]
    n[s] = Fe(i) ? i.map(e) : e(i)
  }
  return n
}
const mn = () => {},
  Fe = Array.isArray,
  pa = /#/g,
  Fm = /&/g,
  Um = /\//g,
  Vm = /=/g,
  Wm = /\?/g,
  ha = /\+/g,
  Km = /%5B/g,
  Jm = /%5D/g,
  ma = /%5E/g,
  Gm = /%60/g,
  ba = /%7B/g,
  Qm = /%7C/g,
  va = /%7D/g,
  Ym = /%20/g
function Ai(e) {
  return encodeURI('' + e)
    .replace(Qm, '|')
    .replace(Km, '[')
    .replace(Jm, ']')
}
function Xm(e) {
  return Ai(e).replace(ba, '{').replace(va, '}').replace(ma, '^')
}
function ei(e) {
  return Ai(e)
    .replace(ha, '%2B')
    .replace(Ym, '+')
    .replace(pa, '%23')
    .replace(Fm, '%26')
    .replace(Gm, '`')
    .replace(ba, '{')
    .replace(va, '}')
    .replace(ma, '^')
}
function Zm(e) {
  return ei(e).replace(Vm, '%3D')
}
function e1(e) {
  return Ai(e).replace(pa, '%23').replace(Wm, '%3F')
}
function t1(e) {
  return e == null ? '' : e1(e).replace(Um, '%2F')
}
function En(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const n1 = /\/$/,
  s1 = (e) => e.replace(n1, '')
function Os(e, t, n = '/') {
  let s,
    i = {},
    o = '',
    r = ''
  const a = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 && ((s = t.slice(0, l)), (o = t.slice(l + 1, a > -1 ? a : t.length)), (i = e(o))),
    a > -1 && ((s = s || t.slice(0, a)), (r = t.slice(a, t.length))),
    (s = a1(s ?? t, n)),
    { fullPath: s + (o && '?') + o + r, path: s, query: i, hash: En(r) }
  )
}
function i1(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Ro(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function o1(e, t, n) {
  const s = t.matched.length - 1,
    i = n.matched.length - 1
  return (
    s > -1 &&
    s === i &&
    Jt(t.matched[s], n.matched[i]) &&
    ga(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Jt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function ga(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!r1(e[n], t[n])) return !1
  return !0
}
function r1(e, t) {
  return Fe(e) ? ko(e, t) : Fe(t) ? ko(t, e) : e === t
}
function ko(e, t) {
  return Fe(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function a1(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    i = s[s.length - 1]
  ;(i === '..' || i === '.') && s.push('')
  let o = n.length - 1,
    r,
    a
  for (r = 0; r < s.length; r++)
    if (((a = s[r]), a !== '.'))
      if (a === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + s.slice(r).join('/')
}
var Sn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Sn || (Sn = {}))
var bn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(bn || (bn = {}))
function l1(e) {
  if (!e)
    if (Nt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), s1(e)
}
const c1 = /^[^#]+#/
function u1(e, t) {
  return e.replace(c1, '#') + t
}
function d1(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const bs = () => ({ left: window.scrollX, top: window.scrollY })
function f1(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      i =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!i) return
    t = d1(i, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function To(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ti = new Map()
function p1(e, t) {
  ti.set(e, t)
}
function h1(e) {
  const t = ti.get(e)
  return ti.delete(e), t
}
let m1 = () => location.protocol + '//' + location.host
function _a(e, t) {
  const { pathname: n, search: s, hash: i } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let a = i.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = i.slice(a)
    return l[0] !== '/' && (l = '/' + l), Ro(l, '')
  }
  return Ro(n, e) + s + i
}
function b1(e, t, n, s) {
  let i = [],
    o = [],
    r = null
  const a = ({ state: h }) => {
    const b = _a(e, location),
      g = n.value,
      E = t.value
    let $ = 0
    if (h) {
      if (((n.value = b), (t.value = h), r && r === g)) {
        r = null
        return
      }
      $ = E ? h.position - E.position : 0
    } else s(b)
    i.forEach((C) => {
      C(n.value, g, {
        delta: $,
        type: Sn.pop,
        direction: $ ? ($ > 0 ? bn.forward : bn.back) : bn.unknown
      })
    })
  }
  function l() {
    r = n.value
  }
  function u(h) {
    i.push(h)
    const b = () => {
      const g = i.indexOf(h)
      g > -1 && i.splice(g, 1)
    }
    return o.push(b), b
  }
  function c() {
    const { history: h } = window
    h.state && h.replaceState(te({}, h.state, { scroll: bs() }), '')
  }
  function d() {
    for (const h of o) h()
    ;(o = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', c)
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: l, listen: u, destroy: d }
  )
}
function $o(e, t, n, s = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? bs() : null
  }
}
function v1(e) {
  const { history: t, location: n } = window,
    s = { value: _a(e, n) },
    i = { value: t.state }
  i.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function o(l, u, c) {
    const d = e.indexOf('#'),
      h = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + l : m1() + e + l
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', h), (i.value = u)
    } catch (b) {
      console.error(b), n[c ? 'replace' : 'assign'](h)
    }
  }
  function r(l, u) {
    const c = te({}, t.state, $o(i.value.back, l, i.value.forward, !0), u, {
      position: i.value.position
    })
    o(l, c, !0), (s.value = l)
  }
  function a(l, u) {
    const c = te({}, i.value, t.state, { forward: l, scroll: bs() })
    o(c.current, c, !0)
    const d = te({}, $o(s.value, l, null), { position: c.position + 1 }, u)
    o(l, d, !1), (s.value = l)
  }
  return { location: s, state: i, push: a, replace: r }
}
function g1(e) {
  e = l1(e)
  const t = v1(e),
    n = b1(e, t.state, t.location, t.replace)
  function s(o, r = !0) {
    r || n.pauseListeners(), history.go(o)
  }
  const i = te({ location: '', base: e, go: s, createHref: u1.bind(null, e) }, t, n)
  return (
    Object.defineProperty(i, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(i, 'state', { enumerable: !0, get: () => t.state.value }),
    i
  )
}
function _1(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    g1(e)
  )
}
function y1(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function ya(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const ut = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  wa = Symbol('')
var Ao
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Ao || (Ao = {}))
function Gt(e, t) {
  return te(new Error(), { type: e, [wa]: !0 }, t)
}
function nt(e, t) {
  return e instanceof Error && wa in e && (t == null || !!(e.type & t))
}
const Oo = '[^/]+?',
  w1 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  x1 = /[.+*?^${}()[\]/\\]/g
function E1(e, t) {
  const n = te({}, w1, t),
    s = []
  let i = n.start ? '^' : ''
  const o = []
  for (const u of e) {
    const c = u.length ? [] : [90]
    n.strict && !u.length && (i += '/')
    for (let d = 0; d < u.length; d++) {
      const h = u[d]
      let b = 40 + (n.sensitive ? 0.25 : 0)
      if (h.type === 0) d || (i += '/'), (i += h.value.replace(x1, '\\$&')), (b += 40)
      else if (h.type === 1) {
        const { value: g, repeatable: E, optional: $, regexp: C } = h
        o.push({ name: g, repeatable: E, optional: $ })
        const q = C || Oo
        if (q !== Oo) {
          b += 10
          try {
            new RegExp(`(${q})`)
          } catch (K) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${q}): ` + K.message)
          }
        }
        let N = E ? `((?:${q})(?:/(?:${q}))*)` : `(${q})`
        d || (N = $ && u.length < 2 ? `(?:/${N})` : '/' + N),
          $ && (N += '?'),
          (i += N),
          (b += 20),
          $ && (b += -8),
          E && (b += -20),
          q === '.*' && (b += -50)
      }
      c.push(b)
    }
    s.push(c)
  }
  if (n.strict && n.end) {
    const u = s.length - 1
    s[u][s[u].length - 1] += 0.7000000000000001
  }
  n.strict || (i += '/?'), n.end ? (i += '$') : n.strict && (i += '(?:/|$)')
  const r = new RegExp(i, n.sensitive ? '' : 'i')
  function a(u) {
    const c = u.match(r),
      d = {}
    if (!c) return null
    for (let h = 1; h < c.length; h++) {
      const b = c[h] || '',
        g = o[h - 1]
      d[g.name] = b && g.repeatable ? b.split('/') : b
    }
    return d
  }
  function l(u) {
    let c = '',
      d = !1
    for (const h of e) {
      ;(!d || !c.endsWith('/')) && (c += '/'), (d = !1)
      for (const b of h)
        if (b.type === 0) c += b.value
        else if (b.type === 1) {
          const { value: g, repeatable: E, optional: $ } = b,
            C = g in u ? u[g] : ''
          if (Fe(C) && !E)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            )
          const q = Fe(C) ? C.join('/') : C
          if (!q)
            if ($) h.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${g}"`)
          c += q
        }
    }
    return c || '/'
  }
  return { re: r, score: s, keys: o, parse: a, stringify: l }
}
function S1(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function C1(e, t) {
  let n = 0
  const s = e.score,
    i = t.score
  for (; n < s.length && n < i.length; ) {
    const o = S1(s[n], i[n])
    if (o) return o
    n++
  }
  if (Math.abs(i.length - s.length) === 1) {
    if (Po(s)) return 1
    if (Po(i)) return -1
  }
  return i.length - s.length
}
function Po(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const R1 = { type: 0, value: '' },
  k1 = /[a-zA-Z0-9_]/
function T1(e) {
  if (!e) return [[]]
  if (e === '/') return [[R1]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(b) {
    throw new Error(`ERR (${n})/"${u}": ${b}`)
  }
  let n = 0,
    s = n
  const i = []
  let o
  function r() {
    o && i.push(o), (o = [])
  }
  let a = 0,
    l,
    u = '',
    c = ''
  function d() {
    u &&
      (n === 0
        ? o.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: u,
              regexp: c,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?'
            }))
          : t('Invalid state to consume buffer'),
      (u = ''))
  }
  function h() {
    u += l
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (u && d(), r()) : l === ':' ? (d(), (n = 1)) : h()
        break
      case 4:
        h(), (n = s)
        break
      case 1:
        l === '('
          ? (n = 2)
          : k1.test(l)
            ? h()
            : (d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--)
        break
      case 2:
        l === ')' ? (c[c.length - 1] == '\\' ? (c = c.slice(0, -1) + l) : (n = 3)) : (c += l)
        break
      case 3:
        d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (c = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), r(), i
}
function $1(e, t, n) {
  const s = E1(T1(e.path), n),
    i = te(s, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function A1(e, t) {
  const n = [],
    s = new Map()
  t = Io({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(c) {
    return s.get(c)
  }
  function o(c, d, h) {
    const b = !h,
      g = O1(c)
    g.aliasOf = h && h.record
    const E = Io(t, c),
      $ = [g]
    if ('alias' in c) {
      const N = typeof c.alias == 'string' ? [c.alias] : c.alias
      for (const K of N)
        $.push(
          te({}, g, {
            components: h ? h.record.components : g.components,
            path: K,
            aliasOf: h ? h.record : g
          })
        )
    }
    let C, q
    for (const N of $) {
      const { path: K } = N
      if (d && K[0] !== '/') {
        const ie = d.record.path,
          B = ie[ie.length - 1] === '/' ? '' : '/'
        N.path = d.record.path + (K && B + K)
      }
      if (
        ((C = $1(N, d, E)),
        h
          ? h.alias.push(C)
          : ((q = q || C), q !== C && q.alias.push(C), b && c.name && !Mo(C) && r(c.name)),
        g.children)
      ) {
        const ie = g.children
        for (let B = 0; B < ie.length; B++) o(ie[B], C, h && h.children[B])
      }
      ;(h = h || C),
        ((C.record.components && Object.keys(C.record.components).length) ||
          C.record.name ||
          C.record.redirect) &&
          l(C)
    }
    return q
      ? () => {
          r(q)
        }
      : mn
  }
  function r(c) {
    if (ya(c)) {
      const d = s.get(c)
      d && (s.delete(c), n.splice(n.indexOf(d), 1), d.children.forEach(r), d.alias.forEach(r))
    } else {
      const d = n.indexOf(c)
      d > -1 &&
        (n.splice(d, 1),
        c.record.name && s.delete(c.record.name),
        c.children.forEach(r),
        c.alias.forEach(r))
    }
  }
  function a() {
    return n
  }
  function l(c) {
    let d = 0
    for (
      ;
      d < n.length && C1(c, n[d]) >= 0 && (c.record.path !== n[d].record.path || !xa(c, n[d]));

    )
      d++
    n.splice(d, 0, c), c.record.name && !Mo(c) && s.set(c.record.name, c)
  }
  function u(c, d) {
    let h,
      b = {},
      g,
      E
    if ('name' in c && c.name) {
      if (((h = s.get(c.name)), !h)) throw Gt(1, { location: c })
      ;(E = h.record.name),
        (b = te(
          Lo(
            d.params,
            h.keys
              .filter((q) => !q.optional)
              .concat(h.parent ? h.parent.keys.filter((q) => q.optional) : [])
              .map((q) => q.name)
          ),
          c.params &&
            Lo(
              c.params,
              h.keys.map((q) => q.name)
            )
        )),
        (g = h.stringify(b))
    } else if (c.path != null)
      (g = c.path), (h = n.find((q) => q.re.test(g))), h && ((b = h.parse(g)), (E = h.record.name))
    else {
      if (((h = d.name ? s.get(d.name) : n.find((q) => q.re.test(d.path))), !h))
        throw Gt(1, { location: c, currentLocation: d })
      ;(E = h.record.name), (b = te({}, d.params, c.params)), (g = h.stringify(b))
    }
    const $ = []
    let C = h
    for (; C; ) $.unshift(C.record), (C = C.parent)
    return { name: E, path: g, params: b, matched: $, meta: L1($) }
  }
  return (
    e.forEach((c) => o(c)),
    { addRoute: o, resolve: u, removeRoute: r, getRoutes: a, getRecordMatcher: i }
  )
}
function Lo(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function O1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: P1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function P1(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Mo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function L1(e) {
  return e.reduce((t, n) => te(t, n.meta), {})
}
function Io(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function xa(e, t) {
  return t.children.some((n) => n === e || xa(e, n))
}
function M1(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let i = 0; i < s.length; ++i) {
    const o = s[i].replace(ha, ' '),
      r = o.indexOf('='),
      a = En(r < 0 ? o : o.slice(0, r)),
      l = r < 0 ? null : En(o.slice(r + 1))
    if (a in t) {
      let u = t[a]
      Fe(u) || (u = t[a] = [u]), u.push(l)
    } else t[a] = l
  }
  return t
}
function qo(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Zm(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Fe(s) ? s.map((o) => o && ei(o)) : [s && ei(s)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function I1(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Fe(s) ? s.map((i) => (i == null ? null : '' + i)) : s == null ? s : '' + s)
  }
  return t
}
const q1 = Symbol(''),
  jo = Symbol(''),
  Oi = Symbol(''),
  Ea = Symbol(''),
  ni = Symbol('')
function on() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const i = e.indexOf(s)
        i > -1 && e.splice(i, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function ht(e, t, n, s, i, o = (r) => r()) {
  const r = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || [])
  return () =>
    new Promise((a, l) => {
      const u = (h) => {
          h === !1
            ? l(Gt(4, { from: n, to: t }))
            : h instanceof Error
              ? l(h)
              : y1(h)
                ? l(Gt(2, { from: t, to: h }))
                : (r && s.enterCallbacks[i] === r && typeof h == 'function' && r.push(h), a())
        },
        c = o(() => e.call(s && s.instances[i], t, n, u))
      let d = Promise.resolve(c)
      e.length < 3 && (d = d.then(u)), d.catch((h) => l(h))
    })
}
function Ps(e, t, n, s, i = (o) => o()) {
  const o = []
  for (const r of e)
    for (const a in r.components) {
      let l = r.components[a]
      if (!(t !== 'beforeRouteEnter' && !r.instances[a]))
        if (j1(l)) {
          const c = (l.__vccOpts || l)[t]
          c && o.push(ht(c, n, s, r, a, i))
        } else {
          let u = l()
          o.push(() =>
            u.then((c) => {
              if (!c)
                return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`))
              const d = Bm(c) ? c.default : c
              r.components[a] = d
              const b = (d.__vccOpts || d)[t]
              return b && ht(b, n, s, r, a, i)()
            })
          )
        }
    }
  return o
}
function j1(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function No(e) {
  const t = it(Oi),
    n = it(Ea),
    s = Le(() => {
      const l = ze(e.to)
      return t.resolve(l)
    }),
    i = Le(() => {
      const { matched: l } = s.value,
        { length: u } = l,
        c = l[u - 1],
        d = n.matched
      if (!c || !d.length) return -1
      const h = d.findIndex(Jt.bind(null, c))
      if (h > -1) return h
      const b = Ho(l[u - 2])
      return u > 1 && Ho(c) === b && d[d.length - 1].path !== b
        ? d.findIndex(Jt.bind(null, l[u - 2]))
        : h
    }),
    o = Le(() => i.value > -1 && z1(n.params, s.value.params)),
    r = Le(() => i.value > -1 && i.value === n.matched.length - 1 && ga(n.params, s.value.params))
  function a(l = {}) {
    return D1(l) ? t[ze(e.replace) ? 'replace' : 'push'](ze(e.to)).catch(mn) : Promise.resolve()
  }
  return { route: s, href: Le(() => s.value.href), isActive: o, isExactActive: r, navigate: a }
}
const N1 = Cn({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: No,
    setup(e, { slots: t }) {
      const n = ts(No(e)),
        { options: s } = it(Oi),
        i = Le(() => ({
          [Do(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [Do(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : Wt(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
              },
              o
            )
      }
    }
  }),
  H1 = N1
function D1(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function z1(e, t) {
  for (const n in t) {
    const s = t[n],
      i = e[n]
    if (typeof s == 'string') {
      if (s !== i) return !1
    } else if (!Fe(i) || i.length !== s.length || s.some((o, r) => o !== i[r])) return !1
  }
  return !0
}
function Ho(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Do = (e, t, n) => e ?? t ?? n,
  B1 = Cn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = it(ni),
        i = Le(() => e.route || s.value),
        o = it(jo, 0),
        r = Le(() => {
          let u = ze(o)
          const { matched: c } = i.value
          let d
          for (; (d = c[u]) && !d.components; ) u++
          return u
        }),
        a = Le(() => i.value.matched[r.value])
      Hn(
        jo,
        Le(() => r.value + 1)
      ),
        Hn(q1, a),
        Hn(ni, i)
      const l = P()
      return (
        Nn(
          () => [l.value, a.value, e.name],
          ([u, c, d], [h, b, g]) => {
            c &&
              ((c.instances[d] = u),
              b &&
                b !== c &&
                u &&
                u === h &&
                (c.leaveGuards.size || (c.leaveGuards = b.leaveGuards),
                c.updateGuards.size || (c.updateGuards = b.updateGuards))),
              u && c && (!b || !Jt(c, b) || !h) && (c.enterCallbacks[d] || []).forEach((E) => E(u))
          },
          { flush: 'post' }
        ),
        () => {
          const u = i.value,
            c = e.name,
            d = a.value,
            h = d && d.components[c]
          if (!h) return zo(n.default, { Component: h, route: u })
          const b = d.props[c],
            g = b ? (b === !0 ? u.params : typeof b == 'function' ? b(u) : b) : null,
            $ = Wt(
              h,
              te({}, g, t, {
                onVnodeUnmounted: (C) => {
                  C.component.isUnmounted && (d.instances[c] = null)
                },
                ref: l
              })
            )
          return zo(n.default, { Component: $, route: u }) || $
        }
      )
    }
  })
function zo(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const F1 = B1
function U1(e) {
  const t = A1(e.routes, e),
    n = e.parseQuery || M1,
    s = e.stringifyQuery || qo,
    i = e.history,
    o = on(),
    r = on(),
    a = on(),
    l = I(ut)
  let u = ut
  Nt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const c = As.bind(null, (w) => '' + w),
    d = As.bind(null, t1),
    h = As.bind(null, En)
  function b(w, L) {
    let A, j
    return ya(w) ? ((A = t.getRecordMatcher(w)), (j = L)) : (j = w), t.addRoute(j, A)
  }
  function g(w) {
    const L = t.getRecordMatcher(w)
    L && t.removeRoute(L)
  }
  function E() {
    return t.getRoutes().map((w) => w.record)
  }
  function $(w) {
    return !!t.getRecordMatcher(w)
  }
  function C(w, L) {
    if (((L = te({}, L || l.value)), typeof w == 'string')) {
      const p = Os(n, w, L.path),
        v = t.resolve({ path: p.path }, L),
        x = i.createHref(p.fullPath)
      return te(p, v, { params: h(v.params), hash: En(p.hash), redirectedFrom: void 0, href: x })
    }
    let A
    if (w.path != null) A = te({}, w, { path: Os(n, w.path, L.path).path })
    else {
      const p = te({}, w.params)
      for (const v in p) p[v] == null && delete p[v]
      ;(A = te({}, w, { params: d(p) })), (L.params = d(L.params))
    }
    const j = t.resolve(A, L),
      ee = w.hash || ''
    j.params = c(h(j.params))
    const le = i1(s, te({}, w, { hash: Xm(ee), path: j.path })),
      f = i.createHref(le)
    return te({ fullPath: le, hash: ee, query: s === qo ? I1(w.query) : w.query || {} }, j, {
      redirectedFrom: void 0,
      href: f
    })
  }
  function q(w) {
    return typeof w == 'string' ? Os(n, w, l.value.path) : te({}, w)
  }
  function N(w, L) {
    if (u !== w) return Gt(8, { from: L, to: w })
  }
  function K(w) {
    return pe(w)
  }
  function ie(w) {
    return K(te(q(w), { replace: !0 }))
  }
  function B(w) {
    const L = w.matched[w.matched.length - 1]
    if (L && L.redirect) {
      const { redirect: A } = L
      let j = typeof A == 'function' ? A(w) : A
      return (
        typeof j == 'string' &&
          ((j = j.includes('?') || j.includes('#') ? (j = q(j)) : { path: j }), (j.params = {})),
        te({ query: w.query, hash: w.hash, params: j.path != null ? {} : w.params }, j)
      )
    }
  }
  function pe(w, L) {
    const A = (u = C(w)),
      j = l.value,
      ee = w.state,
      le = w.force,
      f = w.replace === !0,
      p = B(A)
    if (p)
      return pe(
        te(q(p), { state: typeof p == 'object' ? te({}, ee, p.state) : ee, force: le, replace: f }),
        L || A
      )
    const v = A
    v.redirectedFrom = L
    let x
    return (
      !le && o1(s, j, A) && ((x = Gt(16, { to: v, from: j })), We(j, j, !0, !1)),
      (x ? Promise.resolve(x) : Ee(v, j))
        .catch((_) => (nt(_) ? (nt(_, 2) ? _ : at(_)) : Z(_, v, j)))
        .then((_) => {
          if (_) {
            if (nt(_, 2))
              return pe(
                te({ replace: f }, q(_.to), {
                  state: typeof _.to == 'object' ? te({}, ee, _.to.state) : ee,
                  force: le
                }),
                L || v
              )
          } else _ = et(v, j, !0, f, ee)
          return Ue(v, j, _), _
        })
    )
  }
  function Ce(w, L) {
    const A = N(w, L)
    return A ? Promise.reject(A) : Promise.resolve()
  }
  function rt(w) {
    const L = Pt.values().next().value
    return L && typeof L.runWithContext == 'function' ? L.runWithContext(w) : w()
  }
  function Ee(w, L) {
    let A
    const [j, ee, le] = V1(w, L)
    A = Ps(j.reverse(), 'beforeRouteLeave', w, L)
    for (const p of j)
      p.leaveGuards.forEach((v) => {
        A.push(ht(v, w, L))
      })
    const f = Ce.bind(null, w, L)
    return (
      A.push(f),
      _e(A)
        .then(() => {
          A = []
          for (const p of o.list()) A.push(ht(p, w, L))
          return A.push(f), _e(A)
        })
        .then(() => {
          A = Ps(ee, 'beforeRouteUpdate', w, L)
          for (const p of ee)
            p.updateGuards.forEach((v) => {
              A.push(ht(v, w, L))
            })
          return A.push(f), _e(A)
        })
        .then(() => {
          A = []
          for (const p of le)
            if (p.beforeEnter)
              if (Fe(p.beforeEnter)) for (const v of p.beforeEnter) A.push(ht(v, w, L))
              else A.push(ht(p.beforeEnter, w, L))
          return A.push(f), _e(A)
        })
        .then(
          () => (
            w.matched.forEach((p) => (p.enterCallbacks = {})),
            (A = Ps(le, 'beforeRouteEnter', w, L, rt)),
            A.push(f),
            _e(A)
          )
        )
        .then(() => {
          A = []
          for (const p of r.list()) A.push(ht(p, w, L))
          return A.push(f), _e(A)
        })
        .catch((p) => (nt(p, 8) ? p : Promise.reject(p)))
    )
  }
  function Ue(w, L, A) {
    a.list().forEach((j) => rt(() => j(w, L, A)))
  }
  function et(w, L, A, j, ee) {
    const le = N(w, L)
    if (le) return le
    const f = L === ut,
      p = Nt ? history.state : {}
    A &&
      (j || f
        ? i.replace(w.fullPath, te({ scroll: f && p && p.scroll }, ee))
        : i.push(w.fullPath, ee)),
      (l.value = w),
      We(w, L, A, f),
      at()
  }
  let Ve
  function Zt() {
    Ve ||
      (Ve = i.listen((w, L, A) => {
        if (!An.listening) return
        const j = C(w),
          ee = B(j)
        if (ee) {
          pe(te(ee, { replace: !0 }), j).catch(mn)
          return
        }
        u = j
        const le = l.value
        Nt && p1(To(le.fullPath, A.delta), bs()),
          Ee(j, le)
            .catch((f) =>
              nt(f, 12)
                ? f
                : nt(f, 2)
                  ? (pe(f.to, j)
                      .then((p) => {
                        nt(p, 20) && !A.delta && A.type === Sn.pop && i.go(-1, !1)
                      })
                      .catch(mn),
                    Promise.reject())
                  : (A.delta && i.go(-A.delta, !1), Z(f, j, le))
            )
            .then((f) => {
              ;(f = f || et(j, le, !1)),
                f &&
                  (A.delta && !nt(f, 8)
                    ? i.go(-A.delta, !1)
                    : A.type === Sn.pop && nt(f, 20) && i.go(-1, !1)),
                Ue(j, le, f)
            })
            .catch(mn)
      }))
  }
  let At = on(),
    he = on(),
    ne
  function Z(w, L, A) {
    at(w)
    const j = he.list()
    return j.length ? j.forEach((ee) => ee(w, L, A)) : console.error(w), Promise.reject(w)
  }
  function tt() {
    return ne && l.value !== ut
      ? Promise.resolve()
      : new Promise((w, L) => {
          At.add([w, L])
        })
  }
  function at(w) {
    return ne || ((ne = !w), Zt(), At.list().forEach(([L, A]) => (w ? A(w) : L())), At.reset()), w
  }
  function We(w, L, A, j) {
    const { scrollBehavior: ee } = e
    if (!Nt || !ee) return Promise.resolve()
    const le =
      (!A && h1(To(w.fullPath, 0))) || ((j || !A) && history.state && history.state.scroll) || null
    return mr()
      .then(() => ee(w, L, le))
      .then((f) => f && f1(f))
      .catch((f) => Z(f, w, L))
  }
  const Re = (w) => i.go(w)
  let Ot
  const Pt = new Set(),
    An = {
      currentRoute: l,
      listening: !0,
      addRoute: b,
      removeRoute: g,
      hasRoute: $,
      getRoutes: E,
      resolve: C,
      options: e,
      push: K,
      replace: ie,
      go: Re,
      back: () => Re(-1),
      forward: () => Re(1),
      beforeEach: o.add,
      beforeResolve: r.add,
      afterEach: a.add,
      onError: he.add,
      isReady: tt,
      install(w) {
        const L = this
        w.component('RouterLink', H1),
          w.component('RouterView', F1),
          (w.config.globalProperties.$router = L),
          Object.defineProperty(w.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => ze(l)
          }),
          Nt && !Ot && l.value === ut && ((Ot = !0), K(i.location).catch((ee) => {}))
        const A = {}
        for (const ee in ut)
          Object.defineProperty(A, ee, { get: () => l.value[ee], enumerable: !0 })
        w.provide(Oi, L), w.provide(Ea, ar(A)), w.provide(ni, l)
        const j = w.unmount
        Pt.add(w),
          (w.unmount = function () {
            Pt.delete(w),
              Pt.size < 1 &&
                ((u = ut), Ve && Ve(), (Ve = null), (l.value = ut), (Ot = !1), (ne = !1)),
              j()
          })
      }
    }
  function _e(w) {
    return w.reduce((L, A) => L.then(() => rt(A)), Promise.resolve())
  }
  return An
}
function V1(e, t) {
  const n = [],
    s = [],
    i = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let r = 0; r < o; r++) {
    const a = t.matched[r]
    a && (e.matched.find((u) => Jt(u, a)) ? s.push(a) : n.push(a))
    const l = e.matched[r]
    l && (t.matched.find((u) => Jt(u, l)) || i.push(l))
  }
  return [n, s, i]
}
const W1 = [{ path: '/:tabId*', component: zm, props: !0 }],
  K1 = U1({ history: _1(), routes: W1 })
function J1(e) {
  e.use(K1)
}
const Sa = Dc(Om)
J1(Sa)
Sa.mount('#app')
