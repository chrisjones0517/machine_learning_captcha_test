$(document).ready(() => {

    $('#scrapeBtn').on('click', (e) => {
        e.preventDefault();
        $('#details').empty();
        $('#returnedHTML').empty().append(`<div id="statusDiv" class="text-center"><img src="public/ajax-loader.gif" width="150"></div>`);
        const first = $('#firstName').val().trim();
        const last = $('#lastName').val().trim();
        
        const obj = {
            first,
            last
        };
    
        $.ajax({
            url: '/post',
            method: 'POST',
            data: obj,
            dataType: 'text',
            error: (err) => {
                $('#statusDiv').html('<h4>An error occurred while processing your request.</h4>');
                console.log(err);
            }
        }).then(function (res) {
            $('#firstName').val('');
            $('#lastName').val('');
            $('#returnedHTML').empty().append(`
                <div>${res}</div>
            `);
    
            let linkArr = $('.item-buttons > a');
            
            $.each(linkArr, (index, el) => {
                let link = $(el).attr('href');
                let newLink = `https://nmbn.boardsofnursing.org${link}`;
                // $(el).attr('href', newLink);
                
                $(el).html(`<iframe src="${newLink}" width="1150"></iframe>`);
                
            });
        });
    });
});


