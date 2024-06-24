
let availableCooks = [
    { id: 1, name: 'John Doe', specialty: 'Italian cuisine' },
    { id: 2, name: 'Jane Smith', specialty: 'French cuisine' },
    { id: 3, name: 'Michael Johnson', specialty: 'Asian fusion' }
];

function displayCooks() {
    let cooksListDiv = document.getElementById('cooksList');
    cooksListDiv.innerHTML = '<h3>Available Cooks</h3>';
    availableCooks.forEach(cook => {
        cooksListDiv.innerHTML += `
            <div class="cook">
                <h4>${cook.name}</h4>
                <p>Specialty: ${cook.specialty}</p>
                <button onclick="hireCook(${cook.id})">Hire ${cook.name}</button>
            </div>
        `;
    });
}

function hireCook(cookId) {
    let cook = availableCooks.find(c => c.id === cookId);
    if (cook) {
        alert(`Hiring ${cook.name}!`);
    
    }
}

displayCooks();

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value.trim();
    if (username !== '') {
        
        document.getElementById('jobRequestForm').style.display = 'block';
        alert(`Welcome back, ${username}!`);
      
    } else {
        alert('Please enter a username.');
    }
});


document.getElementById('postJobForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let jobDescription = document.getElementById('jobDescription').value.trim();
    if (jobDescription !== '') {
        
        alert(`Job request posted: ${jobDescription}`);
        
    } else {
        alert('Please enter a job description.');
    }
});
