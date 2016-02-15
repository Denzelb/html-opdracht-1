$('.knoppen').each(function () {
var actief = $(this);
var actiefatm = actief.find('li.actief');
var link = actiefatm.find('a');
var actiefPaneel = $(link.attr('href'));

actief.on('click', 'a', function (e) {
    e.preventDefault();
    var link = $(this);
    var Id = this.hash;
    if (Id && !link.parent().is('actief')) {
        actiefPaneel.removeClass('actief');
        actiefatm.removeClass('actief');
        actiefPaneel = $(Id).addClass('actief');
        actiefatm = link.parent().addClass('actief');
    };
})
});
});

$('.paneel').css('display', 'none');