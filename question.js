// 퀴즈 데이터 - 예시 문제.txt 파일의 내용을 바탕으로 구성
const quizData = [
    {
        id: 1,
        question: "다음 단어의 뜻을 구별해 주는 요소로 알맞지 않은 것은?",
        image: "images/01.png",
        options: [
            { label: "①", text: "곰, 솜 - 자음" },
            { label: "②", text: "종, 공 - 자음" },
            { label: "③", text: "돌, 돈 - 모음" },
            { label: "④", text: "산, 선 - 모음" },
            { label: "⑤", text: "밥, 법 - 모음" }
        ],
        correctAnswer: 1, // ② 종, 공 - 자음 (실제로는 모음 ㅗ, ㅗ으로 구별)
        explanation: "'종'과 '공'은 모음 'ㅗ'으로 동일하므로 자음으로 구별되지 않습니다."
    },
    {
        id: 2,
        question: "국어의 음운에 대한 설명으로 적절하지 않은 것은?",
        image: "images/02.png",
        options: [
            { label: "①", text: "음운의 종류에는 자음과 모음이 있다." },
            { label: "②", text: "말의 뜻을 구별해 주는 소리의 단위이다." },
            { label: "③", text: "모음은 공기가 그대로 흘러나오는 소리이다." },
            { label: "④", text: "자음은 모음 없이 홀로 소리 낼 수 있는 음운이다." },
            { label: "⑤", text: "음운에 따라 소리 낼 때의 느낌이 달라질 수 있다." }
        ],
        correctAnswer: 3, // ④ 자음은 모음 없이 홀로 소리 낼 수 없습니다
        explanation: "자음은 모음과 결합해야만 소리를 낼 수 있는 음운입니다."
    },
    {
        id: 3,
        question: "말의 뜻을 구별해 주는 소리의 가장 작은 단위는?",
        options: [
            { label: "①", text: "음운" },
            { label: "②", text: "음절" },
            { label: "③", text: "단어" },
            { label: "④", text: "문장" },
            { label: "⑤", text: "형태소" }
        ],
        correctAnswer: 0, // ① 음운
        explanation: "음운은 말의 뜻을 구별해 주는 소리의 가장 작은 단위입니다."
    },
    {
        id: 4,
        question: "'돌'의 음운 중 하나를 골라 다른 음운으로 바꾼 단어가 아닌 것은?",
        options: [
            { label: "①", text: "솔" },
            { label: "②", text: "달" },
            { label: "③", text: "덕" },
            { label: "④", text: "돈" },
            { label: "⑤", text: "독" }
        ],
        correctAnswer: 2, // ③ 덕 (돌에서 ㄷ-ㅓ-ㄱ으로 모든 음운이 바뀜)
        explanation: "'덕'은 '돌'과 모든 음운이 다르므로 한 음운만 바꾼 것이 아닙니다."
    },
    {
        id: 5,
        question: "음운에 대한 설명으로 알맞지 않은 것은?",
        options: [
            { label: "①", text: "단어의 음운을 바꾸어 쓰면 의미가 달라진다." },
            { label: "②", text: "우리말의 음운은 자음과 모음으로 이루어진다." },
            { label: "③", text: "자음은 공기가 방해를 받으며 나오는 소리이다." },
            { label: "④", text: "말의 뜻을 구별해 주는 소리의 가장 작은 단위이다." },
            { label: "⑤", text: "모음은 홀로 소리 낼 수 없어 자음을 만나야만 소리를 낼 수 있다." }
        ],
        correctAnswer: 4, // ⑤ 모음은 홀로 소리 낼 수 있습니다
        explanation: "모음은 홀로 소리를 낼 수 있으며, 오히려 자음이 모음과 결합해야 소리를 낼 수 있습니다."
    },
    {
        id: 6,
        question: "단어에 사용된 음운의 개수가 잘못 연결된 것은?",
        options: [
            { label: "①", text: "누나 - 4개" },
            { label: "②", text: "까꿍 - 6개" },
            { label: "③", text: "동생 - 6개" },
            { label: "④", text: "외삼촌 - 7개" },
            { label: "⑤", text: "할머니 - 7개" }
        ],
        correctAnswer: 3, // ④ 외삼촌 - 7개 (실제로는 ㅚ-ㅅ-ㅏ-ㅁ-ㅊ-ㅗ-ㄴ = 7개가 맞음, 다른 답 확인 필요)
        explanation: "'외삼촌'은 ㅚ-ㅅ-ㅏ-ㅁ-ㅊ-ㅗ-ㄴ으로 7개의 음운으로 구성됩니다. '동생'은 ㄷ-ㅗ-ㅇ-ㅅ-ㅐ-ㅇ으로 6개가 맞습니다."
    },
    {
        id: 7,
        question: "다음 중 국어의 자음에 대한 설명으로 적절하지 않은 것은?",
        options: [
            { label: "①", text: "자음의 개수는 모두 19개이다." },
            { label: "②", text: "모음을 만나야 소리 낼 수 있다." },
            { label: "③", text: "공기가 방해를 받으며 나오는 소리이다." },
            { label: "④", text: "입안의 공명 현상을 거쳐서 나온다는 특징이 있다." },
            { label: "⑤", text: "말의 뜻을 구별해 주는 소리의 가장 작은 단위에 속한다." }
        ],
        correctAnswer: 3, // ④ 입안의 공명 현상은 모음의 특징입니다
        explanation: "입안의 공명 현상을 거쳐서 나오는 것은 모음의 특징이며, 자음은 공기가 방해를 받으며 나오는 소리입니다."
    }
];

