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
                <p className="faq__contact-title">You might have questions or something along the line "what happens when"... <br/> Let's have a chat.</p>
                <div className="faq__contact-info-container">
                  <p className="faq__contact-telephone">{_.get(section, 'phone', null)}</p>
                  <p className="faq__contact-email">{_.get(section, 'email', null)}</p>
                  <div className="faq__seperator" />
                  {_.get(section, 'addressURL', null) && (
                  <Link className="faq__map-link link link--filled link--reversed" to={_.get(section, 'addressURL', null)}>
                    Calendly Call Planner
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" fill="white"/></svg>
                  </Link>
                  )} <div/>
                  <br/>
                  <p>
                  {_.get(section, 'mapUrl', null) && (
                  <Link className="faq__map-link link link--filled link--reversed" to={_.get(section, 'mapUrl', null)}>
                    Send a WhatsApp
                    <svg width="40" height="40" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="white"/>
                    </svg>
                  </Link>
                  )} 
                  </p>
                </div>
              </div>
            </section>
        );
    }
}
