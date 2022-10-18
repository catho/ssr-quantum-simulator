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
      <CommentsBox><p>Teste</p></CommentsBox>
      <ConsentWidget apiKey="eZqa0tglwM1TZeiKFpRX9Jekl1cv2iD3iJpeJqV9" />
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
      <NotificationIcon type="folder" />
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
      <DeprecatedConsentWidget apiKey="eZqa0tglwM1TZeiKFpRX9Jekl1cv2iD3iJpeJqV9"/>
    </>
  );
}
