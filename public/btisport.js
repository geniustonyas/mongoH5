(
    function () {
        function whl() { }

        function getUrlVars(name) {
            var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
            var myVar = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
            if (myVar != undefined) {
                if (myVar.slice(-1) == '/') myVar = myVar.slice(0, -1);
            }
            return myVar;
        }

        var SportsCookie = {
            setCookie: function (cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toGMTString();
                document.cookie = cname + "=" + cvalue + "; path=/; " + expires + "; SameSite=None; Secure";
            },
            getCookie: function (cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i].trim();
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            },
            deleteCookie: function (cname) {
                document.cookie = cname + "= ; path=/; expires = Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }

        var getRefreshUrl = 'https://seabet12345.com/bti/jsrefresh';  //必须 https 然后回传 {"status":"success","balance":"100.00"} 或 {"status":"failure","balance":"0"} 
        var strUrlToken = getUrlVars("operatorToken");
        var strCookieToken = SportsCookie.getCookie("operatorToken");
        var strStoken = sessionStorage.getItem("operatorToken");
        var strToken = '';

        if (strUrlToken != '' && strUrlToken != undefined) {
            strToken = strUrlToken;
            SportsCookie.setCookie("operatorToken", strUrlToken, 1);
            sessionStorage.setItem("operatorToken", strUrlToken);
        } else if (strCookieToken != '' && strUrlToken != undefined) {
            strToken = strCookieToken;
            sessionStorage.setItem("operatorToken", strCookieToken);
        } else if (strStoken != '' && strStoken != undefined) {
            strToken = strStoken;
            SportsCookie.setCookie("operatorToken", strStoken, 1);
        }

        // REFRESH SESSION
        whl.prototype.refreshSession = function (callback) {
            var result = new Object();
            result.uid = new Date().getTime();
            result.token = strToken;

            sendHTTPGet(getRefreshUrl + "?token=" + strToken + "&r=" + new Date().getTime(), function (response) {
                if (response.status == "success") {
                    result.status = "success";
                    result.token = strToken;
                    result.balance = response.balance.toString();
                    result.message = "";
                    callback(result);
                } else {
                    SportsCookie.deleteCookie("operatorToken");
                    window.UserInfo.logout();
                }
            });
        }

        function sendHTTPGet(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    callbackHandler(xhr.response, callback);
                }
                else {
                    console.log('', xhr);
                }
            };
            xhr.open('GET', url);
            xhr.send();
        }

        function callbackHandler(data, callback) {
            if (callback) {
                var result = JSON.parse(data);
                callback(result);
            }
        }

        window.whl = new whl();
    }
)()
