import * as React from 'react';
import classNames from 'classnames';
import { Icon } from 'office-ui-fabric-react';
import { IHiddenSearchFieldState } from './hidden-search-field.state';

import './hidden-search-field.module.scss';

class HiddenSearchField extends React.Component<any, IHiddenSearchFieldState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            text: undefined,
            isOpen: false
        };
    }

    public onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: ev.target.value });
    }

    public render(): React.ReactElement {
        const { text, isOpen } = this.state;

        return (
            <div className={'hidden-search-button'} onClick={() => !isOpen && this.setState({ isOpen: true })}>
                <Icon className={'hidden-search-button__icon'} iconName={'Search'} />
                <div className={classNames({ 'hidden-search-button__container': true, 'open-hidden-field': isOpen })}>
                    <input value={text} placeholder={'Search'} type={'text'} onChange={this.onInputChange} />
                    <Icon className={'hidden-search-button__container__cancel-icon'} iconName={'Cancel'} onClick={() => this.setState({ isOpen: false, text: '' })} />
                </div>
            </div>
        );
    }
}

export default HiddenSearchField;