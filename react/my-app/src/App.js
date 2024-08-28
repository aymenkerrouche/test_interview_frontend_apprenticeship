import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
    return (
        <div>
            <div className="App">
                <Greeting name="Bryan" />
            </div>

            <div className="App2">
                <h2>Counter</h2>
                <Counter />
            </div>

            <div className="App3">
              <NameList />
            </div>

        </div>
    );
}

export default App;
