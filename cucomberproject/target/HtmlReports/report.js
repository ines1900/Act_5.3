$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/demo.feature");
formatter.feature({
  "name": "demo feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Demonstrating how Cucumber-JVM works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a configured Cucumber-JVM project",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I run it within my IDE",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I will be able to run connected step definitions",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "test login functionality",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Features/todobarverification.feature");
formatter.feature({
  "name": "feature to verify the ToDobar",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ecran_d\u0027acceuil"
    }
  ]
});
formatter.background({
  "name": "Validate access to the page is working",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.accestodomvcSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the website URL",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.accestodomvcSteps.user_enters_the_website_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the website",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.accestodomvcSteps.user_is_navigated_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the text display in the ToDobar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ecran_d\u0027acceuil"
    },
    {
      "name": "@tag1:Todobarverification"
    }
  ]
});
formatter.step({
  "name": "todo bar is displayed",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters what need to be done",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "text is added to todo list",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});