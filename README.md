# Shkr! app
__________
# TO DO before submitting
- change to public
- check spelling
________________



## T3iiA1A Anastasia Dyakova, Patrick Hamer

## R1 Description of our website
The purpose of this website is to create an easy to use cocktail recipe book for liquor distributors to provide to bartenders as a means of promoting their product. Arming bartenders with easy access to a multitude of recipes will allow them to keep the distributor's products front of mind and more importantly front of house and in the customer's hands.<br>
The website includes a library of drink recipes, searchable by ingredient, name, or various other genres according to taste. Upon searching for an ingredient a random drink using that ingredient will be provided with recipe, picture and method. The app will also provide admin users the ability to remove certain drinks from the randomizing function so that specific drinks can be excluded from the search results, as well as manipulating the database to maintain brands across different recipes.

The main target audiences for this app are:
- **Bartenders** so they can keep a brand's products front and center, providing them with different experiences for the customer every time they visit, as well as ensuring consistency between colleagues.
- **Home cocktail enthusiasts** encouraging those with a mixological passion to explore new ways to create delicious drinks all the while keeping a strong presence of brand in their recipes.
- **Brand Ambassadors/Spirit reps** so they can promote their brand and encourage a consistency of drinks throughout venues, as well as having an easy promotional tool


|Tech stack:<br>|
|---|

| Front End     | Back End      |Deployment| Utilities   | DevOps | Business Tools|
|:-------------:|:-------------:|:--------:|:-----------:|:------:|:-------------:|
|HTML 5         |JavaScript ES6 |Netlify   |Diagrams.net |Github  |Discord        |
|CSS            |Express        |Railway   |NPM          |Git     |Zoom           |
|JavaScript ES6 |NodeJS         |Atlas     |Postman      |VSCode  |WhatsApp       |
|React          |MongoDB        |Axios     |Jest         |        |Trello         |
|               |Mongoose       |          |Supertest    |
|               |bcrypt         |          |Balsamiq     |
|               |Helmet         |          |Lucichart    |
|               |JWT            |
|               |TheCocktailDB* |

*https://www.thecocktaildb.com/


## R2 DataFlow Diagram
The first DFD presented to the educators was admittedly not the greatest:<br>
<img src="./docs/DFDs/DFDmkI.png" alt="1st DFD attempt">
<img src="./docs/DFDs/FeedbackMkI.png" alt="1st Feedback">
However after taking notes, doing some more research on how to properly structure the DFD and then re-presenting great progress was made:
<img src="./docs/DFDs/DFDmkII.png" alt="2nd DFD attempt">
<img src="./docs/DFDs/FeedbackMkII.png" alt="2nd Feedback">
Still however, while the structure had improved the information pertaining to actual data being sent was still not clear enough. This was taken very serously as preperation _is_ 90% of execution, so we needed to have a solid base from which to start our app. The third attempt had only a few minor issues:
<img src="./docs/DFDs/DFDmkIII.png" alt="3rd DFD attempt">
<img src="./docs/DFDs/FeedbackMkIII.png" alt="3rd Feedback">
Some of these were oversights simply from being up all night staring at it, and some were due to disorganized files. Whatever the case, with the assistance of our educators the final result was approved on 02/02 much to our delight. <br> 
This, of course, did not stop us. Oh no, we were excited, we were on a roll! Upon further discussion we realised that with the initial funcionality of the app we could get rid of the user login and just have an open website but with a discreet admin login available to those with authorisation. <br>
The final DFD is compiled thusly
<img src="./docs/DFDs/ShkrDFD-final.png" alt="Finalized DFD">


## R3 Application Architecture Diagram 
**The first draft:**
<img src="./docs/AAD/AAD01.png" alt="AAD v01">
<img src="./docs/AAD/AAD_Feedback_01.png" alt="Feedback 01">
- Explained the connection between Front end and Back end
- External API moved to Back end section
- Added using tools
<img src="./docs/AAD/AAD02.png" alt="AAD v0.2">
<img src="./docs/AAD/AAD_Feedback_02.png" alt="Feedback 02">
- User moved to outside of Front and Back structure
- API clarified as a 3rd party

**The final version**
<img src="./docs/AAD/AAD.png" alt="Add final">

