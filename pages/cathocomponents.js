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
  jobCardProps,
  passwordProps,
} from "../mocks/mocks.js";

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
        <h5 class="TextFormattingH5">Header Responsive</h5>
        <HeaderResponsive
          type="B2C"
          isSubMenuOpen={false}
          gtmPrefix="next-header-b2c-nosearch"
          hasSearch
        />
        <h5 class="TextFormattingH5">Logged Header Responsive</h5>
        <HeaderLoggedResponsive userProfile="STATUS_I_PROFISSIONAL" hasSearch />
        <h5 class="TextFormattingH5">Simple Header</h5>
        <HeaderSimple gtmPrefix="next" />
      </div>
      <div class="ComponentsContainer FlexContainer ColoredBackground ">
        <div class="ComponentsContainer RoundedEdges WhiteBackground Width">
          <h4 class="TextFormattingH4">Password Field</h4>
          <h6>
            Password Field is a component used when a password input with
            validations is needed.
          </h6>
          <PasswordField {...passwordProps} />
        </div>
        <div class="ComponentsContainer RoundedEdges WhiteBackground Width">
          <h4 class="TextFormattingH4">BarChart</h4>
          <h6>
            A simplebar chart component. Used to show sorted data in columns.
          </h6>
          <BarChart data={barCharData} />
        </div>
      </div>
      <div class="ComponentsContainer ColoredBackground">
        <h4 class="TextFormattingH4">CommentsBox</h4>
        <h6>A simple way of displaying a form or alert.</h6>
        <CommentsBox>
          <p>This is a test message for the CommentsBox component.</p>
        </CommentsBox>
      </div>
      <div class="FlexContainer ComponentsContainer ColoredBackground ">
        <div class="WhiteBackground PaddingLeftRight RoundedEdges Width">
          <h4 class="TextFormattingH4">JobCard</h4>
          <JobCard {...jobCardProps} />
        </div>
        <div>
          <div class="WhiteBackground RoundedEdges ComponentsContainer Width">
            <h4 class="TextFormattingH4">JobNotificationList</h4>
            <h6>A simple list of cards of job notifications.</h6>
            <JobNotificationList data={jobNotificationListMock} />
          </div>
          <div class="WhiteBackground RoundedEdges ComponentsContainer Width">
            <h4 class="TextFormattingH4">DayPicker</h4>
            <h6>DayPicker allows the user to select a day or a set of days.</h6>
            <DayPicker />
          </div>
          <div class="WhiteBackground RoundedEdges ComponentsContainer Width">
            <h4 class="TextFormattingH4">HorizontalMenu</h4>
            <h6>A mobile navigation bar with a text and an icon.</h6>
            <HorizontalMenu items={horizontalMenuItems} />
          </div>
        </div>
      </div>

      <div class="ColoredBackground ComponentsContainer">
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
