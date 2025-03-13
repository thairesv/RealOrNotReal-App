
# Real or No Real
Welcome to Real or No Real – an interactive educational tool designed to enhance your understanding of deep fakes.

The main goals of Real or No Real are:

#### Raise Awareness:
Increase awareness about the complexities of deep fakes, providing users with essential knowledge for navigating the digital landscape.

#### Interactive Learning:
Offer an engaging learning experience that goes beyond theory, allowing users to practically apply their knowledge through image analysis and quizzes.

### Project Documentation
A PDF copy of our project documentation is in project_docs, or click the links below for Google Docs.
[Activity Log](https://docs.google.com/spreadsheets/d/1j8xfrjvl0bNm5fNf7stsy_ZBdM9v3Vzo/edit?usp=sharing&ouid=101314084016481435154&rtpof=true&sd=true)
[Concept Document](https://docs.google.com/document/d/1vkquH3G4SyrB_vvp-mBLpLKGzdi1HkPy8H-HC98SKF0/edit?usp=sharing)


## Developers

- [Gemma](https://github.com/thatsherbusiness) - @thatsherbusiness
- [Catherine ](https://github.com/catherine-walshe) - @catherine-walshe
- [Thaires ](https://github.com/thairesv) - @thairesv
- [Elaine](https://github.com/Lain3y) - @Lain3y

## Features
- Registration/login Page
- Multiple choice quiz
- Image based quiz
- Deep fake detector image analysis

## Project Structure

- `src/`: Contains the source code for the React application.
- `utils/`: Includes utility scripts and configurations.
- `tests/`: Holds unit tests for various components and features.

## Technology Stack

- Node.js: [20.9.0]
- React: [18.2.0]


## Getting Started
### Prerequisites

- [Node.js](https://nodejs.org/en/) installed
- Code editor of your choice (e.g., [Visual Studio Code](https://code.visualstudio.com/) )

## Installation

#### Clone the repository
```
git clone https://github.com/thatsherbusiness/CFG-full-stack-group-1-final-project
```

#### Navigate to project directory:
```
cd CFG-full-stack-group-1-final-project
```
Open the App.js file (located in the SRC folder) in the code editor of your choice. 

#### Install dependencies


 ```
npm install
npm install react-modal
npm install mongoose
npm install express
```

## Start Express Server:

- Open the utils folder
- Open dbConnection.js in a new terminal
- Run the following command:

 ```
node dbConnection.js
```
If successful, you should see:

> Server running on port 5001
>
> Connected to MongoDB  


## Start the react app:
Open new terminal and enter command:
 ```
npm start
```
Access the application at http://localhost:3000 in your browser.

## Testing
### How to run tests

- Open a new terminal
- Run npm test to run a single test
- Navigate to the file, for example:
  
```
cd src/tests/UnitTests
```
Run the command (substitute "nameOfFile" with the actual file name):
```
npm test nameOfFile.js
```

