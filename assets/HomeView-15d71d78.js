import {o, c as i, a, d as Z, u as te, b as ue, p as me, r as n, e as ie, f as ge, g as j, F as ee, h as oe, i as X, n as z, j as N, t as V, k as _, l as le, m as K, q as ne, w as J, s as $, _ as ye, v as q, x as Ee, y as he, z as Ce, A as ke, B as be, C as Ge, I as Be, D as Ie, E as Le, G as Ne, H as Fe, J as Ue, K as Ve, L as We, M as He, N as ve, O as je, P as Je, Q as qe} from "./index-19f29003.js";
import {L as _e} from "./LoadingComponent-44fb25ac.js";
import {u as Xe} from "./urlGame-4263587e.js";
import {u as Ye} from "./useGameFeature-37bc93cd.js";
function xe(Q, S) {
    return o(),
    i("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [a("path", {
        d: "M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z"
    })])
}
const Ke = ["onClick"]
  , Ze = {
    class: "game-title-cat"
}
  , $e = ["title"]
  , et = {
    key: 0,
    class: "item-main -cat-1"
}
  , tt = {
    key: 1,
    class: "item-main -cat-1"
}
  , at = {
    key: 2,
    class: "item-main item-a"
}
  , st = {
    key: 3,
    class: "item-main -cat-1"
}
  , lt = {
    key: 4,
    class: "item-main -cat-1"
}
  , ot = {
    key: 5,
    class: "item-main -cat-1"
}
  , nt = {
    key: 6,
    class: "item-main -cat-1"
}
  , it = {
    key: 7,
    class: "item-main -cat-2"
}
  , ct = {
    key: 8,
    class: "item-main -cat-1"
}
  , rt = {
    key: 9,
    class: "item-main -cat-1"
}
  , dt = {
    key: 10,
    class: "item-main -cat-1"
}
  , ut = {
    key: 11,
    class: "item-main -cat-1"
}
  , mt = {
    key: 1,
    class: "w-[90%] bg-black bg-opacity-[0.3] rounded-lg absolute h-full"
}
  , gt = Z({
    __name: "CategoryGame",
    props: {
        categoryGame: {
            type: Array,
            default: () => []
        }
    },
    emits: ["selectGroupGame"],
    setup(Q, {emit: S}) {
        const {t: B, locale: G} = te()
          , E = ue()
          , u = me()
          , b = Q
          , v = n(!1)
          , m = n("")
          , w = n(localStorage.getItem("animate") ?? "")
          , D = n(0);
        n("");
        const x = () => {
            window.matchMedia("(orientation: portrait)").matches ? m.value = "Portrait" : m.value = "Landscape"
        }
        ;
        ie( () => {
            const g = window.innerWidth;
            x(),
            D.value = m.value,
            g < 600 && (v.value = !0),
            window.addEventListener("resize", y);
            const e = document.getElementsByClassName("animate-check");
            for (let s = 0; s < e.length; s++) {
                const f = e[s];
                w.value === "true" ? f.classList.remove("close-effect") : f.classList.add("close-effect")
            }
        }
        );
        const y = () => {
            const g = m.value;
            x();
            const e = window.innerWidth;
            g === "Landscape" && m.value === "Portrait" ? (e < 600,
            v.value = !0) : g === "Portrait" && m.value === "Landscape" && (v.value = !1),
            D.value = g
        }
        ;
        ge( () => {
            window.removeEventListener("resize", y)
        }
        );
        const F = j( () => b.categoryGame)
          , P = S;
        async function r(g) {
            var f, R;
            const e = document.getElementById("girl-main")
              , s = document.getElementById("flex-layout");
            if (g === "FAVORITE")
                ne() ? (e && e.classList.add("hide-character"),
                s == null || s.classList.add("full-layout"),
                P("selectGroupGame", g)) : P("selectGroupGame", "default");
            else if (g === "GAMELOTTO") {
                if (ne()) {
                    E != null && E.data && (localStorage.setItem("lotto.username", ((f = E == null ? void 0 : E.data) == null ? void 0 : f.username) || ""),
                    localStorage.setItem("lotto.password", ((R = E == null ? void 0 : E.data) == null ? void 0 : R.password) || ""),
                    localStorage.setItem("lotto.token", (E == null ? void 0 : E.authToken) || ""));
                    const O = await J.playGameLotto();
                    O.code === 200 && O.error_code === 0 ? setTimeout( () => {
                        location.href = window.origin + "/gamelotto/"
                    }
                    , 200) : $.error(O.message)
                }
            } else
                P("selectGroupGame", g),
                e && e.classList.add("hide-character"),
                s == null || s.classList.add("full-layout");
            if (v.value) {
                const O = document.getElementById("sideLeft");
                O == null || O.classList.remove("side-left-mobile")
            }
            u.setWhitelabelEnable(!1)
        }
        const M = () => {
            const g = C(-10, 10)
              , e = C(-10, 10);
            return `translate(${g}px, ${e}px)`
        }
          , C = (g, e) => Math.floor(Math.random() * (e - g + 1)) + g;
        return (g, e) => b.categoryGame && b.categoryGame.length > 0 ? (o(),
        i("div", {
            key: 0,
            class: z(["flex-blog-game animate-check w-[100%] grid-blog-game grid grid-cols-5 gap-4 place-items-stretch h-[100%] overflow-y-hidden sm:overflow-y-auto pt-2 pl-2 padding-right-category-game overflow-x-hidden", [v.value ? "grid-for-mobile" : ""]])
        }, [F.value && F.value.length > 0 ? (o(!0),
        i(ee, {
            key: 0
        }, oe(F.value, (s, f) => (o(),
        i("div", {
            class: z(["blog-game w-[100%] max-h-[100%]", [v.value ? "blog-for-mobile" : "", s.group === "GAMEHITS" ? "grid-for-hits" : `grid-for-custom-${s.group}`, "h-[270px]"]]),
            key: f
        }, [a("div", {
            class: z(["crop-game", `effect-main-${s.group.toLowerCase()}`]),
            onClick: R => r(s.group)
        }, [a("div", Ze, [v.value && s.group === "GAMEHITS" ? (o(),
        i("h2", {
            key: 0,
            style: {
                "font-size": "2rem !important"
            },
            class: z([`title-cat  -cat-${s.group.toLocaleLowerCase()}`])
        }, V(_(B)(`categoryGame.${s.group.toLocaleLowerCase()}.title`)), 3)) : (o(),
        i("h2", {
            key: 1,
            class: z([`title-cat -cat-${s.group.toLocaleLowerCase()}`])
        }, V(_(B)(`categoryGame.${s.group.toLocaleLowerCase()}.title`)), 3)), _(G) === "th" ? (o(),
        i("h4", {
            key: 2,
            class: z(`sub-title -cat-${s.group.toLocaleLowerCase()} stroke-main`),
            title: _(B)(`categoryGame.${s.group.toLocaleLowerCase()}.desc`)
        }, V(_(B)(`categoryGame.${s.group.toLocaleLowerCase()}.desc`)), 11, $e)) : N("", !0)]), a("div", {
            class: z(`effect-blog-game -cat-${s.group.toLocaleLowerCase()}`)
        }, [s.group === "GAMENEW" ? (o(),
        i("div", et, e[0] || (e[0] = [le('<img loading="lazy" class="item-effect3 -bottom opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/new.webp" alt=""><img loading="lazy" class="item-effect4" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/dice.webp" alt=""><img loading="lazy" class="item-effect-light3 opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect.webp" alt=""><img loading="lazy" class="item-effect-light4 opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect.webp" alt=""><img loading="lazy" class="item-effect-light5 opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect.webp" alt=""><img loading="lazy" class="image-crown animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/chip.webp" alt="">', 6)]))) : N("", !0), s.group === "FAVORITE" ? (o(),
        i("div", tt, e[1] || (e[1] = [le('<img loading="lazy" class="item-effect-light-fav eff-puff animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/star.webp" alt=""><img loading="lazy" class="item-effect-light-fav -sub eff-tran-up animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-bh.webp" alt=""><img loading="lazy" class="item-effect-light5 -rightsub opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-green-2.webp" alt=""><img loading="lazy" class="item-effect-light5 -rightsub2 opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-green-2.webp" alt=""><img loading="lazy" class="item-effect-full -front eff-tran-up animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/poker-pic.webp" alt=""><img loading="lazy" class="eff-tran-up2 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/card-pic.webp" alt="">', 6)]))) : N("", !0), e[16] || (e[16] = a("div", {
            class: "bg-cat-game effect-bg-fav"
        }, null, -1)), s.group === "GAMEHITS" ? (o(),
        i("div", at, e[2] || (e[2] = [le('<div class="effect-blog-game -cat-0"><div class="item-main"><img loading="lazy" class="item-effect1 effect-hot-item animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/hot.webp" alt=""><img loading="lazy" class="item-effect2 eff-tran-up3 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/tao.webp" alt=""><img loading="lazy" class="item-effect-light1 opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect.webp" alt=""><img loading="lazy" class="item-effect-light2 opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect.webp" alt=""><img loading="lazy" class="spin-eff-image animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/slot.webp" alt=""></div><div class="bg-cat-game effect-bg-hit"></div></div>', 1)]))) : N("", !0), s.group === "SLOT" ? (o(),
        i("div", st, e[3] || (e[3] = [a("img", {
            loading: "lazy",
            class: "item-effect-light5 -rightgold opa-star animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-gold.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "item-effect-full -frontcoin eff-tran-up animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/coin3.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "item-effect-full -frontcoinsub eff-tran-up2 animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/coin2.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "image-slot-7 animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/7slot.webp",
            alt: ""
        }, null, -1)]))) : N("", !0), s.group === "CASINO" ? (o(),
        i("div", lt, e[4] || (e[4] = [a("img", {
            loading: "lazy",
            class: "item-effect3 -bac opa-star animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-bac-2.webp",
            alt: ""
        }, null, -1), a("img", {
            class: "item-effect-light5 -right opa-star animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-bac-1.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "effect-up-bac animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/bac.webp",
            alt: ""
        }, null, -1)]))) : N("", !0), s.group === "FISHING" ? (o(),
        i("div", ot, e[5] || (e[5] = [a("img", {
            loading: "lazy",
            class: "item-effect-light5 -right opa-star animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "item-effect-full -front effect-bounce animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/fishing.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "effect-up-bac animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/bg-fishing.webp",
            alt: ""
        }, null, -1)]))) : N("", !0), s.group === "SPORT" ? (o(),
        i("div", nt, e[6] || (e[6] = [a("img", {
            loading: "lazy",
            class: "item-effect-light5 -right opa-star animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "item-effect-full -frontopa effect-top-to-bottom-image animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/eff-green.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "eff-tran-up animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/sport-pic.webp",
            alt: ""
        }, null, -1)]))) : N("", !0), s.group === "KENO" ? (o(),
        i("div", it, e[7] || (e[7] = [le('<img loading="lazy" class="item-effect-light6 opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-orange.webp" alt=""><img loading="lazy" class="item-effect-light7 opa-star animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-orange.webp" alt=""><img loading="lazy" class="item-effect-full -front eff-tran-up animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/ball.webp" alt=""><img loading="lazy" class="item-effect-full effect-top-to-bottom-image animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/light-yellow.webp" alt=""><img loading="lazy" class="image-crown animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/tao-chip.webp" alt="">', 5)]))) : N("", !0), s.group === "TABLE" ? (o(),
        i("div", ct, e[8] || (e[8] = [a("img", {
            loading: "lazy",
            class: "item-effect-light8 -rightblue opa-star animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-blue.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "item-effect-light9 -rightblue opa-star animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-blue.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "item-effect-full -front effect-left-to-right-image animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-casino.webp",
            alt: ""
        }, null, -1), a("img", {
            loading: "lazy",
            class: "eff-tran-up animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/casinoblue.webp",
            alt: ""
        }, null, -1)]))) : N("", !0), s.group === "MINIGAME" ? (o(),
        i("div", rt, e[9] || (e[9] = [le('<img loading="lazy" class="item-effect-1 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/circle-mini.webp" alt=""><img loading="lazy" class="item-effect-2 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/circle2-mini.webp" alt=""><img loading="lazy" class="item-effect-3 -bottom animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/joygame-mini.webp" alt=""><img loading="lazy" class="item-effect-4 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/dice-mini.webp" alt=""><img loading="lazy" class="item-effect-5 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/check-mini.webp" alt=""><img loading="lazy" class="item-effect-6 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/coin-mini.webp" alt=""><img loading="lazy" class="item-effect-7 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/coin-mini2.webp" alt=""><img loading="lazy" class="item-effect-8 eff-tran-up animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/star-mini.webp" alt=""><img loading="lazy" class="image-crown animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/joygame2-mini.webp" alt=""><img loading="lazy" class="image-crown-2" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/joygame3-mini.webp" alt="">', 10)]))) : N("", !0), s.group === "GAMELOTTO" ? (o(),
        i("div", dt, [e[10] || (e[10] = a("img", {
            loading: "lazy",
            class: "item-effect-1 animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-ball-1.webp",
            alt: ""
        }, null, -1)), a("img", {
            loading: "lazy",
            style: K({
                transform: M()
            }),
            class: "item-effect-2 animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-ball-2.webp",
            alt: ""
        }, null, 4), a("img", {
            loading: "lazy",
            style: K({
                transform: M()
            }),
            class: "item-effect-3 -bottom animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-ball-3.webp",
            alt: ""
        }, null, 4), a("img", {
            loading: "lazy",
            style: K({
                transform: M()
            }),
            class: "item-effect-4 animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-ball-4.webp",
            alt: ""
        }, null, 4), e[11] || (e[11] = a("img", {
            loading: "lazy",
            class: "item-effect-5 animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-ball-5.webp",
            alt: ""
        }, null, -1)), e[12] || (e[12] = a("img", {
            loading: "lazy",
            class: "item-effect-6 animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-ball-6.webp",
            alt: ""
        }, null, -1)), e[13] || (e[13] = a("img", {
            loading: "lazy",
            class: "item-effect-full effect-left-to-right-image animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-lotto.webp",
            alt: ""
        }, null, -1)), e[14] || (e[14] = a("img", {
            loading: "lazy",
            class: "image-crown animate-check",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-main.webp",
            alt: ""
        }, null, -1))])) : N("", !0), s.group === "LOTTOEVENT" ? (o(),
        i("div", ut, e[15] || (e[15] = [le('<img loading="lazy" class="item-effect-2 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-f-2.webp" alt=""><img loading="lazy" class="item-effect-3 -bottom animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-f-3.webp" alt=""><img loading="lazy" class="item-effect-4 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-f-4.webp" alt=""><img loading="lazy" class="item-effect-5 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-f-5.webp" alt=""><img loading="lazy" class="item-effect-7 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/ribbin-lotto-f.webp" alt=""><img loading="lazy" class="item-effect-8 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/ribbin-lotto-f-2.webp" alt=""><img loading="lazy" class="item-effect-9 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/coin-lotto-f.webp" alt=""><img loading="lazy" class="item-effect-10 animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/coin2-lotto-f.webp" alt=""><img loading="lazy" class="item-effect-full effect-left-to-right-image animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/effect-lotto-1.webp" alt=""><img loading="lazy" class="image-crown animate-check" src="https://dr277ea24g9fk.cloudfront.net/_lobby/asset/lotto-f-1.webp" alt="">', 10)]))) : N("", !0), a("div", {
            class: z(["bg-cat-game", `effect-bg-${s.group.toLowerCase()} animate-check`])
        }, null, 2)], 2)], 10, Ke)], 2))), 128)) : (o(),
        i("div", mt, [X(_e, {
            class: "w-full top-[0]"
        })]))], 2)) : N("", !0)
    }
})
  , Oe = "/assets/arrow-main-292cddad.svg"
  , ze = "/assets/bgarrow-0b078d0d.svg"
  , ft = {
    class: "text-back-btn"
}
  , pt = ["onClick"]
  , vt = {
    class: "bg-cat-game -game",
    style: {
        position: "relative"
    }
}
  , ht = ["src", "alt"]
  , bt = {
    key: 1,
    class: "w-[73%] md:w-[90%] bg-black bg-opacity-[0.3] rounded-lg absolute h-[200px] sm:h-full"
}
  , yt = {
    key: 2,
    class: "w-[73%] md:w-[90%] bg-black bg-opacity-[0.3] rounded-lg absolute h-[200px] sm:h-full",
    styler: "padding-right:30px"
}
  , kt = {
    key: 0,
    class: "none-data-wrap",
    style: {
        height: "auto",
        background: "rgba(255, 0, 0, 0.503)",
        padding: "15px 0",
        margin: "0px 0 0",
        "border-radius": "8px"
    }
}
  , _t = {
    style: {
        color: "#fff"
    }
}
  , wt = {
    key: 1,
    class: "flex justify-center items-center h-full flex-col w-full"
}
  , At = {
    class: "text-center text-base md:text-2xl"
}
  , Gt = Z({
    __name: "BrandGame",
    props: {
        showBrandGame: {
            type: Array,
            default: () => []
        },
        categoryGame: {
            type: String
        },
        searchBrandGame: {
            type: String,
            default: ""
        },
        isLoadingGame: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["selectGroupGame", "selectBrandGame", "isShowArrowBack"],
    setup(Q, {emit: S}) {
        const {t: B} = te()
          , G = ze
          , E = Oe
          , u = Q
          , b = n(!1);
        n(!1);
        const v = n("")
          , m = n(0)
          , w = n(27)
          , D = n(localStorage.getItem("animate") ?? "")
          , x = n(0)
          , y = n(null)
          , F = n()
          , P = () => {
            window.matchMedia("(orientation: portrait)").matches ? v.value = "Portrait" : v.value = "Landscape"
        }
        ;
        ie( () => {
            window.innerWidth < 600 && (b.value = !0,
            e.value = 27),
            P(),
            x.value = v.value,
            window.addEventListener("resize", r),
            y.value = document.querySelector(".flex-blog-game");
            const A = document.getElementsByClassName("animate-check");
            for (let W = 0; W < A.length; W++) {
                const Y = A[W];
                D.value === "true" ? Y.classList.remove("close-effect") : Y.classList.add("close-effect")
            }
        }
        );
        const r = () => {
            const k = v.value;
            P();
            const A = window.innerWidth;
            k === "Landscape" && v.value === "Portrait" ? A < 600 && (s.value = 1,
            b.value = !0,
            e.value = 27) : k === "Portrait" && v.value === "Landscape" && (b.value = !1,
            e.value = 27),
            x.value = k
        }
        ;
        ge( () => {
            window.removeEventListener("resize", r),
            clearTimeout(F.value)
        }
        );
        const M = (k, A) => {
            A === "next" && s.value + k >= 1 && (s.value += k,
            w.value = w.value + 27)
        }
          , C = j( () => {
            const k = Math.ceil(u.showBrandGame.length / 27);
            return k <= 0 ? 1 : k
        }
        )
          , g = j( () => {
            const k = u.searchBrandGame.toLowerCase();
            return u.showBrandGame.slice(m.value, w.value).filter(A => A.brand_name.toLowerCase().includes(k))
        }
        )
          , e = n(27)
          , s = n(1)
          , f = S;
        function R(k) {
            f("selectBrandGame", k)
        }
        function O() {
            f("isShowArrowBack", !1),
            f("selectGroupGame", "default");
            const k = document.getElementById("girl-main")
              , A = document.getElementById("flex-layout");
            k && k.classList.remove("hide-character"),
            A == null || A.classList.remove("full-layout")
        }
        function H() {
            if (y.value) {
                const k = y.value;
                k.scrollTop + k.clientHeight >= k.scrollHeight - 30 && s.value !== C.value && M(1, "next")
            }
        }
        return (k, A) => (o(),
        i("div", {
            class: z(["flex-blog-game w-[100%] grid grid-cols-9 gap-3 place-items-stretch h-[100%] overflow-y-auto py-4 pl-2 padding-right-brand-game overflow-x-hidden", b.value ? "grid-game-mobile" : ""]),
            onScroll: A[1] || (A[1] = W => H())
        }, [a("div", {
            class: "arrow-back",
            style: K(`background-image:url(${_(G)})`),
            onClick: A[0] || (A[0] = W => O())
        }, [a("div", {
            class: "arrow-icon animate-check",
            style: K(`background-image:url(${_(E)})`)
        }, null, 4), a("p", ft, V(_(B)("back")), 1)], 4), g.value && g.value.length > 0 ? (o(!0),
        i(ee, {
            key: 0
        }, oe(g.value, (W, Y) => (o(),
        i("div", {
            class: "blog-game -none-effect w-[100%]",
            style: {
                cursor: "pointer"
            },
            key: Y
        }, [a("div", {
            class: z(["crop-game game-image-effect", g.value.length <= 8 ? "height-auto-content" : ""]),
            onClick: ce => R(W.brand_name)
        }, [A[2] || (A[2] = a("div", {
            class: "shine-item-effect"
        }, null, -1)), a("div", vt, [a("img", {
            loading: "lazy",
            class: z({
                cloudfrontimg: W.info.image_path.includes("cloudfront"),
                notcloudfrontimg: !W.info.image_path.includes("cloudfront")
            }),
            src: W.info.image_path,
            alt: W.info.image_path
        }, null, 10, ht)])], 10, pt)]))), 128)) : u.isLoadingGame ? (o(),
        i("div", bt, [X(_e)])) : (o(),
        i("div", yt, [u.categoryGame === "FAVORITE" ? (o(),
        i("div", kt, [a("p", _t, V(_(B)("noGameFavorite")), 1)])) : (o(),
        i("div", wt, [X(_(xe), {
            class: "w-16 sm:w-24 h-16 sm:h-24"
        }), a("p", At, V(_(B)("gameNotFound")), 1)]))]))], 34))
    }
});
const Bt = ye(Gt, [["__scopeId", "data-v-42821884"]])
  , It = "data:image/png;base64,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"
  , Lt = "/assets/fire-icon-1ef8b2e3.gif"
  , St = "data:image/png;base64,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"
  , Et = {
    class: "text-back-btn"
}
  , Ct = ["onClick"]
  , xt = {
    key: 1,
    class: "blog-hot-game animate-check"
}
  , Ot = {
    key: 2,
    class: "blog-new-game-icon animate-check"
}
  , zt = {
    class: "bg-cat-game -game",
    style: {
        position: "relative"
    }
}
  , Mt = ["src", "alt"]
  , Tt = ["src", "alt"]
  , Qt = {
    class: "absolute bottom-0 bg-black w-full rounded-b-xl text-ellipsis whitespace-nowrap overflow-hidden opacity-80"
}
  , Dt = {
    key: 0,
    class: "mx-1.5 text-[10px] sm:text-[12px]"
}
  , Pt = {
    key: 3,
    class: "caption-jackpot-wrap"
}
  , Rt = {
    class: "flex-caption-wrapper"
}
  , Nt = ["src"]
  , Ft = {
    class: "process-bar-caption"
}
  , Ut = {
    class: "percent-process"
}
  , Vt = {
    class: "letter-name text"
}
  , Wt = ["onClick"]
  , Ht = {
    key: 1,
    class: "w-[73%] md:w-[90%] bg-black bg-opacity-[0.3] rounded-lg absolute h-[200px] sm:h-full"
}
  , jt = {
    key: 2,
    class: "w-[73%] md:w-[90%] bg-black bg-opacity-[0.3] rounded-lg absolute h-[200px] sm:h-full"
}
  , Jt = {
    class: "flex justify-center items-center h-full flex-col w-full"
}
  , qt = {
    class: "text-center text-base md:text-2xl"
}
  , Xt = Z({
    __name: "ListGame",
    props: {
        showGame: {
            type: Array,
            default: () => []
        },
        selectedGroup: {
            type: String,
            default: ""
        },
        searchGame: {
            type: String,
            default: ""
        },
        selectedBrand: {
            type: String,
            default: ""
        },
        totalRecord: {
            type: Number,
            default: 1
        },
        totalPage: {
            type: Number,
            default: 1
        },
        isCheckAnimate: {
            type: Boolean,
            default: !1
        },
        isLoadingGame: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["selectGroupGame", "selectBrandGame", "setPageSet", "updateFavorite", "playGame", "isShowArrowBack"],
    setup(Q, {emit: S}) {
        const B = ze
          , G = Oe
          , E = ue()
          , u = Q
          , {t: b} = te()
          , v = n(0)
          , m = n(27)
          , w = n(!1)
          , D = n("")
          , x = n("")
          , y = n(localStorage.getItem("animate") ?? "")
          , F = n(0)
          , P = n(null);
        n();
        const r = n("")
          , M = () => {
            window.matchMedia("(orientation: portrait)").matches ? D.value = "Portrait" : D.value = "Landscape"
        }
        ;
        ie( () => {
            window.innerWidth < 600 && (w.value = !0),
            M(),
            F.value = D.value,
            window.addEventListener("resize", g),
            P.value = document.querySelector(".flex-blog-game"),
            f()
        }
        ),
        q(x, p => {
            p && (s(),
            e(300))
        }
        ),
        q( () => u.isCheckAnimate, p => {
            s(),
            e(400)
        }
        ),
        q( () => u.isLoadingGame, p => {
            s(),
            e(400)
        }
        ),
        q(r, p => {
            s(),
            e(300)
        }
        );
        const C = j( () => E.isLogin)
          , g = () => {
            const p = D.value;
            M();
            const T = window.innerWidth;
            p === "Landscape" && D.value === "Portrait" ? T < 600 && (w.value = !0) : p === "Portrait" && D.value === "Landscape" && (w.value = !1),
            F.value = p
        }
        ;
        ge( () => {
            window.removeEventListener("resize", g)
        }
        );
        function e(p) {
            setTimeout(f, p)
        }
        function s() {
            y.value = localStorage.getItem("animate") ?? ""
        }
        const f = () => {
            const p = document.getElementsByClassName("animate-check");
            for (let T = 0; T < p.length; T++) {
                const I = p[T];
                y.value === "true" ? I.classList.remove("close-effect") : I.classList.add("close-effect")
            }
        }
          , R = (p, T) => {
            u.selectedGroup === "SLOT" || u.selectedGroup === "TABLE" ? T === "next" && k.value + p >= 1 && (k.value += p,
            m.value = m.value + 27,
            A("setPageSet", {
                numberCurrent: k.value,
                pagiStatus: "next"
            })) : T === "next" && k.value + p >= 1 && (x.value = "next",
            k.value += p,
            m.value = m.value + 27)
        }
          , O = j( () => {
            if (u.selectedGroup === "SLOT" || u.selectedGroup === "TABLE") {
                const p = Math.ceil(u.totalRecord / 27);
                return p == u.totalPage ? p : k.value
            } else {
                const p = Math.ceil(u.showGame.length / 27);
                return p <= 0 ? 1 : p
            }
        }
        );
        q( () => u.selectedBrand, p => {
            k.value = 1
        }
        );
        const H = j( () => (r.value = u.searchGame.toLowerCase(),
        u.showGame.slice(v.value, m.value).filter(p => p.seamless_name.toLowerCase().includes(r.value))))
          , k = n(1)
          , A = S;
        function W(p) {
            A("playGame", p)
        }
        function Y() {
            if (u.selectedGroup === "SLOT" || u.selectedGroup === "TABLE")
                A("selectGroupGame", u.selectedGroup),
                A("selectBrandGame", ""),
                A("setPageSet", {
                    numberCurrent: 1,
                    pagiStatus: "default"
                });
            else {
                A("isShowArrowBack", !1),
                A("selectGroupGame", "default");
                const p = document.getElementById("girl-main")
                  , T = document.getElementById("flex-layout");
                p && p.classList.remove("hide-character"),
                T == null || T.classList.remove("full-layout")
            }
        }
        function ce(p) {
            A("updateFavorite", p)
        }
        function re() {
            if (P.value) {
                const p = P.value;
                p.scrollTop + p.clientHeight >= p.scrollHeight - 30 && k.value !== O.value && R(1, "next")
            }
        }
        return (p, T) => (o(),
        i("div", {
            class: z(["flex-blog-game w-[100%] grid grid-cols-9 gap-3 place-items-stretch overflow-y-auto py-4 pl-2 padding-right-list-game overflow-x-hidden", w.value ? "grid-game-mobile" : H.value.length <= 8 ? "h-auto" : "h-full"]),
            onScroll: T[1] || (T[1] = I => re())
        }, [a("div", {
            class: "arrow-back flex-wrap",
            style: K(`background-image:url(${_(B)})`),
            onClick: T[0] || (T[0] = I => Y())
        }, [a("div", {
            class: "arrow-icon animate-check",
            style: K(`background-image:url(${_(G)})`)
        }, null, 4), a("p", Et, V(_(b)("back")), 1)], 4), H.value && H.value.length > 0 ? (o(!0),
        i(ee, {
            key: 0
        }, oe(H.value, (I, fe) => (o(),
        i("div", {
            class: "blog-game -none-effect w-[100%]",
            style: {
                cursor: "pointer"
            },
            key: fe
        }, [a("div", {
            class: z(["crop-game game-image-effect", [u.selectedGroup === "FAVORITE" && H.value.length <= 8 ? "height-auto-fav" : H.value.length <= 8 ? "height-auto-content" : ""]])
        }, [u.selectedGroup !== "GAMEHITS" && u.selectedGroup !== "GAMENEW" && C.value ? (o(),
        i("div", {
            key: 0,
            class: z(["blog-fav-game", I.favorite_status ? "active-fav" : ""]),
            onClick: pe => ce(I)
        }, T[2] || (T[2] = [a("img", {
            loading: "lazy",
            class: "animate-check",
            src: It,
            alt: ""
        }, null, -1)]), 10, Ct)) : N("", !0), u.selectedGroup === "GAMEHITS" ? (o(),
        i("div", xt, T[3] || (T[3] = [a("img", {
            loading: "lazy",
            src: Lt,
            alt: ""
        }, null, -1)]))) : N("", !0), u.selectedGroup === "GAMENEW" ? (o(),
        i("div", Ot, T[4] || (T[4] = [a("img", {
            loading: "lazy",
            src: St,
            alt: ""
        }, null, -1)]))) : N("", !0), a("div", zt, [u.selectedGroup === "GAMENEW" ? (o(),
        i("img", {
            key: 0,
            loading: "lazy",
            src: I.seamless_image_path,
            alt: I.seamless_image_path,
            class: z({
                cloudfrontimg: I.seamless_image_path.includes("cloudfront"),
                notcloudfrontimg: !I.seamless_image_path.includes("cloudfront")
            })
        }, null, 10, Mt)) : (o(),
        i("img", {
            key: 1,
            loading: "lazy",
            src: I.seamless_image_path,
            alt: I.seamless_image_path,
            class: z({
                cloudfrontimg: I.seamless_image_path.includes("cloudfront"),
                notcloudfrontimg: !I.seamless_image_path.includes("cloudfront")
            })
        }, null, 10, Tt)), a("div", Qt, [u.selectedGroup !== "GAMEHITS" ? (o(),
        i("small", Dt, V(I.seamless_name), 1)) : N("", !0)])]), u.selectedGroup === "GAMEHITS" ? (o(),
        i("div", Pt, [a("div", Rt, [a("img", {
            loading: "lazy",
            src: I.game_data.image_menu,
            alt: ""
        }, null, 8, Nt), a("p", null, V(I.brand_name.toLocaleUpperCase()), 1)]), a("div", Ft, [a("div", Ut, [a("div", {
            class: "status-percent",
            style: K(`width:${I.percent}%`)
        }, null, 4)]), a("p", null, V(I.percent) + "%", 1)]), a("div", Vt, [a("p", null, V(I.seamless_name), 1)])])) : N("", !0), a("div", {
            class: "shine-item-effect",
            onClick: pe => W(I)
        }, null, 8, Wt)], 2)]))), 128)) : u.isLoadingGame ? (o(),
        i("div", Ht, [X(_e)])) : (o(),
        i("div", jt, [a("div", Jt, [X(_(xe), {
            class: "w-16 sm:w-24 h-16 sm:h-24"
        }), a("p", qt, V(_(b)("gameNotFound")), 1)])]))], 34))
    }
});
const Yt = ye(Xt, [["__scopeId", "data-v-2a240134"]])
  , Kt = {
    key: 0,
    class: "tab-nav-inner category-side-left"
}
  , Zt = {
    class: "list-brand-inner"
}
  , $t = ["onClick"]
  , ea = ["src"]
  , ta = {
    key: 1,
    class: "tab-nav-inner"
}
  , aa = {
    class: "list-brand-inner"
}
  , sa = ["onClick"]
  , la = ["src"]
  , oa = Z({
    __name: "SideLeftLayout",
    props: {
        selectedGroup: {
            type: String,
            default: ""
        },
        selectedBrand: {
            type: String,
            default: ""
        },
        showBrandGame: {
            type: Array,
            default: () => []
        }
    },
    emits: ["selectGroupGame", "selectBrandGame"],
    setup(Q, {emit: S}) {
        const {t: B, locale: G} = te()
          , u = Ee().nav_category
          , b = Q
          , v = n("")
          , m = n(0)
          , w = n(0)
          , D = n(localStorage.getItem("animate") ?? "")
          , x = S
          , y = n(!1);
        ie( () => {
            m.value = window.innerWidth,
            m.value < 600 && (y.value = !0),
            F(),
            w.value = v.value,
            window.addEventListener("resize", P);
            const C = document.getElementsByClassName("animate-check");
            for (let g = 0; g < C.length; g++) {
                const e = C[g];
                D.value === "true" ? e.classList.remove("close-effect") : e.classList.add("close-effect")
            }
        }
        ),
        q(m, () => {
            m.value < 600 && (y.value = !0)
        }
        );
        const F = () => {
            window.matchMedia("(orientation: portrait)").matches ? v.value = "Portrait" : v.value = "Landscape"
        }
          , P = () => {
            const C = v.value;
            F(),
            C === "Landscape" && v.value === "Portrait" ? y.value = !0 : C === "Portrait" && v.value === "Landscape" && (y.value = !1),
            w.value = C
        }
        ;
        function r(C) {
            x("selectGroupGame", C);
            const g = document.getElementById("girl-main")
              , e = document.getElementById("flex-layout");
            C === "FAVORITE" ? ne() ? (g && g.classList.add("hide-character"),
            e == null || e.classList.add("full-layout")) : (e == null || e.classList.remove("full-layout"),
            g == null || g.classList.remove("hide-character")) : (g && g.classList.add("hide-character"),
            e == null || e.classList.add("full-layout"))
        }
        function M(C) {
            x("selectBrandGame", C)
        }
        return ge( () => {
            window.removeEventListener("resize", P)
        }
        ),
        (C, g) => (o(),
        i("div", {
            class: z(["side-left", y.value && b.selectedGroup === "default" ? "hide-side-left" : ""]),
            id: "sideLeft"
        }, [b.showBrandGame.length <= 0 ? (o(),
        i("div", Kt, [a("div", Zt, [(o(!0),
        i(ee, null, oe(_(u), (e, s) => (o(),
        i("div", {
            class: "item-list-blog-inner",
            key: s
        }, [a("div", {
            class: z(["blog-cate-nav", b.selectedGroup === e.key ? "active-nav-cat" : ""]),
            onClick: f => r(e.key)
        }, [a("img", {
            class: "animate-check",
            loading: "lazy",
            src: _(he)(`sideleft/category-nav/${e.img_src}.webp`),
            alt: ""
        }, null, 8, ea), a("p", {
            class: z(_(G) === "en" ? "lang-en-cate" : "")
        }, V(_(B)(`categoryGameNav.${e.code_name}.title`)), 3)], 10, $t)]))), 128))])])) : (o(),
        i("div", ta, [a("div", aa, [(o(!0),
        i(ee, null, oe(b.showBrandGame, (e, s) => (o(),
        i("div", {
            class: "item-list-blog-inner animate-check",
            key: s
        }, [a("div", {
            class: z(["blog-cate-nav -brand", b.selectedBrand === e.brand_name ? "active-nav-brand" : ""]),
            onClick: f => M(e.brand_name)
        }, [a("img", {
            loading: "lazy",
            class: "animate-check",
            src: e.info.image_menu,
            alt: ""
        }, null, 8, la)], 10, sa)]))), 128))])]))], 2))
    }
})
  , na = {
    key: 0,
    class: "hidden-scroll"
}
  , ia = {
    class: "check-box-animate text-center mx-[5px]"
}
  , ca = ["onClick"]
  , ra = {
    class: "icon-menu-sub"
}
  , da = ["src"]
  , ua = {
    class: "icon-menu-sub"
}
  , ma = ["src"]
  , ga = ["src", "alt"]
  , fa = {
    class: "check-box-animate text-center mx-[5px]"
}
  , pa = ["href"]
  , va = {
    class: "icon-menu-sub"
}
  , ha = ["src", "alt"]
  , ba = ["href"]
  , ya = {
    class: "icon-menu-sub"
}
  , ka = ["src", "alt"]
  , _a = Z({
    __name: "SideRightLayout",
    props: {
        isShowBack: {}
    },
    setup(Q) {
        const {t: S} = te()
          , B = Ee()
          , G = me()
          , E = ue()
          , u = Ce()
          , b = Q
          , v = n(localStorage.getItem("animate") ?? "")
          , m = n(v.value == "true")
          , w = ke()
          , {setData: D} = be(w);
        ie( () => {
            setTimeout( () => {
                g(m.value)
            }
            , 2300)
        }
        );
        const x = j( () => b.isShowBack)
          , y = j( () => E.isLogin);
        q(y, () => {
            setTimeout( () => {
                g(m.value)
            }
            , 400)
        }
        );
        const F = j( () => B.nav_sideright.map(e => {
            var s, f, R, O, H, k, A, W;
            if (e.code_name !== "minigame" && e.code_name !== "treasure" && e.code_name !== "line" && e.code_name !== "telegram" && ((s = G == null ? void 0 : G.data) != null && s.meny) && e.key) {
                const Y = e.code_name === "checkin" ? (((R = (f = G == null ? void 0 : G.data) == null ? void 0 : f.checka_in) == null ? void 0 : R.enable) || !1) && ((H = (O = G == null ? void 0 : G.data) == null ? void 0 : O.meny) == null ? void 0 : H.checka_in.enable) : (k = G == null ? void 0 : G.data) == null ? void 0 : k.meny[e.key].enable;
                return {
                    ...e,
                    enable: Y,
                    image: (A = G == null ? void 0 : G.data) != null && A.meny[e.key].img_url ? (W = G == null ? void 0 : G.data) == null ? void 0 : W.meny[e.key].img_url : ""
                }
            }
            return {
                ...e
            }
        }
        ))
          , P = j( () => F.value.filter(s => s.code_name !== "minigame").filter(s => s.enable))
          , r = j( () => {
            var e;
            return ((e = G.data) == null ? void 0 : e.kontakt.line_kontakt) ?? ""
        }
        )
          , M = j( () => {
            var e;
            return ((e = G.data) == null ? void 0 : e.kontakt.telegram) ?? ""
        }
        );
        function C(e="") {
            ne() && u.setCompo(e)
        }
        const g = e => {
            const s = document.getElementsByClassName("animate-check");
            for (let f = 0; f < s.length; f++) {
                const R = s[f];
                e ? R.classList.remove("close-effect") : R.classList.add("close-effect")
            }
            e ? localStorage.setItem("animate", "true") : localStorage.setItem("animate", "false"),
            m.value = e
        }
        ;
        return (e, s) => y.value ? (o(),
        i("div", na, [a("div", {
            class: z(["sub-menu-nav-right !overflow-y-auto min-[601px]:!h-[40dvh] lg:!h-[50dvh] !overflow-x-auto pr-2", [x.value ? "add-show" : ""]]),
            id: "sidebar-right"
        }, [a("div", ia, [X(Ge, {
            "is-audio": !0,
            "is-animation": !0,
            onChange: s[0] || (s[0] = f => g(f)),
            value: m.value
        }, null, 8, ["value"]), a("p", null, V(_(S)("mainMenu.animation")), 1)]), (o(!0),
        i(ee, null, oe(P.value, (f, R) => (o(),
        i("div", {
            class: z(["blog-sub-menu-item", [f.enable === !1 ? "menu-not-enable" : "", f.onMb && "hidden max-[600px]:block"]]),
            key: R,
            onClick: O => f.enable ? C(f == null ? void 0 : f.modal) : null
        }, [f.enable ? (o(),
        i(ee, {
            key: 0
        }, [a("div", ra, [s[3] || (s[3] = a("div", {
            class: "bg-icon-circle-main animate-check"
        }, null, -1)), a("img", {
            loading: "lazy",
            src: f.image ? f.image : _(he)(`header/${f.img_src}.webp`),
            alt: ""
        }, null, 8, da)]), a("p", null, V(_(S)(`mainMenu.${f.code_name}`)), 1)], 64)) : N("", !0)], 10, ca))), 128)), a("div", {
            class: "blog-sub-menu-item hidden max-[600px]:block relative",
            onClick: s[1] || (s[1] = f => C("EventView"))
        }, [a("div", ua, [s[4] || (s[4] = a("div", {
            class: "bg-icon-circle-main animate-check"
        }, null, -1)), a("img", {
            loading: "lazy",
            src: _(he)("header/icon-mission-gold.webp"),
            alt: ""
        }, null, 8, ma)]), a("p", null, V(_(S)("mainMenu.mission")), 1), y.value && _(D) && _(D).length > 0 ? (o(),
        i("img", {
            key: 0,
            loading: "lazy",
            src: _(Be),
            alt: _(Be),
            class: "absolute !w-5 -top-0 right-2 animation-ping alert-icon z-10 animate-check"
        }, null, 8, ga)) : N("", !0)])], 2)])) : (o(),
        i("div", {
            key: 1,
            class: z(["sub-menu-notLogin", [x.value ? "add-show" : ""]]),
            id: "sidebar-right-notLogin"
        }, [a("div", fa, [X(Ge, {
            "is-audio": !0,
            "is-animation": !0,
            onChange: s[2] || (s[2] = f => g(f)),
            value: m.value
        }, null, 8, ["value"]), a("p", null, V(_(S)("mainMenu.animation")), 1)]), a("a", {
            class: z(["blog-sub-menu-item", r.value == "" ? "hidden" : "block"]),
            href: r.value,
            target: "_blank"
        }, [a("div", va, [s[5] || (s[5] = a("div", {
            class: "bg-icon-circle-main animate-check"
        }, null, -1)), a("img", {
            loading: "lazy",
            src: _(Ie),
            alt: _(Ie)
        }, null, 8, ha)]), s[6] || (s[6] = a("p", null, "Line", -1))], 10, pa), a("a", {
            class: z(["blog-sub-menu-item", M.value == "" ? "hidden" : "block"]),
            href: M.value,
            target: "_blank"
        }, [a("div", ya, [s[7] || (s[7] = a("div", {
            class: "bg-icon-circle-main animate-check"
        }, null, -1)), a("img", {
            loading: "lazy",
            src: _(Le),
            alt: _(Le)
        }, null, 8, ka)]), s[8] || (s[8] = a("p", null, "Telegram", -1))], 10, ba)], 2))
    }
})
  , Me = Ne("listGame", () => {
    const Q = n("");
    async function S(B) {
        Q.value = B
    }
    return {
        search: Q,
        setSearch: S
    }
}
)
  , wa = {
    class: "action-top"
}
  , Aa = {
    class: "action-flex flex items-center"
}
  , Ga = {
    class: "marquee-text-wrap"
}
  , Ba = Z({
    __name: "ActionTop",
    props: {
        selectedGroup: {
            type: String,
            default: ""
        },
        selectedBrand: {
            type: String,
            default: ""
        }
    },
    emits: ["searchBrand", "searchGame"],
    setup(Q, {emit: S}) {
        const B = Q
          , G = me()
          , E = Me()
          , {setSearch: u} = E
          , {search: b} = be(E)
          , {t: v} = te()
          , m = ke();
        be(m);
        const w = n("")
          , D = S
          , x = j( () => {
            var r;
            return (r = G.data) == null ? void 0 : r.tema.spel_meddelande
        }
        );
        q(b, r => {
            r && (w.value = "",
            y.value && F(),
            P(),
            u(""))
        }
        );
        const y = j( () => B.selectedBrand !== "default" && !["SPORT", "LOTTO", "KENO"].includes(B.selectedGroup));
        j( () => {
            y.value && F(),
            P()
        }
        );
        function F() {
            D("searchGame", w.value)
        }
        function P() {
            D("searchBrand", w.value)
        }
        return (r, M) => (o(),
        i("div", wa, [a("div", Aa, [a("div", {
            class: z(["blog-notice-wrap", B.selectedGroup === "SLOT" || B.selectedGroup === "TABLE" ? "full-notice" : 0])
        }, [a("div", Ga, [a("p", null, [a("span", null, V(_(v)("Announcement")) + " :", 1), Fe(" " + V(x.value), 1)])])], 2)])]))
    }
})
  , Ia = {
    class: "action-mobile"
}
  , La = {
    class: "action-flex flex items-end justify-end"
}
  , Sa = {
    key: 0,
    class: "blog-input-search"
}
  , Ea = ["placeholder"]
  , Ca = Z({
    __name: "SearchBar",
    props: {
        selectedGroup: {
            type: String,
            default: ""
        },
        selectedBrand: {
            type: String,
            default: ""
        },
        modelValue: {
            type: String,
            require: !0
        }
    },
    emits: ["update:modelValue", "searchBrand", "searchGame"],
    setup(Q, {emit: S}) {
        const B = Q
          , {t: G} = te()
          , E = S
          , u = n(B.modelValue);
        return q( () => B.modelValue, b => {
            u.value = b
        }
        ),
        (b, v) => (o(),
        i("div", Ia, [a("div", La, [B.selectedGroup !== "default" && !["SPORT", "LOTTO", "KENO"].includes(B.selectedGroup) ? (o(),
        i("div", Sa, [Ue(a("input", {
            type: "text",
            "onUpdate:modelValue": v[0] || (v[0] = m => u.value = m),
            placeholder: _(G)("Search"),
            onInput: v[1] || (v[1] = m => E("update:modelValue", u.value))
        }, null, 40, Ea), [[Ve, u.value]]), v[2] || (v[2] = a("div", {
            class: "icon-search-input"
        }, [a("img", {
            loading: "lazy",
            src: "https://dr277ea24g9fk.cloudfront.net/_lobby/asset/search-icon.webp",
            alt: ""
        })], -1))])) : N("", !0)])]))
    }
});
const xa = ye(Ca, [["__scopeId", "data-v-d5122bf8"]])
  , Se = "/assets/slot-pic-941cd1a9.png";
async function Oa(Q) {
    try {
        return await za(Q) ? Q : Se
    } catch {
        return Se
    }
}
function za(Q) {
    return new Promise(S => {
        let B = new Image;
        B.onload = () => S(!0),
        B.onerror = () => S(!1),
        B.src = Q
    }
    )
}
const Ma = {
    class: "layout-main w-[100%] h-[100vh]"
}
  , Ta = {
    class: "flex-layout",
    id: "flex-layout"
}
  , Na = Z({
    __name: "HomeView",
    props: {
        setHome: {
            type: String
        }
    },
    setup(Q) {
        je(),
        Je(),
        Ce(),
        ke();
        const S = We()
          , B = Q;
        Xe();
        const G = ue();
        Me();
        const E = n([])
          , u = n([])
          , b = n(!1)
          , v = n([])
          , m = n("default")
          , w = n("");
        n("");
        const D = n(!1)
          , x = n(27)
          , y = n(1)
          , F = n(1)
          , P = n(1)
          , r = n([])
          , M = n([])
          , C = n([])
          , g = n([])
          , e = n([])
          , s = He("(max-width: 600px)")
          , f = me()
          , R = n("")
          , O = n(!1)
          , H = n(!1)
          , k = j( () => {
            const t = navigator.userAgent.toLocaleLowerCase();
            return t.includes("line") || t.includes("liff")
        }
        )
          , A = j( () => G.isLogin);
        q(A, () => {
            A.value && (J.getMember(),
            J.amount(),
            J.getRankingInfo(),
            J.getOutstanding())
        }
        ),
        q(S, () => {
            var t;
            S.data && ((t = S.data) == null ? void 0 : t.length) > 0 && p()
        }
        );
        const W = n(qe.config_game);
        ie(async () => {
            S.dataShow && p(),
            A.value && (J.getMember(),
            J.amount(),
            J.getRankingInfo(),
            setTimeout( () => {
                J.getOutstanding()
            }
            , 600));
            const t = document.getElementById("girl-main");
            t && t.classList.contains("hide-character") && t.classList.remove("hide-character")
        }
        );
        const {PlayGameV2: Y, PlayGameLine: ce} = Ye();
        q( () => B.setHome, t => {
            if (t) {
                I("default");
                const c = document.getElementById("girl-main")
                  , l = document.getElementById("flex-layout");
                c && c.classList.remove("hide-character"),
                l == null || l.classList.remove("full-layout")
            }
        }
        );
        const re = async t => await Promise.all(t.map(async l => ({
            ...l,
            seamless_image_path: await Oa(l.seamless_image_path)
        })));
        function p() {
            const t = S.data;
            if (t) {
                const c = ["WHEEL", "LOTTO", "GRAPH"];
                E.value = t.filter(l => !c.includes(l.group)).sort( (l, d) => l.group_order - d.group_order);
                for (const l of W.value)
                    E.value.unshift(l);
                if (E.value.length > 0 && localStorage.getItem("game_type")) {
                    const l = localStorage.getItem("game_type")
                      , d = localStorage.getItem("brand_name");
                    l === "SLOT" || l === "TABLE" ? (I(l || ""),
                    de(d || "")) : I(l || ""),
                    localStorage.removeItem("game_type"),
                    localStorage.removeItem("brand_name");
                    const h = document.getElementById("girl-main")
                      , L = document.getElementById("flex-layout");
                    l === "FAVORITE" ? ne() ? (h && h.classList.add("hide-character"),
                    L == null || L.classList.add("full-layout"),
                    I(l || "")) : I("default") : (h && h.classList.add("hide-character"),
                    L == null || L.classList.add("full-layout"))
                }
            }
        }
        async function T() {
            try {
                const t = await J.favoriteGame();
                if (t.code !== 200)
                    $.error(t.message);
                else {
                    const c = t.payload;
                    if (c && c.length > 0) {
                        const l = t.payload.map( (d, h) => ({
                            ...d,
                            favorite_id: d.id,
                            favorite_status: !0,
                            accessGame: !0,
                            index: h
                        }));
                        M.value = l
                    } else
                        M.value = []
                }
            } catch (t) {
                console.log(t)
            }
        }
        async function I(t) {
            if (m.value = t,
            v.value = [],
            r.value = [],
            R.value = "",
            D.value = !1,
            t === "SLOT" || t === "TABLE") {
                const c = E.value.filter(l => l.group === t);
                O.value = !0,
                v.value = c[0].brand,
                b.value = !0,
                x.value = 27,
                y.value = 1
            } else if (t === "FAVORITE")
                if (ne()) {
                    ae("fav") || await T(),
                    O.value = !0;
                    const l = M.value.map( (d, h) => ({
                        ...d,
                        game_type: d.type_game,
                        brand_name: d.brand_game,
                        seamless_name: d.game_name,
                        seamless_image_path: d.img_url,
                        favorite_id: d.id,
                        favorite_status: !0,
                        accessGame: !0,
                        index: h
                    }));
                    b.value = !0,
                    r.value = l
                } else
                    w.value = "",
                    b.value = !1,
                    O.value = !1,
                    f.setWhitelabelEnable(!0);
            else if (t === "GAMEHITS")
                O.value = !0,
                b.value = !0,
                w.value = "GAMEHITS",
                x.value = 0,
                y.value = 0,
                C.value.length > 0 ? r.value = C.value.sort( (c, l) => c.order - l.order) : Qe();
            else if (t === "GAMENEW")
                if (H.value = !0,
                O.value = !0,
                b.value = !0,
                w.value = "GAMENEW",
                D.value = !0,
                x.value = 0,
                y.value = 0,
                e.value.length > 0) {
                    const c = await re(e.value);
                    r.value = c.slice(0, 50).sort( (l, d) => l.order - d.order),
                    H.value = !1
                } else
                    Te(),
                    setTimeout( () => {
                        H.value = !1
                    }
                    , 1e3);
            else
                t === "GAMELOTTO" ? fe() : t === "MINIGAME" ? pe() : t === "default" ? (w.value = "",
                b.value = !1,
                O.value = !1,
                f.setWhitelabelEnable(!0)) : (O.value = !0,
                b.value = !0,
                w.value = "",
                x.value = 0,
                y.value = 0,
                ae())
        }
        async function fe() {
            O.value = !0,
            b.value = !0,
            w.value = "",
            x.value = 0,
            y.value = 0
        }
        async function pe() {
            O.value = !0,
            b.value = !0,
            w.value = "",
            x.value = 0,
            y.value = 0
        }
        async function Te() {
            try {
                const t = await J.GameNew();
                if (t.code !== 200)
                    $.error(t.message);
                else {
                    e.value = t.payload;
                    const c = await re(e.value);
                    r.value = c.filter(l => l.is_game_enable === !0).sort( (l, d) => l.order - d.order)
                }
            } catch (t) {
                console.log(t)
            }
        }
        async function Qe() {
            try {
                const t = await J.GameTag();
                if (t.code !== 200)
                    $.error(t.message);
                else {
                    g.value = t.payload;
                    const c = g.value.find(l => l.tag_nameEN === "Game Jackpot");
                    c && (c == null ? void 0 : c.list_game.length) > 0 ? (C.value = c == null ? void 0 : c.list_game.filter(l => l.is_game_enable === !0),
                    r.value = C.value.sort( (l, d) => l.order - d.order)) : (C.value = [],
                    r.value = [])
                }
            } catch (t) {
                console.log(t)
            }
        }
        function ae(t="") {
            if (u.value.length > 0) {
                const c = u.value.find(l => l.brand_name === w.value && l.page === y.value && l.page_set === x.value && l.group === m.value);
                if (c)
                    if (P.value = c.total_page,
                    F.value = c.total_record,
                    m.value === "SLOT" || m.value === "TABLE") {
                        const l = c.brand[0].list_game;
                        if (t !== "fav") {
                            const d = l.map( (h, L) => {
                                const U = se(M.value, h.game_id);
                                return {
                                    ...h,
                                    favorite_id: U.favorite_id,
                                    favorite_status: U.favorite_status,
                                    index: L
                                }
                            }
                            );
                            r.value.push(...d.filter(h => h.is_game_enable === !0).sort( (h, L) => h.order - L.order))
                        } else {
                            const d = r.value.map( (h, L) => {
                                const U = se(M.value, h.game_id);
                                return {
                                    ...h,
                                    favorite_id: U.favorite_id,
                                    favorite_status: U.favorite_status,
                                    index: L
                                }
                            }
                            );
                            r.value = d
                        }
                    } else {
                        const l = c.brand.flatMap(d => d.list_game);
                        if (t !== "fav") {
                            const d = l.map( (h, L) => {
                                const U = se(M.value, h.game_id);
                                return {
                                    ...h,
                                    favorite_id: U.favorite_id,
                                    favorite_status: U.favorite_status,
                                    index: L
                                }
                            }
                            );
                            r.value.push(...d.filter(h => h.is_game_enable === !0).sort( (h, L) => h.order - L.order))
                        } else {
                            const d = r.value.map( (h, L) => {
                                const U = se(M.value, h.game_id);
                                return {
                                    ...h,
                                    favorite_id: U.favorite_id,
                                    favorite_status: U.favorite_status,
                                    index: L
                                }
                            }
                            );
                            r.value = d
                        }
                    }
                else {
                    if (t === "fav")
                        return !1;
                    we()
                }
            } else {
                if (t === "fav")
                    return !1;
                we()
            }
        }
        function de(t) {
            m.value === "SLOT" || m.value === "TABLE" ? (y.value = 1,
            x.value = 27,
            R.value = "") : (y.value = 0,
            x.value = 0),
            t !== "" ? (w.value = t,
            r.value = [],
            ae()) : w.value = ""
        }
        async function we() {
            try {
                const t = await J.filterGame(m.value, w.value, x.value, y.value);
                if (t.code !== 200)
                    $.error(t.message);
                else {
                    if (F.value = t.payload.total_record,
                    P.value = t.payload.total_page,
                    m.value === "SLOT" || m.value === "TABLE") {
                        const c = t.payload.brand[0].list_game.map( (l, d) => {
                            const h = se(M.value, l.game_id);
                            return {
                                ...l,
                                favorite_id: h.favorite_id,
                                favorite_status: h.favorite_status,
                                index: d
                            }
                        }
                        );
                        r.value.push(...c.filter(l => l.is_game_enable === !0).sort( (l, d) => l.group_order - d.group_order))
                    } else {
                        const l = t.payload.brand.flatMap(d => d.list_game).map( (d, h) => {
                            const L = se(M.value, d.game_id);
                            return {
                                ...d,
                                favorite_id: L.favorite_id,
                                favorite_status: L.favorite_status,
                                index: h
                            }
                        }
                        );
                        r.value.push(...l.filter(d => d.is_game_enable === !0).sort( (d, h) => d.group_order - h.group_order))
                    }
                    u.value.push({
                        ...t.payload,
                        brand_name: w.value
                    })
                }
            } catch (t) {
                console.log(t)
            }
        }
        function se(t, c) {
            const l = t.find(d => d.game_id === c);
            return {
                favorite_id: l ? l.id : null,
                favorite_status: !!l
            }
        }
        function De(t) {
            t.pagiStatus === "next" ? t.numberCurrent !== 1 && (y.value = y.value + 1,
            ae()) : (y.value = 1,
            r.value = [])
        }
        async function Pe(t) {
            const c = {
                action: "",
                brand_game: "",
                brand_id: "",
                game_id: "",
                game_name: "",
                type_game: "",
                img_url: "",
                username: ""
            }
              , l = {
                action: "",
                username: "",
                id: ""
            };
            t.favorite_status ? (l.action = "DELETE",
            l.username = t.username,
            l.id = t.favorite_id) : (c.action = "ADD",
            c.brand_id = t.brand_id,
            c.brand_game = t.brand_name,
            c.type_game = t.game_type,
            c.game_id = t.game_id,
            c.game_name = t.seamless_name,
            c.img_url = t.seamless_image_path,
            c.username = t.username);
            const d = await J.favoriteUpdate(t.favorite_status ? l : c);
            if (d.code === 200) {
                const h = await J.favoriteGame();
                if (h.code === 200 && (M.value = h.payload ? h.payload : []),
                $.success(d.message),
                t.favorite_status)
                    if (m.value === "FAVORITE") {
                        const L = r.value.findIndex(U => U.game_id === t.game_id);
                        if (L >= 0) {
                            const U = {
                                ...r.value[L],
                                favorite_status: !1,
                                favorite_id: null
                            };
                            r.value.splice(L, 1, U),
                            r.value.splice(L, 1)
                        }
                    } else {
                        const L = r.value.findIndex(U => U.game_id === t.game_id);
                        Object.assign(r.value, L, {
                            ...r.value[L],
                            favorite_status: !1,
                            favorite_id: null
                        }),
                        ae("fav")
                    }
                else {
                    const L = r.value.findIndex(U => U.game_id === t.game_id);
                    Object.assign(r.value, L, {
                        ...r.value[L],
                        favorite_status: !0,
                        favorite_id: d.payload.InsertedID
                    }),
                    ae("fav")
                }
            } else
                $.error(d.message)
        }
        async function Re(t) {
            const c = {
                game: t.brand_id ? t.brand_id : t.band_id,
                gameid: t.game_id,
                typegame: t.game_type ? t.game_type : t.type_game,
                isMobile: s.value,
                namegame: t.seamless_name ? t.seamless_name : t.game_name,
                namebrand: t.brand_name ? t.brand_name : t.band_game,
                url: window.location.origin
            };
            return k.value ? ce(c) : Y(c)
        }
        function Ae(t) {
            O.value = t
        }
        return (t, c) => (o(),
        i("div", Ma, [X(oa, {
            selectedGroup: m.value,
            showBrandGame: v.value,
            selectedBrand: w.value,
            onSelectGroupGame: I,
            onSelectBrandGame: de
        }, null, 8, ["selectedGroup", "showBrandGame", "selectedBrand"]), X(_a, {
            isShowBack: O.value
        }, null, 8, ["isShowBack"]), X(Ba), a("div", Ta, [X(xa, {
            modelValue: R.value,
            "onUpdate:modelValue": c[0] || (c[0] = l => R.value = l),
            selectedGroup: m.value,
            selectedBrand: w.value
        }, null, 8, ["modelValue", "selectedGroup", "selectedBrand"]), b.value ? b.value && r.value.length == 0 ? (o(),
        ve(Bt, {
            key: 1,
            showBrandGame: v.value,
            categoryGame: m.value,
            searchBrandGame: R.value,
            isLoadingGame: H.value,
            onSelectGroupGame: I,
            onSelectBrandGame: de,
            onIsShowArrowBack: Ae
        }, null, 8, ["showBrandGame", "categoryGame", "searchBrandGame", "isLoadingGame"])) : (o(),
        ve(Yt, {
            key: 2,
            showGame: r.value,
            selectedGroup: m.value,
            selectedBrand: w.value,
            totalPage: P.value,
            totalRecord: F.value,
            searchGame: R.value,
            isCheckAnimate: D.value,
            isLoadingGame: H.value,
            onSelectGroupGame: I,
            onSetPageSet: De,
            onSelectBrandGame: de,
            onUpdateFavorite: Pe,
            onPlayGame: Re,
            onIsShowArrowBack: Ae
        }, null, 8, ["showGame", "selectedGroup", "selectedBrand", "totalPage", "totalRecord", "searchGame", "isCheckAnimate", "isLoadingGame"])) : (o(),
        ve(gt, {
            key: 0,
            categoryGame: E.value,
            onSelectGroupGame: I
        }, null, 8, ["categoryGame"]))])]))
    }
});
export {Na as default};
