import { a as M } from "./chunk-RCFOMJUN.mjs";
import { a as R } from "./chunk-CO46OLGF.mjs";
import { a as b } from "./chunk-JEAYGDGA.mjs";
import { a as V } from "./chunk-R3PETZRW.mjs";
import { a as W } from "./chunk-ICWJQOU4.mjs";
import { a as z } from "./chunk-X4RL6ZYP.mjs";
import "./chunk-C3SD45VA.mjs";
import { a as h } from "./chunk-CTIF5AVX.mjs";
import {
  a as de,
  b as fe,
  c as se,
  d as ce,
  e as pe,
  f as he,
} from "./chunk-3REURG4N.mjs";
import { a as B } from "./chunk-GKORHWPJ.mjs";
import { d as we, e as be, f as ve } from "./chunk-QZEJCLJB.mjs";
import { e as H } from "./chunk-XHADUV4Z.mjs";
import {
  a as v,
  b as me,
  c as oe,
  d as le,
  e as U,
  h as ue,
  i as xe,
  j as ge,
  k as ye,
  m as P,
} from "./chunk-SK7OXHBT.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as F,
  G as D,
  H as $,
  K as t,
  M as i,
  N as ee,
  O as re,
  P as ae,
  Q as te,
  V as s,
  Z as w,
  da as ie,
  e as a,
  g as O,
  la as N,
  na as E,
  pa as A,
  qa as m,
  ra as ne,
  sa as l,
  t as Q,
  ta as x,
  w as T,
} from "./chunk-NCIFD65W.mjs";
import {
  d as n,
  j as K,
  q as J,
  s as X,
  u as j,
  y as e,
  z as r,
} from "./chunk-DKTB2747.mjs";
import "./chunk-ELYU6EKT.mjs";
var Ue = l(P),
  Be = l(z),
  Z = $(i),
  He = l(V),
  ze = N(V),
  Pe = l(b),
  Ve = l(U),
  We = l(B),
  Re = N(B),
  Me = l(W),
  _e = N(W),
  C = ue(a.div),
  Ze = l(h),
  Ge = l(R),
  Ye = l(v),
  Ke = l(H);
var Je = { CjVMdBPrT: "(max-width: 1023px)", mWDNDBJ5f: "(min-width: 1024px)" },
  Xe = () => typeof document < "u",
  je = "framer-dez0R",
  Oe = { CjVMdBPrT: "framer-v-4u7j8y", mWDNDBJ5f: "framer-v-rhuvsm" },
  Qe = { oDJvo1yNO: new te(() => import("./k5VRHciV7-0-V24OS24F.mjs")) },
  $e = (d) => {
    let o = [];
    for (; d; ) {
      let c = Qe[d.id];
      if (c) {
        let p = c.preload();
        p && o.push(p);
      }
      d = d.fallback;
    }
    if (o.length > 0) return Promise.all(o);
  };
