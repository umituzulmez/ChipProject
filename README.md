# ChipProject

ChipProject is creaeted based on BDD/Cucumber Framework

I have created the project by using Maven as a management tool and did some configuration in there

Mainly I have foolowing packages;
.Microservices
.Runners
.Step Definitions
.Utilities
.Features
.Properties 

I have written my test cases in Features package where I store my feature files. 
In feature file I have use Gherkin languages which is plain English and helps especially non technical people to understand the approach.
I created different scenarios and secanario outlines and each of them has its own steps. I categorised each scenario by using some annotation.

Corresponding to feature file I have created Step Definition Files. 
For each step I have corresponding method and inside I have written my java scripts to be able to generate what is defined in feature file. 
By using my script I have called my default methods stored in api java classes under microservices package.

In microservices I have created classes for each manager which are responsible some specific jobs. And structured them under Base class.
In this case I have only used PugoMalum class as separated manager and wrote and stored my methods in. 
For each end point I have created corresponding method and inside these methos I have used restassured method to be able to send my request and store the response.

Beside under my utilities I have created my TestDataReader class which is responsible for retrieving ready data from my properties file. 
It gives me the advantage of manipulating my data in one place against all my tests. And also I have created some other util classes which makes my job easy to control.

And under runners package I have created my runner class which helps me run my all test cases from one place. 
Also I have created failedRunner class which configures my failed test in one places and helps me to run only these failed ones.

These are pretty much about the project and I am happy to discuss in more detail \

Thanks


