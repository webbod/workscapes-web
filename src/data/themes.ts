import Theme from "../models/theme";

const themes : Theme[] = [
    {
        "id": 1,
        "behaviours": ["Openness", "Assertiveness"],
        "axes": {
            "x-min": "Private",
            "x-max": "Open",
            "y-min": "Reserved",
            "y-max": "Assertive"
        },
        "colours": ["orange", "green"],
        "title": "Voices and Visibility",
        "insight": "This grid explores how much of yourself you choose to share and how directly you advocate for your thoughts, shaping your presence and impact in interactions.",
        "caution": "Tensions may emerge when openness is mistaken for oversharing or when assertiveness risks being perceived as domineering. Balancing visibility with discretion can prevent misunderstandings.",
        "description": [
            "Open individuals share freely, creating transparency and fostering connection in their relationships. In contrast, private individuals guard their thoughts, focusing their energy on what matters most to them.",
            "Reserved people often observe and reflect before acting, contributing thoughtfully and deliberately. Assertive individuals, on the other hand, speak with confidence, expressing their needs and ideas to drive action and progress.",
            "An open, assertive person shines by inspiring others and leading with clarity and honesty, while a private, reserved individual thrives through introspection and careful, measured engagement.",
            "The key lies in knowing how to shift between these qualities, adapting to the demands of the moment. Balancing openness and privacy, or reserve and assertiveness, allows you to navigate relationships and professional settings with precision and grace."
        ],
        "prompts": [
            "How do you decide what to share with others in a group or one-on-one?",
            "When do you feel comfortable advocating strongly for your needs or ideas?",
            "Do you find it easier to listen and reflect or to take the lead in conversations?",
            "What role does vulnerability play in your openness or assertiveness?"
        ]        
    },
    {
        "id": 2,
        "behaviours": ["Communication Style", "Thinking Style"],
        "axes": {
            "x-min": "Practical Thinker",
            "x-max": "Theory Oriented",
            "y-min": "Visual Communicator",
            "y-max": "Verbal Communicator"
        },
        "colours": ["orared", "blue"],
        "title": "Concepts and Communication",
        "insight": "This grid explores how you process ideas and express them to others, revealing the balance between concrete practicality and abstract theory, and between imagery-driven and language-focused communication.",
        "caution": "Confusion may arise when visual clarity doesn't align with verbal precision, or when theoretical depth overshadows practical solutions. Flexibility in matching your approach to the audience's needs can bridge these gaps.",
        "description": [
            "Visual communicators bring ideas to life through mental imagery, using diagrams, metaphors, or gestures to make their point clear. Verbal communicators, on the other hand, rely on well-crafted language, structured reasoning, and persuasive dialogue to convey their message.",
            "Practical thinkers anchor their ideas in tangible outcomes, breaking them into actionable steps that lead to realistic solutions. In contrast, theory-oriented thinkers thrive on abstraction, weaving connections and exploring overarching frameworks that reveal the bigger picture.",
            "A visual, practical thinker might excel at mapping out clear, actionable plans with vivid, easy-to-grasp visuals. Meanwhile, a verbal, theory-oriented thinker shines when presenting intricate ideas and strategic visions through eloquent, narrative-driven communication.",
            "The real power lies in mastering the ability to shift seamlessly between these styles—knowing when to show, tell, simplify, or theorize. This flexibility allows you to connect with a wide range of audiences and adapt to any situation with confidence and clarity."
        ],
        "prompts": [
            "When explaining a concept, do you prefer to sketch, diagram, or describe it in words?",
            "Do you feel more confident grounding ideas in concrete examples or exploring theoretical possibilities?",
            "How do you adjust your communication style based on your audience's needs and preferences?",
            "What techniques help you bridge the gap between visual and verbal communication, or between theory and practice?"
        ]
    },
    {
        "id": 3,
        "behaviours": ["Granularity", "Timeframe"],
        "axes": {
            "x-min": "Detail-oriented",
            "x-max": "Big picture thinker",
            "y-min": "Present-focused",
            "y-max": "Future-focused"
        },
        "colours": ["teal", "lilac"],
        "title": "Moments and Milestones",
        "insight": "This grid reflects how you process and prioritize information across scales of detail and time, influencing your ability to navigate immediate tasks and long-term goals.",
        "caution": "Focusing too heavily on granular details can lead to losing sight of overarching objectives, while an excessive emphasis on the big picture may result in neglecting critical nuances. Similarly, living in the present risks under-preparation, while dwelling on the future might limit adaptability to real-time changes.",
        "description": [
            "Detail-oriented individuals excel in dissecting complexity, ensuring precision and thoroughness in their work. Big-picture thinkers, however, find strength in synthesizing broader patterns and connections, enabling strategic vision.",
            "Present-focused people are grounded in the immediate, responding to challenges and opportunities as they arise. Future-focused individuals anticipate and plan, setting the foundation for sustainable success.",
            "A present-focused, detail-oriented person thrives in execution, finding fulfillment in perfecting processes and outcomes. Meanwhile, a future-focused, big-picture thinker excels in visionary roles, driving transformative change.",
            "The art lies in balancing these dimensions—knowing when to immerse yourself in the moment or zoom out to gain perspective, and when to shift between micro and macro levels of understanding to optimize decision-making and action."
        ],
        "prompts": [
            "When do you feel most effective—analyzing specifics or conceptualizing overarching plans?",
            "How do you maintain alignment between short-term actions and long-term ambitions?",
            "Do you find more satisfaction in addressing immediate needs or in planning for what’s ahead?",
            "What strategies help you transition between detail and big-picture thinking when needed?"
        ]
    },
    {
        "id": 4,
        "behaviours": ["Engagement", "Reasoning"],
        "axes": {
            "x-min": "Intuitive",
            "x-max": "Analytical",
            "y-min": "Action-Oriented",
            "y-max": "Reflective"            
        },
        "colours": ["yellow", "pink"],
        "title": "Impulses and Insights",
        "insight": "This grid explores how your decisions and interactions are shaped by a balance of calculated reasoning and instinctive reactions, blending deliberate thought with spontaneous engagement.",
        "caution": "Challenges may arise when action-oriented choices outpace reflective understanding or when intuition overshadows analytical clarity. Finding harmony between these tendencies can ensure effective, thoughtful action.",
        "description": [
            "Action-oriented individuals excel at driving momentum, acting decisively to seize opportunities. Reflective individuals, in contrast, pause to consider the broader implications, ensuring depth and understanding before committing.",
            "Analytical thinkers dissect situations methodically, identifying patterns and solutions with precision. Intuitive individuals rely on their instincts and a holistic sense of the situation to guide their decisions, often grasping the 'big picture' without needing exhaustive details.",
            "Someone who is action-oriented and analytical thrives in fast-paced, high-stakes environments, making decisions based on data and strategy. Meanwhile, a reflective and intuitive person brings depth and vision, uncovering subtle dynamics and long-term opportunities.",
            "The ability to blend these axes, moving between calculated action and instinctive reflection as needed, creates a dynamic approach to problem-solving and engagement."
        ],
        "prompts": [
            "How do you decide when to act immediately versus when to reflect and analyze a situation?",
            "Do you trust your instincts in high-pressure situations, or do you prefer to rely on data and logic?",
            "How do you balance the need for decisive action with the value of deeper insight?",
            "What situations call for a shift from intuitive understanding to analytical reasoning, or vice versa?"
        ]
    },
    {
        "id": 5,
        "behaviours": ["Independence", "Conflict Management"],
        "axes": {
            "x-min": "Collaborative",
            "x-max": "Independent",
            "y-min": "Conflict Avoiding",
            "y-max": "Conflict Engaging"
        },
        "colours": ["maroon", "turquoise"],
        "title": "Harmony and Hurdles",
        "insight": "This grid examines how you navigate interpersonal dynamics, balancing the push for autonomy with the pull of collaboration, and your comfort in confronting or sidestepping conflict to maintain relationships or achieve goals.",
        "caution": "Challenges may arise when striving for independence at the expense of teamwork, or when engaging in conflict becomes more about control than resolution. Understanding when to step back or lean in can prevent fractures and foster trust.",
        "description": [
            "Collaborative individuals prioritize working with others, valuing shared effort and mutual support to achieve collective goals. Independent individuals, on the other hand, trust their instincts and rely on self-direction, preferring to forge their own paths.",
            "Conflict-avoiding individuals focus on maintaining peace and harmony, often de-escalating tension to preserve relationships. Conflict-engaging individuals are willing to confront challenges head-on, using direct communication to resolve issues and drive progress.",
            "Someone who is collaborative and conflict-avoiding excels at fostering harmony and building consensus, while an independent and conflict-engaging person thrives on pushing boundaries and challenging the status quo to achieve meaningful change.",
            "The balance lies in recognizing when collaboration is necessary, when independence is empowering, when conflict is productive, and when it might better be left alone. Mastering this adaptability can transform how you navigate personal and professional challenges."
        ],
        "prompts": [
            "When do you find it most rewarding to collaborate with others rather than working alone?",
            "How do you decide whether to address a conflict or let it pass?",
            "What strategies do you use to maintain your independence while contributing to a team?",
            "In what situations do you find engaging in conflict to be productive or necessary?",
            "How do you recover from conflicts and rebuild harmony in your relationships?"
        ]
    },
    {
        "id": 6,
        "behaviours": ["Task Orientation", "Emotional Regulation"],
        "axes": {
            "x-min": "People",
            "x-max": "Tasks",
            "y-min": "Emotional",
            "y-max": "Rational"
        },
        "colours": ["navy", "orange"],
        "title": "Hearts and Minds",
        "insight": "This grid examines the interplay between focusing on human connections and achieving goals, as well as balancing emotional awareness with rational decision-making to drive impactful outcomes.",
        "caution": "Challenges arise when a focus on tasks overshadows personal relationships, or when emotional responses disrupt logical planning. Finding harmony between these elements fosters trust and effective execution.",
        "description": [
            "People-focused individuals prioritize relationships, empathy, and collaboration, creating supportive and inclusive environments. Task-oriented individuals, on the other hand, thrive on structure, efficiency, and achieving tangible outcomes.",
            "Those with an emotional approach bring sensitivity and intuition, enriching interactions and fostering understanding. Rational individuals focus on logic and objectivity, ensuring clear thinking and effective problem-solving.",
            "A person who leans toward tasks and rationality excels at breaking down challenges and delivering results, while someone who values people and emotional engagement creates strong bonds and meaningful teamwork.",
            "Navigating between these quadrants enables you to adapt to different scenarios. Blending empathy with pragmatism and balancing relational needs with goal-oriented action unlocks the potential for leadership and resilience."
        ],
        "prompts": [
            "How do you prioritize tasks while maintaining strong relationships with others?",
            "When faced with emotionally charged situations, how do you maintain focus on practical outcomes?",
            "In team settings, do you find yourself naturally gravitating toward tasks or people?",
            "What strategies help you align your emotional responses with rational decision-making under pressure?"
        ]
    }
    
];

export default themes;