(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(6),n=c.n(s),i=c(2),l=c(1),o=(c(13),c(14),c(8)),r=c(7),a=c.n(r),d=(c(15),c(0)),u=function(e){var t=e.todos,c=e.selectUserId,s=Object(l.useState)(""),n=Object(i.a)(s,2),r=n[0],u=n[1],j=Object(l.useState)("all"),b=Object(i.a)(j,2),h=b[0],O=b[1],m=Object(o.a)(t).filter((function(e){return e.title.includes(r)}));return"completed"===h?m=m.filter((function(e){return!0===e.completed})):"active"===h&&(m=m.filter((function(e){return!1===e.completed}))),Object(d.jsxs)("div",{className:"TodoList",children:[Object(d.jsxs)("h2",{className:"title is-2",children:[Object(d.jsxs)("label",{htmlFor:"input",className:"TodoList__header-input",children:[Object(d.jsx)("p",{children:"Search todos"}),Object(d.jsx)("input",{id:"input",type:"text",className:"input",placeholder:"Write a title here",value:r,onChange:function(e){u(e.target.value)}})]}),Object(d.jsxs)("label",{htmlFor:"select",className:"TodoList__header-select",children:[Object(d.jsx)("p",{children:"Select state of todos"}),Object(d.jsxs)("select",{id:"select",className:"select is-fullwidth mt-3 mb-5",value:h,onChange:function(e){O(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})]})]}),Object(d.jsx)("h2",{children:"Todos:"}),Object(d.jsx)("div",{className:"TodoList__list-container",children:Object(d.jsx)("ul",{className:"TodoList__list",children:m.map((function(e){return Object(d.jsxs)("li",{className:a()({TodoList__item:!0,"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(d.jsxs)("label",{htmlFor:"checkbox",children:[Object(d.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0,id:"checkbox"}),Object(d.jsx)("p",{children:e.title})]}),Object(d.jsxs)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return c(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})})]})},j="https://mate.academy/students-api/";c(17);var b=function(e){var t=e.userId,c=e.clearId,s=Object(l.useState)(null),n=Object(i.a)(s,2),o=n[0],r=n[1];return Object(l.useEffect)((function(){(function(e){return fetch("".concat(j,"/users/").concat(e)).then((function(e){return e.json()}))})(t).then((function(e){return r(e)}))}),[t]),Object(d.jsxs)("div",{className:"CurrentUser",children:[Object(d.jsx)("h2",{className:"CurrentUser__title",children:Object(d.jsxs)("span",{children:["Selected User:\xa0",t]})}),Object(d.jsx)("h3",{className:"CurrentUser__name",children:null===o||void 0===o?void 0:o.name}),Object(d.jsx)("p",{className:"CurrentUser__email",children:null===o||void 0===o?void 0:o.email}),Object(d.jsx)("p",{className:"CurrentUser__phone",children:null===o||void 0===o?void 0:o.phone}),Object(d.jsx)("button",{type:"button",className:"button is-info is-fullwidth mt-5",onClick:function(){c(0)},children:"Clear"})]})},h=function(){var e=Object(l.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(l.useState)([]),o=Object(i.a)(n,2),r=o[0],a=o[1],h=Object(l.useState)(!1),O=Object(i.a)(h,2),m=O[0],p=O[1],f=Object(l.useState)(!1),x=Object(i.a)(f,2),_=x[0],v=x[1];return Object(l.useEffect)((function(){fetch("".concat(j,"/todos")).then((function(e){return e.json()})).then(a).then((function(){return v(!0)})).catch((function(){p(!0)}))}),[]),Object(d.jsx)("div",{className:"App",children:m?Object(d.jsx)("p",{children:"Data is not found"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"App__sidebar",children:_?Object(d.jsx)(u,{todos:r,selectUserId:s}):Object(d.jsx)("p",{children:"Loading..."})}),Object(d.jsx)("div",{className:"App__content",children:Object(d.jsx)("div",{className:"App__content-container",children:c?Object(d.jsx)(b,{userId:c,clearId:s}):"No user selected"})})]})})};n.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.16a75a11.chunk.js.map