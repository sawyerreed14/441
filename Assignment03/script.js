function choosePath(path) {
  var storyDiv = document.getElementById("story");

  if (path === 'A') {
    storyDiv.innerHTML = "<p>You chose Path A.</p><p>You encounter a warning sign.</p><img src='images/sign.jpg' alt='Warning Sign'>";
    var nextButton = "<button onclick='continueStory()'>Continue</button>";
    storyDiv.innerHTML += nextButton;
  } else if (path === 'B') {
    storyDiv.innerHTML = "<p>You chose Path B.</p><p>You stumble upon a hidden treasure.</p><img src='images/treasure.jpg' alt='Hidden Treasure'>";
    var nextButton = "<button onclick='continueStory()'>Continue</button>";
    storyDiv.innerHTML += nextButton;
  }
}

function continueStory() {
  var storyDiv = document.getElementById("story");
  storyDiv.innerHTML = "<p>You continue your journey.</p><p>Suddenly, a mysterious figure emerges from the shadows.</p><img src='images/figure.jpg' alt='Mysterious Figure'>";
  var choiceButtons = "<button onclick='encounterFigure()'>Approach the figure</button>";
  choiceButtons += "<button onclick='runAway()'>Run away in fear</button>";
  storyDiv.innerHTML += choiceButtons;
}

function encounterFigure() {
  var storyDiv = document.getElementById("story");
  storyDiv.innerHTML = "<p>You cautiously approach the figure.</p><p>It turns out to be a friendly wizard who offers to teach you powerful spells.</p><img src='images/thewizard.jpg' alt='Friendly Wizard'>";
  var continueButton = "<button onclick='continueWizardStory()'>Continue</button>";
  storyDiv.innerHTML += continueButton;
}

function continueWizardStory() {
  var storyDiv = document.getElementById("story");
  storyDiv.innerHTML = "<p>You spend days learning magic from the wise wizard.</p><p>With your newfound powers, you embark on extraordinary adventures.</p><h2>The End!</h2>";
}

function runAway() {
  var storyDiv = document.getElementById("story");
  storyDiv.innerHTML = "<p>You turn and run as fast as you can.</p><p>While running, you accidentally stumble upon a hidden portal.</p><img src='images/magicportal.jpg' alt='Hidden Portal'>";
  var continueButton = "<button onclick='continuePortalStory()'>Continue</button>";
  storyDiv.innerHTML += continueButton;
}

function continuePortalStory() {
  var storyDiv = document.getElementById("story");
  storyDiv.innerHTML = "<p>You step through the portal and find yourself in a mysterious realm.</p><p>Endless adventures await you in this magical land!</p><h2>The End!</h2>";
}
