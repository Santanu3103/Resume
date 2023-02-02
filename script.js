let audio = new Audio('assets/sentmessage.mp3');
let resumeString = `<img src='images/resumeThumbnail.png' class='resumeThumbnail'>
                        <div class='downloadSpace'>
                        <div class='pdfname'>
                        <img src='images/pdf.png'>
                        <label>Santanu_Roy_Resume.pdf</label>
                        </div>
                        <a href='./images/Santanu_Roy_resume update.pdf' download='Santanu_Roy_resume.pdf'>
                        <img class='download' src='images/downloadIcon.svg'>
                        </a>
                        </div>`;

let addressString = `<div class='mapview'>
                     <iframe src='' class='map'>
                     </iframe></div>
                     <label class='add'>
                     <address>5th Phase 'Yelhanka Newtown'
                     <br>Bangaluru, KARNATAKA, INDIA 560064
                     </address>`;

let contact =`<div class='social'>
                    <label >Hover & scroll to see more</label>
                    <a target="_blank" href=''>
                    <div class='socialItem' id='call'>
                        <img class='socialItemI' src='images/phone.svg'/>
                        <label class='number'>+91-9051524415</label>
                    </div> 
                    </a>
                    <a target="_blank" href=''>
                    <div class='socialItem' id='call'>
                        <img class='socialItemI' src='images/gmail.svg'/>
                        <label class='number'>santanuroy253396@gmail.com</label>
                    </div> 
                    </a>
                    <a target="_blank" href='https://github.com/Santanu3103'>
                    <div class='socialItem' id='call'>
                        <img class='socialItemI' src='images/github.svg'/>
                        <label class='number'>https://github.com/Santanu3103</label>
                    </div> 
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/roy-santanu/'>
                    <div class='socialItem' id='call'>
                        <img class='socialItemI' src='images/linkedin.svg'/>
                        <label class='number'>www.linkedin.com/in/roy-santanu</label>
                    </div> 
                    </a>
              </div>`


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    let date = new Date();
    let lastSeen = document.getElementById("lastseen");
        lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    let dp = document.getElementById("fullScreenDP");
        if (dp.style.display === 'flex') {
            dp.style.display = 'none';
        } else {
            dp.style.display = 'flex';
        }
}

function openFullScreenDP() {
    let dp = document.getElementById("fullScreenDP");
    if (dp.style.display === 'flex') {
        dp.style.display = 'none';
    } else {
        dp.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    let input = document.getElementById("inputMSG");
    let ti = input.value;
    if (input.value == "") {
        return;
    }
    let date = new Date();
    let myLI = document.createElement("li");
    let myDiv = document.createElement("div");
    let greendiv = document.createElement("div");
    let dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    let s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    let lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Santanu Roy</a>.</span><br><br>I am a Electrical Engineering Graduate from <span class='bold'>Maulana Abul Kalam Ajad University 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold alink'>'hi'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "hi":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I have learn fullStack devlopment From AccioJob<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>JavaScript<br>CSS<br>HTML<br>SQL</span><br><br>I've experiance with following frameworks :<span class='bold'>ReactJs</span><br><br><span class='bold'>I use  IDE: VSCode ,Intelij ,Eclipse</span>");
            break;

        case "education":
            sendTextMessage("I am completed B.Tech degree in Electrical Engineering from GMIT Krishnanagar<br>Passing Year : 2021<br><br>I have completed my Diploma from Government Polytechnic MIT<br>Passing Year:2017<br>Result:70.3%<br><br>I have completed my Secondary school from local school known as NNV<br>Passing Year:2014");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='www.linkedin.com/in/roy-santanu'><span class='bold'>Santanu Roy</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contact)
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Santanu3103?tab=repositories'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send <b class='alink'>'hi'</b> to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    let date = new Date();
    let myLI = document.createElement("li");
    let myDiv = document.createElement("div");
    let greendiv = document.createElement("div");
    let dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    let s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}




function playSound() {
    audio.play();
}
