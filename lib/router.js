Router.configure({
	layoutTemplate:'layout',
	loadingTemplate:'loading',
	notFoundTemplate:'notFound',
	waitOn:function() {
		return Meteor.subscribe('posts');		
	},
});

Router.route('/',{name:'postsList'});

/*
  :_id 告诉路由器两件事
  1.去匹配任何符合/posts/xyz/格式的路线
  2.无论xyz里是什么，都会把它放到路由器的params数组中的_id属性里面去。
*/

Router.route('/posts/:_id',{
	name:'postPage',
	data:function() {
		return Posts.findOne(this.params._id);
	},
})

// Router.route('/posts/:title',{
// 	name:'postPage',
// 	data:function() {
// 		return Posts.findOne({title:this.params.title});
// 	},
// })

/*
Iron Router在非法路由情况下而且仅在postPage路由，当data函数返回null,false,undefined或空时，
显示无法找到的页面。
*/
Router.onBeforeAction('dataNotFound',{only:'postPage'})