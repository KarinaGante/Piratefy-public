var click, clickCad, clickConfirm;

var playbtn, pausebtn, i, play, pause, audio = [];

audio[0] = document.querySelector("#audio" + 0);
audio[1] = document.querySelector("#audio" + 1);
audio[2] = document.querySelector("#audio" + 2);
audio[3] = document.querySelector("#audio" + 3);
audio[4] = document.querySelector("#audio" + 4);
audio[5] = document.querySelector("#audio" + 5);
audio[6] = document.querySelector("#audio" + 6);
audio[7] = document.querySelector("#audio" + 7);
audio[8] = document.querySelector("#audio" + 8);
audio[9] = document.querySelector("#audio" + 9);
audio[10] = document.querySelector("#audio" + 10);
audio[11] = document.querySelector("#audio" + 11);
audio[12] = document.querySelector("#audio" + 12);
audio[13] = document.querySelector("#audio" + 13);
audio[14] = document.querySelector("#audio" + 14);
audio[15] = document.querySelector("#audio" + 15);
audio[16] = document.querySelector("#audio" + 16);
audio[17] = document.querySelector("#audio" + 17);
audio[18] = document.querySelector("#audio" + 18);

var play0 = document.querySelector("#play" + 0).addEventListener("click", function () {
    console.log("play");
    audio[0].volume = 0.2;
    audio[0].play();
});

var pause0 = document.querySelector("#pause" + 0).addEventListener("click", function () {
    console.log("pause");
    audio[0].pause();
});

$(document).ready(function () {
    $('#play' + 0).on('click', function (event) {
        $('#pause' + 0).show();
        $('#play' + 0).hide();
    });

    $('#pause' + 0).on('click', function (event) {
        $('#pause' + 0).hide();
        $('#play' + 0).show();
    });
})

var play1 = document.querySelector("#play" + 1).addEventListener("click", function () {
    console.log("play");
    audio[1].volume = 0.2;
    audio[1].play();
});

var pause1 = document.querySelector("#pause" + 1).addEventListener("click", function () {
    console.log("pause");
    audio[1].pause();
});

$(document).ready(function () {
    $('#play' + 1).on('click', function (event) {
        $('#pause' + 1).show();
        $('#play' + 1).hide();
    });

    $('#pause' + 1).on('click', function (event) {
        $('#pause' + 1).hide();
        $('#play' + 1).show();
    });
})

var play2 = document.querySelector("#play" + 2).addEventListener("click", function () {
    console.log("play");
    audio[2].volume = 0.2;
    audio[2].play();
});

var pause2 = document.querySelector("#pause" + 2).addEventListener("click", function () {
    console.log("pause");
    audio[2].pause();
});

$(document).ready(function () {
    $('#play' + 2).on('click', function (event) {
        $('#pause' + 2).show();
        $('#play' + 2).hide();
    });

    $('#pause' + 2).on('click', function (event) {
        $('#pause' + 2).hide();
        $('#play' + 2).show();
    });
})

var play3 = document.querySelector("#play" + 3).addEventListener("click", function () {
    console.log("play");
    audio[3].volume = 0.2;
    audio[3].play();
});

var pause3 = document.querySelector("#pause" + 3).addEventListener("click", function () {
    console.log("pause");
    audio[3].pause();
});

$(document).ready(function () {
    $('#play' + 3).on('click', function (event) {
        $('#pause' + 3).show();
        $('#play' + 3).hide();
    });

    $('#pause' + 3).on('click', function (event) {
        $('#pause' + 3).hide();
        $('#play' + 3).show();
    });
})

var play4 = document.querySelector("#play" + 4).addEventListener("click", function () {
    console.log("play");
    audio[4].volume = 0.2;
    audio[4].play();
});

var pause4 = document.querySelector("#pause" + 4).addEventListener("click", function () {
    console.log("pause");
    audio[4].pause();
});

$(document).ready(function () {
    $('#play' + 4).on('click', function (event) {
        $('#pause' + 4).show();
        $('#play' + 4).hide();
    });

    $('#pause' + 4).on('click', function (event) {
        $('#pause' + 4).hide();
        $('#play' + 4).show();
    });
})

var play5 = document.querySelector("#play" + 5).addEventListener("click", function () {
    console.log("play");
    audio[5].volume = 0.2;
    audio[5].play();
});

var pause5 = document.querySelector("#pause" + 5).addEventListener("click", function () {
    console.log("pause");
    audio[5].pause();
});

