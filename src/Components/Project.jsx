import styled from 'styled-components';

const Project = () => {
  return (
    <Container id="project">
      <Content>
        <h4>Recent Work?</h4>
        <h1>Projects</h1>
        <Projects>
          <Box>
            <Img>
              <img src="./images/blog_1.jpg" alt="" />
              <div>
                <h1>Post</h1>
              </div>
            </Img>
            <Btn>
              <a href="https://github.com/AnkitJodhani" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="#">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
          <Box>
            <Img>
              <img src="./images/blog_2.jpg" alt="" />
              <div>
                <h1>Post</h1>
              </div>
            </Img>
            <Btn>
              <a href="https://github.com/AnkitJodhani" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="#">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
          <Box>
            <Img>
              <img src="./images/blog_1.jpg" alt="" />
              <div>
                <h1>Post</h1>
              </div>
            </Img>
            <Btn>
              <a href="https://github.com/AnkitJodhani" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="#">
                <i class="bx bx-news"></i>
              </a>
            </Btn>
          </Box>
          <Box>
            <Img>
              <img src="./images/blog_2.jpg" alt="" />
              <div>
                <h1>Post</h1>
              </div>
            </Img>
            <Btn>
              <a href="https://github.com/AnkitJodhani" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="#">
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
  }
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 25px;

  @media screen and (max-width: 950px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 25px;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 25px;
  }
`;

const Box = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    transition: 0.5s ease;
  }

  div {
    position: absolute;
    color: #fff;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    height: 300px;
    bottom: 300px;
    cursor: pointer;
    transition: 0.5s ease;

    h1 {
      color: #fff;
    }
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
    div {
      bottom: 0%;
    }
  }
`;

const Btn = styled.div`
  padding: 15px;
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
