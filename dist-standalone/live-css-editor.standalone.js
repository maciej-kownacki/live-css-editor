var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  "use strict";
  var _a;
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function getAugmentedNamespace(n2) {
    if (n2.__esModule) return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          return Reflect.construct(f2, arguments, this.constructor);
        }
        return f2.apply(this, arguments);
      };
      a.prototype = f2.prototype;
    } else a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k2) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k2);
      Object.defineProperty(a, k2, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k2];
        }
      });
    });
    return a;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  var react = { exports: {} };
  var react_production_min = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
  function A$1(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z$1 && a[z$1] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B$1 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C$2 = Object.assign, D$2 = {};
  function E$1(a, b2, e) {
    this.props = a;
    this.context = b2;
    this.refs = D$2;
    this.updater = e || B$1;
  }
  E$1.prototype.isReactComponent = {};
  E$1.prototype.setState = function(a, b2) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b2, "setState");
  };
  E$1.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F$1() {
  }
  F$1.prototype = E$1.prototype;
  function G$1(a, b2, e) {
    this.props = a;
    this.context = b2;
    this.refs = D$2;
    this.updater = e || B$1;
  }
  var H$1 = G$1.prototype = new F$1();
  H$1.constructor = G$1;
  C$2(H$1, E$1.prototype);
  H$1.isPureReactComponent = true;
  var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
  function M$1(a, b2, e) {
    var d2, c2 = {}, k2 = null, h2 = null;
    if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$1.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
    var g2 = arguments.length - 2;
    if (1 === g2) c2.children = e;
    else if (1 < g2) {
      for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a && a.defaultProps) for (d2 in g2 = a.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
    return { $$typeof: l$1, type: a, key: k2, ref: h2, props: c2, _owner: K$2.current };
  }
  function N$1(a, b2) {
    return { $$typeof: l$1, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O$1(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l$1;
  }
  function escape(a) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b2[a2];
    });
  }
  var P$1 = /\/+/g;
  function Q$2(a, b2) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
  }
  function R$1(a, b2, e, d2, c2) {
    var k2 = typeof a;
    if ("undefined" === k2 || "boolean" === k2) a = null;
    var h2 = false;
    if (null === a) h2 = true;
    else switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$1:
            h2 = true;
        }
    }
    if (h2) return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$2(h2, 0) : d2, I$2(c2) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c2, b2, e, "", function(a2) {
      return a2;
    })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
    h2 = 0;
    d2 = "" === d2 ? "." : d2 + ":";
    if (I$2(a)) for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = d2 + Q$2(k2, g2);
      h2 += R$1(k2, b2, e, f2, c2);
    }
    else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$1(k2, b2, e, f2, c2);
    else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h2;
  }
  function S$2(a, b2, e) {
    if (null == a) return a;
    var d2 = [], c2 = 0;
    R$1(a, d2, "", "", function(a2) {
      return b2.call(e, a2, c2++);
    });
    return d2;
  }
  function T$2(a) {
    if (-1 === a._status) {
      var b2 = a._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
      }, function(b3) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
      });
      -1 === a._status && (a._status = 0, a._result = b2);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
  function X$2() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S$2, forEach: function(a, b2, e) {
    S$2(a, function() {
      b2.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b2 = 0;
    S$2(a, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a) {
    return S$2(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E$1;
  react_production_min.Fragment = p$3;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G$1;
  react_production_min.StrictMode = q$2;
  react_production_min.Suspense = w$1;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
  react_production_min.act = X$2;
  react_production_min.cloneElement = function(a, b2, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d2 = C$2({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
      for (f2 in b2) J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2) d2.children = e;
    else if (1 < f2) {
      g2 = Array(f2);
      for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
      d2.children = g2;
    }
    return { $$typeof: l$1, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u$1, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M$1;
  react_production_min.createFactory = function(a) {
    var b2 = M$1.bind(null, a);
    b2.type = a;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v$2, render: a };
  };
  react_production_min.isValidElement = O$1;
  react_production_min.lazy = function(a) {
    return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$2 };
  };
  react_production_min.memo = function(a, b2) {
    return { $$typeof: x$2, type: a, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a) {
    var b2 = V$2.transition;
    V$2.transition = {};
    try {
      a();
    } finally {
      V$2.transition = b2;
    }
  };
  react_production_min.unstable_act = X$2;
  react_production_min.useCallback = function(a, b2) {
    return U$2.current.useCallback(a, b2);
  };
  react_production_min.useContext = function(a) {
    return U$2.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U$2.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b2) {
    return U$2.current.useEffect(a, b2);
  };
  react_production_min.useId = function() {
    return U$2.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b2, e) {
    return U$2.current.useImperativeHandle(a, b2, e);
  };
  react_production_min.useInsertionEffect = function(a, b2) {
    return U$2.current.useInsertionEffect(a, b2);
  };
  react_production_min.useLayoutEffect = function(a, b2) {
    return U$2.current.useLayoutEffect(a, b2);
  };
  react_production_min.useMemo = function(a, b2) {
    return U$2.current.useMemo(a, b2);
  };
  react_production_min.useReducer = function(a, b2, e) {
    return U$2.current.useReducer(a, b2, e);
  };
  react_production_min.useRef = function(a) {
    return U$2.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U$2.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b2, e) {
    return U$2.current.useSyncExternalStore(a, b2, e);
  };
  react_production_min.useTransition = function() {
    return U$2.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  {
    react.exports = react_production_min;
  }
  var reactExports = react.exports;
  const React$2 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f$1 = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
  function q$1(c2, a, g2) {
    var b2, d2 = {}, e = null, h2 = null;
    void 0 !== g2 && (e = "" + g2);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h2 = a.ref);
    for (b2 in a) m$2.call(a, b2) && !p$2.hasOwnProperty(b2) && (d2[b2] = a[b2]);
    if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
    return { $$typeof: k, type: c2, key: e, ref: h2, props: d2, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q$1;
  reactJsxRuntime_production_min.jsxs = q$1;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var reactDom = { exports: {} };
  var reactDom_production_min = {};
  var scheduler = { exports: {} };
  var scheduler_production_min = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(exports$1) {
    function f2(a, b2) {
      var c2 = a.length;
      a.push(b2);
      a: for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e = a[d2];
        if (0 < g2(e, b2)) a[d2] = b2, a[c2] = e, c2 = d2;
        else break a;
      }
    }
    function h2(a) {
      return 0 === a.length ? null : a[0];
    }
    function k2(a) {
      if (0 === a.length) return null;
      var b2 = a[0], c2 = a.pop();
      if (c2 !== b2) {
        a[0] = c2;
        a: for (var d2 = 0, e = a.length, w2 = e >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g2(C2, c2)) n2 < e && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
          else if (n2 < e && 0 > g2(x2, c2)) a[d2] = x2, a[n2] = c2, d2 = n2;
          else break a;
        }
      }
      return b2;
    }
    function g2(a, b2) {
      var c2 = a.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports$1.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports$1.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a) {
      for (var b2 = h2(t2); null !== b2; ) {
        if (null === b2.callback) k2(t2);
        else if (b2.startTime <= a) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
        else break;
        b2 = h2(t2);
      }
    }
    function H2(a) {
      B2 = false;
      G2(a);
      if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a);
      }
    }
    function J2(a, b2) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
          var d2 = v2.callback;
          if ("function" === typeof d2) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e = d2(v2.expirationTime <= b2);
            b2 = exports$1.unstable_now();
            "function" === typeof e ? v2.callback = e : v2 === h2(r2) && k2(r2);
            G2(b2);
          } else k2(r2);
          v2 = h2(r2);
        }
        if (null !== v2) var w2 = true;
        else {
          var m2 = h2(t2);
          null !== m2 && K2(H2, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports$1.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a = exports$1.unstable_now();
        Q2 = a;
        var b2 = true;
        try {
          b2 = O2(true, a);
        } finally {
          b2 ? S2() : (N2 = false, O2 = null);
        }
      } else N2 = false;
    }
    var S2;
    if ("function" === typeof F2) S2 = function() {
      F2(R2);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else S2 = function() {
      D2(R2, 0);
    };
    function I2(a) {
      O2 = a;
      N2 || (N2 = true, S2());
    }
    function K2(a, b2) {
      L2 = D2(function() {
        a(exports$1.unstable_now());
      }, b2);
    }
    exports$1.unstable_IdlePriority = 5;
    exports$1.unstable_ImmediatePriority = 1;
    exports$1.unstable_LowPriority = 4;
    exports$1.unstable_NormalPriority = 3;
    exports$1.unstable_Profiling = null;
    exports$1.unstable_UserBlockingPriority = 2;
    exports$1.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports$1.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports$1.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports$1.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports$1.unstable_getFirstCallbackNode = function() {
      return h2(r2);
    };
    exports$1.unstable_next = function(a) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a();
      } finally {
        y2 = c2;
      }
    };
    exports$1.unstable_pauseExecution = function() {
    };
    exports$1.unstable_requestPaint = function() {
    };
    exports$1.unstable_runWithPriority = function(a, b2) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c2 = y2;
      y2 = a;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports$1.unstable_scheduleCallback = function(a, b2, c2) {
      var d2 = exports$1.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c2 + e;
      a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e, sortIndex: -1 };
      c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
      return a;
    };
    exports$1.unstable_shouldYield = M2;
    exports$1.unstable_wrapCallback = function(a) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  {
    scheduler.exports = scheduler_production_min;
  }
  var schedulerExports = scheduler.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var aa = reactExports, ca = schedulerExports;
  function p$1(a) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b2) {
    ha(a, b2);
    ha(a + "Capture", b2);
  }
  function ha(a, b2) {
    ea[a] = b2;
    for (a = 0; a < b2.length; a++) da.add(b2[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a)) return true;
    if (ja.call(la, a)) return false;
    if (ka.test(a)) return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b2, c2, d2) {
    if (null !== c2 && 0 === c2.type) return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2) return false;
        if (null !== c2) return !c2.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b2, c2, d2) {
    if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2)) return true;
    if (d2) return false;
    if (null !== c2) switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
    return false;
  }
  function v$1(a, b2, c2, d2, e, f2, g2) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d2;
    this.attributeNamespace = e;
    this.mustUseProperty = c2;
    this.propertyName = a;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v$1(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b2 = a[0];
    z[b2] = new v$1(b2, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v$1(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v$1(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v$1(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v$1(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b2 = a.replace(
      ra,
      sa
    );
    z[b2] = new v$1(b2, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b2 = a.replace(ra, sa);
    z[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b2 = a.replace(ra, sa);
    z[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b2, c2, d2) {
    var e = z.hasOwnProperty(b2) ? z[b2] : null;
    if (null !== e ? 0 !== e.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e, d2) && (c2 = null), d2 || null === e ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e.mustUseProperty ? a[e.propertyName] = null === c2 ? 3 === e.type ? false : "" : c2 : (b2 = e.attributeName, d2 = e.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e = e.type, c2 = 3 === e || 4 === e && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La) try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b2) {
    if (!a || Na) return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2) if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a.call(b2.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l2) {
          d2 = l2;
        }
        a();
      }
    } catch (l2) {
      if (l2 && d2 && "string" === typeof l2.stack) {
        for (var e = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; ) h2--;
        for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2]) {
                var k2 = "\n" + e[g2].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a.render;
        a = a.displayName;
        a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
      case Ha:
        b2 = a._payload;
        a = a._init;
        try {
          return Qa(a(b2));
        } catch (c2) {
        }
    }
    return null;
  }
  function Ra(a) {
    var b2 = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b2) return b2.displayName || b2.name || null;
        if ("string" === typeof b2) return b2;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b2 = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a) {
    var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
    if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e = c2.get, f2 = c2.set;
      Object.defineProperty(a, b2, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d2 = "" + a2;
        f2.call(this, a2);
      } });
      Object.defineProperty(a, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a2) {
        d2 = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b2];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return false;
    var b2 = a._valueTracker;
    if (!b2) return true;
    var c2 = b2.getValue();
    var d2 = "";
    a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d2;
    return a !== c2 ? (b2.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b2) {
      return a.body;
    }
  }
  function Ya(a, b2) {
    var c2 = b2.checked;
    return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
  }
  function Za(a, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a, b2) {
    b2 = b2.checked;
    null != b2 && ta(a, "checked", b2, false);
  }
  function bb(a, b2) {
    ab(a, b2);
    var c2 = Sa(b2.value), d2 = b2.type;
    if (null != c2) if ("number" === d2) {
      if (0 === c2 && "" === a.value || a.value != c2) a.value = "" + c2;
    } else a.value !== "" + c2 && (a.value = "" + c2);
    else if ("submit" === d2 || "reset" === d2) {
      a.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
  }
  function db(a, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
      b2 = "" + a._wrapperState.initialValue;
      c2 || b2 === a.value || (a.value = b2);
      a.defaultValue = b2;
    }
    c2 = a.name;
    "" !== c2 && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c2 && (a.name = c2);
  }
  function cb(a, b2, c2) {
    if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a, b2, c2, d2) {
    a = a.options;
    if (b2) {
      b2 = {};
      for (var e = 0; e < c2.length; e++) b2["$" + c2[e]] = true;
      for (c2 = 0; c2 < a.length; c2++) e = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e && (a[c2].selected = e), e && d2 && (a[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c2) {
          a[e].selected = true;
          d2 && (a[e].defaultSelected = true);
          return;
        }
        null !== b2 || a[e].disabled || (b2 = a[e]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a, b2) {
    if (null != b2.dangerouslySetInnerHTML) throw Error(p$1(91));
    return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2) throw Error(p$1(92));
        if (eb(c2)) {
          if (1 < c2.length) throw Error(p$1(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a, b2) {
    var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
    null != d2 && (a.defaultValue = "" + d2);
  }
  function jb(a) {
    var b2 = a.textContent;
    b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b2) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b2, c2, d2, e);
      });
    } : a;
  }(function(a, b2) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
      for (; b2.firstChild; ) a.appendChild(b2.firstChild);
    }
  });
  function ob(a, b2) {
    if (b2) {
      var c2 = a.firstChild;
      if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b2) {
      b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b2] = pb[a];
    });
  });
  function rb(a, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a, b2) {
    a = a.style;
    for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e) : a[c2] = e;
    }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b2) {
    if (b2) {
      if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$1(137, a));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children) throw Error(p$1(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$1(61));
      }
      if (null != b2.style && "object" !== typeof b2.style) throw Error(p$1(62));
    }
  }
  function vb(a, b2) {
    if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb) throw Error(p$1(280));
      var b2 = a.stateNode;
      b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a);
      if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
    }
  }
  function Gb(a, b2) {
    return a(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b2, c2) {
    if (Ib) return a(b2, c2);
    Ib = true;
    try {
      return Gb(a, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a, b2) {
    var c2 = a.stateNode;
    if (null === c2) return null;
    var d2 = Db(c2);
    if (null === d2) return null;
    c2 = d2[b2];
    a: switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d2;
        break a;
      default:
        a = false;
    }
    if (a) return null;
    if (c2 && "function" !== typeof c2) throw Error(p$1(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
  function Nb(a, b2, c2, d2, e, f2, g2, h2, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b2, c2, d2, e, f2, g2, h2, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b2, c2, d2, e, f2, g2, h2, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p$1(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a) {
    var b2 = a, c2 = a;
    if (a.alternate) for (; b2.return; ) b2 = b2.return;
    else {
      a = b2;
      do
        b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
      while (a);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b2 = a.memoizedState;
      null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
      if (null !== b2) return b2.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a) throw Error(p$1(188));
  }
  function Yb(a) {
    var b2 = a.alternate;
    if (!b2) {
      b2 = Vb(a);
      if (null === b2) throw Error(p$1(188));
      return b2 !== a ? null : a;
    }
    for (var c2 = a, d2 = b2; ; ) {
      var e = c2.return;
      if (null === e) break;
      var f2 = e.alternate;
      if (null === f2) {
        d2 = e.return;
        if (null !== d2) {
          c2 = d2;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child; f2; ) {
          if (f2 === c2) return Xb(e), a;
          if (f2 === d2) return Xb(e), b2;
          f2 = f2.sibling;
        }
        throw Error(p$1(188));
      }
      if (c2.return !== d2.return) c2 = e, d2 = f2;
      else {
        for (var g2 = false, h2 = e.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = e;
            d2 = f2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = e;
            c2 = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) {
          for (h2 = f2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = f2;
              d2 = e;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = f2;
              c2 = e;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) throw Error(p$1(189));
        }
      }
      if (c2.alternate !== d2) throw Error(p$1(190));
    }
    if (3 !== c2.tag) throw Error(p$1(188));
    return c2.stateNode.current === c2 ? a : b2;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b2 = $b(a);
      if (null !== b2) return b2;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b2) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b2) {
    var c2 = a.pendingLanes;
    if (0 === c2) return 0;
    var d2 = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
    if (0 !== g2) {
      var h2 = g2 & ~e;
      0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
    } else g2 = c2 & ~e, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
    if (0 === d2) return 0;
    if (0 !== b2 && b2 !== d2 && 0 === (b2 & e) && (e = d2 & -d2, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b2;
    0 !== (d2 & 4) && (d2 |= c2 & 16);
    b2 = a.entangledLanes;
    if (0 !== b2) for (a = a.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e = 1 << c2, d2 |= a[c2], b2 &= ~e;
    return d2;
  }
  function vc(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b2) {
    for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
      var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e[g2];
      if (-1 === k2) {
        if (0 === (h2 & c2) || 0 !== (h2 & d2)) e[g2] = vc(h2, b2);
      } else k2 <= b2 && (a.expiredLanes |= h2);
      f2 &= ~h2;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a);
    return b2;
  }
  function Ac(a, b2, c2) {
    a.pendingLanes |= b2;
    536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b2 = 31 - oc(b2);
    a[b2] = c2;
  }
  function Bc(a, b2) {
    var c2 = a.pendingLanes & ~b2;
    a.pendingLanes = b2;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b2;
    a.mutableReadLanes &= b2;
    a.entangledLanes &= b2;
    b2 = a.entanglements;
    var d2 = a.eventTimes;
    for (a = a.expirationTimes; 0 < c2; ) {
      var e = 31 - oc(c2), f2 = 1 << e;
      b2[e] = 0;
      d2[e] = -1;
      a[e] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a, b2) {
    var c2 = a.entangledLanes |= b2;
    for (a = a.entanglements; c2; ) {
      var d2 = 31 - oc(c2), e = 1 << d2;
      e & b2 | a[d2] & b2 && (a[d2] |= b2);
      c2 &= ~e;
    }
  }
  var C$1 = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b2) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a, b2, c2, d2, e, f2) {
    if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
    a.eventSystemFlags |= d2;
    b2 = a.targetContainers;
    null !== e && -1 === b2.indexOf(e) && b2.push(e);
    return a;
  }
  function Uc(a, b2, c2, d2, e) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a, b2, c2, d2, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b2, c2, d2, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b2, c2, d2, e), true;
      case "pointerover":
        var f2 = e.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e));
        return true;
      case "gotpointercapture":
        return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b2 = Wc(a.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a.blockedOn = b2;
            Ic(a.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn) return false;
    for (var b2 = a.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
      if (null === c2) {
        c2 = a.nativeEvent;
        var d2 = new c2.constructor(c2.type, c2);
        wb = d2;
        c2.target.dispatchEvent(d2);
        wb = null;
      } else return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a, b2, c2) {
    Xc(a) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b2) {
    a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b2(b3) {
      return ad(b3, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d2 = Kc[c2];
        d2.blockedOn === a && (d2.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b2, c2, d2) {
    var e = C$1, f2 = cd.transition;
    cd.transition = null;
    try {
      C$1 = 1, fd(a, b2, c2, d2);
    } finally {
      C$1 = e, cd.transition = f2;
    }
  }
  function gd(a, b2, c2, d2) {
    var e = C$1, f2 = cd.transition;
    cd.transition = null;
    try {
      C$1 = 4, fd(a, b2, c2, d2);
    } finally {
      C$1 = e, cd.transition = f2;
    }
  }
  function fd(a, b2, c2, d2) {
    if (dd) {
      var e = Yc(a, b2, c2, d2);
      if (null === e) hd(a, b2, d2, id, c2), Sc(a, d2);
      else if (Uc(e, a, b2, c2, d2)) d2.stopPropagation();
      else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f2 = Cb(e);
          null !== f2 && Ec(f2);
          f2 = Yc(a, b2, c2, d2);
          null === f2 && hd(a, b2, d2, id, c2);
          if (f2 === e) break;
          e = f2;
        }
        null !== e && d2.stopPropagation();
      } else hd(a, b2, d2, null, c2);
    }
  }
  var id = null;
  function Yc(a, b2, c2, d2) {
    id = null;
    a = xb(d2);
    a = Wc(a);
    if (null !== a) if (b2 = Vb(a), null === b2) a = null;
    else if (c2 = b2.tag, 13 === c2) {
      a = Wb(b2);
      if (null !== a) return a;
      a = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a = null;
    } else b2 !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a, b2 = ld, c2 = b2.length, d2, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
    for (a = 0; a < c2 && b2[a] === e[a]; a++) ;
    var g2 = c2 - a;
    for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e[f2 - d2]; d2++) ;
    return md = e.slice(a, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a) {
    var b2 = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b2(b3, d2, e, f2, g2) {
      this._reactName = b3;
      this._targetInst = e;
      this.type = d2;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c2 in a) a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a) return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b2 = Md[a.key] || a.key;
      if ("Unidentified" !== b2) return b2;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b2) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b2) {
    switch (a) {
      case "compositionend":
        return he(b2);
      case "keypress":
        if (32 !== b2.which) return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b2.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b2) {
    if (ie) return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length) return b2.char;
          if (b2.which) return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b2 = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
  }
  function ne(a, b2, c2, d2) {
    Eb(d2);
    b2 = oe(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b2 = ue(a);
    if (Wa(b2)) return a;
  }
  function ve(a, b2) {
    if ("change" === a) return b2;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b2 = [];
      ne(b2, qe, a, xb(a));
      Jb(re, b2);
    }
  }
  function Ce(a, b2, c2) {
    "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
  }
  function Ee(a, b2) {
    if ("click" === a) return te(b2);
  }
  function Fe(a, b2) {
    if ("input" === a || "change" === a) return te(b2);
  }
  function Ge(a, b2) {
    return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b2) {
    if (He(a, b2)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
    var c2 = Object.keys(a), d2 = Object.keys(b2);
    if (c2.length !== d2.length) return false;
    for (d2 = 0; d2 < c2.length; d2++) {
      var e = c2[d2];
      if (!ja.call(b2, e) || !He(a[e], b2[e])) return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Ke(a, b2) {
    var c2 = Je(a);
    a = 0;
    for (var d2; c2; ) {
      if (3 === c2.nodeType) {
        d2 = a + c2.textContent.length;
        if (a <= b2 && d2 >= b2) return { node: c2, offset: b2 - a };
        a = d2;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je(c2);
    }
  }
  function Le(a, b2) {
    return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d2) {
        c2 = false;
      }
      if (c2) a = b2.contentWindow;
      else break;
      b2 = Xa(a.document);
    }
    return b2;
  }
  function Ne(a) {
    var b2 = a && a.nodeName && a.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
      if (null !== d2 && Ne(c2)) {
        if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
        else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c2.textContent.length, f2 = Math.min(d2.start, e);
          d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e);
          !a.extend && f2 > d2 && (e = d2, d2 = f2, f2 = e);
          e = Ke(c2, f2);
          var g2 = Ke(
            c2,
            d2
          );
          e && g2 && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
        }
      }
      b2 = [];
      for (a = c2; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++) a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b2, c2) {
    var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
  }
  function Ve(a, b2) {
    var c2 = {};
    c2[a.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a] = "webkit" + b2;
    c2["Moz" + a] = "moz" + b2;
    return c2;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b2 = We[a], c2;
    for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a] = b2[c2];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b2) {
    df.set(a, b2);
    fa(b2, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b2, c2) {
    var d2 = a.type || "unknown-event";
    a.currentTarget = c2;
    Ub(d2, b2, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a.length; c2++) {
      var d2 = a[c2], e = d2.event;
      d2 = d2.listeners;
      a: {
        var f2 = void 0;
        if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped()) break a;
          nf(e, h2, l2);
          f2 = k2;
        }
        else for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped()) break a;
          nf(e, h2, l2);
          f2 = k2;
        }
      }
    }
    if (Qb) throw a = Rb, Qb = false, Rb = null, a;
  }
  function D$1(a, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d2 = a + "__bubble";
    c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
  }
  function qf(a, b2, c2) {
    var d2 = 0;
    b2 && (d2 |= 4);
    pf(c2, a, d2, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
      });
      var b2 = 9 === a.nodeType ? a : a.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a, b2, c2, d2) {
    switch (jd(b2)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c2 = e.bind(null, b2, c2, a);
    e = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
    d2 ? void 0 !== e ? a.addEventListener(b2, c2, { capture: true, passive: e }) : a.addEventListener(b2, c2, true) : void 0 !== e ? a.addEventListener(b2, c2, { passive: e }) : a.addEventListener(b2, c2, false);
  }
  function hd(a, b2, c2, d2, e) {
    var f2 = d2;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
      if (null === d2) return;
      var g2 = d2.tag;
      if (3 === g2 || 4 === g2) {
        var h2 = d2.stateNode.containerInfo;
        if (h2 === e || 8 === h2.nodeType && h2.parentNode === e) break;
        if (4 === g2) for (g2 = d2.return; null !== g2; ) {
          var k2 = g2.tag;
          if (3 === k2 || 4 === k2) {
            if (k2 = g2.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
          }
          g2 = g2.return;
        }
        for (; null !== h2; ) {
          g2 = Wc(h2);
          if (null === g2) return;
          k2 = g2.tag;
          if (5 === k2 || 6 === k2) {
            d2 = f2 = g2;
            continue a;
          }
          h2 = h2.parentNode;
        }
      }
      d2 = d2.return;
    }
    Jb(function() {
      var d3 = f2, e2 = xb(c2), g3 = [];
      a: {
        var h3 = df.get(a);
        if (void 0 !== h3) {
          var k3 = td, n2 = a;
          switch (a) {
            case "keypress":
              if (0 === od(c2)) break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
          t2 = [];
          for (var w2 = d3, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2) break;
            w2 = w2.return;
          }
          0 < t2.length && (h3 = new k3(h3, n2, null, c2, e2), g3.push({ event: h3, listeners: t2 }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h3 = "mouseover" === a || "pointerover" === a;
          k3 = "mouseout" === a || "pointerout" === a;
          if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
          if (k3 || h3) {
            h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
            if (k3) {
              if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
            } else k3 = null, n2 = d3;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h3 : ue(k3);
              u2 = null == n2 ? h3 : ue(n2);
              h3 = new t2(F2, w2 + "leave", k3, c2, e2);
              h3.target = J2;
              h3.relatedTarget = u2;
              F2 = null;
              Wc(e2) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2) b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2)) w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2)) u2++;
                for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
              else t2 = null;
              null !== k3 && wf(g3, h3, k3, t2, false);
              null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
            }
          }
        }
        a: {
          h3 = d3 ? ue(d3) : window;
          k3 = h3.nodeName && h3.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve;
          else if (me(h3)) if (we) na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
          else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
          if (na && (na = na(a, d3))) {
            ne(g3, na, c2, e2);
            break a;
          }
          xa && xa(a, h3, d3);
          "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
        }
        xa = d3 ? ue(d3) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d3, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g3, c2, e2);
            break;
          case "selectionchange":
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g3, c2, e2);
        }
        var $a;
        if (ae) b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c2) : ke(a, c2)) d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g3.push({ event: e2, listeners: d3 }), e2.data = $a);
      }
      se(g3, b2);
    });
  }
  function tf(a, b2, c2) {
    return { instance: a, listener: b2, currentTarget: c2 };
  }
  function oe(a, b2) {
    for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
      var e = a, f2 = e.stateNode;
      5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e)));
      a = a.return;
    }
    return d2;
  }
  function vf(a) {
    if (null === a) return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b2, c2, d2, e) {
    for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
      var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
      if (null !== k2 && k2 === d2) break;
      5 === h2.tag && null !== l2 && (h2 = l2, e ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
      c2 = c2.return;
    }
    0 !== g2.length && a.push({ event: b2, listeners: g2 });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b2, c2) {
    b2 = zf(b2);
    if (zf(a) !== b2 && c2) throw Error(p$1(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b2) {
    return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b2) {
    var c2 = b2, d2 = 0;
    do {
      var e = c2.nextSibling;
      a.removeChild(c2);
      if (e && 8 === e.nodeType) if (c2 = e.data, "/$" === c2) {
        if (0 === d2) {
          a.removeChild(e);
          bd(b2);
          return;
        }
        d2--;
      } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
      c2 = e;
    } while (c2);
    bd(b2);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b2 = a.nodeType;
      if (1 === b2 || 3 === b2) break;
      if (8 === b2) {
        b2 = a.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
        if ("/$" === b2) return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b2 = 0; a; ) {
      if (8 === a.nodeType) {
        var c2 = a.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2) return a;
          b2--;
        } else "/$" === c2 && b2++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b2 = a[Of];
    if (b2) return b2;
    for (var c2 = a.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child) for (a = Mf(a); null !== a; ) {
          if (c2 = a[Of]) return c2;
          a = Mf(a);
        }
        return b2;
      }
      a = c2;
      c2 = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p$1(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a, b2) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b2;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b2) {
    var c2 = a.type.contextTypes;
    if (!c2) return Vf;
    var d2 = a.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c2) e[f2] = b2[f2];
    d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b2, c2) {
    if (H.current !== Vf) throw Error(p$1(168));
    G(H, b2);
    G(Wf, c2);
  }
  function bg(a, b2, c2) {
    var d2 = a.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d2.getChildContext) return c2;
    d2 = d2.getChildContext();
    for (var e in d2) if (!(e in b2)) throw Error(p$1(108, Ra(a) || "Unknown", e));
    return A({}, c2, d2);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b2, c2) {
    var d2 = a.stateNode;
    if (!d2) throw Error(p$1(169));
    c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b2 = C$1;
      try {
        var c2 = eg;
        for (C$1 = 1; a < c2.length; a++) {
          var d2 = c2[a];
          do
            d2 = d2(true);
          while (null !== d2);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C$1 = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b2;
  }
  function ug(a, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d2 = rg;
    a = sg;
    var e = 32 - oc(d2) - 1;
    d2 &= ~(1 << e);
    c2 += 1;
    var f2 = 32 - oc(b2) + e;
    if (30 < f2) {
      var g2 = e - e % 5;
      f2 = (d2 & (1 << g2) - 1).toString(32);
      d2 >>= g2;
      e -= g2;
      rg = 1 << 32 - oc(b2) + e | c2 << e | d2;
      sg = f2 + a;
    } else rg = 1 << f2 | c2 << e | d2, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I$1 = false, zg = null;
  function Ag(a, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a;
    b2 = a.deletions;
    null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
  }
  function Cg(a, b2) {
    switch (a.tag) {
      case 5:
        var c2 = a.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I$1) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a, b2)) {
          if (Dg(a)) throw Error(p$1(418));
          b2 = Lf(c2.nextSibling);
          var d2 = xg;
          b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I$1 = false, xg = a);
        }
      } else {
        if (Dg(a)) throw Error(p$1(418));
        a.flags = a.flags & -4097 | 2;
        I$1 = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg) return false;
    if (!I$1) return Fg(a), I$1 = true, false;
    var b2;
    (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a)) throw Hg(), Error(p$1(418));
      for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(p$1(317));
      a: {
        a = a.nextSibling;
        for (b2 = 0; a; ) {
          if (8 === a.nodeType) {
            var c2 = a.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b2--;
            } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; ) a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I$1 = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b2, c2) {
    a = c2.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag) throw Error(p$1(309));
          var d2 = c2.stateNode;
        }
        if (!d2) throw Error(p$1(147, a));
        var e = d2, f2 = "" + a;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
        b2 = function(a2) {
          var b3 = e.refs;
          null === a2 ? delete b3[f2] : b3[f2] = a2;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a) throw Error(p$1(284));
      if (!c2._owner) throw Error(p$1(290, a));
    }
    return a;
  }
  function Mg(a, b2) {
    a = Object.prototype.toString.call(b2);
    throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
  }
  function Ng(a) {
    var b2 = a._init;
    return b2(a._payload);
  }
  function Og(a) {
    function b2(b3, c3) {
      if (a) {
        var d3 = b3.deletions;
        null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
      }
    }
    function c2(c3, d3) {
      if (!a) return null;
      for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
      return null;
    }
    function d2(a2, b3) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
      return a2;
    }
    function e(a2, b3) {
      a2 = Pg(a2, b3);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f2(b3, c3, d3) {
      b3.index = d3;
      if (!a) return b3.flags |= 1048576, c3;
      d3 = b3.alternate;
      if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
      b3.flags |= 2;
      return c3;
    }
    function g2(b3) {
      a && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h2(a2, b3, c3, d3) {
      if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a2.mode, d3), b3.return = a2, b3;
      b3 = e(b3, c3);
      b3.return = a2;
      return b3;
    }
    function k2(a2, b3, c3, d3) {
      var f3 = c3.type;
      if (f3 === ya) return m2(a2, b3, c3.props.children, d3, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e(b3, c3.props), d3.ref = Lg(a2, b3, c3), d3.return = a2, d3;
      d3 = Rg(c3.type, c3.key, c3.props, null, a2.mode, d3);
      d3.ref = Lg(a2, b3, c3);
      d3.return = a2;
      return d3;
    }
    function l2(a2, b3, c3, d3) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a2.mode, d3), b3.return = a2, b3;
      b3 = e(b3, c3.children || []);
      b3.return = a2;
      return b3;
    }
    function m2(a2, b3, c3, d3, f3) {
      if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a2.mode, d3, f3), b3.return = a2, b3;
      b3 = e(b3, c3);
      b3.return = a2;
      return b3;
    }
    function q2(a2, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c3), b3.return = a2, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Lg(a2, null, b3), c3.return = a2, c3;
          case wa:
            return b3 = Sg(b3, a2.mode, c3), b3.return = a2, b3;
          case Ha:
            var d3 = b3._init;
            return q2(a2, d3(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c3, null), b3.return = a2, b3;
        Mg(a2, b3);
      }
      return null;
    }
    function r2(a2, b3, c3, d3) {
      var e2 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e2 ? null : h2(a2, b3, "" + c3, d3);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e2 ? k2(a2, b3, c3, d3) : null;
          case wa:
            return c3.key === e2 ? l2(a2, b3, c3, d3) : null;
          case Ha:
            return e2 = c3._init, r2(
              a2,
              b3,
              e2(c3._payload),
              d3
            );
        }
        if (eb(c3) || Ka(c3)) return null !== e2 ? null : m2(a2, b3, c3, d3, null);
        Mg(a2, c3);
      }
      return null;
    }
    function y2(a2, b3, c3, d3, e2) {
      if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e2);
      if ("object" === typeof d3 && null !== d3) {
        switch (d3.$$typeof) {
          case va:
            return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e2);
          case wa:
            return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e2);
          case Ha:
            var f3 = d3._init;
            return y2(a2, b3, c3, f3(d3._payload), e2);
        }
        if (eb(d3) || Ka(d3)) return a2 = a2.get(c3) || null, m2(b3, a2, d3, e2, null);
        Mg(b3, d3);
      }
      return null;
    }
    function n2(e2, g3, h3, k3) {
      for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e2, u2, h3[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a && u2 && null === n3.alternate && b2(e2, u2);
        g3 = f2(n3, g3, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h3.length) return c2(e2, u2), I$1 && tg(e2, w2), l3;
      if (null === u2) {
        for (; w2 < h3.length; w2++) u2 = q2(e2, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I$1 && tg(e2, w2);
        return l3;
      }
      for (u2 = d2(e2, u2); w2 < h3.length; w2++) x2 = y2(u2, e2, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a && u2.forEach(function(a2) {
        return b2(e2, a2);
      });
      I$1 && tg(e2, w2);
      return l3;
    }
    function t2(e2, g3, h3, k3) {
      var l3 = Ka(h3);
      if ("function" !== typeof l3) throw Error(p$1(150));
      h3 = l3.call(h3);
      if (null == h3) throw Error(p$1(151));
      for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r2(e2, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a && m3 && null === t3.alternate && b2(e2, m3);
        g3 = f2(t3, g3, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done) return c2(
        e2,
        m3
      ), I$1 && tg(e2, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I$1 && tg(e2, w2);
        return l3;
      }
      for (m3 = d2(e2, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a && m3.forEach(function(a2) {
        return b2(e2, a2);
      });
      I$1 && tg(e2, w2);
      return l3;
    }
    function J2(a2, d3, f3, h3) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a2, l3.sibling);
                      d3 = e(l3, f3.props.children);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                    c2(a2, l3.sibling);
                    d3 = e(l3, f3.props);
                    d3.ref = Lg(a2, l3, f3);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                  c2(a2, l3);
                  break;
                } else b2(a2, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d3 = Tg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d3, f3), h3.return = a2, a2 = h3);
            }
            return g2(a2);
          case wa:
            a: {
              for (l3 = f3.key; null !== d3; ) {
                if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
                else b2(a2, d3);
                d3 = d3.sibling;
              }
              d3 = Sg(f3, a2.mode, h3);
              d3.return = a2;
              a2 = d3;
            }
            return g2(a2);
          case Ha:
            return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
        }
        if (eb(f3)) return n2(a2, d3, f3, h3);
        if (Ka(f3)) return t2(a2, d3, f3, h3);
        Mg(a2, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Qg(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
    }
    return J2;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b2 = Wg.current;
    E(Wg);
    a._currentValue = b2;
  }
  function bh(a, b2, c2) {
    for (; null !== a; ) {
      var d2 = a.alternate;
      (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
      if (a === c2) break;
      a = a.return;
    }
  }
  function ch(a, b2) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
  }
  function eh(a) {
    var b2 = a._currentValue;
    if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
      if (null === Xg) throw Error(p$1(308));
      Yg = a;
      Xg.dependencies = { lanes: 0, firstContext: a };
    } else Yg = Yg.next = a;
    return b2;
  }
  var fh = null;
  function gh(a) {
    null === fh ? fh = [a] : fh.push(a);
  }
  function hh(a, b2, c2, d2) {
    var e = b2.interleaved;
    null === e ? (c2.next = c2, gh(b2)) : (c2.next = e.next, e.next = c2);
    b2.interleaved = c2;
    return ih(a, d2);
  }
  function ih(a, b2) {
    a.lanes |= b2;
    var c2 = a.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a;
    for (a = a.return; null !== a; ) a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a, b2) {
    a = a.updateQueue;
    b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function mh(a, b2) {
    return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a, b2, c2) {
    var d2 = a.updateQueue;
    if (null === d2) return null;
    d2 = d2.shared;
    if (0 !== (K$1 & 2)) {
      var e = d2.pending;
      null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
      d2.pending = b2;
      return ih(a, c2);
    }
    e = d2.interleaved;
    null === e ? (b2.next = b2, gh(d2)) : (b2.next = e.next, e.next = b2);
    d2.interleaved = b2;
    return ih(a, c2);
  }
  function oh(a, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d2 = b2.lanes;
      d2 &= a.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a, c2);
    }
  }
  function ph(a, b2) {
    var c2 = a.updateQueue, d2 = a.alternate;
    if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
      var e = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e = f2 = g2 : f2 = f2.next = g2;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
      } else e = f2 = b2;
      c2 = { baseState: d2.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
      a.updateQueue = c2;
      return;
    }
    a = c2.lastBaseUpdate;
    null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function qh(a, b2, c2, d2) {
    var e = a.updateQueue;
    jh = false;
    var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
    if (null !== h2) {
      e.shared.pending = null;
      var k2 = h2, l2 = k2.next;
      k2.next = null;
      null === g2 ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m2 = a.alternate;
      null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e.baseState;
      g2 = 0;
      m2 = l2 = k2 = null;
      h2 = f2;
      do {
        var r2 = h2.lane, y2 = h2.eventTime;
        if ((d2 & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var n2 = a, t2 = h2;
            r2 = b2;
            y2 = c2;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                if (null === r2 || void 0 === r2) break a;
                q2 = A({}, q2, r2);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h2] : r2.push(h2));
        } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
        h2 = h2.next;
        if (null === h2) if (h2 = e.shared.pending, null === h2) break;
        else r2 = h2, h2 = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e.baseState = k2;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m2;
      b2 = e.shared.interleaved;
      if (null !== b2) {
        e = b2;
        do
          g2 |= e.lane, e = e.next;
        while (e !== b2);
      } else null === f2 && (e.shared.lanes = 0);
      rh |= g2;
      a.lanes = g2;
      a.memoizedState = q2;
    }
  }
  function sh(a, b2, c2) {
    a = b2.effects;
    b2.effects = null;
    if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e = d2.callback;
      if (null !== e) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e) throw Error(p$1(191, e));
        e.call(d2);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a) {
    if (a === th) throw Error(p$1(174));
    return a;
  }
  function yh(a, b2) {
    G(wh, b2);
    G(vh, a);
    G(uh, th);
    a = b2.nodeType;
    switch (a) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
    }
    E(uh);
    G(uh, b2);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b2 = xh(uh.current);
    var c2 = lb(b2, a.type);
    b2 !== c2 && (G(vh, a), G(uh, c2));
  }
  function Bh(a) {
    vh.current === a && (E(uh), E(vh));
  }
  var L$1 = Uf(0);
  function Ch(a) {
    for (var b2 = a; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128)) return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a) return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p$1(321));
  }
  function Mh(a, b2) {
    if (null === b2) return false;
    for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++) if (!He(a[c2], b2[c2])) return false;
    return true;
  }
  function Nh(a, b2, c2, d2, e, f2) {
    Hh = f2;
    M = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c2(d2, e);
    if (Jh) {
      f2 = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f2) throw Error(p$1(301));
        f2 += 1;
        O = N = null;
        b2.updateQueue = null;
        Fh.current = Qh;
        a = c2(d2, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b2 = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b2) throw Error(p$1(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;
    var b2 = null === O ? M.memoizedState : O.next;
    if (null !== b2) O = b2, N = a;
    else {
      if (null === a) throw Error(p$1(310));
      N = a;
      a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }
  function Vh(a, b2) {
    return "function" === typeof b2 ? b2(a) : b2;
  }
  function Wh(a) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p$1(311));
    c2.lastRenderedReducer = a;
    var d2 = N, e = d2.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e) {
        var g2 = e.next;
        e.next = f2.next;
        f2.next = g2;
      }
      d2.baseQueue = e = f2;
      c2.pending = null;
    }
    if (null !== e) {
      f2 = e.next;
      d2 = d2.baseState;
      var h2 = g2 = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
          M.lanes |= m2;
          rh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g2 = d2 : k2.next = h2;
      He(d2, b2.memoizedState) || (dh = true);
      b2.memoizedState = d2;
      b2.baseState = g2;
      b2.baseQueue = k2;
      c2.lastRenderedState = d2;
    }
    a = c2.interleaved;
    if (null !== a) {
      e = a;
      do
        f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
      while (e !== a);
    } else null === e && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function Xh(a) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p$1(311));
    c2.lastRenderedReducer = a;
    var d2 = c2.dispatch, e = c2.pending, f2 = b2.memoizedState;
    if (null !== e) {
      c2.pending = null;
      var g2 = e = e.next;
      do
        f2 = a(f2, g2.action), g2 = g2.next;
      while (g2 !== e);
      He(f2, b2.memoizedState) || (dh = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d2];
  }
  function Yh() {
  }
  function Zh(a, b2) {
    var c2 = M, d2 = Uh(), e = b2(), f2 = !He(d2.memoizedState, e);
    f2 && (d2.memoizedState = e, dh = true);
    d2 = d2.queue;
    $h(ai.bind(null, c2, d2, a), [a]);
    if (d2.getSnapshot !== b2 || f2 || null !== O && O.memoizedState.tag & 1) {
      c2.flags |= 2048;
      bi(9, ci.bind(null, c2, d2, e, b2), void 0, null);
      if (null === Q$1) throw Error(p$1(349));
      0 !== (Hh & 30) || di(c2, b2, e);
    }
    return e;
  }
  function di(a, b2, c2) {
    a.flags |= 16384;
    a = { getSnapshot: b2, value: c2 };
    b2 = M.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
  }
  function ci(a, b2, c2, d2) {
    b2.value = c2;
    b2.getSnapshot = d2;
    ei(b2) && fi(a);
  }
  function ai(a, b2, c2) {
    return c2(function() {
      ei(b2) && fi(a);
    });
  }
  function ei(a) {
    var b2 = a.getSnapshot;
    a = a.value;
    try {
      var c2 = b2();
      return !He(a, c2);
    } catch (d2) {
      return true;
    }
  }
  function fi(a) {
    var b2 = ih(a, 1);
    null !== b2 && gi(b2, a, 1, -1);
  }
  function hi(a) {
    var b2 = Th();
    "function" === typeof a && (a = a());
    b2.memoizedState = b2.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b2.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b2.memoizedState, a];
  }
  function bi(a, b2, c2, d2) {
    a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
    b2 = M.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b2, c2, d2) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
  }
  function li(a, b2, c2, d2) {
    var e = Uh();
    d2 = void 0 === d2 ? null : d2;
    var f2 = void 0;
    if (null !== N) {
      var g2 = N.memoizedState;
      f2 = g2.destroy;
      if (null !== d2 && Mh(d2, g2.deps)) {
        e.memoizedState = bi(b2, c2, f2, d2);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b2, c2, f2, d2);
  }
  function mi(a, b2) {
    return ki(8390656, 8, a, b2);
  }
  function $h(a, b2) {
    return li(2048, 8, a, b2);
  }
  function ni(a, b2) {
    return li(4, 2, a, b2);
  }
  function oi(a, b2) {
    return li(4, 4, a, b2);
  }
  function pi(a, b2) {
    if ("function" === typeof b2) return a = a(), b2(a), function() {
      b2(null);
    };
    if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
      b2.current = null;
    };
  }
  function qi(a, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
    return li(4, 4, pi.bind(null, b2, a), c2);
  }
  function ri() {
  }
  function si(a, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    c2.memoizedState = [a, b2];
    return a;
  }
  function ti(a, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    a = a();
    c2.memoizedState = [a, b2];
    return a;
  }
  function ui(a, b2, c2) {
    if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c2;
    He(c2, b2) || (c2 = yc(), M.lanes |= c2, rh |= c2, a.baseState = true);
    return b2;
  }
  function vi(a, b2) {
    var c2 = C$1;
    C$1 = 0 !== c2 && 4 > c2 ? c2 : 4;
    a(true);
    var d2 = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b2();
    } finally {
      C$1 = c2, Gh.transition = d2;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b2, c2) {
    var d2 = yi(a);
    c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b2, c2);
    else if (c2 = hh(a, b2, c2, d2), null !== c2) {
      var e = R();
      gi(c2, a, d2, e);
      Bi(c2, b2, d2);
    }
  }
  function ii(a, b2, c2) {
    var d2 = yi(a), e = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b2, e);
    else {
      var f2 = a.alternate;
      if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e.hasEagerState = true;
        e.eagerState = h2;
        if (He(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e.next = e, gh(b2)) : (e.next = k2.next, k2.next = e);
          b2.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
      c2 = hh(a, b2, e, d2);
      null !== c2 && (e = R(), gi(c2, a, d2, e), Bi(c2, b2, d2));
    }
  }
  function zi(a) {
    var b2 = a.alternate;
    return a === M || null !== b2 && b2 === M;
  }
  function Ai(a, b2) {
    Jh = Ih = true;
    var c2 = a.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a.pending = b2;
  }
  function Bi(a, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d2 = b2.lanes;
      d2 &= a.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a, c2);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b2) {
    Th().memoizedState = [a, void 0 === b2 ? null : b2];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b2, a),
      c2
    );
  }, useLayoutEffect: function(a, b2) {
    return ki(4194308, 4, a, b2);
  }, useInsertionEffect: function(a, b2) {
    return ki(4, 2, a, b2);
  }, useMemo: function(a, b2) {
    var c2 = Th();
    b2 = void 0 === b2 ? null : b2;
    a = a();
    c2.memoizedState = [a, b2];
    return a;
  }, useReducer: function(a, b2, c2) {
    var d2 = Th();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
    d2.queue = a;
    a = a.dispatch = xi.bind(null, M, a);
    return [d2.memoizedState, a];
  }, useRef: function(a) {
    var b2 = Th();
    a = { current: a };
    return b2.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b2 = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b2, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b2, c2) {
    var d2 = M, e = Th();
    if (I$1) {
      if (void 0 === c2) throw Error(p$1(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === Q$1) throw Error(p$1(349));
      0 !== (Hh & 30) || di(d2, b2, c2);
    }
    e.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e.queue = f2;
    mi(ai.bind(
      null,
      d2,
      f2,
      a
    ), [a]);
    d2.flags |= 2048;
    bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a = Th(), b2 = Q$1.identifierPrefix;
    if (I$1) {
      var c2 = sg;
      var d2 = rg;
      c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Kh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b2 = Uh();
      return ui(b2, N.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b2 = Uh().memoizedState;
      return [a, b2];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b2 = Uh();
    return null === N ? b2.memoizedState = a : ui(b2, N.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b2 = Uh().memoizedState;
    return [a, b2];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a, b2) {
    if (a && a.defaultProps) {
      b2 = A({}, b2);
      a = a.defaultProps;
      for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
      return b2;
    }
    return b2;
  }
  function Di(a, b2, c2, d2) {
    b2 = a.memoizedState;
    c2 = c2(d2, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
    a.memoizedState = c2;
    0 === a.lanes && (a.updateQueue.baseState = c2);
  }
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b2, c2) {
    a = a._reactInternals;
    var d2 = R(), e = yi(a), f2 = mh(d2, e);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a, f2, e);
    null !== b2 && (gi(b2, a, e, d2), oh(b2, a, e));
  }, enqueueReplaceState: function(a, b2, c2) {
    a = a._reactInternals;
    var d2 = R(), e = yi(a), f2 = mh(d2, e);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a, f2, e);
    null !== b2 && (gi(b2, a, e, d2), oh(b2, a, e));
  }, enqueueForceUpdate: function(a, b2) {
    a = a._reactInternals;
    var c2 = R(), d2 = yi(a), e = mh(c2, d2);
    e.tag = 2;
    void 0 !== b2 && null !== b2 && (e.callback = b2);
    b2 = nh(a, e, d2);
    null !== b2 && (gi(b2, a, d2, c2), oh(b2, a, d2));
  } };
  function Fi(a, b2, c2, d2, e, f2, g2) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e, f2) : true;
  }
  function Gi(a, b2, c2) {
    var d2 = false, e = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e) : Vf);
    b2 = new b2(c2, f2);
    a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = Ei;
    a.stateNode = b2;
    b2._reactInternals = a;
    d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function Hi(a, b2, c2, d2) {
    a = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
    b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
  }
  function Ii(a, b2, c2, d2) {
    var e = a.stateNode;
    e.props = c2;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b2) ? Xf : H.current, e.context = Yf(a, f2));
    e.state = a.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (Di(a, b2, f2, c2), e.state = a.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c2, e, d2), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b2) {
    try {
      var c2 = "", d2 = b2;
      do
        c2 += Pa(d2), d2 = d2.return;
      while (d2);
      var e = c2;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a, source: b2, stack: e, digest: null };
  }
  function Ki(a, b2, c2) {
    return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Li(a, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d2 = b2.value;
    c2.callback = function() {
      Oi || (Oi = true, Pi = d2);
      Li(a, b2);
    };
    return c2;
  }
  function Qi(a, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    var d2 = a.type.getDerivedStateFromError;
    if ("function" === typeof d2) {
      var e = b2.value;
      c2.payload = function() {
        return d2(e);
      };
      c2.callback = function() {
        Li(a, b2);
      };
    }
    var f2 = a.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Li(a, b2);
      "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Si(a, b2, c2) {
    var d2 = a.pingCache;
    if (null === d2) {
      d2 = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d2.set(b2, e);
    } else e = d2.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d2.set(b2, e));
    e.has(c2) || (e.add(c2), a = Ti.bind(null, a, b2, c2), b2.then(a, a));
  }
  function Ui(a) {
    do {
      var b2;
      if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b2, c2, d2, e) {
    if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a, b2, c2, d2) {
    b2.child = null === a ? Vg(b2, null, c2, d2) : Ug(b2, a.child, c2, d2);
  }
  function Yi(a, b2, c2, d2, e) {
    c2 = c2.render;
    var f2 = b2.ref;
    ch(b2, e);
    d2 = Nh(a, b2, c2, d2, f2, e);
    c2 = Sh();
    if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, Zi(a, b2, e);
    I$1 && c2 && vg(b2);
    b2.flags |= 1;
    Xi(a, b2, d2, e);
    return b2.child;
  }
  function $i(a, b2, c2, d2, e) {
    if (null === a) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d2, e);
      a = Rg(c2.type, null, d2, b2, b2.mode, e);
      a.ref = b2.ref;
      a.return = b2;
      return b2.child = a;
    }
    f2 = a.child;
    if (0 === (a.lanes & e)) {
      var g2 = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie;
      if (c2(g2, d2) && a.ref === b2.ref) return Zi(a, b2, e);
    }
    b2.flags |= 1;
    a = Pg(f2, d2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  function bj(a, b2, c2, d2, e) {
    if (null !== a) {
      var f2 = a.memoizedProps;
      if (Ie(f2, d2) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
      else return b2.lanes = a.lanes, Zi(a, b2, e);
    }
    return cj(a, b2, c2, d2, e);
  }
  function dj(a, b2, c2) {
    var d2 = b2.pendingProps, e = d2.children, f2 = null !== a ? a.memoizedState : null;
    if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c2;
    else {
      if (0 === (c2 & 1073741824)) return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(ej, fj), fj |= a, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G(ej, fj);
      fj |= d2;
    }
    else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(ej, fj), fj |= d2;
    Xi(a, b2, e, c2);
    return b2.child;
  }
  function gj(a, b2) {
    var c2 = b2.ref;
    if (null === a && null !== c2 || null !== a && a.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
  }
  function cj(a, b2, c2, d2, e) {
    var f2 = Zf(c2) ? Xf : H.current;
    f2 = Yf(b2, f2);
    ch(b2, e);
    c2 = Nh(a, b2, c2, d2, f2, e);
    d2 = Sh();
    if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, Zi(a, b2, e);
    I$1 && d2 && vg(b2);
    b2.flags |= 1;
    Xi(a, b2, c2, e);
    return b2.child;
  }
  function hj(a, b2, c2, d2, e) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else f2 = false;
    ch(b2, e);
    if (null === b2.stateNode) ij(a, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e), d2 = true;
    else if (null === a) {
      var g2 = b2.stateNode, h2 = b2.memoizedProps;
      g2.props = h2;
      var k2 = g2.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
      jh = false;
      var r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e);
      k2 = b2.memoizedState;
      h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
    } else {
      g2 = b2.stateNode;
      lh(a, b2);
      h2 = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
      g2.props = l2;
      q2 = b2.pendingProps;
      r2 = g2.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
      jh = false;
      r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e);
      var n2 = b2.memoizedState;
      h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
    }
    return jj(a, b2, c2, d2, f2, e);
  }
  function jj(a, b2, c2, d2, e, f2) {
    gj(a, b2);
    var g2 = 0 !== (b2.flags & 128);
    if (!d2 && !g2) return e && dg(b2, c2, false), Zi(a, b2, f2);
    d2 = b2.stateNode;
    Wi.current = b2;
    var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
    b2.flags |= 1;
    null !== a && g2 ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a, b2, h2, f2);
    b2.memoizedState = d2.state;
    e && dg(b2, c2, true);
    return b2.child;
  }
  function kj(a) {
    var b2 = a.stateNode;
    b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
    yh(a, b2.containerInfo);
  }
  function lj(a, b2, c2, d2, e) {
    Ig();
    Jg(e);
    b2.flags |= 256;
    Xi(a, b2, c2, d2);
    return b2.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b2, c2) {
    var d2 = b2.pendingProps, e = L$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
    (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h2) f2 = true, b2.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(L$1, e & 1);
    if (null === a) {
      Eg(b2);
      a = b2.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g2 = d2.children;
      a = d2.fallback;
      return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a = Tg(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a) : qj(b2, g2);
    }
    e = a.memoizedState;
    if (null !== e && (h2 = e.dehydrated, null !== h2)) return rj(a, b2, g2, d2, h2, e, c2);
    if (f2) {
      f2 = d2.fallback;
      g2 = b2.mode;
      e = a.child;
      h2 = e.sibling;
      var k2 = { mode: "hidden", children: d2.children };
      0 === (g2 & 1) && b2.child !== e ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e, k2), d2.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
      f2.return = b2;
      d2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      d2 = f2;
      f2 = b2.child;
      g2 = a.child.memoizedState;
      g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a.childLanes & ~c2;
      b2.memoizedState = mj;
      return d2;
    }
    f2 = a.child;
    a = f2.sibling;
    d2 = Pg(f2, { mode: "visible", children: d2.children });
    0 === (b2.mode & 1) && (d2.lanes = c2);
    d2.return = b2;
    d2.sibling = null;
    null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
    b2.child = d2;
    b2.memoizedState = null;
    return d2;
  }
  function qj(a, b2) {
    b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
    b2.return = a;
    return a.child = b2;
  }
  function sj(a, b2, c2, d2) {
    null !== d2 && Jg(d2);
    Ug(b2, a.child, null, c2);
    a = qj(b2, b2.pendingProps.children);
    a.flags |= 2;
    b2.memoizedState = null;
    return a;
  }
  function rj(a, b2, c2, d2, e, f2, g2) {
    if (c2) {
      if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$1(422))), sj(a, b2, g2, d2);
      if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
      f2 = d2.fallback;
      e = b2.mode;
      d2 = pj({ mode: "visible", children: d2.children }, e, 0, null);
      f2 = Tg(f2, e, g2, null);
      f2.flags |= 2;
      d2.return = b2;
      f2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      0 !== (b2.mode & 1) && Ug(b2, a.child, null, g2);
      b2.child.memoizedState = nj(g2);
      b2.memoizedState = mj;
      return f2;
    }
    if (0 === (b2.mode & 1)) return sj(a, b2, g2, null);
    if ("$!" === e.data) {
      d2 = e.nextSibling && e.nextSibling.dataset;
      if (d2) var h2 = d2.dgst;
      d2 = h2;
      f2 = Error(p$1(419));
      d2 = Ki(f2, d2, void 0);
      return sj(a, b2, g2, d2);
    }
    h2 = 0 !== (g2 & a.childLanes);
    if (dh || h2) {
      d2 = Q$1;
      if (null !== d2) {
        switch (g2 & -g2) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d2.suspendedLanes | g2)) ? 0 : e;
        0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d2, a, e, -1));
      }
      tj();
      d2 = Ki(Error(p$1(421)));
      return sj(a, b2, g2, d2);
    }
    if ("$?" === e.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e._reactRetry = b2, null;
    a = f2.treeContext;
    yg = Lf(e.nextSibling);
    xg = b2;
    I$1 = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
    b2 = qj(b2, d2.children);
    b2.flags |= 4096;
    return b2;
  }
  function vj(a, b2, c2) {
    a.lanes |= b2;
    var d2 = a.alternate;
    null !== d2 && (d2.lanes |= b2);
    bh(a.return, b2, c2);
  }
  function wj(a, b2, c2, d2, e) {
    var f2 = a.memoizedState;
    null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e);
  }
  function xj(a, b2, c2) {
    var d2 = b2.pendingProps, e = d2.revealOrder, f2 = d2.tail;
    Xi(a, b2, d2.children, c2);
    d2 = L$1.current;
    if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && vj(a, c2, b2);
        else if (19 === a.tag) vj(a, c2, b2);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b2) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b2) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d2 &= 1;
    }
    G(L$1, d2);
    if (0 === (b2.mode & 1)) b2.memoizedState = null;
    else switch (e) {
      case "forwards":
        c2 = b2.child;
        for (e = null; null !== c2; ) a = c2.alternate, null !== a && null === Ch(a) && (e = c2), c2 = c2.sibling;
        c2 = e;
        null === c2 ? (e = b2.child, b2.child = null) : (e = c2.sibling, c2.sibling = null);
        wj(b2, false, e, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e = b2.child;
        for (b2.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Ch(a)) {
            b2.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c2;
          c2 = e;
          e = a;
        }
        wj(b2, true, c2, null, f2);
        break;
      case "together":
        wj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
    return b2.child;
  }
  function ij(a, b2) {
    0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function Zi(a, b2, c2) {
    null !== a && (b2.dependencies = a.dependencies);
    rh |= b2.lanes;
    if (0 === (c2 & b2.childLanes)) return null;
    if (null !== a && b2.child !== a.child) throw Error(p$1(153));
    if (null !== b2.child) {
      a = b2.child;
      c2 = Pg(a, a.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a.sibling; ) a = a.sibling, c2 = c2.sibling = Pg(a, a.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function yj(a, b2, c2) {
    switch (b2.tag) {
      case 3:
        kj(b2);
        Ig();
        break;
      case 5:
        Ah(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        yh(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d2 = b2.type._context, e = b2.memoizedProps.value;
        G(Wg, d2._currentValue);
        d2._currentValue = e;
        break;
      case 13:
        d2 = b2.memoizedState;
        if (null !== d2) {
          if (null !== d2.dehydrated) return G(L$1, L$1.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes)) return oj(a, b2, c2);
          G(L$1, L$1.current & 1);
          a = Zi(a, b2, c2);
          return null !== a ? a.sibling : null;
        }
        G(L$1, L$1.current & 1);
        break;
      case 19:
        d2 = 0 !== (c2 & b2.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d2) return xj(a, b2, c2);
          b2.flags |= 128;
        }
        e = b2.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(L$1, L$1.current);
        if (d2) break;
        else return null;
      case 22:
      case 23:
        return b2.lanes = 0, dj(a, b2, c2);
    }
    return Zi(a, b2, c2);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag) a.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2) break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2) return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b2, c2, d2) {
    var e = a.memoizedProps;
    if (e !== d2) {
      a = b2.stateNode;
      xh(uh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e = Ya(a, e);
          d2 = Ya(a, d2);
          f2 = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d2 = A({}, d2, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e = gb(a, e);
          d2 = gb(a, d2);
          f2 = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
      }
      ub(c2, d2);
      var g2;
      c2 = null;
      for (l2 in e) if (!d2.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
        var h2 = e[l2];
        for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
      } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d2) {
        var k2 = d2[l2];
        h2 = null != e ? e[l2] : void 0;
        if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
          for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
          for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
        } else c2 || (f2 || (f2 = []), f2.push(
          l2,
          c2
        )), c2 = k2;
        else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$1("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2) b2.flags |= 4;
    }
  };
  Cj = function(a, b2, c2, d2) {
    c2 !== d2 && (b2.flags |= 4);
  };
  function Dj(a, b2) {
    if (!I$1) switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
  }
  function S$1(a) {
    var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
    if (b2) for (var e = a.child; null !== e; ) c2 |= e.lanes | e.childLanes, d2 |= e.subtreeFlags & 14680064, d2 |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c2 |= e.lanes | e.childLanes, d2 |= e.subtreeFlags, d2 |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d2;
    a.childLanes = c2;
    return b2;
  }
  function Ej(a, b2, c2) {
    var d2 = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S$1(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S$1(b2), null;
      case 3:
        d2 = b2.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a, b2);
        S$1(b2);
        return null;
      case 5:
        Bh(b2);
        var e = xh(wh.current);
        c2 = b2.type;
        if (null !== a && null != b2.stateNode) Bj(a, b2, c2, d2, e), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d2) {
            if (null === b2.stateNode) throw Error(p$1(166));
            S$1(b2);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d2[Of] = b2;
            d2[Pf] = f2;
            a = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D$1("cancel", d2);
                D$1("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                D$1("load", d2);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D$1(lf[e], d2);
                break;
              case "source":
                D$1("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                D$1(
                  "error",
                  d2
                );
                D$1("load", d2);
                break;
              case "details":
                D$1("toggle", d2);
                break;
              case "input":
                Za(d2, f2);
                D$1("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f2.multiple };
                D$1("invalid", d2);
                break;
              case "textarea":
                hb(d2, f2), D$1("invalid", d2);
            }
            ub(c2, f2);
            e = null;
            for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a
              ), e = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$1("scroll", d2);
            }
            switch (c2) {
              case "input":
                Va(d2);
                db(d2, f2, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d2.onclick = Bf);
            }
            d2 = e;
            b2.updateQueue = d2;
            null !== d2 && (b2.flags |= 4);
          } else {
            g2 = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
            a[Of] = b2;
            a[Pf] = d2;
            zj(a, b2, false, false);
            b2.stateNode = a;
            a: {
              g2 = vb(c2, d2);
              switch (c2) {
                case "dialog":
                  D$1("cancel", a);
                  D$1("close", a);
                  e = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D$1("load", a);
                  e = d2;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D$1(lf[e], a);
                  e = d2;
                  break;
                case "source":
                  D$1("error", a);
                  e = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  D$1(
                    "error",
                    a
                  );
                  D$1("load", a);
                  e = d2;
                  break;
                case "details":
                  D$1("toggle", a);
                  e = d2;
                  break;
                case "input":
                  Za(a, d2);
                  e = Ya(a, d2);
                  D$1("invalid", a);
                  break;
                case "option":
                  e = d2;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d2.multiple };
                  e = A({}, d2, { value: void 0 });
                  D$1("invalid", a);
                  break;
                case "textarea":
                  hb(a, d2);
                  e = gb(a, d2);
                  D$1("invalid", a);
                  break;
                default:
                  e = d2;
              }
              ub(c2, e);
              h2 = e;
              for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$1("scroll", a) : null != k2 && ta(a, f2, k2, g2));
              }
              switch (c2) {
                case "input":
                  Va(a);
                  db(a, d2, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a.multiple = !!d2.multiple;
                  f2 = d2.value;
                  null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                    a,
                    !!d2.multiple,
                    d2.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d2 = !!d2.autoFocus;
                  break a;
                case "img":
                  d2 = true;
                  break a;
                default:
                  d2 = false;
              }
            }
            d2 && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S$1(b2);
        return null;
      case 6:
        if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d2);
        else {
          if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$1(166));
          c2 = xh(wh.current);
          xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.memoizedProps;
            d2[Of] = b2;
            if (f2 = d2.nodeValue !== c2) {
              if (a = xg, null !== a) switch (a.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
              }
            }
            f2 && (b2.flags |= 4);
          } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
        }
        S$1(b2);
        return null;
      case 13:
        E(L$1);
        d2 = b2.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I$1 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
            if (null === a) {
              if (!f2) throw Error(p$1(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2) throw Error(p$1(317));
              f2[Of] = b2;
            } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S$1(b2);
            f2 = false;
          } else null !== zg && (Fj(zg), zg = null), f2 = true;
          if (!f2) return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
        d2 = null !== d2;
        d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L$1.current & 1) ? 0 === T$1 && (T$1 = 3) : tj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S$1(b2);
        return null;
      case 4:
        return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S$1(b2), null;
      case 10:
        return ah(b2.type._context), S$1(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S$1(b2), null;
      case 19:
        E(L$1);
        f2 = b2.memoizedState;
        if (null === f2) return S$1(b2), null;
        d2 = 0 !== (b2.flags & 128);
        g2 = f2.rendering;
        if (null === g2) if (d2) Dj(f2, false);
        else {
          if (0 !== T$1 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
            g2 = Ch(a);
            if (null !== g2) {
              b2.flags |= 128;
              Dj(f2, false);
              d2 = g2.updateQueue;
              null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
              b2.subtreeFlags = 0;
              d2 = c2;
              for (c2 = b2.child; null !== c2; ) f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
              G(L$1, L$1.current & 1 | 2);
              return b2.child;
            }
            a = a.sibling;
          }
          null !== f2.tail && B() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        }
        else {
          if (!d2) if (a = Ch(g2), null !== a) {
            if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$1) return S$1(b2), null;
          } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
        }
        if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = L$1.current, G(L$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
        S$1(b2);
        return null;
      case 22:
      case 23:
        return Hj(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p$1(156, b2.tag));
  }
  function Ij(a, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
      case 3:
        return zh(), E(Wf), E(H), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
      case 5:
        return Bh(b2), null;
      case 13:
        E(L$1);
        a = b2.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b2.alternate) throw Error(p$1(340));
          Ig();
        }
        a = b2.flags;
        return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
      case 19:
        return E(L$1), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b2.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U$1 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
  function Lj(a, b2) {
    var c2 = a.ref;
    if (null !== c2) if ("function" === typeof c2) try {
      c2(null);
    } catch (d2) {
      W$1(a, b2, d2);
    }
    else c2.current = null;
  }
  function Mj(a, b2, c2) {
    try {
      c2();
    } catch (d2) {
      W$1(a, b2, d2);
    }
  }
  var Nj = false;
  function Oj(a, b2) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a) var c2 = { start: a.selectionStart, end: a.selectionEnd };
      else a: {
        c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b: for (; ; ) {
            for (var y2; ; ) {
              q2 !== c2 || 0 !== e && 3 !== q2.nodeType || (h2 = g2 + e);
              q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
              3 === q2.nodeType && (g2 += q2.nodeValue.length);
              if (null === (y2 = q2.firstChild)) break;
              r2 = q2;
              q2 = y2;
            }
            for (; ; ) {
              if (q2 === a) break b;
              r2 === c2 && ++l2 === e && (h2 = g2);
              r2 === f2 && ++m2 === d2 && (k2 = g2);
              if (null !== (y2 = q2.nextSibling)) break;
              q2 = r2;
              r2 = q2.parentNode;
            }
            q2 = y2;
          }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else c2 = null;
      }
      c2 = c2 || { start: 0, end: 0 };
    } else c2 = null;
    Df = { focusedElem: a, selectionRange: c2 };
    dd = false;
    for (V$1 = b2; null !== V$1; ) if (b2 = V$1, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V$1 = a;
    else for (; null !== V$1; ) {
      b2 = V$1;
      try {
        var n2 = b2.alternate;
        if (0 !== (b2.flags & 1024)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n2) {
              var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
              x2.__reactInternalSnapshotBeforeUpdate = w2;
            }
            break;
          case 3:
            var u2 = b2.stateNode.containerInfo;
            1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p$1(163));
        }
      } catch (F2) {
        W$1(b2, b2.return, F2);
      }
      a = b2.sibling;
      if (null !== a) {
        a.return = b2.return;
        V$1 = a;
        break;
      }
      V$1 = b2.return;
    }
    n2 = Nj;
    Nj = false;
    return n2;
  }
  function Pj(a, b2, c2) {
    var d2 = b2.updateQueue;
    d2 = null !== d2 ? d2.lastEffect : null;
    if (null !== d2) {
      var e = d2 = d2.next;
      do {
        if ((e.tag & a) === a) {
          var f2 = e.destroy;
          e.destroy = void 0;
          void 0 !== f2 && Mj(b2, c2, f2);
        }
        e = e.next;
      } while (e !== d2);
    }
  }
  function Qj(a, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a) === a) {
          var d2 = c2.create;
          c2.destroy = d2();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Rj(a) {
    var b2 = a.ref;
    if (null !== b2) {
      var c2 = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c2;
          break;
        default:
          a = c2;
      }
      "function" === typeof b2 ? b2(a) : b2.current = a;
    }
  }
  function Sj(a) {
    var b2 = a.alternate;
    null !== b2 && (a.alternate = null, Sj(b2));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Tj(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Vj(a, b2, c2) {
    var d2 = a.tag;
    if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d2 && (a = a.child, null !== a)) for (Vj(a, b2, c2), a = a.sibling; null !== a; ) Vj(a, b2, c2), a = a.sibling;
  }
  function Wj(a, b2, c2) {
    var d2 = a.tag;
    if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
    else if (4 !== d2 && (a = a.child, null !== a)) for (Wj(a, b2, c2), a = a.sibling; null !== a; ) Wj(a, b2, c2), a = a.sibling;
  }
  var X$1 = null, Xj = false;
  function Yj(a, b2, c2) {
    for (c2 = c2.child; null !== c2; ) Zj(a, b2, c2), c2 = c2.sibling;
  }
  function Zj(a, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
    switch (c2.tag) {
      case 5:
        U$1 || Lj(c2, b2);
      case 6:
        var d2 = X$1, e = Xj;
        X$1 = null;
        Yj(a, b2, c2);
        X$1 = d2;
        Xj = e;
        null !== X$1 && (Xj ? (a = X$1, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X$1.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X$1 && (Xj ? (a = X$1, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X$1, c2.stateNode));
        break;
      case 4:
        d2 = X$1;
        e = Xj;
        X$1 = c2.stateNode.containerInfo;
        Xj = true;
        Yj(a, b2, c2);
        X$1 = d2;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
          e = d2 = d2.next;
          do {
            var f2 = e, g2 = f2.destroy;
            f2 = f2.tag;
            void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
            e = e.next;
          } while (e !== d2);
        }
        Yj(a, b2, c2);
        break;
      case 1:
        if (!U$1 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W$1(c2, b2, h2);
        }
        Yj(a, b2, c2);
        break;
      case 21:
        Yj(a, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Yj(a, b2, c2), U$1 = d2) : Yj(a, b2, c2);
        break;
      default:
        Yj(a, b2, c2);
    }
  }
  function ak(a) {
    var b2 = a.updateQueue;
    if (null !== b2) {
      a.updateQueue = null;
      var c2 = a.stateNode;
      null === c2 && (c2 = a.stateNode = new Kj());
      b2.forEach(function(b3) {
        var d2 = bk.bind(null, a, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
      });
    }
  }
  function ck(a, b2) {
    var c2 = b2.deletions;
    if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
      var e = c2[d2];
      try {
        var f2 = a, g2 = b2, h2 = g2;
        a: for (; null !== h2; ) {
          switch (h2.tag) {
            case 5:
              X$1 = h2.stateNode;
              Xj = false;
              break a;
            case 3:
              X$1 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X$1 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h2 = h2.return;
        }
        if (null === X$1) throw Error(p$1(160));
        Zj(f2, g2, e);
        X$1 = null;
        Xj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W$1(e, b2, l2);
      }
    }
    if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
  }
  function dk(a, b2) {
    var c2 = a.alternate, d2 = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b2, a);
        ek(a);
        if (d2 & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t2) {
            W$1(a, a.return, t2);
          }
          try {
            Pj(5, a, a.return);
          } catch (t2) {
            W$1(a, a.return, t2);
          }
        }
        break;
      case 1:
        ck(b2, a);
        ek(a);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        break;
      case 5:
        ck(b2, a);
        ek(a);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t2) {
            W$1(a, a.return, t2);
          }
        }
        if (d2 & 4 && (e = a.stateNode, null != e)) {
          var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
          a.updateQueue = null;
          if (null !== k2) try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W$1(a, a.return, t2);
          }
        }
        break;
      case 6:
        ck(b2, a);
        ek(a);
        if (d2 & 4) {
          if (null === a.stateNode) throw Error(p$1(162));
          e = a.stateNode;
          f2 = a.memoizedProps;
          try {
            e.nodeValue = f2;
          } catch (t2) {
            W$1(a, a.return, t2);
          }
        }
        break;
      case 3:
        ck(b2, a);
        ek(a);
        if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
          bd(b2.containerInfo);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
        break;
      case 4:
        ck(b2, a);
        ek(a);
        break;
      case 13:
        ck(b2, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d2 & 4 && ak(a);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a.mode & 1 ? (U$1 = (l2 = U$1) || m2, ck(b2, a), U$1 = l2) : ck(b2, a);
        ek(a);
        if (d2 & 8192) {
          l2 = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V$1 = a, m2 = a.child; null !== m2; ) {
            for (q2 = V$1 = m2; null !== V$1; ) {
              r2 = V$1;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r2, r2.return);
                  break;
                case 1:
                  Lj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W$1(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Lj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    gk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V$1 = y2) : gk(q2);
            }
            m2 = m2.sibling;
          }
          a: for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W$1(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2) try {
                q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
              } catch (t2) {
                W$1(a, a.return, t2);
              }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a) break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a) break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        }
        break;
      case 19:
        ck(b2, a);
        ek(a);
        d2 & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(
          b2,
          a
        ), ek(a);
    }
  }
  function ek(a) {
    var b2 = a.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a.return; null !== c2; ) {
            if (Tj(c2)) {
              var d2 = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p$1(160));
        }
        switch (d2.tag) {
          case 5:
            var e = d2.stateNode;
            d2.flags & 32 && (ob(e, ""), d2.flags &= -33);
            var f2 = Uj(a);
            Wj(a, f2, e);
            break;
          case 3:
          case 4:
            var g2 = d2.stateNode.containerInfo, h2 = Uj(a);
            Vj(a, h2, g2);
            break;
          default:
            throw Error(p$1(161));
        }
      } catch (k2) {
        W$1(a, a.return, k2);
      }
      a.flags &= -3;
    }
    b2 & 4096 && (a.flags &= -4097);
  }
  function hk(a, b2, c2) {
    V$1 = a;
    ik(a);
  }
  function ik(a, b2, c2) {
    for (var d2 = 0 !== (a.mode & 1); null !== V$1; ) {
      var e = V$1, f2 = e.child;
      if (22 === e.tag && d2) {
        var g2 = null !== e.memoizedState || Jj;
        if (!g2) {
          var h2 = e.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
          h2 = Jj;
          var l2 = U$1;
          Jj = g2;
          if ((U$1 = k2) && !l2) for (V$1 = e; null !== V$1; ) g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e) : null !== k2 ? (k2.return = g2, V$1 = k2) : jk(e);
          for (; null !== f2; ) V$1 = f2, ik(f2), f2 = f2.sibling;
          V$1 = e;
          Jj = h2;
          U$1 = l2;
        }
        kk(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V$1 = f2) : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V$1; ) {
      var b2 = V$1;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U$1 || Qj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U$1) if (null === c2) d2.componentDidMount();
              else {
                var e = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
                d2.componentDidUpdate(e, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b2.updateQueue;
              null !== f2 && sh(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child) switch (b2.child.tag) {
                  case 5:
                    c2 = b2.child.stateNode;
                    break;
                  case 1:
                    c2 = b2.child.stateNode;
                }
                sh(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$1(163));
          }
          U$1 || b2.flags & 512 && Rj(b2);
        } catch (r2) {
          W$1(b2, b2.return, r2);
        }
      }
      if (b2 === a) {
        V$1 = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V$1 = c2;
        break;
      }
      V$1 = b2.return;
    }
  }
  function gk(a) {
    for (; null !== V$1; ) {
      var b2 = V$1;
      if (b2 === a) {
        V$1 = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V$1 = c2;
        break;
      }
      V$1 = b2.return;
    }
  }
  function jk(a) {
    for (; null !== V$1; ) {
      var b2 = V$1;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Qj(4, b2);
            } catch (k2) {
              W$1(b2, c2, k2);
            }
            break;
          case 1:
            var d2 = b2.stateNode;
            if ("function" === typeof d2.componentDidMount) {
              var e = b2.return;
              try {
                d2.componentDidMount();
              } catch (k2) {
                W$1(b2, e, k2);
              }
            }
            var f2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W$1(b2, f2, k2);
            }
            break;
          case 5:
            var g2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W$1(b2, g2, k2);
            }
        }
      } catch (k2) {
        W$1(b2, b2.return, k2);
      }
      if (b2 === a) {
        V$1 = null;
        break;
      }
      var h2 = b2.sibling;
      if (null !== h2) {
        h2.return = b2.return;
        V$1 = h2;
        break;
      }
      V$1 = b2.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K$1 = 0, Q$1 = null, Y$1 = null, Z$1 = 0, fj = 0, ej = Uf(0), T$1 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K$1 & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K$1 & 2) && 0 !== Z$1) return Z$1 & -Z$1;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a = C$1;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b2, c2, d2) {
    if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
    Ac(a, c2, d2);
    if (0 === (K$1 & 2) || a !== Q$1) a === Q$1 && (0 === (K$1 & 2) && (qk |= c2), 4 === T$1 && Ck(a, Z$1)), Dk(a, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a, b2) {
    var c2 = a.callbackNode;
    wc(a, b2);
    var d2 = uc(a, a === Q$1 ? Z$1 : 0);
    if (0 === d2) null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
    else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
        0 === (K$1 & 6) && jg();
      }), c2 = null;
      else {
        switch (Dc(d2)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Fk(c2, Gk.bind(null, a));
      }
      a.callbackPriority = b2;
      a.callbackNode = c2;
    }
  }
  function Gk(a, b2) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K$1 & 6)) throw Error(p$1(327));
    var c2 = a.callbackNode;
    if (Hk() && a.callbackNode !== c2) return null;
    var d2 = uc(a, a === Q$1 ? Z$1 : 0);
    if (0 === d2) return null;
    if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2) b2 = Ik(a, d2);
    else {
      b2 = d2;
      var e = K$1;
      K$1 |= 2;
      var f2 = Jk();
      if (Q$1 !== a || Z$1 !== b2) uk = null, Gj = B() + 500, Kk(a, b2);
      do
        try {
          Lk();
          break;
        } catch (h2) {
          Mk(a, h2);
        }
      while (1);
      $g();
      mk.current = f2;
      K$1 = e;
      null !== Y$1 ? b2 = 0 : (Q$1 = null, Z$1 = 0, b2 = T$1);
    }
    if (0 !== b2) {
      2 === b2 && (e = xc(a), 0 !== e && (d2 = e, b2 = Nk(a, e)));
      if (1 === b2) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c2;
      if (6 === b2) Ck(a, d2);
      else {
        e = a.current.alternate;
        if (0 === (d2 & 30) && !Ok(e) && (b2 = Ik(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Nk(a, f2))), 1 === b2)) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c2;
        a.finishedWork = e;
        a.finishedLanes = d2;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p$1(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d2);
            if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B(), 10 < b2)) {
              if (0 !== uc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d2) !== d2) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d2);
            if ((d2 & 4194240) === d2) break;
            b2 = a.eventTimes;
            for (e = -1; 0 < d2; ) {
              var g2 = 31 - oc(d2);
              f2 = 1 << g2;
              g2 = b2[g2];
              g2 > e && (e = g2);
              d2 &= ~f2;
            }
            d2 = e;
            d2 = B() - d2;
            d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
            if (10 < d2) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d2);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p$1(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c2 ? Gk.bind(null, a) : null;
  }
  function Nk(a, b2) {
    var c2 = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
    a = Ik(a, b2);
    2 !== a && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
    return a;
  }
  function Fj(a) {
    null === tk ? tk = a : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b2 = a; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
          var e = c2[d2], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e)) return false;
          } catch (g2) {
            return false;
          }
        }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
      else {
        if (b2 === a) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a) return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Ck(a, b2) {
    b2 &= ~rk;
    b2 &= ~qk;
    a.suspendedLanes |= b2;
    a.pingedLanes &= ~b2;
    for (a = a.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d2 = 1 << c2;
      a[c2] = -1;
      b2 &= ~d2;
    }
  }
  function Ek(a) {
    if (0 !== (K$1 & 6)) throw Error(p$1(327));
    Hk();
    var b2 = uc(a, 0);
    if (0 === (b2 & 1)) return Dk(a, B()), null;
    var c2 = Ik(a, b2);
    if (0 !== a.tag && 2 === c2) {
      var d2 = xc(a);
      0 !== d2 && (b2 = d2, c2 = Nk(a, d2));
    }
    if (1 === c2) throw c2 = pk, Kk(a, 0), Ck(a, b2), Dk(a, B()), c2;
    if (6 === c2) throw Error(p$1(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b2;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b2) {
    var c2 = K$1;
    K$1 |= 1;
    try {
      return a(b2);
    } finally {
      K$1 = c2, 0 === K$1 && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K$1 & 6) && Hk();
    var b2 = K$1;
    K$1 |= 1;
    var c2 = ok.transition, d2 = C$1;
    try {
      if (ok.transition = null, C$1 = 1, a) return a();
    } finally {
      C$1 = d2, ok.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a, b2) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c2 = a.timeoutHandle;
    -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
    if (null !== Y$1) for (c2 = Y$1.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          zh();
          E(Wf);
          E(H);
          Eh();
          break;
        case 5:
          Bh(d2);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L$1);
          break;
        case 19:
          E(L$1);
          break;
        case 10:
          ah(d2.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c2 = c2.return;
    }
    Q$1 = a;
    Y$1 = a = Pg(a.current, null);
    Z$1 = fj = b2;
    T$1 = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e;
          d2.next = g2;
        }
        c2.pending = d2;
      }
      fh = null;
    }
    return a;
  }
  function Mk(a, b2) {
    do {
      var c2 = Y$1;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d2 = M.memoizedState; null !== d2; ) {
            var e = d2.queue;
            null !== e && (e.pending = null);
            d2 = d2.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c2 || null === c2.return) {
          T$1 = 1;
          pk = b2;
          Y$1 = null;
          break;
        }
        a: {
          var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
          b2 = Z$1;
          h2.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h2, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Ui(g2);
            if (null !== y2) {
              y2.flags &= -257;
              Vi(y2, g2, h2, f2, b2);
              y2.mode & 1 && Si(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n2 = b2.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b2.updateQueue = t2;
              } else n2.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Si(f2, l2, b2);
                tj();
                break a;
              }
              k2 = Error(p$1(426));
            }
          } else if (I$1 && h2.mode & 1) {
            var J2 = Ui(g2);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Vi(J2, g2, h2, f2, b2);
              Jg(Ji(k2, h2));
              break a;
            }
          }
          f2 = k2 = Ji(k2, h2);
          4 !== T$1 && (T$1 = 2);
          null === sk ? sk = [f2] : sk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x2 = Ni(f2, k2, b2);
                ph(f2, x2);
                break a;
              case 1:
                h2 = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F2 = Qi(f2, h2, b2);
                  ph(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Sk(c2);
      } catch (na) {
        b2 = na;
        Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T$1 || 3 === T$1 || 2 === T$1) T$1 = 4;
    null === Q$1 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$1, Z$1);
  }
  function Ik(a, b2) {
    var c2 = K$1;
    K$1 |= 2;
    var d2 = Jk();
    if (Q$1 !== a || Z$1 !== b2) uk = null, Kk(a, b2);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K$1 = c2;
    mk.current = d2;
    if (null !== Y$1) throw Error(p$1(261));
    Q$1 = null;
    Z$1 = 0;
    return T$1;
  }
  function Tk() {
    for (; null !== Y$1; ) Uk(Y$1);
  }
  function Lk() {
    for (; null !== Y$1 && !cc(); ) Uk(Y$1);
  }
  function Uk(a) {
    var b2 = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b2 ? Sk(a) : Y$1 = b2;
    nk.current = null;
  }
  function Sk(a) {
    var b2 = a;
    do {
      var c2 = b2.alternate;
      a = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Ej(c2, b2, fj), null !== c2) {
          Y$1 = c2;
          return;
        }
      } else {
        c2 = Ij(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y$1 = c2;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T$1 = 6;
          Y$1 = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y$1 = b2;
        return;
      }
      Y$1 = b2 = a;
    } while (null !== b2);
    0 === T$1 && (T$1 = 5);
  }
  function Pk(a, b2, c2) {
    var d2 = C$1, e = ok.transition;
    try {
      ok.transition = null, C$1 = 1, Wk(a, b2, c2, d2);
    } finally {
      ok.transition = e, C$1 = d2;
    }
    return null;
  }
  function Wk(a, b2, c2, d2) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K$1 & 6)) throw Error(p$1(327));
    c2 = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c2) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c2 === a.current) throw Error(p$1(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a, f2);
    a === Q$1 && (Y$1 = Q$1 = null, Z$1 = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = ok.transition;
      ok.transition = null;
      var g2 = C$1;
      C$1 = 1;
      var h2 = K$1;
      K$1 |= 4;
      nk.current = null;
      Oj(a, c2);
      dk(c2, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c2;
      hk(c2);
      dc();
      K$1 = h2;
      C$1 = g2;
      ok.transition = f2;
    } else a.current = c2;
    vk && (vk = false, wk = a, xk = e);
    f2 = a.pendingLanes;
    0 === f2 && (Ri = null);
    mc(c2.stateNode);
    Dk(a, B());
    if (null !== b2) for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e = b2[c2], d2(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a = Pi, Pi = null, a;
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f2 = a.pendingLanes;
    0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk), b2 = ok.transition, c2 = C$1;
      try {
        ok.transition = null;
        C$1 = 16 > a ? 16 : a;
        if (null === wk) var d2 = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K$1 & 6)) throw Error(p$1(331));
          var e = K$1;
          K$1 |= 4;
          for (V$1 = a.current; null !== V$1; ) {
            var f2 = V$1, g2 = f2.child;
            if (0 !== (V$1.flags & 16)) {
              var h2 = f2.deletions;
              if (null !== h2) {
                for (var k2 = 0; k2 < h2.length; k2++) {
                  var l2 = h2[k2];
                  for (V$1 = l2; null !== V$1; ) {
                    var m2 = V$1;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2) q2.return = m2, V$1 = q2;
                    else for (; null !== V$1; ) {
                      m2 = V$1;
                      var r2 = m2.sibling, y2 = m2.return;
                      Sj(m2);
                      if (m2 === l2) {
                        V$1 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V$1 = r2;
                        break;
                      }
                      V$1 = y2;
                    }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V$1 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V$1 = g2;
            else b: for (; null !== V$1; ) {
              f2 = V$1;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f2, f2.return);
              }
              var x2 = f2.sibling;
              if (null !== x2) {
                x2.return = f2.return;
                V$1 = x2;
                break b;
              }
              V$1 = f2.return;
            }
          }
          var w2 = a.current;
          for (V$1 = w2; null !== V$1; ) {
            g2 = V$1;
            var u2 = g2.child;
            if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V$1 = u2;
            else b: for (g2 = w2; null !== V$1; ) {
              h2 = V$1;
              if (0 !== (h2.flags & 2048)) try {
                switch (h2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h2);
                }
              } catch (na) {
                W$1(h2, h2.return, na);
              }
              if (h2 === g2) {
                V$1 = null;
                break b;
              }
              var F2 = h2.sibling;
              if (null !== F2) {
                F2.return = h2.return;
                V$1 = F2;
                break b;
              }
              V$1 = h2.return;
            }
          }
          K$1 = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
          d2 = true;
        }
        return d2;
      } finally {
        C$1 = c2, ok.transition = b2;
      }
    }
    return false;
  }
  function Xk(a, b2, c2) {
    b2 = Ji(c2, b2);
    b2 = Ni(a, b2, 1);
    a = nh(a, b2, 1);
    b2 = R();
    null !== a && (Ac(a, 1, b2), Dk(a, b2));
  }
  function W$1(a, b2, c2) {
    if (3 === a.tag) Xk(a, a, c2);
    else for (; null !== b2; ) {
      if (3 === b2.tag) {
        Xk(b2, a, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
          a = Ji(c2, a);
          a = Qi(b2, a, 1);
          b2 = nh(b2, a, 1);
          a = R();
          null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
          break;
        }
      }
      b2 = b2.return;
    }
  }
  function Ti(a, b2, c2) {
    var d2 = a.pingCache;
    null !== d2 && d2.delete(b2);
    b2 = R();
    a.pingedLanes |= a.suspendedLanes & c2;
    Q$1 === a && (Z$1 & c2) === c2 && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B() - fk ? Kk(a, 0) : rk |= c2);
    Dk(a, b2);
  }
  function Yk(a, b2) {
    0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = R();
    a = ih(a, b2);
    null !== a && (Ac(a, b2, c2), Dk(a, c2));
  }
  function uj(a) {
    var b2 = a.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Yk(a, c2);
  }
  function bk(a, b2) {
    var c2 = 0;
    switch (a.tag) {
      case 13:
        var d2 = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c2 = e.retryLane);
        break;
      case 19:
        d2 = a.stateNode;
        break;
      default:
        throw Error(p$1(314));
    }
    null !== d2 && d2.delete(b2);
    Yk(a, c2);
  }
  var Vk;
  Vk = function(a, b2, c2) {
    if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c2);
      dh = 0 !== (a.flags & 131072) ? true : false;
    }
    else dh = false, I$1 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d2 = b2.type;
        ij(a, b2);
        a = b2.pendingProps;
        var e = Yf(b2, H.current);
        ch(b2, c2);
        e = Nh(null, b2, d2, a, e, c2);
        var f2 = Sh();
        b2.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b2), e.updater = Ei, b2.stateNode = e, e._reactInternals = b2, Ii(b2, d2, a, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && vg(b2), Xi(null, b2, e, c2), b2 = b2.child);
        return b2;
      case 16:
        d2 = b2.elementType;
        a: {
          ij(a, b2);
          a = b2.pendingProps;
          e = d2._init;
          d2 = e(d2._payload);
          b2.type = d2;
          e = b2.tag = Zk(d2);
          a = Ci(d2, a);
          switch (e) {
            case 0:
              b2 = cj(null, b2, d2, a, c2);
              break a;
            case 1:
              b2 = hj(null, b2, d2, a, c2);
              break a;
            case 11:
              b2 = Yi(null, b2, d2, a, c2);
              break a;
            case 14:
              b2 = $i(null, b2, d2, Ci(d2.type, a), c2);
              break a;
          }
          throw Error(p$1(
            306,
            d2,
            ""
          ));
        }
        return b2;
      case 0:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), cj(a, b2, d2, e, c2);
      case 1:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), hj(a, b2, d2, e, c2);
      case 3:
        a: {
          kj(b2);
          if (null === a) throw Error(p$1(387));
          d2 = b2.pendingProps;
          f2 = b2.memoizedState;
          e = f2.element;
          lh(a, b2);
          qh(b2, d2, null, c2);
          var g2 = b2.memoizedState;
          d2 = g2.element;
          if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e = Ji(Error(p$1(423)), b2);
            b2 = lj(a, b2, d2, c2, e);
            break a;
          } else if (d2 !== e) {
            e = Ji(Error(p$1(424)), b2);
            b2 = lj(a, b2, d2, c2, e);
            break a;
          } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$1 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d2 === e) {
              b2 = Zi(a, b2, c2);
              break a;
            }
            Xi(a, b2, d2, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Ah(b2), null === a && Eg(b2), d2 = b2.type, e = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e.children, Ef(d2, e) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g2, c2), b2.child;
      case 6:
        return null === a && Eg(b2), null;
      case 13:
        return oj(a, b2, c2);
      case 4:
        return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d2, c2) : Xi(a, b2, d2, c2), b2.child;
      case 11:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), Yi(a, b2, d2, e, c2);
      case 7:
        return Xi(a, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e = b2.pendingProps;
          f2 = b2.memoizedProps;
          g2 = e.value;
          G(Wg, d2._currentValue);
          d2._currentValue = g2;
          if (null !== f2) if (He(f2.value, g2)) {
            if (f2.children === e.children && !Wf.current) {
              b2 = Zi(a, b2, c2);
              break a;
            }
          } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
            var h2 = f2.dependencies;
            if (null !== h2) {
              g2 = f2.child;
              for (var k2 = h2.firstContext; null !== k2; ) {
                if (k2.context === d2) {
                  if (1 === f2.tag) {
                    k2 = mh(-1, c2 & -c2);
                    k2.tag = 2;
                    var l2 = f2.updateQueue;
                    if (null !== l2) {
                      l2 = l2.shared;
                      var m2 = l2.pending;
                      null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                      l2.pending = k2;
                    }
                  }
                  f2.lanes |= c2;
                  k2 = f2.alternate;
                  null !== k2 && (k2.lanes |= c2);
                  bh(
                    f2.return,
                    c2,
                    b2
                  );
                  h2.lanes |= c2;
                  break;
                }
                k2 = k2.next;
              }
            } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
            else if (18 === f2.tag) {
              g2 = f2.return;
              if (null === g2) throw Error(p$1(341));
              g2.lanes |= c2;
              h2 = g2.alternate;
              null !== h2 && (h2.lanes |= c2);
              bh(g2, c2, b2);
              g2 = f2.sibling;
            } else g2 = f2.child;
            if (null !== g2) g2.return = f2;
            else for (g2 = f2; null !== g2; ) {
              if (g2 === b2) {
                g2 = null;
                break;
              }
              f2 = g2.sibling;
              if (null !== f2) {
                f2.return = g2.return;
                g2 = f2;
                break;
              }
              g2 = g2.return;
            }
            f2 = g2;
          }
          Xi(a, b2, e.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e = eh(e), d2 = d2(e), b2.flags |= 1, Xi(a, b2, d2, c2), b2.child;
      case 14:
        return d2 = b2.type, e = Ci(d2, b2.pendingProps), e = Ci(d2.type, e), $i(a, b2, d2, e, c2);
      case 15:
        return bj(a, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), ij(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, ch(b2, c2), Gi(b2, d2, e), Ii(b2, d2, e, c2), jj(null, b2, d2, true, a, c2);
      case 19:
        return xj(a, b2, c2);
      case 22:
        return dj(a, b2, c2);
    }
    throw Error(p$1(156, b2.tag));
  };
  function Fk(a, b2) {
    return ac(a, b2);
  }
  function $k(a, b2, c2, d2) {
    this.tag = a;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b2, c2, d2) {
    return new $k(a, b2, c2, d2);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ("function" === typeof a) return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da) return 11;
      if (a === Ga) return 14;
    }
    return 2;
  }
  function Pg(a, b2) {
    var c2 = a.alternate;
    null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a.flags & 14680064;
    c2.childLanes = a.childLanes;
    c2.lanes = a.lanes;
    c2.child = a.child;
    c2.memoizedProps = a.memoizedProps;
    c2.memoizedState = a.memoizedState;
    c2.updateQueue = a.updateQueue;
    b2 = a.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a.sibling;
    c2.index = a.index;
    c2.ref = a.ref;
    return c2;
  }
  function Rg(a, b2, c2, d2, e, f2) {
    var g2 = 2;
    d2 = a;
    if ("function" === typeof a) aj(a) && (g2 = 1);
    else if ("string" === typeof a) g2 = 5;
    else a: switch (a) {
      case ya:
        return Tg(c2.children, e, f2, b2);
      case za:
        g2 = 8;
        e |= 8;
        break;
      case Aa:
        return a = Bg(12, c2, b2, e | 2), a.elementType = Aa, a.lanes = f2, a;
      case Ea:
        return a = Bg(13, c2, b2, e), a.elementType = Ea, a.lanes = f2, a;
      case Fa:
        return a = Bg(19, c2, b2, e), a.elementType = Fa, a.lanes = f2, a;
      case Ia:
        return pj(c2, e, f2, b2);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case Ba:
            g2 = 10;
            break a;
          case Ca:
            g2 = 9;
            break a;
          case Da:
            g2 = 11;
            break a;
          case Ga:
            g2 = 14;
            break a;
          case Ha:
            g2 = 16;
            d2 = null;
            break a;
        }
        throw Error(p$1(130, null == a ? a : typeof a, ""));
    }
    b2 = Bg(g2, c2, b2, e);
    b2.elementType = a;
    b2.type = d2;
    b2.lanes = f2;
    return b2;
  }
  function Tg(a, b2, c2, d2) {
    a = Bg(7, a, d2, b2);
    a.lanes = c2;
    return a;
  }
  function pj(a, b2, c2, d2) {
    a = Bg(22, a, d2, b2);
    a.elementType = Ia;
    a.lanes = c2;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b2, c2) {
    a = Bg(6, a, null, b2);
    a.lanes = c2;
    return a;
  }
  function Sg(a, b2, c2) {
    b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b2;
  }
  function al(a, b2, c2, d2, e) {
    this.tag = b2;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d2;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b2, c2, d2, e, f2, g2, h2, k2) {
    a = new al(a, b2, c2, h2, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a.current = f2;
    f2.stateNode = a;
    f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f2);
    return a;
  }
  function cl(a, b2, c2) {
    var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
  }
  function dl(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag) throw Error(p$1(170));
      var b2 = a;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p$1(171));
    }
    if (1 === a.tag) {
      var c2 = a.type;
      if (Zf(c2)) return bg(a, c2, b2);
    }
    return b2;
  }
  function el(a, b2, c2, d2, e, f2, g2, h2, k2) {
    a = bl(c2, d2, true, a, e, f2, g2, h2, k2);
    a.context = dl(null);
    c2 = a.current;
    d2 = R();
    e = yi(c2);
    f2 = mh(d2, e);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    nh(c2, f2, e);
    a.current.lanes = e;
    Ac(a, e, d2);
    Dk(a, d2);
    return a;
  }
  function fl(a, b2, c2, d2) {
    var e = b2.current, f2 = R(), g2 = yi(e);
    c2 = dl(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = mh(f2, g2);
    b2.payload = { element: a };
    d2 = void 0 === d2 ? null : d2;
    null !== d2 && (b2.callback = d2);
    a = nh(e, b2, g2);
    null !== a && (gi(a, e, g2, f2), oh(a, e, g2));
    return g2;
  }
  function gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b2) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c2 = a.retryLane;
      a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function il(a, b2) {
    hl(a, b2);
    (a = a.alternate) && hl(a, b2);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function(a) {
    var b2 = this._internalRoot;
    if (null === b2) throw Error(p$1(409));
    fl(a, b2, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b2 = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b2[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b2 = Hc();
      a = { blockedOn: null, target: a, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
      Qc.splice(c2, 0, a);
      0 === c2 && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function pl() {
  }
  function ql(a, b2, c2, d2, e) {
    if (e) {
      if ("function" === typeof d2) {
        var f2 = d2;
        d2 = function() {
          var a2 = gl(g2);
          f2.call(a2);
        };
      }
      var g2 = el(b2, d2, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g2;
      a[uf] = g2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g2;
    }
    for (; e = a.lastChild; ) a.removeChild(e);
    if ("function" === typeof d2) {
      var h2 = d2;
      d2 = function() {
        var a2 = gl(k2);
        h2.call(a2);
      };
    }
    var k2 = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k2;
    a[uf] = k2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function() {
      fl(b2, k2, c2, d2);
    });
    return k2;
  }
  function rl(a, b2, c2, d2, e) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if ("function" === typeof e) {
        var h2 = e;
        e = function() {
          var a2 = gl(g2);
          h2.call(a2);
        };
      }
      fl(b2, g2, a, e);
    } else g2 = ql(c2, b2, a, e, d2);
    return gl(g2);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b2 = a.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B()), 0 === (K$1 & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b3 = ih(a, 1);
          if (null !== b3) {
            var c3 = R();
            gi(b3, a, 1, c3);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b2 = ih(a, 134217728);
      if (null !== b2) {
        var c2 = R();
        gi(b2, a, 134217728, c2);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b2 = yi(a), c2 = ih(a, b2);
      if (null !== c2) {
        var d2 = R();
        gi(c2, a, b2, d2);
      }
      il(a, b2);
    }
  };
  Hc = function() {
    return C$1;
  };
  Ic = function(a, b2) {
    var c2 = C$1;
    try {
      return C$1 = a, b2();
    } finally {
      C$1 = c2;
    }
  };
  yb = function(a, b2, c2) {
    switch (b2) {
      case "input":
        bb(a, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a; c2.parentNode; ) c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d2 = c2[b2];
            if (d2 !== a && d2.form === a.form) {
              var e = Db(d2);
              if (!e) throw Error(p$1(90));
              Wa(d2);
              bb(d2, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b2)) throw Error(p$1(200));
    return cl(a, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a, b2) {
    if (!nl(a)) throw Error(p$1(299));
    var c2 = false, d2 = "", e = kl;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
    b2 = bl(a, 1, false, null, null, c2, false, d2, e);
    a[uf] = b2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b2);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b2 = a._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a.render) throw Error(p$1(188));
      a = Object.keys(a).join(",");
      throw Error(p$1(268, a));
    }
    a = Zb(b2);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function(a, b2, c2) {
    if (!ol(b2)) throw Error(p$1(200));
    return rl(null, a, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a, b2, c2) {
    if (!nl(a)) throw Error(p$1(405));
    var d2 = null != c2 && c2.hydratedSources || null, e = false, f2 = "", g2 = kl;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
    b2 = el(b2, null, a, 1, null != c2 ? c2 : null, e, false, f2, g2);
    a[uf] = b2.current;
    sf(a);
    if (d2) for (a = 0; a < d2.length; a++) c2 = d2[a], e = c2._getVersion, e = e(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e] : b2.mutableSourceEagerHydrationData.push(
      c2,
      e
    );
    return new ml(b2);
  };
  reactDom_production_min.render = function(a, b2, c2) {
    if (!ol(b2)) throw Error(p$1(200));
    return rl(null, a, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!ol(a)) throw Error(p$1(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
    if (!ol(c2)) throw Error(p$1(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p$1(38));
    return rl(a, b2, c2, false, d2);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = reactDom_production_min;
  }
  var reactDomExports = reactDom.exports;
  var m$1 = reactDomExports;
  {
    client.createRoot = m$1.createRoot;
    client.hydrateRoot = m$1.hydrateRoot;
  }
  const __vite_import_meta_env__$1 = {};
  const createStoreImpl = (createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const getInitialState = () => initialState;
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = () => {
      if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production") {
        console.warn(
          "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
        );
      }
      listeners.clear();
    };
    const api = { setState, getState, getInitialState, subscribe, destroy };
    const initialState = state = createState(setState, getState, api);
    return api;
  };
  const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
  var withSelector = { exports: {} };
  var withSelector_production = {};
  var shim$2 = { exports: {} };
  var useSyncExternalStoreShim_production = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var React$1 = reactExports;
  function is$1(x2, y2) {
    return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
  }
  var objectIs$1 = "function" === typeof Object.is ? Object.is : is$1, useState = React$1.useState, useEffect$1 = React$1.useEffect, useLayoutEffect = React$1.useLayoutEffect, useDebugValue$2 = React$1.useDebugValue;
  function useSyncExternalStore$2(subscribe, getSnapshot) {
    var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect(
      function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      },
      [subscribe, value, getSnapshot]
    );
    useEffect$1(
      function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      },
      [subscribe]
    );
    useDebugValue$2(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
      var nextValue = latestGetSnapshot();
      return !objectIs$1(inst, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
  }
  var shim$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
  useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React$1.useSyncExternalStore ? React$1.useSyncExternalStore : shim$1;
  {
    shim$2.exports = useSyncExternalStoreShim_production;
  }
  var shimExports = shim$2.exports;
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var React = reactExports, shim = shimExports;
  function is(x2, y2) {
    return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue$1 = React.useDebugValue;
  withSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
      var inst = { hasValue: false, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (void 0 !== isEqual && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          null === maybeGetServerSnapshot ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(
      function() {
        inst.hasValue = true;
        inst.value = value;
      },
      [value]
    );
    useDebugValue$1(value);
    return value;
  };
  {
    withSelector.exports = withSelector_production;
  }
  var withSelectorExports = withSelector.exports;
  const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
  const __vite_import_meta_env__ = {};
  const { useDebugValue } = React$2;
  const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
  let didWarnAboutEqualityFn = false;
  const identity = (arg) => arg;
  function useStore(api, selector = identity, equalityFn) {
    if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
      console.warn(
        "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
      );
      didWarnAboutEqualityFn = true;
    }
    const slice = useSyncExternalStoreWithSelector(
      api.subscribe,
      api.getState,
      api.getServerState || api.getInitialState,
      selector,
      equalityFn
    );
    useDebugValue(slice);
    return slice;
  }
  const createImpl = (createState) => {
    if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && typeof createState !== "function") {
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    }
    const api = typeof createState === "function" ? createStore(createState) : createState;
    const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
    Object.assign(useBoundStore, api);
    return useBoundStore;
  };
  const create$1 = (createState) => createState ? createImpl(createState) : createImpl;
  const useEditorStore = create$1((set) => ({
    // Initial state
    colors: [],
    selectedColor: null,
    fonts: [],
    selectedFont: null,
    borderRadius: "0px",
    changes: [],
    undoStack: [],
    redoStack: [],
    isInspectMode: false,
    hoveredElement: null,
    selectedElement: null,
    similarElements: [],
    isPanelOpen: false,
    // Default closed - show only floating button
    activeTab: "colors",
    // Actions
    setColors: (colors) => set({ colors }),
    setSelectedColor: (color) => set({ selectedColor: color }),
    setFonts: (fonts) => set({ fonts }),
    setSelectedFont: (font) => set({ selectedFont: font }),
    setBorderRadius: (radius) => set({ borderRadius: radius }),
    addChange: (changeData) => set((state) => {
      const change = {
        ...changeData,
        id: `${Date.now()}-${Math.random()}`,
        timestamp: Date.now()
      };
      return {
        changes: [...state.changes, change],
        undoStack: [...state.undoStack, change],
        redoStack: []
        // Clear redo stack on new change
      };
    }),
    undo: () => set((state) => {
      if (state.undoStack.length === 0) return state;
      const lastChange = state.undoStack[state.undoStack.length - 1];
      const newUndoStack = state.undoStack.slice(0, -1);
      const newChanges = state.changes.filter((c2) => c2.id !== lastChange.id);
      return {
        undoStack: newUndoStack,
        redoStack: [...state.redoStack, lastChange],
        changes: newChanges
      };
    }),
    redo: () => set((state) => {
      if (state.redoStack.length === 0) return state;
      const lastRedone = state.redoStack[state.redoStack.length - 1];
      const newRedoStack = state.redoStack.slice(0, -1);
      return {
        redoStack: newRedoStack,
        undoStack: [...state.undoStack, lastRedone],
        changes: [...state.changes, lastRedone]
      };
    }),
    clearChanges: () => set({ changes: [], undoStack: [], redoStack: [] }),
    setInspectMode: (enabled) => set({ isInspectMode: enabled }),
    setHoveredElement: (element) => set({ hoveredElement: element }),
    setSelectedElement: (element, similar = []) => set({
      selectedElement: element,
      similarElements: similar
    }),
    setPanelOpen: (open) => set({ isPanelOpen: open }),
    setActiveTab: (tab) => set({ activeTab: tab })
  }));
  const EDITOR_Z_INDEX = 2147483647;
  const FloatingPanel = ({ children }) => {
    const { isPanelOpen, setPanelOpen } = useEditorStore();
    const [isCollapsed, setIsCollapsed] = reactExports.useState(false);
    if (!isPanelOpen) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "live-css-editor-root",
        "data-css-editor-panel": true,
        style: {
          position: "fixed",
          top: "20px",
          right: "20px",
          width: isCollapsed ? "60px" : "400px",
          maxHeight: "90vh",
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          zIndex: EDITOR_Z_INDEX,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: "14px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                padding: "12px 16px",
                borderBottom: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f9fafb"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { margin: 0, fontSize: "16px", fontWeight: 600 }, children: !isCollapsed && "CSS Editor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setIsCollapsed(!isCollapsed),
                      style: {
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px 8px",
                        fontSize: "18px"
                      },
                      title: isCollapsed ? "Expand" : "Collapse",
                      children: isCollapsed ? "▶" : "◀"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setPanelOpen(false),
                      style: {
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px 8px",
                        fontSize: "18px"
                      },
                      title: "Close",
                      children: "×"
                    }
                  )
                ] })
              ]
            }
          ),
          !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                flex: 1,
                overflow: "auto",
                padding: "16px"
              },
              children: children || /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "No content" })
            }
          )
        ]
      }
    );
  };
  function u() {
    return (u = Object.assign || function(e) {
      for (var r2 = 1; r2 < arguments.length; r2++) {
        var t2 = arguments[r2];
        for (var n2 in t2) Object.prototype.hasOwnProperty.call(t2, n2) && (e[n2] = t2[n2]);
      }
      return e;
    }).apply(this, arguments);
  }
  function c(e, r2) {
    if (null == e) return {};
    var t2, n2, o = {}, a = Object.keys(e);
    for (n2 = 0; n2 < a.length; n2++) r2.indexOf(t2 = a[n2]) >= 0 || (o[t2] = e[t2]);
    return o;
  }
  function i(e) {
    var t2 = reactExports.useRef(e), n2 = reactExports.useRef(function(e2) {
      t2.current && t2.current(e2);
    });
    return t2.current = e, n2.current;
  }
  var s = function(e, r2, t2) {
    return void 0 === r2 && (r2 = 0), void 0 === t2 && (t2 = 1), e > t2 ? t2 : e < r2 ? r2 : e;
  }, f = function(e) {
    return "touches" in e;
  }, v = function(e) {
    return e && e.ownerDocument.defaultView || self;
  }, d = function(e, r2, t2) {
    var n2 = e.getBoundingClientRect(), o = f(r2) ? function(e2, r3) {
      for (var t3 = 0; t3 < e2.length; t3++) if (e2[t3].identifier === r3) return e2[t3];
      return e2[0];
    }(r2.touches, t2) : r2;
    return { left: s((o.pageX - (n2.left + v(e).pageXOffset)) / n2.width), top: s((o.pageY - (n2.top + v(e).pageYOffset)) / n2.height) };
  }, h = function(e) {
    !f(e) && e.preventDefault();
  }, m = React$2.memo(function(o) {
    var a = o.onMove, l2 = o.onKey, s2 = c(o, ["onMove", "onKey"]), m2 = reactExports.useRef(null), g2 = i(a), p2 = i(l2), b2 = reactExports.useRef(null), _ = reactExports.useRef(false), x2 = reactExports.useMemo(function() {
      var e = function(e2) {
        h(e2), (f(e2) ? e2.touches.length > 0 : e2.buttons > 0) && m2.current ? g2(d(m2.current, e2, b2.current)) : t2(false);
      }, r2 = function() {
        return t2(false);
      };
      function t2(t3) {
        var n2 = _.current, o2 = v(m2.current), a2 = t3 ? o2.addEventListener : o2.removeEventListener;
        a2(n2 ? "touchmove" : "mousemove", e), a2(n2 ? "touchend" : "mouseup", r2);
      }
      return [function(e2) {
        var r3 = e2.nativeEvent, n2 = m2.current;
        if (n2 && (h(r3), !function(e3, r4) {
          return r4 && !f(e3);
        }(r3, _.current) && n2)) {
          if (f(r3)) {
            _.current = true;
            var o2 = r3.changedTouches || [];
            o2.length && (b2.current = o2[0].identifier);
          }
          n2.focus(), g2(d(n2, r3, b2.current)), t2(true);
        }
      }, function(e2) {
        var r3 = e2.which || e2.keyCode;
        r3 < 37 || r3 > 40 || (e2.preventDefault(), p2({ left: 39 === r3 ? 0.05 : 37 === r3 ? -0.05 : 0, top: 40 === r3 ? 0.05 : 38 === r3 ? -0.05 : 0 }));
      }, t2];
    }, [p2, g2]), C2 = x2[0], E2 = x2[1], H2 = x2[2];
    return reactExports.useEffect(function() {
      return H2;
    }, [H2]), React$2.createElement("div", u({}, s2, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m2, onKeyDown: E2, tabIndex: 0, role: "slider" }));
  }), g = function(e) {
    return e.filter(Boolean).join(" ");
  }, p = function(r2) {
    var t2 = r2.color, n2 = r2.left, o = r2.top, a = void 0 === o ? 0.5 : o, l2 = g(["react-colorful__pointer", r2.className]);
    return React$2.createElement("div", { className: l2, style: { top: 100 * a + "%", left: 100 * n2 + "%" } }, React$2.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t2 } }));
  }, b = function(e, r2, t2) {
    return void 0 === r2 && (r2 = 0), void 0 === t2 && (t2 = Math.pow(10, r2)), Math.round(t2 * e) / t2;
  }, x$1 = function(e) {
    return L(C(e));
  }, C = function(e) {
    return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: 4 === e.length ? b(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: 8 === e.length ? b(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
  }, w = function(e) {
    return K(I(e));
  }, y = function(e) {
    var r2 = e.s, t2 = e.v, n2 = e.a, o = (200 - r2) * t2 / 100;
    return { h: b(e.h), s: b(o > 0 && o < 200 ? r2 * t2 / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: b(o / 2), a: b(n2, 2) };
  }, q = function(e) {
    var r2 = y(e);
    return "hsl(" + r2.h + ", " + r2.s + "%, " + r2.l + "%)";
  }, I = function(e) {
    var r2 = e.h, t2 = e.s, n2 = e.v, o = e.a;
    r2 = r2 / 360 * 6, t2 /= 100, n2 /= 100;
    var a = Math.floor(r2), l2 = n2 * (1 - t2), u2 = n2 * (1 - (r2 - a) * t2), c2 = n2 * (1 - (1 - r2 + a) * t2), i2 = a % 6;
    return { r: b(255 * [n2, u2, l2, l2, c2, n2][i2]), g: b(255 * [c2, n2, n2, u2, l2, l2][i2]), b: b(255 * [l2, l2, c2, n2, n2, u2][i2]), a: b(o, 2) };
  }, D = function(e) {
    var r2 = e.toString(16);
    return r2.length < 2 ? "0" + r2 : r2;
  }, K = function(e) {
    var r2 = e.r, t2 = e.g, n2 = e.b, o = e.a, a = o < 1 ? D(b(255 * o)) : "";
    return "#" + D(r2) + D(t2) + D(n2) + a;
  }, L = function(e) {
    var r2 = e.r, t2 = e.g, n2 = e.b, o = e.a, a = Math.max(r2, t2, n2), l2 = a - Math.min(r2, t2, n2), u2 = l2 ? a === r2 ? (t2 - n2) / l2 : a === t2 ? 2 + (n2 - r2) / l2 : 4 + (r2 - t2) / l2 : 0;
    return { h: b(60 * (u2 < 0 ? u2 + 6 : u2)), s: b(a ? l2 / a * 100 : 0), v: b(a / 255 * 100), a: o };
  }, S = React$2.memo(function(r2) {
    var t2 = r2.hue, n2 = r2.onChange, o = g(["react-colorful__hue", r2.className]);
    return React$2.createElement("div", { className: o }, React$2.createElement(m, { onMove: function(e) {
      n2({ h: 360 * e.left });
    }, onKey: function(e) {
      n2({ h: s(t2 + 360 * e.left, 0, 360) });
    }, "aria-label": "Hue", "aria-valuenow": b(t2), "aria-valuemax": "360", "aria-valuemin": "0" }, React$2.createElement(p, { className: "react-colorful__hue-pointer", left: t2 / 360, color: q({ h: t2, s: 100, v: 100, a: 1 }) })));
  }), T = React$2.memo(function(r2) {
    var t2 = r2.hsva, n2 = r2.onChange, o = { backgroundColor: q({ h: t2.h, s: 100, v: 100, a: 1 }) };
    return React$2.createElement("div", { className: "react-colorful__saturation", style: o }, React$2.createElement(m, { onMove: function(e) {
      n2({ s: 100 * e.left, v: 100 - 100 * e.top });
    }, onKey: function(e) {
      n2({ s: s(t2.s + 100 * e.left, 0, 100), v: s(t2.v - 100 * e.top, 0, 100) });
    }, "aria-label": "Color", "aria-valuetext": "Saturation " + b(t2.s) + "%, Brightness " + b(t2.v) + "%" }, React$2.createElement(p, { className: "react-colorful__saturation-pointer", top: 1 - t2.v / 100, left: t2.s / 100, color: q(t2) })));
  }), F = function(e, r2) {
    if (e === r2) return true;
    for (var t2 in e) if (e[t2] !== r2[t2]) return false;
    return true;
  }, X = function(e, r2) {
    return e.toLowerCase() === r2.toLowerCase() || F(C(e), C(r2));
  };
  function Y(e, t2, l2) {
    var u2 = i(l2), c2 = reactExports.useState(function() {
      return e.toHsva(t2);
    }), s2 = c2[0], f2 = c2[1], v2 = reactExports.useRef({ color: t2, hsva: s2 });
    reactExports.useEffect(function() {
      if (!e.equal(t2, v2.current.color)) {
        var r2 = e.toHsva(t2);
        v2.current = { hsva: r2, color: t2 }, f2(r2);
      }
    }, [t2, e]), reactExports.useEffect(function() {
      var r2;
      F(s2, v2.current.hsva) || e.equal(r2 = e.fromHsva(s2), v2.current.color) || (v2.current = { hsva: s2, color: r2 }, u2(r2));
    }, [s2, e, u2]);
    var d2 = reactExports.useCallback(function(e2) {
      f2(function(r2) {
        return Object.assign({}, r2, e2);
      });
    }, []);
    return [s2, d2];
  }
  var V = "undefined" != typeof window ? reactExports.useLayoutEffect : reactExports.useEffect, $ = function() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
  }, J = /* @__PURE__ */ new Map(), Q = function(e) {
    V(function() {
      var r2 = e.current ? e.current.ownerDocument : document;
      if (void 0 !== r2 && !J.has(r2)) {
        var t2 = r2.createElement("style");
        t2.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, J.set(r2, t2);
        var n2 = $();
        n2 && t2.setAttribute("nonce", n2), r2.head.appendChild(t2);
      }
    }, []);
  }, U = function(t2) {
    var n2 = t2.className, o = t2.colorModel, a = t2.color, l2 = void 0 === a ? o.defaultColor : a, i2 = t2.onChange, s2 = c(t2, ["className", "colorModel", "color", "onChange"]), f2 = reactExports.useRef(null);
    Q(f2);
    var v2 = Y(o, l2, i2), d2 = v2[0], h2 = v2[1], m2 = g(["react-colorful", n2]);
    return React$2.createElement("div", u({}, s2, { ref: f2, className: m2 }), React$2.createElement(T, { hsva: d2, onChange: h2 }), React$2.createElement(S, { hue: d2.h, onChange: h2, className: "react-colorful__last-control" }));
  }, W = { defaultColor: "000", toHsva: x$1, fromHsva: function(e) {
    return w({ h: e.h, s: e.s, v: e.v, a: 1 });
  }, equal: X }, Z = function(r2) {
    return React$2.createElement(U, u({}, r2, { colorModel: W }));
  };
  const ColorPicker = ({
    color,
    onColorChange,
    onClose
  }) => {
    const [tempColor, setTempColor] = reactExports.useState(color.value);
    const handleApply = () => {
      onColorChange(tempColor);
      onClose();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2147483647
        },
        onClick: onClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              minWidth: "300px"
            },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: "16px" }, children: "Edit Color" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "8px", fontSize: "13px", color: "#6b7280" }, children: [
                  "Property: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: color.property })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "8px", fontSize: "13px", color: "#6b7280" }, children: [
                  "Category: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: color.category })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: "16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Z, { color: tempColor, onChange: setTempColor }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: "16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: tempColor,
                  onChange: (e) => setTempColor(e.target.value),
                  style: {
                    width: "100%",
                    padding: "8px 12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontFamily: "monospace"
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    style: {
                      padding: "8px 16px",
                      backgroundColor: "#e5e7eb",
                      color: "#374151",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "13px"
                    },
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: handleApply,
                    style: {
                      padding: "8px 16px",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "13px"
                    },
                    children: "Apply"
                  }
                )
              ] })
            ]
          }
        )
      }
    );
  };
  var picocolors_browser = { exports: {} };
  var x = String;
  var create = function() {
    return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x, blackBright: x, redBright: x, greenBright: x, yellowBright: x, blueBright: x, magentaBright: x, cyanBright: x, whiteBright: x, bgBlackBright: x, bgRedBright: x, bgGreenBright: x, bgYellowBright: x, bgBlueBright: x, bgMagentaBright: x, bgCyanBright: x, bgWhiteBright: x };
  };
  picocolors_browser.exports = create();
  picocolors_browser.exports.createColors = create;
  var picocolors_browserExports = picocolors_browser.exports;
  const __viteBrowserExternal = {};
  const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  let pico = picocolors_browserExports;
  let terminalHighlight$1 = require$$2;
  let CssSyntaxError$3 = class CssSyntaxError2 extends Error {
    constructor(message, line, column, source, file, plugin) {
      super(message);
      this.name = "CssSyntaxError";
      this.reason = message;
      if (file) {
        this.file = file;
      }
      if (source) {
        this.source = source;
      }
      if (plugin) {
        this.plugin = plugin;
      }
      if (typeof line !== "undefined" && typeof column !== "undefined") {
        if (typeof line === "number") {
          this.line = line;
          this.column = column;
        } else {
          this.line = line.line;
          this.column = line.column;
          this.endLine = column.line;
          this.endColumn = column.column;
        }
      }
      this.setMessage();
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CssSyntaxError2);
      }
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "";
      this.message += this.file ? this.file : "<css input>";
      if (typeof this.line !== "undefined") {
        this.message += ":" + this.line + ":" + this.column;
      }
      this.message += ": " + this.reason;
    }
    showSourceCode(color) {
      if (!this.source) return "";
      let css = this.source;
      if (color == null) color = pico.isColorSupported;
      let aside = (text) => text;
      let mark = (text) => text;
      let highlight = (text) => text;
      if (color) {
        let { bold, gray, red } = pico.createColors(true);
        mark = (text) => bold(red(text));
        aside = (text) => gray(text);
        if (terminalHighlight$1) {
          highlight = (text) => terminalHighlight$1(text);
        }
      }
      let lines = css.split(/\r?\n/);
      let start = Math.max(this.line - 3, 0);
      let end = Math.min(this.line + 2, lines.length);
      let maxWidth = String(end).length;
      return lines.slice(start, end).map((line, index2) => {
        let number = start + 1 + index2;
        let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
        if (number === this.line) {
          if (line.length > 160) {
            let padding = 20;
            let subLineStart = Math.max(0, this.column - padding);
            let subLineEnd = Math.max(
              this.column + padding,
              this.endColumn + padding
            );
            let subLine = line.slice(subLineStart, subLineEnd);
            let spacing2 = aside(gutter.replace(/\d/g, " ")) + line.slice(0, Math.min(this.column - 1, padding - 1)).replace(/[^\t]/g, " ");
            return mark(">") + aside(gutter) + highlight(subLine) + "\n " + spacing2 + mark("^");
          }
          let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return mark(">") + aside(gutter) + highlight(line) + "\n " + spacing + mark("^");
        }
        return " " + aside(gutter) + highlight(line);
      }).join("\n");
    }
    toString() {
      let code = this.showSourceCode();
      if (code) {
        code = "\n\n" + code + "\n";
      }
      return this.name + ": " + this.message + code;
    }
  };
  var cssSyntaxError = CssSyntaxError$3;
  CssSyntaxError$3.default = CssSyntaxError$3;
  const DEFAULT_RAW = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: false
  };
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  let Stringifier$2 = class Stringifier {
    constructor(builder) {
      this.builder = builder;
    }
    atrule(node2, semicolon) {
      let name = "@" + node2.name;
      let params = node2.params ? this.rawValue(node2, "params") : "";
      if (typeof node2.raws.afterName !== "undefined") {
        name += node2.raws.afterName;
      } else if (params) {
        name += " ";
      }
      if (node2.nodes) {
        this.block(node2, name + params);
      } else {
        let end = (node2.raws.between || "") + (semicolon ? ";" : "");
        this.builder(name + params + end, node2);
      }
    }
    beforeAfter(node2, detect) {
      let value;
      if (node2.type === "decl") {
        value = this.raw(node2, null, "beforeDecl");
      } else if (node2.type === "comment") {
        value = this.raw(node2, null, "beforeComment");
      } else if (detect === "before") {
        value = this.raw(node2, null, "beforeRule");
      } else {
        value = this.raw(node2, null, "beforeClose");
      }
      let buf = node2.parent;
      let depth = 0;
      while (buf && buf.type !== "root") {
        depth += 1;
        buf = buf.parent;
      }
      if (value.includes("\n")) {
        let indent = this.raw(node2, null, "indent");
        if (indent.length) {
          for (let step = 0; step < depth; step++) value += indent;
        }
      }
      return value;
    }
    block(node2, start) {
      let between = this.raw(node2, "between", "beforeOpen");
      this.builder(start + between + "{", node2, "start");
      let after;
      if (node2.nodes && node2.nodes.length) {
        this.body(node2);
        after = this.raw(node2, "after");
      } else {
        after = this.raw(node2, "after", "emptyBody");
      }
      if (after) this.builder(after);
      this.builder("}", node2, "end");
    }
    body(node2) {
      let last2 = node2.nodes.length - 1;
      while (last2 > 0) {
        if (node2.nodes[last2].type !== "comment") break;
        last2 -= 1;
      }
      let semicolon = this.raw(node2, "semicolon");
      for (let i2 = 0; i2 < node2.nodes.length; i2++) {
        let child = node2.nodes[i2];
        let before = this.raw(child, "before");
        if (before) this.builder(before);
        this.stringify(child, last2 !== i2 || semicolon);
      }
    }
    comment(node2) {
      let left = this.raw(node2, "left", "commentLeft");
      let right = this.raw(node2, "right", "commentRight");
      this.builder("/*" + left + node2.text + right + "*/", node2);
    }
    decl(node2, semicolon) {
      let between = this.raw(node2, "between", "colon");
      let string = node2.prop + between + this.rawValue(node2, "value");
      if (node2.important) {
        string += node2.raws.important || " !important";
      }
      if (semicolon) string += ";";
      this.builder(string, node2);
    }
    document(node2) {
      this.body(node2);
    }
    raw(node2, own, detect) {
      let value;
      if (!detect) detect = own;
      if (own) {
        value = node2.raws[own];
        if (typeof value !== "undefined") return value;
      }
      let parent = node2.parent;
      if (detect === "before") {
        if (!parent || parent.type === "root" && parent.first === node2) {
          return "";
        }
        if (parent && parent.type === "document") {
          return "";
        }
      }
      if (!parent) return DEFAULT_RAW[detect];
      let root2 = node2.root();
      if (!root2.rawCache) root2.rawCache = {};
      if (typeof root2.rawCache[detect] !== "undefined") {
        return root2.rawCache[detect];
      }
      if (detect === "before" || detect === "after") {
        return this.beforeAfter(node2, detect);
      } else {
        let method = "raw" + capitalize(detect);
        if (this[method]) {
          value = this[method](root2, node2);
        } else {
          root2.walk((i2) => {
            value = i2.raws[own];
            if (typeof value !== "undefined") return false;
          });
        }
      }
      if (typeof value === "undefined") value = DEFAULT_RAW[detect];
      root2.rawCache[detect] = value;
      return value;
    }
    rawBeforeClose(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length > 0) {
          if (typeof i2.raws.after !== "undefined") {
            value = i2.raws.after;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        }
      });
      if (value) value = value.replace(/\S/g, "");
      return value;
    }
    rawBeforeComment(root2, node2) {
      let value;
      root2.walkComments((i2) => {
        if (typeof i2.raws.before !== "undefined") {
          value = i2.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      });
      if (typeof value === "undefined") {
        value = this.raw(node2, null, "beforeDecl");
      } else if (value) {
        value = value.replace(/\S/g, "");
      }
      return value;
    }
    rawBeforeDecl(root2, node2) {
      let value;
      root2.walkDecls((i2) => {
        if (typeof i2.raws.before !== "undefined") {
          value = i2.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      });
      if (typeof value === "undefined") {
        value = this.raw(node2, null, "beforeRule");
      } else if (value) {
        value = value.replace(/\S/g, "");
      }
      return value;
    }
    rawBeforeOpen(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.type !== "decl") {
          value = i2.raws.between;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawBeforeRule(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && (i2.parent !== root2 || root2.first !== i2)) {
          if (typeof i2.raws.before !== "undefined") {
            value = i2.raws.before;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        }
      });
      if (value) value = value.replace(/\S/g, "");
      return value;
    }
    rawColon(root2) {
      let value;
      root2.walkDecls((i2) => {
        if (typeof i2.raws.between !== "undefined") {
          value = i2.raws.between.replace(/[^\s:]/g, "");
          return false;
        }
      });
      return value;
    }
    rawEmptyBody(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length === 0) {
          value = i2.raws.after;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawIndent(root2) {
      if (root2.raws.indent) return root2.raws.indent;
      let value;
      root2.walk((i2) => {
        let p2 = i2.parent;
        if (p2 && p2 !== root2 && p2.parent && p2.parent === root2) {
          if (typeof i2.raws.before !== "undefined") {
            let parts = i2.raws.before.split("\n");
            value = parts[parts.length - 1];
            value = value.replace(/\S/g, "");
            return false;
          }
        }
      });
      return value;
    }
    rawSemicolon(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length && i2.last.type === "decl") {
          value = i2.raws.semicolon;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawValue(node2, prop) {
      let value = node2[prop];
      let raw = node2.raws[prop];
      if (raw && raw.value === value) {
        return raw.raw;
      }
      return value;
    }
    root(node2) {
      this.body(node2);
      if (node2.raws.after) this.builder(node2.raws.after);
    }
    rule(node2) {
      this.block(node2, this.rawValue(node2, "selector"));
      if (node2.raws.ownSemicolon) {
        this.builder(node2.raws.ownSemicolon, node2, "end");
      }
    }
    stringify(node2, semicolon) {
      if (!this[node2.type]) {
        throw new Error(
          "Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier."
        );
      }
      this[node2.type](node2, semicolon);
    }
  };
  var stringifier = Stringifier$2;
  Stringifier$2.default = Stringifier$2;
  let Stringifier$1 = stringifier;
  function stringify$4(node2, builder) {
    let str = new Stringifier$1(builder);
    str.stringify(node2);
  }
  var stringify_1 = stringify$4;
  stringify$4.default = stringify$4;
  var symbols = {};
  symbols.isClean = Symbol("isClean");
  symbols.my = Symbol("my");
  let CssSyntaxError$2 = cssSyntaxError;
  let Stringifier = stringifier;
  let stringify$3 = stringify_1;
  let { isClean: isClean$2, my: my$2 } = symbols;
  function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for (let i2 in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, i2)) {
        continue;
      }
      if (i2 === "proxyCache") continue;
      let value = obj[i2];
      let type2 = typeof value;
      if (i2 === "parent" && type2 === "object") {
        if (parent) cloned[i2] = parent;
      } else if (i2 === "source") {
        cloned[i2] = value;
      } else if (Array.isArray(value)) {
        cloned[i2] = value.map((j) => cloneNode(j, cloned));
      } else {
        if (type2 === "object" && value !== null) value = cloneNode(value);
        cloned[i2] = value;
      }
    }
    return cloned;
  }
  function sourceOffset(inputCSS, position) {
    if (position && typeof position.offset !== "undefined") {
      return position.offset;
    }
    let column = 1;
    let line = 1;
    let offset = 0;
    for (let i2 = 0; i2 < inputCSS.length; i2++) {
      if (line === position.line && column === position.column) {
        offset = i2;
        break;
      }
      if (inputCSS[i2] === "\n") {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }
    return offset;
  }
  let Node$4 = class Node {
    get proxyOf() {
      return this;
    }
    constructor(defaults = {}) {
      this.raws = {};
      this[isClean$2] = false;
      this[my$2] = true;
      for (let name in defaults) {
        if (name === "nodes") {
          this.nodes = [];
          for (let node2 of defaults[name]) {
            if (typeof node2.clone === "function") {
              this.append(node2.clone());
            } else {
              this.append(node2);
            }
          }
        } else {
          this[name] = defaults[name];
        }
      }
    }
    addToError(error) {
      error.postcssNode = this;
      if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
        let s2 = this.source;
        error.stack = error.stack.replace(
          /\n\s{4}at /,
          `$&${s2.input.from}:${s2.start.line}:${s2.start.column}$&`
        );
      }
      return error;
    }
    after(add) {
      this.parent.insertAfter(this, add);
      return this;
    }
    assign(overrides = {}) {
      for (let name in overrides) {
        this[name] = overrides[name];
      }
      return this;
    }
    before(add) {
      this.parent.insertBefore(this, add);
      return this;
    }
    cleanRaws(keepBetween) {
      delete this.raws.before;
      delete this.raws.after;
      if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
      let cloned = cloneNode(this);
      for (let name in overrides) {
        cloned[name] = overrides[name];
      }
      return cloned;
    }
    cloneAfter(overrides = {}) {
      let cloned = this.clone(overrides);
      this.parent.insertAfter(this, cloned);
      return cloned;
    }
    cloneBefore(overrides = {}) {
      let cloned = this.clone(overrides);
      this.parent.insertBefore(this, cloned);
      return cloned;
    }
    error(message, opts = {}) {
      if (this.source) {
        let { end, start } = this.rangeBy(opts);
        return this.source.input.error(
          message,
          { column: start.column, line: start.line },
          { column: end.column, line: end.line },
          opts
        );
      }
      return new CssSyntaxError$2(message);
    }
    getProxyProcessor() {
      return {
        get(node2, prop) {
          if (prop === "proxyOf") {
            return node2;
          } else if (prop === "root") {
            return () => node2.root().toProxy();
          } else {
            return node2[prop];
          }
        },
        set(node2, prop, value) {
          if (node2[prop] === value) return true;
          node2[prop] = value;
          if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
          prop === "text") {
            node2.markDirty();
          }
          return true;
        }
      };
    }
    /* c8 ignore next 3 */
    markClean() {
      this[isClean$2] = true;
    }
    markDirty() {
      if (this[isClean$2]) {
        this[isClean$2] = false;
        let next = this;
        while (next = next.parent) {
          next[isClean$2] = false;
        }
      }
    }
    next() {
      if (!this.parent) return void 0;
      let index2 = this.parent.index(this);
      return this.parent.nodes[index2 + 1];
    }
    positionBy(opts = {}) {
      let pos = this.source.start;
      if (opts.index) {
        pos = this.positionInside(opts.index);
      } else if (opts.word) {
        let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
        let stringRepresentation = inputString.slice(
          sourceOffset(inputString, this.source.start),
          sourceOffset(inputString, this.source.end)
        );
        let index2 = stringRepresentation.indexOf(opts.word);
        if (index2 !== -1) pos = this.positionInside(index2);
      }
      return pos;
    }
    positionInside(index2) {
      let column = this.source.start.column;
      let line = this.source.start.line;
      let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
      let offset = sourceOffset(inputString, this.source.start);
      let end = offset + index2;
      for (let i2 = offset; i2 < end; i2++) {
        if (inputString[i2] === "\n") {
          column = 1;
          line += 1;
        } else {
          column += 1;
        }
      }
      return { column, line, offset: end };
    }
    prev() {
      if (!this.parent) return void 0;
      let index2 = this.parent.index(this);
      return this.parent.nodes[index2 - 1];
    }
    rangeBy(opts = {}) {
      let inputString = "document" in this.source.input ? this.source.input.document : this.source.input.css;
      let start = {
        column: this.source.start.column,
        line: this.source.start.line,
        offset: sourceOffset(inputString, this.source.start)
      };
      let end = this.source.end ? {
        column: this.source.end.column + 1,
        line: this.source.end.line,
        offset: typeof this.source.end.offset === "number" ? (
          // `source.end.offset` is exclusive, so we don't need to add 1
          this.source.end.offset
        ) : (
          // Since line/column in this.source.end is inclusive,
          // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
          // So, we add 1 to convert it to exclusive.
          sourceOffset(inputString, this.source.end) + 1
        )
      } : {
        column: start.column + 1,
        line: start.line,
        offset: start.offset + 1
      };
      if (opts.word) {
        let stringRepresentation = inputString.slice(
          sourceOffset(inputString, this.source.start),
          sourceOffset(inputString, this.source.end)
        );
        let index2 = stringRepresentation.indexOf(opts.word);
        if (index2 !== -1) {
          start = this.positionInside(index2);
          end = this.positionInside(index2 + opts.word.length);
        }
      } else {
        if (opts.start) {
          start = {
            column: opts.start.column,
            line: opts.start.line,
            offset: sourceOffset(inputString, opts.start)
          };
        } else if (opts.index) {
          start = this.positionInside(opts.index);
        }
        if (opts.end) {
          end = {
            column: opts.end.column,
            line: opts.end.line,
            offset: sourceOffset(inputString, opts.end)
          };
        } else if (typeof opts.endIndex === "number") {
          end = this.positionInside(opts.endIndex);
        } else if (opts.index) {
          end = this.positionInside(opts.index + 1);
        }
      }
      if (end.line < start.line || end.line === start.line && end.column <= start.column) {
        end = {
          column: start.column + 1,
          line: start.line,
          offset: start.offset + 1
        };
      }
      return { end, start };
    }
    raw(prop, defaultType) {
      let str = new Stringifier();
      return str.raw(this, prop, defaultType);
    }
    remove() {
      if (this.parent) {
        this.parent.removeChild(this);
      }
      this.parent = void 0;
      return this;
    }
    replaceWith(...nodes) {
      if (this.parent) {
        let bookmark = this;
        let foundSelf = false;
        for (let node2 of nodes) {
          if (node2 === this) {
            foundSelf = true;
          } else if (foundSelf) {
            this.parent.insertAfter(bookmark, node2);
            bookmark = node2;
          } else {
            this.parent.insertBefore(bookmark, node2);
          }
        }
        if (!foundSelf) {
          this.remove();
        }
      }
      return this;
    }
    root() {
      let result2 = this;
      while (result2.parent && result2.parent.type !== "document") {
        result2 = result2.parent;
      }
      return result2;
    }
    toJSON(_, inputs) {
      let fixed = {};
      let emitInputs = inputs == null;
      inputs = inputs || /* @__PURE__ */ new Map();
      let inputsNextIndex = 0;
      for (let name in this) {
        if (!Object.prototype.hasOwnProperty.call(this, name)) {
          continue;
        }
        if (name === "parent" || name === "proxyCache") continue;
        let value = this[name];
        if (Array.isArray(value)) {
          fixed[name] = value.map((i2) => {
            if (typeof i2 === "object" && i2.toJSON) {
              return i2.toJSON(null, inputs);
            } else {
              return i2;
            }
          });
        } else if (typeof value === "object" && value.toJSON) {
          fixed[name] = value.toJSON(null, inputs);
        } else if (name === "source") {
          if (value == null) continue;
          let inputId = inputs.get(value.input);
          if (inputId == null) {
            inputId = inputsNextIndex;
            inputs.set(value.input, inputsNextIndex);
            inputsNextIndex++;
          }
          fixed[name] = {
            end: value.end,
            inputId,
            start: value.start
          };
        } else {
          fixed[name] = value;
        }
      }
      if (emitInputs) {
        fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
      }
      return fixed;
    }
    toProxy() {
      if (!this.proxyCache) {
        this.proxyCache = new Proxy(this, this.getProxyProcessor());
      }
      return this.proxyCache;
    }
    toString(stringifier2 = stringify$3) {
      if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
      let result2 = "";
      stringifier2(this, (i2) => {
        result2 += i2;
      });
      return result2;
    }
    warn(result2, text, opts = {}) {
      let data = { node: this };
      for (let i2 in opts) data[i2] = opts[i2];
      return result2.warn(text, data);
    }
  };
  var node = Node$4;
  Node$4.default = Node$4;
  let Node$3 = node;
  let Comment$4 = class Comment extends Node$3 {
    constructor(defaults) {
      super(defaults);
      this.type = "comment";
    }
  };
  var comment = Comment$4;
  Comment$4.default = Comment$4;
  let Node$2 = node;
  let Declaration$4 = class Declaration extends Node$2 {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(defaults) {
      if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
        defaults = { ...defaults, value: String(defaults.value) };
      }
      super(defaults);
      this.type = "decl";
    }
  };
  var declaration = Declaration$4;
  Declaration$4.default = Declaration$4;
  let Comment$3 = comment;
  let Declaration$3 = declaration;
  let Node$1 = node;
  let { isClean: isClean$1, my: my$1 } = symbols;
  let AtRule$4, parse$4, Root$6, Rule$4;
  function cleanSource(nodes) {
    return nodes.map((i2) => {
      if (i2.nodes) i2.nodes = cleanSource(i2.nodes);
      delete i2.source;
      return i2;
    });
  }
  function markTreeDirty(node2) {
    node2[isClean$1] = false;
    if (node2.proxyOf.nodes) {
      for (let i2 of node2.proxyOf.nodes) {
        markTreeDirty(i2);
      }
    }
  }
  let Container$7 = class Container2 extends Node$1 {
    get first() {
      if (!this.proxyOf.nodes) return void 0;
      return this.proxyOf.nodes[0];
    }
    get last() {
      if (!this.proxyOf.nodes) return void 0;
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...children) {
      for (let child of children) {
        let nodes = this.normalize(child, this.last);
        for (let node2 of nodes) this.proxyOf.nodes.push(node2);
      }
      this.markDirty();
      return this;
    }
    cleanRaws(keepBetween) {
      super.cleanRaws(keepBetween);
      if (this.nodes) {
        for (let node2 of this.nodes) node2.cleanRaws(keepBetween);
      }
    }
    each(callback) {
      if (!this.proxyOf.nodes) return void 0;
      let iterator = this.getIterator();
      let index2, result2;
      while (this.indexes[iterator] < this.proxyOf.nodes.length) {
        index2 = this.indexes[iterator];
        result2 = callback(this.proxyOf.nodes[index2], index2);
        if (result2 === false) break;
        this.indexes[iterator] += 1;
      }
      delete this.indexes[iterator];
      return result2;
    }
    every(condition) {
      return this.nodes.every(condition);
    }
    getIterator() {
      if (!this.lastEach) this.lastEach = 0;
      if (!this.indexes) this.indexes = {};
      this.lastEach += 1;
      let iterator = this.lastEach;
      this.indexes[iterator] = 0;
      return iterator;
    }
    getProxyProcessor() {
      return {
        get(node2, prop) {
          if (prop === "proxyOf") {
            return node2;
          } else if (!node2[prop]) {
            return node2[prop];
          } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
            return (...args) => {
              return node2[prop](
                ...args.map((i2) => {
                  if (typeof i2 === "function") {
                    return (child, index2) => i2(child.toProxy(), index2);
                  } else {
                    return i2;
                  }
                })
              );
            };
          } else if (prop === "every" || prop === "some") {
            return (cb2) => {
              return node2[prop](
                (child, ...other) => cb2(child.toProxy(), ...other)
              );
            };
          } else if (prop === "root") {
            return () => node2.root().toProxy();
          } else if (prop === "nodes") {
            return node2.nodes.map((i2) => i2.toProxy());
          } else if (prop === "first" || prop === "last") {
            return node2[prop].toProxy();
          } else {
            return node2[prop];
          }
        },
        set(node2, prop, value) {
          if (node2[prop] === value) return true;
          node2[prop] = value;
          if (prop === "name" || prop === "params" || prop === "selector") {
            node2.markDirty();
          }
          return true;
        }
      };
    }
    index(child) {
      if (typeof child === "number") return child;
      if (child.proxyOf) child = child.proxyOf;
      return this.proxyOf.nodes.indexOf(child);
    }
    insertAfter(exist, add) {
      let existIndex = this.index(exist);
      let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
      existIndex = this.index(exist);
      for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
      let index2;
      for (let id2 in this.indexes) {
        index2 = this.indexes[id2];
        if (existIndex < index2) {
          this.indexes[id2] = index2 + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    insertBefore(exist, add) {
      let existIndex = this.index(exist);
      let type2 = existIndex === 0 ? "prepend" : false;
      let nodes = this.normalize(
        add,
        this.proxyOf.nodes[existIndex],
        type2
      ).reverse();
      existIndex = this.index(exist);
      for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex, 0, node2);
      let index2;
      for (let id2 in this.indexes) {
        index2 = this.indexes[id2];
        if (existIndex <= index2) {
          this.indexes[id2] = index2 + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    normalize(nodes, sample) {
      if (typeof nodes === "string") {
        nodes = cleanSource(parse$4(nodes).nodes);
      } else if (typeof nodes === "undefined") {
        nodes = [];
      } else if (Array.isArray(nodes)) {
        nodes = nodes.slice(0);
        for (let i2 of nodes) {
          if (i2.parent) i2.parent.removeChild(i2, "ignore");
        }
      } else if (nodes.type === "root" && this.type !== "document") {
        nodes = nodes.nodes.slice(0);
        for (let i2 of nodes) {
          if (i2.parent) i2.parent.removeChild(i2, "ignore");
        }
      } else if (nodes.type) {
        nodes = [nodes];
      } else if (nodes.prop) {
        if (typeof nodes.value === "undefined") {
          throw new Error("Value field is missed in node creation");
        } else if (typeof nodes.value !== "string") {
          nodes.value = String(nodes.value);
        }
        nodes = [new Declaration$3(nodes)];
      } else if (nodes.selector || nodes.selectors) {
        nodes = [new Rule$4(nodes)];
      } else if (nodes.name) {
        nodes = [new AtRule$4(nodes)];
      } else if (nodes.text) {
        nodes = [new Comment$3(nodes)];
      } else {
        throw new Error("Unknown node type in node creation");
      }
      let processed = nodes.map((i2) => {
        if (!i2[my$1]) Container2.rebuild(i2);
        i2 = i2.proxyOf;
        if (i2.parent) i2.parent.removeChild(i2);
        if (i2[isClean$1]) markTreeDirty(i2);
        if (!i2.raws) i2.raws = {};
        if (typeof i2.raws.before === "undefined") {
          if (sample && typeof sample.raws.before !== "undefined") {
            i2.raws.before = sample.raws.before.replace(/\S/g, "");
          }
        }
        i2.parent = this.proxyOf;
        return i2;
      });
      return processed;
    }
    prepend(...children) {
      children = children.reverse();
      for (let child of children) {
        let nodes = this.normalize(child, this.first, "prepend").reverse();
        for (let node2 of nodes) this.proxyOf.nodes.unshift(node2);
        for (let id2 in this.indexes) {
          this.indexes[id2] = this.indexes[id2] + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    push(child) {
      child.parent = this;
      this.proxyOf.nodes.push(child);
      return this;
    }
    removeAll() {
      for (let node2 of this.proxyOf.nodes) node2.parent = void 0;
      this.proxyOf.nodes = [];
      this.markDirty();
      return this;
    }
    removeChild(child) {
      child = this.index(child);
      this.proxyOf.nodes[child].parent = void 0;
      this.proxyOf.nodes.splice(child, 1);
      let index2;
      for (let id2 in this.indexes) {
        index2 = this.indexes[id2];
        if (index2 >= child) {
          this.indexes[id2] = index2 - 1;
        }
      }
      this.markDirty();
      return this;
    }
    replaceValues(pattern, opts, callback) {
      if (!callback) {
        callback = opts;
        opts = {};
      }
      this.walkDecls((decl) => {
        if (opts.props && !opts.props.includes(decl.prop)) return;
        if (opts.fast && !decl.value.includes(opts.fast)) return;
        decl.value = decl.value.replace(pattern, callback);
      });
      this.markDirty();
      return this;
    }
    some(condition) {
      return this.nodes.some(condition);
    }
    walk(callback) {
      return this.each((child, i2) => {
        let result2;
        try {
          result2 = callback(child, i2);
        } catch (e) {
          throw child.addToError(e);
        }
        if (result2 !== false && child.walk) {
          result2 = child.walk(callback);
        }
        return result2;
      });
    }
    walkAtRules(name, callback) {
      if (!callback) {
        callback = name;
        return this.walk((child, i2) => {
          if (child.type === "atrule") {
            return callback(child, i2);
          }
        });
      }
      if (name instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "atrule" && name.test(child.name)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "atrule" && child.name === name) {
          return callback(child, i2);
        }
      });
    }
    walkComments(callback) {
      return this.walk((child, i2) => {
        if (child.type === "comment") {
          return callback(child, i2);
        }
      });
    }
    walkDecls(prop, callback) {
      if (!callback) {
        callback = prop;
        return this.walk((child, i2) => {
          if (child.type === "decl") {
            return callback(child, i2);
          }
        });
      }
      if (prop instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "decl" && prop.test(child.prop)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "decl" && child.prop === prop) {
          return callback(child, i2);
        }
      });
    }
    walkRules(selector, callback) {
      if (!callback) {
        callback = selector;
        return this.walk((child, i2) => {
          if (child.type === "rule") {
            return callback(child, i2);
          }
        });
      }
      if (selector instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "rule" && selector.test(child.selector)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "rule" && child.selector === selector) {
          return callback(child, i2);
        }
      });
    }
  };
  Container$7.registerParse = (dependant) => {
    parse$4 = dependant;
  };
  Container$7.registerRule = (dependant) => {
    Rule$4 = dependant;
  };
  Container$7.registerAtRule = (dependant) => {
    AtRule$4 = dependant;
  };
  Container$7.registerRoot = (dependant) => {
    Root$6 = dependant;
  };
  var container = Container$7;
  Container$7.default = Container$7;
  Container$7.rebuild = (node2) => {
    if (node2.type === "atrule") {
      Object.setPrototypeOf(node2, AtRule$4.prototype);
    } else if (node2.type === "rule") {
      Object.setPrototypeOf(node2, Rule$4.prototype);
    } else if (node2.type === "decl") {
      Object.setPrototypeOf(node2, Declaration$3.prototype);
    } else if (node2.type === "comment") {
      Object.setPrototypeOf(node2, Comment$3.prototype);
    } else if (node2.type === "root") {
      Object.setPrototypeOf(node2, Root$6.prototype);
    }
    node2[my$1] = true;
    if (node2.nodes) {
      node2.nodes.forEach((child) => {
        Container$7.rebuild(child);
      });
    }
  };
  let Container$6 = container;
  let AtRule$3 = class AtRule extends Container$6 {
    constructor(defaults) {
      super(defaults);
      this.type = "atrule";
    }
    append(...children) {
      if (!this.proxyOf.nodes) this.nodes = [];
      return super.append(...children);
    }
    prepend(...children) {
      if (!this.proxyOf.nodes) this.nodes = [];
      return super.prepend(...children);
    }
  };
  var atRule = AtRule$3;
  AtRule$3.default = AtRule$3;
  Container$6.registerAtRule(AtRule$3);
  let Container$5 = container;
  let LazyResult$4, Processor$3;
  let Document$3 = class Document extends Container$5 {
    constructor(defaults) {
      super({ type: "document", ...defaults });
      if (!this.nodes) {
        this.nodes = [];
      }
    }
    toResult(opts = {}) {
      let lazy = new LazyResult$4(new Processor$3(), this, opts);
      return lazy.stringify();
    }
  };
  Document$3.registerLazyResult = (dependant) => {
    LazyResult$4 = dependant;
  };
  Document$3.registerProcessor = (dependant) => {
    Processor$3 = dependant;
  };
  var document$1 = Document$3;
  Document$3.default = Document$3;
  let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  let nanoid$1 = (size = 21) => {
    let id2 = "";
    let i2 = size | 0;
    while (i2--) {
      id2 += urlAlphabet[Math.random() * 64 | 0];
    }
    return id2;
  };
  var nonSecure = { nanoid: nanoid$1 };
  let { existsSync, readFileSync } = require$$2;
  let { dirname: dirname$1, join } = require$$2;
  let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
  function fromBase64(str) {
    if (Buffer) {
      return Buffer.from(str, "base64").toString();
    } else {
      return window.atob(str);
    }
  }
  let PreviousMap$2 = class PreviousMap {
    constructor(css, opts) {
      if (opts.map === false) return;
      this.loadAnnotation(css);
      this.inline = this.startWith(this.annotation, "data:");
      let prev = opts.map ? opts.map.prev : void 0;
      let text = this.loadMap(opts.from, prev);
      if (!this.mapFile && opts.from) {
        this.mapFile = opts.from;
      }
      if (this.mapFile) this.root = dirname$1(this.mapFile);
      if (text) this.text = text;
    }
    consumer() {
      if (!this.consumerCache) {
        this.consumerCache = new SourceMapConsumer$2(this.text);
      }
      return this.consumerCache;
    }
    decodeInline(text) {
      let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
      let baseUri = /^data:application\/json;base64,/;
      let charsetUri = /^data:application\/json;charset=utf-?8,/;
      let uri = /^data:application\/json,/;
      let uriMatch = text.match(charsetUri) || text.match(uri);
      if (uriMatch) {
        return decodeURIComponent(text.substr(uriMatch[0].length));
      }
      let baseUriMatch = text.match(baseCharsetUri) || text.match(baseUri);
      if (baseUriMatch) {
        return fromBase64(text.substr(baseUriMatch[0].length));
      }
      let encoding = text.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + encoding);
    }
    getAnnotationURL(sourceMapString) {
      return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(map) {
      if (typeof map !== "object") return false;
      return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
    }
    loadAnnotation(css) {
      let comments = css.match(/\/\*\s*# sourceMappingURL=/g);
      if (!comments) return;
      let start = css.lastIndexOf(comments.pop());
      let end = css.indexOf("*/", start);
      if (start > -1 && end > -1) {
        this.annotation = this.getAnnotationURL(css.substring(start, end));
      }
    }
    loadFile(path) {
      this.root = dirname$1(path);
      if (existsSync(path)) {
        this.mapFile = path;
        return readFileSync(path, "utf-8").toString().trim();
      }
    }
    loadMap(file, prev) {
      if (prev === false) return false;
      if (prev) {
        if (typeof prev === "string") {
          return prev;
        } else if (typeof prev === "function") {
          let prevPath = prev(file);
          if (prevPath) {
            let map = this.loadFile(prevPath);
            if (!map) {
              throw new Error(
                "Unable to load previous source map: " + prevPath.toString()
              );
            }
            return map;
          }
        } else if (prev instanceof SourceMapConsumer$2) {
          return SourceMapGenerator$2.fromSourceMap(prev).toString();
        } else if (prev instanceof SourceMapGenerator$2) {
          return prev.toString();
        } else if (this.isMap(prev)) {
          return JSON.stringify(prev);
        } else {
          throw new Error(
            "Unsupported previous source map format: " + prev.toString()
          );
        }
      } else if (this.inline) {
        return this.decodeInline(this.annotation);
      } else if (this.annotation) {
        let map = this.annotation;
        if (file) map = join(dirname$1(file), map);
        return this.loadFile(map);
      }
    }
    startWith(string, start) {
      if (!string) return false;
      return string.substr(0, start.length) === start;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  };
  var previousMap = PreviousMap$2;
  PreviousMap$2.default = PreviousMap$2;
  let { nanoid } = nonSecure;
  let { isAbsolute, resolve: resolve$1 } = require$$2;
  let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
  let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
  let CssSyntaxError$1 = cssSyntaxError;
  let PreviousMap$1 = previousMap;
  let terminalHighlight = require$$2;
  let lineToIndexCache = Symbol("lineToIndexCache");
  let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
  let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
  function getLineToIndex(input2) {
    if (input2[lineToIndexCache]) return input2[lineToIndexCache];
    let lines = input2.css.split("\n");
    let lineToIndex = new Array(lines.length);
    let prevIndex = 0;
    for (let i2 = 0, l2 = lines.length; i2 < l2; i2++) {
      lineToIndex[i2] = prevIndex;
      prevIndex += lines[i2].length + 1;
    }
    input2[lineToIndexCache] = lineToIndex;
    return lineToIndex;
  }
  let Input$4 = class Input {
    get from() {
      return this.file || this.id;
    }
    constructor(css, opts = {}) {
      if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
        throw new Error(`PostCSS received ${css} instead of CSS string`);
      }
      this.css = css.toString();
      if (this.css[0] === "\uFEFF" || this.css[0] === "￾") {
        this.hasBOM = true;
        this.css = this.css.slice(1);
      } else {
        this.hasBOM = false;
      }
      this.document = this.css;
      if (opts.document) this.document = opts.document.toString();
      if (opts.from) {
        if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
          this.file = opts.from;
        } else {
          this.file = resolve$1(opts.from);
        }
      }
      if (pathAvailable$1 && sourceMapAvailable$1) {
        let map = new PreviousMap$1(this.css, opts);
        if (map.text) {
          this.map = map;
          let file = map.consumer().file;
          if (!this.file && file) this.file = this.mapResolve(file);
        }
      }
      if (!this.file) {
        this.id = "<input css " + nanoid(6) + ">";
      }
      if (this.map) this.map.file = this.from;
    }
    error(message, line, column, opts = {}) {
      let endColumn, endLine, endOffset, offset, result2;
      if (line && typeof line === "object") {
        let start = line;
        let end = column;
        if (typeof start.offset === "number") {
          offset = start.offset;
          let pos = this.fromOffset(offset);
          line = pos.line;
          column = pos.col;
        } else {
          line = start.line;
          column = start.column;
          offset = this.fromLineAndColumn(line, column);
        }
        if (typeof end.offset === "number") {
          endOffset = end.offset;
          let pos = this.fromOffset(endOffset);
          endLine = pos.line;
          endColumn = pos.col;
        } else {
          endLine = end.line;
          endColumn = end.column;
          endOffset = this.fromLineAndColumn(end.line, end.column);
        }
      } else if (!column) {
        offset = line;
        let pos = this.fromOffset(offset);
        line = pos.line;
        column = pos.col;
      } else {
        offset = this.fromLineAndColumn(line, column);
      }
      let origin = this.origin(line, column, endLine, endColumn);
      if (origin) {
        result2 = new CssSyntaxError$1(
          message,
          origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line },
          origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine },
          origin.source,
          origin.file,
          opts.plugin
        );
      } else {
        result2 = new CssSyntaxError$1(
          message,
          endLine === void 0 ? line : { column, line },
          endLine === void 0 ? column : { column: endColumn, line: endLine },
          this.css,
          this.file,
          opts.plugin
        );
      }
      result2.input = { column, endColumn, endLine, endOffset, line, offset, source: this.css };
      if (this.file) {
        if (pathToFileURL$1) {
          result2.input.url = pathToFileURL$1(this.file).toString();
        }
        result2.input.file = this.file;
      }
      return result2;
    }
    fromLineAndColumn(line, column) {
      let lineToIndex = getLineToIndex(this);
      let index2 = lineToIndex[line - 1];
      return index2 + column - 1;
    }
    fromOffset(offset) {
      let lineToIndex = getLineToIndex(this);
      let lastLine = lineToIndex[lineToIndex.length - 1];
      let min2 = 0;
      if (offset >= lastLine) {
        min2 = lineToIndex.length - 1;
      } else {
        let max2 = lineToIndex.length - 2;
        let mid;
        while (min2 < max2) {
          mid = min2 + (max2 - min2 >> 1);
          if (offset < lineToIndex[mid]) {
            max2 = mid - 1;
          } else if (offset >= lineToIndex[mid + 1]) {
            min2 = mid + 1;
          } else {
            min2 = mid;
            break;
          }
        }
      }
      return {
        col: offset - lineToIndex[min2] + 1,
        line: min2 + 1
      };
    }
    mapResolve(file) {
      if (/^\w+:\/\//.test(file)) {
        return file;
      }
      return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
    }
    origin(line, column, endLine, endColumn) {
      if (!this.map) return false;
      let consumer = this.map.consumer();
      let from = consumer.originalPositionFor({ column, line });
      if (!from.source) return false;
      let to;
      if (typeof endLine === "number") {
        to = consumer.originalPositionFor({ column: endColumn, line: endLine });
      }
      let fromUrl;
      if (isAbsolute(from.source)) {
        fromUrl = pathToFileURL$1(from.source);
      } else {
        fromUrl = new URL(
          from.source,
          this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile)
        );
      }
      let result2 = {
        column: from.column,
        endColumn: to && to.column,
        endLine: to && to.line,
        line: from.line,
        url: fromUrl.toString()
      };
      if (fromUrl.protocol === "file:") {
        if (fileURLToPath) {
          result2.file = fileURLToPath(fromUrl);
        } else {
          throw new Error(`file: protocol is not available in this PostCSS build`);
        }
      }
      let source = consumer.sourceContentFor(from.source);
      if (source) result2.source = source;
      return result2;
    }
    toJSON() {
      let json = {};
      for (let name of ["hasBOM", "css", "file", "id"]) {
        if (this[name] != null) {
          json[name] = this[name];
        }
      }
      if (this.map) {
        json.map = { ...this.map };
        if (json.map.consumerCache) {
          json.map.consumerCache = void 0;
        }
      }
      return json;
    }
  };
  var input$1 = Input$4;
  Input$4.default = Input$4;
  if (terminalHighlight && terminalHighlight.registerInput) {
    terminalHighlight.registerInput(Input$4);
  }
  let Container$4 = container;
  let LazyResult$3, Processor$2;
  let Root$5 = class Root extends Container$4 {
    constructor(defaults) {
      super(defaults);
      this.type = "root";
      if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type2) {
      let nodes = super.normalize(child);
      if (sample) {
        if (type2 === "prepend") {
          if (this.nodes.length > 1) {
            sample.raws.before = this.nodes[1].raws.before;
          } else {
            delete sample.raws.before;
          }
        } else if (this.first !== sample) {
          for (let node2 of nodes) {
            node2.raws.before = sample.raws.before;
          }
        }
      }
      return nodes;
    }
    removeChild(child, ignore) {
      let index2 = this.index(child);
      if (!ignore && index2 === 0 && this.nodes.length > 1) {
        this.nodes[1].raws.before = this.nodes[index2].raws.before;
      }
      return super.removeChild(child);
    }
    toResult(opts = {}) {
      let lazy = new LazyResult$3(new Processor$2(), this, opts);
      return lazy.stringify();
    }
  };
  Root$5.registerLazyResult = (dependant) => {
    LazyResult$3 = dependant;
  };
  Root$5.registerProcessor = (dependant) => {
    Processor$2 = dependant;
  };
  var root = Root$5;
  Root$5.default = Root$5;
  Container$4.registerRoot(Root$5);
  let list$2 = {
    comma(string) {
      return list$2.split(string, [","], true);
    },
    space(string) {
      let spaces = [" ", "\n", "	"];
      return list$2.split(string, spaces);
    },
    split(string, separators, last2) {
      let array = [];
      let current = "";
      let split = false;
      let func = 0;
      let inQuote = false;
      let prevQuote = "";
      let escape2 = false;
      for (let letter of string) {
        if (escape2) {
          escape2 = false;
        } else if (letter === "\\") {
          escape2 = true;
        } else if (inQuote) {
          if (letter === prevQuote) {
            inQuote = false;
          }
        } else if (letter === '"' || letter === "'") {
          inQuote = true;
          prevQuote = letter;
        } else if (letter === "(") {
          func += 1;
        } else if (letter === ")") {
          if (func > 0) func -= 1;
        } else if (func === 0) {
          if (separators.includes(letter)) split = true;
        }
        if (split) {
          if (current !== "") array.push(current.trim());
          current = "";
          split = false;
        } else {
          current += letter;
        }
      }
      if (last2 || current !== "") array.push(current.trim());
      return array;
    }
  };
  var list_1 = list$2;
  list$2.default = list$2;
  let Container$3 = container;
  let list$1 = list_1;
  let Rule$3 = class Rule extends Container$3 {
    get selectors() {
      return list$1.comma(this.selector);
    }
    set selectors(values) {
      let match = this.selector ? this.selector.match(/,\s*/) : null;
      let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
      this.selector = values.join(sep2);
    }
    constructor(defaults) {
      super(defaults);
      this.type = "rule";
      if (!this.nodes) this.nodes = [];
    }
  };
  var rule = Rule$3;
  Rule$3.default = Rule$3;
  Container$3.registerRule(Rule$3);
  let AtRule$2 = atRule;
  let Comment$2 = comment;
  let Declaration$2 = declaration;
  let Input$3 = input$1;
  let PreviousMap = previousMap;
  let Root$4 = root;
  let Rule$2 = rule;
  function fromJSON$1(json, inputs) {
    if (Array.isArray(json)) return json.map((n2) => fromJSON$1(n2));
    let { inputs: ownInputs, ...defaults } = json;
    if (ownInputs) {
      inputs = [];
      for (let input2 of ownInputs) {
        let inputHydrated = { ...input2, __proto__: Input$3.prototype };
        if (inputHydrated.map) {
          inputHydrated.map = {
            ...inputHydrated.map,
            __proto__: PreviousMap.prototype
          };
        }
        inputs.push(inputHydrated);
      }
    }
    if (defaults.nodes) {
      defaults.nodes = json.nodes.map((n2) => fromJSON$1(n2, inputs));
    }
    if (defaults.source) {
      let { inputId, ...source } = defaults.source;
      defaults.source = source;
      if (inputId != null) {
        defaults.source.input = inputs[inputId];
      }
    }
    if (defaults.type === "root") {
      return new Root$4(defaults);
    } else if (defaults.type === "decl") {
      return new Declaration$2(defaults);
    } else if (defaults.type === "rule") {
      return new Rule$2(defaults);
    } else if (defaults.type === "comment") {
      return new Comment$2(defaults);
    } else if (defaults.type === "atrule") {
      return new AtRule$2(defaults);
    } else {
      throw new Error("Unknown node type: " + json.type);
    }
  }
  var fromJSON_1 = fromJSON$1;
  fromJSON$1.default = fromJSON$1;
  let { dirname, relative, resolve, sep } = require$$2;
  let { SourceMapConsumer, SourceMapGenerator } = require$$2;
  let { pathToFileURL } = require$$2;
  let Input$2 = input$1;
  let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
  let pathAvailable = Boolean(dirname && resolve && relative && sep);
  let MapGenerator$2 = class MapGenerator {
    constructor(stringify2, root2, opts, cssString) {
      this.stringify = stringify2;
      this.mapOpts = opts.map || {};
      this.root = root2;
      this.opts = opts;
      this.css = cssString;
      this.originalCSS = cssString;
      this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
      this.memoizedFileURLs = /* @__PURE__ */ new Map();
      this.memoizedPaths = /* @__PURE__ */ new Map();
      this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let content;
      if (this.isInline()) {
        content = "data:application/json;base64," + this.toBase64(this.map.toString());
      } else if (typeof this.mapOpts.annotation === "string") {
        content = this.mapOpts.annotation;
      } else if (typeof this.mapOpts.annotation === "function") {
        content = this.mapOpts.annotation(this.opts.to, this.root);
      } else {
        content = this.outputFile() + ".map";
      }
      let eol = "\n";
      if (this.css.includes("\r\n")) eol = "\r\n";
      this.css += eol + "/*# sourceMappingURL=" + content + " */";
    }
    applyPrevMaps() {
      for (let prev of this.previous()) {
        let from = this.toUrl(this.path(prev.file));
        let root2 = prev.root || dirname(prev.file);
        let map;
        if (this.mapOpts.sourcesContent === false) {
          map = new SourceMapConsumer(prev.text);
          if (map.sourcesContent) {
            map.sourcesContent = null;
          }
        } else {
          map = prev.consumer();
        }
        this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation === false) return;
      if (this.root) {
        let node2;
        for (let i2 = this.root.nodes.length - 1; i2 >= 0; i2--) {
          node2 = this.root.nodes[i2];
          if (node2.type !== "comment") continue;
          if (node2.text.startsWith("# sourceMappingURL=")) {
            this.root.removeChild(i2);
          }
        }
      } else if (this.css) {
        this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, "");
      }
    }
    generate() {
      this.clearAnnotation();
      if (pathAvailable && sourceMapAvailable && this.isMap()) {
        return this.generateMap();
      } else {
        let result2 = "";
        this.stringify(this.root, (i2) => {
          result2 += i2;
        });
        return [result2];
      }
    }
    generateMap() {
      if (this.root) {
        this.generateString();
      } else if (this.previous().length === 1) {
        let prev = this.previous()[0].consumer();
        prev.file = this.outputFile();
        this.map = SourceMapGenerator.fromSourceMap(prev, {
          ignoreInvalidMapping: true
        });
      } else {
        this.map = new SourceMapGenerator({
          file: this.outputFile(),
          ignoreInvalidMapping: true
        });
        this.map.addMapping({
          generated: { column: 0, line: 1 },
          original: { column: 0, line: 1 },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
      }
      if (this.isSourcesContent()) this.setSourcesContent();
      if (this.root && this.previous().length > 0) this.applyPrevMaps();
      if (this.isAnnotation()) this.addAnnotation();
      if (this.isInline()) {
        return [this.css];
      } else {
        return [this.css, this.map];
      }
    }
    generateString() {
      this.css = "";
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      });
      let line = 1;
      let column = 1;
      let noSource = "<no source>";
      let mapping = {
        generated: { column: 0, line: 0 },
        original: { column: 0, line: 0 },
        source: ""
      };
      let last2, lines;
      this.stringify(this.root, (str, node2, type2) => {
        this.css += str;
        if (node2 && type2 !== "end") {
          mapping.generated.line = line;
          mapping.generated.column = column - 1;
          if (node2.source && node2.source.start) {
            mapping.source = this.sourcePath(node2);
            mapping.original.line = node2.source.start.line;
            mapping.original.column = node2.source.start.column - 1;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            this.map.addMapping(mapping);
          }
        }
        lines = str.match(/\n/g);
        if (lines) {
          line += lines.length;
          last2 = str.lastIndexOf("\n");
          column = str.length - last2;
        } else {
          column += str.length;
        }
        if (node2 && type2 !== "start") {
          let p2 = node2.parent || { raws: {} };
          let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
          if (!childless || node2 !== p2.last || p2.raws.semicolon) {
            if (node2.source && node2.source.end) {
              mapping.source = this.sourcePath(node2);
              mapping.original.line = node2.source.end.line;
              mapping.original.column = node2.source.end.column - 1;
              mapping.generated.line = line;
              mapping.generated.column = column - 2;
              this.map.addMapping(mapping);
            } else {
              mapping.source = noSource;
              mapping.original.line = 1;
              mapping.original.column = 0;
              mapping.generated.line = line;
              mapping.generated.column = column - 1;
              this.map.addMapping(mapping);
            }
          }
        }
      });
    }
    isAnnotation() {
      if (this.isInline()) {
        return true;
      }
      if (typeof this.mapOpts.annotation !== "undefined") {
        return this.mapOpts.annotation;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.annotation);
      }
      return true;
    }
    isInline() {
      if (typeof this.mapOpts.inline !== "undefined") {
        return this.mapOpts.inline;
      }
      let annotation = this.mapOpts.annotation;
      if (typeof annotation !== "undefined" && annotation !== true) {
        return false;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.inline);
      }
      return true;
    }
    isMap() {
      if (typeof this.opts.map !== "undefined") {
        return !!this.opts.map;
      }
      return this.previous().length > 0;
    }
    isSourcesContent() {
      if (typeof this.mapOpts.sourcesContent !== "undefined") {
        return this.mapOpts.sourcesContent;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.withContent());
      }
      return true;
    }
    outputFile() {
      if (this.opts.to) {
        return this.path(this.opts.to);
      } else if (this.opts.from) {
        return this.path(this.opts.from);
      } else {
        return "to.css";
      }
    }
    path(file) {
      if (this.mapOpts.absolute) return file;
      if (file.charCodeAt(0) === 60) return file;
      if (/^\w+:\/\//.test(file)) return file;
      let cached = this.memoizedPaths.get(file);
      if (cached) return cached;
      let from = this.opts.to ? dirname(this.opts.to) : ".";
      if (typeof this.mapOpts.annotation === "string") {
        from = dirname(resolve(from, this.mapOpts.annotation));
      }
      let path = relative(from, file);
      this.memoizedPaths.set(file, path);
      return path;
    }
    previous() {
      if (!this.previousMaps) {
        this.previousMaps = [];
        if (this.root) {
          this.root.walk((node2) => {
            if (node2.source && node2.source.input.map) {
              let map = node2.source.input.map;
              if (!this.previousMaps.includes(map)) {
                this.previousMaps.push(map);
              }
            }
          });
        } else {
          let input2 = new Input$2(this.originalCSS, this.opts);
          if (input2.map) this.previousMaps.push(input2.map);
        }
      }
      return this.previousMaps;
    }
    setSourcesContent() {
      let already = {};
      if (this.root) {
        this.root.walk((node2) => {
          if (node2.source) {
            let from = node2.source.input.from;
            if (from && !already[from]) {
              already[from] = true;
              let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
              this.map.setSourceContent(fromUrl, node2.source.input.css);
            }
          }
        });
      } else if (this.css) {
        let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(from, this.css);
      }
    }
    sourcePath(node2) {
      if (this.mapOpts.from) {
        return this.toUrl(this.mapOpts.from);
      } else if (this.usesFileUrls) {
        return this.toFileUrl(node2.source.input.from);
      } else {
        return this.toUrl(this.path(node2.source.input.from));
      }
    }
    toBase64(str) {
      if (Buffer) {
        return Buffer.from(str).toString("base64");
      } else {
        return window.btoa(unescape(encodeURIComponent(str)));
      }
    }
    toFileUrl(path) {
      let cached = this.memoizedFileURLs.get(path);
      if (cached) return cached;
      if (pathToFileURL) {
        let fileURL = pathToFileURL(path).toString();
        this.memoizedFileURLs.set(path, fileURL);
        return fileURL;
      } else {
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
      }
    }
    toUrl(path) {
      let cached = this.memoizedURLs.get(path);
      if (cached) return cached;
      if (sep === "\\") {
        path = path.replace(/\\/g, "/");
      }
      let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
      this.memoizedURLs.set(path, url);
      return url;
    }
  };
  var mapGenerator = MapGenerator$2;
  const SINGLE_QUOTE = "'".charCodeAt(0);
  const DOUBLE_QUOTE = '"'.charCodeAt(0);
  const BACKSLASH = "\\".charCodeAt(0);
  const SLASH = "/".charCodeAt(0);
  const NEWLINE = "\n".charCodeAt(0);
  const SPACE = " ".charCodeAt(0);
  const FEED = "\f".charCodeAt(0);
  const TAB = "	".charCodeAt(0);
  const CR = "\r".charCodeAt(0);
  const OPEN_SQUARE = "[".charCodeAt(0);
  const CLOSE_SQUARE = "]".charCodeAt(0);
  const OPEN_PARENTHESES = "(".charCodeAt(0);
  const CLOSE_PARENTHESES = ")".charCodeAt(0);
  const OPEN_CURLY = "{".charCodeAt(0);
  const CLOSE_CURLY = "}".charCodeAt(0);
  const SEMICOLON = ";".charCodeAt(0);
  const ASTERISK = "*".charCodeAt(0);
  const COLON = ":".charCodeAt(0);
  const AT = "@".charCodeAt(0);
  const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
  const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
  const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
  const RE_HEX_ESCAPE = /[\da-f]/i;
  var tokenize = function tokenizer2(input2, options = {}) {
    let css = input2.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, content, escape2, next, quote;
    let currentToken, escaped, escapePos, n2, prev;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
      return pos;
    }
    function unclosed(what) {
      throw input2.error("Unclosed " + what, pos);
    }
    function endOfFile() {
      return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
      if (returned.length) return returned.pop();
      if (pos >= length) return;
      let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
      code = css.charCodeAt(pos);
      switch (code) {
        case NEWLINE:
        case SPACE:
        case TAB:
        case CR:
        case FEED: {
          next = pos;
          do {
            next += 1;
            code = css.charCodeAt(next);
          } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
          currentToken = ["space", css.slice(pos, next)];
          pos = next - 1;
          break;
        }
        case OPEN_SQUARE:
        case CLOSE_SQUARE:
        case OPEN_CURLY:
        case CLOSE_CURLY:
        case COLON:
        case SEMICOLON:
        case CLOSE_PARENTHESES: {
          let controlChar = String.fromCharCode(code);
          currentToken = [controlChar, controlChar, pos];
          break;
        }
        case OPEN_PARENTHESES: {
          prev = buffer.length ? buffer.pop()[1] : "";
          n2 = css.charCodeAt(pos + 1);
          if (prev === "url" && n2 !== SINGLE_QUOTE && n2 !== DOUBLE_QUOTE && n2 !== SPACE && n2 !== NEWLINE && n2 !== TAB && n2 !== FEED && n2 !== CR) {
            next = pos;
            do {
              escaped = false;
              next = css.indexOf(")", next + 1);
              if (next === -1) {
                if (ignore || ignoreUnclosed) {
                  next = pos;
                  break;
                } else {
                  unclosed("bracket");
                }
              }
              escapePos = next;
              while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);
            currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
            pos = next;
          } else {
            next = css.indexOf(")", pos + 1);
            content = css.slice(pos, next + 1);
            if (next === -1 || RE_BAD_BRACKET.test(content)) {
              currentToken = ["(", "(", pos];
            } else {
              currentToken = ["brackets", content, pos, next];
              pos = next;
            }
          }
          break;
        }
        case SINGLE_QUOTE:
        case DOUBLE_QUOTE: {
          quote = code === SINGLE_QUOTE ? "'" : '"';
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(quote, next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos + 1;
                break;
              } else {
                unclosed("string");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["string", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        case AT: {
          RE_AT_END.lastIndex = pos + 1;
          RE_AT_END.test(css);
          if (RE_AT_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_AT_END.lastIndex - 2;
          }
          currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        case BACKSLASH: {
          next = pos;
          escape2 = true;
          while (css.charCodeAt(next + 1) === BACKSLASH) {
            next += 1;
            escape2 = !escape2;
          }
          code = css.charCodeAt(next + 1);
          if (escape2 && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
            next += 1;
            if (RE_HEX_ESCAPE.test(css.charAt(next))) {
              while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
                next += 1;
              }
              if (css.charCodeAt(next + 1) === SPACE) {
                next += 1;
              }
            }
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        default: {
          if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
            next = css.indexOf("*/", pos + 2) + 1;
            if (next === 0) {
              if (ignore || ignoreUnclosed) {
                next = css.length;
              } else {
                unclosed("comment");
              }
            }
            currentToken = ["comment", css.slice(pos, next + 1), pos, next];
            pos = next;
          } else {
            RE_WORD_END.lastIndex = pos + 1;
            RE_WORD_END.test(css);
            if (RE_WORD_END.lastIndex === 0) {
              next = css.length - 1;
            } else {
              next = RE_WORD_END.lastIndex - 2;
            }
            currentToken = ["word", css.slice(pos, next + 1), pos, next];
            buffer.push(currentToken);
            pos = next;
          }
          break;
        }
      }
      pos++;
      return currentToken;
    }
    function back(token) {
      returned.push(token);
    }
    return {
      back,
      endOfFile,
      nextToken,
      position
    };
  };
  let AtRule$1 = atRule;
  let Comment$1 = comment;
  let Declaration$1 = declaration;
  let Root$3 = root;
  let Rule$1 = rule;
  let tokenizer = tokenize;
  const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
  };
  function findLastWithPosition(tokens) {
    for (let i2 = tokens.length - 1; i2 >= 0; i2--) {
      let token = tokens[i2];
      let pos = token[3] || token[2];
      if (pos) return pos;
    }
  }
  let Parser$1 = class Parser {
    constructor(input2) {
      this.input = input2;
      this.root = new Root$3();
      this.current = this.root;
      this.spaces = "";
      this.semicolon = false;
      this.createTokenizer();
      this.root.source = { input: input2, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(token) {
      let node2 = new AtRule$1();
      node2.name = token[1].slice(1);
      if (node2.name === "") {
        this.unnamedAtrule(node2, token);
      }
      this.init(node2, token[2]);
      let type2;
      let prev;
      let shift;
      let last2 = false;
      let open = false;
      let params = [];
      let brackets = [];
      while (!this.tokenizer.endOfFile()) {
        token = this.tokenizer.nextToken();
        type2 = token[0];
        if (type2 === "(" || type2 === "[") {
          brackets.push(type2 === "(" ? ")" : "]");
        } else if (type2 === "{" && brackets.length > 0) {
          brackets.push("}");
        } else if (type2 === brackets[brackets.length - 1]) {
          brackets.pop();
        }
        if (brackets.length === 0) {
          if (type2 === ";") {
            node2.source.end = this.getPosition(token[2]);
            node2.source.end.offset++;
            this.semicolon = true;
            break;
          } else if (type2 === "{") {
            open = true;
            break;
          } else if (type2 === "}") {
            if (params.length > 0) {
              shift = params.length - 1;
              prev = params[shift];
              while (prev && prev[0] === "space") {
                prev = params[--shift];
              }
              if (prev) {
                node2.source.end = this.getPosition(prev[3] || prev[2]);
                node2.source.end.offset++;
              }
            }
            this.end(token);
            break;
          } else {
            params.push(token);
          }
        } else {
          params.push(token);
        }
        if (this.tokenizer.endOfFile()) {
          last2 = true;
          break;
        }
      }
      node2.raws.between = this.spacesAndCommentsFromEnd(params);
      if (params.length) {
        node2.raws.afterName = this.spacesAndCommentsFromStart(params);
        this.raw(node2, "params", params);
        if (last2) {
          token = params[params.length - 1];
          node2.source.end = this.getPosition(token[3] || token[2]);
          node2.source.end.offset++;
          this.spaces = node2.raws.between;
          node2.raws.between = "";
        }
      } else {
        node2.raws.afterName = "";
        node2.params = "";
      }
      if (open) {
        node2.nodes = [];
        this.current = node2;
      }
    }
    checkMissedSemicolon(tokens) {
      let colon = this.colon(tokens);
      if (colon === false) return;
      let founded = 0;
      let token;
      for (let j = colon - 1; j >= 0; j--) {
        token = tokens[j];
        if (token[0] !== "space") {
          founded += 1;
          if (founded === 2) break;
        }
      }
      throw this.input.error(
        "Missed semicolon",
        token[0] === "word" ? token[3] + 1 : token[2]
      );
    }
    colon(tokens) {
      let brackets = 0;
      let prev, token, type2;
      for (let [i2, element] of tokens.entries()) {
        token = element;
        type2 = token[0];
        if (type2 === "(") {
          brackets += 1;
        }
        if (type2 === ")") {
          brackets -= 1;
        }
        if (brackets === 0 && type2 === ":") {
          if (!prev) {
            this.doubleColon(token);
          } else if (prev[0] === "word" && prev[1] === "progid") {
            continue;
          } else {
            return i2;
          }
        }
        prev = token;
      }
      return false;
    }
    comment(token) {
      let node2 = new Comment$1();
      this.init(node2, token[2]);
      node2.source.end = this.getPosition(token[3] || token[2]);
      node2.source.end.offset++;
      let text = token[1].slice(2, -2);
      if (/^\s*$/.test(text)) {
        node2.text = "";
        node2.raws.left = text;
        node2.raws.right = "";
      } else {
        let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
        node2.text = match[2];
        node2.raws.left = match[1];
        node2.raws.right = match[3];
      }
    }
    createTokenizer() {
      this.tokenizer = tokenizer(this.input);
    }
    decl(tokens, customProperty) {
      let node2 = new Declaration$1();
      this.init(node2, tokens[0][2]);
      let last2 = tokens[tokens.length - 1];
      if (last2[0] === ";") {
        this.semicolon = true;
        tokens.pop();
      }
      node2.source.end = this.getPosition(
        last2[3] || last2[2] || findLastWithPosition(tokens)
      );
      node2.source.end.offset++;
      while (tokens[0][0] !== "word") {
        if (tokens.length === 1) this.unknownWord(tokens);
        node2.raws.before += tokens.shift()[1];
      }
      node2.source.start = this.getPosition(tokens[0][2]);
      node2.prop = "";
      while (tokens.length) {
        let type2 = tokens[0][0];
        if (type2 === ":" || type2 === "space" || type2 === "comment") {
          break;
        }
        node2.prop += tokens.shift()[1];
      }
      node2.raws.between = "";
      let token;
      while (tokens.length) {
        token = tokens.shift();
        if (token[0] === ":") {
          node2.raws.between += token[1];
          break;
        } else {
          if (token[0] === "word" && /\w/.test(token[1])) {
            this.unknownWord([token]);
          }
          node2.raws.between += token[1];
        }
      }
      if (node2.prop[0] === "_" || node2.prop[0] === "*") {
        node2.raws.before += node2.prop[0];
        node2.prop = node2.prop.slice(1);
      }
      let firstSpaces = [];
      let next;
      while (tokens.length) {
        next = tokens[0][0];
        if (next !== "space" && next !== "comment") break;
        firstSpaces.push(tokens.shift());
      }
      this.precheckMissedSemicolon(tokens);
      for (let i2 = tokens.length - 1; i2 >= 0; i2--) {
        token = tokens[i2];
        if (token[1].toLowerCase() === "!important") {
          node2.important = true;
          let string = this.stringFrom(tokens, i2);
          string = this.spacesFromEnd(tokens) + string;
          if (string !== " !important") node2.raws.important = string;
          break;
        } else if (token[1].toLowerCase() === "important") {
          let cache = tokens.slice(0);
          let str = "";
          for (let j = i2; j > 0; j--) {
            let type2 = cache[j][0];
            if (str.trim().startsWith("!") && type2 !== "space") {
              break;
            }
            str = cache.pop()[1] + str;
          }
          if (str.trim().startsWith("!")) {
            node2.important = true;
            node2.raws.important = str;
            tokens = cache;
          }
        }
        if (token[0] !== "space" && token[0] !== "comment") {
          break;
        }
      }
      let hasWord = tokens.some((i2) => i2[0] !== "space" && i2[0] !== "comment");
      if (hasWord) {
        node2.raws.between += firstSpaces.map((i2) => i2[1]).join("");
        firstSpaces = [];
      }
      this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
      if (node2.value.includes(":") && !customProperty) {
        this.checkMissedSemicolon(tokens);
      }
    }
    doubleColon(token) {
      throw this.input.error(
        "Double colon",
        { offset: token[2] },
        { offset: token[2] + token[1].length }
      );
    }
    emptyRule(token) {
      let node2 = new Rule$1();
      this.init(node2, token[2]);
      node2.selector = "";
      node2.raws.between = "";
      this.current = node2;
    }
    end(token) {
      if (this.current.nodes && this.current.nodes.length) {
        this.current.raws.semicolon = this.semicolon;
      }
      this.semicolon = false;
      this.current.raws.after = (this.current.raws.after || "") + this.spaces;
      this.spaces = "";
      if (this.current.parent) {
        this.current.source.end = this.getPosition(token[2]);
        this.current.source.end.offset++;
        this.current = this.current.parent;
      } else {
        this.unexpectedClose(token);
      }
    }
    endFile() {
      if (this.current.parent) this.unclosedBlock();
      if (this.current.nodes && this.current.nodes.length) {
        this.current.raws.semicolon = this.semicolon;
      }
      this.current.raws.after = (this.current.raws.after || "") + this.spaces;
      this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(token) {
      this.spaces += token[1];
      if (this.current.nodes) {
        let prev = this.current.nodes[this.current.nodes.length - 1];
        if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
          prev.raws.ownSemicolon = this.spaces;
          this.spaces = "";
          prev.source.end = this.getPosition(token[2]);
          prev.source.end.offset += prev.raws.ownSemicolon.length;
        }
      }
    }
    // Helpers
    getPosition(offset) {
      let pos = this.input.fromOffset(offset);
      return {
        column: pos.col,
        line: pos.line,
        offset
      };
    }
    init(node2, offset) {
      this.current.push(node2);
      node2.source = {
        input: this.input,
        start: this.getPosition(offset)
      };
      node2.raws.before = this.spaces;
      this.spaces = "";
      if (node2.type !== "comment") this.semicolon = false;
    }
    other(start) {
      let end = false;
      let type2 = null;
      let colon = false;
      let bracket = null;
      let brackets = [];
      let customProperty = start[1].startsWith("--");
      let tokens = [];
      let token = start;
      while (token) {
        type2 = token[0];
        tokens.push(token);
        if (type2 === "(" || type2 === "[") {
          if (!bracket) bracket = token;
          brackets.push(type2 === "(" ? ")" : "]");
        } else if (customProperty && colon && type2 === "{") {
          if (!bracket) bracket = token;
          brackets.push("}");
        } else if (brackets.length === 0) {
          if (type2 === ";") {
            if (colon) {
              this.decl(tokens, customProperty);
              return;
            } else {
              break;
            }
          } else if (type2 === "{") {
            this.rule(tokens);
            return;
          } else if (type2 === "}") {
            this.tokenizer.back(tokens.pop());
            end = true;
            break;
          } else if (type2 === ":") {
            colon = true;
          }
        } else if (type2 === brackets[brackets.length - 1]) {
          brackets.pop();
          if (brackets.length === 0) bracket = null;
        }
        token = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile()) end = true;
      if (brackets.length > 0) this.unclosedBracket(bracket);
      if (end && colon) {
        if (!customProperty) {
          while (tokens.length) {
            token = tokens[tokens.length - 1][0];
            if (token !== "space" && token !== "comment") break;
            this.tokenizer.back(tokens.pop());
          }
        }
        this.decl(tokens, customProperty);
      } else {
        this.unknownWord(tokens);
      }
    }
    parse() {
      let token;
      while (!this.tokenizer.endOfFile()) {
        token = this.tokenizer.nextToken();
        switch (token[0]) {
          case "space":
            this.spaces += token[1];
            break;
          case ";":
            this.freeSemicolon(token);
            break;
          case "}":
            this.end(token);
            break;
          case "comment":
            this.comment(token);
            break;
          case "at-word":
            this.atrule(token);
            break;
          case "{":
            this.emptyRule(token);
            break;
          default:
            this.other(token);
            break;
        }
      }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(node2, prop, tokens, customProperty) {
      let token, type2;
      let length = tokens.length;
      let value = "";
      let clean = true;
      let next, prev;
      for (let i2 = 0; i2 < length; i2 += 1) {
        token = tokens[i2];
        type2 = token[0];
        if (type2 === "space" && i2 === length - 1 && !customProperty) {
          clean = false;
        } else if (type2 === "comment") {
          prev = tokens[i2 - 1] ? tokens[i2 - 1][0] : "empty";
          next = tokens[i2 + 1] ? tokens[i2 + 1][0] : "empty";
          if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
            if (value.slice(-1) === ",") {
              clean = false;
            } else {
              value += token[1];
            }
          } else {
            clean = false;
          }
        } else {
          value += token[1];
        }
      }
      if (!clean) {
        let raw = tokens.reduce((all, i2) => all + i2[1], "");
        node2.raws[prop] = { raw, value };
      }
      node2[prop] = value;
    }
    rule(tokens) {
      tokens.pop();
      let node2 = new Rule$1();
      this.init(node2, tokens[0][2]);
      node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
      this.raw(node2, "selector", tokens);
      this.current = node2;
    }
    spacesAndCommentsFromEnd(tokens) {
      let lastTokenType;
      let spaces = "";
      while (tokens.length) {
        lastTokenType = tokens[tokens.length - 1][0];
        if (lastTokenType !== "space" && lastTokenType !== "comment") break;
        spaces = tokens.pop()[1] + spaces;
      }
      return spaces;
    }
    // Errors
    spacesAndCommentsFromStart(tokens) {
      let next;
      let spaces = "";
      while (tokens.length) {
        next = tokens[0][0];
        if (next !== "space" && next !== "comment") break;
        spaces += tokens.shift()[1];
      }
      return spaces;
    }
    spacesFromEnd(tokens) {
      let lastTokenType;
      let spaces = "";
      while (tokens.length) {
        lastTokenType = tokens[tokens.length - 1][0];
        if (lastTokenType !== "space") break;
        spaces = tokens.pop()[1] + spaces;
      }
      return spaces;
    }
    stringFrom(tokens, from) {
      let result2 = "";
      for (let i2 = from; i2 < tokens.length; i2++) {
        result2 += tokens[i2][1];
      }
      tokens.splice(from, tokens.length - from);
      return result2;
    }
    unclosedBlock() {
      let pos = this.current.source.start;
      throw this.input.error("Unclosed block", pos.line, pos.column);
    }
    unclosedBracket(bracket) {
      throw this.input.error(
        "Unclosed bracket",
        { offset: bracket[2] },
        { offset: bracket[2] + 1 }
      );
    }
    unexpectedClose(token) {
      throw this.input.error(
        "Unexpected }",
        { offset: token[2] },
        { offset: token[2] + 1 }
      );
    }
    unknownWord(tokens) {
      throw this.input.error(
        "Unknown word " + tokens[0][1],
        { offset: tokens[0][2] },
        { offset: tokens[0][2] + tokens[0][1].length }
      );
    }
    unnamedAtrule(node2, token) {
      throw this.input.error(
        "At-rule without name",
        { offset: token[2] },
        { offset: token[2] + token[1].length }
      );
    }
  };
  var parser = Parser$1;
  let Container$2 = container;
  let Input$1 = input$1;
  let Parser = parser;
  function parse$3(css, opts) {
    let input2 = new Input$1(css, opts);
    let parser2 = new Parser(input2);
    try {
      parser2.parse();
    } catch (e) {
      throw e;
    }
    return parser2.root;
  }
  var parse_1 = parse$3;
  parse$3.default = parse$3;
  Container$2.registerParse(parse$3);
  let Warning$2 = class Warning {
    constructor(text, opts = {}) {
      this.type = "warning";
      this.text = text;
      if (opts.node && opts.node.source) {
        let range = opts.node.rangeBy(opts);
        this.line = range.start.line;
        this.column = range.start.column;
        this.endLine = range.end.line;
        this.endColumn = range.end.column;
      }
      for (let opt in opts) this[opt] = opts[opt];
    }
    toString() {
      if (this.node) {
        return this.node.error(this.text, {
          index: this.index,
          plugin: this.plugin,
          word: this.word
        }).message;
      }
      if (this.plugin) {
        return this.plugin + ": " + this.text;
      }
      return this.text;
    }
  };
  var warning = Warning$2;
  Warning$2.default = Warning$2;
  let Warning$1 = warning;
  let Result$3 = class Result {
    get content() {
      return this.css;
    }
    constructor(processor2, root2, opts) {
      this.processor = processor2;
      this.messages = [];
      this.root = root2;
      this.opts = opts;
      this.css = "";
      this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(text, opts = {}) {
      if (!opts.plugin) {
        if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
          opts.plugin = this.lastPlugin.postcssPlugin;
        }
      }
      let warning2 = new Warning$1(text, opts);
      this.messages.push(warning2);
      return warning2;
    }
    warnings() {
      return this.messages.filter((i2) => i2.type === "warning");
    }
  };
  var result = Result$3;
  Result$3.default = Result$3;
  let Container$1 = container;
  let Document$2 = document$1;
  let MapGenerator$1 = mapGenerator;
  let parse$2 = parse_1;
  let Result$2 = result;
  let Root$2 = root;
  let stringify$2 = stringify_1;
  let { isClean, my } = symbols;
  const TYPE_TO_CLASS_NAME = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
  };
  const PLUGIN_PROPS = {
    AtRule: true,
    AtRuleExit: true,
    Comment: true,
    CommentExit: true,
    Declaration: true,
    DeclarationExit: true,
    Document: true,
    DocumentExit: true,
    Once: true,
    OnceExit: true,
    postcssPlugin: true,
    prepare: true,
    Root: true,
    RootExit: true,
    Rule: true,
    RuleExit: true
  };
  const NOT_VISITORS = {
    Once: true,
    postcssPlugin: true,
    prepare: true
  };
  const CHILDREN = 0;
  function isPromise(obj) {
    return typeof obj === "object" && typeof obj.then === "function";
  }
  function getEvents(node2) {
    let key = false;
    let type2 = TYPE_TO_CLASS_NAME[node2.type];
    if (node2.type === "decl") {
      key = node2.prop.toLowerCase();
    } else if (node2.type === "atrule") {
      key = node2.name.toLowerCase();
    }
    if (key && node2.append) {
      return [
        type2,
        type2 + "-" + key,
        CHILDREN,
        type2 + "Exit",
        type2 + "Exit-" + key
      ];
    } else if (key) {
      return [type2, type2 + "-" + key, type2 + "Exit", type2 + "Exit-" + key];
    } else if (node2.append) {
      return [type2, CHILDREN, type2 + "Exit"];
    } else {
      return [type2, type2 + "Exit"];
    }
  }
  function toStack(node2) {
    let events;
    if (node2.type === "document") {
      events = ["Document", CHILDREN, "DocumentExit"];
    } else if (node2.type === "root") {
      events = ["Root", CHILDREN, "RootExit"];
    } else {
      events = getEvents(node2);
    }
    return {
      eventIndex: 0,
      events,
      iterator: 0,
      node: node2,
      visitorIndex: 0,
      visitors: []
    };
  }
  function cleanMarks(node2) {
    node2[isClean] = false;
    if (node2.nodes) node2.nodes.forEach((i2) => cleanMarks(i2));
    return node2;
  }
  let postcss$2 = {};
  let LazyResult$2 = class LazyResult2 {
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
    constructor(processor2, css, opts) {
      this.stringified = false;
      this.processed = false;
      let root2;
      if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
        root2 = cleanMarks(css);
      } else if (css instanceof LazyResult2 || css instanceof Result$2) {
        root2 = cleanMarks(css.root);
        if (css.map) {
          if (typeof opts.map === "undefined") opts.map = {};
          if (!opts.map.inline) opts.map.inline = false;
          opts.map.prev = css.map;
        }
      } else {
        let parser2 = parse$2;
        if (opts.syntax) parser2 = opts.syntax.parse;
        if (opts.parser) parser2 = opts.parser;
        if (parser2.parse) parser2 = parser2.parse;
        try {
          root2 = parser2(css, opts);
        } catch (error) {
          this.processed = true;
          this.error = error;
        }
        if (root2 && !root2[my]) {
          Container$1.rebuild(root2);
        }
      }
      this.result = new Result$2(processor2, root2, opts);
      this.helpers = { ...postcss$2, postcss: postcss$2, result: this.result };
      this.plugins = this.processor.plugins.map((plugin) => {
        if (typeof plugin === "object" && plugin.prepare) {
          return { ...plugin, ...plugin.prepare(this.result) };
        } else {
          return plugin;
        }
      });
    }
    async() {
      if (this.error) return Promise.reject(this.error);
      if (this.processed) return Promise.resolve(this.result);
      if (!this.processing) {
        this.processing = this.runAsync();
      }
      return this.processing;
    }
    catch(onRejected) {
      return this.async().catch(onRejected);
    }
    finally(onFinally) {
      return this.async().then(onFinally, onFinally);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(error, node2) {
      let plugin = this.result.lastPlugin;
      try {
        if (node2) node2.addToError(error);
        this.error = error;
        if (error.name === "CssSyntaxError" && !error.plugin) {
          error.plugin = plugin.postcssPlugin;
          error.setMessage();
        } else if (plugin.postcssVersion) {
          if (false) ;
        }
      } catch (err) {
        if (console && console.error) console.error(err);
      }
      return error;
    }
    prepareVisitors() {
      this.listeners = {};
      let add = (plugin, type2, cb2) => {
        if (!this.listeners[type2]) this.listeners[type2] = [];
        this.listeners[type2].push([plugin, cb2]);
      };
      for (let plugin of this.plugins) {
        if (typeof plugin === "object") {
          for (let event in plugin) {
            if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
              throw new Error(
                `Unknown event ${event} in ${plugin.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            }
            if (!NOT_VISITORS[event]) {
              if (typeof plugin[event] === "object") {
                for (let filter in plugin[event]) {
                  if (filter === "*") {
                    add(plugin, event, plugin[event][filter]);
                  } else {
                    add(
                      plugin,
                      event + "-" + filter.toLowerCase(),
                      plugin[event][filter]
                    );
                  }
                }
              } else if (typeof plugin[event] === "function") {
                add(plugin, event, plugin[event]);
              }
            }
          }
        }
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let i2 = 0; i2 < this.plugins.length; i2++) {
        let plugin = this.plugins[i2];
        let promise = this.runOnRoot(plugin);
        if (isPromise(promise)) {
          try {
            await promise;
          } catch (error) {
            throw this.handleError(error);
          }
        }
      }
      this.prepareVisitors();
      if (this.hasListener) {
        let root2 = this.result.root;
        while (!root2[isClean]) {
          root2[isClean] = true;
          let stack = [toStack(root2)];
          while (stack.length > 0) {
            let promise = this.visitTick(stack);
            if (isPromise(promise)) {
              try {
                await promise;
              } catch (e) {
                let node2 = stack[stack.length - 1].node;
                throw this.handleError(e, node2);
              }
            }
          }
        }
        if (this.listeners.OnceExit) {
          for (let [plugin, visitor] of this.listeners.OnceExit) {
            this.result.lastPlugin = plugin;
            try {
              if (root2.type === "document") {
                let roots = root2.nodes.map(
                  (subRoot) => visitor(subRoot, this.helpers)
                );
                await Promise.all(roots);
              } else {
                await visitor(root2, this.helpers);
              }
            } catch (e) {
              throw this.handleError(e);
            }
          }
        }
      }
      this.processed = true;
      return this.stringify();
    }
    runOnRoot(plugin) {
      this.result.lastPlugin = plugin;
      try {
        if (typeof plugin === "object" && plugin.Once) {
          if (this.result.root.type === "document") {
            let roots = this.result.root.nodes.map(
              (root2) => plugin.Once(root2, this.helpers)
            );
            if (isPromise(roots[0])) {
              return Promise.all(roots);
            }
            return roots;
          }
          return plugin.Once(this.result.root, this.helpers);
        } else if (typeof plugin === "function") {
          return plugin(this.result.root, this.result);
        }
      } catch (error) {
        throw this.handleError(error);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true;
      this.sync();
      let opts = this.result.opts;
      let str = stringify$2;
      if (opts.syntax) str = opts.syntax.stringify;
      if (opts.stringifier) str = opts.stringifier;
      if (str.stringify) str = str.stringify;
      let map = new MapGenerator$1(str, this.result.root, this.result.opts);
      let data = map.generate();
      this.result.css = data[0];
      this.result.map = data[1];
      return this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      this.processed = true;
      if (this.processing) {
        throw this.getAsyncError();
      }
      for (let plugin of this.plugins) {
        let promise = this.runOnRoot(plugin);
        if (isPromise(promise)) {
          throw this.getAsyncError();
        }
      }
      this.prepareVisitors();
      if (this.hasListener) {
        let root2 = this.result.root;
        while (!root2[isClean]) {
          root2[isClean] = true;
          this.walkSync(root2);
        }
        if (this.listeners.OnceExit) {
          if (root2.type === "document") {
            for (let subRoot of root2.nodes) {
              this.visitSync(this.listeners.OnceExit, subRoot);
            }
          } else {
            this.visitSync(this.listeners.OnceExit, root2);
          }
        }
      }
      return this.result;
    }
    then(onFulfilled, onRejected) {
      return this.async().then(onFulfilled, onRejected);
    }
    toString() {
      return this.css;
    }
    visitSync(visitors, node2) {
      for (let [plugin, visitor] of visitors) {
        this.result.lastPlugin = plugin;
        let promise;
        try {
          promise = visitor(node2, this.helpers);
        } catch (e) {
          throw this.handleError(e, node2.proxyOf);
        }
        if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
          return true;
        }
        if (isPromise(promise)) {
          throw this.getAsyncError();
        }
      }
    }
    visitTick(stack) {
      let visit = stack[stack.length - 1];
      let { node: node2, visitors } = visit;
      if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
        stack.pop();
        return;
      }
      if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
        let [plugin, visitor] = visitors[visit.visitorIndex];
        visit.visitorIndex += 1;
        if (visit.visitorIndex === visitors.length) {
          visit.visitors = [];
          visit.visitorIndex = 0;
        }
        this.result.lastPlugin = plugin;
        try {
          return visitor(node2.toProxy(), this.helpers);
        } catch (e) {
          throw this.handleError(e, node2);
        }
      }
      if (visit.iterator !== 0) {
        let iterator = visit.iterator;
        let child;
        while (child = node2.nodes[node2.indexes[iterator]]) {
          node2.indexes[iterator] += 1;
          if (!child[isClean]) {
            child[isClean] = true;
            stack.push(toStack(child));
            return;
          }
        }
        visit.iterator = 0;
        delete node2.indexes[iterator];
      }
      let events = visit.events;
      while (visit.eventIndex < events.length) {
        let event = events[visit.eventIndex];
        visit.eventIndex += 1;
        if (event === CHILDREN) {
          if (node2.nodes && node2.nodes.length) {
            node2[isClean] = true;
            visit.iterator = node2.getIterator();
          }
          return;
        } else if (this.listeners[event]) {
          visit.visitors = this.listeners[event];
          return;
        }
      }
      stack.pop();
    }
    walkSync(node2) {
      node2[isClean] = true;
      let events = getEvents(node2);
      for (let event of events) {
        if (event === CHILDREN) {
          if (node2.nodes) {
            node2.each((child) => {
              if (!child[isClean]) this.walkSync(child);
            });
          }
        } else {
          let visitors = this.listeners[event];
          if (visitors) {
            if (this.visitSync(visitors, node2.toProxy())) return;
          }
        }
      }
    }
    warnings() {
      return this.sync().warnings();
    }
  };
  LazyResult$2.registerPostcss = (dependant) => {
    postcss$2 = dependant;
  };
  var lazyResult = LazyResult$2;
  LazyResult$2.default = LazyResult$2;
  Root$2.registerLazyResult(LazyResult$2);
  Document$2.registerLazyResult(LazyResult$2);
  let MapGenerator = mapGenerator;
  let parse$1 = parse_1;
  const Result$1 = result;
  let stringify$1 = stringify_1;
  let NoWorkResult$1 = class NoWorkResult {
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root) {
        return this._root;
      }
      let root2;
      let parser2 = parse$1;
      try {
        root2 = parser2(this._css, this._opts);
      } catch (error) {
        this.error = error;
      }
      if (this.error) {
        throw this.error;
      } else {
        this._root = root2;
        return root2;
      }
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(processor2, css, opts) {
      css = css.toString();
      this.stringified = false;
      this._processor = processor2;
      this._css = css;
      this._opts = opts;
      this._map = void 0;
      let root2;
      let str = stringify$1;
      this.result = new Result$1(this._processor, root2, this._opts);
      this.result.css = css;
      let self2 = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return self2.root;
        }
      });
      let map = new MapGenerator(str, root2, this._opts, css);
      if (map.isMap()) {
        let [generatedCSS, generatedMap] = map.generate();
        if (generatedCSS) {
          this.result.css = generatedCSS;
        }
        if (generatedMap) {
          this.result.map = generatedMap;
        }
      } else {
        map.clearAnnotation();
        this.result.css = map.css;
      }
    }
    async() {
      if (this.error) return Promise.reject(this.error);
      return Promise.resolve(this.result);
    }
    catch(onRejected) {
      return this.async().catch(onRejected);
    }
    finally(onFinally) {
      return this.async().then(onFinally, onFinally);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(onFulfilled, onRejected) {
      return this.async().then(onFulfilled, onRejected);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  };
  var noWorkResult = NoWorkResult$1;
  NoWorkResult$1.default = NoWorkResult$1;
  let Document$1 = document$1;
  let LazyResult$1 = lazyResult;
  let NoWorkResult = noWorkResult;
  let Root$1 = root;
  let Processor$1 = class Processor {
    constructor(plugins = []) {
      this.version = "8.5.6";
      this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
      let normalized = [];
      for (let i2 of plugins) {
        if (i2.postcss === true) {
          i2 = i2();
        } else if (i2.postcss) {
          i2 = i2.postcss;
        }
        if (typeof i2 === "object" && Array.isArray(i2.plugins)) {
          normalized = normalized.concat(i2.plugins);
        } else if (typeof i2 === "object" && i2.postcssPlugin) {
          normalized.push(i2);
        } else if (typeof i2 === "function") {
          normalized.push(i2);
        } else if (typeof i2 === "object" && (i2.parse || i2.stringify)) ;
        else {
          throw new Error(i2 + " is not a PostCSS plugin");
        }
      }
      return normalized;
    }
    process(css, opts = {}) {
      if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
        return new NoWorkResult(this, css, opts);
      } else {
        return new LazyResult$1(this, css, opts);
      }
    }
    use(plugin) {
      this.plugins = this.plugins.concat(this.normalize([plugin]));
      return this;
    }
  };
  var processor = Processor$1;
  Processor$1.default = Processor$1;
  Root$1.registerProcessor(Processor$1);
  Document$1.registerProcessor(Processor$1);
  var define_process_env_default = {};
  let AtRule = atRule;
  let Comment = comment;
  let Container = container;
  let CssSyntaxError = cssSyntaxError;
  let Declaration = declaration;
  let Document = document$1;
  let fromJSON = fromJSON_1;
  let Input = input$1;
  let LazyResult = lazyResult;
  let list = list_1;
  let Node = node;
  let parse = parse_1;
  let Processor = processor;
  let Result = result;
  let Root = root;
  let Rule = rule;
  let stringify = stringify_1;
  let Warning = warning;
  function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
      plugins = plugins[0];
    }
    return new Processor(plugins);
  }
  postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
      if (console && console.warn && !warningPrinted) {
        warningPrinted = true;
        console.warn(
          name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"
        );
        if (define_process_env_default.LANG && define_process_env_default.LANG.startsWith("cn")) {
          console.warn(
            name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"
          );
        }
      }
      let transformer = initializer(...args);
      transformer.postcssPlugin = name;
      transformer.postcssVersion = new Processor().version;
      return transformer;
    }
    let cache;
    Object.defineProperty(creator, "postcss", {
      get() {
        if (!cache) cache = creator();
        return cache;
      }
    });
    creator.process = function(css, processOpts, pluginOpts) {
      return postcss([creator(pluginOpts)]).process(css, processOpts);
    };
    return creator;
  };
  postcss.stringify = stringify;
  postcss.parse = parse;
  postcss.fromJSON = fromJSON;
  postcss.list = list;
  postcss.comment = (defaults) => new Comment(defaults);
  postcss.atRule = (defaults) => new AtRule(defaults);
  postcss.decl = (defaults) => new Declaration(defaults);
  postcss.rule = (defaults) => new Rule(defaults);
  postcss.root = (defaults) => new Root(defaults);
  postcss.document = (defaults) => new Document(defaults);
  postcss.CssSyntaxError = CssSyntaxError;
  postcss.Declaration = Declaration;
  postcss.Container = Container;
  postcss.Processor = Processor;
  postcss.Document = Document;
  postcss.Comment = Comment;
  postcss.Warning = Warning;
  postcss.AtRule = AtRule;
  postcss.Result = Result;
  postcss.Input = Input;
  postcss.Rule = Rule;
  postcss.Root = Root;
  postcss.Node = Node;
  LazyResult.registerPostcss(postcss);
  var postcss_1 = postcss;
  postcss.default = postcss;
  const postcss$1 = /* @__PURE__ */ getDefaultExportFromCjs(postcss_1);
  postcss$1.stringify;
  postcss$1.fromJSON;
  postcss$1.plugin;
  postcss$1.parse;
  postcss$1.list;
  postcss$1.document;
  postcss$1.comment;
  postcss$1.atRule;
  postcss$1.rule;
  postcss$1.decl;
  postcss$1.root;
  postcss$1.CssSyntaxError;
  postcss$1.Declaration;
  postcss$1.Container;
  postcss$1.Processor;
  postcss$1.Document;
  postcss$1.Comment;
  postcss$1.Warning;
  postcss$1.AtRule;
  postcss$1.Result;
  postcss$1.Input;
  postcss$1.Rule;
  postcss$1.Root;
  postcss$1.Node;
  class CSSAnalysisEngine {
    async analyzeDocument() {
      const cssText = this.collectAllCSS();
      const parsedRules = await this.parseCSS(cssText);
      const variables = this.detectCSSVariables();
      const colors = [];
      const fonts = [];
      parsedRules.forEach((rule2) => {
        Object.entries(rule2.declarations).forEach(([prop, info]) => {
          if (this.isColorProperty(prop)) {
            colors.push(info.value);
          }
          if (prop === "font-family") {
            fonts.push(info.value);
          }
        });
      });
      return {
        rules: parsedRules,
        variables,
        colors: [...new Set(colors)],
        // Remove duplicates
        fonts: [...new Set(fonts)]
      };
    }
    collectAllCSS() {
      var _a2, _b;
      let cssText = "";
      for (let i2 = 0; i2 < document.styleSheets.length; i2++) {
        try {
          const sheet = document.styleSheets[i2];
          if (sheet.ownerNode && ((_b = (_a2 = sheet.ownerNode).getAttribute) == null ? void 0 : _b.call(_a2, "data-css-editor"))) {
            continue;
          }
          if (sheet.cssRules) {
            for (let j = 0; j < sheet.cssRules.length; j++) {
              cssText += sheet.cssRules[j].cssText + "\n";
            }
          }
        } catch (e) {
          console.warn("Cannot access stylesheet:", e);
        }
      }
      document.querySelectorAll("style").forEach((style) => {
        if (!style.getAttribute("data-css-editor")) {
          cssText += style.textContent || "";
        }
      });
      return cssText;
    }
    async parseCSS(cssText) {
      const rules = [];
      try {
        const root2 = postcss$1.parse(cssText);
        root2.walkRules((rule2) => {
          const declarations = {};
          rule2.walkDecls((decl) => {
            declarations[decl.prop] = {
              value: decl.value,
              important: decl.important
            };
          });
          rules.push({
            selector: rule2.selector,
            declarations,
            specificity: this.calculateSpecificity(rule2.selector)
          });
        });
      } catch (error) {
        console.error("CSS parsing error:", error);
      }
      return rules;
    }
    detectCSSVariables() {
      const variables = /* @__PURE__ */ new Map();
      const rootStyle = getComputedStyle(document.documentElement);
      for (let i2 = 0; i2 < rootStyle.length; i2++) {
        const prop = rootStyle[i2];
        if (prop.startsWith("--")) {
          variables.set(prop, {
            name: prop,
            value: rootStyle.getPropertyValue(prop).trim(),
            scope: "root"
          });
        }
      }
      document.querySelectorAll("*").forEach((el2) => {
        if (el2.getAttribute("data-css-editor-panel")) return;
        const style = getComputedStyle(el2);
        for (let i2 = 0; i2 < style.length; i2++) {
          const prop = style[i2];
          if (prop.startsWith("--")) {
            const existing = variables.get(prop);
            if (!existing || existing.scope === "root") {
              variables.set(prop, {
                name: prop,
                value: style.getPropertyValue(prop).trim(),
                scope: "scoped",
                element: el2
              });
            }
          }
        }
      });
      return variables;
    }
    calculateSpecificity(selector) {
      let score = 0;
      score += (selector.match(/#[a-zA-Z]/g) || []).length * 100;
      score += (selector.match(/\.[a-zA-Z]/g) || []).length * 10;
      score += (selector.match(/\[[^\]]+\]/g) || []).length * 10;
      score += (selector.match(/^[a-zA-Z]+|\s[a-zA-Z]+/g) || []).length;
      return score;
    }
    isColorProperty(prop) {
      const colorProps = [
        "color",
        "background-color",
        "background",
        "border-color",
        "border-top-color",
        "border-right-color",
        "border-bottom-color",
        "border-left-color",
        "outline-color",
        "fill",
        "stroke"
      ];
      return colorProps.includes(prop);
    }
  }
  const limit = (x2, low = 0, high = 1) => {
    return min$3(max$3(low, x2), high);
  };
  const clip_rgb = (rgb2) => {
    rgb2._clipped = false;
    rgb2._unclipped = rgb2.slice(0);
    for (let i2 = 0; i2 <= 3; i2++) {
      if (i2 < 3) {
        if (rgb2[i2] < 0 || rgb2[i2] > 255) rgb2._clipped = true;
        rgb2[i2] = limit(rgb2[i2], 0, 255);
      } else if (i2 === 3) {
        rgb2[i2] = limit(rgb2[i2], 0, 1);
      }
    }
    return rgb2;
  };
  const classToType = {};
  for (let name of [
    "Boolean",
    "Number",
    "String",
    "Function",
    "Array",
    "Date",
    "RegExp",
    "Undefined",
    "Null"
  ]) {
    classToType[`[object ${name}]`] = name.toLowerCase();
  }
  function type(obj) {
    return classToType[Object.prototype.toString.call(obj)] || "object";
  }
  const unpack = (args, keyOrder = null) => {
    if (args.length >= 3) return Array.prototype.slice.call(args);
    if (type(args[0]) == "object" && keyOrder) {
      return keyOrder.split("").filter((k2) => args[0][k2] !== void 0).map((k2) => args[0][k2]);
    }
    return args[0];
  };
  const last = (args) => {
    if (args.length < 2) return null;
    const l2 = args.length - 1;
    if (type(args[l2]) == "string") return args[l2].toLowerCase();
    return null;
  };
  const { PI: PI$2, min: min$3, max: max$3 } = Math;
  const TWOPI = PI$2 * 2;
  const PITHIRD = PI$2 / 3;
  const DEG2RAD = PI$2 / 180;
  const RAD2DEG = 180 / PI$2;
  const input = {
    format: {},
    autodetect: []
  };
  class Color {
    constructor(...args) {
      const me2 = this;
      if (type(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
        return args[0];
      }
      let mode = last(args);
      let autodetect = false;
      if (!mode) {
        autodetect = true;
        if (!input.sorted) {
          input.autodetect = input.autodetect.sort((a, b2) => b2.p - a.p);
          input.sorted = true;
        }
        for (let chk of input.autodetect) {
          mode = chk.test(...args);
          if (mode) break;
        }
      }
      if (input.format[mode]) {
        const rgb2 = input.format[mode].apply(
          null,
          autodetect ? args : args.slice(0, -1)
        );
        me2._rgb = clip_rgb(rgb2);
      } else {
        throw new Error("unknown format: " + args);
      }
      if (me2._rgb.length === 3) me2._rgb.push(1);
    }
    toString() {
      if (type(this.hex) == "function") return this.hex();
      return `[${this._rgb.join(",")}]`;
    }
  }
  const version = "2.6.0";
  const chroma = (...args) => {
    return new chroma.Color(...args);
  };
  chroma.Color = Color;
  chroma.version = version;
  const cmyk2rgb = (...args) => {
    args = unpack(args, "cmyk");
    const [c2, m2, y2, k2] = args;
    const alpha = args.length > 4 ? args[4] : 1;
    if (k2 === 1) return [0, 0, 0, alpha];
    return [
      c2 >= 1 ? 0 : 255 * (1 - c2) * (1 - k2),
      // r
      m2 >= 1 ? 0 : 255 * (1 - m2) * (1 - k2),
      // g
      y2 >= 1 ? 0 : 255 * (1 - y2) * (1 - k2),
      // b
      alpha
    ];
  };
  const { max: max$2 } = Math;
  const rgb2cmyk = (...args) => {
    let [r2, g2, b2] = unpack(args, "rgb");
    r2 = r2 / 255;
    g2 = g2 / 255;
    b2 = b2 / 255;
    const k2 = 1 - max$2(r2, max$2(g2, b2));
    const f2 = k2 < 1 ? 1 / (1 - k2) : 0;
    const c2 = (1 - r2 - k2) * f2;
    const m2 = (1 - g2 - k2) * f2;
    const y2 = (1 - b2 - k2) * f2;
    return [c2, m2, y2, k2];
  };
  Color.prototype.cmyk = function() {
    return rgb2cmyk(this._rgb);
  };
  chroma.cmyk = (...args) => new Color(...args, "cmyk");
  input.format.cmyk = cmyk2rgb;
  input.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack(args, "cmyk");
      if (type(args) === "array" && args.length === 4) {
        return "cmyk";
      }
    }
  });
  const rnd = (a) => Math.round(a * 100) / 100;
  const hsl2css = (...args) => {
    const hsla = unpack(args, "hsla");
    let mode = last(args) || "lsa";
    hsla[0] = rnd(hsla[0] || 0);
    hsla[1] = rnd(hsla[1] * 100) + "%";
    hsla[2] = rnd(hsla[2] * 100) + "%";
    if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
      hsla[3] = hsla.length > 3 ? hsla[3] : 1;
      mode = "hsla";
    } else {
      hsla.length = 3;
    }
    return `${mode}(${hsla.join(",")})`;
  };
  const rgb2hsl$1 = (...args) => {
    args = unpack(args, "rgba");
    let [r2, g2, b2] = args;
    r2 /= 255;
    g2 /= 255;
    b2 /= 255;
    const minRgb = min$3(r2, g2, b2);
    const maxRgb = max$3(r2, g2, b2);
    const l2 = (maxRgb + minRgb) / 2;
    let s2, h2;
    if (maxRgb === minRgb) {
      s2 = 0;
      h2 = Number.NaN;
    } else {
      s2 = l2 < 0.5 ? (maxRgb - minRgb) / (maxRgb + minRgb) : (maxRgb - minRgb) / (2 - maxRgb - minRgb);
    }
    if (r2 == maxRgb) h2 = (g2 - b2) / (maxRgb - minRgb);
    else if (g2 == maxRgb) h2 = 2 + (b2 - r2) / (maxRgb - minRgb);
    else if (b2 == maxRgb) h2 = 4 + (r2 - g2) / (maxRgb - minRgb);
    h2 *= 60;
    if (h2 < 0) h2 += 360;
    if (args.length > 3 && args[3] !== void 0) return [h2, s2, l2, args[3]];
    return [h2, s2, l2];
  };
  const { round: round$6 } = Math;
  const rgb2css = (...args) => {
    const rgba = unpack(args, "rgba");
    let mode = last(args) || "rgb";
    if (mode.substr(0, 3) == "hsl") {
      return hsl2css(rgb2hsl$1(rgba), mode);
    }
    rgba[0] = round$6(rgba[0]);
    rgba[1] = round$6(rgba[1]);
    rgba[2] = round$6(rgba[2]);
    if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
      rgba[3] = rgba.length > 3 ? rgba[3] : 1;
      mode = "rgba";
    }
    return `${mode}(${rgba.slice(0, mode === "rgb" ? 3 : 4).join(",")})`;
  };
  const { round: round$5 } = Math;
  const hsl2rgb = (...args) => {
    args = unpack(args, "hsl");
    const [h2, s2, l2] = args;
    let r2, g2, b2;
    if (s2 === 0) {
      r2 = g2 = b2 = l2 * 255;
    } else {
      const t3 = [0, 0, 0];
      const c2 = [0, 0, 0];
      const t2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
      const t1 = 2 * l2 - t2;
      const h_ = h2 / 360;
      t3[0] = h_ + 1 / 3;
      t3[1] = h_;
      t3[2] = h_ - 1 / 3;
      for (let i2 = 0; i2 < 3; i2++) {
        if (t3[i2] < 0) t3[i2] += 1;
        if (t3[i2] > 1) t3[i2] -= 1;
        if (6 * t3[i2] < 1) c2[i2] = t1 + (t2 - t1) * 6 * t3[i2];
        else if (2 * t3[i2] < 1) c2[i2] = t2;
        else if (3 * t3[i2] < 2) c2[i2] = t1 + (t2 - t1) * (2 / 3 - t3[i2]) * 6;
        else c2[i2] = t1;
      }
      [r2, g2, b2] = [round$5(c2[0] * 255), round$5(c2[1] * 255), round$5(c2[2] * 255)];
    }
    if (args.length > 3) {
      return [r2, g2, b2, args[3]];
    }
    return [r2, g2, b2, 1];
  };
  const RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
  const RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
  const RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  const RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  const RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  const RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  const { round: round$4 } = Math;
  const css2rgb = (css) => {
    css = css.toLowerCase().trim();
    let m2;
    if (input.format.named) {
      try {
        return input.format.named(css);
      } catch (e) {
      }
    }
    if (m2 = css.match(RE_RGB)) {
      const rgb2 = m2.slice(1, 4);
      for (let i2 = 0; i2 < 3; i2++) {
        rgb2[i2] = +rgb2[i2];
      }
      rgb2[3] = 1;
      return rgb2;
    }
    if (m2 = css.match(RE_RGBA)) {
      const rgb2 = m2.slice(1, 5);
      for (let i2 = 0; i2 < 4; i2++) {
        rgb2[i2] = +rgb2[i2];
      }
      return rgb2;
    }
    if (m2 = css.match(RE_RGB_PCT)) {
      const rgb2 = m2.slice(1, 4);
      for (let i2 = 0; i2 < 3; i2++) {
        rgb2[i2] = round$4(rgb2[i2] * 2.55);
      }
      rgb2[3] = 1;
      return rgb2;
    }
    if (m2 = css.match(RE_RGBA_PCT)) {
      const rgb2 = m2.slice(1, 5);
      for (let i2 = 0; i2 < 3; i2++) {
        rgb2[i2] = round$4(rgb2[i2] * 2.55);
      }
      rgb2[3] = +rgb2[3];
      return rgb2;
    }
    if (m2 = css.match(RE_HSL)) {
      const hsl2 = m2.slice(1, 4);
      hsl2[1] *= 0.01;
      hsl2[2] *= 0.01;
      const rgb2 = hsl2rgb(hsl2);
      rgb2[3] = 1;
      return rgb2;
    }
    if (m2 = css.match(RE_HSLA)) {
      const hsl2 = m2.slice(1, 4);
      hsl2[1] *= 0.01;
      hsl2[2] *= 0.01;
      const rgb2 = hsl2rgb(hsl2);
      rgb2[3] = +m2[4];
      return rgb2;
    }
  };
  css2rgb.test = (s2) => {
    return RE_RGB.test(s2) || RE_RGBA.test(s2) || RE_RGB_PCT.test(s2) || RE_RGBA_PCT.test(s2) || RE_HSL.test(s2) || RE_HSLA.test(s2);
  };
  Color.prototype.css = function(mode) {
    return rgb2css(this._rgb, mode);
  };
  chroma.css = (...args) => new Color(...args, "css");
  input.format.css = css2rgb;
  input.autodetect.push({
    p: 5,
    test: (h2, ...rest) => {
      if (!rest.length && type(h2) === "string" && css2rgb.test(h2)) {
        return "css";
      }
    }
  });
  input.format.gl = (...args) => {
    const rgb2 = unpack(args, "rgba");
    rgb2[0] *= 255;
    rgb2[1] *= 255;
    rgb2[2] *= 255;
    return rgb2;
  };
  chroma.gl = (...args) => new Color(...args, "gl");
  Color.prototype.gl = function() {
    const rgb2 = this._rgb;
    return [rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255, rgb2[3]];
  };
  const { floor: floor$3 } = Math;
  const hcg2rgb = (...args) => {
    args = unpack(args, "hcg");
    let [h2, c2, _g] = args;
    let r2, g2, b2;
    _g = _g * 255;
    const _c = c2 * 255;
    if (c2 === 0) {
      r2 = g2 = b2 = _g;
    } else {
      if (h2 === 360) h2 = 0;
      if (h2 > 360) h2 -= 360;
      if (h2 < 0) h2 += 360;
      h2 /= 60;
      const i2 = floor$3(h2);
      const f2 = h2 - i2;
      const p2 = _g * (1 - c2);
      const q2 = p2 + _c * (1 - f2);
      const t2 = p2 + _c * f2;
      const v2 = p2 + _c;
      switch (i2) {
        case 0:
          [r2, g2, b2] = [v2, t2, p2];
          break;
        case 1:
          [r2, g2, b2] = [q2, v2, p2];
          break;
        case 2:
          [r2, g2, b2] = [p2, v2, t2];
          break;
        case 3:
          [r2, g2, b2] = [p2, q2, v2];
          break;
        case 4:
          [r2, g2, b2] = [t2, p2, v2];
          break;
        case 5:
          [r2, g2, b2] = [v2, p2, q2];
          break;
      }
    }
    return [r2, g2, b2, args.length > 3 ? args[3] : 1];
  };
  const rgb2hcg = (...args) => {
    const [r2, g2, b2] = unpack(args, "rgb");
    const minRgb = min$3(r2, g2, b2);
    const maxRgb = max$3(r2, g2, b2);
    const delta = maxRgb - minRgb;
    const c2 = delta * 100 / 255;
    const _g = minRgb / (255 - delta) * 100;
    let h2;
    if (delta === 0) {
      h2 = Number.NaN;
    } else {
      if (r2 === maxRgb) h2 = (g2 - b2) / delta;
      if (g2 === maxRgb) h2 = 2 + (b2 - r2) / delta;
      if (b2 === maxRgb) h2 = 4 + (r2 - g2) / delta;
      h2 *= 60;
      if (h2 < 0) h2 += 360;
    }
    return [h2, c2, _g];
  };
  Color.prototype.hcg = function() {
    return rgb2hcg(this._rgb);
  };
  chroma.hcg = (...args) => new Color(...args, "hcg");
  input.format.hcg = hcg2rgb;
  input.autodetect.push({
    p: 1,
    test: (...args) => {
      args = unpack(args, "hcg");
      if (type(args) === "array" && args.length === 3) {
        return "hcg";
      }
    }
  });
  const RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
  const hex2rgb = (hex) => {
    if (hex.match(RE_HEX)) {
      if (hex.length === 4 || hex.length === 7) {
        hex = hex.substr(1);
      }
      if (hex.length === 3) {
        hex = hex.split("");
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      const u2 = parseInt(hex, 16);
      const r2 = u2 >> 16;
      const g2 = u2 >> 8 & 255;
      const b2 = u2 & 255;
      return [r2, g2, b2, 1];
    }
    if (hex.match(RE_HEXA)) {
      if (hex.length === 5 || hex.length === 9) {
        hex = hex.substr(1);
      }
      if (hex.length === 4) {
        hex = hex.split("");
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
      }
      const u2 = parseInt(hex, 16);
      const r2 = u2 >> 24 & 255;
      const g2 = u2 >> 16 & 255;
      const b2 = u2 >> 8 & 255;
      const a = Math.round((u2 & 255) / 255 * 100) / 100;
      return [r2, g2, b2, a];
    }
    throw new Error(`unknown hex color: ${hex}`);
  };
  const { round: round$3 } = Math;
  const rgb2hex = (...args) => {
    let [r2, g2, b2, a] = unpack(args, "rgba");
    let mode = last(args) || "auto";
    if (a === void 0) a = 1;
    if (mode === "auto") {
      mode = a < 1 ? "rgba" : "rgb";
    }
    r2 = round$3(r2);
    g2 = round$3(g2);
    b2 = round$3(b2);
    const u2 = r2 << 16 | g2 << 8 | b2;
    let str = "000000" + u2.toString(16);
    str = str.substr(str.length - 6);
    let hxa = "0" + round$3(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);
    switch (mode.toLowerCase()) {
      case "rgba":
        return `#${str}${hxa}`;
      case "argb":
        return `#${hxa}${str}`;
      default:
        return `#${str}`;
    }
  };
  Color.prototype.hex = function(mode) {
    return rgb2hex(this._rgb, mode);
  };
  chroma.hex = (...args) => new Color(...args, "hex");
  input.format.hex = hex2rgb;
  input.autodetect.push({
    p: 4,
    test: (h2, ...rest) => {
      if (!rest.length && type(h2) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h2.length) >= 0) {
        return "hex";
      }
    }
  });
  const { cos: cos$4 } = Math;
  const hsi2rgb = (...args) => {
    args = unpack(args, "hsi");
    let [h2, s2, i2] = args;
    let r2, g2, b2;
    if (isNaN(h2)) h2 = 0;
    if (isNaN(s2)) s2 = 0;
    if (h2 > 360) h2 -= 360;
    if (h2 < 0) h2 += 360;
    h2 /= 360;
    if (h2 < 1 / 3) {
      b2 = (1 - s2) / 3;
      r2 = (1 + s2 * cos$4(TWOPI * h2) / cos$4(PITHIRD - TWOPI * h2)) / 3;
      g2 = 1 - (b2 + r2);
    } else if (h2 < 2 / 3) {
      h2 -= 1 / 3;
      r2 = (1 - s2) / 3;
      g2 = (1 + s2 * cos$4(TWOPI * h2) / cos$4(PITHIRD - TWOPI * h2)) / 3;
      b2 = 1 - (r2 + g2);
    } else {
      h2 -= 2 / 3;
      g2 = (1 - s2) / 3;
      b2 = (1 + s2 * cos$4(TWOPI * h2) / cos$4(PITHIRD - TWOPI * h2)) / 3;
      r2 = 1 - (g2 + b2);
    }
    r2 = limit(i2 * r2 * 3);
    g2 = limit(i2 * g2 * 3);
    b2 = limit(i2 * b2 * 3);
    return [r2 * 255, g2 * 255, b2 * 255, args.length > 3 ? args[3] : 1];
  };
  const { min: min$2, sqrt: sqrt$4, acos } = Math;
  const rgb2hsi = (...args) => {
    let [r2, g2, b2] = unpack(args, "rgb");
    r2 /= 255;
    g2 /= 255;
    b2 /= 255;
    let h2;
    const min_ = min$2(r2, g2, b2);
    const i2 = (r2 + g2 + b2) / 3;
    const s2 = i2 > 0 ? 1 - min_ / i2 : 0;
    if (s2 === 0) {
      h2 = NaN;
    } else {
      h2 = (r2 - g2 + (r2 - b2)) / 2;
      h2 /= sqrt$4((r2 - g2) * (r2 - g2) + (r2 - b2) * (g2 - b2));
      h2 = acos(h2);
      if (b2 > g2) {
        h2 = TWOPI - h2;
      }
      h2 /= TWOPI;
    }
    return [h2 * 360, s2, i2];
  };
  Color.prototype.hsi = function() {
    return rgb2hsi(this._rgb);
  };
  chroma.hsi = (...args) => new Color(...args, "hsi");
  input.format.hsi = hsi2rgb;
  input.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack(args, "hsi");
      if (type(args) === "array" && args.length === 3) {
        return "hsi";
      }
    }
  });
  Color.prototype.hsl = function() {
    return rgb2hsl$1(this._rgb);
  };
  chroma.hsl = (...args) => new Color(...args, "hsl");
  input.format.hsl = hsl2rgb;
  input.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack(args, "hsl");
      if (type(args) === "array" && args.length === 3) {
        return "hsl";
      }
    }
  });
  const { floor: floor$2 } = Math;
  const hsv2rgb = (...args) => {
    args = unpack(args, "hsv");
    let [h2, s2, v2] = args;
    let r2, g2, b2;
    v2 *= 255;
    if (s2 === 0) {
      r2 = g2 = b2 = v2;
    } else {
      if (h2 === 360) h2 = 0;
      if (h2 > 360) h2 -= 360;
      if (h2 < 0) h2 += 360;
      h2 /= 60;
      const i2 = floor$2(h2);
      const f2 = h2 - i2;
      const p2 = v2 * (1 - s2);
      const q2 = v2 * (1 - s2 * f2);
      const t2 = v2 * (1 - s2 * (1 - f2));
      switch (i2) {
        case 0:
          [r2, g2, b2] = [v2, t2, p2];
          break;
        case 1:
          [r2, g2, b2] = [q2, v2, p2];
          break;
        case 2:
          [r2, g2, b2] = [p2, v2, t2];
          break;
        case 3:
          [r2, g2, b2] = [p2, q2, v2];
          break;
        case 4:
          [r2, g2, b2] = [t2, p2, v2];
          break;
        case 5:
          [r2, g2, b2] = [v2, p2, q2];
          break;
      }
    }
    return [r2, g2, b2, args.length > 3 ? args[3] : 1];
  };
  const { min: min$1, max: max$1 } = Math;
  const rgb2hsl = (...args) => {
    args = unpack(args, "rgb");
    let [r2, g2, b2] = args;
    const min_ = min$1(r2, g2, b2);
    const max_ = max$1(r2, g2, b2);
    const delta = max_ - min_;
    let h2, s2, v2;
    v2 = max_ / 255;
    if (max_ === 0) {
      h2 = Number.NaN;
      s2 = 0;
    } else {
      s2 = delta / max_;
      if (r2 === max_) h2 = (g2 - b2) / delta;
      if (g2 === max_) h2 = 2 + (b2 - r2) / delta;
      if (b2 === max_) h2 = 4 + (r2 - g2) / delta;
      h2 *= 60;
      if (h2 < 0) h2 += 360;
    }
    return [h2, s2, v2];
  };
  Color.prototype.hsv = function() {
    return rgb2hsl(this._rgb);
  };
  chroma.hsv = (...args) => new Color(...args, "hsv");
  input.format.hsv = hsv2rgb;
  input.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack(args, "hsv");
      if (type(args) === "array" && args.length === 3) {
        return "hsv";
      }
    }
  });
  const LAB_CONSTANTS = {
    // Corresponds roughly to RGB brighter/darker
    Kn: 18,
    // D65 standard referent
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,
    t0: 0.137931034,
    // 4 / 29
    t1: 0.206896552,
    // 6 / 29
    t2: 0.12841855,
    // 3 * t1 * t1
    t3: 8856452e-9
    // t1 * t1 * t1
  };
  const { pow: pow$a } = Math;
  const lab2rgb = (...args) => {
    args = unpack(args, "lab");
    const [l2, a, b2] = args;
    let x2, y2, z2, r2, g2, b_;
    y2 = (l2 + 16) / 116;
    x2 = isNaN(a) ? y2 : y2 + a / 500;
    z2 = isNaN(b2) ? y2 : y2 - b2 / 200;
    y2 = LAB_CONSTANTS.Yn * lab_xyz(y2);
    x2 = LAB_CONSTANTS.Xn * lab_xyz(x2);
    z2 = LAB_CONSTANTS.Zn * lab_xyz(z2);
    r2 = xyz_rgb(3.2404542 * x2 - 1.5371385 * y2 - 0.4985314 * z2);
    g2 = xyz_rgb(-0.969266 * x2 + 1.8760108 * y2 + 0.041556 * z2);
    b_ = xyz_rgb(0.0556434 * x2 - 0.2040259 * y2 + 1.0572252 * z2);
    return [r2, g2, b_, args.length > 3 ? args[3] : 1];
  };
  const xyz_rgb = (r2) => {
    return 255 * (r2 <= 304e-5 ? 12.92 * r2 : 1.055 * pow$a(r2, 1 / 2.4) - 0.055);
  };
  const lab_xyz = (t2) => {
    return t2 > LAB_CONSTANTS.t1 ? t2 * t2 * t2 : LAB_CONSTANTS.t2 * (t2 - LAB_CONSTANTS.t0);
  };
  const { pow: pow$9 } = Math;
  const rgb2lab = (...args) => {
    const [r2, g2, b2] = unpack(args, "rgb");
    const [x2, y2, z2] = rgb2xyz(r2, g2, b2);
    const l2 = 116 * y2 - 16;
    return [l2 < 0 ? 0 : l2, 500 * (x2 - y2), 200 * (y2 - z2)];
  };
  const rgb_xyz = (r2) => {
    if ((r2 /= 255) <= 0.04045) return r2 / 12.92;
    return pow$9((r2 + 0.055) / 1.055, 2.4);
  };
  const xyz_lab = (t2) => {
    if (t2 > LAB_CONSTANTS.t3) return pow$9(t2, 1 / 3);
    return t2 / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
  };
  const rgb2xyz = (r2, g2, b2) => {
    r2 = rgb_xyz(r2);
    g2 = rgb_xyz(g2);
    b2 = rgb_xyz(b2);
    const x2 = xyz_lab(
      (0.4124564 * r2 + 0.3575761 * g2 + 0.1804375 * b2) / LAB_CONSTANTS.Xn
    );
    const y2 = xyz_lab(
      (0.2126729 * r2 + 0.7151522 * g2 + 0.072175 * b2) / LAB_CONSTANTS.Yn
    );
    const z2 = xyz_lab(
      (0.0193339 * r2 + 0.119192 * g2 + 0.9503041 * b2) / LAB_CONSTANTS.Zn
    );
    return [x2, y2, z2];
  };
  Color.prototype.lab = function() {
    return rgb2lab(this._rgb);
  };
  chroma.lab = (...args) => new Color(...args, "lab");
  input.format.lab = lab2rgb;
  input.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack(args, "lab");
      if (type(args) === "array" && args.length === 3) {
        return "lab";
      }
    }
  });
  const { sin: sin$3, cos: cos$3 } = Math;
  const lch2lab = (...args) => {
    let [l2, c2, h2] = unpack(args, "lch");
    if (isNaN(h2)) h2 = 0;
    h2 = h2 * DEG2RAD;
    return [l2, cos$3(h2) * c2, sin$3(h2) * c2];
  };
  const lch2rgb = (...args) => {
    args = unpack(args, "lch");
    const [l2, c2, h2] = args;
    const [L2, a, b_] = lch2lab(l2, c2, h2);
    const [r2, g2, b2] = lab2rgb(L2, a, b_);
    return [r2, g2, b2, args.length > 3 ? args[3] : 1];
  };
  const hcl2rgb = (...args) => {
    const hcl = unpack(args, "hcl").reverse();
    return lch2rgb(...hcl);
  };
  const { sqrt: sqrt$3, atan2: atan2$2, round: round$2 } = Math;
  const lab2lch = (...args) => {
    const [l2, a, b2] = unpack(args, "lab");
    const c2 = sqrt$3(a * a + b2 * b2);
    let h2 = (atan2$2(b2, a) * RAD2DEG + 360) % 360;
    if (round$2(c2 * 1e4) === 0) h2 = Number.NaN;
    return [l2, c2, h2];
  };
  const rgb2lch = (...args) => {
    const [r2, g2, b2] = unpack(args, "rgb");
    const [l2, a, b_] = rgb2lab(r2, g2, b2);
    return lab2lch(l2, a, b_);
  };
  Color.prototype.lch = function() {
    return rgb2lch(this._rgb);
  };
  Color.prototype.hcl = function() {
    return rgb2lch(this._rgb).reverse();
  };
  chroma.lch = (...args) => new Color(...args, "lch");
  chroma.hcl = (...args) => new Color(...args, "hcl");
  input.format.lch = lch2rgb;
  input.format.hcl = hcl2rgb;
  ["lch", "hcl"].forEach(
    (m2) => input.autodetect.push({
      p: 2,
      test: (...args) => {
        args = unpack(args, m2);
        if (type(args) === "array" && args.length === 3) {
          return m2;
        }
      }
    })
  );
  const w3cx11 = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    laserlemon: "#ffff54",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrod: "#fafad2",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    maroon2: "#7f0000",
    maroon3: "#b03060",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    purple2: "#7f007f",
    purple3: "#a020f0",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  Color.prototype.name = function() {
    const hex = rgb2hex(this._rgb, "rgb");
    for (let n2 of Object.keys(w3cx11)) {
      if (w3cx11[n2] === hex) return n2.toLowerCase();
    }
    return hex;
  };
  input.format.named = (name) => {
    name = name.toLowerCase();
    if (w3cx11[name]) return hex2rgb(w3cx11[name]);
    throw new Error("unknown color name: " + name);
  };
  input.autodetect.push({
    p: 5,
    test: (h2, ...rest) => {
      if (!rest.length && type(h2) === "string" && w3cx11[h2.toLowerCase()]) {
        return "named";
      }
    }
  });
  const num2rgb = (num2) => {
    if (type(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
      const r2 = num2 >> 16;
      const g2 = num2 >> 8 & 255;
      const b2 = num2 & 255;
      return [r2, g2, b2, 1];
    }
    throw new Error("unknown num color: " + num2);
  };
  const rgb2num = (...args) => {
    const [r2, g2, b2] = unpack(args, "rgb");
    return (r2 << 16) + (g2 << 8) + b2;
  };
  Color.prototype.num = function() {
    return rgb2num(this._rgb);
  };
  chroma.num = (...args) => new Color(...args, "num");
  input.format.num = num2rgb;
  input.autodetect.push({
    p: 5,
    test: (...args) => {
      if (args.length === 1 && type(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
        return "num";
      }
    }
  });
  const { round: round$1 } = Math;
  Color.prototype.rgb = function(rnd2 = true) {
    if (rnd2 === false) return this._rgb.slice(0, 3);
    return this._rgb.slice(0, 3).map(round$1);
  };
  Color.prototype.rgba = function(rnd2 = true) {
    return this._rgb.slice(0, 4).map((v2, i2) => {
      return i2 < 3 ? rnd2 === false ? v2 : round$1(v2) : v2;
    });
  };
  chroma.rgb = (...args) => new Color(...args, "rgb");
  input.format.rgb = (...args) => {
    const rgba = unpack(args, "rgba");
    if (rgba[3] === void 0) rgba[3] = 1;
    return rgba;
  };
  input.autodetect.push({
    p: 3,
    test: (...args) => {
      args = unpack(args, "rgba");
      if (type(args) === "array" && (args.length === 3 || args.length === 4 && type(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
        return "rgb";
      }
    }
  });
  const { log: log$1 } = Math;
  const temperature2rgb = (kelvin) => {
    const temp = kelvin / 100;
    let r2, g2, b2;
    if (temp < 66) {
      r2 = 255;
      g2 = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g2 = temp - 2) + 104.49216199393888 * log$1(g2);
      b2 = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b2 = temp - 10) + 115.67994401066147 * log$1(b2);
    } else {
      r2 = 351.97690566805693 + 0.114206453784165 * (r2 = temp - 55) - 40.25366309332127 * log$1(r2);
      g2 = 325.4494125711974 + 0.07943456536662342 * (g2 = temp - 50) - 28.0852963507957 * log$1(g2);
      b2 = 255;
    }
    return [r2, g2, b2, 1];
  };
  const { round } = Math;
  const rgb2temperature = (...args) => {
    const rgb2 = unpack(args, "rgb");
    const r2 = rgb2[0], b2 = rgb2[2];
    let minTemp = 1e3;
    let maxTemp = 4e4;
    const eps = 0.4;
    let temp;
    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;
      const rgb3 = temperature2rgb(temp);
      if (rgb3[2] / rgb3[0] >= b2 / r2) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }
    return round(temp);
  };
  Color.prototype.temp = Color.prototype.kelvin = Color.prototype.temperature = function() {
    return rgb2temperature(this._rgb);
  };
  chroma.temp = chroma.kelvin = chroma.temperature = (...args) => new Color(...args, "temp");
  input.format.temp = input.format.kelvin = input.format.temperature = temperature2rgb;
  const { pow: pow$8, sign: sign$1 } = Math;
  const oklab2rgb = (...args) => {
    args = unpack(args, "lab");
    const [L2, a, b2] = args;
    const l2 = pow$8(L2 + 0.3963377774 * a + 0.2158037573 * b2, 3);
    const m2 = pow$8(L2 - 0.1055613458 * a - 0.0638541728 * b2, 3);
    const s2 = pow$8(L2 - 0.0894841775 * a - 1.291485548 * b2, 3);
    return [
      255 * lrgb2rgb(4.0767416621 * l2 - 3.3077115913 * m2 + 0.2309699292 * s2),
      255 * lrgb2rgb(-1.2684380046 * l2 + 2.6097574011 * m2 - 0.3413193965 * s2),
      255 * lrgb2rgb(-0.0041960863 * l2 - 0.7034186147 * m2 + 1.707614701 * s2),
      args.length > 3 ? args[3] : 1
    ];
  };
  function lrgb2rgb(c2) {
    const abs2 = Math.abs(c2);
    if (abs2 > 31308e-7) {
      return (sign$1(c2) || 1) * (1.055 * pow$8(abs2, 1 / 2.4) - 0.055);
    }
    return c2 * 12.92;
  }
  const { cbrt, pow: pow$7, sign } = Math;
  const rgb2oklab = (...args) => {
    const [r2, g2, b2] = unpack(args, "rgb");
    const [lr, lg2, lb2] = [
      rgb2lrgb(r2 / 255),
      rgb2lrgb(g2 / 255),
      rgb2lrgb(b2 / 255)
    ];
    const l2 = cbrt(0.4122214708 * lr + 0.5363325363 * lg2 + 0.0514459929 * lb2);
    const m2 = cbrt(0.2119034982 * lr + 0.6806995451 * lg2 + 0.1073969566 * lb2);
    const s2 = cbrt(0.0883024619 * lr + 0.2817188376 * lg2 + 0.6299787005 * lb2);
    return [
      0.2104542553 * l2 + 0.793617785 * m2 - 0.0040720468 * s2,
      1.9779984951 * l2 - 2.428592205 * m2 + 0.4505937099 * s2,
      0.0259040371 * l2 + 0.7827717662 * m2 - 0.808675766 * s2
    ];
  };
  function rgb2lrgb(c2) {
    const abs2 = Math.abs(c2);
    if (abs2 < 0.04045) {
      return c2 / 12.92;
    }
    return (sign(c2) || 1) * pow$7((abs2 + 0.055) / 1.055, 2.4);
  }
  Color.prototype.oklab = function() {
    return rgb2oklab(this._rgb);
  };
  chroma.oklab = (...args) => new Color(...args, "oklab");
  input.format.oklab = oklab2rgb;
  input.autodetect.push({
    p: 3,
    test: (...args) => {
      args = unpack(args, "oklab");
      if (type(args) === "array" && args.length === 3) {
        return "oklab";
      }
    }
  });
  const oklch2rgb = (...args) => {
    args = unpack(args, "lch");
    const [l2, c2, h2] = args;
    const [L2, a, b_] = lch2lab(l2, c2, h2);
    const [r2, g2, b2] = oklab2rgb(L2, a, b_);
    return [r2, g2, b2, args.length > 3 ? args[3] : 1];
  };
  const rgb2oklch = (...args) => {
    const [r2, g2, b2] = unpack(args, "rgb");
    const [l2, a, b_] = rgb2oklab(r2, g2, b2);
    return lab2lch(l2, a, b_);
  };
  Color.prototype.oklch = function() {
    return rgb2oklch(this._rgb);
  };
  chroma.oklch = (...args) => new Color(...args, "oklch");
  input.format.oklch = oklch2rgb;
  input.autodetect.push({
    p: 3,
    test: (...args) => {
      args = unpack(args, "oklch");
      if (type(args) === "array" && args.length === 3) {
        return "oklch";
      }
    }
  });
  Color.prototype.alpha = function(a, mutate = false) {
    if (a !== void 0 && type(a) === "number") {
      if (mutate) {
        this._rgb[3] = a;
        return this;
      }
      return new Color([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
    }
    return this._rgb[3];
  };
  Color.prototype.clipped = function() {
    return this._rgb._clipped || false;
  };
  Color.prototype.darken = function(amount = 1) {
    const me2 = this;
    const lab2 = me2.lab();
    lab2[0] -= LAB_CONSTANTS.Kn * amount;
    return new Color(lab2, "lab").alpha(me2.alpha(), true);
  };
  Color.prototype.brighten = function(amount = 1) {
    return this.darken(-amount);
  };
  Color.prototype.darker = Color.prototype.darken;
  Color.prototype.brighter = Color.prototype.brighten;
  Color.prototype.get = function(mc2) {
    const [mode, channel] = mc2.split(".");
    const src = this[mode]();
    if (channel) {
      const i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
      if (i2 > -1) return src[i2];
      throw new Error(`unknown channel ${channel} in mode ${mode}`);
    } else {
      return src;
    }
  };
  const { pow: pow$6 } = Math;
  const EPS = 1e-7;
  const MAX_ITER = 20;
  Color.prototype.luminance = function(lum, mode = "rgb") {
    if (lum !== void 0 && type(lum) === "number") {
      if (lum === 0) {
        return new Color([0, 0, 0, this._rgb[3]], "rgb");
      }
      if (lum === 1) {
        return new Color([255, 255, 255, this._rgb[3]], "rgb");
      }
      let cur_lum = this.luminance();
      let max_iter = MAX_ITER;
      const test = (low, high) => {
        const mid = low.interpolate(high, 0.5, mode);
        const lm = mid.luminance();
        if (Math.abs(lum - lm) < EPS || !max_iter--) {
          return mid;
        }
        return lm > lum ? test(low, mid) : test(mid, high);
      };
      const rgb2 = (cur_lum > lum ? test(new Color([0, 0, 0]), this) : test(this, new Color([255, 255, 255]))).rgb();
      return new Color([...rgb2, this._rgb[3]]);
    }
    return rgb2luminance(...this._rgb.slice(0, 3));
  };
  const rgb2luminance = (r2, g2, b2) => {
    r2 = luminance_x(r2);
    g2 = luminance_x(g2);
    b2 = luminance_x(b2);
    return 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2;
  };
  const luminance_x = (x2) => {
    x2 /= 255;
    return x2 <= 0.03928 ? x2 / 12.92 : pow$6((x2 + 0.055) / 1.055, 2.4);
  };
  const index = {};
  const mix = (col1, col2, f2 = 0.5, ...rest) => {
    let mode = rest[0] || "lrgb";
    if (!index[mode] && !rest.length) {
      mode = Object.keys(index)[0];
    }
    if (!index[mode]) {
      throw new Error(`interpolation mode ${mode} is not defined`);
    }
    if (type(col1) !== "object") col1 = new Color(col1);
    if (type(col2) !== "object") col2 = new Color(col2);
    return index[mode](col1, col2, f2).alpha(
      col1.alpha() + f2 * (col2.alpha() - col1.alpha())
    );
  };
  Color.prototype.mix = Color.prototype.interpolate = function(col2, f2 = 0.5, ...rest) {
    return mix(this, col2, f2, ...rest);
  };
  Color.prototype.premultiply = function(mutate = false) {
    const rgb2 = this._rgb;
    const a = rgb2[3];
    if (mutate) {
      this._rgb = [rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a];
      return this;
    } else {
      return new Color([rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a], "rgb");
    }
  };
  Color.prototype.saturate = function(amount = 1) {
    const me2 = this;
    const lch2 = me2.lch();
    lch2[1] += LAB_CONSTANTS.Kn * amount;
    if (lch2[1] < 0) lch2[1] = 0;
    return new Color(lch2, "lch").alpha(me2.alpha(), true);
  };
  Color.prototype.desaturate = function(amount = 1) {
    return this.saturate(-amount);
  };
  Color.prototype.set = function(mc2, value, mutate = false) {
    const [mode, channel] = mc2.split(".");
    const src = this[mode]();
    if (channel) {
      const i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
      if (i2 > -1) {
        if (type(value) == "string") {
          switch (value.charAt(0)) {
            case "+":
              src[i2] += +value;
              break;
            case "-":
              src[i2] += +value;
              break;
            case "*":
              src[i2] *= +value.substr(1);
              break;
            case "/":
              src[i2] /= +value.substr(1);
              break;
            default:
              src[i2] = +value;
          }
        } else if (type(value) === "number") {
          src[i2] = value;
        } else {
          throw new Error(`unsupported value for Color.set`);
        }
        const out = new Color(src, mode);
        if (mutate) {
          this._rgb = out._rgb;
          return this;
        }
        return out;
      }
      throw new Error(`unknown channel ${channel} in mode ${mode}`);
    } else {
      return src;
    }
  };
  Color.prototype.tint = function(f2 = 0.5, ...rest) {
    return mix(this, "white", f2, ...rest);
  };
  Color.prototype.shade = function(f2 = 0.5, ...rest) {
    return mix(this, "black", f2, ...rest);
  };
  const rgb = (col1, col2, f2) => {
    const xyz0 = col1._rgb;
    const xyz1 = col2._rgb;
    return new Color(
      xyz0[0] + f2 * (xyz1[0] - xyz0[0]),
      xyz0[1] + f2 * (xyz1[1] - xyz0[1]),
      xyz0[2] + f2 * (xyz1[2] - xyz0[2]),
      "rgb"
    );
  };
  index.rgb = rgb;
  const { sqrt: sqrt$2, pow: pow$5 } = Math;
  const lrgb = (col1, col2, f2) => {
    const [x1, y1, z1] = col1._rgb;
    const [x2, y2, z2] = col2._rgb;
    return new Color(
      sqrt$2(pow$5(x1, 2) * (1 - f2) + pow$5(x2, 2) * f2),
      sqrt$2(pow$5(y1, 2) * (1 - f2) + pow$5(y2, 2) * f2),
      sqrt$2(pow$5(z1, 2) * (1 - f2) + pow$5(z2, 2) * f2),
      "rgb"
    );
  };
  index.lrgb = lrgb;
  const lab = (col1, col2, f2) => {
    const xyz0 = col1.lab();
    const xyz1 = col2.lab();
    return new Color(
      xyz0[0] + f2 * (xyz1[0] - xyz0[0]),
      xyz0[1] + f2 * (xyz1[1] - xyz0[1]),
      xyz0[2] + f2 * (xyz1[2] - xyz0[2]),
      "lab"
    );
  };
  index.lab = lab;
  const interpolate_hsx = (col1, col2, f2, m2) => {
    let xyz0, xyz1;
    if (m2 === "hsl") {
      xyz0 = col1.hsl();
      xyz1 = col2.hsl();
    } else if (m2 === "hsv") {
      xyz0 = col1.hsv();
      xyz1 = col2.hsv();
    } else if (m2 === "hcg") {
      xyz0 = col1.hcg();
      xyz1 = col2.hcg();
    } else if (m2 === "hsi") {
      xyz0 = col1.hsi();
      xyz1 = col2.hsi();
    } else if (m2 === "lch" || m2 === "hcl") {
      m2 = "hcl";
      xyz0 = col1.hcl();
      xyz1 = col2.hcl();
    } else if (m2 === "oklch") {
      xyz0 = col1.oklch().reverse();
      xyz1 = col2.oklch().reverse();
    }
    let hue0, hue1, sat0, sat1, lbv0, lbv1;
    if (m2.substr(0, 1) === "h" || m2 === "oklch") {
      [hue0, sat0, lbv0] = xyz0;
      [hue1, sat1, lbv1] = xyz1;
    }
    let sat, hue, lbv, dh2;
    if (!isNaN(hue0) && !isNaN(hue1)) {
      if (hue1 > hue0 && hue1 - hue0 > 180) {
        dh2 = hue1 - (hue0 + 360);
      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
        dh2 = hue1 + 360 - hue0;
      } else {
        dh2 = hue1 - hue0;
      }
      hue = hue0 + f2 * dh2;
    } else if (!isNaN(hue0)) {
      hue = hue0;
      if ((lbv1 == 1 || lbv1 == 0) && m2 != "hsv") sat = sat0;
    } else if (!isNaN(hue1)) {
      hue = hue1;
      if ((lbv0 == 1 || lbv0 == 0) && m2 != "hsv") sat = sat1;
    } else {
      hue = Number.NaN;
    }
    if (sat === void 0) sat = sat0 + f2 * (sat1 - sat0);
    lbv = lbv0 + f2 * (lbv1 - lbv0);
    return m2 === "oklch" ? new Color([lbv, sat, hue], m2) : new Color([hue, sat, lbv], m2);
  };
  const lch = (col1, col2, f2) => {
    return interpolate_hsx(col1, col2, f2, "lch");
  };
  index.lch = lch;
  index.hcl = lch;
  const num = (col1, col2, f2) => {
    const c1 = col1.num();
    const c2 = col2.num();
    return new Color(c1 + f2 * (c2 - c1), "num");
  };
  index.num = num;
  const hcg = (col1, col2, f2) => {
    return interpolate_hsx(col1, col2, f2, "hcg");
  };
  index.hcg = hcg;
  const hsi = (col1, col2, f2) => {
    return interpolate_hsx(col1, col2, f2, "hsi");
  };
  index.hsi = hsi;
  const hsl = (col1, col2, f2) => {
    return interpolate_hsx(col1, col2, f2, "hsl");
  };
  index.hsl = hsl;
  const hsv = (col1, col2, f2) => {
    return interpolate_hsx(col1, col2, f2, "hsv");
  };
  index.hsv = hsv;
  const oklab = (col1, col2, f2) => {
    const xyz0 = col1.oklab();
    const xyz1 = col2.oklab();
    return new Color(
      xyz0[0] + f2 * (xyz1[0] - xyz0[0]),
      xyz0[1] + f2 * (xyz1[1] - xyz0[1]),
      xyz0[2] + f2 * (xyz1[2] - xyz0[2]),
      "oklab"
    );
  };
  index.oklab = oklab;
  const oklch = (col1, col2, f2) => {
    return interpolate_hsx(col1, col2, f2, "oklch");
  };
  index.oklch = oklch;
  const { pow: pow$4, sqrt: sqrt$1, PI: PI$1, cos: cos$2, sin: sin$2, atan2: atan2$1 } = Math;
  const average = (colors, mode = "lrgb", weights = null) => {
    const l2 = colors.length;
    if (!weights) weights = Array.from(new Array(l2)).map(() => 1);
    const k2 = l2 / weights.reduce(function(a, b2) {
      return a + b2;
    });
    weights.forEach((w2, i2) => {
      weights[i2] *= k2;
    });
    colors = colors.map((c2) => new Color(c2));
    if (mode === "lrgb") {
      return _average_lrgb(colors, weights);
    }
    const first = colors.shift();
    const xyz = first.get(mode);
    const cnt = [];
    let dx = 0;
    let dy = 0;
    for (let i2 = 0; i2 < xyz.length; i2++) {
      xyz[i2] = (xyz[i2] || 0) * weights[0];
      cnt.push(isNaN(xyz[i2]) ? 0 : weights[0]);
      if (mode.charAt(i2) === "h" && !isNaN(xyz[i2])) {
        const A2 = xyz[i2] / 180 * PI$1;
        dx += cos$2(A2) * weights[0];
        dy += sin$2(A2) * weights[0];
      }
    }
    let alpha = first.alpha() * weights[0];
    colors.forEach((c2, ci2) => {
      const xyz2 = c2.get(mode);
      alpha += c2.alpha() * weights[ci2 + 1];
      for (let i2 = 0; i2 < xyz.length; i2++) {
        if (!isNaN(xyz2[i2])) {
          cnt[i2] += weights[ci2 + 1];
          if (mode.charAt(i2) === "h") {
            const A2 = xyz2[i2] / 180 * PI$1;
            dx += cos$2(A2) * weights[ci2 + 1];
            dy += sin$2(A2) * weights[ci2 + 1];
          } else {
            xyz[i2] += xyz2[i2] * weights[ci2 + 1];
          }
        }
      }
    });
    for (let i2 = 0; i2 < xyz.length; i2++) {
      if (mode.charAt(i2) === "h") {
        let A2 = atan2$1(dy / cnt[i2], dx / cnt[i2]) / PI$1 * 180;
        while (A2 < 0) A2 += 360;
        while (A2 >= 360) A2 -= 360;
        xyz[i2] = A2;
      } else {
        xyz[i2] = xyz[i2] / cnt[i2];
      }
    }
    alpha /= l2;
    return new Color(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
  };
  const _average_lrgb = (colors, weights) => {
    const l2 = colors.length;
    const xyz = [0, 0, 0, 0];
    for (let i2 = 0; i2 < colors.length; i2++) {
      const col = colors[i2];
      const f2 = weights[i2] / l2;
      const rgb2 = col._rgb;
      xyz[0] += pow$4(rgb2[0], 2) * f2;
      xyz[1] += pow$4(rgb2[1], 2) * f2;
      xyz[2] += pow$4(rgb2[2], 2) * f2;
      xyz[3] += rgb2[3] * f2;
    }
    xyz[0] = sqrt$1(xyz[0]);
    xyz[1] = sqrt$1(xyz[1]);
    xyz[2] = sqrt$1(xyz[2]);
    if (xyz[3] > 0.9999999) xyz[3] = 1;
    return new Color(clip_rgb(xyz));
  };
  const { pow: pow$3 } = Math;
  function scale(colors) {
    let _mode = "rgb";
    let _nacol = chroma("#ccc");
    let _spread = 0;
    let _domain = [0, 1];
    let _pos = [];
    let _padding = [0, 0];
    let _classes = false;
    let _colors = [];
    let _out = false;
    let _min = 0;
    let _max = 1;
    let _correctLightness = false;
    let _colorCache = {};
    let _useCache = true;
    let _gamma = 1;
    const setColors = function(colors2) {
      colors2 = colors2 || ["#fff", "#000"];
      if (colors2 && type(colors2) === "string" && chroma.brewer && chroma.brewer[colors2.toLowerCase()]) {
        colors2 = chroma.brewer[colors2.toLowerCase()];
      }
      if (type(colors2) === "array") {
        if (colors2.length === 1) {
          colors2 = [colors2[0], colors2[0]];
        }
        colors2 = colors2.slice(0);
        for (let c2 = 0; c2 < colors2.length; c2++) {
          colors2[c2] = chroma(colors2[c2]);
        }
        _pos.length = 0;
        for (let c2 = 0; c2 < colors2.length; c2++) {
          _pos.push(c2 / (colors2.length - 1));
        }
      }
      resetCache();
      return _colors = colors2;
    };
    const getClass = function(value) {
      if (_classes != null) {
        const n2 = _classes.length - 1;
        let i2 = 0;
        while (i2 < n2 && value >= _classes[i2]) {
          i2++;
        }
        return i2 - 1;
      }
      return 0;
    };
    let tMapLightness = (t2) => t2;
    let tMapDomain = (t2) => t2;
    const getColor = function(val, bypassMap) {
      let col, t2;
      if (bypassMap == null) {
        bypassMap = false;
      }
      if (isNaN(val) || val === null) {
        return _nacol;
      }
      if (!bypassMap) {
        if (_classes && _classes.length > 2) {
          const c2 = getClass(val);
          t2 = c2 / (_classes.length - 2);
        } else if (_max !== _min) {
          t2 = (val - _min) / (_max - _min);
        } else {
          t2 = 1;
        }
      } else {
        t2 = val;
      }
      t2 = tMapDomain(t2);
      if (!bypassMap) {
        t2 = tMapLightness(t2);
      }
      if (_gamma !== 1) {
        t2 = pow$3(t2, _gamma);
      }
      t2 = _padding[0] + t2 * (1 - _padding[0] - _padding[1]);
      t2 = limit(t2, 0, 1);
      const k2 = Math.floor(t2 * 1e4);
      if (_useCache && _colorCache[k2]) {
        col = _colorCache[k2];
      } else {
        if (type(_colors) === "array") {
          for (let i2 = 0; i2 < _pos.length; i2++) {
            const p2 = _pos[i2];
            if (t2 <= p2) {
              col = _colors[i2];
              break;
            }
            if (t2 >= p2 && i2 === _pos.length - 1) {
              col = _colors[i2];
              break;
            }
            if (t2 > p2 && t2 < _pos[i2 + 1]) {
              t2 = (t2 - p2) / (_pos[i2 + 1] - p2);
              col = chroma.interpolate(
                _colors[i2],
                _colors[i2 + 1],
                t2,
                _mode
              );
              break;
            }
          }
        } else if (type(_colors) === "function") {
          col = _colors(t2);
        }
        if (_useCache) {
          _colorCache[k2] = col;
        }
      }
      return col;
    };
    var resetCache = () => _colorCache = {};
    setColors(colors);
    const f2 = function(v2) {
      const c2 = chroma(getColor(v2));
      if (_out && c2[_out]) {
        return c2[_out]();
      } else {
        return c2;
      }
    };
    f2.classes = function(classes) {
      if (classes != null) {
        if (type(classes) === "array") {
          _classes = classes;
          _domain = [classes[0], classes[classes.length - 1]];
        } else {
          const d2 = chroma.analyze(_domain);
          if (classes === 0) {
            _classes = [d2.min, d2.max];
          } else {
            _classes = chroma.limits(d2, "e", classes);
          }
        }
        return f2;
      }
      return _classes;
    };
    f2.domain = function(domain) {
      if (!arguments.length) {
        return _domain;
      }
      _min = domain[0];
      _max = domain[domain.length - 1];
      _pos = [];
      const k2 = _colors.length;
      if (domain.length === k2 && _min !== _max) {
        for (let d2 of Array.from(domain)) {
          _pos.push((d2 - _min) / (_max - _min));
        }
      } else {
        for (let c2 = 0; c2 < k2; c2++) {
          _pos.push(c2 / (k2 - 1));
        }
        if (domain.length > 2) {
          const tOut = domain.map((d2, i2) => i2 / (domain.length - 1));
          const tBreaks = domain.map((d2) => (d2 - _min) / (_max - _min));
          if (!tBreaks.every((val, i2) => tOut[i2] === val)) {
            tMapDomain = (t2) => {
              if (t2 <= 0 || t2 >= 1) return t2;
              let i2 = 0;
              while (t2 >= tBreaks[i2 + 1]) i2++;
              const f3 = (t2 - tBreaks[i2]) / (tBreaks[i2 + 1] - tBreaks[i2]);
              const out = tOut[i2] + f3 * (tOut[i2 + 1] - tOut[i2]);
              return out;
            };
          }
        }
      }
      _domain = [_min, _max];
      return f2;
    };
    f2.mode = function(_m) {
      if (!arguments.length) {
        return _mode;
      }
      _mode = _m;
      resetCache();
      return f2;
    };
    f2.range = function(colors2, _pos2) {
      setColors(colors2);
      return f2;
    };
    f2.out = function(_o) {
      _out = _o;
      return f2;
    };
    f2.spread = function(val) {
      if (!arguments.length) {
        return _spread;
      }
      _spread = val;
      return f2;
    };
    f2.correctLightness = function(v2) {
      if (v2 == null) {
        v2 = true;
      }
      _correctLightness = v2;
      resetCache();
      if (_correctLightness) {
        tMapLightness = function(t2) {
          const L0 = getColor(0, true).lab()[0];
          const L1 = getColor(1, true).lab()[0];
          const pol = L0 > L1;
          let L_actual = getColor(t2, true).lab()[0];
          const L_ideal = L0 + (L1 - L0) * t2;
          let L_diff = L_actual - L_ideal;
          let t0 = 0;
          let t1 = 1;
          let max_iter = 20;
          while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
            (function() {
              if (pol) {
                L_diff *= -1;
              }
              if (L_diff < 0) {
                t0 = t2;
                t2 += (t1 - t2) * 0.5;
              } else {
                t1 = t2;
                t2 += (t0 - t2) * 0.5;
              }
              L_actual = getColor(t2, true).lab()[0];
              return L_diff = L_actual - L_ideal;
            })();
          }
          return t2;
        };
      } else {
        tMapLightness = (t2) => t2;
      }
      return f2;
    };
    f2.padding = function(p2) {
      if (p2 != null) {
        if (type(p2) === "number") {
          p2 = [p2, p2];
        }
        _padding = p2;
        return f2;
      } else {
        return _padding;
      }
    };
    f2.colors = function(numColors, out) {
      if (arguments.length < 2) {
        out = "hex";
      }
      let result2 = [];
      if (arguments.length === 0) {
        result2 = _colors.slice(0);
      } else if (numColors === 1) {
        result2 = [f2(0.5)];
      } else if (numColors > 1) {
        const dm = _domain[0];
        const dd2 = _domain[1] - dm;
        result2 = __range__(0, numColors).map(
          (i2) => f2(dm + i2 / (numColors - 1) * dd2)
        );
      } else {
        colors = [];
        let samples = [];
        if (_classes && _classes.length > 2) {
          for (let i2 = 1, end = _classes.length, asc = 1 <= end; asc ? i2 < end : i2 > end; asc ? i2++ : i2--) {
            samples.push((_classes[i2 - 1] + _classes[i2]) * 0.5);
          }
        } else {
          samples = _domain;
        }
        result2 = samples.map((v2) => f2(v2));
      }
      if (chroma[out]) {
        result2 = result2.map((c2) => c2[out]());
      }
      return result2;
    };
    f2.cache = function(c2) {
      if (c2 != null) {
        _useCache = c2;
        return f2;
      } else {
        return _useCache;
      }
    };
    f2.gamma = function(g2) {
      if (g2 != null) {
        _gamma = g2;
        return f2;
      } else {
        return _gamma;
      }
    };
    f2.nodata = function(d2) {
      if (d2 != null) {
        _nacol = chroma(d2);
        return f2;
      } else {
        return _nacol;
      }
    };
    return f2;
  }
  function __range__(left, right, inclusive) {
    let range = [];
    let ascending = left < right;
    let end = right;
    for (let i2 = left; ascending ? i2 < end : i2 > end; ascending ? i2++ : i2--) {
      range.push(i2);
    }
    return range;
  }
  const binom_row = function(n2) {
    let row = [1, 1];
    for (let i2 = 1; i2 < n2; i2++) {
      let newrow = [1];
      for (let j = 1; j <= row.length; j++) {
        newrow[j] = (row[j] || 0) + row[j - 1];
      }
      row = newrow;
    }
    return row;
  };
  const bezier = function(colors) {
    let I2, lab0, lab1, lab2;
    colors = colors.map((c2) => new Color(c2));
    if (colors.length === 2) {
      [lab0, lab1] = colors.map((c2) => c2.lab());
      I2 = function(t2) {
        const lab3 = [0, 1, 2].map((i2) => lab0[i2] + t2 * (lab1[i2] - lab0[i2]));
        return new Color(lab3, "lab");
      };
    } else if (colors.length === 3) {
      [lab0, lab1, lab2] = colors.map((c2) => c2.lab());
      I2 = function(t2) {
        const lab3 = [0, 1, 2].map(
          (i2) => (1 - t2) * (1 - t2) * lab0[i2] + 2 * (1 - t2) * t2 * lab1[i2] + t2 * t2 * lab2[i2]
        );
        return new Color(lab3, "lab");
      };
    } else if (colors.length === 4) {
      let lab3;
      [lab0, lab1, lab2, lab3] = colors.map((c2) => c2.lab());
      I2 = function(t2) {
        const lab4 = [0, 1, 2].map(
          (i2) => (1 - t2) * (1 - t2) * (1 - t2) * lab0[i2] + 3 * (1 - t2) * (1 - t2) * t2 * lab1[i2] + 3 * (1 - t2) * t2 * t2 * lab2[i2] + t2 * t2 * t2 * lab3[i2]
        );
        return new Color(lab4, "lab");
      };
    } else if (colors.length >= 5) {
      let labs, row, n2;
      labs = colors.map((c2) => c2.lab());
      n2 = colors.length - 1;
      row = binom_row(n2);
      I2 = function(t2) {
        const u2 = 1 - t2;
        const lab3 = [0, 1, 2].map(
          (i2) => labs.reduce(
            (sum, el2, j) => sum + row[j] * u2 ** (n2 - j) * t2 ** j * el2[i2],
            0
          )
        );
        return new Color(lab3, "lab");
      };
    } else {
      throw new RangeError("No point in running bezier with only one color.");
    }
    return I2;
  };
  const bezier$1 = (colors) => {
    const f2 = bezier(colors);
    f2.scale = () => scale(f2);
    return f2;
  };
  const blend = (bottom, top, mode) => {
    if (!blend[mode]) {
      throw new Error("unknown blend mode " + mode);
    }
    return blend[mode](bottom, top);
  };
  const blend_f = (f2) => (bottom, top) => {
    const c0 = chroma(top).rgb();
    const c1 = chroma(bottom).rgb();
    return chroma.rgb(f2(c0, c1));
  };
  const each = (f2) => (c0, c1) => {
    const out = [];
    out[0] = f2(c0[0], c1[0]);
    out[1] = f2(c0[1], c1[1]);
    out[2] = f2(c0[2], c1[2]);
    return out;
  };
  const normal = (a) => a;
  const multiply = (a, b2) => a * b2 / 255;
  const darken = (a, b2) => a > b2 ? b2 : a;
  const lighten = (a, b2) => a > b2 ? a : b2;
  const screen = (a, b2) => 255 * (1 - (1 - a / 255) * (1 - b2 / 255));
  const overlay = (a, b2) => b2 < 128 ? 2 * a * b2 / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b2 / 255));
  const burn = (a, b2) => 255 * (1 - (1 - b2 / 255) / (a / 255));
  const dodge = (a, b2) => {
    if (a === 255) return 255;
    a = 255 * (b2 / 255) / (1 - a / 255);
    return a > 255 ? 255 : a;
  };
  blend.normal = blend_f(each(normal));
  blend.multiply = blend_f(each(multiply));
  blend.screen = blend_f(each(screen));
  blend.overlay = blend_f(each(overlay));
  blend.darken = blend_f(each(darken));
  blend.lighten = blend_f(each(lighten));
  blend.dodge = blend_f(each(dodge));
  blend.burn = blend_f(each(burn));
  const { pow: pow$2, sin: sin$1, cos: cos$1 } = Math;
  function cubehelix(start = 300, rotations = -1.5, hue = 1, gamma = 1, lightness = [0, 1]) {
    let dh2 = 0, dl2;
    if (type(lightness) === "array") {
      dl2 = lightness[1] - lightness[0];
    } else {
      dl2 = 0;
      lightness = [lightness, lightness];
    }
    const f2 = function(fract) {
      const a = TWOPI * ((start + 120) / 360 + rotations * fract);
      const l2 = pow$2(lightness[0] + dl2 * fract, gamma);
      const h2 = dh2 !== 0 ? hue[0] + fract * dh2 : hue;
      const amp = h2 * l2 * (1 - l2) / 2;
      const cos_a = cos$1(a);
      const sin_a = sin$1(a);
      const r2 = l2 + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
      const g2 = l2 + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
      const b2 = l2 + amp * (1.97294 * cos_a);
      return chroma(clip_rgb([r2 * 255, g2 * 255, b2 * 255, 1]));
    };
    f2.start = function(s2) {
      if (s2 == null) {
        return start;
      }
      start = s2;
      return f2;
    };
    f2.rotations = function(r2) {
      if (r2 == null) {
        return rotations;
      }
      rotations = r2;
      return f2;
    };
    f2.gamma = function(g2) {
      if (g2 == null) {
        return gamma;
      }
      gamma = g2;
      return f2;
    };
    f2.hue = function(h2) {
      if (h2 == null) {
        return hue;
      }
      hue = h2;
      if (type(hue) === "array") {
        dh2 = hue[1] - hue[0];
        if (dh2 === 0) {
          hue = hue[1];
        }
      } else {
        dh2 = 0;
      }
      return f2;
    };
    f2.lightness = function(h2) {
      if (h2 == null) {
        return lightness;
      }
      if (type(h2) === "array") {
        lightness = h2;
        dl2 = h2[1] - h2[0];
      } else {
        lightness = [h2, h2];
        dl2 = 0;
      }
      return f2;
    };
    f2.scale = () => chroma.scale(f2);
    f2.hue(hue);
    return f2;
  }
  const digits = "0123456789abcdef";
  const { floor: floor$1, random } = Math;
  const random$1 = () => {
    let code = "#";
    for (let i2 = 0; i2 < 6; i2++) {
      code += digits.charAt(floor$1(random() * 16));
    }
    return new Color(code, "hex");
  };
  const { log, pow: pow$1, floor, abs: abs$1 } = Math;
  function analyze(data, key = null) {
    const r2 = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    if (type(data) === "object") {
      data = Object.values(data);
    }
    data.forEach((val) => {
      if (key && type(val) === "object") val = val[key];
      if (val !== void 0 && val !== null && !isNaN(val)) {
        r2.values.push(val);
        r2.sum += val;
        if (val < r2.min) r2.min = val;
        if (val > r2.max) r2.max = val;
        r2.count += 1;
      }
    });
    r2.domain = [r2.min, r2.max];
    r2.limits = (mode, num2) => limits(r2, mode, num2);
    return r2;
  }
  function limits(data, mode = "equal", num2 = 7) {
    if (type(data) == "array") {
      data = analyze(data);
    }
    const { min: min2, max: max2 } = data;
    const values = data.values.sort((a, b2) => a - b2);
    if (num2 === 1) {
      return [min2, max2];
    }
    const limits2 = [];
    if (mode.substr(0, 1) === "c") {
      limits2.push(min2);
      limits2.push(max2);
    }
    if (mode.substr(0, 1) === "e") {
      limits2.push(min2);
      for (let i2 = 1; i2 < num2; i2++) {
        limits2.push(min2 + i2 / num2 * (max2 - min2));
      }
      limits2.push(max2);
    } else if (mode.substr(0, 1) === "l") {
      if (min2 <= 0) {
        throw new Error(
          "Logarithmic scales are only possible for values > 0"
        );
      }
      const min_log = Math.LOG10E * log(min2);
      const max_log = Math.LOG10E * log(max2);
      limits2.push(min2);
      for (let i2 = 1; i2 < num2; i2++) {
        limits2.push(pow$1(10, min_log + i2 / num2 * (max_log - min_log)));
      }
      limits2.push(max2);
    } else if (mode.substr(0, 1) === "q") {
      limits2.push(min2);
      for (let i2 = 1; i2 < num2; i2++) {
        const p2 = (values.length - 1) * i2 / num2;
        const pb2 = floor(p2);
        if (pb2 === p2) {
          limits2.push(values[pb2]);
        } else {
          const pr = p2 - pb2;
          limits2.push(values[pb2] * (1 - pr) + values[pb2 + 1] * pr);
        }
      }
      limits2.push(max2);
    } else if (mode.substr(0, 1) === "k") {
      let cluster;
      const n2 = values.length;
      const assignments = new Array(n2);
      const clusterSizes = new Array(num2);
      let repeat = true;
      let nb_iters = 0;
      let centroids = null;
      centroids = [];
      centroids.push(min2);
      for (let i2 = 1; i2 < num2; i2++) {
        centroids.push(min2 + i2 / num2 * (max2 - min2));
      }
      centroids.push(max2);
      while (repeat) {
        for (let j = 0; j < num2; j++) {
          clusterSizes[j] = 0;
        }
        for (let i2 = 0; i2 < n2; i2++) {
          const value = values[i2];
          let mindist = Number.MAX_VALUE;
          let best;
          for (let j = 0; j < num2; j++) {
            const dist = abs$1(centroids[j] - value);
            if (dist < mindist) {
              mindist = dist;
              best = j;
            }
            clusterSizes[best]++;
            assignments[i2] = best;
          }
        }
        const newCentroids = new Array(num2);
        for (let j = 0; j < num2; j++) {
          newCentroids[j] = null;
        }
        for (let i2 = 0; i2 < n2; i2++) {
          cluster = assignments[i2];
          if (newCentroids[cluster] === null) {
            newCentroids[cluster] = values[i2];
          } else {
            newCentroids[cluster] += values[i2];
          }
        }
        for (let j = 0; j < num2; j++) {
          newCentroids[j] *= 1 / clusterSizes[j];
        }
        repeat = false;
        for (let j = 0; j < num2; j++) {
          if (newCentroids[j] !== centroids[j]) {
            repeat = true;
            break;
          }
        }
        centroids = newCentroids;
        nb_iters++;
        if (nb_iters > 200) {
          repeat = false;
        }
      }
      const kClusters = {};
      for (let j = 0; j < num2; j++) {
        kClusters[j] = [];
      }
      for (let i2 = 0; i2 < n2; i2++) {
        cluster = assignments[i2];
        kClusters[cluster].push(values[i2]);
      }
      let tmpKMeansBreaks = [];
      for (let j = 0; j < num2; j++) {
        tmpKMeansBreaks.push(kClusters[j][0]);
        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
      }
      tmpKMeansBreaks = tmpKMeansBreaks.sort((a, b2) => a - b2);
      limits2.push(tmpKMeansBreaks[0]);
      for (let i2 = 1; i2 < tmpKMeansBreaks.length; i2 += 2) {
        const v2 = tmpKMeansBreaks[i2];
        if (!isNaN(v2) && limits2.indexOf(v2) === -1) {
          limits2.push(v2);
        }
      }
    }
    return limits2;
  }
  const contrast = (a, b2) => {
    a = new Color(a);
    b2 = new Color(b2);
    const l1 = a.luminance();
    const l2 = b2.luminance();
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
  };
  const { sqrt, pow, min, max, atan2, abs, cos, sin, exp, PI } = Math;
  function deltaE(a, b2, Kl = 1, Kc2 = 1, Kh2 = 1) {
    var rad2deg = function(rad) {
      return 360 * rad / (2 * PI);
    };
    var deg2rad = function(deg) {
      return 2 * PI * deg / 360;
    };
    a = new Color(a);
    b2 = new Color(b2);
    const [L1, a1, b1] = Array.from(a.lab());
    const [L2, a2, b22] = Array.from(b2.lab());
    const avgL = (L1 + L2) / 2;
    const C1 = sqrt(pow(a1, 2) + pow(b1, 2));
    const C2 = sqrt(pow(a2, 2) + pow(b22, 2));
    const avgC = (C1 + C2) / 2;
    const G2 = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
    const a1p = a1 * (1 + G2);
    const a2p = a2 * (1 + G2);
    const C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
    const C2p = sqrt(pow(a2p, 2) + pow(b22, 2));
    const avgCp = (C1p + C2p) / 2;
    const arctan1 = rad2deg(atan2(b1, a1p));
    const arctan2 = rad2deg(atan2(b22, a2p));
    const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
    const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
    const avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
    const T2 = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
    let deltaHp = h2p - h1p;
    deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
    deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
    const deltaL = L2 - L1;
    const deltaCp = C2p - C1p;
    const sl2 = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
    const sc2 = 1 + 0.045 * avgCp;
    const sh2 = 1 + 0.015 * avgCp * T2;
    const deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
    const Rc2 = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
    const Rt = -Rc2 * sin(2 * deg2rad(deltaTheta));
    const result2 = sqrt(
      pow(deltaL / (Kl * sl2), 2) + pow(deltaCp / (Kc2 * sc2), 2) + pow(deltaHp / (Kh2 * sh2), 2) + Rt * (deltaCp / (Kc2 * sc2)) * (deltaHp / (Kh2 * sh2))
    );
    return max(0, min(100, result2));
  }
  function distance(a, b2, mode = "lab") {
    a = new Color(a);
    b2 = new Color(b2);
    const l1 = a.get(mode);
    const l2 = b2.get(mode);
    let sum_sq = 0;
    for (let i2 in l1) {
      const d2 = (l1[i2] || 0) - (l2[i2] || 0);
      sum_sq += d2 * d2;
    }
    return Math.sqrt(sum_sq);
  }
  const valid = (...args) => {
    try {
      new Color(...args);
      return true;
    } catch (e) {
      return false;
    }
  };
  const scales = {
    cool() {
      return scale([chroma.hsl(180, 1, 0.9), chroma.hsl(250, 0.7, 0.4)]);
    },
    hot() {
      return scale(["#000", "#f00", "#ff0", "#fff"]).mode(
        "rgb"
      );
    }
  };
  const colorbrewer = {
    // sequential
    OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
    PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
    BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
    Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
    BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
    YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
    YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
    Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
    RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
    Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
    YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
    Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
    GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
    Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
    YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
    PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
    Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
    PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
    Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
    // diverging
    Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
    RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
    RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
    PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
    PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
    RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
    BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
    RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
    PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
    // qualitative
    Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
    Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
    Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
    Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
    Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
    Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
    Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
    Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
  };
  for (let key of Object.keys(colorbrewer)) {
    colorbrewer[key.toLowerCase()] = colorbrewer[key];
  }
  Object.assign(chroma, {
    average,
    bezier: bezier$1,
    blend,
    cubehelix,
    mix,
    interpolate: mix,
    random: random$1,
    scale,
    analyze,
    contrast,
    deltaE,
    distance,
    limits,
    valid,
    scales,
    input,
    colors: w3cx11,
    brewer: colorbrewer
  });
  class ColorExtractor {
    extractAndRankColors(rules) {
      const colorMap = /* @__PURE__ */ new Map();
      rules.forEach((rule2) => {
        Object.entries(rule2.declarations).forEach(([prop, info]) => {
          if (this.isColorProperty(prop)) {
            const normalizedColor = this.normalizeColor(info.value);
            if (normalizedColor) {
              const existing = colorMap.get(normalizedColor);
              colorMap.set(normalizedColor, {
                value: normalizedColor,
                property: prop,
                usageCount: ((existing == null ? void 0 : existing.usageCount) || 0) + 1,
                isCSSVariable: this.isCSSVariable(info.value),
                cssVariableName: this.isCSSVariable(info.value) ? this.extractVarName(info.value) : void 0
              });
            }
          }
        });
      });
      const colorsWithScores = [];
      colorMap.forEach((colorInfo, color) => {
        const score = this.calculateImportanceScore(colorInfo);
        const category = this.categorizeColor(colorInfo, score);
        colorsWithScores.push({
          value: color,
          category,
          property: colorInfo.property || "",
          usageCount: colorInfo.usageCount || 0,
          score,
          isCSSVariable: colorInfo.isCSSVariable || false,
          cssVariableName: colorInfo.cssVariableName
        });
      });
      return colorsWithScores.sort((a, b2) => b2.score - a.score);
    }
    normalizeColor(value) {
      try {
        if (value.includes("var(")) {
          const computed = getComputedStyle(document.documentElement);
          const varMatch = value.match(/var\((--[^,)]+)/);
          if (varMatch) {
            const varValue = computed.getPropertyValue(varMatch[1]).trim();
            if (varValue) {
              value = varValue;
            }
          }
        }
        const color = chroma(value);
        return color.hex();
      } catch {
        return null;
      }
    }
    calculateImportanceScore(colorInfo) {
      let score = 0;
      const propertyWeights = {
        "background-color": 10,
        background: 10,
        color: 8,
        fill: 6,
        "border-color": 5,
        stroke: 4
      };
      score += (propertyWeights[colorInfo.property || ""] || 1) * 10;
      score += (colorInfo.usageCount || 0) * 2;
      if (colorInfo.isCSSVariable) {
        score *= 1.5;
      }
      return Math.round(score);
    }
    categorizeColor(colorInfo, score) {
      const prop = colorInfo.property || "";
      if (prop.includes("background")) {
        return "background";
      }
      if (prop === "color") {
        return "foreground";
      }
      if (score > 50 && !prop.includes("background")) {
        return "brand";
      }
      return "other";
    }
    isColorProperty(prop) {
      const colorProps = [
        "color",
        "background-color",
        "background",
        "border-color",
        "fill",
        "stroke"
      ];
      return colorProps.some((p2) => prop.includes(p2));
    }
    isCSSVariable(value) {
      return value.includes("var(--");
    }
    extractVarName(value) {
      const match = value.match(/var\((--[^,)]+)/);
      return match ? match[1] : void 0;
    }
  }
  class InspectModeHandler {
    constructor() {
      __publicField(this, "isActive", false);
      __publicField(this, "highlightOverlay", null);
      __publicField(this, "onElementSelected");
      __publicField(this, "onElementHovered");
      __publicField(this, "handleMouseMove", (e) => {
        if (!this.isActive) return;
        const target = e.target;
        if (target.closest("[data-css-editor-panel]")) {
          if (this.highlightOverlay) {
            this.highlightOverlay.style.display = "none";
          }
          return;
        }
        const rect = target.getBoundingClientRect();
        this.updateHighlight(rect);
        if (this.onElementHovered) {
          this.onElementHovered({
            element: target,
            selector: this.generateSelector(target),
            styles: getComputedStyle(target),
            rect
          });
        }
      });
      __publicField(this, "handleClick", (e) => {
        if (!this.isActive) return;
        const target = e.target;
        if (target.closest("[data-css-editor-panel]")) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        const similar = this.findSimilarElements(target);
        if (this.onElementSelected) {
          this.onElementSelected(target, similar);
        }
        this.disable();
      });
    }
    enable(callbacks) {
      this.isActive = true;
      this.onElementSelected = callbacks.onSelected;
      this.onElementHovered = callbacks.onHovered;
      this.createHighlightOverlay();
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("click", this.handleClick, true);
      document.body.style.cursor = "crosshair";
    }
    disable() {
      this.isActive = false;
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("click", this.handleClick, true);
      document.body.style.cursor = "";
      if (this.highlightOverlay) {
        this.highlightOverlay.remove();
        this.highlightOverlay = null;
      }
    }
    createHighlightOverlay() {
      this.highlightOverlay = document.createElement("div");
      this.highlightOverlay.style.cssText = `
      position: fixed;
      pointer-events: none;
      border: 2px solid #3b82f6;
      background: rgba(59, 130, 246, 0.1);
      z-index: 2147483646;
      transition: all 0.1s ease;
    `;
      document.body.appendChild(this.highlightOverlay);
    }
    updateHighlight(rect) {
      if (!this.highlightOverlay) return;
      this.highlightOverlay.style.display = "block";
      this.highlightOverlay.style.top = `${rect.top}px`;
      this.highlightOverlay.style.left = `${rect.left}px`;
      this.highlightOverlay.style.width = `${rect.width}px`;
      this.highlightOverlay.style.height = `${rect.height}px`;
    }
    findSimilarElements(target) {
      const similar = [];
      const targetStyles = getComputedStyle(target);
      const criteria = {
        tagName: target.tagName,
        className: target.className,
        role: target.getAttribute("role"),
        computedStyles: ["display", "position", "font-size", "padding", "border-radius"]
      };
      document.querySelectorAll(criteria.tagName).forEach((el2) => {
        if (el2 === target || !(el2 instanceof HTMLElement)) return;
        if (el2.closest("[data-css-editor-panel]")) return;
        let matchScore = 0;
        if (el2.className === criteria.className && criteria.className) {
          matchScore += 3;
        }
        if (el2.getAttribute("role") === criteria.role && criteria.role) {
          matchScore += 2;
        }
        const elStyles = getComputedStyle(el2);
        criteria.computedStyles.forEach((prop) => {
          if (elStyles.getPropertyValue(prop) === targetStyles.getPropertyValue(prop)) {
            matchScore += 1;
          }
        });
        if (matchScore >= 5) {
          similar.push(el2);
        }
      });
      return similar;
    }
    generateSelector(el2) {
      if (el2.id) {
        return `#${el2.id}`;
      }
      let selector = el2.tagName.toLowerCase();
      if (el2.className) {
        const classes = Array.from(el2.classList).filter((c2) => !c2.startsWith("live-css-editor-")).join(".");
        if (classes) {
          selector += "." + classes;
        }
      }
      if (document.querySelectorAll(selector).length > 1) {
        const parent = el2.parentElement;
        if (parent) {
          const index2 = Array.from(parent.children).indexOf(el2) + 1;
          selector += `:nth-child(${index2})`;
        }
      }
      return selector;
    }
  }
  const INJECTED_STYLE_ID = "live-css-editor-injected";
  const useStyleInjector = () => {
    const styleElementRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
      let styleEl = document.getElementById(INJECTED_STYLE_ID);
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = INJECTED_STYLE_ID;
        styleEl.setAttribute("data-css-editor", "injected-styles");
        document.head.appendChild(styleEl);
      }
      styleElementRef.current = styleEl;
      return () => {
        if (styleEl && styleEl.parentNode) {
          styleEl.remove();
        }
      };
    }, []);
    const applyStyle = (change) => {
      const { selector, property, value, mode } = change;
      switch (mode) {
        case "cssVariable":
          applyCSSVariable(property, value);
          break;
        case "injectedRule":
          applyInjectedRule(selector, property, value);
          break;
        case "inline":
          applyInlineStyle(selector, property, value);
          break;
      }
    };
    const applyCSSVariable = (varName, value) => {
      document.documentElement.style.setProperty(varName, value);
    };
    const applyInjectedRule = (selector, property, value) => {
      if (!styleElementRef.current) return;
      const rule2 = `${selector} { ${property}: ${value} !important; }`;
      const existingRules = styleElementRef.current.textContent || "";
      const ruleRegex = new RegExp(`${selector}\\s*\\{[^}]*${property}:[^}]*\\}`, "g");
      if (ruleRegex.test(existingRules)) {
        styleElementRef.current.textContent = existingRules.replace(ruleRegex, rule2);
      } else {
        styleElementRef.current.textContent += "\n" + rule2;
      }
    };
    const applyInlineStyle = (selector, property, value) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el2) => {
        if (el2 instanceof HTMLElement) {
          if (el2.closest("[data-css-editor-panel]")) return;
          el2.style.setProperty(property, value);
        }
      });
    };
    const clearAllStyles = () => {
      if (styleElementRef.current) {
        styleElementRef.current.textContent = "";
      }
      const rootStyle = document.documentElement.style;
      for (let i2 = rootStyle.length - 1; i2 >= 0; i2--) {
        const prop = rootStyle[i2];
        if (prop.startsWith("--")) {
          document.documentElement.style.removeProperty(prop);
        }
      }
    };
    return {
      applyStyle,
      applyCSSVariable,
      applyInjectedRule,
      applyInlineStyle,
      clearAllStyles
    };
  };
  const normalizeColorForComparison = (color) => {
    const temp = document.createElement("div");
    temp.style.color = color;
    document.body.appendChild(temp);
    const computed = getComputedStyle(temp).color;
    document.body.removeChild(temp);
    return computed;
  };
  const CSSEditor = ({
    autoAnalyze = true,
    initiallyOpen = true
  }) => {
    const { isPanelOpen, setPanelOpen, setColors, colors, isInspectMode, setInspectMode, addChange } = useEditorStore();
    const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
    const [selectedColorForEdit, setSelectedColorForEdit] = reactExports.useState(null);
    const [inspectHandler] = reactExports.useState(() => new InspectModeHandler());
    const [parsedRules, setParsedRules] = reactExports.useState([]);
    const styleInjector = useStyleInjector();
    reactExports.useEffect(() => {
      setPanelOpen(initiallyOpen);
      if (autoAnalyze) {
        analyzeCSS();
      }
      return () => {
        console.log("[CSS Editor] Unmounting");
      };
    }, []);
    const analyzeCSS = async () => {
      setIsAnalyzing(true);
      console.log("[CSS Editor] Starting CSS analysis...");
      try {
        const analyzer = new CSSAnalysisEngine();
        const parsed = await analyzer.analyzeDocument();
        console.log("[CSS Editor] Parsed CSS:", parsed);
        setParsedRules(parsed.rules);
        const extractor = new ColorExtractor();
        const extractedColors = extractor.extractAndRankColors(parsed.rules);
        console.log("[CSS Editor] Extracted colors:", extractedColors);
        setColors(extractedColors);
      } catch (error) {
        console.error("[CSS Editor] Analysis error:", error);
      } finally {
        setIsAnalyzing(false);
      }
    };
    const toggleInspectMode = () => {
      if (!isInspectMode) {
        inspectHandler.enable({
          onSelected: (element, similar) => {
            console.log("[Inspect] Selected:", element, "Similar:", similar);
            setInspectMode(false);
          },
          onHovered: (info) => {
            console.log("[Inspect] Hovering:", info.selector);
          }
        });
        setInspectMode(true);
      } else {
        inspectHandler.disable();
        setInspectMode(false);
      }
    };
    const generateSelector = (el2) => {
      if (el2.id && !el2.id.startsWith("live-css-editor")) {
        return `#${CSS.escape(el2.id)}`;
      }
      const tag = el2.tagName.toLowerCase();
      const classes = Array.from(el2.classList).filter((c2) => !c2.startsWith("live-css-editor")).map((c2) => `.${CSS.escape(c2)}`).join("");
      if (classes) return `${tag}${classes}`;
      const parent = el2.parentElement;
      if (parent) {
        const index2 = Array.from(parent.children).indexOf(el2) + 1;
        const parentSelector = generateSelector(parent);
        return `${parentSelector} > ${tag}:nth-child(${index2})`;
      }
      return tag;
    };
    const handleColorChange = (color, newColorValue) => {
      console.log("[Color Change]", color.property, ":", color.value, "->", newColorValue);
      if (color.isCSSVariable && color.cssVariableName) {
        styleInjector.applyCSSVariable(color.cssVariableName, newColorValue);
        addChange({
          selector: ":root",
          property: color.cssVariableName,
          value: newColorValue,
          mode: "cssVariable"
        });
        console.log("[Color Change] Applied CSS variable:", color.cssVariableName);
      } else {
        const normalizedSearchColor = normalizeColorForComparison(color.value);
        const matchingSelectors = [];
        parsedRules.forEach((rule2) => {
          Object.entries(rule2.declarations).forEach(([prop, info]) => {
            if (prop === color.property || color.property === "background-color" && prop === "background") {
              const ruleColorNormalized = normalizeColorForComparison(info.value);
              if (ruleColorNormalized === normalizedSearchColor) {
                matchingSelectors.push(rule2.selector);
              }
            }
          });
        });
        console.log("[Color Change] Found", matchingSelectors.length, "matching CSS selectors");
        if (matchingSelectors.length > 0) {
          const combinedSelector = matchingSelectors.join(", ");
          styleInjector.applyInjectedRule(combinedSelector, color.property, newColorValue);
          console.log("[Color Change] Injected CSS rule for:", combinedSelector);
        }
        const additionalSelectors = [];
        document.querySelectorAll("*").forEach((el2) => {
          if (el2.closest("[data-css-editor-panel]")) return;
          const computed = getComputedStyle(el2);
          const currentValue = computed.getPropertyValue(color.property);
          if (currentValue) {
            const normalizedCurrent = normalizeColorForComparison(currentValue);
            if (normalizedCurrent === normalizedSearchColor) {
              const selector = generateSelector(el2);
              additionalSelectors.push(selector);
            }
          }
        });
        console.log("[Color Change] Found", additionalSelectors.length, "elements via DOM scan");
        if (additionalSelectors.length > 0) {
          const uniqueSelectors = [...new Set(additionalSelectors)];
          const combinedSelector = uniqueSelectors.join(", ");
          styleInjector.applyInjectedRule(
            combinedSelector,
            color.property,
            newColorValue
          );
          console.log("[Color Change] Injected CSS rule for", uniqueSelectors.length, "element selectors");
        }
        addChange({
          selector: `/* ${matchingSelectors.length} rules + ${additionalSelectors.length} elements */`,
          property: color.property,
          value: newColorValue,
          mode: "injectedRule"
        });
      }
      const updatedColors = colors.map(
        (c2) => c2.value === color.value ? { ...c2, value: newColorValue } : c2
      );
      setColors(updatedColors);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      !isPanelOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setPanelOpen(true),
          "data-css-editor-panel": true,
          style: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            zIndex: 2147483647,
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s, background-color 0.2s",
            fontFamily: "Arial, sans-serif"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.backgroundColor = "#2563eb";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "#3b82f6";
          },
          title: "Open CSS Editor",
          "aria-label": "Open CSS Editor",
          children: "🎨"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { marginTop: 0 }, children: "Live CSS Editor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: toggleInspectMode,
              style: {
                width: "100%",
                padding: "8px 16px",
                backgroundColor: isInspectMode ? "#ef4444" : "#10b981",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 500
              },
              children: isInspectMode ? "🔍 Inspect Mode (Click to disable)" : "🎯 Enable Inspect Mode"
            }
          ),
          isInspectMode && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "8px 0 0 0", fontSize: "11px", color: "#6b7280" }, children: "Click any element on the page to select it" })
        ] }),
        isAnalyzing ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#6b7280", fontSize: "13px" }, children: "Analyzing CSS..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { style: { margin: "0 0 8px 0", fontSize: "14px" }, children: [
              "Colors (",
              colors.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0 0 8px 0", fontSize: "11px", color: "#6b7280" }, children: "Click a color to edit it" }),
            colors.slice(0, 10).map((color, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => setSelectedColorForEdit(color),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "4px",
                  fontSize: "12px",
                  padding: "4px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.15s"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: "24px",
                        height: "24px",
                        backgroundColor: color.value,
                        border: "2px solid #ddd",
                        borderRadius: "4px",
                        flexShrink: 0
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { fontSize: "11px" }, children: color.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "10px", color: "#999" }, children: [
                      color.category,
                      " • ",
                      color.property
                    ] })
                  ] })
                ]
              },
              i2
            )),
            colors.length > 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "8px 0 0 0", fontSize: "11px", color: "#6b7280" }, children: [
              "+ ",
              colors.length - 10,
              " more colors"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: analyzeCSS,
              style: {
                padding: "8px 16px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "13px"
              },
              children: "Re-analyze"
            }
          )
        ] })
      ] }) }),
      selectedColorForEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ColorPicker,
        {
          color: selectedColorForEdit,
          onColorChange: (newColor) => handleColorChange(selectedColorForEdit, newColor),
          onClose: () => setSelectedColorForEdit(null)
        }
      )
    ] });
  };
  window.LiveCSSEditor = {
    /**
     * Initialize the CSS Editor
     * @param options Configuration options
     */
    init: (options) => {
      const {
        autoAnalyze = true,
        initiallyOpen = false,
        // Default: show only floating button
        containerId = "live-css-editor-root"
      } = options || {};
      let container2 = document.getElementById(containerId);
      if (!container2) {
        container2 = document.createElement("div");
        container2.id = containerId;
        document.body.appendChild(container2);
      }
      const root2 = client.createRoot(container2);
      root2.render(
        /* @__PURE__ */ jsxRuntimeExports.jsx(React$2.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CSSEditor, { autoAnalyze, initiallyOpen }) })
      );
      console.log("[Live CSS Editor] Initialized");
      return {
        unmount: () => {
          root2.unmount();
          console.log("[Live CSS Editor] Unmounted");
        }
      };
    }
  };
  if ((_a = document.currentScript) == null ? void 0 : _a.hasAttribute("data-auto-init")) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        window.LiveCSSEditor.init();
      });
    } else {
      window.LiveCSSEditor.init();
    }
  }
})();
