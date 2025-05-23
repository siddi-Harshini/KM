package com.KM.KM_Valuers;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/invoices")
@CrossOrigin(origins = "*")
public class InvoiceController {

    private final InvoiceRepository invoiceRepository;

    public InvoiceController(InvoiceRepository invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    @GetMapping
    public List<InvoiceDTO> getAllInvoices() {
        return invoiceRepository.findAll().stream()
            .map(inv -> new InvoiceDTO(
                inv.getInvoiceId(),                // invoice_id from entity
                inv.getFileNumber(),               // fileNumber from entity
                inv.getInvoiceDate(),              // invoice_date from entity
                inv.getValuationPurpose(),         // valuation_purpose from entity (as purpose)
                inv.getTotalPrice(),               // TOTAL_PRICE from entity
                inv.getBankName()                  // bank_name from entity
            ))
            .collect(Collectors.toList());
    }
}
