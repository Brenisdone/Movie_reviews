package dev.brenisdone.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data               //initalizes gettter setter methods
@AllArgsConstructor //initalizes constructor that takes values for all members
@NoArgsConstructor  //initalizes constructor that takes default values for its members
public class Movie {
    @Id //lets framework know that this is unique identifier for each movie
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;
    @DocumentReference //Stores only ids of reviews
    private List<Review> reviewIds;
}
