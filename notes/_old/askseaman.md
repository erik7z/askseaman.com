CREATE CONSTRAINT ON (u:User) ASSERT u.email IS UNIQUE;

// process.env['AUTH_DIRECTIVES_ROLE_KEY'] = 'https://grandstack.io/roles'
// process.env['AUTH_DIRECTIVES_SCOPE_KEY'] = 'https://grandstack.io/scopes'


!!!!!!!!! CUSTOM SCOPE DIRECTIVE https://blog.grandstack.io/authorization-in-graphql-using-custom-schema-directives-eafa6f5b4658

тема на реакт натив

https://github.com/creativetimofficial/now-ui-react-native
https://www.creative-tim.com/product/material-kit-react-native#
https://www.creative-tim.com/product/argon-pro-react-native

askseaman

найти вопрос ответ или пользователя

задать вопрос

- все вопросы
- все теги
- пользователи


Хабр Q&A — вопросы и ответы для IT-специалистов
Получайте ответы на вопросы по любой теме из области IT от специалистов в этой теме.

Узнать больше


САМОЕ ИНТЕРЕСНОЕ ЗА 24 ЧАСА



ПОПУЛЯРНЫЕ ТЕГИ


САМЫЕ АКТИВНЫЕ СЕГОДНЯ

---------------PAGES---------------
- QUESTIONS LIST						+
	- ASK QUESTIONS						+
	- QUESTION PAGE						+
- TAGS LIST  								+
	- TAG PAGE  							+
- USERS LIST                +
	- USER PAGE [PUBLIC]      +
	- USER PAGE [PERSONAL]
	- USER FEED 							+
	- USER NOTIFICATIONS *
	- USER SETTINGS * 
- LOGIN 										+
	- REGISTER  							+
	- FORGOT PASSWORD         +
	- CONFIRMATION CODE       +
- ABOUT


---------------STYLES---------------
- ALL PAGES
		- body (font-family, default font size)
		- h1,h2,h3,h4,h5
		- p
		- text-sm, text-md, text-lg
		- input big
		- input small
		- bg-yellow, bg-grey, bg-white, bg-blue-grey
		- avatar-round
	- main section
		- main content section
		- Page header
		- author name big
		- author name small
		- author psn big
		- author psn sm
		- post item meta info (subscribers, comments, likes, views,  time)
		- hr line thin
		- hr line bold
		- tags list small
	- sidebar section
		- sidebar tags list big
		- sidebar header
		- sidebar author avatar
		- sidebar author name
		- sidebar meta (questions, answers, subscribers, time)
		- sidebar topic header
- MAIN PAGE
	- questions list item
		- question header
		- answers count


--------------------------------

!!! 404 page
!!! about page
!!! forgot pass page
!!! nav toggle

!!!! forms

user avatar

	canVote(bool) (if user rate is > ??)
	favorite tag

	draw accept status in UI


interface IProps {
	children: ReactNode
	// any other props that come into the component
}



import React from 'react'

export const QuestionSearch = () => {
	return <div>$0</div>
}

export default QuestionSearch


for update: event: React.ChangeEvent for submit: event: React.FormEvent for click: event: React.MouseEvent


	const [value, setValue] = useState<string>(''),
		onInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
			setValue(value)
		},
		onFormSubmit = (e: React.FormEvent) => {
			e.preventDefault()
			console.log(value)
		}


/// change-pass workflow 

# graphql: changepass-request
	- expects email
	- if email provided:
		- check if user with such email found in db:
		- generate code 
		- save it in the local account node
		- send code to the user email with http link to confirm code: 
			http://yoursite.com/auth/verify?code=1234
		- return redirect_uri:
			http://yoursite.com/auth/confirm-code
			for UI page with prompt for confirmation code

# graphql: changepass-confirm
	- expects code:
		- if user with such code found in db, return redirect_uri to UI page with prompt for new pass
		with confirmation code in params
		http://yoursite.com/auth/change-pass?code=1234
		

# graphql: changepass-complete
	- expects code and new pass: 
		- hash new password
		- search in db for local account with such code 
			- if not found: return error with redirect_uri to login page: 
				http://yoursite.com/auth?success=false&message="Confirmation code is not correct, try again."
			- if found: change password for new, return success status with redirect_uri to login page: 
				http://yoursite.com/auth?success=true&message="ok"

