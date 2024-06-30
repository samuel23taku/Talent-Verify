package org.talentverify_api.model.dapartment_model;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DepartmentRepository extends CrudRepository<DepartmentEntity,Long> {
    List<DepartmentEntity> findByCompanyCompanyId(Long companyId);
}
