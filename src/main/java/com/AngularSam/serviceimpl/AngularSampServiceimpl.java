package com.AngularSam.serviceimpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.AngularSam.model.AngularSampModel;
import com.AngularSam.service.AngularSampService;

@Repository
@Transactional
public class AngularSampServiceimpl implements AngularSampService{

	@Autowired
	EntityManager em;
	
	@Override
	public void save(AngularSampModel obj) {
				em.persist(obj);
	}

	@Override
	public List<AngularSampModel> listAll() {
		@SuppressWarnings("unchecked")
		List<AngularSampModel> listobj = em.createQuery("from AngularSampModel").getResultList();
		return listobj;
	}

}
