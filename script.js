
function downloadPDF() {
    const element = document.getElementById('resultSection');
    html2pdf().from(element).save();
}


function addWrongAnswerInput() {
    const wrongAnswersInputList = document.getElementById('wrongAnswersInputList');

    const inputGroup = document.createElement('div');
    inputGroup.style.marginBottom = '10px';

    
    const wrongQuestionInput = document.createElement('input');
    wrongQuestionInput.type = 'text';
    wrongQuestionInput.className = 'wrong-question-input';
    wrongQuestionInput.placeholder = 'Enter Wrong Question';
    wrongQuestionInput.required = true;

   
    const wrongAnswerInput = document.createElement('textarea');
    wrongAnswerInput.className = 'wrong-answer-input';
    wrongAnswerInput.placeholder = 'Enter Wrong Answer';
    wrongAnswerInput.required = true;

    
    const explanationInput = document.createElement('textarea');
    explanationInput.className = 'explanation-input';
    explanationInput.placeholder = 'Enter Explanation';
    explanationInput.required = true;

    inputGroup.appendChild(wrongQuestionInput);
    inputGroup.appendChild(wrongAnswerInput);
    inputGroup.appendChild(explanationInput);
    wrongAnswersInputList.appendChild(inputGroup);
}


function make() {
    const examtype = document.getElementById('examtype').value;
    const name = document.getElementById('nameinput').value;
    const subject = document.getElementById('subjectinput').value;
    const paperName = document.getElementById('papernameinput').value;
    const numQuestions = parseInt(document.getElementById('questionsinput').value);
    const correctAnswers = parseInt(document.getElementById('answersinput').value);

    const wrongAnswers = numQuestions - correctAnswers;
    const percentage = ((correctAnswers / numQuestions) * 100).toFixed(2);


    let grade = '';
    let status = '';
    let tips = '';
    
    if (percentage >= 85) {
        grade = 'A+';
        status = 'Outstanding';
        tips = 'Excellent performance! You’ve mastered the material. Keep challenging yourself with advanced topics or consider contributing to research or tutoring others to solidify your understanding.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(1, 247, 1),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "black";
    } else if (percentage >= 75) {
        grade = 'A';
        status = 'Excellent';
        tips = 'Great work! To continue progressing, try tackling more complex topics or enrolling in advanced courses to push your limits further.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(28, 174, 28),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "black";
    } else if (percentage >= 70) {
        grade = 'A-';
        status = 'Very Good';
        tips = 'Great job! You’re doing very well. Focus on refining your understanding of certain concepts and push yourself to aim for an even higher level of mastery.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(0, 211, 162) ,rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "black";
    } else if (percentage >= 65) {
        grade = 'B+';
        status = 'Good';
        tips = 'Well done! Keep up the good work, and make sure to focus on areas you find challenging. Review difficult concepts or engage with peers for deeper understanding.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(17, 83, 170),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "white";
    } else if (percentage >= 60) {
        grade = 'B';
        status = 'Good';
        tips = 'Solid performance! Keep strengthening your understanding by engaging actively with the material. Practice more problems to build confidence and mastery.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(130, 181, 42) ,rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "black";
    } else if (percentage >= 55) {
        grade = 'B-';
        status = 'Satisfactory';
        tips = 'You’re making good progress, but there’s room for improvement. Dedicate more time to practice, and revisit concepts that are unclear to deepen your understanding.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(138, 199, 16),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "black";
    } else if (percentage >= 50) {
        grade = 'C+';
        status = 'Fair';
        tips = 'You’re progressing, but more work is needed. Focus on the areas you’re struggling with, and consider using additional resources like study guides or asking for clarification from your instructor.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(255, 215, 0),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "black";
    } else if (percentage >= 45) {
        grade = 'C';
        status = 'Average';
        tips = 'You’re doing okay, but there’s significant room for improvement. Prioritize understanding core concepts and don’t hesitate to seek help when needed.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(255, 140, 0),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "black";
    } else if (percentage >= 40) {
        grade = 'C-';
        status = 'Below Average';
        tips = 'You’re currently below expectations. It’s time to increase your effort. Make sure to actively engage with the material and reach out for help if something is unclear.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(255, 69, 0),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "black";
    } else if (percentage >= 35) {
        grade = 'D';
        status = 'Barely Passing';
        tips = 'You’ve passed, but significant improvement is needed. Set aside dedicated time for study, and seek guidance on areas where you’re struggling.';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(255, 0, 0),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "white";
    } else {
        grade = 'F';
        status = 'Fail';
        tips = 'Failure is part of the learning process. Take time to review your mistakes, ask for help, and break the material into smaller sections for better comprehension. Keep trying, and don’t give up!';
        document.getElementById("statusshow").style.background = "linear-gradient(90deg,rgb(139, 0, 0),rgb(255, 255, 255))";
        document.getElementById("statusshow").style.color = "white";

    }
    

  
    document.getElementById('examtypeoutput').textContent = examtype;
    document.getElementById('name').textContent = name;
    document.getElementById('subject').textContent = subject;
    document.getElementById('papername').textContent = paperName;
    document.getElementById('questions').textContent = numQuestions;
    document.getElementById('correct').textContent = correctAnswers;
    document.getElementById('wrong').textContent = wrongAnswers;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('grade').textContent = grade;
    document.getElementById('status').textContent = status;

  
    const tipsSection = document.createElement('p');
    tipsSection.innerHTML = `<strong>Tips for Improvement:</strong> ${tips}`;
    document.getElementById('resultSection').appendChild(tipsSection);

  
const progressBar = document.getElementById('scoreProgress');
progressBar.style.width = `${percentage}%`;
progressBar.textContent = `${percentage}%`; 



   
    const wrongAnswerSection = document.getElementById('wrongAnswerSection');
    const wrongAnswersList = document.getElementById('wrongAnswersList');

    if (wrongAnswers > 0) {
        wrongAnswerSection.style.display = 'block';
        wrongAnswersList.innerHTML = ''; 

        
        const questions = document.querySelectorAll('.wrong-question-input');
        const answers = document.querySelectorAll('.wrong-answer-input');
        const explanations = document.querySelectorAll('.explanation-input');

        questions.forEach((question, index) => {
            const listItem = document.createElement('li');
            
            
            const formattedQuestion = question.value.replace(/\n/g, '<br>');
            const formattedAnswer = answers[index].value.replace(/\n/g, '<br>');
            const formattedExplanation = explanations[index].value.replace(/\n/g, '<br>');
        
            
            listItem.innerHTML = `
                <strong>${index + 1}. Question:</strong> ${formattedQuestion} <br><br>
                <strong>Answer:</strong> ${formattedAnswer} <br><br>
                <strong>Explanation:</strong> ${formattedExplanation} <hr>
            `;
            
           
            wrongAnswersList.appendChild(listItem);
        });
        
    } else {
        wrongAnswerSection.style.display = 'none';
    }


    
document.getElementById('resultSection').style.display = 'block';


document.getElementById('downloadBtn').style.display = 'block';


    
    return false;
}


document.getElementById('answersinput').addEventListener('input', () => {
    const numQuestions = parseInt(document.getElementById('questionsinput').value || 0);
    const correctAnswers = parseInt(document.getElementById('answersinput').value || 0);
    const wrongAnswers = numQuestions - correctAnswers;

    if (wrongAnswers > 0) {
        document.getElementById('wrongAnswersInputSection').style.display = 'block';
    } else {
        document.getElementById('wrongAnswersInputSection').style.display = 'none';
    }
});


function downloadPDF() {
    const resultSection = document.getElementById("resultSection");

  
    if (!resultSection || resultSection.innerHTML.trim() === '') {
        alert("No result to download!");
        return;
    }

  
    const name = document.getElementById('nameinput').value.trim();
    const paperName = document.getElementById('papernameinput').value.trim();

    
    const filename = `${paperName || 'Unknown'} (${name || 'Unknown'}) Progress Report.pdf`;

   
    const options = {
        margin: 1,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    
    html2pdf().from(resultSection).set(options).save();
}








// Get the current date
const currentDate = new Date();

// Format the date as YYYY-MM-DD
const formattedDate = currentDate.toLocaleDateString('en-GB');

// Display the formatted date in the HTML element
document.getElementById('current-date').textContent = formattedDate;
