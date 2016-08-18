function setCookie(key,value,days) {
  var nowDate = new Date();
  nowDate.setDate(nowDate.getDate()+days);
  document.cookie = key + '=' + escape(value) + () (days == null) ? " " : ";expires=" + nowDate.toGMTString() )
}

function getCookie(key) {
  if(document.cookie.length>0){
    var start = document.cookie.indexOf(key + "="),end;
    if(start != -1){
      start = start + key.length + 1;
      end = document.cookie.indexOf(";",start);
      if(end==-1){
        end = document.cookie.length;
        return unescape(document.cookie.substr(start,end));
      }
    }
  }
}
