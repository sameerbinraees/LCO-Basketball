(this.webpackJsonpLCO=this.webpackJsonpLCO||[]).push([[0],{109:function(e,a,t){e.exports=t(122)},114:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),i=t.n(r),c=(t(52),t(114),t(25),t(72)),o=t(73),m=t(50),s=t(95),d=t(94),u=t(159),E=t(163),p=t(164),g=t(124),h=t(178),f=t(166),v=t(167),b=t(5),y=t(77),w=t.n(y),x=t(168),N=t(63),k=t.n(N),C=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={drawerActivate:!1,drawer:!1},n.createDrawer=n.createDrawer.bind(Object(m.a)(n)),n.destroyDrawer=n.destroyDrawer.bind(Object(m.a)(n)),n}return Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.innerWidth<=600&&this.setState({drawerActivate:!0}),window.addEventListener("resize",(function(){window.innerWidth<=600?e.setState({drawerActivate:!0}):e.setState({drawerActivate:!1})}))}},{key:"createDrawer",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(u.a,{position:"static",style:{backgroundColor:"#440464"}},l.a.createElement(E.a,null,l.a.createElement(p.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},l.a.createElement(w.a,{className:this.props.classes.sideBarIcon,onClick:function(){e.setState({drawer:!0})}}),l.a.createElement("button",{className:"logo-button",color:"inherit","aria-label":"menu"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:k.a,alt:"logo",style:{width:"60px",height:"60px"}}))),l.a.createElement(g.a,{color:"inherit",variant:"headline"},"Go fight for it team"),l.a.createElement(g.a,{color:"inherit",variant:"headline"})))),l.a.createElement(h.a,{open:this.state.drawer,onClose:function(){e.setState({drawer:!1})},onOpen:function(){e.setState({drawer:!0})}},l.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){e.setState({drawer:!1})},onKeyDown:function(){e.setState({drawer:!1})}},l.a.createElement(f.a,{className:this.props.classes.list},l.a.createElement(v.a,{key:1,button:!0,divider:!0},l.a.createElement(x.a,{href:"/",color:"inherit",className:this.props.classes.list},"Home")),l.a.createElement(v.a,{key:2,button:!0,divider:!0},l.a.createElement(x.a,{href:"/about",color:"inherit",className:this.props.classes.list},"About Us")),l.a.createElement(v.a,{key:3,button:!0,divider:!0},l.a.createElement(x.a,{href:"/tournament",color:"inherit",className:this.props.classes.list},"Tournament")),l.a.createElement(v.a,{key:4,button:!0,divider:!0},l.a.createElement(x.a,{href:"/team",color:"inherit",className:this.props.classes.list},"Team")),l.a.createElement(v.a,{key:5,button:!0,divider:!0},l.a.createElement(x.a,{href:"/video",color:"inherit",className:this.props.classes.list},"Video")),l.a.createElement(v.a,{key:6,button:!0,divider:!0},l.a.createElement(x.a,{href:"/faqs",color:"inherit",className:this.props.classes.list},"FAQ")),l.a.createElement(v.a,{key:7,button:!0,divider:!0},l.a.createElement(x.a,{href:"/contact",color:"inherit",className:this.props.classes.list},"Contact Us"))))))}},{key:"destroyDrawer",value:function(){return l.a.createElement(u.a,{position:"static",style:{backgroundColor:"#440464"}},l.a.createElement(E.a,null,l.a.createElement("button",{className:"logo-button",color:"inherit","aria-label":"menu"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:k.a,alt:"logo",className:this.props.classes.logo}))),l.a.createElement(g.a,{variant:"h6",style:{flexGrow:1},color:"inherit"},"Go fight for it team"),l.a.createElement(g.a,{variant:"subheading",className:this.props.classes.padding,color:"inherit"},l.a.createElement(x.a,{href:"/",color:"inherit",className:"nav-a",style:{textDecoration:"none"}},"Home"),l.a.createElement(x.a,{href:"/about",color:"inherit",className:"nav-a",style:{textDecoration:"none"}},"About Us"),l.a.createElement(x.a,{href:"/tournament",color:"inherit",className:"nav-a",style:{textDecoration:"none"}},"Tournament"),l.a.createElement(x.a,{href:"/team",color:"inherit",className:"nav-a",style:{textDecoration:"none"}},"Team"),l.a.createElement(x.a,{href:"/video",color:"inherit",className:"nav-a",style:{textDecoration:"none"}},"Video"),l.a.createElement(x.a,{href:"/faqs",color:"inherit",className:"nav-a",style:{textDecoration:"none"}},"FAQ"),l.a.createElement(x.a,{href:"/contact",color:"inherit",className:"nav-a",style:{textDecoration:"none"}},"Contact Us"))))}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.drawerActivate?this.createDrawer():this.destroyDrawer())}}]),t}(n.Component),L=Object(b.a)({list:{width:200},padding:{paddingRight:30,cursor:"pointer"},sideBarIcon:{padding:0,color:"white",cursor:"pointer"},logo:{height:100,width:100}})(C),T=t(79),B=t.n(T),O=t(80),S=t.n(O),D=t(81),A=t.n(D),R=t(180),I=t(123);var q=function(){return l.a.createElement(I.a,{variant:"elevation"},l.a.createElement("div",{className:"footer"},l.a.createElement("br",null),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:12,sm:6},l.a.createElement("h3",null,"Contact"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("b",null,"Phone Number:")," +91999999999"),l.a.createElement("p",null,l.a.createElement("b",null,"Address:"),"  LCO Basketball Ground, Frictional Road")),l.a.createElement(p.a,{item:!0,xs:12,sm:6},l.a.createElement("h3",null,"Connect"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement(R.a,{title:"Facebook"},l.a.createElement("a",{href:"https://www.facebook.com/",className:"social-links"},l.a.createElement(B.a,{fontSize:"large",className:"social-icon-fb"})))," "," ",l.a.createElement(R.a,{title:"Instagram"},l.a.createElement("a",{href:"https://www.instagram.com/",className:"social-links"},l.a.createElement(S.a,{fontSize:"large",className:"social-icon-insta"})))," "," ",l.a.createElement(R.a,{title:"Twitter"},l.a.createElement("a",{href:"https://twitter.com/explore",className:"social-links"},l.a.createElement(A.a,{fontSize:"large",className:"social-icon-tw"})))))),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:12},l.a.createElement("p",null,"\xa9 2020",l.a.createElement("a",{href:"https://github.com/sameerbinraees",className:"dev-link"}," Muhamad Sameer Bin Raees "))))))},K=(t(119),t(93)),j=t(82),G=t.n(j),W=t(83),z=t.n(W),M=t(84),U=t.n(M),F=t(85),H=t.n(F);var P=function(){return l.a.createElement("div",{style:{backgroundColor:"#dfdddd"}},l.a.createElement(K.a,{infiniteLoop:!0,autoPlay:!0,showStatus:!1,showThumbs:!1},l.a.createElement("div",null,l.a.createElement("img",{src:U.a,alt:"image1"}),l.a.createElement("p",{className:"legend"},"Play with pride!")),l.a.createElement("div",null,l.a.createElement("img",{src:G.a,alt:"image2"}),l.a.createElement("p",{className:"legend"},"Wear with proud!")),l.a.createElement("div",null,l.a.createElement("img",{src:z.a,alt:"image3"}),l.a.createElement("p",{className:"legend"},"More than a team, a family!")),l.a.createElement("div",null,l.a.createElement("img",{src:H.a,alt:"image4"}),l.a.createElement("p",{className:"legend"},"Practice like you are in a match, Play like no one's watching you!"))))},V=t(86),Q=t.n(V);var _=function(){return l.a.createElement("div",{style:{backgroundColor:"black"}},l.a.createElement("br",null),l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,xs:12},l.a.createElement("img",{src:Q.a,alt:"image1",style:{width:"100%",height:"auto"}}))),l.a.createElement("br",null),l.a.createElement("br",null))};var J=function(){return l.a.createElement("div",{style:{backgroundColor:"#f2f2f2"}},l.a.createElement("br",null),l.a.createElement("div",{class:"container"},l.a.createElement("iframe",{class:"responsive-iframe",src:"https://www.youtube.com/embed/hqvGOPB0KmQ",title:"video"})),l.a.createElement("br",null))},$=t(24),X=t(6);var Y=function(){return l.a.createElement("div",{style:{paddingLeft:"20%",paddingRight:"20%",paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#dfdddd"}},l.a.createElement($.a,{defaultActiveKey:"0"},l.a.createElement(X.a,null,l.a.createElement($.a.Toggle,{as:X.a.Header,eventKey:"0",className:"collapse-cards-heading"},"Lorem ipsum dolor sit amet"),l.a.createElement($.a.Collapse,{eventKey:"0",className:"collapse-cards-body"},l.a.createElement(X.a.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),l.a.createElement(X.a,null,l.a.createElement($.a.Toggle,{as:X.a.Header,eventKey:"1",className:"collapse-cards-heading"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),l.a.createElement($.a.Collapse,{eventKey:"1",className:"collapse-cards-body"},l.a.createElement(X.a.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))),l.a.createElement(X.a,null,l.a.createElement($.a.Toggle,{as:X.a.Header,eventKey:"2",className:"collapse-cards-heading"},"Lorem ipsum dolor sit amet"),l.a.createElement($.a.Collapse,{eventKey:"2",className:"collapse-cards-body"},l.a.createElement(X.a.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),l.a.createElement(X.a,null,l.a.createElement($.a.Toggle,{as:X.a.Header,eventKey:"3",className:"collapse-cards-heading"},"Lorem ipsum dolor sit amet"),l.a.createElement($.a.Collapse,{eventKey:"3",className:"collapse-cards-body"},l.a.createElement(X.a.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),l.a.createElement(X.a,null,l.a.createElement($.a.Toggle,{as:X.a.Header,eventKey:"4",className:"collapse-cards-heading"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),l.a.createElement($.a.Collapse,{eventKey:"4",className:"collapse-cards-body"},l.a.createElement(X.a.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))))},Z=t(47),ee=t.n(Z);var ae=function(){return l.a.createElement("div",{style:{backgroundColor:"#f2f2f2"}},l.a.createElement(p.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},l.a.createElement(p.a,{item:!0,xs:12,sm:6,className:"upper-team-cards"},l.a.createElement(X.a,{className:"upper-team-imgs"},l.a.createElement(X.a.Img,{variant:"top",src:ee.a}),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,null,"Team Member 1"),l.a.createElement(X.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))),l.a.createElement(p.a,{item:!0,xs:12,sm:6,className:"upper-team-cards"},l.a.createElement(X.a,{className:"upper-team-imgs"},l.a.createElement(X.a.Img,{variant:"top",src:ee.a}),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,null,"Team Member 2"),l.a.createElement(X.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))),l.a.createElement(p.a,{item:!0,xs:12,sm:6,className:"remaining-team-cards"},l.a.createElement(X.a,{className:"remaining-team-imgs"},l.a.createElement(X.a.Img,{variant:"top",src:ee.a}),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,null,"Team Member 3"),l.a.createElement(X.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))),l.a.createElement(p.a,{item:!0,xs:12,sm:6,className:"remaining-team-cards"},l.a.createElement(X.a,{className:"remaining-team-imgs"},l.a.createElement(X.a.Img,{variant:"top",src:ee.a}),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,null,"Team Member 4"),l.a.createElement(X.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))),l.a.createElement(p.a,{item:!0,xs:12,sm:6,className:"remaining-team-cards"},l.a.createElement(X.a,{className:"remaining-team-imgs"},l.a.createElement(X.a.Img,{variant:"top",src:ee.a}),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,null,"Team Member 5"),l.a.createElement(X.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"))))))},te=t(171),ne=t(172),le=t(174),re=t(170),ie=t(173),ce=function(){return l.a.createElement("div",{style:{backgroundColor:"#f2f2f2"}},l.a.createElement("div",{class:"bgimg-1"},l.a.createElement("div",{class:"caption"},l.a.createElement("span",{class:"border"},l.a.createElement("font",{style:{verticalAlign:"inherit"}},"Who we are")))),l.a.createElement("div",{style:{padding:20,backgroundColor:"#f2f2f2"}},l.a.createElement("h1",null,"We are the LCO!"),l.a.createElement("h4",null,"Find us at LCO Basketball Ground"),l.a.createElement("h2",null,"Go fight for it Team")),l.a.createElement("div",{class:"bgimg-2"},l.a.createElement("div",{class:"caption"},l.a.createElement("span",{class:"border",style:{backgrounColor:"transparent",fontSize:25,color:"#f7f7f7;"}},l.a.createElement("font",{style:{verticalAlign:"inherit"}},"OUR VALUES")))),l.a.createElement("div",{style:{padding:20,paddingLeft:50,paddingRight:50}},l.a.createElement(re.a,{component:I.a},l.a.createElement(te.a,{"aria-label":"simple table"},l.a.createElement(ne.a,null,l.a.createElement(ie.a,{hover:!0},l.a.createElement(le.a,{align:"left",style:{paddingLeft:35}},l.a.createElement("h1",null,"#more_than_a_team"),l.a.createElement("h5",null,"Here at LCO, we are not just a team, we are more than a team, a family"))))))),l.a.createElement("div",{style:{paddingBottom:20,paddingLeft:50,paddingRight:50}},l.a.createElement(re.a,{component:I.a},l.a.createElement(te.a,{"aria-label":"simple table"},l.a.createElement(ne.a,null,l.a.createElement(ie.a,{hover:!0},l.a.createElement(le.a,{align:"right",style:{paddingRight:35}},l.a.createElement("h1",null,"#intensity"),l.a.createElement("h5",null,"Every game we play is full of intensity, our players giver their 100% on the pitch"))))))),l.a.createElement("div",{style:{paddingBottom:20,paddingLeft:50,paddingRight:50}},l.a.createElement(re.a,{component:I.a},l.a.createElement(te.a,{"aria-label":"simple table"},l.a.createElement(ne.a,null,l.a.createElement(ie.a,{hover:!0},l.a.createElement(le.a,{align:"left",style:{paddingLeft:35}},l.a.createElement("h1",null,"#I.R.O.N."),l.a.createElement("h5",null,"I Integrity "),l.a.createElement("h5",null,"R Reliability "),l.a.createElement("h5",null,"O Opportunity "),l.a.createElement("h5",null,"N Never give up "))))))),l.a.createElement("div",{class:"bgimg-3"},l.a.createElement("div",{class:"caption"},l.a.createElement("span",{class:"border",style:{backgrounColor:"transparent",fontSize:25,color:"#f7f7f7;"}},l.a.createElement("font",{style:{verticalAlign:"inherit"}},"Our Slogan")))),l.a.createElement("div",{style:{padding:20,paddingLeft:50,paddingRight:50}},l.a.createElement(re.a,{component:I.a},l.a.createElement(te.a,{"aria-label":"simple table"},l.a.createElement(ne.a,null,l.a.createElement(ie.a,{hover:!0},l.a.createElement(le.a,{align:"center"},l.a.createElement("h2",null,"Go Fight for it Team!"))))))))},oe=t(175),me=t(177),se=t(176),de=t(88),ue=t.n(de),Ee=t(90),pe=t.n(Ee),ge=t(89),he=t.n(ge),fe=Object(oe.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch",flexGrow:1},form:{display:"flex",flexWrap:"wrap"},table:{borderBottom:"none"}}}}));var ve=function(){var e=fe();return l.a.createElement("div",{style:{backgroundColor:"#f2f2f2"}},l.a.createElement("div",{style:{padding:"20px"}},l.a.createElement("h1",null,"CONTACT US!"),l.a.createElement("h4",null,"We love to hear from our fans!"),l.a.createElement("h6",null,"Our fanbase is what motivates us, you are our real pride, let's hear from you."),l.a.createElement(p.a,{container:!0,spacing:3},l.a.createElement(p.a,{item:!0,xs:12,sm:6},l.a.createElement("form",{className:e.form,noValidate:!0,autoComplete:"off"},l.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},l.a.createElement(me.a,{id:"outlined-basic",label:"Name",variant:"outlined",style:{margin:"30px"}}),l.a.createElement(me.a,{id:"outlined-basic",label:"Email",variant:"outlined",type:"email",style:{marginLeft:"30px",marginRight:"30px",marginBottom:"30px"}}),l.a.createElement(me.a,{id:"outlined-basic",label:"Description",variant:"outlined",type:"email",multiline:"true",rows:"5",style:{marginLeft:"30px",marginRight:"30px",marginBottom:"30px"}})),l.a.createElement(se.a,{variant:"contained",style:{backgroundColor:"#440464",color:"white"}},"Submit"))),l.a.createElement(p.a,{item:!0,xs:12,sm:6,style:{marginTop:"30px",paddingRight:"30px",paddingLeft:"30px"}},l.a.createElement(re.a,{component:I.a},l.a.createElement(te.a,{className:e.table,"aria-label":"simple table"},l.a.createElement(ne.a,null,l.a.createElement(ie.a,{hover:!0},l.a.createElement(le.a,{align:"left"},l.a.createElement(ue.a,{fontSize:"large"})),l.a.createElement(le.a,{align:"left"},l.a.createElement("b",null," LCO Baketball Ground, Frictional Road"))),l.a.createElement(ie.a,{hover:!0},l.a.createElement(le.a,{align:"left"},l.a.createElement(he.a,{fontSize:"large"})),l.a.createElement(le.a,{align:"left"},l.a.createElement("b",null,"+91999999999"))),l.a.createElement(ie.a,{hover:!0},l.a.createElement(le.a,{align:"left"},l.a.createElement(pe.a,{fontSize:"large"})),l.a.createElement(le.a,{align:"left"},l.a.createElement("b",null,"LCO@FictionalDomain.com"))))))))))},be=t(91),ye=t(31);var we=function(){return l.a.createElement(be.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(L,null),l.a.createElement(ye.c,null,l.a.createElement(ye.a,{path:"/",exact:!0,component:P}),l.a.createElement(ye.a,{path:"/tournament",exact:!0,component:_}),l.a.createElement(ye.a,{path:"/video",exact:!0,component:J}),l.a.createElement(ye.a,{path:"/faqs",exact:!0,component:Y}),l.a.createElement(ye.a,{path:"/team",exact:!0,component:ae}),l.a.createElement(ye.a,{path:"/contact",exact:!0,component:ve}),l.a.createElement(ye.a,{path:"/about",exact:!0,component:ce})),l.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,a,t){},47:function(e,a,t){e.exports=t.p+"static/media/artimg-2.5dd6f64a.png"},63:function(e,a,t){e.exports=t.p+"static/media/sports-logo-transparent.a7220f8c.png"},82:function(e,a,t){e.exports=t.p+"static/media/img1(cropped).ff463063.png"},83:function(e,a,t){e.exports=t.p+"static/media/img2(cropped).2839ec9f.png"},84:function(e,a,t){e.exports=t.p+"static/media/img3(cropped).bd859020.png"},85:function(e,a,t){e.exports=t.p+"static/media/img4(cropped).fba0f253.png"},86:function(e,a,t){e.exports=t.p+"static/media/Big Tournament Coming Soon.4a32f4b4.png"}},[[109,1,2]]]);
//# sourceMappingURL=main.2c14d83f.chunk.js.map