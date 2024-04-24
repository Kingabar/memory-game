# memory-game
# Game is available on 

# Table of content 
 ### 1 Instruction 
 ### 2 Purpose of the website
 ### 3 Design and Layout
 ### 4 Technology
 ### 5 Deployment
 ### 6 Testing
 ### 7 Known bugs
 ### 8 Credits
 ### 9 Future Improvements

 
# 1 Instruction 
 - The objective of the game is to find all the matching pairs of cards.
Gameplay:
 1 Click on any card to reveal its symbol.
 2 Then, click on another card to try to find its matching pair.
 3 If the symbols on the two cards match, they will remain face-up.
 4 If the symbols don't match, both cards will flip back over.
 5 Keep flipping pairs of cards until you find all the matching pairs.
## Rules:
 - You can only flip two cards at a time.
 - You cannot flip a card that is already face-up or a card that has already been matched.
 - The game ends when all pairs have been matched.
 ## Scoring:
 - Your score increases with each pair of matching cards you find.
 - Try to find all the pairs with as few flips as possible to get a high score.
 ## Timer:
 - The timer starts as soon as you start the game.
 - Try to complete the game in the shortest time possible.
 - Your time will be displayed in the "Time" section.
 ## New Game:
 If you want to start a new game at any point, simply click the "New Game" button.
 
 # 2 Purpose of the website
  The goal of Kinga's Memory Game is to provide an enjoyable experience that challenges players' memory and concentration. 
  By finding matching pairs of cards, players can enhance their cognitive skills while having fun.

# 3 Design and Layout
 The design and layout for this website were crafted in Figma, starting from scratch. We began by creating a moodboard and wireframes to establish the game's visual style and structure. These initial steps helped shape the overall look and feel of the game.
# Wireframes

# 4 Technology
- CSS - style sheet language used to style the webpages.
- HTML - standard markup language.
- Javascript - a programming language used on the client side of web applications.
- Code Institute Repo Template - GitHub repository template used to create the repository.
- Visual Studio Code - source code editor used to create, edit and publish the webpages with the assistance of GitHub.
- GitHub - Git repository hosting service with a web-based graphical interface.
- Draw.io - To design and create Wireframing.

# 5 Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:

  1. In the GitHub repository, on the Code page navigate to the Environments section on the right-hand side of the page.
   Click on GitHub pages, this will take you to deployments history where you will be able to click on 'view deployment'.
   The live link can be found here - [Link to Live Site Here]()

  **Local Deployment**

  *Prerequisites: Github account, Visual Studio Code, Live Server Extension for VScode.*

  1. To deploy the website locally and test it on your machine, you can follow these steps:

  2. Ensure you have Visual Studio Code installed on your computer. 

  3. Clone the darkwood repository to your local machine using `git clone`.

  4. Navigate to the root folder of the cloned repository in Visual Studio Code.

  5. Locate the main HTML file that represents your website's entry index.html

  6. Install the Live Server extension.

  7. Right-click on the HTML file in the Explorer sidebar and select "Open with Live Server" from the context menu or select "Go Live" from the bottom bar.

  8. The Live Server extension will launch a local development server and automatically open the website in your default web browser.
     
  9. You can now interact with and test the website locally. Any changes you make to the HTML, CSS, or JavaScript files will be automatically refreshed in the browser.

  10. To stop the local server, simply close the browser tab displaying the website or click on the "Stop" button in the Live Server output panel.

## 6 Testing
 - Validation
   
 - Responsivenes
   
 - Lighthouse
   
 - Manual Testing


## 7 Known Bugs
   Cards not flipping back when they don't match.
   Cards remaining flipped if clicked too quickly before animation completes.
   Timer not starting or resetting correctly.
   New game button not resetting the game properly (timer, score, matched cards).

## 8 Credits
  - For the Dynamic Card and Grid Creation in JS I used these resources to implement the ideas and changed them to fit my requirements:  
  - For Loops | Using For Loops to Dynamically Display HTML Elements on the Page (https://youtu.be/zIh16K8BN7k)
  - For While Loops (https://www.w3schools.com/js/js_loop_while.asp)
  - Timer resources (https://www.w3schools.com/jsref/met_win_setinterval.asp) (https://www.freecodecamp.org/news/javascript-timers-everything-you-need-to-know-5f31eaa37162/)

## 9 Future Improvements
 - Set up a database to be able to implement a leaderboard.
 - Wave Testing.
 - Reduction of cards based on screen-size to improve responsiveness.
