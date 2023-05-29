import React from "react";
import Head from "next/head";

import {
  HeaderResponsive,
  FooterResponsive,
  HeaderSimple,
  HeaderLoggedResponsive,
  PasswordField,
  BarChart,
  CommentsBox,
  DayPicker,
  FooterSimple,
  HorizontalMenu,
  JobCard,
  JobNotificationList,
  NotificationIcon,
  TagsList,
} from "@catho-private/catho-components";
import { color } from "d3-color";

export default function CathoComponentsPage() {
  return (
    <>
      <Head>
        <title>Catho Components - SSR-Simulator</title>
      </Head>
      <div class="ComponentsContainer ColoredBackground">
        <h4 class="TextFormatting">Headers</h4>
        <h6>
          These are responsive Headers for all Catho applications. They follow
          Catho's style guide and its needs.
        </h6>

        <h5>Header Responsive</h5>
        <HeaderResponsive
          type="B2C"
          isSubMenuOpen={false}
          gtmPrefix="next-header-b2c-nosearch"
          hasSearch
        />
        <h5>Logged Header Responsive</h5>
        <HeaderLoggedResponsive userProfile="STATUS_I_PROFISSIONAL" hasSearch />
        <h5>Simple Header</h5>
        <HeaderSimple gtmPrefix="next" />
      </div>
      <div class=" ComponentsContainer  FlexContainer ColoredBackground">
        <div class="PasswordAndBarChartContainer RoundedEdges WhiteBackground PaddingLeftRight">
          <h4>Password Field</h4>
          <h6>
            Password Field is a component used when a password input with
            validations is needed.
          </h6>
          <PasswordField
            password={{ label: "Password" }}
            onValidate={(valid) => {
              console.log("valid", valid);
            }}
          />
        </div>
        <div class="PasswordAndBarChartContainer RoundedEdges WhiteBackground PaddingLeftRight">
          <h4>BarChart</h4>
          <h6>
            A simplebar chart component. Used to show sorted data in columns.
          </h6>
          <BarChart
            data={[
              {
                name: "Jan",
                value: 4000,
                tooltip: "R$ 4000",
              },
              {
                name: "Fev",
                value: 3500,
                tooltip: "R$ 3500",
              },
              {
                name: "Mar",
                value: 2000,
                tooltip: "R$ 2000",
              },
              {
                name: "Apr",
                value: 3000,
                tooltip: "R$ 3000",
              },
              {
                name: "May",
                value: 3880,
                tooltip: "R$ 3800",
              },
              {
                name: "Jun",
                value: 4100,
                tooltip: "R$ 4100",
              },
            ]}
          />
        </div>
      </div>

      <div class="CommentsBoxContainer ColoredBackground">
        <CommentsBox>
          <p>This is a test message for the CommentsBox component</p>
        </CommentsBox>
      </div>

      <div class="FlexContainer ColoredBackground PaddingTopBotttom ">
        <JobCard
          jobID="123"
          jobURL="https://www.catho.com.br"
          name="JobCard"
          company={{
            name: "This is a JobCard",
            avatar: undefined,
            isConfidential: false,
            stamps: [
              {
                icon: "person",
                description: "",
              },
            ],
          }}
          salaryRange="R$0-R$99999"
          benefits={[
            {
              name: "Alimentação",
              icon: "receipt",
            },
          ]}
          publishDate={new Date(2023, 5, 25, 13).getTime()}
          updateDate={new Date(2023, 4, 25, 13).getTime()}
          locations={[
            {
              name: "Remote",
              quantity: 15,
              url: "https://www.catho.com.br",
            },
          ]}
          quantityTotal={10}
          description="Job Card is a component to standardise Catho's job posting."
          isPCD={false}
          isExtended={false}
          isCompatible={false}
          isFavorite={false}
          cta={{
            type: "DEFAULT",
            dateSent: new Date(2022, 6, 10, 13).getTime(),
            timeToUmblock: new Date(2022, 6, 10, 14).getTime(),
            subscribeLink: "https://www.catho.com.br",
          }}
        />

        <div>
          <div class="WhiteBackground RoundedEdges PaddingLeftRight MarginTopBottom">
            <h4>JobNotificationList</h4>
            <h6>A simple list of cards of job notifications.</h6>
            <JobNotificationList
              data={[
                {
                  id: "123",
                  title: "Designer de Produtos, UX Design",
                  qtde: 290,
                  city: [
                    {
                      name: "São Paulo",
                      uf: "SP",
                    },
                  ],
                  state: [],
                  url: "https://www.catho.com.br/vagas/ux-designer/?q=ux%20designer",
                },
                {
                  id: "123",
                  title: "Designer de Produtos, UX Design",
                  qtde: 130,
                  city: [
                    {
                      name: "Rio de Janeiro",
                      uf: "RJ",
                    },
                  ],
                  state: [],
                  url: "https://www.catho.com.br/vagas/ux-designer/?q=ux%20designer",
                },
                {
                  id: "123",
                  title: "Designer de Produtos, UX Design",
                  qtde: 98,
                  city: [
                    {
                      name: "Betim",
                      uf: "MG",
                    },
                  ],
                  state: [],
                  url: "https://www.catho.com.br/vagas/ux-designer/?q=ux%20designer",
                },
              ]}
            />
          </div>
          <div class="WhiteBackground RoundedEdges PaddingLeftRight MarginTopBottom PaddingTopBotttom">
            <h5>DayPicker</h5>
            <h6>DayPicker allows the user to select a day or a set of days.</h6>
            <DayPicker />
          </div>
          <div class="HorizontalMenuContainer WhiteBackground RoundedEdges PaddingLeftRight MarginTopBottom PaddingTopBotttom">
            <h5>HoritonzalMenu</h5>
            <h6>A mobile navigation bar with a text and an icon.</h6>
            <HorizontalMenu
              items={[
                {
                  name: "Buscar Vagas",
                  url: "https://google.com",
                  iconName: "favorite_border",
                  isHighlighted: false,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div class="ColoredBackground PaddingTopBotttom MarginTopBottom">
        <div>
          <h4 class="TextFormatting">Footers</h4>
          <h6>These are footers for all Catho applications.</h6>
        </div>
        <div class="MarginTopBottom">
          <h5>Complete Footer Version with TagList</h5>
          <FooterResponsive
            gtmPrefix="B2C-google-tag-prefix"
            tagsListContent={[
              {
                items: [
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "Vagas de home office",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "O que é home office?",
                    url: "https://google.com",
                  },
                ],
                label: "Candidates",
              },
              {
                items: [
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "O que é home office?",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "Como fazer uma carta de demissão?",
                    url: "https://google.com",
                  },
                ],
                label: "Companies",
              },
              {
                items: [
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label:
                      "Estresse no trabalho: por que acontece e como lidar",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "5 característica de um bom líder",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label:
                      "O que falar e o que não falar em uma entrevista de emprego",
                    url: "https://google.com",
                  },
                ],
                label: "Education",
              },
              {
                items: [
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "Vagas de home office",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "O que é home office?",
                    url: "https://google.com",
                  },
                ],
                label: "Privates",
              },
              {
                items: [
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "Vagas de home office",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "O que é home office?",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "Como fazer uma carta de demissão?",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label:
                      "Como fazer um currículo sem experiência e sem ensino superior",
                    url: "https://google.com",
                  },
                ],
                label: "Extra",
              },
              {
                items: [
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "Vagas de home office",
                    url: "https://google.com",
                  },
                  {
                    dataGtmEventAction: "novo-footer:parceiros-internacionais",
                    dataGtmEventCategory: "catho",
                    dataGtmEventLabel: "link:zhaopin",
                    dataGtmEventName: "interaction:normal-metric",
                    label: "O que é home office?",
                    url: "https://google.com",
                  },
                ],
                label: "Others",
              },
            ]}
          />
        </div>
        <div class="MarginTopBottom">
          <h5>Simple Footer Version</h5>
          <FooterSimple />
        </div>
      </div>
    </>
  );
}