# http://yoursite.com/auth/verify?code=1234
1. if no code provided: redirect to UI registration page with error message in params:
		http://yoursite.com/auth?success=false&message="Confirmation code is not correct, try again."

2. if code provided: search in db for local account with such code 
	- if user not found redirect to reg ui with err mess in params
		http://yoursite.com/auth?success=false&message="Confirmation code is not correct, try again."

	- if user found:
		- redirect to ui page with new password prompt and attach new code to params



				MATCH (q:Question {questionId:$data.questionId})<-[:ASKED]-(u:User {userId: $cypherParams.currentUserId})
				SET q += {title: $data.title, text: $data.text, updatedAt: DateTime()}
				WITH q
				MATCH (t:Tag)-[r:TAGGED]->(q)
				DELETE r
				WITH q
				MATCH (t:Tag) where t.name IN $data.tags
				MERGE (t)-[r:TAGGED]->(q)
				RETURN q


				MATCH (t:Tag) where t.name IN ['CDI'] 
CALL {
    WITH t
    WITH t
    WHERE t IS NOT NULL
    MERGE (robin:Hero {name:'Goblin'})
    CREATE (t)-[:SuperheroPersona]->(robin)
    return t as batman,robin
}
RETURN batman, robin

MATCH (q:Question {questionId:"a03bb1bb-62cf-4207-b86b-90a5d09c938f"})
				WITH q, properties(q) AS m
				DETACH DELETE q
				RETURN m

MATCH (q:Question {questionId:"9af3ceb3-7622-4864-a255-889fb641e038"})
WITH q
CALL {
    WITH q
    MATCH (q)<-[r:TAGGED|ASKED]-(p)
    return p as relations
}
WITH q, relations
DETACH DELETE q
RETURN relations

# Add label
match (n {id:desired-id})
set n :newLabel
return n



# Rename label
MATCH (s:Studio)
SET s:GameStudio
REMOVE s:Studio

# return bool

> option 1
MATCH (c:Jaguar{name:"JLR 2.5Ltr"})-[:REPRESENTED_BY]->(v) 
RETURN count(c) > 0 as c

> option 2
MATCH (c:Jaguar{name:"JLR 2.5Ltr"})-[:REPRESENTED_BY]->(v)
RETURN CASE WHEN c IS NULL THEN false ELSE true END as c



MATCH (u:User {userId: "0cdf1e36-b37f-4ed1-a143-55a8e5a1cc58"}), (q:Question {questionId: "c1b30c32-26e8-450c-b4ed-e400a7825e78"})
				MERGE (q)<-[c:COMMENTED_QUESTION]-(u)
				SET c += {text: "Its my first comment", commentId: apoc.create.uuid(), createdAt: DateTime()}
				RETURN c


				MATCH (u:User), (q:Question)
WHERE u.userId = "0cdf1e36-b37f-4ed1-a143-55a8e5a1cc58" and q.questionId="c1b30c32-26e8-450c-b4ed-e400a7825e78"
				CREATE (q)<-[c:COMMENTED_QUESTION]-(u)
				SET c += {text: "Its my first comment", commentId: apoc.create.uuid(), createdAt: DateTime()}
				RETURN c



				MATCH (u:User {nodeId: "0cdf1e36-b37f-4ed1-a143-55a8e5a1cc58"})
				CREATE (q:Question)<-[:ASKED]-(u)
				SET q += {title: "test question", text: "test text", nodeId: apoc.create.uuid(), createdAt: DateTime()}
				WITH q
				CALL {
					WITH q
					MATCH (t:Tag) where t.name IN ["CDI"]
					MERGE (t)-[r:TAGGED]->(q)
					RETURN count(t) as added_tags
				}
				RETURN q


			MATCH (u:User {nodeId: "09c3d658-20ba-4cc0-8068-feac69255b99"})-[l:LIKED]->(t:CanBeLiked {nodeId: "52f5aff3-0411-4705-a325-66dcd3cdd69d"})
