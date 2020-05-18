import * as React from 'react';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { SelectElement } from '../../exports/model/select-element.model';

interface MultiProps {
  id?: string;
  className?: string;
  classNamePrefix?: string;
  options: Array<SelectElement>;
  onChange: Function;
  placeholder?: string;
  noOptionsMessage?: string;
  defaultValue?: Array<any>;
  isSearchable?: boolean;
  value?: any;
  isDisabled?: boolean;
  onBlur?: Function;
}

interface SingleProps {
  id?: string;
  className?: string;
  classNamePrefix?: string;
  options: Array<SelectElement>;
  onChange: Function;
  placeholder?: string;
  noOptionsMessage?: string;
  defaultValue?: any;
  isSearchable?: boolean;
  value?: any;
  isDisabled?: boolean;
  onBlur?: Function;
}

export const MultiSelectReactive = ({ 
  id, 
  className,
  classNamePrefix,
  options, 
  onChange, 
  placeholder, 
  noOptionsMessage, 
  defaultValue, 
  isSearchable, 
  value, 
  isDisabled, 
  onBlur 
}: MultiProps) => {
  return (
    <Select
      id={ id && id }
      classNamePrefix={ classNamePrefix }
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
      isDisabled={ isDisabled }
      isMulti
      onBlur={ () => onBlur && onBlur() }
    />
  );
} 

export const SingleSelectReactive = ({ 
  id, 
  className,
  classNamePrefix,
  options, 
  onChange, 
  placeholder, 
  noOptionsMessage, 
  defaultValue, 
  isSearchable, 
  value, 
  isDisabled, 
  onBlur 
}: SingleProps) => {
  return (
    <Select
      id={ id && id }
      classNamePrefix={ classNamePrefix }
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
      isDisabled={ isDisabled }
      onBlur={ () => onBlur && onBlur() }
    />
  );
} 