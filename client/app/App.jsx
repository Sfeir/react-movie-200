import React    from 'react';

import Header           from './Header';
import Videotheque      from './Videotheque';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Videotheque/>
            </div>
        );
    }
}