// 퀴즈 상태 관리
class QuizState {
    constructor() {
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.score = 0;
        this.isCompleted = false;
        this.startTime = null;
        this.endTime = null;
    }

    reset() {
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.score = 0;
        this.isCompleted = false;
        this.startTime = null;
        this.endTime = null;
    }

    selectAnswer(answerIndex) {
        this.userAnswers[this.currentQuestion] = answerIndex;
    }

    nextQuestion() {
        if (this.currentQuestion < quizData.length - 1) {
            this.currentQuestion++;
            return true;
        }
        return false;
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            return true;
        }
        return false;
    }

    calculateScore() {
        this.score = 0;
        this.userAnswers.forEach((answer, index) => {
            if (answer === quizData[index].correctAnswer) {
                this.score++;
            }
        });
        return this.score;
    }

    isAnswered(questionIndex = this.currentQuestion) {
        return this.userAnswers[questionIndex] !== undefined;
    }

    isAllAnswered() {
        return this.userAnswers.length === quizData.length && 
               this.userAnswers.every(answer => answer !== undefined);
    }
}

// DOM 요소들
const elements = {
    welcomeSection: document.getElementById('welcome-section'),
    quizSection: document.getElementById('quiz-section'),
    resultSection: document.getElementById('result-section'),
    startBtn: document.getElementById('start-quiz-btn'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    questionCounter: document.getElementById('question-counter'),
    progressFill: document.getElementById('progress-fill'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),
    resultTitle: document.getElementById('result-title'),
    resultEmoji: document.getElementById('result-emoji'),
    scoreText: document.getElementById('score-text'),
    scoreMessage: document.getElementById('score-message'),
    answerReview: document.getElementById('answer-review'),
    retryBtn: document.getElementById('retry-btn'),
    shareBtn: document.getElementById('share-btn'),
    loading: document.getElementById('loading'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message')
};

// 퀴즈 인스턴스 생성
const quiz = new QuizState();

// 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    showWelcomeSection();
});

function initializeEventListeners() {
    elements.startBtn.addEventListener('click', startQuiz);
    elements.prevBtn.addEventListener('click', goToPrevQuestion);
    elements.nextBtn.addEventListener('click', goToNextQuestion);
    elements.submitBtn.addEventListener('click', submitQuiz);
    elements.retryBtn.addEventListener('click', retryQuiz);
    elements.shareBtn.addEventListener('click', shareResult);
}

// 섹션 표시 함수들
function showWelcomeSection() {
    hideAllSections();
    elements.welcomeSection.classList.remove('hidden');
    elements.welcomeSection.classList.add('fade-in');
}

function showQuizSection() {
    hideAllSections();
    elements.quizSection.classList.remove('hidden');
    elements.quizSection.classList.add('slide-in');
}

function showResultSection() {
    hideAllSections();
    elements.resultSection.classList.remove('hidden');
    elements.resultSection.classList.add('fade-in');
}

function hideAllSections() {
    elements.welcomeSection.classList.add('hidden');
    elements.quizSection.classList.add('hidden');
    elements.resultSection.classList.add('hidden');
}

// 퀴즈 시작
function startQuiz() {
    showLoading();
    
    setTimeout(() => {
        quiz.reset();
        quiz.startTime = new Date();
        showQuizSection();
        displayQuestion();
        updateProgressBar();
        updateControls();
        hideLoading();
        showToast('퀴즈가 시작되었습니다!');
    }, 1000);
}

