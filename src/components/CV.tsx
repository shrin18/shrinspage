import React from 'react';

const CV = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Shrinish Donde</h1>
          <p className="text-lg text-slate-600 mb-4">Berlin, Germany</p>
          <p className="text-md text-slate-700 mb-4">
            I am driven by a passion for filling crucial gaps in managerial and budgeting skills within the tech industry. My extensive experience across diverse academic and industrial sectors has underscored the importance of applying management skills beyond theoretical study, emphasizing their practical relevance in everyday context.
          </p>
          <div className="mb-4">
            <p className="font-semibold">Contact:</p>
            <p>dondeshrinish@gmail.com</p>
            <p>+4915224202916</p>
            <p>linkedin.com/in/shrinish-donde</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">WORK EXPERIENCE</h2>
          <div className="mb-4">
            <h3 className="font-semibold">5G Researcher</h3>
            <p className="text-sm text-slate-500">Fraunhofer Institute (01/2024 - Present)</p>
            <ul className="list-disc ml-5 mt-2 text-slate-700">
              <li>Created advanced algorithms for 5G and 6G testbed implementations</li>
              <li>Supervised a student in her part-time job, providing guidance and support</li>
              <li>Collaborated with two colleagues in the Spring of Code challenge, contributing to innovative projects</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Software Developer</h3>
            <p className="text-sm text-slate-500">Ericsson (12/2020 - 12/2023)</p>
            <ul className="list-disc ml-5 mt-2 text-slate-700">
              <li>Engineered software for Ericsson hardware systems</li>
              <li>Integrated Agile methodologies within the team and facilitated peer upskilling</li>
              <li>Mentored a thesis intern throughout their research project</li>
              <li>Contact: Andreas Paulsson - Eddie Corbett</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">System Developer</h3>
            <p className="text-sm text-slate-500">Scania Automotive Systems (06/2019 - 08/2019, Stockholm, Sweden)</p>
            <ul className="list-disc ml-5 mt-2 text-slate-700">
              <li>Developed and improved a simulator for calibration of trucks</li>
              <li>Worked with C# to create a web-based application and add features to the same</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">EDUCATION</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Course in IT Project Management</h3>
            <p className="text-sm text-slate-500">Stockholm University (08/2021 - Present)</p>
            <p className="text-slate-700">Agile project methodologies, Strategies, Benefit and Alignment</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Masters in Communication Systems</h3>
            <p className="text-sm text-slate-500">KTH Royal Inst. of Technology (08/2018 - 09/2020)</p>
            <p className="text-slate-700">Overall grade: 4/5</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Bachelors in Electronics Engineering</h3>
            <p className="text-sm text-slate-500">Mumbai University (04/2014 - 08/2018)</p>
            <p className="text-slate-700">Overall grade: 8/10</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">SKILLS</h2>
          <ul className="list-disc ml-5 text-slate-700">
            <li>Time management</li>
            <li>Teamwork</li>
            <li>Agile Software Development</li>
            <li>Critical thinking</li>
            <li>Software development (C, C++, Git)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">PUBLICATIONS</h2>
          <ul className="list-disc ml-5 text-slate-700">
            <li>Superoptimization of WebAssembly bytecode - ACM Digital Library · Mar 1, 2020</li>
            <li>Optimal Robot Localisation Techniques for Real World Scenarios - IEEE Xplore · Aug 18, 2018</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">EXTRA CURRICULARS</h2>
          <ul className="list-disc ml-5 text-slate-700">
            <li>Introduction to Generative AI (06/2024 - Present) - Online course offered by Google to learn more about Generative AI models</li>
            <li>Agile 101: Rapid learning cycles (2022) - Weekend workshop by Stockholm School of Entrepreneurship</li>
            <li>Foundations of project management by Google (05/2021) - Explored project management aspects and lifecycles</li>
            <li>Personal blog: <a href="https://reachingnewplaces.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">reachingnewplaces.wordpress.com</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">LANGUAGES</h2>
          <ul className="list-disc ml-5 text-slate-700">
            <li>English - Full Professional Proficiency</li>
            <li>Hindi - Full Professional Proficiency</li>
            <li>Marathi - Native or Bilingual Proficiency</li>
            <li>German A2.2 - Elementary Proficiency</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">INTERESTS</h2>
          <ul className="list-disc ml-5 text-slate-700">
            <li>I have learned keyboard for four years and can play any song by listening</li>
            <li>I enjoy fitness classes and swimming during the weekends</li>
            <li>I like to read news and stay up-to-date with the latest tech</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CV;
