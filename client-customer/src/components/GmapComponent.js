import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">MY LOCATION</h2>
        <iframe title='gmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.428434295478!2d106.6596259747258!3d10.854982289298594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d6ef18f74f%3A0x93c51976730751f2!2zQsOyIGLhu50ga8Oo!5e0!3m2!1sen!2s!4v1700120294733!5m2!1sen!2s" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}
export default Gmap;