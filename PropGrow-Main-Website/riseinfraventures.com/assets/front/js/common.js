 
    var e = "",
        t = "";
    $(window).height(), $(window).resize(function() {
        $(window).height(), e = $(window).width(), $("header").innerHeight(), $("footer").innerHeight(), t = $(".PTM-Txt-Bx").innerHeight(), $("main").css({
            "margin-top": t
        }), e <= 767 && ($(".open-overlay").click(function() {
            $(".Strymnvr").addClass("OpnMenu-Wppr")
        }), $(".ClsMenuBtn").click(function() {
            $(".Strymnvr").removeClass("OpnMenu-Wppr")
        }), $(".FltrBtn-Wppr").click(function() {
            $(".PrdctlstMnvrSwn").slideDown("slow")
        }), $(".ClsFltrBtn").click(function() {
            $(".PrdctlstMnvrSwn").slideUp("slow")
        }), $(".MblIqryBtn").click(function() {
            $(".PopContntBx").addClass("OpnPopCntct")
        }))
    }), $(window).load(function() {
        $(window).trigger("resize")
    }), $(window).scroll(function() {
        $(this).scrollTop()
    }), $(document).ready(function() {
        $(".nxtSecAct").click(function() {
            var e = $(this).attr("data-nextSec");
            $("html, body").animate({
                scrollTop: $("#" + e).offset().top - 65
            }, 1e3)
        });
        var e = $("header").innerHeight();
        $(".HderSwn").css({
            "margin-top": e
        }), $(".Calemi").click(function() {
            $(".EmiClSemnSwnVr").addClass("AcmnVrSwn")
        }), $(".ClsrRghtMn").click(function() {
            $(".EmiClSemnSwnVr").removeClass("AcmnVrSwn")
        }), $(".Phtclmnvr").click(function() {
            $(".ProGlleyDlPgeSwn").slideDown("slow")
        }), $(".ClmeSne").click(function() {
            $(".ProGlleyDlPgeSwn").slideUp("slow")
        }), $(".CrGallerySec").owlCarousel({
            loop: !1,
            margin: 0,
            dots: !1,
            autoplaySpeed: 2500,
            autoplay: !1,
            nav: !0,
            navText: ['<img src="/assets/front/icon/leftshw.png">', '<img src="assets/front/icon/rightshw.png">'],
            items: 1
        });
        var t = $(".CrGallerySec");
        t.owlCarousel(), t.length && ($("body").keyup(function(e) {
            37 == e.keyCode ? $(".owl-prev").trigger("click") : 39 == e.keyCode && $(".owl-next").trigger("click")
        }), $(".customNextBtn").click(function() {
            t.trigger("next.owl.carousel")
        }), $(".customPrevBtn").click(function() {
            t.trigger("prev.owl.carousel", [300])
        })), $(document).keydown(function(e) {
            27 == e.keyCode && ($(".GlySecImg").slideUp("slow"), $(".PopSecGallery").removeClass("popShow"))
        }), $(".SrchLcmvr,.Fmcnt,.frmcntl,.FrmmnSn,.frm-cntrl,.frmcntlcnt").focusout(function() {
            "" != $(this).val() ? $(this).siblings("label").addClass("hasVal") : $(this).siblings("label").removeClass("hasVal")
        }), $(".SrchLcmvr,.Fmcnt,.frmcntl,.FrmmnSn,.frm-cntrl,.frmcntlcnt").each(function() {
            "" != $(this).val() ? $(this).siblings("label").addClass("hasVal") : $(this).siblings("label").removeClass("hasVal")
        }), $(".QuiKeQy,.EnqPhone,.BtnGetQuote").click(function() {
            var e = $(this).attr("data-tbicn");
            $(".PopContntBx").each(function() {
                $(this).attr("data-poptb") == e && ($(this).hasClass("OpnPopCntct") || ($(".PopContntBx").removeClass("OpnPopCntct"), $(this).addClass("OpnPopCntct")))
            })
        }), $(".VsmmSPsy ul li").click(function() {
            $(".VsmmSPsy ul li").removeClass("Acmnvs"), $(this).addClass("Acmnvs");
            var e = $(this).attr("data-atrvs");
            $(".VsmCLSemnDsyblk").slideUp("slow"), $(".VsmCLSemnDsyblk").each(function() {
                $(this).attr("data-atrply") == e && $(this).slideDown("slow")
            })
        }), $(".LndHeadr").each(function() {
            var e = $(this).children("img.bg").attr("src");
            $(this).children("img.bg").hide(), $(this).css({
                background: "url(" + e + ") center top",
                "background-size": "cover",
                "background-attachment": "fixed"
            })
        }), $(".ClmnSw4Clvr").click(function() {
            var e = $(this).attr("data-attrmnswn");
            $(".ClmnSw4Clvr").removeClass("ActTabMn"), $(this).addClass("ActTabMn"), $(".ClmnSwFlrPlvr").slideUp("slow"), $(".ClmnSwFlrPlvr").each(function() {
                $(this).attr("data-cntallswn") == e && $(this).slideDown("slow")
            })
        }), $("body").click(function(e) {
            var t = $(".FrmCnwshvr,.DsymnveSwn");
            t.is(e.target) || 0 !== t.has(e.target).length || $(".DsymnveSwn").slideUp("slow")
        }), $(".CreNameSec").click(function() {
            $(this).parents(".OppSecRpt").siblings().find(".CntSecDrpDown").slideUp("slow"), $(this).parents(".OppSecRpt").siblings().find(".DrpDownSec").removeClass("MinusAdd"), $(this).parents(".OppSecRpt").siblings().find(".CreNameSec").removeClass("ActeTab"), $(this).parents(".OppSecRpt").find(".CntSecDrpDown").slideToggle("slow"), $(this).find(".DrpDownSec").toggleClass("MinusAdd"), $(this).toggleClass("ActeTab")
        }), $(".fileInpt_ImgH ").change(function(e) {
            var t = e.target.files[0].name;
            $(".fileLbl_ImgH small").text(t)
        }), $(".PopBxCls").click(function() {
            $(".PopContntBx").removeClass("OpnPopCntct")
        }), $(".ClmnVrSwn a").click(function() {
            $(".Srvr").slideDown("slow"), $(".TolFreNum").slideUp("slow"), $(".Qickengre").slideUp("slow"), $(".srchtxt").slideUp("slow"), $(".srchtxtpopup").slideDown("slow"), $(".SrchMnvr").addClass("SrchWdth-Wppr")
        }), $(".clsemn").click(function() {
            $(".Srvr").hide(0), $(".TolFreNum").slideDown(), $(".SrchMnvr").removeClass("SrchWdth-Wppr"), $(".srchtxtpopup").slideUp("slow"), $(".srchtxt").slideDown("slow"), $("header").hasClass("hdrDown") && $(".Qickengre").slideDown("slow")
        }), $("body").click(function(e) {
            var t = $(".SrchMnvr");
            t.is(e.target) || 0 !== t.has(e.target).length || ($(".Srvr").hide(0), $(".TolFreNum").slideDown(), $(".SrchMnvr").removeClass("SrchWdth-Wppr"), $(".srchtxtpopup").slideUp("slow"), $(".srchtxt").slideDown("slow"), $("header").hasClass("hdrDown") && $(".Qickengre").slideDown("slow"))
        }), $(".Tpemn").click(function() {
            $(this).siblings().find(".DsymnveSwn").slideUp("slow"), $(this).children(".DsymnveSwn").slideToggle("slow")
        }), $(".DsymnveSwn li").click(function() {
            var e = $(this).text();
            $(this).parents(".Tpemn").children(".FrmCnwshvr").val(e)
        }), $(".Ourlsphip").owlCarousel({
            items: 3,
            loop: !1,
            margin: 15,
            dots: !1,
            nav: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 1e3,
            dotsData: !0,
            navText: ['<img src="/assets/front/icon/leftshw.png">', '<img src="assets/front/icon/rightshw.png">'],
            autoplay: !1,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), $(".TemHver").click(function() {
            $(".onnPopup").addClass("add_onnPopup");
            var e = $(this).attr("data-tm");
            $(".Inn_0nnPopup").each(function() {
                $(this).attr("data-popr") == e && $(this).slideDown("slow")
            })
        }), $(".PopBxCls").click(function() {
            $(".onnPopup").removeClass("add_onnPopup"), $(".Inn_0nnPopup").slideUp("slow")
        }), $(".TrmDrAbtSwn").owlCarousel({
            items: 1,
            loop: !1,
            margin: 15,
            dots: !1,
            nav: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 1e3,
            dotsData: !0,
            navText: ['<img src="/assets/front/icon/leftshw.png">', '<img src="assets/front/icon/rightshw.png">'],
            autoplay: !1,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        }), $(".FetPrePrMvr").owlCarousel({
            items: 1,
            loop: !1,
            margin: 15,
            dots: !0,
            nav: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 1e3,
            dotsData: !0,
            autoplay: !1,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    navText: ['<img src="/assets/front/icon/icnwhte.png">', '<img src="assets/front/icon/icnwhte.png">']
                },
                600: {
                    items: 1,
                    navText: ['<img src="/assets/front/icon/icnwhte.png">', '<img src="assets/front/icon/icnwhte.png">']
                },
                1000: {
                    items: 1
                }
            }
        }), $(".bnr-slider").owlCarousel({
            items: 1,
            loop: !1,
            dots: !0,
            nav: !1,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            autoplay: !0,
            navText: ['<img src="/assets/front/icon/left_arrow.png">', '<img src="assets/front/icon/right_arrow.html">'],
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        }), $(".FtrdBldng-Sldr").owlCarousel({
            items: 3,
            loop: !0,
            margin: 30,
            dots: !1,
            nav: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 1e3,
            dotsData: !0,
            navText: ['<img src="/assets/front/icon/leftshw.png">', '<img src="assets/front/icon/rightshw.png">'],
            autoplay: !1,
            responsive: {
                0: {
                    items: 2,
                    margin: 15
                },
                575: {
                    items: 3
                },
                675: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        }), $(".DlSlwnvrrseMn").owlCarousel({
            items: 3,
            loop: !1,
            margin: 15,
            dots: !1,
            nav: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 3e3,
            autoHeight: !0,
            navText: ['<img src="/assets/front/icon/leftshw.png">', '<img src="assets/front/icon/rightshw.png">'],
            autoplay: !1,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), $(".RdlProMnBlg").owlCarousel({
            items: 3,
            loop: !1,
            margin: 15,
            dots: !1,
            nav: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 3e3,
            navText: ['<img src="/assets/front/icon/leftshw.png">', '<img src="assets/front/icon/rightshw.png">'],
            autoplay: !1,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), $(".RlsProMnSwvr").owlCarousel({
            items: 3,
            loop: !1,
            margin: 15,
            dots: !1,
            nav: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 3e3,
            navText: ['<img src="assets/front/icon/leftshw.png">', '<img src="assets/front/icon/rightshw.png">'],
            autoplay: !1,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                600: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }), $(".FterbrLgo").owlCarousel({
            items: 3,
            loop: !1,
            margin: 60,
            dots: !1,
            nav: !1,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 3e3,
            autoplay: !1,
            responsive: {
                0: {
                    items: 2,
                    margin: 0
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        }), $(".AprvdByBnks").owlCarousel({
            items: 6,
            loop: !1,
            margin: 60,
            dots: !0,
            nav: !1,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 3e3,
            autoplay: !1,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        }), $(".AmtSwVrmn").owlCarousel({
            items: 5,
            loop: !1,
            margin: 60,
            dots: !0,
            nav: !1,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            smartSpeed: 3e3,
            slideSpeed: 3e3,
            autoplay: !1,
            responsive: {
                0: {
                    items: 2,
                    margin: 0
                },
                600: {
                    items: 4,
                    margin: 10
                },
                1000: {
                    items: 5
                }
            }
        });
        var s, n = $(".flsprcmd"),
            i = n.outerHeight(),
            a = n.find("a"),
            o = a.map(function() {
                var e = $($(this).attr("href"));
                if (e.length) return e
            });
        a.click(function(e) {
            var t = $(this).attr("href"),
                s = "#" === t ? 0 : $(t).offset().top - i + 10;
            $("html, body").stop().animate({
                scrollTop: s
            }, 300), e.preventDefault()
        }), $(window).scroll(function() {
            var e = $(this).scrollTop() + i + 50,
                t = o.map(function() {
                    if ($(this).offset().top < e) return this
                }),
                n = (t = t[t.length - 1]) && t.length ? t[0].id : "";
            s !== n && (s = n, a.parent().removeClass("actmnvr ActSubMnvr").end().filter("[href='#" + n + "']").parent().addClass("actmnvr ActSubMnvr"))
        }), $(window).width() < 767 ? $(".Scrllermvr").removeClass("mCustomScrollbar") : $(".Scrllermvr").mCustomScrollbar({
            theme: "minimal-dark",
            autoHideScrollbar: !0
        });
        var l = 1;
        $(".Buldr-Tbng-Bx .title ul li").each(function() {
            $(this).attr("data-tabid", l), l++
        });
        var r = 1;
        $(".BldrTbng-Data").each(function() {
            $(this).attr("data-tab-data", r), r++
        }), $(".Buldr-Tbng-Bx .title ul li").click(function() {
            var e = $(this).attr("data-tabid");
            $(".Buldr-Tbng-Bx .title ul li").removeClass("ActvTab"), $(this).addClass("ActvTab"), $(".BldrTbng-Data").each(function() {
                $(this).attr("data-tab-data") == e && ($(this).hasClass("CurntActv") || (setTimeout(function() {
                    $(".BldrTbng-Data").removeClass("CurntActv")
                }, 1e3), $(".BldrTbng-Data").slideUp("slow"), $(this).slideDown("slow")))
            })
        })
    }), $(function() {
        $("div#mCSB_1_container li").on("click", function() {
            let e = $(this).attr("data-cate");
            $("div#mCSB_2_container li.subcatgyvalue").each(function() {
                $(this).attr("data-cate") == e ? $(this).show() : $(this).hide()
            })
        })
    }), $(".GrdrTtleMnShw *").removeAttr("style"), $(".owl-carousel.BuilderBannerSlider").owlCarousel({
        loop: !0,
        items: 1,
        margin: 0,
        nav: !1,
        autoplay: !0,
        dots: !0,
        smartSpeed: 3e3,
        slideSpeed: 3e3,
        autoplayHoverPause: !1
    })


$(document).ready(function() {
    $(document).on('click', '.headerFormSubmit', function() {
        $('#header-search').submit()
    })
    
    // $(document).click('EnqPhone', function() {
    //     $('#inquiry').addClass('OpnPopCntct')
    // })

    $(document).on('click', '.quick-inquiry', function() {
        let forms = $(this).parents('.inquiry').find("input");
        for (var i = 0; i < forms.length; i++) {
            if(forms[i].value.length == 0) {
                forms[i].style.borderBottom = '2px solid red'
                // $.toast({
                //     heading: 'Error',
                //     text: res.message,
                //     icon: res.status,
                //     loader: true,
                //     loaderBg: '#000000',
                //     position: 'top-right'
                // })
                return;
            }else{
                forms[i].style.borderBottom = '1px solid #6b6b6b'
            }
        }

        // let formData = $('#inquiry').serializeArray()
        // console.log(formData, 'formDataformDataformData')
        let formData = $(this).parents('.inquiry').serializeArray()
        let data = new FormData();
        data.append("data", JSON.stringify(formData));
        $.ajax({
            data: data,
            type: "POST",
            dataType: 'JSON',
            url: baseURL + "ajax/sendMail",
            cache: false,
            contentType: false,
            processData: false,
            success: function(res) {
                let icon;
                if($('#inquiry').hasClass('OpnPopCntct')) {
                    $('#inquiry').removeClass('OpnPopCntct')
                }

                if(res.status == 'success') {
                    $('.inquiry').trigger('reset')
                    $.toast({
                        heading: 'Success',
                        text: res.message,
                        icon: res.status,
                        loader: true,
                        loaderBg: '#000000',
                        position: 'top-right'
                    })
                }else{
                    $.toast({
                        heading: 'Error',
                        text: res.message,
                        icon: res.status,
                        loader: true,
                        loaderBg: '#000000',
                        position: 'top-right'
                    })
                }
            },
            error: function(error) {
                $.toast('Error!')
            }
        });
    })

    // $(document).click('.dwnldbrchue', function() {
    //     loadPopup()
    // })
    

    // setTimeout(() => {
    //   loadPopup()
    // }, 3000)
    
    $(".dropdown").hover(
        function(e){ 
            $(this).children('.sub-menu').css('display', 'block');
        },
        function(e){ 
            $(this).children('.sub-menu').css('display', 'none');
        }
    );
    
})

function loadPopup() {
    $('#inquiry').addClass('OpnPopCntct')
}