let q1 = 0;
let q2 =1;
let q3 = 2;
let quiz1;
function start(q1,quiz1) {

        var percent = document.querySelector(`#progress_${q1} .percent`);
        var progressing = document.querySelector(`#progress_${q1} .progressing`);
        var circle = document.querySelector(`#progress_${q1} .circle`);
    
        requestAnimationFrame(startProgress);
        var progress = 0;
       
        totalScore1 = quiz1*25;
        var random = totalScore1;
        console.log(totalScore1);
        console.log(random);
        function startProgress() {
            progress += 1;
            if (progress <= random) {
                percent.innerHTML = parseInt(progress) + '%';
                progressing.style.width = progress + '%';
                circle.style.left = progress + '%';
            }
            requestAnimationFrame(startProgress);
        }
    
    }
    
    start(q1);
    start(q2);