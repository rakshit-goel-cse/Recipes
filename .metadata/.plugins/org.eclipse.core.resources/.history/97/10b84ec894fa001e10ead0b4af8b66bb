package com.rakshit.recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.stereotype.Service;

import com.rakshit.recipes.entities.RecipesOptions;

@Service
public class OptionValues {

	@Autowired
	MongoTemplate mongTemplate;
	
	public RecipesOptions getOptionValues() {
		Aggregation aggregation=Aggregation.newAggregation(
				 Aggregation.group().addToSet("Cuisine").as("Cuisines").addToSet("Course").as("Courses").addToSet("Diet").as("Diets")
				); 
		
		AggregationResults<RecipesOptions> result= mongTemplate.aggregate(aggregation, "recipes", RecipesOptions.class);
		return result.getUniqueMappedResult();
	}
}
