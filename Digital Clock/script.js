let ele = document.querySelector(".clock");
            let a;

        time(); //calls initially 

        function time() {
            let obj = new Date();
            let h = obj.getHours();
            let m = obj.getMinutes();
            let s = obj.getSeconds();

            // ele.insertAdjacentHTML("beforeend", `${h} : ${m} : ${s}`); goes infinite keeps adding
            h = ((h < 10) ? "0" : "") + h;
            s = ((s < 10) ? "0" : "") + s;
            m = ((m < 10) ? "0" : "") + m;

            let t = `${h} : ${m} : ${s}`;

            if (h == 0) { h = 12; }
            else if (h < 12) { t += 'AM'; }
            else {
                // t[0]=t[0]-12; //strings are immutable so t is still in 24 h
                h = h - 12;
                t = `${h} : ${m} : ${s} PM`;
            }

            ele.innerHTML = t;
             a = setTimeout(time, 1000);
            // ele.insertAdjacentHTML("beforeend", " <<<---This is time :>");
        }

        function stop_time(){
            clearTimeout(a);
        } 
        let state;
        let ok=0;
        btn = document.getElementById('btns');
        // let button=document.getElementsByTagName('button')[0];
        let button=document.querySelector('button');
        btn.addEventListener('click',()=>{
            if(ok===0){
            state='RESUME...';
            button.innerHTML=state;
            clearTimeout(a);
            ok=1;
            }
            else{
            state='PAUSE...';
            button.innerHTML=state;
            time();
            ok=0;
            }
            
        });
