// // src/components/Resume.tsx
// export default function Resume() {
//   return (
//     <div className="max-w-3xl mx-auto p-8 text-sm text-gray-800 print:text-black print:bg-white print:max-w-none">
//       <header className="mb-6">
//         <h2 className="text-2xl font-bold uppercase">Eric Wang</h2>
//         <p className="text-sm">Software Engineer</p>
//         <p>ewangsmk@gmail.com | 650-862-8236 | <a href="https://linkedin.com/in/eric-lee-wang" className="text-blue-600">LinkedIn</a></p>
//       </header>

//       <section className="mb-6">
//         <h3 className="font-semibold uppercase text-gray-700">Summary</h3>
//         <p>
//         Full stack software engineer, utilizing modern frontend frameworks like React JS to couple UI features with backend dependencies such as microservices and RESTful APIs. Thrives in remote, growth-
// centric teams that balance timely delivery of end to end projects with the flexibility of context switching, whether it's working with different engineers on production hotfixes or updating relational
// database schemas to reflect updated data metrics from product. Excels at cross team collaboration in an Agile work environment, utilizing proactive communication skills and holistic understanding of
// product requirements to be an effective project manager and an engineer thoroughly involved in the product development cycle.
//         </p>
//       </section>

//       <section className="mb-6">
//         <h3 className="font-semibold uppercase text-gray-700">Skills</h3>
//         <p><strong>Frontend Frameworks:</strong> React JS, Next JS, Node JS</p>
//         <p><strong>Backend and Infrastructure Tools:</strong> Ruby on Rails, Supabase, Cloudinary</p>
//         <p><strong>Languages:</strong> JavaScript, Ruby, SQL, TypeScript, HTML5, CSS, Python, Java, C</p>
//         <p><strong>Databases and Cloud Platforms:</strong> PostgreSQL, MySQL, AWS, Firebase</p>
//         <p><strong>Automated Testing:</strong> Jest, Selenium, Enzyme</p>
//         <p><strong>Project Management and Collaboration Tools:</strong> Jira, Figma, Asana, LaunchDarkly, Causal</p>
//         {/* Add more skill categories here */}
//       </section>

//       <section className="mb-6">
//         <h3 className="font-semibold uppercase text-gray-700">Employment</h3>
//         <div className="mt-2">
//           <h4 className="font-bold">Jobcase, Inc — Software Engineer</h4>
//           <p className="italic text-xs">Apr. 2021 – Jan. 2023, Oct. 2023 – May 2024</p>
//           <ul className="list-disc list-inside text-sm">
//             <li>Implemented new job application flows that utilized customizable overlays and dynamic user applicant data on React JS while concurrently updating backend Java MVC architecture, resulting in a
// monthly revenue increase of $70,000 and a 20% increase in conversion rate on the job application flow and a 5% revenue increase and 8% daily conversion rate increase for the new job results
// landing page </li>
//             <li>Spearheaded cultivation of collaborative environment by coordinating engineering requirements with QA and product teams for new features and working closely with different engineering code
//             owners on production hot-fixes while proactively managing communications among product, design, customer success, and engineering teams</li>
//             <li>Led team adoption of new Causal A/B testing framework by using TypeScript to integrate it within the frontend and guiding both engineering and product team members through the transition
//             away from LaunchDarkly</li>
//             <li>Constantly improved code base readability and efficiency through removal of obsolete code and reorganization of unordered components into an ordered, scalable structure with generalized,
//             reusable higher order JavaScript components</li>
//             <li>Supported engineers on different teams by aiding on code reviews, overseeing deployments and jumping on production level hotfixes</li>  
//             <li>Wrote and executed SQL queries to implement necessary database schemas updates based on shifting product needs</li>
//           </ul>
//         </div>
//         <div className="mt-2">
//           <h4 className="font-bold">Upward.net — Software Engineer</h4>
//           <p className="italic text-xs">Oct. 2020 – Apr. 2021</p>
//           <ul className="list-disc list-inside text-sm">
//             <li>Streamlined frontend development by building reusable React JS components for new interface overlays and interactive elements, and porting over existing JSP processes into the new React
//             framework</li>
//             <li>Optimized site response times through reformatting of data from string queries to JSON objects and rewriting frontend network calls to match up to new backend microservice APIs</li>
//             <li>Established an Asana workflow for the company and standardized QA protocol for new features, while also leading bi-weekly product meetings to showcase new engineering projects and foster
//             collaborative knowledge sharing</li>
//             <li>Directed test driven development practices by designing and building out Jest test framework for component unit testing and automated Selenium integration testing, establishing a foundation for
//             higher code quality and reliability</li>
//           </ul>
//           </div>
//           <div className="mt-2">
//           <h4 className="font-bold">Tract Learning, Inc. - Remote Engineering Consultant</h4>
//           <p className="italic text-xs">Oct. 2020 – Apr. 2021</p>
//           <ul className="list-disc list-inside text-sm">
//             <li>Project based contractor position with EdTech start up involving extensive analytical work and communications with design, engineering and product leads toward building effective educational
//             products</li>
//             <li>Headed the development and implementation of new features in React JS, specifically frontend integration of basic search using Algolia API and Firebase backend data, and a filter component for
//             displaying sorted student created content</li>
//           </ul>
//           </div>
//           <div className="mt-2">
//           <h4 className="font-bold">Edmodo, Inc. - Software Engineer</h4>
//           <p className="italic text-xs">Aug. 2017 – July 2020</p>
//           <ul className="list-disc list-inside text-sm">
//             <li>Project based contractor position with EdTech start up involving extensive analytical work and communications with design, engineering and product leads toward building effective educational
//             products</li>
//             <li>Headed the development and implementation of new features in React JS, specifically frontend integration of basic search using Algolia API and Firebase backend data, and a filter component for
//             displaying sorted student created content</li>
//           </ul>
//           </div>
//       </section>

//       <section className="mb-6">
//         <h3 className="font-semibold uppercase text-gray-700">Education</h3>
//         <p><strong>New York University</strong>, B.S. Media Culture Communications and Computer Science, Aug. 2013 -Dec 2016</p>
//       </section>
//       <section className="mb-6">
//         <h3 className="font-semibold uppercase text-gray-700">Creative and Technical Projects</h3>
//         <div className="mt-2">
//           <h4 className="font-bold">Edmodo, Inc. - Software Engineer</h4>
//           <p className="italic text-xs">Aug. 2017 – July 2020</p>
//           <ul className="list-disc list-inside text-sm">
//             <li>Project based contractor position with EdTech start up involving extensive analytical work and communications with design, engineering and product leads toward building effective educational
//             products</li>
//             <li>Headed the development and implementation of new features in React JS, specifically frontend integration of basic search using Algolia API and Firebase backend data, and a filter component for
//             displaying sorted student created content</li>
//           </ul>
//           </div>
//       </section>
//     </div>
//   );
// }
