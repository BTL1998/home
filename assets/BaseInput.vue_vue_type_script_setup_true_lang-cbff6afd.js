import {_ as I, o as t, c as s, a as d, d as M, u as S, v as B, r as p, g as j, t as x, m as g, k as N, j as h, n as k, J as b, az as z, N as w, aA as A, K as F} from "./index-19f29003.js";
const q = {}
  , D = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
};
function E(e, r) {
    return t(),
    s("svg", D, r[0] || (r[0] = [d("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }, null, -1), d("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    }, null, -1)]))
}
const L = I(q, [["render", E]])
  , T = {}
  , K = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
};
function O(e, r) {
    return t(),
    s("svg", K, r[0] || (r[0] = [d("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    }, null, -1)]))
}
const R = I(T, [["render", O]])
  , U = {
    key: 0,
    class: "mb-0.5 flex justify-between"
}
  , J = {
    key: 1,
    class: "flex justify-between min-h-[16px] mb-0.5"
}
  , P = {
    key: 0,
    class: "text-[#ff4c4c] shadow-input text-right !text-xs sm:!text-sm"
}
  , G = {
    key: 1,
    class: "text-[#ff4c4c] shadow-input text-right !text-xs sm:!text-sm"
}
  , H = {
    key: 2,
    class: "text-[#ff4c4c] shadow-input text-right !text-xs sm:!text-sm"
}
  , Q = ["id", "type", "maxlength", "placeholder", "disabled"]
  , W = {
    key: 1,
    class: "absolute z-[40] top-[15%] sm:top-[20%] left-[14px]"
}
  , X = {
    key: 3
}
  , Y = ["id", "placeholder"]
  , _ = M({
    __name: "BaseInput",
    props: {
        title: String,
        id: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: ""
        },
        valid: {
            type: Function,
            default: null
        },
        minletter: {
            type: Number,
            default: 8
        },
        maxletter: {
            type: Number,
            default: 16
        },
        modelValue: {
            type: String || Number,
            require: !0
        },
        titlecolor: {
            type: String,
            default: "white"
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        required: {
            type: Boolean,
            default: !1
        },
        prefixIcon: {
            type: Object,
            default: null
        },
        height: {
            type: String,
            default: "40"
        },
        errorMsg: {
            type: String
        },
        resetAmount: {
            type: Boolean,
            default: !1
        },
        keypressFn: {
            type: Function,
            default: () => {}
        },
        requiredText: {
            type: String,
            default: ""
        }
    },
    emits: ["update:modelValue", "amount"],
    setup(e, {emit: r}) {
        const {t: f} = S()
          , l = e;
        B( () => l.resetAmount, o => {
            o && (c.value = "",
            i("amount", Number(c.value)))
        }
        );
        const y = p(!1)
          , c = p("")
          , v = p(!1)
          , V = j( () => l.type === "password" && v.value ? "text" : l.type)
          , m = p("")
          , i = r
          , n = p(l.modelValue);
        async function $() {
            if (l.valid && n.value) {
                const o = await l.valid(n.value);
                l.minletter <= n.value.length ? (m.value = "",
                i("update:modelValue", n.value),
                o.status ? (m.value = "",
                i("update:modelValue", n.value)) : (m.value = f(o.msg),
                i("update:modelValue", null))) : (m.value = `${f("baseInput.minimum")} ${l.minletter} ${f("baseInput.letter")}`,
                i("update:modelValue", null))
            } else
                m.value = "",
                i("update:modelValue", n.value)
        }
        function C(o) {
            typeof o == "object" && (c.value = o.target.value.replace(/\D/g, ""),
            i("amount", Number(c.value)))
        }
        return (o, a) => (t(),
        s("div", null, [e.type === "number" ? (t(),
        s("div", U, [d("span", {
            class: "text-xs sm:text-sm lg:text-base",
            style: g(`color: ${e.titlecolor};`)
        }, x(l.title), 5)])) : (t(),
        s("div", J, [d("span", {
            class: "!text-xs sm:!text-sm lg:!text-[16px]",
            style: g(`color: ${e.titlecolor};`)
        }, x(l.title), 5), n.value || !e.required || !y.value ? (t(),
        s("small", P, x(m.value), 1)) : y.value && e.required ? (t(),
        s("small", G, x(N(f)("baseInput.enterForm")), 1)) : h("", !0), l.errorMsg ? (t(),
        s("span", H, x(l.errorMsg), 1)) : h("", !0)])), e.type !== "number" ? (t(),
        s("div", {
            key: 2,
            class: k([[e.disabled && "brightness-75", "relative"], "landscape:mt-1.5"])
        }, [b(d("input", {
            "onUpdate:modelValue": a[0] || (a[0] = u => n.value = u),
            id: e.id || void 0,
            onClick: a[1] || (a[1] = u => y.value = !0),
            onKeypress: a[2] || (a[2] = u => e.keypressFn(u)),
            onInput: a[3] || (a[3] = u => ($(),
            y.value = !0)),
            class: k([e.prefixIcon && "!pl-[45px]", "w-full px-3 py-1.5 landscape:py-[0.2rem] landscape:md:py-1.5 rounded-full border-solid border-2  disabled:!opacity-100 disabled:bg-white theme-font-color-1 !text-xs sm:!text-sm "]),
            type: V.value,
            maxlength: e.maxletter,
            placeholder: e.placeholder,
            disabled: e.disabled,
            autocomplete: "off",
            style: g(`height:${l.height}px;`)
        }, null, 46, Q), [[z, n.value]]), e.type === "password" ? (t(),
        s("a", {
            key: 0,
            onClick: a[4] || (a[4] = u => v.value = !v.value),
            class: "absolute bg-white rounded-full z-[40] top-[15%] sm:top-[20%] right-[14px] cursor-pointer"
        }, [v.value ? (t(),
        w(L, {
            key: 0,
            class: "w-6 text-gray-500"
        })) : (t(),
        w(R, {
            key: 1,
            class: "w-6 text-gray-500"
        }))])) : h("", !0), e.prefixIcon ? (t(),
        s("div", W, [(t(),
        w(A(e.prefixIcon), {
            class: "w-[22px]"
        }))])) : h("", !0)], 2)) : (t(),
        s("div", X, [b(d("input", {
            type: "tel",
            id: e.id || void 0,
            "onUpdate:modelValue": a[5] || (a[5] = u => c.value = u),
            onInput: C,
            placeholder: e.placeholder,
            class: "text-[black] text-[12px] md:text-[14px] lg:text-[16px] py-[0.6rem] md:py-[0.75rem] px-[1rem] md:px-[1.25rem] w-[100%] rounded-[2rem] placeholder-[#C5AAFF]"
        }, null, 40, Y), [[F, c.value]])]))]))
    }
});
export {_};
