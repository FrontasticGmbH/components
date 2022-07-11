"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var typography_1 = require("components/commercetools-ui/typography");
var reference_1 = require("helpers/reference");
var image_1 = require("frontastic/lib/image");
var Tile = function (_a) {
    var image = _a.image, title = _a.title, _b = _a.titleColor, titleColor = _b === void 0 ? 'text-black' : _b, _c = _a.titleFont, titleFont = _c === void 0 ? 'font-sans' : _c, subtitle = _a.subtitle, _d = _a.subtitleColor, subtitleColor = _d === void 0 ? 'text-black' : _d, _e = _a.subtitleFont, subtitleFont = _e === void 0 ? 'font-sans' : _e, ctaLabel = _a.ctaLabel, ctaReference = _a.ctaReference;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "relative flex justify-center overflow-hidden p-2 align-middle" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "w-full" }, { children: jsx_runtime_1.jsx(image_1["default"], { media: image, className: "opacity-70 md:opacity-100", alt: title }, void 0) }), void 0), jsx_runtime_1.jsxs("div", __assign({ className: "absolute top-1/2 flex max-w-md -translate-y-1/2 flex-col justify-center text-center md:left-10 md:max-w-xl md:text-left" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "text-md mb-2 md:font-medium " + subtitleFont + " " + subtitleColor }, { children: jsx_runtime_1.jsx(typography_1["default"], { children: subtitle }, void 0) }), void 0), jsx_runtime_1.jsx("h2", __assign({ className: "w-full whitespace-pre-line px-10 text-center text-5xl font-extrabold " + titleFont + " tracking-tight " + titleColor + " sm:px-0 md:w-60 md:text-left md:text-4xl lg:text-5xl" }, { children: jsx_runtime_1.jsx(typography_1["default"], { children: title }, void 0) }), void 0), ctaLabel && ctaReference && (jsx_runtime_1.jsx("div", __assign({ className: "flex w-full justify-center md:justify-start" }, { children: jsx_runtime_1.jsx(reference_1.ReferenceLink, __assign({ target: ctaReference, className: " mt-8 w-72 rounded-md border border-transparent bg-accent-400 py-2 px-4 text-center text-base font-semibold text-white hover:bg-accent-500 md:w-fit" }, { children: jsx_runtime_1.jsx(typography_1["default"], { children: ctaLabel }, void 0) }), void 0) }), void 0))] }), void 0)] }), void 0));
};
exports["default"] = Tile;
