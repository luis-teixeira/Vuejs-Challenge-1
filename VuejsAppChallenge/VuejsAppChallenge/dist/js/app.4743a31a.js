(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("f9e3"),a("15f5");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("TaskBoard")],1)},o=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar bg-primary navbar-expand-lg"},[a("div",{staticClass:"nav-brand text-light font-weight-bold"},[t._v("KanbanVue")])])}],l={name:"Header"},c=l,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mt-3"},[a("button",{staticClass:"btn btn-primary ml-3 mr-3",on:{click:function(e){return t.addBoard(t.boardName)}}},[t._v("add board")]),a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.boardName,expression:"boardName"}],staticClass:"form-control",attrs:{placeholder:"board name"},domProps:{value:t.boardName},on:{input:function(e){e.target.composing||(t.boardName=e.target.value)}}})])]),a("draggable",{staticClass:"row align-items-start",attrs:{handle:".handle"},model:{value:t.boards,callback:function(e){t.boards=e},expression:"boards"}},t._l(t.boards,(function(e,r){return a("div",{key:r,staticClass:"card card-board",attrs:{group:"boards"}},[a("div",{staticClass:"card-header font-weight-bold"},[e.editMode?a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"board.name"}],staticClass:"form-control form-editing",domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}):a("span",[t._v(t._s(e.name))]),a("i",{staticClass:"fas fa-sm ml-1",class:{"fa-edit":!e.editMode,"fa-check":e.editMode},attrs:{title:"edit board name"},on:{click:function(e){return t.toogleEditing(r)}}}),a("i",{staticClass:"fas fa-ellipsis-v fa-sm pull-right pt-2 handle"})]),a("div",{staticClass:"card-body"},[e.tasks.length>0?a("div",[a("i",{staticClass:"fas fa-sort-alpha-up cursor-pointer",on:{click:function(e){return t.sortTaskAlphabetically(r)}}}),a("hr",{staticClass:"mt-1 "})]):t._e(),a("ul",{staticClass:"list-unstyled mb-0"},[a("TaskCard",{attrs:{parentId:r}})],1)]),a("div",{staticClass:"card-footer text-muted"},[a("button",{staticClass:"btn btn-outline-primary btn-block",on:{click:function(e){return t.addTask(r)}}},[t._v("add task")]),e.editMode?a("button",{staticClass:"btn btn-danger btn-block",on:{click:function(e){return t.removeBoard(r)}}},[t._v("delele board "+t._s(r))]):t._e()])])})),0)],1)},m=[],b=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),v=a("2f62"),g=a("310e"),k=a.n(g),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("draggable",{attrs:{group:{name:"boards"}},model:{value:t.tasks,callback:function(e){t.tasks=e},expression:"tasks"}},t._l(t.tasks,(function(e,r){return a("li",{key:r,staticClass:"task shadow-sm p-3 mb-1 bg-white rounded sortable"},[e.editMode?a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"task.name"}],staticClass:"form-control form-editing",attrs:{placeholder:"Add Task Name "},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}):a("span",[t._v(t._s(e.name))]),a("i",{staticClass:"fas fa-sm ml-1 cursor-pointer",class:{"fa-edit":!e.editMode,"fa-check":e.editMode},attrs:{title:"edit task name"},on:{click:function(e){return t.toogleEditingTask({id:r,parentId:t.parentId})}}}),e.editMode?a("i",{staticClass:"fas fa-trash-alt fa-sm ml-1 text-danger cursor-pointer",on:{click:function(e){return t.removeTask({id:r,parentId:t.parentId})}}}):t._e()])})),0)],1)},O=[];function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){Object(b["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var T={name:"task-card",props:["parentId"],components:{draggable:k.a},computed:{tasks:{get:function(){return this.$store.state.boards.all[this.parentId].tasks},set:function(t){this.$store.commit("updateBoardsTasks",{parentId:this.parentId,list:t})}}},methods:j({},Object(v["b"])(["toogleEditingTask","removeTask"]))},w=T,_=(a("676f"),Object(d["a"])(w,h,O,!1,null,null,null)),C=_.exports;function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function B(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(Object(a),!0).forEach((function(e){Object(b["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var x={name:"TaskBoard",components:{TaskCard:C,draggable:k.a},data:function(){return{boardName:null}},computed:{boards:{get:function(){return this.$store.state.boards.all},set:function(t){this.$store.commit("updateBoards",t)}}},methods:B({},Object(v["b"])(["addBoard","removeBoard","addTask","toogleEditing","sortTaskAlphabetically"])),created:function(){}},E=x,M=(a("79d8"),Object(d["a"])(E,f,m,!1,null,null,null)),I=M.exports,$={name:"app",components:{Header:p,TaskBoard:I}},N=$,S=(a("034f"),Object(d["a"])(N,n,o,!1,null,null,null)),D=S.exports;a("4e82"),a("b0c0");function A(t){return t.sort((function(t,e){var a=t.name.toUpperCase(),r=e.name.toUpperCase();return a.localeCompare(r)})),t}var H={all:[{name:"welcome",editMode:!1,tasks:[]}]},F={updateBoards:function(t,e){var a=t.commit;a("updateBoards",e)},addBoard:function(t,e){var a=t.commit;a("pushBoard",e)},removeBoard:function(t,e){var a=t.commit;a("removeBoard",e)},addTask:function(t,e){var a=t.commit;a("pushTaskToBoard",e)},removeTask:function(t,e){var a=t.commit;a("deleteTaskFromBoard",e)},updateBoardsTasks:function(t,e){var a=t.commit;a("updateBoardsTasks",e)},toogleEditing:function(t,e){var a=t.commit;a("toogleEditing",e)},toogleEditingTask:function(t,e){var a=t.commit;a("toogleEditingTask",e)},sortTaskAlphabetically:function(t,e){var a=t.commit;a("sortTaskAlphabetically",e)}},J={updateBoards:function(t,e){t.all=e},pushBoard:function(t,e){t.all.push({name:e||null,editMode:!1,tasks:[]})},removeBoard:function(t,e){var a=t.all.filter((function(t,a){return a!==e}));t.all=a},pushTaskToBoard:function(t,e){t.all[e].tasks.push({name:"",editMode:!0})},deleteTaskFromBoard:function(t,e){var a=e.id,r=e.parentId,n=t.all[r].tasks.filter((function(t,e){return e!==a}));t.all[r].tasks=n},updateBoardsTasks:function(t,e){var a=e.parentId,r=e.list;t.all[a].tasks=r},toogleEditing:function(t,e){t.all[e].editMode=!t.all[e].editMode},toogleEditingTask:function(t,e){var a=e.id,r=e.parentId;t.all[r].tasks[a].editMode=!t.all[r].tasks[a].editMode},sortTaskAlphabetically:function(t,e){t.all[e].tasks=A(t.all[e].tasks)}},U={state:H,mutations:J,actions:F};r["a"].use(v["a"]);var K=new v["a"].Store({modules:{boards:U}});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(D)},store:K}).$mount("#app")},"676f":function(t,e,a){"use strict";var r=a("d693"),n=a.n(r);n.a},"79d8":function(t,e,a){"use strict";var r=a("82ea"),n=a.n(r);n.a},"82ea":function(t,e,a){},"85ec":function(t,e,a){},d693:function(t,e,a){}});
//# sourceMappingURL=app.4743a31a.js.map