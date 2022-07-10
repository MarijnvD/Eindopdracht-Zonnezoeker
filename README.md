
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
* Blood, sweat & royal amounts of tears

## 2. Getting Started

To get your own ZonneZoeker up and running follow the following setup steps.

### 2.1 Prerequisites

To initialise ZonneZoeker, you need to install npm. <br/>
You also need an API-key from openweather.com

* npm
  ```sh
  npm install npm@latest -g
  ```

### 2.2 Initial Installation

1. Get an API Key from https://openweathermap.org/ (For a limited time only, a complimentary key is provided for you!)
2. Clone ZonneZoeker;
   ```sh
   git clone https://github.com/MarijnvD/Eindopdracht-Zonnezoeker.git
   ```
3. Create a .env file in the root folder with the following content;
   ```sh
    REACT_APP_API_KEY=***************
   ```
   Replace the * 's  for the https://openweathermap.org/ api key, without spaces or quotes. (When the complimentary time is over)

5. Install NPM-packages;
   ```sh
   npm install
   ```

## 3. Running the app

### 3.1 Start

Enter the following command in the terminal;

```sh
npm run start
```
http://localhost:3000 should automatically open in your standard browser

