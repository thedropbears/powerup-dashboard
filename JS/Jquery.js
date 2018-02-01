$(document).ready(function(Timer){
                setInterval(function(){
                        $("#MTimer").empty();
                        $("#MTimer").append(timer);
                    },500)})

        	$(document).ready(function(CTimer){
                setInterval(function(){
                        $("#CTimer").empty();
                        $("#CTimer").append(Ctimer);
                    },500)})