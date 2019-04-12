var playlist = document.getElementsByClassName('ytd-playlist-video-renderer')
var titles = [];

for (var i = 0; i < playlist.length; i++) {
	if(playlist[i].tagName === 'SPAN') {
		titles.push(playlist[i].innerText)
	}
}
