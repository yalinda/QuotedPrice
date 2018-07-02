function pageChange(pagesizelist) {
    $('#' + pagesizelist).on('change', function (event) {
        var form = $(event.target).parents('form');
        form.submit();
    });
}


function changePagination(formId, url) {
    $('.pagination>li>a[href]').each(function (i, item) {
        var page = $(item).attr('href').replace(url, '');
        $(item).attr('href', '#').click(function () { postPage(formId, page); });

    });
}

function postPage(formId, page) {
    var targetFormId = '#' + formId;
    if ($(targetFormId).size() > 0) {
        $('<input>')
            .attr({ type: 'hidden', id: 'PageIndex', name: 'PageIndex', value: page })
            .appendTo($(targetFormId));
        $(targetFormId).submit();
    }
};
