$(function(){

    var arrMusicID = [];

    /*get dynamic music list and append player in async ajax*/
    $.ajax({
        url: "http://18.220.146.30:3000/playlist/detail?id=784666078",
        dataType: 'json',
        success: function(json){
          for (var i = json.playlist.trackIds.length - 1; i >= 0; i--) {
            arrMusicID.push(json.playlist.trackIds[i].id);
          };
          appendMusicPlayer(arrMusicID);
        },
        error: function(){
          arrMusicID = [452814326 ,439142571 ,32977723 ,463718 ,33111329 ,34204596 ,29787089 ,786222 ,139737 ,460156172 ,438904125 ,28445575 ,456301987];
          appendMusicPlayer(arrMusicID);
        }
      });

    $('body').css('height',document.documentElement.clientHeight -5);

    indexRedirect();
});

function appendMusicPlayer(arrMusicID) {
    musicIDIndex = Math.floor(Math.random()*(arrMusicID.length))

    if (!Number.isInteger(arrMusicID[musicIDIndex])) return;


    var iframe = document.createElement('iframe');
    iframe.id="bgm";
    iframe.style = "position: absolute; bottom: 0; left: 30px; border: 0px;";
    iframe.src = '//music.163.com/outchain/player?type=2&id=' +arrMusicID[musicIDIndex]+ '&auto=1&height=32';
    iframe.frameborder="no";
    iframe.marginwidth="0";
    iframe.marginheight="0";
    iframe.width=250;
    iframe.height=52;
    document.body.appendChild(iframe);
}

function indexRedirect() {
  let pageName = getQueryString('pagename');
  if (pageName!=null) {
    $('iframe.content').attr('src',pageName);
  }
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
