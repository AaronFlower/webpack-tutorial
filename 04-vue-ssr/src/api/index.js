export function fetchItem (id, millis) {
	return new Promise((resolve, reject) => {
	  setTimeout(function () {
	  	console.log('fetchItem:', id)
	  	resolve({id, name: 'eason', title: 'The love story!'})
	  }, millis || 2000)
	})
}