import styled from 'styled-components';

const Contact = () => {
  return (
    <Container id="contact">
      <Content>
        <h4>How can you communicate?</h4>
        <h1>Contact Me</h1>
        <Form>
          <InputField>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Enter Email" />
          </InputField>
          <TextareaField>
            <textarea
              name="message"
              placeholder="Write Something"
              rows={8}
            ></textarea>
          </TextareaField>
          <button>Send Message</button>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 20px;
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: #444444;
    margin-bottom: 12px;
  }
  h1 {
    font-size: 40px;
    color: #695aa6;
    font-weight: 900;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    margin-top: 20px;
    padding: 16px 30px;
    outline: none;
    border: 1px solid #695aa6;
    border-radius: 12px;
    background: transparent;
    font-size: 16px;
    color: #695aa6;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
      background: #695aa6;
      color: #fff;
    }
  }

`;

const InputField = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 16px;
  }

  @media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;

const TextareaField = styled.div`
  width: 100%;
  height: 100%;

  textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 16px;
  }
`;

export default Contact;
