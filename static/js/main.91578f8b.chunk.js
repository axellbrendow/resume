(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{42:function(e,n,t){e.exports=t(58)},50:function(e,n,t){var a={"./en-us.json":[61,3],"./pt-br.json":[62,4]};function r(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],r=n[0];return t.e(n[1]).then((function(){return t.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=50,e.exports=r},56:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(33),c=t.n(i),o=t(25),l=t(4),s=t(9),m=t(10),u=t(18),d=t.n(u),p=t(24),g=t(31),f=t(5),b=t(64),E=t(38);function h(){var e=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"]);return h=function(){return e},e}var v=m.a.div(h(),(function(e){return e.backgroundColor||"rgba(255, 255, 255, 0.5)"})),x=function(e){var n=e.children,t=e.backgroundColor;return r.a.createElement(v,{backgroundColor:t},n)};function k(){var e=Object(s.a)(["\n  @-webkit-keyframes load3 {\n    ","\n  }\n\n  @keyframes load3 {\n    ","\n  }\n\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: gray;\n  background: -moz-linear-gradient(",");\n  background: -webkit-linear-gradient(",");\n  background: -o-linear-gradient(",");\n  background: -ms-linear-gradient(",");\n  background: linear-gradient(to right, ",');\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n\n  :before {\n    width: 50%;\n    height: 50%;\n    background: gray;\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: "";\n  }\n\n  :after {\n    background: white;\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: "";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n']);return k=function(){return e},e}var y="\n  gray 10%,\n  rgba(128, 128, 128, 0) 42%\n",w="\n  left,\n  ".concat(y,"\n"),j="\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n",N=m.a.div(k(),j,j,w,w,w,w,y),I=function(e){var n=e.backgroundColor;return r.a.createElement(x,{backgroundColor:n},r.a.createElement(N,null))},O=t(8),S=Object(O.a)();function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(e).reduce((function(t,a){var r=e[a],i=n?"".concat(n,".").concat(a):a;return"string"===typeof r?t[i]=r:Object.assign(t,_(r,i)),t}),{})}var F={getOne:function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(50)("./".concat(n,".json"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},C={"en-us":{locale:"en-us",name:"English"},"pt-br":{locale:"pt-br",name:"Portugu\xeas"}},L=function(e){return e.toLowerCase()in C},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.location.pathname;return e.split("/")},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.location.pathname;return M(e)[2]||""},T=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S.location.pathname,t=M(n);return 2===t.length?t.push(e):t[2]=e,t.join("/")},A=C["en-us"],H=Object(f.c)(),J=Object(b.a)({locale:A.locale,messages:{}},H),z=J.formatMessage,Q=function(){var e=D(),n=A.locale;return L(e)?n=e:L(navigator.language)&&(n=navigator.language),n.toLowerCase()}(),G=function(e){var n=e.children,t=Object(a.useState)(!0),i=Object(g.a)(t,2),c=i[0],o=i[1],l=Object(a.useState)(Q),s=Object(g.a)(l,2),m=s[0],u=s[1];return Object(a.useEffect)((function(){return S.listen((function(e){return u(D(e.pathname))}))}),[u]),Object(a.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),!m){e.next=12;break}return e.t0=_,e.next=5,F.getOne(m);case 5:e.t1=e.sent,n=(0,e.t0)(e.t1),J=Object(b.a)({locale:m,messages:n},H),z=J.formatMessage,setTimeout((function(){o(!1)}),1e3),document.documentElement.lang=m,document.title=z({id:"title"});case 12:case"end":return e.stop()}}),e)})))()}),[m]),c?r.a.createElement(I,null):r.a.createElement(E.a,{value:J},n)};function P(){var e=Object(s.a)(["\n  display: inline-block;\n\n  :not(:first-child) + li {\n    margin-left: 40px;\n  }\n"]);return P=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return R=function(){return e},e}var B=m.a.ul(R()),K=m.a.li(P()),U=Object.values(C),W=function(){return r.a.createElement(B,null,r.a.createElement("span",{className:"sr-only"},z({id:"presentation.availableLanguages"})),U.map((function(e){return r.a.createElement(K,{key:e.locale},r.a.createElement(o.b,{to:T(e.locale)},e.name))})))},q=function(){return r.a.createElement("section",{className:"presentation-section"},r.a.createElement("div",{className:"presentation container row"},r.a.createElement("div",{className:"name col-sm pb-3"},r.a.createElement("h1",{className:"h2"},"Axell Brendow Batista Moreira")),r.a.createElement("div",{className:"about-me col-sm"},r.a.createElement("h2",null,z({id:"presentation.aboutMe"})),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:z({id:"presentation.aboutMeValue"})}}))),r.a.createElement(W,null))};function V(){var e=Object(s.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n"]);return V=function(){return e},e}var Z=m.a.img(V()),X=function(e){var n=e.classNameLi,t=e.iconType,a=e.iconName,i=e.anchorHref,c=e.anchorChildren,o=e.accessibilityAnchorChildren;return r.a.createElement("li",{key:n,className:"".concat(n," col-sm-6 col-md")},r.a.createElement("i",{className:"".concat(t," fa-").concat(a)})," ",r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"sr-only"},o),c))},Y=function(){return r.a.createElement("section",{className:"contact-section"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-address-card"})," ",z({id:"contacts.title"})),r.a.createElement("ul",{className:"informations row mt-4"},[{classNameLi:"email",iconType:"fas",iconName:"envelope",anchorHref:"mailto:breno.axel@gmail.com",anchorChildren:"breno.axel@gmail.com",accessibilityAnchorChildren:"Email:"},{classNameLi:"phone",iconType:"fas",iconName:"mobile-alt",anchorHref:"tel:+5531989575463",anchorChildren:r.a.createElement(r.a.Fragment,null,"+55 31 98957 5463",r.a.createElement(Z,{src:"https://cdn-icons-png.flaticon.com/256/4628/4628714.png",alt:z({id:"brazil"}),title:z({id:"brazil"}),width:"20",height:"20"})),accessibilityAnchorChildren:"".concat(z({id:"contacts.phone.accessibility"}),":")},{classNameLi:"linkedin",iconType:"fab",iconName:"linkedin-in",anchorHref:"https://www.linkedin.com/in/axellbrendow/",anchorChildren:"axellbrendow",accessibilityAnchorChildren:"LinkedIn:"},{classNameLi:"github",iconType:"fab",iconName:"github-square",anchorHref:"https://github.com/axellbrendow",anchorChildren:"axellbrendow",accessibilityAnchorChildren:"GitHub:"}].map(X)))},$=t(39),ee=t.n($),ne=function(e){var n=e.period,t=e.name,a=e.description;return r.a.createElement("li",{key:"string"===typeof t?t:ee.a.renderToString(t),className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",null,r.a.createElement("strong",{className:"period"},n)),r.a.createElement("div",null,r.a.createElement("p",{className:"name"},r.a.createElement("strong",null,t)),r.a.createElement("div",{className:"description"},a))))},te=function(e){var n=e.title,t=e.titleIconClass,a=e.items;return r.a.createElement("div",{key:t,className:"col-sm-6"},r.a.createElement("h3",{className:"title"},r.a.createElement("i",{className:"fas fa-".concat(t)})," ",n),r.a.createElement("ul",null,a.map(ne)))},ae=function(){return r.a.createElement("section",{className:"experiences-section"},r.a.createElement("div",{className:"row"},[{title:z({id:"experiences.education.title"}),titleIconClass:"graduation-cap",items:[{period:z({id:"experiences.education.graduation.period"}),name:z({id:"experiences.education.graduation.name"}),description:z({id:"experiences.education.graduation.description"})},{period:z({id:"experiences.education.microservicesApplications.period"}),name:r.a.createElement("a",{href:"https://drive.google.com/file/d/1bJnFxQPKgSsI30sCvW-KzYK4V5JWzgSs/view?usp=share_link",target:"_blank",rel:"noopener noreferrer"},z({id:"experiences.education.microservicesApplications.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.education.microservicesApplications.introduction"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"DevOps")," - Git Flow, Docker, CI/CD, SonarQube, Kubernetes, Terraform, Ansible, Service Mesh (Istio), API Gateway, Kong, Rate Limiting, ElasticStack, Prometheus, Grafana, Open Telemetry."),r.a.createElement("li",null,r.a.createElement("strong",null,"Software Engineering")," - Monoliths vs Microservices, SQL vs NoSQL, C4 Diagrams, Clean Code, SOLID, Hexagonal Architecture, Dependency Inversion, Dependency Injection, DDD, REST, BFF, gRPC, GraphQL, Service Discovery, RabbitMQ, Kafka, SAGA Pattern (Orchestration vs Choreography)."),r.a.createElement("li",null,r.a.createElement("strong",null,"Domain Driven Design")," - Ubiquitous Language, Bounded Contexts, Context Map, Strategic Modeling, Value Objects, Entities, Aggregates, Domain Services, Domain Events."),r.a.createElement("li",null,r.a.createElement("strong",null,"Event Driven Architecture")," - Event notification, Event sourcing, Event collaboration, CQRS, Unit of Work."),r.a.createElement("li",null,r.a.createElement("strong",null,"Java 17")," - Gradle, Groovy, Spring Boot, JUnit, Mockito."),r.a.createElement("li",null,r.a.createElement("strong",null,"Golang")," - Goroutines, Workers, JobService.")))},{period:z({id:"experiences.education.interJava.period"}),name:r.a.createElement("a",{href:"https://drive.google.com/file/d/1FbcMmesNN53tPjX8OfAgH6RXAzNjQDAS/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer"},z({id:"experiences.education.interJava.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.education.interJava.description"}))},{period:z({id:"experiences.education.gftJava.period"}),name:r.a.createElement("a",{href:"https://certificates.digitalinnovation.one/76784B06",target:"_blank",rel:"noopener noreferrer"},z({id:"experiences.education.gftJava.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.education.gftJava.description"}))}]},{titleIconClass:"building",title:z({id:"experiences.experiences.title"}),items:[{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.google.period"})),name:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.google.name"})}}),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.google.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.accenture.period"})),name:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.accenture.name"})}}),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.accenture.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.internIoasys.period"})),name:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.internIoasys.name"})}}),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.internIoasys.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.webDevIntern.period"})),name:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.experiences.webDevIntern.name"})}}),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.experiences.webDevIntern.description"}))}]},{titleIconClass:"folder",title:z({id:"experiences.projects.title"}),items:[{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.projects.localizaLabs.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/matheussinnis/ProjetoLocalizaLabsAPI",target:"_blank",rel:"noopener noreferrer"},z({id:"experiences.projects.localizaLabs.name"}))),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.projects.localizaLabs.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.projects.ecommerceMicroservices.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/axellbrendow/dio-spring-ecommerce-microservices",target:"_blank",rel:"noopener noreferrer"},z({id:"experiences.projects.ecommerceMicroservices.name"}))),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.projects.ecommerceMicroservices.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.projects.webfluxStockQuote.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/axellbrendow/dio-spring-webflux-stock-quote",target:"_blank",rel:"noopener noreferrer"},z({id:"experiences.projects.webfluxStockQuote.name"}))),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.projects.webfluxStockQuote.description"})}})},{period:r.a.createElement(r.a.Fragment,null,z({id:"experiences.projects.devOpsModule.period"})),name:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://github.com/axellbrendow/microservices-devops-challenge01",target:"_blank",rel:"noopener noreferrer"},z({id:"experiences.projects.devOpsModule.name"}))),description:r.a.createElement("div",{dangerouslySetInnerHTML:{__html:z({id:"experiences.projects.devOpsModule.description"})}})}]},{titleIconClass:"laptop",title:z({id:"experiences.interests.title"}),items:[{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.english.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.english.description"}))},{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.portuguese.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.portuguese.description"}))},{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.softwareEngineering.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.softwareEngineering.description"}))},{period:r.a.createElement(r.a.Fragment,null),name:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.artificialIntelligence.name"})),description:r.a.createElement(r.a.Fragment,null,z({id:"experiences.interests.artificialIntelligence.description"}))}]}].map(te)))};function re(){var e=Object(s.a)(["\n  & {\n    display: inline-block;\n    border-radius: 50%;\n    border: 10px solid #00d8ff;\n\n    animation-name: rotate;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n\n  &,\n  &:before,\n  &:after {\n    position: absolute;\n    display: inline-block;\n    width: 20px;\n    height: ",';\n    border-radius: 50%;\n    border: 2px solid #00d8ff;\n  }\n\n  .nucleo,\n  &,\n  &:before,\n  &:after {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .nucleo {\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n    background: #00d8ff;\n  }\n\n  &:after {\n    content: "";\n    transform: rotate(-57deg);\n  }\n\n  &:before {\n    content: "";\n    transform: rotate(57deg);\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n']);return re=function(){return e},e}var ie=m.a.span(re(),"40px"),ce=function(){return r.a.createElement(ie,{title:"".concat(z({id:"madeIn"})," React :D")},r.a.createElement("span",{className:"nucleo"}))};function oe(){var e=Object(s.a)(["\n  margin: 10px 0;\n  > p {\n    margin-left: calc("," + 1ch);\n    position: relative;\n    top: calc("," / 4);\n  }\n"]);return oe=function(){return e},e}var le=m.a.div(oe(),"40px","40px"),se=function(){return r.a.createElement(le,null,r.a.createElement("a",{href:"https://pt-br.reactjs.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ce,null)),r.a.createElement("p",null,z({id:"madeIn"})," React :D"))},me=function(){return r.a.createElement("div",{className:"container site-container"},r.a.createElement(q,null),r.a.createElement(Y,null),r.a.createElement(ae,null),r.a.createElement(se,null))},ue=function(){return r.a.createElement(o.a,null,r.a.createElement(l.b,{history:S},r.a.createElement(l.a,{exact:!0,path:"/resume/:lang?",component:me})))},de=(t(56),t(57),function(){return r.a.createElement(G,null,r.a.createElement(ue,null))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.91578f8b.chunk.js.map