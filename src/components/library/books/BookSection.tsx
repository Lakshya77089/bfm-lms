"use client";
import Link from "next/link";

const BookSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-8">Explore Web3 Books</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            title: "Cryptoassets",
            author: "Chris Burniske, Jack Tatar",
            publisher: "Tech Press",
            year: "2023",
            image: "/library/books/images/Cryptoassets.png",
            pdf: "https://drive.google.com/file/d/1cUB5cw7E16RmdfhuGCKmGm3QTH0OScCO/view?usp=drive_link",
          },
          {
            title: "Bitcoin Standard",
            author: "Saifedean Ammous",
            publisher: "Wiley",
            year: "2018",
            image: "/library/books/images/Bitcoin standard.png",
            pdf: "https://drive.google.com/file/d/1PDUhhjleczLm3yqvi_SLPsAw_Jobd0Cq/view?usp=drive_link",
          },
          {
            title: "Blockchain Application",
            author: "Ahmed Banafa",
            publisher: "River Publishers",
            year: "2023",
            image: "/library/books/images/Bitcoin application.png",
            pdf: "https://drive.google.com/file/d/15K6jetXJtrBCySZvO0y7mISI4nlirTfW/view?usp=drive_link",
          },
          {
            title: "Blockchain Basics",
            author: "Daniel Drescher",
            publisher: "Apress",
            year: "2017",
            image: "/library/books/images/Bitcoin Basics.png",
            pdf: "https://drive.google.com/file/d/15hOA7m7MWpCfGpkvw7XqZfvAHv4APu16/view?usp=drive_link",
          },
          {
            title: "Blockchain For Beginners",
            author: "Blockchain Council",
            publisher: "Blockchain Council",
            year: "Likely 2021–2023",
            image: "/library/books/images/Blockchain For Beginners.png",
            pdf: "https://drive.google.com/file/d/1QkwpJ9HVlqj80Cb5I7e5QgtclRjr3RJo/view?usp=drive_link",
          },
          {
            title: "Crypto How the Code",
            author: "Steven Levy",
            publisher: "Penguin Press",
            year: "2021",
            image: "/library/books/images/Crypto How the Code.png",
            pdf: "https://drive.google.com/file/d/10kvlACZNTUqhtXk9391LiD8M5wBdkj-A/view?usp=drive_link",
          },
          {
            title: "Digital Gold",
            author: "Nathaniel Popper",
            publisher: "Harper",
            year: "2015",
            image: "/library/books/images/Digital Gold.png",
            pdf: "https://drive.google.com/file/d/1yLIgrDulqZT3rmppDsPhhXkncHZdYVF0/view?usp=drive_link",
          },
          {
            title: "Life 30",
            author: "Max Tegmark",
            publisher: "Alfred A. Knopf",
            year: "2017",
            image: "/library/books/images/life-30.png",
            pdf: "https://drive.google.com/file/d/1upKqgw-1CDIiEQAmHmV8J4-rhBaYrF73/view?usp=drive_link",
          },
          {
            title: "The Internet of Money",
            author: "Andreas M. Antonopoulos",
            publisher: "Merkle Bloom LLC",
            year: "2016",
            image: "/library/books/images/the_internet_of_money.png",
            pdf: "https://drive.google.com/file/d/1ox6Qu05-YB-BzpYC3DFGXILUR4YcnImF/view?usp=drive_link",
          },
          {
            title: "Prediction Machines",
            author: "Ajay Agrawal, Joshua Gans, Avi Goldfarb",
            publisher: "Harvard Business Review Press",
            year: "2018",
            image: "/library/books/images/Prediction Machines.png",
            pdf: "https://drive.google.com/file/d/1i8UIkv8pup4EoscyeJ3RZrzO-X-vOuBi/view?usp=drive_link",
          },
          {
            title: "Hands On Machine Learning",
            author: "Aurélien Géron",
            publisher: "O’Reilly Media",
            year: "2019",
            image: "/library/books/images/Hands-On_Machine_Learning_with_Scikit-Learn-Keras-and-TensorFlow-2nd-Edition-Aurelien-Geron.png",
            pdf: "https://drive.google.com/file/d/1AyU93vhnrpnZDWqi5jW54wa-7NI_ebEj/view?usp=drive_link",
          },
          {
            title: "Superintelligence",
            author: "Nick Bostrom",
            publisher: "Oxford University Press",
            year: "2014",
            image: "/library/books/images/Superintelligence.png",
            pdf: "https://drive.google.com/file/d/1DKXpXrla5YHXgqT6xsTdYH1aR4I-X0Gw/view?usp=drive_link",
          },
          {
            title: "Mastering Bitcoin",
            author: "Andreas M. Antonopoulos",
            publisher: "O’Reilly Media",
            year: "2014",
            image: "/library/books/images/Mastering Bitcoin.png",
            pdf: "https://drive.google.com/file/d/1TskJe15ZJEe7abqBQ-w6ePnE2r_PSe6M/view?usp=drive_link",
          },
          {
            title: "Human Compatible",
            author: "Stuart Russell",
            publisher: "Viking (Penguin Books)",
            year: "2019",
            image: "/library/books/images/Human Compatible .png",
            pdf: "https://drive.google.com/file/d/1w---EICGlNAGgo7PbkDmNepsGxWAXyuo/view?usp=drive_link",
          },
          {
            title: "Machine Learning Yearning",
            author: "Andrew Ng",
            publisher: "Self-published",
            year: "2018 ",
            image: "/library/books/images/machinelearningyearning.png",
            pdf: "https://drive.google.com/file/d/1kTQt6owbzP7hI1XnK3hboq26W8ddbLAw/view?usp=drive_link",
          },
          {
            title: "Deep Learning",
            author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
            publisher: "MIT Press",
            year: "2016",
            image: "/library/books/images/deeplearning.png",
            pdf: "https://drive.google.com/file/d/122ZM9maIsUTsexb9nYdEpXX9bTAIF62E/view?usp=drive_link",
          },
        ].map((book, i) => (
          <div
            key={i}
            className="border bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col justify-between min-h-[320px]"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
            <p className="text-sm text-gray-700">Author: {book.author}</p>
            <p className="text-sm text-gray-700">Publisher: {book.publisher}</p>
            <p className="text-sm text-gray-700">Published: {book.year}</p>
            <a
              href={book.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-2 text-center block transition"
            >
              Read PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookSection;
