import React, { ReactNode } from 'react';
import { Theme } from '../../../models/Theme';

type common = {
  classString?: string;
  color?: string;
  dir?: string;
  fontSize?: string;
  padding?: boolean;
  theme?: Theme;
};

export interface Title extends common {
  active?: boolean;
  padding?: boolean;
  title?: string;
  url?: string;
}

export interface Content extends common {
  content?: string | ReactNode;
}

export type ExpandButtonModel = {
  expanded?: boolean;
  onExpand?: (ev: React.PointerEvent | React.KeyboardEvent) => void;
  textOverlay?: boolean;
} & Pick<common, 'theme'>;

export type ShowHideTextButtonModel = {
  onToggle: (ev: React.PointerEvent | React.KeyboardEvent) => void;
  show?: boolean;
  textOverlay?: boolean;
} & Pick<common, 'theme'>;

export type DetailsTextMemoModel = {
  expand?: boolean;
  height?: number;
  onRender?: (height?: number) => void;
  show?: boolean;
  text: ReactNode;
  textOverlay?: boolean;
  theme?: Theme;
};

export type TextContentMemoModel = Title &
  Content &
  ExpandButtonModel &
  ShowHideTextButtonModel &
  DetailsTextMemoModel;

export type CardMediaHeaderMemoModel = Title & Content;
