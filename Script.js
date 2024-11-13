// List of words for each level (up to 100 words)
const words = [
    'JAVA', 'JAVASCRIPT', 'HTML', 'CSS', 'PYTHON', 'REACT', 'NODE', 'EXPRESS', 'DATABASE', 'FRONTEND', 
    'BACKEND', 'DEBUG', 'ALGORITHM', 'VARIABLE', 'FUNCTION', 'OBJECT', 'ARRAY', 'LOOP', 'EVENT', 'ASYNC',
    'COMPUTER', 'NETWORK', 'SERVER', 'CLIENT', 'DEVELOPER', 'DATABASE', 'API', 'CLOUD', 'DEVOPS', 'AGILE',
    // Add more words here for up to 100 levels
    'INNOVATE', 'ENGINEER', 'SCRUM', 'PROGRAM', 'SCRIPT', 'VERSION', 'REPOSITORY', 'GIT', 'HTML5', 'CSS3',
    'TENSORFLOW', 'PYTORCH', 'MACHINELEARNING', 'AI', 'DEEPLEARNING', 'PREDICTION', 'STATISTICS', 'NEURALNET',
    'VISUALIZATION', 'ALGORITHM', 'COMPILE', 'DEBUGGER', 'JAVAEE', 'CLOUDBASE', 'SECURITY', 'MONITORING', 'SSL',
    'UNITTEST', 'INTEGRATION', 'DEPLOY', 'REACTJS', 'VUEJS', 'ANGULAR', 'NODEJS', 'DASHBOARD', 'UIUX', 'DEBUGGER',
    'ES6', 'BABEL', 'WEBPACK', 'TYPESCRIPT', 'EXCEPTION', 'COMPILER', 'SERVERLESS', 'GITHUB', 'BITBUCKET', 'JQUERY',
    'CSSGRID', 'REACTNATIVE', 'REDUX', 'HOOKS', 'SOCKETIO', 'GRAPHQL', 'VUE', 'JEST', 'MOCHA', 'TDD', 'BDD', 'JIRA',
    'CICD', 'CONTINUOUSINTEGRATION', 'TESTAUTOMATION', 'INTEGRATIONTEST', 'MONGODB', 'NOSQL', 'POSTGRESQL', 'MYSQL', 
    'SQL', 'REDIS', 'GRAPHDB', 'DYNAMODB', 'ELASTICSEARCH', 'KAFKA', 'DOCKER', 'KUBERNETES', 'VIRTUALIZATION', 'K8S',
    'SERVERCONFIG', 'DEVOPSENGINEER', 'CLOUDARCHITECT', 'DATABASEADMIN', 'NETWORKSECURITY', 'SECURECODE', 'AUTHENTICATION',
    'ENCRYPTION', 'FIREWALL', 'VIRUSPROTECTION', 'IDS', 'IPS', 'DISASTERRECOVERY', 'BACKUP', 'VULNERABILITY', 'PENTEST',
    'HACKING', 'BREECH', 'FLOODFILL', 'CAPTCHA', 'SECURITYPATCH', 'WIFI', 'FIREWALL', 'GITFLOW', 'SQA', 'ALGORITHMOPTIMIZATION',
    'SYNCHRONIZATION', 'MUTEX', 'RACECONDITION', 'MULTITHREADING', 'FORK', 'CLONE', 'OPENSSL', 'JSON', 'XML', 'CSV'
    // Ensure there are at least 100 words
];

let currentLevel = 1;
let chosenWord = '';
let shuffledWord = '';
let wordArray = [];

// Function to generate a new level
function generateLevel() {
    // Select a word for the current level
    chosenWord = words[currentLevel - 1].toUpperCase();
    wordArray = chosenWord.split('');
    
    // Shuffle the word letters
    shuffledWord = wordArray.sort(() => Math.random() - 0.5).join('');
    
    // Display the word grid with shuffled letters
    const wordGrid = document.getElementById('wordGrid');
    wordGrid.innerHTML = ''; // Clear previous grid
    shuffledWord.split('').forEach(letter => {
        const letterDiv = document.createElement('div');
        letterDiv.textContent = letter;
        wordGrid.appendChild(letterDiv);
    });

    // Update the level in the UI
    document.getElementById('level').textContent = currentLevel;
}

// Function to check the user's input
function checkWord() {
    const userInput = document.getElementById('userInput').value.toUpperCase();
    const messageElement = document.getElementById('message');

    if (userInput === chosenWord) {
        messageElement.textContent = 'Congratulations! You guessed the word!';
        messageElement.style.color = 'green';
        
        // Move to the next level
        if (currentLevel < words.length) {
            currentLevel++;
            generateLevel();
        } else {
            messageElement.textContent = 'You completed all levels!';
            messageElement.style.color = 'blue';
        }
    } else {
        messageElement.textContent = 'Try again!';
        messageElement.style.color = 'red';
    }

    // Clear the input field for next attempt
    document.getElementById('userInput').value = '';
}

// Initialize the first level
generateLevel();
