package com.AngularSam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.AngularSam.model.AngularSampModel;
import com.AngularSam.service.AngularSampService;


@RestController
@RequestMapping("/reportBasic")
public class SampleController {

	@Autowired
	AngularSampService service;

	@GetMapping(value = "/insert")
	public ResponseEntity<Void> save(@RequestParam(value = "reportCategoryName") String reportCategoryName,
			@RequestParam(value = "reportName") String reportName,@RequestParam(value="reportNumber") String reportNumber)
	{
		System.out.println("controllerrrrr");
		//System.out.println("reportName"+reportName);
		//System.out.println("reportNumber"+reportNumber);

		AngularSampModel obj = new AngularSampModel();
		obj.setReportCategoryName(reportCategoryName);
		obj.setReportName(reportName);
		obj.setReportNumber(reportNumber);
		service.save(obj);
		   return new ResponseEntity<Void>( HttpStatus.OK);
						
	}

	
	
	@GetMapping(value = "/findAll")
	public ResponseEntity<List<AngularSampModel>> findAll()
	{
		List<AngularSampModel> listobj = service.listAll();
		
		   return new ResponseEntity<>(listobj, HttpStatus.OK);
						
	}
}
