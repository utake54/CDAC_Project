package com.floodmanagement.floodmanagement.exception;

public class ResourceNotFoundExceptionByUserName extends RuntimeException{

	String resourceName;
	String fieldName;
	String fieldValue;
	
	private static final long serialVersionUID = 1L;

	public ResourceNotFoundExceptionByUserName(String resourceName, String fieldName, String fieldValue) {
		super();
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}

	public String getResourceName() {
		return resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public String getFieldValue() {
		return fieldValue;
	}

	public void setFieldValue(String fieldValue) {
		this.fieldValue = fieldValue;
	}
	
	
}



	
	
	
	