package com.rakshit.recipes.entities;

import java.util.List;

public class RecipesOptions {
	
	
	private List<String> Cuisines;
	private List<String> Courses;
	private List<String> Diets;
	
	
	public List<String> getCuisines() {
		return Cuisines;
	}
	public void setCuisines(List<String> cuisine) {
		Cuisines = cuisine;
	}
	public List<String> getCourse() {
		return Courses;
	}
	public void setCourse(List<String> course) {
		Courses = course;
	}
	public List<String> getDiet() {
		return Diets;
	}
	public void setDiet(List<String> diet) {
		Diets = diet;
	}
	
}
