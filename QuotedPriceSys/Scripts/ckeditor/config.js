/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';

    //config.htmlEncodeOutput = true;

    //config.toolbar_contents = [
    //    ['Undo', 'Redo', '-', 'RemoveFormat', 'PasteText'], ['Bold', 'TextColor', 'BGColor'],
    //    ['NumberedList', 'BulletedList', 'Outdent', 'Indent']
    //    , ['Preview']
    //    , ['Source']
    //];

    //取得根目錄網址
    //var strFullPath = window.document.location.href;
    //var strPath = window.document.location.pathname;
    //var pos = strFullPath.indexOf(strPath);
    //var prePath = strFullPath.substring(0, pos);
    //var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
    ////alert(prePath);
    //config.filebrowserImageUploadUrl = prePath + "/ashx/fileupload.ashx";

    config.toolbar_contents = [
        //['Source', '-', 'NewPage', 'Preview', '-', 'Templates'],
        ['Bold', 'Italic', 'Underline', 'Strike', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink'],
        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        ['FontSize', 'TextColor', 'BGColor'],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'],
        ['Table', 'HorizontalRule', 'Image'],
        ['Source']];

    config.toolbar_mutilLinkContents = [
        { name: 'Undo', items: ['Undo', 'Redo', '-', 'RemoveFormat', 'PasteText'] },
        { name: 'links', items: ['Link', 'UnLink']}
    ];

    config.toolbar_imageContents = [
        { name: 'Image', items: ['Image'] }
    ];
};
