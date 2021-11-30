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
                  
                  <br/>
                  <div className="faq__seperator" />
                  {_.get(section, 'mapUrl', null) && (
                  <Link className="faq__map-link link link--filled link--reversed" to={_.get(section, 'mapUrl', null)}>
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
