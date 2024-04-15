package com.rakshit.recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.rakshit.recipes.entities.Recipes;
import reactor.core.publisher.Flux;

@Service
public class SearchService {
	
	@Autowired
	private ReactiveMongoTemplate reactMonTemp;
	
	private Criteria getCri(String column, String[] keywords) {
        return Criteria.where(column).regex(String.join("|", keywords));
    }
	
	
	public Flux<Recipes> getRecipies(String cuisine, String diet, String course, String searchText){
		
		Query query=new Query();
		
		if(null!=cuisine) {
			query.addCriteria(Criteria.where("Cuisine").is(cuisine));
		}
		if(null!=diet) {
			query.addCriteria(Criteria.where("Diet").is(diet));
		}
		if(null!=course) {
			query.addCriteria(Criteria.where("Course").is(course));
		}
		
		
		if (null != searchText && !searchText.isEmpty()) {
			// Define the words to remove
		    String[] wordsToRemove = {"a", "an", "and", "as", "at", "but", "by", "for", "from", "in",
		            "into", "is", "it", "of", "on", "or", "the", "to", "with", "without"};

		    // Remove the words from the searchText
		    for (String word : wordsToRemove) {
		        searchText = searchText.replaceAll(word, "");
		    }

			String[] keywords = searchText.strip().split(" ");

			// creating criteria for searching keywords

			Criteria cri = new Criteria().orOperator(getCri("RecipeName", keywords),
					getCri("TranslatedRecipeName", keywords), getCri("Instructions", keywords),
					getCri("TranslatedInstructions", keywords));
			// adding criteria in query
			query.addCriteria(cri);

		}
		return reactMonTemp.find(query, Recipes.class);
		
	}
}
