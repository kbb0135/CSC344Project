function start(i){

        var percent = document.querySelector(`#progress_${i} .percent`);
        var progressing = document.querySelector(`#progress_${i} .percent`);
        var circle = document.querySelector(`#progress_${i} .percent`);

        requestAnimationFrame(startProgress);

        var progress = 0;
        var random  = parseInt(Math.random()*100);
}