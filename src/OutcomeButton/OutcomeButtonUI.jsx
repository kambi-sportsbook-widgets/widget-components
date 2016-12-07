import React, { Component } from 'react';

/**
 * Renders the UI of an outcome button, no
 * special handling logic.
 * @memberof widget-components
 */
class OutcomeButtonUI extends Component {
   get outcomeOdds() {
      return (
         <div className='KambiWidget-outcome__odds-wrapper'>
            <span className='KambiWidget-outcome__odds'>
               {this.props.odds}
            </span>
         </div>
      )
   }

   render() {
      const { label, odds, suspended, selected, onClick } = this.props;
      let buttonCssClasses = 'l-flex-1 kw-link KambiWidget-outcome';
      if (suspended) {
         buttonCssClasses += ' KambiWidget-outcome--suspended';
      } else if (selected) {
         buttonCssClasses += ' KambiWidget-outcome--selected';
      }
      if (label == null) {
         return (
            <button
               type='button'
               role='button'
               className={buttonCssClasses}
               disabled={suspended}
               onClick={onClick}
            >
               <div className='l-flexbox l-pack-center'>
                  { this.outcomeOdds }
               </div>
            </button>
         );
      } else {
         return (
            <button
               type='button'
               role='button'
               className={buttonCssClasses}
               disabled={suspended}
               onClick={onClick}
            >
               <div className='KambiWidget-outcome__flexwrap'>
                  <div className='KambiWidget-outcome__label-wrapper'>
                     <span className='KambiWidget-outcome__label'>
                        {label}
                     </span>
                     <span className='KambiWidget-outcome__line' />
                  </div>
                  { this.outcomeOdds }
               </div>
            </button>
         );
      }
   }
}

/**
 * @property [label=null] {string?} if not defined centralizes the odds in the button, if defined uses this as the label in the button
 * @property odds {string} The odds to show in the button
 * @property [suspended=false] {boolean} If true the button is greyed out
 * @property selected {boolean} If true the button is selected, false otherwise.
 * @property onClick {Function} Callback for when the button is clicked
 */
OutcomeButtonUI.propTypes = {
   label: React.PropTypes.string,
   odds: React.PropTypes.string.isRequired,
   suspended: React.PropTypes.bool,
   selected: React.PropTypes.bool.isRequired,
   onClick: React.PropTypes.func
};

OutcomeButtonUI.defaultProps = {
   label: null,
   suspended: false
};

export default OutcomeButtonUI;
