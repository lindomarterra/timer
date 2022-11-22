
            const display = document.getElementById('display')
            let sec = 0
            let min = 0
            let hr = 0
            let timer
      

            function start(){
                counter()  //  faz zerar o delay de 1 segundo ao iniciar   
             timer  =  setInterval(counter, 1000)
            }

            function  pause(){
                clearInterval(timer)
            }

            function stopped(){
                clearInterval(timer)
                sec = 0
                min = 0
                hr = 0
                display.innerText = '00:00:00'
            }   

            function twoDigits(digits){
                if(digits < 10){
                    return('0' + digits)
                } else{
                    return(digits)
                }
            }

            function counter(){
                sec++
                if(sec === 60){
                    sec = 0
                    min++
                }
                if( min === 60){
                    min = 0
                    hr++
                }
                display.innerText =  twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec)
            }
