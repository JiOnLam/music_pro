(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfe5fd6c"],{1276:function(t,n,e){"use strict";var i=e("d784"),r=e("44e7"),a=e("825a"),s=e("1d80"),c=e("4840"),o=e("8aa5"),l=e("50c4"),u=e("14c3"),f=e("9263"),p=e("d039"),g=[].push,d=Math.min,h=4294967295,v=!p((function(){return!RegExp(h,"y")}));i("split",2,(function(t,n,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(s(this)),a=void 0===e?h:e>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return n.call(i,t,a);var c,o,l,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,p+"g");while(c=f.call(v,i)){if(o=v.lastIndex,o>d&&(u.push(i.slice(d,c.index)),c.length>1&&c.index<i.length&&g.apply(u,c.slice(1)),l=c[0].length,d=o,u.length>=a))break;v.lastIndex===c.index&&v.lastIndex++}return d===i.length?!l&&v.test("")||u.push(""):u.push(i.slice(d)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var r=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,r,e):i.call(String(r),n,e)},function(t,r){var s=e(i,t,this,r,i!==n);if(s.done)return s.value;var f=a(t),p=String(this),g=c(f,RegExp),x=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),b=new g(v?f:"^(?:"+f.source+")",y),m=void 0===r?h:r>>>0;if(0===m)return[];if(0===p.length)return null===u(b,p)?[p]:[];var E=0,A=0,R=[];while(A<p.length){b.lastIndex=v?A:0;var $,w=u(b,v?p:p.slice(A));if(null===w||($=d(l(b.lastIndex+(v?0:A)),p.length))===E)A=o(p,A,x);else{if(R.push(p.slice(E,A)),R.length===m)return R;for(var I=1;I<=w.length-1;I++)if(R.push(w[I]),R.length===m)return R;A=E=$}}return R.push(p.slice(E)),R}]}),!v)},"14c3":function(t,n,e){var i=e("c6b6"),r=e("9263");t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var a=e.call(t,n);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,n)}},"1dde":function(t,n,e){var i=e("d039"),r=e("b622"),a=e("2d00"),s=r("species");t.exports=function(t){return a>=51||!i((function(){var n=[],e=n.constructor={};return e[s]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"25f0":function(t,n,e){"use strict";var i=e("6eeb"),r=e("825a"),a=e("d039"),s=e("ad6d"),c="toString",o=RegExp.prototype,l=o[c],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=c;(u||f)&&i(RegExp.prototype,c,(function(){var t=r(this),n=String(t.source),e=t.flags,i=String(void 0===e&&t instanceof RegExp&&!("flags"in o)?s.call(t):e);return"/"+n+"/"+i}),{unsafe:!0})},"3fae":function(t,n,e){"use strict";e("8026")},"44e7":function(t,n,e){var i=e("861d"),r=e("c6b6"),a=e("b622"),s=a("match");t.exports=function(t){var n;return i(t)&&(void 0!==(n=t[s])?!!n:"RegExp"==r(t))}},"4d63":function(t,n,e){var i=e("83ab"),r=e("da84"),a=e("94ca"),s=e("7156"),c=e("9bf2").f,o=e("241c").f,l=e("44e7"),u=e("ad6d"),f=e("9f7f"),p=e("6eeb"),g=e("d039"),d=e("69f3").set,h=e("2626"),v=e("b622"),x=v("match"),y=r.RegExp,b=y.prototype,m=/a/g,E=/a/g,A=new y(m)!==m,R=f.UNSUPPORTED_Y,$=i&&a("RegExp",!A||R||g((function(){return E[x]=!1,y(m)!=m||y(E)==E||"/a/i"!=y(m,"i")})));if($){var w=function(t,n){var e,i=this instanceof w,r=l(t),a=void 0===n;if(!i&&r&&t.constructor===w&&a)return t;A?r&&!a&&(t=t.source):t instanceof w&&(a&&(n=u.call(t)),t=t.source),R&&(e=!!n&&n.indexOf("y")>-1,e&&(n=n.replace(/y/g,"")));var c=s(A?new y(t,n):y(t,n),i?this:b,w);return R&&e&&d(c,{sticky:e}),c},I=function(t){t in w||c(w,t,{configurable:!0,get:function(){return y[t]},set:function(n){y[t]=n}})},S=o(y),k=0;while(S.length>k)I(S[k++]);b.constructor=w,w.prototype=b,p(r,"RegExp",w)}h("RegExp")},5847:function(t,n,e){t.exports=e.p+"img/10.d3bdd108.png"},6547:function(t,n,e){var i=e("a691"),r=e("1d80"),a=function(t){return function(n,e){var a,s,c=String(r(n)),o=i(e),l=c.length;return o<0||o>=l?t?"":void 0:(a=c.charCodeAt(o),a<55296||a>56319||o+1===l||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):a:t?c.slice(o,o+2):s-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,n,e){var i=e("861d"),r=e("e8b5"),a=e("b622"),s=a("species");t.exports=function(t,n){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?i(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},7156:function(t,n,e){var i=e("861d"),r=e("d2bb");t.exports=function(t,n,e){var a,s;return r&&"function"==typeof(a=n.constructor)&&a!==e&&i(s=a.prototype)&&s!==e.prototype&&r(t,s),t}},8026:function(t,n,e){},"8aa5":function(t,n,e){"use strict";var i=e("6547").charAt;t.exports=function(t,n,e){return n+(e?i(t,n).length:1)}},9263:function(t,n,e){"use strict";var i=e("ad6d"),r=e("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,o=function(){var t=/a/,n=/b*/g;return a.call(t,"a"),a.call(n,"a"),0!==t.lastIndex||0!==n.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||l;f&&(c=function(t){var n,e,r,c,f=this,p=l&&f.sticky,g=i.call(f),d=f.source,h=0,v=t;return p&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(d="(?: "+d+")",v=" "+v,h++),e=new RegExp("^(?:"+d+")",g)),u&&(e=new RegExp("^"+d+"$(?!\\s)",g)),o&&(n=f.lastIndex),r=a.call(p?e:f,v),p?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=f.lastIndex,f.lastIndex+=r[0].length):f.lastIndex=0:o&&r&&(f.lastIndex=f.global?r.index+r[0].length:n),u&&r&&r.length>1&&s.call(r[0],e,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),t.exports=c},"9f7f":function(t,n,e){"use strict";var i=e("d039");function r(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a366:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABt0lEQVRYR+2WMWvbUBDH/xchgulSU2ykUwwdu3YrdHIIhEKHjF4ymmz9BkkT2o+QJXQsgRYyZUsGLyFLhnTo0qFj9J5ACu5QXLD6fEVQgTY/W8JvseZ7+v10p7t3BMcPOeZjLdB4BpIkeWWM6UZRdGlT3kYF4jgeENFnABkzhysVUEoNAZwB+C0ib6Ioul2ZgNb6SEROROTR87x+EATfbeBFTK0SiAhprYuvHorIg+/7/W63+9MWXktARDaUUudENADww/f97U6noxeBLy0gIptKqQsiegvgrtVq7bbb7V+LwpcSSJLkiTHmioheA7g2xuz1er0/y8AXFhiPx08nk8mIiF6KyBdm3ieiv8vCFxJI0zTM83wE4IWInDLzOyKSOnBrAa3189lsdkNEW0R0FIbhh7rg8vzcNkzTlPM8/wagA+CAmT81BbfKQJZl0XQ6vXcmUFhWSwDgkJk/NpWFuSUoQU5/wlLCaRuWEk4HUSnhdBRXJNxdRhUJd9dxtQ211u9F5HjlC0lVwulKVor8X0rPAaTMHNgMK+tBZPOyIiaO4x3P854FQfDV5kzjAjbQasxawHkG/gHA0uMh9Rk1pgAAAABJRU5ErkJggg=="},a640:function(t,n,e){"use strict";var i=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&i((function(){e.call(null,n||function(){throw 1},1)}))}},ac1f:function(t,n,e){"use strict";var i=e("23e7"),r=e("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,n,e){"use strict";var i=e("825a");t.exports=function(){var t=i(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},ae40:function(t,n,e){var i=e("83ab"),r=e("d039"),a=e("5135"),s=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,n){if(a(c,t))return c[t];n||(n={});var e=[][t],l=!!a(n,"ACCESSORS")&&n.ACCESSORS,u=a(n,0)?n[0]:o,f=a(n,1)?n[1]:void 0;return c[t]=!!e&&!r((function(){if(l&&!i)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:o}):t[1]=1,e.call(t,u,f)}))}},b0c0:function(t,n,e){var i=e("83ab"),r=e("9bf2").f,a=Function.prototype,s=a.toString,c=/^\s*function ([^ (]*)/,o="name";i&&!(o in a)&&r(a,o,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,n,e){var i=e("0366"),r=e("44ad"),a=e("7b0b"),s=e("50c4"),c=e("65f0"),o=[].push,l=function(t){var n=1==t,e=2==t,l=3==t,u=4==t,f=6==t,p=7==t,g=5==t||f;return function(d,h,v,x){for(var y,b,m=a(d),E=r(m),A=i(h,v,3),R=s(E.length),$=0,w=x||c,I=n?w(d,R):e||p?w(d,0):void 0;R>$;$++)if((g||$ in E)&&(y=E[$],b=A(y,$,m),t))if(n)I[$]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return $;case 2:o.call(I,y)}else switch(t){case 4:return!1;case 7:o.call(I,y)}return f?-1:l||u?u:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},bf5c:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Play")],1)},r=[],a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content"},[i("div",{staticClass:"back",on:{click:t.back}},[i("img",{attrs:{src:e("a366")}})]),i("div",{staticClass:"pic1",style:{transform:t.isPlaying?"":"rotate(-20deg)"}}),i("div",{staticClass:"bgImg"},[i("img",{attrs:{src:""+t.picUrl,alt:""}})]),i("audio",{ref:"player",attrs:{src:"https://music.163.com/song/media/outer/url?id="+this.$root.playingMusic.musicID+".mp3",autoplay:""},on:{timeupdate:t.updataTime}}),i("div",{staticClass:"details"},[i("div",{staticClass:"box"},[i("div",{ref:"boxbg",staticClass:"boxbg"},[i("img",{attrs:{src:e("5847"),alt:""}}),i("div",{staticClass:"boxPic"},[i("img",{attrs:{src:""+t.picUrl}})])])]),i("div",{staticClass:"tit"},[i("h2",[t._v(t._s(t.musicName))]),i("p",[t._v(" 作者:"),i("span",[t._v(t._s(t.ar))])])]),i("div",{staticClass:"geci"},[t._v("歌词数据获取不到。。。")])]),i("div",{staticClass:"big_desk"},[i("div",{staticClass:"small_desk",style:"width:"+t.percentage})]),i("div",{staticClass:"desk"},[i("ul",[i("li",[i("i",{on:{click:t.prev}})]),i("li",[i("i",{style:{"background-position":t.isPlaying?"-2px -166px":"-2px -205px"},on:{click:t.togglePlay}})]),i("li",[i("i",{on:{click:t.next}})])])])])},s=[],c=(e("c975"),e("d81d"),e("b0c0"),e("4d63"),e("ac1f"),e("25f0"),e("1276"),{data:function(){return{song:[],picUrl:"",lrcArr:[],musicName:"null",ar:"null",isPlaying:!0,percentage:"0%"}},methods:{updataTime:function(){this.isPlaying=!0,this.$refs.boxbg.style.animationPlayState="running";var t=this.$refs.player.currentTime/this.$refs.player.duration;this.percentage=100*t+"%";var n=this.$root.playingMusic.nowList.indexOf(this.$root.playingMusic.musicID),e=n+1,i=this.$root.playingMusic.nowList[e];console.log(this.$refs.player.currentTime),console.log(this.$refs.player.duration),this.$refs.player.currentTime>=this.$refs.player.duration&&(this.percentage="0%",this.$refs.boxbg.style.animationPlayState="paused",this.$root.playingMusic.musicID=i,this.isPlaying=!1)},prev:function(){var t=this.$root.playingMusic.nowList.indexOf(this.$root.playingMusic.musicID)-1;t<0&&(t=this.$root.playingMusic.nowList.length-1),this.$root.playingMusic.musicID=this.$root.playingMusic.nowList[t]},next:function(){var t=this.$root.playingMusic.nowList.indexOf(this.$root.playingMusic.musicID)+1;t>=this.$root.playingMusic.nowList.length&&(t=0),this.$root.playingMusic.musicID=this.$root.playingMusic.nowList[t]},togglePlay:function(){this.isPlaying?(this.$refs.player.pause(),this.$refs.boxbg.style.animationPlayState="paused",this.isPlaying=!1):(this.$refs.player.play(),this.$refs.boxbg.style.animationPlayState="running",this.isPlaying=!0)},back:function(){this.$root.playingMusic.isTopNav=!0,this.$router.back()},getDetail:function(t){var n=this;this.$http.get("/song/detail?ids="+t).then((function(t){n.song=t.data.songs,n.picUrl=n.song[0].al.picUrl,n.musicName=n.song[0].name,n.ar=n.song[0].ar[0].name})),this.$http.defaults.baseURL="http://music/kele8.cn",this.$http.get("/lyric?id="+t).then((function(t){console.log(t);var e=t.data.lrc.lyric,i=e.split(/\n/),r=/\[(\d+):(\d+\.\d+)\](.+)/;n.lrcArr=i.map((function(t){return r.test(t),{time:parseInt(60*RegExp.$1)+parseFloat(RegExp.$2),lyric:RegExp.$3}})),console.log(n.lrcArr)})).catch((function(t){console.log(t)})),this.$http.defaults.baseURL="http://musicapi.leanapp.cn/"}},created:function(){this.getDetail(this.$root.playingMusic.musicID)},beforeUpdate:function(){this.getDetail(this.$root.playingMusic.musicID)}}),o=c,l=(e("3fae"),e("2877")),u=Object(l["a"])(o,a,s,!1,null,"14026c92",null),f=u.exports,p={components:{Play:f}},g=p,d=Object(l["a"])(g,i,r,!1,null,null,null);n["default"]=d.exports},c975:function(t,n,e){"use strict";var i=e("23e7"),r=e("4d64").indexOf,a=e("a640"),s=e("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:o||!l||!u},{indexOf:function(t){return o?c.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},d784:function(t,n,e){"use strict";e("ac1f");var i=e("6eeb"),r=e("d039"),a=e("b622"),s=e("9263"),c=e("9112"),o=a("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),g=!r((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,f){var d=a(t),h=!r((function(){var n={};return n[d]=function(){return 7},7!=""[t](n)})),v=h&&!r((function(){var n=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[o]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return n=!0,null},e[d](""),!n}));if(!h||!v||"replace"===t&&(!l||!u||p)||"split"===t&&!g){var x=/./[d],y=e(d,""[t],(function(t,n,e,i,r){return n.exec===s?h&&!r?{done:!0,value:x.call(n,e,i)}:{done:!0,value:t.call(e,n,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=y[0],m=y[1];i(String.prototype,t,b),i(RegExp.prototype,d,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},d81d:function(t,n,e){"use strict";var i=e("23e7"),r=e("b727").map,a=e("1dde"),s=e("ae40"),c=a("map"),o=s("map");i({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,n,e){var i=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-bfe5fd6c.4fcd3820.js.map