$(document).ready(function () {
    $('#play' + 5).on('click', function (event) {
        $('#pause' + 5).show();
        $('#play' + 5).hide();
    });

    $('#pause' + 5).on('click', function (event) {
        $('#pause' + 5).hide();
        $('#play' + 5).show();
    });
})

var play6 = document.querySelector("#play" + 6).addEventListener("click", function () {
    console.log("play");
    audio[6].volume = 0.2;
    audio[6].play();
});

var pause6 = document.querySelector("#pause" + 6).addEventListener("click", function () {
    console.log("pause");
    audio[6].pause();
});

$(document).ready(function () {
    $('#play' + 6).on('click', function (event) {
        $('#pause' + 6).show();
        $('#play' + 6).hide();
    });

    $('#pause' + 6).on('click', function (event) {
        $('#pause' + 6).hide();
        $('#play' + 6).show();
    });
})

var play7 = document.querySelector("#play" + 7).addEventListener("click", function () {
    console.log("play");
    audio[7].volume = 0.2;
    audio[7].play();
});

var pause7 = document.querySelector("#pause" + 7).addEventListener("click", function () {
    console.log("pause");
    audio[7].pause();
});

$(document).ready(function () {
    $('#play' + 7).on('click', function (event) {
        $('#pause' + 7).show();
        $('#play' + 7).hide();
    });

    $('#pause' + 7).on('click', function (event) {
        $('#pause' + 7).hide();
        $('#play' + 7).show();
    });
})

var play8 = document.querySelector("#play" + 8).addEventListener("click", function () {
    console.log("play");
    audio[8].volume = 0.2;
    audio[8].play();
});

var pause8 = document.querySelector("#pause" + 8).addEventListener("click", function () {
    console.log("pause");
    audio[8].pause();
});

$(document).ready(function () {
    $('#play' + 8).on('click', function (event) {
        $('#pause' + 8).show();
        $('#play' + 8).hide();
    });

    $('#pause' + 8).on('click', function (event) {
        $('#pause' + 8).hide();
        $('#play' + 8).show();
    });
})

var play9 = document.querySelector("#play" + 9).addEventListener("click", function () {
    console.log("play");
    audio[9].volume = 0.2;
    audio[9].play();
});

var pause9 = document.querySelector("#pause" + 9).addEventListener("click", function () {
    console.log("pause");
    audio[9].pause();
});

$(document).ready(function () {
    $('#play' + 9).on('click', function (event) {
        $('#pause' + 9).show();
        $('#play' + 9).hide();
    });

    $('#pause' + 9).on('click', function (event) {
        $('#pause' + 9).hide();
        $('#play' + 9).show();
    });
})

var play10 = document.querySelector("#play" + 10).addEventListener("click", function () {
    console.log("play");
    audio[10].volume = 0.2;
    audio[10].play();
});

var pause10 = document.querySelector("#pause" + 10).addEventListener("click", function () {
    console.log("pause");
    audio[10].pause();
});

$(document).ready(function () {
    $('#play' + 10).on('click', function (event) {
        $('#pause' + 10).show();
        $('#play' + 10).hide();
    });

    $('#pause' + 10).on('click', function (event) {
        $('#pause' + 10).hide();
        $('#play' + 10).show();
    });
})

var play11 = document.querySelector("#play" + 11).addEventListener("click", function () {
    console.log("play");
    audio[11].volume = 0.2;
    audio[11].play();
});

var pause11 = document.querySelector("#pause" + 11).addEventListener("click", function () {
    console.log("pause");
    audio[11].pause();
});

$(document).ready(function () {
    $('#play' + 11).on('click', function (event) {
        $('#pause' + 11).show();
        $('#play' + 11).hide();
    });

    $('#pause' + 11).on('click', function (event) {
        $('#pause' + 11).hide();
        $('#play' + 11).show();
    });
})

var play12 = document.querySelector("#play" + 12).addEventListener("click", function () {
    console.log("play");
    audio[12].volume = 0.2;
    audio[12].play();
});

var pause12 = document.querySelector("#pause" + 12).addEventListener("click", function () {
    console.log("pause");
    audio[12].pause();
});

$(document).ready(function () {
    $('#play' + 12).on('click', function (event) {
        $('#pause' + 12).show();
        $('#play' + 12).hide();
    });

    $('#pause' + 12).on('click', function (event) {
        $('#pause' + 12).hide();
        $('#play' + 12).show();
    });
})

var play13 = document.querySelector("#play" + 13).addEventListener("click", function () {
    console.log("play");
    audio[13].volume = 0.2;
    audio[13].play();
});

