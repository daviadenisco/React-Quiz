
var quizQuestions = [
  {
      question: "What is the purpose of components?",
      answers: [
          {
              type: "Correct",
              value: 1,
              content: "Components tell React what to render."
          },
          {
              type: "Wrong1",
              value: 0,
              content: "Components are the wind beneath React's wings."
          },
          {
              type: "Wrong2",
              value: 0,
              content: "Components are from Mars, React is from Venus."
          }
      ]
  },
  {
      question: "What does render return?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "Whatever it wants, whenever it wants."
          },
          {
              type: "Wrong2",
              value: 0,
              content: "The single source of truth."
          },
          {
              type: "Correct",
              value: 1,
              content: "A React element, which is a lightweight description of what to render."
          }
      ]
  },
  {
      question: "When should you use a functional component instead of a class component?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "When there are no more icebergs."
          },
          {
              type: "Wrong2",
              value: 0,
              content: "When there is no country."
          },
          {
              type: "Correct",
              value: 1,
              content: "When there is no state."
          }
      ]
  },
  {
      question: "What is the difference between presentational and container components?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "Nothing, they're two ways of stating the same thing."
          },
          {
              type: "Wrong2",
              value: 0,
              content: "Presentational components prefer to dine out while container components prefer to order from seamless."
          },
          {
              type: "Correct",
              value: 1,
              content: "Container components are concerned with how things work, and presentational components should define how things look."
          }
      ]
  },
  {
      question: "React focuses on which of the following part when considering MVC?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "M (Model)"
          },
          {
              type: "Correct",
              value: 1,
              content: "V (View)"
          },
          {
              type: "Wrong2",
              value: 0,
              content: "C (Controller)"
          }
      ]
  },
  {
      question: "Which of the following needs to be updated to achieve dynamic UI updates?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "Props"
          },
          {
              type: "Wrong2",
              value: 0,
              content: "Render"
          },
          {
              type: "Correct",
              value: 1,
              content: "State"
          }
      ]
  },
  {
      question: "What does CDN stand for?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "Communication Depreciation Network"
          },
          {
              type: "Wrong2",
              value: 0,
              content: "Code Daily Network"
          },
          {
              type: "Correct",
              value: 1,
              content: "Content Delivery Network"
          }
      ]
  },
  {
      question: "What are React components?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "Large code blocks that can be rendered many times without updating state but cannot be returned."
          },
          {
              type: "Wrong2",
              value: 0,
              content: "Medium-sized, non-reusable pieces of code that need to be rendered before their state can be mutated."
          },
          {
              type: "Correct",
              value: 1,
              content: "Small, reusable pieces of code that return a React element to be rendered to the page."
          }
      ]
  },
  {
      question: "What are props?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "Props are read-only and rendered directly to the React.DOM."
          },
          {
              type: "Wrong2",
              value: 0,
              content: "Props are read-only, stateless, immutable components that render on their own."
          },
          {
              type: "Correct",
              value: 1,
              content: "Props are read-only and should not be modified in any way. They are inputs to a React component, passed down from a parent component to a child component."
          }
      ]
  },
  {
      question: "When does a component need state?",
      answers: [
          {
              type: "Wrong1",
              value: 0,
              content: "When the async/await function fails."
          },
          {
              type: "Correct",
              value: 1,
              content: "When some data associated with it changes over time."
          },
          {
              type: "Wrong2",
              value: 0,
              content: "When refactoring the render function with immutable props."
          }
      ]
  },
  {
      question: "What is the component's lifecycle in React?",
      answers: [
          {
              type: "Correct",
              value: 1,
              content: "Initializing -> Rendering -> Destroying"
          },
          {
              type: "Wrong1",
              value: 0,
              content: "Initializing -> Refactoring -> Rendering"
          },
          {
              type: "Wrong2",
              value: 0,
              content: "Initializing -> Updating State -> Rendering"
          }
      ]
  },
  {
      question: "What is React?",
      answers: [
          {
              type: "Correct",
              value: 1,
              content: "React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications."
          },
          {
              type: "Wrong1",
              value: 0,
              content: "A way to respond or behave in a particular way due to an event or occurrence."
          },
          {
              type: "Wrong2",
              value: 0,
              content: "A coding language that pulls from Javascript to allow props to be passed into functions for state changes and rendering purposes."
          }
      ]
  }
];

export default quizQuestions;
