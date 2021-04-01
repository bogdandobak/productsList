(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{156:function(e,t,n){},170:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(55),a=n.n(r),u=n(54),i=n(141),o=n(32),s=n(10),j=(n(156),n(193)),l=n(140),d=n(76),b=n(192),h=n(179),p=n(196),O=n(38),m=(n(170),n(5)),f=function(e){var t=e.onDelete,n=e.id,r=Object(c.useState)(!1),a=Object(o.a)(r,2),u=a[0],i=a[1];return Object(m.jsxs)(b.a,{basic:!0,onClose:function(){return i(!1)},onOpen:function(){return i(!0)},open:u,size:"small",trigger:Object(m.jsx)(h.a,{children:"Delete"}),children:[Object(m.jsxs)(p.a,{icon:!0,children:[Object(m.jsx)(O.a,{name:"archive"}),"Delete product"]}),Object(m.jsx)(b.a.Content,{children:Object(m.jsx)("p",{className:"text",children:"Are you sure you want to delete this product?"})}),Object(m.jsxs)(b.a.Actions,{children:[Object(m.jsxs)(h.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return i(!1)},children:[Object(m.jsx)(O.a,{name:"remove"})," ","No"]}),Object(m.jsxs)(h.a,{color:"green",inverted:!0,onClick:function(){t(n),i(!1)},children:[Object(m.jsx)(O.a,{name:"checkmark"})," ","Yes"]})]})]})},x=n(194),g=n(190),v=n(33),w=n.n(v),C=n(80),y="https://60645e8ff0919700177857e1.mockapi.io/",k=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y).concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(C.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/products/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/products"),{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y).concat(t,"/").concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"products/").concat(n,"/").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=Object(d.Route)({productId:d.Route.params.enum()},(function(e){var t=e.productId;return"/".concat(t)}))((function(e){var t=e.productId,n=Object(c.useState)({}),r=Object(o.a)(n,2),a=r[0],u=r[1],i=Object(c.useState)([]),s=Object(o.a)(i,2),j=s[0],d=s[1];return Object(c.useEffect)((function(){D("products",t).then(u)}),[]),Object(c.useEffect)((function(){q("comments",t).then(d)}),[]),Object(m.jsxs)(x.a,{children:[Object(m.jsx)(l.a,{src:a.imageUrl,wrapped:!0,ui:!1}),Object(m.jsxs)(x.a.Content,{children:[Object(m.jsx)(x.a.Header,{children:a.name}),Object(m.jsx)(x.a.Description,{children:j.map((function(e){return Object(m.jsx)("p",{children:e.description},e.id)}))})]}),Object(m.jsx)(g.a,{placeholder:"Add comment"}),Object(m.jsx)(h.a,{children:"Edit"})]})})),P=Object(d.Route)({sortedBy:d.Route.params.enum("none","name","count")},(function(e){var t=e.sortedBy;return"/".concat(t)}))((function(e){var t=e.match.params.sortedBy,n=e.products,r=e.onDelete,a=e.onHandlePage,i=Object(c.useCallback)((function(e){a(e)}),[]);return Object(m.jsx)(j.a,{verticalAlign:"middle",size:"big",children:n&&n.sort((function(e,n){switch(t){case"name":return e.name.localeCompare(n.name);case"count":return e.count-n.count}})).map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.a.Item,{children:[Object(m.jsx)(l.a,{avatar:!0,src:e.imageUrl}),Object(m.jsxs)(j.a.Content,{children:[Object(m.jsx)(j.a.Header,{children:e.name}),Object(m.jsx)(j.a.Description,{children:"Count: ".concat(e.count,", weight: ").concat(e.weight)}),Object(m.jsx)(u.b,{to:B.link({productId:e.id}),onClick:function(){return i(e.id)},children:"Product Description"}),Object(m.jsx)(f,{id:e.id,onDelete:r})]})]},e.id)})}))})})),U=n(85),E=n.n(U),H=(n(176),[{sortedBy:"name",id:E()(),title:"Sorted by name"},{sortedBy:"count",id:E()(),title:"Sorted by count"}]),N=function(){return Object(m.jsx)("ul",{className:"sorters",children:H.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(u.c,{to:P.link({sortedBy:e.sortedBy}),children:Object(m.jsx)(h.a,{children:e.title})})},e.id)}))})},A=n(108),R=n(128),z=n(191),W=function(e){var t=e.onCreate,n=Object(c.useState)(!1),r=Object(o.a)(n,2),a=r[0],u=r[1],i=Object(c.useState)({imageUrl:"",name:"",count:"",width:"",height:"",weight:""}),s=Object(o.a)(i,2),j=s[0],l=s[1],d=Object(c.useCallback)((function(e){var t=e.target,n=t.value,c=t.name;l((function(e){return Object(R.a)(Object(R.a)({},e),{},Object(A.a)({},c,n))}))}),[]),f=Object(c.useCallback)((function(){u(!1),l({imageUrl:"",name:"",count:"",width:"",height:"",weight:""})}),[]);return Object(m.jsxs)(b.a,{onSubmit:function(){return u(!1)},onOpen:function(){return u(!0)},open:a,size:"small",trigger:Object(m.jsx)(h.a,{children:"New Product"}),children:[Object(m.jsxs)(p.a,{icon:!0,children:[Object(m.jsx)(O.a,{name:"server"}),"Create Product"]}),Object(m.jsx)(b.a.Content,{children:Object(m.jsxs)(z.a,{onSubmit:function(e){e.preventDefault();var n=j.imageUrl,c=j.name,r=j.count,a=j.weight,i=j.height,o=j.width;if(n&&c&&r&&a&&i&&o){var s={id:E()(),comments:[],imageUrl:n,name:c,count:r,size:{height:i,width:o},weight:a};t(s),u(!1),l({imageUrl:"",name:"",count:"",width:"",height:"",weight:""})}},children:[Object(m.jsxs)(z.a.Group,{widths:"equal",children:[Object(m.jsx)(z.a.Input,{label:"Image url",placeholder:"Image url",type:"url",name:"imageUrl",value:j.imageUrl,onChange:d,required:!0}),Object(m.jsx)(z.a.Input,{label:"Product name",placeholder:"Product name",type:"text",name:"name",value:j.name,onChange:d,required:!0})]}),Object(m.jsxs)(z.a.Group,{widths:"equal",children:[Object(m.jsx)(z.a.Input,{label:"Count",placeholder:"Count",type:"number",name:"count",value:j.count,onChange:d,required:!0}),Object(m.jsx)(z.a.Input,{label:"Width",placeholder:"Width",type:"number",name:"width",value:j.width,onChange:d,required:!0})]}),Object(m.jsxs)(z.a.Group,{widths:"equal",children:[Object(m.jsx)(z.a.Input,{label:"Height",placeholder:"Height",type:"number",name:"height",value:j.height,onChange:d,required:!0}),Object(m.jsx)(z.a.Input,{label:"Weight",placeholder:"Weight",type:"text",name:"weight",value:j.weight,onChange:d,required:!0})]}),Object(m.jsx)(h.a,{children:"Save"}),Object(m.jsx)(h.a,{onClick:f,children:"Cancel"})]})})]})},G=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),u=Object(o.a)(a,2),j=u[0],l=u[1];Object(c.useEffect)((function(){k("products").then(r)}),[]);var d=Object(c.useCallback)((function(e){I(e),r((function(t){return t.filter((function(t){return t.id!==e}))}))}),[n]),b=Object(c.useCallback)((function(e){S(e),r((function(t){return[].concat(Object(i.a)(t),[e])}))}),[]),h=Object(c.useCallback)((function(e){l(e)}),[j]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Products"}),Object(m.jsx)(N,{}),Object(m.jsx)(W,{onCreate:b}),Object(m.jsxs)(s.Switch,{children:[Object(m.jsx)(P,{products:n,onDelete:d,onHandlePage:h}),Object(m.jsx)(B,{productId:j,products:n}),Object(m.jsx)(s.Redirect,{to:P.link({sortedBy:"none"})})]})]})};n(177);a.a.render(Object(m.jsx)(u.a,{children:Object(m.jsx)(G,{})}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.369bbb64.chunk.js.map