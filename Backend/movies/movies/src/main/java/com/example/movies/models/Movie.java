package com.example.movies.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

/*
Annotations
Document - This class represents each document in movies collection
Data - Getters and Setters
AllArgsConstructor - Creates constructor taking in variables as arguements
NoArgsConstructor - Creates constructor with no arguements
POJO satisfied
Plain Old Java Object
 */
@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

    @Id
    private ObjectId id; // Id in database

    private String imdbId;

    private String title;

    private String releaseDate;

    private String trailerLink;

    private String poster;

    private List<String> genres;

    private List<String> backdrops;

    @DocumentReference //only contains the id of reviews not all the variables prevents infinite loop issue with many to many relations
    private List<Review> reviewIds;

}
