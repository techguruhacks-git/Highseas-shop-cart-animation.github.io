let count = 0;
        let btn = document.getElementById("btn");
        let disp = document.getElementById("display");
         
        btn.onclick = function () {
                    count++;
        disp.innerHTML = count;
        };
        const  alertmsg = document.getElementById("btn2");

        alertmsg.addEventListener('click', function() {
            alert('You have Succesfully Purchased Your order!');
          });
