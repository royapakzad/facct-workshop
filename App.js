
import React from 'react';
import LinkButton from './components/LinkButton.js';
import ComputerDesktopIcon from './components/icons/ComputerDesktopIcon.js';
import PresentationChartBarIcon from './components/icons/PresentationChartBarIcon.js';
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
} from './constants.js'; // Ensure this points to the .js file

const App = () => {
  return (
    React.createElement("div", {
      className: "min-h-screen bg-stone-50 text-stone-700 flex flex-col items-center justify-center p-4 sm:p-8 font-sans"
    },
    React.createElement("main", {
      className: "bg-white shadow-2xl rounded-xl p-6 sm:p-10 max-w-3xl w-full my-8"
    },
    React.createElement("header", {
      className: "mb-10 text-center border-b-2 border-amber-200 pb-8"
    },
    React.createElement("h1", {
      className: "text-4xl sm:text-5xl font-bold text-amber-700 mb-4 leading-tight"
    }, WORKSHOP_TITLE),
    React.createElement("p", {
      className: "text-xl text-stone-500"
    }, SPEAKER_NAME)),
    React.createElement("section", {
      "aria-labelledby": "abstract-heading",
      className: "mb-10"
    },
    React.createElement("h2", {
      id: "abstract-heading",
      className: "text-3xl font-semibold text-amber-700 mb-5"
    }, WORKSHOP_ABSTRACT_HEADING),
    React.createElement("div", {
      className: "space-y-4 text-stone-700 leading-relaxed text-lg text-left"
    }, WORKSHOP_ABSTRACT.split('\\n').map((paragraph, index) => (
      React.createElement("p", {
        key: index
      }, paragraph)
    )))),
    React.createElement("section", {
      "aria-labelledby": "resources-heading",
      className: "mb-12"
    },
    React.createElement("h2", {
      id: "resources-heading",
      className: "text-3xl font-semibold text-amber-700 mb-8 text-center sm:text-left"
    }, RESOURCES_HEADING),
    React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-6"
    },
    React.createElement(LinkButton, {
      href: MINI_LAB_URL,
      text: MINI_LAB_TEXT,
      icon: React.createElement(ComputerDesktopIcon, {
        className: "w-7 h-7 mr-1"
      })
    }),
    React.createElement(LinkButton, {
      href: SLIDES_URL,
      text: SLIDES_TEXT,
      icon: React.createElement(PresentationChartBarIcon, {
        className: "w-7 h-7 mr-1"
      })
    }))),
    React.createElement("section", {
      "aria-labelledby": "logistical-need-heading",
      className: "bg-amber-50 border-l-4 border-amber-400 text-amber-800 p-6 rounded-md shadow-md mb-12"
    },
    React.createElement("h3", {
      id: "logistical-need-heading",
      className: "font-bold text-xl mb-2"
    }, LOGISTICAL_NEED_HEADING),
    React.createElement("p", {
      className: "text-lg"
    }, LOGISTICAL_NEED_TEXT)),
    React.createElement("section", {
      "aria-labelledby": "contact-heading",
      className: "mb-8 p-6 bg-stone-100 rounded-lg shadow-md"
    },
    React.createElement("h2", {
      id: "contact-heading",
      className: "text-3xl font-semibold text-amber-700 mb-5"
    }, CONTACT_HEADING),
    React.createElement("div", {
      className: "text-stone-700 space-y-3 text-lg"
    },
    React.createElement("p", {
      className: "font-semibold text-xl"
    }, CONTACT_NAME),
    React.createElement("p", null, CONTACT_TITLE_AFFILIATION),
    React.createElement("p", null, "Email: ",
    React.createElement("a", {
      href: CONTACT_EMAIL_LINK,
      className: "text-amber-700 hover:text-amber-800 hover:underline"
    }, CONTACT_EMAIL))))),
    React.createElement("footer", {
      className: "py-8 text-center text-stone-500 text-base"
    },
    React.createElement("p", null, FOOTER_TEXT)))
  );
};

export default App;
