(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{42:function(e,n,t){e.exports=t(58)},50:function(e,n,t){var a={"./en-us.json":[61,3],"./pt-br.json":[62,4]};function r(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],r=n[0];return t.e(n[1]).then((function(){return t.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=50,e.exports=r},56:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(33),c=t.n(i),o=t(25),l=t(4),s=t(12),m=t(13),u=t(18),d=t.n(u),p=t(24),g=t(31),f=t(5),b=t(64),E=t(38);function h(){var e=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"]);return h=function(){return e},e}var x=m.a.div(h(),(function(e){return e.backgroundColor||"rgba(255, 255, 255, 0.5)"})),v=function(e){var n=e.children,t=e.backgroundColor;return r.a.createElement(x,{backgroundColor:t},n)};function k(){var e=Object(s.a)(["\n  @-webkit-keyframes load3 {\n    ","\n  }\n\n  @keyframes load3 {\n    ","\n  }\n\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: gray;\n  background: -moz-linear-gradient(",");\n  background: -webkit-linear-gradient(",");\n  background: -o-linear-gradient(",");\n  background: -ms-linear-gradient(",");\n  background: linear-gradient(to right, ",');\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n\n  :before {\n    width: 50%;\n    height: 50%;\n    background: gray;\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: "";\n  }\n\n  :after {\n    background: white;\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: "";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n']);return k=function(){return e},e}var y="\n  gray 10%,\n  rgba(128, 128, 128, 0) 42%\n",w="\n  left,\n  ".concat(y,"\n"),j="\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n",N=m.a.div(k(),j,j,w,w,w,w,y),O=function(e){var n=e.backgroundColor;return r.a.createElement(v,{backgroundColor:n},r.a.createElement(N,null))},F=t(8),C=Object(F.a)();function I(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(e).reduce((function(t,a){var r=e[a],i=n?"".concat(n,".").concat(a):a;return"string"===typeof r?t[i]=r:Object.assign(t,I(r,i)),t}),{})}var M={getOne:function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(50)("./".concat(n,".json"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},L={"en-us":{locale:"en-us",name:"English"},"pt-br":{locale:"pt-br",name:"Portugu\xeas"}},_=function(e){return e.toLowerCase()in L},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.location.pathname;return e.split("/")},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.location.pathname;return S(e)[2]||""},T=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.location.pathname,t=S(n);return 2===t.length?t.push(e):t[2]=e,t.join("/")},H=L["en-us"],A=Object(f.c)(),P=Object(b.a)({locale:H.locale,messages:{}},A),z=P.formatMessage,J=function(){var e=D(),n=H.locale;return _(e)?n=e:_(navigator.language)&&(n=navigator.language),n.toLowerCase()}(),B=function(e){var n=e.children,t=Object(a.useState)(!0),i=Object(g.a)(t,2),c=i[0],o=i[1],l=Object(a.useState)(J),s=Object(g.a)(l,2),m=s[0],u=s[1];return Object(a.useEffect)((function(){return C.listen((function(e){return u(D(e.pathname))}))}),[u]),Object(a.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),!m){e.next=12;break}return e.t0=I,e.next=5,M.getOne(m);case 5:e.t1=e.sent,n=(0,e.t0)(e.t1),P=Object(b.a)({locale:m,messages:n},A),z=P.formatMessage,setTimeout((function(){o(!1)}),1e3),document.documentElement.lang=m,document.title=z({id:"title"});case 12:case"end":return e.stop()}}),e)})))()}),[m]),c?r.a.createElement(O,null):r.a.createElement(E.a,{value:P},n)};function G(){var e=Object(s.a)(["\n  display: inline-block;\n\n  :not(:first-child) {\n    margin-left: 40px;\n  }\n"]);return G=function(){return e},e}function q(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return q=function(){return e},e}var R=m.a.ul(q()),U=m.a.li(G()),Z=Object.values(L),K=function(){return r.a.createElement(R,null,r.a.createElement("span",{className:"sr-only"},z({id:"presentation.availableLanguages"})),Z.map((function(e){return r.a.createElement(U,{key:e.locale},r.a.createElement(o.b,{to:T(e.locale)},e.name))})))},Q=function(){return r.a.createElement("section",{className:"presentation-section"},r.a.createElement("div",{className:"presentation container row"},r.a.createElement("div",{className:"name col-sm"},r.a.createElement("h1",{className:"h2"},"Axell Brendow Batista Moreira")),r.a.createElement("div",{className:"about-me col-sm"},r.a.createElement("h2",null,z({id:"presentation.aboutMe"})),r.a.createElement("p",null,z({id:"presentation.aboutMeValue"})))),r.a.createElement(K,null))},X=function(e){var n=e.classNameLi,t=e.iconType,a=e.iconName,i=e.anchorHref,c=e.anchorChildren,o=e.srOnlyAnchorChildren;return r.a.createElement("li",{key:n,className:"".concat(n," col-sm-6 col-md")},r.a.createElement("i",{className:"".concat(t," fa-").concat(a)})," ",r.a.createElement("a",{href:i},r.a.createElement("span",{className:"sr-only"},o),c))},V=function(){return r.a.createElement("section",{className:"contact-section"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-address-card"})," ",z({id:"contacts.title"})),r.a.createElement("ul",{className:"informations row mt-4"},[{classNameLi:"email",iconType:"fas",iconName:"envelope",anchorHref:"mailto:breno.axel@gmail.com",anchorChildren:"breno.axel@gmail.com",srOnlyAnchorChildren:"Email:"},{classNameLi:"phone",iconType:"fas",iconName:"mobile-alt",anchorHref:"tel:+5531989575463",anchorChildren:"+55 31 98957-5463",srOnlyAnchorChildren:"".concat(z({id:"contacts.phone.sr"}),":")},{classNameLi:"linkedin",iconType:"fab",iconName:"linkedin-in",anchorHref:"https://www.linkedin.com/in/axell-brendow/",anchorChildren:"axell-brendow",srOnlyAnchorChildren:"LinkedIn:"},{classNameLi:"github",iconType:"fab",iconName:"github-square",anchorHref:"https://github.com/axell-brendow",anchorChildren:"axell-brendow",srOnlyAnchorChildren:"GitHub:"}].map(X)))},W=t(39),Y=t.n(W),$=function(e){var n=e.period,t=e.name,a=e.description;return r.a.createElement("li",{key:"string"===typeof t?t:Y.a.renderToString(t),className:"row mb-3"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("strong",{className:"period"},n)),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("p",{className:"name"},r.a.createElement("strong",null,t)),r.a.createElement("div",{className:"description"},a)))},ee=function(e){var n=e.title,t=e.titleIconClass,a=e.items;return r.a.createElement("div",{key:t,className:"col-sm-6"},r.a.createElement("h3",{className:"title"},r.a.createElement("i",{className:"fas fa-".concat(t)})," ",n),r.a.createElement("ul",null,a.map($)))},ne=function(){return r.a.createElement("section",{className:"experiences-section"},r.a.createElement("div",{className:"row"},[{title:z({id:"experiences.formation.title"}),titleIconClass:"graduation-cap",items:[{period:z({id:"experiences.formation.graduation.period"}),name:z({id:"experiences.formation.graduation.name"}),description:z({id:"experiences.formation.graduation.description"})},{period:z({id:"experiences.formation.microservicesApplications.period"}),name:r.a.createElement("a",{href:"https://drive.google.com/file/d/1MdN-qK_8Pfg6YI3TSfSa5_2-FHmqGxEP/view?usp=sharing",target:"_blank"},z({id:"experiences.formation.microservicesApplications.name"})),description:r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Node.JS")," - Microservices, TypeScript, ElasticSearch, Messaging, Docker, Loopback"),r.a.createElement("li",null,r.a.createElement("strong",null,"Golang")," - Goroutines, Workers, JobService"),r.a.createElement("li",null,r.a.createElement("strong",null,"DevOps")," - Git Flow, Docker, Continuous Integration, Continuous Deployment, Kubernetes, Monitoring"),r.a.createElement("li",null,r.a.createElement("strong",null,"Software Engineering")," - Services and Microservices, Service Discovery, Queues and BFF"),r.a.createElement("li",null,r.a.createElement("strong",null,"Domain Driven Design")," - Ubiquitous Language, Bounded Contexts, Context Map and Strategic Modeling")))},{period:z({id:"experiences.formation.interJava.period"}),name:r.a.createElement("a",{href:"https://drive.google.com/file/d/1FbcMmesNN53tPjX8OfAgH6RXAzNjQDAS/view",target:"_blank"},z({id:"experiences.formation.interJava.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.formation.interJava.description"}))},{period:z({id:"experiences.formation.frontEndDev.period"}),name:r.a.createElement("a",{href:"https://cursos.alura.com.br/user/axell-b/career/desenvolvedor-front-end/certificate",target:"_blank"},z({id:"experiences.formation.frontEndDev.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.formation.frontEndDev.description"})," ",r.a.createElement("a",{href:"https://cursos.alura.com.br/user/axell-b",target:"_blank"},"Alura"))}]},{titleIconClass:"building",title:z({id:"experiences.experiences.title"}),items:[{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.accenture.period"}),r.a.createElement("br",null),z({id:"experiences.experiences.accenture.period2"})),name:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.accenture.name"})}}),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.accenture.description"}))},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.internIoasys.period"}),r.a.createElement("br",null),z({id:"experiences.experiences.internIoasys.period2"})),name:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.internIoasys.name"})}}),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.internIoasys.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.webDevIntern.period"}),r.a.createElement("br",null),z({id:"experiences.experiences.webDevIntern.period2"})),name:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.webDevIntern.name"})}}),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.webDevIntern.description"}))}]},{titleIconClass:"folder",title:z({id:"experiences.projects.title"}),items:[{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.projects.localizaLabs.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/matheussinnis/ProjetoLocalizaLabsAPI",target:"_blank"},z({id:"experiences.projects.localizaLabs.name"}))),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.projects.localizaLabs.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.projects.devOpsModule.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/axell-brendow/microservices-devops-challenge01",target:"_blank"},z({id:"experiences.projects.devOpsModule.name"}))),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.projects.devOpsModule.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.projects.imageProcessing.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/axell-brendow/image-processing-work",target:"_blank"},z({id:"experiences.projects.imageProcessing.name"}))),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.projects.imageProcessing.description"}))}]},{titleIconClass:"laptop",title:z({id:"experiences.interests.title"}),items:[{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.english.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.english.description"}))},{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.portuguese.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.portuguese.description"}))},{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.softwareEngineering.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.softwareEngineering.description"}))},{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.artificialIntelligence.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.artificialIntelligence.description"}))}]}].map(ee)))};function te(){var e=Object(s.a)(["\n  & {\n    display: inline-block;\n    border-radius: 50%;\n    border: 10px solid #00d8ff;\n\n    animation-name: rotate;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n\n  &,\n  &:before,\n  &:after {\n    position: absolute;\n    display: inline-block;\n    width: 20px;\n    height: ",';\n    border-radius: 50%;\n    border: 2px solid #00d8ff;\n  }\n\n  .nucleo,\n  &,\n  &:before,\n  &:after {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .nucleo {\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n    background: #00d8ff;\n  }\n\n  &:after {\n    content: "";\n    transform: rotate(-57deg);\n  }\n\n  &:before {\n    content: "";\n    transform: rotate(57deg);\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n']);return te=function(){return e},e}var ae=m.a.span(te(),"40px"),re=function(){return r.a.createElement(ae,{title:"Made using React :D"},r.a.createElement("span",{className:"nucleo"}))};function ie(){var e=Object(s.a)(["\n  margin: 10px 0;\n  > p {\n    margin-left: calc("," + 1ch);\n    position: relative;\n    top: calc("," / 4);\n  }\n"]);return ie=function(){return e},e}var ce=m.a.div(ie(),"40px","40px"),oe=function(){return r.a.createElement(ce,null,r.a.createElement("a",{href:"https://pt-br.reactjs.org/"},r.a.createElement(re,null)),r.a.createElement("p",null,z({id:"madeIn"})," React :D"))},le=function(){return r.a.createElement("div",{className:"container site-container"},r.a.createElement(Q,null),r.a.createElement(V,null),r.a.createElement(ne,null),r.a.createElement(oe,null))},se=function(){return r.a.createElement(o.a,null,r.a.createElement(l.b,{history:C},r.a.createElement(l.a,{exact:!0,path:"/resume/:lang?",component:le})))},me=(t(56),t(57),function(){return r.a.createElement(B,null,r.a.createElement(se,null))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.49dda29d.chunk.js.map