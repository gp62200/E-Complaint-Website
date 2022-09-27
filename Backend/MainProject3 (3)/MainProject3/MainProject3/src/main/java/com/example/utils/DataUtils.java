package com.example.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import com.example.entities.CityData;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvException;



public class DataUtils {
	private final static String CSV_FILE_NAME="Book1";
	private final static String CSV_FILE_PATH = System.getProperty("user.dir") + File.separator + "src" + File.separator
			+ "main" + File.separator + "resources" + File.separator + "data" + File.separator + CSV_FILE_NAME
			+ ".xlsx";
	
	public static List<CityData> readData() {
		List<CityData> datas=new ArrayList<CityData>();
		try {
			FileReader fileReader = new FileReader(new File(CSV_FILE_PATH));
			CSVReader csvReader = new CSVReaderBuilder(fileReader).withSkipLines(1).build();
			CityData data = new CityData();
			List<String[]> allData = csvReader.readAll();
			for (String[] row : allData) {
				data.setAdharId(row[0]);
				data.setPincode(row[1]);
				
				datas.add(data);
				
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
			return datas;
		
	}
		
		public static String handleStringConversion(Object object) {
			String value = null;

			if (object.equals(null))
				value = "0";
			else if (object instanceof Integer)
				value = String.valueOf(object);
			else
				value = object.toString();
			return value;
		}
		
		public static List<CityData> getListsOfProducts() {
			List<CityData> listOfDatas = new ArrayList<CityData>();
			try {
				FileInputStream file = new FileInputStream(new File(CSV_FILE_PATH));
				Workbook workbook = new XSSFWorkbook(file);
				Sheet sheet = workbook.getSheet("datas");
				int numberOfRows = sheet.getLastRowNum();
				
				for(int i=1;i<=numberOfRows;i++) {
					CityData data=new CityData();
					data.setAdharId(handleStringConversion(sheet.getRow(i).getCell(0).getStringCellValue()));
					data.setPincode(handleStringConversion(sheet.getRow(i).getCell(1).getStringCellValue()));
					
					listOfDatas.add(data);
				}
				workbook.close();
			}catch (Exception e) {
				e.printStackTrace();
			}
			return listOfDatas;

		}

	}