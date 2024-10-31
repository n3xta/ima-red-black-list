(function(){"use strict";var n={6054:function(n,t,o){var e=o(3751),r=o(641);const i={id:"app"};function u(n,t,o,e,u,s){const c=(0,r.g2)("CourseList");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(c)])}var s=o(33);const c=["onClick"],a=["onClick"];function f(n,t,o,e,i,u){return(0,r.uX)(),(0,r.CE)("div",null,[t[0]||(t[0]=(0,r.Lk)("h1",null,"IMA Red Black List",-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.courses,(n=>((0,r.uX)(),(0,r.CE)("div",{key:n.id,class:"course-item"},[(0,r.Lk)("h3",null,(0,s.v_)(n.name),1),(0,r.Lk)("button",{onClick:t=>u.upvote(n.id)},"👍 "+(0,s.v_)(n.upvotes),9,c),(0,r.Lk)("button",{onClick:t=>u.downvote(n.id)},"👎 "+(0,s.v_)(n.downvotes),9,a)])))),128))])}o(8992),o(2577),o(1454);var l={data(){return{courses:[]}},created(){fetch("https://n3xta.github.io/ima-red-black-list/public/courses.json").then((n=>n.json())).then((n=>{this.courses=n.map((n=>({...n,upvotes:0,downvotes:0})))}))},methods:{upvote(n){const t=this.courses.find((t=>t.id===n));t.upvotes++},downvote(n){const t=this.courses.find((t=>t.id===n));t.downvotes++}}},v=o(6262);const d=(0,v.A)(l,[["render",f],["__scopeId","data-v-23d3f325"]]);var p=d,h={name:"App",components:{CourseList:p}};const b=(0,v.A)(h,[["render",u]]);var k=b;(0,e.Ef)(k).mount("#app")}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return n[e].call(i.exports,i,i.exports,o),i.exports}o.m=n,function(){var n=[];o.O=function(t,e,r,i){if(!e){var u=1/0;for(f=0;f<n.length;f++){e=n[f][0],r=n[f][1],i=n[f][2];for(var s=!0,c=0;c<e.length;c++)(!1&i||u>=i)&&Object.keys(o.O).every((function(n){return o.O[n](e[c])}))?e.splice(c--,1):(s=!1,i<u&&(u=i));if(s){n.splice(f--,1);var a=r();void 0!==a&&(t=a)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[e,r,i]}}(),function(){o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,i,u=e[0],s=e[1],c=e[2],a=0;if(u.some((function(t){return 0!==n[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var f=c(o)}for(t&&t(e);a<u.length;a++)i=u[a],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(f)},e=self["webpackChunkima_red_black_list"]=self["webpackChunkima_red_black_list"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[504],(function(){return o(6054)}));e=o.O(e)})();
//# sourceMappingURL=app.cf4dab12.js.map