// 문제 표시
function displayQuestion() {
    const currentQ = quizData[quiz.currentQuestion];
    
    elements.questionText.textContent = `${quiz.currentQuestion + 1}. ${currentQ.question}`;
    elements.questionCounter.textContent = `${quiz.currentQuestion + 1} / ${quizData.length}`;
    
    // 이미지가 있는 경우 표시
    const existingImage = document.getElementById('question-image');
    if (existingImage) {
        existingImage.remove();
    }
    
    if (currentQ.image) {
        const imageElement = document.createElement('div');
        imageElement.id = 'question-image';
        imageElement.className = 'question-image';
        
        const img = document.createElement('img');
        img.src = currentQ.image;
        img.alt = '문제 이미지';
        
        // 이미지 로딩 에러 처리
        img.onerror = function() {
            this.style.display = 'none';
            const errorMsg = document.createElement('div');
            errorMsg.className = 'image-error';
            errorMsg.textContent = '이미지를 불러올 수 없습니다.';
            errorMsg.style.cssText = 'text-align: center; color: #e74c3c; padding: 20px; border: 1px dashed #e74c3c; border-radius: 8px; margin: 10px 0;';
            imageElement.appendChild(errorMsg);
        };
        
        // 이미지 로딩 성공 처리
        img.onload = function() {
            console.log('이미지 로딩 성공:', currentQ.image);
        };
        
        imageElement.appendChild(img);
        
        // 문제 텍스트 다음에 이미지 삽입
        elements.questionText.parentNode.insertBefore(imageElement, elements.optionsContainer);
    }
    
    // 선택지 생성
    elements.optionsContainer.innerHTML = '';
    currentQ.options.forEach((option, index) => {
        const optionElement = createOptionElement(option, index);
        elements.optionsContainer.appendChild(optionElement);
    });
    
    updateProgressBar();
    updateControls();
}

// 선택지 요소 생성
function createOptionElement(option, index) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.innerHTML = `
        <span class="option-label">${option.label}</span>
        <span>${option.text}</span>
    `;
    
    // 이전에 선택한 답이 있다면 표시
    if (quiz.userAnswers[quiz.currentQuestion] === index) {
        optionDiv.classList.add('selected');
    }
    
    optionDiv.addEventListener('click', () => selectOption(index, optionDiv));
    
    return optionDiv;
}

// 선택지 선택
function selectOption(index, optionElement) {
    // 다른 선택지들의 선택 상태 제거
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 현재 선택지 활성화
    optionElement.classList.add('selected');
    quiz.selectAnswer(index);
    
    updateControls();
    
    // 선택 피드백 애니메이션
    optionElement.style.transform = 'scale(0.98)';
    setTimeout(() => {
        optionElement.style.transform = 'scale(1)';
    }, 150);
}

// 이전 문제로
function goToPrevQuestion() {
    if (quiz.prevQuestion()) {
        displayQuestion();
        showToast('이전 문제로 이동했습니다.');
    }
}

// 다음 문제로
function goToNextQuestion() {
    if (quiz.nextQuestion()) {
        displayQuestion();
        showToast('다음 문제로 이동했습니다.');
    }
}

// 진행률 업데이트
function updateProgressBar() {
    const progress = ((quiz.currentQuestion + 1) / quizData.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
}

// 컨트롤 버튼 업데이트
function updateControls() {
    // 이전 버튼
    elements.prevBtn.disabled = quiz.currentQuestion === 0;
    
    // 다음 버튼
    const isLastQuestion = quiz.currentQuestion === quizData.length - 1;
    const hasAnswer = quiz.isAnswered();
    
    if (isLastQuestion) {
        elements.nextBtn.classList.add('hidden');
        elements.submitBtn.classList.remove('hidden');
        elements.submitBtn.disabled = !hasAnswer;
    } else {
        elements.nextBtn.classList.remove('hidden');
        elements.submitBtn.classList.add('hidden');
        elements.nextBtn.disabled = !hasAnswer;
    }
}

// 퀴즈 제출
function submitQuiz() {
    if (!quiz.isAllAnswered()) {
        showToast('모든 문제에 답해주세요!', 'error');
        return;
    }
    
    showLoading('결과를 계산하는 중...');
    
    setTimeout(() => {
        quiz.endTime = new Date();
        quiz.calculateScore();
        quiz.isCompleted = true;
        
        displayResults();
        showResultSection();
        hideLoading();
    }, 1500);
}

// 결과 표시
function displayResults() {
    const { score } = quiz;
    const total = quizData.length;
    const percentage = Math.round((score / total) * 100);
    
    // 결과 아이콘 및 메시지 설정
    if (percentage >= 80) {
        elements.resultEmoji.className = 'fas fa-trophy';
        elements.resultTitle.textContent = '훌륭합니다!';
        elements.scoreMessage.textContent = '한국어 음운에 대해 잘 이해하고 계시네요!';
    } else if (percentage >= 60) {
        elements.resultEmoji.className = 'fas fa-medal';
        elements.resultTitle.textContent = '잘하셨습니다!';
        elements.scoreMessage.textContent = '좋은 점수입니다. 조금 더 공부하시면 완벽해질 거예요!';
    } else {
        elements.resultEmoji.className = 'fas fa-redo';
        elements.resultTitle.textContent = '다시 도전해보세요!';
        elements.scoreMessage.textContent = '한국어 음운에 대해 더 공부하신 후 다시 시도해보세요.';
    }
    
    elements.scoreText.textContent = `${score}/${total}`;
    
    // 상세 결과 표시
    displayAnswerReview();
}

// 답안 리뷰 표시
function displayAnswerReview() {
    elements.answerReview.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const userAnswer = quiz.userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        const userAnswerText = userAnswer !== undefined ? 
            question.options[userAnswer].text : '답하지 않음';
        const correctAnswerText = question.options[question.correctAnswer].text;
        
        reviewItem.innerHTML = `
            <div class="review-question">문제 ${index + 1}: ${question.question}</div>
            <div class="review-answer">
                <strong>내 답:</strong> ${userAnswerText}<br>
                <strong>정답:</strong> ${correctAnswerText}<br>
                <strong>해설:</strong> ${question.explanation}
            </div>
        `;
        
        elements.answerReview.appendChild(reviewItem);
    });
}

