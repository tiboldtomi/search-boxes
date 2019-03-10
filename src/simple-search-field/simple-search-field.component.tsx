import * as React from 'react';
import { Icon } from 'office-ui-fabric-react';
import { ISimpleSearchFieldState } from './simple-search-field.state';

import './simple-search-field.module.scss';

class SimpleSearchField extends React.Component<{}, ISimpleSearchFieldState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            placeHolder: '          Search',
            searchIconVisibility: 'visible',
            cancelIconVisibility: 'hidden',
            text: undefined
        };
    }

    private onInputFocus = (): void => {
        this.setState({ placeHolder: 'Search', searchIconVisibility: 'hidden' });
    }

    private onInputBlur = (): void => {
        (!this.state.text || !this.state.text.length || this.state.text.length < 1) && this.setState({ placeHolder: '          Search', searchIconVisibility: 'visible' });
    }

    private onInputChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            text: ev.target.value,
            cancelIconVisibility: ev.target.value.length > 0 ? 'visible' : 'hidden'
        });
    }

    private onCancelIconClick = () => {
        this.setState({ text: '', cancelIconVisibility: 'hidden', placeHolder: '          Search', searchIconVisibility: 'visible' });
    }

    public render(): React.ReactElement {
        const { text, searchIconVisibility, cancelIconVisibility, placeHolder } = this.state;

        return (
            <div className={'simple-search-field'}>
                <div className={'simple-search-field__container'}>
                    <Icon className={'simple-search-field__search-icon'} style={{ visibility: searchIconVisibility }} iconName="Search" />
                    <input type='text' value={text} placeholder={placeHolder} onFocus={this.onInputFocus} onBlur={this.onInputBlur} onChange={this.onInputChange} />
                    <Icon className={'simple-search-field__cancel-icon'} style={{ visibility: cancelIconVisibility }} iconName={'Cancel'} onClick={this.onCancelIconClick} />
                </div>
            </div>
        );
    }
}

export default SimpleSearchField;

