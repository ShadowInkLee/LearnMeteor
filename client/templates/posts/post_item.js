Template.postItem.helpers({
	domain:function() {
		debugger;
		var a=document.createElement('a');
		a.href=this.url;
		return a.hostname;	
	},
})