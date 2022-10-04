import React from "react";
import {
  HeaderResponsive,
  FooterResponsive,
  HeaderSimple,
  DeprecatedHeaderLoggedResponsive,
  PasswordField,
  HeaderLoggedResponsive,
  BarChart,
  CommentsBox,
  DayPicker,
  ConsentWidget,
  FooterSimple,
  HorizontalMenu,
  JobCard,
  JobNotificationList,
  MessageBox,
  NotificationIcon,
  TagsList,
  DeprecatedConsentWidget,
} from "@catho-private/catho-components";

//eZqa0tglwM1TZeiKFpRX9Jekl1cv2iD3iJpeJqV9

export default function CathoComponentsPage() {
  return (
    <>
      <HeaderResponsive
        type="B2C"
        isSubMenuOpen={false}
        gtmPrefix="next-header-b2c-nosearch"
        hasSearch
      />
      <HeaderLoggedResponsive userProfile="STATUS_I_PROFISSIONAL" hasSearch />
      <HeaderSimple gtmPrefix="next" />
      <DeprecatedHeaderLoggedResponsive gtmPrefix="next" hasSearch={false} />
      <FooterResponsive type="B2C" gtmPrefix="next-footer" />
      <PasswordField
        password={{ label: "Password" }}
        onValidate={(valid) => {
          console.log("valid", valid);
        }}
      />
      <BarChart
        data={[
          {
            name: "Jan",
            value: 4000,
            tooltip: "R$ 4000",
          },
        ]}
      />
      <CommentsBox>Teste</CommentsBox>
      <ConsentWidget apiKey="" />
      <DayPicker />
      <FooterSimple />
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
      <JobCard />
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
        ]}
      />
      <MessageBox />
      <NotificationIcon />
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
      <DeprecatedConsentWidget />
    </>
  );
}