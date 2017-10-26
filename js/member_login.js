$(function () {
    var meuid = $.cookie('rememberme');
    if (meuid != null) {
        document.getElementById("Remember_me").checked = true;
    }
    $('#login_ok').click(function () {
        $("#loading").show();
        var uid = $('#uid').val();
        var pwd = $('#pwd').val();
        var srcType = $('#srcType').val();
        var _token = $('#_token').val();
        var usefb = 'N';
        var fbid = "";
        var accessToken = "";
        if (uid == '' || pwd == '') {
            $("#loading").hide();
            alert('請輸入帳號或密碼');
            return;
        } else {
            if ($("#Remember_me").prop('checked') == true) {
                var uid_name = $('#uid').val();
                $.cookie('rememberme', uid_name, {expires: 1825});
            } else {
                $.removeCookie('rememberme');
            }
            do_login(uid, pwd, srcType, _token, usefb, fbid, accessToken);
        }
    });
});

window.fbAsyncInit = function () {
    FB.init({
        appId: '976978318982065',
        xfbml: true,
        version: 'v2.3'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function statusChangeCallback(response) {
    if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
        cw_facebook_login(accessToken);
    } else if (response.status === 'not_authorized') {
        alert('您的 facebook 尚未授權，請重試');
        location.replace("/member/home/MemberLogin.action");
    } else {
        alert('您尚未登入 facebook ，請重試');
        location.replace("/member/home/MemberLogin.action");
    }
}


function checkLoginState() {
    $("#loading").show();
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}
function cw_facebook_login(accessToken) {
    var uid = '';
    var pwd = '';
    var srcType = $('#srcType').val();
    var _token = $('#_token').val();
    var usefb = 'Y';
    var fbid = '';
    var responseId = '';
    FB.api('/me?fields=id,name,token_for_business,email', function (response) {
        fbid = response.token_for_business;
        uid = response.email;
        responseId = response.id;
        do_login(uid, pwd, srcType, _token, usefb, fbid, accessToken, responseId);
    });

}
var do_login = function (uid, pwd, srcType, _token, usefb, fbid, accessToken, responseId) {
    $.ajax({
        url: '/login',
        data: {uid: uid, pwd: pwd, srcType: srcType, _token: _token, usefb: usefb, fbid: fbid, accessToken: accessToken, responseId: responseId},
        type: 'post',
        success: function (json) {
            var reasonID = json.login_info['reasonID'];
            var srcType = json.login_info['srcType'];
            var message = json.login_info['message'];
            var tk_id = json.login_info['tk_id'];
            if (reasonID == '00') {
                location.href = srcType;
            } else if (reasonID == '01') {
                $("#loading").hide();
                alert('帳號/密碼錯誤');
            } else if (reasonID == '06') {
                $("#loading").hide();
                alert('您的 Facebook 帳號尚未加入成為網路會員，請先前往加入！');
                window.open('https://www.cwbook.com.tw/member/mcntr/JoinMember!newMember.shtml?site=C', '_blank');
            } else if (reasonID != "" || reasonID != " ") {
                $("#loading").hide();
                alert(message);
                if (message == "已登入") {
                    location.href = srcType;
                }
            } else {
                $("#loading").hide();
                alert('請重新登入');
                location.href = "/member/home/MemberLogin.action";
            }
        },
        timeout: 200000,
        error: function () {
            alert("等待時間過長，請重新再試一次！");
            location.href = "/member/home/MemberLogin.action";
        }

    });
}