

const loc = process.env.PUBLIC_URL;

export const Timeline = [
  {
    id: 1,
    title: "Dance Competition",
    subtitle: `The client may be the king, but he is not the art director`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        id : 1,
        name : "Aparna Joshi",
        gender : 'female',
        branch : 'CSE',
        year : '3rd year',
        contact : '7060326613',
        committe : "Dance"

    },
    {
        id : 2,
        name : "Gaurav Kumar ",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : 'XX-XX-XX-XX',
        committe : "Dance"


    },

    {
        id : 3,
        name : "Anjali Devrari",
        gender : 'female',
        branch : 'CSE',
        year : '3rd year',
        contact : '9119710171',
        committe : "Dance"


    },
    ],
    desc: ` Participants from different years and branches would be competing with each to win
the competition. The Competition will be in three categories of dance i.e, Western,
Classical and Folk.
Solo, duo and group dance can be performed under each category.
.
    `,
    

    cls: "cicada",
    left: (
      <>
        {" "}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${loc}/image/sci-assets/dance.svg`}
            alt="LOGO "
          />
        </div>{" "}
      </>
    ),
    style: {
      color: {
        bg: "#ed196b",
        primary: "#ed196b",
        secondary: "rgba(82, 71, 71, 0.886)",
        tertiary: "",
      },
    },

    hexas: ["silver", "silver", "silver"],
  },



  {
    id: 2,
    title: "Singing Competition",
    desc : `Participants from different years and branches would be competing with each other.
    The most melodious amongst all of the participants will be announced as the winner.
    The competition will be in two categories`,
    subtitle: "Talk is cheap; show me the code",
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        id : 4,
        name : "Ishika Pant",
        gender : 'female',
        branch : 'CSE',
        year : '4th year',
        contact : 'XX-XX-XX-XX',
        committe : "Singing"

    },

    {
        id : 5,
        name : "Shubham Tripathi",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : '7055024508',
        committe : "Singing"


    },

    {
        id : 6,
        name : "Aanchal Budiyal",
        gender : 'female',
        branch : 'CSE',
        year : '3rd year',
        contact : 'XX-XX-XX-XX',
        committe : "Singing"
      

    },
    ],
 
  

    cls: "cicada",
    left: <>
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "grid",
          placeItems: "center",
        }}
        className="logoDesign"
      >
        <img
          style={{ width: "100%" }}
          src={`${loc}/image/sci-assets/singing.svg`}
          alt="LOGO "
        />
      </div>
    </>,
    style: {
      color: {
        bg: "#159D8C",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",
      },
    },
    hexas: ["mint", "mint", "mint"],
  },


  {
    id: 3,
    title: "Drama/ Skit Competition",
    subtile: `Idea is blunt, until it is presented`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        id : 17,
        name : "Rishabh Saxena",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : '9997907591',
        committe : "SKIT"
       

    },
    {
        id : 18,
        name : "Abhishek Yadav",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : '7055566622',
        committe : "SKIT"
        
       

    },
    {
        id : 19,
        name : "Saarim Zaid ",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : '7300923828',
        committe : "SKIT"
        
       

    },
    ],

    desc: `Drama is the specific mode of fiction represented in performance: a play, mime,
    ballet etc. Multiple groups from different years will be participating in the competition.
    The best amongst all will be chosen as the winner of the competition.
   `,
 
   left: <>
   <div
     style={{
       width: "80%",
       height: "100%",
       display: "grid",
       placeItems: "center",
     }}
     className="logoDesign"
   >
     <img
       style={{ width: "100%" }}
       src={`${loc}/image/sci-assets/singing.svg`}
       alt="LOGO "
     />
   </div>
 </>,
    cls: "ideathon",
    style: {
      color: {
        bg: "#2476E3",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",
      },
    },
    hexas: ["blue", "blue", "blue"],
  },


  {
    id: 4,
    title: "Poetry Competition",
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {   
        id : 7,
        name : "Mayank Thapliyal",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : '6399932775',
        committe : "Poetry"

    },

    {
        id : 8,
        name : "Abhishek Yadav",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : '7055566622',
        committe : "Poetry"


    },
    ],

    desc: `Participants from different years and branches will be delivering their poems. The
    best amongst all will be chosen as the winner of the competition`,
  
    left: <>
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "grid",
          placeItems: "center",
        }}
        className="logoDesign"
      >
        <img
          style={{ width: "100%" }}
          src={`${loc}/image/sci-assets/poetry.svg`}
          alt="LOGO "
        />
      </div>
    </>,
    cls: "monkey",
    style: {
      color: {
        bg: "#FC8D14",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",
      },
    },
    hexas: ["silver", "silver", "silver"],
  },



  {
    id: 5,
    title: "Talent Hunt",
    subtile: `Coding with a twist`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        id : 23,
        name : "Diksha Adhikari",
        gender : 'female',
        branch : 'CSE',
        year : '3rd year',
        contact : 'XX-XX-XX-XX',
        committe : "BTKIT got talent"
        
       

    },
    {
        id : 24,
        name : "Dheeraj Budhlakoti",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : '9639260117',
        committe : "BTKIT got talent"
       
        
       

    },
    {
        id : 25,
        name : "Gaurav Kumar",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : 'XX-XX-XX-XX',
        committe : "BTKIT got talent"
        
       

    },
    ],

    desc: `This competition is beyond the boundation of specific art forms. In this, participants
    from different years can participate to showcase their talent. It includes activities like
    standup comedy, playing instruments, singing, dancing etc.`,
 
    cls: "blind",
    left: <>
    <div
      style={{
        width: "80%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        transform : "scale(2)"

      }}
      className="logoDesign"
    >
      <img
        style={{ width: "100%" }}
        src={`${loc}/image/sci-assets/talenthunt.svg`}
        alt="LOGO "
      />
    </div>
  </>,
    style: {
      color: {
        bg: "#159D8C",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",
      },
    },
    hexas: ["mint", "mint", "mint"],
  },


  {
    id: 6,
    title: `Campus Diva`,
    subtitle: `The more you know, the more you grow`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        id : 15,
        name : "Shraddha Sah",
        gender : 'female',
        branch : 'CSE',
        year : '3rd year',
        contact : '7310874328',
        committe : "Campus diva , Short Film Making"
       

    },
    {
        id : 16,
        name : "Kriti Sharma",
        gender : 'female',
        branch : 'CSE',
        year : '3rd year',
        contact : '8126705777',
        committe : "Campus diva"
        

    },
    ],

    desc: ` In this competition participants will be mimicking their chosen characters from
    different movies and would be performing a short scene of the actor from that movie.`,

 
    left: (<>
      {" "}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center",
          transform : "scale(1.5)"
        }}
        className="logoDesign"
      >
        <img
          style={{ width: "100%" }}
          src={`${loc}/image/sci-assets/poetry.svg`}
          alt="LOGO "
        />
      </div>{" "}
    </>),
    cls: "css-battle",
    style: {
      color: {
        bg: "#2476E3",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",
      },
    },
    hexas: ["blue", "blue", "blue"],
  },



  {
    id: 7,
    title: "Roadies",
    subtitle: `Be a wise guy, Give math a try`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

    desc: `This competition consists of multiple tasks that test the participants on the basis of
    physical, mental and cognitive ability. The best amongst the all participants will be
    declared the winner of the competition.`,
 
    cls: "backtrack",
    left: (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${loc}/image/sci-assets/poetry.svg`}
            alt="LOGO "
          />
        </div>
      </>
    ),
    style: {
      color: {
        bg: "#FE74AE",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",
      },
    },
    hexas: ["red", "red", "red"],
  },



  {
    id: 8,
    title: "Face Painting",
    subtitle: `Clear vision holds the key.`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        id : 9,
        name : "Ankita Bohra",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : '8057238063',
        committe : "Face painting"

    },

    {
        id : 10,
        name : "Saurav Joshi",
        gender : 'male',
        branch : 'CSE',
        year : '3rd year',
        contact : 'XX-XX-XX-XX',
        committe : "Face painting"
       

    },
    ],

    desc: `In this competition, participants will be performing face art on the faces of their fellows. The
    best artist will be chosen to be the winner of the competition`,
    left: (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${loc}/image/sci-assets/painting.svg`}
            alt="LOGO "
          />
        </div>
      </>
    ),
 

    cls: "cicada",
    style: {
      color: {
        bg: "#ed196b",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",
      },
    },
    hexas: ["silver", "silver", "silver"],
  },

  {
    id: 9,
    title: "Frame Designing",
    subtitle: `Guidance is so much more important than speed`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        id : 26,
        name : "Payal Chuphal",
        gender : 'female',
        branch : 'CSE',
        year : '3rd year',
        contact : '9997597921',
        committe : "Frame Designing"
        
       

    },
    {
        id : 27,
        name : "Aanchal Budiyal",
        gender : 'female',
        branch : 'CSE',
        year : '3rd year',
        contact : 'XX-XX-XX-XX',
        committe : "Frame Designing"
        
       

    },
    ],

    desc: `In this competition, participants will be participating in groups. The main task of the
    competition will be designing the frames and props with which people can take
    pictures with. The best amongst them will be chosen as the winner.`,
 

    left: (<>
      {" "}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center",
        transform : "scale(2)"

        }}
        className="logoDesign"
      >
        <img
          style={{ width: "100%" }}
          src={`${loc}/image/sci-assets/framedesining.svg`}
          alt="LOGO "
        />
      </div>{" "}
    </>),
    cls: "css-battle",
    style: {
      color: {
        bg: "#FC8D14",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",

      },
    },
    hexas: ["silver", "silver", "silver"],
  },
  {
    id: 10,
    title: "Treasure Hunt",
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

    desc: `Multiple teams from different years will be participating in the competition against each other.
    The team who finds the maximum number of clues will be declared as the winner of the
    competition.
    `,

    left: (<>
      {" "}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center",
          transform : "scale(2)"
        }}
        className="logoDesign"
      >
        <img
          style={{ width: "100%" }}
          src={`${loc}/image/sci-assets/treasurehunt.svg`}
          alt="LOGO "
        />
      </div>{" "}
    </>),
    cls: "css-battle",
    style: {
      color: {
        bg: "#159D8C",
        primary: "#ed196b",
        secondary: "#ed196b",
        tertiary: "",
      },
    },
    hexas: ["mint", "mint", "mint"],
  },
];
