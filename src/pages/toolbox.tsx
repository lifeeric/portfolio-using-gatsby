import * as React from "react"
import NProgress from "nprogress"
import { useState } from "react"
import { Layout } from "../layout/layout"
import { HeadingTitle } from "../components/HeadingTitle/HeadingTitle"
import { SkillList } from "../components/SkillList/SkillList"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function Toolbox() {
  /** Start Loading page */
  NProgress.start()
  React.useEffect(() => {
    NProgress.done()
    return () => {
      NProgress.remove()
    }
  })

  const [skills] = useState([
    {
      id: 1,
      label: "HTML5",
      description:
        "A markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard.",
      comment: "There is no web without HTML.",
    },
    {
      id: 2,
      label: "CSS/CSS3",
      description:
        "Cascading Style Sheets - a style sheet language used for describing the presentation of a document written in HTML",
      comment: "CSS makes the web beautiful.",
    },
    {
      id: 3,
      label: "SCSS/SASS",
      description:
        "A scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
      comment: "SASS helps me write and manage CSS code faster.",
    },
    {
      id: 31,
      label: "BEM",
      description:
        "BEM (Block, Element, Modifier) is a component-based approach to web development.",
    },
    {
      id: 4,
      label: "BootStrap4+",
      description:
        "Bootstrap 4  is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites.",
      comment:
        "BootStrap helped me alot to learn new thing without focuing UI.",
    },
    {
      id: 5,
      label: "TypeScript",
      description:
        "TypeScript brings you optional static type-checking along with the latest ECMAScript features.",
      comment:
        "TypeScript not only work faster, but also can catch a ton of error before they arise.",
    },
    {
      id: 6,
      label: "JavaScript",
      description:
        "Often abbreviated as JS, it is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language.",
      comment:
        "That's the only programing language I use on a daily basis. And I love it!.",
    },
    {
      id: 7,
      label: "ES6+",
      description:
        "It's a pseudonym for the latest version of the ECMAScript aka JavaScript.",
    },
    {
      id: 8,
      label: "Babel",
      description:
        "A transpiler for JavaScript best known for its ability to turn ES2015 into code that runs in browsers which does not support it directly. It lets us use next generation JavaScript, today.",
      comment: "That's a must-have tool.",
    },
    {
      id: 9,
      label: "Webpack",
      description:
        "An open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.",
    },
    {
      id: 10,
      label: "Gulp",
      description:
        "Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks. At a high level, gulp reads files as streams and pipes the streams to different tasks. ",
    },
    {
      id: 11,
      label: "NPM",
      description: "A package manager for the JavaScript programming language.",
    },
    {
      id: 12,
      label: "Yarn",
      description: "A package manager for the JavaScript programming language.",
    },
    {
      id: 13,
      label: "Git",
      description:
        "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.",
      comment: "It saved my life, a couple of times ;)",
    },
    {
      id: 14,
      label: "GitHub",
      description:
        "A web-based Git version control repository hosting service.",
    },
    {
      id: 15,
      label: "React",
      description:
        "A JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Build encapsulated components that manage their own state and then compose them to make complex UIs.",
      comment: "I've been in love since using it for the first time.",
    },
    {
      id: 16,
      label: "Gatsby",
      description:
        "A static PWA (Progressive Web App) generator. Gatsby lets you build blazing-fast sites with your data, whatever the source.",
      comment:
        "The Graphcool framework and its Cloud service manages the GraphQL backend for my app.",
    },
    {
      id: 17,
      label: "Material-UI",
      description:
        "React components for faster and easier web development. Build your own design system, or start with Material Design.",
    },
    {
      id: 18,
      label: "Redux",
      description:
        "Redux maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly. When something changes, a new object is created (using actions and reducers).",
    },
    {
      id: 19,
      label: "React Router",
      description:
        "React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.",
    },
    {
      id: 20,
      label: "Node",
      description:
        "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
    },
    {
      id: 21,
      label: "ExpressJs",
      description:
        "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs.",
    },
    {
      id: 22,
      label: "RESTful",
      description:
        "A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data. An API for a website is code that allows two software programs to communicate with each other.",
    },
    {
      id: 23,
      label: "GraphQL",
      description:
        " GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
      comment:
        "The Graphcool framework and its Cloud service manages the GraphQL backend for my app.",
    },
    {
      id: 24,
      label: "MongoDB",
      description:
        "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents",
    },
    {
      id: 25,
      label: "MySQL",
      description:
        "MySQL is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications.",
    },
    {
      id: 26,
      label: "WordPress",
      description:
        "The largest self-hosted blogging tool in the world, used on millions of sites.",
      comment: "I've built some websites using it. Like it",
    },
    {
      id: 27,
      label: "Shopify",
      description:
        "Shopify is a subscription to a software service that offers you to create a website and use their shopping cart solution to sell, ship, and manage your products. ",
      comment: "I've built some websites using it. Like it",
    },
    {
      id: 28,
      label: "Bash",
      description:
        "Bash is a command language interpreter. It is widely available on various operating systems and is a default command interpreter on most GNU/Linux systems. The name is an acronym for the 'Bourne-Again SHell'",
      comment:
        "I love using Bash language for common tasks in linux to save time.",
    },
    {
      id: 29,
      label: "PHP",
      description:
        "It's an open source, server-side, scripting language used for the development of web applications. By scripting language, we mean a program that is script-based (lines of code) written for the automation of tasks.",
    },
    {
      id: 30,
      label: "Figma",
      description:
        "Figma is a digital design and prototyping tool. It is a UI and UX design application that you can use it to create websites, apps, or smaller user interface components that can be integrated into other projects",
    },
  ])

  return (
    <Layout>
      <HeadingTitle sm>
        These are pieces of <span className="bold">my toolbox</span>
      </HeadingTitle>

      {/* Skills list */}
      <div
        css={css`
          display: inline-flex;
          flex-wrap: wrap;
          align-items: flex-start;
        `}
      >
        {skills.map(skill => (
          <SkillList
            key={skill.id}
            label={skill.label}
            description={skill.description}
            comment={skill.comment}
          />
        ))}
      </div>
    </Layout>
  )
}
