(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{42:function(e,n,t){e.exports=t(58)},50:function(e,n,t){var r={"./en-us.json":[61,3],"./pt-br.json":[62,4]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t.t(a,3)}))}a.keys=function(){return Object.keys(r)},a.id=50,e.exports=a},56:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(33),c=t.n(i),o=t(25),l=t(4),s=t(12),m=t(13),u=t(18),d=t.n(u),p=t(24),g=t(31),f=t(5),E=t(64),b=t(38);function h(){var e=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"]);return h=function(){return e},e}var v=m.a.div(h(),(function(e){return e.backgroundColor||"rgba(255, 255, 255, 0.5)"})),x=function(e){var n=e.children,t=e.backgroundColor;return a.a.createElement(v,{backgroundColor:t},n)};function k(){var e=Object(s.a)(["\n  @-webkit-keyframes load3 {\n    ","\n  }\n\n  @keyframes load3 {\n    ","\n  }\n\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: gray;\n  background: -moz-linear-gradient(",");\n  background: -webkit-linear-gradient(",");\n  background: -o-linear-gradient(",");\n  background: -ms-linear-gradient(",");\n  background: linear-gradient(to right, ",');\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n\n  :before {\n    width: 50%;\n    height: 50%;\n    background: gray;\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: "";\n  }\n\n  :after {\n    background: white;\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: "";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n']);return k=function(){return e},e}var y="\n  gray 10%,\n  rgba(128, 128, 128, 0) 42%\n",w="\n  left,\n  ".concat(y,"\n"),j="\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n",O=m.a.div(k(),j,j,w,w,w,w,y),N=function(e){var n=e.backgroundColor;return a.a.createElement(x,{backgroundColor:n},a.a.createElement(O,null))},I=t(8),S=Object(I.a)();function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(e).reduce((function(t,r){var a=e[r],i=n?"".concat(n,".").concat(r):r;return"string"===typeof a?t[i]=a:Object.assign(t,_(a,i)),t}),{})}var C={getOne:function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(50)("./".concat(n,".json"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},F={"en-us":{locale:"en-us",name:"English"},"pt-br":{locale:"pt-br",name:"Portugu\xeas"}},L=function(e){return e.toLowerCase()in F},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.location.pathname;return e.split("/")},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.location.pathname;return M(e)[2]||""},T=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S.location.pathname,t=M(n);return 2===t.length?t.push(e):t[2]=e,t.join("/")},A=F["en-us"],H=Object(f.c)(),J=Object(E.a)({locale:A.locale,messages:{}},H),Q=J.formatMessage,G=function(){var e=D(),n=A.locale;return L(e)?n=e:L(navigator.language)&&(n=navigator.language),n.toLowerCase()}(),P=function(e){var n=e.children,t=Object(r.useState)(!0),i=Object(g.a)(t,2),c=i[0],o=i[1],l=Object(r.useState)(G),s=Object(g.a)(l,2),m=s[0],u=s[1];return Object(r.useEffect)((function(){return S.listen((function(e){return u(D(e.pathname))}))}),[u]),Object(r.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),!m){e.next=12;break}return e.t0=_,e.next=5,C.getOne(m);case 5:e.t1=e.sent,n=(0,e.t0)(e.t1),J=Object(E.a)({locale:m,messages:n},H),Q=J.formatMessage,setTimeout((function(){o(!1)}),1e3),document.documentElement.lang=m,document.title=Q({id:"title"});case 12:case"end":return e.stop()}}),e)})))()}),[m]),c?a.a.createElement(N,null):a.a.createElement(b.a,{value:J},n)};function z(){var e=Object(s.a)(["\n  display: inline-block;\n\n  :not(:first-child) + li {\n    margin-left: 40px;\n  }\n"]);return z=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return R=function(){return e},e}var B=m.a.ul(R()),K=m.a.li(z()),U=Object.values(F),W=function(){return a.a.createElement(B,null,a.a.createElement("span",{className:"sr-only"},Q({id:"presentation.availableLanguages"})),U.map((function(e){return a.a.createElement(K,{key:e.locale},a.a.createElement(o.b,{to:T(e.locale)},e.name))})))},q=function(){return a.a.createElement("section",{className:"presentation-section"},a.a.createElement("div",{className:"presentation container row"},a.a.createElement("div",{className:"name col-sm pb-3"},a.a.createElement("h1",{className:"h2"},"Axell Brendow Batista Moreira")),a.a.createElement("div",{className:"about-me col-sm"},a.a.createElement("h2",null,Q({id:"presentation.aboutMe"})),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:Q({id:"presentation.aboutMeValue"})}}))),a.a.createElement(W,null))},V=function(e){var n=e.classNameLi,t=e.iconType,r=e.iconName,i=e.anchorHref,c=e.anchorChildren,o=e.srOnlyAnchorChildren;return a.a.createElement("li",{key:n,className:"".concat(n," col-sm-6 col-md")},a.a.createElement("i",{className:"".concat(t," fa-").concat(r)})," ",a.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("span",{className:"sr-only"},o),c))},Z=function(){return a.a.createElement("section",{className:"contact-section"},a.a.createElement("h2",null,a.a.createElement("i",{className:"fas fa-address-card"})," ",Q({id:"contacts.title"})),a.a.createElement("ul",{className:"informations row mt-4"},[{classNameLi:"email",iconType:"fas",iconName:"envelope",anchorHref:"mailto:breno.axel@gmail.com",anchorChildren:"breno.axel@gmail.com",srOnlyAnchorChildren:"Email:"},{classNameLi:"phone",iconType:"fas",iconName:"mobile-alt",anchorHref:"tel:+5531989575463",anchorChildren:"+55 31 98957-5463",srOnlyAnchorChildren:"".concat(Q({id:"contacts.phone.sr"}),":")},{classNameLi:"linkedin",iconType:"fab",iconName:"linkedin-in",anchorHref:"https://www.linkedin.com/in/axellbrendow/",anchorChildren:"axellbrendow",srOnlyAnchorChildren:"LinkedIn:"},{classNameLi:"github",iconType:"fab",iconName:"github-square",anchorHref:"https://github.com/axellbrendow",anchorChildren:"axellbrendow",srOnlyAnchorChildren:"GitHub:"}].map(V)))},X=t(39),Y=t.n(X),$=function(e){var n=e.period,t=e.name,r=e.description;return a.a.createElement("li",{key:"string"===typeof t?t:Y.a.renderToString(t),className:"row mb-3"},a.a.createElement("div",{className:"col"},a.a.createElement("div",null,a.a.createElement("strong",{className:"period"},n)),a.a.createElement("div",null,a.a.createElement("p",{className:"name"},a.a.createElement("strong",null,t)),a.a.createElement("div",{className:"description"},r))))},ee=function(e){var n=e.title,t=e.titleIconClass,r=e.items;return a.a.createElement("div",{key:t,className:"col-sm-6"},a.a.createElement("h3",{className:"title"},a.a.createElement("i",{className:"fas fa-".concat(t)})," ",n),a.a.createElement("ul",null,r.map($)))},ne=function(){return a.a.createElement("section",{className:"experiences-section"},a.a.createElement("div",{className:"row"},[{title:Q({id:"experiences.education.title"}),titleIconClass:"graduation-cap",items:[{period:Q({id:"experiences.education.graduation.period"}),name:Q({id:"experiences.education.graduation.name"}),description:Q({id:"experiences.education.graduation.description"})},{period:Q({id:"experiences.education.microservicesApplications.period"}),name:a.a.createElement("a",{href:"https://drive.google.com/file/d/1bJnFxQPKgSsI30sCvW-KzYK4V5JWzgSs/view?usp=share_link",target:"_blank",rel:"noopener noreferrer"},Q({id:"experiences.education.microservicesApplications.name"})),description:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.education.microservicesApplications.introduction"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,"DevOps")," - Git Flow, Docker, CI/CD, SonarQube, Kubernetes, Terraform, Ansible, Service Mesh (Istio), API Gateway, Kong, Rate Limiting, ElasticStack, Prometheus, Grafana, Open Telemetry."),a.a.createElement("li",null,a.a.createElement("strong",null,"Software Engineering")," - Monoliths vs Microservices, SQL vs NoSQL, C4 Diagrams, Clean Code, SOLID, Hexagonal Architecture, Dependency Inversion, Dependency Injection, DDD, REST, BFF, gRPC, GraphQL, Service Discovery, RabbitMQ, Kafka, SAGA Pattern (Orchestration vs Choreography)."),a.a.createElement("li",null,a.a.createElement("strong",null,"Domain Driven Design")," - Ubiquitous Language, Bounded Contexts, Context Map, Strategic Modeling, Value Objects, Entities, Aggregates, Domain Services, Domain Events."),a.a.createElement("li",null,a.a.createElement("strong",null,"Event Driven Architecture")," - Event notification, Event sourcing, Event collaboration, CQRS, Unit of Work."),a.a.createElement("li",null,a.a.createElement("strong",null,"Java 17")," - Gradle, Groovy, Spring Boot, JUnit, Mockito."),a.a.createElement("li",null,a.a.createElement("strong",null,"Golang")," - Goroutines, Workers, JobService.")))},{period:Q({id:"experiences.education.interJava.period"}),name:a.a.createElement("a",{href:"https://drive.google.com/file/d/1FbcMmesNN53tPjX8OfAgH6RXAzNjQDAS/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer"},Q({id:"experiences.education.interJava.name"})),description:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.education.interJava.description"}))},{period:Q({id:"experiences.education.gftJava.period"}),name:a.a.createElement("a",{href:"https://certificates.digitalinnovation.one/76784B06",target:"_blank",rel:"noopener noreferrer"},Q({id:"experiences.education.gftJava.name"})),description:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.education.gftJava.description"}))}]},{titleIconClass:"building",title:Q({id:"experiences.experiences.title"}),items:[{period:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.experiences.google.period"})),name:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.experiences.google.name"})}}),description:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.experiences.google.description"})}})},{period:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.experiences.accenture.period"})),name:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.experiences.accenture.name"})}}),description:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.experiences.accenture.description"})}})},{period:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.experiences.internIoasys.period"})),name:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.experiences.internIoasys.name"})}}),description:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.experiences.internIoasys.description"})}})},{period:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.experiences.webDevIntern.period"})),name:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.experiences.webDevIntern.name"})}}),description:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.experiences.webDevIntern.description"}))}]},{titleIconClass:"folder",title:Q({id:"experiences.projects.title"}),items:[{period:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.projects.localizaLabs.period"})),name:a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{href:"https://github.com/matheussinnis/ProjetoLocalizaLabsAPI",target:"_blank",rel:"noopener noreferrer"},Q({id:"experiences.projects.localizaLabs.name"}))),description:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.projects.localizaLabs.description"})}})},{period:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.projects.ecommerceMicroservices.period"})),name:a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{href:"https://github.com/axellbrendow/dio-spring-ecommerce-microservices",target:"_blank",rel:"noopener noreferrer"},Q({id:"experiences.projects.ecommerceMicroservices.name"}))),description:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.projects.ecommerceMicroservices.description"})}})},{period:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.projects.webfluxStockQuote.period"})),name:a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{href:"https://github.com/axellbrendow/dio-spring-webflux-stock-quote",target:"_blank",rel:"noopener noreferrer"},Q({id:"experiences.projects.webfluxStockQuote.name"}))),description:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.projects.webfluxStockQuote.description"})}})},{period:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.projects.devOpsModule.period"})),name:a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{href:"https://github.com/axellbrendow/microservices-devops-challenge01",target:"_blank",rel:"noopener noreferrer"},Q({id:"experiences.projects.devOpsModule.name"}))),description:a.a.createElement("div",{dangerouslySetInnerHTML:{__html:Q({id:"experiences.projects.devOpsModule.description"})}})}]},{titleIconClass:"laptop",title:Q({id:"experiences.interests.title"}),items:[{period:a.a.createElement(a.a.Fragment,null),name:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.interests.english.name"})),description:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.interests.english.description"}))},{period:a.a.createElement(a.a.Fragment,null),name:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.interests.portuguese.name"})),description:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.interests.portuguese.description"}))},{period:a.a.createElement(a.a.Fragment,null),name:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.interests.softwareEngineering.name"})),description:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.interests.softwareEngineering.description"}))},{period:a.a.createElement(a.a.Fragment,null),name:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.interests.artificialIntelligence.name"})),description:a.a.createElement(a.a.Fragment,null,Q({id:"experiences.interests.artificialIntelligence.description"}))}]}].map(ee)))};function te(){var e=Object(s.a)(["\n  & {\n    display: inline-block;\n    border-radius: 50%;\n    border: 10px solid #00d8ff;\n\n    animation-name: rotate;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n\n  &,\n  &:before,\n  &:after {\n    position: absolute;\n    display: inline-block;\n    width: 20px;\n    height: ",';\n    border-radius: 50%;\n    border: 2px solid #00d8ff;\n  }\n\n  .nucleo,\n  &,\n  &:before,\n  &:after {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .nucleo {\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n    background: #00d8ff;\n  }\n\n  &:after {\n    content: "";\n    transform: rotate(-57deg);\n  }\n\n  &:before {\n    content: "";\n    transform: rotate(57deg);\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n']);return te=function(){return e},e}var re=m.a.span(te(),"40px"),ae=function(){return a.a.createElement(re,{title:"".concat(Q({id:"madeIn"})," React :D")},a.a.createElement("span",{className:"nucleo"}))};function ie(){var e=Object(s.a)(["\n  margin: 10px 0;\n  > p {\n    margin-left: calc("," + 1ch);\n    position: relative;\n    top: calc("," / 4);\n  }\n"]);return ie=function(){return e},e}var ce=m.a.div(ie(),"40px","40px"),oe=function(){return a.a.createElement(ce,null,a.a.createElement("a",{href:"https://pt-br.reactjs.org/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(ae,null)),a.a.createElement("p",null,Q({id:"madeIn"})," React :D"))},le=function(){return a.a.createElement("div",{className:"container site-container"},a.a.createElement(q,null),a.a.createElement(Z,null),a.a.createElement(ne,null),a.a.createElement(oe,null))},se=function(){return a.a.createElement(o.a,null,a.a.createElement(l.b,{history:S},a.a.createElement(l.a,{exact:!0,path:"/resume/:lang?",component:le})))},me=(t(56),t(57),function(){return a.a.createElement(P,null,a.a.createElement(se,null))});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(me,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b3f5924d.chunk.js.map