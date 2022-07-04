$(document).ready(() => {
    $('#anaProfile').removeClass('d-none');
    $('#matheusProfile').addClass('d-none');
    $('#claudiaProfile').addClass('d-none');
    second()
})

function first() {
    setTimeout(() => {
        $('#anaProfile').removeClass('d-none');
        $('#matheusProfile').addClass('d-none');
        $('#claudiaProfile').addClass('d-none');
        second()
    }, 3000);
}

function second() {
    setTimeout(() => {
        $('#matheusProfile').removeClass('d-none');
        $('#anaProfile').addClass('d-none');
        $('#claudiaProfile').addClass('d-none');
        third()
    }, 3000);
}

function third() {
    setTimeout(() => {
        $('#claudiaProfile').removeClass('d-none');
        $('#anaProfile').addClass('d-none');
        $('#matheusProfile').addClass('d-none');
        first()
    }, 3000);
}