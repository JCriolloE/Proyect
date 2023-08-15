"use strict";(self.webpackChunkjupyterlab_pygments=self.webpackChunkjupyterlab_pygments||[]).push([[747],{150:(r,o,e)=>{e.d(o,{Z:()=>n});var t=e(645),i=e.n(t)()((function(r){return r[1]}));i.push([r.id,"\n/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n/* This file was auto-generated by generate_css.py in jupyterlab_pygments */\n\n.highlight .hll { background-color: var(--jp-cell-editor-active-background) }\n.highlight { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }\n.highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */\n.highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */\n.highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */\n.highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */\n.highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */\n.highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */\n.highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */\n.highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */\n.highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */\n.highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */\n.highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */\n.highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */\n.highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */\n.highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */\n.highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */\n.highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */\n.highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */\n.highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */\n.highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */\n.highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */\n.highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */\n.highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */\n.highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */\n.highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */\n.highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */\n.highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */\n.highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */\n.highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */\n.highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */\n.highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */\n.highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */\n.highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */\n.highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */\n.highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */\n.highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */\n.highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */\n.highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */\n.highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */\n.highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */\n.highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */",""]);const n=i},645:r=>{r.exports=function(r){var o=[];return o.toString=function(){return this.map((function(o){var e=r(o);return o[2]?"@media ".concat(o[2]," {").concat(e,"}"):e})).join("")},o.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var i={};if(t)for(var n=0;n<this.length;n++){var l=this[n][0];null!=l&&(i[l]=!0)}for(var c=0;c<r.length;c++){var a=[].concat(r[c]);t&&i[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),o.push(a))}},o}},379:(r,o,e)=>{var t,i=function(){var r={};return function(o){if(void 0===r[o]){var e=document.querySelector(o);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[o]=e}return r[o]}}(),n=[];function l(r){for(var o=-1,e=0;e<n.length;e++)if(n[e].identifier===r){o=e;break}return o}function c(r,o){for(var e={},t=[],i=0;i<r.length;i++){var c=r[i],a=o.base?c[0]+o.base:c[0],h=e[a]||0,g="".concat(a," ").concat(h);e[a]=h+1;var d=l(g),s={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(n[d].references++,n[d].updater(s)):n.push({identifier:g,updater:u(s,o),references:1}),t.push(g)}return t}function a(r){var o=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var n=e.nc;n&&(t.nonce=n)}if(Object.keys(t).forEach((function(r){o.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(o);else{var l=i(r.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(o)}return o}var h,g=(h=[],function(r,o){return h[r]=o,h.filter(Boolean).join("\n")});function d(r,o,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=g(o,i);else{var n=document.createTextNode(i),l=r.childNodes;l[o]&&r.removeChild(l[o]),l.length?r.insertBefore(n,l[o]):r.appendChild(n)}}function s(r,o,e){var t=e.css,i=e.media,n=e.sourceMap;if(i?r.setAttribute("media",i):r.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var m=null,p=0;function u(r,o){var e,t,i;if(o.singleton){var n=p++;e=m||(m=a(o)),t=d.bind(null,e,n,!1),i=d.bind(null,e,n,!0)}else e=a(o),t=s.bind(null,e,o),i=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(o){if(o){if(o.css===r.css&&o.media===r.media&&o.sourceMap===r.sourceMap)return;t(r=o)}else i()}}r.exports=function(r,o){(o=o||{}).singleton||"boolean"==typeof o.singleton||(o.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(r=r||[],o);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var i=l(e[t]);n[i].references--}for(var a=c(r,o),h=0;h<e.length;h++){var g=l(e[h]);0===n[g].references&&(n[g].updater(),n.splice(g,1))}e=a}}}},747:(r,o,e)=>{e.r(o);var t=e(379),i=e.n(t),n=e(150);i()(n.Z,{insert:"head",singleton:!1}),n.Z.locals}}]);
