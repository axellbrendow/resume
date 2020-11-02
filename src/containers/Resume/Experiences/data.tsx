import React from "react";

import { fmt } from "i18n/ConfiguredIntlProvider";

export interface ExperienceItem {
  period: React.ReactNode;
  name: React.ReactNode;
  description: React.ReactNode;
}

export interface Experience {
  title: React.ReactNode;
  titleIconClass: string;
  items: ExperienceItem[];
}

export const experiences = (): Experience[] => [
  {
    title: fmt({ id: "experiences.formation.title" }),
    titleIconClass: "graduation-cap",
    items: [
      {
        period: fmt({ id: "experiences.formation.graduation.period" }),
        name: fmt({ id: "experiences.formation.graduation.name" }),
        description: fmt({
          id: "experiences.formation.graduation.description",
        }),
      },
      {
        period: fmt({
          id: "experiences.formation.microservicesApplications.period",
        }),
        name: (
          <a href="https://drive.google.com/file/d/1JXXmYhfi-Sk0zwiEbBIEswDC6AFeyBlD/view?usp=sharing">
            {fmt({
              id: "experiences.formation.microservicesApplications.name",
            })}
          </a>
        ),
        description: (
          <>
            <ul>
              <li>
                <strong>React</strong> - TypeScript, Hooks, Redux
              </li>
              <li>
                <strong>Node.JS</strong> - Microservices, TypeScript,
                ElasticSearch, Messaging, Docker, Loopback
              </li>
              <li>
                <strong>DevOps</strong> - Git Flow, Docker, Continuous
                Integration, Continuous Deployment, Kubernetes, Monitoring
              </li>
              <li>
                <strong>Software Enginerring</strong> - Services and
                Microservices, Service Discovery, Queues and BFF
              </li>
              <li>
                <strong>Domain Driven Design</strong> - Ubiquitous Language,
                Bounded Contexts, Context Map and Strategic Modeling
              </li>
            </ul>
          </>
        ),
      },
      {
        period: fmt({ id: "experiences.formation.frontEndDev.period" }),
        name: (
          <a href="https://cursos.alura.com.br/user/axell-b/career/desenvolvedor-front-end/certificate">
            {fmt({ id: "experiences.formation.frontEndDev.name" })}
          </a>
        ),
        description: (
          <>
            {fmt({ id: "experiences.formation.frontEndDev.description" })}{" "}
            <a href="https://cursos.alura.com.br/user/axell-b">Alura</a>
          </>
        ),
      },
      {
        period: fmt({ id: "experiences.formation.levelUp.period" }),
        name: (
          <a href="https://icei.pucminas.br/levelup/">
            {fmt({ id: "experiences.formation.levelUp.name" })}
          </a>
        ),
        description: (
          <>{fmt({ id: "experiences.formation.levelUp.description" })}</>
        ),
      },
    ],
  },
  {
    titleIconClass: "folder",
    title: fmt({ id: "experiences.projects.title" }),
    items: [
      {
        period: <>{fmt({ id: "experiences.projects.omnistack10.period" })}</>,
        name: (
          <>
            <a href="https://github.com/axell-brendow/SemanaOmnistack10">
              {fmt({ id: "experiences.projects.omnistack10.name" })}
            </a>
          </>
        ),
        description: (
          <>
            {fmt({ id: "experiences.projects.omnistack10.description" })}{" "}
            <a href="https://rocketseat.com.br/week-10/inscricao">
              {fmt({ id: "experiences.projects.omnistack10.description2" })}
            </a>{" "}
            {fmt({ id: "experiences.projects.omnistack10.description3" })}{" "}
            <a href="https://rocketseat.com.br/">Rocketseat</a>.{" "}
            {fmt({ id: "experiences.projects.omnistack10.description4" })}{" "}
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:6624636245584818176/">
              {fmt({ id: "experiences.projects.omnistack10.description5" })}
            </a>
            .
          </>
        ),
      },
      {
        period: <>{fmt({ id: "experiences.projects.starWarsApp.period" })}</>,
        name: (
          <>
            <a href="https://github.com/axell-brendow/StarWarsApp">
              {fmt({ id: "experiences.projects.starWarsApp.name" })}
            </a>
          </>
        ),
        description: (
          <>
            {fmt({ id: "experiences.projects.starWarsApp.description" })}{" "}
            <a href="https://icei.pucminas.br/levelup/">Level Up</a>{" "}
            {fmt({ id: "experiences.projects.starWarsApp.description2" })}
          </>
        ),
      },
      {
        period: (
          <>{fmt({ id: "experiences.projects.machineLearningGame.period" })}</>
        ),
        name: (
          <>
            <a href="https://scratch.mit.edu/projects/300708903/">
              {fmt({ id: "experiences.projects.machineLearningGame.name" })}
            </a>
          </>
        ),
        description: (
          <>
            {fmt({
              id: "experiences.projects.machineLearningGame.description",
            })}{" "}
            <a href="https://scratch.mit.edu/projects/313216273/">
              {fmt({
                id: "experiences.projects.machineLearningGame.description2",
              })}
            </a>{" "}
            {fmt({
              id: "experiences.projects.machineLearningGame.description3",
            })}
          </>
        ),
      },
    ],
  },
  {
    titleIconClass: "building",
    title: fmt({ id: "experiences.experiences.title" }),
    items: [
      {
        period: (
          <>
            {fmt({ id: "experiences.experiences.internIoasys.period" })}
            <br />
            {fmt({ id: "experiences.experiences.internIoasys.period2" })}
          </>
        ),
        name: <>{fmt({ id: "experiences.experiences.internIoasys.name" })}</>,
        description: (
          <>
            <span style={{ textDecoration: "underline" }}>Back end</span>:{" "}
            {fmt({ id: "experiences.experiences.internIoasys.description" })}
            <br />
            <span style={{ textDecoration: "underline" }}>Front end</span>:{" "}
            {fmt({ id: "experiences.experiences.internIoasys.description2" })}
            <br />
            <a href="https://ioasys.com.br/">Ioasys</a>
          </>
        ),
      },
      {
        period: (
          <>
            {fmt({ id: "experiences.experiences.webDevIntern.period" })}
            <br />
            {fmt({ id: "experiences.experiences.webDevIntern.period2" })}
          </>
        ),
        name: <>{fmt({ id: "experiences.experiences.webDevIntern.name" })}</>,
        description: (
          <>
            {fmt({ id: "experiences.experiences.webDevIntern.description" })}
            <br />
            <a href="https://crc.pucminas.br/">
              {fmt({ id: "experiences.experiences.webDevIntern.description2" })}
            </a>{" "}
            - PUC Minas
          </>
        ),
      },
    ],
  },
  {
    titleIconClass: "laptop",
    title: fmt({ id: "experiences.interests.title" }),
    items: [
      {
        period: <></>,
        name: (
          <>{fmt({ id: "experiences.interests.softwareEngineering.name" })}</>
        ),
        description: (
          <>
            {fmt({
              id: "experiences.interests.softwareEngineering.description",
            })}
          </>
        ),
      },
      {
        period: <></>,
        name: (
          <>
            {fmt({ id: "experiences.interests.artificialIntelligence.name" })}
          </>
        ),
        description: (
          <>
            {fmt({
              id: "experiences.interests.artificialIntelligence.description",
            })}
          </>
        ),
      },
    ],
  },
];
