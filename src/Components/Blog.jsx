import styled from 'styled-components';

const Blog = () => {
  return (
    <Container id="blog">
      <Content>
        <h4>Recent Posts?</h4>
        <h1>Blog</h1>
        <Post>
          <Left>
            <img src="./images/blog_1.jpg" alt="" />
          </Left>
          <Right>
            <h3>Consectetur adipisicing elit</h3>
            <Author>
              <a>
                By: <span>Admin</span>
              </a>
              <div>
                <i class="bx bx-heart"></i>
                <p>234</p>
              </div>
              <div>
                <i class="bx bx-message"></i>
                <p>123</p>
              </div>
            </Author>
            <Info>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                nesciunt qui sit velit delectus voluptates, repellat ipsum culpa
                id deleniti. Rerum debitis facilis accusantium neque numquam
                mollitia modi quasi distinctio <br />
                <br />
                Magnam in repellat enim harum omnis aperiam! Explicabo illo,
                commodi, dolor blanditiis cupiditate harum nisi vero accusamus
                laudantium voluptatibus dolores quae obcaecati.
              </p>

              <a href="#">
                Read More <i class="bx bx-chevrons-right"></i>
              </a>
            </Info>
          </Right>
        </Post>
        <Post>
          <Left>
            <img src="./images/blog_2.jpg" alt="" />
          </Left>
          <Right>
            <h3>Consectetur adipisicing elit</h3>
            <Author>
              <a>
                By: <span>Admin</span>
              </a>
              <div>
                <i class="bx bx-heart"></i>
                <p>234</p>
              </div>
              <div>
                <i class="bx bx-message"></i>
                <p>123</p>
              </div>
            </Author>
            <Info>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                nesciunt qui sit velit delectus voluptates, repellat ipsum culpa
                id deleniti. Rerum debitis facilis accusantium neque numquam
                mollitia modi quasi distinctio <br />
                <br />
                Magnam in repellat enim harum omnis aperiam! Explicabo illo,
                commodi, dolor blanditiis cupiditate harum nisi vero accusamus
                laudantium voluptatibus dolores quae obcaecati.
              </p>

              <a href="#">
                Read More <i class="bx bx-chevrons-right"></i>
              </a>
            </Info>
          </Right>
        </Post>
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
  max-width: 1000px;
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

  @media screen and (max-width: 990px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Post = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border: 1px solid #aaa;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 835px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  max-width: 40%;
  width: 100%;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
  }

  @media screen and (max-width: 835px) {
    max-width: 100%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Right = styled.div`
  max-width: 60%;
  width: 100%;
  padding: 10px;
  h3 {
    color: #695aa6;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 990px) {
    max-width: 50%;
    width: 100%;
  }

  @media screen and (max-width: 835px) {
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 450px) {
  }
`;

const Author = styled.div`
  display: flex;
  margin-right: 12px;
  margin-bottom: 20px;
  gap: 20px;
  color: #6c757d;

  a {
    text-decoration: none;
    font-weight: 900;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    i {
      font-size: 20px;
      color: #e01ee0;
    }
  }
`;

const Info = styled.div`
  p {
    color: #6c757d;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    transition: 0.3s ease;

    i {
      font-size: 18px;
    }

    &:hover {
      color: #000;
    }
  }
`;

export default Blog;
