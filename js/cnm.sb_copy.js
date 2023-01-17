// 返回桌面的时候显示
function {
	var callbacks = [],
		timeLimit = 50,
		open = false;
	setInterval(loop, 1);
	return {
		addListener: function (fn) {
			callbacks.push(fn);
		},
		cancleListenr: function (fn) {
			callbacks = callbacks.filter(function (v) {
				return v !== fn;
			});
		}
	}
}