(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(26)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),i=n.n(r),s=(n(16),n(6)),c=n.n(s),l=n(9),u=n(1),p=n(2),m=n(4),h=n(3),v=n(5),f=(n(20),n(22),n(10)),d=n.n(f),b=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Movie"},a.a.createElement("div",{className:"Movie__columns"},a.a.createElement(O,{poster:this.props.poster,title:this.props.title})),a.a.createElement("div",{className:"Movie__columns"},a.a.createElement("h1",null,this.props.title),a.a.createElement("div",{className:"Movie__Genres"},this.props.genres.map(function(e,t){return a.a.createElement(j,{genre:e,key:t})})),a.a.createElement("p",null,a.a.createElement(d.a,{text:this.props.synopsis,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))}}]),t}(a.a.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("span",{className:"Movie__Genre"},this.props.genre)}}]),t}(a.a.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("img",{src:this.props.poster,alt:this.props.title,title:this.props.title,className:"Movie__Poster"})}}]),t}(a.a.Component),_=b,g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._renderMovies=function(){return n.state.movies.map(function(e){return a.a.createElement(_,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount")}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this._getMovies()}},{key:"render",value:function(){return console.log("render"),a.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading...")}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.c8c699e2.chunk.js.map