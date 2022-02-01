(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(6),i=c.n(s),n=(c(13),c(8)),a=c(2),l=c(1),o=(c(14),c(15),c(16),c(0)),r=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(o.jsxs)("div",{className:"content",children:[t.Plot,Object(o.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(r,{movie:e},e.imdbID)}))})},d=c(7),m=c.n(d);c(18);var b=function(e){return t="=".concat(e),fetch("".concat("https://www.omdbapi.com/?apikey=4cadda20&t").concat(t)).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status,"-").concat(e.statusText)))}));var t},u=function(e){var t=e.onAdd,c=Object(l.useState)(""),s=Object(a.a)(c,2),i=s[0],n=s[1],j=Object(l.useState)(null),d=Object(a.a)(j,2),u=d[0],v=d[1],h=Object(l.useState)(!1),O=Object(a.a)(h,2),x=O[0],f=O[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),"True"===(null===u||void 0===u?void 0:u.Response)&&(t(u),n(""))},children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(o.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":x}),value:i,onChange:function(e){n(e.target.value)},onFocus:function(){f(!1)}})]})}),x&&Object(o.jsx)("p",{className:"error",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"button",className:"button is-light",onClick:function(){b(i).then((function(e){"False"===e.Response&&(v(null),f(!0)),v(e)}))},children:"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),"True"===(null===u||void 0===u?void 0:u.Response)&&Object(o.jsx)(r,{movie:u})]})]})},v=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(j,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(u,{onAdd:function(e){-1===c.findIndex((function(t){return t.imdbID===e.imdbID}))&&s([].concat(Object(n.a)(c),[e]))}})})]})};i.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b4a1cc6d.chunk.js.map