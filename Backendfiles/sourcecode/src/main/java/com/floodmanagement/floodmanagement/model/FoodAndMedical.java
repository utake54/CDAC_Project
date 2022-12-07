package com.floodmanagement.floodmanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FoodAndMedical {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	
	public String reqType;
	
	public int cottonLiq;
	public int bangaes;
	public int dettol;
	public int painKiller;
	public int aidKit;
	public int water;
	public int riceDal;
	public int babyFood;
	public int biscuits;
	public int milk;
	
	public FoodAndMedical() {}

	public FoodAndMedical(int id, String reqType, int cottonLiq, int bangaes, int dettol, int painKiller, int aidKit,
			int water, int riceDal, int babyFood, int biscuits, int milk) {
		super();
		this.id = id;
		this.reqType = reqType;
		this.cottonLiq = cottonLiq;
		this.bangaes = bangaes;
		this.dettol = dettol;
		this.painKiller = painKiller;
		this.aidKit = aidKit;
		this.water = water;
		this.riceDal = riceDal;
		this.babyFood = babyFood;
		this.biscuits = biscuits;
		this.milk = milk;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getReqType() {
		return reqType;
	}

	public void setReqType(String reqType) {
		this.reqType = reqType;
	}

	public int getCottonLiq() {
		return cottonLiq;
	}

	public void setCottonLiq(int cottonLiq) {
		this.cottonLiq = cottonLiq;
	}

	public int getBangaes() {
		return bangaes;
	}

	public void setBangaes(int bangaes) {
		this.bangaes = bangaes;
	}

	public int getDettol() {
		return dettol;
	}

	public void setDettol(int dettol) {
		this.dettol = dettol;
	}

	public int getPainKiller() {
		return painKiller;
	}

	public void setPainKiller(int painKiller) {
		this.painKiller = painKiller;
	}

	public int getAidKit() {
		return aidKit;
	}

	public void setAidKit(int aidKit) {
		this.aidKit = aidKit;
	}

	public int getWater() {
		return water;
	}

	public void setWater(int water) {
		this.water = water;
	}

	public int getRiceDal() {
		return riceDal;
	}

	public void setRiceDal(int riceDal) {
		this.riceDal = riceDal;
	}

	public int getBabyFood() {
		return babyFood;
	}

	public void setBabyFood(int babyFood) {
		this.babyFood = babyFood;
	}

	public int getBiscuits() {
		return biscuits;
	}

	public void setBiscuits(int biscuits) {
		this.biscuits = biscuits;
	}

	public int getMilk() {
		return milk;
	}

	public void setMilk(int milk) {
		this.milk = milk;
	}

	@Override
	public String toString() {
		return "FoodAndMedical [id=" + id + ", reqType=" + reqType + ", cottonLiq=" + cottonLiq + ", bangaes=" + bangaes
				+ ", dettol=" + dettol + ", painKiller=" + painKiller + ", aidKit=" + aidKit + ", water=" + water
				+ ", riceDal=" + riceDal + ", babyFood=" + babyFood + ", biscuits=" + biscuits + ", milk=" + milk + "]";
	}
	
	
	
}
