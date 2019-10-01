
# display-courses

## How to setup

### Clone the project

Run the command
 ### `git clone https://github.com/ManjunathHebbar/display-courses.git`
 
 Go to project directory
 ### `cd display-courses`
 
 ### Package install

Run the command
 ### `npm install`


## How To Run

Run the command
 ### `npm start`

## Process of implementation
1. Fetched endpoint Api and stored the value in state.
2. Looped through Api data to get provider, university and subject list.

## Project structure
1. Containers are the smart components which has filter logic and course listing(i.e Search component and App component)
2. Components are the dumb components which is card layout and navbar layout.
3. Utils are the functionality done like getting provider, universities, subject, child subject lists
