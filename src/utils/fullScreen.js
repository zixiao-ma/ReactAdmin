/**
 * @author MaZiXiao
 * @date 2022-10-07 21:28
 */
const document = window.document;

// 展开/全屏
export function requestFullScreen(element) {
    const requestMethod = element.requestFullscreen || element.webkitRequestFullscreen || element.msRequestFullscreen || element.mozRequestFullScreen;
    if (requestMethod) {
        requestMethod.call(element);
    }
}

// 退出/全屏
export function exitFullScreen() {
    const exitMethod = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen;
    if (exitMethod) {
        exitMethod.call(document);
    }
}

// 判断是否全屏
export function isFullscreenElement() {
    const isFull = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement;
    return !!isFull;
}
