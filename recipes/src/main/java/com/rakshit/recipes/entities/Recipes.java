package com.rakshit.recipes.entities;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="recipes")
public class Recipes {
	
	@Id
	private ObjectId _id;
	
	private int Srno;
	private String RecipeName;
	private String TranslatedRecipeName;
	private String Ingredients;
	private String TranslatedIngredients;
	private int PrepTimeInMins;
	private int CookTimeInMins;
	private int TotalTimeInMins;
	private int Servings;
	private String Cuisine;
	private String Course;
	private String Diet;
	private String Instructions;
	private String TranslatedInstructions;
	private String URL;
	public ObjectId get_id() {
		return _id;
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}
	public int getSrno() {
		return Srno;
	}
	public void setSrno(int srno) {
		Srno = srno;
	}
	public String getRecipeName() {
		return RecipeName;
	}
	public void setRecipeName(String recipeName) {
		RecipeName = recipeName;
	}
	public String getTranslatedRecipeName() {
		return TranslatedRecipeName;
	}
	public void setTranslatedRecipeName(String translatedRecipeName) {
		TranslatedRecipeName = translatedRecipeName;
	}
	public String getIngredients() {
		return Ingredients;
	}
	public void setIngredients(String ingredients) {
		Ingredients = ingredients;
	}
	public String getTranslatedIngredients() {
		return TranslatedIngredients;
	}
	public void setTranslatedIngredients(String translatedIngredients) {
		TranslatedIngredients = translatedIngredients;
	}
	public int getPrepTimeInMins() {
		return PrepTimeInMins;
	}
	public void setPrepTimeInMins(int prepTimeInMins) {
		PrepTimeInMins = prepTimeInMins;
	}
	public int getCookTimeInMins() {
		return CookTimeInMins;
	}
	public void setCookTimeInMins(int cookTimeInMins) {
		CookTimeInMins = cookTimeInMins;
	}
	public int getTotalTimeInMins() {
		return TotalTimeInMins;
	}
	public void setTotalTimeInMins(int totalTimeInMins) {
		TotalTimeInMins = totalTimeInMins;
	}
	public int getServings() {
		return Servings;
	}
	public void setServings(int servings) {
		Servings = servings;
	}
	public String getCuisine() {
		return Cuisine;
	}
	public void setCuisine(String cuisine) {
		Cuisine = cuisine;
	}
	public String getCourse() {
		return Course;
	}
	public void setCourse(String course) {
		Course = course;
	}
	public String getDiet() {
		return Diet;
	}
	public void setDiet(String diet) {
		Diet = diet;
	}
	public String getInstructions() {
		return Instructions;
	}
	public void setInstructions(String instructions) {
		Instructions = instructions;
	}
	public String getTranslatedInstructions() {
		return TranslatedInstructions;
	}
	public void setTranslatedInstructions(String translatedInstructions) {
		TranslatedInstructions = translatedInstructions;
	}
	public String getURL() {
		return URL;
	}
	public void setURL(String uRL) {
		URL = uRL;
	}
}
