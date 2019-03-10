import * as React from 'react';
import classNames from 'classnames';
import { Icon } from 'office-ui-fabric-react';
import { IDropdownSearchFieldState } from './dropdown-search-field.state';

import './dropdown-search-field.module.scss';

class DropdownSearchField extends React.Component<any, IDropdownSearchFieldState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false,
            text: undefined
        };
    }

    private onInputChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: ev.target.value });
    }

    private onCancelClick = () => {
        this.setState({ text: '', isOpen: false });
    }

    public render(): React.ReactElement {
        const { isOpen, text } = this.state;

        return (
            <div className={'search-button-container'} onClick={() => !isOpen && this.setState({ isOpen: true })}>
                <Icon className={'search-button-container__icon'} iconName={'Search'} />
                <div className={'search-button-container__text'}>{'Search'}</div>
                <div className={classNames({ 'search-button-container__dropdown': true, 'open': isOpen })}>
                    <input value={text} placeholder={'Search'} type={'text'} onChange={this.onInputChanged} />
                    <Icon className={'simple-search-field__cancel-icon'} iconName={'Cancel'} onClick={this.onCancelClick} />
                </div>
            </div>
        );
    }
}

export default DropdownSearchField;