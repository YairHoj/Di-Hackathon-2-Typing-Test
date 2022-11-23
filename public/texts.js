var texts2 = {
  Small: [
    {
      id: 1,
      text: "Structured Query Language, abbreviated as SQL, is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
    },
    {
      id: 2,
      text: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
    },
    {
      id: 3,
      text: "In HTML, div and span tags are elements used to define parts of a document, so that they are identifiable when a unique classification is necessary. The div tag is used to define a division or a section in an HTML document. The span tag is used to define a section in a document.",
    },
    {
      id: 4,
      text: "Assembly language is a low-level programming language for a computer, or other programmable device, in which there is a very strong (generally one-to-one) correspondence between the language and the architecture's machine code instructions. Each assembly language is specific to a particular computer architecture.",
    },
    {
      id: 5,
      text: "A computer program is a collection of instructions that performs a specific task when executed by a computer. A computer requires programs to function, and typically executes the programs' instructions in a processing unit. A computer program is written by a computer programmer in a programming language.",
    },
  ],
  Medium: [
    {
      id: 1,
      text: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages. Every time a web page does more than just sit there and display static information for you to look at; displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc., you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which are HTML and CSS.",
    },
    {
      id: 2,
      text: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library.',
    },
    {
      id: 3,
      text: "A function is a block of code that performs a specific task. A function is executed when something invokes it (calls it). In JavaScript, a function is defined with the function keyword, followed by a name, followed by parentheses (). There are also other ways to define a function, such as using an expression or an arrow function. The code to be executed, by the function, is placed inside curly brackets: {}.",
    },
    {
      id: 4,
      text: "A class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods). The user-defined objects are created using the class keyword. Then the class is instantiated, which means that you create an object of the class. This object will then be called the instance of the class.",
    },
    {
      id: 5,
      text: "A variable is a container for a value, which can be of various types, e.g. a string, a number, an object, an array, etc. In JavaScript, there are three ways to declare a variable: using var, let, or const. The let and const keywords were introduced in ES6. The var keyword is function-scoped or globally-scoped while let and const are block-scoped. A variable declared with var is defined throughout the program as compared to let and const which are defined only within the block they are declared.",
    },
  ],
  Large: [
    {
      id: 1,
      text: "An electronic device used to store, display, and process data is known as a computer. The computer has emerged a lot with the passing days with more modern updates and advancements. There are three types of computers, which include analog, digital and hybrid computers. The speed, as well as the accuracy of each computer, is classified. The computer has several functions other than processing and storing data. It helps control the machine, organize the business, sell services and products, and definitely for academic purposes. The computer has found its way in our daily lives with its great usefulness.",
    },
    {
      id: 2,
      text: "A server is a computer program or a device that provides functionality for other programs or devices, called 'clients'. This architecture is called the client–server model, and a single overall computation is distributed across multiple processes or devices. Servers can provide various functionalities, often called 'services', such as sharing data or resources among multiple clients, or performing computation for a client. A single server can serve multiple clients, and a single client can use multiple servers. A client process may run on the same device as the server, but typically it does not.",
    },
    {
      id: 3,
      text: "React is a Javascript library that was created by Facebook. It is used for building user interfaces, specifically for single page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012. It is now used on thousands of websites, including Netflix, Imgur, Airbnb, SeatGeek, HelloSign, and Walmart. It serves as the V in an MVC framework for building scalable, data-driven web apps.",
    },
    {
      id: 4,
      text: "A computer virus is a type of malicious software program (Malware) that, when executed, replicates itself by modifying other computer programs and inserting its own code. Computer viruses can be used to cause damage to data on a computer, slow down a computer's performance, or completely crash a computer. Viruses can also be used to gain access to a computer and its data without the owner's knowledge. Viruses are usually spread from one computer to another by attaching themselves to email messages, instant messages, or files that are being transferred over a network. Viruses can also be spread by visiting a website that has been infected with a virus.",
    },
    {
      id: 5,
      text: "A file extention is a suffix (e.g. .txt or .doc) which is added to a file name to indicate the file type or format. File extensions are usually three characters long, and are not case sensitive. File extensions are used by operating systems to help users open files with the appropriate program. For example, a file with a .doc extension can be opened with Microsoft Word. File extensions are also used by search engines to help users find files of a specific type. For example, a search for *.doc will find all files with a .doc extension. File extensions are also used by web browsers to help users open files with the appropriate program. For example, a file with a .doc extension can be opened with Microsoft Word.",
    },
  ],
};

localStorage.setItem("texts", JSON.stringify(texts2));
