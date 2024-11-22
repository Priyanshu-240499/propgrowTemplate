(function(){
    $('.CommonEditor p,.CommonEditor div,.CommonEditor h1,.CommonEditor h2,.CommonEditor h3,.CommonEditor h4,.CommonEditor h5,.CommonEditor h6,.CommonEditor span,.CommonEditor b,.CommonEditor strong,.CommonEditor em,.CommonEditor i,.CommonEditor u,.CommonEditor ul,.CommonEditor li,.CommonEditor a,.CommonEditor ol,.CommonEditor small,.CommonEditor strike,.CommonEditor center,.CommonEditor font').each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
            $this.remove();
    });
    
    $(".CommonEditor").html(function (i, html) {
        return html.replace(/&nbsp;/g, '');
    });
    $('.CommonEditor *:not(img,input)').each(function () {
        if ($.trim($(this).html()) === '<br>') $(this).remove();
        if ($.trim($(this).html()) === '<div><font face="Arial"><b><br></b></font></div>') $(this).remove();
        $('br').remove(); 
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
           $this.remove(); 
        $this.removeAttr('style')
        $this.removeAttr('face')
    });
}())