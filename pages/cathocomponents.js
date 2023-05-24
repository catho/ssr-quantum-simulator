import React from "react";
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
      <div class="ComponentsContainer" style={{}}>
        <h4>Headers</h4>
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
      <div class="PasswordAndBarChartContainer ComponentsContainer  ">
        <div class="ComponentsContainer">
          <h4>Password Field</h4>
          <h6>
            Password Field is a component used when a password input with validations is needed.
          </h6>
          <PasswordField
            password={{ label: "Password" }}
            onValidate={(valid) => {
              console.log("valid", valid);
            }}
          />
        </div>
        <div class="ComponentsContainer">
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
          ]}
        />
        </div>
      </div>


        <div class="CommentsBoxContainer">
      <CommentsBox>
        <p>This is a test message for the CommentsBox component</p>
      </CommentsBox>
      </div>



<div class="nametest">
      <JobCard
        jobID="123"
        jobURL="https://www.catho.com.br"
        name="Test"
        company={{
          name: "Catho",
          avatar: undefined,
          isConfidential: false,
          stamps: [
            {
              icon: "person",
              description: "",
            },
          ],
        }}
        salaryRange="test"
        benefits={[
          {
            name: "Alimentação",
            icon: "receipt",
          },
        ]}
        publishDate={new Date(2022, 4, 10, 13).getTime()}
        updateDate={new Date(2022, 5, 10, 13).getTime()}
        locations={[
          {
            name: "test",
            quantity: 15,
            url: "https://www.catho.com.br",
          },
        ]}
        quantityTotal={10}
        description="test"
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
<div>
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
        ]}
      />
      </div>
      <div>
      <DayPicker />
      </div>
      <div class="HorizontalMenuContainer">
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
            <NotificationIcon type="folder" />
      </div>
      </div>
      </div>

    
      <TagsList
        contents={[
          {
            label: "Candidates",
            items: [
              {
                url: "http://google.com",
                label: "Vagas de home office",
                dataGtmEventName: "interaction:normal-metric",
                dataGtmEventCategory: "catho",
                dataGtmEventLabel: "link:zhaopin",
                dataGtmEventAction: "novo-footer:parceiros-internacionais",
              },
            ],
          },
        ]}
      />
      
      <FooterResponsive type="B2C" gtmPrefix="next-footer" />
      <FooterSimple />
    </>
  );
}
