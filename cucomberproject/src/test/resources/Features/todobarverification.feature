@ecran_d'acceuil

Feature: feature to verify the ToDobar

Background: Validate access to the page is working
    Given browser is open
    When user enters the website URL
    Then user is navigated to the website
@tag1:Todobarverification
  Scenario: Validate the text display in the ToDobar
    Given todo bar is displayed
    When user hits enter
    Then text is added to todo list