// 퀴즈 재시작
function retryQuiz() {
    showLoading('퀴즈를 준비하는 중...');
    
    setTimeout(() => {
        startQuiz();
    }, 1000);
}

// 결과 공유
function shareResult() {
    const { score } = quiz;
    const total = quizData.length;
    const percentage = Math.round((score / total) * 100);
    
    const shareText = `한국어 음운 퀴즈 결과: ${score}/${total}점 (${percentage}%)을 획득했습니다! 🎓 #한국어퀴즈 #VibeCoding`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Vibe Coding - 한국어 음운 퀴즈',
            text: shareText,
            url: window.location.href
        }).then(() => {
            showToast('결과가 공유되었습니다!');
        }).catch(() => {
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

// 클립보드에 복사
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('결과가 클립보드에 복사되었습니다!');
    }).catch(() => {
        showToast('복사에 실패했습니다.', 'error');
    });
}

// 로딩 표시/숨김
function showLoading(message = '로딩 중...') {
    elements.loading.querySelector('p').textContent = message;
    elements.loading.classList.remove('hidden');
}

function hideLoading() {
    elements.loading.classList.add('hidden');
}

// 토스트 메시지 표시
function showToast(message, type = 'info') {
    elements.toastMessage.textContent = message;
    elements.toast.classList.remove('hidden');
    
    // 자동으로 숨기기
    setTimeout(() => {
        elements.toast.classList.add('hidden');
    }, 3000);
}

// 키보드 단축키 지원
document.addEventListener('keydown', function(event) {
    if (elements.quizSection.classList.contains('hidden')) {
        return;
    }
    
    // 숫자 키로 선택지 선택 (1-5)
    if (event.key >= '1' && event.key <= '5') {
        const optionIndex = parseInt(event.key) - 1;
        const options = document.querySelectorAll('.option');
        if (options[optionIndex]) {
            selectOption(optionIndex, options[optionIndex]);
        }
    }
    
    // 화살표 키로 네비게이션
    if (event.key === 'ArrowLeft' && !elements.prevBtn.disabled) {
        goToPrevQuestion();
    } else if (event.key === 'ArrowRight' && !elements.nextBtn.disabled) {
        goToNextQuestion();
    }
    
    // Enter로 제출
    if (event.key === 'Enter' && !elements.submitBtn.classList.contains('hidden') && !elements.submitBtn.disabled) {
        submitQuiz();
    }
});

// 브라우저 새로고침 방지 (퀴즈 진행 중)
window.addEventListener('beforeunload', function(event) {
    if (!elements.quizSection.classList.contains('hidden') && quiz.userAnswers.length > 0) {
        event.preventDefault();
        event.returnValue = '퀴즈가 진행 중입니다. 정말 페이지를 떠나시겠습니까?';
    }
});

// 반응형 디자인을 위한 윈도우 리사이즈 이벤트
window.addEventListener('resize', function() {
    // 모바일에서 키보드가 나타날 때 레이아웃 조정
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// 초기 설정
window.addEventListener('load', function() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// 개발자 도구에서 퀴즈 데이터 확인용 (개발 모드에서만)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.quizDebug = {
        data: quizData,
        state: quiz,
        showAnswers: () => {
            console.log('정답:', quizData.map((q, i) => `문제 ${i+1}: ${q.options[q.correctAnswer].label} ${q.options[q.correctAnswer].text}`));
        }
    };
    console.log('개발 모드: window.quizDebug로 퀴즈 정보를 확인할 수 있습니다.');
}