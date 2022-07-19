import React from 'react';
import ReactDOM from 'react-dom';
import {PriceCalculator} from '@tstv/business';

// https://typescript.tv/react/use-react-with-typescript/

interface DivWrapperProps extends React.HTMLProps<HTMLDivElement> {
}

const DivWrapper: React.FC<DivWrapperProps> = (props) => (
  <div {...props} />
);

interface AppProps {
}

const App: React.FC<AppProps> = () => (
  <>
    <h1>Hello, {PriceCalculator.getTotal(100)}!</h1>
    <DivWrapper children={<span>Hello, World!</span>}/>
  </>
);
const rootNode = document.getElementById('root');

ReactDOM.render(<App/>, rootNode);
