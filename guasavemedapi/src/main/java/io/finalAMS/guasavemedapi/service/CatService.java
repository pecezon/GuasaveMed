package io.finalAMS.guasavemedapi.service;

import io.finalAMS.guasavemedapi.model.Cat;
import io.finalAMS.guasavemedapi.repository.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CatService {

    @Autowired
    private CatRepository catRepository;

    public List<Cat> getAllCats() {
        return catRepository.findAll();
    }

    public Optional<Cat> getCatById(Long id) {
        return catRepository.findById(id);
    }

    public Cat createCat(Cat cat) {
        return catRepository.save(cat);
    }

    public Cat updateCat(Long id, Cat catDetails) {
        return catRepository.findById(id)
                .map(cat -> {
                    cat.setName(catDetails.getName());
                    cat.setAge(catDetails.getAge());
                    cat.setColor(catDetails.getColor());
                    return catRepository.save(cat);
                })
                .orElseThrow(() -> new RuntimeException("Cat not found with id " + id));
    }

    public void deleteCat(Long id) {
        catRepository.deleteById(id);
    }
}
