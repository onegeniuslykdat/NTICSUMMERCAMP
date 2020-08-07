const zoomclass1 = 'ntic.edu.ng';
const zoomclass2 = 'ntic.edu.ng2';

var date = new Date;
var min = date.getMinutes();
var hr = date.getHours();
var dy = date.getDay();

alert(dy);
alert(hr);

function Activate() {
    switch (dy) {
        case 1:
            // var columnday1 = document.querySelector('table#cat1programs td#Mon');
            // columnday1.innerHTML = 'Monday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
            // var columnday2 = document.querySelector('table#cat2programs td#Mon');
            // columnday2.innerHTML = 'Monday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
            // var columnday3 = document.querySelector('table#cat3programs td#Mon');
            // columnday3.innerHTML = 'Monday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
            if (hr == 10 && hr <= 11/*min <= 59*/) {
                document.querySelector('table#cat1programs td#Mon1').style.backgroundColor = 'red'; 
            }
            else if (hr == 11 && hr <= 12) {
                document.querySelector('table#cat1programs td#Mon2').style.backgroundColor = 'red'; 
            }
            else if (hr == 12 && hr <= 1) {
                document.querySelector('table#cat1programs td#Mon3').style.backgroundColor = 'red'; 
            }
            else if (hr <= 1) {
                document.querySelector('table#cat1programs td#Mon4').style.backgroundColor = 'red'; 
            }
            if(hr == 10 && min <= 59) {

            }
            break;
            case 2:
                // var columnday1 = document.querySelector('table#cat1programs td#Tue');
                // columnday1.innerHTML = 'Tuesday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                // var columnday2 = document.querySelector('table#cat2programs td#Tue');
                // columnday2.innerHTML = 'Tuesday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                // var columnday3 = document.querySelector('table#cat3programs td#Tue');
                // columnday3.innerHTML = 'Tuesday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                if (hr == 10 && hr <= 11/*min <= 59*/) {
                    document.querySelector('table#cat1programs td#Tues1').style.backgroundColor = 'red'; 
                }
                else if (hr == 11 && hr <= 12) {
                    document.querySelector('table#cat1programs td#Tues2').style.backgroundColor = 'red'; 
                }
                else if (hr == 12 && hr <= 1) {
                    document.querySelector('table#cat1programs td#Tues3').style.backgroundColor = 'red'; 
                }
                else if (hr <= 1) {
                    document.querySelector('table#cat1programs td#Tues4').style.backgroundColor = 'red'; 
                }
                break;
            case 3:
                // var columnday1 = document.querySelector('table#cat1programs td#Wed');
                // columnday1.innerHTML = 'Wednesday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                // var columnday2 = document.querySelector('table#cat2programs td#Wed');
                // columnday2.innerHTML = 'Wednesday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                // var columnday3 = document.querySelector('table#cat3programs td#Wed');
                // columnday3.innerHTML = 'Wednesday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                if (hr == 10 && hr <= 11/*min <= 59*/) {
                    document.querySelector('table#cat1programs td#Wed1').style.backgroundColor = 'red'; 
                }
                else if (hr == 11 && hr <= 12) {
                    document.querySelector('table#cat1programs td#Wed2').style.backgroundColor = 'red'; 
                }
                else if (hr == 12 && hr <= 1) {
                    document.querySelector('table#cat1programs td#Wed3').style.backgroundColor = 'red'; 
                }
                else if (hr <= 1) {
                    document.querySelector('table#cat1programs td#Wed4').style.backgroundColor = 'red'; 
                }
                break;
                case 4:
                    // var columnday1 = document.querySelector('table#cat1programs td#Thur');
                    // columnday1.innerHTML = 'Thursday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    // var columnday2 = document.querySelector('table#cat2programs td#Thur');
                    // columnday2.innerHTML = 'Thursday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    // var columnday3 = document.querySelector('table#cat3programs td#Thur');
                    // columnday3.innerHTML = 'Thurday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    if (hr == 10 && hr <= 11/*min <= 59*/) {
                        document.querySelector('table#cat1programs td#Thur1').style.backgroundColor = 'red'; 
                    }
                    else if (hr == 11 && hr <= 12) {
                        document.querySelector('table#cat1programs td#Thur2').style.backgroundColor = 'red'; 
                    }
                    else if (hr == 12 && hr <= 1) {
                        document.querySelector('table#cat1programs td#Thur3').style.backgroundColor = 'red'; 
                    }
                    else if (hr <= 1) {
                        document.querySelector('table#cat1programs td#Thur4').style.backgroundColor = 'red'; 
                    }
                    break;
                    case 5:
            alert(hr);
                        // var columnday1 = document.querySelector('table#cat1programs td#Fri');
                        // columnday1.innerHTML = 'Friday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                        // var columnday2 = document.querySelector('table#cat2programs td#Fri');
                        // columnday2.innerHTML = 'Friday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                        // var columnday3 = document.querySelector('table#cat3programs td#Fri');
                        // columnday3.innerHTML = 'Friday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                        if (hr == 10 && hr <= 11/*min <= 59*/) {
                            document.querySelector('table#cat1programs td#Fri1').style.backgroundColor = 'red'; 
                        }
                        else if (hr == 11 && hr <= 12) {
                            document.querySelector('table#cat1programs td#Fri2').style.backgroundColor = 'red'; 
                        }
                        else if (hr == 12 && hr <= 1) {
                            document.querySelector('table#cat1programs td#Fri3').style.backgroundColor = 'red'; 
                        }
                        else if (hr == 3) {
                            document.querySelector('table#cat1programs td#Fri4').style.backgroundColor = 'red'; 
                        }
                    break;
        default:
            break;
    }
}

setInterval(Activate()); //document.querySelector('table#cat1programs td#Mon1').style.backgroundColor = 'coral'; .innerHTML = 'Monday <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
