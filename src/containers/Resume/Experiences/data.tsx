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
          <a href="https://drive.google.com/file/d/1MdN-qK_8Pfg6YI3TSfSa5_2-FHmqGxEP/view?usp=sharing" target="_blank">
            {fmt({
              id: "experiences.formation.microservicesApplications.name",
            })}
          </a>
        ),
        description: (
          <>
            <ul>
              <li>
                <strong>DevOps</strong> - Git Flow, Docker, CI/CD, Kubernetes,
                Terraform, Ansible, Service Mesh (Istio), ElasticStack and Prometheus.
              </li>
              <li>
                <strong>Software Engineering</strong> - Services and Microservices,
                DDD, REST, gRPC, GraphQL, Service Discovery, RabbitMQ, Kafka and BFF
              </li>
              <li>
                <strong>Domain Driven Design</strong> - Ubiquitous Language,
                Bounded Contexts, Context Map and Strategic Modeling
              </li>
              <li>
                <strong>Node.JS</strong> - Microservices, TypeScript,
                ElasticSearch, Messaging, Docker, Loopback
              </li>
              <li>
                <strong>Golang</strong> - Goroutines, Workers, JobService
              </li>
            </ul>
          </>
        ),
      },
      {
        period: fmt({ id: "experiences.formation.interJava.period" }),
        name: (
          <a href="https://certificates.digitalinnovation.one/247D11F0" target="_blank">
            {fmt({ id: "experiences.formation.interJava.name" })}
          </a>
        ),
        description: (
          <>{fmt({ id: "experiences.formation.interJava.description" })}</>
        ),
      },
      {
        period: fmt({ id: "experiences.formation.gftJava.period" }),
        name: (
          <a href="https://certificates.digitalinnovation.one/76784B06" target="_blank">
            {fmt({ id: "experiences.formation.gftJava.name" })}
          </a>
        ),
        description: (
          <>{fmt({ id: "experiences.formation.gftJava.description" })}</>
        ),
      },
      {
        period: fmt({ id: "experiences.formation.frontEndDev.period" }),
        name: (
          <a href="https://cursos.alura.com.br/user/axell-b/career/desenvolvedor-front-end/certificate" target="_blank">
            {fmt({ id: "experiences.formation.frontEndDev.name" })}
          </a>
        ),
        description: (
          <>
            {fmt({ id: "experiences.formation.frontEndDev.description" })}{" "}
            <a href="https://cursos.alura.com.br/user/axell-b" target="_blank">Alura</a>
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
            {fmt({ id: "experiences.experiences.accenture.period" })}
            <br />
            {fmt({ id: "experiences.experiences.accenture.period2" })}
          </>
        ),
        name:
          <div dangerouslySetInnerHTML={{
            __html: fmt({ id: "experiences.experiences.accenture.name" })
          }} />,
        description: (
          <div dangerouslySetInnerHTML={{
            __html: fmt({ id: "experiences.experiences.accenture.description" })
          }} />
        ),
      },
      {
        period: (
          <>
            {fmt({ id: "experiences.experiences.internIoasys.period" })}
            <br />
            {fmt({ id: "experiences.experiences.internIoasys.period2" })}
          </>
        ),
        name:
          <div dangerouslySetInnerHTML={{
            __html: fmt({ id: "experiences.experiences.internIoasys.name" })
          }} />,
        description: (
          <div dangerouslySetInnerHTML={{
            __html: fmt({ id: "experiences.experiences.internIoasys.description" })
          }} />
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
        name: 
        <div dangerouslySetInnerHTML={{
          __html: fmt({ id: "experiences.experiences.webDevIntern.name" })
        }} />,
        description: (
          <>
            {fmt({ id: "experiences.experiences.webDevIntern.description" })}
          </>
        ),
      },
    ],
  },
  {
    titleIconClass: "folder",
    title: fmt({ id: "experiences.projects.title" }),
    items: [
      {
        period: <>{fmt({ id: "experiences.projects.localizaLabs.period" })}</>,
        name: (
          <>
            <a href="https://github.com/matheussinnis/ProjetoLocalizaLabsAPI" target="_blank">
              {fmt({ id: "experiences.projects.localizaLabs.name" })}
            </a>
          </>
        ),
        description: (
          <div dangerouslySetInnerHTML={{
            __html: fmt({ id: "experiences.projects.localizaLabs.description" })
          }} />
        ),
      },
      {
        period: <>{fmt({ id: "experiences.projects.ecommerceMicroservices.period" })}</>,
        name: (
          <>
            <a href="https://github.com/axell-brendow/dio-spring-ecommerce-microservices" target="_blank">
              {fmt({ id: "experiences.projects.ecommerceMicroservices.name" })}
            </a>
          </>
        ),
        description: (
          <div dangerouslySetInnerHTML={{
            __html: fmt({ id: "experiences.projects.ecommerceMicroservices.description" })
          }} />
        ),
      },
      {
        period: <>{fmt({ id: "experiences.projects.webfluxStockQuote.period" })}</>,
        name: (
          <>
            <a href="https://github.com/axell-brendow/dio-spring-webflux-stock-quote" target="_blank">
              {fmt({ id: "experiences.projects.webfluxStockQuote.name" })}
            </a>
          </>
        ),
        description: (
          <div dangerouslySetInnerHTML={{
            __html: fmt({ id: "experiences.projects.webfluxStockQuote.description" })
          }} />
        ),
      },
      {
        period: <>{fmt({ id: "experiences.projects.devOpsModule.period" })}</>,
        name: (
          <>
            <a href="https://github.com/axell-brendow/microservices-devops-challenge01" target="_blank">
              {fmt({ id: "experiences.projects.devOpsModule.name" })}
            </a>
          </>
        ),
        description: (
          <div dangerouslySetInnerHTML={{
            __html: fmt({ id: "experiences.projects.devOpsModule.description" })
          }} />
        ),
      },
      // {
      //   period: (
      //     <>{fmt({ id: "experiences.projects.imageProcessing.period" })}</>
      //   ),
      //   name: (
      //     <>
      //       <a href="https://github.com/axell-brendow/image-processing-work" target="_blank">
      //         {fmt({ id: "experiences.projects.imageProcessing.name" })}
      //       </a>
      //     </>
      //   ),
      //   description: (
      //     <>{fmt({ id: "experiences.projects.imageProcessing.description" })}</>
      //   ),
      // },
    ],
  },
  {
    titleIconClass: "laptop",
    title: fmt({ id: "experiences.interests.title" }),
    items: [
      {
        period: <></>,
        name: (
          <>{fmt({ id: "experiences.interests.english.name" })}</>
        ),
        description: (
          <>
            {fmt({
              id: "experiences.interests.english.description",
            })}
          </>
        ),
      },
      {
        period: <></>,
        name: (
          <>{fmt({ id: "experiences.interests.portuguese.name" })}</>
        ),
        description: (
          <>
            {fmt({
              id: "experiences.interests.portuguese.description",
            })}
          </>
        ),
      },
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
