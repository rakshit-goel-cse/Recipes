package com.rakshit.recipes.controllers;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rakshit.recipes.entities.Recipes;
import com.rakshit.recipes.entities.RecipesOptions;
import com.rakshit.recipes.repository.RecipesRepository;
import com.rakshit.recipes.service.OptionValues;
import com.rakshit.recipes.service.SearchService;

import org.slf4j.Logger;
import reactor.core.publisher.Flux;

@RestController
public class RecipesController {
	
	private static final Logger logger = LoggerFactory.getLogger(RecipesController.class);

	@Autowired
	private RecipesRepository rep;
	
	@Autowired
	private OptionValues optionValues;
	
	@Autowired
	private SearchService searchService;
	
	@GetMapping("/")
	public Flux<Recipes> getAll() {
		logger.info("getAll called");
		return rep.findAll();
	}
	
	@GetMapping("/options")
	public RecipesOptions findDistinctValues(){
		logger.debug("Option controller");
		return optionValues.getOptionValues();
	}
	
	@GetMapping("/recipes")
	public Flux<Recipes> getRecipes(@RequestParam(value = "Cuisine", required=false) String cuisine,
									@RequestParam(value= "Course", required=false) String course,
									@RequestParam(value= "Diet", required=false) String diet,
									@RequestParam(value= "SearchText", required=false) String searchText){
		return searchService.getRecipies(cuisine, diet, course, searchText);
	}
	
//	@GetMapping("/recipes")
//	public String getRecipes(@RequestBody(required=false) String requestData){
//		return requestData;
//	}
	
}