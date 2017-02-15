//DATA SS CONTROLLER - receives data for adding workouts...

var mongoose = require("mongoose");

var Exercise = mongoose.model("Exercise");


// var Data = mongoose.model("Data");
 
function dataController(){
	this.addBody = function(req, res){
		
	};
	this.getBody = function(req,res){
		
	};
	this.addExercise = function(req, res){
		
	};
	this.getFull = function(req, res){
		
	};
	this.populate = function(req, res){
		var errorList = [];
		var testExerciseList = [
			{
			active:true,
			bodyRank:0,
			name:"Squat Jump",
			uni: false,
			description:"Explosive Squat Jump"},

			{
			active:true,
			bodyRank:0,
			name:"Hang Jump Shrug",
			uni: false,
			description:"Explosive Hang Jump Shrug"},

			{
			active:true,
			bodyRank:1,
			name:"Front Squat",
			uni: false,
			description:"Knee Front Squat"},

			{
			active:true,
			bodyRank:1,
			name:"Forward Lunge",
			uni: true,
			description:"Knee Forward Lunge UNI"},

			{
			active:true,
			bodyRank:2,
			name:"Good Morning",
			uni: false,
			description:"Hip Good Morning"},

			{
			active:true,
			bodyRank:2,
			name:"Split Good Morning",
			uni: true,
			description:"Hip Split Good Morning UNI"},

			{
			active:true,
			bodyRank:3,
			name:"Bench Press",
			uni: false,
			description:"HPush Bench Press"},

			{
			active:true,
			bodyRank:3,
			name:"test111",
			uni: false,
			description:"HPush Bench Press"},

			{
			active:true,
			bodyRank:3,
			name:"test222",
			uni: false,
			description:"HPush Bench Press"},

			{
			active:true,
			bodyRank:3,
			name:"Dumbbell Bench Press",
			uni: true,
			description:"HPush Dumbbell Bench Press"},

			{
			active:true,
			bodyRank:4,
			name:"Bent-Over Row",
			uni: false,
			description:"HPull Bent-Over Row"},

			{
			active:true,
			bodyRank:4,
			name:"Bent-Over 2 Point Alternating Row",
			uni: true,
			description:"HPull Bent-Over 2 Point Alternating Row"},

			{
			active:true,
			bodyRank:5,
			name:"Shoulder Press",
			uni: false,
			description:"VPush Should Press"},

			{
			active:true,
			bodyRank:5,
			name:"Dumbbell Should Press",
			uni: true,
			description:"VPush Dumbbell Shoulder Press"},

			{
			active:true,
			bodyRank:6,
			name:"Chinup",
			uni: false,
			description:"VPull Chinup"},
			
			{
			active:true,
			bodyRank:6,
			name:"Single-Arm Pullup",
			uni: true,
			description:"VPull Single-Arm Pullup"},
			
			{
			active:true,
			bodyRank:7,
			name:"Corkscrew",
			uni: false,
			description:"Rotational Corkscrew"},
			
			{
			active:true,
			bodyRank:7,
			name:"Cable Rotation",
			uni: false,
			description:"Rotational Cable Rotation"},
			
			{
			active:true,
			bodyRank:8,
			name:"Four-Point Plank",
			uni: false,
			description:"Core Four-Point Plank"},

			{
			active:true,
			bodyRank:8,
			name:"Side Bridge",
			uni: false,
			description:"Core Side Bridge"},	
		];
		var explosive = [
			{
				active:true,
				bodyRank:0,
				name:"Squat Jump",
				uni:false,
				description:"Start in squat position with a bar. Descend like a normal squat, but on the return drive through your heels to achieve a jump."
			},
			{
				active:true,
				bodyRank:0,
				name:"Hang Jump Shrug",
				uni:false,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands at shoulder width. Bend over while keeping back completely flat, taking the bar down to just above your knees. Keep head up and eyes forward. Should look as if you are 'leaning out of a window'. Now, push into a jump. Arms should be kept as straight as possible during this movement."
			},
			{
				active:true,
				bodyRank:0,
				name:"Clean Pull",
				uni:false,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands at shoulder width, with the bar starting on the floor and close to touching your shins. Push into the ground and end the motion with the bar at about groin height. All exertion should be from your hips - your arms are not doing any of the movement."
			},
			{
				active:true,
				bodyRank:0,
				name:"Snatch Pull",
				uni:false,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands at wide 'snatch' grip, with the bar starting on the floor and close to touching your shins. Push into the ground and end the motion with the bar at about groin height. All exertion should be from your hips - your arms are not doing any of the movement."
			},
			{
				active:true,
				bodyRank:0,
				name:"Clean High Pull",
				uni:false,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands at shoulder width, with the bar starting on the floor and close to touching your shins. Push into the ground and keep your arms straight until the bar reaches groin height. All exertion should be from your hips - your arms are not doing any of the movement. Once you pass groin height, use your arms to pull the bar up to your chin."
			},
			{
				active:true,
				bodyRank:0,
				name:"Snatch High Pull",
				uni:false,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands at wide 'snatch' width, with the bar starting on the floor and close to touching your shins. Push into the ground and keep your arms straight until the bar reaches groin height. All exertion should be from your hips - your arms are not doing any of the movement. Once you pass groin height, use your arms to pull the bar up to your chin."
			},
			{
				active:true,
				bodyRank:0,
				name:"Hang Power Clean",
				uni:false,
				description: "Should width pronated hands (knuckles out) with the bar starting above your knees; knees are bent. Now, perform a high pull: pull the bar up to your chins with your arms, using your legs to shrug your body upwards to assist. Rotate your elbows to land the bar in a front squat position, above your shoulders."
			},
			{
				active:true,
				bodyRank:0,
				name:"Power Clean",
				uni:true,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands at shoulder width, with the bar starting on the floor and close to touching your shins. Push into the ground and keep your arms straight until the bar reaches groin height. All exertion should be from your hips - your arms are not doing any of the movement. Once you pass groin height, use your arms to pull the bar up to your chin. Once the bar is at your chin, rotate your elbows so that the bar lands on your shoulders in a front squat position."
			},
			{
				active:true,
				bodyRank:0,
				name:"Hang Power Snatch",
				uni:false,
				description:"Start in a hang snatch position (snatch width hands with the bar at your bent knees.) Perform a full body shrug while bending your arms to lift the bar to near your chin. Continue the motion to get the bar above your head. It is okay to lock your elbows once the bar is above your head."
			},
			{
				active:true,
				bodyRank:0,
				name:"Muscle Snatch",
				uni:false,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands in a wide 'snatch' grip, with the bar starting on the floor and close to touching your shins. Push into the ground and keep your arms straight until the bar reaches groin height. All exertion should be from your hips - your arms are not doing any of the movement. Once you pass groin height, use your arms to pull the bar up to your chin. Once the bar is at your chin, continue the motion to end up with the bar touching your forehead. Hold here for 2 seconds before lowering."
			},
			{
				active:true,
				bodyRank:0,
				name:"Power Snatch",
				uni:false,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands in a wide 'snatch' grip, with the bar starting on the floor and close to touching your shins. Push into the ground and keep your arms straight until the bar reaches groin height. All exertion should be from your hips - your arms are not doing any of the movement. Once you pass groin height, use your arms to pull the bar up to your chin. Once the bar is at your chin, continue the motion to end up with the bar above your head. It is okay to lock your elbows once the bar is fully above your head."
			},
			{
				active:true,
				bodyRank:0,
				name:"Narrow Grip Power Snatch",
				uni:false,
				description:"Hold bar with a pronated (knuckles facing outwards) grip with hands at a position that is between a wide grip 'snatch' and a shoulder width position, and the bar starting on the floor and close to touching your shins. Push into the ground and keep your arms straight until the bar reaches groin height. All exertion should be from your hips - your arms are not doing any of the movement. Once you pass groin height, use your arms to pull the bar up to your chin. Once the bar is at your chin, continue the motion to end up with the bar above your head. It is okay to lock your elbows once the bar is fully above your head."
			},
			{
				active:true,
				bodyRank:0,
				name:"One Arm Dumbbell Snatch",
				uni:false,
				description:"Place a dumbbell on the floor while squating down fully. Grip it so that your arm passes through the inside of your legs. Lift your body using your legs and your hips while keeping your arm as straight as possible. Once your body is extended and the weight is at your groin, begin bending your arms and end up with the weight above your head."
			}
		];

		var knee = [
			{
				active:true,
				bodyRank:1,
				name:"Front Squat",
				uni:false,
				description:"Rest bar on the front of your shoulders. Take deep breath to assist with 'setting' your core composure. Descend as deep as possible by pushing your hips back, keeping your shins at the same angle as your back, and keeping your feet flat. Return and exhale as you pass through the half way mark of your return."
			},
			{
				active:true,
				bodyRank:1,
				name:"Back Squat",
				uni:false,
				description:"Place bar on your neck and trapezius. Take deep breath to assist with 'setting' your core composure. Descend as deep as possible by pushing your hips back, keeping your shins at the same angle as your back, and keeping your feet flat. Return and exhale as you pass through the half way mark of your return."
			},
			{
				active:true,
				bodyRank:1,
				name:"Overhead Squat",
				uni:false,
				description:"Use a wide (snatch) grip and hold the bar directly over your head. Take deep breath to assist with 'setting' your core composure. Focus your eyes and head straight forward. As you descend, be sure to maintain a solid arch in your lower back. Return and exhale as you pass through the half way mark of your return."
			},
			{
				active:true,
				bodyRank:1,
				name:"Split Squat",
				uni:false,
				description:"Place bar in either front or rear squat position. Place one foot in front of the other, and user your rear leg to drive your body towards it while descending. Front heel should be firmly planted while the rear heel can move freely."
			},
			{
				active:true,
				bodyRank:1,
				name:"Side Squat",
				uni:false,
				description:" Start with the bar in a rear squat postion. Set your feet in wide position. Move to one direction and descend, while pushing your hip back to ensure that your feet stay flat. An eventual lean forward is normal. Exhale as your return past the half way mark. Immediately repeat movement in the other direction: this is one repitition."
			},
			{
				active:true,
				bodyRank:1,
				name:"Clean-Grip Deadlift",
				uni:false,
				description:"Bar on ground with pronated shoulder width grip. Extend your arms while driving your hips down through your feet. Exhale as you pass the half way upstroke. End in a fully extended standing position, and then reverse the movement to return to a starting position."
			},
			{
				active:true,
				bodyRank:1,
				name:"Forward Lunge",
				uni:true,
				description:"Place bar in a front or rear squat position. Extend one leg forward to a 90 degree angle, with your heel touching down first. Start to descend until your back knee almost touches the ground, and then immediately drive upward and back to the starting position."
			},
			{
				active:true,
				bodyRank:1,
				name:"Reverse Lunge",
				uni:true,
				description:"Place bar in a front or rear squat position. Move one foot as far back as possible and land it with the ball of your foot. Descend until your back knee nearly touches the ground. Reverse to return to the starting position."
			},
			{
				active:true,
				bodyRank:1,
				name:"Side Lunge",
				uni:true,
				description:"Place bar in a front or rear squat position. Stand with feet close together and set your core by inhaling. Step sideways with your right foot out as far as possible, landing flat-footed, and sink into a deep side lunge position. Reverse movement to return to a starting position, and then repeat on the left side. This is one repitition."
			},
			{
				active:true,
				bodyRank:1,
				name:"Drop Lunge",
				uni:true,
				description:"Place bar in a front or rear squat position. Set your core by inhaling and keep your feet at hip width. Step your left foot backwards and across the other leg. Try and reach as far and wide back as possible with your left leg as you descend into a deep lunge. Place the ball of your foot onto the ground, and then drop your left knee to where it almost touches the ground. Immediately reverse to the starting position, and repeat with the right leg to complete one repitition."
			},
			{
				active:true,
				bodyRank:1,
				name:"Step Up",
				uni:true,
				description:"Place bar in a front or rear squat position. Step up with one foot onto a platform, using that leg to lift your body until your other foot can land on the platform. Regain your balance on the platform, and then reverse the movement back to the ground. Complete 10 movement with one leg before switching to the other leg for another 10 movements. This is one set."
			},
			{
				active:true,
				bodyRank:1,
				name:"Lateral Stepup",
				uni:true,
				description:"Place bar in a front or rear squat position. Stand with your feet at hip width, standing next to a platform. Use your outside foot to cross over and land on the platform. Toes should be pointed straight ahead during entire movement. Use your outside leg to move your body onto the platform. Do NOT cross your feet over to get back down."
			},
			{
				active:true,
				bodyRank:1,
				name:"Bulgarian Split Squat",
				uni:true,
				description:"Place bar in a front or rear squat position. Stand in front of a platform and 'hang' a foot off of it. Bend the knee of the leg that is on the ground as if you were doing a lunge. Reverse to return to start."
			},
			{
				active:true,
				bodyRank:1,
				name:"Bulgarian Split Deadlift",
				uni:true,
				description:"Place a bar in front of you on the ground. Stand in front of a platform and 'hang' one foot off of it. Descend to a starting position by bending the knee of the foot that is planted on the ground. While keep your arms straight, extend your knee to return to a starting position while lifting the bar to groin height. Reverse to return to a starting position. This is one repitition."
			},
			{
				active:true,
				bodyRank:1,
				name:"Full Pistol Squat",
				uni:true,
				description:"Standing on the ground, extend one leg up to about 45 degrees. Lower yourself into a full squat position keeping the lifted leg off of the floor. End parallel to the floor. Make sure your planted heel stays flat the entire time. Augment with weights or workout balls."
			}
		];

		var hip = [
			{
				active:true,
				bodyRank:2,
				name:"Good Morning",
				uni:false,
				description:"Rest bar in a back squat position. Head up, shoulders back. Lower back should be arched the entire time. Inhale prior to start. Begin by pushing hips back as your chest starts to lower towards ground. Go down until your back can no longer arch. Return to start, exhale halfway through return."
			},
			{
				active:true,
				bodyRank:2,
				name:"Romanian Deadlift",
				uni:false,
				description:"A 'regular' deadlift. Start in a standing position with wrists in a pronated shoulder width position. Bar should be at groin height with a very slight bend in the knee. Head facing upwards and shoulders pinned back as your bend your hips forward. Return and exhale at halfway point of return."
			},
			{
				active:true,
				bodyRank:2,
				name:"Back Extension",
				uni:false,
				description:"Set up on back extension machine and load weight for maximum torque. One set is 10 repitions in each direction: forward, left, and right."
			},
			{
				active:true,
				bodyRank:2,
				name:"Swiss Ball Glute-Hamstring",
				uni:false,
				description:"Lying flat on the ground, place your heels up on a Swiss ball with your hip flat on the floor. Place arms on the floor. Start contracting your posterior chain muscles until your knees are at a 90 degree angle and your neck is bent, with the balls of your feet resting on the ball. The closer your arms are to your body, the more difficult the exercise. Cross arms across chest for maximum difficulty."
			},
			{
				active:true,
				bodyRank:2,
				name:"Single-Leg Good Morning",
				uni:true,
				description:"Rest bar in a back squat position. Head up, shoulders back. Lower back should be arched the entire time. Inhale prior to start. Balance on one leg. Begin by pushing hips back as your chest starts to lower towards ground. Floating leg shoudl bend backwards. Go down until your back can no longer arch. Return to start, exhale halfway through return."
			},
			{
				active:true,
				bodyRank:2,
				name:"Single-Leg Romanian Deadlift",
				uni:true,
				description:"Regular Romanian deadlift, but one leg is floating in the air. As you descend, floating leg will lift backwards. Start in a standing position with wrists in a pronated shoulder width position. Bar should be at groin height with a very slight bend in the knee. Head facing upwards and shoulders pinned back as your bend your hips forward. Return and exhale at halfway point of return."
			},
			{
				active:true,
				bodyRank:2,
				name:"Single-Leg Supine Hip Extension",
				uni:true,
				description:"Laying flat on the ground on your back, place your heel (leg straight) or foot (leg bent) up on a bench and hold the other leg up in the air. Contract posterior chain muscles to raise your hips until they are fully extended. Try to exhale on the up stroke of the exercise and inhale on the down stroke."
			},
			{
				active:true,
				bodyRank:2,
				name:"Single-Leg Swiss Ball Glute-Hamstring",
				uni:true,
				description:"Laying flat on the ground on your back, place one leg (just below your calf) up on a Swiss ball, toes pointed up with hips on the floor. Hold your other leg up in the air during the movement. As with the supine hip extension, place your arms away from the body. Attemp to keep control of the ball during the entire movement."
			}
		];

		var vPush = [
			{
				active:true,
				bodyRank:3,
				name:"Shoulder Press",
				uni:false,
				description:"Standing position with a pronated shoulder width grip. Press weight upwards. Avoid arching your back or looking up at the weight - look straight ahead. Set core at beginning of movement by inhaling and exhale as it passes your head on the upward movement. Return to shoulder height for one repitition."
			},
			{
				active:true,
				bodyRank:3,
				name:"Push Press",
				uni:false,
				description:"Standing position with a pronated shoulder width grip. Bend knees to a half squat position. Drive knees downward and extend body while driving arms upwards. Use momentum provided by knee drive to help lift the bar over your head. Weight should finish full extended above your head with you on your toes. Avoid arching your back or looking up at the weight - look straight ahead."
			},
			{
				active:true,
				bodyRank:3,
				name:"Jack Knife Pushup",
				uni:false,
				description:"With a wide pushup grip, place your feet on an elevated surface (bench or ball) and move hands inwards so that you're in a jackknife position (90 angle between chest and thighs.) Bend arms to perform a pushup with your face almost touching the ground. Push away from ground to return to starting position for one repitition."
			},
			{
				active:true,
				bodyRank:3,
				name:"Dumbbell Shoulder Press",
				uni:true,
				description:"[Using dumbbells]Standing position with a pronated shoulder width grip. Press weight upwards. Avoid arching your back or looking up at the weight - look straight ahead. Set core at beginning of movement by inhaling and exhale as it passes your head on the upward movement. Return to shoulder height for one repitition."
			},
			{
				active:true,
				bodyRank:3,
				name:"Dumbbell Push Press",
				uni:true,
				description:"[Using dumbbells] Standing position with a pronated shoulder width grip. Bend knees to a half squat position. Drive knees downward and extend body while driving arms upwards. Use momentum provided by knee drive to help lift the bar over your head. Weight should finish full extended above your head with you on your toes. Avoid arching your back or looking up at the weight - look straight ahead."
			},
			{
				active:true,
				bodyRank:3,
				name:"Dumbbell Alternating Press",
				uni:true,
				description:"Standing dumbbell shoulder press where you alternate movements between your arms - as one arm goes up, the other arm should be going down. "
			}
		];

		var vPull = [
			{
				active:true,
				bodyRank:4,
				name:"Chinup",
				uni:false,	
				description:"Supinated grip (knuckles facing inwards) with handles slightly more narrow than shoulder width."
			},
			{
				active:true,
				bodyRank:4,
				name:"Pullup",
				uni:false,	
				description:"Pronated grip (knuckles facing outwards) with hands slightly wider than shoulder width."
			},
			{
				active:true,
				bodyRank:4,
				name:"Mixed Grip Pullup",
				uni:false,	
				description:"One hand pronated, one hand supinated. Hands no wider than shoulder width."
			},
			{
				active:true,
				bodyRank:4,
				name:"Lat Pulldown",
				uni:false,	
				description:"Use lat pulldown machine with a wide grip."
			},
			{
				active:true,
				bodyRank:4,
				name:"Single Arm Pullup",
				uni:true,	
				description:"Using an assist machine, perform a single arm pullup."
			},
			{
				active:true,
				bodyRank:4,
				name:"Single Arm Lat Pulldown",
				uni:true,	
				description:"Use lat pulldown machine with a single hand attachment. Sit on floor for greater range of motion."
			},
			{
				active:true,
				bodyRank:4,
				name:"Side to Side Pullup",
				uni:true,	
				description:"Using a pronated, slightly wider than shoulder width grip, perform a pullup while biasing your body towards one side. Lower and repeat to the other side."
			}
		];

		var hPush = [
			{
			 	active: true,
				bodyRank:5,
				name:"Bench Press",
				uni:false,
				description:"Slightly wider than shoulder width grip. Bring bar down until it touches your chest."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Incline Bench Press",
				uni:false,
				description:"Set bench angle to ~45 degrees. Slightly wider than shoulder width grip. Bring bar down until it touches your chest."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Close-Grip Bench Press",
				uni:false,
				description:"Place your hands so that there is only six inches of seperation between them on the bar. Keep elbows tight to your body as you lower the weight. Bar will touch your body at a slightly lower position than a regular bench press."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Close-Grip Incline Bench Press",
				uni:false,
				description:"Set incline of bench to ~45 degrees. Place your hands so that there is only six inches of seperation between them on the bar. Keep elbows tight to your body as you lower the weight. Bar will touch your body at a slightly lower position than a regular bench press."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Reverse Grip Bench Press",
				uni:false,
				description:"Grip the bar so that your wrists are facing your face. Slightly wider than shoulder width grip. Bring bar down until it touches your chest."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Pushup",
				uni:false,
				description:"Hands should be slightly wider than shoulder-width apart. Lower your body until your chest touches the floor. Optionally performed in the incline position, where your feet are propped up on either a ball or a bench."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Dip",
				uni:false,
				description:"Being with your arms extended on a dip frame machine. Begin to bend your arms. Upper arms should be parallel with ground by the end of the exercise. Try and use the close grip as it will help prevent shoulder injuries."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Dumbbell Bench Press",
				uni:true,
				description:"At their lowest postion, the edges of the dumbbells should be touching the sides of your chest. Can be performed on a swiss ball for added stress."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Dumbbell Incline Bench Press",
				uni:true,
				description:"Set bench to a ~45 degree angle. At their lower postion, the edges of the dumbbells should be touching the sides of your chest."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Dumbbell Alternating Bench Press",
				uni:true,
				description:"At their lowest postion, the edges of the dumbbells should be touching the sides of your chest. Alternate the movement of the dumbbells - as one is going up, one should be going down. Can be performed on a swiss ball for added stress."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"One-Arm Dumbbell Bench Press",
				uni:true,
				description:"Use your core to stablize your body from rotating over while performing a dumbbell bench press with just one arm. Other arm should be free of weight but can be placed over stomach to aid in stablizing."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"One-Arm Dumbbell Incline Bench Press",
				uni:true,
				description:"Set bench to ~45 degress. Use your core to stablize your body from rotating over while performing a dumbbell bench press with just one arm. Other arm should be free of weight but can be placed over stomach to aid in stablizing."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Side-to-Side Pushup",
				uni:true,
				description:"Hand position should be slightly wider than a regular pushup. As your descend towards the floor, also move your torso towards one side. Attempt to touch your nose to your hand while that hand is in a wide position."
			},
			{
			 	active: true,
				bodyRank:5,
				name:"Standing Cable Chest Press",
				uni:true,
				description:"Can be done with one arm or both arms at the same time. Standing from a stable base of support (both feet squarely planted) and the handles near your pecs with your elbows behind you, drive the loads as if your are punching at something. Your hands should be in a 'close grip' position."
			}
		];

		var hPull = [
			{
			 	active: true,
				bodyRank:6,
				name:"Bent-Over Row",
				uni:false,
				description:"Start with your feet at shoulder width and with your hands slightly wider than shoulder-width on a bar. Lower torso so that it's at a 46 degree angle from your hips. Knees should naturally bend very slightly, and your back should be straight. Pull the bar upwards until it makes contact with your lower rib cage. Lower the bar until your arms are comple extended."
			},
			{
			 	active: true,
				bodyRank:6,
				name:"Horizontal Pullup",
				uni:false,
				description:"Place a bar on a rack, and place a bench such that it can support your feet while you hang from the bar with your arms. Pull your body upwards towards to bar as if you were doing an inverted pullup. Different foot positions can be used to alter the difficulty of the exercise."
			},
			{
			 	active: true,
				bodyRank:6,
				name:"Standing Cable Row to Ribcage",
				uni:false,
				description:"In a standing position, pull a cable-stayed weight towards your ribcage. Feet should be shoulder-width apart and your knees should be slightly bent."
			},
			{
			 	active: true,
				bodyRank:6,
				name:"Standing Cable Row to Neck",
				uni:false,
				description:"In a standing position and using a rope attachment on a cable-stayed weight, pull your hands towards your neck. Begin to stretch the handle grips of the rope apart so that you pull it around your neck."
			},
			{
			 	active: true,
				bodyRank:6,
				name:"Bent-Over Dumbbell Alternating Row",
				uni:true,
				description:"Feet are shoulder-width apart and torso is bent forward to at least a 46 degree angle. Hold the dumbbells with your palms facing inwards. Pull one dumbbell upwards. When it reaches the top of your range of motion, begin to descend it while beginning the upwards motion of the other hand."
			},
			{
			 	active: true,
				bodyRank:6,
				name:"One-Arm Standing Cable Row",
				uni:true,
				description:"In a standing position, use a cable-stayed machine to bring your hand towards your ribcage. Can be done in an 'around the world' rotation with pulls to your neck, ribs, and then gut."
			},
			{
			 	active: true,
				bodyRank:6,
				name:"One-Arm Horizontal Pushup",
				uni:true,
				description:"Set up for a regular horizontal pullup by putting a bar on a weight frame and placing your feet on the ground or on a bench, with your body hanging with your hands from below the bar. Begin to pull your body towards the bar, but remove one hand and reach upwards as if you are attemping to touch the ceiling with it."
			}
		];

		var rotational = [
			{
				active: true,
				bodyRank: 7,
				name:"Seated Russian Twist",
				uni:false,
				description:"Sit down in sit up position, with your torso at ~45 degrees (halfway). Hold a weight plate of a medicine ball in front of you, and rotate your body to touch the weight to the ground besides and behind you. Be sure to rotate your entire torso instead of just extending your arms. Change directions to move the load back to its starting position, and then, without stoping, move it to the other side and then return. This is one repitition."
			},
			{
				active: true,
				bodyRank: 7,
				name:"Corkscrew",
				uni:false,
				description:"Hold a weight plate near your hips while in a standing position with your feet shoulder-width apart. Squat down and twist to your right, attempting to touch the weight to the floor behind your right heel. Your left heel may come off the floor slightly. Then, as fast as you can, drive the weight back upwards and across your body, finishing with the weight above and behind your left shoulder. From this position, repeating the entire movement again for further repititions on one side."
			},
			{
				active: true,
				bodyRank: 7,
				name:"Swiss Ball Weight Roll",
				uni:false,
				description:"Place your back on a swiss ball and hold a weight plate above your torso. Your thighs should be parallel with the ground. Rotate your chest to one side while keeping your arms extended and trying to maintain the position of your hips. You should finish the movement with the outside of your shoulder being the last point of contact with the ball. It is not necessary for the weight to touch the floor. Repeat the movement to the other side for one repitition."
			},
			{
				active: true,
				bodyRank: 7,
				name:"Windshield Wiper",
				uni:false,
				description:"Lay on the ground and extend your arms to your sides to act as a support. Put your legs up so that they are perpendicular to the ground. Rotate them to one side, and the all the way to the other side for one repition. You may hold a weight ball between your feet for added resistance."
			},
			{
				active: true,
				bodyRank: 7,
				name:"Cable Rotation",
				uni:false,
				description:"Standing at a cable-stayed machine with your feet in slightly wider than shoulder-width. Hold the cable out in front of you with the handle at rib-cage height. Rotate as far as possible, bringing the cable in front of you while keeping your feet planted. Attempt to rotate to 180 degrees. Slowly repeat the movement in reverse to move back the the start position."
			},
			{
				active: true,
				bodyRank: 7,
				name:"Cable Reverse Wood Chop",
				uni:false,
				description:"Standing at a cable-stayed machine with your feet in slightly wider than shoulder-width. Pulley is in its lowest position. With a dual handle rope, grip the handles at knee height with your back bent into the weight to the side. As you attempt to lift the weight upwards, keep your arms as extended as possible so that the weight is being lifted with your core. Finish the movement with your arms extended above your head on the other side from which they started."
			},
			{
				active: true,
				bodyRank: 7,
				name:"Cable Wood Chop",
				uni:false,
				description:"Standing at a cable-stayed machine with your feet in slightly wider than shoulder-width. Pulley is in its highest position. with a dual handle rope, grip the handles above your head, with your torso twisted slightly to one side. Pull the weight downwards, across your body with your arms extended, and attemp to touch the floor on your other side. Keep your feet planted the entire time. Reverse the movement to return to the starting position."
			},
			{
				active: true,
				bodyRank: 7,
				name:"Cable Rotating Crunch",
				uni:false,
				description:"Face a cable-stayed machine with a dual handle rope attachment. Pulley in highest position. With arms extended and body upright, pull the rope handles down and to one side as your crunch down at the torso. Attemp to rotate as far as possible, while keeping your feet planted towards the cable stack. Return in reverse, and then repeat for the other side to complete one repitition."
			},
			{
				active: true,
				bodyRank: 7,
				name:"Cable Rotating Extension",
				uni:false,
				description:"Face a cable-stayed machine with a dual handle rope attachment. Pulley in lowest position. With arms in front of you and your torso bent forward at about 45 degrees and your legs slightly bent, pull the weight upwards, as far as you can, and to one side. Legs will finish in a fully extended position."
			}
		];

		var core = [
			{
				active: true,
				bodyRank: 8,
				name:"Plank",
				uni:false,
				description:"Standard plank that can be done in either 4, 3, or 2 point positions. Place weight on back to increase stress."
			},
			{
				active: true,
				bodyRank: 8,
				name:"Side Bridge",
				uni:false,
				description:"Standard side bridge, with arm at ground on either your elbow (easy) or hand (hard)."
			},
			{
				active: true,
				bodyRank: 8,
				name:"Dynamic Plank",
				uni:false,
				description:"Start in a normal plank position, but lift your hips upwards and then downwards to add movement to the plank."
			},
			{
				active: true,
				bodyRank: 8,
				name:"Plank Walkup",
				uni:false,
				description:"Start in normal plank position with your eblows on the ground, but then walk up each arm individually to a pushup position."
			},
			{
				active: true,
				bodyRank: 8,
				name:"Plank with weight transfer.",
				uni:false,
				description:"Regular plank position with a dumbbell to one side of your body. Pick the dumbbell up with one hand, pass it off to your other, and place it on the othe side of your body."
			},
			{
				active: true,
				bodyRank: 8,
				name:"Core Row",
				uni:false,
				description:"Push up position with your hands griping dumbbells that are on the ground. Row one hand at a time, with the dumbbell coming up to your chest."
			},
			{
				active: true,
				bodyRank: 8,
				name:"T-Push and Hold",
				uni:false,
				description:"Do a normal pushup, but on the upward stroke, lift one hand and move your body (body feet on the ground) into a position resembling a side bridge. Keep your planted arm extended, and reach your other arm upwards. Your body should resemble a capital T on its side."
			}
		];

		var readList = [explosive, knee, hip, vPush, vPull, hPush, hPull, rotational, core];

		for(bodyList of readList){
			for(item of bodyList){
				tempAdd = new Exercise(item);
				tempAdd.save(function(err, info){
					if(err){
						errorList.push(err);
						console.log(err);
					}
					else{
						console.log(info);
					};
				});
			};
		};
		console.log("THE ERROR LIST IS:>>>>>>>>>>>>>>>>>>>>>", errorList);
	};
};

module.exports = new dataController;