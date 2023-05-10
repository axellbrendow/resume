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
          id: "experiences.education.microservicesApplications.period",
        }),
        name: (
          <a
            href="https://drive.google.com/file/d/1bJnFxQPKgSsI30sCvW-KzYK4V5JWzgSs/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {fmt({
              id: "experiences.education.microservicesApplications.name",
            })}
          </a>
        ),
        description: (
          <>
            {fmt({
              id:
                "experiences.education.microservicesApplications.introduction",
            })}
            <ul>
              <li>
                <strong>DevOps</strong> - Git Flow, Docker, CI/CD, Kubernetes,
                Terraform, Ansible, Service Mesh (Istio), ElasticStack and
                Prometheus.
              </li>
              <li>
                <strong>Software Engineering</strong> - Services and
                Microservices, DDD, REST, gRPC, GraphQL, Service Discovery,
                RabbitMQ, Kafka and BFF
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
        period: fmt({ id: "experiences.education.interJava.period" }),
        name: (
          <a
            href="https://certificates.digitalinnovation.one/247D11F0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {fmt({ id: "experiences.education.interJava.name" })}
          </a>
        ),
        description: (
          <>{fmt({ id: "experiences.education.interJava.description" })}</>
        ),
      },
      {
        period: fmt({ id: "experiences.education.gftJava.period" }),
        name: (
          <a
            href="https://certificates.digitalinnovation.one/76784B06"
            target="_blank"
            rel="noopener noreferrer"
          >
            {fmt({ id: "experiences.education.gftJava.name" })}
          </a>
        ),
        description: (
          <>{fmt({ id: "experiences.education.gftJava.description" })}</>
        ),
      },
      {
        period: fmt({ id: "experiences.education.frontEndDev.period" }),
        name: (
          <a
            href="https://cursos.alura.com.br/user/axellbrendow/career/desenvolvedor-front-end/certificate"
            target="_blank"
            rel="noopener noreferrer"
          >
            {fmt({ id: "experiences.education.frontEndDev.name" })}
          </a>
        ),
        description: (
          <>
            {fmt({ id: "experiences.education.frontEndDev.description" })}{" "}
            <a
              href="https://cursos.alura.com.br/user/axellbrendow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alura
            </a>
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
    titleIconClass: "folder",
    title: fmt({ id: "experiences.projects.title" }),
    items: [
      {
        period: <>{fmt({ id: "experiences.projects.localizaLabs.period" })}</>,
        name: (
          <>
            <a
              href="https://github.com/matheussinnis/ProjetoLocalizaLabsAPI"
              target="_blank"
              rel="noopener noreferrer"
            >
              {fmt({ id: "experiences.projects.localizaLabs.name" })}
            </a>
          </>
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({
                id: "experiences.projects.localizaLabs.description",
              }),
            }}
          />
        ),
      },
      {
        period: (
          <>
            {fmt({ id: "experiences.projects.ecommerceMicroservices.period" })}
          </>
        ),
        name: (
          <>
            <a
              href="https://github.com/axellbrendow/dio-spring-ecommerce-microservices"
              target="_blank"
              rel="noopener noreferrer"
            >
              {fmt({ id: "experiences.projects.ecommerceMicroservices.name" })}
            </a>
          </>
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({
                id: "experiences.projects.ecommerceMicroservices.description",
              }),
            }}
          />
        ),
      },
      {
        period: (
          <>{fmt({ id: "experiences.projects.webfluxStockQuote.period" })}</>
        ),
        name: (
          <>
            <a
              href="https://github.com/axellbrendow/dio-spring-webflux-stock-quote"
              target="_blank"
              rel="noopener noreferrer"
            >
              {fmt({ id: "experiences.projects.webfluxStockQuote.name" })}
            </a>
          </>
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({
                id: "experiences.projects.webfluxStockQuote.description",
              }),
            }}
          />
        ),
      },
      {
        period: <>{fmt({ id: "experiences.projects.devOpsModule.period" })}</>,
        name: (
          <>
            <a
              href="https://github.com/axellbrendow/microservices-devops-challenge01"
              target="_blank"
              rel="noopener noreferrer"
            >
              {fmt({ id: "experiences.projects.devOpsModule.name" })}
            </a>
          </>
        ),
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: fmt({
                id: "experiences.projects.devOpsModule.description",
              }),
            }}
          />
        ),
      },
      // {
      //   period: (
      //     <>{fmt({ id: "experiences.projects.imageProcessing.period" })}</>
      //   ),
      //   name: (
      //     <>
      //       <a
      //         href="https://github.com/axellbrendow/image-processing-work"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
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
        name: <>{fmt({ id: "experiences.interests.english.name" })}</>,
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
        name: <>{fmt({ id: "experiences.interests.portuguese.name" })}</>,
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
