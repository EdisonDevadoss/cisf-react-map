const eventInfos = [
  {
    event_id: 22,
    unit_id: 59,
    event_brief:
      'IT IS SUBMITTED THAT ON 25.9.2019 AT ABOUT 0800 HRS A MASSIVE CLEANLINESS DRIVE WILL BE CONDUCTED AT PANCHYAT HIGH SCHOOL, KEERAIPAPPAMPATTI-VILLAGE, SALEM.',
    state_name: 'TAMILNADU',
    unit_name: 'SSP SALEM',
    date: '2019-09-25',
    unit_address:
      'DY.COMMANDANT OFFICE\r\nCISF UNIT \r\nSSP SALEM\r\nMOHAN NAGAR PO\r\nSALEM 636013',
    latitude: 11.351831,
    longitude: 77.685254,
  },
  {
    event_id: 23,
    unit_id: 59,
    event_brief:
      'IT IS SUBMITTED THAT ON 27.9.2019 AT ABOUT 1030 HRS A JOINT MOCK DRILL WILL BE CONDUCTED AT LPG, SSP',
    state_name: 'TAMILNADU',
    unit_name: 'SSP SALEM',
    date: '2019-09-27',
    unit_address:
      'DY.COMMANDANT OFFICE\r\nCISF UNIT \r\nSSP SALEM\r\nMOHAN NAGAR PO\r\nSALEM 636013',
    latitude: 11.351831,
    longitude: 77.685254,
  },
  {
    event_id: 24,
    unit_id: 59,
    event_brief:
      'IT IS TO INTIMATE THAT A WARB MEETING WILL BE CONDUCTED ON 28.09.2019 AT ABOUT 1100 HRS AT CISF RECREATION HALL.',
    state_name: 'TAMILNADU',
    unit_name: 'SSP SALEM',
    date: '2019-09-28',
    unit_address:
      'DY.COMMANDANT OFFICE\r\nCISF UNIT \r\nSSP SALEM\r\nMOHAN NAGAR PO\r\nSALEM 636013',
    latitude: 11.351831,
    longitude: 77.685254,
  },
  {
    event_id: 25,
    unit_id: 33,
    event_brief: "VISIT OF HON'BLE PRIME MINISTER",
    state_name: 'TAMILNADU',
    unit_name: 'CHPT CHENNAI',
    date: '2019-09-30',
    unit_address:
      'OFFICE OF THE COMMANDANT\r\nRAJA SALAI OPPOSIT TO RBI \r\nBANK DAIMOND JUBLEE BUILDING\r\nCHENNAI TAMIL NADU-600001',
    latitude: 13.09,
    longitude: 80.27,
  },
  {
    event_id: 27,
    unit_id: 59,
    event_brief:
      'IT IS SUBMITTED THAT ON 11.10.19 A UNIT LEVEL MOCK DRILL WILL BE CONDUCTED AT SSP SALEM .',
    state_name: 'TAMILNADU',
    unit_name: 'SSP SALEM',
    date: '2019-10-11',
    unit_address:
      'DY.COMMANDANT OFFICE\r\nCISF UNIT \r\nSSP SALEM\r\nMOHAN NAGAR PO\r\nSALEM 636013',
    latitude: 11.351831,
    longitude: 77.685254,
  },
  {
    event_id: 28,
    unit_id: 59,
    event_brief:
      'IT IS SUBMITTED THAT \r\nNUKKADNATAK PROGRAMME WILL BE CONDUCTED AS A PART  OF CELEBRATION OF MARTYRS WEEK. ON 16.10.19',
    state_name: 'TAMILNADU',
    unit_name: 'SSP SALEM',
    date: '2019-10-16',
    unit_address:
      'DY.COMMANDANT OFFICE\r\nCISF UNIT \r\nSSP SALEM\r\nMOHAN NAGAR PO\r\nSALEM 636013',
    latitude: 11.351831,
    longitude: 77.685254,
  },
  {
    event_id: 29,
    unit_id: 59,
    event_brief:
      'IT IS SUBMITTED THAT \r\nCELEBRATION OF MARTYRS FOR PAYING HOMAGE TO LATE HC/GD BASHEER.',
    state_name: 'TAMILNADU',
    unit_name: 'SSP SALEM',
    date: '2019-10-17',
    unit_address:
      'DY.COMMANDANT OFFICE\r\nCISF UNIT \r\nSSP SALEM\r\nMOHAN NAGAR PO\r\nSALEM 636013',
    latitude: 11.351831,
    longitude: 77.685254,
  },
  {
    event_id: 30,
    unit_id: 59,
    event_brief:
      'IT IS SUBMITTED THAT A PROGRAMME WILL BE CONDUCTED AT SVM MATRIC  SCHOOL, SSP FOR ESSAY COMPETETION, PLEASE.',
    state_name: 'TAMILNADU',
    unit_name: 'SSP SALEM',
    date: '2019-10-18',
    unit_address:
      'DY.COMMANDANT OFFICE\r\nCISF UNIT \r\nSSP SALEM\r\nMOHAN NAGAR PO\r\nSALEM 636013',
    latitude: 11.351831,
    longitude: 77.685254,
  },
  {
    event_id: 31,
    unit_id: 33,
    event_brief: 'conductness reconnaissance of NSG at chennai port trust',
    state_name: 'TAMILNADU',
    unit_name: 'CHPT CHENNAI',
    date: '2019-10-23',
    unit_address:
      'OFFICE OF THE COMMANDANT\r\nRAJA SALAI OPPOSIT TO RBI \r\nBANK DAIMOND JUBLEE BUILDING\r\nCHENNAI TAMIL NADU-600001',
    latitude: 13.09,
    longitude: 80.27,
  },
  {
    event_id: 32,
    unit_id: 59,
    event_brief:
      'IT IS SUBMITTED THAT ON 23.10.2019 AT ABOUT 0630 HRS UNIT LEVEL MOCK DRILL WILL BE CONDUCTED AT TRUCK GATE, SSP.',
    state_name: 'TAMILNADU',
    unit_name: 'SSP SALEM',
    date: '2019-10-24',
    unit_address:
      'DY.COMMANDANT OFFICE\r\nCISF UNIT \r\nSSP SALEM\r\nMOHAN NAGAR PO\r\nSALEM 636013',
    latitude: 11.351831,
    longitude: 77.685254,
  },

  {
    event_id: 21,
    unit_id: 37,
    event_brief: 'PROTEST MEET',
    state_name: 'KERALA',
    unit_name: 'FACT UDYOGMANDAL',
    date: '2019-09-20',
    unit_address: 'CISF UNIT FACT UDL \r\nUDYOGAMANDAL POST\r\nELOOR ERNAKULAM \r\n683501',
    latitude: 10.064281,
    longitude: 76.311604,
  },
  {
    event_id: 34,
    unit_id: 37,
    event_brief: "MINSTER'S VISIT",
    state_name: 'KERALA',
    unit_name: 'FACT UDYOGMANDAL',
    date: '2019-10-31',
    unit_address: 'CISF UNIT FACT UDL \r\nUDYOGAMANDAL POST\r\nELOOR ERNAKULAM \r\n683501',
    latitude: 10.064281,
    longitude: 76.311604,
  },
  {
    event_id: 17,
    unit_id: 50,
    event_brief:
      'DEMONSTRATION IN FROM OF NMPT ADM BUILDING BY NEW MANGALORE PORT & GENERAL EMPLOYEES ASSOCIATION',
    state_name: 'KARNATAKA',
    unit_name: 'NMPT MANGALORE',
    date: '2019-08-27',
    unit_address:
      'OFFICE OF THE DY. COMMANDANT \r\nCISF UNIT NMPT MANGALORE\r\nPOST  PANAMBUR- 575010\r\nMANGALORE DAKSHINA KANNADA',
    latitude: 12.87028,
    longitude: 74.88056,
  },
  {
    event_id: 18,
    unit_id: 50,
    event_brief: 'COASTAL SECURITY EXERCISE SAJAG',
    state_name: 'KARNATAKA',
    unit_name: 'NMPT MANGALORE',
    date: '2019-09-12',
    unit_address:
      'OFFICE OF THE DY. COMMANDANT \r\nCISF UNIT NMPT MANGALORE\r\nPOST  PANAMBUR- 575010\r\nMANGALORE DAKSHINA KANNADA',
    latitude: 12.87028,
    longitude: 74.88056,
  },
  {
    event_id: 35,
    unit_id: 50,
    event_brief: 'COASTAL SECURITY EXERCISE SAGAR KAVACH',
    state_name: 'KARNATAKA',
    unit_name: 'NMPT MANGALORE',
    date: '2019-11-06',
    unit_address:
      'OFFICE OF THE DY. COMMANDANT \r\nCISF UNIT NMPT MANGALORE\r\nPOST  PANAMBUR- 575010\r\nMANGALORE DAKSHINA KANNADA',
    latitude: 12.87028,
    longitude: 74.88056,
  },
  {
    event_id: 26,
    unit_id: 61,
    event_brief: 'cleanliness drive on 02.10.2019',
    state_name: 'TELANGANA',
    unit_name: 'SCCL SINGARENI',
    date: '2019-10-02',
    unit_address:
      'CISF UNIT SCCL SINGARENI\r\nPOST CCC NASPUR\r\nDIST-MANCHERIAL\r\nTELANGANA PIN -504302',
    latitude: 17.524731,
    longitude: 80.396623,
  },
];

export default eventInfos;