WITH u,t,l
CALL {
	WITH l
	WITH count(l) as count
    RETURN count as batman
}
RETURN u, batman













<Form>
				<Form.Row className='mb-3'>
					<Col md={12}>
						<Form.Label htmlFor='email'>E-mail</Form.Label>
						<Form.Control type='email' className='medium-input' id='email' />
					</Col>
				</Form.Row>

				<Form.Row className='mb-3'>
					<Col md={6}>
						<Form.Label htmlFor='name'>Name</Form.Label>
						<Form.Control type='text' className='medium-input' id='name' />
					</Col>
					<Col md={6}>
						<Form.Label htmlFor='surname' className='form-label'>
							Surname
						</Form.Label>
						<Form.Control type='text' className='medium-input' id='surname' />
					</Col>
				</Form.Row>

				<Form.Row className='mb-3'>
					<Col md={12}>
						<Form.Label htmlFor='rank'>Rank</Form.Label>
						<Form.Control type='text' className='medium-input' id='rank' />
					</Col>
				</Form.Row>

				<Form.Row className='mb-3'>
					<Col md={6}>
						<Form.Label htmlFor='password'>Password</Form.Label>
						<Form.Control
							type='password'
							className='medium-input'
							id='password'
						/>
					</Col>
					<Col md={6}>
						<Form.Label htmlFor='password2'>Repeat Password</Form.Label>
						<Form.Control
							type='password'
							className='medium-input'
							id='password2'
						/>
					</Col>
				</Form.Row>

				<Form.Row className='mb3 text-right'>
					<Col md={12}>
						<Button variant='primary' type='submit' className='px-3'>
							Register
						</Button>
					</Col>
				</Form.Row>

				<Form.Group>
					<small>Already have account ? </small>
					<Link to='/auth'>
						<i>Sign In</i>
					</Link>
				</Form.Group>
			</Form>




			'unique-email',
        'This email is already taken, please specify another one',
        async value => !!value && await auth.checkIfEmailDoesNotExist(value)




CREATE (l:LocalAccount {password: $data.password, email: $data.email})<-[:AUTHENTICATED_WITH]-(u:User {
				nodeId: apoc.create.uuid(),
				email: $data.email,
				name: $data.name,
				surname: $data.surname,
				roles: $data.roles,
				createdAt: DateTime()
			}) 
			
			WITH {
				nodeId: u.nodeId,
				email: u.email,
				password: l.password,
				name: u.name,
				surname: u.surname,
				roles: u.roles
			} as LoginResponse, u
			CALL {
				WITH LoginResponse, u
				MATCH (r:Rank {rank: $data.rank})
				MERGE (u)-[:HAS_RANK]->(r)
				RETURN count(r) as added_rank
			}
			RETURN LoginResponse





			Register: 
			> uid
			> role
				> token
			x code
			x pass

			Login:
			> uid
			> role
				> token
			x code
			x pass (only compare)


			ChangePassReq:
			> redirect_uri to enter code

			ChangePassConf:
			> redirect_uri to enter new pass

			ChangePassCompl:
			> redirect_uri to login with new pass




hide away properties or intermediate nodes/relationships for security reasons

				const res = await ctx.driver
					.session()
					.run(query)
					.then((res) => res.records[0].get(0).properties)
				// .then((res) => res.records.map((rec) => rec.get(0).properties)[0])




				const res = await ctx.driver
					.session()
					.run(
						'MATCH (u:User {nodeId: "012b7956-2e33-4ddc-9d08-014d97316b7b"}) RETURN u'
					)
					.then((res) => res.records[0].get(0).properties)

				console.log('User')
				console.log(res)



				WITH u
CALL apoc.create.vNode(['TokenResponse','AuthResponse'], {
				FRAGMENT_TYPE: 'TokenResponse',
				token: "blablabla"
			}) YIELD node 



	if (regResponse && regResponse.Register.__typename === 'TokenResponse') {
		const token = regResponse.Register.token as string
		localStorage.setItem('token', token)
	}




