import React from 'react';
import _ from 'lodash';

import {withPrefix, Link} from '../utils';

export default class ContactSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row content__row--full-width content__row--mb-0  faq__contact"  data-id={_.get(section, 'section_id', null)}>
              {_.get(section, 'image', null) && (<img src={withPrefix(_.get(section, 'image', null))} alt="" className="faq__contact-image"/>)}
              <div className="faq__contact-text-container">
                  <h4 className="faq__contact-title">Contact</h4>
                <p className="faq__contact-subtitle">Let's have a chat.</p>
                <br></br><div className="faq__contact-info-container">
                  <p className="faq__contact-telephone">{_.get(section, 'phone', null)}</p>
                  <p className="faq__contact-email">{_.get(section, 'email', null)}</p>
                  <div className="faq__seperator" />
                  {_.get(section, 'addressURL', null) && (
                  <Link className="faq__map-link link link--filled link--reversed" to={_.get(section, 'addressURL', null)}>
                    Call Planner
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" fill="white"/></svg>
                  </Link>
                  )}
                  <br/>
                  <div className="faq__seperator" />
                  {_.get(section, 'mapUrl', null) && (
                  //<Link className="faq__map-link link link--filled link--reversed" to={_.get(section, 'mapUrl', null)}>
                    Grab an appointment
                  </Link> 
                  )} 
                  <div/>
                </div>
             </div>
            </section>
        );
    }
}
