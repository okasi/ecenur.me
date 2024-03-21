import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";

export default function SkillsSection() {
  return (
    <BrickSection>
      <TitleTag>Skills</TitleTag>

      <div className="flex flex-col md:flex-row justify-center md:space-x-32 mt-8">
        <div className="bg-accent-green flex-col items-center md:w-[264px] rounded-2xl p-6">
          <h3 className="font-display text-3xl border-b-2 w-fit mx-auto">
            Soft skills
          </h3>
          <ul
            className={`mt-4 list-image-[url("data:image/svg+xml,%3Csvg%20width%3D%2727%27%20height%3D%2727%27%20viewBox%3D%270%200%2027%2027%27%20fill%3D%27none%27%20xmlns%3D%27http:%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M1%2021.7241C3.53858%2016.1541%206.56302%2010.6248%209.69328%205.62503C10.3724%204.54033%2010.9983%203.17622%2011.8147%202.26938C12.209%201.83141%2012.6875%201.56844%2013.0756%201.14084C13.5651%200.601624%2013.5598%201.74655%2013.6839%202.28935C14.4535%205.65716%2014.3383%209.49577%2014.6927%2012.9655C15.0533%2016.4966%2015.593%2019.8517%2016.6509%2023.1223C16.9723%2024.1162%2018.075%2026.8329%2018.075%2025.7489C18.075%2025.2585%2016.9516%2023.687%2016.6954%2023.342C15.0773%2021.1635%2013.4049%2018.9846%2011.7405%2016.8704C10.6038%2015.4266%209.51344%2013.9023%208.29138%2012.586C7.38434%2011.609%206.3789%2010.8356%205.47274%209.85953C4.68925%209.01561%203.88827%208.23376%203.07689%207.44267C2.73201%207.10641%202.22699%206.86388%201.9346%206.44396C1.89021%206.38021%204.80697%206.40937%205.15378%206.44396C8.75852%206.80348%2012.3339%207.85682%2015.9388%208.32153C18.7969%208.68998%2021.616%208.78093%2024.4837%208.78093C24.9965%208.78093%2025.4584%208.77068%2025.9524%208.9607C26.2307%209.06777%2025.2049%209.65209%2025.0474%209.75966C22.5282%2011.4803%2019.779%2012.7138%2017.1478%2014.0841C13.7242%2015.867%2010.2341%2017.5336%206.74112%2019.0476C5.33895%2019.6554%203.82043%2020.0453%202.46866%2020.8253%27%20stroke%3D%27%23624673%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E")]`}
          >
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Adaptability</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Collaboration</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">
                Critical thinking
              </span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Empathy</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Organization</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">
                Problem-solving
              </span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">
                Strategic thinking
              </span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Teamwork</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">
                Growth mindset
              </span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">
                Willingness to learn
              </span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">
                Curiosity and continuous learning
              </span>
            </li>
          </ul>
        </div>

        <hr className="mt-16 mb-8 w-0 border-0 border-l h-auto hidden md:block" />

        <div className="bg-accent-beige flex-col items-center md:w-[264px] rounded-2xl p-6 mt-8 md:mt-0">
          <h3 className="font-display text-3xl border-b-2 w-fit mx-auto">
            Hard Skills
          </h3>
          <ul
            className={`mt-4 list-image-[url("data:image/svg+xml,%3Csvg%20width%3D%2727%27%20height%3D%2727%27%20viewBox%3D%270%200%2027%2027%27%20fill%3D%27none%27%20xmlns%3D%27http:%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M1%2021.7241C3.53858%2016.1541%206.56302%2010.6248%209.69328%205.62503C10.3724%204.54033%2010.9983%203.17622%2011.8147%202.26938C12.209%201.83141%2012.6875%201.56844%2013.0756%201.14084C13.5651%200.601624%2013.5598%201.74655%2013.6839%202.28935C14.4535%205.65716%2014.3383%209.49577%2014.6927%2012.9655C15.0533%2016.4966%2015.593%2019.8517%2016.6509%2023.1223C16.9723%2024.1162%2018.075%2026.8329%2018.075%2025.7489C18.075%2025.2585%2016.9516%2023.687%2016.6954%2023.342C15.0773%2021.1635%2013.4049%2018.9846%2011.7405%2016.8704C10.6038%2015.4266%209.51344%2013.9023%208.29138%2012.586C7.38434%2011.609%206.3789%2010.8356%205.47274%209.85953C4.68925%209.01561%203.88827%208.23376%203.07689%207.44267C2.73201%207.10641%202.22699%206.86388%201.9346%206.44396C1.89021%206.38021%204.80697%206.40937%205.15378%206.44396C8.75852%206.80348%2012.3339%207.85682%2015.9388%208.32153C18.7969%208.68998%2021.616%208.78093%2024.4837%208.78093C24.9965%208.78093%2025.4584%208.77068%2025.9524%208.9607C26.2307%209.06777%2025.2049%209.65209%2025.0474%209.75966C22.5282%2011.4803%2019.779%2012.7138%2017.1478%2014.0841C13.7242%2015.867%2010.2341%2017.5336%206.74112%2019.0476C5.33895%2019.6554%203.82043%2020.0453%202.46866%2020.8253%27%20stroke%3D%27%23624673%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E")]`}
          >
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Agile</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Design System</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Visual design</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Personas</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">UX Research</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">User Journey</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">User Flow</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Empathy Map</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Wireframe</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">Prototype</span>
            </li>
            <li className="ml-8">
              <span className="relative -top-[7px] text-lg">
                Requirement and project management
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-brand-tertiary flex-col items-center md:w-[462px] rounded-2xl p-6 mt-8 mx-auto mb-8">
        <h3 className="font-display text-3xl border-b-2 w-fit mx-auto">
          Languages
        </h3>
        <ul className="mt-4 list-none text-lg">
          <li className="flex flex-row justify-between space-x-2">
            <span className="font-bold">English</span>
            <span className="w-72">Full professional proficiency</span>
          </li>
          <li className="flex flex-row justify-between space-x-2">
            <span className="font-bold">Swedish</span>
            <span className="w-72">Professional working proficiency</span>
          </li>
          <li className="flex flex-row justify-between space-x-2">
            <span className="font-bold">Turkish</span>
            <span className="w-72">Native proficiency</span>
          </li>
        </ul>
      </div>
    </BrickSection>
  );
}
