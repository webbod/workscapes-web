import Archetype from "../models/archetype";

const archetypes: Archetype[]  = [
    {
        "theme" : 1,
        "rank" : 1,
        "behaviours" : ["private", "reserved"],
        "title": "Sentinel",
        "description": "Steadfast and watchful, the Sentinel guards the team's integrity, valuing precision and discretion over grand displays.",
        "quote": "The strongest foundations are built in silence.",
        "strengths": ["Vigilant observer", "Unwavering commitment", "High focus on structure and detail"],
        "needs": ["Clear expectations", "Privacy for reflection", "Trust in their judgment"],
        "flashpoints": ["Being forced into the spotlight", "Ambiguous or chaotic environments"],
        "happypaths": ["Maintaining harmony within a trusted team", "Achieving meaningful impact behind the scenes"]
    },
    {
        "theme" : 1,
        "rank" : 2,
        "behaviours" : ["private", "balanced assertiveness",],
        "title": "Watchman",
        "description": "Balanced and deliberate, the Watchman monitors the ebb and flow of ideas and actions, ensuring everything aligns with the bigger picture.",
        "quote": "Perspective transforms the ordinary into the extraordinary.",
        "strengths": ["Strategic foresight", "Adaptability", "Objective decision-making"],
        "needs": ["Time to process information", "A clear view of objectives", "Freedom to maintain neutrality"],
        "flashpoints": ["Pressure to take sides", "Disruptions to their contemplative rhythm"],
        "happypaths": ["Finding alignment between vision and action", "Fostering clarity in complex situations"]
    },
    {
        "theme" : 1,
        "rank" : 3,
        "behaviours" : ["private", "assertive"],
        "title": "Envoy",
        "description": "Charismatic and composed, the Envoy bridges gaps with thoughtful communication and a calm assertiveness that inspires trust.",
        "quote": "Diplomacy opens doors that strength cannot.",
        "strengths": ["Building meaningful connections", "Negotiating complex dynamics", "Balancing assertiveness with tact"],
        "needs": ["Mutual respect in interactions", "A clear mission to champion", "Opportunities to engage with diverse perspectives"],
        "flashpoints": ["Being undermined or dismissed", "A lack of alignment with personal values"],
        "happypaths": ["Uniting disparate voices toward a common goal", "Leading with purpose and conviction"]
    },
    {
        "theme" : 1,
        "rank" : 4,
        "behaviours" : ["balanced openness", "reserved"],
        "title": "Guardian",
        "description": "A calm anchor in turbulent waters, the Guardian values stability and ensures the team stays grounded amid uncertainty.",
        "quote": "The storm may rage, but the roots remain unshaken.",
        "strengths": ["Providing emotional steadiness", "Reliable problem-solving", "Championing consistency and fairness"],
        "needs": ["Clear roles and responsibilities", "A team that values loyalty", "Patience for their measured approach"],
        "flashpoints": ["Rushed decisions under pressure", "Disrespect for established protocols"],
        "happypaths": ["Creating a sense of safety and belonging", "Watching their efforts bring long-term success"]
    },
    {
        "theme" : 1,
        "rank" : 5,
        "behaviours" : ["balanced openness", "balanced assertiveness"],
        "title": "Arbiter",
        "description": "A seeker of balance, the Arbiter resolves conflicts with impartial wisdom, finding solutions that honor every voice.",
        "quote": "Balance is not compromise—it is harmony in action.",
        "strengths": ["Resolving disputes with clarity", "Evaluating multiple perspectives", "Maintaining fairness under pressure"],
        "needs": ["Openness to their methods", "Respect for their impartial stance", "Time to weigh competing priorities"],
        "flashpoints": ["Being forced into bias", "Unresolved tension among team members"],
        "happypaths": ["Seeing fairness restored in challenging situations", "Elevating understanding through reasoned action"]
    },
    {
        "theme" : 1,
        "rank" : 6,
        "behaviours" : ["balanced openness", "assertive"],
        "title": "Resolute",
        "description": "Decisive and determined, the Resolute leads with purpose, pushing through obstacles with unwavering focus.",
        "quote": "Strength lies in the will to persevere.",
        "strengths": ["Taking decisive action", "Driving results under pressure", "Inspiring confidence through their determination"],
        "needs": ["Clarity of purpose", "Support for their vision", "Acknowledgment of their efforts"],
        "flashpoints": ["Lack of follow-through from others", "Unnecessary bureaucracy or delays"],
        "happypaths": ["Seeing tangible progress toward ambitious goals", "Inspiring others with their relentless drive"]
    },
    {
        "theme" : 1,
        "rank" : 7,
        "behaviours" : ["open", "reserved"],
        "title": "Advisor",
        "description": "Quietly insightful, the Advisor offers wisdom that guides teams toward thoughtful, impactful decisions.",
        "quote": "True strength lies in the power to listen.",
        "strengths": ["Providing thoughtful counsel", "Encouraging reflective growth", "Spotting opportunities others miss"],
        "needs": ["Respect for their input", "Time to develop meaningful insights", "An environment that values nuance"],
        "flashpoints": ["Being overlooked or ignored", "Superficial approaches to complex issues"],
        "happypaths": ["Seeing their insights lead to profound change", "Helping others reach their potential"]
    },
    {
        "theme" : 1,
        "rank" : 8,
        "behaviours" : ["open", "balanced assertiveness"],
        "title": "Diplomat",
        "description": "Empathetic and strategic, the Diplomat weaves collaboration into the fabric of success, harmonizing diverse ideas.",
        "quote": "Every thread strengthens the tapestry.",
        "strengths": ["Facilitating seamless collaboration", "Building bridges between opposing views", "Navigating complexity with empathy"],
        "needs": ["Open communication channels", "Trust in their relational skills", "Opportunities to align stakeholders"],
        "flashpoints": ["Persistent conflict without resolution", "Being excluded from key discussions"],
        "happypaths": ["Forging lasting partnerships", "Creating unity from discord"]
    },
    {
        "theme" : 1,
        "rank" : 9,
        "behaviours" : ["open", "assertive"],
        "title": "Vanguard",
        "description": "Bold and driven, the Vanguard leads from the front, inspiring others with their vision and confident actions.",
        "quote": "The first step forward defines the path for all.",
        "strengths": ["Charting bold new directions", "Inspiring confidence in uncertain times", "Energizing teams with their passion"],
        "needs": ["Autonomy to act", "Recognition for their leadership", "Challenges that test their mettle"],
        "flashpoints": ["Micromanagement", "Resistance to innovation or change"],
        "happypaths": ["Seeing their ideas take shape in transformative ways", "Rallying others around a shared vision"]
    },
    {
        "theme" : 2,
        "rank" : 1,
        "behaviours": ["Visual Communicator", "Practical Thinker"],
        "title": "Sculptor",
        "description": "A master of transformation, shaping raw ideas into refined solutions with clarity and precision. The Sculptor sees the potential within chaos and chisels away until only brilliance remains.",
        "quote": "Every masterpiece begins as a block of stone.",
        "strengths": ["Transforming concepts into tangible outcomes", "Excelling in visual clarity and practicality", "Balancing creativity with structured execution"],
        "needs": ["Opportunities to refine and perfect ideas", "Freedom to craft solutions visually and hands-on", "Clear objectives to shape their work"],
        "flashpoints": ["Unfinished or vague ideas handed off without direction", "Rigid systems that stifle their creativity"],
        "happypaths": ["Creating lasting impact through their crafted work", "Seeing their visions materialize into reality"]
    },
    {
        "theme" : 2,
        "rank" : 2,        
        "behaviours": ["Visual Communicator", "Balanced Thinker"],
        "title": "Artisan",
        "description": "A master of combining artistry and logic, creating solutions that are as beautiful as they are functional.",
        "quote": "Art and reason are two sides of the same coin.",
        "strengths": ["Merging creativity with strategy", "Designing elegant solutions", "Balancing aesthetics with utility"],
        "needs": ["Freedom to experiment and explore", "Opportunities to express creativity", "Support for their design-oriented vision"],
        "flashpoints": ["Rigid, unimaginative environments", "Dismissal of the aesthetic value of their work"],
        "happypaths": ["Creating meaningful and beautiful outcomes", "Innovating in a way that inspires others"]
    },
    {
        "theme" : 2,
        "rank" : 3,
        "behaviours": ["Visual Communicator", "Theory Oriented"],
        "title": "Designer",
        "description": "A creative thinker who brings ideas to life, seeing patterns and possibilities others overlook.",
        "quote": "What the mind can conceive, the eyes can inspire.",
        "strengths": ["Spotting hidden opportunities", "Inspiring through bold visuals", "Synthesizing theory into compelling ideas"],
        "needs": ["Time to explore abstract concepts", "Freedom to share their vision", "Collaborative partnerships to ground their ideas"],
        "flashpoints": ["Limited scope for imagination", "Criticism without constructive feedback"],
        "happypaths": ["Translating visions into impactful ideas", "Inspiring teams with their unique perspective"]
    },
    {
        "theme": 2,
        "rank": 4,
        "behaviours": ["Balanced Communication Style", "Practical Thinker"],
        "title": "Engineer",
        "description": "A pragmatic planner who combines clear communication with structured execution, transforming ideas into tangible results through careful design and action.",
        "quote": "Every goal is a path waiting to be mapped.",
        "strengths": ["Bridging communication gaps", "Designing clear, actionable plans", "Executing projects with precision and focus"],
        "needs": ["Support for their methodical approach", "Clarity in roles and objectives", "Opportunities to implement their solutions"],
        "flashpoints": ["Lack of focus in execution", "Misunderstanding of technical details"],
        "happypaths": ["Seeing plans come to life", "Solving problems through clear engineering solutions"]
    },
    {
        "theme": 2,
        "rank": 5,
        "behaviours": ["Balanced Communication Style", "Balanced Thinker"],
        "title": "Presenter",
        "description": "A skilled communicator who blends clarity with adaptability, presenting complex ideas in an accessible way, while uniting people through shared understanding.",
        "quote": "True leadership lies in understanding every voice at the table.",
        "strengths": ["Explaining complex ideas clearly", "Engaging diverse audiences", "Facilitating understanding across teams"],
        "needs": ["Opportunities to present and communicate ideas", "Room to adapt messages to diverse groups", "Acknowledgment of their communication expertise"],
        "flashpoints": ["Unclear communication channels", "Over-simplification of complex ideas"],
        "happypaths": ["Successfully presenting ideas", "Building consensus through effective communication"]
    },
    {
        "theme": 2,
        "rank": 6,
        "behaviours": ["Balanced Communication Style", "Theory Oriented"],
        "title": "Scientist",
        "description": "An inquisitive thinker who excels at exploring complex concepts and turning abstract theories into clear, understandable insights that can inform action.",
        "quote": "The answers lie hidden in the details.",
        "strengths": ["Exploring and understanding complex systems", "Communicating theoretical insights", "Applying rigorous analysis to solve problems"],
        "needs": ["Time for research and deep analysis", "Respect for their intellectual process", "Opportunities to share and test their findings"],
        "flashpoints": ["Pressure to provide quick answers", "Dismissal of theoretical approaches"],
        "happypaths": ["Uncovering hidden patterns", "Sharing groundbreaking insights with others"]
    },
    {
        "theme" : 2,
        "rank" : 7,
        "behaviours": ["Verbal Communicator", "Practical Thinker"],
        "title": "Orator",
        "description": "A master communicator who blends thoughtful analysis with charismatic delivery, inspiring teams to think and act boldly.",
        "quote": "Words are the spark that ignite ideas into action.",
        "strengths": ["Charismatic communication", "Balancing logic with relatability", "Motivating teams through inspiration"],
        "needs": ["Support for their leadership style", "Opportunities to address and inspire", "Freedom to balance analysis and action"],
        "flashpoints": ["Dismissive audiences", "Environments that undervalue communication"],
        "happypaths": ["Rallying teams with their words", "Transforming ideas into shared action"]
    },    
    {
        "theme" : 2,
        "rank" : 8,
        "behaviours": ["Verbal Communicator", "Balanced Thinker"],
        "title": "Storyteller",
        "description": "A dynamic communicator who weaves ideas into compelling narratives, making the practical engaging and relatable.",
        "quote": "Every idea is a story waiting to be told.",
        "strengths": ["Engaging and inspiring others", "Turning practical lessons into stories", "Bringing teams together with shared meaning"],
        "needs": ["Opportunities to tell stories", "Freedom to connect with diverse audiences", "Recognition of their narrative power"],
        "flashpoints": ["Dry, uninspired communication", "Disinterest in their storytelling efforts"],
        "happypaths": ["Inspiring action through storytelling", "Building shared vision and purpose"]
    },
    {
        "theme" : 2,
        "rank" : 9,
        "behaviours": ["Verbal Communicator", "Theory Oriented"],
        "title": "Philosopher",
        "description": "A deep thinker who challenges assumptions, sharing bold insights and engaging others in meaningful discourse.",
        "quote": "To question is to expand the limits of understanding.",
        "strengths": ["Challenging status quo", "Engaging in meaningful debates", "Communicating complex theories eloquently"],
        "needs": ["Freedom to explore deep ideas", "Audiences who value their insights", "Time for reflection and refinement"],
        "flashpoints": ["Resistance to their intellectual explorations", "Superficial or dismissive interactions"],
        "happypaths": ["Fostering meaningful change through ideas", "Engaging deeply with curious minds"]
    },
    {
        "theme" : 3,
        "rank" : 1,
        "behaviours": ["Detail-Oriented", "Present-Focused"],
        "title": "Maven",
        "description": "A master of precision, uncovering hidden opportunities by diving deeply into the here and now.",
        "quote": "Every thread matters in the fabric of success.",
        "strengths": ["Spotting hidden flaws and opportunities", "Executing with meticulous care", "Mastery of incremental improvements"],
        "needs": ["Space to work deeply and uninterrupted", "Recognition for the value of precision", "Clarity in immediate goals"],
        "flashpoints": ["Overwhelmed by abstract expectations", "Dismissal of their attention to detail"],
        "happypaths": ["Crafting perfection one detail at a time", "Elevating immediate results into lasting impact"]
    },
    {
        "theme" : 3,
        "rank" : 2,
        "behaviours": ["Detail-Oriented", "Balanced focus"],
        "title": "Weaver",
        "description": "An artisan of foresight, weaving together the fine threads of today to shape a brighter tomorrow.",
        "quote": "The seeds of the future are planted in the finest details of the present.",
        "strengths": ["Bridging the gap between precision and vision", "Balancing execution with anticipation", "Ensuring today’s work aligns with tomorrow’s goals"],
        "needs": ["Opportunities to plan with precision", "Flexibility to adapt their methods", "Recognition of their ability to harmonize scales"],
        "flashpoints": ["Short-sighted decisions that disregard detail", "Pressure to act without planning"],
        "happypaths": ["Seeing their careful plans come to fruition", "Building lasting value through thoughtful foresight"]
    },
    {
        "theme" : 3,
        "rank" : 3,
        "behaviours": ["Detail-Oriented", "Future-Focused"],
        "title": "Inventor",
        "description": "A bold creator, building tomorrow’s solutions with precise hands and a forward-looking mind.",
        "quote": "Innovation is found in the smallest details and the boldest dreams.",
        "strengths": ["Creative problem-solving", "Anticipating future needs with precision", "Designing practical, innovative solutions"],
        "needs": ["Space to experiment and refine", "Support for exploring unconventional ideas", "Encouragement for their inventive spirit"],
        "flashpoints": ["Stifled by rigid processes", "Misunderstood for focusing on what’s ahead"],
        "happypaths": ["Seeing their innovations shape the future", "Solving meaningful problems with creativity"]
    },
    {
        "theme" : 3,
        "rank" : 4,
        "behaviours": ["Balanced horizons", "Present-Focused"],
        "title": "Anchor",
        "description": "A steady force, grounding teams in the reality of the present and keeping progress on course.",
        "quote": "Progress begins with solid ground beneath our feet.",
        "strengths": ["Providing stability in chaotic situations", "Grounding decisions in practicality", "Ensuring immediate tasks are executed flawlessly"],
        "needs": ["Clarity of priorities", "Trust in their ability to stabilize progress", "Respect for their focus on the here and now"],
        "flashpoints": ["Overburdened by long-term uncertainties", "Pushed into abstract or unclear goals"],
        "happypaths": ["Guiding teams through the storm with calm precision", "Seeing immediate actions create tangible results"]
    },
    {
        "theme" : 3,
        "rank" : 5,
        "behaviours": ["Balanced horizons", "Balanced focus"],
        "title": "Navigator",
        "description": "A master of balance, charting pathways through the present while keeping an eye on the horizon.",
        "quote": "The best course is found in the balance of here and beyond.",
        "strengths": ["Harmonizing immediate action with future goals", "Adapting strategies as contexts change", "Maintaining momentum across scales"],
        "needs": ["Opportunities to align short-term and long-term objectives", "Flexibility to adjust their approach", "Recognition for their ability to balance competing demands"],
        "flashpoints": ["Lack of alignment between short- and long-term goals", "Pressure to prioritize one scale over another"],
        "happypaths": ["Leading teams with balanced foresight and action", "Creating enduring success through adaptive thinking"]
    },
    {
        "theme" : 3,
        "rank" : 6,
        "behaviours": ["Balanced horizons", "Future-Focused"],
        "title": "Trailblazer",
        "description": "An intrepid pioneer, forging ahead with a clear view of the path forward, while bringing others along.",
        "quote": "The path forward is paved with purpose and courage.",
        "strengths": ["Setting ambitious yet achievable visions", "Inspiring others with a clear plan of action", "Balancing innovation with practicality"],
        "needs": ["Freedom to pursue bold ideas", "Support for their long-term goals", "Trust in their ability to lead through uncertainty"],
        "flashpoints": ["Resistance to forward-thinking ideas", "Undermined by lack of support for vision"],
        "happypaths": ["Inspiring others to embrace the journey ahead", "Seeing their vision come to life through teamwork"]
    },
    {
        "theme" : 3,
        "rank" : 7,
        "behaviours": ["Big Picture Thinker", "Present-Focused"],
        "title": "Seer",
        "description": "A visionary grounded in the present, offering profound insight that shapes decisions today.",
        "quote": "The present holds all the clues to the bigger picture.",
        "strengths": ["Connecting the present to the broader context", "Providing clarity and insight in the moment", "Empowering teams with meaningful understanding"],
        "needs": ["Opportunities to guide with their insight", "Freedom to connect ideas across scales", "Acknowledgment of their unique perspective"],
        "flashpoints": ["Dismissal of their broader vision", "Being siloed into overly tactical roles"],
        "happypaths": ["Illuminating paths forward with their perspective", "Shaping meaningful outcomes through grounded wisdom"]
    },
    {
        "theme" : 3,
        "rank" : 8,
        "behaviours": ["Big Picture Thinker", "Balanced focus"],
        "title": "Cartographer",
        "description": "A meticulous mapmaker of possibilities, charting the terrain between vision and reality with precision and foresight.",
        "quote": "Every great journey begins with a map, drawn with care and imagination.",
        "strengths": ["Connecting vision to actionable strategies", "Balancing innovation with practicality", "Guiding teams with clarity and foresight"],
        "needs": ["Freedom to map broad strategies", "Support to implement their plans", "Opportunities to align vision with execution"],
        "flashpoints": ["Overwhelmed with unnecessary details", "Resistance to forward-thinking ideas"],
        "happypaths": ["Seeing their maps guide others to success", "Creating strategies that stand the test of time"]
    },
    {
        "theme" : 3,
        "rank" : 9,
        "behaviours": ["Big Picture Thinker", "Future-Focused"],
        "title": "Pathfinder",
        "description": "A daring explorer of ideas, charting bold courses that redefine what is possible.",
        "quote": "The unknown isn’t a barrier; it’s an opportunity.",
        "strengths": ["Seeing opportunities where others see challenges", "Charting bold, transformative courses", "Inspiring teams to dream and achieve"],
        "needs": ["Support for their ambitious ideas", "Freedom to explore and innovate", "Encouragement to take risks"],
        "flashpoints": ["Fear of the unknown holding others back", "Over-restriction of their creative freedom"],
        "happypaths": ["Seeing bold ideas become reality", "Inspiring others to embrace and navigate the unknown"]
    }, 
    {
        "theme" : 4,
        "rank" : 1,
        "behaviours": ["Action-Oriented", "Intuitive"],
        "title": "Maverick",
        "description": "An unconventional thinker who thrives in dynamic environments, blazing trails with instinct and daring.",
        "quote": "Where others see obstacles, I see opportunities.",
        "strengths": ["Quick to adapt in chaos", "Spotting unconventional solutions", "Inspiring bold action"],
        "needs": ["Freedom to explore new ideas", "Encouragement for risk-taking", "A fast-paced environment"],
        "flashpoints": ["Resistance to change", "Excessive focus on structure"],
        "happypaths": ["Succeeding through bold experimentation", "Turning intuition into tangible breakthroughs"]
    },
    {
        "theme": 4,
        "rank": 2,
        "behaviours": ["Action-Oriented", "Balanced Reasoning"],
        "title": "Conductor",
        "description": "A master of momentum and precision, bringing focus and direction to purposeful action.",
        "quote": "Every step forward is a step with intention.",
        "strengths": [
          "Harnessing energy to drive progress.",
          "Prioritizing action while ensuring logical decisions.",
          "Adapting plans swiftly to meet evolving needs."
        ],
        "needs": [
          "Clear objectives to guide decisive action.",
          "Freedom to prioritize and execute effectively.",
          "A balance between strategic vision and immediate results."
        ],
        "flashpoints": [
          "Ambiguity or lack of clear priorities.",
          "Environments where actions lack purpose or alignment."
        ],
        "happypaths": [
          "Building momentum that drives sustainable results.",
          "Delivering outcomes with precision and efficiency."
        ]
      },
    {
        "theme" : 4,
        "rank" : 3,        
        "behaviours": ["Action-Oriented", "Analytical"],
        "title": "Tactician",
        "description": "A master of execution who turns complexity into results, balancing decisive action with sharp analysis.",
        "quote": "Precision in action leads to excellence in outcomes.",
        "strengths": ["Streamlining complex tasks", "Balancing speed and accuracy", "Turning data into action"],
        "needs": ["Clear objectives", "Access to accurate information", "Freedom to execute efficiently"],
        "flashpoints": ["Ambiguity in roles", "Disruptions to their workflow"],
        "happypaths": ["Delivering consistent results", "Mastering operational systems"]
    },
    {
        "theme": 4,
        "rank": 4,
        "behaviours": ["Balanced Engagement", "Intuitive"],
        "title": "Scout",
        "description": "An adaptable guide who uses intuition and collaboration to forge meaningful paths through the unknown.",
        "quote": "Every path is made clearer by shared wisdom and insight.",
        "strengths": [
          "Building trust through balanced collaboration.",
          "Intuitively sensing the best course of action for diverse needs.",
          "Inspiring confidence by harmonizing logic and instinct."
        ],
        "needs": [
          "A team or group willing to contribute and adapt together.",
          "Freedom to weave intuition into practical decision-making.",
          "Support in environments where compromise and creativity are key."
        ],
        "flashpoints": [
          "Overly individualistic settings that dismiss collaboration.",
          "Rigid expectations that ignore the need for adaptability."
        ],
        "happypaths": [
          "Creating harmony and progress through shared exploration.",
          "Turning collective intuition into innovative solutions."
        ]
    },
    {
        "theme" : 4,
        "rank" : 5, 
        "behaviours": ["Balanced Engagement", "Balanced Reasoning"],
        "title": "Dancer",
        "description": "An elegant navigator of complexity, moving seamlessly between interaction and reflection to create harmony in every step.",
        "quote": "In every movement, there is purpose and balance.",
        "strengths": ["Navigating dynamic environments with poise", "Bringing harmony to diverse perspectives", "Adapting fluidly to shifting priorities"],
        "needs": ["Freedom to move with their own rhythm", "A team that values grace under pressure", "Opportunities to refine complex dynamics"],
        "flashpoints": ["Rigid expectations that stifle flexibility", "Chaotic environments without structure"],
        "happypaths": ["Bringing flow and balance to challenging situations", "Finding joy in mastering complexity with grace"]
    },
    {
        "theme" : 4,
        "rank" : 6, 
        "behaviours": ["Balanced Engagement", "Analytical"],
        "title": "Analyst",
        "description": "A pragmatic evaluator who bridges logic with collaboration, fostering clarity and direction through balanced reasoning and thoughtful interaction.",
        "quote": "Insight grows when logic and connection meet.",
        "strengths": ["Breaking down complex problems", "Facilitating thoughtful discussions", "Creating actionable insights"],
        "needs": ["Opportunities to analyze deeply", "A collaborative environment", "Access to relevant data"],
        "flashpoints": ["Disregard for their logical input", "Overly emotional decision-making environments"],
        "happypaths": ["Clarifying complexity for teams", "Driving progress through reasoned collaboration"]
    },
    {
        "theme" : 4,
        "rank" : 7,
        "behaviours": ["Reflective", "Intuitive"],
        "title": "Seeker",
        "description": "A thoughtful adventurer who draws on intuition and reflection to uncover deeper truths and hidden paths.",
        "quote": "The journey within shapes the journey beyond.",
        "strengths": [
            "Uncovering subtle insights through deep observation.",
            "Making connections between the seen and unseen.",
            "Finding clarity in ambiguity by trusting their inner compass."
        ],
        "needs": [
            "Space to reflect on and process their experiences.",
            "Opportunities to explore uncharted or abstract ideas.",
            "Encouragement to trust their instincts when faced with uncertainty."
        ],
        "flashpoints": [
            "Pressure to act without time for reflection.",
            "Environments that devalue introspection or intuition."
        ],
        "happypaths": [
            "Discovering new perspectives through quiet exploration.",
            "Turning moments of reflection into transformative breakthroughs."
        ]
    },
    {
        "theme": 4,
        "rank": 8,
        "behaviours": ["Reflective", "Balanced Reasoning"],
        "title": "Composer",
        "description": "A thoughtful architect of harmony, blending reflection and reason to craft balanced, purposeful outcomes.",
        "quote": "True wisdom lies in creating harmony from complexity.",
        "strengths": [
          "Providing balanced, insightful perspectives.",
          "Guiding teams through thoughtful deliberation.",
          "Stabilizing with grounded reasoning."
        ],
        "needs": [
          "Time to consider options deeply.",
          "A role where their wisdom is valued.",
          "Respect for their calm and measured approach."
        ],
        "flashpoints": [
          "Being dismissed as overly cautious.",
          "Pressure to act without adequate reflection."
        ],
        "happypaths": [
          "Crafting harmony from complexity.",
          "Offering transformative clarity through reasoned insight.",
          "Helping teams navigate challenges with measured guidance."
        ]
      },
    {
        "theme" : 4,
        "rank" : 9,
        "behaviours": ["Reflective", "Analytical"],
        "title": "Strategist",
        "description": "A deliberate planner who uses precision and logic to map pathways through complexity.",
        "quote": "Every move matters; plan with purpose.",
        "strengths": ["Creating detailed plans", "Solving complex problems", "Anticipating long-term outcomes"],
        "needs": ["Space for methodical planning", "Access to relevant data", "Clear goals and priorities"],
        "flashpoints": ["Being forced into rash decisions", "Overthinking simple solutions"],
        "happypaths": ["Thriving in long-term planning", "Mastering complex systems"]
    },  
        {
            "theme" : 5,
            "rank" : 1,
            "behaviours": ["Independent", "Conflict Engaging"],
            "title": "Challenger",
            "description": "An unrelenting force of action, the Challenger thrives in forging their own path, fearlessly addressing obstacles head-on and disrupting the status quo to drive change.",
            "quote": "Stand tall, speak boldly, and shape the world around you.",
            "strengths": ["Decisive action", "Fearless confrontation", "Driving momentum through direct engagement"],
            "needs": ["Autonomy to act decisively", "Clarity of purpose", "Freedom to challenge norms"],
            "flashpoints": ["Resistance to their ideas", "Misinterpretation of directness as hostility"],
            "happypaths": ["Driving innovation through challenge", "Defending principles with integrity"]
        },
        {
            "theme" : 5,
            "rank" : 2,
            "behaviours": ["Independent", "Balanced Conflict Management"],
            "title": "Referee",
            "description": "A decisive arbiter, the Referee stands firm in their independence while managing conflicts with impartiality and precision, ensuring fairness prevails.",
            "quote": "The game only thrives when the rules are upheld.",
            "strengths": ["Objective conflict resolution", "Maintaining fairness", "Balancing firmness with neutrality"],
            "needs": ["Autonomy to enforce decisions", "Respect for their impartiality", "Clear guidelines to anchor their actions"],
            "flashpoints": ["Perceived bias in their judgment", "Disregard for established rules"],
            "happypaths": ["Ensuring integrity in challenging situations", "Gaining respect through fair and balanced outcomes"]
        },
        {
            "theme" : 5,
            "rank" : 3,
            "behaviours": ["Independent", "Conflict Avoiding"],
            "title": "Keeper",
            "description": "A steadfast protector, the Keeper maintains order and stability by focusing on solutions while skillfully avoiding unnecessary conflict.",
            "quote": "Guard the future by protecting what matters most.",
            "strengths": ["Maintaining structure and order", "Solving problems with quiet precision", "Minimizing disruption"],
            "needs": ["Space to work without interference", "Clear priorities to focus on", "Trust in their judgment"],
            "flashpoints": ["Forcing them into conflicts they avoided", "Underestimating their contributions"],
            "happypaths": ["Preserving stability in chaotic situations", "Ensuring progress through calm and steady effort"]
        },
        {
            "theme" : 5,
            "rank" : 4,
            "behaviours": ["Balanced Independence", "Conflict Engaging"],
            "title": "Negotiator",
            "description": "Balancing self-reliance with connection, the Negotiator steps into conflict with tact and resilience, seeking outcomes that benefit all while holding their ground.",
            "quote": "Meet conflict with purpose and leave with resolution.",
            "strengths": ["Diplomatic conflict resolution", "Equally adept in solitude or teamwork", "Bringing balance to high-stakes discussions"],
            "needs": ["Freedom to adapt their approach", "Opportunities to lead negotiations", "Recognition of their mediating skills"],
            "flashpoints": ["Overemphasis on one mode of engagement", "Unreasonable rigidity in outcomes"],
            "happypaths": ["Resolving disputes with poise", "Harmonizing perspectives for shared success"]
        },
        {
            "theme" : 5,
            "rank" : 5,
            "behaviours": ["Balanced Independence", "Balanced Conflict Management"],
            "title": "Dealmaker",
            "description": "A skilled intermediary, the Broker navigates the middle ground between independence and collaboration, fostering agreements and maintaining equilibrium with deft precision.",
            "quote": "The art of balance lies in finding value for all sides.",
            "strengths": ["Facilitating fair negotiations", "Bridging gaps between extremes", "Maintaining stability in dynamic environments"],
            "needs": ["Freedom to mediate thoughtfully", "Trust in their impartiality", "Recognition of their nuanced efforts"],
            "flashpoints": ["Pressure to take sides unfairly", "Forcing rushed or imbalanced decisions"],
            "happypaths": ["Building bridges that endure", "Thriving as the linchpin of equilibrium"]
        },
        {
            "theme" : 5,
            "rank" : 6,
            "behaviours": ["Balanced Independence", "Conflict Avoiding"],
            "title": "Counselor",
            "description": "A tactful negotiator, the Counselor crafts solutions that preserve harmony and avoid unnecessary discord, ensuring progress without sacrificing tranquility.",
            "quote": "Harmony is the foundation of progress.",
            "strengths": ["Resolving challenges with tact", "Creating calm, stable environments", "Minimizing disruptions with foresight"],
            "needs": ["Freedom to defuse conflict gracefully", "Respect for their need to avoid unnecessary discord", "Time to plan and strategize calmly"],
            "flashpoints": ["Being dragged into avoidable conflicts", "Disregard for their thoughtful processes"],
            "happypaths": ["Fostering lasting harmony", "Crafting solutions that endure with peace"]
        },
        {
            "theme" : 5,
            "rank" : 7,
            "behaviours": ["Collaborative", "Conflict Engaging"],
            "title": "Lieutenant",
            "description": "A steadfast force, the Lieutenant thrives in uniting teams to tackle challenges head-on, drawing strength from collective effort and shared purpose.",
            "quote": "In unity, there is strength, and in action, there is progress.",
            "strengths": ["Strengthening team resolve through action", "Leading collaborative conflict resolution", "Driving progress with collective focus"],
            "needs": ["Engaged and committed teammates", "Support for their direct approach", "Opportunities to inspire through shared action"],
            "flashpoints": ["Team disengagement", "Resistance to collaborative solutions"],
            "happypaths": ["Achieving victories through teamwork", "Fostering resilience and determination in collective efforts"]
        },
        {
            "theme" : 5,
            "rank" : 8,
            "behaviours": ["Collaborative", "Balanced Conflict Management"],
            "title": "Marshal",
            "description": "A commanding presence, the Marshal unites teams with purpose, navigating challenges with composure and fostering collaboration for mutual success.",
            "quote": "Lead with clarity, unite with purpose.",
            "strengths": ["Aligning diverse perspectives", "Facilitating purposeful collaboration", "Maintaining cohesion in high-stakes scenarios"],
            "needs": ["Opportunities to bring teams together", "Recognition of their leadership", "Alignment with shared goals and values"],
            "flashpoints": ["Disorder within the team", "Exclusion from decision-making processes"],
            "happypaths": ["Unifying efforts towards a shared vision", "Thriving in structured and cohesive environments"]
        },
        {
            "theme" : 5,
            "rank" : 9,
            "behaviours": ["Collaborative", "Conflict Avoiding"],
            "title": "Peacemaker",
            "description": "A calming influence, the Peacemaker nurtures harmony and understanding, ensuring seamless collaboration while avoiding unnecessary discord.",
            "quote": "Build bridges, not walls; nurture understanding, not division.",
            "strengths": ["Encouraging cooperation", "Creating an atmosphere of mutual respect", "Minimizing conflict to maintain focus"],
            "needs": ["A cooperative and respectful environment", "Support for their harmonious vision", "Avoidance of prolonged contention"],
            "flashpoints": ["Team discord and division", "Disruption of carefully cultivated harmony"],
            "happypaths": ["Fostering lasting unity in teams", "Thriving in environments of respect and understanding"]
        },
        {
            "theme" : 6,
            "rank" : 1,
            "behaviours": ["People Focused", "Emotional"],
            "title": "Empath",
            "description": "A compassionate soul who feels deeply and prioritizes the well-being of others above all else.",
            "quote": "In understanding others, we find ourselves.",
            "strengths": ["Deep connections with team members", "Sensitive to team morale", "Excellent listener"],
            "needs": ["Emotional support", "A harmonious environment", "Opportunities to help others"],
            "flashpoints": ["Overwhelmed by others' emotions", "Difficulty handling criticism"],
            "happypaths": ["Cultivating strong team unity", "Providing support that leads to collective success"]
        },
        {
            "theme" : 6,
            "rank" : 2,
            "behaviours": ["People Focused", "Balanced Outlook"],
            "title": "Teacher",
            "description": "A patient guide who balances emotional insight and practical reasoning to nurture growth and understanding in others.",
            "quote": "Wisdom grows when knowledge is shared with care.",
            "strengths": ["Empowering others through guidance", "Balancing empathy with logic", "Creating a learning culture"],
            "needs": ["Opportunities to mentor and coach", "Recognition of their efforts to uplift others", "A receptive and eager audience"],
            "flashpoints": ["Lack of appreciation for their efforts", "Resistance to growth and learning"],
            "happypaths": ["Seeing others thrive through their mentorship", "Fostering environments of shared growth and understanding"]
        },
        {
            "theme" : 6,
            "rank" : 3,
            "behaviours": ["People Focused", "Rational"],
            "title": "Psychologist",
            "description": "A perceptive analyst who values people and uses reason to understand and navigate complex human dynamics.",
            "quote": "Understanding people is the first step to transforming relationships.",
            "strengths": ["Insight into human behavior", "Objective analysis of interpersonal dynamics", "Resolving conflicts with logic and empathy"],
            "needs": ["Opportunities to observe and analyze", "An open and communicative environment", "Trust in their insights"],
            "flashpoints": ["Emotional manipulation", "Disregard for their observations"],
            "happypaths": ["Facilitating personal and team growth", "Creating harmony through understanding"]
        },
        {
            "theme" : 6,
            "rank" : 4,
            "behaviours": ["Balanced Work Focus", "Emotional"],
            "title": "Singer",
            "description": "A passionate contributor who weaves emotion and purpose into their work, resonating deeply with both tasks and people.",
            "quote": "When the heart and mind sing in unison, the world listens.",
            "strengths": ["Inspiring emotional engagement", "Creating meaningful work", "Balancing productivity with passion"],
            "needs": ["Opportunities to infuse work with creativity", "Recognition of their emotional contributions", "A supportive and empathetic environment"],
            "flashpoints": ["Being forced into purely mechanical tasks", "Lack of acknowledgment for their passion"],
            "happypaths": ["Finding fulfillment in meaningful work", "Inspiring others to care deeply about what they do"]
        },
        {
            "theme" : 6,
            "rank" : 5,
            "behaviours": ["Balanced Work Focus", "Balanced Outlook"],
            "title": "Judge",
            "description": "A discerning decision-maker who evaluates situations with impartiality, blending logic and empathy to deliver fair and effective outcomes.",
            "quote": "Wisdom lies in the balance of heart and mind.",
            "strengths": ["Objective decision-making", "Balancing competing priorities", "Maintaining fairness under pressure"],
            "needs": ["Clarity of expectations", "Opportunities to weigh in on key decisions", "Respect for their impartiality"],
            "flashpoints": ["Perceived bias in their decisions", "Unnecessary emotional appeals"],
            "happypaths": ["Upholding fairness in complex situations", "Resolving conflicts with balanced solutions"]        
        },
        {
            "theme" : 6,
            "rank" : 6,
            "behaviours": ["Balanced Work Focus", "Rational"],
            "title": "Technician",
            "description": "A logical problem-solver who focuses intensely on tasks, using reason and expertise to achieve precision.",
            "quote": "Precision is the result of logic applied to practice.",
            "strengths": ["Analytical problem-solving", "Technical expertise", "Efficient task execution"],
            "needs": ["Clear instructions", "Access to tools and resources", "Time for focused work"],
            "flashpoints": ["Distractions", "Ambiguous requirements"],
            "happypaths": ["Solving complex problems", "Enhancing systems and processes"]
        },
        {
            "theme" : 6,
            "rank" : 7,
            "behaviours": ["Task Focused", "Emotional"],
            "title": "Craftsman",
            "description": "An artisan who pours passion into their work, striving for excellence through heartfelt dedication.",
            "quote": "When passion fuels your work, excellence follows.",
            "strengths": ["High-quality output", "Attention to detail", "Inspiring others through dedication"],
            "needs": ["Creative freedom", "Emotional connection to their work", "Appreciation for their craft"],
            "flashpoints": ["Monotonous tasks", "Criticism without constructive feedback"],
            "happypaths": ["Mastering their craft", "Creating impactful work that resonates"]
        },
        {
            "theme" : 6,
            "rank" : 8,
            "behaviours": ["Task Focused", "Balanced Outlook"],
            "title": "Trainer",
            "description": "A focused motivator who balances practical goals with human connection, inspiring others to reach their full potential through structured effort.",
            "quote": "Transformation comes from steady progress, one step at a time.",
            "strengths": ["Tailoring tasks to individual needs", "Balancing discipline with empathy", "Encouraging consistent improvement"],
            "needs": ["Clear goals to align effort", "Trust in their guidance", "Commitment from those they support"],
            "flashpoints": ["Lack of dedication from others", "Unclear or shifting expectations"],
            "happypaths": ["Guiding others to achieve meaningful progress", "Creating sustainable and empowering routines"]
        },
        {
            "theme" : 6,
            "rank" : 9,
            "behaviours": ["Task Focused", "Rational"],
            "title": "Planner",
            "description": "A meticulous organizer who applies logical thinking to balance tasks and resources effectively.",
            "quote": "A well-crafted plan paves the way to success.",
            "strengths": ["Strategic thinking", "Efficient resource management", "Clear goal setting"],
            "needs": ["Access to information", "Autonomy in planning", "Support for their strategies"],
            "flashpoints": ["Last-minute changes", "Lack of data or resources"],
            "happypaths": ["Executing effective plans", "Optimizing team performance"]
        }        
];

export default archetypes;