;
/*
uploadPhoto : 上傳圖檔。
uploaderId : 產生上傳圖檔按鈕的 div id。
actionUrl : 上傳檔案程式路徑。
allowedExtensions : 允許上傳圖檔副檔名。
sizeLimit : 允許上傳 Size。
isMultiple : 允許多檔上傳。
fileUploadPath : 上傳檔案路徑。
updateFileNameId : 更新隱藏欄位值，儲存檔名。
showPhotoId : 顯示圖檔的 img id。
*/
function uploadPhoto(uploaderId, actionUrl, allowedExtensions, sizeLimit, isMultiple, fileUploadPath, updateFileNameId, showPhotoId) {
    var photoUploader = new qq.FileUploader(
        {
            element: $('#' + uploaderId)[0],
            action: actionUrl,
            allowedExtensions: allowedExtensions,
            sizeLimit: sizeLimit,
            multiple: isMultiple,
            params: { filePath: fileUploadPath },
            messages:
            {
                typeError: "{file} 檔案類型錯誤. 只允許上傳以下副檔名的檔案：\r\n{extensions}.",
                sizeError: "{file} 超過檔案大小最大限制, 最大檔案大小為 {sizeLimit}.",
                minSizeError: "{file} 小於檔案大小最低限制, 最低檔案大小為 {minSizeLimit}.",
                emptyError: "{file} is empty, please select files again without it.",
                onLeave: "檔案上傳中，若離開頁面將會取消上傳"
            },
            showMessage: function (message) {
                //$.messager.alert('錯誤', message, 'error');
                alert('錯誤:' + message);
            },
            onComplete: function (id, fileName, responseJSON) {
                if (responseJSON.success) {
                    //alert(fileName + ',' + responseJSON.fileName);
                    $('#' + updateFileNameId).val(responseJSON.fileName);
                    $('#' + showPhotoId).attr('src', responseJSON.fileFullPath);
                    //$.messager.alert('檔案', responseJSON.fileName + " 檔案上傳完成!", 'info');
                }
                else {
                    $.messager.alert('錯誤', '檔案上傳錯誤', 'error', function () {
                        if (responseJSON.message) {
                            $.messager.show({
                                showType: 'show',
                                title: '錯誤訊息內容',
                                msg: responseJSON.message,
                                timeout: 0,
                                width: 600,
                                height: 200
                            });
                        }
                    });
                }
            }
        });
}

/*
uploadPhoto : 上傳檔案。
uploaderId : 產生上傳圖檔按鈕的 div id。
actionUrl : 上傳檔案程式路徑。
allowedExtensions : 允許上傳圖檔副檔名。
sizeLimit : 允許上傳 Size。
isMultiple : 允許多檔上傳。
fileUploadPath : 上傳檔案路徑。
updateFileNameId : 更新隱藏欄位值，儲存檔名。
*/
function uploadFile(uploaderId, actionUrl, allowedExtensions, sizeLimit, fileUploadPath, updateFileNameId) {
    var fileUploader = new qq.FileUploader({
        element: $('#' + uploaderId)[0],
        action: actionUrl,
        allowedExtensions: allowedExtensions,
        sizeLimit: sizeLimit,
        multiple: false,
        params: { filePath: fileUploadPath },
        messages:
        {
            typeError: "{file} 檔案類型錯誤. 只允許上傳以下副檔名的檔案：\r\n{extensions}.",
            sizeError: "{file} 超過檔案大小最大限制, 最大檔案大小為 {sizeLimit}.",
            minSizeError: "{file} 小於檔案大小最低限制, 最低檔案大小為 {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "檔案上傳中，若離開頁面將會取消上傳"
        },
        showMessage: function (message) {
            //$.messager.alert('錯誤', message, 'error');
            alert('錯誤:' + message);
        },
        onComplete: function (id, fileName, responseJSON) {
            if (responseJSON.success) {
                $('#' + updateFileNameId).val(responseJSON.fileName);
            }
            else {
                $.messager.alert('錯誤', '檔案上傳錯誤', 'error', function () {
                    if (responseJSON.message) {
                        $.messager.show({
                            showType: 'show',
                            title: '錯誤訊息內容',
                            msg: responseJSON.message,
                            timeout: 0,
                            width: 600,
                            height: 200
                        });
                    }
                });
            }
        }
    });
}


function uploadMultipleFiles(uploaderId, actionUrl, allowedExtensions, sizeLimit, fileUploadPath, updateFileNameId) {
    var fileUploader = new qq.FileUploader({
        element: $('#' + uploaderId)[0],
        action: actionUrl,
        allowedExtensions: allowedExtensions,
        sizeLimit: sizeLimit,
        multiple: true,
        params: { filePath: fileUploadPath },
        messages:
        {
            typeError: "{file} 檔案類型錯誤. 只允許上傳以下副檔名的檔案：\r\n{extensions}.",
            sizeError: "{file} 超過檔案大小最大限制, 最大檔案大小為 {sizeLimit}.",
            minSizeError: "{file} 小於檔案大小最低限制, 最低檔案大小為 {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "檔案上傳中，若離開頁面將會取消上傳"
        },
        showMessage: function (message) {
            //$.messager.alert('錯誤', message, 'error');
            alert('錯誤:' + message);
        },
        onComplete: function (id, fileName, responseJSON) {
            if (responseJSON.success) {
                //alert(fileName + ',' + responseJSON.fileName);
                var files = $.trim($('#' + updateFileNameId).val());
                files += files.length > 0 ? ("," + responseJSON.fileName) : responseJSON.fileName;
                $('#' + updateFileNameId).val(files);
            }
            else {
                $.messager.alert('錯誤', '檔案上傳錯誤', 'error', function () {
                    if (responseJSON.message) {
                        $.messager.show({
                            showType: 'show',
                            title: '錯誤訊息內容',
                            msg: responseJSON.message,
                            timeout: 0,
                            width: 600,
                            height: 200
                        });
                    }
                });
            }
        }
    });
}