Chief Officer
Radio Officer
Single Officer
2nd Officer
3rd Officer
Senior DPO
Junior DPO
DPO
Trainee Officer
Bosun (Boatswain)
AB (Able Seaman)
OS (Ordinary Seaman)
Crane Operator
Dredge Master
Deck Cadet
Cook
Messboy
AB/Cook
AB/Welder
Cadet/Trainee
Chief Engineer
Single Engineer
2nd Engineer
3rd Engineer
4th Engineer
Ref. Engineer
Gas Engineer
Electrical Engineer
ETO 
Trainee Engineer
Motorman/Oiler
Fitter/Welder
Turner
Electrician
Pumpman
Engine Cadet
Superintendent
AB/MM
Chief Cook
2nd Cook
Diver
Wiper
Motorman/Electrician
Assistant Electrical Engineer
Watch Engineer
Staff Engineer
Hotel Accommodation Engineer
Stewardess
Hydro-acoustic operator
Chief trawl-master
Watch trawl-master
Seaman-winchman
Trawl seaman
Master of the product
Fish-master
Workers of the product-plant
Engineer-adjuster
Fishmill operator
Refrigerator operator
Laundry operator
General Manager
Hotel Manager
Casino Manager
Shop Manager
Provision Master
Store Manager
Purser
Accountant
Cruise Director
Hotel, Manager - Director
Hotel, Manager Secretary
Receptionist
Storekeeper
Cashier
Photographer
Security Officer
Security Guard
Housekeeper, Chief
Housekeeper, Assistant
Steward, Head Room
Steward / Stewardess, Cabin
Steward / Stewardess, Assistant Cabin
Bell Captain
Bell Boy
Cleaner
Laundry, Supervisor
Laundry, Keeper
Laundry, Man
Laundry, Helper
Linen Keeper
Chambermaid
Pool Attendant
Food / Beverage Manager
Food / Beverage Assistant Manager
Bar Manager
Bar Assistant Manager
Bartender
Bar Waiter
Head Waiter
Waiter / Waitress
Wine Steward
Busboy
Plumber
Upholsterer
Tailor
Carpenter
AC Repairman
General Purpose Repairman
Doctor
Administrative Assistant
Art Auctioneer
Assistant Cruise Director
Assistant Shore Excursions Manager
Audio Visual Coordinator
AV/IT
Baker
Bar Steward
Beautician
Beauty Therapist
Bedroom Steward
Booking Agent
Bookkeeper
Brand Manager
Buffet Server 
Butcher
Cabin Stewardess
CETO
Chef de Partie
Chief Cabin Steward
Chief Purser
Chief Steward/Housekeeper
Chief Stewardess
Cocktail Server 
Computer Systems Manager/IT
Cosmetologist
Cruise Consultant
Customer Service Representative
Dancer
Dance Instructor
Deck Hand
Dining Room Head Waiter
Dining Room Manager 
Disc Jockey
Dive Instructor
Entertainer
Expedition Leader
Field Representative
Fitness Director
Fitness Instructor
Galley Stewardess
General Cook 
Gentlemen Host
Gift Shop Manager
Gift Shop Sales Assistant
Hair Stylist
Housekeeper, Assistant
Housekeeper, Chief
HR Manager
Inside Sales Representative
IT Lead Developer
IT Staff
Laundry Helper
Laundry Keeper
Laundry Supervisor
Lead Deckhand 
Lecturer/ Special Guest Speaker
Lifeguard
Maitre d' Hotel
Manicurist
Marketing / PR
Marketing Research Analyst
Massage Therapist
Naturalist
Nurse/Stewardess
Operations Administrator
Operations Analyst
Outside Sales Representative
Payroll Clerk
Personal Trainer
Production Manager
Program Coordinator
Purchasing Agent
Quarter Master
Safety Officer
Senior Business Analyst
Senior Housekeeper
Senior Staff Accountant
Senior Stewardess
Shore Excursions Manager
Social Host/Hostess
Software Engineer
Sound and Light Technician
Spa Attendant
Spa Stewardess
Staff Accountant
Staff Captain
Tour Accounting
Water Sports Instructor
Worker of the product-plant
Contracts Administrator
Contracts Manager
Chartering Manager
Systems Engineer
Naval Architect
Sales Manager
Business Development Manager
Superintendent Electrical
Trader
Analyst
Port Manager
Engineering Manager
Maintenance Technician
CAD Operator
SG1A
Service Manager
Technical Manager
Underwriter
Head of Network Planning
Network Planning Manager
Marine Surveyor
Marine Consultant
Buyer
Terminal Manager
Superintendent Technical
IT Manager
Technical Assistant
Operations Manager
Ship Planner
Marine Manager
Associate
Ship Operator
Crewing Manager
Service Engineer
Controls Engineer
Account Executive
Claims Executive
Risk Advisor
Account Manager
Commercial Manager
Human Resources
Welding Engineer
Export Clerk
Project Manager
Vetting Superintendent
Procurement Officer
Superintendent Operations
Operations Assistant
Operations Executive
Logistics Executive
Quality Manager
Marine Engineer
Operations Officer
Sales Engineer
Cargo Engineer
Technical Director
Procurement Manager
Customer Service Executive
Bunker Purchaser
Project Engineer
Bunker Trader
Recruitment Consultant
Structural Engineer
Project Officer
Port Engineer
Client Representative
Ships Agent
Port Agent
Charterer
Superintendent Cargo
Crewing Officer
Operations Director
Assistant HSE Superintendent
Environmental Manager
Marketing Executive
Port Captain
Broker
HSE Manager
Surveyor
Administration Manager
Roustabout
Derrickman
Floor man
Pipefitter
Fabricator
Coxswain
Repair Engineer
Personal Assistant (secretary)
Administration support
Personal Assistant (secretary)
Administration support
Injection Molding machine operator
Junior mechanical engineer 
Spring machine operator 
lathe machine operator
Slot Technician
Commissioning Engineer
Communication Officer
Hydrographic surveyor
Pipe Operator




