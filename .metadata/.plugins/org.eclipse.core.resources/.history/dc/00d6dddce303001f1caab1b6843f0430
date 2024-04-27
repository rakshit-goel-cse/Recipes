package com.rakshit.recipes.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.rakshit.recipes.entities.Recipes;
import reactor.core.publisher.Flux;

public interface RecipesRepository extends ReactiveMongoRepository<Recipes, ObjectId> {

	@Query(
			"{ $and: [ "
			        + "?#{ [0] == null ? {_id: {$exists: true}} : {Cuisine: [0]} }, "
			        + "?#{ [1] == null ? {_id: {$exists: true}} : {Course: [1]} }, "
			        + "?#{ [2] == null ? {_id: {$exists: true}} : {Diet: [2]} } "
			    + "]}"
			)
	public Flux<Recipes>getRecipes(String cuisine, String course, String diet);
}
