import { NavBarWrapper } from '@/components/custom/nav-bar-wrapper'
const About = () => {
  return (
    <div>
      <NavBarWrapper />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Everything About the Recipe Generator App
          </h1>
          <p className="text-gray-600">
            Welcome to my Recipe Generator App! This web application uses the
            power of OpenAI's API to create delicious and unique recipes based
            on your preferences and ingredients.
          </p>
          <p className="text-gray-600">
            The system analyses your input and generates recipes using advanced
            natural language processing models. Simply enter some keywords, and
            let the app do the rest. The generated recipes include step-by-step
            instructions, ingredients list, and tips for the best cooking
            experience.
          </p>
          <p className="text-gray-600">
            I am constantly updating the app to ensure the best user experience.
            My goal is to inspire and make cooking fun and accessible for
            everyone.
          </p>
          <p className="text-gray-600">
            Thank's for checking it out, happy cooking!
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Technologies Used
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Next.js:</strong> A React framework for building fast and
              scalable web applications.
            </li>
            <li>
              <strong>TypeScript:</strong> A typed superset of JavaScript that
              helps catch errors early and enhances code maintainability.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> A utility-first CSS framework for
              rapidly building custom user interfaces.
            </li>
            <li>
              <strong>OpenAI API:</strong> An advanced API for natural language
              processing and understanding, used to generate recipes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
