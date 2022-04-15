

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
    desc: ` Participants from different years and branches would be competing with each to win
the competition. The Competition will be in three categories of dance i.e, Western,
Classical and Folk.
Solo, duo and group dance can be performed under each category.
.
    `,
    

    cls: "cicada",
    // left: (
    //   <>
    //     {" "}
    //     <div
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         display: "grid",
    //         placeItems: "center",
    //       }}
    //       className="logoDesign"
    //     >
    //       <img
    //         style={{ width: "100%" }}
    //         src={`${loc}/image/webd.png`}
    //         alt="LOGO "
    //       />
    //     </div>{" "}
    //   </>
    // ),
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
    id: 4,
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
 
  

    cls: "cicada",
    // left: <>
    //   <div
    //     style={{
    //       width: "80%",
    //       height: "100%",
    //       display: "grid",
    //       placeItems: "center",
    //     }}
    //     className="logoDesign"
    //   >
    //     <img
    //       style={{ width: "100%" }}
    //       src={`${loc}/image/gambit.png`}
    //       alt="LOGO "
    //     />
    //   </div>
    // </>,
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

    desc: `Drama is the specific mode of fiction represented in performance: a play, mime,
    ballet etc. Multiple groups from different years will be participating in the competition.
    The best amongst all will be chosen as the winner of the competition.
   `,
 
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
    id: 2,
    title: "Poetry Competition",
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

    desc: `Participants from different years and branches will be delivering their poems. The
    best amongst all will be chosen as the winner of the competition`,
  

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
    id: 7,
    title: "Talent Hunt",
    subtile: `Coding with a twist`,
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

    desc: `This competition is beyond the boundation of specific art forms. In this, participants
    from different years can participate to showcase their talent. It includes activities like
    standup comedy, playing instruments, singing, dancing etc.`,
 
    cls: "blind",
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
    id: 10,
    title: `Campus Diva`,
    subtitle: `The more you know, the more you grow`,
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

    desc: ` In this competition participants will be mimicking their chosen characters from
    different movies and would be performing a short scene of the actor from that movie.`,

 
    // left: (<>
    //   {" "}
    //   <div
    //     style={{
    //       width: "100%",
    //       height: "100%",
    //       display: "grid",
    //       placeItems: "center",
    //     }}
    //     className="logoDesign"
    //   >
    //     <img
    //       style={{ width: "100%" }}
    //       src={`${loc}/image/knowbuddy.png`}
    //       alt="LOGO "
    //     />
    //   </div>{" "}
    // </>),
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
    id: 8,
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
    // left: (
    //   <>
    //     <div
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         display: "grid",
    //         placeItems: "center",
    //       }}
    //       className="logoDesign"
    //     >
    //       <img
    //         style={{ width: "100%" }}
    //         src={`${loc}/image/mathemati.png`}
    //         alt="LOGO "
    //       />
    //     </div>
    //   </>
    // ),
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
    id: 9,
    title: "Face Painting",
    subtitle: `Clear vision holds the key.`,
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

    desc: `In this competition, participants will be performing face art on the faces of their fellows. The
    best artist will be chosen to be the winner of the competition`,

 

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
    id: 11,
    title: "Frame Designing",
    subtitle: `Guidance is so much more important than speed`,
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

    desc: `In this competition, participants will be participating in groups. The main task of the
    competition will be designing the frames and props with which people can take
    pictures with. The best amongst them will be chosen as the winner.`,

    rules: [

    ],

    // left: (<>
    //   {" "}
    //   <div
    //     style={{
    //       width: "100%",
    //       height: "100%",
    //       display: "grid",
    //       placeItems: "center",
    //     }}
    //     className="logoDesign"
    //   >
    //     <img
    //       style={{ width: "100%" }}
    //       src={`${loc}/image/techtalk.png`}
    //       alt="LOGO "
    //     />
    //   </div>{" "}
    // </>),
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
    id: 12,
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
