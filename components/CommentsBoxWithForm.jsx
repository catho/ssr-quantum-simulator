import CommentsBox from '@catho-private/catho-components/CommentsBox';

const CommentsBoxWithForm = () => (
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
);

export default CommentsBoxWithForm;
