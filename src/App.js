import { PageHeader } from 'antd';
import logo from "./image/logo/logo.png";
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import './App.scss';

function App() {
  return (
    <>

      <Container>
        <div>&nbsp;</div>
        <div className="HeaderContent">

          <PageHeader
            avatar={{ src: logo }}
            className="site-page-header"
            onBack={() => null}
            title="Welcome To Givr"
            subTitle="Wishes and givers below"
          />
        </div>
      </Container>
    </>
  );
}

export default App;