package org.echoxperience.service;

import org.echoxperience.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    // Method to fetch all projects
    public List<Project> getAllProjects() {
        // Logic to fetch and return all projects
        return List.of(new Project(1L, "Project 1", "Description 1"),
                       new Project(2L, "Project 2", "Description 2"),
                       new Project(3L, "Project 3", "Description 3"));
    }
}
