import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div id='dashboard-blog'>
    <div className='content-container'>
      <h1>Blog</h1>
      <h2>Hello World -- An Introduction</h2>
      <p id='blog-snippet'>Hello! This first post is aimed to (briefly) introduce myself and my goals here. I have always enjoyed learning and problem solving.</p>
      <span>...</span>
      {/*<p> Before the year 2000, when I was still in high school I started writing some HTML and just having fun seeing what could be done. I continued through university all the way beyond a PhD, refining my HTML and CSS as needed, while picking up Java, C, Matlab and Python along the way. Afterwards I started looking into Javascript more involved web development, sooner after picking up some jQuery and React/Redux, and here we are.</p>
      <p>I don't exactly have a particular aim with this blog, just writing about things I find interesting -- both while learning the basics and as I come across new things in the future -- things I found difficult, or things I feel are important. I enjoy teaching as much as learning, so my goal is roughly to help others learn about web and software development.</p>
      <p>Outside of the coding world I have an adorable greyhound, am an avid (amateur!) triathlete and enjoy reading about nutrition and its connections to general health, not just sporting performance.</p>*/}
      <div id='link-to-blog'>
        <Link to='/blog'>More Blog Posts...</Link>
      </div>
    </div>
  </div>
);