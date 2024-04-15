package com.rakshit.recipes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.rakshit"})
public class RecipesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecipesApplication.class, args);
	}

}
