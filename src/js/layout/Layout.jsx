import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Navbar} from '../components/NavBar.jsx';
import {Home} from './Home.jsx';

export class Layout extends React.Component {
    
    render(){

        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route render={() => <p className="text-center mt-5">Not found</p>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};