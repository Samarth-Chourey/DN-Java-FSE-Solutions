
package com.cognizant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cognizant.model.Country;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
    // You can define custom query methods here if needed
    List<Country> findAllByNameContaining(String partialName);
}
