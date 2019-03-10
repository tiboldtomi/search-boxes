import * as React from 'react';
import { CommandBar, IContextualMenuItem } from 'office-ui-fabric-react';
import { IButtonsBarProps } from './buttons-bar.props';

class ButtonsBar extends React.Component<IButtonsBarProps, any> {
    public constructor(props: any) {
        super(props);
    }

    private getItems = (): IContextualMenuItem[] => {
        return [
            {
                key: 'searchField',
                onRender: () => this._onRender()
            },
            {
                key: 'newItem',
                name: 'New',
                iconProps: {
                    iconName: 'Add'
                }
            },
            {
                key: 'editItem',
                name: 'Edit',
                iconProps: {
                    iconName: 'Edit'
                }
            }
        ];
    }

    private _onRender = (): React.ReactNode => {
        return this.props.onRenderSearchField;
    }

    private getFarItems = (): IContextualMenuItem[] => {
        return [
            {
                key: 'views',
                name: 'Views',
                subMenuProps: {
                    items: [
                        {
                            key: 'allItems',
                            name: 'All Items'
                        }
                    ]
                }
            }
        ];
    }

    public render(): React.ReactElement<IButtonsBarProps> {
        return (
            <div>
                <CommandBar style={{ overflow: 'visible' }} items={this.getItems()} farItems={this.getFarItems()} />
            </div>
        );
    }
}

export default ButtonsBar;