var _ = (d, o) => `perspective(1200px) ${o}`,
  er = (d, o) => `${o} rotate(-180deg)`,
  qe = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  rr = { opacity: 0, rotate: 0, scale: 1, transition: qe, x: 0, y: 0 },
  Ne = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: qe,
    x: 0,
    y: 0,
  },
  Ce = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: 0 },
  Ie = M(),
  ar = { Desktop: "mWDNDBJ5f", Phone: "CjVMdBPrT" },
  tr = ({ height: d, id: o, width: c, ...p }) => {
    var g, y;
    return {
      ...p,
      variant:
        (y = (g = ar[p.variant]) !== null && g !== void 0 ? g : p.variant) !==
          null && y !== void 0
          ? y
          : "mWDNDBJ5f",
    };
  },
  ir = K(function (d, o) {
    let { activeLocale: c, setLocale: p } = Q(),
      { style: g, className: y, layoutId: q, variant: ke, ...Le } = tr(d);
    X(() => {
      let u = M(void 0, c);
      if (((document.title = u.title || ""), u.viewport)) {
        var L;
        (L = document.querySelector('meta[name="viewport"]')) === null ||
          L === void 0 ||
          L.setAttribute("content", u.viewport);
      }
      if (u.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((S) => S.startsWith("framer-body-"))
            .map((S) => document.body.classList.remove(S)),
          document.body.classList.add(`${u.bodyClassName}-framer-dez0R`),
          () => {
            document.body.classList.remove(`${u.bodyClassName}-framer-dez0R`);
          }
        );
    }, [void 0, c]);
    let [f, mr] = ie(ke, Je, !1),
      or = void 0,
      G = $e(c);
    if (G) throw G;
    let Se = j(null),
      k = () => (f === "CjVMdBPrT" ? !Xe() : !0),
      Te = T("co1pTjNex"),
      De = j(null),
      Fe = T("B0pZkBetj"),
      Ee = j(null),
      Ae = J(),
      Y = [se, ve, he, le, ye];
    return (
      re({}),
      e(ae.Provider, {
        value: { primaryVariantId: "mWDNDBJ5f", variantClassNames: Oe },
        children: r(O, {
          id: q ?? Ae,
          children: [
            r(a.div, {
              ...Le,
              className: D(je, ...Y, "framer-rhuvsm", y),
              ref: o ?? Se,
              style: { ...g },
              children: [
                e(t, {
                  children: e(i, {
                    className: "framer-3yv0nv-container",
                    children: e(s, {
                      breakpoint: f,
                      overrides: {
                        CjVMdBPrT: {
                          style: { width: "100%" },
                          variant: "dxtA8R9ro",
                        },
                      },
                      children: e(P, {
                        height: "100%",
                        id: "fGDhMNeCO",
                        layoutId: "fGDhMNeCO",
                        style: { maxWidth: "100%", width: "100%" },
                        variant: "eoTXJYY6N",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                r("div", {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1800,
                    intrinsicWidth: 2960,
                    pixelHeight: 1800,
                    pixelWidth: 2960,
                    src: "https://framerusercontent.com/images/sFRCThLDPJ219yeRopNhXPG2zDY.jpg",
                  },
                  className: "framer-n71a1f",
                  "data-framer-name": "Hero",
                  name: "Hero",
                  children: [
                    r("div", {
                      className: "framer-1c72bwl",
                      "data-framer-name": "Title",
                      name: "Title",
                      children: [
                        e(t, {
                          children: e(Z, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  x: 60,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScroll",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-19mp0v5-container",
                            transformTemplate: _,
                            children: e(s, {
                              breakpoint: f,
                              overrides: {
                                CjVMdBPrT: {
                                  font: {
                                    font: "Rigid Square Regular",
                                    fontSize: 64,
                                    fontWeight: 400,
                                    letterSpacing: 4,
                                    lineHeight: 1.1,
                                    lineHeightPixels: 100,
                                    lineHeightType: !0,
                                    offset: 0,
                                    textAlign: "center",
                                    whiteSpace: "pre-wrap",
                                  },
                                },
                              },
                              children: e(z, {
                                color:
                                  "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                effectOptions: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  x: 0,
                                  y: 100,
                                },
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 96,
                                  fontWeight: 400,
                                  letterSpacing: 6,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: 1,
                                  textAlign: "left",
                                  whiteSpace: "pre-wrap",
                                },
                                height: "100%",
                                id: "s8cV0Mj09",
                                layoutId: "s8cV0Mj09",
                                overflow: !1,
                                perWord: !1,
                                stagger: 0.05,
                                style: { width: "100%" },
                                text: "WHY",
                                transitionOptions: {
                                  damping: 90,
                                  delay: 0.5,
                                  duration: 2,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 400,
                                  type: "spring",
                                },
                                type: "letter",
                                variant: !0,
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        e(t, {
                          children: e(Z, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  x: -60,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: "onScroll",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-dpozb5-container",
                            transformTemplate: _,
                            children: e(s, {
                              breakpoint: f,
                              overrides: {
                                CjVMdBPrT: {
                                  font: {
                                    font: "Rigid Square Regular",
                                    fontSize: 64,
                                    fontWeight: 400,
                                    letterSpacing: 4,
                                    lineHeight: 1.1,
                                    lineHeightPixels: 100,
                                    lineHeightType: !0,
                                    offset: 0,
                                    textAlign: "center",
                                    whiteSpace: "pre-wrap",
                                  },
                                },
                              },
                              children: e(z, {
                                color:
                                  "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                effectOptions: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  x: 0,
                                  y: 100,
                                },
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 96,
                                  fontWeight: 400,
                                  letterSpacing: 6,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: -4.5,
                                  textAlign: "right",
                                  whiteSpace: "pre-wrap",
                                },
                                height: "100%",
                                id: "N3hGZV7Cn",
                                layoutId: "N3hGZV7Cn",
                                overflow: !1,
                                perWord: !1,
                                stagger: 0.05,
                                style: { width: "100%" },
                                text: "USE",
                                transitionOptions: {
                                  damping: 90,
                                  delay: 0.6,
                                  duration: 2,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stiffness: 400,
                                  type: "spring",
                                },
                                type: "letter",
                                variant: !0,
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        k() &&
                          e(t, {
                            children: e(i, {
                              className:
                                "framer-1k72f41-container hidden-4u7j8y",
                              transformTemplate: er,
                              children: e(ze, {
                                __framer__animateOnce: !1,
                                __framer__obscuredVariantId: "cKtAfc2mS",
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                __framer__visibleVariantId: "BfiNgCzTr",
                                height: "100%",
                                id: "fkF1fscYz",
                                layoutId: "fkF1fscYz",
                                style: { width: "100%" },
                                variant: "cKtAfc2mS",
                                width: "100%",
                              }),
                            }),
                          }),
                        k() &&
                          e(t, {
                            children: e(i, {
                              className:
                                "framer-1r0mqva-container hidden-4u7j8y",
                              children: e(ze, {
                                __framer__animateOnce: !1,
                                __framer__obscuredVariantId: "cKtAfc2mS",
                                __framer__threshold: 0,
                                __framer__variantAppearEffectEnabled: !0,
                                __framer__visibleVariantId: "BfiNgCzTr",
                                height: "100%",
                                id: "RwkW0YTIE",
                                layoutId: "RwkW0YTIE",
                                style: { height: "100%", width: "100%" },
                                variant: "cKtAfc2mS",
                                width: "100%",
                              }),
                            }),
                          }),
                        e("div", {
                          className: "framer-c7er0d",
                          "data-border": !0,
                          "data-framer-name": "Spline",
                          name: "Spline",
                          children: e(t, {
                            children: e(i, {
                              className: "framer-ql0fsf-container",
                              children: e(b, {
                                height: "100%",
                                html: `<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js"><\/script>
<spline-viewer url="https://prod.spline.design/VaECR9yCAvrwf-aH/scene.splinecode"></spline-viewer>`,
                                id: "w0FNdCLJg",
                                layoutId: "w0FNdCLJg",
                                style: { height: "100%", width: "100%" },
                                type: "url",
                                url: "https://my.spline.design/untitled-3d89adb33b1068f2c5c428eea9afe686/",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    e("div", {
                      className: "framer-1rljss4",
                      "data-framer-name": "Title",
                      name: "Title",
                      children: e(t, {
                        children: e(Z, {
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: 0,
                                y: -100,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onScroll",
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-13cpo5t-container",
                          transformTemplate: _,
                          children: e(s, {
                            breakpoint: f,
                            overrides: {
                              CjVMdBPrT: {
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 64,
                                  fontWeight: 400,
                                  letterSpacing: 4,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: 0,
                                  textAlign: "center",
                                  whiteSpace: "pre-wrap",
                                },
                              },
                            },
                            children: e(z, {
                              color:
                                "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                              effectOptions: {
                                opacity: 0,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: 0,
                                y: 100,
                              },
                              font: {
                                font: "Rigid Square Regular",
                                fontSize: 96,
                                fontWeight: 400,
                                letterSpacing: 6,
                                lineHeight: 1.1,
                                lineHeightPixels: 100,
                                lineHeightType: !0,
                                offset: 0,
                                textAlign: "center",
                                whiteSpace: "pre-wrap",
                              },
                              height: "100%",
                              id: "K0kGgfwFc",
                              layoutId: "K0kGgfwFc",
                              overflow: !1,
                              perWord: !1,
                              stagger: 0.05,
                              style: { width: "100%" },
                              text: "PROTON?",
                              transitionOptions: {
                                damping: 90,
                                delay: 0.6,
                                duration: 2,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 400,
                                type: "spring",
                              },
                              type: "letter",
                              variant: !0,
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                    e(s, {
                      breakpoint: f,
                      overrides: {
                        CjVMdBPrT: {
                          background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 186,
                            intrinsicWidth: 3012,
                            pixelHeight: 186,
                            pixelWidth: 3012,
                            positionX: "center",
                            positionY: "center",
                            sizes: "346px",
                            src: "https://framerusercontent.com/images/e7DHZv2wBtsxTnoTPds2TYMKdI.png",
                            srcSet:
                              "https://framerusercontent.com/images/e7DHZv2wBtsxTnoTPds2TYMKdI.png?scale-down-to=512 512w,https://framerusercontent.com/images/e7DHZv2wBtsxTnoTPds2TYMKdI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/e7DHZv2wBtsxTnoTPds2TYMKdI.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/e7DHZv2wBtsxTnoTPds2TYMKdI.png 3012w",
                          },
                        },
                      },
                    }),
                    e(t, {
                      children: e(i, {
                        className: "framer-q7lxcr-container",
                        id: Te,
                        ref: De,
                        children: e(s, {
                          breakpoint: f,
                          overrides: {
                            CjVMdBPrT: {
                              style: { width: "100%" },
                              variant: "xAN8Ejzv1",
                            },
                          },
                          children: e(U, {
                            eAW3DGEn9: "./",
                            height: "100%",
                            Hj7DCPnJa: !1,
                            id: "co1pTjNex",
                            layoutId: "co1pTjNex",
                            MCUefySof: "Proton SDK",
                            tQ1WYjDED: !0,
                            variant: "oNiymr23L",
                            width: "100%",
                            y_K10yxTM: "ArrowRight",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                r("div", {
                  background: {
                    alt: "",
                    fit: "fit",
                    intrinsicHeight: 3781,
                    intrinsicWidth: 5500,
                    pixelHeight: 3781,
                    pixelWidth: 5500,
                    positionX: "center",
                    positionY: "center",
                    src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                  },
                  className: "framer-1byfhfa",
                  "data-framer-name": "Content",
                  id: Fe,
                  name: "Content",
                  ref: Ee,
                  children: [
                    r("div", {
                      className: "framer-1mkxfw3",
                      children: [
                        r("div", {
                          className: "framer-l646rd",
                          "data-framer-name": "Title",
                          name: "Title",
                          children: [
                            e(t, {
                              children: e(i, {
                                className: "framer-1ieqyat-container",
                                children: e(Re, {
                                  __framer__animateOnce: !1,
                                  __framer__obscuredVariantId: "oz5SgFFkh",
                                  __framer__threshold: 0.5,
                                  __framer__variantAppearEffectEnabled: !0,
                                  __framer__visibleVariantId: "ullo7U4po",
                                  height: "100%",
                                  id: "IGtPX5a3_",
                                  layoutId: "IGtPX5a3_",
                                  style: { height: "100%", width: "100%" },
                                  variant: "oz5SgFFkh",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(m, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("h2", {
                                  className: "framer-styles-preset-1wml6uu",
                                  "data-styles-preset": "fVxnimdqP",
                                  children: "Computing on Proton ",
                                }),
                              }),
                              className: "framer-10wks30",
                              "data-framer-name": "Title",
                              fonts: ["Inter"],
                              name: "Title",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            k() &&
                              e("div", {
                                className: "framer-g50vwb hidden-4u7j8y",
                                "data-framer-name": "Line Container",
                                name: "Line Container",
                                children: e(t, {
                                  children: e(i, {
                                    className: "framer-gkltej-container",
                                    children: e(_e, {
                                      __framer__animateOnce: !1,
                                      __framer__obscuredVariantId: "JnoUcnydt",
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      __framer__visibleVariantId: "yN4DNxohH",
                                      height: "100%",
                                      id: "GJdGFr5hr",
                                      layoutId: "GJdGFr5hr",
                                      style: { height: "100%", width: "100%" },
                                      variant: "JnoUcnydt",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        r(C, {
                          className: "framer-erj6m2",
                          "data-framer-name": "Title",
                          name: "Title",
                          children: [
                            e(m, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  className: "framer-styles-preset-21ogod",
                                  "data-styles-preset": "xZndidUCt",
                                  children:
                                    "Despite the incredible power of today\u2019s supercomputers, many complex computing problems cannot be addressed by conventional systems.  Proton solves those problems.",
                                }),
                              }),
                              className: "framer-zxniu8",
                              "data-framer-name":
                                "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                              fonts: ["Inter"],
                              name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(m, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  className: "framer-styles-preset-21ogod",
                                  "data-styles-preset": "xZndidUCt",
                                  children:
                                    "Data growth and the quest for understanding drive the need for new tools. Quantum and n.quantum computing offer innovative solutions to complex problems.",
                                }),
                              }),
                              className: "framer-1f0p33f",
                              "data-framer-name":
                                "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                              fonts: ["Inter"],
                              name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        e("div", {
                          className: "framer-1utzupz",
                          "data-framer-name": "Spline",
                          name: "Spline",
                          children: e(t, {
                            children: e(i, {
                              className: "framer-8qzrzg-container",
                              children: e(b, {
                                height: "100%",
                                html: `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js"><\/script>
<spline-viewer url="https://prod.spline.design/eQvL5LHfkxb7eACU/scene.splinecode"></spline-viewer>`,
                                id: "q8lzzkrVX",
                                layoutId: "q8lzzkrVX",
                                style: { height: "100%", width: "100%" },
                                type: "url",
                                url: "https://my.spline.design/dynexchip-90dd4c664416c5eb079ffc0b51e81931/",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        e(C, {
                          className: "framer-rdxc8w",
                          "data-framer-name": "Content",
                          name: "Content",
                          children: r(a.div, {
                            className: "framer-nxl2a7",
                            children: [
                              r(a.div, {
                                className: "framer-13gu0pl",
                                "data-framer-name": "Quantum",
                                name: "Quantum",
                                children: [
                                  r(a.div, {
                                    className: "framer-1jfx1ok",
                                    "data-framer-name": "Title",
                                    name: "Title",
                                    children: [
                                      r(a.div, {
                                        className: "framer-1m2y5yg",
                                        children: [
                                          r(a.div, {
                                            className: "framer-z8arsx",
                                            "data-framer-name":
                                              "NumberWCorners",
                                            name: "NumberWCorners",
                                            children: [
                                              e(t, {
                                                children: e(i, {
                                                  className:
                                                    "framer-z1f972-container",
                                                  children: e(h, {
                                                    height: "100%",
                                                    id: "m0s9f_mab",
                                                    layoutId: "m0s9f_mab",
                                                    style: {
                                                      height: "100%",
                                                      width: "100%",
                                                    },
                                                    variant: "Dl5vZx6Jj",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                              e(E, {
                                                className: "framer-514ioz",
                                                "data-framer-name": "graphic",
                                                fill: "black",
                                                intrinsicHeight: 48,
                                                intrinsicWidth: 44,
                                                name: "graphic",
                                                svg: '<svg width="44" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.602 12c1.875 3.188.656 7.594-2.625 12.094 3.281 4.406 4.5 8.812 2.625 12-1.5 2.531-4.781 3.843-9 3.843-.844 0-1.781-.093-2.719-.187-2.25 5.063-5.53 8.25-9.093 8.25-3.657 0-6.938-3.188-9.188-8.25-.937.094-1.875.188-2.719.188-4.218 0-7.5-1.313-9-3.938-1.875-3.094-.656-7.5 2.625-12-3.28-4.406-4.5-8.813-2.625-12 1.5-2.531 4.782-3.844 9-3.844.844 0 1.782.094 2.72.188C14.852 3.28 18.132 0 21.79 0c3.562 0 6.843 3.281 9.093 8.344.938-.094 1.875-.188 2.72-.188 4.218 0 7.5 1.313 9 3.844Zm-9-2.344c-.75 0-1.406.094-2.156.094a36.915 36.915 0 0 1 1.875 7.688c2.25 1.687 4.125 3.562 5.719 5.437 2.718-3.844 3.75-7.5 2.343-10.031-1.218-2.063-3.937-3.188-7.78-3.188Zm0 9.938C33.696 21 33.79 22.5 33.79 24c0 1.594-.094 3.094-.188 4.5a40.18 40.18 0 0 0 4.5-4.406 34.001 34.001 0 0 0-4.5-4.5ZM32.29 24c0-1.969-.094-3.938-.375-5.813-1.5-1.125-3.094-2.25-4.875-3.28a88.369 88.369 0 0 0-5.25-2.532 68.837 68.837 0 0 0-5.344 2.531 63.121 63.121 0 0 0-4.875 3.281c-.281 1.875-.375 3.844-.375 5.813 0 2.063.094 4.031.375 5.906a63.121 63.121 0 0 0 4.875 3.282 68.801 68.801 0 0 0 5.344 2.53c1.687-.75 3.468-1.593 5.25-2.624 1.78-.938 3.375-2.063 4.875-3.188.28-1.875.375-3.843.375-5.906Zm-.75-7.875a33.857 33.857 0 0 0-1.594-6.094c-1.969.281-4.125.844-6.188 1.594 1.313.563 2.72 1.219 4.032 2.063a36.896 36.896 0 0 1 3.75 2.437ZM21.79 1.5c-3 0-5.72 2.813-7.594 7.031 2.344.469 4.969 1.125 7.594 2.25 2.53-1.125 5.156-1.781 7.5-2.25-1.875-4.219-4.594-7.031-7.5-7.031Zm-8.25 8.438a37.222 37.222 0 0 0-1.594 6.187 36.896 36.896 0 0 1 3.75-2.438c1.312-.843 2.719-1.5 4.031-2.062a40.713 40.713 0 0 0-6.187-1.688ZM2.196 12.75c-1.5 2.531-.469 6.281 2.25 10.125 1.594-1.875 3.469-3.75 5.719-5.438A36.915 36.915 0 0 1 12.04 9.75c-.75 0-1.407-.094-2.157-.094-3.843 0-6.562 1.125-7.687 3.094ZM9.883 28.5c-.093-1.406-.187-2.906-.187-4.5 0-1.5.094-3 .187-4.5a34.001 34.001 0 0 0-4.5 4.5 34.001 34.001 0 0 0 4.5 4.5Zm0 9.938c.75 0 1.407-.094 2.157-.094a36.914 36.914 0 0 1-1.875-7.688c-2.25-1.687-4.125-3.562-5.72-5.437-2.718 3.843-3.75 7.5-2.25 10.031 1.126 2.063 3.845 3.188 7.688 3.188Zm2.063-6.47a33.82 33.82 0 0 0 1.594 6.095c1.968-.282 4.125-.844 6.187-1.594-1.312-.563-2.719-1.219-4.031-2.063a36.913 36.913 0 0 1-3.75-2.437ZM21.79 46.5c2.906 0 5.625-2.719 7.5-6.938-2.344-.468-4.97-1.124-7.5-2.25a45.514 45.514 0 0 1-7.594 2.25c1.875 4.22 4.594 6.938 7.594 6.938Zm8.156-8.438a33.856 33.856 0 0 0 1.594-6.093c-1.125.843-2.438 1.593-3.75 2.343-1.313.844-2.72 1.5-4.032 2.063a40.713 40.713 0 0 0 6.188 1.688ZM41.29 35.25c1.5-2.531.468-6.188-2.344-10.031-1.594 1.875-3.469 3.75-5.719 5.437a36.908 36.908 0 0 1-1.875 7.688c.75 0 1.5.093 2.156.093 3.844 0 6.563-1.124 7.782-3.187ZM21.79 19.5c2.437 0 4.5 2.063 4.5 4.5 0 2.531-2.063 4.5-4.5 4.5-2.532 0-4.5-1.969-4.5-4.5 0-2.438 1.968-4.5 4.5-4.5Zm0 7.5c1.593 0 3-1.313 3-3 0-1.594-1.407-3-3-3-1.688 0-3.094 1.406-3.094 3 0 1.688 1.406 3 3.094 3Z" fill="#C3C8D0"/></svg>',
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          e(m, {
                                            __fromCanvasComponent: !0,
                                            children: e(n, {
                                              children: e("h4", {
                                                className:
                                                  "framer-styles-preset-11ezvfj",
                                                "data-styles-preset":
                                                  "rrjoIeBSb",
                                                children: "Quantum Computing",
                                              }),
                                            }),
                                            className: "framer-x5pper",
                                            "data-framer-name": "Title",
                                            fonts: ["Inter"],
                                            name: "Title",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      e(m, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Quantum computing is an emerging technology with enormous potential to solve complex problems, because it effectively applies the properties of quantum mechanics, such as superposition and entanglement. However, like any technology, there are disadvantages:",
                                          }),
                                        }),
                                        className: "framer-gmaiih",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  r(a.div, {
                                    className: "framer-18065da",
                                    children: [
                                      r(a.div, {
                                        className: "framer-1y4ulux",
                                        children: [
                                          e(t, {
                                            children: e(i, {
                                              className:
                                                "framer-zdhvyh-container",
                                              children: e(R, {
                                                GOS9P5DB5: "!",
                                                height: "100%",
                                                id: "Yu4ZLtS8S",
                                                layoutId: "Yu4ZLtS8S",
                                                style: {
                                                  height: "100%",
                                                  width: "100%",
                                                },
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                          r(a.div, {
                                            className: "framer-1h6lhef",
                                            children: [
                                              e(m, {
                                                __fromCanvasComponent: !0,
                                                children: e(n, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-1ygrrqz",
                                                    "data-styles-preset":
                                                      "aSqMlk60T",
                                                    style: {
                                                      "--framer-text-color":
                                                        "var(--token-09949e86-ef17-47da-b008-57e8c0de91db, rgb(255, 137, 87))",
                                                    },
                                                    children:
                                                      "Error Correction",
                                                  }),
                                                }),
                                                className: "framer-edue7h",
                                                "data-framer-name":
                                                  "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                fonts: ["Inter"],
                                                name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0,
                                              }),
                                              e(m, {
                                                __fromCanvasComponent: !0,
                                                children: e(n, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-11ut0g7",
                                                    "data-styles-preset":
                                                      "Auy8Lx_6q",
                                                    children:
                                                      "Quantum error correction is challenging due to infinite qubit states of the processor.",
                                                  }),
                                                }),
                                                className: "framer-1smswnq",
                                                "data-framer-name":
                                                  "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                fonts: ["Inter"],
                                                name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      r(a.div, {
                                        className: "framer-1pqy17",
                                        children: [
                                          e(t, {
                                            children: e(i, {
                                              className:
                                                "framer-pndw7f-container",
                                              children: e(R, {
                                                GOS9P5DB5: "!",
                                                height: "100%",
                                                id: "AnEcdKIki",
                                                layoutId: "AnEcdKIki",
                                                style: {
                                                  height: "100%",
                                                  width: "100%",
                                                },
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                          r(a.div, {
                                            className: "framer-lns5j1",
                                            children: [
                                              e(m, {
                                                __fromCanvasComponent: !0,
                                                children: e(n, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-1ygrrqz",
                                                    "data-styles-preset":
                                                      "aSqMlk60T",
                                                    style: {
                                                      "--framer-text-color":
                                                        "var(--token-09949e86-ef17-47da-b008-57e8c0de91db, rgb(255, 137, 87))",
                                                    },
                                                    children:
                                                      "Hardware & Temperature:",
                                                  }),
                                                }),
                                                className: "framer-19s7lmi",
                                                "data-framer-name":
                                                  "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                fonts: ["Inter"],
                                                name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0,
                                              }),
                                              e(m, {
                                                __fromCanvasComponent: !0,
                                                children: e(n, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-11ut0g7",
                                                    "data-styles-preset":
                                                      "Auy8Lx_6q",
                                                    children:
                                                      "Quantum computers require near absolute zero temperatures for stable operation, which is a challenge to maintain.",
                                                  }),
                                                }),
                                                className: "framer-1epyrwt",
                                                "data-framer-name":
                                                  "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                fonts: ["Inter"],
                                                name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      r(a.div, {
                                        className: "framer-1h90u6i",
                                        children: [
                                          e(t, {
                                            children: e(i, {
                                              className:
                                                "framer-184v3cj-container",
                                              children: e(R, {
                                                GOS9P5DB5: "!",
                                                height: "100%",
                                                id: "gUI_rAZZB",
                                                layoutId: "gUI_rAZZB",
                                                style: {
                                                  height: "100%",
                                                  width: "100%",
                                                },
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                          r(a.div, {
                                            className: "framer-auhuih",
                                            children: [
                                              e(m, {
                                                __fromCanvasComponent: !0,
                                                children: e(n, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-1ygrrqz",
                                                    "data-styles-preset":
                                                      "aSqMlk60T",
                                                    style: {
                                                      "--framer-text-color":
                                                        "var(--token-09949e86-ef17-47da-b008-57e8c0de91db, rgb(255, 137, 87))",
                                                    },
                                                    children: "Scaling Issue",
                                                  }),
                                                }),
                                                className: "framer-allj3p",
                                                "data-framer-name":
                                                  "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                fonts: ["Inter"],
                                                name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0,
                                              }),
                                              e(m, {
                                                __fromCanvasComponent: !0,
                                                children: e(n, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-11ut0g7",
                                                    "data-styles-preset":
                                                      "Auy8Lx_6q",
                                                    children:
                                                      "Quantum computers are small compared to classical ones, hindering scaling to hundreds/thousands of qubits with high coherence and low errors.",
                                                  }),
                                                }),
                                                className: "framer-7jv74o",
                                                "data-framer-name":
                                                  "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                fonts: ["Inter"],
                                                name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e(a.div, {
                                className: "framer-g4h8hp",
                                "data-framer-name": "Quantum",
                                name: "Quantum",
                                children: r(a.div, {
                                  className: "framer-1qycsvt",
                                  "data-framer-name": "Title",
                                  name: "Title",
                                  children: [
                                    r(a.div, {
                                      className: "framer-gcl9ed",
                                      "data-framer-name": "Title",
                                      name: "Title",
                                      children: [
                                        r(a.div, {
                                          className: "framer-rr8zi8",
                                          children: [
                                            r(a.div, {
                                              className: "framer-lm6wy",
                                              "data-framer-name":
                                                "NumberWCorners",
                                              name: "NumberWCorners",
                                              children: [
                                                e(t, {
                                                  children: e(i, {
                                                    className:
                                                      "framer-lkfxda-container",
                                                    children: e(h, {
                                                      height: "100%",
                                                      id: "UpgLDGxqQ",
                                                      layoutId: "UpgLDGxqQ",
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                      },
                                                      variant: "Dl5vZx6Jj",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                                e(E, {
                                                  className: "framer-1n8smey",
                                                  "data-framer-name": "graphic",
                                                  layout: "position",
                                                  name: "graphic",
                                                  opacity: 1,
                                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 48"><path d="M 41.042 11.33 C 42.398 12.131 43.246 13.624 43.25 15.248 L 43.25 35.2 C 43.256 36.803 42.419 38.291 41.045 39.117 L 41.04 39.12 L 41.022 39.13 L 40.95 39.173 L 40.674 39.336 L 39.651 39.942 L 36.211 41.977 L 27.67 47.031 C 26.699 47.604 25.448 46.964 25.329 45.789 L 25.319 45.59 L 25.319 16.508 L 24.949 16.29 L 22.382 14.772 L 22 14.546 L 21.618 14.772 L 19.05 16.29 L 18.682 16.508 L 18.682 45.59 L 18.672 45.79 C 18.555 46.968 17.302 47.608 16.331 47.032 L 16.329 47.031 L 7.789 41.979 L 4.349 39.943 L 3.326 39.337 L 3.05 39.173 L 2.979 39.131 L 2.96 39.121 L 2.956 39.117 L 2.955 39.117 L 2.572 39.762 L 2.954 39.117 L 2.953 39.116 C 1.594 38.316 0.75 36.824 0.75 35.2 L 0.75 15.246 C 0.75 13.622 1.595 12.131 2.95 11.33 L 19.805 1.353 C 21.154 0.549 22.836 0.549 24.185 1.353 L 24.186 1.353 Z M 14.817 42.868 L 15.949 43.538 L 15.949 18.124 L 14.817 18.794 L 4.307 25.015 L 4.3 25.019 C 3.796 25.327 3.488 25.875 3.487 26.466 L 3.487 35.196 C 3.487 35.788 3.792 36.34 4.304 36.646 L 4.307 36.647 Z M 3.483 20.918 L 3.483 22.234 L 4.615 21.564 L 21.995 11.277 L 39.368 21.564 L 40.501 22.234 L 40.501 15.246 C 40.501 14.653 40.195 14.102 39.683 13.796 L 39.681 13.795 L 22.825 3.818 C 22.311 3.514 21.673 3.514 21.159 3.818 L 21.158 3.818 L 4.302 13.795 L 4.3 13.796 C 3.792 14.102 3.482 14.653 3.483 15.246 L 3.483 20.919 Z M 39.689 36.652 L 39.691 36.65 C 40.205 36.344 40.509 35.786 40.509 35.2 L 40.509 26.47 C 40.51 25.877 40.199 25.326 39.691 25.02 L 39.689 25.02 L 29.179 18.798 L 28.047 18.128 L 28.047 43.538 L 29.178 42.868 Z" fill="rgb(255,255,255)" stroke-width="1.5" stroke="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                                  svgContentId: 337943393,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            e(m, {
                                              __fromCanvasComponent: !0,
                                              children: e(n, {
                                                children: e("h4", {
                                                  className:
                                                    "framer-styles-preset-11ezvfj",
                                                  "data-styles-preset":
                                                    "rrjoIeBSb",
                                                  children:
                                                    "n.QUANTUM Computing",
                                                }),
                                              }),
                                              className: "framer-2suk7c",
                                              "data-framer-name": "Title",
                                              fonts: ["Inter"],
                                              name: "Title",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        e(m, {
                                          __fromCanvasComponent: !0,
                                          children: e(n, {
                                            children: e("p", {
                                              className:
                                                "framer-styles-preset-11ut0g7",
                                              "data-styles-preset": "Auy8Lx_6q",
                                              children:
                                                "Neuromorphic quantum computing overcomes limitations, operating on traditional hardware with no bit calculation restrictions. They efficiently handle problems with millions of variables. Best part is they do it without having to rely on expensive scientific technologies to resolve problems.",
                                            }),
                                          }),
                                          className: "framer-1vhxiyd",
                                          "data-framer-name":
                                            "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                          fonts: ["Inter"],
                                          name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    r(C, {
                                      className: "framer-1p7yasj",
                                      children: [
                                        r(a.div, {
                                          className: "framer-1gvi53x",
                                          children: [
                                            r(a.div, {
                                              className: "framer-grejlm",
                                              "data-framer-name":
                                                "NumberWCorners",
                                              name: "NumberWCorners",
                                              children: [
                                                e(t, {
                                                  children: e(i, {
                                                    className:
                                                      "framer-ynrh12-container",
                                                    children: e(v, {
                                                      color:
                                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                                      height: "100%",
                                                      iconSearch: "House",
                                                      iconSelection: "Check",
                                                      id: "wK9PIN0jW",
                                                      layoutId: "wK9PIN0jW",
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                      },
                                                      weight: "regular",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                                e(t, {
                                                  children: e(i, {
                                                    className:
                                                      "framer-aewvic-container",
                                                    children: e(h, {
                                                      height: "100%",
                                                      id: "Tw2nSjaQ4",
                                                      layoutId: "Tw2nSjaQ4",
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                      },
                                                      variant: "Dl5vZx6Jj",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            r(a.div, {
                                              className: "framer-1icv6jz",
                                              children: [
                                                e(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(n, {
                                                    children: e("p", {
                                                      className:
                                                        "framer-styles-preset-1ygrrqz",
                                                      "data-styles-preset":
                                                        "aSqMlk60T",
                                                      style: {
                                                        "--framer-text-color":
                                                          "var(--token-abdf8678-0f0a-4e4f-85e9-c710223de2bb, rgb(103, 249, 144))",
                                                      },
                                                      children:
                                                        "Brain-Like Computing",
                                                    }),
                                                  }),
                                                  className: "framer-n18ky7",
                                                  "data-framer-name":
                                                    "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  fonts: ["Inter"],
                                                  name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                                e(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(n, {
                                                    children: e("p", {
                                                      className:
                                                        "framer-styles-preset-11ut0g7",
                                                      "data-styles-preset":
                                                        "Auy8Lx_6q",
                                                      children:
                                                        "Neuromorphic computing is based on gates supporting superposition of input and output signals, long-range correlations and instantonic jumps.",
                                                    }),
                                                  }),
                                                  className: "framer-28w4d",
                                                  "data-framer-name":
                                                    "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  fonts: ["Inter"],
                                                  name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        r(a.div, {
                                          className: "framer-1b219qc",
                                          children: [
                                            r(a.div, {
                                              className: "framer-14f60l8",
                                              "data-framer-name":
                                                "NumberWCorners",
                                              name: "NumberWCorners",
                                              children: [
                                                e(t, {
                                                  children: e(i, {
                                                    className:
                                                      "framer-1pcs393-container",
                                                    children: e(v, {
                                                      color:
                                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                                      height: "100%",
                                                      iconSearch: "House",
                                                      iconSelection: "Check",
                                                      id: "vWJxYJui1",
                                                      layoutId: "vWJxYJui1",
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                      },
                                                      weight: "regular",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                                e(t, {
                                                  children: e(i, {
                                                    className:
                                                      "framer-z867kc-container",
                                                    children: e(h, {
                                                      height: "100%",
                                                      id: "ErIHM78VL",
                                                      layoutId: "ErIHM78VL",
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                      },
                                                      variant: "Dl5vZx6Jj",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            r(a.div, {
                                              className: "framer-1xgwqps",
                                              children: [
                                                e(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(n, {
                                                    children: e("p", {
                                                      className:
                                                        "framer-styles-preset-1ygrrqz",
                                                      "data-styles-preset":
                                                        "aSqMlk60T",
                                                      style: {
                                                        "--framer-text-color":
                                                          "var(--token-abdf8678-0f0a-4e4f-85e9-c710223de2bb, rgb(103, 249, 144))",
                                                      },
                                                      children:
                                                        "Inherent Parallelism",
                                                    }),
                                                  }),
                                                  className: "framer-hp3wtm",
                                                  "data-framer-name":
                                                    "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  fonts: ["Inter"],
                                                  name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                                e(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(n, {
                                                    children: e("p", {
                                                      className:
                                                        "framer-styles-preset-11ut0g7",
                                                      "data-styles-preset":
                                                        "Auy8Lx_6q",
                                                      children:
                                                        "Neuromorphic systems utilize a phenomenon called inherent parallelism that can occupy unlimited coordinates simultaneously.",
                                                    }),
                                                  }),
                                                  className: "framer-s8fmfg",
                                                  "data-framer-name":
                                                    "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  fonts: ["Inter"],
                                                  name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        r(a.div, {
                                          className: "framer-f0bgx2",
                                          children: [
                                            r(a.div, {
                                              className: "framer-5neqji",
                                              "data-framer-name":
                                                "NumberWCorners",
                                              name: "NumberWCorners",
                                              children: [
                                                e(t, {
                                                  children: e(i, {
                                                    className:
                                                      "framer-1hpcv19-container",
                                                    children: e(v, {
                                                      color:
                                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                                      height: "100%",
                                                      iconSearch: "House",
                                                      iconSelection: "Check",
                                                      id: "qXPfLhLnu",
                                                      layoutId: "qXPfLhLnu",
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                      },
                                                      weight: "regular",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                                e(t, {
                                                  children: e(i, {
                                                    className:
                                                      "framer-1h864bl-container",
                                                    children: e(h, {
                                                      height: "100%",
                                                      id: "xILvuD_kV",
                                                      layoutId: "xILvuD_kV",
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                      },
                                                      variant: "Dl5vZx6Jj",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                            r(a.div, {
                                              className: "framer-eeiau8",
                                              children: [
                                                e(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(n, {
                                                    children: e("p", {
                                                      className:
                                                        "framer-styles-preset-1ygrrqz",
                                                      "data-styles-preset":
                                                        "aSqMlk60T",
                                                      style: {
                                                        "--framer-text-color":
                                                          "var(--token-abdf8678-0f0a-4e4f-85e9-c710223de2bb, rgb(103, 249, 144))",
                                                      },
                                                      children:
                                                        "Infinite Scalability",
                                                    }),
                                                  }),
                                                  className: "framer-r2kwy8",
                                                  "data-framer-name":
                                                    "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  fonts: ["Inter"],
                                                  name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                                e(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(n, {
                                                    children: e("p", {
                                                      className:
                                                        "framer-styles-preset-11ut0g7",
                                                      "data-styles-preset":
                                                        "Auy8Lx_6q",
                                                      children:
                                                        "With neuromorphic approach to computing, systems can scale indefinitely, thanks to their multiple simultaneous operation capabilities.",
                                                    }),
                                                  }),
                                                  className: "framer-4i5smp",
                                                  "data-framer-name":
                                                    "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  fonts: ["Inter"],
                                                  name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                                  verticalAlignment: "top",
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    r("div", {
                      className: "framer-1r5ya3a",
                      children: [
                        r("div", {
                          className: "framer-159mptu",
                          "data-framer-name": "Title",
                          name: "Title",
                          children: [
                            e(t, {
                              children: e(i, {
                                className: "framer-1763ejw-container",
                                children: e(Re, {
                                  __framer__animateOnce: !1,
                                  __framer__obscuredVariantId: "oz5SgFFkh",
                                  __framer__threshold: 0.5,
                                  __framer__variantAppearEffectEnabled: !0,
                                  __framer__visibleVariantId: "ullo7U4po",
                                  height: "100%",
                                  id: "FommL8PeB",
                                  layoutId: "FommL8PeB",
                                  style: { height: "100%", width: "100%" },
                                  variant: "oz5SgFFkh",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(s, {
                              breakpoint: f,
                              overrides: {
                                CjVMdBPrT: {
                                  "data-framer-appear-id": "5jk0gw",
                                  animate: w("animate", "5jk0gw", Ne, "4u7j8y"),
                                  initial: w("initial", "5jk0gw", Ce, "4u7j8y"),
                                  transformTemplate: F("5jk0gw", _),
                                },
                              },
                              children: e(m, {
                                __fromCanvasComponent: !0,
                                animate: w("animate", "ex4f2p", Ne, "rhuvsm"),
                                children: e(n, {
                                  children: e("h2", {
                                    className: "framer-styles-preset-1wml6uu",
                                    "data-styles-preset": "fVxnimdqP",
                                    children: "Proton Platform",
                                  }),
                                }),
                                className: "framer-ex4f2p",
                                "data-framer-appear-id": "ex4f2p",
                                "data-framer-name": "Title",
                                exit: rr,
                                fonts: ["Inter"],
                                initial: w("initial", "ex4f2p", Ce, "rhuvsm"),
                                name: "Title",
                                transformTemplate: F("ex4f2p", _),
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e("div", {
                              className: "framer-1axuyja",
                              "data-framer-name": "Line Container",
                              name: "Line Container",
                              children: e(t, {
                                children: e(i, {
                                  className: "framer-1w9qy1n-container",
                                  children: e(_e, {
                                    __framer__animateOnce: !1,
                                    __framer__obscuredVariantId: "JnoUcnydt",
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    __framer__visibleVariantId: "yN4DNxohH",
                                    height: "100%",
                                    id: "uuGvMitac",
                                    layoutId: "uuGvMitac",
                                    style: { height: "100%", width: "100%" },
                                    variant: "JnoUcnydt",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        r(C, {
                          className: "framer-101k6h2",
                          "data-framer-name": "Content",
                          name: "Content",
                          children: [
                            e(a.div, {
                              className: "framer-17i12mv",
                              "data-framer-name": "Left",
                              name: "Left",
                              children: e(m, {
                                __fromCanvasComponent: !0,
                                children: r(n, {
                                  children: [
                                    e("p", {
                                      className: "framer-styles-preset-21ogod",
                                      "data-styles-preset": "xZndidUCt",
                                      children:
                                        "The Proton Platform leverages this dynamics to accelerate and enable new methods for solving discrete optimization, sampling, and machine learning problems. Proton provides neuromorphic powered quantum computing to search for solutions to a problem. n^quantum computing is fundamentally different from classical computing. ",
                                    }),
                                    e("p", {
                                      className: "framer-styles-preset-21ogod",
                                      "data-styles-preset": "xZndidUCt",
                                      children:
                                        "It harnesses the natural tendency of real-world physical systems to find low-energy states. If an optimization problem is analogous to a landscape of peaks and valleys, for instance, each coordinate represents a possible solution and its elevation represents its energy. The best solution is that with the lowest energy corresponding to the lowest point in the deepest valley in the landscape.",
                                    }),
                                  ],
                                }),
                                className: "framer-1bpbw30",
                                "data-framer-name":
                                  "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                fonts: ["Inter"],
                                name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(a.div, {
                              className: "framer-1b1h6i5",
                              "data-framer-name": "Spline",
                              name: "Spline",
                              children: e(t, {
                                children: e(i, {
                                  className: "framer-u1upap-container",
                                  children: e(b, {
                                    height: "100%",
                                    html: "",
                                    id: "DhjoxpLB4",
                                    layoutId: "DhjoxpLB4",
                                    style: { height: "100%", width: "100%" },
                                    type: "url",
                                    url: "https://my.spline.design/twistedsphere6-a0093c7877d91a90343631ff84858121/",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-1cj6bvd",
                  "data-framer-name": "Footer Container",
                  name: "Footer Container",
                  children: e(t, {
                    children: e(i, {
                      className: "framer-y9rr04-container",
                      children: e(s, {
                        breakpoint: f,
                        overrides: { CjVMdBPrT: { variant: "CP4euYBms" } },
                        children: e(H, {
                          height: "100%",
                          id: "lhNyHkySf",
                          layoutId: "lhNyHkySf",
                          style: { width: "100%" },
                          variant: "lKW5sKZWt",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                e(A, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1384,
                    intrinsicWidth: 5104,
                    pixelHeight: 1384,
                    pixelWidth: 5104,
                    sizes: "calc(100vw + 376px)",
                    src: "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png",
                    srcSet:
                      "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=512 512w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png 5104w",
                  },
                  className: "framer-1imzw2w",
                  "data-framer-name": "GradientBG",
                  name: "GradientBG",
                }),
              ],
            }),
            e("div", { className: D(je, ...Y), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  nr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Ie.bodyClassName}-framer-dez0R { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-dez0R.framer-znj37n, .framer-dez0R .framer-znj37n { display: block; }",
    ".framer-dez0R.framer-rhuvsm { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1024px; }",
    ".framer-dez0R .framer-3yv0nv-container { flex: none; height: auto; left: 50%; max-width: 1260px; position: absolute; top: 32px; transform: translateX(-50%); width: 100%; z-index: 10; }",
    ".framer-dez0R .framer-n71a1f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 150px 0px 0px 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-dez0R .framer-1c72bwl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 780px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-dez0R .framer-19mp0v5-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 230px; }",
    ".framer-dez0R .framer-dpozb5-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 245px; }",
    ".framer-dez0R .framer-1k72f41-container { flex: none; height: auto; position: absolute; right: -397px; top: 80px; transform: rotate(-180deg); width: 325px; z-index: 1; }",
    ".framer-dez0R .framer-1r0mqva-container { flex: none; height: 350px; left: -397px; position: absolute; top: -329px; width: 325px; z-index: 1; }",
    ".framer-dez0R .framer-c7er0d { --border-bottom-width: 1px; --border-color: #222222; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 1 / 1; border-bottom-left-radius: 400px; border-bottom-right-radius: 400px; border-top-left-radius: 400px; border-top-right-radius: 400px; bottom: -144px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 50%; mix-blend-mode: lighten; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: -200px; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 450px); will-change: var(--framer-will-change-override, transform); z-index: 3; }",
    ".framer-dez0R .framer-ql0fsf-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; z-index: 1; }",
    ".framer-dez0R .framer-1rljss4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 690px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-dez0R .framer-13cpo5t-container { flex: 1 0 0px; height: auto; position: relative; transform: perspective(1200px); width: 1px; }",
    ".framer-dez0R .framer-m0i773 { flex: none; height: 69px; position: relative; width: 573px; }",
    ".framer-dez0R .framer-q7lxcr-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-dez0R .framer-1byfhfa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 0px 48px 48px 48px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-1mkxfw3, .framer-dez0R .framer-1r5ya3a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-l646rd, .framer-dez0R .framer-159mptu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-dez0R .framer-1ieqyat-container, .framer-dez0R .framer-1763ejw-container { flex: none; height: 350px; left: -369px; position: absolute; top: 16px; width: 325px; z-index: 1; }",
    ".framer-dez0R .framer-10wks30 { flex: none; height: auto; max-width: 550px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-dez0R .framer-g50vwb, .framer-dez0R .framer-1axuyja { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-dez0R .framer-gkltej-container, .framer-dez0R .framer-1w9qy1n-container { flex: none; height: 60px; position: relative; width: 482px; }",
    ".framer-dez0R .framer-erj6m2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 128px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 128px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-dez0R .framer-zxniu8, .framer-dez0R .framer-1f0p33f { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-dez0R .framer-1utzupz { aspect-ratio: 1.6872727272727273 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 550px); overflow: hidden; position: relative; width: 100%; z-index: 2; }",
    ".framer-dez0R .framer-8qzrzg-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 3; }",
    ".framer-dez0R .framer-rdxc8w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-nxl2a7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 128px; height: min-content; justify-content: center; overflow: visible; padding: 36px 0px 128px 0px; position: relative; width: 1px; }",
    ".framer-dez0R .framer-13gu0pl, .framer-dez0R .framer-g4h8hp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-dez0R .framer-1jfx1ok, .framer-dez0R .framer-1qycsvt, .framer-dez0R .framer-gcl9ed { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-1m2y5yg, .framer-dez0R .framer-rr8zi8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-z8arsx, .framer-dez0R .framer-lm6wy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 80px; justify-content: center; overflow: visible; padding: 16px 16px 16px 16px; position: relative; width: 80px; }",
    ".framer-dez0R .framer-z1f972-container, .framer-dez0R .framer-lkfxda-container, .framer-dez0R .framer-aewvic-container, .framer-dez0R .framer-z867kc-container, .framer-dez0R .framer-1h864bl-container { flex: none; height: 100%; position: absolute; right: 0px; top: calc(49.056603773584925% - 100% / 2); width: 100%; z-index: 1; }",
    ".framer-dez0R .framer-514ioz { aspect-ratio: 0.9166666666666666 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); position: relative; width: 44px; }",
    ".framer-dez0R .framer-x5pper, .framer-dez0R .framer-2suk7c { flex: 1 0 0px; height: auto; max-width: 550px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-dez0R .framer-gmaiih, .framer-dez0R .framer-edue7h, .framer-dez0R .framer-1smswnq, .framer-dez0R .framer-19s7lmi, .framer-dez0R .framer-1epyrwt, .framer-dez0R .framer-allj3p, .framer-dez0R .framer-7jv74o, .framer-dez0R .framer-1vhxiyd, .framer-dez0R .framer-n18ky7, .framer-dez0R .framer-28w4d, .framer-dez0R .framer-hp3wtm, .framer-dez0R .framer-s8fmfg, .framer-dez0R .framer-r2kwy8, .framer-dez0R .framer-4i5smp, .framer-dez0R .framer-1bpbw30 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-dez0R .framer-18065da, .framer-dez0R .framer-1p7yasj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-1y4ulux, .framer-dez0R .framer-1pqy17, .framer-dez0R .framer-1h90u6i, .framer-dez0R .framer-1gvi53x, .framer-dez0R .framer-1b219qc, .framer-dez0R .framer-f0bgx2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-zdhvyh-container, .framer-dez0R .framer-pndw7f-container, .framer-dez0R .framer-184v3cj-container { flex: none; height: 56px; position: relative; width: 53px; }",
    ".framer-dez0R .framer-1h6lhef, .framer-dez0R .framer-lns5j1, .framer-dez0R .framer-auhuih, .framer-dez0R .framer-1icv6jz, .framer-dez0R .framer-1xgwqps, .framer-dez0R .framer-eeiau8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-dez0R .framer-1n8smey { flex: none; height: 48px; position: relative; width: 44px; }",
    ".framer-dez0R .framer-grejlm, .framer-dez0R .framer-14f60l8, .framer-dez0R .framer-5neqji { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; overflow: visible; padding: 16px 16px 16px 16px; position: relative; width: 53px; }",
    ".framer-dez0R .framer-ynrh12-container, .framer-dez0R .framer-1pcs393-container, .framer-dez0R .framer-1hpcv19-container { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-dez0R .framer-ex4f2p { flex: none; height: auto; max-width: 550px; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-dez0R .framer-101k6h2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 128px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-17i12mv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 488px; }",
    ".framer-dez0R .framer-1b1h6i5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: 510px; justify-content: center; mix-blend-mode: lighten; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-dez0R .framer-u1upap-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-1cj6bvd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1260px; overflow: hidden; padding: 0px 48px 0px 48px; position: relative; width: 100%; }",
    ".framer-dez0R .framer-y9rr04-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-dez0R .framer-1imzw2w { aspect-ratio: 4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 350px); left: -188px; overflow: hidden; position: absolute; right: -188px; top: 0px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-dez0R.framer-rhuvsm, .framer-dez0R .framer-n71a1f, .framer-dez0R .framer-c7er0d, .framer-dez0R .framer-1rljss4, .framer-dez0R .framer-1byfhfa, .framer-dez0R .framer-1mkxfw3, .framer-dez0R .framer-l646rd, .framer-dez0R .framer-g50vwb, .framer-dez0R .framer-erj6m2, .framer-dez0R .framer-rdxc8w, .framer-dez0R .framer-nxl2a7, .framer-dez0R .framer-13gu0pl, .framer-dez0R .framer-1jfx1ok, .framer-dez0R .framer-1m2y5yg, .framer-dez0R .framer-z8arsx, .framer-dez0R .framer-18065da, .framer-dez0R .framer-1y4ulux, .framer-dez0R .framer-1h6lhef, .framer-dez0R .framer-1pqy17, .framer-dez0R .framer-lns5j1, .framer-dez0R .framer-1h90u6i, .framer-dez0R .framer-auhuih, .framer-dez0R .framer-g4h8hp, .framer-dez0R .framer-1qycsvt, .framer-dez0R .framer-gcl9ed, .framer-dez0R .framer-rr8zi8, .framer-dez0R .framer-lm6wy, .framer-dez0R .framer-1p7yasj, .framer-dez0R .framer-1gvi53x, .framer-dez0R .framer-grejlm, .framer-dez0R .framer-1icv6jz, .framer-dez0R .framer-1b219qc, .framer-dez0R .framer-14f60l8, .framer-dez0R .framer-1xgwqps, .framer-dez0R .framer-f0bgx2, .framer-dez0R .framer-5neqji, .framer-dez0R .framer-eeiau8, .framer-dez0R .framer-1r5ya3a, .framer-dez0R .framer-159mptu, .framer-dez0R .framer-1axuyja, .framer-dez0R .framer-101k6h2, .framer-dez0R .framer-17i12mv, .framer-dez0R .framer-1b1h6i5, .framer-dez0R .framer-1cj6bvd { gap: 0px; } .framer-dez0R.framer-rhuvsm > *, .framer-dez0R .framer-n71a1f > *, .framer-dez0R .framer-1h6lhef > *, .framer-dez0R .framer-lns5j1 > *, .framer-dez0R .framer-auhuih > *, .framer-dez0R .framer-1icv6jz > *, .framer-dez0R .framer-1xgwqps > *, .framer-dez0R .framer-eeiau8 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-dez0R.framer-rhuvsm > :first-child, .framer-dez0R .framer-n71a1f > :first-child, .framer-dez0R .framer-1byfhfa > :first-child, .framer-dez0R .framer-1mkxfw3 > :first-child, .framer-dez0R .framer-13gu0pl > :first-child, .framer-dez0R .framer-1jfx1ok > :first-child, .framer-dez0R .framer-18065da > :first-child, .framer-dez0R .framer-1h6lhef > :first-child, .framer-dez0R .framer-lns5j1 > :first-child, .framer-dez0R .framer-auhuih > :first-child, .framer-dez0R .framer-g4h8hp > :first-child, .framer-dez0R .framer-1qycsvt > :first-child, .framer-dez0R .framer-gcl9ed > :first-child, .framer-dez0R .framer-1p7yasj > :first-child, .framer-dez0R .framer-1icv6jz > :first-child, .framer-dez0R .framer-1xgwqps > :first-child, .framer-dez0R .framer-eeiau8 > :first-child, .framer-dez0R .framer-1r5ya3a > :first-child, .framer-dez0R .framer-17i12mv > :first-child, .framer-dez0R .framer-1b1h6i5 > :first-child { margin-top: 0px; } .framer-dez0R.framer-rhuvsm > :last-child, .framer-dez0R .framer-n71a1f > :last-child, .framer-dez0R .framer-1byfhfa > :last-child, .framer-dez0R .framer-1mkxfw3 > :last-child, .framer-dez0R .framer-13gu0pl > :last-child, .framer-dez0R .framer-1jfx1ok > :last-child, .framer-dez0R .framer-18065da > :last-child, .framer-dez0R .framer-1h6lhef > :last-child, .framer-dez0R .framer-lns5j1 > :last-child, .framer-dez0R .framer-auhuih > :last-child, .framer-dez0R .framer-g4h8hp > :last-child, .framer-dez0R .framer-1qycsvt > :last-child, .framer-dez0R .framer-gcl9ed > :last-child, .framer-dez0R .framer-1p7yasj > :last-child, .framer-dez0R .framer-1icv6jz > :last-child, .framer-dez0R .framer-1xgwqps > :last-child, .framer-dez0R .framer-eeiau8 > :last-child, .framer-dez0R .framer-1r5ya3a > :last-child, .framer-dez0R .framer-17i12mv > :last-child, .framer-dez0R .framer-1b1h6i5 > :last-child { margin-bottom: 0px; } .framer-dez0R .framer-c7er0d > *, .framer-dez0R .framer-g50vwb > *, .framer-dez0R .framer-z8arsx > *, .framer-dez0R .framer-lm6wy > *, .framer-dez0R .framer-grejlm > *, .framer-dez0R .framer-14f60l8 > *, .framer-dez0R .framer-5neqji > *, .framer-dez0R .framer-1axuyja > *, .framer-dez0R .framer-1cj6bvd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-dez0R .framer-c7er0d > :first-child, .framer-dez0R .framer-1rljss4 > :first-child, .framer-dez0R .framer-l646rd > :first-child, .framer-dez0R .framer-g50vwb > :first-child, .framer-dez0R .framer-erj6m2 > :first-child, .framer-dez0R .framer-rdxc8w > :first-child, .framer-dez0R .framer-nxl2a7 > :first-child, .framer-dez0R .framer-1m2y5yg > :first-child, .framer-dez0R .framer-z8arsx > :first-child, .framer-dez0R .framer-1y4ulux > :first-child, .framer-dez0R .framer-1pqy17 > :first-child, .framer-dez0R .framer-1h90u6i > :first-child, .framer-dez0R .framer-rr8zi8 > :first-child, .framer-dez0R .framer-lm6wy > :first-child, .framer-dez0R .framer-1gvi53x > :first-child, .framer-dez0R .framer-grejlm > :first-child, .framer-dez0R .framer-1b219qc > :first-child, .framer-dez0R .framer-14f60l8 > :first-child, .framer-dez0R .framer-f0bgx2 > :first-child, .framer-dez0R .framer-5neqji > :first-child, .framer-dez0R .framer-159mptu > :first-child, .framer-dez0R .framer-1axuyja > :first-child, .framer-dez0R .framer-101k6h2 > :first-child, .framer-dez0R .framer-1cj6bvd > :first-child { margin-left: 0px; } .framer-dez0R .framer-c7er0d > :last-child, .framer-dez0R .framer-1rljss4 > :last-child, .framer-dez0R .framer-l646rd > :last-child, .framer-dez0R .framer-g50vwb > :last-child, .framer-dez0R .framer-erj6m2 > :last-child, .framer-dez0R .framer-rdxc8w > :last-child, .framer-dez0R .framer-nxl2a7 > :last-child, .framer-dez0R .framer-1m2y5yg > :last-child, .framer-dez0R .framer-z8arsx > :last-child, .framer-dez0R .framer-1y4ulux > :last-child, .framer-dez0R .framer-1pqy17 > :last-child, .framer-dez0R .framer-1h90u6i > :last-child, .framer-dez0R .framer-rr8zi8 > :last-child, .framer-dez0R .framer-lm6wy > :last-child, .framer-dez0R .framer-1gvi53x > :last-child, .framer-dez0R .framer-grejlm > :last-child, .framer-dez0R .framer-1b219qc > :last-child, .framer-dez0R .framer-14f60l8 > :last-child, .framer-dez0R .framer-f0bgx2 > :last-child, .framer-dez0R .framer-5neqji > :last-child, .framer-dez0R .framer-159mptu > :last-child, .framer-dez0R .framer-1axuyja > :last-child, .framer-dez0R .framer-101k6h2 > :last-child, .framer-dez0R .framer-1cj6bvd > :last-child { margin-right: 0px; } .framer-dez0R .framer-1rljss4 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-dez0R .framer-1byfhfa > *, .framer-dez0R .framer-17i12mv > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-dez0R .framer-1mkxfw3 > *, .framer-dez0R .framer-13gu0pl > *, .framer-dez0R .framer-1jfx1ok > *, .framer-dez0R .framer-g4h8hp > *, .framer-dez0R .framer-1qycsvt > *, .framer-dez0R .framer-gcl9ed > *, .framer-dez0R .framer-1r5ya3a > *, .framer-dez0R .framer-1b1h6i5 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-dez0R .framer-l646rd > *, .framer-dez0R .framer-rdxc8w > *, .framer-dez0R .framer-159mptu > * { margin: 0px; margin-left: calc(72px / 2); margin-right: calc(72px / 2); } .framer-dez0R .framer-erj6m2 > *, .framer-dez0R .framer-nxl2a7 > *, .framer-dez0R .framer-101k6h2 > * { margin: 0px; margin-left: calc(128px / 2); margin-right: calc(128px / 2); } .framer-dez0R .framer-1m2y5yg > *, .framer-dez0R .framer-rr8zi8 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-dez0R .framer-18065da > *, .framer-dez0R .framer-1p7yasj > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-dez0R .framer-1y4ulux > *, .framer-dez0R .framer-1pqy17 > *, .framer-dez0R .framer-1h90u6i > *, .framer-dez0R .framer-1gvi53x > *, .framer-dez0R .framer-1b219qc > *, .framer-dez0R .framer-f0bgx2 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } }",
    "@media (min-width: 1024px) { .framer-dez0R .hidden-rhuvsm { display: none !important; } }",
    `@media (max-width: 1023px) { .framer-dez0R .hidden-4u7j8y { display: none !important; } .${Ie.bodyClassName}-framer-dez0R { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-dez0R.framer-rhuvsm { width: 374px; } .framer-dez0R .framer-3yv0nv-container { max-width: unset; top: 0px; } .framer-dez0R .framer-n71a1f { height: 80vh; padding: 32px 0px 0px 0px; } .framer-dez0R .framer-1c72bwl { align-content: center; align-items: center; gap: 0px; justify-content: center; padding: 136px 0px 0px 0px; } .framer-dez0R .framer-19mp0v5-container { width: 180px; } .framer-dez0R .framer-dpozb5-container { width: 155px; } .framer-dez0R .framer-c7er0d { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; bottom: unset; height: var(--framer-aspect-ratio-supported, 270px); mix-blend-mode: hard-light; top: -80px; width: 72%; } .framer-dez0R .framer-m0i773 { height: 17px; width: 346px; } .framer-dez0R .framer-q7lxcr-container, .framer-dez0R .framer-17i12mv { width: 100%; } .framer-dez0R .framer-1byfhfa { padding: 0px 24px 48px 24px; } .framer-dez0R .framer-10wks30, .framer-dez0R .framer-1w9qy1n-container { flex: 1 0 0px; width: 1px; } .framer-dez0R .framer-erj6m2 { flex-direction: column; gap: 48px; padding: 0px 0px 48px 0px; } .framer-dez0R .framer-zxniu8, .framer-dez0R .framer-1f0p33f, .framer-dez0R .framer-13gu0pl, .framer-dez0R .framer-x5pper, .framer-dez0R .framer-g4h8hp, .framer-dez0R .framer-2suk7c, .framer-dez0R .framer-1b1h6i5, .framer-dez0R .framer-y9rr04-container { flex: none; width: 100%; } .framer-dez0R .framer-1utzupz { align-content: center; align-items: center; aspect-ratio: unset; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; } .framer-dez0R .framer-8qzrzg-container { height: 255px; left: unset; position: relative; top: unset; } .framer-dez0R .framer-nxl2a7 { flex-direction: column; } .framer-dez0R .framer-1jfx1ok, .framer-dez0R .framer-1qycsvt, .framer-dez0R .framer-gcl9ed { overflow: visible; } .framer-dez0R .framer-1m2y5yg, .framer-dez0R .framer-rr8zi8 { align-content: flex-start; align-items: flex-start; flex-direction: column; justify-content: flex-start; overflow: visible; } .framer-dez0R .framer-159mptu { flex-direction: column; gap: 0px; } .framer-dez0R .framer-1763ejw-container { order: 0; } .framer-dez0R .framer-ex4f2p { order: 2; } .framer-dez0R .framer-1axuyja { flex: none; order: 1; width: 100%; } .framer-dez0R .framer-101k6h2 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; } .framer-dez0R .framer-1cj6bvd { flex-direction: column; padding: 0px 24px 0px 24px; } .framer-dez0R .framer-1imzw2w { height: var(--framer-aspect-ratio-supported, 188px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-dez0R .framer-1c72bwl, .framer-dez0R .framer-erj6m2, .framer-dez0R .framer-1utzupz, .framer-dez0R .framer-nxl2a7, .framer-dez0R .framer-1m2y5yg, .framer-dez0R .framer-rr8zi8, .framer-dez0R .framer-159mptu, .framer-dez0R .framer-101k6h2, .framer-dez0R .framer-1cj6bvd { gap: 0px; } .framer-dez0R .framer-1c72bwl > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-dez0R .framer-1c72bwl > :first-child { margin-left: 0px; } .framer-dez0R .framer-1c72bwl > :last-child { margin-right: 0px; } .framer-dez0R .framer-erj6m2 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-dez0R .framer-erj6m2 > :first-child, .framer-dez0R .framer-1utzupz > :first-child, .framer-dez0R .framer-nxl2a7 > :first-child, .framer-dez0R .framer-1m2y5yg > :first-child, .framer-dez0R .framer-rr8zi8 > :first-child, .framer-dez0R .framer-159mptu > :first-child, .framer-dez0R .framer-101k6h2 > :first-child, .framer-dez0R .framer-1cj6bvd > :first-child { margin-top: 0px; } .framer-dez0R .framer-erj6m2 > :last-child, .framer-dez0R .framer-1utzupz > :last-child, .framer-dez0R .framer-nxl2a7 > :last-child, .framer-dez0R .framer-1m2y5yg > :last-child, .framer-dez0R .framer-rr8zi8 > :last-child, .framer-dez0R .framer-159mptu > :last-child, .framer-dez0R .framer-101k6h2 > :last-child, .framer-dez0R .framer-1cj6bvd > :last-child { margin-bottom: 0px; } .framer-dez0R .framer-1utzupz > *, .framer-dez0R .framer-1cj6bvd > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-dez0R .framer-nxl2a7 > * { margin: 0px; margin-bottom: calc(128px / 2); margin-top: calc(128px / 2); } .framer-dez0R .framer-1m2y5yg > *, .framer-dez0R .framer-rr8zi8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-dez0R .framer-159mptu > *, .framer-dez0R .framer-101k6h2 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }}`,
    ...fe,
    ...be,
    ...pe,
    ...oe,
    ...ge,
    '.framer-dez0R[data-border="true"]::after, .framer-dez0R [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  I = ee(ir, nr, "framer-dez0R"),
  Tr = I;
I.displayName = "Use";
I.defaultProps = { height: 4250, width: 1024 };
ne(
  I,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...Ue,
    ...Be,
    ...He,
    ...Pe,
    ...Ve,
    ...We,
    ...Me,
    ...Ze,
    ...Ge,
    ...Ye,
    ...Ke,
    ...x(de),
    ...x(we),
    ...x(ce),
    ...x(me),
    ...x(xe),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Dr = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Framerk5VRHciV7",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"CjVMdBPrT":{"layout":["fixed","auto"]}}}',
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1024",
        framerDisplayContentsDiv: "false",
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "4250",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Dr as __FramerMetadata__, Tr as default };
//# sourceMappingURL=tNIQPylyZ-4wMlERuikCF_qtQQcQXs6KpTz4YfPZ3JU.RFAC5Z3F.mjs.map
