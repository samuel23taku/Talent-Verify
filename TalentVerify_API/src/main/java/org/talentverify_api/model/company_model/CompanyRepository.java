package org.talentverify_api.model.company_model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.talentverify_api.model.CompanyEntity;

@Repository
public interface CompanyRepository extends CrudRepository<CompanyEntity,Long> {
}