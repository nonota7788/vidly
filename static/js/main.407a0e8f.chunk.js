(this.webpackJsonpvidly__02=this.webpackJsonpvidly__02||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),l=n.n(i),r=(n(21),n(15)),o=n(14),b=n(2),d=n(3),m=n(6),u=n(5),s=n(4),f=n(11),h=function(e){var t=e.onLike,n=e.isLiked;return c.a.createElement(f.a,{icon:n?"heart":["far","heart"],onClick:t})},v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movie,n=e.onDelete,a=e.onLike;return c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},t.title),c.a.createElement("td",null,t.genre.name),c.a.createElement("td",null,t.numberInStock),c.a.createElement("td",null,t.dailyRentalRate),c.a.createElement("td",null,c.a.createElement(h,{onLike:a,isLiked:t.isLiked})),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-danger",onClick:function(){return n(t)}},"Delete")))}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.onDelete,a=e.onLike;return c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"title"),c.a.createElement("th",{scope:"col"},"Genre"),c.a.createElement("th",{scope:"col"},"Stock"),c.a.createElement("th",{scope:"col"},"Rate"),c.a.createElement("th",null),c.a.createElement("th",null))),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement(v,{key:e._id,movie:e,onDelete:n,onLike:function(){return a(e)}})}))))}}]),n}(a.Component),p=function(e){var t=e.movieNum;return c.a.createElement("nav",{className:"navbar navbar-light"},c.a.createElement("span",{className:"navbar-brand mb-0 h1"},t?"Showing ".concat(t," "):"There are no"," movies in the database"))};n(27);var E=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var y=n(7),_=n(12),R=n(13);y.b.add(_.a,R.a);var g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).state={movies:[]},e.handleDelete=e.handleDelete.bind(Object(m.a)(e)),e.handleLike=e.handleLike.bind(Object(m.a)(e)),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=E;e=e.map((function(e){return e.isLiked=!1,e})),this.setState({movies:e})}},{key:"handleLike",value:function(e){var t=Object(o.a)(this.state.movies),n=t.indexOf(e);t[n]=Object(r.a)({},t[n]),t[n].isLiked=!t[n].isLiked,this.setState({movies:t})}},{key:"handleDelete",value:function(e){var t=this.state.movies.filter((function(t){return t._id!==e._id}));this.setState({movies:t})}},{key:"render",value:function(){return console.log("App-render"),c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"container"},c.a.createElement(p,{movieNum:this.state.movies.length}),c.a.createElement(k,{movies:this.state.movies,onDelete:this.handleDelete,onLike:this.handleLike})))}}]),n}(a.Component);n(28);l.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.407a0e8f.chunk.js.map