CHIEF_OFFICER
	RADIO_OFFICER
	SINGLE_OFFICER
	S2ND_OFFICER
	T3RD_OFFICER
	SENIOR_DPO
	JUNIOR_DPO
	DPO
	TRAINEE_OFFICER
	BOSUN_BOATSWAIN
	AB_ABLE_SEAMAN
	OS_ORDINARY_SEAMAN
	CRANE_OPERATOR
	DREDGE_MASTER
	DECK_CADET
	COOK
	MESSBOY
	ABCOOK
	ABWELDER
	CADETTRAINEE
	CHIEF_ENGINEER
	SINGLE_ENGINEER
	S2ND_ENGINEER
	T3RD_ENGINEER
	F4TH_ENGINEER
	REF_ENGINEER
	GAS_ENGINEER
	ELECTRICAL_ENGINEER
	ETO_
	TRAINEE_ENGINEER
	MOTORMANOILER
	FITTERWELDER
	TURNER
	ELECTRICIAN
	PUMPMAN
	ENGINE_CADET
	SUPERINTENDENT
	ABMM
	CHIEF_COOK
	S2ND_COOK
	DIVER
	WIPER
	MOTORMANELECTRICIAN
	ASSISTANT_ELECTRICAL_ENGINEER
	WATCH_ENGINEER
	STAFF_ENGINEER
	HOTEL_ACCOMMODATION_ENGINEER
	STEWARDESS
	HYDRO_ACOUSTIC_OPERATOR
	CHIEF_TRAWL_MASTER
	WATCH_TRAWL_MASTER
	SEAMAN_WINCHMAN
	TRAWL_SEAMAN
	MASTER_OF_THE_PRODUCT
	FISH_MASTER
	WORKERS_OF_THE_PRODUCT_PLANT
	ENGINEER_ADJUSTER
	FISHMILL_OPERATOR
	REFRIGERATOR_OPERATOR
	LAUNDRY_OPERATOR
	GENERAL_MANAGER
	HOTEL_MANAGER
	CASINO_MANAGER
	SHOP_MANAGER
	PROVISION_MASTER
	STORE_MANAGER
	PURSER
	ACCOUNTANT
	CRUISE_DIRECTOR
	HOTEL_MANAGER_DIRECTOR
	HOTEL_MANAGER_SECRETARY
	RECEPTIONIST
	STOREKEEPER
	CASHIER
	PHOTOGRAPHER
	SECURITY_OFFICER
	SECURITY_GUARD
	HOUSEKEEPER_CHIEF
	HOUSEKEEPER_ASSISTANT
	STEWARD_HEAD_ROOM
	STEWARDSTEWARDESS_CABIN
	STEWARDSTEWARDESS_ASSISTANT_CABIN
	BELL_CAPTAIN
	BELL_BOY
	CLEANER
	LAUNDRY_SUPERVISOR
	LAUNDRY_KEEPER
	LAUNDRY_MAN
	LAUNDRY_HELPER
	LINEN_KEEPER
	CHAMBERMAID
	POOL_ATTENDANT
	FOODBEVERAGE_MANAGER
	FOODBEVERAGE_ASSISTANT_MANAGER
	BAR_MANAGER
	BAR_ASSISTANT_MANAGER
	BARTENDER
	BAR_WAITER
	HEAD_WAITER
	WAITERWAITRESS
	WINE_STEWARD
	BUSBOY
	PLUMBER
	UPHOLSTERER
	TAILOR
	CARPENTER
	AC_REPAIRMAN
	GENERAL_PURPOSE_REPAIRMAN
	DOCTOR
	ADMINISTRATIVE_ASSISTANT
	ART_AUCTIONEER
	ASSISTANT_CRUISE_DIRECTOR
	ASSISTANT_SHORE_EXCURSIONS_MANAGER
	AUDIO_VISUAL_COORDINATOR
	AVIT
	BAKER
	BAR_STEWARD
	BEAUTICIAN
	BEAUTY_THERAPIST
	BEDROOM_STEWARD
	BOOKING_AGENT
	BOOKKEEPER
	BRAND_MANAGER
	BUFFET_SERVER
	BUTCHER
	CABIN_STEWARDESS
	CETO
	CHEF_DE_PARTIE
	CHIEF_CABIN_STEWARD
	CHIEF_PURSER
	CHIEF_STEWARDHOUSEKEEPER
	CHIEF_STEWARDESS
	COCKTAIL_SERVER_
	COMPUTER_SYSTEMS_MANAGERIT
	COSMETOLOGIST
	CRUISE_CONSULTANT
	CUSTOMER_SERVICE_REPRESENTATIVE
	DANCER
	DANCE_INSTRUCTOR
	DECK_HAND
	DINING_ROOM_HEAD_WAITER
	DINING_ROOM_MANAGER
	DISC_JOCKEY
	DIVE_INSTRUCTOR
	ENTERTAINER
	EXPEDITION_LEADER
	FIELD_REPRESENTATIVE
	FITNESS_DIRECTOR
	FITNESS_INSTRUCTOR
	GALLEY_STEWARDESS
	GENERAL_COOK
	GENTLEMEN_HOST
	GIFT_SHOP_MANAGER
	GIFT_SHOP_SALES_ASSISTANT
	HAIR_STYLIST
	HOUSEKEEPER_ASSISTANT
	HOUSEKEEPER_CHIEF
	HR_MANAGER
	INSIDE_SALES_REPRESENTATIVE
	IT_LEAD_DEVELOPER
	IT_STAFF
	LAUNDRY_HELPER
	LAUNDRY_KEEPER
	LAUNDRY_SUPERVISOR
	LEAD_DECKHAND_
	LECTURER_SPECIAL_GUEST_SPEAKER
	LIFEGUARD
	MAITRE_D_HOTEL
	MANICURIST
	MARKETINGPR
	MARKETING_RESEARCH_ANALYST
	MASSAGE_THERAPIST
	NATURALIST
	NURSESTEWARDESS
	OPERATIONS_ADMINISTRATOR
	OPERATIONS_ANALYST
	OUTSIDE_SALES_REPRESENTATIVE
	PAYROLL_CLERK
	PERSONAL_TRAINER
	PRODUCTION_MANAGER
	PROGRAM_COORDINATOR
	PURCHASING_AGENT
	QUARTER_MASTER
	SAFETY_OFFICER
	SENIOR_BUSINESS_ANALYST
	SENIOR_HOUSEKEEPER
	SENIOR_STAFF_ACCOUNTANT
	SENIOR_STEWARDESS
	SHORE_EXCURSIONS_MANAGER
	SOCIAL_HOSTHOSTESS
	SOFTWARE_ENGINEER
	SOUND_AND_LIGHT_TECHNICIAN
	SPA_ATTENDANT
	SPA_STEWARDESS
	STAFF_ACCOUNTANT
	STAFF_CAPTAIN
	TOUR_ACCOUNTING
	WATER_SPORTS_INSTRUCTOR
	WORKER_OF_THE_PRODUCT_PLANT
	CONTRACTS_ADMINISTRATOR
	CONTRACTS_MANAGER
	CHARTERING_MANAGER
	SYSTEMS_ENGINEER
	NAVAL_ARCHITECT
	SALES_MANAGER
	BUSINESS_DEVELOPMENT_MANAGER
	SUPERINTENDENT_ELECTRICAL
	TRADER
	ANALYST
	PORT_MANAGER
	ENGINEERING_MANAGER
	MAINTENANCE_TECHNICIAN
	CAD_OPERATOR
	SG1A
	SERVICE_MANAGER
	TECHNICAL_MANAGER
	UNDERWRITER
	HEAD_OF_NETWORK_PLANNING
	NETWORK_PLANNING_MANAGER
	MARINE_SURVEYOR
	MARINE_CONSULTANT
	BUYER
	TERMINAL_MANAGER
	SUPERINTENDENT_TECHNICAL
	IT_MANAGER
	TECHNICAL_ASSISTANT
	OPERATIONS_MANAGER
	SHIP_PLANNER
	MARINE_MANAGER
	ASSOCIATE
	SHIP_OPERATOR
	CREWING_MANAGER
	SERVICE_ENGINEER
	CONTROLS_ENGINEER
	ACCOUNT_EXECUTIVE
	CLAIMS_EXECUTIVE
	RISK_ADVISOR
	ACCOUNT_MANAGER
	COMMERCIAL_MANAGER
	HUMAN_RESOURCES
	WELDING_ENGINEER
	EXPORT_CLERK
	PROJECT_MANAGER
	VETTING_SUPERINTENDENT
	PROCUREMENT_OFFICER
	SUPERINTENDENT_OPERATIONS
	OPERATIONS_ASSISTANT
	OPERATIONS_EXECUTIVE
	LOGISTICS_EXECUTIVE
	QUALITY_MANAGER
	MARINE_ENGINEER
	OPERATIONS_OFFICER
	SALES_ENGINEER
	CARGO_ENGINEER
	TECHNICAL_DIRECTOR
	PROCUREMENT_MANAGER
	CUSTOMER_SERVICE_EXECUTIVE
	BUNKER_PURCHASER
	PROJECT_ENGINEER
	BUNKER_TRADER
	RECRUITMENT_CONSULTANT
	STRUCTURAL_ENGINEER
	PROJECT_OFFICER
	PORT_ENGINEER
	CLIENT_REPRESENTATIVE
	SHIPS_AGENT
	PORT_AGENT
	CHARTERER
	SUPERINTENDENT_CARGO
	CREWING_OFFICER
	OPERATIONS_DIRECTOR
	ASSISTANT_HSE_SUPERINTENDENT
	ENVIRONMENTAL_MANAGER
	MARKETING_EXECUTIVE
	PORT_CAPTAIN
	BROKER
	HSE_MANAGER
	SURVEYOR
	ADMINISTRATION_MANAGER
	ROUSTABOUT
	DERRICKMAN
	FLOOR_MAN
	PIPEFITTER
	FABRICATOR
	COXSWAIN
	REPAIR_ENGINEER
	PERSONAL_ASSISTANT_SECRETARY
	ADMINISTRATION_SUPPORT
	PERSONAL_ASSISTANT_SECRETARY
	ADMINISTRATION_SUPPORT
	INJECTION_MOLDING_MACHINE_OPERATOR
	JUNIOR_MECHANICAL_ENGINEER
	SPRING_MACHINE_OPERATOR
	LATHE_MACHINE_OPERATOR
	SLOT_TECHNICIAN
	COMMISSIONING_ENGINEER
	COMMUNICATION_OFFICER
	HYDROGRAPHIC_SURVEYOR
	PIPE_OPERATOR