## R4 User Stories
**Who**: The bartender. Big spirit selection, incentivised for selling branded products, upselling capabilities to the max.<br>
**Age**: Mid 20's to mid 30's <br>
**Occupation**: Bartender <br>
**Location** Inner suburbs/CBD Bars <br>
<img src="./docs/userStory1.png" alt="User Story 1"  width="300"><br>
**What is the problem this user requires solving**: As a bartender I am looking for a comprehensive, easy to use recipe book that I can use quickly and discreetly to get recipes while I am mid-service behind a busy bar. I need to be able to **search by an ingredient** base in the case of customer requests as well as **browse the library** to further my knowledge over my lunch break. Add to this the ability to **look up certain niche drinks**, for example non-alcoholic, or shots. Also, certain drinks that may be inappropriate/illegal in my region should be **able to be removed** from search results _with administrative approval_. App should be intuitive and able to be used on the fly to allow me to continue working with minimal interruption.
<br>
<br>


**Who**:The company rep/spirits ambassador <br>
**Age**: 20-40 <br>
**Occupation**: Sales <br>
**Location**: Specified regions within the metropolitan area <br>
<img src="./docs/userStory2.png" alt="User Story 2"  height="300"><br>
**What is the problem this user requires solving**: Creating an industry standard for cocktail recipes thus ensuring consistent products regardless of venue/staff member. Further to this the ability to **modify cocktail lists to replace generic words** with brands from one's own stable, for example 'Vodka' being changed to 'Grey Goose'or Cola being changed to 'Coke' for greater brand promotion and recognition. This library needs to be **easily manipulated _by admin_** to ensure that our brand is front facing at all possible opportunities. <br>
<br>
<br>


**Who**: The home mixologist<br>
**Age**: 18+<br>
**Occupation**: Any<br>
**Location**: Home<br>
<img src="./docs/userStory3.png" alt="User Story 3"  height="300"><br>
**What is the problem this user requires solving**: Creating a cocktail with what I have at home. This could be to use up a particular bottle I have lying around and want to get rid of, creating a potion to imbibe with what I have on hand, exploring new ways of enjoying old favourites or impressing my friends with perfectly crafted beverages. Being able to make drinks that, at a base level, meet the standard I could expect in any bar I visit. I need to be able to **search for ingredient-specific drinks**, **look up specific drinks** or **look up random drinks based on genre** to accommodate my guest's tastes. Information needs to be easily obtained and site feel needs to be intuitive so as to be able to be used perhaps after a few taste tests. <br>

## R5 Wireframes
First attempt
<img src="./docs/wireframes/wireframes_v0.1.png" alt="First Try"><br/><br/>
Changes:
- The map of the site 
- added sub categories as Base Alc, Search By Name
- Added age validation 

### Sitemap
<img src="./docs/wireframes/Map.png" alt="Site Map"><br/><br/>
### Wireframes size 1024px
<img src="./docs/wireframes/1024.png" alt="Wireframes 1024"><br/><br/>
### Wireframes size 768px
<img src="./docs/wireframes/768.png" alt="Wireframes 768"><br/><br/>
### Wireframes size 320px
<img src="./docs/wireframes/320.png" alt="Wireframes 320"><br/><br/>



## R6 Design
__Pinterest Board__
<img src="./docs/pinterest.png" alt="Pinterest Board"><br/><br/>
__Color ideas__<br/>
Dark theme, green forrest<br/><br/>
__Color Pallette__
<img src="./docs/colors.png" alt="Color Pallette">


## R6 Screenshots of your Trello board throughout the duration of the project
Throughout the course of this assignment we allowed ourselves at least half an hour each working day to have a standup via phone or video call. This allowed us to keep abreast of what one another were doing, explore more intricate concepts and ideas as well as hash out some of the more obscure aspects of the app such as colours and design. Zoom was particularly efficient in this instance as it allowed for screen sharing and an almost instantaneous progression from presenting ideas to having them take shape in front of us to see if we were in agreeance.



The Trello board was used to assign tasks, with each of us having essentially free reign to delegate and review tasks. Our regualr standups allowed us to know who would be delegated to do what, and time limits were set the ensure not only the completion of the task at hand, but also to stop us getting distracted thinking too far ahead of time. Tasks would generally be posted, assigned and then placed in the review column with the other team member reviewing and moving it to the 'Done' Column.

<img src="./docs/Trello/trello1.png" alt="Trello example 1">
<img src="./docs/Trello/trello2.png" alt="Trello example 2">
<img src="./docs/Trello/trello3.png" alt="Trello example 3">

