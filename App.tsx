
import React from 'react';
import LinkButton from './components/LinkButton';
import ComputerDesktopIcon from './components/icons/ComputerDesktopIcon';
import PresentationChartBarIcon from './components/icons/PresentationChartBarIcon';
import {
  WORKSHOP_TITLE,
  SPEAKER_NAME,
  WORKSHOP_ABSTRACT_HEADING,
  WORKSHOP_ABSTRACT,
  RESOURCES_HEADING,
  MINI_LAB_TEXT,
  MINI_LAB_URL,
  SLIDES_TEXT,
  SLIDES_URL,
  LOGISTICAL_NEED_HEADING,
  LOGISTICAL_NEED_TEXT,
  CONTACT_HEADING,
  CONTACT_NAME,
  CONTACT_TITLE_AFFILIATION,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  FOOTER_TEXT
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-700 flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <main className="bg-white shadow-2xl rounded-xl p-6 sm:p-10 max-w-3xl w-full my-8">
        <header className="mb-10 text-center border-b-2 border-amber-200 pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-700 mb-4 leading-tight">
            {WORKSHOP_TITLE}
          </h1>
          <p className="text-xl text-stone-500">
            {SPEAKER_NAME}
          </p>
        </header>

        <section aria-labelledby="abstract-heading" className="mb-10">
          <h2 id="abstract-heading" className="text-3xl font-semibold text-amber-700 mb-5">
            {WORKSHOP_ABSTRACT_HEADING}
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed text-lg text-left">
            {WORKSHOP_ABSTRACT.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="resources-heading" className="mb-12">
          <h2 id="resources-heading" className="text-3xl font-semibold text-amber-700 mb-8 text-center sm:text-left">
            {RESOURCES_HEADING}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <LinkButton 
              href={MINI_LAB_URL} 
              text={MINI_LAB_TEXT} 
              icon={<ComputerDesktopIcon className="w-7 h-7 mr-1" />} 
            />
            <LinkButton 
              href={SLIDES_URL} 
              text={SLIDES_TEXT} 
              icon={<PresentationChartBarIcon className="w-7 h-7 mr-1" />} 
            />
          </div>
        </section>

        <section aria-labelledby="logistical-need-heading" className="bg-amber-50 border-l-4 border-amber-400 text-amber-800 p-6 rounded-md shadow-md mb-12">
          <h3 id="logistical-need-heading" className="font-bold text-xl mb-2">{LOGISTICAL_NEED_HEADING}</h3>
          <p className="text-lg">{LOGISTICAL_NEED_TEXT}</p>
        </section>

        <section aria-labelledby="contact-heading" className="mb-8 p-6 bg-stone-100 rounded-lg shadow-md">
          <h2 id="contact-heading" className="text-3xl font-semibold text-amber-700 mb-5">
            {CONTACT_HEADING}
          </h2>
          <div className="text-stone-700 space-y-3 text-lg">
            <p className="font-semibold text-xl">{CONTACT_NAME}</p>
            <p>{CONTACT_TITLE_AFFILIATION}</p>
            <p>
              Email: <a href={CONTACT_EMAIL_LINK} className="text-amber-700 hover:text-amber-800 hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center text-stone-500 text-base">
        <p>{FOOTER_TEXT}</p>
      </footer>
    </div>
  );
};

export default App;
