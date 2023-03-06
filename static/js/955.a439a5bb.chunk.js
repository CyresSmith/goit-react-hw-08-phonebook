"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[955],{4955:function(n,o,r){r.r(o),r.d(o,{default:function(){return H}});var e,i,t,s,a,c,l,d,u=r(7689),Z=r(2791),f=r(9183),h=r(1607),g=r(6355),p=r(168),m=r(6444),x=r(1087),b=m.ZP.nav(e||(e=(0,p.Z)(["\n  ul {\n    display: flex;\n    align-items: center;\n  }\n\n  li {\n    :not(:last-of-type) {\n      margin-right: ",";\n    }\n\n    :first-of-type {\n      margin-right: ",";\n    }\n  }\n"])),h.Z.space[4],h.Z.space[6]),v=(0,m.ZP)(x.OL)(i||(i=(0,p.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  transition: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: ",";\n  }\n\n  &.active {\n    color: ",";\n    background-color: ",";\n    padding: "," ",";\n    border-radius: ",";\n    box-shadow: ",";\n\n    :hover {\n      color: ",";\n    }\n  }\n\n  :hover {\n    color: ",";\n  }\n"])),h.Z.fontSizes.m,h.Z.fontWeights.regular,h.Z.colors.background,h.Z.transition.primary,h.Z.space[2],h.Z.colors.secondary,h.Z.colors.accent,h.Z.space[1],h.Z.space[3],h.Z.radii.normal,h.Z.shadow.medium,h.Z.colors.secondary,h.Z.colors.accent),j=(0,m.ZP)(x.OL)(t||(t=(0,p.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),h.Z.fontSizes.s,h.Z.fontWeights.bold,h.Z.colors.accent),y=m.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  svg {\n    height: 60px;\n    width: 60px;\n  }\n"]))),w=r(8014),k=r(184),z=function(){return(0,k.jsx)(j,{to:"/",children:(0,k.jsx)(y,{children:(0,k.jsx)(w.Cvl,{})})})},S=r(5048),P=r(6351),C=function(){var n=(0,S.v9)(P.v).token;return(0,k.jsx)(b,{children:(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(z,{})}),(0,k.jsx)("li",{children:(0,k.jsxs)(v,{to:"/",children:[(0,k.jsx)(g.xng,{})," Home"]})}),""!==n&&(0,k.jsx)("li",{children:(0,k.jsxs)(v,{to:"/contacts",children:[(0,k.jsx)(g.I$,{}),"Contacts"]})})]})})},L=r(828),_=r(7425),W=m.ZP.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n\n  li {\n    :not(:last-of-type) {\n      margin-right: ",";\n    }\n  }\n"])),h.Z.space[4]),I=(0,m.ZP)(x.OL)(c||(c=(0,p.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  transition: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: ",";\n  }\n\n  &.active {\n    color: ",";\n    background-color: ",";\n    padding: "," ",";\n    border-radius: ",";\n    box-shadow: ",";\n\n    :hover {\n      color: ",";\n    }\n  }\n\n  :hover {\n    color: ",";\n  }\n"])),h.Z.fontSizes.m,h.Z.fontWeights.regular,h.Z.colors.background,h.Z.transition.primary,h.Z.space[2],h.Z.colors.secondary,h.Z.colors.accent,h.Z.space[1],h.Z.space[3],h.Z.radii.normal,h.Z.shadow.medium,h.Z.colors.secondary,h.Z.colors.accent),E=function(){return(0,k.jsxs)(W,{children:[(0,k.jsx)("li",{children:(0,k.jsxs)(I,{to:"/login",children:[(0,k.jsx)(_.yrM,{}),"Login"]})}),(0,k.jsx)("li",{children:(0,k.jsxs)(I,{to:"/register",children:[(0,k.jsx)(L.BR5,{}),"Registration"]})})]})},N=r(9439),O=r(1686),F=m.ZP.p(l||(l=(0,p.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  margin-right: ",";\n"])),h.Z.fontSizes.m,h.Z.fontWeights.regular,h.Z.colors.accent,h.Z.space[4]),Q=r(3390),R=r(1734),T=r(9176),Y=r(5730),$=r(6491),A=function(){var n=(0,S.I0)(),o=(0,R.Zr)(),r=(0,N.Z)(o,2),e=r[0],i=r[1],t=i.isError,s=i.isLoading,a=i.isSuccess,c=i.error,l=(0,S.v9)(P.v).user;if(a&&(n((0,T.QV)(T.y7)),n($.Rg.util.resetApiState()),(0,Y.ob)(),O.Notify.info("Successfully log out")),t)switch(c.status){case 401:O.Notify.failure("What a shame! User log out error.");break;case 500:O.Notify.failure("What a shame! Some problems with server.");break;default:O.Notify.failure("What a shame! Some problems happend.")}return(0,k.jsxs)(f.Z,{display:"flex",alignItems:"center",children:[(0,k.jsx)(F,{children:null===l||void 0===l?void 0:l.name}),(0,k.jsx)(Q.Z,{isLoading:s,icon:_.Xgw,disabled:!!s,children:"Log out",onClick:e,iconSize:20})]})},K=function(){var n=(0,S.v9)(P.v).token;return(0,k.jsx)(f.Z,{ml:"auto",display:"flex",alignItems:"center",children:""===n?(0,k.jsx)(E,{}):(0,k.jsx)(A,{})})},U=function(){return(0,k.jsx)(f.Z,{as:"header",pt:[4],pb:[4],backgroundColor:h.Z.colors.secondary,children:(0,k.jsxs)(f.Z,{variant:"container",display:"flex",alignItems:"center",children:[(0,k.jsx)(C,{}),(0,k.jsx)(K,{})]})})},q=(0,Z.memo)(U),B=m.ZP.button(d||(d=(0,p.Z)(["\n  position: fixed;\n  bottom: ",";\n  right: ",";\n  display: inline-flex;\n  opacity: 0.7;\n  padding: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  border: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  transition-property: all;\n  transition-duration: 250ms;\n  transition-timing-function: ease-in-out;\n\n  :hover:not(:disabled) {\n    background-color: ",";\n    box-shadow: ",";\n    scale: 1.1;\n    opacity: 1;\n  }\n"])),h.Z.space[6],h.Z.space[6],h.Z.space[3],h.Z.colors.secondary,(function(n){return n.disabled?h.Z.colors.muted:h.Z.colors.accent}),h.Z.borders.none,(function(n){return n.round?h.Z.radii.round:h.Z.radii.normal}),h.Z.shadow.low,h.Z.colors.accent,h.Z.shadow.medium),D=function(n){var o=n.icon,r=void 0===o?null:o,e=n.iconSize,i=n.round,t=(0,Z.useState)(0),s=(0,N.Z)(t,2),a=s[0],c=s[1],l=function(){c(window.scrollY)};return(0,Z.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l)}}),[]),(0,k.jsx)(B,{type:"button","aria-labelledby":"scroll up button",round:i,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{transform:a<300?"translateY(+300%)":"translateY(0)"},children:r&&(0,k.jsx)(r,{size:e})})},G=r(6036),H=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(q,{}),(0,k.jsx)(u.j3,{}),(0,k.jsx)(D,{icon:G.lZx,iconSize:30,round:!0})]})}},9183:function(n,o,r){r.d(o,{Z:function(){return t}});var e=r(6444),i=r(407),t=(0,e.ZP)("div")(i.$_,i.cp,i.Dh,i.bK,i.GQ,i.eC,i.Oq,i.Cg,i.FK,i.AF,(0,i.bU)({variants:{container:{width:"container",ml:"auto",mr:"auto",pl:[5],pr:[5]},section:{pt:[5],pb:[5]}}}))},3390:function(n,o,r){r.d(o,{Z:function(){return h}});var e,i,t,s=r(168),a=r(6444),c=r(1607),l=(0,a.ZP)("button")(e||(e=(0,s.Z)(["\n  display: inline-flex;\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  padding: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  border: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  transition-property: all;\n  transition-duration: 250ms;\n  transition-timing-function: ease-in-out;\n\n  :hover:not(:disabled) {\n    background-color: ",";\n    box-shadow: ",";\n    scale: 1.1;\n  }\n"])),c.Z.fonts.body,c.Z.fontSizes.m,c.Z.fontWeights.regular,c.Z.space[3],c.Z.colors.secondary,(function(n){return n.disabled?c.Z.colors.muted:c.Z.colors.accent}),c.Z.borders.none,c.Z.radii.normal,c.Z.shadow.low,c.Z.colors.accent,c.Z.shadow.medium),d=a.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: spin 1s linear 0s infinite;\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),u=a.ZP.span(t||(t=(0,s.Z)(["\n  margin-left: ",";\n"])),(function(n){return n.isIconThere?c.Z.space[3]:c.Z.space[0]})),Z=r(7692),f=r(184),h=function(n){var o=n.icon,r=void 0===o?null:o,e=n.type,i=void 0===e?"button":e,t=n.disabled,s=void 0!==t&&t,a=n.isLoading,c=void 0!==a&&a,h=n.children,g=n.iconSize,p=n.onClick;return(0,f.jsxs)(l,{type:i,disabled:s,onClick:p,children:[c&&r&&(0,f.jsx)(d,{children:(0,f.jsx)(Z.E$Q,{size:g})}),!c&&r&&(0,f.jsx)(r,{size:g}),(0,f.jsx)(u,{isIconThere:r,children:h})]})}},6351:function(n,o,r){r.d(o,{v:function(){return i},z:function(){return e}});var e=function(n){return n.filter},i=function(n){return n.auth}}}]);
//# sourceMappingURL=955.a439a5bb.chunk.js.map