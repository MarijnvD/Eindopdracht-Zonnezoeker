
  ```sh
  
  ______                      ______          _              
 |___  /                     |___  /         | |             
    / / ___  _ __  _ __   ___   / / ___   ___| | _____ _ __  
   / / / _ \| '_ \| '_ \ / _ \ / / / _ \ / _ \ |/ / _ \ '__| 
  / /_| (_) | | | | | | |  __// /_| (_) |  __/   <  __/ |    
 /_____\___/|_| |_|_| |_|\___/_____\___/ \___|_|\_\___|_|    
                                                             
                                                             

  ```

ZonneZoeker helps you find the optimal day for your favorite activity, shows you the current weather data and helps you plan around it!

# Table of contents
1. [About the Project](#1-about-the-project)
   1. [Build with](#11-built-with)
2. [Getting Started](#2-getting-started)
   1. [Prerequisites](#21-prerequisites)
   2. [Initial Installation](#22-initial-installation)
3. [Running the app](#3-running-the-app)
   1. [Start](#31-start)

## 1. About the project

Are you planning an outside activity? are you afraid the weather will ruin it? with ZonneZoeker you can make sure!

With our patented rating system we calculate the ratings for a diverse selection of activities.
ZonneZoeker can also be used as a normal weather application...boring!

### 1.1 Built With

* [React.js](https://reactjs.org/)
* [Novi Educational Backend](https://github.com/hogeschoolnovi/novi-educational-backend-documentation)

## 2. Getting Started

To get your own local copy of  ZonneZoeker up and running follow the following setup steps.

### 2.1 Prerequisites

**Java Runtime Environment**<br />
You need to have a JRE (Jave Runtime Environment) installed on you local machine or server

**IDE (Integrated Development Environment)**<br />
A IDE is a specially developed tool for software developers to create and maintain their code
I highly recommend the IDE; Webstorm. This is the IDE I also used to create this project.

**Server**<br />
To run ZonneZoeker you need a server. for now we can use the localhost

### 2.2 Initial Installation

To initialise ZonneZoeker, follow the next steps;

1. Clone the project from github. go to https://github.com/MarijnvD/Eindopdracht-Zonnezoeker.git
   Press the green 'Code'button and copy the link from there
2. Open Webstorm > File > New > “Project from Version Control”.
   Press the link from step 1 and press“Clone”.
3. Install Node.js, NPM. Type ;**npm install npm@latest -g**
4. Type in the terminal: **npm install**  <br />This installs all the predefined packages.
5. Type in the terminal: **npm run start** <br />this will start the application in your localhost.
6. If the page is not opening automatically, go to http://localhost:3000 to view the application in your browser.
7. Get an API Key from https://openweathermap.org/
8. Create a .env file in the root folder with the following content;
    ```sh
     REACT_APP_API_KEY=***************
    ```
    Replace the * 's  for the https://openweathermap.org/ api key, without spaces or quotes. 


## 3. Running the app

### 3.1 Start

After you issues the following command in Webstorms' terminal;

```sh
npm run start
```
http://localhost:3000 should automatically open in your standard browser and you full power of ZonneZoeker is available to you!
If not please see step 3 from 'Initial installation' and take it from there

To quit, you can press CTRL+C in Webstorm.
