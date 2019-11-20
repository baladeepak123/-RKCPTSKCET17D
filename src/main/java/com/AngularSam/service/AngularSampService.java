package com.AngularSam.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.AngularSam.model.AngularSampModel;

@Service
public interface AngularSampService {

	void save(AngularSampModel obj);

	List<AngularSampModel> listAll();

}
