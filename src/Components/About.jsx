import styled from 'styled-components';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume_ankit_jodhani.pdf';
    link.download = 'Ankit_Jodhani_Resume.pdf';
    link.click();
  };

  return (
    <Container id="about">
      <Content>
        <Left>
          <img src="./images/about_men.jpg" alt="About me" />
        </Left>
        <Right>
          <h4>Who Am I?</h4>
          <h1>About Me</h1>
          <ul>
            <li>
              Welcome to my space! I am Ankit Jodhani, a DevOps Engineer and Certified Kubernetes Administrator(CKA) with expertis in Kubernetes, Docker, Ansible, Terraform, ArgoCD, Helm, External Secret Operator, ExternalDNS and AWS services like EKS, ECR, EC2, S3, RDS, CloudFront, WAF, EBS, EFS, ELB, Lambda, Dynamodb, CloudWatch, CloudTrail, Eventbridge, SNS SES, and CodePipeline. I excel in building highly available, resilient, and scalable infrastructure, with a focus on CI/CD, monitoring, and logging using tools like Prometheus, Grafana, and Loki. my notable projects also include disaster recovery strategies.
            </li>
            <li>
              I am also a tech blogger, sharing insights on
              blog.ankitjodhani.com, Hashnode and Showwcase.
            </li>
            <li>
              Connect with me on LinkedIn, explore my GitHub projects, or read
              my tech blogs
            </li>
          </ul>
          <button onClick={handleDownload}>Download Resume</button>
        </Right>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 20px;

`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 80px;

  @media screen and (max-width: 990px) {
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  max-width: 40%;
  width: 100%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 500px;
      height: 500px;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      width: 350px;
      height: 350px;
    }
  }
`;

const Right = styled.div`
  max-width: 60%;
  width: 100%;

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

  ul {
    padding-left: 20px;
    list-style-type: disc;
    margin-bottom: 30px;
    li {
      text-align: justify;
      margin-bottom: 10px;
      color: #111;
      font-weight: 300;
      line-height: 1.5;
      letter-spacing: 0.5px;
    }
  }

  button {
    padding: 12px 30px;
    background: transparent;
    border-radius: 25px;
    border: 1px solid #695aa6;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #695aa6;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      background: #695aa6;
      color: #fff;
    }
  }

  @media screen and (max-width: 990px) {
    max-width: 40%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 80px;
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    padding: 0 20px;
  }
`;

export default About;
