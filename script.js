// Quiz Data
const quizData = [
    {
        question: "https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg",
        a: "Apple",
        b: "Arrow",
        c: "Aligator",
        d: "Ant",
        result: "a"
    },
    {
        question: "https://c8.alamy.com/comp/R4WTPF/vintage-bike-cartoon-R4WTPF.jpg",
        a: "Boy",
        b: "Bread",
        c: "Bicycle",
        d: "Boat",
        result: "c"
    },
    {
        question: "https://previews.123rf.com/images/ruangdesign19/ruangdesign192003/ruangdesign19200300078/143202303-cute-cat-cartoon-llustration.jpg",
        a: "Cup",
        b: "Cat",
        c: "Clock",
        d: "Cake",
        result: "b"
    },
    {
        question: "https://img.freepik.com/free-vector/cute-duck-cartoon_160606-179.jpg",
        a: "Duck",
        b: "Desk",
        c: "Doll",
        d: "Door",
        result: "a"
    },
    {
        question: "https://st2.depositphotos.com/1007692/10536/v/950/depositphotos_105365042-stock-illustration-raw-cartoon-egg.jpg",
        a: "Elephant",
        b: "Envelope",
        c: "Egg",
        d: "Elbow",
        result: "c"
    },
    {
        question: "https://img.freepik.com/free-vector/cute-cartoon-frog_160606-343.jpg",
        a: "Flower",
        b: "Fish",
        c: "Fox",
        d: "Frog",
        result: "d"
    }

];

const quizContainer = document.getElementById("quizContainer");
const questionContainer = document.getElementById("questionContainer");
const qusetionImg = document.getElementById("questionImg");
const answerLists = document.querySelectorAll(".answer");
const a = document.getElementById("a-text");
const b = document.getElementById("b-text");
const c = document.getElementById("c-text");
const d = document.getElementById("d-text");
const submitBtn = document.getElementById("submitBtn");


let score = 0;
let currentQuiz = 0;

// Call function for loading page
loadQuiz();

// Condition when you load the page
function loadQuiz(){
    deselectAnswer()

   

    qusetionImg.src = quizData[currentQuiz].question;
    a.innerText =  quizData[currentQuiz].a;
    b.innerText =  quizData[currentQuiz].b;
    c.innerText =  quizData[currentQuiz].c;
    d.innerText =  quizData[currentQuiz].d;
    
}

function deselectAnswer(){
    answerLists.forEach(answerList =>{
        answerList.checked = false;
    })
}

    

 // Condition when answer is selected and get id of selected answer

    function getSelected(){
        let answer;
        answerLists.forEach(answerList=>{
            if(answerList.checked){
                answer = answerList.id;
            }
        })
        return answer;
    }


// Condition when submit button is clicked

submitBtn.addEventListener("click",()=>{
    const answer = getSelected();

    
        if(answer === quizData[currentQuiz].result){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quizContainer.innerHTML = `<h2> You answered ${score}/${quizData.length} questions <br> correctly. </h2>
            
            <button onclick="location.reload()">Reload</button>`
        }
    
})







