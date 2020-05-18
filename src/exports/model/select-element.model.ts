import * as React from 'react';

export class SelectElement {
  value: any;
  label: string | React.ReactElement;
  search?: string;

  constructor(data: any | SelectElement) {
    this.value = null;
    this.label = "";
    this.search = "";

    Object.assign(this, data);
  }
}