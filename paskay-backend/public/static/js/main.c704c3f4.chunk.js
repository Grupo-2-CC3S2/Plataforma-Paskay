(this.webpackJsonppaskay=this.webpackJsonppaskay||[]).push([[0],{34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},38:function(e,c,t){},46:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(26),l=t.n(i),a=(t(34),t(35),t(8)),j=t(9),r=t(11),o=t(10),d=t.p+"static/media/logo.729862e3.png",b=t(14),m=t(3),h=(t(28),t(24),t(36),t(0));var O=t(29);function x(e){return Object(h.jsx)("button",{style:{width:24,height:24},onClick:function(){return e.handleClick()},children:e.label})}function u(e){var c={border:"1px solid black",width:e.width};return Object(h.jsx)("div",{style:c,children:e.text})}function p(e){return Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)(x,{label:"x",handleClick:e.removeItem}),Object(h.jsx)(u,{text:e.firstName,width:"200"}),Object(h.jsx)(u,{text:e.lastName,width:"200"})]})}function v(e){return Object(h.jsx)("ol",{children:e.postList.map((function(c,t){return Object(h.jsx)(p,{firstName:c.firstName,removeItem:function(){return e.removeItem(t)}},t)}))})}var N=function(e){Object(r.a)(t,e);var c=Object(o.a)(t);function t(e){var s;return Object(a.a)(this,t),(s=c.call(this,e)).estilos={color:"black",fontStyle:"italic"},s.state={firstname:"",items:[]},s}return Object(j.a)(t,[{key:"handleChange",value:function(e){"firstname"===e.target.name?this.setState({firstname:e.target.value}):"lastname"===e.target.name&&this.setState({lastname:e.target.value})}},{key:"addItem",value:function(){this.setState({items:[].concat(Object(O.a)(this.state.items),[{firstName:this.state.firstname,lastName:this.state.lastname}]),firstname:"",lastname:""})}},{key:"removeItem",value:function(e){var c=this.state.items.filter((function(c,t){return t!==e}));this.setState({items:c})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{style:this.estilos,className:"container homepage page",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-12 my-3",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"SUBIR PROBLEMA"}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h5",{children:" Archivo de im\xe1gen"}),Object(h.jsx)("input",{className:"my-3",type:"file"}),Object(h.jsx)("p",{children:"*Asegurese que el archivo tenga formato de im\xe1gen (png, jpg, jpeg) antes de cargarlo. No se aceptan archivos con otro tipo de formato*"}),Object(h.jsx)("button",{class:"btn btn-danger",children:"Detectar Texto"})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"col-md-3 abs-center",children:[Object(h.jsx)("h5",{children:" Vista previa"}),Object(h.jsx)("div",{className:"card justiy-content-around",style:{width:"12rem"},children:Object(h.jsx)("img",{className:"card-img-top",src:"./../../pmuestra1.png"})})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h5",{children:" Texto detectado"}),Object(h.jsx)("textarea",{className:"form-control my-2",rows:"2"}),Object(h.jsx)("p",{children:"*Si el texto detectado (arriba) no coincide con el de la im\xe1gen, tiene la opci\xf3n a editarlo*"}),Object(h.jsx)("button",{class:"btn btn-success my-2",children:"Aceptar"})]}),Object(h.jsx)("div",{className:"col-md-12 my-3",children:Object(h.jsx)("h4",{children:"Detalles "})}),Object(h.jsxs)("div",{className:"col-md-4 my-3",children:[Object(h.jsx)("h5",{children:"Curso"}),Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit",children:"Aritm\xe9tica"}),Object(h.jsx)("option",{value:"lime",children:"\xc1lgebra"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"Geometr\xeda"}),Object(h.jsx)("option",{value:"mango",children:"Trigonometr\xeda"}),Object(h.jsx)("option",{value:"mango",children:"RM"}),Object(h.jsx)("option",{value:"mango",children:"F\xedsica"}),Object(h.jsx)("option",{value:"mango",children:"Qu\xedmica"}),Object(h.jsx)("option",{value:"mango",children:"Letras"}),Object(h.jsx)("option",{value:"mango",children:"Otros"})]})]}),Object(h.jsxs)("div",{className:"col-md-4 my-3",children:[Object(h.jsx)("h5",{children:"Tema"}),Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit"}),Object(h.jsx)("option",{value:"lime",children:"Movimiento"}),Object(h.jsx)("option",{value:"lime",children:"Mec\xe1nica"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"Fluidos"}),Object(h.jsx)("option",{value:"mango",children:"Electricidad"}),Object(h.jsx)("option",{value:"mango",children:"Magnetismo"}),Object(h.jsx)("option",{value:"mango",children:"Gravitaci\xf3n"})]})]}),Object(h.jsxs)("div",{className:"col-md-4 my-3",children:[Object(h.jsx)("h5",{children:"Subtema"}),Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit",children:"Vectores"}),Object(h.jsx)("option",{value:"lime",children:"MRU"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"MRUV"}),Object(h.jsx)("option",{value:"mango",children:"Caida Libre"}),Object(h.jsx)("option",{value:"mango",children:"Movimiento Parab\xf3lico"})]})]}),Object(h.jsxs)("div",{className:"col-md-4 my-3",children:[Object(h.jsx)("h5",{children:"Universidad"}),Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit",children:"UNI"}),Object(h.jsx)("option",{value:"lime",children:"UNMSM"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"UNFV"}),Object(h.jsx)("option",{value:"mango",children:"UNLM"}),Object(h.jsx)("option",{value:"mango",children:"UNC"}),Object(h.jsx)("option",{value:"mango",children:"OTRAS"})]})]}),Object(h.jsxs)("div",{className:"col-md-4 my-3",children:[Object(h.jsx)("h5",{children:"A\xf1o"}),Object(h.jsx)("input",{className:"form-control",type:"number",placeholder:"2020"})]}),Object(h.jsxs)("div",{className:"col-md-4 my-3",children:[Object(h.jsx)("h5",{children:"Ciclo"}),Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit",children:"I"}),Object(h.jsx)("option",{value:"lime",children:"II"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"OTRO"})]})]}),Object(h.jsx)("div",{className:"col-md-12 my-3",children:Object(h.jsx)("h3",{children:"Filtros"})}),Object(h.jsxs)("div",{className:"col-md-8 my-3",children:[Object(h.jsx)("h5",{children:"Descripci\xf3n"}),Object(h.jsx)("textarea",{className:" form-control"})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("div",{className:"col-md-12 my-3",children:Object(h.jsx)("h5",{children:"Palabras clave"})}),Object(h.jsx)("input",{className:"form-control my-2",name:"firstname",value:this.state.firstname,onChange:this.handleChange.bind(this)}),Object(h.jsx)("button",{className:"btn btn-primary w-100",onClick:function(){return e.addItem()},children:"Agregar"}),Object(h.jsx)(v,{postList:this.state.items,removeItem:this.removeItem.bind(this)})]})]}),Object(h.jsxs)("row",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("input",{className:"btn w-50 btn-primary btn-lg my-3",type:"Submit"})})]})]})}}]),t}(s.Component),g=function(e){Object(r.a)(t,e);var c=Object(o.a)(t);function t(){return Object(a.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container homepage page",children:[Object(h.jsx)("div",{className:"row my-2",children:Object(h.jsxs)("div",{className:"col-md-12 my-4",children:[Object(h.jsx)("h3",{children:"GENERADOR DE EX\xc1MENES"}),Object(h.jsx)("hr",{})]})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-3",children:[Object(h.jsxs)("div",{className:"col-md-12",children:[Object(h.jsx)("h5",{children:"Instituci\xf3n"}),Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{children:"UNI"}),Object(h.jsx)("option",{children:"UNMSM"}),Object(h.jsx)("option",{children:"UNAC"}),Object(h.jsx)("option",{children:"UNFV"})]})]}),Object(h.jsxs)("div",{className:"col-md-12 my-3",children:[Object(h.jsx)("h5",{children:"Tipo de ex\xe1men"}),Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{children:"Ex\xe1men de Admisi\xf3n"}),Object(h.jsx)("option",{children:"Simulacro de Admisi\xf3n"})]})]}),Object(h.jsxs)("div",{className:"col-md-12 my-3",children:[Object(h.jsx)("h5",{children:"Duraci\xf3n"}),Object(h.jsx)("input",{value:"Tiempo real",disabled:!0})]}),Object(h.jsxs)("div",{className:"col-md-12 my-3",children:[Object(h.jsx)("input",{className:"form-check-input",type:"checkbox"}),Object(h.jsx)("label",{className:"form-check-label",children:"Ajustar Tiempo"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6 my-3",children:Object(h.jsx)("input",{type:"number",className:"form-control",placeholder:"hrs.",disabled:!0})}),Object(h.jsx)("div",{className:"col-md-6 my-3",children:Object(h.jsx)("input",{type:"number",className:"form-control",placeholder:"min.",disabled:!0})})]}),Object(h.jsx)("div",{className:"col-md-12 my-3",children:Object(h.jsx)("button",{className:"form-control my-4 btn btn-success",children:"Generar"})})]}),Object(h.jsxs)("div",{className:"col-md-8",children:[Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("h4",{children:"Resumen"})}),Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("table",{className:"table",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Fecha: 27/05/21"}),Object(h.jsx)("td",{children:"Hora de inicio: 20:00 hrs"}),Object(h.jsx)("td",{children:"Duraci\xf3n: 180 min."}),Object(h.jsx)("td",{children:"Hora fin: 23:00"})]})})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-6 my-3",children:[Object(h.jsx)("h5",{children:"RM "}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P2"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P3"}),Object(h.jsx)("button",{children:"P4"}),Object(h.jsx)("button",{children:"P5"})]}),Object(h.jsxs)("div",{className:"col-md-6 my-3",children:[Object(h.jsx)("h5",{children:"Letras"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P2"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P3"}),Object(h.jsx)("button",{children:"P4"}),Object(h.jsx)("button",{children:"P5"})]}),Object(h.jsxs)("div",{className:"col-md-6 my-3",children:[Object(h.jsx)("h5",{children:"Matem\xe1tica"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P2"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P3"}),Object(h.jsx)("button",{children:"P4"}),Object(h.jsx)("button",{children:"P5"}),Object(h.jsx)("button",{children:"P6"}),Object(h.jsx)("button",{children:"P7"}),Object(h.jsx)("button",{children:"P8"}),Object(h.jsx)("button",{children:"P9"}),Object(h.jsx)("button",{children:"P10"})]}),Object(h.jsxs)("div",{className:"col-md-6 my-3",children:[Object(h.jsx)("h5",{children:"F\xedsica"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P2"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P3"}),Object(h.jsx)("button",{children:"P4"}),Object(h.jsx)("button",{children:"P5"})]}),Object(h.jsxs)("div",{className:"col-md-6 my-3",children:[Object(h.jsx)("h5",{children:"Qu\xedmica"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P2"}),Object(h.jsx)("button",{children:"P1"}),Object(h.jsx)("button",{children:"P3"}),Object(h.jsx)("button",{children:"P4"}),Object(h.jsx)("button",{children:"P5"})]}),Object(h.jsxs)("div",{className:"col-md-12",children:[Object(h.jsx)("p",{children:"*Para empezar, haga click en el bot\xf3n 'Empezar' o en el n\xfamero de pregunta*"}),Object(h.jsx)("button",{className:"btn btn-warning btn-lg",children:"EMPEZAR"})]})]})]})]})]})}}]),t}(s.Component),f=function(e){Object(r.a)(t,e);var c=Object(o.a)(t);function t(){return Object(a.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-12 my-3",children:Object(h.jsx)("h2",{className:"titulo",children:"Inicio de Sesion"})}),Object(h.jsx)("div",{className:"col-md-12 my-3",children:"Ingrese correo electronico"})]}),Object(h.jsxs)("div",{className:"row form-group",children:[Object(h.jsx)("div",{className:"col-md-4"}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsx)("input",{className:"form-control ",placeholder:"Por ejemplo: example@gmail.com",size:"15",type:"text"})}),Object(h.jsx)("div",{className:"col-md-4"})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12 my-3",children:"Ingrese contrase\xf1a"})}),Object(h.jsxs)("div",{className:"row form-group",children:[Object(h.jsx)("div",{className:"col-md-4"}),Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsx)("input",{className:"form-control ",placeholder:"Contrase\xf1a",size:"15",type:"text"})}),Object(h.jsx)("div",{className:"col-md-4"})]}),Object(h.jsx)("div",{className:"row my-3",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("button",{className:"btn btn-primary w-40 ",children:"Iniciar Sesion"})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12 my-3",children:"\xbf No tienes cuenta ?"})}),Object(h.jsx)("div",{className:"row my-3",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("button",{className:"btn btn-primary w-40 ",children:"Registrarse"})})})]})}}]),t}(s.Component),y=(t(38),function(e){Object(r.a)(t,e);var c=Object(o.a)(t);function t(){return Object(a.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"box container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-12 my-3",children:Object(h.jsx)("h1",{className:"titulo",children:"PLATAFORMA PASKAY"})}),Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("h2",{children:"\xa1\xdanete a millones de usuarios en la resoluci\xf3n de problemas!"})})]}),Object(h.jsxs)("div",{className:"row my-3",children:[Object(h.jsx)("div",{className:"col-md-10",children:Object(h.jsx)("input",{className:"form-control ",placeholder:"Introduzca el problema (e.g. 2x+5=9)",size:"15",type:"text"})}),Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)("button",{className:"btn btn-primary w-100 ",children:"Buscar"})})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("input",{type:"checkbox",name:"check",id:"check",value:"1"})," Busqueda avanzada"]})}),Object(h.jsxs)("div",{className:"row my-3",children:[Object(h.jsx)("div",{className:"col-md-3 ",children:Object(h.jsx)("p",{children:"Curso"})}),Object(h.jsx)("div",{className:"col-md-3 ",children:Object(h.jsx)("p",{children:"Tema"})}),Object(h.jsx)("div",{className:"col-md-3 ",children:Object(h.jsx)("p",{children:"Universidad"})}),Object(h.jsx)("div",{className:"col-md-3 ",children:Object(h.jsx)("p",{children:"A\xf1o"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit",children:"Aritm\xe9tica"}),Object(h.jsx)("option",{value:"lime",children:"\xc1lgebra"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"Geometr\xeda"}),Object(h.jsx)("option",{value:"mango",children:"Trigonometr\xeda"}),Object(h.jsx)("option",{value:"mango",children:"RM"}),Object(h.jsx)("option",{value:"mango",children:"F\xedsica"}),Object(h.jsx)("option",{value:"mango",children:"Qu\xedmica"}),Object(h.jsx)("option",{value:"mango",children:"Letras"}),Object(h.jsx)("option",{value:"mango",children:"Otros"})]})}),Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit",children:"Proporciones"}),Object(h.jsx)("option",{value:"lime",children:"Vectores"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"Productos notables"}),Object(h.jsx)("option",{value:"mango",children:"Regla de tres simple"}),Object(h.jsx)("option",{value:"mango",children:"Logica"}),Object(h.jsx)("option",{value:"mango",children:"Ecuaciones"}),Object(h.jsx)("option",{value:"mango",children:"Inecuaciones"}),Object(h.jsx)("option",{value:"mango",children:"Valor Absoluto"}),Object(h.jsx)("option",{value:"mango",children:"Otros"})]})}),Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit",children:"universidad Nacional de San Marcos"}),Object(h.jsx)("option",{value:"lime",children:"Universidad del Callao"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"Universidad Nacional de Ingenieria"})]})}),Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsxs)("select",{className:"form-control",children:[Object(h.jsx)("option",{value:"grapefruit",children:"2021-1"}),Object(h.jsx)("option",{value:"lime",children:"2020-2"}),Object(h.jsx)("option",{selected:!0,value:"coconut",children:"2020-1"}),Object(h.jsx)("option",{value:"mango",children:"2019-2"}),Object(h.jsx)("option",{value:"mango",children:"2019-1"}),Object(h.jsx)("option",{value:"mango",children:"2018-2"}),Object(h.jsx)("option",{value:"mango",children:"2018-1"}),Object(h.jsx)("option",{value:"mango",children:"2017-2"}),Object(h.jsx)("option",{value:"mango",children:"Otros"})]})})]}),Object(h.jsx)("div",{className:"row my-3",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("button",{className:"btn btn-primary w-40 ",children:"Buscar"})})})]})}}]),t}(s.Component)),P=t(12),w=t(16),I=function(e){Object(r.a)(t,e);var c=Object(o.a)(t);function t(e){var s;return Object(a.a)(this,t),(s=c.call(this,e)).preguntas=[{id:4,universidad:"UNI",anio:"2014-II",preg:"./pr.jpg",sol:"./solucion.jpg",enunciado:"El enunciado de la pregunta es esta",keywords:["UNI","Quimica","Redox"]},{id:5,universidad:"UNFV",anio:"2014-II",preg:"./pr.jpg",sol:"./solucion.jpg",enunciado:"El enunciado de la pregunta es esta",keywords:["UNFV","Aritmetica","Divisivilidad"]},{id:10,universidad:"UNAC",anio:"2013-I",preg:"./pr.jpg",sol:"./solucion.jpg",enunciado:"El enunciado de la pregunta es esta",keywords:["UNAC","Algebra","factorizacion"]},{id:11,universidad:"UNFV",anio:"2010-II",preg:"./pr.jpg",sol:"./solucion.jpg",enunciado:"El enunciado de la pregunta es esta",keywords:["UNFV","Aritmetica","Divisivilidad"]},{id:12,universidad:"UNFV",anio:"2014-II",preg:"./pr.jpg",sol:"./solucion.jpg",enunciado:"El enunciado de la pregunta es esta",keywords:["UNFV","Aritmetica","Divisivilidad"]}],s}return Object(j.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"contenedor",children:Object(h.jsxs)(b.a,{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{children:Object(h.jsxs)("h1",{children:[Object(h.jsx)("img",{src:d}),"PLATAFORMA PASKAY"]})}),Object(h.jsxs)(b.b,{activeClassName:"selected-in",exact:"true",to:"/login",children:[" ",Object(h.jsx)(w.a,{icon:P.d,size:"1x"}),"Iniciar Sesion"]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)(b.b,{activeClassName:"selected",exact:"true",to:"/",children:[" ",Object(h.jsx)(w.a,{icon:P.b,size:"4x"}),Object(h.jsx)("span",{children:"Inicio"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(b.b,{activeClassName:"selected",exact:"true",to:"/upload",children:[Object(h.jsx)(w.a,{icon:P.c,size:"4x"}),Object(h.jsx)("span",{children:"Subir preg."})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(b.b,{activeClassName:"selected",exact:"true",to:"/generador",children:[Object(h.jsx)(w.a,{icon:P.a,size:"4x"}),Object(h.jsx)("span",{children:"Generador"})]})})]})})}),Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/login",component:f}),Object(h.jsx)(m.a,{path:"/generador",component:g}),Object(h.jsx)(m.a,{path:"/upload",component:N}),Object(h.jsx)(m.a,{path:"/",component:y})]})]})})}}]),t}(s.Component);var A=function(){return Object(h.jsx)(I,{})};l.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c704c3f4.chunk.js.map