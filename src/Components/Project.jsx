import styled from 'styled-components';

const Project = () => {
  return (
    <Container id="project">
      <Content>
        <h4>Recent Work?</h4>
        <h1>Projects</h1>
        <Projects>
          <Box>
            <Wrap>
              <ImgBox>
                <img
                  src="./images/deploy-a-private-docker-container-registry-on-kubernetes-eks.gif"
                  alt=""
                />
              </ImgBox>
              <Description>
                <h2>
                  Deploy a Private Docker Container Registry on Kubernetes (EKS)
                </h2>
              </Description>
            </Wrap>
            <Btn>
              <a href="https://github.com/AnkitJodhani/eks-private-container-registry?ref=blog.ankitjodhani.com" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://blog.ankitjodhani.com/deploy-a-private-docker-container-registry-on-kubernetes-eks/" target="_blank">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
          <Box>
            <Wrap>
              <ImgBox>
                <img
                  src="./images/production-ready-mongodb-cluster-nginx-on-aws-using-ansible-and-terraform-highly-available-and-fault-tolerant.avif"
                  alt=""
                />
              </ImgBox>
              <Description>
                <h2>
                  Production Ready MongoDB Cluster on AWS using Ansible &
                  Terraform: Highly Available and Fault-Tolerant
                </h2>
              </Description>
            </Wrap>
            <Btn>
              <a href="https://github.com/AnkitJodhani/Ansible-Production-ready-mongodb-project6" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://ankitjodhani.hashnode.dev/production-ready-mongodb-cluster-nginx-on-aws-using-ansible-and-terraform-highly-available-and-fault-tolerant" target="_blank">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
          <Box>
            <Wrap>
              <ImgBox>
                <img
                  src="./images/ultimate-guide-monitoring-logging-aws-eks-prometheus-grafana-loki-promtail.gif"
                  alt=""
                />
              </ImgBox>
              <Description>
                <h2>
                  Ultimate Guide to Monitoring & Logging on AWS EKS: Prometheus,
                  Grafana, Loki, and Promtail
                </h2>
              </Description>
            </Wrap>
            <Btn>
              <a href="https://github.com/AnkitJodhani/eks-monitoring-and-logging" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://blog.ankitjodhani.com/ultimate-guide-monitoring-logging-aws-eks-prometheus-grafana-loki-promtail/" target="_blank">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
          <Box>
            <Wrap>
              <ImgBox>
                <img
                  src="./images/building-a-resilient-three-tier-architecture-on-aws-with-deploying-mern-stack-application.gif"
                  alt=""
                />
              </ImgBox>
              <Description>
                <h2>
                  Building a Resilient Three-Tier Architecture on AWS with
                  Deploying MERN Stack Application
                </h2>
              </Description>
            </Wrap>
            <Btn>
              <a href="https://github.com/AnkitJodhani/2nd10WeeksofCloudOps" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://ankitjodhani.showwcase.com/article/35459/building-a-resilient-three-tier-architecture-on-aws-with-deploying-mern-stack-application" target="_blank">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
          <Box>
            <Wrap>
              <ImgBox>
                <img
                  src="./images/deploying-dockerized-app-on-aws-eks-cluster-using-argocd-and-gitops-methodology-with-circleci.gif"
                  alt=""
                />
              </ImgBox>
              <Description>
                <h2>
                  Deploying Dockerized App on AWS EKS Cluster using ArgoCD and
                  GitOps methodology with CircleCI
                </h2>
              </Description>
            </Wrap>
            <Btn>
              <a href="https://github.com/AnkitJodhani/Todo_application" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://ankitjodhani.showwcase.com/article/35840/deploying-dockerized-app-on-aws-eks-cluster-using-argocd-and-gitops-methodology-with-circleci" target="_blank">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
          <Box>
            <Wrap>
              <ImgBox>
                <img
                  src="./images/implementing-two-tier-architecture-in-aws-with-terraform-step-by-step-guide-10weeksofcloudops.avif"
                  alt=""
                />
              </ImgBox>
              <Description>
                <h2>
                  Implementing Two-Tier Architecture in AWS with Terraform:
                  Step-by-Step Guide
                </h2>
              </Description>
            </Wrap>
            <Btn>
              <a href="https://github.com/AnkitJodhani/3rdWeekofCloudOps" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://ankitjodhani.hashnode.dev/implementing-two-tier-architecture-in-aws-with-terraform-step-by-step-guide-10weeksofcloudops" target="_blank">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
        </Projects>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 20px;
  color: #000;
`;

const Content = styled.div`
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
    text-align: center;
  }
`;

const Projects = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: auto;
  display: grid;
  padding-top: 40px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 70px;

  @media screen and (max-width: 990px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Box = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  margin: auto;
`;

const Wrap = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 1px solid #000;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImgBox = styled.div`
  max-width: 800px;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-bottom: 1px solid #aaa;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Description = styled.div`
  margin-top: 15px;
  padding: 10px;
  line-height: 1.3;
  font-weight: 600;
  h2 {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 12px;
    color: #333;
  }
`;

const Btn = styled.div`
  margin-top: 30px;
  display: flex;

  a {
    margin-left: 15px;
    width: 50px;
    height: 50px;
    border: 1px solid #6c757d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    border-radius: 12px;
    text-decoration: none;
    color: #6c757d;

    &:hover {
      background: #695aa6;
      color: #fff;
      border: none;
    }
  }
`;

export default Project;
