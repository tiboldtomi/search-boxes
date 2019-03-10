import { VisibilityProperty } from "csstype";

export interface ISimpleSearchFieldState {
    placeHolder: string;
    searchIconVisibility: VisibilityProperty;
    cancelIconVisibility: VisibilityProperty;
    text: string;
}