

class StopWatch{
    constructor(){
        this.minutes = 0;
        this.seconds = 0;
        this.milliSeconds = 0;
        this.startButton = document.getElementById('Start');
        this.pauseButton = document.getElementById('Pause');
        this.clearButton = document.getElementById('Clear');
        this.timer;
        this.minutesField = document.getElementById('Min');
        this.secondsField = document.getElementById('Sec');
        this.milliSecondsField = document.getElementById('Milli');

    };

    fireEvents (){
        const thisTimer = this;

        this.startButton.addEventListener('click', function(e){
            thisTimer.startStopWatch();
        });

        this.pauseButton.addEventListener('click', function(e){
            thisTimer.pauseStopWatch();
        });

        this.clearButton.addEventListener('click', function(e){
            thisTimer.clearStopWatch();
        });
    }

    startStopWatch() {

        this.timer = setInterval(() => {
            if(this.milliSeconds < 99){
                this.milliSeconds++;
                if(this.milliSeconds >= 10){
                    this.milliSecondsField.innerText = this.milliSeconds;
                }else{
                    this.milliSecondsField.innerText = ('0' + this.milliSeconds);
                }
            }else{
                this.milliSecondsField.innerText='00';
                this.milliSeconds = 0;
                if(this.seconds < 59){
                    this.seconds++;
                    if(this.seconds >= 10){
                        this.secondsField.innerText = this.seconds;
                    }else{
                        this.secondsField.innerText = ('0' + this.seconds);
                    }
                }else {
                    this.secondsField.innerText = '00';
                    this.seconds = 0;
                    this.minutes++;
                    this.minutesField.innerText = this.minutes;
                    if(this.minutes >= 10){
                        this.minutes.innerText = this.minutes;
                    }else {
                        this.minutesField.innerText = ('0' + this.minutes);
                    
                    }
                }
            }
        }, 10);    
 
    }

    pauseStopWatch() {
        clearInterval(this.timer);
    }

    clearStopWatch(){
        clearInterval(this.timer);
        this.minutes = 0;
        this.seconds = 0;
        this.milliSeconds = 0;
        this.minutesField.innerText = '00';
        this.secondsField.innerText = '00';
        this.milliSecondsField.innerText = '00';
    }

}

const stopWatch = new StopWatch();
stopWatch.fireEvents();

