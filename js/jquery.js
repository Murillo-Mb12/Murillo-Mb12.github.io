function darkmode() {
    var $body = $('body');
    $body.toggleClass('dark-mode');
    
    var theme;
    if ($body.hasClass('dark-mode')) {
        console.log('Dark mode');
        theme = 'DARK';
    } else {
        console.log('Light mode');
        theme = 'LIGHT';
    }
    
    // Salvar no localStorage
    localStorage.setItem('PageTheme', JSON.stringify(theme));
}

setInterval(function() {
    var getTheme = JSON.parse(localStorage.getItem('PageTheme'));
    console.log(getTheme);
    if (getTheme === 'DARK') {
        $('body').addClass('dark-mode');
    } else {
        $('body').removeClass('dark-mode');
    }
}, 5);