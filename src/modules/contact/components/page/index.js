import React, { Component } from "react";
import {Helmet} from "react-helmet";
import Layout from 'shared/layout';
import Icon from '../icon/index'
import Form from '../form/index'
import styles from "./style.module.css";

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Contact Us</title>
        </Helmet>
        <div className='text-center modal-dialog-centered px-3 py-2' style={{backgroundColor: '#0a111a'}}> {/* var(--layout-scondary) is too bad at dark mode! */}
          <section className={`row container px-1 py-4 mx-auto rounded`} style={{backgroundColor: 'var(--layout-primary)',fontFamily: 'var(--heading-font-family)'}}>
            <Icon />
            <div className={`mr-3 ${styles['vertical-line']}`} />
            <Form />
          </section>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;