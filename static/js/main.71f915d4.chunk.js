(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{156:function(e,t,n){},170:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(55),a=n.n(r),i=n(54),u=n(111),o=n(16),s=n(10),l=(n(156),n(192)),j=n(141),h=n(80),d=n(191),b=n(194),p=n(196),O=n(50),m=(n(170),n(4)),f=function(e){var t=e.onDelete,n=e.id,r=Object(c.useState)(!1),a=Object(o.a)(r,2),i=a[0],u=a[1];return Object(m.jsxs)(d.a,{basic:!0,onClose:function(){return u(!1)},onOpen:function(){return u(!0)},open:i,size:"small",trigger:Object(m.jsx)(b.a,{children:"Delete"}),children:[Object(m.jsxs)(p.a,{icon:!0,children:[Object(m.jsx)(O.a,{name:"archive"}),"Delete product"]}),Object(m.jsx)(d.a.Content,{children:Object(m.jsx)("p",{className:"text",children:"Are you sure you want to delete this product?"})}),Object(m.jsxs)(d.a.Actions,{children:[Object(m.jsxs)(b.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return u(!1)},children:[Object(m.jsx)(O.a,{name:"remove"})," ","No"]}),Object(m.jsxs)(b.a,{color:"green",inverted:!0,onClick:function(){t(n),u(!1)},children:[Object(m.jsx)(O.a,{name:"checkmark"})," ","Yes"]})]})]})},x=n(193),g=n(189),v=n(19),w=n.n(v),C=n(53),y="https://60645e8ff0919700177857e1.mockapi.io/",k=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y).concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(C.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/products/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(C.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/products"),{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y).concat(t,"/").concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"products/").concat(n,"/").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/products/").concat(n,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/products/").concat(t,"/comments/").concat(n),{method:"DELETE"});case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=n(190),P=n(57),W=n.n(P),B=function(e){var t=e.onCreateComment,n=e.productId,r=Object(c.useState)(!1),a=Object(o.a)(r,2),i=a[0],u=a[1],s=Object(c.useState)(""),l=Object(o.a)(s,2),j=l[0],h=l[1],f=Object(c.useCallback)((function(e){var t=e.target.value;h(t)}),[]),x=Object(c.useCallback)((function(){u(!1),h("")}),[]);return Object(m.jsxs)(d.a,{onSubmit:function(){return u(!1)},onOpen:function(){return u(!0)},open:i,size:"small",trigger:Object(m.jsx)(b.a,{children:"Add Comment"}),children:[Object(m.jsxs)(p.a,{icon:!0,children:[Object(m.jsx)(O.a,{name:"server"}),"Leave your feedback"]}),Object(m.jsx)(d.a.Content,{children:Object(m.jsxs)(E.a,{onSubmit:function(e){if(e.preventDefault(),j){var c={id:W()(),productId:n,description:j,date:new Date};t(c),u(!1),h("")}},children:[Object(m.jsx)(E.a.Group,{widths:"equal",children:Object(m.jsx)(E.a.Input,{label:"Comment",placeholder:"Comment",type:"text",value:j,onChange:f,required:!0})}),Object(m.jsx)(b.a,{children:"Save"}),Object(m.jsx)(b.a,{onClick:x,children:"Cancel"})]})})]})},H=n(71),N=n(83),G=function(e){var t=e.onCreate,n=e.product,r=Object(c.useState)(!1),a=Object(o.a)(r,2),i=a[0],u=a[1],s=Object(c.useState)({imageUrl:n.imageUrl,name:n.name,count:n.count,width:n.size.width,height:n.size.height,weight:n.weight}),l=Object(o.a)(s,2),j=l[0],h=l[1],f=Object(c.useCallback)((function(e){var t=e.target,n=t.value,c=t.name;h((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(H.a)({},c,n))}))}),[]),x=Object(c.useCallback)((function(){u(!1),h({imageUrl:n.imageUrl,name:n.name,count:n.count,width:n.size.width,height:n.size.height,weight:n.weight})}),[]);return Object(m.jsxs)(d.a,{onSubmit:function(){return u(!1)},onOpen:function(){return u(!0)},open:i,size:"small",trigger:Object(m.jsx)(b.a,{children:"Edit Product"}),children:[Object(m.jsxs)(p.a,{icon:!0,children:[Object(m.jsx)(O.a,{name:"server"}),"Edit Product"]}),Object(m.jsx)(d.a.Content,{children:Object(m.jsxs)(E.a,{onSubmit:function(e){e.preventDefault();var c=j.imageUrl,r=j.name,a=j.count,i=j.weight,o=j.height,s=j.width;if(c&&r&&a&&i&&o&&s){var l={id:n.id,imageUrl:c,name:r,count:a,size:{height:o,width:s},weight:i};t(l),u(!1),h({imageUrl:n.imageUrl,name:n.name,count:n.count,width:n.size.width,height:n.size.height,weight:n.weight})}},children:[Object(m.jsxs)(E.a.Group,{widths:"equal",children:[Object(m.jsx)(E.a.Input,{label:"Image url",placeholder:"Image url",type:"url",name:"imageUrl",value:j.imageUrl,onChange:f,required:!0}),Object(m.jsx)(E.a.Input,{label:"Product name",placeholder:"Product name",type:"text",name:"name",value:j.name,onChange:f,required:!0})]}),Object(m.jsxs)(E.a.Group,{widths:"equal",children:[Object(m.jsx)(E.a.Input,{label:"Count",placeholder:"Count",type:"number",name:"count",value:j.count,onChange:f,required:!0}),Object(m.jsx)(E.a.Input,{label:"Width",placeholder:"Width",type:"number",name:"width",value:j.width,onChange:f,required:!0})]}),Object(m.jsxs)(E.a.Group,{widths:"equal",children:[Object(m.jsx)(E.a.Input,{label:"Height",placeholder:"Height",type:"number",name:"height",value:j.height,onChange:f,required:!0}),Object(m.jsx)(E.a.Input,{label:"Weight",placeholder:"Weight",type:"text",name:"weight",value:j.weight,onChange:f,required:!0})]}),Object(m.jsx)(b.a,{children:"Save"}),Object(m.jsx)(b.a,{onClick:x,children:"Cancel"})]})})]})},T=Object(h.Route)({productId:h.Route.params.enum()},(function(e){var t=e.productId;return"/".concat(t)}))((function(e){var t=e.productId,n=Object(c.useState)({}),r=Object(o.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)([]),l=Object(o.a)(s,2),h=l[0],d=l[1],p=Object(c.useState)(!1),O=Object(o.a)(p,2),f=O[0],v=O[1];Object(c.useEffect)((function(){var e=setTimeout((function(){return v(!0)}),3e3);return function(){clearTimeout(e)}}),[]),Object(c.useEffect)((function(){q("products",t).then(i)}),[]),Object(c.useEffect)((function(){U("comments",t).then(d)}),[]),Object(c.useEffect)((function(){i(a)}),[a]);var w=Object(c.useCallback)((function(e){D(e,t),d((function(t){return[].concat(Object(u.a)(t),[e])}))}),[]),C=Object(c.useCallback)((function(e){z(t,e),d((function(t){return t.filter((function(t){return t.id!==e}))}))}),[h]),y=Object(c.useCallback)((function(e){S(t),I(e),i(e)}),[]);return f?Object(m.jsxs)(x.a,{children:[Object(m.jsx)(j.a,{src:a.imageUrl,wrapped:!0,ui:!1}),Object(m.jsxs)(x.a.Content,{children:[Object(m.jsx)(x.a.Header,{children:a.name}),Object(m.jsx)(x.a.Description,{children:"Count: ".concat(a.count,", Width: ").concat(a.size.width,", Height: ").concat(a.size.height,", Weight: ").concat(a.weight," ")}),Object(m.jsx)("p",{children:"Comments:"}),h.length>0&&h.map((function(e){return Object(m.jsxs)(x.a.Description,{children:[Object(m.jsx)("p",{children:e.description}),Object(m.jsx)(b.a,{size:"mini",onClick:function(){return C(e.id)},children:"Delete"})]},e.id)}))]}),Object(m.jsx)(B,{onCreateComment:w,productId:t}),Object(m.jsx)(G,{onCreate:y,product:a})]}):Object(m.jsx)(g.a,{active:!0})})),A=Object(h.Route)({sortedBy:h.Route.params.enum("","name","count")},(function(e){var t=e.sortedBy;return"/".concat(t)}))((function(e){var t=e.match.params.sortedBy,n=e.products,r=e.onDelete,a=e.onHandlePage,u=Object(c.useCallback)((function(e){a(e)}),[]);return Object(m.jsx)("div",{className:"container",children:n&&n.sort((function(e,n){switch(t){case"name":return e.name.localeCompare(n.name);case"count":return e.count-n.count}})).map((function(e){return Object(m.jsx)(l.a,{verticalAlign:"middle",size:"big",children:Object(m.jsxs)(l.a.Item,{children:[Object(m.jsx)(j.a,{avatar:!0,src:e.imageUrl}),Object(m.jsxs)(l.a.Content,{children:[Object(m.jsx)(l.a.Header,{children:e.name}),Object(m.jsx)(l.a.Description,{children:"Count: ".concat(e.count,", weight: ").concat(e.weight)}),Object(m.jsx)(i.b,{to:T.link({productId:e.id}),onClick:function(){return u(e.id)},children:"Product Description"}),Object(m.jsx)(f,{id:e.id,onDelete:r})]})]},e.id)},e.id)}))})})),R=(n(176),[{sortedBy:"name",id:W()(),title:"Sorted by name"},{sortedBy:"count",id:W()(),title:"Sorted by count"}]),J=function(){return Object(m.jsx)("ul",{className:"sorters",children:R.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:A.link({sortedBy:e.sortedBy}),children:Object(m.jsx)(b.a,{children:e.title})})},e.id)}))})},L=function(e){var t=e.onCreate,n=Object(c.useState)(!1),r=Object(o.a)(n,2),a=r[0],i=r[1],u=Object(c.useState)({imageUrl:"",name:"",count:"",width:"",height:"",weight:""}),s=Object(o.a)(u,2),l=s[0],j=s[1],h=Object(c.useCallback)((function(e){var t=e.target,n=t.value,c=t.name;j((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(H.a)({},c,n))}))}),[]),f=Object(c.useCallback)((function(){i(!1),j({imageUrl:"",name:"",count:"",width:"",height:"",weight:""})}),[]);return Object(m.jsxs)(d.a,{onSubmit:function(){return i(!1)},onOpen:function(){return i(!0)},open:a,size:"small",trigger:Object(m.jsx)(b.a,{children:"New Product"}),children:[Object(m.jsxs)(p.a,{icon:!0,children:[Object(m.jsx)(O.a,{name:"server"}),"Create Product"]}),Object(m.jsx)(d.a.Content,{children:Object(m.jsxs)(E.a,{onSubmit:function(e){e.preventDefault();var n=l.imageUrl,c=l.name,r=l.count,a=l.weight,u=l.height,o=l.width;if(n&&c&&r&&a&&u&&o){var s={id:W()(),imageUrl:n,name:c,count:r,size:{height:u,width:o},weight:a};t(s),i(!1),j({imageUrl:"",name:"",count:"",width:"",height:"",weight:""})}},children:[Object(m.jsxs)(E.a.Group,{widths:"equal",children:[Object(m.jsx)(E.a.Input,{label:"Image url",placeholder:"Image url",type:"url",name:"imageUrl",value:l.imageUrl,onChange:h,required:!0}),Object(m.jsx)(E.a.Input,{label:"Product name",placeholder:"Product name",type:"text",name:"name",value:l.name,onChange:h,required:!0})]}),Object(m.jsxs)(E.a.Group,{widths:"equal",children:[Object(m.jsx)(E.a.Input,{label:"Count",placeholder:"Count",type:"number",name:"count",value:l.count,onChange:h,required:!0}),Object(m.jsx)(E.a.Input,{label:"Width",placeholder:"Width",type:"number",name:"width",value:l.width,onChange:h,required:!0})]}),Object(m.jsxs)(E.a.Group,{widths:"equal",children:[Object(m.jsx)(E.a.Input,{label:"Height",placeholder:"Height",type:"number",name:"height",value:l.height,onChange:h,required:!0}),Object(m.jsx)(E.a.Input,{label:"Weight",placeholder:"Weight",type:"text",name:"weight",value:l.weight,onChange:h,required:!0})]}),Object(m.jsx)(b.a,{children:"Save"}),Object(m.jsx)(b.a,{onClick:f,children:"Cancel"})]})})]})},Y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(o.a)(a,2),l=i[0],j=i[1];Object(c.useEffect)((function(){k("products").then(r)}),[]);var h=Object(c.useCallback)((function(e){S(e),r((function(t){return t.filter((function(t){return t.id!==e}))}))}),[n]),d=Object(c.useCallback)((function(e){I(e),r((function(t){return[].concat(Object(u.a)(t),[e])}))}),[]),b=Object(c.useCallback)((function(e){j(e)}),[l]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Products"}),Object(m.jsx)(J,{}),Object(m.jsx)(L,{onCreate:d}),Object(m.jsxs)(s.Switch,{children:[Object(m.jsx)(A,{products:n,onDelete:h,onHandlePage:b}),Object(m.jsx)(T,{productId:l,products:n}),Object(m.jsx)(s.Redirect,{to:A.link({sortedBy:""})})]})]})};n(177);a.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(Y,{})}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.71f915d4.chunk.js.map