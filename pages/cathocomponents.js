import React from 'react';
import { Container, Row, Col, Card } from '@catho/quantum';
import { 
  HeaderResponsive, 
  FooterResponsive, 
  HeaderSimple, 
  DeprecatedHeaderLoggedResponsive,
  PasswordField,
  HeaderLoggedResponsive,
  HorizontalMenu,
  CommentsBox,
 }from '@catho-private/catho-components';
import Header from './shared/Header';
import { FooterTagsList } from '../components';


const itemsMock = [
  {
    name: 'Buscar Vagas',
    url: 'https://google.com',
    iconName: 'favorite_border',
    isHighlighted: false,
  },
  {
    name: 'Dados Pessoais',
    url: 'https://google.com',
    iconName: 'verified_user',
    isHighlighted: true,
  },
  {
    name: 'Editar meu CV',
    url: 'https://google.com',
    iconName: 'person',
    isHighlighted: false,
  },
  {
    name: 'Mais Vagas',
    url: 'https://google.com',
    iconName: 'favorite_border',
    isHighlighted: false,
  },
];

export default function CathoComponentsPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header title="catho components: components simulator" />
          </Col>
        </Row>
      </Container>
      <h4>Header B2C Sem busca</h4>
      <HeaderResponsive type="B2C" isSubMenuOpen={false} gtmPrefix="next-header-b2c-nosearch" hasSearch />
      <h4>Header B2C </h4>
      <HeaderResponsive type="B2C" isSubMenuOpen={false} gtmPrefix="next-header-b2c" />
      <h4>Header B2B </h4>
      <HeaderResponsive type="B2B" isSubMenuOpen={false} gtmPrefix="next-header-b2b" loginRedirect={`https://google/com` } hasSearch searchFieldEvents={{onKeyPress: (e) => console.log('keypress: ', e) }}  />
      <h4>Header Logged B2C (with logged props) </h4>
      <HeaderResponsive 
        gtmPrefix="next-header-b2c"       
        userProfile="STATUS_A_PROFISSIONAL"
        userThumbnail="https://picsum.photos/24"
        userMessages={1000}
        userEvents={3}
        hasSearch={false}
      />
      <HeaderLoggedResponsive userProfile="STATUS_I_PROFISSIONAL" hasSearch />
      <h4>[cadastro candidato] Header Simple (implementado pelo área 51)</h4>
      <HeaderSimple gtmPrefix="next" />
      <h4>[/ajuda] Header Simple logged (implementado pela Transformers)</h4>
      <DeprecatedHeaderLoggedResponsive gtmPrefix="next" />
      <h4>[/ajuda] Header Simple logged sem busca (implementado pela Transformers)</h4>
      <DeprecatedHeaderLoggedResponsive gtmPrefix="next" hasSearch={false} />
      <h4>Footer B2C</h4>
      <FooterResponsive type="B2C" gtmPrefix="next-footer" />
      <h4>Footer with Tagslist</h4>
      <FooterTagsList />
      <Container>
        <h4>Password Field</h4>
        <Card>
          <Card.Content>
            <PasswordField
              password={{ label: 'Password'}}
              onValidate={valid => {
                console.log('valid', valid);
              }} />
          </Card.Content>
        </Card>
        
      </Container>
      <Container>
        <h4>Horizontal Menu</h4>
        <Card>
          <Card.Content>
            <HorizontalMenu items={itemsMock}  />
          </Card.Content>
        </Card>
      </Container>

      <Container>
        <h4>Comments box (with form)</h4>
        <Card>
          <Card.Content>
            <CommentsBox
              formProps={{
                onSubmit: ({ value, showFeedback }) => {
                  try {
                    // do something with value
                    console.log(value);

                    // in case of success call showFeedback
                    // message is only prop required
                    showFeedback({
                      message: 'Agradecemos o seu comentário!',
                      type: 'success',
                      secondsToClose: 3,
                      disableTimer: true,
                    });
                  } catch {
                    // in case of error call showFeedback
                    // message is only prop required
                    showFeedback({
                      message: 'Ops! Algo deu errado. Tente de novo.',
                      type: 'error',
                      secondsToClose: 3,
                      disableTimer: true,
                    });
                  }
                },
                placeholder: 'Queremos te ouvir :)',
                confirmButtonText: 'Enviar',
              }}
            >
              <>
                <h5>Olá, Roger :)</h5>
                <p>
                  <strong>Como está sendo a sua experiência com o nosso site?</strong>
                </p>
              </>
            </CommentsBox>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
}
