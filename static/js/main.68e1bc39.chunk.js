(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{40:function(e,n,t){e.exports=t.p+"static/media/axell.f7079923.png"},45:function(e,n,t){e.exports=t(61)},53:function(e,n,t){var a={"./en-us.json":[63,3],"./pt-br.json":[64,4]};function r(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],r=n[0];return t.e(n[1]).then((function(){return t.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=53,e.exports=r},59:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(35),c=t.n(i),l=t(27),o=t(13),s=t(7),m=t(8),u=t(16),d=t.n(u),p=t(21),f=t(42),g=t(2),b=t(66),h=t(43);function E(){var e=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"]);return E=function(){return e},e}var x=m.a.div(E(),(function(e){return e.backgroundColor||"rgba(255, 255, 255, 0.5)"})),v=function(e){var n=e.children,t=e.backgroundColor;return(r.a.createElement(x,{backgroundColor:t},n))};function k(){var e=Object(s.a)(["\n  @-webkit-keyframes load3 {\n    ","\n  }\n\n  @keyframes load3 {\n    ","\n  }\n\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: gray;\n  background: -moz-linear-gradient(",");\n  background: -webkit-linear-gradient(",");\n  background: -o-linear-gradient(",");\n  background: -ms-linear-gradient(",");\n  background: linear-gradient(to right, ",');\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n\n  :before {\n    width: 50%;\n    height: 50%;\n    background: gray;\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: "";\n  }\n\n  :after {\n    background: white;\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: "";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n']);return k=function(){return e},e}var w="\n  gray 10%,\n  rgba(128, 128, 128, 0) 42%\n",j="\n  left,\n  ".concat(w,"\n"),N="\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n",y=m.a.div(k(),N,N,j,j,j,j,w),O=function(e){var n=e.backgroundColor;return(r.a.createElement(v,{backgroundColor:n},r.a.createElement(y,null)))},F=t(4),C=Object(F.b)();function I(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(e).reduce((function(t,a){var r=e[a],i=n?"".concat(n,".").concat(a):a;return"string"===typeof r?t[i]=r:Object.assign(t,I(r,i)),t}),{})}var L={getOne:function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(53)("./".concat(n,".json"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},D={"pt-br":{locale:"pt-br",name:"Portugu\xeas"},"en-us":{locale:"en-us",name:"English"}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.location.pathname;return e.split("/")},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.location.pathname;return M(e)[1]},A=D["en-us"],S=Object(g.c)(),U=Object(b.a)({locale:A.locale,messages:{}},S),G=U.formatMessage,H=function(e){var n=e.children,t=Object(a.useState)(!0),i=Object(f.a)(t,2),c=i[0],l=i[1],o=Object(a.useState)(T()),s=o[0].toLowerCase(),m=o[1];return Object(a.useEffect)((function(){return C.listen((function(e){return m(T(e.pathname))}))}),[m]),function(e){return e in D}(s)||function(e){var n=M();n[1]=e,C.replace(n.join("/"))}(A.locale),Object(a.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),!s){e.next=12;break}return e.t0=I,e.next=5,L.getOne(s);case 5:e.t1=e.sent,n=(0,e.t0)(e.t1),U=Object(b.a)({locale:s,messages:n},S),G=U.formatMessage,setTimeout((function(){l(!1)}),1e3),document.documentElement.lang=s,document.title=G({id:"title"});case 12:case"end":return e.stop()}}),e)})))()}),[s]),c?r.a.createElement(O,null):r.a.createElement(h.a,{value:U},n)};function W(){var e=Object(s.a)(["\n  display: inline-block;\n\n  :not(:first-child) {\n    margin-left: 40px;\n  }\n"]);return W=function(){return e},e}function B(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return B=function(){return e},e}var P=m.a.ul(B()),R=m.a.li(W()),Z=function(){return r.a.createElement(P,null,Object.values(D).map((function(e){return r.a.createElement(R,{key:e.locale},r.a.createElement(l.b,{to:"/".concat(e.locale)},e.name))})))},z=t(40),J=t.n(z),_=function(){return r.a.createElement("section",{className:"presentation-section"},r.a.createElement("div",{className:"presentation container row"},r.a.createElement("div",{className:"name col-sm"},r.a.createElement("img",{src:J.a,alt:"Me",className:"photo"}),r.a.createElement("h2",null,"Axell Brendow Batista Moreira")),r.a.createElement("div",{className:"about-me col-sm"},r.a.createElement("h3",null,G({id:"presentation.aboutMe"})),r.a.createElement("p",null,G({id:"presentation.aboutMeValue"})))),r.a.createElement(Z,null))},q=[{classNameLi:"email",iconType:"fas",iconName:"envelope",anchorHref:"mailto:breno.axel@gmail.com",anchorChildren:" breno.axel@gmail.com"},{classNameLi:"phone",iconType:"fas",iconName:"mobile-alt",anchorHref:"tel:+5531989575463",anchorChildren:" 31 98957-5463"},{classNameLi:"linkedin",iconType:"fab",iconName:"linkedin-in",anchorHref:"https://www.linkedin.com/in/axell-brendow/",anchorChildren:" axell-brendow"},{classNameLi:"github",iconType:"fab",iconName:"github-square",anchorHref:"https://github.com/axell-brendow",anchorChildren:" axell-brendow"}],V=function(e){var n=e.classNameLi,t=e.iconType,a=e.iconName,i=e.anchorHref,c=e.anchorChildren;return(r.a.createElement("li",{key:n,className:"".concat(n," col-sm-6 col-md")},r.a.createElement("i",{className:"".concat(t," fa-").concat(a)}),r.a.createElement("a",{href:i},c)))},K=function(){return r.a.createElement("section",{className:"contact-section"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-address-card"})," ",G({id:"contacts.title"})),r.a.createElement("ul",{className:"informations row mt-4"},q.map(V)))},Q=t(41),X=t.n(Q),Y=function(e){var n=e.period,t=e.name,a=e.description;return(r.a.createElement("li",{key:"string"===typeof t?t:X.a.renderToString(t),className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("strong",{className:"period"},n)),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("p",{className:"name"},r.a.createElement("strong",null,t)),r.a.createElement("p",{className:"description"},a))))},$=function(e){var n=e.title,t=e.titleIconClass,a=e.items;return(r.a.createElement("div",{key:t,className:"col-sm-6"},r.a.createElement("h3",{className:"title"},r.a.createElement("i",{className:"fas fa-".concat(t)})," ",n),r.a.createElement("ul",null,a.map(Y))))},ee=function(){return r.a.createElement("section",{className:"experiences-section"},r.a.createElement("div",{className:"row"},[{title:G({id:"experiences.formation.title"}),titleIconClass:"graduation-cap",items:[{period:G({id:"experiences.formation.graduation.period"}),name:G({id:"experiences.formation.graduation.name"}),description:G({id:"experiences.formation.graduation.description"})},{period:G({id:"experiences.formation.frontEndDev.period"}),name:r.a.createElement("a",{href:"https://cursos.alura.com.br/user/axell-b/career/desenvolvedor-front-end/certificate"},G({id:"experiences.formation.frontEndDev.name"})),description:r.a.createElement(r.a.Fragment,null,G({id:"experiences.formation.frontEndDev.description"})," ",r.a.createElement("a",{href:"https://cursos.alura.com.br/user/axell-b"},"Alura"))},{period:G({id:"experiences.formation.levelUp.period"}),name:r.a.createElement("a",{href:"https://icei.pucminas.br/levelup/"},G({id:"experiences.formation.levelUp.name"})),description:r.a.createElement(r.a.Fragment,null,G({id:"experiences.formation.levelUp.description"}))},{period:G({id:"experiences.formation.basicEnglish.period"}),name:G({id:"experiences.formation.basicEnglish.name"}),description:G({id:"experiences.formation.basicEnglish.description"})}]},{titleIconClass:"folder",title:G({id:"experiences.projects.title"}),items:[{period:r.a.createElement(r.a.Fragment,null,G({id:"experiences.projects.omnistack10.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/axell-brendow/SemanaOmnistack10"},G({id:"experiences.projects.omnistack10.name"}))),description:r.a.createElement(r.a.Fragment,null,G({id:"experiences.projects.omnistack10.description"})," ",r.a.createElement("a",{href:"https://rocketseat.com.br/week-10/inscricao"},G({id:"experiences.projects.omnistack10.description2"}))," ",G({id:"experiences.projects.omnistack10.description3"})," ",r.a.createElement("a",{href:"https://rocketseat.com.br/"},"Rocketseat"),"."," ",G({id:"experiences.projects.omnistack10.description4"})," ",r.a.createElement("a",{href:"https://www.linkedin.com/feed/update/urn:li:activity:6624636245584818176/"},G({id:"experiences.projects.omnistack10.description5"})),".")},{period:r.a.createElement(r.a.Fragment,null,G({id:"experiences.projects.starWarsApp.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/axell-brendow/StarWarsApp"},G({id:"experiences.projects.starWarsApp.name"}))),description:r.a.createElement(r.a.Fragment,null,G({id:"experiences.projects.starWarsApp.description"})," ",r.a.createElement("a",{href:"https://icei.pucminas.br/levelup/"},"Level Up")," ",G({id:"experiences.projects.starWarsApp.description2"}))},{period:r.a.createElement(r.a.Fragment,null,G({id:"experiences.projects.machineLearningGame.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://scratch.mit.edu/projects/300708903/"},G({id:"experiences.projects.machineLearningGame.name"}))),description:r.a.createElement(r.a.Fragment,null,G({id:"experiences.projects.machineLearningGame.description"})," ",r.a.createElement("a",{href:"https://scratch.mit.edu/projects/313216273/"},G({id:"experiences.projects.machineLearningGame.description2"}))," ",G({id:"experiences.projects.machineLearningGame.description3"}))}]},{titleIconClass:"building",title:G({id:"experiences.experiences.title"}),items:[{period:r.a.createElement(r.a.Fragment,null,G({id:"experiences.experiences.webDevIntern.period"}),r.a.createElement("br",null),G({id:"experiences.experiences.webDevIntern.period2"})),name:r.a.createElement(r.a.Fragment,null,G({id:"experiences.experiences.webDevIntern.name"})),description:r.a.createElement(r.a.Fragment,null,G({id:"experiences.experiences.webDevIntern.description"}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://crc.pucminas.br/"},G({id:"experiences.experiences.webDevIntern.description2"}))," ","- PUC Minas")}]},{titleIconClass:"laptop",title:G({id:"experiences.interests.title"}),items:[{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,G({id:"experiences.interests.softwareEngineering.name"})),description:r.a.createElement(r.a.Fragment,null,G({id:"experiences.interests.softwareEngineering.description"}))},{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,G({id:"experiences.interests.artificialIntelligence.name"})),description:r.a.createElement(r.a.Fragment,null,G({id:"experiences.interests.artificialIntelligence.description"}))}]}].map($)))},ne=function(e){var n=e.width,t=e.name;return(r.a.createElement("li",{key:t},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(n,"%")},"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100},t))))},te=function(e){var n=e.title,t=e.items;return(r.a.createElement("div",{key:n,className:"col-sm"},r.a.createElement("h3",null,n),r.a.createElement("ul",null,t.map(ne))))},ae=function(){return r.a.createElement("section",{className:"abilities-section"},r.a.createElement("div",{className:"row"},[{title:G({id:"abilities.skills.title"}),items:[{width:90,name:G({id:"abilities.skills.css"})},{width:90,name:G({id:"abilities.skills.javaScript"})},{width:55,name:G({id:"abilities.skills.php"})},{width:55,name:G({id:"abilities.skills.docker"})}]},{title:G({id:"abilities.languages.title"}),items:[{width:70,name:G({id:"abilities.languages.english"})},{width:90,name:G({id:"abilities.languages.portuguese"})}]}].map(te)))};function re(){var e=Object(s.a)(["\n  & {\n    display: inline-block;\n    border-radius: 50%;\n    border: 10px solid #00d8ff;\n\n    animation-name: rotate;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n\n  &,\n  &:before,\n  &:after {\n    position: absolute;\n    display: inline-block;\n    width: 20px;\n    height: ",';\n    border-radius: 50%;\n    border: 2px solid #00d8ff;\n  }\n\n  .nucleo,\n  &,\n  &:before,\n  &:after {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .nucleo {\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n    background: #00d8ff;\n  }\n\n  &:after {\n    content: "";\n    transform: rotate(-57deg);\n  }\n\n  &:before {\n    content: "";\n    transform: rotate(57deg);\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n']);return re=function(){return e},e}var ie=m.a.span(re(),"40px"),ce=function(){return r.a.createElement(ie,{title:"Made using React :D"},r.a.createElement("span",{className:"nucleo"}))};function le(){var e=Object(s.a)(["\n  > p {\n    margin-left: calc("," + 1ch);\n    position: relative;\n    top: calc("," / 4);\n  }\n"]);return le=function(){return e},e}var oe=m.a.div(le(),"40px","40px"),se=function(){return r.a.createElement(oe,null,r.a.createElement("a",{href:"https://pt-br.reactjs.org/"},r.a.createElement(ce,null)),r.a.createElement("p",null,G({id:"madeIn"})," React :D"))},me=function(){return r.a.createElement("div",{className:"container site-container"},r.a.createElement(_,null),r.a.createElement(K,null),r.a.createElement(ee,null),r.a.createElement(ae,null),r.a.createElement(se,null))},ue=function(){return r.a.createElement(l.a,null,r.a.createElement(o.b,{history:C},r.a.createElement(o.a,{exact:!0,path:"/:lang?",component:me})))},de=(t(59),t(60),function(){return r.a.createElement(H,null,r.a.createElement(ue,null))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.68e1bc39.chunk.js.map