import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <div>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Grand Chase</h1>
            </Widget.Header>
  
            <Widget.Content>
              <h1>Grand Chase</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Grand Chase</h1>
            </Widget.Header>
  
            <Widget.Content>
              <h1>Grand Chase</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>

          <Footer/>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/LucasOtaviani/aluraquiz"/>
      </QuizBackground>
    </div>
  );
}
