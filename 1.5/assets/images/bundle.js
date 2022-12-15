!(function (e) {
  var t = {};
  function s(i) {
    if (t[i]) return t[i].exports;
    var n = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = t),
    (s.d = function (e, t, i) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = ""),
    s((s.s = 0));
})([
  function (e, t, s) {
    e.exports = s(7);
  },
  function (e, t, s) {},
  function (e, t, s) {},
  function (e, t) {
    var s = document.querySelector(".sidebar"),
      i = document.querySelector(".header__button"),
      n = document.querySelector(".container"),
      r = document.querySelector("body"),
      a = s.querySelector(".header__exit");
    i.addEventListener("click", function () {
      s.classList.add("sidebar--show"),
        n.classList.add("container--show"),
        r.classList.add("no-scroll");
    }),
      a.addEventListener("click", function () {
        s.classList.remove("sidebar--show"),
          n.classList.remove("container--show"),
          r.classList.remove("no-scroll");
      }),
      document.addEventListener("keydown", function (e) {
        27 === e.keyCode &&
          (s.classList.remove("sidebar--show"),
          n.classList.remove("container--show"),
          r.classList.remove("no-scroll"));
      }),
      document.querySelector("main").addEventListener("click", function () {
        s.classList.remove("sidebar--show"),
          n.classList.remove("container--show"),
          r.classList.remove("no-scroll");
      });
  },
  function (e, t) {
    var s = document.querySelector(".more"),
      i = document.querySelector(".more-button"),
      n = document.querySelector(".hide-text"),
      r = document.querySelector(".hide-button");
    i.addEventListener("click", function () {
      s.classList.add("visible-text"),
        r.classList.add("hide-button--visible"),
        i.classList.add("invisible-text"),
        n.classList.add("invisible-text");
    }),
      r.addEventListener("click", function () {
        s.classList.remove("visible-text"),
          r.classList.remove("hide-button--visible"),
          i.classList.remove("invisible-text"),
          n.classList.remove("invisible-text");
      });
  },
  function (e, t) {
    var s = document.querySelector(".hide-card--second"),
      i = document.querySelector(".show-all--second"),
      n = document.querySelector(".collapse--second"),
      r = document.querySelector(".hide-card--first"),
      a = document.querySelector(".show-all--first"),
      l = document.querySelector(".collapse--first");
    i.addEventListener("click", function () {
      s.classList.add("visible-card"),
        i.classList.add("invisible"),
        n.classList.add("visible");
    }),
      n.addEventListener("click", function () {
        s.classList.remove("visible-card"),
          i.classList.remove("invisible"),
          n.classList.remove("visible");
      }),
      a.addEventListener("click", function () {
        r.classList.add("visible-card"),
          a.classList.add("invisible"),
          l.classList.add("visible");
      }),
      l.addEventListener("click", function () {
        r.classList.remove("visible-card"),
          a.classList.remove("invisible"),
          l.classList.remove("visible");
      });
  },
  function (e, t) {
    var s = document.querySelector(".modal-message"),
      i = document.querySelector(".modal-call"),
      n = document.querySelector(".message-button"),
      r = document.querySelector(".call-button"),
      a = document.querySelector(".call-button--sidebar"),
      l = document.querySelector(".message-button--sidebar"),
      o = document.querySelector(".button--exit-message"),
      d = document.querySelector(".button--exit-call"),
      c = document.querySelector(".container"),
      p = document.querySelector("body"),
      u = document.querySelector("main"),
      h = document.querySelector(".sidebar");
    n.addEventListener("click", function () {
      h.classList.remove("sidebar--show"),
        s.classList.add("visible-modal"),
        c.classList.add("container--show"),
        p.classList.add("no-scroll");
    }),
      l.addEventListener("click", function () {
        h.classList.remove("sidebar--show"),
          s.classList.add("visible-modal"),
          c.classList.add("container--show"),
          p.classList.add("no-scroll");
      }),
      r.addEventListener("click", function () {
        h.classList.remove("sidebar--show"),
          i.classList.add("visible-modal"),
          c.classList.add("container--show"),
          p.classList.add("no-scroll");
      }),
      a.addEventListener("click", function () {
        h.classList.remove("sidebar--show"),
          i.classList.add("visible-modal"),
          c.classList.add("container--show"),
          p.classList.add("no-scroll");
      }),
      document.addEventListener("keydown", function (e) {
        27 === e.keyCode &&
          (s.classList.remove("visible-modal"),
          i.classList.remove("visible-modal"),
          c.classList.remove("container--show"),
          p.classList.remove("no-scroll"));
      }),
      o.addEventListener("click", function () {
        s.classList.remove("visible-modal"),
          c.classList.remove("container--show"),
          p.classList.remove("no-scroll");
      }),
      d.addEventListener("click", function () {
        i.classList.remove("visible-modal"),
          c.classList.remove("container--show"),
          p.classList.remove("no-scroll");
      }),
      u.addEventListener("click", function () {
        i.classList.remove("visible-modal"),
          s.classList.remove("visible-modal"),
          c.classList.remove("container--show"),
          p.classList.remove("no-scroll");
      });
  },
  function (e, t, s) {
    "use strict";
    s.r(t);
    s(1), s(2), s(3), s(4);
    function i(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function n(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s]);
      });
    }
    const r = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function a() {
      const e = "undefined" != typeof document ? document : {};
      return n(e, r), e;
    }
    const l = {
      document: r,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function o() {
      const e = "undefined" != typeof window ? window : {};
      return n(e, l), e;
    }
    class d extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function c(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...c(e)) : t.push(e);
        }),
        t
      );
    }
    function p(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function u(e, t) {
      const s = o(),
        i = a();
      let n = [];
      if (!t && e instanceof d) return e;
      if (!e) return new d(n);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof d) return e;
        n = e;
      }
      return new d(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(n)
      );
    }
    u.fn = d.prototype;
    const h = "resize scroll".split(" ");
    function f(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            h.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    f("click"),
      f("blur"),
      f("focus"),
      f("focusin"),
      f("focusout"),
      f("keyup"),
      f("keydown"),
      f("keypress"),
      f("submit"),
      f("change"),
      f("mousedown"),
      f("mousemove"),
      f("mouseup"),
      f("mouseenter"),
      f("mouseleave"),
      f("mouseout"),
      f("mouseover"),
      f("touchstart"),
      f("touchend"),
      f("touchmove"),
      f("resize"),
      f("scroll");
    const m = {
      addClass: function (...e) {
        const t = c(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = c(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = c(e.map((e) => e.split(" ")));
        return (
          p(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = c(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function (...e) {
        let [t, s, i, n] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), u(t).is(s))) i.apply(t, n);
          else {
            const e = u(t).parents();
            for (let t = 0; t < e.length; t += 1)
              u(e[t]).is(s) && i.apply(e[t], n);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const l = t.split(" ");
        let o;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (o = 0; o < l.length; o += 1) {
              const e = l[o];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
          else
            for (o = 0; o < l.length; o += 1) {
              const e = l[o];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: a }),
                t.addEventListener(e, a, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, i, n] = e;
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let a;
            if (
              (!s && r.dom7Listeners
                ? (a = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const s = a[e];
                (i && s.listener === i) ||
                (i &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === i)
                  ? (r.removeEventListener(t, s.proxyListener, n),
                    a.splice(e, 1))
                  : i ||
                    (r.removeEventListener(t, s.proxyListener, n),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = o(),
          s = e[0].split(" "),
          i = e[1];
        for (let n = 0; n < s.length; n += 1) {
          const r = s[n];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(s),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = o();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = o(),
            t = a(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            r = s.clientTop || n.clientTop || 0,
            l = s.clientLeft || n.clientLeft || 0,
            d = s === e ? e.scrollY : s.scrollTop,
            c = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + d - r, left: i.left + c - l };
        }
        return null;
      },
      css: function (e, t) {
        const s = o();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = o(),
          s = a(),
          i = this[0];
        let n, r;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (n = u(e), r = 0; r < n.length; r += 1) if (n[r] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof d) {
          for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return u([]);
        if (e < 0) {
          const s = t + e;
          return u(s < 0 ? [] : [this[s]]);
        }
        return u([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = a();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = s.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof d)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = a();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof d)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e)
              ? u([this[0].nextElementSibling])
              : u([])
            : this[0].nextElementSibling
            ? u([this[0].nextElementSibling])
            : u([])
          : u([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return u([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? u(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return u(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && u(t.previousElementSibling).is(e)
              ? u([t.previousElementSibling])
              : u([])
            : t.previousElementSibling
            ? u([t.previousElementSibling])
            : u([]);
        }
        return u([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return u([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? u(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return u(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return u(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? u(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return u(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return u(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].children;
          for (let s = 0; s < i.length; s += 1)
            (e && !u(i[s]).is(e)) || t.push(i[s]);
        }
        return u(t);
      },
      filter: function (e) {
        return u(p(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(m).forEach((e) => {
      Object.defineProperty(u.fn, e, { value: m[e], writable: !0 });
    });
    var g = u;
    function v(e, t = 0) {
      return setTimeout(e, t);
    }
    function b() {
      return Date.now();
    }
    function w(e, t = "x") {
      const s = o();
      let i, n, r;
      const a = (function (e) {
        const t = o();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = a.transform || a.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function S(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function C(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const r = e[n];
        if (
          null != r &&
          ((i = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              n = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== n &&
              n.enumerable &&
              (S(t[i]) && S(r[i])
                ? r[i].__swiper__
                  ? (t[i] = r[i])
                  : C(t[i], r[i])
                : !S(t[i]) && S(r[i])
                ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : C(t[i], r[i]))
                : (t[i] = r[i]));
          }
        }
      }
      var i;
      return t;
    }
    function T(e, t, s) {
      e.style.setProperty(t, s);
    }
    function y({ swiper: e, targetPosition: t, side: s }) {
      const i = o(),
        n = -e.translate;
      let r,
        a = null;
      const l = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const d = t > n ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        p = () => {
          (r = new Date().getTime()), null === a && (a = r);
          const o = Math.max(Math.min((r - a) / l, 1), 0),
            d = 0.5 - Math.cos(o * Math.PI) / 2;
          let u = n + d * (t - n);
          if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: u });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(p);
        };
      p();
    }
    let x, E, L;
    function M() {
      return (
        x ||
          (x = (function () {
            const e = o(),
              t = a();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        x
      );
    }
    function k(e = {}) {
      return (
        E ||
          (E = (function ({ userAgent: e } = {}) {
            const t = M(),
              s = o(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              a = s.screen.width,
              l = s.screen.height,
              d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
            let f = "MacIntel" === i;
            return (
              !c &&
                f &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((c = n.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (f = !1)),
              d && !h && ((r.os = "android"), (r.android = !0)),
              (c || u || p) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        E
      );
    }
    function P() {
      return (
        L ||
          (L = (function () {
            const e = o();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        L
      );
    }
    function O({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: n, previousIndex: r } = e;
      let a = s;
      if (
        (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
        e.emit("transition" + i),
        t && n !== r)
      ) {
        if ("reset" === a) return void e.emit("slideResetTransition" + i);
        e.emit("slideChangeTransition" + i),
          "next" === a
            ? e.emit("slideNextTransition" + i)
            : e.emit("slidePrevTransition" + i);
      }
    }
    function $(e) {
      const t = this,
        s = a(),
        i = o(),
        n = t.touchEventsData,
        { params: r, touches: l, enabled: d } = t;
      if (!d) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let c = e;
      c.originalEvent && (c = c.originalEvent);
      let p = g(c.target);
      if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === c.type),
        !n.isTouchEvent && "which" in c && 3 === c.which)
      )
        return;
      if (!n.isTouchEvent && "button" in c && c.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const u = !!r.noSwipingClass && "" !== r.noSwipingClass,
        h = e.composedPath ? e.composedPath() : e.path;
      u && c.target && c.target.shadowRoot && h && (p = g(h[0]));
      const f = r.noSwipingSelector
          ? r.noSwipingSelector
          : "." + r.noSwipingClass,
        m = !(!c.target || !c.target.shadowRoot);
      if (
        r.noSwiping &&
        (m
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === a() || s === o()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t);
            })(f, p[0])
          : p.closest(f)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
      (l.currentX =
        "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
        (l.currentY =
          "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
      const v = l.currentX,
        w = l.currentY,
        S = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        C = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (S && (v <= C || v >= i.innerWidth - C)) {
        if ("prevent" !== S) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (l.startX = v),
        (l.startY = w),
        (n.touchStartTime = b()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== c.type)
      ) {
        let e = !0;
        p.is(n.focusableElements) &&
          ((e = !1), "SELECT" === p[0].nodeName && (n.isTouched = !1)),
          s.activeElement &&
            g(s.activeElement).is(n.focusableElements) &&
            s.activeElement !== p[0] &&
            s.activeElement.blur();
        const i = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !i) ||
          p[0].isContentEditable ||
          c.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", c);
    }
    function z(e) {
      const t = a(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: r, rtlTranslate: l, enabled: o } = s;
      if (!o) return;
      let d = e;
      if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", d)
        );
      if (i.isTouchEvent && "touchmove" !== d.type) return;
      const c =
          "touchmove" === d.type &&
          d.targetTouches &&
          (d.targetTouches[0] || d.changedTouches[0]),
        p = "touchmove" === d.type ? c.pageX : d.pageX,
        u = "touchmove" === d.type ? c.pageY : d.pageY;
      if (d.preventedByNestedSwiper) return (r.startX = p), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          g(d.target).is(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: p,
              startY: u,
              currentX: p,
              currentY: u,
            }),
            (i.touchStartTime = b()))
          )
        );
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (p < r.startX && s.translate <= s.maxTranslate()) ||
          (p > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        d.target === t.activeElement &&
        g(d.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", d),
        d.targetTouches && d.targetTouches.length > 1)
      )
        return;
      (r.currentX = p), (r.currentY = u);
      const h = r.currentX - r.startX,
        f = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : h * h + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", d),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && d.cancelable && d.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
        i.isMoved ||
          (n.loop && !n.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", d)),
        s.emit("sliderMove", d),
        (i.isMoved = !0);
      let m = s.isHorizontal() ? h : f;
      (r.diff = m),
        (m *= n.touchRatio),
        l && (m = -m),
        (s.swipeDirection = m > 0 ? "prev" : "next"),
        (i.currentTranslate = m + i.startTranslate);
      let v = !0,
        w = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (w = 0),
        m > 0 && i.currentTranslate > s.minTranslate()
          ? ((v = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + m) ** w))
          : m < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((v = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - m) ** w)),
        v && (d.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function A(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: i,
          touches: n,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: l,
        } = t;
      if (!l) return;
      let o = e;
      if (
        (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = b(),
        c = d - s.touchStartTime;
      if (t.allowClick) {
        const e = o.path || (o.composedPath && o.composedPath());
        t.updateClickedSlide((e && e[0]) || o.target),
          t.emit("tap click", o),
          c < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", o);
      }
      if (
        ((s.lastClickTime = b()),
        v(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let u = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== a[e + t]
          ? p >= a[e] && p < a[e + t] && ((u = e), (h = a[e + t] - a[e]))
          : p >= a[e] && ((u = e), (h = a[a.length - 1] - a[a.length - 2]));
      }
      let f = null,
        m = null;
      i.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (p - a[u]) / h,
        w = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (c > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? f : u + w)
            : t.slideTo(u)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(u + w)
              : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(u));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
          ? o.target === t.navigation.nextEl
            ? t.slideTo(u + w)
            : t.slideTo(u)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : u + w),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u));
      }
    }
    function I() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function D(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function G() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let _ = !1;
    function B() {}
    const N = (e, t) => {
      const s = a(),
        {
          params: i,
          touchEvents: n,
          el: r,
          wrapperEl: l,
          device: o,
          support: d,
        } = e,
        c = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (d.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !d.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[p](n.start, e.onTouchStart, t),
          r[p](
            n.move,
            e.onTouchMove,
            d.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[p](n.end, e.onTouchEnd, t),
          n.cancel && r[p](n.cancel, e.onTouchEnd, t);
      } else
        r[p](n.start, e.onTouchStart, !1),
          s[p](n.move, e.onTouchMove, c),
          s[p](n.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        r[p]("click", e.onClick, !0),
        i.cssMode && l[p]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              I,
              !0
            )
          : e[u]("observerUpdate", I, !0);
    };
    const q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var H = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function j(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                C(t, s))
              : C(t, s))
          : C(t, s);
      };
    }
    const F = {
        eventsEmitter: {
          on(e, t, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const n = s ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][n](t);
              }),
              i
            );
          },
          once(e, t, s) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            function n(...s) {
              i.off(e, n),
                n.__emitterProxy && delete n.__emitterProxy,
                t.apply(i, s);
            }
            return (n.__emitterProxy = t), i.on(e, n, s);
          },
          onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const i = t ? "unshift" : "push";
            return (
              s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e),
              s
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
          },
          off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed
              ? s
              : s.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (s.eventsListeners[e] = [])
                    : s.eventsListeners[e] &&
                      s.eventsListeners[e].forEach((i, n) => {
                        (i === t ||
                          (i.__emitterProxy && i.__emitterProxy === t)) &&
                          s.eventsListeners[e].splice(n, 1);
                      });
                }),
                s)
              : s;
          },
          emit(...e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsListeners) return t;
            let s, i, n;
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
              : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
              i.unshift(n);
            return (
              (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
                t.eventsAnyListeners &&
                  t.eventsAnyListeners.length &&
                  t.eventsAnyListeners.forEach((t) => {
                    t.apply(n, [e, ...i]);
                  }),
                  t.eventsListeners &&
                    t.eventsListeners[e] &&
                    t.eventsListeners[e].forEach((e) => {
                      e.apply(n, i);
                    });
              }),
              t
            );
          },
        },
        update: {
          updateSize: function () {
            const e = this;
            let t, s;
            const i = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : i[0].clientWidth),
              (s =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : i[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === s && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(i.css("padding-left") || 0, 10) -
                  parseInt(i.css("padding-right") || 0, 10)),
                (s =
                  s -
                  parseInt(i.css("padding-top") || 0, 10) -
                  parseInt(i.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(s) && (s = 0),
                Object.assign(e, {
                  width: t,
                  height: s,
                  size: e.isHorizontal() ? t : s,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function s(e, s) {
              return parseFloat(e.getPropertyValue(t(s)) || 0);
            }
            const i = e.params,
              { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: l } = e,
              o = e.virtual && i.virtual.enabled,
              d = o ? e.virtual.slides.length : e.slides.length,
              c = n.children("." + e.params.slideClass),
              p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [],
              f = [];
            let m = i.slidesOffsetBefore;
            "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
            let g = i.slidesOffsetAfter;
            "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              b = e.slidesGrid.length;
            let w = i.spaceBetween,
              S = -m,
              C = 0,
              y = 0;
            if (void 0 === r) return;
            "string" == typeof w &&
              w.indexOf("%") >= 0 &&
              (w = (parseFloat(w.replace("%", "")) / 100) * r),
              (e.virtualSize = -w),
              a
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              i.centeredSlides &&
                i.cssMode &&
                (T(e.wrapperEl, "--swiper-centered-offset-before", ""),
                T(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const x = i.grid && i.grid.rows > 1 && e.grid;
            let E;
            x && e.grid.initSlides(p);
            const L =
              "auto" === i.slidesPerView &&
              i.breakpoints &&
              Object.keys(i.breakpoints).filter(
                (e) => void 0 !== i.breakpoints[e].slidesPerView
              ).length > 0;
            for (let n = 0; n < p; n += 1) {
              E = 0;
              const a = c.eq(n);
              if (
                (x && e.grid.updateSlide(n, a, p, t),
                "none" !== a.css("display"))
              ) {
                if ("auto" === i.slidesPerView) {
                  L && (c[n].style[t("width")] = "");
                  const r = getComputedStyle(a[0]),
                    l = a[0].style.transform,
                    o = a[0].style.webkitTransform;
                  if (
                    (l && (a[0].style.transform = "none"),
                    o && (a[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                  else {
                    const e = s(r, "width"),
                      t = s(r, "padding-left"),
                      i = s(r, "padding-right"),
                      n = s(r, "margin-left"),
                      l = s(r, "margin-right"),
                      o = r.getPropertyValue("box-sizing");
                    if (o && "border-box" === o) E = e + n + l;
                    else {
                      const { clientWidth: s, offsetWidth: r } = a[0];
                      E = e + t + i + n + l + (r - s);
                    }
                  }
                  l && (a[0].style.transform = l),
                    o && (a[0].style.webkitTransform = o),
                    i.roundLengths && (E = Math.floor(E));
                } else
                  (E = (r - (i.slidesPerView - 1) * w) / i.slidesPerView),
                    i.roundLengths && (E = Math.floor(E)),
                    c[n] && (c[n].style[t("width")] = E + "px");
                c[n] && (c[n].swiperSlideSize = E),
                  f.push(E),
                  i.centeredSlides
                    ? ((S = S + E / 2 + C / 2 + w),
                      0 === C && 0 !== n && (S = S - r / 2 - w),
                      0 === n && (S = S - r / 2 - w),
                      Math.abs(S) < 0.001 && (S = 0),
                      i.roundLengths && (S = Math.floor(S)),
                      y % i.slidesPerGroup == 0 && u.push(S),
                      h.push(S))
                    : (i.roundLengths && (S = Math.floor(S)),
                      (y - Math.min(e.params.slidesPerGroupSkip, y)) %
                        e.params.slidesPerGroup ==
                        0 && u.push(S),
                      h.push(S),
                      (S = S + E + w)),
                  (e.virtualSize += E + w),
                  (C = E),
                  (y += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + g),
              a &&
                l &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                n.css({ width: e.virtualSize + i.spaceBetween + "px" }),
              i.setWrapperSize &&
                n.css({ [t("width")]: e.virtualSize + i.spaceBetween + "px" }),
              x && e.grid.updateWrapperSize(E, u, t),
              !i.centeredSlides)
            ) {
              const t = [];
              for (let s = 0; s < u.length; s += 1) {
                let n = u[s];
                i.roundLengths && (n = Math.floor(n)),
                  u[s] <= e.virtualSize - r && t.push(n);
              }
              (u = t),
                Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) >
                  1 && u.push(e.virtualSize - r);
            }
            if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
              const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
              c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
                [s]: w + "px",
              });
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
                (e -= i.spaceBetween);
              const t = e - r;
              u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (
                (f.forEach((t) => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (e -= i.spaceBetween),
                e < r)
              ) {
                const t = (r - e) / 2;
                u.forEach((e, s) => {
                  u[s] = e - t;
                }),
                  h.forEach((e, s) => {
                    h[s] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: u,
                slidesGrid: h,
                slidesSizesGrid: f,
              }),
              i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
              T(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                T(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  e.size / 2 - f[f.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                s = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + s));
            }
            if (
              (p !== d && e.emit("slidesLengthChange"),
              u.length !== v &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== b && e.emit("slidesGridLengthChange"),
              i.watchSlidesProgress && e.updateSlidesOffset(),
              !(
                o ||
                i.cssMode ||
                ("slide" !== i.effect && "fade" !== i.effect)
              ))
            ) {
              const t = i.containerModifierClass + "backface-hidden",
                s = e.$el.hasClass(t);
              p <= i.maxBackfaceHiddenSlides
                ? s || e.$el.addClass(t)
                : s && e.$el.removeClass(t);
            }
          },
          updateAutoHeight: function (e) {
            const t = this,
              s = [],
              i = t.virtual && t.params.virtual.enabled;
            let n,
              r = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const a = (e) =>
              i
                ? t.slides.filter(
                    (t) =>
                      parseInt(
                        t.getAttribute("data-swiper-slide-index"),
                        10
                      ) === e
                  )[0]
                : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                (t.visibleSlides || g([])).each((e) => {
                  s.push(e);
                });
              else
                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                  const e = t.activeIndex + n;
                  if (e > t.slides.length && !i) break;
                  s.push(a(e));
                }
            else s.push(a(t.activeIndex));
            for (n = 0; n < s.length; n += 1)
              if (void 0 !== s[n]) {
                const e = s[n].offsetHeight;
                r = e > r ? e : r;
              }
            (r || 0 === r) && t.$wrapperEl.css("height", r + "px");
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let s = 0; s < t.length; s += 1)
              t[s].swiperSlideOffset = e.isHorizontal()
                ? t[s].offsetLeft
                : t[s].offsetTop;
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              s = t.params,
              { slides: i, rtlTranslate: n, snapGrid: r } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            n && (a = e),
              i.removeClass(s.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < i.length; e += 1) {
              const l = i[e];
              let o = l.swiperSlideOffset;
              s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
              const d =
                  (a + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                  (l.swiperSlideSize + s.spaceBetween),
                c =
                  (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                  (l.swiperSlideSize + s.spaceBetween),
                p = -(a - o),
                u = p + t.slidesSizesGrid[e];
              ((p >= 0 && p < t.size - 1) ||
                (u > 1 && u <= t.size) ||
                (p <= 0 && u >= t.size)) &&
                (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(e),
                i.eq(e).addClass(s.slideVisibleClass)),
                (l.progress = n ? -d : d),
                (l.originalProgress = n ? -c : c);
            }
            t.visibleSlides = g(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const s = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * s) || 0;
            }
            const s = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: n, isBeginning: r, isEnd: a } = t;
            const l = r,
              o = a;
            0 === i
              ? ((n = 0), (r = !0), (a = !0))
              : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (a = n >= 1)),
              Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
              (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !l && t.emit("reachBeginning toEdge"),
              a && !o && t.emit("reachEnd toEdge"),
              ((l && !r) || (o && !a)) && t.emit("fromEdge"),
              t.emit("progress", n);
          },
          updateSlidesClasses: function () {
            const e = this,
              {
                slides: t,
                params: s,
                $wrapperEl: i,
                activeIndex: n,
                realIndex: r,
              } = e,
              a = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(
              `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
            ),
              (l = a
                ? e.$wrapperEl.find(
                    `.${s.slideClass}[data-swiper-slide-index="${n}"]`
                  )
                : t.eq(n)),
              l.addClass(s.slideActiveClass),
              s.loop &&
                (l.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(
                        `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(s.slideDuplicateActiveClass)
                  : i
                      .children(
                        `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(s.slideDuplicateActiveClass));
            let o = l
              .nextAll("." + s.slideClass)
              .eq(0)
              .addClass(s.slideNextClass);
            s.loop &&
              0 === o.length &&
              ((o = t.eq(0)), o.addClass(s.slideNextClass));
            let d = l
              .prevAll("." + s.slideClass)
              .eq(0)
              .addClass(s.slidePrevClass);
            s.loop &&
              0 === d.length &&
              ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
              s.loop &&
                (o.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(
                        `.${s.slideClass}:not(.${
                          s.slideDuplicateClass
                        })[data-swiper-slide-index="${o.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(s.slideDuplicateNextClass)
                  : i
                      .children(
                        `.${s.slideClass}.${
                          s.slideDuplicateClass
                        }[data-swiper-slide-index="${o.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(s.slideDuplicateNextClass),
                d.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(
                        `.${s.slideClass}:not(.${
                          s.slideDuplicateClass
                        })[data-swiper-slide-index="${d.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(s.slideDuplicatePrevClass)
                  : i
                      .children(
                        `.${s.slideClass}.${
                          s.slideDuplicateClass
                        }[data-swiper-slide-index="${d.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(s.slideDuplicatePrevClass)),
              e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              s = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: i,
                snapGrid: n,
                params: r,
                activeIndex: a,
                realIndex: l,
                snapIndex: o,
              } = t;
            let d,
              c = e;
            if (void 0 === c) {
              for (let e = 0; e < i.length; e += 1)
                void 0 !== i[e + 1]
                  ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                    ? (c = e)
                    : s >= i[e] && s < i[e + 1] && (c = e + 1)
                  : s >= i[e] && (c = e);
              r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (n.indexOf(s) >= 0) d = n.indexOf(s);
            else {
              const e = Math.min(r.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / r.slidesPerGroup);
            }
            if ((d >= n.length && (d = n.length - 1), c === a))
              return void (
                d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"))
              );
            const p = parseInt(
              t.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(t, {
              snapIndex: d,
              realIndex: p,
              previousIndex: a,
              activeIndex: c,
            }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              l !== p && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              s = t.params,
              i = g(e).closest("." + s.slideClass)[0];
            let n,
              r = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  (r = !0), (n = e);
                  break;
                }
            if (!i || !r)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    g(i).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = n),
              s.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: s,
              translate: i,
              $wrapperEl: n,
            } = this;
            if (t.virtualTranslate) return s ? -i : i;
            if (t.cssMode) return i;
            let r = w(n[0], e);
            return s && (r = -r), r || 0;
          },
          setTranslate: function (e, t) {
            const s = this,
              {
                rtlTranslate: i,
                params: n,
                $wrapperEl: r,
                wrapperEl: a,
                progress: l,
              } = s;
            let o,
              d = 0,
              c = 0;
            s.isHorizontal() ? (d = i ? -e : e) : (c = e),
              n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
              n.cssMode
                ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    s.isHorizontal() ? -d : -c)
                : n.virtualTranslate ||
                  r.transform(`translate3d(${d}px, ${c}px, 0px)`),
              (s.previousTranslate = s.translate),
              (s.translate = s.isHorizontal() ? d : c);
            const p = s.maxTranslate() - s.minTranslate();
            (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
              o !== l && s.updateProgress(e),
              s.emit("setTranslate", s.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            s = !0,
            i = !0,
            n
          ) {
            const r = this,
              { params: a, wrapperEl: l } = r;
            if (r.animating && a.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(),
              d = r.maxTranslate();
            let c;
            if (
              ((c = i && e > o ? o : i && e < d ? d : e),
              r.updateProgress(c),
              a.cssMode)
            ) {
              const e = r.isHorizontal();
              if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
              else {
                if (!r.support.smoothScroll)
                  return (
                    y({
                      swiper: r,
                      targetPosition: -c,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(c),
                  s &&
                    (r.emit("beforeTransitionStart", t, n),
                    r.emit("transitionEnd")))
                : (r.setTransition(t),
                  r.setTranslate(c),
                  s &&
                    (r.emit("beforeTransitionStart", t, n),
                    r.emit("transitionStart")),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          s && r.emit("transitionEnd"));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const { params: s } = this;
            (this.animating = !1),
              s.cssMode ||
                (this.setTransition(0),
                O({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "End",
                }));
          },
        },
        slide: {
          slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
            if ("number" != typeof e && "string" != typeof e)
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const r = this;
            let a = e;
            a < 0 && (a = 0);
            const {
              params: l,
              snapGrid: o,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: p,
              rtlTranslate: u,
              wrapperEl: h,
              enabled: f,
            } = r;
            if (
              (r.animating && l.preventInteractionOnTransition) ||
              (!f && !i && !n)
            )
              return !1;
            const m = Math.min(r.params.slidesPerGroupSkip, a);
            let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * v),
                  s = Math.floor(100 * d[e]),
                  i = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1]
                  ? t >= s && t < i - (i - s) / 2
                    ? (a = e)
                    : t >= s && t < i && (a = e + 1)
                  : t >= s && (a = e);
              }
            if (r.initialized && a !== p) {
              if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                v > r.translate &&
                v > r.maxTranslate() &&
                (p || 0) !== a
              )
                return !1;
            }
            let b;
            if (
              (a !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
              r.updateProgress(v),
              (b = a > p ? "next" : a < p ? "prev" : "reset"),
              (u && -v === r.translate) || (!u && v === r.translate))
            )
              return (
                r.updateActiveIndex(a),
                l.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== l.effect && r.setTranslate(v),
                "reset" !== b &&
                  (r.transitionStart(s, b), r.transitionEnd(s, b)),
                !1
              );
            if (l.cssMode) {
              const e = r.isHorizontal(),
                s = u ? v : -v;
              if (0 === t) {
                const t = r.virtual && r.params.virtual.enabled;
                t &&
                  ((r.wrapperEl.style.scrollSnapType = "none"),
                  (r._immediateVirtual = !0)),
                  (h[e ? "scrollLeft" : "scrollTop"] = s),
                  t &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ""),
                        (r._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return (
                    y({
                      swiper: r,
                      targetPosition: s,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
              }
              return !0;
            }
            return (
              r.setTransition(t),
              r.setTranslate(v),
              r.updateActiveIndex(a),
              r.updateSlidesClasses(),
              r.emit("beforeTransitionStart", t, i),
              r.transitionStart(s, b),
              0 === t
                ? r.transitionEnd(s, b)
                : r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(s, b));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const n = this;
            let r = e;
            return (
              n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i)
            );
          },
          slideNext: function (e = this.params.speed, t = !0, s) {
            const i = this,
              { animating: n, enabled: r, params: a } = i;
            if (!r) return i;
            let l = a.slidesPerGroup;
            "auto" === a.slidesPerView &&
              1 === a.slidesPerGroup &&
              a.slidesPerGroupAuto &&
              (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const o = i.activeIndex < a.slidesPerGroupSkip ? 1 : l;
            if (a.loop) {
              if (n && a.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return a.rewind && i.isEnd
              ? i.slideTo(0, e, t, s)
              : i.slideTo(i.activeIndex + o, e, t, s);
          },
          slidePrev: function (e = this.params.speed, t = !0, s) {
            const i = this,
              {
                params: n,
                animating: r,
                snapGrid: a,
                slidesGrid: l,
                rtlTranslate: o,
                enabled: d,
              } = i;
            if (!d) return i;
            if (n.loop) {
              if (r && n.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = c(o ? i.translate : -i.translate),
              u = a.map((e) => c(e));
            let h = a[u.indexOf(p) - 1];
            if (void 0 === h && n.cssMode) {
              let e;
              a.forEach((t, s) => {
                p >= t && (e = s);
              }),
                void 0 !== e && (h = a[e > 0 ? e - 1 : e]);
            }
            let f = 0;
            if (
              (void 0 !== h &&
                ((f = l.indexOf(h)),
                f < 0 && (f = i.activeIndex - 1),
                "auto" === n.slidesPerView &&
                  1 === n.slidesPerGroup &&
                  n.slidesPerGroupAuto &&
                  ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
                  (f = Math.max(f, 0)))),
              n.rewind && i.isBeginning)
            ) {
              const n =
                i.params.virtual && i.params.virtual.enabled && i.virtual
                  ? i.virtual.slides.length - 1
                  : i.slides.length - 1;
              return i.slideTo(n, e, t, s);
            }
            return i.slideTo(f, e, t, s);
          },
          slideReset: function (e = this.params.speed, t = !0, s) {
            return this.slideTo(this.activeIndex, e, t, s);
          },
          slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
            const n = this;
            let r = n.activeIndex;
            const a = Math.min(n.params.slidesPerGroupSkip, r),
              l = a + Math.floor((r - a) / n.params.slidesPerGroup),
              o = n.rtlTranslate ? n.translate : -n.translate;
            if (o >= n.snapGrid[l]) {
              const e = n.snapGrid[l];
              o - e > (n.snapGrid[l + 1] - e) * i &&
                (r += n.params.slidesPerGroup);
            } else {
              const e = n.snapGrid[l - 1];
              o - e <= (n.snapGrid[l] - e) * i &&
                (r -= n.params.slidesPerGroup);
            }
            return (
              (r = Math.max(r, 0)),
              (r = Math.min(r, n.slidesGrid.length - 1)),
              n.slideTo(r, e, t, s)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: s } = e,
              i =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let n,
              r = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (n = parseInt(
                g(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? r < e.loopedSlides - i / 2 ||
                    r > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (r = s
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      v(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r)
                  : r > e.slides.length - i
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    v(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r);
            } else e.slideTo(r);
          },
        },
        loop: {
          loopCreate: function () {
            const e = this,
              t = a(),
              { params: s, $wrapperEl: i } = e,
              n = i.children().length > 0 ? g(i.children()[0].parentNode) : i;
            n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let r = n.children("." + s.slideClass);
            if (s.loopFillGroupWithBlank) {
              const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
              if (e !== s.slidesPerGroup) {
                for (let i = 0; i < e; i += 1) {
                  const e = g(t.createElement("div")).addClass(
                    `${s.slideClass} ${s.slideBlankClass}`
                  );
                  n.append(e);
                }
                r = n.children("." + s.slideClass);
              }
            }
            "auto" !== s.slidesPerView ||
              s.loopedSlides ||
              (s.loopedSlides = r.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(s.loopedSlides || s.slidesPerView, 10)
              )),
              (e.loopedSlides += s.loopAdditionalSlides),
              e.loopedSlides > r.length &&
                e.params.loopedSlidesLimit &&
                (e.loopedSlides = r.length);
            const l = [],
              o = [];
            r.each((e, t) => {
              g(e).attr("data-swiper-slide-index", t);
            });
            for (let t = 0; t < e.loopedSlides; t += 1) {
              const e = t - Math.floor(t / r.length) * r.length;
              o.push(r.eq(e)[0]), l.unshift(r.eq(r.length - e - 1)[0]);
            }
            for (let e = 0; e < o.length; e += 1)
              n.append(g(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1)
              n.prepend(g(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
              activeIndex: t,
              slides: s,
              loopedSlides: i,
              allowSlidePrev: n,
              allowSlideNext: r,
              snapGrid: a,
              rtlTranslate: l,
            } = e;
            let o;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const d = -a[t] - e.getTranslate();
            if (t < i) {
              (o = s.length - 3 * i + t), (o += i);
              e.slideTo(o, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
            } else if (t >= s.length - i) {
              (o = -s.length + t + i), (o += i);
              e.slideTo(o, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
            }
            (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: s } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              s.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            if (
              this.support.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
              return;
            const t =
              "container" === this.params.touchEventsTarget
                ? this.el
                : this.wrapperEl;
            (t.style.cursor = "move"),
              (t.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            this.support.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode ||
              (this[
                "container" === this.params.touchEventsTarget
                  ? "el"
                  : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = a(),
              { params: s, support: i } = e;
            (e.onTouchStart = $.bind(e)),
              (e.onTouchMove = z.bind(e)),
              (e.onTouchEnd = A.bind(e)),
              s.cssMode && (e.onScroll = G.bind(e)),
              (e.onClick = D.bind(e)),
              i.touch && !_ && (t.addEventListener("touchstart", B), (_ = !0)),
              N(e, "on");
          },
          detachEvents: function () {
            N(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: s,
                loopedSlides: i = 0,
                params: n,
                $el: r,
              } = e,
              a = n.breakpoints;
            if (!a || (a && 0 === Object.keys(a).length)) return;
            const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
            if (!l || e.currentBreakpoint === l) return;
            const o = (l in a ? a[l] : void 0) || e.originalParams,
              d = q(e, n),
              c = q(e, o),
              p = n.enabled;
            d && !c
              ? (r.removeClass(
                  `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !d &&
                c &&
                (r.addClass(n.containerModifierClass + "grid"),
                ((o.grid.fill && "column" === o.grid.fill) ||
                  (!o.grid.fill && "column" === n.grid.fill)) &&
                  r.addClass(n.containerModifierClass + "grid-column"),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const s = n[t] && n[t].enabled,
                  i = o[t] && o[t].enabled;
                s && !i && e[t].disable(), !s && i && e[t].enable();
              });
            const u = o.direction && o.direction !== n.direction,
              h = n.loop && (o.slidesPerView !== n.slidesPerView || u);
            u && s && e.changeDirection(), C(e.params, o);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              p && !f ? e.disable() : !p && f && e.enable(),
              (e.currentBreakpoint = l),
              e.emit("_beforeBreakpoint", o),
              h &&
                s &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - i + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", o);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let i = !1;
            const n = o(),
              r = "window" === t ? n.innerHeight : s.clientHeight,
              a = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < a.length; e += 1) {
              const { point: r, value: l } = a[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = r)
                : l <= s.clientWidth && (i = r);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const {
                classNames: e,
                params: t,
                rtl: s,
                $el: i,
                device: n,
                support: r,
              } = this,
              a = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  t.direction,
                  { "pointer-events": !r.touch },
                  { "free-mode": this.params.freeMode && t.freeMode.enabled },
                  { autoheight: t.autoHeight },
                  { rtl: s },
                  { grid: t.grid && t.grid.rows > 1 },
                  {
                    "grid-column":
                      t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                  },
                  { android: n.android },
                  { ios: n.ios },
                  { "css-mode": t.cssMode },
                  { centered: t.cssMode && t.centeredSlides },
                  { "watch-progress": t.watchSlidesProgress },
                ],
                t.containerModifierClass
              );
            e.push(...a),
              i.addClass([...e].join(" ")),
              this.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, s, i, n, r) {
            const a = o();
            let l;
            function d() {
              r && r();
            }
            g(e).parent("picture")[0] || (e.complete && n)
              ? d()
              : t
              ? ((l = new a.Image()),
                (l.onload = d),
                (l.onerror = d),
                i && (l.sizes = i),
                s && (l.srcset = s),
                t && (l.src = t))
              : d();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const i = e.imagesToLoad[s];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      V = {};
    class W {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = C({}, s)),
          t && !s.el && (s.el = t),
          s.el && g(s.el).length > 1)
        ) {
          const e = [];
          return (
            g(s.el).each((t) => {
              const i = C({}, s, { el: t });
              e.push(new W(i));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = M()),
          (i.device = k({ userAgent: s.userAgent })),
          (i.browser = P()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
        const n = {};
        i.modules.forEach((e) => {
          e({
            swiper: i,
            extendParams: j(s, n),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const r = C({}, H, n);
        return (
          (i.params = C({}, r, V, s)),
          (i.originalParams = C({}, i.params)),
          (i.passedParams = C({}, s)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = g),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: t,
            classNames: [],
            slides: g(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: b(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        e = Math.min(Math.max(e, 0), 1);
        const s = this.minTranslate(),
          i = (this.maxTranslate() - s) * e + s;
        this.translateTo(i, void 0 === t ? 0 : t),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: a,
          activeIndex: l,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = i[l].swiperSlideSize;
          for (let s = l + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
          for (let s = l - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < i.length; e += 1) {
            (t ? n[e] + r[e] - n[l] < a : n[e] - n[l] < a) && (o += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            n[l] - n[e] < a && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${i}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = g(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = g(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children ? s.children(i()) : g(s).children(i());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = a().createElement("div");
          (n = g(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children("." + t.params.slideClass).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, $el: n, $wrapperEl: r, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        C(V, e);
      }
      static get extendedDefaults() {
        return V;
      }
      static get defaults() {
        return H;
      }
      static installModule(e) {
        W.prototype.__modules__ || (W.prototype.__modules__ = []);
        const t = W.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => W.installModule(e)), W)
          : (W.installModule(e), W);
      }
    }
    Object.keys(F).forEach((e) => {
      Object.keys(F[e]).forEach((t) => {
        W.prototype[t] = F[e][t];
      });
    }),
      W.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = o();
          let n = null,
            r = null;
          const a = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  r = i.requestAnimationFrame(() => {
                    const { width: s, height: i } = e;
                    let n = s,
                      r = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: i }) => {
                        (i && i !== e.el) ||
                          ((n = s ? s.width : (t[0] || t).inlineSize),
                          (r = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === s && r === i) || a();
                  });
                })),
                n.observe(e.el))
              : (i.addEventListener("resize", a),
                i.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              r && i.cancelAnimationFrame(r),
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                i.removeEventListener("resize", a),
                i.removeEventListener("orientationchange", l);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const n = [],
            r = o(),
            a = (e, t = {}) => {
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                n.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) a(t[e]);
                }
                a(e.$el[0], { childList: e.params.observeSlideChildren }),
                  a(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    var R = W;
    function X(e, t, s, i) {
      const n = a();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((r) => {
            if (!s[r] && !0 === s.auto) {
              let a = e.$el.children("." + i[r])[0];
              a ||
                ((a = n.createElement("div")),
                (a.className = i[r]),
                e.$el.append(a)),
                (s[r] = a),
                (t[r] = a);
            }
          }),
        s
      );
    }
    function Y(e = "") {
      return (
        "." +
        e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")
      );
    }
    R.use([
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const n = "swiper-pagination";
        let r;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: n + "-bullet",
            bulletActiveClass: n + "-bullet-active",
            modifierClass: n + "-",
            currentClass: n + "-current",
            totalClass: n + "-total",
            hiddenClass: n + "-hidden",
            progressbarFillClass: n + "-progressbar-fill",
            progressbarOppositeClass: n + "-progressbar-opposite",
            clickableClass: n + "-clickable",
            lockClass: n + "-lock",
            horizontalClass: n + "-horizontal",
            verticalClass: n + "-vertical",
            paginationDisabledClass: n + "-disabled",
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function l() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function o(t, s) {
          const { bulletActiveClass: i } = e.params.pagination;
          t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
        }
        function d() {
          const t = e.rtl,
            s = e.params.pagination;
          if (l()) return;
          const n =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            d = e.pagination.$el;
          let c;
          const p = e.params.loop
            ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((c = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                c > n - 1 - 2 * e.loopedSlides && (c -= n - 2 * e.loopedSlides),
                c > p - 1 && (c -= p),
                c < 0 && "bullets" !== e.params.paginationType && (c = p + c))
              : (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const i = e.pagination.bullets;
            let n, l, p;
            if (
              (s.dynamicBullets &&
                ((r = i
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                d.css(
                  e.isHorizontal() ? "width" : "height",
                  r * (s.dynamicMainBullets + 4) + "px"
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((a += c - (e.previousIndex - e.loopedSlides || 0)),
                  a > s.dynamicMainBullets - 1
                    ? (a = s.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (n = Math.max(c - a, 0)),
                (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                (p = (l + n) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${s.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              d.length > 1)
            )
              i.each((e) => {
                const t = g(e),
                  i = t.index();
                i === c && t.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (i >= n &&
                      i <= l &&
                      t.addClass(s.bulletActiveClass + "-main"),
                    i === n && o(t, "prev"),
                    i === l && o(t, "next"));
              });
            else {
              const t = i.eq(c),
                r = t.index();
              if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const t = i.eq(n),
                  a = i.eq(l);
                for (let e = n; e <= l; e += 1)
                  i.eq(e).addClass(s.bulletActiveClass + "-main");
                if (e.params.loop)
                  if (r >= i.length) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        s.bulletActiveClass + "-main"
                      );
                    i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                      s.bulletActiveClass + "-prev"
                    );
                  } else o(t, "prev"), o(a, "next");
                else o(t, "prev"), o(a, "next");
              }
            }
            if (s.dynamicBullets) {
              const n = Math.min(i.length, s.dynamicMainBullets + 4),
                a = (r * n - r) / 2 - p * r,
                l = t ? "right" : "left";
              i.css(e.isHorizontal() ? l : "top", a + "px");
            }
          }
          if (
            ("fraction" === s.type &&
              (d.find(Y(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
              d.find(Y(s.totalClass)).text(s.formatFractionTotal(p))),
            "progressbar" === s.type)
          ) {
            let t;
            t = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (c + 1) / p;
            let n = 1,
              r = 1;
            "horizontal" === t ? (n = i) : (r = i),
              d
                .find(Y(s.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (d.html(s.renderCustom(e, c + 1, p)), i("paginationRender", d[0]))
            : i("paginationUpdate", d[0]),
            e.params.watchOverflow &&
              e.enabled &&
              d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function c() {
          const t = e.params.pagination;
          if (l()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            n = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            let i = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              i > s &&
              (i = s);
            for (let s = 0; s < i; s += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, s, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            n.html(r), (e.pagination.bullets = n.find(Y(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            n.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              n.html(r)),
            "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
        }
        function p() {
          e.params.pagination = X(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let s = g(t.el);
          0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              s.length > 1 &&
              ((s = e.$el.find(t.el)),
              s.length > 1 &&
                (s = s.filter((t) => g(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            s.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (a = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              s.addClass(t.progressbarOppositeClass),
            t.clickable &&
              s.on("click", Y(t.bulletClass), function (t) {
                t.preventDefault();
                let s = g(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
              }),
            Object.assign(e.pagination, { $el: s, el: s[0] }),
            e.enabled || s.addClass(t.lockClass));
        }
        function u() {
          const t = e.params.pagination;
          if (l()) return;
          const s = e.pagination.$el;
          s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            s.removeClass(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && s.off("click", Y(t.bulletClass));
        }
        s("init", () => {
          !1 === e.params.pagination.enabled ? h() : (p(), c(), d());
        }),
          s("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && d();
          }),
          s("snapIndexChange", () => {
            e.params.loop || d();
          }),
          s("slidesLengthChange", () => {
            e.params.loop && (c(), d());
          }),
          s("snapGridLengthChange", () => {
            e.params.loop || (c(), d());
          }),
          s("destroy", () => {
            u();
          }),
          s("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            d();
          }),
          s("click", (t, s) => {
            const n = s.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !g(n).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                  (e.navigation.prevEl && n === e.navigation.prevEl))
              )
                return;
              const t = r.hasClass(e.params.pagination.hiddenClass);
              i(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          });
        const h = () => {
          e.$el.addClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.addClass(
                e.params.pagination.paginationDisabledClass
              ),
            u();
        };
        Object.assign(e.pagination, {
          enable: () => {
            e.$el.removeClass(e.params.pagination.paginationDisabledClass),
              e.pagination.$el &&
                e.pagination.$el.removeClass(
                  e.params.pagination.paginationDisabledClass
                ),
              p(),
              c(),
              d();
          },
          disable: h,
          render: c,
          update: d,
          init: p,
          destroy: u,
        });
      },
    ]);
    new R(".swiper", {
      slidesPerView: "auto",
      pagination: { el: ".swiper-pagination", clickable: !0 },
    }),
      s(5),
      s(6);
  },
]);
//# sourceMappingURL=bundle.js.map
