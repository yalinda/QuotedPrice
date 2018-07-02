    function SuccessAlert(title, content, redirect)
    {
        swal({
            title: title,
            text: content,
            type: 'success',
        }, function () {
            if (redirect != null)
                window.location.href = redirect;
        });
    }

    function ErrorAlert(title, content) {
        swal({
            title: title,
            text: content,
            type: 'error'
        });
    }

    function InfoErrorAlert(alertType, title, content, url)
    {
        if(alertType != null) {
            if (alertType == '0')
            {
                swal({
                    title: title,
                    text: content,
                    type: 'success',
                }, function () {
                    if (url != null && url.length > 0)
                        window.location.href = url;
                });
            }else{
                if (alertType == '1') {
                    swal({
                        title: title,
                        text: content,
                        type: 'error'
                    }, function () {
                        if (url != null && url.length > 0)
                            window.location.href = url;
                    });
                }  
            }     
        }
    }

    function DeleteAlert(url , burl) {
        swal({
            title: "確定刪除？",
            text: "您將會刪除已勾選的項目！",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確定刪除！！",
            closeOnConfirm: false
        }, function () {
            var a = readCookie("deleteCookie");
            if (a.length > 0) {
                $.ajax({
                    url: url,
                    data: '',
                    type: "POST",
                    dataType: 'text',

                    success: function (msg) {
                        swal({
                            title: "刪除！",
                            text: "您勾選的項目已刪除成功.",
                            type: 'success',
                        }, function () {
                            window.location.href = burl;
                        });
                    },

                    error: function (xhr, ajaxoptions, thrownerror) {
                        alert(xhr.status);
                        alert(thrownerror);
                    }
                });
            } else {
                swal("取消", "沒有選取任何刪除項目，所以取消刪除動作！", "error");
            }

        });
    }

    function delData(url, burl) {
        var data = $('input[name="chkSN"]:checkbox:checked').map(function () {
            return $(this).val();
        }).get().join(',');

        if (data.length == 0) {
            swal({
                title: "",
                text: "請勾選要刪除的項目",
                type: "warning"
            });
        }
        else {
            swal({
                title: "確定刪除？",
                text: "您將會刪除已勾選的項目！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "確定刪除！！",
                closeOnConfirm: false
            }, function () {
                if (data.length > 0) {
                    $.ajax({
                        url: url,
                        data: { delData: data },
                        type: "POST",
                        dataType: 'text',

                        success: function (msg) {
                            swal({
                                title: "刪除！",
                                text: "您勾選的項目已刪除成功.",
                                type: 'success',
                            }, function () {
                                window.location.href = burl;
                                //location.reload(true);
                            });
                        },

                        error: function (xhr, ajaxoptions, thrownerror) {
                            alert(xhr.status);
                            alert(thrownerror);
                        }
                    });
                } else {
                    swal("取消", "沒有選取任何刪除項目，所以取消刪除動作！", "error");
                }

            });
        }
    }

    function delDataForCheck(url, burl) {
        var data = $('input[name="chkSN"]:checkbox:checked').map(function () {
            return $(this).val();
        }).get().join(',');

        if (data.length == 0) {
            swal({
                title: "",
                text: "請勾選要刪除的項目",
                type: "warning"
            });
        }
        else {
            swal({
                title: "確定刪除？",
                text: "您將會刪除已勾選的項目！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "確定刪除！！",
                closeOnConfirm: false
            }, function () {
                if (data.length > 0) {
                    $.ajax({
                        url: url,
                        data: { delData: data },
                        type: "POST",
                        dataType: 'text',

                        success: function (msg) {
                            swal({
                                title: "刪除！",
                                text: "資料已刪除成功。",
                                type: 'success',
                            }, function () {
                                window.location.href = burl;
                                //location.reload(true);
                            });
                        },

                        error: function (xhr, ajaxoptions, thrownerror) {
                            alert(xhr.status);
                            alert(thrownerror);
                        }
                    });
                } else {
                    swal("取消", "沒有選取任何刪除項目，所以取消刪除動作！", "error");
                }

            });
        }
    }

    function writeDeleteCookie(sn) {
        var a = readCookie("deleteCookie");
        var array = [];
        if (a.length > 0) {
            array = a.trim().split(',');
            var index = array.indexOf(sn);
            if (index >= 0) {
                array.splice(index, 1);
            } else {
                array.push(sn);
            }
        } else {
            array.push(sn);
        }

        var deleteString = array.toString();
        writeCookie("deleteCookie", deleteString, 1);
    }

