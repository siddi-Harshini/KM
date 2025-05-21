package com.KM.KM_Valuers;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface InwardRegisterRepository extends CrudRepository<InwardRegister, Long> {
    @Query(value = "SELECT ROW_NUMBER() OVER () AS sNo, ir.filenumber AS fileNumber, c.creditor_name AS bank, ir.inward_date AS inwardDate, ir.village AS villageOrTown, ir.file_status AS status, ir.remarks AS remarks FROM inward_register ir LEFT JOIN creditor c ON ir.bank = c.creditor_id WHERE ir.file_status = 'Pending'", nativeQuery = true)
    List<Object[]> findPendingInwardRegisters();

    Optional<InwardRegister> findByFileNumber(String fileNumber);
}
