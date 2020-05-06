import * as React from 'react';

interface Props { 
  id: string;
  input: any;
  label: string;
  type: string;
  className: string;
  onKeyUp: Function;
  disabled: string;
  meta: any;
}

interface State {
  checked: boolean;
}

export class RenderCheckBoxReactive extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      checked: props.input.value ? props.input.value : false
    }
  }
  
  render () {
    const {
      id,
      input,
      label,
      className,
      disabled,
      meta: {
        error,
        warning,
        touched
      }
    } = this.props;
    const { checked } = this.state;

    const errorClass = touched && error ? 'error' : '';

    return (
      <div className="mb-3">
        <div>
          <span className={ `container-check-div-reactive ${className}` }>
            <label className="container-check-reactive">
              <input             
                id={ id }
                className={ `${className} ${errorClass}` }
                { ...input }
                type="checkbox"
                onClick={ () => { input.onChange(!checked); this.setState({ checked: !checked }); } }
                disabled={ disabled }
                checked={ checked } 
              />

              <span className={ `checkmark-reactive ${ checked && 'checkmark-reactive-select' } ${errorClass}` } />

              <label 
                className="checkmark-reactive-label" 
                onClick={ () => { input.onChange(!checked); this.setState({ checked: !checked }); } }
              >
                { label }
              </label>
            </label>
          </span>

          {
            touched &&
              ((error && <div className="text-danger">{ error }</div>) ||
              (warning && <div>{ warning }</div>))
          }
        </div>
      </div>
    );
  }
}