(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={seat:"Seat_seat__14lBq",placeholder:"Seat_placeholder__1ej2s",tooltip:"Seat_tooltip__bhRCu",info:"Seat_info__mWKh8",occupied:"Seat_occupied__3eau3",disabled:"Seat_disabled__3I-SA",vip:"Seat_vip__32kyb",input:"Seat_input__2AlBD",selected:"Seat_selected__2Qii5"}},115:function(e,t,a){e.exports=a(190)},14:function(e,t,a){e.exports={root:"Slider_root__2ZNu_",inner:"Slider_inner__FzTou",slides:"Slider_slides__3X4yM",control:"Slider_control__1O6TH"}},15:function(e,t,a){e.exports={row:"SeatRow_row__1KFOS",info:"SeatRow_info__1epd9",right:"SeatRow_right__2oUlR",number:"SeatRow_number__2v0KS",left:"SeatRow_left__3V-ww"}},184:function(e,t,a){},185:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);a(116),a(152);var n=a(0),c=a.n(n),r=a(45),s=a.n(r),i=(a(184),a(107)),l=a(108),o=a(113),d=a(109),u=a(114),m=(a(185),a(3)),_=a(46),S=a(6),f=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"],E=["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"],p=function(){for(var e=[],t=Date.now(),a=t-6048e5;a<=t+6048e5;a+=864e5){var n=new Date(a),c=f[n.getMonth()].length>5?f[n.getMonth()].slice(0,3):f[n.getMonth()];e.push({label:n.getDate()+" "+c+", "+E[n.getDay()],value:n.toISOString().substr(0,10)})}return e},v=a(14),b=a.n(v),h=a(2),N=a.n(h);var O=function(e){var t,a=Object(n.useState)(e.initialIndex),r=Object(_.a)(a,2),s=r[0],i=r[1];Object(n.useEffect)(function(){var a=Math.ceil(e.children.length-t.offsetWidth/e.slideWidth);s>a&&i(a)},[e.initialIndex]);var l=e.slideWidth*s;return c.a.createElement("div",{className:b.a.root},c.a.createElement("button",{onClick:function(){s>0&&i(s-1)},className:N()(b.a.control,b.a.prev),disabled:s<1},"\u276e"),c.a.createElement("div",{className:b.a.inner,ref:function(e){return t=e}},c.a.createElement("div",{className:b.a.slides,style:{transform:"translateX(-".concat(l,"px)")}},e.children)),c.a.createElement("button",{onClick:function(){var a=Math.ceil(e.children.length-t.offsetWidth/e.slideWidth);s<a&&i(s+1)},className:N()(b.a.control,b.a.next),disabled:!1},"\u276f"))},w=a(23),k=a.n(w);var g=Object(S.b)(function(e){return{value:e.selectedDate}},function(e){return{selectDate:function(t){return e(function(e){return{type:"SELECT_DATE",date:e}}(t))}}})(function(e){var t=e.selectDate,a=e.value,n=function(e){t(e.target.value)},r=p();return c.a.createElement(O,{slideWidth:136,initialIndex:r.findIndex(function(e){return e.value===a})},r.map(function(e,t){var r=e.label.split(","),s=Object(_.a)(r,2),i=s[0],l=s[1];return c.a.createElement("label",{key:e.value,className:N()(k.a.label,Object(m.a)({},k.a.active,e.value===a))},c.a.createElement("input",{className:k.a.input,type:"radio",value:e.value,name:"date",onChange:n}),c.a.createElement("span",{className:k.a.date},i),c.a.createElement("span",{className:k.a.day},l))}))}),T=a(35),D=a.n(T);var y=Object(S.b)(function(e){return{value:e.selectedTime}},function(e){return{selectSession:function(t){return e(function(e){return{type:"SELECT_SESSION",session:e}}(t))}}})(function(e){for(var t=e.value,a=e.selectSession,n=function(e){a(e.target.value)},r=[],s=10;s<=20;s+=2)r.push("".concat(s,":00"));return c.a.createElement("div",{className:D.a.root},r.map(function(e){return c.a.createElement("label",{key:e,className:N()(D.a.label,Object(m.a)({},D.a.active,e===t))},c.a.createElement("input",{className:D.a.input,type:"radio",value:e,name:"time",onChange:n}),e)}))}),j=a(1),I=a.n(j);var A=Object(S.b)(function(e){return{selectedSeats:e.selectedSeats}},function(e){return{selectSeat:function(t){return e(function(e){return{type:"SELECT_SEAT",seat:e}}(t))},deselectSeat:function(t){return e(function(e){return{type:"DESELECT_SEAT",seat:e}}(t))}}})(function(e){var t,a=-1!==e.selectedSeats.findIndex(function(t){return t.row===e.position.row&&t.col===e.position.col});return c.a.createElement("label",{className:N()(I.a.seat,(t={},Object(m.a)(t,I.a.occupied,e.isOccupied),Object(m.a)(t,I.a.vip,e.isVip),Object(m.a)(t,I.a.selected,a),Object(m.a)(t,I.a.disabled,e.isArchive),t))},c.a.createElement("span",{className:I.a.tooltip},c.a.createElement("span",{className:I.a.info},"\u0420\u044f\u0434: ".concat(e.position.row)),c.a.createElement("span",{className:I.a.info},"\u041c\u0435\u0441\u0442\u043e: ".concat(e.position.col))),c.a.createElement("input",{type:"checkbox",className:I.a.input,checked:a,onChange:function(){a?e.deselectSeat(e.position):e.selectSeat(e.position)},disabled:e.isOccupied||e.isArchive}))}),x=function(){return c.a.createElement("div",{className:I.a.placeholder})},C=a(15),P=a.n(C);var L=function(e){return c.a.createElement("div",{className:P.a.row},c.a.createElement("div",{className:N()(P.a.info,P.a.left)},c.a.createElement("span",{className:P.a.number},e.number)),e.children,c.a.createElement("div",{className:N()(P.a.info,P.a.right)},c.a.createElement("span",{className:P.a.number},e.number)))},R=a(9),X=a.n(R);var U=function(){return c.a.createElement("div",{className:X.a.root},c.a.createElement("div",{className:X.a.description},c.a.createElement("div",{className:N()(X.a.demo,I.a.seat,I.a.disabled)}),"- \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"),c.a.createElement("div",{className:X.a.description},c.a.createElement("div",{className:N()(X.a.demo,I.a.seat,I.a.disabled,I.a.vip)}),"- \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 VIP \u043c\u0435\u0441\u0442\u043e"),c.a.createElement("div",{className:X.a.description},c.a.createElement("div",{className:N()(X.a.demo,I.a.seat,I.a.disabled,I.a.occupied)}),"- \u043c\u0435\u0441\u0442\u043e \u0437\u0430\u043d\u044f\u0442\u043e"),c.a.createElement("div",{className:X.a.description},c.a.createElement("div",{className:N()(X.a.demo,I.a.seat,I.a.disabled,I.a.selected)}),"- \u043c\u0435\u0441\u0442\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043e"))},W=a(36),K=a.n(W);var V=Object(S.b)(function(e){var t=e.selectedDate+"T"+e.selectedTime;return{isArchive:Date.parse(t)<Date.now(),occupiedSeats:e.bookedSeats[t]}})(function(e){var t=function(t,a){return!!e.occupiedSeats&&-1!==e.occupiedSeats.findIndex(function(e){return e.row===t&&e.col===a})};return c.a.createElement("div",{className:N()(K.a.root,Object(m.a)({},K.a.disabled,e.isArchive))},c.a.createElement("div",{className:K.a.screen},"\u042d\u043a\u0440\u0430\u043d"),c.a.createElement("div",{className:K.a.seats},e.hallPlan.map(function(a,n){var r=0;return c.a.createElement(L,{key:++n,number:n},a.split("").map(function(a,s){if("0"!==a){var i={row:n,col:++r};return c.a.createElement(A,{key:s,position:i,isOccupied:t(n,r),isVip:"2"===a,isArchive:e.isArchive})}return c.a.createElement(x,{key:s})}))})),c.a.createElement(U,null))}),B=a(4),F=a.n(B),J=function(e){var t=[];return e.sort(function(e,t){return e.row-t.row}).forEach(function(e,a,n){0===a||n[a-1].row!==e.row?t.push({row:e.row,cols:[e.col]}):t[t.length-1].cols.push(e.col)}),t};var M=Object(S.b)(function(e){var t=e.selectedDate+"T"+e.selectedTime;return{reducedSelectedSeats:J(e.selectedSeats),selectedSeats:e.selectedSeats,selectedDateTime:t,selectedSession:e.selectedTime,selectedDate:e.selectedDate,isArchive:Date.parse(t)<Date.now()}},function(e){return{bookSeats:function(t,a){return e(function(e,t){return{type:"BOOK_SEATS",session:e,seats:t}}(t,a))},clearSeats:function(){return e({type:"CLEAR_SEATS"})}}})(function(e){return c.a.createElement("div",{className:N()(F.a.root,Object(m.a)({},F.a.disabled,e.isArchive))},c.a.createElement("div",{className:F.a.info},c.a.createElement("div",{className:F.a.sessionInfo},c.a.createElement("h3",{className:F.a.header},"\u0412\u0435\u0440\u043c\u044f \u0441\u0435\u0430\u043d\u0441\u0430:"),c.a.createElement("div",{className:F.a.time},e.selectedSession),c.a.createElement("h3",{className:F.a.header},"\u0414\u0430\u0442\u0430 \u0441\u0435\u0430\u043d\u0441\u0430:"),c.a.createElement("div",{className:F.a.date},e.selectedDate.split("-").reverse().join("."))),c.a.createElement("div",{className:F.a.seatsInfo},c.a.createElement("h3",{className:F.a.header},"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0441\u0442\u0430:"),e.reducedSelectedSeats.length?e.reducedSelectedSeats.map(function(e){return c.a.createElement("span",{className:F.a.seats,key:e.row},"\u0440\u044f\u0434 ".concat(e.row,", \u043c\u0435\u0441\u0442\u0430 ").concat(e.cols.join(", ")))}):c.a.createElement("span",{className:F.a.noSeats},"\u041d\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442"))),c.a.createElement("div",{className:F.a.controls},c.a.createElement("button",{className:F.a.confirm,onClick:function(){e.bookSeats(e.selectedDateTime,e.selectedSeats),e.clearSeats()},disabled:e.selectedSeats.length<1},"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u0435\u0441\u0442\u0430"),c.a.createElement("button",{className:F.a.cancel,onClick:function(){e.clearSeats()},disabled:e.selectedSeats.length<1},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c")))}),q=["0001111111100000","0011122221110000","0111222222111000","1112222222211100","1112222222211100","1111111111111111"],G=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement(g,null),c.a.createElement(y,null),c.a.createElement(V,{hallPlan:q}),c.a.createElement(M,null))}}]),t}(n.Component),z=a(22),H=a(111),Q=(new Date).toISOString().slice(0,10),Z=a(112),Y=Object(z.b)({bookedSeats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOK_SEATS":return Object(H.a)({},e,Object(m.a)({},t.session,e[t.session]?e[t.session].concat(t.seats):t.seats));default:return e}},selectedDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_DATE":return t.date;default:return e}},selectedTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10:00",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_SESSION":return t.session;default:return e}},selectedSeats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_SEATS":return[];case"SELECT_SEAT":return[].concat(Object(Z.a)(e),[t.seat]);case"DESELECT_SEAT":return e.filter(function(e){return e.row!==t.seat.row||e.col!==t.seat.col});default:return e}}}),$=function(){var e=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{};return e.bookedSeats&&Object.keys(e.bookedSeats).forEach(function(t){Date.now()-Date.parse(t)>6048e5&&delete e.bookedSeats[t]}),e}(),ee=Object(z.c)(Y,$,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());ee.subscribe(function(){localStorage.setItem("reduxState",JSON.stringify(ee.getState()))}),s.a.render(c.a.createElement(S.a,{store:ee},c.a.createElement(G,null)),document.getElementById("root"))},23:function(e,t,a){e.exports={label:"DatePIcker_label__1vGYG",active:"DatePIcker_active__Etlsz",input:"DatePIcker_input__3m1K3",date:"DatePIcker_date__OHtI4",day:"DatePIcker_day__1X-Xi"}},35:function(e,t,a){e.exports={root:"TimePicker_root__nuJnx",label:"TimePicker_label__UWni9",active:"TimePicker_active__1LLwF",input:"TimePicker_input__f9elb"}},36:function(e,t,a){e.exports={root:"SeatPicker_root__1-dBK",disabled:"SeatPicker_disabled__3kQ0U",screen:"SeatPicker_screen__2-etU"}},4:function(e,t,a){e.exports={root:"Sidebar_root__9onfp",disabled:"Sidebar_disabled__PLhwy",sessionInfo:"Sidebar_sessionInfo__2cEeq",header:"Sidebar_header__20L-U",time:"Sidebar_time__1EJ1V",controls:"Sidebar_controls__p4qlG",confirm:"Sidebar_confirm__1Sw5G",cancel:"Sidebar_cancel__lq39Z",seats:"Sidebar_seats__1mg7E"}},9:function(e,t,a){e.exports={root:"SeatPickerFooter_root__2C5aP",description:"SeatPickerFooter_description__2o9q8",demo:"SeatPickerFooter_demo__AU6Xw"}}},[[115,1,2]]]);
//# sourceMappingURL=main.6edc671a.chunk.js.map