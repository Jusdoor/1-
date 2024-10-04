// 获取视频元素
const video = document.getElementById('myVideo');

// 播放视频
function playVideo() {
  video.play();
}

// 暂停视频
function pauseVideo() {
  video.pause();
}

// 静音视频
function muteVideo() {
  video.muted = true;
}

// 取消静音
function unmuteVideo() {
  video.muted = false;
}
