import * as React from 'react';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { SelectElement } from '../../exports/model/select-element.model';

interface MultiProps {
  className?: string;
  options: Array<SelectElement>;
  onChange: Function;
  placeholder?: string;
  noOptionsMessage?: string;
  defaultValue?: Array<any>;
  isSearchable?: boolean;
  value?: any;
}

interface SingleProps {
  className?: string;
  options: Array<SelectElement>;
  onChange: Function;
  placeholder?: string;
  noOptionsMessage?: string;
  defaultValue?: any;
  isSearchable?: boolean;
  value?: any;
}

export const MultiSelectReactive = ({ className, options, onChange, placeholder, noOptionsMessage, defaultValue, isSearchable, value }: MultiProps) => {
  return (
    <Select 
      classNamePrefix='select'
      className={ className }
      components={ makeAnimated() }
      defaultValue={ defaultValue } 
      options={ options }
      onChange={ (selectedData: any) => onChange(selectedData) }
      noOptionsMessage={ () => noOptionsMessage ? noOptionsMessage : '' }
      placeholder={ placeholder }
      isSearchable={ isSearchable }
      value={ value }
      getOptionLabel={ (option: any) => option.label }
      filterOption={
        ({ data }: any, searchText: any) => {
        
          if (data.search) {
            return data.search.toLowerCase().includes(searchText.toLowerCase());
          }
       
          if (typeof data.label === 'string') {
            return data.label.toLowerCase().includes(searchText.toLowerCase());
          }

          return true;
        }
      }
      isMulti
    />
  );
} 

export const SingleSelectReactive = ({ className, options, onChange, placeholder, noOptionsMessage, defaultValue, isSearchable, value }: SingleProps) => {
  return (
    <Select
      classNamePrefix='select'
      className={ className }
      defaultValue={ defaultValue } 
      options={ options }
      onChange={ (selectedData: any) => onChange(selectedData) }
      noOptionsMessage={ () => noOptionsMessage ? noOptionsMessage : '' }
      placeholder={ placeholder }
      isSearchable={ isSearchable }
      value={ value }
      getOptionLabel={ (option: any) => option.label }
      filterOption={
        ({ data }: any, searchText: any) => {
        
          if (data.search) {
            return data.search.toLowerCase().includes(searchText.toLowerCase());
          }
       
          if (typeof data.label === 'string') {
            return data.label.toLowerCase().includes(searchText.toLowerCase());
          }

          return true;
        }
      }
    />
  );
} 