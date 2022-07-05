$(document).ready(() => {
    $('#anaProfile').removeClass('d-none');
    $('#anaProfile2').removeClass('d-none');
    $('#matheusProfile').addClass('d-none');
    $('#matheusProfile2').addClass('d-none');
    $('#claudiaProfile').addClass('d-none');
    $('#claudiaProfile2').addClass('d-none');
    second()
})

function first() {
    setTimeout(() => {
        $('#anaProfile').removeClass('d-none');
        $('#anaProfile2').removeClass('d-none');
        $('#matheusProfile').addClass('d-none');
        $('#matheusProfile2').addClass('d-none');
        $('#claudiaProfile').addClass('d-none');
        $('#claudiaProfile2').addClass('d-none');
        second()
    }, 3000);
}

function second() {
    setTimeout(() => {
        $('#matheusProfile').removeClass('d-none');
        $('#matheusProfile2').removeClass('d-none');
        $('#anaProfile').addClass('d-none');
        $('#anaProfile2').addClass('d-none');
        $('#claudiaProfile').addClass('d-none');
        $('#claudiaProfile2').addClass('d-none');
        third()
    }, 3000);
}

function third() {
    setTimeout(() => {
        $('#claudiaProfile').removeClass('d-none');
        $('#claudiaProfile2').removeClass('d-none');
        $('#anaProfile').addClass('d-none');
        $('#anaProfile2').addClass('d-none');
        $('#matheusProfile').addClass('d-none');
        $('#matheusProfile2').addClass('d-none');
        first()
    }, 3000);
}