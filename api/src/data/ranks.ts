export const getRanksEnumDefs = (): string => {
	let enumStr = 'enum UserRank { \n'
	for (const key in ranks) {
		enumStr += key + '\n'
	}
	enumStr += '}'
	return enumStr
}

export const ranks = {
	CHIEF_OFFICER: 'Chief Officer',
	RADIO_OFFICER: 'Radio Officer',
	SINGLE_OFFICER: 'Single Officer',
	S2ND_OFFICER: '2nd Officer',
	T3RD_OFFICER: '3rd Officer',
	SENIOR_DPO: 'Senior DPO',
	JUNIOR_DPO: 'Junior DPO',
	DPO: 'DPO',
	TRAINEE_OFFICER: 'Trainee Officer',
	BOSUN_BOATSWAIN: 'Bosun (Boatswain)',
	AB_ABLE_SEAMAN: 'AB (Able Seaman)',
	OS_ORDINARY_SEAMAN: 'OS (Ordinary Seaman)',
	CRANE_OPERATOR: 'Crane Operator',
	DREDGE_MASTER: 'Dredge Master',
	DECK_CADET: 'Deck Cadet',
	COOK: 'Cook',
	MESSBOY: 'Messboy',
	ABCOOK: 'AB/Cook',
	ABWELDER: 'AB/Welder',
	CADETTRAINEE: 'Cadet/Trainee',
	CHIEF_ENGINEER: 'Chief Engineer',
	SINGLE_ENGINEER: 'Single Engineer',
	S2ND_ENGINEER: '2nd Engineer',
	T3RD_ENGINEER: '3rd Engineer',
	F4TH_ENGINEER: '4th Engineer',
	REF_ENGINEER: 'Ref. Engineer',
	GAS_ENGINEER: 'Gas Engineer',
	ELECTRICAL_ENGINEER: 'Electrical Engineer',
	ETO_: 'ETO ',
	TRAINEE_ENGINEER: 'Trainee Engineer',
	MOTORMANOILER: 'Motorman/Oiler',
	FITTERWELDER: 'Fitter/Welder',
	TURNER: 'Turner',
	ELECTRICIAN: 'Electrician',
	PUMPMAN: 'Pumpman',
	ENGINE_CADET: 'Engine Cadet',
	SUPERINTENDENT: 'Superintendent',
	ABMM: 'AB/MM',
	CHIEF_COOK: 'Chief Cook',
	S2ND_COOK: '2nd Cook',
	DIVER: 'Diver',
	WIPER: 'Wiper',
	MOTORMANELECTRICIAN: 'Motorman/Electrician',
	ASSISTANT_ELECTRICAL_ENGINEER: 'Assistant Electrical Engineer',
	WATCH_ENGINEER: 'Watch Engineer',
	STAFF_ENGINEER: 'Staff Engineer',
	HOTEL_ACCOMMODATION_ENGINEER: 'Hotel Accommodation Engineer',
	STEWARDESS: 'Stewardess',
	HYDRO_ACOUSTIC_OPERATOR: 'Hydro-acoustic operator',
	CHIEF_TRAWL_MASTER: 'Chief trawl-master',
	WATCH_TRAWL_MASTER: 'Watch trawl-master',
	SEAMAN_WINCHMAN: 'Seaman-winchman',
	TRAWL_SEAMAN: 'Trawl seaman',
	MASTER_OF_THE_PRODUCT: 'Master of the product',
	FISH_MASTER: 'Fish-master',
	WORKERS_OF_THE_PRODUCT_PLANT: 'Workers of the product-plant',
	ENGINEER_ADJUSTER: 'Engineer-adjuster',
	FISHMILL_OPERATOR: 'Fishmill operator',
	REFRIGERATOR_OPERATOR: 'Refrigerator operator',
	LAUNDRY_OPERATOR: 'Laundry operator',
	GENERAL_MANAGER: 'General Manager',
	HOTEL_MANAGER: 'Hotel Manager',
	CASINO_MANAGER: 'Casino Manager',
	SHOP_MANAGER: 'Shop Manager',
	PROVISION_MASTER: 'Provision Master',
	STORE_MANAGER: 'Store Manager',
	PURSER: 'Purser',
	ACCOUNTANT: 'Accountant',
	CRUISE_DIRECTOR: 'Cruise Director',
	HOTEL_MANAGER_DIRECTOR: 'Hotel, Manager - Director',
	HOTEL_MANAGER_SECRETARY: 'Hotel, Manager Secretary',
	RECEPTIONIST: 'Receptionist',
	STOREKEEPER: 'Storekeeper',
	CASHIER: 'Cashier',
	PHOTOGRAPHER: 'Photographer',
	SECURITY_OFFICER: 'Security Officer',
	SECURITY_GUARD: 'Security Guard',
	STEWARD_HEAD_ROOM: 'Steward, Head Room',
	STEWARDSTEWARDESS_CABIN: 'Steward / Stewardess, Cabin',
	STEWARDSTEWARDESS_ASSISTANT_CABIN: 'Steward / Stewardess, Assistant Cabin',
	BELL_CAPTAIN: 'Bell Captain',
	BELL_BOY: 'Bell Boy',
	CLEANER: 'Cleaner',
	LAUNDRY_MAN: 'Laundry, Man',
	LINEN_KEEPER: 'Linen Keeper',
	CHAMBERMAID: 'Chambermaid',
	POOL_ATTENDANT: 'Pool Attendant',
	FOODBEVERAGE_MANAGER: 'Food / Beverage Manager',
	FOODBEVERAGE_ASSISTANT_MANAGER: 'Food / Beverage Assistant Manager',
	BAR_MANAGER: 'Bar Manager',
	BAR_ASSISTANT_MANAGER: 'Bar Assistant Manager',
	BARTENDER: 'Bartender',
	BAR_WAITER: 'Bar Waiter',
	HEAD_WAITER: 'Head Waiter',
	WAITERWAITRESS: 'Waiter / Waitress',
	WINE_STEWARD: 'Wine Steward',
	BUSBOY: 'Busboy',
	PLUMBER: 'Plumber',
	UPHOLSTERER: 'Upholsterer',
	TAILOR: 'Tailor',
	CARPENTER: 'Carpenter',
	AC_REPAIRMAN: 'AC Repairman',
	GENERAL_PURPOSE_REPAIRMAN: 'General Purpose Repairman',
	DOCTOR: 'Doctor',
	ADMINISTRATIVE_ASSISTANT: 'Administrative Assistant',
	ART_AUCTIONEER: 'Art Auctioneer',
	ASSISTANT_CRUISE_DIRECTOR: 'Assistant Cruise Director',
	ASSISTANT_SHORE_EXCURSIONS_MANAGER: 'Assistant Shore Excursions Manager',
	AUDIO_VISUAL_COORDINATOR: 'Audio Visual Coordinator',
	AVIT: 'AV/IT',
	BAKER: 'Baker',
	BAR_STEWARD: 'Bar Steward',
	BEAUTICIAN: 'Beautician',
	BEAUTY_THERAPIST: 'Beauty Therapist',
	BEDROOM_STEWARD: 'Bedroom Steward',
	BOOKING_AGENT: 'Booking Agent',
	BOOKKEEPER: 'Bookkeeper',
	BRAND_MANAGER: 'Brand Manager',
	BUFFET_SERVER: 'Buffet Server ',
	BUTCHER: 'Butcher',
	CABIN_STEWARDESS: 'Cabin Stewardess',
	CETO: 'CETO',
	CHEF_DE_PARTIE: 'Chef de Partie',
	CHIEF_CABIN_STEWARD: 'Chief Cabin Steward',
	CHIEF_PURSER: 'Chief Purser',
	CHIEF_STEWARDHOUSEKEEPER: 'Chief Steward/Housekeeper',
	CHIEF_STEWARDESS: 'Chief Stewardess',
	COCKTAIL_SERVER_: 'Cocktail Server ',
	COMPUTER_SYSTEMS_MANAGERIT: 'Computer Systems Manager/IT',
	COSMETOLOGIST: 'Cosmetologist',
	CRUISE_CONSULTANT: 'Cruise Consultant',
	CUSTOMER_SERVICE_REPRESENTATIVE: 'Customer Service Representative',
	DANCER: 'Dancer',
	DANCE_INSTRUCTOR: 'Dance Instructor',
	DECK_HAND: 'Deck Hand',
	DINING_ROOM_HEAD_WAITER: 'Dining Room Head Waiter',
	DINING_ROOM_MANAGER: 'Dining Room Manager ',
	DISC_JOCKEY: 'Disc Jockey',
	DIVE_INSTRUCTOR: 'Dive Instructor',
	ENTERTAINER: 'Entertainer',
	EXPEDITION_LEADER: 'Expedition Leader',
	FIELD_REPRESENTATIVE: 'Field Representative',
	FITNESS_DIRECTOR: 'Fitness Director',
	FITNESS_INSTRUCTOR: 'Fitness Instructor',
	GALLEY_STEWARDESS: 'Galley Stewardess',
	GENERAL_COOK: 'General Cook ',
	GENTLEMEN_HOST: 'Gentlemen Host',
	GIFT_SHOP_MANAGER: 'Gift Shop Manager',
	GIFT_SHOP_SALES_ASSISTANT: 'Gift Shop Sales Assistant',
	HAIR_STYLIST: 'Hair Stylist',
	HOUSEKEEPER_ASSISTANT: 'Housekeeper, Assistant',
	HOUSEKEEPER_CHIEF: 'Housekeeper, Chief',
	HR_MANAGER: 'HR Manager',
	INSIDE_SALES_REPRESENTATIVE: 'Inside Sales Representative',
	IT_LEAD_DEVELOPER: 'IT Lead Developer',
	IT_STAFF: 'IT Staff',
	LAUNDRY_HELPER: 'Laundry Helper',
	LAUNDRY_KEEPER: 'Laundry Keeper',
	LAUNDRY_SUPERVISOR: 'Laundry Supervisor',
	LEAD_DECKHAND_: 'Lead Deckhand ',
	LECTURER_SPECIAL_GUEST_SPEAKER: 'Lecturer/ Special Guest Speaker',
	LIFEGUARD: 'Lifeguard',
	MAITRE_D_HOTEL: 'Maitre d Hotel',
	MANICURIST: 'Manicurist',
	MARKETINGPR: 'Marketing / PR',
	MARKETING_RESEARCH_ANALYST: 'Marketing Research Analyst',
	MASSAGE_THERAPIST: 'Massage Therapist',
	NATURALIST: 'Naturalist',
	NURSESTEWARDESS: 'Nurse/Stewardess',
	OPERATIONS_ADMINISTRATOR: 'Operations Administrator',
	OPERATIONS_ANALYST: 'Operations Analyst',
	OUTSIDE_SALES_REPRESENTATIVE: 'Outside Sales Representative',
	PAYROLL_CLERK: 'Payroll Clerk',
	PERSONAL_TRAINER: 'Personal Trainer',
	PRODUCTION_MANAGER: 'Production Manager',
	PROGRAM_COORDINATOR: 'Program Coordinator',
	PURCHASING_AGENT: 'Purchasing Agent',
	QUARTER_MASTER: 'Quarter Master',
	SAFETY_OFFICER: 'Safety Officer',
	SENIOR_BUSINESS_ANALYST: 'Senior Business Analyst',
	SENIOR_HOUSEKEEPER: 'Senior Housekeeper',
	SENIOR_STAFF_ACCOUNTANT: 'Senior Staff Accountant',
	SENIOR_STEWARDESS: 'Senior Stewardess',
	SHORE_EXCURSIONS_MANAGER: 'Shore Excursions Manager',
	SOCIAL_HOSTHOSTESS: 'Social Host/Hostess',
	SOFTWARE_ENGINEER: 'Software Engineer',
	SOUND_AND_LIGHT_TECHNICIAN: 'Sound and Light Technician',
	SPA_ATTENDANT: 'Spa Attendant',
	SPA_STEWARDESS: 'Spa Stewardess',
	STAFF_ACCOUNTANT: 'Staff Accountant',
	STAFF_CAPTAIN: 'Staff Captain',
	TOUR_ACCOUNTING: 'Tour Accounting',
	WATER_SPORTS_INSTRUCTOR: 'Water Sports Instructor',
	WORKER_OF_THE_PRODUCT_PLANT: 'Worker of the product-plant',
	CONTRACTS_ADMINISTRATOR: 'Contracts Administrator',
	CONTRACTS_MANAGER: 'Contracts Manager',
	CHARTERING_MANAGER: 'Chartering Manager',
	SYSTEMS_ENGINEER: 'Systems Engineer',
	NAVAL_ARCHITECT: 'Naval Architect',
	SALES_MANAGER: 'Sales Manager',
	BUSINESS_DEVELOPMENT_MANAGER: 'Business Development Manager',
	SUPERINTENDENT_ELECTRICAL: 'Superintendent Electrical',
	TRADER: 'Trader',
	ANALYST: 'Analyst',
	PORT_MANAGER: 'Port Manager',
	ENGINEERING_MANAGER: 'Engineering Manager',
	MAINTENANCE_TECHNICIAN: 'Maintenance Technician',
	CAD_OPERATOR: 'CAD Operator',
	SG1A: 'SG1A',
	SERVICE_MANAGER: 'Service Manager',
	TECHNICAL_MANAGER: 'Technical Manager',
	UNDERWRITER: 'Underwriter',
	HEAD_OF_NETWORK_PLANNING: 'Head of Network Planning',
	NETWORK_PLANNING_MANAGER: 'Network Planning Manager',
	MARINE_SURVEYOR: 'Marine Surveyor',
	MARINE_CONSULTANT: 'Marine Consultant',
	BUYER: 'Buyer',
	TERMINAL_MANAGER: 'Terminal Manager',
	SUPERINTENDENT_TECHNICAL: 'Superintendent Technical',
	IT_MANAGER: 'IT Manager',
	TECHNICAL_ASSISTANT: 'Technical Assistant',
	OPERATIONS_MANAGER: 'Operations Manager',
	SHIP_PLANNER: 'Ship Planner',
	MARINE_MANAGER: 'Marine Manager',
	ASSOCIATE: 'Associate',
	SHIP_OPERATOR: 'Ship Operator',
	CREWING_MANAGER: 'Crewing Manager',
	SERVICE_ENGINEER: 'Service Engineer',
	CONTROLS_ENGINEER: 'Controls Engineer',
	ACCOUNT_EXECUTIVE: 'Account Executive',
	CLAIMS_EXECUTIVE: 'Claims Executive',
	RISK_ADVISOR: 'Risk Advisor',
	ACCOUNT_MANAGER: 'Account Manager',
	COMMERCIAL_MANAGER: 'Commercial Manager',
	HUMAN_RESOURCES: 'Human Resources',
	WELDING_ENGINEER: 'Welding Engineer',
	EXPORT_CLERK: 'Export Clerk',
	PROJECT_MANAGER: 'Project Manager',
	VETTING_SUPERINTENDENT: 'Vetting Superintendent',
	PROCUREMENT_OFFICER: 'Procurement Officer',
	SUPERINTENDENT_OPERATIONS: 'Superintendent Operations',
	OPERATIONS_ASSISTANT: 'Operations Assistant',
	OPERATIONS_EXECUTIVE: 'Operations Executive',
	LOGISTICS_EXECUTIVE: 'Logistics Executive',
	QUALITY_MANAGER: 'Quality Manager',
	MARINE_ENGINEER: 'Marine Engineer',
	OPERATIONS_OFFICER: 'Operations Officer',
	SALES_ENGINEER: 'Sales Engineer',
	CARGO_ENGINEER: 'Cargo Engineer',
	TECHNICAL_DIRECTOR: 'Technical Director',
	PROCUREMENT_MANAGER: 'Procurement Manager',
	CUSTOMER_SERVICE_EXECUTIVE: 'Customer Service Executive',
	BUNKER_PURCHASER: 'Bunker Purchaser',
	PROJECT_ENGINEER: 'Project Engineer',
	BUNKER_TRADER: 'Bunker Trader',
	RECRUITMENT_CONSULTANT: 'Recruitment Consultant',
	STRUCTURAL_ENGINEER: 'Structural Engineer',
	PROJECT_OFFICER: 'Project Officer',
	PORT_ENGINEER: 'Port Engineer',
	CLIENT_REPRESENTATIVE: 'Client Representative',
	SHIPS_AGENT: 'Ships Agent',
	PORT_AGENT: 'Port Agent',
	CHARTERER: 'Charterer',
	SUPERINTENDENT_CARGO: 'Superintendent Cargo',
	CREWING_OFFICER: 'Crewing Officer',
	OPERATIONS_DIRECTOR: 'Operations Director',
	ASSISTANT_HSE_SUPERINTENDENT: 'Assistant HSE Superintendent',
	ENVIRONMENTAL_MANAGER: 'Environmental Manager',
	MARKETING_EXECUTIVE: 'Marketing Executive',
	PORT_CAPTAIN: 'Port Captain',
	BROKER: 'Broker',
	HSE_MANAGER: 'HSE Manager',
	SURVEYOR: 'Surveyor',
	ADMINISTRATION_MANAGER: 'Administration Manager',
	ROUSTABOUT: 'Roustabout',
	DERRICKMAN: 'Derrickman',
	FLOOR_MAN: 'Floor man',
	PIPEFITTER: 'Pipefitter',
	FABRICATOR: 'Fabricator',
	COXSWAIN: 'Coxswain',
	REPAIR_ENGINEER: 'Repair Engineer',
	PERSONAL_ASSISTANT_SECRETARY: 'Personal Assistant (secretary)',
	ADMINISTRATION_SUPPORT: 'Administration support',
	INJECTION_MOLDING_MACHINE_OPERATOR: 'Injection Molding machine operator',
	JUNIOR_MECHANICAL_ENGINEER: 'Junior mechanical engineer ',
	SPRING_MACHINE_OPERATOR: 'Spring machine operator ',
	LATHE_MACHINE_OPERATOR: 'lathe machine operator',
	SLOT_TECHNICIAN: 'Slot Technician',
	COMMISSIONING_ENGINEER: 'Commissioning Engineer',
	COMMUNICATION_OFFICER: 'Communication Officer',
	HYDROGRAPHIC_SURVEYOR: 'Hydrographic surveyor',
	PIPE_OPERATOR: 'Pipe Operator',
}
