import * as React from 'react';
import ButtonsBar from '../buttons-bar/buttons-bar.component';
import SimpleSearchField from '../simple-search-field/simple-search-field.component';
import HiddenSearchField from '../hidden-search-field/hidden-search-field.component';
import DropdownSearchField from '../dropdown-search-field/dropdown-search-field.component';

import './app.module.scss';

class App extends React.Component {
    public render(): React.ReactElement {
        return (
            <div className={"app-container"}>
                <div className={"app-container__content"}><ButtonsBar onRenderSearchField={<SimpleSearchField />} /></div>
                <div className={"app-container__content"}><ButtonsBar onRenderSearchField={<DropdownSearchField />} /></div>
                <div className={"app-container__content"}><ButtonsBar onRenderSearchField={<HiddenSearchField />} /></div>
            </div>
        );
    }
}

export const SimpleCommandBar = (): JSX.Element => (
    <div className={"app-container"}>
        <div className={"app-container__content"}><ButtonsBar onRenderSearchField={<SimpleSearchField />} /></div>
    </div>
);

export const DropdownCommandBar = (): JSX.Element => (
    <div className={"app-container"}>
        <div className={"app-container__content"}><ButtonsBar onRenderSearchField={<DropdownSearchField />} /></div>
    </div>
);

export const HiddenCommandBar = (): JSX.Element => (
    <div className={"app-container"}>
        <div className={"app-container__content"}><ButtonsBar onRenderSearchField={<HiddenSearchField />} /></div>
    </div>
);

export default App;