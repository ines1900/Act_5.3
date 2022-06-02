package stepdefs;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class accestodomvcSteps {
	
	WebDriver driver = null;

	@Given("browser is open")
	public void browser_is_open() {
		System.out.println("inside Step-browser is open");
	    System.setProperty("webdriver.edge.driver","C:/Users/imasmoudi/Desktop/activités/cucomberproject/src/test/resources/drivers/msedgedriver.exe");
	    driver=new EdgeDriver();
	    driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	    driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
	}

	@When("user enters the website URL")
	public void user_enters_the_website_URL() {
		System.out.println("inside Step-user enters the website URL");
	    
	driver.navigate().to("https://todomvc.com/examples/react/#/");
	}

	@Then("user is navigated to the website")
	public void user_is_navigated_to_the_website() {
		System.out.println("inside Step-user is navigated to the website");
	    driver.findElement(By.className("new-todo"));
	   }
	
	@Given("todo bar is displayed")
	public void todo_bar_is_displayed() {
		driver.findElement(By.className("new-todo")).sendKeys("tache1");
	}


	@When("user hits enter")
	public void user_hits_enter() {
		driver.findElement (By.className("new-todo")).sendKeys(Keys.ENTER);
	}

	@Then("text is added to todo list")
	public void text_is_added_to_todo_list() {
		boolean taskFlag = driver.getPageSource().contains("tache1");
		assertEquals(true, taskFlag);
		
	}
}
