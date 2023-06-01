import React from "react";
import Head from "next/head";
import {
  barCharData,
  candidatesMockContent,
  companiesMockContent,
  educationMockContent,
  privateMockContent,
  extraMockContent,
  othersMockContent,
  jobNotificationListMock,
  horizontalMenuItems,
} from "../simulateddata/mocks.js";

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
} from "@catho-private/catho-components";



export default function CathoComponentsPage() {
  return (
    <>
      <Head>
        <title>Catho Components - SSR-Simulator</title>
      </Head>
      <div class="ComponentsContainer ColoredBackground">
        <h4 class="TextFormattingH4">Headers</h4>
        <h6>
          These are responsive Headers for all Catho applications. They follow
          Catho's style guide and its needs.
        </h6>
        <h5  class="TextFormattingH5">Header Responsive</h5>
        <HeaderResponsive
          type="B2C"
          isSubMenuOpen={false}
          gtmPrefix="next-header-b2c-nosearch"
          hasSearch
        />
        <h5 class="TextFormattingH5">Logged Header Responsive</h5>
        <HeaderLoggedResponsive userProfile="STATUS_I_PROFISSIONAL" hasSearch />
        <h5  class="TextFormattingH5">Simple Header</h5>
        <HeaderSimple gtmPrefix="next" />
      </div>
      <div class=" ComponentsContainer  FlexContainer ColoredBackground">
        <div class="PasswordAndBarChartContainer RoundedEdges WhiteBackground PaddingLeftRight">
          <h4  class="TextFormattingH4">Password Field</h4>
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
          <h4  class="TextFormattingH4">BarChart</h4>
          <h6>
            A simplebar chart component. Used to show sorted data in columns.
          </h6>
          <BarChart data={barCharData} />
        </div>
      </div>
      <div>
        <h4  class="TextFormattingH4">CommentsBox</h4>
        <h6>A simple way of displaying a form or alert.</h6>
        <div class="CommentsBoxContainer ColoredBackground">
          <CommentsBox>
            <p>This is a test message for the CommentsBox component.</p>
          </CommentsBox>
        </div>
      </div>
      <div class="FlexContainer ColoredBackground PaddingTopBotttom ">
        <div class="WhiteBackground PaddingLeftRight RoundedEdges">
          <h4  class="TextFormattingH4">JobCard</h4>
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
        </div>
        <div>
          <div class="WhiteBackground RoundedEdges PaddingLeftRight MarginTopBottom">
            <h4  class="TextFormattingH4">JobNotificationList</h4>
            <h6>A simple list of cards of job notifications.</h6>
            <JobNotificationList data={jobNotificationListMock} />
          </div>
          <div class="WhiteBackground RoundedEdges PaddingLeftRight MarginTopBottom PaddingTopBotttom">
            <h4 class="TextFormattingH4">DayPicker</h4>
            <h6>DayPicker allows the user to select a day or a set of days.</h6>
            <DayPicker />
          </div>
          <div class="HorizontalMenuContainer WhiteBackground RoundedEdges PaddingLeftRight MarginTopBottom PaddingTopBotttom">
            <h4 class="TextFormattingH4">HorizontalMenu</h4>
            <h6>A mobile navigation bar with a text and an icon.</h6>
            <HorizontalMenu items={horizontalMenuItems} />
          </div>
        </div>
      </div>

      <div class="ColoredBackground PaddingTopBotttom MarginTopBottom">
        <div>
          <h4 class="TextFormattingH4">Footers</h4>
          <h6>These are footers for all Catho applications.</h6>
        </div>
        <div class="MarginTopBottom">
          <h5 class="TextFormattingH5">Complete Footer Version with TagList</h5>
          <FooterResponsive
            gtmPrefix="B2C-google-tag-prefix"
            tagsListContent={[
              {
                items: candidatesMockContent,
                label: "Candidates",
              },
              {
                items: companiesMockContent,
                label: "Companies",
              },
              {
                items: educationMockContent,
                label: "Education",
              },
              {
                items: privateMockContent,
                label: "Privates",
              },
              {
                items: extraMockContent,
                label: "Extra",
              },
              {
                items: othersMockContent,
                label: "Others",
              },
            ]}
          />
        </div>
        <div class="MarginTopBottom">
          <h5 class="TextFormattingH5">Simple Footer Version</h5>
          <FooterSimple />
        </div>
      </div>
    </>
  );
}
