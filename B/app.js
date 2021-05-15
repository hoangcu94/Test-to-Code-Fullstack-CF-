const api_link = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple';
const app = document.getElementById("app");
const quests = document.getElementById("questions");
const answers = document.getElementById("answers");
let point = 0;
fetch(api_link)
.then((res) => res.json())
.then((data) => handleData(data))
.catch((err) => {
    console.log(err);
});


// in ra html
function handleData(data) {
    let questions = data.results;

    for(let i = 0; i< questions.length; i++) {
        const html = questions.map((item, index) => {
            index++
            let correct_answer = item.correct_answer;
            let incorrect_answers = Array.from(item.incorrect_answers);
            incorrect_answers.push(correct_answer);
            const answer = incorrect_answers.map((item, index) => {
    
                let choice = `<div class="answer" >${item}</div>`
                index++;
                return choice;
                // return `<div class="answer" > ${index}. ${item}</div>`
            }).join("");  
            return `<div id="quest">
            <div class="quest-text">${index}.  ${item.question}</div>`
             + `<div>${answer}</div> <br></div>`
    
        }).join('');
        quests.innerHTML = html;  
        
        let choices = [];
        quests.addEventListener("click", (e) => {
            e.target.classList.add("active")
            console.log(e.target.innerHTML);
        });
    }
    
    
};

