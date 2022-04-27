import Course from "../Screen/Course";

const Courses = [
  {
    id: "1",
    title: " CODE WITH CPP ",
    image: require("../../assets/course/cpp.png"),
    description:
      "C++ is a highly portable language and is often the language of selection for multi-device, multi-platform app development. ",
    course1: "CPP",
    course2: "OPPS",
    course3: "STL",
    price: 5000,
  },
  {
    id: "2",
    title: " CODE WITH JAVA ",
    image: require("../../assets/course/java-b.jpg"),
    description:
      "Java is platform-independent, One of the most significant advantages of Java is its ability to move easily from one computer system to another. The ability to run the same program on many different systems is crucial to World Wide Web software, and Java succeeds at this by being platform-independent at both the source and binary levels.",
    course1: "BASIC",
    course2: "OPPS",
    course3: "Problem Solving",
    price: 3000,
  },
  {
    id: "3",
    title: "JAVASCRIPT",
    image: require("../../assets/course/js_b.jpg"),
    description:
      "JavaScript has become integral to the Internet experience as developers build increased interaction and complexity into their applications. Search engines, ecommerce, content management systems, responsive design, social media and phone apps would not be possible without it. ",
    course1: "JavaScript",
    course2: "CSS",
    course3: "HTML",
    price: 1000,
  },
  {
    id: "4",
    title: "Ethical Hacking",
    image: require("../../assets/course/ethk.jpg"),
    description:
      "Hackers can think from an attacker's perspective and find the potential entry point and fix them before any attacks. ",
    course1: "Testing",
    course2: "Exploitation",
    course3: "Linux OS",
    price: 6000,
  },
  {
    id: "5",
    title: "Web Development",
    image: require("../../assets/course/web_dev.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor adipiscing elit. ",
    course1: "javascript",
    course2: "React",
    course3 : "Redux",
    price: 5000,
  },
  {
    id: "6",
    title: "App Development",
    image: require("../../assets/course/app_development.jpg"),
    description:
      "Mobile is the enabling centerpiece of digital convergence. Mobile is the glue for all other digital industries to use when approaching convergence, but mobile is also the digital gateway for the real world to join in this global metamorphosis of human behavior",
    course1: "React-Native",
    course2: "Redux",
    course3: "API building",
    price: 5000,
  },
];

export default Courses;