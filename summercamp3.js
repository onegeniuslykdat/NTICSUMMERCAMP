const zoomclass1 = 'www.zoom.us/j/3197193802?pwd=bXlJaFZJQWQvaDk5aHBoQXM0aGVWQT09';
const zoomclass2 = 'www.zoom.us/j/8329628758?pwd=Z0lpRk8wZVF6U2RDT3RDS1lRa1MwUT09';

var date = new Date;
var min = date.getMinutes();
var hr = date.getUTCHours() + 1;//getHours();
var dy = date.getUTCDay();//getDay();

//let text = '';

//alert(hr);

function Activate() {
    switch (dy) {
        case 1:
           if (hr == 10 && hr < 11) {
                //document.querySelector('table#cat1programs td#Mon1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>"';
                //document.querySelector('table#cat2programs td#Mon1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                document.querySelector('table#cat3programs td#Mon1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                       
                //document.querySelector('table#cat1programs td#Mon1').style.backgroundColor = 'lightgreen'; 
                //document.querySelector('table#cat2programs td#Mon1').style.backgroundColor = 'lightgreen';
                document.querySelector('table#cat3programs td#Mon1').style.backgroundColor = 'lightgreen';
            }
            else if (hr == 11 && hr < 12) {
                //document.querySelector('table#cat1programs td#Mon2').innerHTML = 'Art & Craft <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                //document.querySelector('table#cat2programs td#Mon2').innerHTML = 'Mental Arithmetic <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                document.querySelector('table#cat3programs td#Mon2').innerHTML = 'Mental Arithmetic <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';
                       
                //document.querySelector('table#cat1programs td#Mon2').style.backgroundColor = 'lightgreen'; 
                //document.querySelector('table#cat2programs td#Mon2').style.backgroundColor = 'lightgreen';
                document.querySelector('table#cat3programs td#Mon2').style.backgroundColor = 'lightgreen';
            }
            else if (hr == 12 && hr < 13) {
                //document.querySelector('table#cat1programs td#Mon3').innerHTML = 'Mental Arithmetic <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                //document.querySelector('table#cat2programs td#TMon3').innerHTML = 'Coding <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                document.querySelector('table#cat3programs td#Mon3').innerHTML = 'Art & Craft <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';
                       
                //document.querySelector('table#cat1programs td#Mon3').style.backgroundColor = 'lightgreen'; 
                //document.querySelector('table#cat2programs td#Mon3').style.backgroundColor = 'lightgreen';
                document.querySelector('table#cat3programs td#Mon3').style.backgroundColor = 'lightgreen';
            }
            else if (hr == 12 && min >= 52 || hr == 13) {
                //document.querySelector('table#cat1programs td#Mon4').innerHTML = 'Art & Craft <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                //document.querySelector('table#cat2programs td#Mon4').innerHTML = 'Coding <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';
                //document.querySelector('table#cat3programs td#Mon4').innerHTML = 'FolkLore <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                       
                //document.querySelector('table#cat1programs td#Mon4').style.backgroundColor = 'lightgreen'; 
                //document.querySelector('table#cat2programs td#Mon4').style.backgroundColor = 'lightgreen';
                //document.querySelector('table#cat3programs td#Mon4').style.backgroundColor = 'lightgreen';
            }
            break;
            case 2:
                if (hr == 10 && hr < 11) {
                    //text = document.querySelector('table#catprograms td#Tues1').textContent;
                    
                    //document.querySelector('table#cat1programs td#Tues1').innerHTML = 'FolkLore <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat2programs td#Tues1').innerHTML = 'FolkLore <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';
                    document.querySelector('table#cat3programs td#Tues1').innerHTML = 'Folklore <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';

                    //document.querySelector('table#cat1programs td#Tues1').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat2programs td#Tues1').style.backgroundColor = 'lightgreen'; 
                    document.querySelector('table#cat3programs td#Tues1').style.backgroundColor = 'lightgreen';
                }
                else if (hr == 11 && hr < 12) {
                    //text = document.querySelector('table#catprograms td#Tues1').textContent;
                    
                    //document.querySelector('table#catprograms td#Tues2').innerHTML = text + '<a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    
                    //document.querySelector('table#cat1programs td#Tues2').innerHTML = 'Creative Thinking & Writing <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat2programs td#Tues2').innerHTML = 'Creative Thinking & Writing <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat3programs td#Tues2').innerHTML = 'Coding <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';

                    //document.querySelector('table#cat1programs td#Tues2').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat2programs td#Tues2').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat3programs td#Tues2').style.backgroundColor = 'lightgreen';
                }
                else if (hr == 12 && hr < 13) {
                    //document.querySelector('table#cat1programs td#Tues3').innerHTML = 'Literary Artistry <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat2programs td#Tues3').innerHTML = 'Mental Arithmetic <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    document.querySelector('table#cat3programs td#Tues3').innerHTML = 'Coding <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';

                    //document.querySelector('table#cat1programs td#Tues3').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat2programs td#Tues3').style.backgroundColor = 'lightgreen'; 
                    document.querySelector('table#cat3programs td#Tues3').style.backgroundColor = 'lightgreen'; 
                }
                else if (hr == 12 && min >= 52 || hr == 13) {
                    //document.querySelector('table#cat1programs td#Tues4').innerHTML = 'Literary Artistry <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat2programs td#Tues4').innerHTML = 'Literary Artistry <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    document.querySelector('table#cat3programs td#Tues4').innerHTML = 'Word Skill <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';

                    //document.querySelector('table#cat1programs td#Tues4').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat2programs td#Tues4').style.backgroundColor = 'lightgreen'; 
                    document.querySelector('table#cat3programs td#Tues4').style.backgroundColor = 'lightgreen'; 
                }
                break;
            case 3:
                if (hr == 10 && hr < 11) {
                    //document.querySelector('table#cat1programs td#Wed1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat2programs td#Wed1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    document.querySelector('table#cat3programs td#Wed1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';

                    //document.querySelector('table#cat1programs td#Wed1').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat2programs td#Wed1').style.backgroundColor = 'lightgreen'; 
                    document.querySelector('table#cat3programs td#Wed1').style.backgroundColor = 'lightgreen'
                }
                else if (hr == 11 && hr < 12) {
                    //document.querySelector('table#cat1programs td#Wed2').innerHTML = 'Mental Arithmetic <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat2programs td#Wed2').innerHTML = 'Coding <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat3programs td#Wed2').innerHTML = 'Mental Arithmetic <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';

                    //document.querySelector('table#cat1programs td#Wed2').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat2programs td#Wed2').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat3programs td#Wed2').style.backgroundColor = 'lightgreen' 
                }
                else if (hr == 12 && hr < 13) {
                    //document.querySelector('table#cat1programs td#Wed3').innerHTML = 'Word Skill <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat2programs td#Wed3').innerHTML = 'Art & Craft <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    document.querySelector('table#cat3programs td#Wed3').innerHTML = 'Mental Arithmetic <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';

                    //document.querySelector('table#cat1programs td#Wed3').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat2programs td#Wed3').style.backgroundColor = 'lightgreen'; 
                    document.querySelector('table#cat3programs td#Wed3').style.backgroundColor = 'lightgreen';  
                }
                else if (hr == 12 && min >= 52 || hr == 13) {
                    //document.querySelector('table#cat1programs td#Wed4').innerHTML = 'Word Skill <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat2programs td#Wed4').innerHTML = 'Literary Artistry <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';
                    //document.querySelector('table#cat3programs td#Wed4').innerHTML = 'Word Skill <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>';

                    //document.querySelector('table#cat1programs td#Wed4').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat2programs td#Wed4').style.backgroundColor = 'lightgreen'; 
                    //document.querySelector('table#cat3programs td#Wed4').style.backgroundColor = 'lightgreen'; 
                }
                break;
                case 4:
                    if (hr == 10 && hr < 11) {
                        //document.querySelector('table#cat1programs td#Thur1').innerHTML = 'Pastry <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>'; 
                        //document.querySelector('table#cat2programs td#Thur1').innerHTML = 'Pastry <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>'; 
                        document.querySelector('table#cat3programs td#Thur1').innerHTML = 'Pastry <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>'; 

                        //document.querySelector('table#cat1programs td#Thur1').style.backgroundColor = 'lightgreen'; 
                        //document.querySelector('table#cat2programs td#Thur1').style.backgroundColor = 'lightgreen';
                        document.querySelector('table#cat3programs td#Thur1').style.backgroundColor = 'lightgreen';
                    }
                    else if (hr == 11 && hr < 12) {
                        //document.querySelector('table#cat1programs td#Thur2').innerHTML = 'Fun Science <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                        //document.querySelector('table#cat2programs td#Thur2').innerHTML = 'Word Skill <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                        document.querySelector('table#cat3programs td#Thur2').innerHTML = 'Coding <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>'; 

                        //document.querySelector('table#cat1programs td#Thur2').style.backgroundColor = 'lightgreen'; 
                        //document.querySelector('table#cat2programs td#Thur2').style.backgroundColor = 'lightgreen';
                        document.querySelector('table#cat3programs td#Thur2').style.backgroundColor = 'lightgreen';  
                    }
                    else if (hr == 12 && hr < 13) {
                        //document.querySelector('table#cat1programs td#Thur3').innerHTML = 'Coding <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                        //document.querySelector('table#cat2programs td#Thur3').innerHTML = 'Word Skill <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                        document.querySelector('table#cat3programs td#Thur3').innerHTML = 'Creative Thinking & Writing <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>'; 

                        //document.querySelector('table#cat1programs td#Thur3').style.backgroundColor = 'lightgreen'; 
                        //document.querySelector('table#cat2programs td#Thur3').style.backgroundColor = 'lightgreen';
                        document.querySelector('table#cat3programs td#Thur3').style.backgroundColor = 'lightgreen';
                    }
                    else if (hr == 12 && min >= 52 || hr == 13) {
                        //document.querySelector('table#cat1programs td#Thur4').innerHTML = 'Literary Artistry <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                        //document.querySelector('table#cat2programs td#Thur4').innerHTML = 'Word Skill <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>'; 
                        document.querySelector('table#cat3programs td#Thur4').innerHTML = 'Literary Artistry <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 

                        //document.querySelector('table#cat1programs td#Thur4').style.backgroundColor = 'lightgreen'; 
                        //document.querySelector('table#cat2programs td#Thur4').style.backgroundColor = 'lightgreen';
                        document.querySelector('table#cat3programs td#Thur4').style.backgroundColor = 'lightgreen';
                    }
                    break;
                    case 5:
                        if (hr == 10 && hr < 11) {
                            //document.querySelector('table#cat1programs td#Fri1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                            //document.querySelector('table#cat2programs td#Fri1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                            document.querySelector('table#cat3programs td#Fri1').innerHTML = 'Fitness & Dance <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 

                            //document.querySelector('table#cat1programs td#Fri1').style.backgroundColor = 'lightgreen';
                            //document.querySelector('table#cat2programs td#Fri1').style.backgroundColor = 'lightgreen';
                            document.querySelector('table#cat3programs td#Fri1').style.backgroundColor = 'lightgreen'; 
                        }
                        else if (hr == 11 && hr < 12) {
                            //document.querySelector('table#cat1programs td#Fri3').innerHTML = 'Virtual Vacation <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                            //document.querySelector('table#cat2programs td#Fri3').innerHTML = 'Virtual Vacation <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                            document.querySelector('table#cat3programs td#Fri2').innerHTML = 'Virtual Vacation <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 

                            //document.querySelector('table#cat1programs td#Fri2').style.backgroundColor = 'lightgreen';
                            //document.querySelector('table#cat2programs td#Fri2').style.backgroundColor = 'lightgreen';
                            document.querySelector('table#cat3programs td#Fri2').style.backgroundColor = 'lightgreen'; 
                        }
                        else if (hr == 12 && hr < 13) {
                            document.querySelector('table#cat3programs td#Fri2').innerHTML = 'Fun Science (Ages 11+) <a target="_blank" href="http://'+zoomclass2+'" id="JC"><button>JOIN CLASS</button></a>';                    

                            //document.querySelector('table#cat1programs td#Fri3').style.backgroundColor = 'lightgreen';
                            //document.querySelector('table#cat2programs td#Fri3').style.backgroundColor = 'lightgreen';
                            document.querySelector('table#cat3programs td#Fri3').style.backgroundColor = 'lightgreen';  
                        }
                        else if (hr == 12 && min >= 52 || hr == 13) {
                            //document.querySelector('table#cat1programs td#Fri4').innerHTML = 'Story Telling or Special Talent <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                            //document.querySelector('table#cat2programs td#Fri4').innerHTML = 'Story Telling or Special Talent <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 
                            document.querySelector('table#cat3programs td#Fri4').innerHTML = 'Story Telling or Special Talent <a target="_blank" href="http://'+zoomclass1+'" id="JC"><button>JOIN CLASS</button></a>'; 

                            //document.querySelector('table#cat1programs td#Fri4').style.backgroundColor = 'lightgreen';
                            //document.querySelector('table#cat2programs td#Fri4').style.backgroundColor = 'lightgreen';
                            document.querySelector('table#cat3programs td#Fri4').style.backgroundColor = 'lightgreen';  
                        }
                    break;
        default:
            break;
    }
}

setInterval(Activate(), 1);
