(this.webpackJsonpksiegarnia_redux=this.webpackJsonpksiegarnia_redux||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(6),i=c.n(r),a=c(3),b=(c(23),c(24),c(25),c(26),c(2)),s="ADD_BOOK",l="EDIT_BOOK",d="DELETE_BOOK",u="ADD_COMMENT",j="EDIT_COMMENT",m="DELETE_COMMENT",O=c(0),p=function(e){var t=e.title,c=void 0===t?"":t,o=e.author,r=void 0===o?"":o,i=e.category,d=void 0===i?"":i,u=e.price,j=void 0===u?"":u,m=e.publicYear,p=void 0===m?"":m,h=e.pages,x=void 0===h?"":h,f=e.description,v=void 0===f?"":f,g=e.id_book,k=e.callbackEditBook,_=Object(n.useState)(!1),y=Object(b.a)(_,2),N=y[0],S=y[1],C=function(){return S((function(e){return!e}))},A=Object(n.useState)(c),E=Object(b.a)(A,2),D=E[0],R=E[1],Y=Object(n.useState)(r),M=Object(b.a)(Y,2),T=M[0],B=M[1],P=Object(n.useState)(d),w=Object(b.a)(P,2),I=w[0],J=w[1],K=Object(n.useState)(j),F=Object(b.a)(K,2),L=F[0],z=F[1],q=Object(n.useState)(p),G=Object(b.a)(q,2),H=G[0],Q=G[1],U=Object(n.useState)(x),V=Object(b.a)(U,2),W=V[0],X=V[1],Z=Object(n.useState)(v),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ce=Object(a.b)();return Object(O.jsxs)("div",{className:"form ".concat(N?"active":null),children:[Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:D,author:T,category:I,price:Number(L),publicYear:Number(H),pages:Number(W),description:ee,id_book:g};""===D.trim()||D.length<2?(alert("Title field must be completed!"),R("")):""===T.trim()||T.length<2?(alert("Author field must be completed!"),B("")):""===I.trim()||I.length<2?(alert("Category field must be completed!"),J("")):""===L?(alert("Price field must be completed!"),z("")):""===H||H>(new Date).getFullYear()?(alert("Year field is incorrect!"),Q("")):""===W?(alert("Page field must be completed!"),X("")):""===ee.trim()||ee.length<20?(alert("Description field to short!"),te("")):(ce(g?function(e){var t=e.title,c=e.author,n=e.category,o=e.price,r=e.publicYear,i=e.pages,a=e.id_book,b=e.description;return{type:l,payload:{title:t,author:c,category:n,price:o,publicYear:r,pages:i,description:b,id_book:a}}}(t):function(e){var t=e.title,c=e.author,n=e.category,o=e.price,r=e.publicYear,i=e.pages,a=e.description;return{type:s,payload:{title:t,author:c,category:n,price:o,publicYear:r,pages:i,description:a,id_book:Math.floor(999999*Math.random())}}}(t)),g&&k(),R(""),B(""),J(""),z(""),Q(""),X(""),te(""),C())},children:[Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Title:"}),Object(O.jsx)("input",{id:"focus",onChange:function(e){return R(e.target.value)},type:"text",value:D})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Author:"}),Object(O.jsx)("input",{id:"focus",onChange:function(e){return B(e.target.value)},type:"text",value:T})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Category:"}),Object(O.jsx)("input",{id:"focus",onChange:function(e){return J(e.target.value)},type:"text",value:I})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Price:"}),Object(O.jsx)("input",{id:"focus",onChange:function(e){return z(e.target.value)},type:"number",value:L})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Public Year:"}),Object(O.jsx)("input",{id:"focus",onChange:function(e){return Q(e.target.value)},type:"number",placeholder:"yyyy",value:H})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Pages:"}),Object(O.jsx)("input",{id:"focus",onChange:function(e){return X(e.target.value)},type:"number",value:W})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Description:"}),Object(O.jsx)("textarea",{id:"focus",onChange:function(e){return te(e.target.value)},type:"text",value:ee})]})}),Object(O.jsx)("button",{className:"blue",type:"submit",children:"Add Book"}),C]}),Object(O.jsx)("button",{onClick:C,className:"btnAddForm blue ".concat(N?"active":""),children:"Adding form"})]})},h=c(8),x=c(11),f=c(4),v={books:[],comments:[]},g=function(e,t){var c=e.books.map((function(e){return e.id_comment!==t.id_comment?e:{title:t.title,author:t.author,category:t.category,price:t.price,publicYear:t.publicYear,pages:t.pages,description:t.description,id_book:e.id_book}}));return Object(f.a)(Object(f.a)({},e),{},{books:c})},k=function(e,t){var c=e.comments.map((function(e){return e.id_comment!==t.id_comment?e:{commentAuthor:t.commentAuthor,commentRate:t.commentRate,comment:t.comment,id_book:t.id_book,id_comment:e.id_comment}}));return Object(f.a)(Object(f.a)({},e),{},{comments:c})},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(f.a)(Object(f.a)({},e),{},{books:[].concat(Object(x.a)(e.books),[t.payload])});case d:return{books:e.books.filter((function(e){return e.id_book!==t.payload.id_book})),comments:e.comments.filter((function(e){return e.id_book!==t.payload.id_book}))};case l:return g(e,t.payload);case u:return Object(f.a)(Object(f.a)({},e),{},{comments:[].concat(Object(x.a)(e.comments),[t.payload])});case j:return k(e,t.payload);case m:return Object(f.a)(Object(f.a)({},e),{},{comments:e.comments.filter((function(e){return e.id_comment!==t.payload.id_comment}))});default:return console.warn("missing action type of ".concat(t.type)),e}},y=Object(h.a)({books:_}),N=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},S=Object(h.b)(y,N);S.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(S.getState()))}));var C=S,A=function(e){var t=e.commentAuthor,c=void 0===t?"":t,o=e.commentRate,r=void 0===o?"":o,i=e.comment,s=void 0===i?"":i,l=e.callbackAdd,d=e.callbackEdit,m=e.id_book,p=e.id_comment,h=Object(n.useState)(c),x=Object(b.a)(h,2),f=x[0],v=x[1],g=Object(n.useState)(r),k=Object(b.a)(g,2),_=k[0],y=k[1],N=Object(n.useState)(s),S=Object(b.a)(N,2),C=S[0],A=S[1],E=Object(a.b)();return Object(O.jsx)("div",{className:"form commentRelative",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={commentAuthor:f,commentRate:Number(_),comment:C,id_book:m,id_comment:p};E(p?function(e){var t=e.commentAuthor,c=e.commentRate,n=e.comment,o=e.id_book,r=e.id_comment;return{type:j,payload:{commentAuthor:t,commentRate:c,comment:n,id_book:o,id_comment:r}}}(t):function(e){var t=e.commentAuthor,c=e.commentRate,n=e.comment,o=e.id_book;return{type:u,payload:{commentAuthor:t,commentRate:c,comment:n,id_book:o,id_comment:Math.floor(9999999*Math.random())}}}(t)),p?d():l(),v(""),y(""),A("")},children:[Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Name:"}),Object(O.jsx)("input",{onChange:function(e){return v(e.target.value)},type:"text",value:f})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Rate:"}),Object(O.jsx)("input",{onChange:function(e){return y(e.target.value)},type:"number",value:_})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Comment:"}),Object(O.jsx)("textarea",{onChange:function(e){return A(e.target.value)},type:"text",value:C})]})}),Object(O.jsx)("button",{type:"submit",children:"Public"})]})})},E=function(e){var t=e.commentAuthor,c=e.commentRate,o=e.comment,r=e.id_comment,i=e.id_book,s=Object(n.useState)(!1),l=Object(b.a)(s,2),d=l[0],u=l[1],j=function(){return u((function(e){return!e}))},p=Object(a.b)(),h=d?Object(O.jsx)(A,{commentAuthor:t,commentRate:c,comment:o,callbackEdit:j,id_book:i,id_comment:r}):Object(O.jsxs)("div",{className:"btn-comment",children:[Object(O.jsx)("button",{onClick:j,children:"Edit Comment"}),Object(O.jsx)("button",{onClick:function(){return p(function(e){var t=e.id_comment;return{type:m,payload:{id_comment:t}}}({id_comment:r}))},children:"Delete comment"})]});return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"comment",children:[Object(O.jsxs)("div",{className:"wrap",children:[Object(O.jsx)("p",{children:"Name"}),Object(O.jsx)("h4",{children:t}),Object(O.jsx)("p",{children:"Rate"}),Object(O.jsx)("h4",{children:c})]}),Object(O.jsx)("textarea",{children:o})]}),h]})},D=function(e){var t=e.title,c=e.author,o=e.category,r=e.price,i=e.publicYear,s=e.id_book,l=e.pages,u=e.description,j=Object(n.useState)(!1),m=Object(b.a)(j,2),h=m[0],x=m[1],f=Object(n.useState)(!1),v=Object(b.a)(f,2),g=v[0],k=v[1],_=function(){return x((function(e){return!e}))},y=function(){return k((function(e){return!e}))},N=Object(a.b)(),S=Object(a.c)((function(e){return e.books})),C=S.comments.map((function(e){return Object(O.jsx)(E,{id_book:e.id_book,id_comment:e.id_comment,commentAuthor:e.commentAuthor,commentRate:e.commentRate,comment:e.comment},e.id_comment)})),D=g?Object(O.jsx)(p,{title:t,author:c,category:o,price:r,publicYear:i,pages:l,id_book:s,description:u,callbackEditBook:y}):Object(O.jsxs)("div",{className:"commentBTNs",children:[Object(O.jsx)("button",{className:"blue",onClick:y,children:"Edit Book"}),Object(O.jsx)("button",{className:"red",onClick:function(){return N(function(e){var t=e.id_book;return{type:d,payload:{id_book:t}}}({id_book:s}))},children:"Delete book"}),Object(O.jsxs)("button",{onClick:_,children:[" ",h?"Cancel":"Add comment"]})]});return Object(O.jsxs)("div",{className:"element",children:[Object(O.jsxs)("div",{className:"books",children:[Object(O.jsx)("p",{children:"Title:"}),Object(O.jsx)("h2",{className:"br-5 pad-l-5 bg-input",children:t}),Object(O.jsx)("p",{children:"Author:"}),Object(O.jsx)("h3",{className:"br-5 pad-l-5 bg-input",children:c}),Object(O.jsx)("p",{children:"Category:"}),Object(O.jsx)("h4",{className:"br-5 pad-l-5 bg-input",children:o}),Object(O.jsx)("p",{children:"Price:"}),Object(O.jsx)("h4",{className:"br-5 pad-l-5 bg-input",children:r}),Object(O.jsx)("p",{children:"Public year:"}),Object(O.jsx)("h4",{className:"br-5 pad-l-5 bg-input",children:i}),Object(O.jsx)("p",{children:"Pages:"}),Object(O.jsx)("h4",{className:"br-5 pad-l-5 bg-input",children:l}),Object(O.jsx)("p",{children:"Description:"}),Object(O.jsx)("textarea",{className:"br-5 pad-l-5 bg-input",children:u})]}),Object(O.jsx)("div",{className:"comments",children:C.filter((function(e){return e.props.id_book===s}))}),h?Object(O.jsx)(A,{id_book:s,callbackAdd:_}):null,D]})},R=function(){var e=Object(a.c)((function(e){return e.books})),t=e.books.map((function(e){return Object(O.jsx)(D,Object(f.a)({},e),e.id_book)}));return Object(O.jsx)("div",{children:t})},Y=function(){return Object(O.jsx)(a.a,{store:C,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("h1",{children:"Book corner"})}),Object(O.jsx)(p,{}),Object(O.jsx)(R,{}),Object(O.jsx)("footer",{children:Object(O.jsx)("p",{children:"\xa9 Adam Modzelewski "})})]})})};i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.197e611c.chunk.js.map