var pause13 = document.querySelector("#pause" + 13).addEventListener("click", function () {
    console.log("pause");
    audio[13].pause();
});

$(document).ready(function () {
    $('#play' + 13).on('click', function (event) {
        $('#pause' + 13).show();
        $('#play' + 13).hide();
    });

    $('#pause' + 13).on('click', function (event) {
        $('#pause' + 13).hide();
        $('#play' + 13).show();
    });
})

var play14 = document.querySelector("#play" + 14).addEventListener("click", function () {
    console.log("play");
    audio[14].volume = 0.2;
    audio[14].play();
});

var pause14 = document.querySelector("#pause" + 14).addEventListener("click", function () {
    console.log("pause");
    audio[14].pause();
});

$(document).ready(function () {
    $('#play' + 14).on('click', function (event) {
        $('#pause' + 14).show();
        $('#play' + 14).hide();
    });

    $('#pause' + 14).on('click', function (event) {
        $('#pause' + 14).hide();
        $('#play' + 14).show();
    });
})

var play15 = document.querySelector("#play" + 15).addEventListener("click", function () {
    console.log("play");
    audio[15].volume = 0.2;
    audio[15].play();
});

var pause15 = document.querySelector("#pause" + 15).addEventListener("click", function () {
    console.log("pause");
    audio[15].pause();
});

$(document).ready(function () {
    $('#play' + 15).on('click', function (event) {
        $('#pause' + 15).show();
        $('#play' + 15).hide();
    });

    $('#pause' + 15).on('click', function (event) {
        $('#pause' + 15).hide();
        $('#play' + 15).show();
    });
})

var play16 = document.querySelector("#play" + 16).addEventListener("click", function () {
    console.log("play");
    audio[16].volume = 0.2;
    audio[16].play();
});

var pause16 = document.querySelector("#pause" + 16).addEventListener("click", function () {
    console.log("pause");
    audio[16].pause();
});

$(document).ready(function () {
    $('#play' + 16).on('click', function (event) {
        $('#pause' + 16).show();
        $('#play' + 16).hide();
    });

    $('#pause' + 16).on('click', function (event) {
        $('#pause' + 16).hide();
        $('#play' + 16).show();
    });
})

var play17 = document.querySelector("#play" + 17).addEventListener("click", function () {
    console.log("play");
    audio[17].volume = 0.2;
    audio[17].play();
});

var pause17 = document.querySelector("#pause" + 17).addEventListener("click", function () {
    console.log("pause");
    audio[17].pause();
});

$(document).ready(function () {
    $('#play' + 17).on('click', function (event) {
        $('#pause' + 17).show();
        $('#play' + 17).hide();
    });

    $('#pause' + 17).on('click', function (event) {
        $('#pause' + 17).hide();
        $('#play' + 17).show();
    });
})

var play18 = document.querySelector("#play" + 18).addEventListener("click", function () {
    console.log("play");
    audio[18].volume = 0.2;
    audio[18].play();
});

var pause18 = document.querySelector("#pause" + 18).addEventListener("click", function () {
    console.log("pause");
    audio[18].pause();
});

$(document).ready(function () {
    $('#play' + 18).on('click', function (event) {
        $('#pause' + 18).show();
        $('#play' + 18).hide();
    });

    $('#pause' + 18).on('click', function (event) {
        $('#pause' + 18).hide();
        $('#play' + 18).show();
    });
})

function loginsenha() {
    if (click == 1) {
        document.getElementById('loginSenha').type = 'password';
        document.getElementById('pass-icon').src = './img/icons/invisible.png';

        click = 0;

    }
    else {
        document.getElementById('loginSenha').type = 'text';
        document.getElementById('pass-icon').src = './img/icons/visible.png';

        click = 1;
    }
}

function senhacad() {
    if (clickCad == 1) {
        document.getElementById('senhaCad').type = 'password';
        document.getElementById('pass-icon2').src = './img/icons/invisible.png';

        clickCad = 0;
    }
    else {
        document.getElementById('senhaCad').type = 'text';
        document.getElementById('pass-icon2').src = './img/icons/visible.png';

        clickCad = 1;
    }
}

function senhaconfirm() {
    if (clickConfirm == 1) {
        document.getElementById('senhaConfirm').type = 'password';
        document.getElementById('pass-icon3').src = './img/icons/invisible.png';

        clickConfirm = 0;

    } else {
        document.getElementById('senhaConfirm').type = 'text';
        document.getElementById('pass-icon3').src = './img/icons/visible.png';

        clickConfirm = 1;
    }
}