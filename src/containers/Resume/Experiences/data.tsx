import React from "react";

import { fmt } from "i18n/ConfiguredI18nProvider";

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
    titleIconClass: "building",
    title: fmt({ id: "experiences.experiences.title" }),
    items: [
      {
        period: <>{fmt({ id: "experiences.experiences.zup.period" })}</>,
        name: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({ id: "experiences.experiences.zup.name" }),
            }}
          />
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({ id: "experiences.experiences.zup.description" }),
            }}
          />
        ),
      },
      {
        period: <>{fmt({ id: "experiences.experiences.google.period" })}</>,
        name: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({ id: "experiences.experiences.google.name" }),
            }}
          />
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({ id: "experiences.experiences.google.description" }),
            }}
          />
        ),
      },
      {
        period: <>{fmt({ id: "experiences.experiences.accenture.period" })}</>,
        name: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({ id: "experiences.experiences.accenture.name" }),
            }}
          />
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({
                id: "experiences.experiences.accenture.description",
              }),
            }}
          />
        ),
      },
      {
        period: (
          <>{fmt({ id: "experiences.experiences.internIoasys.period" })}</>
        ),
        name: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({ id: "experiences.experiences.internIoasys.name" }),
            }}
          />
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({
                id: "experiences.experiences.internIoasys.description",
              }),
            }}
          />
        ),
      },
      {
        period: (
          <>{fmt({ id: "experiences.experiences.webDevIntern.period" })}</>
        ),
        name: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({ id: "experiences.experiences.webDevIntern.name" }),
            }}
          />
        ),
        description: (
          <>{fmt({ id: "experiences.experiences.webDevIntern.description" })}</>
        ),
      },
    ],
  },
  {
    title: fmt({ id: "experiences.education.title" }),
    titleIconClass: "graduation-cap",
    items: [
      {
        period: fmt({ id: "experiences.education.graduation.period" }),
        name: fmt({ id: "experiences.education.graduation.name" }),
        description: fmt({
          id: "experiences.education.graduation.description",
        }),
      },
      {
        period: fmt({
          id: "experiences.education.fullCycle.period",
        }),
        name: (
          <a
            href="https://curso.fullcycle.com.br/curso-fullcycle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {fmt({
              id: "experiences.education.fullCycle.name",
            })}
          </a>
        ),
        description: (
          <>
            {fmt({
              id: "experiences.education.fullCycle.description",
            })}
            <ul>
              <li>
                <strong>DevOps</strong> - Git Flow, Docker, CI/CD, SonarQube,
                Kubernetes, Terraform, Ansible, Service Mesh (Istio), API
                Gateway, Kong, Rate Limiting, ElasticStack, Prometheus, Grafana,
                Open Telemetry.
              </li>
              <li>
                <strong>Software Engineering</strong> - Monoliths vs
                Microservices, SQL vs NoSQL, C4 Diagrams, Clean Code, SOLID,
                Hexagonal Architecture, Dependency Inversion, Dependency
                Injection, DDD, REST, BFF, gRPC, GraphQL, Service Discovery,
                RabbitMQ, Kafka, SAGA Pattern (Orchestration vs Choreography).
              </li>
              <li>
                <strong>Domain Driven Design</strong> - Ubiquitous Language,
                Bounded Contexts, Context Map, Strategic Modeling, Value
                Objects, Entities, Aggregates, Domain Services, Domain Events.
              </li>
              <li>
                <strong>Event Driven Architecture</strong> - Event notification,
                Event sourcing, Event collaboration, CQRS, Unit of Work.
              </li>
              <li>
                <strong>Java</strong> - Gradle, Groovy, Spring Boot, JUnit,
                Mockito.
              </li>
              <li>
                <strong>Golang</strong> - Goroutines, Workers, JobService.
              </li>
            </ul>
          </>
        ),
      },
      // {
      //   period: fmt({ id: "experiences.education.interJava.period" }),
      //   name: (
      //     <a
      //       href="https://drive.google.com/file/d/1FbcMmesNN53tPjX8OfAgH6RXAzNjQDAS/view?usp=drive_link"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       {fmt({ id: "experiences.education.interJava.name" })}
      //     </a>
      //   ),
      //   description: (
      //     <>{fmt({ id: "experiences.education.interJava.description" })}</>
      //   ),
      // },
      {
        period: <>{fmt({ id: "experiences.education.localizaLabs.period" })}</>,
        name: (
          <>
            <a
              href="https://github.com/matheussinnis/ProjetoLocalizaLabsAPI"
              target="_blank"
              rel="noopener noreferrer"
            >
              {fmt({ id: "experiences.education.localizaLabs.name" })}
            </a>
          </>
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({
                id: "experiences.education.localizaLabs.description",
              }),
            }}
          />
        ),
      },
      // {
      //   period: fmt({ id: "experiences.education.gftJava.period" }),
      //   name: (
      //     <a
      //       href="https://certificates.digitalinnovation.one/76784B06"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       {fmt({ id: "experiences.education.gftJava.name" })}
      //     </a>
      //   ),
      //   description: (
      //     <>{fmt({ id: "experiences.education.gftJava.description" })}</>
      //   ),
      // },
      {
        period: fmt({ id: "experiences.education.neuralNetworks.period" }),
        name: (
          <a
            href="https://www.coursera.org/learn/neural-networks-deep-learning"
            target="_blank"
            rel="noopener noreferrer"
          >
            {fmt({ id: "experiences.education.neuralNetworks.name" })}
          </a>
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({
                id: "experiences.education.neuralNetworks.description",
              }),
            }}
          />
        ),
      },
      // {
      //   period: fmt({ id: "experiences.education.frontEndDev.period" }),
      //   name: (
      //     <a
      //       href="https://cursos.alura.com.br/user/axellbrendow/career/desenvolvedor-front-end/certificate"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       {fmt({ id: "experiences.education.frontEndDev.name" })}
      //     </a>
      //   ),
      //   description: (
      //     <>
      //       {fmt({ id: "experiences.education.frontEndDev.description" })}{" "}
      //       <a
      //         href="https://cursos.alura.com.br/user/axellbrendow"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Alura
      //       </a>
      //     </>
      //   ),
      // },
    ],
  },
  // {
  //   titleIconClass: "folder",
  //   title: fmt({ id: "experiences.projects.title" }),
  //   items: [
  //     {
  //       period: <>{fmt({ id: "experiences.projects.localizaLabs.period" })}</>,
  //       name: (
  //         <>
  //           <a
  //             href="https://github.com/matheussinnis/ProjetoLocalizaLabsAPI"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             {fmt({ id: "experiences.projects.localizaLabs.name" })}
  //           </a>
  //         </>
  //       ),
  //       description: (
  //         <div
  //           dangerouslySetInnerHTML={{
  //             __html: fmt({
  //               id: "experiences.projects.localizaLabs.description",
  //             }),
  //           }}
  //         />
  //       ),
  //     },
  //     {
  //       period: (
  //         <>
  //           {fmt({ id: "experiences.projects.ecommerceMicroservices.period" })}
  //         </>
  //       ),
  //       name: (
  //         <>
  //           <a
  //             href="https://github.com/axellbrendow/dio-spring-ecommerce-microservices"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             {fmt({ id: "experiences.projects.ecommerceMicroservices.name" })}
  //           </a>
  //         </>
  //       ),
  //       description: (
  //         <div
  //           dangerouslySetInnerHTML={{
  //             __html: fmt({
  //               id: "experiences.projects.ecommerceMicroservices.description",
  //             }),
  //           }}
  //         />
  //       ),
  //     },
  //     {
  //       period: (
  //         <>{fmt({ id: "experiences.projects.webfluxStockQuote.period" })}</>
  //       ),
  //       name: (
  //         <>
  //           <a
  //             href="https://github.com/axellbrendow/dio-spring-webflux-stock-quote"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             {fmt({ id: "experiences.projects.webfluxStockQuote.name" })}
  //           </a>
  //         </>
  //       ),
  //       description: (
  //         <div
  //           dangerouslySetInnerHTML={{
  //             __html: fmt({
  //               id: "experiences.projects.webfluxStockQuote.description",
  //             }),
  //           }}
  //         />
  //       ),
  //     },
  //     {
  //       period: <>{fmt({ id: "experiences.projects.devOpsModule.period" })}</>,
  //       name: (
  //         <>
  //           <a
  //             href="https://github.com/axellbrendow/microservices-devops-challenge01"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             {fmt({ id: "experiences.projects.devOpsModule.name" })}
  //           </a>
  //         </>
  //       ),
  //       description: (
  //         <div
  //           dangerouslySetInnerHTML={{
  //             __html: fmt({
  //               id: "experiences.projects.devOpsModule.description",
  //             }),
  //           }}
  //         />
  //       ),
  //     },
  //     // {
  //     //   period: (
  //     //     <>{fmt({ id: "experiences.projects.imageProcessing.period" })}</>
  //     //   ),
  //     //   name: (
  //     //     <>
  //     //       <a
  //     //         href="https://github.com/axellbrendow/image-processing-work"
  //     //         target="_blank"
  //     //         rel="noopener noreferrer"
  //     //       >
  //     //         {fmt({ id: "experiences.projects.imageProcessing.name" })}
  //     //       </a>
  //     //     </>
  //     //   ),
  //     //   description: (
  //     //     <>{fmt({ id: "experiences.projects.imageProcessing.description" })}</>
  //     //   ),
  //     // },
  //   ],
  // },
  // {
  //   titleIconClass: "laptop",
  //   title: fmt({ id: "experiences.interests.title" }),
  //   items: [
  //     {
  //       period: <></>,
  //       name: <>{fmt({ id: "experiences.interests.english.name" })}</>,
  //       description: (
  //         <>
  //           {fmt({
  //             id: "experiences.interests.english.description",
  //           })}
  //         </>
  //       ),
  //     },
  //     {
  //       period: <></>,
  //       name: <>{fmt({ id: "experiences.interests.portuguese.name" })}</>,
  //       description: (
  //         <>
  //           {fmt({
  //             id: "experiences.interests.portuguese.description",
  //           })}
  //         </>
  //       ),
  //     },
  //     {
  //       period: <></>,
  //       name: (
  //         <>{fmt({ id: "experiences.interests.softwareEngineering.name" })}</>
  //       ),
  //       description: (
  //         <>
  //           {fmt({
  //             id: "experiences.interests.softwareEngineering.description",
  //           })}
  //         </>
  //       ),
  //     },
  //     {
  //       period: <></>,
  //       name: (
  //         <>
  //           {fmt({ id: "experiences.interests.artificialIntelligence.name" })}
  //         </>
  //       ),
  //       description: (
  //         <>
  //           {fmt({
  //             id: "experiences.interests.artificialIntelligence.description",
  //           })}
  //         </>
  //       ),
  //     },
  //   ],
  // },
];
